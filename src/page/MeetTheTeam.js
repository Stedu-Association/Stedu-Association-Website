import React from 'react';
import { useTheme } from '../components/ThemeContext';
import TeamMember from './TeamMember';
import BoyAvatar from '../assets/images/team/boy_avatar.png';
import GirlAvatar from '../assets/images/team/girl_avatar.png';
import Audrey from '../assets/images/team/Audrey.jpg';
import BensonWang from '../assets/images/team/Beson_Wang.png';
import KayleeHong from '../assets/images/team/Kaylee_Hong.jpg';
import MarleneMcKinney from '../assets/images/team/Marlene_McKinney.jpeg';
import Sophia from '../assets/images/team/Sophia.jpg';
import ZaidShehryar from '../assets/images/team/Zaid_Shehryar.jpeg';
import AngadGuliani from '../assets/images/team/AngadGuliani.png';
import AnanyaVinay from '../assets/images/team/AnanyaVinay.jpeg';
import JamesZhang from '../assets/images/team/JamesZhang.jpeg';
import RyanHwang from '../assets/images/team/RyanHwang.jpeg';
import VaishnaviKale from '../assets/images/team/VaishnaviKale.jpg';

const MeetTheTeam = () => {
  const { theme } = useTheme();

  const teamMembers = [
    {
      name: 'Harry Shin',
      role: 'Founder & CEO',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
        gmail: 'gmail',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Simar Ahluwalia',
      role: 'CBO',
      imageSrc: GirlAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Sophia Frie',
      role: 'COO',
      imageSrc: Sophia,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Ryan Hwang',
      role: 'Executive VP',
      imageSrc: RyanHwang,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Angad Guliani',
      role: 'VP of Operations & Interim Discord Manager',
      imageSrc: AngadGuliani,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },

    {
      name: 'Audrey',
      role: 'Co-Director - STEDU Club',
      imageSrc: Audrey,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Zaid Shehryar',
      role: 'Co-Director - STEDU Club',
      imageSrc: ZaidShehryar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Kaylee Hong',
      role: 'Co-Director - Startup Summer Camp',
      imageSrc: KayleeHong,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Ananya Vinay',
      role: 'Co-Director - STEDU Club',
      imageSrc: AnanyaVinay,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Marlene McKinney',
      role: 'Vice President - Courses and Curricula',
      imageSrc: MarleneMcKinney,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'James Zhang',
      role: 'Director - Summer Camp Department',
      imageSrc: JamesZhang,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Benson Wang',
      role: '',
      imageSrc: BensonWang,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },

    {
      name: 'Ryan Hwang',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Sarah Li',
      role: '',
      imageSrc: GirlAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Ishan Khosla',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Korede Oguns',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Donya Aghdam',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Dorcas Adetunji',
      role: '',
      imageSrc: GirlAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'William Wang',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Carson Sheffield',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Joezer Pascal',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Chris',
      role: '',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Dowoon Lim',
      role: '',
      imageSrc: GirlAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Vaishnavi Kale',
      role: 'Web Developer',
      imageSrc: VaishnaviKale,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Eva Ernst',
      role: 'Web Developer',
      imageSrc: GirlAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
    {
      name: 'Odediran Marius',
      role: 'Web Developer',
      imageSrc: BoyAvatar,
      socialMedia: {
        twitter: 'twitter',
        linkedin: 'linkedin',
      },
      bio: 'Passionate about STEM education and creating opportunities for all learners.',
    },
  ];

  return (
    <div className={`meet-the-team-section ${theme === 'dark' ? 'bg-gradient-to-r from-black via-blue-900 to-black text-white' : 'bg-gradient-to-r from-blue-500 via-white to-blue-400 text-gray-800'} py-16 px-10`}>
      <div className="container mx-auto">
        <h2 className={`text-center text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Meet the Team
          <div className='section-separator' />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
