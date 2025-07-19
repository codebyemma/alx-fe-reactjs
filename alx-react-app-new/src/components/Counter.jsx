import { useState } from 'react';

function Counter() {
	const [ count, setCount ] = useState(0);
	const increase = () => setCount(count + 1);

	const decrease = () => setCount(count - 1);

	const reset = () => setCount(0);

	return (
	<div style={{display: 'flex',
	gap: '30px'}}>
	<p>Current Count: {count}</p>
	<button onClick={increase}>Increament</button>
	<button onClick={decrease}>Decreament</button>
	<button onClick={reset}>Reset</button>
	</div>
	);
}

export default Counter;
