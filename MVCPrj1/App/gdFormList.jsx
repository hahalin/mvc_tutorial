
'use strict';
var React = require('react');
var gdFormList=React.createClass({
    render:function(){
        return (
        <div className="col-md-12">
            <table id="tba" className="display table table-striped table-bordered table-hover" cellspacing=" 0" width="90%">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>form_name</th>
                        <th>dep_name</th>
                        <th>usr_name</th>
                        <th>receive_time</th>
                    </tr>
                </thead>
            </table>
        </div>
        );
    }
});
var hello=React.createClass({
    render:function(){
        return (
			<h2>hello</h2>
		);
    }
});
module.exports = hello;