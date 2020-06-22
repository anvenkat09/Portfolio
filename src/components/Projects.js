import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Projects.css';
import studybuddiespic from './data/android_app_img.png';
import digitclasspic from './data/digit_class_app_img.png';
import thesisimg from './data/thesis_img.png';
import portfolioimg from './data/portfolioimg.png';
import facedetectimg from './data/facedetectimg.png'
import facedetectbackendimg from './data/facedetectbackendimg.png';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

// style={{ backgroundColor: "#000" }} 

const Projects = () => {
	// const classes = useStyles();
	return(
		<div className='ph5'>
			<div className='pa4 tc'>
				<h1>Projects</h1>
			</div>
			
			<div className='grid-wrapper'>

				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://digitalcommons.calpoly.edu/theses/1845/">
				    	<CardMedia
				      		component="img"
				      		alt="thesisimg"
				      		height="260"
				      		image={thesisimg}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		Masters Thesis: Object Tracking in Games using CNNs (2018)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				      		Python Implementation of computer vision based ML model using Convolutional Neural Networks (dubbed SmashNet) and YOLO object detection to
							track characters during real-time gameplay of Super Smash Brothers Melee. Model trained using hand-labeled gameplay
							frames reaching approximately 68.25% accuracy. Built a bot capable of performing in-game actions based on tracked character locations.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="secondary" href="https://digitalcommons.calpoly.edu/theses/1845/">
				      		Publication
				    	</Button>
					</CardActions>
				</Card>
			
				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://github.com/anvenkat09/SmartBrain---Facial-Recognition">
				    	<CardMedia
				      		component="img"
				      		alt="facedetect"
				      		height="260"
				      		image={facedetectimg}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		SmartBrain Face Detection (2019)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				        		ReactJS Facial Recognition app that is able to detect any faces present in an Image via
				        		the Clarifai API. Displays the image with the detected bounding boxes around the faces.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="primary" href="https://smartbrain-facedetect-app.herokuapp.com/">
				      		Demo
				    	</Button>
				    	<Button variant='contained' size="small" color="secondary" href="https://github.com/anvenkat09/SmartBrain---Facial-Recognition">
				      		Github
				    	</Button>
					</CardActions>
				</Card>

				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://github.com/anvenkat09/CNN-Digit-Classification-App">
				    	<CardMedia
				      		component="img"
				      		alt="digitclass"
				      		height="260"
				      		image={digitclasspic}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		Handwritten Digit Classifier (2019)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				        		WebApp capable of classifying handwritten digits using a trained Convolutional Neural Network in the backend. 
				        		Model performs at ~ 92% classification success.
				        		Utilized Python (Flask) for the Rest API, and Vanilla JS for the UI implementation.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="secondary" href="https://github.com/anvenkat09/CNN-Digit-Classification-App">
				      		Github
				    	</Button>
					</CardActions>
				</Card>

				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://github.com/anvenkat09/SmartBrain-FR-Backend-API">
				    	<CardMedia
				      		component="img"
				      		alt="facedetectbackend"
				      		height="260"
				      		image={facedetectbackendimg}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		SmartBrain Backend API (2019)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				        		NodeJS/ExpressJS Implementation of the backend for SmartBrain Face Detection. 
				        		Manages and authenticates user profiles via PostgreSQL databases and KnexJS.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="secondary" href="https://github.com/anvenkat09/SmartBrain-FR-Backend-API">
				      		Github
				    	</Button>
					</CardActions>
				</Card>

				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://github.com/anvenkat09/portfolio">
				    	<CardMedia
				      		component="img"
				      		alt="aniportfolio"
				      		height="260"
				      		image={portfolioimg}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		Ani's Portfolio (2019)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				        		My Portfolio website that you're currently looking through! Made using ReactJS.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="secondary" href="https://github.com/anvenkat09/portfolio">
				      		Github
				    	</Button>
					</CardActions>
				</Card>

				<Card className='card-config'>
					<CardActionArea className='card-body-config' href="https://github.com/anvenkat09/Study-Buddies">
				    	<CardMedia
				      		component="img"
				      		alt="studybuddies"
				      		height="260"
				      		image={studybuddiespic}
				      		title=""
				    	/>
				    	<CardContent>
				      		<Typography gutterBottom variant="h5" component="h2">
				        		StudyBuddies (2017)
				      		</Typography>
				      		<Typography variant="body2" color="textSecondary" component="p">
				        		Android App that tracks course progress for students. Allows enablement of notifications for higher priority tasks.
				        		Built using Java.
				      		</Typography>
				    	</CardContent>
				  	</CardActionArea>
				  	<CardActions className='button-config' style={{justifyContent: 'center'}}>
				    	<Button variant='contained' size="small" color="secondary" href="https://github.com/anvenkat09/Study-Buddies">
				      		Github
				    	</Button>
					</CardActions>
				</Card>

			</div>
		</div>
	);
}

export default Projects;