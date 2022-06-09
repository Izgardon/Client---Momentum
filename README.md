# Momentum - Keep Pushing Forward

Getting good at anything, let alone coding, requires dedication and practice but this isn't always easy to achieve. Personal projects can fall by the wayside or you get to a certain point and find yourself grinding to a halt. 

What if you could keep track of your goals, get rewarded with streaks and keep up your momentum to achieve your coding goals? Download Momentum today!

![SiteHomePage](./)

## About Momentum

Momentum has the following functionalities:

- Users can login and be sure their password is safely stored.
- Users can choose a daily habit to track as well as a weekly habit.
- Users have a visual representation of their achievement towards the habit and complete it for the day or week.
- Users can view their completion streak for the tracked habits.

### Installation

1. Clone the repo
2. Using the terminal of your choice -> `Git Clone 'SSH or HTTPS key'`
3. Install the node packages -> `npm i`

### Usage

1. Navigate to the client-momentum folder
2. Open a Terminal
3. Enter(FURTHER DETAILS REQUIRED) to run a local client which is connected to our heroku server

### Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![SAAS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

###### Jest

We used Jest to test our code and our coverage. To do this we install Jest as a dev dependency;

- `npm i -D jest`

  We used custom scripts to our package.json to constantly check our code check our coverage;

- `"test": "jest --watchAll"`
- `"coverage": "jest --coverage"`

To test the DOM we used the `jest-environment-jsdom`

- `npm i --D jest-environment-jsdom`

To test the fetch API we used a jest library `jest-fetch-mock`

- `npm i --D jest-fetch-mock`

###### Netlify

We launched our client on Netlify!

- [Look at Momentum on Netlify](LINK)

## The Process

1. We first set up a kanban board on the github projects tab, where we thought about the different functionalities we would need to implement and then distributed them between us
2. We then further made use of Excalidraw and Balsamiq to sketch out designs for our pages and schema. .
3. 2 team members tackled the client side, creating a design and making some skeleton pseudo code functions.
4. A branch was made for each team member to work on as a developer with a parent staging branch which we all pushed to.
5. 2 team members tackled the server side, see the -[Momentum_Server Repo](https://github.com/Izgardon/server-momentum)
6. Once the website had a basic HTML we started connecting the client to the server
7. The client was deployed on Netlify (see above for the link to Momentum)
8. We completed the functionality of our login and habits so we could send and recieve data from our database through the server.
9. Began testing on our client side.
10. Finished up the styling of the webpage.
11. Push our final changes to the main branch of github.

### Wins

- Added login and Register features.
- Prevent a user from signing up with the same name.
- Added salting and hashing to passwords to enable secure storage.
- Skill level feature which multiplies the amount needed to complete a habit.
- Testing on the server side had an average of 70% coverage.
- Habits selected will persist after refresh.
- Adding incrementation feature which queries and updates the specific habit in the database.
- Successfully post the input fields to the server side that is on the herokuapp
- On the DOM being loaded, the user details are fetched and displayed on the profile page.
- Each user is linked to their habits with a unique name.

- **SOLVED** Incrementing habits.
- **SOLVED** Adding Streaks.


### Challenges

- Testing on the client side and mocking our database for testing.


- ~~Netlify failing to load (may be to do with html file not being at the top).~~ **SOLVED**
- ~~Issue when posting new habits, they dissapeared on page refresh.~~ **SOLVED**


### Bugs

- No bugs we can find (Please inform us if you find any!)

### Future Features

- Further security with JWT.
- Track more habits.
- Membership to allow premium benefits such as learning resources.
- Streak rewards.
- Integration with fitness trackers and mobile.

### Licence

\*MIT
