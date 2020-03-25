# react-app-template
Minimum boilerplate template for front-end applications built with react

## Getting Started
Clone this repository and run `npm install`

### Webpack Development Server
1. Start webpack-dev-server with `npm run dev`
2. Open `localhost:3000` to view website on development server
    * Webpack will watch for changes and hot load any updates to the bundle.

### Local Backend (i.e. Flask, Django, etc.)
1. The frontend and backend repositories should share the same parent directory
    * Set output directory for backend in `app.json` under `output.backend`
      ```
      {
        "output": {
          "backend": "../backend-repository/static",
          ...
        }
        ...
      } 
      ```
    * Folder structure should look something like this:
      ```
      GitHub
      ├── backend-repository
      └── frontend-repository
      ```
    * Remove webpack development server with `npm uninstall webpack-dev-server` (Optional) 
2. After changing configurations, run `npm start` and <kbd>command</kbd> / <kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> to load changes.
    * Webpack will continue to watch for changes, but you will typically need to hard refresh the browser to tell the server to send the updated bundle file.