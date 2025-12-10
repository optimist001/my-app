import React from 'react'
import Profile from './Profile';

function Card() {
  return (
    <div>
      <h1 className = 'title'>Our Teams</h1>
      <Profile person = {{
        name: 'Tiamiyu Ibraheem',
        profession: 'Web Developer',
        skills: [
          'html',
          'css',
          'javascript'
        ],
      }}/>
    </div>
);
}

export default Card;
