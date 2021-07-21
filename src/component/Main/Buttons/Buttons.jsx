import "./Buttons.scss"
function Buttons(props) {
    let ischecked = props.ischecked?"Checked":""
    let assigning = props.assigning + " " + ischecked;
    
    
    let CheckItem = ()=> {
        //console.log(props.SetList)
        console.log("CHECK"+props.itemId);
        let listik = [...props.list];
        for(let i = 0; i<listik.length; ++i){
            if (listik[i].id === props.itemId) {
                listik[i].isChecked = !listik[i].isChecked;
            }
        }
        let isAllChecked = true;
        for(let i = 0; i<listik.length; ++i){
            if (!listik[i].isChecked) {
                isAllChecked = false;
            }
        }
        if(!isAllChecked) {
            props.SetAllCheck(false);
        }
        else{
            props.SetAllCheck(true);
        } 
        props.SetList(listik);
    }
    let CheckAll = ()=> {
        console.log("CHECKALL")
        let listik = [...props.list];
        listik.forEach((item)=>{item.isChecked=true});
        console.log(props.SetAllCheck);
        props.SetList(listik);
        if(props.ischecked) {
            props.SetAllCheck(false);
            listik.forEach((item)=>{item.isChecked=false});
        }
        else{
            props.SetAllCheck(true);
        }       

    }
    let DeleteItem = ()=> {
        console.log("DeleteItem");
        let listik = [...props.list];
        for(let i = 0; i<listik.length; ++i){
            if (listik[i].id === props.itemId) {
                listik.splice(i,1);
            }
        }
        console.log(listik);
        props.SetList(listik);
        if (listik.length ===0){
            props.SetIsEmpty(true);
        }
        let isAllChecked = true;
        for(let i = 0; i<listik.length; ++i){
            if (!listik[i].isChecked) {
                isAllChecked = false;
            }
        }
        if(!isAllChecked) {
            props.SetAllCheck(false);
        }
        else{
            props.SetAllCheck(true);
        }
    }
    let functionality = ()=>{
        switch (props.assigning) {
            case "CheckAll":
                CheckAll();
                break;
            case "CheckBox":
                CheckItem();
                break;    
            case "DeleteBtn":
                DeleteItem();
                break;      
            default:
                break;
        }
    }   
    return (
        <button className={assigning} onClick={functionality}></button>
    );
  }
  
  export default Buttons;