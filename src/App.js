import { useState } from 'react';
import './App.scss';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
function App() {
  var Data = {
	isEmpty:false,
	list:[
		{
			id:0,
			isChecked:false,
			text:"Lorem ipsum dolor sit amet consectetur ",
		},
		{
			id:1,
			isChecked:true,
			text:"Lorem ipsum dolor sit amet consectetur",
		},
		{
			id:2,
			isChecked:true,
			text:"Lorem ipsum dolor sit amet consectetur",
		},
		{
			id:3,
			isChecked:false,
			text:"Lorem ipsum dolor sit amet consectetur",
		},
	]
  }
  const [isEmpty, SetIsEmpty] = useState(Data.isEmpty);
  const [list, SetList] = useState(Data.list);
  const [isAllChecked, SetAllCheck] = useState(false);
  //console.log(SetList);
  return (
	<div className="App">
	  <Header />
	  <Main isEmpty={isEmpty} SetIsEmpty={SetIsEmpty} list={list} SetList={SetList} isAllChecked = {isAllChecked} SetAllCheck = {SetAllCheck}/>
	  <Footer /> 
	</div>
  );
}

export default App;
