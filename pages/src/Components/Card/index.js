import { Card, Button } from 'react-bootstrap'; 
import propTypes from 'prop-types'

const SimpleCard = ({title, text, img, link}) => {


    return (

<a href={link} className='card-hover' aria-label='link to development project'>  
<Card className='simple-card'>
  <Card.Img variant="top" src={img} style={{borderRadius: '15px 15px 0 0', opacity: '0.5' }} alt='website-porfolio-item' />
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
    img: 'https://res.cloudinary.com/ddd2lfnyh/image/upload/h_300/v1605294214/Screen_Shot_2020-11-13_at_1.21.54_PM_ywyjyl.png', 
    title: 'Rego Realty', 
    text: 'Some quick example text to build on the card title and make up the bulk of the content.',
    link: '', 
}





export default SimpleCard; 