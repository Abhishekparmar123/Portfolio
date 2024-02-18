import { bounce, bounceInRight, bounceInDown, fadeInLeft, flash, jello, pulse, swing } from 'react-animations'
import Radium from 'radium'

const styles = {
    bounce: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    bounceInRight: {
        animation: 'x 3s',
        animationName: Radium.keyframes(bounceInRight, 'bounce')
    },
    bounceInDown: {
        animation: 'x 3s',
        animationName: Radium.keyframes(bounceInDown, 'bounce')
    },
    fadeInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInLeft, 'fade')
    },
    flash: {
        animation: 'x 2s',
        animationName: Radium.keyframes(flash, 'flash')
    },
    jello: {
        animation: 'x 2s',
        animationName: Radium.keyframes(jello, 'jello')
    },
    pulse: {
        animation: 'x 2s',
        animationName: Radium.keyframes(pulse, 'pulse')
    },
    swing: {
        animation: 'x 2s',
        animationName: Radium.keyframes(swing, 'swing')
    }
}

export default styles;