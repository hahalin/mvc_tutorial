'use strict';

var React = require('react');
var ReactDOM =require('react-dom');

import GdNeedApprove from './grid/GdNeedApprove.js';
import TestDataGrid from './grid/TestDataGrid.js';
import Paginator from "./grid/Paginator.jsx"

ReactDOM.render(
		<div>
			<table>
				<tr>
					<td>1
					</td>
				</tr>
			</table>
			<GdNeedApprove>
			</GdNeedApprove>
	        <Paginator ctrl='flow' pg="1" currentpage="1">
	        </Paginator>
        </div>
        ,
        document.getElementById('container')
);
