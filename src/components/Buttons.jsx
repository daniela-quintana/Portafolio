import React, { Component } from 'react'
import './Buttons.css'
import $ from 'jquery'

class Buttons extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount = () => {
        $(function() {  
            $('.btn-6')
              .on('mouseenter', function(e) {
                      var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                      $(this).find('span').css({top:relY, left:relX})
              })
              .on('mouseout', function(e) {
                      var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                  $(this).find('span').css({top:relY, left:relX})
              });
            // $('[href=#]').click(function(){return false});
          });
    }
          
    render() {
        return (
        // <button href={ this.props.href } className = { this.props.btnClass } > { this.props.name } </button>
        <a class="btn-0" href={ this.props.href } className = { this.props.btnClass } > { this.props.name }</a>
        )
    }
}

export default Buttons;