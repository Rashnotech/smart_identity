const TableComponent = () => {
  return (
    <table className="w-full font-Roboto border">
      <thead className="text-base text-left bg-slate-100">
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50">
        <tr>
          <td></td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
export default TableComponent;
