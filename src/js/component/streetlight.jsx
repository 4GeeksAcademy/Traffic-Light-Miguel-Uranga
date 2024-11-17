//import react into the bundle
import React from "react";

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


const TraffiLight  = (props)=> {
    return (
    <div className="d-flex justify-content-center">
		<div className="d-inline-block justfy-content-center">
			<div className="container d-flex justify-content-center" style={trafficPole}></div>
			<div className="row" style={LightBody}>
				<div className="d-inline-block justfy-content-center">
						<div id= "light" className="container mt-3 bg-danger" style={props.red ? true : Lights }></div>
						<div id= "light" className="container  bg-warning" style={props.yellow ? true : Lights}></div>
						<div id= "light" className="container  bg-success" style={props.green ? true : Lights}></div>
				</div>
			</div>
		</div>
	</div>	
    );
}

export default TraffiLight; 