import React, { useState } from "react"

interface IProps {
	prop1: string
}

function Example({ prop1 }: IProps) {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState<number>(0)

	return (
		<div>
			<p>{`Here to display ${prop1}.`}</p>
			<p>
				{`You clicked ${count} times`}
			</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}

export default Example
