import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const VirtualSchool = () => {
  //const size = useWindowSize();
  const [schoolStatus, toggleSchoolStatus] = useState(false);
  //const [currentRoom, changeRoom] = useState('hallway');

  //   useEffect(() => {
  //     document.addEventListener('fullscreenchange', (event) => {
  //       if (document.fullscreenElement) {
  //         toggleSchoolStatus(true);
  //         imageMapResize();
  //       } else {
  //         toggleSchoolStatus(false);
  //       }
  //     });
  //   }, []);

  const handle = useFullScreenHandle();
  const enterSchool = () => {
    toggleSchoolStatus(true);
    handle.enter();
  };

  const classroom1 = (
    <div>
      <div
        style={{
          position: 'absolute',
          paddingLeft: 3,
          paddingTop: 10,
          alignContent: 'center',
          zIndex: 1000
        }}
      >
        School{' '}
      </div>
      <div div style={{ zIndex: 500 }}>
        School1
      </div>
    </div>
  );

  return (
    <div>
      <FullScreen handle={handle}>
        {schoolStatus ? (
          <div>school</div>
        ) : (
          <div>
            <div style={{ paddingLeft: 400, paddingRight: 400 }}>
              <div style={{ backgroundColor: '#99ced3', padding: 20 }}>
                Click on the door to enter the school in full screen mode. You can press the Esc key to return.
              </div>
              <button onClick={() => enterSchool()} style={{ padding: 0, border: 'none', background: 'none' }}>
                button
              </button>
            </div>
          </div>
        )}
      </FullScreen>
    </div>
  );
};

export default VirtualSchool;
