import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const WorkExperience = () => {
  return(
    <div>
      <div className='pa4 tc'>
        <h1>Experience</h1>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="July 2018 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Workday, Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer III</h4>
            <p>
              Worked as a Software Engineer for the Budgets and Accounting Center Functional Areas building large-scale
              customer facing software on the cloud.<br/><br/>
              <i>Tools: Java | Python | ReactJS | NodeJS | XpressO </i>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2016 - June 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">California Polytechnic State University, San Luis Obispo</h3>
            <h4 className="vertical-timeline-element-subtitle">M.S. Computer Science, ML Specialization in Masters Thesis</h4>
            <p>
              <i>GPA: 3.6+, Graduated with Distinction Honors</i>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2017 - Sep 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Cisco Systems, Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
            <p>
              Intern for Cisco's Core Software Group (Security and Enterprise Networking).
              Worked on Cross platform integration between Cisco’s IOT and Security products 
              for large-scale information transfer, visualization, and monitoring. <br/><br/>
              <i>Tools: Java | Python | GoLang </i>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2016 - Sep 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">One Convergence, Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer (Cloud) Intern</h4>
            <p>
              Intern for the DevOps group.
              Worked extensively with deployment of Openstack via Packstack installation/debugging through Docker containers and Btrfs snapshots. 
              Built an automation pipeline via Jenkins and Apache Groovy. Coded portions of deployment process using Ansible.
              <br/><br/>
              <i>Tools: Docker | Ansible | Java | Groovy </i>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default WorkExperience;
