/** @format */

import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import styles from '../ui/styles/Home.module.css';
import Link from 'next/link';
import github from '../ui/img/github.png';
import linkedin from '../ui/img/linkedin.png';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<header>
				<Link href={'/'}>
					<a>
						<h1 className={styles['title']}>
							Treina
							<span className={styles['title-second-word']}>Blog</span>
						</h1>
					</a>
				</Link>
			</header>
			<Component {...pageProps} />

			<footer>
				<div className={styles['social']}>
					<p>
						2022 &copy; - Desenvolvido por:
						<a href='https://gilbertoaleite-portfolio.netlify.app/'>
							<span className={styles['dev']}> Gilberto A Leite</span>
						</a>
					</p>
					<div>
						<a href='https://github.com/gilbertoaleite/'>
							<Image src={github} />
						</a>
						<a href='https://www.linkedin.com/in/gilbertoaleite'>
							<Image src={linkedin} />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
export default MyApp;
