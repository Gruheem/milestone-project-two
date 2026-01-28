# Milestone Project Two

# Poke-PAIRS

Poke-PAIRS is a pokemon themed pairs memory game built using HTML, CSS and JavaScript.  
The game is designed to be fun, nostalgic and fully responsive across devices, allowing users to test their memory skills across various difficulties.

[**Live Site**](https://gruheem.github.io/milestone-project-two/)  
[**GitHub Repository**](https://github.com/Gruheem/milestone-project-two)

## Key Features

- Pokemon-themed memory pairs game using Generation One Pokemon
- Multiple difficulty levels with varying grid sizes
- Timer, move counter and error counter to track performance
- Responsive design for mobile, tablet and desktop devices
- Visual Feedback for correct matches
- Victory modal displaying round statistics and replay options

## Home Page
![Home Page](assets/images/home-page.webp)

## Game Page
![Game Page](assets/images/game-page.webp)

# UX

## Strategy

### Project goals:

- Build and interactive pokemon themed pairs memory game.  
- Provide multiple levels of difficulty to suit player skill levels.
- Ensure the game is responsive and accessible across different devices.
- Demonstrate front-end developemnt skills using HTML, CSS and JavaScript.

### User Personas:

#### The Casual Gamer:  
**Age:** 22  
**Occupation:** University Student  
**Device(s):** Mobile Phone, Laptop  
**Gaming Experience:** Casual  
The casual gamer enjoys quick games between lectures or in the evening to help relax and unwind. They want a simple easy to understand game that loads quickly and is easy and intuitive to navigate.

#### The Nostalgic Pokemon fan:  
**Age:** 33  
**Occupation:** Office Worker  
**Device(s):** Tablet, Laptop  
Gaming Experience: Intermediate  
The nostalgic pokemon fan grew up watching pokemon and playing the original games. They are drawn to nostalgic visuals and sounds, and recognisable pokemon from the original generation.

#### The Competitive gamer:  
**Age:** 26  
**Occupation:** Software Development  
**Devices:** Laptop, Desktop  
**Gaming Experience:** Experienced  
The competitive player enjoys improving their performance and challenging themselves. They want to track their stats, increase the difficulty and enjoys replaying the game to beat their previous score.

#### The On-The-Go Player:  
**Age:** 19  
**Occupation:** College  
**Devices:** Mobile, Tablet  
**Gaming Experience:** Casual  
The on-the-go player plays games while commuting, waiting between classes and in the evenings. They expect the game to work smoothly across different devices and screen sizes.

### Player goals:

- To play a fun and engaging memory pairs game.
- To be able to play the game on different devices.
- To enjoy a simple, easy-to-understand, game with different difficulties.
- to feel rewarded and motivated through feedback and progress tracking.

### Developer and business goals:

- Create an interesting and engaging front-end game experience.
- Create a visually appealing pokemon themed game with animation (and sound).
- Create an appeal to Pokemon fans with a nostalgic Pokemon theme.
- Demonstrate front-end development skills using HTML, CSS and JavaScript.
- Ensure the game works well across multiple devices and browsers.

## Scope

### User Stories

**User Story 1 - Core Gameplay**  
As a player, I want to play a pairs memory game so thqat I can enjoy a fun and engaging challange.

Acceptance criteria:

- Have a game board populated with cards.
- The user can flip two cards at a time; matching cards will stay flipped over while non-matching pairs will flip back after a short delay.
- When the round is finished, display a victory message.
- Readily available reset game button to play again.

Tasks:

- Create game board using HTML and CSS and populate with Pokemon cards using JavaScript.
- Create card flipping and matching logic using JavaScript.
- Create victory modal.
- Quick and simple game reset in victory modal.

**User Story 2 - Fast Game Start**  
As a player, I want the game to load quickly so I can start the game without loosing interest. 
Acceptance criteria:

- Ensure game loads quickly.
- Ensure game loads correctly.
- Have an appealing call to action to start the game easily and quickly.

Tasks:

- Use Lighthouse testing for page load.
- Optimise image file sizes and formats.
- Test page load on different devices.
- Create start game button on the home screen.

**User story 3 - Difficulty Selection**  
As a player I want to chnage the game difficulty so that I can adjust the challange to match my skill.
Acceptance criteria:

- Have different difficulties available to the user.
- Have these difficulties readily available and easily accessible at any point during the game.
- Be able to reset the game if I have chosen a difficulty that is too hard.

Tasks:

- Create difficulty buttons on the starting page.
- Create difficulty select button on game page.
- Create difficulty select button on victory modal.

**User story 4 - Performance Tracking**  
As a player, I want to see my time, moves and errors so i can track my performance during the game.

- Have a functioning move counter always visible during the game and on all difficulties.
- Have a functioning timer counting how long the player has spent on that particular round.
- Have an error counter which shows the player's error count during the game.

Tasks:

- Create move tracker.
- Have move tracker update after every turn.
- Create a timer that starts when the game starts and finishes when the game is complete.
- Create error counter.
- Have error counter update after every turn.

**User story 5 - Player Feedback**  
As aplayer, I want visual feedback for correct matches so that I feel motivated to complete the game.

- Have visual feedback for a correct guess (pop and jiggle animation?).

Tasks:

- Create API to gather sounds to play on a correct guess, or
- Have local sound play on correct guess.
- Have animation play on correct guess.

**User story 6 - Visual Theme**  
As a player, I want pokemon themed visual design so that the game feels nostalgic and engaging.

- Have original Pokemon artwork.
- Select Pokemon from the original 151 (Generation One).
- Have colours and themes which are in keeping with the Pokemon branding.

Tasks:

- Create an API to get Pokemon data.
- Select Pokemon numbers 1-151.
- Ensure colours, images and font styles used are taken from Pokemon branding.

**User story 7 - Cross Device Compatibility**  
As a player, I want the game to work on different devices so I can play where ever I am.

- Ensure the game is responsive.
- Ensure the game works on different browsers.
- Ensure the game works on different devices.
- Ensure the game works on different operating systems.

Tasks:

- Make the game responsive using media queries across a range of different screen sizes.
- Test responsiveness with Chrome DevTools.
- Test game on different devices.
- Test game on different operating systems.
- Test game on different browsers.

**User story 8 - Completion Feedback**  
As a player, I want to recieve a completion message and game summary so that I feel rewarded for finishing the game.

- Have a victory modal appear on completion with a nice message.
- Have a round summary in the victory modal.
- Easily restart the game from the modal.
- Easily change the difficulty from the modal.

Tests:

- Create victory modal.
- Make it contain a victory message.
- Make it contain a summary of the stat trackers.
- Make restart game and difficulty select buttons.

## Structure

### Implemented Features:

**'Home Page':**

- Title: The title is in a pokemon theme, stating the name of the game.  
  ![Game Title](assets/images/title.webp)

- Instructions: These tell the player exactly how to play the game in one simple short sentence.  
  ![Game Instructions](assets/images/instructions.webp)

- Call to action: This invites the player to start the game instructing them what they must do.  
  ![Call to action](assets/images/call-to-action.webp)

- Difficulty Select section: This allows the player to choose their desired level of challenge.  
  ![Difficulty select section](assets/images/difficulty-select-section.webp)

**'Game Page':**

- Game Timer: This lets the player know how long their current game has lasted so far. It updates in real-time.  
  ![Game Timer](assets/images/timer.webp)

- Move Counter: This lets the player how many moves they have spent on the game so far. It updates in real-time.  
  ![Move Counter](assets/images/move-counter.webp)

- Error Counter: This lets the player know how many errors they have made in their current game.  
  ![Error Counter](assets/images/error-counter.webp)

- Pokemon cards: These are the cards the player will select to progress the game. The back is a pokeball and the front is a randomly selected pokemon from generation 1.  
  Back: ![Back of Game Card](assets/images/card-back.webp)  
  Front: ![Front of Game Card](assets/images/card-front-example.webp)

- Reset Game Button: This allows the player to reset the game at any time during their existing game.
  ![Reset Game Button](assets/images/restart-game-button.webp)

- Difficulty Select In-Game: This allows the player to increase or decrease their difficulty at any time incase they get stuck or want more of a challange.
  ![Difficulty Select Button](assets/images/difficulty-select-button.webp)

- Victory Modal: This congratulates the player on completing the game and presents information and new call to action buttons.  
  ![Victory Modal](assets/images/victory-modal.webp)

- Stat Summary in Victory Modal: This lets the player know how well they have done in the round they have just played by presenting their game statistics, their game time, move count and error count.  
  ![Game Stats Summary](assets/images/modal-stat-summary.webp)

- Reset from Modal: this allows the player to play again on their current level of difficulty with a new set of cards.  
  ![Modal Reset Button](assets/images/modal-restart.webp)

- Difficulty select from modal: this allows the player to change their difficulty after completing the game allowing them to increase or decrease the challange.  
  ![Modal Difficulty Select Button](assets/images/modal-difficulty-select.webp)

- Show Cards at Start: Players get a one second look at the cards face up before they flip and the game timer starts. This adds an element of skill to game that allows players to get better without relying on chance to get them started.

- Correct Guess Animation: This animation provides visual feedback on a correct guess to reward and stimulate the player into making more guesses.

- Author information: This Provides information on who wrote the game and a link to their Github page.

## Skeleton

Wireframes
Mobile:
![mobile wireframes](assets/images/mobile-wreframes.png)

Tablet:
![tablet wireframes](assets/images/tablet-wireframes.png)

Desktop:
![desktop wireframe](assets/images/desktop-wireframe.png)

Victory Modal:
![victory modal](assets/images/modal-wireframes.png)

# Surface

## Design choices

- Pictures for the front and the back of the cards will be Pokemon-themed.  
  pictures for the pokemon were sourced through the pokemon API called PokeAPI.

- Colours to be picked from Pokemon logos, artworks and other Pokemon-themed items or ideas.  
  Colours were captured using image color picker on the main title. All colours have been tested for contrast and suitability.

- Fonts:
  1. Primary: the 'Pokemon' title font. Created images inspired directly form the pokemon main logo.
  2. Secondary: A clear and game themed font to descibe, 'gamepause' sans-serif.
  3. Tertiary: A clear font reminiscant of the pokemon banding for the calls to action.

- Simplistic, minimalist design for the board and scoreboard to make navigation easy and intuitive. this also keeps the game easy to understand.

# Technologies used

## Languages

HTML  
CSS  
JavaScript  
PokeAPI

## Libraries

Google Fonts  
Game Fonts  
Favicon

## Technologies

PokeAPI  
Google Gemini Image Creator  
Adobe Express

## Practices

Mobile first developement

## Tools

https://www.justinmind.com/blog/best-number-fonts/

# Testing

Test user stories  
Test business goals  
Code validators  
Lighthouse  
Colour testing  
Function tests structured:  
 Expected: site is expected to do x when user does y  
 Testing: tested the site by doing y  
 Result: the site did not do as expected because of a, b, c OR site behaved as expected  
 Fix: I did z to fix this issue

# Known Bugs and Fixes:

**Card Overflow Issue:**  
Cards keep overflowing out of the game board. It was due to the CSS Grid automatically applying `min-height: auto;` to the grid.   
**Fix:**  
I fixed this by setting `min-height` to `0` on the card wrapper to allow it to shrink.

**Variable Scope Declaration and Timing Issue**  
The game start buttons stopped working. I had placed an event listener that used a variable in a function before I had declared the variable globaly. This was a timing issue as javascript runs top to bottom.  
**Fix:**  
I delared the variable at the start of the javascript file before any functions are read.

Modal wasnt appearing after reseting game using modal I was of mixing 'modal.classList.add("hidden");' and 'modal.display = "none";' fixed by sticking to adding and removing the hidden class to acheive vanishing and appearing.

Error counter is creating a list of ones rather than adding a up a total. Solution: i wasnt declring the variable errors ona global scal just in the start game function so it couldnt be accessed by the update function

As I am using random numbers to select the Pokemon it is possible for the same Pokemon to be picked more than once, e.g., Bulbasaur is picked 4 times and is every Pokemon in an eight-card grid.

# Deployment

This project was deployed using GitHub Pages.  

I took the approach of using **early deployment** so I can start observing the desired and undesired outcomes of my code across different devices as soon as possible.
  
## Steps to Deploy
1. Navigate to the repository on GitHub
2. Open **settings** got to **pages**  
3. Select the 'main' branch and root directory
4. Save changes
5. The live site link appears after deployment ([Deployed Site](https://gruheem.github.io/milestone-project-two/)) 

## How to run Locally
1. Clone the repository, replacing 'your-username' with your GitHub username and 'your-repo-name' with the name of your repository.  
Bash: `git clone https://github.com/your-username/your-repo-name.git`  
2. Navigate to the directory, obnce again replacing 'your-repo-name' with the name of your repository.  
Bash: `cd your-repo-name`  
3. Launch the project.
    - Open the project folder in your preffered IDE (e.g. VS Code)
    - Open `index.html` directly in your browser, or use an extension like **Live Server** to open the page

