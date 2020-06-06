import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div className='container-fluid host'>
                <div className="container" >
                    <h3 className='text-center display-4 text' >Fill up the form to sign up</h3>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-7">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="col">
                                        <input type="eami;" className="form-control" placeholder="email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="password" className="form-control" placeholder="password" />
                                    </div>
                                </div>
                                <button className='btn btn-primary btn-block'>Sing Up</button>
                            </form>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        )
    }
}
