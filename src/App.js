import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import ListStudentComponent from './Component/ListStudentComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import CreateStudentComponent from './Component/CreateStudentComponent';
import UpdateStudentComponent from './Component/UpdateStudentComponent';
//import ViewStudentComponent from './Components/ViewStudentComponent';



function App() {
  return (
    <Fragment>
      <HeaderComponent/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListStudentComponent} />
          <Route exact path="/students" component={ListStudentComponent}/>
          <Route exact path="/add-student" component={CreateStudentComponent}/>
          <Route exact path="/update-student/:id" component={UpdateStudentComponent}/>
        </Switch>
      </BrowserRouter>
      {/* <ListStudentComponent/> */}
      <FooterComponent/>
    </Fragment>
  );
}

export default App;
