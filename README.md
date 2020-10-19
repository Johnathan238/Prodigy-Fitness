# Prodigy-Fitness

**Prodigy-Fitness Description** This fitness website will allow clients to schedule appointments for fitness training sessions, also clients will be able to chose which monthly package is best for them.

### Layout
https://docs.google.com/document/d/1feemSI6GdLqO5qZ_aCbyhWymHPoq0zJG2-jRlc9JC84/edit

### Wireframe
https://whimsical.com/Sm8fkD5R9Nu7LrYDytZ6we

### MVP
- Render corrent info & img on the Dom
- Have Route work with Pokémon Name 
- Build a componet with storyBooks
### Post MVP 
- Render correct Pokémon font 

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Each Pokemon Name will have a Route so you can the the Pokémon sprite, abilities, more info|
|   StoryBook      | I would like to use storyBook beacuse the Pokémon names will be in a component|

#### Data
|    API     | Quality Docs? |        Sample Query                            |
| :--------: | :-----------: |    :--------------------------------------:    |
| PokéApi    |      yes      | https://pokeapi.co/api/v2/pokemon?offset=20&limit=10|

```
{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=10",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
    "results": [
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}
 ```
 
 #### Component Hierarchy
 ```
src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ Pokemon.jsx
      |__ PokeAPI.jsx
      |__ Footer.jsx
```

#### Component Breakdown
|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of Pokémon official pages._|
| Pokémon Names| functional |   y   |   n   | _The pokemon name will route you to a page for more info on the specific      pokémon._|
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates
| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add title & nav     |    L     |     2 hrs      |     1 hrs     |    1 hrs    |
| Call th API for data |    H    |     3 hrs     |     3 hrs    |     2 hrs  |
| Making a Route with Pokemon names |     H     |     6 hrs      |     4 hrs     |     4 hrs    |
| Footer  |    L     |     1 hrs      |     1 hrs     |    1hrs    |

### Code Showcase

```
code snippet here
```

### Code Issues & Resolutions
