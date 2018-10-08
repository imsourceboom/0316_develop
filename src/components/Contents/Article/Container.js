import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Portfolio, Language, Info } from 'pages/Article';
import Detail from 'components/Detail'
// import { Detail } from 'pages/Detail';
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

const Wrap = styled.article`
	padding: 10px 0;
`;

const Container = () => (
	<Wrap>
		<Route exact path="/" component={About} />
		<Switch>
		<Route path="/portfolio/:id" component={Detail} />
		<Route path="/portfolio" component={Portfolio} />
		</Switch>
		<Route path="/language" component={Language} />
		<Route path="/info" component={Info} />
	</Wrap>
);

export default Container;
