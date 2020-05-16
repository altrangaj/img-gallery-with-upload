import { useState } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const useField = (type, initial) => {
  const [value, setValue] = useState(initial)

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const reset = () => {
    setValue('')
  }

  return {
    input: {
      type,
      value,
      onChange,
    },
    reset,
  }
}
