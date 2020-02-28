# react-app-template
Minimum boilerplate template for front-end applications built with react

## Getting Started
Clone this repository and run `npm install`

### Webpack Development Server
1. Start webpack-dev-server with `npm run dev`
2. Open `localhost:3000` to view website on development server

### Local Backend (i.e. Flask, Django, etc.)
1. The frontend and backend repositories should share the same parent directory
    * Folders should look something like this:
      ```
      GitHub
      ├── backend-repository
      └── frontend-repository
      ```
    * Remove webpack development server with `npm uninstall webpack-dev-server` (Optional) 
2. Change configurations in `webpack.config.js` and run `npm start`
