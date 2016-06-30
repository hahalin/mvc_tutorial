import React from 'react';

// class pagerlink extends React.Component {
// 	render() 
// 	{
// 		return (

// 			)
// 	}
// }

class Paginator extends React.Component {
	constructor(props) {
    	super(props);
    	this.state={currentpage:props.currentpage};	
	}
	
	componentWillMount()
	{
	

	}

	render(){
		//const co_code=this.props.co_code;
		//const uid=this.props.uid;
		
		var href="/?ctrl="+this.props.ctrl+"&pg="+this.props.pg;
		return (
			
			<nav>
			  <ul className="pagination">
			    <li>

			      <a href="#" aria-label="Previous"  
			         className={this.state.currentpage==1?"active":""}
				   >
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
			  	{(function (rows, i, len) {
				    while (i <= len) {
				      rows.push(<li><a href={href+"&pgidx="+i}>{i}</a></li>)
				      i++;
				    }
				    return rows;
				  })([], 1, 8)}
			    <li>
			      <a href="#" aria-label="Next">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>
			</nav>

		);


	}
};


export default Paginator;