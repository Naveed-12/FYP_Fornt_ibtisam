import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import axios from 'axios';
import fetch from 'node-fetch';
import edit from '../images/edit.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import delete_user from '../images/cancel.png';
import check from '../images/check.png';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import '../Style/Dtable.css'
function Dtable() {
    const [Rows, SetRows] = useState([]);
    const [Row1, SetRow1] = useState([{
        Fname: 'ibtisam',
        Lname: 'akram',
        Email: 'ibtisamakram5@gmail.com',
        Contact: '03164431862'
    },
    {
        Fname: 'ibtisam',
        Lname: 'akram',
        Email: 'ibtisamakram5@gmail.com',
        Contact: '03164431862'
    },
    {
        Fname: 'ibtisam',
        Lname: 'akram',
        Email: 'ibtisamakram5@gmail.com',
        Contact: '03164431862'
    }
    ]);
    const [Row2, SetRow2] = useState([]);
    // let Rows = [];
    const deleteUser = async (user) => {
        console.log("Delete User : ", user);
        await fetch('http://localhost:5000/api/users/deleteuser', {
            method: "delete",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            window.location.reload();
        })
    }
    const ApproveUser = async (user) => {
        console.log("Approving User : ");
        const respose = await fetch("http://localhost:5000/api/users/approve", {
            method: "put",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },
        })
            .then((data) => data.json())
            .then((data) => {
                alert("User is Approved By You !!!")
                window.location.reload();
            })
            .then(() => {
                console.log("Response : ", respose);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(async () => {
        console.log("UseEffect run!!!");
        const data = axios.get("http://localhost:5000/api/users/userdata", {
        }).then(res => {
            console.log("Data is : ", res);
            SetRow1(res.data);

        })
        const data2 = axios.get("http://localhost:5000/api/users/pendinguserdata", {
        }).then(res => {
            console.log("Data is : ", res);
            SetRow2(res.data);
        })
    }, [])
    return (
        <div className="dashboard__table">

            <h1 className="users">Users</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center"><b className="bold"> Status </b></TableCell>
                            <TableCell align="center"><b className="bold"> UserName </b></TableCell>
                            <TableCell align="center" ><b className="bold"> Email </b></TableCell>
                            <TableCell align="center"><b className="bold"> Contact </b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id="Tbody">
                        {Row1.map((row) => (
                            <TableRow key={row.Fname} id={row.id}>
                                {
                                    row && row.Status &&
                                    <TableCell align="center"><span className="red">pending request...</span></TableCell>
                                }
                                {
                                    !row.Status &&
                                    <TableCell align="center"><span className='green'>Approved</span></TableCell>
                                }
                                <TableCell component="th" scope="row" align="center">{row.Fname + ' ' + row.Lname}</TableCell>
                                <TableCell align="center">{row.Email}</TableCell>
                                <TableCell align="center">{row.Contact}</TableCell>
                                <div className='table_icons'>
                                    <TableCell align="center"><img src={edit} className='dashbord_edit_btn' onClick={(e) => deleteUser(row)} data-toggle="modal" data-target="#exampleModalLong" /></TableCell>
                                    {
                                        row && row.Status &&
                                        <TableCell align="center">
                                            <img src={check} onClick={(e) => ApproveUser(row)} className='dashbord_approve_btn' />
                                        </TableCell>
                                    }
                                    {
                                        !row.Status &&
                                        <TableCell align="center" className='del_cell'>
                                            <img src={delete_user} className='dashbord_delete_btn' />

                                        </TableCell>
                                    }
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>User Record</h5>
                            <button type="button" class="close btn-secondary" data-dismiss="modal" aria-label="Close" style={{border:'none',paddingLeft:'8px',paddingRight:'8px',borderRadius:'4px'}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <TextField id="filled-basic" label="First Name" variant="filled"  fullWidth size='small'margin="dense" type='text'/>
                                <TextField id="filled-basic" label="Last Name" variant="filled" fullWidth size='small'margin="dense"type='text'/>
                                <TextField id="filled-basic" label="Email" variant="filled" fullWidth size='small'margin="dense"type='text'/>
                                <TextField id="filled-basic" label="Password" variant="filled"  fullWidth size='small'margin="dense"type='text'/>
                                <TextField id="filled-basic" label="Cnic" variant="filled" fullWidth size='small'margin="dense"type='text'/>
                                <TextField id="filled-basic" label="Contact" variant="filled" fullWidth size='small'margin="dense"type='text'/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Close</button>
                            <button type="button" class="btn btn-primary" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dtable