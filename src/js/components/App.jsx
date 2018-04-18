import React from 'react';
import Header from './Header.jsx';
import TrafficAnalytics from './TrafficAnalytics.jsx';

export default class App extends React.Component {

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<Header />
						<div id="ua-main-content-wrapper">
							<TrafficAnalytics />
						</div>
					</div>
				</div>
			</div>
		);
	}
}