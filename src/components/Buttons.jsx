import satData from "./satData";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div>
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
        );
      })}

      <button onClick ={()=> setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;