import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const BaseMap = () => {
    // javascript
    return (
        <>
            <LayersControl.BaseLayer name="Satellite image">
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
            </LayersControl.BaseLayer>


            <LayersControl.BaseLayer name="openstreetmap" checked>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>

        </>

    )
}

export default BaseMap