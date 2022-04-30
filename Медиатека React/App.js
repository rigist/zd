import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  Switch, Route, NavLink } from 'react-router-dom';



//import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
let nanoid=(t=21)=>
{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;)
{let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26)
.toString(36).toUpperCase():n<63?"_":"-"}return e};


function App({children}) {
  
const dispatch = useDispatch();

const books = useSelector(state => state.reducerBooks)

const films = useSelector(state => state.reducerFilms)

const musics = useSelector(state => state.reducerMusic)



  return (
    <div style = {{backgroundColor: "green", margin: 3, padding: 2, height: 500}}>
      
    <ul>
      <Navigation/> 
    </ul> 
      
     {children}
              
    </div> 
  );
}

export default App;

//////////////////////////////
//////////////////////////////
//////////////////////////////

function Navigation (){

  function getValue(prop, editId, items, obj) {   
    if (editId) {
      return items.reduce((res, item) => item.id === editId 
        ? item[prop] : res, ''); 
    } else {
      return obj[prop];
    }
  }

  function changeItem(prop, event, editId, setItems, items, setObj, obj) {   
    if (editId) {
      setItems(items.map(item =>
        item.id === editId ? {...item, [prop]: 
          event.target.value} : item 
      ));
    } else {
      setObj({...obj, [prop]: event.target.value});
    }
  }

  function saveItem(editId, setEditId, setItems, items, obj, setObj, getInitObj) {   
    if (editId) {
      setEditId(null);
    } else {
      setItems([...items, obj]);
      setObj(getInitObj());
    }
  }


  return (<div>
    <li><NavLink to='/Books' >Books</NavLink></li>
      <li><NavLink to='/Films' >Films</NavLink></li>
      <li><NavLink to='/Musics' >Musics</NavLink></li>
      
        <Switch>
          
          <Route path="/Books" render={() => <Books getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/>} /> 
          <Route path='/Films' render={() => <Films getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/>}   />
          <Route path='/Musics' render={() => <Musics getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/>}   />
        </Switch>    
  </div>);
 } 

//////////////////////////////
//////////////////////////////
//////////////////////////////

function Books ({getValue, changeItem, saveItem}){ 

  const books = useSelector(state => state.reducerBooks)

  return(<dir><p>книги</p>  <InputsBooks books = {books} getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/> </dir>);
}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function Films ({getValue, changeItem, saveItem}){ 

  const films = useSelector(state => state.reducerFilms)
  
  return(<dir>
    <p>фильмы</p> 
    <InputsFilms films = {films} getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/>
    </dir>);
}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function Musics ({getValue, changeItem, saveItem}){ 
  const musics = useSelector(state => state.reducerMusic)
  
  return(<dir>
    <p>музыка</p> 
    <InputsMusics musics = {musics} getValue = {getValue} changeItem = {changeItem} saveItem = {saveItem}/>
    </dir>);
}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function InputsBooks ({books, getValue, changeItem, saveItem}){ 

  const [items, setItems] = useState(books);  
  const [obj, setObj] = useState(getInitObj()); 
  const [editId, setEditId] = useState(null);   


  
  const result = items.map(item => { 
    return <p key={item.id}>
      <span>{item.title}</span><br/>
      <span>{item.author}</span><br/>
      <span>{item.description}</span>
      
      <button onClick={() => setEditId(item.id)}>edit</button>
    </p>;
  });
  
  
  function getInitObj() {
    return {
      id: nanoid(), title: "0", author: "0", description: "0"
    }
  }
  
  return <div>
    {result}
    
    <br />
    <InputOne 
    name = 'title' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'author' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'description' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    
    <ButtonSave saveItem = {saveItem} editId = {editId} setEditId = {setEditId} setItems = {setItems} items = {items} obj = {obj} setObj = {setObj} getInitObj = {getInitObj}/>


  </div>;
}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function InputsFilms ({films, getValue, changeItem, saveItem}){ 

  const [items, setItems] = useState(films);  
  const [obj, setObj] = useState(getInitObj());  
  const [editId, setEditId] = useState(null);   

  
  const result = items.map(item => {  
    return <p key={item.id}>
      <span>{item.title}</span><br/>
      <span>{item.actors}</span><br/>
      <span>{item.duration}</span><br/>
      <span>{item.description}</span>
      
      <button onClick={() => setEditId(item.id)}>edit</button>
    </p>;
  });
  
  function getInitObj() {
    return {
      id: nanoid(),title: "0", actors: "0 0", duration: 0, description: "0"
    }
  }
  
  return <div>
    {result}
    
    <br />
    <InputOne 
    name = 'title' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'actors' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />

    <InputOne 
    name = 'duration' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />

    <InputOne 
    name = 'description' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />

    
<ButtonSave saveItem = {saveItem} editId = {editId} setEditId = {setEditId} setItems = {setItems} items = {items} obj = {obj} setObj = {setObj} getInitObj = {getInitObj}/>
  </div>;
}

//////////////////////////////
//////////////////////////////
////////////////////////////// 

function InputsMusics ({musics, getValue, changeItem, saveItem}){


  const [items, setItems] = useState(musics);  
  const [obj, setObj] = useState(getInitObj());  
  const [editId, setEditId] = useState(null);   


  
  const result = items.map(item => {  
    return <p key={item.id}>
      <span>{item.track}</span><br/>
      <span>{item.authoh}</span><br/>
      <span>{item.duration}</span><br/>
      <span>{item.description}</span>
      
      <button onClick={() => setEditId(item.id)}>edit</button>
    </p>;
  });
 
  function getInitObj() {
    return {
      id: nanoid(), track: "0", author: "0", duration: 0, description: "0"
    }
  }
  
  return <div>
    {result}
    
    <br />
    <InputOne 
    name = 'track' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'author' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'duration' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />
    <InputOne 
    name = 'description' getValue = {getValue} editId = {editId}  items = {items} obj = {obj} changeItem = {changeItem}  setItems = {setItems} setObj = {setObj} 
    />


    
<ButtonSave saveItem = {saveItem} editId = {editId} setEditId = {setEditId} setItems = {setItems} items = {items} obj = {obj} setObj = {setObj} getInitObj = {getInitObj}/>
  </div>;

}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function InputOne ({name, getValue, editId, items, obj, changeItem, setItems, setObj}){ 


  return <div>
    <input
      value={getValue(name, editId, items, obj)}
      onChange={event => changeItem(name , event, editId, setItems, items, setObj, obj)}
    />
  </div>;
}

//////////////////////////////
//////////////////////////////
//////////////////////////////

function ButtonSave ({saveItem, editId, setEditId, setItems, items, obj, setObj, getInitObj}){
  
  return <div>
    <button onClick={() => saveItem(editId, setEditId, setItems, items, obj, setObj, getInitObj)}>save</button>
  </div>

}