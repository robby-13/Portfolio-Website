const About = () => {
    return(
        <div className="about-page">
            <div className="about-text">
                <h1 className="about-heading">A little about me...</h1>
                <p className="about-p1">As I've said, I am an aspiring Full-Stack Software Engineer.
                I have been programming for the past three years now and am currently seeking my first real
                role in the tech industry. I am very fluid in technology, and am more than open to the idea
                of learning new programming languages, frameworks, etc. Currently I am enjoying working with
                Python and JavaScript, this would be my top preference in terms of a tech stack to work with.
                But as I've stated, I am more than happy to learn new tech :)</p>
            </div>

            <div className="about-languages">
                <h3 className="about-languages-subheading">Languages I have worked with thus far:</h3>
                <img src="https://i.imgur.com/WBvNDfq.png" alt="Python" width="100px"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="100px"/>
                <img src="https://i.imgur.com/h0oxKKq.png" alt="C++" width="100px" />
                <img src="https://www.coveros.com/wp-content/uploads/2014/03/java-logo.jpg" alt="Java" width="100px" />
                <img src="https://i.pinimg.com/736x/ac/0b/71/ac0b718d995deda3e1e4ee893501324d.jpg" alt="Kotlin" width="100px" />
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="HTML" width="100px" />
                <img src="https://miro.medium.com/max/1400/1*nBQx44o-nYtb1q-NcAGq9Q.png" alt="CSS" width="72px" />
            </div>

            <div className="about-frameworks">
                <h3 className="about-frameworks-subheading">Frameworks I have worked with thus far:</h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" width="100px" />
                <img src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/express_js.png" alt="Express" width="100px" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png" alt="Flask" width="150px" />
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104647991/original/713f5097b5d34cd41d807bf8b16b08950a2df875/do-web-development-using-python-django.png" alt="Django" width="100px" />
            </div>
        </div>
    )
}

export default About