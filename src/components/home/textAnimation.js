import React from 'react'
import {TypeAnimation} from "react-type-animation";

function TextAnimation(props) {
    return (
        <TypeAnimation
          sequence={props.list}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="has-text-danger"
          speed={250}
        />
      );
}

export default TextAnimation