# <p align="center">M4 TakeHome challenge ~5hrs</p>

<p align="center">A single-page application aimed at providing quick access to top news articles.</p>

### <p align="center">Contributors</p>
<div align="center">
  
  [Asher Spurr](https://github.com/AsherSpurr)

</div>

## Preview:
<div align="center">
  



https://github.com/AsherSpurr/takehome-m4/assets/144856487/258f4040-403a-4472-af90-75eb3c44b0f9





</div>
<p align="center">Technologies Used</p>
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub"/></code>
</div>

## Installation Instructions:
    ```
    git clone git@github.com:AsherSpurr/takehome-m4.git
    cd takehome-m4
    npm install
    npm start
    ```
### Environment variables
After cloning and installing packages
- Create a `.env` file in the root directory
- Copy and paste `REACT_APP_NEWS=myKey`
- Substitute `myKey` with `your Google API` key or **message me on GitHub** so I can provide mine.
## Future Features/Improvements
  1. Split global and local headlines between two pages
  2. Add styling to the Nav bar
## Context:
<!-- wins, challenges, time spent, goals, approaches etc -->
### Wins
- Filtering in real-time using radio chips/pills
- Quickly building out reusable UI using Material UI

### Challenges
- Mapping over data that was needed in a grid! The articles are in a grid layout, in order for that MUI Grid tag to recognize a collection of items I needed to map over the array inside my JSX

