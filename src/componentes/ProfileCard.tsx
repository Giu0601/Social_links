import React from 'react';
import '../App.css';

type ProfileCardProps ={
  name: string;
  location: string;
  bio: string;
  links: { label: string; url: string }[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, location, bio, links }) => {
  return (
    <div className="profile-card">
      <img src='./avatar-jessica.jpeg' alt={name} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-location">{location}</p>
      <p className="profile-bio">"{bio}"</p>
      <div className="profile-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="profile-link">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
