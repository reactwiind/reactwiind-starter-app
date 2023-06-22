 
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme, Hero as HeroComp } from 'reactwiind';
import {StandardPage, HeroContent, Social} from "reactwiind-pro";

import { LogoInWind as Logo } from "../assets"
import {  Wrapper } from "../components";
import { p } from "../content";
import {socialList} from "../components/Social"

 
const Home: NextPage = () => {
  const { theme, toggleMode } = useTheme();

  const cprops = {
     header: {
      logo:<Logo width="300px" height="80px"/>,
      link:'https://ww.reactwiind.com', 
      right: <Social fill="fill-secondary" list={socialList} />
    },
     
  }

  //@ts-ignore
  return <Wrapper>
      <StandardPage header={cprops.header} footer={{}} overflow="overflow-hidden">
            <HeroContent 
                  container = {{
                    height: "min-h-[700px]",
                    alignItems:"items-center",
                    surface:{bgcolor:"bg-primary"}
                  }}
                  content={p?.home?.hero?.content as any}  
                  button={p?.home?.hero?.button}
            />

            <Head>
                  <title>Consumer Web Application- Demo</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              
      </StandardPage>
    </Wrapper>
}

export default Home
