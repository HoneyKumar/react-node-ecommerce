import React from 'react';

class OrdersList extends React.Component{

    render(){
        return (
            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-category">All order List</h5>
                                    <h4 className="card-title"> Order Stats</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className=" text-primary">
                                            <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Country
                                            </th>
                                            <th>
                                                City
                                            </th>
                                            <th className="text-right">
                                                Salary
                                            </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                Dakota Rice
                                                </td>
                                                <td>
                                                Niger
                                                </td>
                                                <td>
                                                Oud-Turnhout
                                                </td>
                                                <td className="text-right">
                                                $36,738
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Minerva Hooper
                                                </td>
                                                <td>
                                                Curaçao
                                                </td>
                                                <td>
                                                Sinaai-Waas
                                                </td>
                                                <td className="text-right">
                                                $23,789
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Sage Rodriguez
                                                </td>
                                                <td>
                                                Netherlands
                                                </td>
                                                <td>
                                                Baileux
                                                </td>
                                                <td className="text-right">
                                                $56,142
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Doris Greene
                                                </td>
                                                <td>
                                                Malawi
                                                </td>
                                                <td>
                                                Feldkirchen in Kärnten
                                                </td>
                                                <td className="text-right">
                                                $63,542
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Mason Porter
                                                </td>
                                                <td>
                                                Chile
                                                </td>
                                                <td>
                                                Gloucester
                                                </td>
                                                <td className="text-right">
                                                $78,615
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
        )
    }
}

export default OrdersList;