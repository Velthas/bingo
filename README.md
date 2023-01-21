
# <img src="https://cdn-icons-png.flaticon.com/512/2102/2102170.png" height="80px" width="80px"> </img>Bingo <img src="https://cdn-icons-png.flaticon.com/512/2102/2102170.png" height="80px" width="80px"> </img>

**Live at:** https://velthas.github.io/bingo

### Overview

Bingo is a fun game of chance that anyone can play. The game is played on a  that's made up of 25 squares — if you get 5 squares in a row, you win!

This project was made using React.js, and styled using a variety of libraries such as styled-components and react-icons
### Functionality
  
As specified on the coding challenge: 
-   **A player wins by completing a row, column, or diagonal:** done!
-   **There's a free slot (always on) in the middle**: done!
-   **You can have multiple bingos**: done!
-  **App must be responsive on mobile devices**: had to wrestle with grid a bit, but done!
-   **Have a visual reward for bingos**: not as fancy as confetti, and given more time I would have liked to invest in a similar result, but does the job nonetheless.
-   **Ensure that no two players get the same card**: bingo card content is shuffled every time the component mounts.
-   **Add something new:** I added a reset button that shuffles the card and resets any bingos you might have previously had. Oh, and a little easter egg if you manage to get all the bingos, but if you really got to that point during a meeting I doubt you'd be up for jokes, no?

### Technologies

 - HTML, CSS, JavaScript
 - React.js
 - Styled Components
-  React Icons
-  Animate.css
-  Uniqid

### Reflections
This was a fun project to work on, especially someone who had never tried this kind of Bingo (Tombola would still be my go-to for holidays, have to respect Italian traditions).

It admittedly took me longer than the 4 expected hours: for progress stamps one can look at the commit history to get an idea of what was done at what time. This being said, I did not want to leave it unfinished (I had just gotten the game loop working) and so I set out to complete it anyway in a reasonable timeframe.

All in all, project was deployed by about the 7th hour mark - had a night of sleep in between - and has all the features requested. All the styling was done using styled-components (which I have a hard time leaving aside now) which allowed me for some creative choices when thinking how to reflect changes in the state of the game. An amazing tool indeed!

The greatest time sink in my case was, I believe, not having spent some time developing some tests: that would have saved me from performing some repetitive actions and spending time in the ever time-hungry debugger. 

Another offender would have to be grid: while I already grasped how it worked on a basic level, making it so the bingo grid didn't break at smaller screen sizes required some extra time and effort. 

If you've read this far, thank you very much for spending some time looking at my work. Happy coding!