import "./Main.scss"
import Buttons from "./Buttons/Buttons";
import List from "./List/List"
import BottomMenu from "./BottomMenu/BottomMenu";
function Main(props) {
	//let SetList = props.SetList;
	//console.log("Main",props.SetList);
	var View = () =>{
		if(!props.isEmpty) {
			return "Show"
		}
		return "Hide"
	};
	var AddComponent = (event)=>{

		if(event.key ==="Enter"){
			let listik = [...props.list];
			
			let len;
			//console.log(len);
			if(listik.length !== 0) {
				len = listik[listik.length-1].id+1;
			}	
			else
				len = 0;
			

			let tempText = event.target.value.trim();
			if(tempText !== "") {
				let txtFinal = "";
				while (tempText.length > 50) {
					if(tempText.search(" ") > 50 || tempText.search(" ") === -1) {
							txtFinal = txtFinal + tempText.slice(0,50) + " ";
							tempText = tempText.slice(50,tempText.length);
							
					}
	
				}
				txtFinal = txtFinal + tempText;
				listik.push({id:len,isChecked:false,text:txtFinal});
				event.target.value = "";
				console.log(listik);
				props.SetList(listik);
				if (listik.length !==0){
					props.SetIsEmpty(false);
				}
				

			//console.log(listik);
			}	
		}
	}
    return (
		<section className="Main">
			<div className="Container">
				<div className={View()}>
					<Buttons assigning ="CheckAll" ischecked={props.isAllChecked} list={props.list} SetList={props.SetList} SetAllCheck = {props.SetAllCheck}/>
				</div>
				<input id="ToDo" type="text" placeholder="What needs to be done?"  onKeyDown={AddComponent}/>
				<div className={View()}>
					<div className="Line"/>
						<List list={props.list} SetList={props.SetList} isEmpty={props.isEmpty} SetIsEmpty={props.SetIsEmpty} SetAllCheck = {props.SetAllCheck}/>
					<div className="Line"></div>
						<BottomMenu list={props.list} />
				</div>
			</div>
		</section>
    );
  }
  
  export default Main;