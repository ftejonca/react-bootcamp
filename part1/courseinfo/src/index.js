import React from 'react'
import ReactDOM from 'react-dom'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Total from './total'

/**
const Title = ({course}) => <h1>{course}</h1>  forma corta igual de válida
 */

const Title = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Title course={course} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
