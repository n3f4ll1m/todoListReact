import { useState } from "react";
import  "./BottomMenu.scss"
function BottomMenu(props) {
    //console.log(props);
    var ItemLeft = ()=> {
        var itemLeft = 0; 
        props.list.forEach((elem)=>{
            if(!elem.isChecked) {
                itemLeft++;
            }
        });
        return itemLeft;
    }
    const[view, SetView] = useState("ViewAll");
    let ViewAll =()=>{
        console.log("ViewAll");
        SetView("ViewAll");
    }
    let ViewActive =(event)=>{
        console.log("ViewActive");
        SetView("ViewActive");
    }
    let ViewCompleted =()=>{
        console.log("ViewCompleted");
        SetView("ViewCompleted");
    }
    let ViewClass = () =>{
        switch (view) {
            case "ViewAll":
                return "Checked"; 
            case "ViewActive":
                return "Checked"; 
            case "ViewCompleted":
                return "Checked"; 
            default:
                break;
        }
    }
    return (
        <div className="BottomMenu">
            <div className="ItemCount">{ItemLeft()} item left</div>
            <button className={ViewClass()} onClick = {ViewAll}>All</button>
            <button className={ViewClass()} onClick = {ViewActive}>Active</button>
            <button className={ViewClass()} onClick = {ViewCompleted}>Completed</button>
        </div>  
    );
  }
  
  export default BottomMenu;