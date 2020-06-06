import React, { Component } from 'react';
import r1 from '../Assets/images/r1.jpg';
import r2 from '../Assets/images/r2.jpeg';
import e1 from '../Assets/images/e1.jpeg';
import e2 from '../Assets/images/e2.jpg';
import CardBox from './CardBox';

export default class Home extends Component {
    render() {
        return (
            <>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">

                           
                                <h3>Where do you want go?</h3>
                            
                            <div className="row">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Location" />
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" placeholder="chekin" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Guests" />
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" placeholder="chekin" />
                                        </div>
                                    </div>
                                    <button className='btn btn-primary btn-block'>Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-8">
                        <h3>Experiences</h3>
                            <div className="row">
                                <div className="col">
                                    <CardBox img={e1}></CardBox>
                                </div>
                                <div className="col">
                                    <CardBox img={e2}></CardBox>
                                </div>
                                <div className="col">
                                    <CardBox img={e1}></CardBox>
                                </div>
                            </div>
                            <h3>Home</h3>
                            <div className="row">

                                <div className="col">
                                    <CardBox img={r1}></CardBox>
                                </div>
                                <div className="col">
                                    <CardBox img={r2}></CardBox>
                                </div>
                                <div className="col">
                                    <CardBox img={r1}></CardBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
