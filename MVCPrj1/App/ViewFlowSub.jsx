'use strict';

var React = require('react');
var ReactDOM =require('react-dom');

//require('../Content/bootstrap.min.css');


import FormData from './ViewFlow/FormData';
//var FormData =require('ViewForm/FormData');

var Tabs=React.createClass({

	render: function() {

		return (
			<div>
				<ul className="nav nav-tabs" role="tablist" id="mtabs">
		                <li role="presentation" className="active"><a href="#fma-tab1" aria-controls="tab" role="tab" data-toggle="tab">本文</a></li>
		                <li role="presentation"><a href="#fma-tab2" aria-controls="tab2" role="tab" data-toggle="tab">審核</a></li>
		                <li role="presentation"><a href="#fma-tab3" aria-controls="tab3" role="tab" data-toggle="tab">夾檔</a></li>
		                <li role="presentation"><a href="#fma-tab4" aria-controls="tab4" role="tab" data-toggle="tab">流程</a></li>
		                <li role="presentation"><a href="#fma-tab5" aria-controls="tab5" role="tab" data-toggle="tab">副本</a></li>
		                <li role="presentation"><a href="#fma-tab6" aria-controls="tab6" role="tab" data-toggle="tab">加簽</a></li>
		                <li role="presentation"><a href="#fma-tab7" aria-controls="tab7" role="tab" data-toggle="tab">檢視</a></li>
		        </ul>
		        <div className="tab-content">
		        	
		        	<div role="tabpanel" className="tab-pane active fade in" id="fma-tab1">
		        	   <p>
		                   <FormData co_code="1" uid='T000165'> 
		                   </FormData>
	                   </p>
		            </div>
		             <div role="tabpanel" className="tab-pane fade in" id="fma-tab2">
		               	<p>
		                <form id="fmSign" className="form-horizontal">
		                    <div className="row">
		                        <div className="col-md-10">
		                            <input type="button" className="btn btn-primary" value="同意" />
		                            <input type="button" className="btn btn-warning" value="不同意" />
		                        </div>
		                    </div>
		                    <div className="row">
		                        <div className="col-md-4">
		                            <label htmlFor="txtOpinion">審核意見</label>
		                            <textarea id="txtOpinion" rows="15" className="form-control"></textarea>
		                        </div>
		                        <div className="col-md-8">
		                            <label htmlFor="txtOpinion">審核紀錄</label>

		                            <table id="tbSignHistory" className="display table table-striped table-bordered table-hover">
		                                <thead>    
		                                    <tr>
		                                        <th style={{width:'80px'}}>審核者</th>
		                                        <th style={{width:'100px'}}>結果</th>
		                                        <th>審核時間</th>
		                                        <th>意見</th>
		                                    </tr>
		                                </thead>
		                            </table>
		                        </div>
		                    </div>
		                </form>
		                </p>
		            </div>
		         	
		        </div>
	        </div>

		);

	}

});

ReactDOM.render(
        <Tabs>
        </Tabs>,
        document.getElementById('container')
);

console.log('react');
