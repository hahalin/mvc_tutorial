'use strict';

var React = require('react');
var ReactDOM =require('react-dom');

var SelItem = React.createClass({
  render: function() {
    return <div onClick={this.props.onClick}>{this.props.v}</div>;
  },

  //this component will be accessed by the parent through the `ref` attribute
  animate: function() {
    console.log('Pretend %s is animating', this.props.v);
  }
});

//<ul className="nav nav-tabs nav-stacked">

var Sela=React.createClass({
	getInitialState: function () {
		return { list:this.props.list,selected:'' };
	},
    handleClick:function(index,v){
        this.props.callBackParent(index,v);
        return;
        var items = this.state.list.filter(function(item, i) {
          return index !== i;
        });
        
        this.setState({list: items}, function() {
          if (items.length === 1) {
             //this.refs.item0.animate();
          }
        }.bind(this));

    },
    render : function(){
        var _this=this;
        return(
            <div>
        	
        		{this.state.list.map(function(item,idx){
                    var boundClick=_this.handleClick.bind(this,idx,item.v);
        			return (
                        
                            <SelItem onClick={boundClick} key={idx} v={item.v} ref={'item'+idx}>
                                {item.v}
                            </SelItem>
                        
                    )
        		},this)}
        	
            </div>
        );
    }
});


var Selb=React.createClass({
    getInitialState: function () {
        return { list:this.props.list};
    },
    render : function(){
        return(
            <div>
                listb begin:
                {this.props.list.map(function(item,idx){
                    //var boundClick=this.handleClick.bind(this,idx,item.v);
                    return (
                            <SelItem key={idx} v={item.v} ref={'item'+idx}>
                                {item.v}
                            </SelItem>
                    )
                },this)}
                listb end:
            </div>
        );
    }
});



var MyContainer = React.createClass({
    getInitialState: function() {
    	var lista=[];
    	lista.push({v:"aaaa",key:"a"});
    	lista.push({v:"bbbb",key:"b"});
    	lista.push({v:"cccc",key:"c"});
        return { lista:lista,listb:[]};
    },
    onChildSelected: function(index,v) {
      // var newTotal = this.state.totalChecked + (newState ? 1 : -1);
      // this.setState({ totalChecked: newTotal });
        var list=this.state.listb;
        list=[];
        list.push({v:v,key:"key"+v});
        this.setState({
            listb:list
        });
    },
    render: function() {
        return  <div>
                  	<Sela
                  		list={this.state.lista}
                        callBackParent={this.onChildSelected}
                  	>
                  	</Sela>
                    <Selb
                        list={this.state.listb}
                    >
                    </Selb>
                </div>;
    }
});

ReactDOM.render(
		<div>
			<MyContainer id="btn-add">
			</MyContainer>
		</div>
        ,
        document.getElementById('main')
);