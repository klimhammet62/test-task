import { useSelector } from 'react-redux';

export const CardsInfo = () => {
	const modalData = useSelector((state: any) => state.toggleModal);

	return (
		<div
			className="absolute bottom-0 left-0 bg-white dark:bg-black pt-6 pb-6 w-[100%]
									rounded-b-[12px] z-0"
		>
			<ul className="left-0">
				<li className="flex items-center left-0">
					<h3 className="text-gray-300 ml-1">name: </h3>
					<span className="ml-1">{modalData.memberData.name}</span>
				</li>
				<li className="flex items-center left-0">
					<h3 className="text-gray-300 ml-1">age: </h3>
					<span className="ml-1 max-w-md truncate">
						{modalData.memberData.age}
					</span>
				</li>
				<li className="flex items-center left-0">
					<h3 className="text-gray-300 ml-1">email: </h3>
					<span className="ml-1 max-w-md truncate">
						{modalData.memberData.email}
					</span>
				</li>
				<li className="flex items-center left-0">
					<h3 className="text-gray-300 ml-1">email: </h3>
					<span className="ml-1 max-w-md truncate">
						{modalData.memberData.phone}
					</span>
				</li>
				<li className="flex items-center left-0">
					<h3 className="text-gray-300 ml-1">email: </h3>
					<span className="ml-1 max-w-md truncate">
						{modalData.memberData.about}
					</span>
				</li>
			</ul>
		</div>
	);
};
