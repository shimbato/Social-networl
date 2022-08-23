
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import { DialogsContainer } from './component/Dialogs/DialogsContainer';

import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Navbar from './component/Navbar/Navbar';
import News from './component/News/News';
import Profile from './component/Profile/Profile';
import { addPost, store } from './component/redux/store';
import Settings from './component/Settings/Settings';

import UsersContainer from './component/Users/UsersContainer';



const App  = (props) => {


  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer/>} />
          <Route path='/profile' element={<Profile/> } />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
//dialogs={props.dialogs} messages={props.messages}
//posts={props.posts}