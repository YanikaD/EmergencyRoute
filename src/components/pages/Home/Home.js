import React, { useState } from 'react';
import Panel from './Panel';
import './Home.css';

function Home() {
  const [panelStyle, setPanelStyle] = useState({
    backgroundColor: '#242846',
  });
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    color: '#ffffff',
  });

  function buttonColour() {
    if (!buttonHover) {
      setButtonHover(true);
      setButtonStyle({
        color: '#242846',
      });
    } else {
      setButtonHover(false);
      setButtonStyle({
        color: '#ffffff',
      });
    }
  }

  return (
    <section className="wrapper">
      <Panel
        header="ForesightDRM"
        body="Power of geospatial data and decision-making in a natural disaster event"
        panelStyle={panelStyle}
        buttonStyle={buttonStyle}
        buttonColour={buttonColour}
      />
    </section>
  );
}

export default Home;
