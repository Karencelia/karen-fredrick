
import Header from './page/component/Header';
import Home from './page/component/Home';
import LightsLenses from './page/component/LightsLenses';
import OurStory from './page/component/OurStory';
import Schedule from './page/component/Schedule';
// import Directions from './page/component/Directions';
import Rsvp from './page/component/Rsvp';
// import ScrollingNames from "./page/component/ScrollingNames";


export default function OnePage() {
  return (
    <div>
      <Header />
      <Home />
      <LightsLenses />
      <OurStory />
      <Schedule />
      {/* <Directions /> */}
      <Rsvp />
      {/* <ScrollingNames /> */}
    </div>
  );
}

