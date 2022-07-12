import '../stylesheets/Projects.css'

const Projects = () => {
    return(
        <div className="projects-page">
            <div className="projects-heading">
                <h1>My projects!</h1>
            </div>

            <div className="project1">
                <h2><a href="https://robby-13.github.io/GA-React-Project/">Quotes React App</a></h2>
                <img src="https://user-images.githubusercontent.com/73762993/169400301-b66b9efc-a5a5-454e-94c1-7191523b0e56.png" className="project1-picture" width="600px"/>
                <p className='project1-details'>A project I built with React where I populated the app with an API that hosted ~2000 quotes. The app has four distinct routes, the home page, about page, authors page and quotes page.
                    The Home page has one quote displayed at all times, and the quote changes upon refresh. The Quotes and Authors pages work in the same sense but with 20 quotes/authors displayed respectively,
                    also regenerating whenever the page is refreshed. This way every quote and author name in the API has a chance of being displayed in the app.
                </p>
            </div>

            <div className="project2">
                <h2><a href="https://github.com/robby-13/Kotlin-DSL">Kotlin DSL</a></h2>
                <img src="https://i.pinimg.com/736x/ac/0b/71/ac0b718d995deda3e1e4ee893501324d.jpg" alt="Kotlin Logo" width="150px" className='project2-picture' />
                <div className='project2-details'>
                    <p className='project2-p1'>During my last semester at UH, I took a course called Programming Languages and Paradigms. The purpose of the course was to work with multiple programming languages
                        in order to build a versatility where you do not rely on just one. For my final project, I worked with a team of two other students and we built a Domain Specific Language using Kotlin,
                        a language neither of us had ever heard of yet alone worked with in the past. The objective of a DSL is to write a program within a specific programming language in such a way that
                        the program reads like English, for users that have no programming knowledge or history whatsoever. 
                    </p>
                    <p className='project2-p2'>We had two weeks to complete this project and so I divided our time into three series of four day periods with a remaining two days. 
                        The first of the four days was dedicated to research - what the heck is Kotlin and why is it used, what is it's syntax? Once we had logistical understanding of Kotlin,
                        we dedicated the next series of four days to coding it. Whatever came to mind we plugged it into our IDE and hoped it worked. StackOverFlow and random programming forums
                        were our best friends during this stage. The last of the four days were then dedicated to debugging, we cleaned up our code and made sure it followed the proper guidelines
                        assigned to us. The remaining two days were a blessing, since we pretty much had a working final product we bombarded our professor with questions and requests to review to
                        ensure we get an A. We were able to get him to review our code at least four times until the due date, and in the end we did in fact get an A, as well as an amazing learning experience
                        we could all add to our resumes.
                    </p>
                </div>
            
            <div className="project3">
                <h2><a href="https://robby-13.github.io/react-quiz/">React Quiz</a></h2>
                <img src="https://i.imgur.com/xsdqy4i.png" alt="React Quiz Screenshot" width="250px"/>
                <div className='project3-details'>
                    <p>
                        I enjoyed working with React so much at General Assembly that I re-created a previous Python project
                        with React. The project in Python was built using the PyCharm IDE and only really worked inside the IDE itself.
                        So I put my new front-end skills to the test and built a quiz app with the same questions, and made a proper user
                        interface and everything! The app works entirely with React's built-in useState functions and the states handle everything, from the question order to the final
                        score that is displayed to the user at the end.
                    </p>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default Projects