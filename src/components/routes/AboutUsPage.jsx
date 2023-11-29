import foto from "../../images/id.jpg"
export default function AboutUsPage() {
  fetch("http://localhost:8000/aboutus", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error);
    })



    return  (
            <div style={
                {justifyContent: "space-between", margin: "auto"}
            }>
                <h1 style={{fontSize:"40px"}}>Sobre Mi</h1>
                <img src={foto} alt="foto de Christian" style={{ width: '300px', margin: "auto"}}/>
                <p>Christian Martinez es un Estudiante del Bootcamp de desarrollo fullstack, lleva 4 meses en el curso y esta estuaiando mucho para poder aplicar todo este aprendizaje en el mercado laboral</p>

                <p>Actualmente tiene dos hermanos, no esta casado pero tiene una hermosa novia con la cual 
                    planea casarse en el futuro. Estara dispuesto a ayudarle con cualquier proyecto que usted este haciendo
                </p>

            </div>
    )
}