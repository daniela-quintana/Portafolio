'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _default2 = _interopDefault(require('ramda/src/range'));
var _default5 = _interopDefault(require('ramda/src/map'));
var _default4 = _interopDefault(require('ramda/src/addIndex'));
var _default3 = _interopDefault(require('ramda/src/reduce'));
var _default2$1 = _interopDefault(require('ramda/src/concat'));
var _default = _interopDefault(require('ramda/src/pipe'));
var _default14 = _interopDefault(require('ramda/src/flatten'));
var _default13 = _interopDefault(require('ramda/src/subtract'));
var _default12 = _interopDefault(require('ramda/src/juxt'));
var _default11 = _interopDefault(require('ramda/src/lt'));
var _default10 = _interopDefault(require('ramda/src/findIndex'));
var _default9 = _interopDefault(require('ramda/src/add'));
var _default8 = _interopDefault(require('ramda/src/scan'));
var _default6 = _interopDefault(require('ramda/src/__'));
var _default6$1 = _interopDefault(require('ramda/src/divide'));
var _default5$1 = _interopDefault(require('ramda/src/repeat'));
var _default4$1 = _interopDefault(require('ramda/src/always'));
var _default15 = _interopDefault(require('ramda/src/omit'));
var _default14$1 = _interopDefault(require('ramda/src/drop'));
var _default13$1 = _interopDefault(require('ramda/src/isNil'));
var _default12$1 = _interopDefault(require('ramda/src/max'));
var _default11$1 = _interopDefault(require('ramda/src/is'));
var _default10$1 = _interopDefault(require('ramda/src/equals'));
var _default9$1 = _interopDefault(require('ramda/src/length'));
var _default7 = _interopDefault(require('ramda/src/pathOr'));
var _default5$2 = _interopDefault(require('ramda/src/prop'));
var _default4$2 = _interopDefault(require('ramda/src/identity'));
var _default3$1 = _interopDefault(require('ramda/src/nth'));
var _default2$2 = _interopDefault(require('ramda/src/not'));
var _default$1 = _interopDefault(require('ramda/src/head'));
var React = require('react');
var setObservableConfig = _interopDefault(require('recompose/setObservableConfig'));
var createEventHandler = _interopDefault(require('recompose/createEventHandler'));
var compose = _interopDefault(require('recompose/compose'));
var mapPropsStream = _interopDefault(require('recompose/mapPropsStream'));
var withHandlers = _interopDefault(require('recompose/withHandlers'));
var withPropsOnChange = _interopDefault(require('recompose/withPropsOnChange'));
var lifecycle = _interopDefault(require('recompose/lifecycle'));
var operators = require('rxjs/operators');
var rxjs = require('rxjs');
var PropTypes = _interopDefault(require('prop-types'));

var NO_BREAK_SPACE = 160;

var PRINTABLE_CHAR_CODES = _default2(33, 127);
var NO_BREAK_SPACE_CHAR_CODE = NO_BREAK_SPACE;

var noBreakSpace = String.fromCharCode(NO_BREAK_SPACE_CHAR_CODE);

var randomChar = function randomChar() {
  return _default(_default2$1([NO_BREAK_SPACE_CHAR_CODE]), function (array) {
    return array[Math.floor(Math.random() * array.length)];
  }, String.fromCharCode)(PRINTABLE_CHAR_CODES);
};

var array2String = _default3(_default2$1, '');

var mixcramble = function mixcramble(_) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var noBreakSpaceFlag = arguments[3];
  return _default(_default4(_default5)(function (d, i) {
    return d === 0 ? randomChar() : text[i] || (noBreakSpaceFlag ? noBreakSpace : '');
  }), array2String)(mask);
};

var descramble = function descramble() {
  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var noBreakSpaceFlag = arguments[3];
  return _default(_default4(_default5)(function (d, i) {
    return d === 0 ? result[i] || (noBreakSpaceFlag ? noBreakSpace : '') : text[i] || (noBreakSpaceFlag ? noBreakSpace : '');
  }), array2String)(mask);
};

var scramble = function scramble() {
  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var noBreakSpaceFlag = arguments[3];
  return _default(_default4(_default5)(function (d, i) {
    return d === 0 ? result[i] || (noBreakSpaceFlag ? noBreakSpace : '') : randomChar();
  }), array2String)(mask);
};

var getRandomMask = _default(_default2(0), _default5(_default(Math.random, Math.round)));

var getFullMask = _default(_default2(0), _default5(_default4$1(1)));

