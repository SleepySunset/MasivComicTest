# Comic Viewer XKCD
### _Technical Test for Masiv_

#### Installation
1. Clone or download the repository https://github.com/SleepySunset/MasivComicTest
2. Open a terminal in the `masiv-comic-test` directory
3. Run `npm install`
4. Run `npm run dev`

#### Testing
##### _Unit Tests_
1. Open a terminal in the `masiv-comic-test` directory
2. Run `npm test`

##### _E2E Test_
1. Open a terminal in the `masiv-comic-test` directory
2. Run `npx cypress open`
3. Grant permissions if necessary
4. Select E2E and a browser to run the tests
5. Select the `app.cy.js` file

#### Description
This is an application that consumes an alternative XKCD API. By default, it fetches the latest comic from the API and allows the user to fetch a random comic and navigate backwards or forwards between comics.

