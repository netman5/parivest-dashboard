import React from "react";
import Image from 'next/image'
import Dashboard from "../../../components/layouts/UI/Dashboard";
import { Divider } from 'antd';
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import styles from '../../../components/layouts/UI/Dashboard.module.css'
import userPhoto from '../../../public/user.jpeg'

function User(props) {
  const router = useRouter()
  return (
    <Dashboard>
      <div className={styles.usermain}>
        <div className={styles.userTop}>
          <div className={styles.user}>
            <BsArrowLeft onClick={() => router.back()} />
            <h3>{`${router.query.first_name} ${router.query.last_name}`}</h3>
          </div>
          <button className={styles.userBtn}>
            View profile status
          </button>
        </div>
        <hr />

        <div className={styles.userInfo}>
          <div className={styles.photo}>
            <Image src={userPhoto} alt={router.query.first_name} />
          </div>
          <h3>Account Details</h3>
          <table>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
            </tr>
            <tr>
              <td>{router.query.client_id}</td>
              <td>{router.query.first_name}</td>
              <td>{router.query.last_name}</td>
              <td>{router.query.email}</td>
            </tr>
          </table>
        </div>
        <hr />

        <div className={styles.portfolio}>
          <h3>Investment Profile</h3>
          <div className={styles.investment}>
            <table>
              <tr>
                <th>Annual Income</th>
                <th>Investment Goal</th>
                <th>Investment Experience</th>
                <th>Marital Status</th>
                <th>Next of Kin Name</th>
                <th>Next of Kin Phone</th>
                <th>Next of Kin Email</th>
                <th>Next of Kin Relationship</th>
              </tr>
              <tr>
                <td>{router.query.annual_income || '$470.48'}</td>
                <td>{router.query.investment_goal || '$470.48'}</td>
                <td>{router.query.experience || 'None'}</td>
                <td>{router.query.marital_status || 'Single'}</td>
                <td>{router.query.next_of_kin_name || 'Kathryn Murphy'}</td>
                <td>{router.query.next_of_kin_phone || 'nil'}</td>
                <td>{router.query.next_of_kin_email || 'nil'}</td>
                <td>{router.query.next_of_kin_relationship || 'Sister'}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default User;