<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jackmulligan-ire/critics-versus-people">
    <img src="readme-images/cvtp-logo.png" alt="Critics vs. The People Logo" width="600">
  </a>

<h3 align="center">Critics vs. The People</h3>

  <p align="center">
    Compare critic and audience reviews for all your favourite movies!
    <br />
    <a href="https://jackmulligan-ire.github.io/critics-versus-people/">Try it Out!</a>
    ·
    <a href="https://github.com/jackmulligan-ire/critics-versus-people/issues">Report Bug or Request a Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img src="readme-images/cvtp-desktop.png" width="800">
</p>

A web application that compares the aggregate score given by viewers and reviewers for a particular movie on the Open Movie Database.

The application delivers a memorable user experience on top of a simple concept, with the application aiming to maximise time spent on site. It's designed to be immersive, with neon colours presented against a pitch-black background. It also has a sense of humour, with load spinners and the initial page view accompanied by randomly generated phrases. The functionality is kept to a minimum to provide an excellent experience on smaller screens.

Aside from using the project to learn React, this was also the first project I developed using TDD, using Jest as well as React Testing Library.

### Built With

[![JavaScript][javascript]][javascript-url]
[![React][react.js]][react-url]
[![Bootstrap][bootstrap.com]][bootstrap-url]
[![npm][npm]][npm-url]
[![Jest][jest]][jest-url]
[![React Testing Library][react testing library]][react-testing-library-url]
[![Sass][sass]][sass-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of Critics vs. The People up and running, follow these simple steps.

### Prerequisites

Install npm on your machine.

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jackmulligan-ire/critics-versus-people.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Launch the development server
   ```sh
   npm start
   ```

Your local version of Critics vs. The People should now be available at localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Movie Ratings

The following information is provided for each movie: its Metacritic (“Critics”) and IMDB rating (“The People”), as well as a short description and its poster (if available). An IMDB link is also provided, with this opening up a new tab to not break the user’s visit on the site.

### Initial Screen

<p align="center">
  <img src="readme-images/motto.gif" alt="Critics vs. The People Initial Screen">
</p>
An initial screen hints at the concept of the website, with a motto pitting critic and viewer opinion against one another. Many of these phrases are available, with a random number generator determining which one is shown each time.

### Responsiveness

<p align="center">
  <img src="readme-images/cvtp-mobile-view.png" alt="Critics vs. The People Mobile View" height="600">
</p>
The application is made responsive through a mixture of Bootstrap’s default declaration and Sass files that set custom breakpoints for very small and very large screen sizes.

### Load Spinner

<p align="center">
  <img src="readme-images/load-spinner.gif" alt="Critics vs. The People Load Spinner">
</p>
All movie data is sourced from the Open Movie Database API, so it was necessary to include some form of load spinner. To prevent the immersion in the app from becoming broken, a phrase is also placed under the spinner. Multiple of these phrases are available, with one being selected at random on each call to the API. A timeout of 1 second is included on the get request to the API, so that the load phrase remains visible just long enough to be read by the user.

### Error Handling

<p align="center">
  <img src="readme-images/cvtp-conn-error.png" alt="Critics vs. The People Connection Error" width="600">
</p>
Two sources of error are accounted for: connection errors and incorrect search terms. An error screen is in-place for both scenarios, with a search bar in the site’s navbar allowing the user’s experience on the site to continue.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Convert codebase from JavaScript to TypeScript.
- [ ] Increase testing coverage to mock the OMDb API.
- [ ] Second page showing data on movies with biggest differences in critical and audience reviews.
- [ ] Convert codebase to from React Class Components to Functional Components (Hooks).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion to improve Critics vs. The People, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

You can also feel free to log bugs under [Issues](https://github.com/jackmulligan-ire/critics-versus-people/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jack Mulligan - [LinkedIn](https://www.linkedin.com/in/jack-mulligan/) - [Email](mailto:mulligja1@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- Thank you to [The Odin Project](https://www.theodinproject.com/) for their fantastic resources on [learning React](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#react-js) and [JavaScript testing](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#testing-javascript).
- README template credit: [Best README template](https://github.com/othneildrew/Best-README-Template/)
- Badges credit: [Badges 4 README.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/jackmulligan-ire/critics-versus-people.svg?style=for-the-badge
[license-url]: https://github.com/jackmulligan-ire/critics-versus-people/blob/main/license.txt
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[javascript-url]: https://www.javascript.com/
[npm]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[react testing library]: https://img.shields.io/badge/-Testing%20Library-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white
[react-testing-library-url]: https://testing-library.com
[sass]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
