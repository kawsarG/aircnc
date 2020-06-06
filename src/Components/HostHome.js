import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HostHome extends Component {
    render() {
        return (
            <div className='container-fluid host' style={{paddingTop:'0',marginTop:'0'}}>
               <div className="container" >
                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5"><h3 className='text-center display-4 '>Earn money as an Aircnc host</h3>
                <form style={{backgroundColor:'white',padding:'1rem',borderRadius:'10px'}}>
                <h5>Tell us about your home</h5>
                    <div className="row">
                    <div className="col">
                            <input type="text" className="form-control" placeholder="Dhaka"/>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Entire Place"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Guests"/>
                        </div>
                    </div>
                    <button className='btn btn-primary btn-block'>Get Stared</button>
                </form></div>
                </div>
                </div> 
            </div>
        );
    }
}

export default HostHome;