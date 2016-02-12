
'use strict';

var React    = require('react');
var DataGrid = require('react-datagrid');

var columns = [
	{ name: 'item_no', width: 150 },
	{ name: 'file_name'},
	{ name: 'attach_time' }
];

function dataSource(query){
	//you need to return a Promise (or a thenable)
	var param = new Object();
    param.co_code = 0;
    param.form_id = 29;
    param.seq_no = 17132;
    param.pageSize=query.pageSize;
    console.log(query.pageSize);

	return $.ajax({
		url:'http://localhost:46323/FAdmin/getAttachfiles',
		method:'POST',
		dataType: "json",
		//data:JSON.stringify(param)
		//data:{co_code:0,form_id:29,seq_no:17132}
		data:param
	});
	//of course you can also send a POST request
}

var DataGrid1 = React.createClass({
	
	render: function(){
		return <DataGrid
			dataSource={dataSource}
			idProperty='item_no'
			columns={columns}
			style={{height: 500}}
		/>
	}
});

export default DataGrid1;
