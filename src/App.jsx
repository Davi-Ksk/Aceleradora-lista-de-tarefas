import { useState } from 'react'
import { Tarefa } from './components/Tarefas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <div className='page'>
    <aside class="profile-wrapper">
    <div class="avatar">
      <svg 
      version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
        <g><path d="M500,227.7c-70.9,0-128.6,57.7-128.6,128.6c0,70.9,57.7,128.6,128.6,128.6c70.9,0,128.6-57.7,128.6-128.6C628.6,285.4,570.9,227.7,500,227.7z"/><path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M727.7,756.6c-13.4,0-24.2-10.8-24.2-24.2c0-111-89.4-197.9-203.5-197.9c-114.1,0-203.5,86.9-203.5,197.9c0,13.4-10.8,24.2-24.2,24.2c-13.4,0-24.2-10.8-24.2-24.2c0-67.1,26.3-129.5,74.1-175.7c23.5-22.7,50.9-40.3,80.8-52.3c-10-6.6-19.5-14.3-28.1-22.9c-33.4-33.4-51.8-77.9-51.8-125.2c0-47.3,18.4-91.7,51.8-125.2c33.4-33.4,77.9-51.8,125.2-51.8c47.3,0,91.7,18.4,125.2,51.8C658.6,264.6,677,309,677,356.3c0,47.3-18.4,91.7-51.8,125.2c-8.7,8.7-18.1,16.3-28.2,22.9c29.9,12,57.4,29.6,80.8,52.3c47.8,46.2,74.1,108.6,74.1,175.7C751.9,745.7,741.1,756.6,727.7,756.6z"/></g>
      </svg>
    </div>

    <h2>Nome Genérico</h2>
    
    <p>
      Lorem ipsum dolor sit amet. Sit saepe nobis aut voluptatem molestiae et molestiae officia eos reiciendis accusantium sed quae sapiente ut accusantium animi et inventore explicabo. Hic natus excepturi et similique repellendus.
    </p>
    
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>
    
  </aside>
  <main>
    <h1>Lista de tarefas</h1>
    
    <div class="card-wrapper">

      <section class="card">
        
        <div class="card-header">
          <h2>Dia</h2>
        </div>
        
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
      
      <section class="card">

        <div class="card-header">
          <h2>Noite</h2>
        </div>
        
        <ul>
          {/* <Tarefa
            placeholder="Adicione uma tarefa"
          /> */}
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
    </div>

  </main>

  </div>
    </>
  )
}

export default App
