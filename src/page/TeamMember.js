import React from 'react';
import { FaTwitter, FaLinkedin, FaMailBulk } from 'react-icons/fa'; 
import { FiMail } from 'react-icons/fi';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105">
      <div className="team-member-image-wrapper flex items-center justify-center">
        <img src={member.imageSrc} alt={member.name} className="w-32 h-32 rounded-full object-cover" />
      </div>
      <div className="team-member-details mt-4 text-center">
        <h3 className="text-x2 font-semibold">{member.name}</h3>
        <p className="text-primaryBlue">{member.role}</p>
        <div className="team-member-bio mt-2 text-sm text-gray-500">{member.bio}</div>
        <div className="team-member-social mt-4 flex justify-center">
          {member.socialMedia.twitter && (
            <a
              href={`https://twitter.com/${member.socialMedia.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:text-blue-700"
            >
              <FaTwitter size={24} />
            </a>
          )}
          {member.socialMedia.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${member.socialMedia.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
