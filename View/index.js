import React, {
    Component
} from 'react'
import ReactDOM from 'react-dom'
import Router from './router'

let div = document.createElement("div");
div.setAttribute("id", "container");
document.body.appendChild(div);

ReactDOM.render(
    <Router />,
    document.getElementById('container')
)