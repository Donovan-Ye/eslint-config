import React from 'react'

type CounterProps = {
  test?: string
}

type CounterState = {
  count: number
}

class Example extends
  React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <p>
          {`You clicked ${this.state.count} times`}
        </p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click me
        </button>
      </div>
    )
  }
}

export default Example
