import Image from 'next/image';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { CardsInfo } from './ui/CardsInfo';
import { closeModalAction } from 'redux/actions/dataAction';

export const ModalWindow = () => {
	const dispatch = useDispatch();
	const modalData = useSelector((state: any) => state.toggleModal);

	return (
		<div
			key={nanoid()}
			className="w-[580px] h-[480px] relative items-center m-2 rounded-[10%]"
		>
			<button
				type="button"
				className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 
										bg-red-700 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 
										focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm absolute z-10 right-0 translate-x-5 -translate-y-1/3"
				onClick={() => dispatch(closeModalAction())}
			>
				X
			</button>
			<Image
				alt={modalData.memberData.about.split(' ').slice(0, 3).join(' ')}
				src={modalData.memberData.picture}
				layout="responsive"
				objectFit="fill"
				width="620px"
				height="480px"
				className="rounded-3xl overflow-hidden relative z-0"
				draggable={false}
			/>
			<CardsInfo />
		</div>
	);
};
