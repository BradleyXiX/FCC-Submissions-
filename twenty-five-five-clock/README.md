## 25 + 5 Clock (Pomodoro Timer)
A Pomodoro Timer (also known as a 25 + 5 Clock) built using React. This app helps users manage their work and break intervals effectively by alternating between a 25-minute work session and a 5-minute break.

## Features
Adjustable Timers:

Set the length of the work session (default: 25 minutes).

Set the length of the break session (default: 5 minutes).

Timer Controls:

Start, pause, and reset the timer.

Automatic Switching:

Automatically switches between work and break sessions.

Audio Notification:

Plays a beep sound when the timer reaches zero.

User-Friendly Interface:

Displays the remaining time in mm:ss format.

Clearly indicates whether the current session is a work session or a break session.

## User Stories Fulfilled
This project fulfills the following user stories:

Adjustable break and session lengths.

Start, pause, and reset functionality.

Automatic switching between work and break sessions.

Audio notification when the timer reaches zero.

Prevents invalid inputs (e.g., session or break length ≤ 0 or > 60).

## Technologies Used
React: A JavaScript library for building user interfaces.

HTML5: For structuring the app.

CSS: For styling the app.

JavaScript: For handling the timer logic and user interactions.

HTML5 Audio: For playing the beep sound.

## How to Use
Set Session and Break Lengths:

Use the + and - buttons to adjust the session length (default: 25 minutes) and break length (default: 5 minutes).

The session and break lengths must be between 1 and 60 minutes.

Start the Timer:

Click the Start button to begin the countdown.

The timer will start with the work session.

Pause the Timer:

Click the Pause button to pause the countdown.

Reset the Timer:

Click the Reset button to reset the timer to its default state (25-minute session, 5-minute break).

Automatic Switching:

When the work session ends, the timer will automatically switch to the break session, and vice versa.

A beep sound will play when the timer reaches zero.

 ## Installation
To run this project locally, follow these steps:

Clone the Repository:

bash

git clone https://github.com/BradleyXiX/FCC-Submissions-/tree/main/twenty-five-five-clock
cd pomodoro-clock
Install Dependencies:

bash

npm install
Start the Development Server:

bash

npm start
Open the App:

The app will open in your browser at http://localhost:3000.

 ## Project Structure

pomodoro-clock/
├── public/
│   ├── index.html
│   └── (other static files)
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── (other React components)
├── package.json
├── README.md
└── (other configuration files)


## Credits
freeCodeCamp: For providing the project requirements and inspiration.

React Documentation: For guidance on building React apps.

HTML5 Audio: For the beep sound.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


## Contact
If you have any questions or feedback, feel free to reach out:

Email: BradJohn70@gmail.com

GitHub: BradleyXiX

