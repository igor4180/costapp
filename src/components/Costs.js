import CostItem from "./CostItem"
const Costs = (props) => {
   return(
     <div>
    <CostItem date={props.items[0].date} 
      description={props.items[0].description} 
      price={props.items[0].price} />

      <CostItem date={props.items[1].date} 
      description={props.items[1].description} 
      price={props.items[1].price} />
      
      <CostItem date={props.items[2].date} 
      description={props.items[2].description} 
      price={props.items[2].price} />     
    </div>
   )
  
    
}
export default Costs
