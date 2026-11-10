# Campus Connect client

## Run locally

1. Start the backend from `Server/` with `npm run dev`.
2. From this directory, run `npm install` and `npm run dev`.

The Vite development server proxies `/api` requests to `http://localhost:5000`.
Assignment reads and submissions use the shared client in `src/services/api.js`.

For a separate frontend/backend deployment, set `VITE_API_BASE_URL` to the API
base URL in the client environment, and set `CLIENT_ORIGIN` in the server
environment to the deployed frontend origin.

The home-page carousel uses local images, supports manual controls, and
automatically advances every five seconds.
