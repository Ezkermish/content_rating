
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0
    }
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            --- Agrega texto aquí ---
            Te gustan los gatos?
        </p>
        <div className='rating-buttons'>
            <button className="like-button">
                Me gusta ({this.state.likes})
            </button>
            <button className="dislike-button">
                No me gusta ({this.state.dislikes})
            </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
