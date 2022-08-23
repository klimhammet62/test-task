import type { NextPage } from 'next';

import { Redirect } from '@/components/ui/Redirect';

import { Meta } from '@/utils/meta/Meta';

export const Home: NextPage = () => {
	return (
		<Meta title="Members" description="Members Test Task">
			<div className="h-full flex flex-col justify-center items-center duration-700">
				<header className="flex flex-row justify-between items-center">
					<p
						className="text-4xl font-semibold text-blue-400 hover:text-gray-300 
					dark:text-white dark:hover:text-orange-300"
					>
						Hello World!
					</p>
				</header>
				<Redirect text="Members Page" link="members" />
			</div>
		</Meta>
	);
};
