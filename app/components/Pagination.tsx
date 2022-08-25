import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { setPageAction } from 'redux/actions/dataAction';

export const Pagination = ({
	setTotalPage,
	totalPage,
}: {
	setTotalPage: Dispatch<SetStateAction<number>>;
	totalPage: number;
}) => {
	const dispatch = useDispatch();

	return (
		<div
			className="flex items-center justify-around bg-primary 
		text-white dark:text-black dark:bg-gray-400 p-3 pl-24 pr-24 cursor-pointer"
			onClick={() => {
				setTotalPage(totalPage + 1);
				dispatch(setPageAction());
			}}
		>
			Load More...
		</div>
	);
};
