export default class GdFlowFormList extends React.Component {
	constructor(props) {
    	super(props);
    	this.state={
    		FormList:[
				{id:'ida',cname:'cnamea'},
				{id:'idb',cname:'cnameb'}
			]	
    	};
	}
	render() {
		
		const list=this.state.FormList;
		return (
			<table className="display table table-striped table-bordered table-hover">
				{list.map(item =>
				<tr>
						<td>{item.id}</td>
						<td>{item.cname}</td>
				</tr>
				)}
			</table>
		);
	}
}