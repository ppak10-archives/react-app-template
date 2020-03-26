# react-app-template
Minimum boilerplate template for front-end applications built with react

## Getting Started
1. Clone this repository and install the node dependecies with:
    ```
    npm install
    ```
2. The default environment for the Express server is set to production which can be started with:
    ```
    npm start
    ```
    * This will build the production version of the Webpack bundle along with express server.
3. Open [localhost:8080](localhost:8080) to view the production instance of the server.

### Development Environments
If you already have the `NODE_ENV` configured you can run the development version of the Express server and watch for changes with:
```
npm run dev
```

#### Mac OSX (Zsh)
1. Set the `NODE_ENV` variable into your `.zshenv` file with the command:
    ```
    echo 'export NODE_ENV=development' >> ~/.zshenv
    ```
2. Then reload the changes to the file with:
    ```
    source ~/.zshenv
    ```
3. Test that the environment variable has been correctly set with:
    ```
    echo $NODE_ENV
    ```
### Backends
#### Express
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

#### Seperate Local (i.e. Flask, Django, etc.)
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
2. After updating those configurations, run  to build with webpack and watch for changes with:
    ```
    npm run build-local-watch
    ```
    * Build the webpack bundle to the same directory **without** watching for changes with 
      ```
      npm run build-local
      ```

3. You may need to reload bundle updates with a hard refresh <kbd>command</kbd> / <kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> to load changes.
    * Webpack will continue to watch for changes, but you will typically need to hard refresh the browser to tell the server to send the updated bundle file.
