import React from 'react'
import { Component } from 'react'
import TablePlan from './TablePlan'
import Iframe from 'react-iframe'
import './Compon.css'


class Home extends Component {
  render() {
    return (
      <div className="Home-Wrapper">
      
      {/* <div className="grid">
          {PlanList.map(renderList)}
        </div> */}
        <TablePlan />

        <img className="Before--After" src="https://i.ibb.co/5vFZZbF/EBD0-B9-EC-2-D97-4-D88-BD4-D-694-DC5-CDFBC5.jpg"
          alt="Before--After"
          height={500}
          width={400} 
        />

        <span><h1>NO PAIN NO GAIN</h1>Marck is a passionate and ambitious trainer in the fitness industry. His passion for fitness started a year after he began working out. He initially started working out because he was tired of being skinny and decided to make a change to his life. Fast forward to a year later and the changes he saw were tremendous, and that inspired him to get into the industry with hopes of helping as many people as he can do the same thing he did. Marck’s main goal is to help as many people as he can accomplish their desired body goals or reach a point where they are comfortable with how they look AND feel. Fitness to Marck is more than just physical or how you look but more so of how you feel mentally because mental health is extremely important in life especially in today’s age. Marck is currently pursuing his BA in Psychology which will benefit him a lot by giving him the resources of being able to understand people a lot better, by understanding how people’s mind works, Marck will be able to motivate YOU more efficiently.
        Remember, train smart, not hard, <b>Quality-Over-Quantity</b></span>

        <div className="Video">
          <h3>My 2 year body transformation SKINNY to RIPPED</h3>
          <Iframe width="560" height="315" src="https://www.youtube.com/embed/_caukWh354s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>

      </div>

      
    )
  }
}

export default Home

