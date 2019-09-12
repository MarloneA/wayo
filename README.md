## WAYO

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Docker Commands

### `docker build -t wayo:dev .`

Builds and Tags the docker Image

### `docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm wayo:dev`

Spins Up the docker container once the build is done

