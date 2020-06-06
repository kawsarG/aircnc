import React, { Component } from 'react';

class CardBox extends Component {
    render() {
        return (
            <>
              <div class="card" >
                <img src={this.props.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>   
            </>
        );
    }
}

export default CardBox;