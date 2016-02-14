
import React from 'react';

class FormData extends  React.Component {
	constructor(props) {
    	super(props);
	}
	render(){
		const co_code=this.props.co_code;
		const uid=this.props.uid;
		return (

			<form className="form-horizontal">
		    	FormData
		    	<label>{co_code}</label>
		    	
		    	<input defaultValue={this.props.uid}></input>
		    </form>	

		);


	}
};


export default FormData;