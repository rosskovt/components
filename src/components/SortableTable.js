import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { config, data } = props;

    const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(data, config);

    const updatedConfig = config.map((column) => {


        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: (column) => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                    {getIcons(column, sortBy, sortOrder)}
                    {column.label}

                </div>
            </th>
        };
    });

    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    )
};

function getIcons(columnName, sortBy, sortOrder) {
    if (sortBy !== columnName.label) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    }
    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />;
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown />;
    }
};

export default SortableTable;