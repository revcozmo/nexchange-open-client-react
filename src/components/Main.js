import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeWidget from '../components/ExchangeWidget';
import ErrorAlert from '../components/ErrorAlert';

class Main extends Component {

	render() {
	    return (
			<div id="main">
				<ErrorAlert />

				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="brand">
						        <h1>Exchange crypto-currencies</h1>
						        <h3>Simple. <span style={{color: "#2cb4a0"}}>Secure</span>. Transparent.</h3>
							</div>
						</div>

						<ExchangeWidget />
					</div>
				</div>
			</div>
	    );
	}
}

export default Main;
