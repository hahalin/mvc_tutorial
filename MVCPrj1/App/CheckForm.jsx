'use strict';

//import React from 'react';
var React = require('react');
var ReactDOM =require('react-dom');
//import React from 'react';
//require('./index.styl')
//import Forms from './gdFlowFormList.jsx';

import TestDataGrid from './grid/DataGrid1.js';

//var Hello=require('./hello');


ReactDOM.render(
        <TestDataGrid>
        </TestDataGrid>,
        document.getElementById('container')
);
