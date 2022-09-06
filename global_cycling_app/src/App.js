import {QueryClient, QueryClientProvider} from 'react-query';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './views/MainPage/MainPage';
import Header from './components/Header/Header';
import InfoPage from './views/InfoPage/InfoPage';
import { useState } from 'react';

const queryClient= new QueryClient();
//const Main = React.lazy(()=> import(`./views/MainPage/MainPage`));
function App() {
  const[videoId, setVideoId]= useState();
  return (
  <>
  <QueryClientProvider client={queryClient}>  
  <div className="App">
  <Header/>
  <div><InfoPage videoId={videoId}/></div>
    <Routes>
      <Route path='/videos' element={<div><MainPage setVideoId={setVideoId}/></div> }>
      </Route>
      <Route path=''>
      </Route>
      </Routes>
     
      
     
    </div>
    </QueryClientProvider>
  
    </>
  );
}

export default App;
