import { useState } from 'react';
import './App.css';
import Timer from './Timer';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Timer /> */}
      <ProfileViewer name="Colt" />
      <ProfileViewer name="John" />
      <ProfileViewerWithSearch />
    </div>
  );
}

export default App;
