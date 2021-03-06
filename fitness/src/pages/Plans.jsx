import React from 'react'
import { Card,  ListGroup, ListGroupItem } from 'react-bootstrap'
import './Plans.css'
import '../components/Compon.css'

const Plans = () => {
  const cardInfo = [
    {
      
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
    // {
      
    //   title: 'HOME',
    //   text:
    //     '1 on 1 Training: For those that want the full experience and want to maximize and meet their full physique potential. *Brooklyn based area ONLY* ',
    //   list1:
    //     'Online Coaching: For those with very busy schedules but are still dedicated to their body goals and want to perform a highly effective exercise in the comfort of their own home, backyard, etc.',
    //   list2:
    //     'Personalized Workout Plans: For those that are experienced and need a set of workouts based on THEIR OWN body type to follow on their own time. ',
    // },
    {
      
      title: 'PERSONALIZED WORKOUT PLANS',
      text:
        '*Take body type quiz* and I will create a custom workout plan exclusively for YOUR goals. One-time fee of $65 ',
      list1: 'HOME *ONE TIME FEE OF $23*',
      list2: 'GYM *ONE TIME FEE OF $27*',
    },
  ]


  const renderCard = (card, index) => {
    return (
      <Card>
        <Card 
        style={{ width: '18rem' }}>
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
          <Card.Body className="Buttons">
            <button className="CardButton"><Card.Link href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank">Schedule With Me</Card.Link></button>
            <button className="CardButton"><Card.Link href="https://www.solutiontales.com/quiz/which-body-type-are-you-take-this-body-type-quiz-to-find-out/" target="_blank">*Take body type quiz*</Card.Link></button>
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
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{card.list1}</ListGroupItem>
            <ListGroupItem>{card.list2}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <button className="CardButton"><Card.Link href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank">Schedule With Me</Card.Link></button>
            <button className="CardButton"><Card.Link href="https://www.solutiontales.com/quiz/which-body-type-are-you-take-this-body-type-quiz-to-find-out/" target="_blank">*Take body quiz*</Card.Link></button>
          </Card.Body>
        </Card>
      </Card>
    )
  }

  return (
    <div className="grid"> <h1 className="title_1">Are You Ready to Become A New You  !</h1>
      {cardInfo.map(renderCard)} {HomePlans.map(renderHomeCard)}
    </div>
  )
}

export default Plans
