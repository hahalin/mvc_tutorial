
'use strict';

var React    = require('react');
var DataGrid = require('react-datagrid');
//import Paginator from "./Paginator.jsx"

var columns = [
	{ name: 'apply_title', width: 150 },
	{ name: 'form_name'},
	{ name: 'dep_name' },
	{ name: 'usr_name' },
	{ name: 'receive_time' }
];


function dataSource(query){
	//you need to return a Promise (or a thenable)
	var param = new Object();
    param.co_code = 0;
    param.form_id = 29;
    param.seq_no = 17132;
    param.pageSize=query.pageSize;
    param.skip=query.skip;
    console.log(query);
    param.page=2;
    param.co = '0';
    param.uid = 'T000165';
    param.draw=0;

    return null;

	return $.ajax({
		url:'http://localhost:46323/FAdmin/getBillList',
		method:'POST',
		dataType: "json",
		idProperty:'form_id',
		data:param
	});
	//of course you can also send a POST request
}

var GdNeedApprove = React.createClass({
	
	render: function(){
		return
		
			<DataGrid
				//dataSource={dataSource}
				idProperty='form_id'
				columns={columns}
				style={{height: 500}}
			/>
			
			// <Paginator> 
			// </Paginator>
		
	}
});

export default GdNeedApprove;
