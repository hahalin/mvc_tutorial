'use strict';

var React = require('react');
var ReactDOM =require('react-dom');
var Alert = require('react-bootstrap/lib/Alert');
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Popover  from 'react-bootstrap/lib/Popover';
import OverlayTrigger  from 'react-bootstrap/lib/OverlayTrigger';

$.extend($.fn.popover.Constructor.DEFAULTS, {react: false});
var oldSetContent = $.fn.popover.Constructor.prototype.setContent;
$.fn.popover.Constructor.prototype.setContent = function() {
    if (!this.options.react) {
        return oldSetContent.call(this);
    }

    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();

    $tip.removeClass('fade top bottom left right in');

    // If we've already rendered, there's no need to render again
    if (!$tip.find('.popover-content').html()) {
        // Render title, if any
        var $title = $tip.find('.popover-title');
        if (title) {
            React.renderComponent(title, $title[0]);
        } else {
            $title.hide();
        }

        React.renderComponent(content,  $tip.find('.popover-content')[0]);
    }
};

var Field=React.createClass({
    render : function(){
        return(
        	<label>test</label>
        );
    }
});

var FieldList=React.createClass({
	getInitialState: function () {
		return { _fds:this.props.elements };
	},
    render : function(){
    	
        return(
        	<ul className="nav nav-tabs nav-stacked" id="form-fields">
        		{this.state._fds.map(function(item,idx){
        			return <li>{item.v}</li>	
        		})}
        	</ul>
        );
    }
});


var PopOver=React.createClass({
	
	getInitialState: function () {
		var list=[];
		list.push({fdname:'a',v:"a",width:60,selected:false});
		list.push({fdname:'b',v:"b",width:100,selected:false});
    	return { fdlist: list};
	},
	//'<ul class="nav nav-tabs nav-stacked" style="margin-bottom:0px;" id="form-fields"></ul>&nbsp;'
	componentDidMount: function() {

		$(this.trigger).popover({
			html: true,
			placement:"bottom",
			title:'Add field',
			container:'body',
			content:'<ul class="nav nav-tabs nav-stacked" style="margin-bottom:0px;" id="form-fields"></ul>&nbsp;'
				
		});
		var flist=this.state.fdlist;
		
		var _this=this;
		$(this.trigger).on('shown.bs.popover',
				function(){
					$('#form-fields').empty();
					
					flist.map(function(item,idx){
						var fditem=$('<li><a class="btn btn-default"><i class="glyphicon glyphicon-plus"></i>'+item.v+'</a>')
						$('#form-fields').append(fditem);	

						$(fditem).attr('fdv',item.v);
						$(fditem).children('a').attr('fdv',item.v);
						$(fditem).children('a').attr('width',item.width);
						$(fditem).children('a').attr('fdname',item.v);

						$(fditem).click(function(e){
							var div;
							if ($('.form-row.selected').length===0)
							{
								div=gen_formrow();
							}
							else
							{
								div=$('.form-row.selected');
							}

							var fdobj=createFd(item.v,item);
							
							div.append(fdobj);
							
							$('#div_elements').append(div);
							$(_this.trigger).popover('hide');

							
							$(fdobj).click(function(){
								
								var list=_this.state.fdlist;
								$.each(list,function(fdidx,fditem){
									
									fditem.selected=false;
									if (fditem.fdname===item.fdname)
									{
										fditem.selected=true;

									}
								});
								_this.setState({fdlist:list});
								_this.showprop(this,item.fdname);
							});
						});

						
					});

					var item=$('<li><a><i class="glyphicon glyphicon-plus"></i>add fieldset</a>');
				
					item.click(function(){
						var div=gen_formrow();
						$('#div_elements').append(div);
						$('#div_elements').sortable({
								items:'.form-row'
						});
						$(_this.trigger).popover('hide');
					});
				
					$('#form-fields').append(item);

					return;
					var item=$('<li><a class="btn btn-default"><i class="glyphicon glyphicon-plus"></i>aaaaa</a>');
					
					$(item).click(function(){
						
						var div;
						if ($('.form-row.selected').length===0)
						{
							div=gen_formrow();
						}
						else
						{
							div=$('.form-row.selected');
						}
						
						div.append(createFd("aa"));
						
						$('#div_elements').append(div);
						$(this.trigger).popover('hide');

						$('.form-col').click(function(){
							this.props.showprop();
						});
						
					});
				
					$('#form-fields').append(item);
				
					
					
				}
		);

	},
	showprop:function(e,fdname){
		var _this=this;
		console.log(fdname);
		this.state.fdlist.map(function(item,idx){
			if (item.fdname===fdname)
			{
				$(_this.fmprop).find('[name="edwidth"]').val(item.width);
				$(_this.fmprop).find('[name="edwidth"]').attr('fdname',item.fdname);

			}
		});
		
		
	},
	handleFieldProperty:function(e){
		console.log(e.target);
		var fdname=$(e.target).attr('fdname');
		var list=this.state.fdlist;
		list.map(function(item,idx){
			if (item.fdname===fdname)
			{
				item.width=$(e.target).val()
				$('.form-col.selected input').css('width',item.width+'px');
			}
		});
		this.setState({fdlist:list});


	},
    handleClick:function(){
		$(this.trigger).popover();
	},

	additem:function(){
		
		var list=this.state.fdlist;

		list.push({v:'c'});

		this.setState({fdlist:list});
		
	},
	render:function(){
		var ulstyle={
        		'marginbottom':'10px'
        	};
        return (

        	<div className="container " style={{'marginTop':'10px'}} >
        		<div className="row col-md-12" >
	        		<div className="col-md-3">
	        			<button 
	        				onClick={this.additem}
	        			>
	        				add flist
	        			</button>
		        		<button
		        			ref={(c) => this.trigger = c}
		        			id={this.props.id}
							className="btn btn-default btn-sm"
							data-toggle="popover"
							data-trigger="focus"
							title="titleabcdefg"
							onClick={this.handleClick}
		        		>
		        		<i className="glyphicon glyphicon-plus">
						</i>
						add fields
		        		</button>
		        		<div className="row">
		        			<form className="fmprop" ref={(f)=>this.fmprop=f}>

		        				<label>width:
		        				</label>
		        				<input name="edwidth" type="text" onChange={this.handleFieldProperty}>
		        				</input>
		        			</form>
		        		</div>
	        		</div>
	        		<div className="col-md-9">
							<form className="horizontal" id="form_design">
								<div id="div_elements" className="nav ui-sortable">
								</div>
							</form>
					</div>
				</div>
        	</div>

        )

	}
});




ReactDOM.render(
		<div>
			<PopOver id="btn-add">
			</PopOver>
		</div>
        ,
        document.getElementById('main')
);
