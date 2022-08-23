import { FC, PropsWithChildren, ReactNode } from 'react';
import { DarkModeToggleButton } from '../ui/DarkModeToggleButton';

export const Layout: FC<PropsWithChildren> = ({
	children,
}: {
	children?: ReactNode;
}) => {
	return (
		<div
			className="flex flex-col min-h-screen h-full items-center dark:bg-slate-800  
			transition-color duration-700 transition-color"
		>
			<DarkModeToggleButton />
			<div className="w-800 max-w-screen-lg mx-auto">{children}</div>
		</div>
	);
};
