import React from "react";

const Header=()=>{
        return(
                <React.Fragment>
                        <header>
                                <div className="headers">
                                        <div className="headerStartRigth">
                                                <ul>
                                                        <li>study</li>
                                                        <li>musicvideo</li>
                                                        <li>musicfilm</li>
                                                        <li>iranPop</li>
                                                        <li>pop</li>
                                                        <li>traditinal</li>
                                                </ul>
                                        </div>
                                        <div className="headerStartCenter">
                                                <input type="search" placeholder="search" />
                                        </div>
                                        <div className="headerStartLeft">
                                                <a href=""><i class="fas fa-home"></i></a>
                                                <a href=""><i class="fas fa-user"></i></a>
                                                <a href=""><i class="fas fa-gamepad"></i></a>
                                                <a href=""><i class="fab fa-spotify"></i></a>
                                        </div>
                                </div>
                        </header>
                </React.Fragment>
        )
}

export default Header;