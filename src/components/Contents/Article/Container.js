import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Portfolio, Service, Contact } from 'pages/Article';
import Detail from 'components/Detail';
// import { Detail } from 'pages/Detail';
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

const Wrap = styled.article`
	&.Article {
		padding: 10px 0;
		padding-bottom: 40px;
	}
`;

const Container = () => (
	<Wrap className="Article">
		<Route exact path="/0316_develop" component={About} />
		<Switch>
			<Route path="/0316_develop/portfolio/:id" component={Detail} />
			<Route path="/0316_develop/portfolio" component={Portfolio} />
		</Switch>
		<Route path="/0316_develop/language" component={Service} />
		<Route path="/0316_develop/info" component={Contact} />
	</Wrap>
);

export default Container;
