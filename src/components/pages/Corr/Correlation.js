import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Correlation.css';
import dorianImage from '../../../assets/dorian201908-9.png';
import slrImage from '../../../assets/SLR_Grand_Bahama_Island.png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const Correlation = () => {
  return (
    <div class='container' style={{marginTop:'4rem'}}>
            <div className='row'>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-4">
                    <Image src={dorianImage} class="img-fluid rounded-start dorian" style={{width:'317px'}} alt=""/>
                  </div>
                  <div class="col-8">
                    <div class="card-body" style={{paddingLeft:'90px', paddingRight:'50px'}}>
                      <h5 class="card-title"><b>Post Event</b></h5>
                      <h3 class="card-sub-title"><b>Graph Prediction</b></h3>
                      <hr></hr>
                      <p class="card-text"><small>The objective of this phase was to predict the possible dates of hurricanes in future years and perhaps provide emergency responders with a heads up before disaster strikes. To achieve this objective, we utilized time series data from the Climate Data Store to predict sea level change in the Bahamas region. 
The dataset used was the ‘Global sea level change indicators from 1950 to 2050 derived from reanalysis and high resolution CMIP6 climate projections’ with a post-processing toolbox written in Python used to derive various statistics from the time series. The documentation indicates that indicators for tidal levels, extreme values, frequency distribution, and changes from the historical to future period are provided with actual values. Additionally, it highlights that ensemble statistics are provided, which are derived from the indicators of the five climate models. 




The data was in NetCDF format therefore we used a python script in Jupyter Notebooks to create a time series line graph from 2019 to 2030 in order to visualize the rate of change per year.</small></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='row'>
              <Card style={{ width: '822px', marginLeft: "100px", marginBottom: "20px" }}>
                <Card.Img variant="top" src={slrImage} />
                <Card.Body>
                  <Card.Text>
                  The correlation site shows the simulation graph for the sea level change from 2019 to 2030. This is to act as a post-disaster simulation that would aid emergency responders 
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
    </div>
  )
}

export default Correlation;
