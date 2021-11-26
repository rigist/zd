import React, { useState, /* Component */ } from 'react';

//import './App.css';

//import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'



/* Реализовать блокнот для записей. Он будет представлять собой текстареа, 
в которую можно записывать текст.[X]
Слева от текстареа должен быть список созданных записей в виде меню.[X]
По нажатию на пункт меню можно посмотреть текст записи (прямо в текстареа)[X]
и при необъодимости отредактировать ее.[X]
Добавить функционал по удалению записей.[X]
Реализовать поиск записей.[X]
R-d []
стили[]
компоненты[]
 */

///////////////////////////////////////
//import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

let nanoid=(t=21)=>
{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;)
{let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26)
.toString(36).toUpperCase():n<63?"_":"-"}return e};

///////////////////////////////////////
const notesInit = [
  {id: 1, 
  text: "Первая запись"},
  {id: 2, 
  text: "Вторая запись"},
  {id: 3, 
  text: "Третья запись"},
] 
//////////////////////////////////////////
function App() {

  
  const [notes, setNotes] = useState(notesInit);
  //const [valueArea, setValueArea] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [obj, setObj] = useState(getInitObj());
  const [notesTwo, setNotesTwo] = useState(notesInit);
//---------------------------------------
  const result = notes.map((note) =>  
  {return <li key = {note.id} style = {{cursor: "pointer", borderColor: "black", borderWidth: 1, borderStyle: "dashed", margin: 2,padding: 2, position: "relative", width: 210}} onClick={() => setEditId(note.id)}>{trimText(note.text)}<button style = {{margin: 5, position: "absolute",right: 0, bottom: -5}} onClick = { () => remItem(note.id) }>Удалить</button></li>
     
   })
 //---------------------------------------
  function trimText(str){  
    if (str.length > 13) {
      return (str.substring(0, 13) + "...");
    }
    else {
      return str;
    }
  }
 //---------------------------------------
  function remItem(id){
    setNotes( notes.filter(note => note.id !== id) )
    //console.log(notes);
  }
  //---------------------------------------
  function saveItem() {
		if (editId) {
			setEditId(null);
		} else if (obj.text !== "") {
			setNotes([...notes, obj]);
			setObj(getInitObj());
		}
	}
  //---------------------------------------
  // 
/*   function addItem() {
		let obj = {
			id: nanoid(),
			text: valueArea,		
		};
		if (valueArea){
      setNotes([...notes, obj]);
    }
    setValueArea("")
    console.log(notes);
    
  } */
  //---------------------------------------
  function getValue() {

    //console.log(111)

    if (editId) {
			return notes.reduce((res, note) => note.id 
				=== editId ? note.text : res, ''); 
		} else {

      
			return obj.text;
		}
    
    //return valueArea
   /*  return notes.reduce((res, note) => 
    note.id === editId ? valueArea : res, '');  */
  }
  //---------------------------------------
  function getInitObj() {
    return {
      id: nanoid(),
      text: "",
    }
  }
  //---------------------------------------
  function changeItem(event) {
		if (editId) {
			setNotes(notes.map(note =>
				note.id === editId ? {...note, 
					text: event.target.value} : note 
			));
		} else {
      setObj({...obj, text: event.target.value});
     // console.log('changeItem')
     // setValueArea(event.target.value);
		}
  }
  //----------------------------------
  function handleChange(event) {
		setValueInput(event.target.value);  
  }
  //-------------------------

 // let searchBool = false;

 

  function search(){
  //  searchBool = true;

  setNotesTwo([...notes])
  
   let searchNotes = notes.filter( 
      note => { if ( note.text.toLowerCase().indexOf(valueInput.toLowerCase()) >= 0 ){return note} }
     )

     setNotes(searchNotes)
     
     
  }

  //////////////////////////////////
  return (
    <div style = {{backgroundColor: "green", margin: 3, padding: 2}}>
      <input value={valueInput} onChange={handleChange}/>
      <button onClick = {search}>Поиск</button> 
      <button onClick = {() => setNotes([...notesTwo])}>Сбросить поиск</button>
      
      <div id="header" style = {{display: "flex", flexDirection: "row"}}>
        <ul>
          {result} 
        </ul>
        <textarea style = {{width: 574, height: 199, margin: 10, borderRadius: 10,}}  value={getValue()} onChange={event => changeItem(event)/* event => setValueArea(event.target.value) */} />           
      </div>
     
     
      <button style = {{position: "absolute", left: 500}} onClick = {saveItem}>Сохранить</button>          
    </div>
  );
}

export default App;




