import React from 'react'
import Particles from 'react-particles-js'
import particleConfig from './config/particle-config.js'

function ParticleBackground() {
    return (
        <Particles params={particleConfig}></Particles>
    )
}

export default ParticleBackground
