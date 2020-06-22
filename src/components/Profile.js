import React from 'react';
import './Profile.css';
import Pfpic from './data/Anipic.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import resume from './data/VenkateshAnirudh_SWE_Resume.pdf';

const Profile = () => {
	return(
		<div>
			<div className='tc pa3'>
				<img className='pf_pic' src={Pfpic} alt='pfpic' style={{'width': '60%', 'height': '60%'}}/>
			</div>
			<div className='tc f2 white'>
				Anirudh Venkatesh
			</div>
			<div className='tc pa3 f5 white'>
				<i>People are incredibly creative and passionate about what they do. I love giving them the building blocks to do so!</i>

			</div>
			<div className='flex justify-center'>
				<div className='pa3'>
					<Fab aria-label="LinkedIn" size='medium' href='https://www.linkedin.com/in/anirudhvenkatesh-se' color='inherit'>
					  <LinkedInIcon fontSize="large"/>
					</Fab>
				</div>
				<div className='pt3'>
					<Fab aria-label="GitHub" size='medium' href='https://github.com/anvenkat09'>
					  <GitHubIcon fontSize="large"/>
					</Fab>
				</div>
			</div>
			<div className='tc pa3'>
		    	<Button variant='contained' size="small" color="secondary" href={resume}>
		      		Resume
		    	</Button>
			</div>
		</div>
	);
}

export default Profile;