var getForwardMask = function getForwardMask(length) {
  var roll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : length;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : roll;

  if (count <= 1) {
    return _default5$1(1, length);
  }

  var base = _default(_default6$1, Math.floor, _default5$1(_default6, length))(roll, length);

  for (var i = 0; i < roll % length; i++) {
    base[i]++;
  }

  return _default(_default8(_default9, 0), _default10(_default11(roll - count)), _default12([_default5$1(1), _default(_default13(length), _default5$1(0))]), _default14)(base);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var config = {
  fromESObservable: rxjs.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
};

setObservableConfig(config);

var omitProps = ['autoStart', 'bindMethod', 'mouseEnterTrigger', 'mouseLeaveTrigger', 'noBreakSpace', 'pause', 'preScramble', 'reset', 'restart', 'speed', 'start', 'steps', 'text'];

var speed = {
  fast: 25,
  medium: 50,
  slow: 100
};

var getPauserStream = function getPauserStream(autoStart$, isQueueEmpty$, pause$, reset$, start$) {
  return rxjs.merge(rxjs.combineLatest(autoStart$, reset$.pipe(operators.startWith(''))).pipe(operators.map(_default$1), operators.map(_default2$2)), pause$.pipe(operators.mapTo(true)), start$.pipe(operators.withLatestFrom(isQueueEmpty$), operators.map(_default3$1(1))), isQueueEmpty$.pipe(operators.filter(_default4$2)));
};

var getPropStream = function getPropStream(props$, key) {
  return props$.pipe(operators.pluck(key), operators.distinctUntilChanged());
};

var Scramble = compose(mapPropsStream(function (props$) {
  var _createEventHandler = createEventHandler(),
      start = _createEventHandler.handler,
      start$ = _createEventHandler.stream;

  var _createEventHandler2 = createEventHandler(),
      pause = _createEventHandler2.handler,
      pause$ = _createEventHandler2.stream;

  var _createEventHandler3 = createEventHandler(),
      reset = _createEventHandler3.handler,
      reset$ = _createEventHandler3.stream;

  var queue$ = new rxjs.Subject();
  var counter$ = new rxjs.Subject();
  var result$ = new rxjs.Subject();

  var autoStart$ = getPropStream(props$, 'autoStart');
  var preScramble$ = getPropStream(props$, 'preScramble');
  var noBreakSpace$ = getPropStream(props$, 'noBreakSpace');

  var initText$ = getPropStream(props$, 'text').pipe(operators.share());
  var steps$ = getPropStream(props$, 'steps').pipe(operators.share());
  var period$ = getPropStream(props$, 'speed').pipe(operators.map(_default5$2(_default6, speed)));

  var currentStep$ = queue$.pipe(operators.map(_default7({}, [0])), operators.share());

  var isQueueEmpty$ = queue$.pipe(operators.map(_default(_default9$1, _default10$1(0))), operators.share());

  var text$ = rxjs.merge(currentStep$.pipe(operators.pluck('text'), operators.filter(_default11$1(String))), rxjs.combineLatest(initText$, reset$.pipe(operators.startWith(''))).pipe(operators.map(_default$1))).pipe(operators.distinctUntilChanged());

  var pauser$ = getPauserStream(autoStart$, isQueueEmpty$, pause$, reset$, start$);

  var processor$ = currentStep$.pipe(operators.map(function (_ref) {
    var action = _ref.action,
        type = _ref.type;

    switch (action) {
      case '+':
        return scramble;
      case '-':
        return type === 'forward' ? mixcramble : descramble;
      default:
        return _default4$2;
    }
  }));

  var mask$ = rxjs.combineLatest(currentStep$, counter$, result$, text$).pipe(operators.map(function (_ref2) {
    var _ref3 = slicedToArray(_ref2, 4),
        _ref3$ = _ref3[0],
        type = _ref3$.type,
        roll = _ref3$.roll,
        counter = _ref3[1],
        result = _ref3[2],
        text = _ref3[3];

    var length = _default12$1(result.length, text.length);

    switch (type) {
      case 'random':
        return getRandomMask(length);
      case 'forward':
        return getForwardMask(length, roll, counter);
      case 'all':
      default:
        return getFullMask(length);
    }
  }));

  var pausableTimer$ = rxjs.combineLatest(pauser$, period$).pipe(operators.switchMap(function (_ref4) {
    var _ref5 = slicedToArray(_ref4, 2),
        paused = _ref5[0],
        period = _ref5[1];

    return paused ? rxjs.empty() : // startWith 0 to send event immediately
    rxjs.interval(period).pipe(operators.startWith(0));
  }));

  rxjs.merge(rxjs.combineLatest(initText$, preScramble$, reset$.pipe(operators.startWith(''))).pipe(operators.map(function (_ref6) {
    var _ref7 = slicedToArray(_ref6, 2),
        text = _ref7[0],
        preScramble = _ref7[1];

    return preScramble ? scramble(null, text, getFullMask(text.length)) : text;
  })), pausableTimer$.pipe(operators.withLatestFrom(result$, text$, processor$, mask$, noBreakSpace$), operators.map(function (_ref8) {
    var _ref9 = slicedToArray(_ref8, 6),
        result = _ref9[1],
        text = _ref9[2],
        processor = _ref9[3],
        mask = _ref9[4],
        noBreakSpace = _ref9[5];

    return processor(result, text, mask, noBreakSpace);
  }))).subscribe(result$);

  rxjs.merge(currentStep$.pipe(operators.pluck('roll')), pausableTimer$.pipe(operators.withLatestFrom(currentStep$, result$, text$, counter$), operators.map(function (_ref10) {
    var _ref11 = slicedToArray(_ref10, 5),
        _ref11$ = _ref11[1],
        type = _ref11$.type,
        action = _ref11$.action,
        result = _ref11[2],
        text = _ref11[3],
        counter = _ref11[4];

    if (!_default13$1(counter)) {
      return counter - 1;
    }

    if (type === 'forward') {
      return _default12$1(result.length, text.length) - 1;
    }

    if (action === '-' && text === result) {
      return 0;
    }

    // endless loop when counter is undefined
    return;
  }))).subscribe(counter$);

  rxjs.merge(steps$, reset$.pipe(operators.withLatestFrom(steps$), operators.map(_default3$1(1))), counter$.pipe(operators.filter(_default10$1(0)), operators.withLatestFrom(queue$), operators.map(_default3$1(1)), operators.map(_default14$1(1)))).subscribe(queue$);

  return rxjs.combineLatest(props$, result$).pipe(operators.map(function (_ref12) {
    var _ref13 = slicedToArray(_ref12, 2),
        props = _ref13[0],
        result = _ref13[1];

    return _extends({}, props, {
      result: result,
      start: start,
      pause: pause,
      reset: reset
    });
  }));
}), withPropsOnChange(['start', 'reset'], function (props) {
  return {
    restart: function restart() {
      props.reset();
      props.start();
    }
  };
}), lifecycle({
  componentDidMount: function componentDidMount() {
    var bindMethod = this.props.bindMethod;


    if (bindMethod) {
      bindMethod({
        start: this.props.start,
        pause: this.props.pause,
        reset: this.props.reset,
        restart: this.props.restart
      });
    }
  }
}), withHandlers({
  onMouseEnter: function onMouseEnter(props) {
    return function () {
      var onMouseEnter = props.onMouseEnter,
          mouseEnterTrigger = props.mouseEnterTrigger;

      var action = props[mouseEnterTrigger];

      _default11$1(Function, onMouseEnter) && onMouseEnter();
      _default11$1(Function, action) && action();
    };
  },
  onMouseLeave: function onMouseLeave(props) {
    return function () {
      var onMouseLeave = props.onMouseLeave,
          mouseLeaveTrigger = props.mouseLeaveTrigger;

      var action = props[mouseLeaveTrigger];

      _default11$1(Function, onMouseLeave) && onMouseLeave();
      _default11$1(Function, action) && action();
    };
  }
}))(function (_ref14) {
  var _ref14$result = _ref14.result,
      result = _ref14$result === undefined ? '' : _ref14$result,
      otherProps = objectWithoutProperties(_ref14, ['result']);
  return React.createElement(
    'span',
    _default15(omitProps, otherProps),
    result
  );
});

Scramble.displayName = 'Scramble';

Scramble.propTypes = {
  autoStart: PropTypes.bool,
  bindMethod: PropTypes.func,
  mouseEnterTrigger: PropTypes.oneOf(['start', 'pause', 'reset', 'restart']),
  mouseLeaveTrigger: PropTypes.oneOf(['start', 'pause', 'reset', 'restart']),
  noBreakSpace: PropTypes.bool,
  speed: PropTypes.string,
  steps: PropTypes.array,
  text: PropTypes.string
};

Scramble.defaultProps = {
  autoStart: false,
  preScramble: false,
  steps: [],
  speed: 'medium',
  noBreakSpace: true
};

var getNoBreakSpaces = _default(_default5$1(String.fromCharCode(NO_BREAK_SPACE)), _default3(_default2$1, ''));

exports.default = Scramble;
exports.getNoBreakSpaces = getNoBreakSpaces;
