import React, {useState, useSuspense} from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import useChangeTheme from './hooks/useChangeTheme'
import { useTranslation } from 'react-i18next'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Archive from './Archive'
import './App.css';

function App() {

  const [storedString, setStoredString] = useLocalStorage("stored string", "");
  const [currentTheme, setCurrentTheme] = useChangeTheme()
  const [t, i18n] = useTranslation()


  const handleCurrentTheme = () => {
    if(currentTheme !== 'dark'){
      setCurrentTheme('dark')
    }
    else if(currentTheme === 'dark'){
      setCurrentTheme('light')
    }
    else{
      setCurrentTheme('light')
    }
  }

  const theme = {
    background: currentTheme == 'dark' ? 'black' : 'white',
    color: currentTheme == 'dark' ? 'white' : 'black'
  }

  const changeCurrentLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Router>
      
      <div style={theme} className='Posts'>
        <Route exact path='/' render={props =>(
          <React.Fragment>

            <h1>{t('headers.about')}</h1>
            <Link to='/archive'><h1>{t('headers.archive')}</h1></Link>

            <h1>{t('headers.saveValue')}</h1>
            <input type='text' placeholder='Enter string...' 
                  value={storedString} onChange={(e) => setStoredString(e.target.value)} />
            
            <h1>{t('headers.themeChanger')}</h1>
            <button onClick={handleCurrentTheme}>Toggle Theme</button>

            <h1>{t('headers.languageChanger')}</h1>
            <button onClick={() => changeCurrentLanguage('en')}>English</button>
            <button onClick={() => changeCurrentLanguage('es')}>Spanish</button>
            
          </React.Fragment>
          )} />
          <Route exact path='/archive' component={Archive} />

      </div>
    </Router>
  );


}




export default App;
