import React from 'react';
import { Link } from 'react-router-dom';

function Panel({ header, body, panelStyle, buttonStyle, buttonColour }) {
  const changeButtonColor = (event) => {
    event.target.style.backgroundColor = buttonColour;
  };

  const resetButtonColor = (event) => {
    event.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <aside className="panel" style={panelStyle}>
      <h2 className="panel-header">{header}</h2>
      <p className="panel-info">{body}</p>
      <div className='button-container d-flex justify-content-center'>
        <Link to="/eff" >
          <button
            className="panel-button"
            style={buttonStyle}
            onMouseEnter={changeButtonColor}
            onMouseLeave={resetButtonColor}
          >
            During Disaster
          </button>
        </Link>
        <Link to="/corr">
          <button
            className="panel-button"
            style={buttonStyle}
            onMouseEnter={changeButtonColor}
            onMouseLeave={resetButtonColor}
          >
            Post Disaster
          </button>
        </Link>
        {/* <Link to="/pre">
          <button
            className="panel-button"
            style={buttonStyle}
            onMouseEnter={changeButtonColor}
            onMouseLeave={resetButtonColor}
          >
            Pre-Event
          </button>
        </Link> */}
      </div>
      <div className='col'>
            <div className='row'>
                <Link to="https://storymaps.arcgis.com/stories/f819f3563aef4cad8cfae7072eed0d07">Story Map</Link>
            </div>
        </div>
      <div className='col created'>
            <b>Created by</b>
            <div className='row'>
                <Link to="https://www.linkedin.com/in/parinda-pannoon-62ab5b234/">Parinda Pannoon</Link>
            </div>
            <div className='row'>
                <Link to="https://www.linkedin.com/in/lisahligono/">Lisah Ligono</Link>
            </div>
            <div className='row'>
                <Link to="https://www.linkedin.com/in/yanikad/">Yanika Dontong</Link>
            </div>
        </div>
        
    </aside>
  );
}

export default Panel;
