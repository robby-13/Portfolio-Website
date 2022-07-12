import { SocialIcon } from "react-social-icons"
import '../stylesheets/Home.css'

const Home = () => {
    return(
        <div className="home-page">
            <h1 className="name">Robby Singh</h1>
            <h3 className="title">Full-Stack Software Engineer</h3>
            <div className="body-paragraphs">
                <p className="bio-p1">Hi! My name is Robby Singh and I am an aspiring Software Engineer. 
                I am experienced in the three realms of learning programming: the university
                setting, self-taught and the bootcamp! </p>
                <p className="bio-p2">I graduated from the University of Houston in December 2021 with a
                Bachelors of Science in Sociology and a minor in Computer Science. I discovered my passion for
                coding a little late in my univeristy journey, I had my hopes set for acquiring a degree in CS 
                but since I was a senior already my FAFSA clock was ticking. I was able to walk out with decent exposure
                to programming thanks to the CS minor coursework, where I worked primarily with C++.</p>
                <p className="bio-p3">Post-graduation I started working with Python. I learned the syntax, built small
                projects, and dabbled with the Flask and Django frameworks. After a good three months of doing this,
                I realized how much I love Python and have now made it my primary programming language.</p>
                <p className="bio-p4">By mid-March I realized I was having no luck trying to secure a job on my own,
                so I enrolled in General Assembly's Software Engineering Immersive Program. Here I picked up an array
                of skills in front-end and full-stack development. I worked with HTML/CSS, JavaScript, jQuery, React,
                Express, MongoDB, PostgreSQL, Python and Django. I enjoyed working with React so much, it opened my
                eyes to how much I love working front-end along with back-end.</p>
                <p className="bio-p5">That being said, I am open to remote Full Stack Software Engineer positions! 
                I am versatile with programming languages and am more than open to learning new technologies! Below is my
                contact information, please feel free to reach out whenever :)</p>
            </div>
            <div className="social-icons">
                <SocialIcon className="linked-in" url='https://www.linkedin.com/in/robby-singh13/' />
                <SocialIcon className="gmail" url='mailto:singh.robbys13@gmail.com' />
                <SocialIcon className="gitHub" url='https://github.com/robby-13' />
            </div>
        </div>
    )
}

export default Home