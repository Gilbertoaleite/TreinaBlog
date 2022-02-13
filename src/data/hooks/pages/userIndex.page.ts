/** @format */

import { BlogPost } from '../../@types/BlogPostInterface';

export default function useIndex() {
	const posts: BlogPost[] = [
		{
			id: '2',
			title: '5 dicas para conseguir um bom estágio',
			slug: '5dicas',
			description:
				'Conquistar a primeira experiência profissional para adquirir experiência na área pode parecer difícil - e às vezes é mesmo. Por isso, separamos algumas ações simples, para tentar facilitar essa busca e te ajudar a conseguir as oportunidades da melhor maneira.',
			picture:
				'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/10/5-dicas-para-conseguir-um-bom-estagio-400x280.png',
			link: '',
		},
		{
			id: '1',
			title: 'Diferença entre os atributos async e defer',
			slug: 'Diferenca-entre-async-e-defer',
			description:
				'Nesse artigo vamos ver em detalhes como os atributos async e defer se comportam ao declarar seus arquivos JavaScript no HTML.',
			picture:
				'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/11/diferenca_entre_os_atributos_async_e_defer-400x280.png',
			link: '',
		},
	];

	return {
		posts,
	};
}
