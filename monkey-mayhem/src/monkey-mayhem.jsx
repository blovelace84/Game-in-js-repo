import { useEffect, useRef, useState } from 'react';
import { createGame } from 'odyc';

export default function OdycGame({ onGameOver }) {
  const gameRef = useRef(null);
  const [bananas, setBananas] = useState(0);
  const [level, setLevel] = useState(1);

  const maps = [
    `
      ##########
      #....B...#
      #..M.....#
      #....B...#
      ##########
    `,
    `
      ##########
      #B....M..#
      #....B...#
      #M....B..#
      ##########
    `
  ];

  useEffect(() => {
    if (gameRef.current) {
      createLevel(level);
    }
  }, [level]);

  function createLevel(levelIndex) {
    createGame({
      element: gameRef.current,
      title: `Monkey Mayhem - Level ${levelIndex}`,
      player: { sprite: 7, position: [2, 2] },
      map: maps[levelIndex - 1],
      templates: {
        B: {
          sprite: 5, // banana
          onCollide: () => {
            setBananas(prev => {
              const newCount = prev + 1;
              if (newCount === countTotalBananas(maps[levelIndex - 1])) {
                if (levelIndex < maps.length) {
                  setLevel(levelIndex + 1);
                } else {
                  onGameOver(true); // Won the game
                }
              }
              return newCount;
            });
            return null; // remove banana
          }
        },
        M: {
          sprite: 8, // monkey enemy
          follow: 'player', // Odyc auto-follow player
          speed: 1,
          onCollide: () => {
            onGameOver(false); // Lost the game
          }
        }
      },
      music: {
        src: '/jungle-theme.mp3',
        loop: true
      }
    });
  }

  function countTotalBananas(mapString) {
    return (mapString.match(/B/g) || []).length;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 10,
        left: 10,
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '6px'
      }}>
        🍌 Bananas: {bananas}
      </div>
      <div ref={gameRef} style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
}
