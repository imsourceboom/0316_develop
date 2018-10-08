import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Contents from 'components/Contents';

const RootWrap = styled.main``;

class App extends Component {
	render() {
		return (
			<RootWrap>
				<Header />
				<Contents />
			</RootWrap>
		);
	}
}

export default App;
