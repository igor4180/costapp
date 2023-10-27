
import Costs from "./components/Costs";

function App() {
  const items = [
    {
      date: new Date(2023,9,22,),
     description: "Очень нужное1",
     price:123
    },
    {
      date: new Date(2023,12,23,),
      description: "Очень нужное2",
      price:3455
    },
    {
      date: new Date(2023,11,23,),
      description: "Очень нужное3",
      price:4358
    }
  ];
  
  return (
    <div>
      <Costs items={items}/>
    </div>
  );
}

export default App;
