import { useState } from 'react'
import './App.css'
import Carmy from './assets/16-35.jpg'
import Cjoa from './assets/fx3.jpg'
import Curs from './assets/crane 3.webp'
import Slider1 from './assets/1.jpg'
import Slider2 from './assets/2.jpg'
import Slider3 from './assets/3.jpg'
import Slider4 from './assets/4.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          className="mySwiper"
          
        >
          <SwiperSlide>
            <img src={Slider1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={Slider3} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={Slider4} alt="Slide 4" />
         </SwiperSlide>
        </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Câmera Sony FX3</h2>
              <p className="desc">Câmera de cinema full frame, gravação 4k/120fps, tela rotacional 360</p>
              <p className="preco">R$ 28.490,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Lente 16-35</h2>
              <p className="desc">Lente full frame, abertura f/2.8</p>
              <p className="preco">R$ 13.768,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Gimbal Crane 3</h2>
              <p className="desc"> Estabilizador gimbal para câmeras DSLR e mirrorless, projetado para eliminar tremores e garantir imagens estáveis e profissionais.</p>
              <p className="preco">R$ 4.588,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/_J_1dJndLhc?autoplay=1&mute=1&controls=0&loop=1&playlist=_J_1dJndLhc&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        <footer>
          <img src="" alt="" className='logo-footer' />

          <div className="social-icons">
              <div className="icon">
                <img src="" alt="" id="instagram" />
              </div>
              <div className="icon">
                <img src="" alt="" id="youtube" />
              </div>
              <div className="icon">
                <img src="" alt="" id="discord" />
              </div>
              <div className="icon">
                <img src="" alt="" id="watsapp" />
              </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
