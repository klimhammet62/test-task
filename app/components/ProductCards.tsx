import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Pagination } from './Pagination';

export const ProductCards = () => {
	const data = useSelector((state: any) => state.membersData.members.members);
	const [page, setPage] = useState<number>(1);

	console.log(data);

	return (
		<>
			<div className="grid grid-cols-5 gap-3">
				{data &&
					data.map((member: any) => (
						<div key={nanoid()} className="m-3">
							<div className="resize rounded-md">
								<div
									style={{
										width: '260px',
										height: '220px',
										position: 'relative',
										maxWidth: '260px',
									}}
								>
									<Image
										alt="Member's image"
										src={member.picture}
										layout="intrinsic"
										objectFit="contain"
										width="260px"
										height="260px"
									/>
									<div className="absolute right-0 bottom-0">
										<ul>
											<li>
												<span>{member.name}</span>
											</li>
											<li>
												<span>{member.email}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			{/*<Pagination setPage={setPage} />*/}
		</>
	);
};
