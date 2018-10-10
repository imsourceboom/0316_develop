import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import * as Animate from 'style/Animate';

const Wrap = styled.nav`
	&.Nav {
		width: 100%;
		animation: ${Animate.fadeIn} 1.5s;
	}

	& ul {
		margin: 0;
		padding: 0 6px;

		${breakpoint('tablet')`
            padding: 0 10px;
        `};

		& li {
			display: inline-block;
			padding: 4px 2px;
			margin: 0 10px;

			& h4 {
				margin: 0;
				font-size: 15.5px;
				font-weight: 700;

				${breakpoint('tablet')`
                	font-size: 16px;
            	`};
				& a {
					color: #ccc;
					background-image: none;
					transition: 0.5s;
				}
			}
		}
	}
`;

const Container = () => {
	const activeStyle = {
		color: '#000'
	};
	return (
		<Wrap className="Nav">
			<ul>
				<li>
					<h4>
						<NavLink
							exact
							to="/0316_develop"
							activeStyle={activeStyle}
						>
							About
						</NavLink>
					</h4>
				</li>
				<li>
					<h4>
						<NavLink
							to="/0316_develop/portfolio"
							activeStyle={activeStyle}
						>
							Portfolio
						</NavLink>
					</h4>
				</li>
				<li>
					<h4>
						<NavLink
							to="/0316_develop/language"
							activeStyle={activeStyle}
						>
							Service
						</NavLink>
					</h4>
				</li>
				<li>
					<h4>
						<NavLink
							to="/0316_develop/info"
							activeStyle={activeStyle}
						>
							Contact
						</NavLink>
					</h4>
				</li>
			</ul>
		</Wrap>
	);
};

export default Container;
