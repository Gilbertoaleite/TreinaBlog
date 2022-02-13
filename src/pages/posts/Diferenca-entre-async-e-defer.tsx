/** @format */

import PostBody from '../../ui/components/PostBody/PostBody';

export default function MeuPost1() {
	return (
		<>
			<PostBody
				post={{
					id: '1',
					title: 'Diferença entre os atributos async e defer',
					slug: 'Diferenca-entre-async-e-defer',
					description:
						'Nesse artigo vamos ver em detalhes como os atributos async e defer se comportam ao declarar seus arquivos JavaScript no HTML.',
					picture:
						'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/11/diferenca_entre_os_atributos_async_e_defer-400x280.png',
					link: 'https://www.treinaweb.com.br/blog/diferenca-entre-os-atributos-async-e-defer',
				}}
			/>
		</>
	);
}
