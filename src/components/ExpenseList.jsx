export default function ExpenseList() {
  return (
    <div className="p-4 rounded-md bg-gray-100">
      <h1 className="text-xl font-semibold">Data Breakdown</h1>

      <div className="relative overflow-x-auto mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  $234
                </th>
                <td className="px-6 py-4">Edcation</td>
                <td className="">Laptop</td>
                <td className="px-6 py-4">
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
