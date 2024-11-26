const SkeletonRows = ({ thead }: { thead: string[] }) => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <tr key={index} className="row skeleton-row">
          {thead.map((_, i) => (
            <td key={i}>
              <div className="skeleton-loader" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkeletonRows;
