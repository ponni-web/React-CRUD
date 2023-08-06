import { useState } from "react";
import { Modal } from "antd"
import "./todo.css"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export function Todo() {


    let [name, setName] = useState("");
    let [num, setNum] = useState("");
    let [design, setDesign] = useState("");
    let [dept, setDept] = useState("");

    let [isModalOpen, setIsModalOpen] = useState(false);


    let [users, setUsers] = useState([]);
    let [selectedUser, setSelectedUser] = useState(
        {
            Name: "",
            number: "",
            designation: "",
            department: "",
        })

    let [selectedIndex, setSelectedIndex] = useState([]);


    const addUser = () => {

        let obj = {

            Name: name,
            number: num,
            designation: design,
            department: dept
        }

        setUsers([...users, obj])
    }



    const deleteUser = (indexNum) => {

        let arr = []

        for (let i in users) {
            if (Number(i) !== indexNum)
                arr.push(users[i])
        }

        setUsers(arr)
    }


    const editUser = (data, indexNum) => {
        setIsModalOpen(true)
        setSelectedIndex(indexNum)
        setSelectedUser(data)

    }

    const Submit = () => {
        let arr = []
        for (let i in users) {
            if (i == selectedIndex) { arr.push(selectedUser) }
            else { arr.push(users[i]) }
        }
        setUsers(arr)
        setIsModalOpen(false)

    }

    const cancel = () => {

        setIsModalOpen(false)

    }

    return (

        <div className="maindiv" >

            <h1 className="heading">EMPLOYEE MANAGEMENT SYSTEM <AccessibilityNewIcon/></h1>

            <div className="initial">

                <input
                    placeholder="Employee Name"
                    onChange={(e) => setName(e.target.value)} />  <br />

                <input
                placeholder="Employee No"
                    onChange={(e) => setNum(e.target.value)} />  <br />

                <input
                placeholder="Designation"
                    onChange={(e) => setDesign(e.target.value)} />  <br />

                <input
                placeholder="Department"
                    onChange={(e) => setDept(e.target.value)} />  <br /><br />

                <button className="addbtn"
                    onClick={() => addUser()}> Add</button><br />
            </div>



            <div>
                <h2>Total Employees:{users.length}</h2>
            </div>

            <div className="mapdiv">

                {users.map((data, index) => {
                    return (

                        <div className="insidemap" >

                            <div> Employee Name: {data.Name}</div>
                            <div> Employee No: {data.number}</div>
                            <div> Designation: {data.designation}</div>
                            <div> Department: {data.department}</div>
                            <div className="edtdltbtn" >
                                <button type="edit" onClick={() => editUser(data, index)}>Edit</button>
                                <button type="delete" onClick={() => deleteUser(index)}>Delete</button>
                            </div>

                        </div>
                    )
                })}
            </div>

            <Modal title="Edit Employee Details"
                open={isModalOpen}
                onOk={Submit}
                onCancel={cancel}>

                <div>

                    <div>
                        <div>Employee Name</div>
                        <input value={selectedUser.Name}
                            onChange={(event) => setSelectedUser({ ...selectedUser, Name: event.target.value })} /><br /><br />
                    </div>
                    <div>
                        <div>Employee No</div>
                        <input value={selectedUser.number}
                            onChange={(event) => setSelectedUser({ ...selectedUser, number: event.target.value })} /><br /><br />
                    </div>
                    <div>
                        <div>Designation</div>
                        <input value={selectedUser.designation}
                            onChange={(event) => setSelectedUser({ ...selectedUser, designation: event.target.value })} /><br /><br />
                    </div>
                    <div>
                        <div>Department</div>
                        <input value={selectedUser.department}
                            onChange={(event) => setSelectedUser({ ...selectedUser, department: event.target.value })} /><br /><br />
                    </div>

                </div>

            </Modal>
        </div>
    );

}