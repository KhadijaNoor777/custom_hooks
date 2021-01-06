import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

function useChangeTheme(){

    const [theme, setTheme] = useLocalStorage("theme", "")

    useEffect(() => {
        const postsEl = document.getElementsByClassName('Posts')
        console.log('initial theme', theme)
        if(theme == 'dark'){
            postsEl[0] && postsEl[0].classList.add(theme)
        }
    }, [])

    return [theme, setTheme];

}

export default useChangeTheme;