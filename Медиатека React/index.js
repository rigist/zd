import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

//import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
let nanoid=(t=21)=>
{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;)
{let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26)
.toString(36).toUpperCase():n<63?"_":"-"}return e};




const booksInit = [{id: nanoid(), title: "название1", author: "автор1", description: "описание1"},
          {id: nanoid(),title: "название2", author: "автор2", description: "описание2"},
          {id: nanoid(),title: "название3", author: "автор3", description: "описание3"}]

const filmsInit = [{id: nanoid(),title: "название1", actors: "актер1 актер2", duration: 45, description: "описание1"}, 
{id: nanoid(),title: "название2", actors: "актер3 актер4", duration: 45, description: "описание2"},
{id: nanoid(),title: "название3", actors: "актер5 актер6", duration: 45, description: "описание3"}]

const musicInit = [{id: nanoid(), track: "название1", author: "автор1", duration: 5, description: "описание1"},{id: nanoid(), track: "название2", author: "автор2", duration: 5, description: "описание2"},
{id: nanoid(), track: "название3", author: "автор3", duration: 5, description: "описание3"}]

const reducerBooks = (state = booksInit, action)=>{
  switch(action.type){

    default:
        return state
}   
};

const reducerFilms= (state = filmsInit, action)=>{
  switch(action.type){

    default:
        return state
}   
};

const reducerMusic= (state = musicInit, action)=>{
  switch(action.type){

    default:
        return state
}   
};

const rootReducer = combineReducers({reducerBooks, reducerFilms, reducerMusic})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>       
      <App/>    
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

 