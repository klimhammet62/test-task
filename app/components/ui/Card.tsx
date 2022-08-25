import { IUser } from 'types/DataTypes';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAction } from 'redux/actions/dataAction';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export const Card = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state.membersData.members.members);
	const page = useSelector((state: any) => state.loadMore.page);

	return data.slice(0, page).map((member: IUser) => (
		<div
			key={nanoid()}
			className="w-[231px] h-[220px] relative items-center m-2 shadow-lg  dark:shadow-md dark:shadow-white rounded-[38px] cursor-pointer"
			onClick={() => {
				dispatch(openModalAction(member));
			}}
		>
			<Image
				alt={member.about.split(' ').slice(0, 3).join(' ')}
				src={member.picture}
				objectFit="fill"
				width="231px"
				height="220px"
				draggable={false}
				className="rounded-3xl overflow-hidden"
			/>

			<div
				className="absolute bottom-0 left-0 bg-white 
							dark:bg-black pt-6 pb-6 w-[100%] rounded-b-3xl"
			>
				<ul className="left-0">
					<li className="flex items-center left-0">
						<h3 className="text-gray-300 ml-1">name: </h3>
						<span className="ml-1">{member.name}</span>
					</li>
					<li className="flex justify-between items-center">
						<h3 className="text-gray-300 ml-1">email: </h3>
						<span className="ml-1 max-w-md truncate">{member.email}</span>
					</li>
				</ul>
			</div>
		</div>
	));
};
