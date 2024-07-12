import React from 'react'
import './skill.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Redux</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Material UI</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>NodeJs</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Express</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;
