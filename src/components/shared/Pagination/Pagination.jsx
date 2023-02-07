import { Button, MatIcon, icons } from "../../";
import React from "react";
import { arrayToStr } from "../../../helpers/helpers";
import { DOTS, usePagination } from "../../../hooks/usePagination";

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className = "",
  style = {},
  infinite = false,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    let page = currentPage + 1;
    if (page > paginationRange.length && !infinite) {
      page = paginationRange.length;
    }
    onPageChange(page);
  };

  const onPrevious = () => {
    let page = currentPage - 1;
    if (page < 1) {
      page = 1;
    }
    onPageChange(page);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const btnClasses =
    "rounded py-2 hover:bg-blue-medium hover:text-white text-grey-light lg:px-3 lg:rounded-sm md:px-3.5 md:py-1.5";
  const iconClasses = "text-sm text-center";

  return (
    <nav className={classNames} style={styles}>
      <ul className="flex gap-3 items-center flex-wrap">
        <li className="border border-grey-light">
          <Button
            className={btnClasses}
            onClick={onPrevious}
            disabled={currentPage === 1 && !infinite}
            type="none"
          >
            <MatIcon className={iconClasses}>{icons.arrow_back_ios}</MatIcon>
          </Button>
        </li>
        {infinite && (
          <li className="border border-grey-light">
            <Button
              className={btnClasses}
              type="none"
              active={true}
              onClick={() => {}}
            >
              {currentPage}
            </Button>
          </li>
        )}
        {!infinite &&
          paginationRange.map((pageNumber) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <li
                  key={pageNumber}
                  className="text-sm font-extrabold tracking-widest border border-grey-light"
                >
                  &#8230;
                </li>
              );
            }

            return (
              <li key={pageNumber} className="border border-grey-light">
                <Button
                  className={btnClasses}
                  type="none"
                  active={pageNumber === currentPage}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </Button>
              </li>
            );
          })}
        <li className="border border-grey-light">
          <Button
            className={btnClasses}
            onClick={onNext}
            type="none"
            disabled={currentPage === lastPage && !infinite}
          >
            <MatIcon className={iconClasses}>{icons.arrow_forward_ios}</MatIcon>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Pagination);
