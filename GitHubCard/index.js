/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/hashas')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const elCreator (obj) {

  // create elements
  const elDiv = document.createElement('div');
  const elImg = document.createElement('img');
  const elDiv2 = document.createElement('div');
  const elHeader = document.createElement('h3');
  const elPara1 = document.createElement('p');
  const elPara2 = document.createElement('p');
  const elPara3 = document.createElement('p');
  const pageAdd = document.createElement('a');
  const elPara4 = document.createElement('p');
  const elPara5 = document.createElement('p');
  const elPara6 = document.createElement('p');

  // append child elements
  elDiv.appendChild(elImg);
  elDiv.appendChild(elDiv2);
  elDiv2.appendChild(elHeader);
  elDiv2.appendChild(elPara1);
  elDiv2.appendChild(elPara2);
  elDiv2.appendChild(elPara3);
  elDiv2.appendChild(elPara4);
  elDiv2.appendChild(elPara5);
  elDiv2.appendChild(elPara6);
  elPara3.appendChild(pageAdd);

  // add CSS style classes
  elDiv.classList.add('card');
  elDiv2.classList.add('card-info');
  elHeader.classList.add('name');
  elPara1.classList.add('username');

  // add attributes


}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
