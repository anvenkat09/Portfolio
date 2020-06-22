import React, {Component} from 'react';
import AboutMe from './components/AboutMe.js';
import WorkExperience from './components/WorkExperience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Profile from './components/Profile.js';
import "tachyons";
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.expRef = React.createRef();
    this.projRef = React.createRef();
    this.skillRef = React.createRef();
  }

  navToAbout = (e) => {
    e.preventDefault();    
    this.aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  navToExp = (e) => {
    e.preventDefault();
    this.expRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  navToProj = (e) => {
    e.preventDefault();
    this.projRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  navToSkills = (e) => {
    e.preventDefault();    
    this.skillRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return (
      <div className="App flex noscroll">
        <div className='bg w-25 .relative scroll' >
          <Profile/>

          <div className='pt4 tc componentRouting'>
            <div>
              <button className='buttonLink f4 dim white bw2 ph3 pv2 mb2 dib' onClick={this.navToAbout}>About Me</button>
            </div>
            <div>
              <button className='buttonLink f4 dim white bw2 ph3 pv2 mb2 dib' onClick={this.navToExp}>Experience</button>
            </div>
            <div>
              <button className='buttonLink f4 dim white bw2 ph3 pv2 mb2 dib' onClick={this.navToProj}>Projects</button>
            </div>
            <div>
              <button className='buttonLink f4 dim white bw2 ph3 pv2 mb2 dib' onClick={this.navToSkills}>Skills</button>
            </div>
          </div>
        </div>

      	<div className="w-75 bg-near-white pa3 ph5-ns scroll">
          <div ref={this.aboutRef}>
            <AboutMe/>
          </div>

          <div ref={this.expRef}>
            <WorkExperience/>
          </div>

          <div ref={this.projRef}>
            <Projects/>
          </div>

          <div ref={this.skillRef}>
            <Skills/>
          </div>
      	</div>

      </div>
    );
  }
}

export default App;
