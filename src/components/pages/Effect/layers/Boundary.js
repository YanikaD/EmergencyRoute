import React from 'react'
import { WMSTileLayer } from 'react-leaflet'

const Boundary = () => {
    var url = "http://localhost:3872/geoserver/boundary/wms";
    return (
        <>
            {/* <WMSTileLayer
                url='http://localhost:8080/geoserver/map50K/wms'
                layers='map50K:Changwat'
                format='image/png'
                transparent={true}
            /> */}
            <WMSTileLayer
                url={url}
                layers='boundary:boundary'
                format="image/png"
                transparent={true}
                version="1.1.0"
                onError={(error, tile) => {
                    console.log("Tile error:", error, tile);
                }}
            />
        </>
    )
}

export default Boundary