import { TestPage } from '@/components/screens/TestPage/TestPage';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMembersAction } from 'redux/actions/dataAction';

const MembersPage: NextPage = (members) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMembersAction(members));
	}, []);

	return <TestPage />;
};
export async function getServerSideProps() {
	const res = await fetch(`https://layout.solvintech.ru/nuxt/api/`);
	const data = await res.json();

	return {
		props: { members: data },
	};
}
//можно просто getServerSideProps, но по заданию нужно положить данные в redux

export default MembersPage;
