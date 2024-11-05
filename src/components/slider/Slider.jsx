import useSlider from "../../stores/use-slider";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";

const Card = ({item}) => {
  return (
     <div className="card-slider">
          <h1 className="title">{item.title}</h1>
          <p className="content">{item.subtitle}</p>
          <img className="image" src={item.img} alt="" />
     </div>);
};

const data = [
     {
          title: "Acidificacion del oceano",
          subtitle: "La acidificación de los océanos es el proceso por el cual el agua del mar se vuelve más ácida debido al exceso de dióxido de carbono (CO2) absorbido de la atmósfera.",
          img:"/images/acidification/definition.png"
     },
     {
          title: "Otro",
          subtitle: ""
     }
]

function Slider() {

     const {slider} = useSlider() 

  return (
    <div className={`${slider ? "open" : "close"} container-slider`} >
      <Carousel fade>
          {data.map((item) => (
               <Carousel.Item>
               <Card item={item}/>
               </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default Slider;
