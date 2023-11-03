import React, { useState } from 'react';

import Player from './components/Player.jsx';

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
    </>
  );
}
