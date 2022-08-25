import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalWindow } from './ModalWindow';
import { Pagination } from './Pagination';
import { Card } from './ui/Card';

export const ProductCards = () => {
	const data = useSelector((state: any) => state.membersData.members.members);
	const modalData = useSelector((state: any) => state.toggleModal);
	const page = useSelector((state: any) => state.loadMore.page);
	const [totalPage, setTotalPage] = useState(0);
	//cardsInfo можно было бы сделать переиспользуемым

	return (
		<>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-3">
				{data && <Card />}
			</div>
			{page && totalPage < Math.floor(data?.length / 4) ? (
				<Pagination totalPage={totalPage} setTotalPage={setTotalPage} />
			) : (
				<></>
			)}
			{modalData?.modal ? (
				<>
					<div
						className="relative z-10"
						aria-labelledby="modal-title"
						role="dialog"
						aria-modal="true"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
						<div className="fixed z-10 inset-0 overflow-y-auto">
							<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
								<ModalWindow />
								<div className="mt-2"></div>
							</div>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
};
