import ProfileCard from './componentes/ProfileCard'
import './App.css'

function App() {
  const profileData = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    bio: 'Front-end developer and avid reader.',
    links: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Frontend Mentor', url: 'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ/hub' },
      { label: 'LinkedIn', url: 'www.linkedin.com/in/giulia-soares-5510a9243' },
      { label: 'Twitter', url: 'https://x.com/' },
      { label: 'Instagram', url: 'https://www.instagram.com/' },
    ],
  };

  return (
    <div className="App">
      <ProfileCard {...profileData} />
    </div>
  );
}

export default App;
