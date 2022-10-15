/**
 *
 * Table
 *
 */
import React from "react";
import cx from "classnames";

//    columns: {
//      title: string;
//      dataIndex: string;
//      key: string;
//      render: Function;
//    }[];
//    divider?: boolean;
//    shadow?: boolean;
//    renderColumns?: boolean;
//    headingDivider?:boolean;
//    data: any;

export function Table(props) {
  const {
    columns,
    data,
    divider = false,
    shadow = false,
    renderColumns = false,
    headingDivider = true,
  } = props;

  return (
    <div className="-my-2 overflow-x-auto">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          className={cx("overflow-hidden sm:rounded-lg", {
            shadow: shadow,
          })}
        >
          <table
            className={cx("min-w-full", {
              "divide-y divide-gray-200": headingDivider,
            })}
          >
            {/* COLUMN HEADINGS */}
            {renderColumns && (
              <thead className="">
                <tr>
                  {columns?.map((column) => (
                    <th
                      scope="col"
                      className="py-3 text-left text-sm font-medium uppercase tracking-wider"
                    >
                      {column.title !== "" && (
                        <span className="bg-primary text-white px-3 py-2 rounded">
                          {column.title}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody
              className={cx("bg-white", {
                "divide-y divide-gray-200": divider,
              })}
            >
              {/* ROWS */}
              {data?.map((row) => (
                <tr>
                  {columns.map((column) => (
                    <td className="px-6 xl:px-0 py-4 lg:py-6 xl:py-4 whitespace-nowrap">
                      {column.render(row[column.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
