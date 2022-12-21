import { Fragment } from "react";

function Table({ data, config, keyFn }) {
    const renderedcolumns = config.map((column) => {
        return column.header
            ?
            <Fragment key={column.label}>{column.header(column)}</Fragment>
            :
            <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td key={column.label} className="p-3">
                    {column.render(rowData)}
                </td>
            );
        });
        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>
        )
    });
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedcolumns}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
};

export default Table;