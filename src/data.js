import { MyToken, Koinvestor } from 'pages/Detail'

export const data = {
	project: [
		{
			id: 1,
			name: 'My Token',
			summary: 'CryptoCurrency Portfolio',
			title: MyToken.lego.title,
			description: MyToken.lego.content,
			url: 'http://www.mytoken.co.kr/',
			footnote: '* 모바일 전용 서비스입니다.',
			duration: 0.7
		},
		{
			id: 2,
			name: 'Koinvestor',
			summary: 'BlockChain Tech Report',
			title: Koinvestor.lego.title,
			description: Koinvestor.lego.content,
			url: 'http://www.koinvestor.com/',
			footnote: '* 업체 요청으로 비공개 중입니다.',
			duration: 1
		},
		{
			id: 3,
			name: 'Busan1st',
			summary: 'Busan Real Estate',
			title: '',
			description: '',
			url: '',
			footnote: '',
			duration: 1.3
		},
		{
			id: 4,
			name: 'showerBooth',
			summary: 'Major Construction Company',
			title: '',
			description: '',
			url: '',
			footnote: '* 제작중입니다.',
			duration: 1.5
		}
	]
};
