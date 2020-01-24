import React from "react";
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './styles/style.css';

import App from "./components/App/App";

dotenv.config();

ReactDOM.render(<App/>, document.getElementById('root'));
