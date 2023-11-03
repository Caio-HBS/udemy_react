import React, { useState } from 'react';

import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Less Easy" targetTime={5} />
        <TimerChallenge title="Medium" targetTime={10} />
        <TimerChallenge title="Nightmare" targetTime={15} />
      </div>
    </>
  );
}
