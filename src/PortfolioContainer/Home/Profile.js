import React from 'react';
//import Typical from 'typical';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='https://www.facebook.com/profile.php?id=100008169066805'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/sannasi_chotu/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com/ChottuSannasi'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/sannasi-m-58a9b421a/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/Sannasichottu'>
                        <i className='fa fa-github-square'></i>
                    </a>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Sannasi</span>
                    </span>
                </div>
              {/*   <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Sannasi Dev 👦",
                                1000,
                                "Full Stack Developer 💻",
                                1000,
                                "MERN Dev 😎",
                                1000,
                                "Web Dev 🖥",
                                1000,
                                "React/React Native Dev 📱",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>*/}
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='Sannasicv.pdf' download='Sannasi FSD cv.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
        </div> 
    </div>
  )
}
