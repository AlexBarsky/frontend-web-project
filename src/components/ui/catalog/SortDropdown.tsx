import { EnumProductSort } from '@/services/product/product.types';
import type { Dispatch, FC, SetStateAction } from 'react';

interface ISortDropDown {
	sortType: EnumProductSort;
	setSortType: Dispatch<SetStateAction<EnumProductSort>>;
}

const SortDropdown: FC<ISortDropDown> = ({ sortType, setSortType }) => {
	return (
		<div className="text-right mb-5">
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className="appearance-none py-1 px-2 bg-white border-gray"
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					const currentSortType = EnumProductSort[key];
					return (
						<option key={key} value={currentSortType}>
							{currentSortType}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SortDropdown;
