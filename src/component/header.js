import React from "react";
// import bgimage from "../Img/bg-img.png";
class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (<>
            <div className="Header_Sec ">
                <div className="top bg-dark py-2">
                <div className="container">
                    <div class="d-flex justify-content-between">
                        <div><h5 className="text-white">Logo</h5></div>
                        <div>
                            <ul class="nav list-inline header-list text-white">
                                <li >First</li>
                                <li >Second</li>
                                <li>Third</li>
                                <li>Fourth</li>
                                <li>Fifth</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="center-div">
                    <div className="main-div">
                    <h3  className="text-center text-white">Fouclibus Porttitor Metus</h3>
                    <p className="text-center text-white">There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour
                    </p>
                    <div className="text-center"><button type="button" class="btn text-white bg-secondary px-5">Click Me</button></div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default Header;