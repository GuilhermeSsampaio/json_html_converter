import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EditorContent from './scripts/conversion'

export default function Home() {

  
  return (
    <div className={styles.container}>
      <EditorContent/>
      <p>Teste</p>
    </div>
  )
}
