import React, { useState } from 'react'
import Highlight from './highlight'
import { lower } from './utils'

const App = () => {
  const [word, setWord] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseHours, setCourseHours] = useState('')

  function handleChange (func) {
    return (e) => {
      func(e.target.value)
    }
  }

  return (
    <>
      <input type='text' value={word} onChange={handleChange(setWord)} />
      <p>
        <Highlight
          children='Texto a ser marcado.'
          toHighlight={word}
        />
      </p>

      <p>
        <Highlight
          children='Um outro texto que também poderá ser marcado.'
          toHighlight={word}
        />
      </p>

      <table>
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type='text'
                value={courseName}
                onChange={handleChange(setCourseName)}
              />
            </td>
            <td>
              <input
                type='text'
                value={courseHours}
                onChange={handleChange(setCourseHours)}
              />
            </td>
          </tr>

          {courses
            .filter((course) => (
              lower(course.name).includes(lower(courseName)) &&
              lower(course.hours).includes(lower(courseHours))
            ))
            .map((course) => (
              <tr key={course.name}>
                <td>
                  <Highlight
                    children={course.name}
                    toHighlight={courseName}
                  />
                </td>
                <td>
                  <Highlight
                    children={course.hours}
                    toHighlight={courseHours}
                  />
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

const courses = [
  {
    name: 'JavaScript Ninja',
    hours: '42h'
  },

  {
    name: 'React.js Ninja',
    hours: '60h'
  }
]

export default App
