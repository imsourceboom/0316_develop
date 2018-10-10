import React from 'react';
import styled from 'styled-components';
import * as Ui from 'style/Ui';
import * as Animate from 'style/Animate';

const Card = styled(Ui.Box)`
	animation: ${Animate.fadeInLeft} ${props => `${props.duration}s`};
	flex-direction: column;
	align-items: flex-start;

	& p {
		font-size: 15px;
	}

	& span {
		font-size: 12px;
        opacity: 0.85;
        &:hover {
            opacity: 1;
        }
	}
`;

const Service = () => (
	<>
		<Card duration={0.8}>
			<p>Mobile first</p>
			<span>
				인터넷을 사용하는 인구 10명 중 9명(95.1%)은
				<br />
				<br />
				장소 구분없이 스마트폰을 이용하고 있습니다.
				<br />
				<br />
				<br />
				웹사이트를 기획하는 단계부터 모바일 페이지의
				<br />
				<br />
				모습을 생각하고 최고의 레이아웃을 만들어 드립니다.
			</span>
		</Card>
		<Card duration={1}>
			<p>Responsive</p>
			<span>
				인터넷 점유율의 40%가 모바일 디바이스에서 발생하고 있습니다.
				<br />
				<br />
				스마트폰에서 자사의 웹사이트에 접속해보세요.
				<br />
				<br />
				<br />
				반응형 웹사이트로 제작하면
				<br />
				<br />
				PC, 태블릿, 모바일 등 디바이스 크기에 맞춰
				<br />
				<br />
				자동으로 변형되어 별도의
				<br />
				<br />
				모바일 홈페이지를 구축하실 필요가 없습니다.
			</span>
		</Card>
		<Card duration={1.2}>
			<p>Optimization</p>
			<span>
				어떠한 환경에서든 동일한 경험을 체험을 할 수 있도록
				<br />
				<br />
				최상의 최적화 작업을 해드립니다.
			</span>
		</Card>
		<Card duration={1.5}>
			<p>Management</p>
			<span>
				지속적인 관리를 통해 항상 최신의 컨텐츠로 유지시켜 드립니다.
			</span>
		</Card>
	</>
);

export default Service;
