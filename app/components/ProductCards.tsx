import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction, openModalAction } from 'redux/actions/dataAction';
import { IUser } from 'types/DataTypes';

import { Pagination } from './Pagination';

export const ProductCards = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state.membersData.members.members);
	const modalData = useSelector((state: any) => state.toggleModal);
	const page = useSelector((state: any) => state.loadMore.page);
	const [totalPage, setTotalPage] = useState(0);
	//adaptive image (next image not pixels also rem or smth like and modalka)
	console.log(modalData?.memberData);

	return (
		<>
			<div className="grid grid-cols-4 gap-3">
				{data &&
					data.slice(0, page).map((member: IUser) => (
						<div
							key={nanoid()}
							className="w-[231px] h-[220px] relative items-center m-2 shadow-lg  dark:shadow-md dark:shadow-white rounded-[38px] cursor-pointer"
							onClick={() => {
								dispatch(openModalAction(member));
							}}
						>
							<div style={{ borderRadius: '28px', overflow: 'hidden' }}>
								<Image
									alt={member.about.split(' ').slice(0, 3).join(' ')}
									src={member.picture}
									objectFit="fill"
									width="231px"
									height="220px"
									draggable={false}
								/>
							</div>

							<div className="absolute bottom-0 left-0 bg-white dark:bg-black pt-6 pb-6 w-[231px] rounded-b-[12px]">
								<ul className="left-0">
									<li className="flex items-center left-0">
										<h3 className="text-gray-300 ml-1">name: </h3>
										<span className="ml-1">{member.name}</span>
									</li>
									<li className="flex justify-between items-center">
										<h3 className="text-gray-300 ml-1">email: </h3>
										<span className="ml-1 max-w-md truncate">
											{member.email}
										</span>
									</li>
								</ul>
							</div>
						</div>
					))}
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
								<div
									key={nanoid()}
									className="w-[580px] h-[480px] relative items-center m-2 rounded-[10%]"
								>
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => dispatch(closeModalAction())}
									>
										X
									</button>
									<div style={{ borderRadius: '28px', overflow: 'hidden' }}>
										<Image
											alt={modalData.memberData.about
												.split(' ')
												.slice(0, 3)
												.join(' ')}
											src={modalData.memberData.picture}
											objectFit="fill"
											width="580px"
											height="480px"
											draggable={false}
										/>
									</div>
								</div>
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
