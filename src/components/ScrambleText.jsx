import React from 'react'
import Scramble from 'react-scramble'
import  '../components/ScrambleText.css'

class ScrambleText extends React.Component {
  render() {
    return (
    <div className="scrambleText">
      <Scramble
        autoStart
        noBreakSpace
        mouseLeaveTrigger="restart"
        mouseEnterTrigger="pause"
        text="FRONT-END DEVELOPER"
        steps={[
          {
            roll: 40,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      />
    </div>
    )
  }
}

export default ScrambleText;