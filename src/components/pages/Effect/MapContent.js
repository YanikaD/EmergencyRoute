import React, { useRef, useState } from 'react'
import {MapContainer,LayersControl,LayerGroup} from 'react-leaflet'
import BaseMap from '../../BaseMap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import WMSLayer from './layers/WMSLayer.js'
// import RoutingMachine from './layers/RoutingMachine';
import Boundary from './layers/Boundary';
import Flood from './layers/Flood';
import Density from './layers/Tiff';
import Building from './layers/Building';
import Road from './layers/Road';
import RoutingMachine from './layers/RoutingMachine';
import img1 from '../../../assets/MicrosoftTeams-image (1).png';
import img2 from '../../../assets/MicrosoftTeams-image.png';
import legend from '../../../assets/Screenshot (775).png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const MapContent = () => {
    // javascript
    const mapRef = useRef()
    const [position, setPosition] = useState(null);

    const handleClick = (e) => {
        setPosition(e.latlng);
    };
    return (
        <div class='container' style={{marginTop:'4rem'}}>
            <div className='row'>
                {/* <div className='col-10'> */}
                    <MapContainer
                        ref={mapRef}
                        style={{ width: '100%', height: '85vh' }}
                        center={[26.5594, -78.7207]}
                        zoom={8}
                    >
                     

                        <LayersControl position='topright'>
                            <BaseMap />
                            

                            <LayersControl.Overlay name="Boundary" checked >
                                <LayerGroup>
                                    <Boundary />
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Density" checked >
                                <LayerGroup>
                                    <Density />
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Road" >
                                <Road />
                            </LayersControl.Overlay>  

                            <LayersControl.Overlay name="Flood" checked>
                                <Flood />
                            </LayersControl.Overlay>  

                            <LayersControl.Overlay name="Building" >
                                <Building />
                            </LayersControl.Overlay>  

                        </LayersControl>
                        
                       
                        <RoutingMachine />
                
                 
                        
                    </MapContainer>
                    <div className='row' style={{marginTop:'0.5rem',marginBottom:'1rem' }}>
                        <div className='col-5'>
                            <Image src={img2} class="img-fluid rounded-start" style={{width:'390px',height:'215.833px',paddingRight:'10px'}} alt=""/>         
                        </div>      
                        <div className='col-5'>
                            <Image src={img1} class="img-fluid rounded-start" style={{width:'390px', height:'215.833px',paddingLeft:'10px'}} alt=""/>         
                        </div>
                        <div className='col-2'>
                            <Image src={legend} class="img-fluid rounded-start" style={{height: '150px', marginTop:'62px'}} alt=""/>         
                        </div>
                        <Card style={{marginTop:'0.7rem', width:'1000px', marginLeft:'12px'}}>
                            <Card.Body><div className='sum'>From the results, we can see that most of the flood areas are in the middle of the island, and the residential areas are located in the southwest of the island.However, there are some building areas around that are prone to get damaged by floods.
                        In order to mitigate the flood-prone areas, we try to find a route that avoids the floods from this area to a shelter for evacuating people. This is a scenario that we select the area where has a high density of buildings and the destination is the shelter "Calvary Temple". Calvary temple is an official emergency shelter living area / 1.5 square meters.
                        Let's discuss land use and land cover areas in the island. As you see the flood mask (Black extent) is spread over the middle of the island which is the area of shrubs (yellow) and crops(orange), so the vegetation areas tend to have the most impact from this disaster.
                        As we mentioned previously, the southwest areas are prone to affected by floods and we can see that this area is surrounded by built-up areas and flooded vegetation(purple), therefore in this site may need some land use control or policies. For the future development may regulate land use and enforce building codes for areas vulnerable to the effects of tropical cyclones.
                        </div></Card.Body>
                        </Card>
                    </div>
                    
                    
                    <div> </div>
            </div>
        </div>
    )
}

export default MapContent