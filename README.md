## Trail Map

##### This project visualizes the hiking using Mapbox GL JS. It includes features like real-time distance and elevation updates as the camera moves along the hiking trail.

### Features

- Real-time Distance Tracking: As the camera moves along the trail, the distance covered is calculated and displayed.

- Elevation Display: The elevation at each point is shown in a popup.

- Mapbox Integration: Utilizes Mapbox's terrain and satellite streets layers for a rich visual experience.

### Prerequisites

- A Mapbox API access token. You can sign up for free at [Mapbox](https://www.mapbox.com/).

### Getting Started

1. Clone the repository.

   ```bash
   git clone https://github.com/rbrown29/TrailMapReact.git
   cd trail-map
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root of the project and add your Mapbox access token:

   ```bash
    REACT_APP_MAPBOX_ACCESS_TOKEN=your-access-token
    ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### How it Works

- Map Initialization: The map is initialized with Mapbox's satellite streets style, centered on the starting point of the trail.

- Animation: The camera moves along the trail, showing the current position's altitude and the distance covered so far.

- Distance Calculation: The distance is calculated using the Haversine formula, which takes into account the curvature of the Earth.
