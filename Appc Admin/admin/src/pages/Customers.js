import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';

const columns = [
  {
    title: 'SNO',
    dataIndex: 'key',
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.key-b.key
  },
  {
    title: 'FirstName',
    dataIndex: 'firstname',
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.firstname.length-b.firstname.length
  },
  {
    title: 'LastName',
    dataIndex: 'lastname',
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.lastname-b.lastname
  },
  {
    title: 'Email',
    dataIndex: 'email',
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.email-b.email
  },
  {
    title:"Phone",
    dataIndex:'mobile',
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.mobile-b.mobile
  },
  {
    title:"Role",
    dataIndex:"role",
    defaultSortOrder:"ascend",
    sorter:(a,b)=>a.role-b.role
  },
  {
    title:"Account Status",
    dataIndex:"isBlocked"
  }
];

const Customers = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getUsers())
    },[])

    const state = useSelector(state => state.customer.customers);
    const usersdata = [];
    
    state.forEach((customer, i) => {
      usersdata.push({
        key: i,
        firstname: customer.firstname,
        lastname: customer.lastname,
        email: customer.email,
        mobile: customer.mobile,
        isBlocked: customer.isBlocked ? "Blocked" : "Active",
        role: customer.role,
      });
    });

    
  return (
    <div>
        <h3>Customers</h3>
        <div className='mt-4'>
            <div>
            <Table columns={columns} dataSource={usersdata} />
            </div>
        </div>
    </div>
  )
}

export default Customers