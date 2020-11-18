import SimpleCard from '../Card'


const Projects = () => {
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}}> 
        <h1 style={{letterSpacing: '10px', fontSize: '3em'}}> projects </h1>

        <div name='projects'> 
        <video className='video-desktop' src='https://res.cloudinary.com/ddd2lfnyh/video/upload/v1605724433/regovid_uehs1o.mov' autoPlay width='1080px' loop style={{marginTop: '100px', borderRadius: '15px', boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}} />  
        <video className='video-mobile' src='https://res.cloudinary.com/ddd2lfnyh/video/upload/v1605293136/regorealty-mobile_pvlxtt.mov' autoPlay width='375px' loop style={{marginTop: '50px', borderRadius: '15px', boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}} />  
        </div>
        <div> 
        <SimpleCard title='Rego Realty' text='Developed using React, Next.js, GraphQL, and Strapi.js.' link='https://regorealty.ca'/> 
        <SimpleCard title='Maple Life Learning' text='UI Concept: Designed in Figma, tested for feasibility with React.' img='https://res.cloudinary.com/ddd2lfnyh/image/upload/v1605296361/Screen_Shot_2020-08-14_at_2.35.56_PM_rxbsbx.png' link='https://www.behance.net/gallery/103498169/Design-and-Development-of-Website'/> 
        <SimpleCard title='Portfolio Site' text='Developed using React, Next.js, and Bootstrap.' img='https://res.cloudinary.com/ddd2lfnyh/image/upload/v1605296450/Screen_Shot_2020-11-13_at_2.40.56_PM_hur96t.png' link='https://github.com/joshuabillington/joshbillington-portfolio'/> 
        </div>
        </div> 
    ); 

}; 

export default Projects; 