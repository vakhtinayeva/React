import React from 'react'
import Select from 'react-select'

export default function SelectComponent(props) {
  return (
    <Select options={props.options} onChange={props.onChange}/>
  )
}