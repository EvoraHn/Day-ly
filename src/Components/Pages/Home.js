import Image from "../Images/Image.css";
import Ejercicio from '../../assets/meme.jpg';
function Home(){
  return (
    <section>
          <section class="container-fluid  text-center p-1">
            <br></br>
            <p class="Encabezado">Actividades Sugeridas</p>
            <br></br>
          </section>
         
          <div class="grid gap-0.001 grid-cols-2 md:grid-cols-2 p-2">
          

          <img src="https://tec.mx/sites/default/files/styles/header_full/public/2020-07/abc-ejercicio-aprende-necesario-actividad-fisica.jpg?h=920929c4&itok=L3lqBYVp"
          class="imgn border-4 border-light-blue-500 border-opacity-50"
          ></img>
          <img src="https://img.europapress.es/fotoweb/fotonoticia_20180921083333_1200.jpg"
          class="imgn border-4 border-light-blue-500 border-opacity-50"
          ></img>
          <img src="https://tiemporeal.periodismoudec.cl/wp-content/uploads/2020/12/5-alternativas-a-Spotify-para-escuchar-musica-gratis-1068x623-1.jpg"
          class="imgn border-4 border-light-blue-500 border-opacity-50"
          ></img>
          <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/cocinar-mas-rapido.jpg"
          class="imgn border-4 border-light-blue-500 border-opacity-50"
          ></img>
          
      </div>
    </section>
  );
}

export default Home;
