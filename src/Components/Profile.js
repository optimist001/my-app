import React from 'react'

function Profile({person, size = 100}) {
  return (
        <section className = 'profile'>
            <img
                className = 'profilePix'
                src = 'profile.jpeg'
                alt = {person.name}
                width = {size}
                height = {size}
            />
            <p><b>{person.profession}</b></p>
            <p> {person.skills.join(', ')} </p>
            <button>Message</button>
            <button>Follow</button>
        </section>
);
}

export default Profile;
