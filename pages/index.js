import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './src/Components/Navigation'
import Banner from './src/Components/Banner'
import SocialSticky from './src/Components/SocialSticky'
import About from './src/Components/About'
import SocialStickyMobile from './src/Components/SocialStickyMobile'

export default function Home() {
  return (
    <html lang='en'>
    <div className={styles.container} style={{backgroundColor: 'linear-gradient( rgba(238,238,238,1) 0%, rgba(255,255,255,1) 67%);'}}>
      <Head>
        <title> Josh Billington | Developer Portfolio </title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <meta name='description' content='Josh Billington: Developer Portfolio. Passionate about creating  expressive and dynamic applications.' />
      </Head>
      <header style={{width: '100%', padding: '0px, 0px', margin: '0px'}}> 
        <Navigation /> 
      </header>

      <main className={styles.main}>
        <SocialSticky />
        <SocialStickyMobile />
        <Banner name='banner'/>
        <About/> 
      </main>

      <footer className={styles.footer}>
        <p> developed by </p>
        <h2 style={{letterSpacing: '3px'}}> JOSH BILLINGTON </h2>
      </footer>
    </div>
    </html>
  )
}
