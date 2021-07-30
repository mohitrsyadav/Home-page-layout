import React from "react";
// import bgimage from "../Img/bg-img.png";
import CardSec from "./card-section";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (<>
            <div className="container"> 
                <div class="d-flex  justify-content-between">
                    <div>  <CardSec bg={"bg-danger"}/> </div>
                    <div>  <CardSec bg={"bg-secondary"}/> </div>
                    <div>  <CardSec bg={"bg-success"}/> </div>
                    <div>  <CardSec bg={"bg-warning"}/> </div>
                    </div>
                </div>
          
        </>
        )
    }
}
export default Card;