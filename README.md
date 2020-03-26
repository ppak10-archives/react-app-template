# react-app-template
Minimum boilerplate template for front-end applications built with react

## Getting Started
Clone this repository and run `npm install`

### Express Backend
1. The express backend is already configured to serve static files from `public/` but you can change the values of the webpack output path and express static folder in `app.json`.
    ```
    {
      "express": {
        "output": {
          "path": "./public/js"
        },
        "static": "public"
      }
    } 
    ```
#### Development
1. Run the server in development environment with `npm start`

#### Production
1. Build the webpack bundle with `npm run build-express`
2. Run the production version of the server with `npm run express`

### Local Backend (i.e. Flask, Django, etc.)
1. The frontend and backend repositories should share the same parent directory
    * Set output directory for backend in `app.json` under `local.output.path`
      ```
      {
        "local": {
          "output": {
            "path": "../backend-repository/static"
          }
        }
      } 
      ```
    * Folder structure should look something like this:
      ```
      GitHub
      ├── backend-repository
      └── frontend-repository
      ```
#### Development
1. After updating those configurations, run `npm run build-local-watch` to build with webpack and watch for changes.
2. You may need to reload bundle updates with a hard refresh <kbd>command</kbd> / <kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> to load changes.
    * Webpack will continue to watch for changes, but you will typically need to hard refresh the browser to tell the server to send the updated bundle file.

#### Production
1. Build the webpack bundle to the same directory but for production environments with `npm run build-local`
