import { ProductCards } from '@/components/ProductCards';
import Heading from '@/components/ui/Heading';
import { Redirect } from '@/components/ui/Redirect';
import { Home } from '../Home/Home';

export const TestPage = () => {
	return (
		<div
			className="w-full flex flex-col justify-center items-center   
        text-black text-opacity-80 font-semibold dark:text-white"
		>
			<Heading title="Members" />
			<label className="form-label inline-block mb-2 text-gray-700 dark:text-white">
				Members List
			</label>
			<ProductCards />
			<Redirect text="Redirect to Home" link="" />
		</div>
	);
};
