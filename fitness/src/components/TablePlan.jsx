import React from 'react'
import {  Active , ListGroupItem} from 'react-bootstrap'

const PlanList = () => {
    const List =[
    {
        ti1: '1 on 1 Training:',

        li1: 
          'For those that want the full experience and want to maximize and meet their full physique potential. *Brooklyn based area ONLY* ',
        
        ti2: 'Online Coaching:',

        li2:
            'For those with very busy schedules but are still dedicated to their body goals and want to perform a highly effective exercise in the comfort of their own home, backyard, etc.',
        li3:
            'Personalized Workout Plans: For those that are experienced and need a set of workouts based on THEIR OWN body type to follow on their own time. ',
        }
    ]
  
  
  const renderList = (List, index) => {
    return (
    // <div className="list-group">
    //     <button type="button" class="list-group-item list-group-item-action active">
    //     {ListGroupItem.title}
    //     </button>
    //     <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.text}</button>
    //     <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.list1}</button>
    //     <button type="button" class="list-group-item list-group-item-action">{ListGroupItem.list2}</button>
    // </div>

    <ul class="list-group">
        <li class="list-group-item active">{List.ti1}</li>
        <li class="list-group-item">{List.li1}</li>
        <li class="list-group-item active">{List.ti2}</li>
        <li class="list-group-item">{List.li2}</li>
        <li class="list-group-item">{List.li3}</li>
        {/* <li class="list-group-item"></li> */}
    </ul>

        )
    }

    return (
    <div className="grid"> <h1>Are You Ready to Become A New You  !</h1>
        {List.map(renderList)} 
    </div>
    )
}

export default PlanList