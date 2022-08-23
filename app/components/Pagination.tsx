import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

export const Pagination = () => {
	const data = useSelector(
		(state: { data: any; loadMore: number }) => state
	);
	return (
		<div className="flex items-center justify-around">
			
		</div>
	);
};
