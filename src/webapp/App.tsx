import React from 'react';

import { MemoryRouter } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter>
      <div className="rootDiv">
        <h1>Hello from the App.tsx!</h1>
      </div>
    </MemoryRouter>
  );
}

export default App;
