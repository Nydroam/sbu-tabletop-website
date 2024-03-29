import React from 'react';
import './NavBar.css';
import logo from '../../tabletoplogo_colored.png';
import NavButton from "../NavButton/NavButton";

const tabs = ["About","Games","Events","Dice"];
class NavBar extends React.Component{

    
    render(){
        return (
            <div className="navbar">
                <div className="nav-title" onClick={e=>this.props.changePage("About")}>
                    <img src={logo} alt="Logo"></img>
                    SBU Tabletop Club
                </div>
                <div className="nav-buttons">
                    {tabs.map( tab=> <NavButton changePage={this.props.changePage} name={tab}/>)}
                </div>
            </div>
        );
    }

}

export default NavBar;