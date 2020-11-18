import { Linkedin, GitHub }from 'react-feather';


const SocialSticky = () => {
    return (
        <div style={{zIndex: 100, position: 'fixed', top: '25%', left: 15, backgroundColor: 'rgba(255,255,255,0.9);', padding: '10px', borderRadius: '15px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)' }} className='social-sticky-visible'> 
          <div>
            <a href='https://www.linkedin.com/in/joshuambillington/' target='blank' aria-label='linkedin'>
              <Linkedin className='grow' style={{ marginLeft: '0', paddingBottom: '0px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)', color: '#121f43', fontSize: '1.25em'}} />
            </a>
          </div>
          <div>
            <a href='https://github.com/joshuabillington' target='blank' aria-label='github'>
              <GitHub  className='grow' style={{ marginLeft: '0', marginTop: '32px', paddingBottom: '0px', boxShadow: '0 7px 30px -10px rgba(150,170,180,0.5)', color: '#121f43', fontSize: '1.25em'}} />
            </a>
          </div>
        </div>
      ); 
}

export default SocialSticky; 