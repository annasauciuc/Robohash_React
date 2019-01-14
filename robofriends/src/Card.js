import React from 'react';
const Card = (props) => {
        const {name,email, id} = props;
    return (

        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
           {/* <img alt = "robot" src ={`http://i.pravatar.cc/350x150?${id}`}/> */}
           <img alt = "robot" src ={`https://loremflickr.com/320/240?random=${id}`}/>
           
            <div>
           <h2>{name}</h2>
           <p>{email}</p>
           </div> 
        </div>
    );
}

export default Card;