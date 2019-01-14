import React from 'react';
const Card = (props) => {
        const {name,email, id} = props;
    return (

        <div className = "tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
           {/* <img alt = "robot" src ={`http://i.pravatar.cc/350x150?${id}`}/> */}
         <a href="https://en.wikipedia.org/wiki/Cat" target="_blank" >  <img alt = "image of a beautiful cat" src ={`https://loremflickr.com/320/240?random=${id}`}/></a>
           
            <div>
           <h2>{name}</h2>
           <p>{email}</p>
           </div> 
        </div>
    );
}

export default Card;