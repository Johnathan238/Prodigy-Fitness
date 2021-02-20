# Prodigy-Fitness

**Prodigy-Fitness Description** This fitness website will allow clients to schedule appointments for fitness training sessions, also clients will be able to chose which monthly package is best for them.

### Layout
https://docs.google.com/document/d/1feemSI6GdLqO5qZ_aCbyhWymHPoq0zJG2-jRlc9JC84/edit

### Wireframe
https://whimsical.com/Sm8fkD5R9Nu7LrYDytZ6we

### MVP
- Render corrent info & img on Home
- Have the PlansCards in Plans with correct info with BootStrap
- Have the NavBar functionally and responsive with Links to Plans and Google form
### Post MVP 
- Have the IMG and Video with the about me text in the right column 
- Have the IMG and Video responsive

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   |  will have a Route so you can the the Pokémon sprite, abilities, more info|
|    BootStrap     | I used BootStrap to make the PlanCards |
|   Framer-Motion  | I used Framer-Motion for the menuToggle to make the hamburger when responsive |
|   MediaQuery     | I used MediaQuery for the NavBar to make it responsive |
|   React-Icons    | I used React-Icons for the Footer for my client social-media acoounts |
| Styled-Components| I used Styled-Components for NavBar, NavLinks, mobileNavLinks |



 
 #### Component Hierarchy
 ```
src
|__ components/
      |__ Compon.css
      |__ Footer.jsx
      |__ Home.jsx
      |__ Logo.jsx
      |__ MenuToggle.jsx
      |__ Navbar.jsx
      |__ NavLinks.jsx
      |__ responsive.js
|__ images/
|__ pages/
      |__ Plans.css
      |__ Plans.jsx
```

#### Component Breakdown
|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    NavBar    | functional |   n   |   y   | _The NavBar will provide Navlink to PlanCards & Google form._|
|   menuToggle | functional |   n   |   y   | _The menuToggle will allow hamburger motion when responsive._|
|mobileNavLinks| functional |   n   |   y   | _The mobileNavLinks will allow hamburger motion when responsive with NavLinks._|
|    Plans     | functional |   n   |   n   | _The Plans will contain the ifferent PlanCards using bootstrap ._|
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates
| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add title & navbar     |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| Plans |    H    |     3 hrs     |     5 hrs    |     4.5 hrs  |
| menuToggle |     H     |     6 hrs      |     3 hrs     |     3 hrs    |
| mobileNavLinks |     H     |     6 hrs      |     3 hrs     |     4 hrs    |
| Home |    H    |     3 hrs     |     2 hrs    |     1 hrs  |
| Footer  |    L     |     1 hrs      |     1 hrs     |    1hrs    |

### Code Showcase

```
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
    {
      
      title: 'HOME',
      text:
        '1 on 1 Training: For those that want the full experience and want to maximize and meet their full physique potential. *Brooklyn based area ONLY* ',
      list1:
        'Online Coaching: For those with very busy schedules but are still dedicated to their body goals and want to perform a highly effective exercise in the comfort of their own home, backyard, etc.',
      list2:
        'Personalized Workout Plans: For those that are experienced and need a set of workouts based on THEIR OWN body type to follow on their own time. ',
    },
    {
      
      title: 'PERSONALIZED WORKOUT PLANS',
      text:
        '*Take body type quiz* and I will create a custom workout plan exclusively for YOUR goals. One-time fee of $65  https://www.solutiontales.com/quiz/which-body-type-are-you-take-this-body-type-quiz-to-find-out/  ',
      list1: 'HOME *ONE TIME FEE OF $23*',
      list2: 'GYM *ONE TIME FEE OF $27*',
    },
  ]
```

### Code Issues & Resolutions
