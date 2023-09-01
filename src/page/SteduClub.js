import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { useTheme } from '../components/ThemeContext';
import SteduClubImage from '../assets/images/image.jpeg';

const SteduClub = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`page-content ${theme}`}
    >
      <div className="container mx-auto py-16 px-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Stedu Club
          </h1>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Curricula for students, by students.
          </p>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            What is Stedu Club?
          </p>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Stedu Clubs are student-run high-school clubs that allow students to learn about certain subject areas in STEM that wouldn’t be taught in a specialized manner at many public/private schools around the world. We’re looking for proactive student-leaders to sign-up to lead our Stedu Clubs to bring advanced specialized knowledge to their schools!
          </p>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Stedu Club Leaders bring:
          </p>
          <ul className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Classes
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Workshops
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Expert Panels
            </li>
          </ul>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            To their peers, allowing students to showcase leadership, ambition, and passion! For the 2023-24 school year, Stedu Association is offering materials for Stedu Neuroscience Clubs!
          </p>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            In return for the high-quality and free resources that Stedu Association provides for clubs, student-leaders make review sheets and other course materials to be shared by clubs near and far!
          </p>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Stedu Clubs get access to:
          </p>
          <ul className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Promotional materials to get students involved in the clubs and pitch the club to their schools
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Content slides to help with understanding the subject material at any level
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              Official Stedu Association affiliation and email templates for inviting expert guests for panels and workshops to talk to your club
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              A collaborative network of clubs globally for sharing study materials, tips, and passions
            </li>
            <li className="mb-2 flex items-center">
              <FiBriefcase className="mr-2" size={20} />
              As well as more coming soon!
            </li>
          </ul>
          <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Link to Stedu Club guidelines and our link to the registration form to make a club once everything is ready: 2023-24 Stedu Club Guidelines
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mt-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src={SteduClubImage} alt="Stedu Club" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
              <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                How to Start Your Very Own Stedu Club at Your School! (As of August 2023)
              </h2>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What are Stedu Clubs?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Stedu Clubs are student-run high-school clubs that allow students to learn about certain subject areas in STEM that wouldn’t be taught in a specialized manner at many public/private schools around the world. Stedu Clubs allow students at public/private schools around the world to lead curriculums in advanced STEM areas that they’re passionate about. We’re looking for proactive student-leaders to sign-up to lead our Stedu Clubs to bring advanced specialized knowledge to their schools! These leaders would use Stedu Association’s resources to bring in workshops with local STEM experts and teach their peers about topics in STEM that may not be offered in their school’s curriculum.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What are the steps to make my own Stedu Club at my high school?
              </p>
              <ul className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Choose between the course offerings that we have! As of August 2023, we will be offering resources for neuroscience clubs.
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Get an advisor on board. This will most likely be required by your school and will make creating your club easier and more organized.
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Choose a day and time to run your Stedu Club. This should be a day when there aren’t many other clubs running where the members would be interested in joining yours.
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Build up an executive board for your club! It should have a president, vice-president, treasurer, and secretary. This should most likely line up with your school’s club guidelines, as well.
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  If you need to pitch the club to your school, use our resources on the premise of the club and how it will run to present it.
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Once you’re approved to run the club, promote it through flyers around your school (if you’re able) and/or your school’s social media pages!
                </li>
              </ul>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                When your club meets, get started with teaching using the materials provided by Stedu Association. Your club will add onto these materials in the form of worksheets or study guides each month.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                If your club chooses to do so, email experts in your Club’s field to talk or plan an event. Resources are available for both of these from the Stedu Association.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What are the benefits of making my own Stedu Club?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                By creating your very own Stedu Club, you create leadership opportunities for yourself and others, which can help you and your peers grow in soft skills like project management and public speaking. Stedu Clubs most importantly allow students to delve deeper into the STEM subjects they enjoy the most in a more accessible and affordable way. The resources that Stedu Association offers to Stedu Clubs – such as presentations, worksheets, and Club marketing materials – are all free of charge as long as the Club fulfills the following responsibilities.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Steu Association also provides templates for emailing professors or other professionals in the field of your Club for workshops and guidelines for planning events. Lastly, we also plan to provide free stickers and merch for STEDU Club members!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                *Free stickers and merch will be provided based on the quarterly budget for the department - TBD.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What are the responsibilities of my Stedu Club?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Each month, every club is required to submit its own original study resources to the drive that will be accessible for all clubs to use as they move along in their respective curricula. The study materials need to meet the following criteria to be approved:
              </p>
              <ul className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  Length of materials each month must be 10 pages
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  The font and formatting of materials must be consistent and neat
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  The materials must be typed up or digitized for easy distribution and usage by other clubs
                </li>
                <li className="mb-2 flex items-center">
                  <FiBriefcase className="mr-2" size={20} />
                  The materials must have the Club number listed and be accompanied by a list of the members involved in creating them. The list of names will not be distributed in any way and should be submitted along with attendance materials
                </li>
              </ul>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Stedu Clubs also have attendance requirements, much like any other club at your school. Members in your Stedu Club must attend at least 80% of your club’s meetings, and attendance must be uploaded to the shared platform where you submit documents (the platform is TBD).
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                How do I teach my peers in my Stedu Club?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Stedu Clubs all have access to the same materials in the shared drive platform, which will contain the presentations for each week, study guides, and club-made materials for studying as well. Presentations are created by Stedu Association staff, as already stated, and will include all the figures and information for the week. The presentation slide decks are in Powerpoint format, which allows for access no matter if the presenter has a Google account or not. All the slides contain speaker notes to elaborate on the information covered on the corresponding slide, so it is best that the presenter for the week goes over the material at least 3 days in advance of your club’s meeting date. You may also add slides for further elaboration of information or for customization based on your club’s needs.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What happens if the club does not abide by the aforementioned responsibilities?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                If your Stedu Club does not fulfill the responsibilities listed above, access to the materials provided by Stedu Association for promotion, curriculum progression, and interaction with professionals will be revoked. This allows for fair allocation of resources among students who are part of the Stedu Club system all over the country and world.
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Ready to make your own Stedu Club? Sign-up today:
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                General Information about Stedu Association
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                What is Stedu Association?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Stedu Association is a fiscally sponsored organization under the California-based 501(c)(3) nonprofit organization Hack Foundation, also known as Hack Club. Starting in 2020, we expanded our mission of creating STEM opportunities and bringing high quality STEM education resources to people all around the world through courses, camps, and other programs. We’ve brought such resources to hundreds of students from underrepresented and underserved groups in STEM. With your leadership, we’ll work to reach even more!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Some of our programs include:
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                - Our start-up summer camp!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                - Our seasonal courses (2023-24 topics TBA)!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                - STEDU Fund!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                - Our Stedu Clubs!
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Where can you find Stedu Association?
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Website: https://www.steduassociation.com
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Instagram: https://instagram.com/steduassociation?igshid=YmMyMTA2M2Y=
              </p>
              <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Donation Page: https://hack.ms/steduassociation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SteduClub;
