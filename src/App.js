import './App.css';
import profilePix from './profile.jpeg';
// import Card from './Components/Card'

function Profile({person, size = 70}) {

  return (
        <section className = 'profile'>
            <img
                className = 'profilePix'
                src = {profilePix}
                alt = {person.name}
                width = {size}
                height = {size}
            />
            <p><b>{person.name}</b></p>
            <p><b>{person.profession}</b></p>
            <p> {person.skills.join(', ')} </p>
            <div className = 'btns'>
              <button>Message</button>
              <button>Follow</button>
            </div>
        </section>
);
}

export default function Card() {
  return (
    <div className = 'container'>
      <h1 className = 'title'>Our Teams</h1>
      <section className = 'cards'>
        <div className = 'card'>
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

        <div className = 'card'>
          <Profile person = {{
            name: 'Olakitan Ibraheem',
            profession: 'Data Analyst',
            skills: [
              'Python',
              'C#',
              'Mysql'
            ],
          }}/>
        </div>
        
        <div className = 'card'>
          <Profile person = {{
            name: 'Optimist Ibraheem',
            profession: 'Mobile App Developer',
            skills: [
              'html',
              'css',
              'javascript',
              'React.js',
              'React Native'
            ],
          }}/>
        </div>

      </section>

    </div>
);
}
