import React from 'react';
import styled from 'styled-components';
import Section from 'components/Contents/Section';

const Wrap = styled.main`
	width: 100%;
	max-width: 769px;
	margin: 0 auto;
`;

const Container = () => (
	<Wrap>
		<Section />
	</Wrap>
);

export default Container;
