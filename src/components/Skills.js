import React from 'react';
import TF from './../tficon.svg';
import Keras from './../kerasicon.svg';
import './Skills.css';

const Skills = () => {
	return(
		<div className='ph5'>
			<div className='pt4 tc'>
				<h1>Skills</h1>
			</div>
			<div className="mw9 center ph3-ns">
			  <div className="grid-wrapper-skills tc">
			    	<div className='pt4'>
				    	<i className="devicon-python-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
				    	<h4>Python</h4>
				    </div>
		    		<div className='pt4'>
				    	<i className="devicon-java-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
				    	<h4>Java</h4>
				    </div>
					<div className='pt4'>
				    	<i className="devicon-javascript-plain colored" style={{'fontSize':'8em'}}></i>
						<h4>JavaScript</h4>
					</div>
			    	<div className='pt4'>
				    	<i className="devicon-react-original-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>ReactJS</h4>	
					</div>
			    	<div className='pt4'>
						<img src={TF} alt='tf' style={{'width':'8em','height':'8em'}}/>
						<h4>Tensorflow</h4>
					</div>
			    	<div className='pt4'>
						<img src={Keras} alt='keras' style={{'width':'8em', 'height':'8em'}}/>
						<h4>Keras</h4>
					</div>
					<div className='pt4'>
						<i className="devicon-nodejs-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>NodeJS</h4>
					</div>	
					<div className='pt4'>
						<i className="devicon-express-original-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>ExpressJS</h4>
					</div>
			    	<div className='pt4'>
						<i className="devicon-postgresql-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>PostgreSQL</h4>
					</div>
			    	<div className='pt4'>
						<i className="devicon-git-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>Git</h4>
					</div>
					<div className='pt4'>
						<i className="devicon-docker-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>Docker</h4>
					</div>
					<div className='pt4'>
						<i className="devicon-amazonwebservices-plain-wordmark colored" style={{'fontSize':'8em'}}></i>
						<h4>AWS</h4>
					</div>
			  </div>
			</div>
		</div>

	);
}

export default Skills;