import { useEffect, useRef } from 'react';
import { createGame } from 'odyc';

export default function OdycGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) {
      createGame({
        element: gameRef.current, // Attach game to this div
        title: 'Monkey Mayhem',
        player: { sprite: 7, position: [2, 2] },
        map: `
          ########
          #......#
          #..B...#
          #......#
          ########
        `,
        templates: {
          B: {
            sprite: 5,
            dialog: 'You found a banana! +1 point.',
          }
        },
        music: {
            src: '', //Add music here
            loop: true,
        } 
      });
    }
  }, []);

  return (
    <div
      ref={gameRef}
      style={{
        width: '100%',
        height: '100%',
        background: '#000'
      }}
    ></div>
  );
}
