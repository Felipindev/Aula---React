import  React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Hr = () => {
    return(
        <LinearGradient colors={['red', 'black']} style={{height: 4, width:'100%', margin: 2}}></LinearGradient>
    )
}

export default Hr