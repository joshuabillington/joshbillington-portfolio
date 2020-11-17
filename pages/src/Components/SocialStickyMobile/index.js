import { Linkedin, GitHub }from 'react-feather';

const SocialStickyMobile = () => {
    return (
        <div> 
      <div style={{zIndex: 100, position: 'fixed', top: '90%', left: 15 , backgroundColor: 'rgba(255,255,255,0.9);', padding: '10px', borderRadius: '15px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)', display: 'inline-flex' }} className='social-sticky-mobile'> 
        <div>
          <a href='https://www.linkedin.com/in/joshuambillington/' target='blank'>
            <Linkedin className='grow' style={{ marginLeft: '0', paddingBottom: '0px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)', color: '#121f43', fontSize: '1.25em'}} />
          </a>
        </div>
        <div>
          <a href='https://github.com/joshuabillington' target='blank'>
            <GitHub  className='grow' style={{ marginLeft: '15', marginTop: '0px', paddingBottom: '0px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)', color: '#121f43', fontSize: '1.25em'}} />
          </a>
        </div>
      </div>
      </div>
    ); 
  };
  
  export default SocialStickyMobile; 