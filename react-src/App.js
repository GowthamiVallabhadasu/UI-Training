import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {LoginComponent} from './components/Login';
import {RegisterComponent} from './components/Register';
//This is called pure component ot stateless component
const App=()=>{
    const companyName='Pega Systems';
return <div>
    <Header title={companyName} />
    <LoginComponent/>
    <RegisterComponent/>


</div>;
};
export default App;

