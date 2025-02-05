import { useState } from 'react';
import './App.css';
import TimerWrapper from './TimerWrapper';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <ProfileViewer name="Colt" />
      <ProfileViewer name="John" />
      <ProfileViewerWithSearch /> */}
      <TimerWrapper />
    </div>
  );
}

export default App;
