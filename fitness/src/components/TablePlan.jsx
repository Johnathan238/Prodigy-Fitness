import React from 'react'
import {  ListGroupItem } from 'react-bootstrap'

const PlanList = () => {
    const List =[
    {
        title: 'HOME',
        text: 
          '1 on 1 Training: For those that want the full experience and want to maximize and meet their full physique potential. *Brooklyn based area ONLY* ',
        list1:
            'Online Coaching: For those with very busy schedules but are still dedicated to their body goals and want to perform a highly effective exercise in the comfort of their own home, backyard, etc.',
        list2:
            'Personalized Workout Plans: For those that are experienced and need a set of workouts based on THEIR OWN body type to follow on their own time. ',
        }
    ]
  
  
  const renderList = (ListGroup, index) => {
    return (
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active">
        {ListGroupItem.title}
        </button>
        <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.text}</button>
        <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.list1}</button>
        <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.list2}</button>
    </div>
  
        )
    }

    return (
    <div className="grid"> <h1>Are You Ready to Become A New You  !</h1>
        {List.map(renderList)} 
    </div>
    )
}

export default PlanList