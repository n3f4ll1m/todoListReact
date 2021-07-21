import Buttons from "../../Buttons/Buttons"
import  "./ListItem.scss"

function ListItem(props) {
	let ischecked = props.listItem.isChecked?"Checked":""
	//console.log("ListItem",props.SetList)
    return (
    	<div className="ListItem">
			<Buttons itemId = {props.listItem.id} assigning="CheckBox" ischecked={props.listItem.isChecked} list={props.list} SetList={props.SetList} SetAllCheck = {props.SetAllCheck} />
          	<div className={"TextBox "+ischecked} >
			  {props.listItem.text}
			</div>
			<Buttons assigning="DeleteBtn" itemId = {props.listItem.id} list={props.list} SetList={props.SetList} isEmpty={props.isEmpty} SetIsEmpty={props.SetIsEmpty} SetAllCheck = {props.SetAllCheck}/>
			  
      </div>
    );
  }
  
  export default ListItem;