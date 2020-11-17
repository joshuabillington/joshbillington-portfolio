import { Card, Button } from 'react-bootstrap'; 
import propTypes from 'prop-types'

const SimpleCard = ({title, text, img, link}) => {
    return (
<a href={link}>  
<Card style={{ width: '18rem', height: '350px', borderRadius: '15px', marginTop: '100px', display: 'inline-block', marginLeft: '25px', marginRight: '25px', boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);' }}>
  <Card.Img variant="top" src={img} style={{borderRadius: '15px 15px 0 0', opacity: '0.5' }} />
  <Card.Body>
    <Card.Title> {title} </Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
  </Card.Body>
</Card>
</a>    

    ); 

}
SimpleCard.propTypes = {
    img: String, 
    title: String, 
    text: String, 
    link: String, 
}

SimpleCard.defaultProps = {
    img: 'https://res.cloudinary.com/ddd2lfnyh/image/upload/v1605294214/Screen_Shot_2020-11-13_at_1.21.54_PM_ywyjyl.png', 
    title: 'Rego Realty', 
    text: 'Some quick example text to build on the card title and make up the bulk of the content.',
    link: '', 
}





export default SimpleCard; 