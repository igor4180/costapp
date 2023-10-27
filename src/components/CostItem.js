import CostDate from './CostDate';
import './CostItem.css'
import React, {useState} from 'react';

function CostItem(props){
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('New Cost');
    };

	return (
        <div className="cost_item">
         <CostDate  date={props.date}/>
        <h2>{description}</h2> 
        <div>
            <div>
                <div>{props.price}</div>
                <button onClick={changeDescriptionHandler}>Изменить описание</button> 
            </div>
    
        </div>
        </div>
    )
}
export default CostItem;