import { useState, useEffect } from 'react';
import './App.css';
import iconSrc from './assets/iconsrc.png'
import refresh from './assets/refresh.png'

function App() {

  const apiUrl = 'https://api.waifu.im/search';
    const [pic, setPic] = useState('');
    const [bkcolor, setBkcolor] = useState('');
    const [source, setSource] = useState('');

    const getWaifu = function(){
      return fetch(apiUrl)
      .then(res => res.json())
      .then(response =>{
        const {images} = response
        const pic =images[0]['url']
        const bkcolor = images[0]['dominant_color']
        const source = images[0]['source']
        setPic(pic)
        setBkcolor(bkcolor)
        setSource(source)
      })
    }
    useEffect(function(){
      getWaifu();
    },[])

  return (
    <div className="App">
      <section style={{
        backgroundColor : bkcolor
      }}>
            <a href={source} rel="noreferrer" target='_blank'><img alt='link-icon' className='waifu-icon' src={iconSrc}/></a>
            <img className='waifu-pic' src={pic} alt='anime-waifu'/>
            <button onClick={()=>getWaifu()}><img alt='refresh-icon' className='refresh' src={refresh}/></button>
        </section>
    </div>
  );
}

export default App;
