import { Pagination } from "react-bootstrap";

// Take Props: NoOfPages - onPress
export const Paginator = ({ noPages = 0, currentPage = 1, onPress }) => {
  return (
    <Pagination className="justify-content-center">
      {/* First > 1 : Press Page #1 */}
      {currentPage > 1 && <Pagination.First onClick={() => onPress(1)} />}

      {/* Prev Page */}
      <Pagination.Prev
        disabled={currentPage == 1}
        onClick={() => onPress(currentPage - 1)}
      />

      {/* Render Buttons */}
      {new Array(noPages).fill(0).map((item, index) => (
        <Pagination.Item
          key={index}
          active={currentPage == index + 1}
          onClick={() => onPress(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      {/* Next Page */}
      <Pagination.Next
        disabled={currentPage == noPages}
        onClick={() => onPress(currentPage + 1)}
      />

      {/* Page < noPage : Press Last Page */}
      {currentPage < noPages && (
        <Pagination.Last onClick={() => onPress(noPages)} />
      )}
    </Pagination>
  );
};
