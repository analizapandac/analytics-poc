import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header id="ua-header">
				<div className="row">
					<div className="col-12 text-center">
						<h3 id="ua-page-title">Traffic Analytics</h3>
					</div>
				</div>
			</header>
		);
	}
}