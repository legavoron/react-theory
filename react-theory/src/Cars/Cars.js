import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Cars.css';


class Cars extends Component {


    render() {
        return (
            
                
                <div className="Cars">
                {this.props.carsList}
        
        </div>
        )
    }
}

export default Cars;