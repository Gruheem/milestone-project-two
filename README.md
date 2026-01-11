# milestone-project-two

Title

# UX
Project goals: The goal of the project is to build an initeractive front end site. This site will take the form of a pokemon themed pairs game. The game should be fun, ineractive and visually appealing. 

player goals
- to play a fun pairs game
- to play the game on different devices
- to play a simple, easy to understand, but challenging game

developer and business goals
- create an engaging game 
- create a visually appealing game with sound
- create an appeal to pokemon fans with a pokemon theme

User Stories

user story 1: 
- as someon who enjoys playing games i want to play a pairs memory game
acceptance criteria:
- have a game board populated with cards
- The user can flip two cards at a time, matchin cards will stay flipped over while non matching pairs will flip back after a short delay.
- when the round is finished display a victory message
- readily available reset game button to play again
tasks:
- create game board using html and css and populate with pokemon cards using javascript
- create card flipping and matching logic using javascript
- create victory modal
- quick and simple game reset in victory modal

user story 2:
- as a user, i want the game to start quickly to keep my interest
acceptance criteria:
- Ensue game loads quickly
- Ensure game loads correctly
- Have an appealing call to action to start th egame easilly and quickly
tasks:
- use lighthouse testing for page load
- optimise image file sizes and formats
- test page load of different devices
- create start game button on the home screen

user story 3:
- as a user, i want to be able to increase and decrease the difficulty to add more or less challenge to the game
acceptance criteria:
- Have different difficulties available to the user
- Have these difficulties readily available to and easily accessible at any point during the game
- be able to reset the game if i have chosen a difficulty that is too hard
tasks:
- create difficulty buttons on the starting page
- create difficulty select button on game page
- create difficulty select button on victory modal

user story 4:
- as a user, i want to be able to see the time/move/error counter in order to see how well i am doing
acceptance criteria:
- have a functioning move counter always visible during the game and on all difficulties
- have a functioning timer counting how long the player has spent on that particular round
- have an error counter which shows the player their error count during the game
tasks:
- create move tracker
- have move tracker update after every turn
- create a timer that starts when he game starts and finishes when the game is complete
- create error counter
- have error counter update after every turn

user story 5:
- as a user, i want feedback from the game as i make correct pairs to keep me motivated to finish
acceptance criteria:
- have audio feedback for a correct pair match(pokemon cry?)
- have visual feedback for a correct guess(pop and jiggle animation?)
tasks:
- create API to gather sounds
-or-
- have local sound play on correct guess
- have animation play or correct guess

user story 6:
- as a user, i want a visually appealing game that inspires nostalgia with the pokemon theme
acceptance criteria:
- have original pokemon artwork
- select pokemon from the original 151 generatin one pokemon
- have colours and themes which are inkeeping with the pokemon branding
tasks
- create an API to get pokemon data 
- select pokemon numbers 1-151
- ensures colours,images and font styles used are taken from pokemon branding

user story 7:
- as a user, i want to able to play the game on different devices so that i can play it anywhere
acceptance criteria:
- ensure the game is responsive
- ensure the game works on different browsers
- ensure the game workson different devices
- ensure the game works on different operatin systems
tasks
- make the game responsive using media queries across a range of different screen sizes 
- test responsiveness with chrome dev tools
- test game on different devices
- test game on different operating systems
- test game on different browsers

user story 8:
- as a user i want to be congratulated when i complete the game and presented with a summary of the round. 
acceptance criteria:
- have a victory modal appear on completion with a nice message
- have a round summary in the victory modal
- easily restart the game from the modal
- easiloy change the difficulty from the modal. 
tests:
- create victory modal
- make it contain a victory message
- make it contain a summary of the stat trackers
- make restart game and difficulty select button

Features
- game title
- Flipable cards
- move counter
- Erro counter
- Timer
- Different difficulties
- victory modal
- reset game button
- Footer with author

design choices 
- pictures for the front and the bakc of the crads will be pokemon themed
- colours to be picked from pokemon logos, artworks and other pokemon themed items or ideas.
- font: primary: the 'pokemon' title font. secondary: something clean and clear, 'Open Sans' sans serif.
- simplistic, minimalist design for the board and scoreboard to keep things easy to understand

wireframes
Mobile:
![mobile wireframes](assets/images/mobile-wreframes.png)

Tablet:
![tablet wirefframes](assets/images/tablet-wireframes.png)

Desktop:
![desktop wirefframes](assets/images/desktop-wireframe.png)

Victory Modal:
![victory modal](assets/images/modal-wireframes.png)

strategy 
scope 
structure
skeleton
surface

# Features
existing features
features to implement

# technologies used

# testing
test user stories
test business goals
code validators
lighthouse
colour testing 
function tests structured: 
    expected:site is expected to do x when user does y
    testing:tested the site by doing y
    result:the site did not do as expected because of a, b, c OR site behaved as expected
    fix:i did z to fix this issue

Bugs:
As i am using random numbers to select the pokemon it is possible for the same pokemon to be picked more than once e.g. bulbasaur is picked 4 times and is every pokemon in an eight card grid

# deployment
how to run this project locally within a coding environment
document steps on how to clone, install and run code 