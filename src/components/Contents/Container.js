import React from 'react';
import styled from 'styled-components';

import Nav from 'components/Contents/Nav';
import Article from 'components/Contents/Article';

const Wrap = styled.section`
	width: 100%;
	max-width: 769px;
	margin: 0 auto;
`;

const Container = () => (
	<Wrap>
		<Nav />
		<Article />
	</Wrap>
);

export default Container;
