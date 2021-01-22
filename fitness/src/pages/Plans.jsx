import { faBlackberry } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Card,  ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './Plans.css'

const Plans = () => {
  const cardInfo = [
    {
      image: '',
      title: '200-Plan: 20% Discount YOU PAY: $160',
      title1: '8 SESSIONS',
      text: '*MONTHLY PACKAGE*',
      list1: '2 30-minute sessions per week for 4 weeks',
      list2: '1 on 1 coaching; Online or In-Person',
      list3: 'Nutrition guide/tips ',
      list4: 'Accountability',
      list5: '24/7 access to me for checkup, support, and motivation',
      list6:
        'Progress tracking every 2 weeks: weight assessed, progress photos taken',
    },
    {
      image: '',
      title: '440-Plan: 35% Discount YOU PAY: $286',
      title1: '8 SESSIONS',
      text: '*MONTHLY PACKAGE*',
      list1: '2 30-minute sessions per week for 4 weeks',
      list2: '1 on 1 coaching; Online or In-Person',
      list3: 'Nutrition guide/tips ',
      list4: 'Accountability',
      list5: '24/7 access to me for checkup, support, and motivation',
      list6:
        'Progress tracking every 2 weeks: weight assessed, progress photos taken',
    },
    {
      image: '',
      title: '400-Plan: 28% Discount YOU PAY: $288',
      title1: '16 SESSIONS',
      text: '*MONTHLY PACKAGE*',
      list1: '4 30-minute sessions per week for 4 weeks',
      list2: '1 on 1 coaching; Online or In-Person',
      list3: 'Nutrition guide/tips ',
      list4: 'Accountability',
      list5: '24/7 access to me for checkup, support, and motivation',
      list6:
        'Progress tracking every 2 weeks: weight assessed, progress photos taken',
    },
    {
      image: '',
      title: '880-Plan: 45% Discount YOU PAY: $484 *MOST POPULAR*',
      title1: '16 SESSIONS',
      text: '*MONTHLY PACKAGE*',
      list1: '4 60-minute sessions per week for 4 weeks',
      list2: '1 on 1 coaching; Online or In-Person',
      list3: 'Nutrition guide/tips ',
      list4: 'Accountability',
      list5: '24/7 access to me for checkup, support, and motivation',
      list6:
        'Progress tracking every 2 weeks: weight assessed, progress photos taken',
    },
  ]

  const HomePlans = [
    {
      image: '',
      title: 'PERSONALIZED WORKOUT PLANS',
      text:
        '*Take body type quiz* and I will create a custom workout plan exclusively for YOUR goals. One-time fee of $65 (do not add this part in but this is the link to use for the questions, make the questions AUTO SUBMIT and results show up after completion… https://www.solutiontales.com/quiz/which-body-type-are-you-take-this-body-type-quiz-to-find-out/ ) ',
      list1: 'HOME *ONE TIME FEE OF $23*',
      list2: 'GYM *ONE TIME FEE OF $27*',
    },
    {
      image: '',
      title: 'HOME',
      text:
        '1 on 1 Training: For those that want the full experience and want to maximize and meet their full physique potential. *Brooklyn based area ONLY* ',
      list1:
        'Online Coaching: For those with very busy schedules but are still dedicated to their body goals and want to perform a highly effective exercise in the comfort of their own home, backyard, etc.',
      list2:
        'Personalized Workout Plans: For those that are experienced and need a set of workouts based on THEIR OWN body type to follow on their own time. ',
    },
  ]


  const renderCard = (card, index) => {
    return (
      <Card>
        <Card 
        style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="holder.js/100px180?text=Image cap"
            kay={index}
            className="Box"
          />
          <Card.Body className="CardHeader">
            <Card.Title>{card.title}</Card.Title>
            <Card.Title>{card.title1}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
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
          <Card.Body className="CardButton">
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Card>
    )
  }

  const renderHomeCard = (card, idx) => {
    return (
      <Card>
        <Card 
        style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="holder.js/100px180?text=Image cap"
            key={idx}
            className="Boz"
          />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{card.list1}</ListGroupItem>
            <ListGroupItem>{card.list2}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Card>
    )
  }

  return (
    <div className="grid">
      {cardInfo.map(renderCard)} {HomePlans.map(renderHomeCard)}
    </div>
  )
}

export default Plans
