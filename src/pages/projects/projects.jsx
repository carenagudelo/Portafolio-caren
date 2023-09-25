import "./projects.scss";
import contadordeclics from "../../assets/img/contadorclics.png"
import aplicaciontareas from "../../assets/img/aplicaciontareas.png"
import calculadoraimg from "../../assets/img/calculadoraimg.png"
import pistonwraps from "../../assets/img/pistonwraps.png"





const Projects = () => {
    return (
        <div className="projects_container" id="projects">
            <h2>Projects</h2>
            <div className="cards_container">

<div className="card">
  <img src={contadordeclics} alt="Imagen del proyecto" />
  <h2 class="title">Contador de clics</h2>
  <a href="https://github.com/carenagudelo/contador-de-clics.git" target="blank">Ver más</a>
</div>

<div className="card">
  <img src={aplicaciontareas} alt="Imagen del proyecto" />
  <h2 class="title">Aplicación de tareas</h2>
  <a href="https://github.com/carenagudelo/aplicacion-de-tareas.git" target="blank">Ver más</a>
</div>

<div className="card">
  <img src={calculadoraimg} alt="Imagen del proyecto" />
  <h2 class="title">Calculadora</h2>
  <a href="https://github.com/carenagudelo/calculadora.git" target="blank">Ver más</a>
</div>

<div className="card">
  <img src={pistonwraps} alt="Imagen del proyecto" />
  <h2 class="title">Piston Wraps</h2>
  <a href="https://ecommerce.devbloom.com.co/" target="blank">Ver más</a>
</div>


            </div>
        </div>
    )
}

export default Projects;