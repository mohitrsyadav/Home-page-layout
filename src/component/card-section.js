import React from "react";
// import bgimage from "../Img/bg-img.png";
class CardSec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (<>
            <div className="container">
                <div className="card_sec">
                <div class="d-flex  justify-content-between">
                    <div><div className={`card ${ this.props.bg }`}>
                        <div class="card-body text-center p-4">
                            <div className="card-icon p-2"><i class="fa fa-car "></i></div>
                            <h5 class="card-title text-white">Lorem Ipsum</h5>
                            <p class="card-text text-white">Some quick example text</p>
                        </div>
                    </div></div>

                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default CardSec;