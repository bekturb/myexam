import './App.scss';
import {Routes, Route} from "react-router";
import Header from "./components/Header/Header";
import Hero from "./components/pages/Hero";
import Categories from "./components/pages/Categories";


function App() {
  return (
    <>
      <Header/>
        <Hero/>
        <Categories/>
    </>
  );
}

export default App;
