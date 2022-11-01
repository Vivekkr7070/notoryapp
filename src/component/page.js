import React from 'react'

export default function Pagec(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.name}</li>
    <li className="list-group-item">{props.email}</li>
    <li className="list-group-item">{props.status}</li>
  </ul>
</div>
  )
}
