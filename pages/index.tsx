import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Welcome from '../component/Welcome'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'

export default function Home() {
  return (
    <div style={{minHeight : '100vh' , backgroundColor : '#222629' , maxWidth : '100vw'}}>
      <Navbar/>
      <Sidebar/>
      <Welcome/>
    </div>
  )
}
