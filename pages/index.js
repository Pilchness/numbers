import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
//import styles from '../styles/Home.module.css';
import Numbers from './games/numbers';

export default function Home() {
  const [showGame, setShowGame] = useState(false);
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (showGame) {
      handle.enter();
    }
    return () => {
      document.addEventListener('fullscreenchange', (event) => {
        if (!document.fullscreenElement) {
          setShowGame(false);
        }
      });
    };
  }, [showGame]);

  return (
    <div>
      {showGame ? (
        <FullScreen handle={handle}>
          <Numbers />
        </FullScreen>
      ) : (
        <div style={{ display: 'grid', placeItems: 'center', cursor: 'pointer', height: '500px' }}>
          <button
            id="mainbutton"
            onMouseEnter={() => {
              document.getElementById('mainbutton').style.backgroundColor = 'green';
            }}
            onMouseLeave={() => {
              document.getElementById('mainbutton').style.backgroundColor = 'blue';
            }}
            style={{
              fontSize: '500%',
              padding: '30px',
              fontFamily: 'sans-serif',
              backgroundColor: 'blue',
              color: 'whitesmoke'
            }}
            onClick={() => setShowGame(true)}
          >
            Play Numbers
          </button>
        </div>
      )}
    </div>
  );
}
