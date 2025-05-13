import React from 'react'
import ImagemDeAsset1 from '../assets/asset_1.png'
import ImagemDeAsset2 from '../assets/asset_2.jpg'
import ImagemDeAsset3 from '../assets/asset_3.jpg'

const GaleriaImagens = () => {
    return (
        <div>
            <img src={ImagemDeAsset1} alt="" />
            <img src={ImagemDeAsset2} alt="" />
            <img src={ImagemDeAsset3} alt="" />

        </div>
    )
}

export default GaleriaImagens