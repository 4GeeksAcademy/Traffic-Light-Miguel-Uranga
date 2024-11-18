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

const purpleLights ={
	width: "100%",
	height: "31%",
	"border-radius": "50%",
	margin: "0px, 10px, 0px, 10px",
	visibility: "hidden"
}

const activatedLight = {
	width: "100%",
	height: "31%",
	"border-radius": "50%",
	margin: "0px, 10px, 0px, 10px",
	"box-shadow":
    "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff"  
}

const purpleLightBodyHidden = {
	display: "none"
}

const purpleLightBodyTrue = {
	"margin-top": "-30px",
	width: "15vw",
	height: "22vh",
	"background-color": "black",
	"border-radius": "5%",
	display: "block"
}

let timer = setInterval(()=>{}, 0);

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("none");
	const [ purpleLight, setPurpleLight ] = useState(false);
	const [ trafficColors, setTrafficColors ] = useState(["red", "yellow", "green"]);
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
			setColor(trafficColors[counter]);
			purpleLight == true ? (counter > 3 ? counter = 0 : counter++) : (counter > 2 ? counter = 0 : counter++);
			console.log(trafficColors)
			
	   }, 1000);
	}

	function stopLights() {
		clearInterval(timer);
		console.log("Detenido!")
	}

	function purpleLightSetup(){
		if(purpleLight == false) {
			setPurpleLight(true)
			setTrafficColors(["red", "yellow", "green", "purple"]); 
			console.log(purpleLight, colors)
			return
		}
		setPurpleLight(false)
		setTrafficColors(["red", "yellow", "green"]);
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
								<div id= "purpleLight" className="container" 
										style={purpleLight == true ? (color == "purple" ? activatedLight : Lights) : purpleLights} 
										onClick={() => color == "purple" ? setColor("none")  :  setColor("purple")}></div>
									
						</div>
					</div>
					<div className="row"  style={purpleLight == true ? purpleLightBodyTrue : purpleLightBodyHidden}>
					
					</div>
				</div>
				
		</div>
		<div className="d-flex justify-content-center">
			<button id = "traffButton" className = "mt-5" type = "button" style={{height:"50px", width: "200px"}} onClick={intermitentLights}>Intermitentes</button>
			<button id = "traffButton" className = "mt-5" type = "button" style={{height:"50px", width: "200px"}} onClick={stopLights}>Parar</button>
			<button id = "traffButton" className = "mt-5" type = "button" style={{height:"50px", width: "200px"}} onClick={purpleLightSetup}>Luz purpura</button>
			
		</div>
		
	</>
			
	);
};

export default Home;
