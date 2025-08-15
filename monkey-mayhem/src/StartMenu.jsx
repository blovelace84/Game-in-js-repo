export default function StartMenu({ onStart }) {
    return(
        <div style={{
            textAlign: 'center',
            background: '#222',
            color: '#fff',
            padding: '50px',
            borderRadius: '12px'
        }}>
            <h1>Monkey Mayhem</h1>
            <p>Collect all bananas and avoid wild monkeys!</p>
            <button
                onClick={onStart}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    background: 'gold',
                    border: 'none',
                    borderRadius: '8px',
                }}
            >
                Start Game
            </button>
        </div>
    );
}