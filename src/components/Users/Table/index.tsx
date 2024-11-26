import React, { useState } from "react";
import { TableProps } from "../../../types";
import RenderIf from "../../customs/RenderIf";
import Pagination from "./Pagination";
import FilterDropdown from "../../customs/FilterDropdown";
import SkeletonRows from "./SkeletonRow";
import "./table.scss";

const Table = ({
  thead,
  loading,
  currentPage,
  itemsPerPage,
  totalPages,
  children,
}: TableProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {thead.map((th: string) => (
              <th key={th}>
                <span className="th-container">
                  <span>{th}</span>
                  <RenderIf condition={th !== ""}>
                    <FilterDropdown
                      isOpen={openFilter === th}
                      toggleDropdown={() =>
                        setOpenFilter(openFilter === th ? null : th)
                      }
                      pagination={{ currentPage, itemsPerPage }}
                    />
                  </RenderIf>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <RenderIf condition={loading} elseNode={children}>
            <SkeletonRows thead={thead} />
          </RenderIf>
          <RenderIf
            condition={!loading && React.Children.count(children) === 0}
          >
            <tr>
              <td colSpan={thead.length} className="no-data">
                No data available
              </td>
            </tr>
          </RenderIf>
        </tbody>
      </table>
      <RenderIf condition={!loading}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
        />
      </RenderIf>
    </div>
  );
};

export default Table;
