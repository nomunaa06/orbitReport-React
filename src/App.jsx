import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData"; 


function App() {
  const [sat, setSat] = useState(satData);

  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };
  return (
    <div>
      <Banner/>
      <Buttons filterByType={filterByType}
               setSat={setSat}
               orbitTypes={orbitTypes}/>
      <Table sat={sat} />
    </div>
  );
}

export default App;