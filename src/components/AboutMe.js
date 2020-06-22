import React, {Component} from 'react';
import Typist from 'react-typist';

class AboutMe extends Component {
	state = {
    	typing: true,
  	}
  	done = () => {
    	this.setState({ typing: false }, () => {
      	this.setState({ typing: true })
    	});
  	}
	render(){
		return(
			<div className='about_me shadow-5 bg-white'>
				<div className='pa3 about_me-header'>
					<div className='pt2'>
					    {this.state.typing ?
						<Typist className="pa3 f2 tc" avgTypingDelay={25} startDelay={1000} onTypingDone={this.done}>
							I'm <strong>Ani!</strong>
							<Typist.Backspace count={4} delay={750} />
							<Typist.Delay ms={500} />
							a <strong>Software Engineer.</strong>
							<Typist.Backspace count={20} delay={750} />
							<Typist.Delay ms={500} />
							an <strong>ML enthusiast</strong>.
							<Typist.Backspace count={17} delay={750} />
							<Typist.Delay ms={500} />
							a <strong>Tennis player.</strong>
							<Typist.Backspace count={16} delay={750} />
						</Typist>
						: ''}
					</div>
					<h1 className='tc'>About Me</h1>
					<p className='ph5 f4'>
						I’m a software engineer who's always looking for challenging opportunities. As technology continues to evolve 
						it creates new roadblocks and problems to solve. There’s always more to learn, more to experience, 
						and even more to create. My passion stems from this opportunity to challenge myself - learning as much as 
						possible in new, unexplored areas, and solving complex problems.

						<br/><br/>After graduating in June 2018, I joined Workday's engineering team under Financials to build varied, meaningful, 
						and interesting applications on a daily basis. As of today I have ~2 years of experience building complex, 
						scalable applications on the cloud. I’ve had the wonderful opportunity to explore building both customer facing 
						frontend and internal backend tooling products which has granted me a diverse skillset of programming languages 
						and technologies. In addition, I specialized in machine learning for my Masters Thesis with a heavy focus on 
						research, design, and implementation of modern day computer vision neural network models with an application to object 
						classification and detection in games. Through these diverse experiences, I’ve learned that I enjoy tackling challenges 
						head on and look forward to finding my next big one! 

						<br/><br/>My overall goal is to find ways of making software more accessible to everyone by bringing it into their 
						everyday lives. Machine learning is my primary area of interest and where I aim to make this differece.
					</p>
					<h2 className='tc'>My Interests:</h2>
					<ul className='ph5 f4'>
						<li>Backend Software Development</li>
						<li>Machine Learning</li>
						<li>Neuroscience</li>
						<li>Research oriented Design and Development</li>
					</ul>
					<h2 className='tc'>Education:</h2>
					<p className='ph5 f4'>
						California Polytechnic State University, San Luis Obispo<br/>
						M.S. Computer Science (ML Specialization in Masters Thesis), Graduated with Distinction Honors<br/><br/>
						
						University of California, San Diego<br/>
						B.S. Biochemistry/Cell Biology
					</p>
				</div>
			</div>
		);
	}
}

export default AboutMe;