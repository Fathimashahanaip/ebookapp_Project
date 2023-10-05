
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Naav from './Naav';
import Admimnregistration from './Admimnregistration';
import Userregistration from './Userregistration';
import LoginWelcome from './LoginWelcome';
import UserWelcome from './UserWelcome';
import AdminWelcome from './AdminWelcome';
import AdminHome from './Admin/AdminHome';
import AdminBookView from './Admin/AdminBookView';
import { createContext, useState } from 'react';

import AdminBooksAdd from './Admin/AdminBooksAdd';
import AdminBookEdit from './Admin/AdminBookEdit';
import books from './Admin/AdminBookView';
import Userbookview from './User/Userbookview';
// import setbooks from './Admin/AdminBookView';
import UserHome from './User/UserHome'
import AdminClientAdd from './Admin/AdminClientAdd';
import AdminTeamAdd from './Admin/AdminTeamAdd';
import UserBookViewCard from './User/UserBookViewCard';
import UserCardView from './User/UserCardView';
import AdminCLientView from './Admin/AdminCLientView';
import AdminTeamView from './Admin/AdminTeamView';
import AdminClientSView from './Admin/AdminClientSView';
import AdminClientEDit from './Admin/AdminClientEDit';
import AdminTeamSview from './Admin/AdminTeamSview';
import AdminTeamEdit from './Admin/AdminTeamEdit';


// export const userContext=createContext()

function App() {
  const [book, setbook] = useState({})
  return (
    <div className="App">
      {/* <userContext.Provider value={{books}}> */}
<BrowserRouter>
<Naav/>
<Routes>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/adminreg' element={<Admimnregistration/>}></Route>
  <Route path='/usreg'element={<Userregistration/>}></Route>
  <Route path='/logwelcome' element={<LoginWelcome/>}></Route>
  <Route path='/userwelcome' element={<UserWelcome/>}></Route>
  <Route path='/Adminwelcome' element={<AdminWelcome/>}></Route>
  <Route path='/adminhome' element={<AdminHome/>}></Route>
  <Route path='/adminbook'element={<AdminBookView/>}></Route>
  <Route path='/adminaddbook' element={<AdminBooksAdd/>}></Route>
  <Route path="/adbookedit/:id" element={<AdminBookEdit/>}></Route>
  <Route path='/admincientadd' element={<AdminClientAdd/>}></Route>
  <Route path='/adminTeamadd' element={<AdminTeamAdd/>}></Route>
  <Route path='/adminclientview' element={<AdminCLientView/>}></Route>
  <Route path='/adminteamview'element={<AdminTeamView/>}></Route>
  <Route path='/clientsview/:id' element={<AdminClientSView/>}></Route>
  <Route path='/clientedit/:id'element={<AdminClientEDit/>}></Route>
  <Route path='/teamSview/:id'element={<AdminTeamSview/>}></Route>
  <Route path='/teamedit/:id' element={<AdminTeamEdit/>}></Route>






  <Route path="/userbookview" element={<Userbookview/>}></Route>
  <Route path='/userhome'element={<UserHome/>}></Route>
  <Route path='/userbook' element={<UserBookViewCard/>}></Route>
  <Route path='/cardview/:id' element={<UserCardView/>}></Route>
  


  </Routes></BrowserRouter>
  {/* </userContext.Provider> */}

    </div>
  );
}

export default App;
