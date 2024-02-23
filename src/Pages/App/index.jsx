//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplaySpeed: 20,
    autoplay: true,
    slideToShow: 3,
    slideToScroll: 1
  }

  return (
    <>
    <h1 className="bg-red-200 mb-4"> Hola class </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
 
    <div className="grid grid-cols-10 gap-2">
      <div className="bg-violet-50 aspect-square"></div>
      <div className="bg-violet-100 aspect-square"></div>
      <div className="bg-violet-200 aspect-square"></div>
      <div className="bg-violet-300 aspect-square"></div>
      <div className="bg-violet-400 aspect-square"></div>
      <div className="bg-violet-500 aspect-square"></div>
      <div className="bg-violet-600 aspect-square"></div>
      <div className="bg-violet-700 aspect-square"></div>
      <div className="bg-violet-800 aspect-square"></div>
      <div className="bg-violet-900 aspect-square"></div>
    </div>
    <div className='w-3/4 m-auto'>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=''>
            <div className='bg-white h-[300px] text-black rounded-xl'>
              <img src={d.img} alt='' className='h-44 w-44 rounded-full my-auto mx-auto' />
            </div><div className='flex flex-col items-center justify-center gap-5 p-5'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.name}</p>
              <button className='bg-indigo-400 text-white text-lg px-4 py-2'>Mis tutoriales</button>
              </div>
              </div>
          )          
          )}
          </Slider>
      </div>
    </div>
    
    </>
  )
}

const data = [
  {
    name: `Facundo García Martoni`,
    img: `../src/assets/Fotos/Facundo-Garcia.png`,
    review: `Developer`
  },
  {
    name: `Facundo`,
    img: `../src/assets/Fotos/perfil-facundo.png`,
    review: `Developer`
  },
  {
    name: `Midudev`,
    img: `../src/assets/Fotos/perfil-midudev.png`,
    review: `Developer`
  },
];

export default App