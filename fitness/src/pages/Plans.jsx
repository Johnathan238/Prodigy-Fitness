import React from 'react'
import { Component } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Plans = () => {
  const cardInfo = [
    {
      image: '',
      title1: '200-Plan: 10% Discount YOU PAY: $180',
      title2: '8 SESSIONS',
      list1: '2 30-minute sessions per week for 4 weeks',
      list2: '1 on 1 coaching; Online or In-Person',
      list3: 'Nutrition guide/tips ',
      list4: 'Accountability',
      list5: '24/7 access to me for checkup, support, and motivation',
      list6: 'Progress tracking every 2 weeks: weight assessed, progress photos taken',
    },
  ]

  const renderCard = (card, index) => {
    return (
      // <Card style={{ width: '18rem' }} key={index} className="Box">
      //   <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
      //   <Card.Body>
      //     <Card.Title>{card.title}</Card.Title>
      //     <Card.Text>{card.text}</Card.Text>
      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      // </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" kay={index} className="Box"/>
        <Card.Body>
          <Card.Title>{card.title1}</Card.Title>
          <Card.Title>{card.title2}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{card.list1}</ListGroupItem>
          <ListGroupItem>{card.list2}</ListGroupItem>
          <ListGroupItem>{card.list2}</ListGroupItem>
          <ListGroupItem>{card.list3}</ListGroupItem>
          <ListGroupItem>{card.list4}</ListGroupItem>
          <ListGroupItem>{card.list5}</ListGroupItem>
          <ListGroupItem>{card.list6}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return <div className="grid">{cardInfo.map(renderCard)}</div>
}

//  extends Component {
//   render() {
//     return (
//       <div className="Home">
//         <h1>Are You Ready to Become A New You!</h1>

//         <div className="Plan--1">
//           <h2>200-Plan: 10% Discount YOU PAY: $180</h2>
//           <h3>8 SESSIONS</h3>
//           <h4>*MONTHLY PACKAGE*</h4>
//           <ul className="Plan--Details">
//             <li>2 30-minute sessions per week for 4 weeks</li>
//             <li>1 on 1 coaching; Online or In-Person </li>
//             <li>Nutrition guide/tips </li>
//             <li>Accountability </li>
//             <li>24/7 access to me for checkup, support, and motivation </li>
//             <li>
//               Progress tracking every 2 weeks: weight assessed, progress photos
//               taken{' '}
//             </li>
//           </ul>
//         </div>

//         <div className="Plan--2">
//           <h2>440-Plan: 15% Discount YOU PAY: $374</h2>
//           <h3>8 SESSIONS</h3>
//           <h4>*MONTHLY PACKAGE*</h4>
//           <ul className="Plan--Details">
//             <li>2 30-minute sessions per week for 4 weeks</li>
//             <li>1 on 1 coaching; Online or In-Person </li>
//             <li>Nutrition guide/tips </li>
//             <li>Accountability </li>
//             <li>24/7 access to me for checkup, support, and motivation </li>
//             <li>
//               Progress tracking every 2 weeks: weight assessed, progress photos
//               taken{' '}
//             </li>
//           </ul>
//         </div>

//         <div className="Plan--3">
//           <h2>400-Plan: 15% Discount YOU PAY: $340</h2>
//           <h3>16 SESSIONS</h3>
//           <h4>*MONTHLY PACKAGE*</h4>
//           <ul className="Plan--Details">
//             <li>4 30-minute sessions per week for 4 weeks </li>
//             <li>1 on 1 coaching; Online or In-Person </li>
//             <li>Nutrition guide/tips </li>
//             <li>Accountability </li>
//             <li>24/7 access to me for checkup, support, and motivation </li>
//             <li>
//               Progress tracking every 2 weeks: weight assessed, progress photos
//               taken{' '}
//             </li>
//           </ul>
//         </div>

//         <div className="Plan--4">
//           <h2>880-Plan: 25% Discount YOU PAY: $660 *MOST POPULAR*</h2>
//           <h3>16 SESSIONS</h3>
//           <h4>*MONTHLY PACKAGE*</h4>
//           <ul className="Plan--Details">
//             <li> 60-minute sessions per week for 4 weeks </li>
//             <li>1 on 1 coaching; Online or In-Person </li>
//             <li>Nutrition guide/tips </li>
//             <li>Accountability </li>
//             <li>24/7 access to me for checkup, support, and motivation </li>
//             <li>
//               Progress tracking every 2 weeks: weight assessed, progress photos
//               taken{' '}
//             </li>
//           </ul>
//         </div>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   }
// }

export default Plans
