import { Jumbotron, Button} from 'react-bootstrap'; 


const Banner = () => {
    return (

<Jumbotron className='home-banner'>
  <h1> full stack <br /> developer</h1>
  <p>
        Passionate about developing expressive and dyanmic applications. <br />  Experienced leveraging React, Node, Next, GraphQL, & MongoDB. <br /> Fluent in HTML/CSS, Javascipt, & Java. Looking for my next position. 
  </p>
  <p>
    <Button href='https://drive.google.com/file/d/1NrjBKfrS3QCXHy0CBS3JFIhCm7t9Ad9S/view?usp=sharing' target='blank' variant="primary" style={{backgroundColor: '#00008f', letterSpacing: '3px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '25px', border: '0px'}} className='grow'> RESUME </Button>
    <Button href='mailto:joshuambillington@gmail.com' variant="primary" style={{backgroundColor: '#00008f', marginLeft: '25px', letterSpacing: '3px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '25px', border: '0px'}} className='grow'> CONTACT </Button>
  </p>
</Jumbotron>

    )
}

export default Banner; 