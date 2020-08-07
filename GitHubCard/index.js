import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const promise = axios.get('https://api.github.com/users/maycie-morris');
const promise2 = axios.get('https://api.github.com/users/maycie-morris/followers');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

// Objects

function githubCard (obj) {
  const divCard = document.createElement('div');
  const img = document.createElement('img');
  const divCardInfo = document.createElement('div');
  const header3 = document.createElement('h3');
  const pUsername = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const anchor = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  // Classes

  divCard.classList.add('card');
  divCardInfo.classList.add('card-info');
  header3.classList.add('name');
  pUsername.classList.add('username');

  // Content

  img.src = obj.avatar_url;
  header3.textContent = obj.name;
  pUsername.textContent = obj.login;
  pLocation.textContent = `Location: ` + obj.location;
  anchor.href = obj.html_url;
  anchor.textContent = obj.html_url;
  pFollowers.textContent = `Followers: ` + obj.followers;
  pFollowing.textContent = `Following: ` + obj.following;
  pBio.textContent = `Bio: ` + obj.bio;

  // Append

  pProfile.appendChild(anchor);
  divCardInfo.append(header3, pUsername, pLocation, pProfile, pFollowers, pFollowing, pBio);
  divCard.appendChild(img);
  divCard.appendChild(divCardInfo);
  


  return divCard;
}

const cardEntry = document.querySelector('.cards')


  promise.then(response => {
    cardEntry.appendChild(githubCard(response.data));
    })
    .catch(err => {
      console.log('Error!', err)
    });


    // STEP FIVE

    promise2.then(response => {
      const friends = response.data;
      friends.forEach(data => {
        cardEntry.appendChild(githubCard(data))
      })
    })
    .catch(err => {
      console.log('Nope!', err)
    })


  


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
