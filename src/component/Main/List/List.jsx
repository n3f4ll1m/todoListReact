import  "./List.scss"
import ListItem from "./ListItem/ListItem"
function List(props) {
	//let SetList = props.SetList;
	//console.log("List",props.SetList)
    return (
		<div className="List">
			{
			props.list.map((listItem)=>{
				return (
					<ListItem listItem={listItem} key={listItem.id} list={props.list} SetList={props.SetList} isEmpty={props.isEmpty} SetIsEmpty={props.SetIsEmpty} SetAllCheck = {props.SetAllCheck}/>
				);
			})}
			{/* <ListItem isChecked={true}/>
			<ListItem isChecked={false}/>
			<ListItem/> */}
		</div>
    );
  }
  
  export default List;