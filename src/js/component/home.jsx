import React, {useState} from "react";


const trafficPole = {
	"margin-top": "2vh",
	width: "2vw",
	height: "20vh",
	"background-color": "black"
}
const LightBody = {

	width: "15vw",
	height: "60vh",
	"background-color": "black",
	"border-radius": "5%"
}

const Lights ={
	width: "100%",
	height: "31%",
	"border-radius": "50%",
	margin: "0px, 10px, 0px, 10px"
}

const activatedLight = {
	width: "100%",
	height: "31%",
	"border-radius": "50%",
	margin: "0px, 10px, 0px, 10px",
	"box-shadow":
    "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff"  
}


let timer = setInterval(()=>{}, 0);

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("none");
	let colors = ["red", "yellow", "green"];
	let counter = 0;

	/* useEffect(() => {
		setInterval(()=>{
			setColor(colors[count]);
			count > 2 ? setCount(0) : setCount(count + 1);
	   }, 1000);
	  }, [count]); */
	
	function intermitentLights() {
		timer = setInterval(()=>{
			setColor(colors[counter]);
			counter > 2 ? counter = 0 : counter++;
	   }, 1000);
	}

	function stopLights() {
		clearInterval(timer);
	}
	

	return (
	
	<>
		<div className="d-flex justify-content-center">
				<div className="d-inline-block justfy-content-center">
					<div className="container d-flex justify-content-center" style={trafficPole}></div>
					<div className="row" style={LightBody}>
						<div className="d-inline-block justfy-content-center">
								<div id= "light" className="container mt-3 bg-danger" 
										style={color == "red" ? activatedLight : Lights} onClick={() => color == "red" ? setColor("none") : setColor("red")}></div>
								<div id= "light" className="container  bg-warning" 
										style={color == "yellow" ? activatedLight : Lights} onClick={() => color == "yellow" ? setColor("none")  : setColor("yellow")}></div>
								<div id= "light" className="container  bg-success" 
										style={color == "green" ? activatedLight : Lights} onClick={() => color == "green" ? setColor("none")  :  setColor("green")}></div>
						</div>
					</div>
				</div>
				
		</div>
		<div className="d-flex justify-content-center">
			<button id = "traffButton" className = "mt-5" type = "button" style={{height:"50px", width: "200px"}} onClick={intermitentLights}>Intermitentes</button>
			<button id = "traffButton" className = "mt-5" type = "button" style={{height:"50px", width: "200px"}} onClick={stopLights}>Parar</button>
			
		</div>
		
	</>
			
	);
};

export default Home;
