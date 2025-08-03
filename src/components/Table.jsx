import React from "react";

const Table = ({tableData,handleEdit, handleDelete}) =>{
    return(
            <table className="w-full border mt-4">
                <thead className=" bg-gray-300">
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>{tableData.map((data, idx)=>{
                    return(
                        <tr key={idx}>
                            <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                             <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                              <td className="border border-gray-300 px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => {
                                    handleEdit(idx)
                                }}>
                                    Edit
                                </button>
                                <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                                onClick={()=>{
                                    handleDelete(idx)
                                }}>
                                    Delete
                                </button>
                              </td>
                        </tr>
                    )
                })}</tbody>
            </table>
    )
}

export default Table