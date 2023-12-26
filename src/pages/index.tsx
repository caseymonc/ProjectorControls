import Head from 'next/head'
import Image from 'next/image'

import PowerIcon from '/public/power.svg';

import AppContainer from 'src/components/AppContainer'
import styles from 'src/styles/Home.module.scss'
import Spacer from 'src/components/Spacer';
import { usePOST } from 'src/services/Service';
import { doAction, toggleAction } from 'src/services/ProjectorService';

export default function Home() {
  const { mutate: toggleOn } = usePOST(toggleAction('Power'));
  return (
    <>
      <Head>
        <title>Moncur Remote</title>
        <meta name="description" content="Control the projector in the playroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AppContainer size="small">
          <h1>Power</h1>
          <Spacer />
          <button className={styles.PowerOn} onClick={() => toggleOn({})}><PowerIcon /></button>
        </AppContainer>
      </main>
    </>
  )
}
