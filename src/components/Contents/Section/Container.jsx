import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Portfolio, Service, Contact } from 'pages/Article';
import Detail from 'components/Detail';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrap = styled.section`
    padding: 10px 0;
    padding-bottom: 40px;

    ${breakpoint('tablet')`
		padding-bottom: 70px;
	`};
`;

const Container = () => (
    <Wrap>
        <Route exact path="/" component={About} />
        <Switch>
            <Route path="/portfolio/:id" component={Detail} />
            <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Route path="/language" component={Service} />
        <Route path="/info" component={Contact} />
    </Wrap>
);

export default Container;
