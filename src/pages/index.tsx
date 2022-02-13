/** @format */

import Head from 'next/head';
import useIndex from '../data/hooks/pages/userIndex.page';
// import styles from '../ui/styles/Home.module.css';
import Link from 'next/link';
import PostList from '../ui/components/PostList/PostList';

export default function Home() {
	const { posts } = useIndex();

	return (
		<div>
			<Head>
				<title>TreinaBlog_</title>

				
			</Head>

			<main>
				<PostList posts={posts} />
			</main>
		</div>
	);
}
