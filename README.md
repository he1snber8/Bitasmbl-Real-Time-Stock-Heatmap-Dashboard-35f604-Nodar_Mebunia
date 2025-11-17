# Bitasmbl-Real-Time-Stock-Heatmap-Dashboard-35f604-Nodar_Mebunia

## Description
Build an interactive dashboard that visualizes live stock market performance using a color-coded heatmap. Users can filter sectors, view market movements, and monitor real-time changes as data updates dynamically.

## Tech Stack
- GraphQL
- Vue.js
- Chart.js

## Requirements
- Fetch real-time and periodically updated stock market data
- Handle API rate limits, errors, or missing data gracefully
- Display trend changes with smooth, real-time UI updates
- Allow users to filter stocks by category, sector, or custom criteria
- Render an interactive heatmap representing stock performance

## Installation
Step-by-step setup guide:

1. Clone the repository (using the provided repo owner username):

   git clone git@github.com:he1snber8/Bitasmbl-Real-Time-Stock-Heatmap-Dashboard-35f604-Nodar_Mebunia.git

   Or using HTTPS:

   git clone https://github.com/he1snber8/Bitasmbl-Real-Time-Stock-Heatmap-Dashboard-35f604-Nodar_Mebunia.git

2. Change into the project directory:

   cd Bitasmbl-Real-Time-Stock-Heatmap-Dashboard-35f604-Nodar_Mebunia

3. Install JavaScript dependencies (project frontend uses Vue.js and Chart.js):

   npm install

4. If the repository includes a GraphQL server directory (for example a /server folder), install server dependencies there as well:

   cd server
   npm install
   cd ..

Notes:
- The project uses Vue.js and Chart.js; npm is required to install dependencies.
- No additional environment variables are mandated by the selected stacks in this README. If a GraphQL server or external market-data provider is included in the repository, follow any provided server README for provider-specific environment variables or credentials.

## Usage
Start and run the project (frontend-centric instructions based on Vue.js and GraphQL usage patterns):

1. Start the frontend development server from the project root:

   npm run serve

   If the project uses a different dev script (for example npm run dev), use that instead.

2. If a GraphQL server is included, start it in a separate terminal (common commands):

   cd server
   npm run start

3. Open the frontend in your browser (commonly at http://localhost:8080 or the address shown in the dev server output).

4. Interact with the dashboard:
   - Use sector/category filters to limit visible stocks.
   - Observe the color-coded heatmap updating in real time as data arrives.
   - Check UI error states if upstream data is missing or rate-limited.

## Implementation Steps
1. Initialize project structure: create a Vue.js frontend directory and, if required, a GraphQL server directory for backend logic.
2. Add Chart.js to the frontend dependencies and import it into the Vue components responsible for visualization.
3. Implement a GraphQL client in the Vue app to query the stock data endpoint and to subscribe or poll for updates (use polling or subscriptions depending on the available GraphQL server support).
4. Design a GraphQL query schema (if implementing the server) that exposes stock lists, per-stock performance metrics, and optional subscription fields for real-time updates.
5. Implement data fetching with rate-limit awareness:
   - Use configurable polling intervals for periodic updates.
   - Implement client-side backoff and retry logic when encountering rate-limit or transient errors.
   - Batch requests where possible to reduce request volume.
6. Normalize and validate incoming data: handle missing fields or malformed responses and expose graceful UI states (loading, partial data, error messages).
7. Build a Vue component for the heatmap:
   - Use Chart.js to draw a grid of cells representing stocks.
   - Map stock performance metrics (e.g., percent change) to a color scale for each cell.
   - Render stock symbols and key metrics on hover or in tooltips for interactivity.
8. Implement filtering UI in Vue:
   - Provide controls to filter by category, sector, or custom criteria.
   - Apply filters client-side to the fetched dataset and re-render the heatmap responsively.
9. Smooth UI updates:
   - Use Vue reactivity to update data models and animate Chart.js updates for smooth transitions.
   - Throttle or debounce UI updates when large data bursts arrive to maintain responsiveness.
10. Error handling and observability:
   - Surface errors and rate-limit notices in the UI.
   - Provide retry controls and informative messages for missing data.
11. Optimize performance:
   - Minimize expensive re-renders by diffing data and updating only changed cells.
   - Reduce network load with aggregated queries and configurable polling intervals.
12. Test with live or mock market data to verify real-time behavior, filter correctness, and heatmap rendering accuracy.

## API Endpoints (Optional)
The presence of GraphQL in the tech stack implies a GraphQL API. Example endpoints:

- Endpoint: /graphql
  Method: POST
  Description: GraphQL endpoint for executing queries and mutations to retrieve stock lists, metrics, and apply filters.

- Endpoint: /graphql (WebSocket / subscriptions)
  Method: WS / subscription
  Description: Optional GraphQL subscription endpoint for streaming real-time stock updates to the frontend if the GraphQL server implements subscriptions.