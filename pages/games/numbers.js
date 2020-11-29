import Head from 'next/head';
import { useState } from 'react';
//import styles from '../../styles/Home.module';

export default function Home() {
  const [buttonStates, setButtonStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const colours = [
    'blue',
    'green',
    'red',
    'yellow',
    'red',
    'yellow',
    'blue',
    'green',
    'red',
    'yellow',
    'yellow',
    'red',
    'yellow',
    'blue',
    'green',
    'red'
  ];
  //const contents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const contents = [
    'Jasper',
    'Felix',
    'BG1',
    'BG2',
    'Boggins',
    'Daddy',
    'Mummy',
    'Eleanor',
    'Chloe',
    'Billy Bongles',
    'Monty',
    'Purple Ippo',
    'Chocky',
    'Felix Cat',
    'Burger Grills',
    'Boodles'
  ];
  const gridBlocks = [];
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      let counter = j + 4 * (i - 1);
      gridBlocks.push(
        <div
          key={'block' + counter}
          id={'block' + counter}
          onClick={() => {
            let tempButtonStates = buttonStates;
            tempButtonStates[counter] = !tempButtonStates[counter];
            console.log(buttonStates[counter]);
            setButtonStates(tempButtonStates);
            buttonStates[counter]
              ? (document.getElementById('block' + counter).style.backgroundColor = 'white')
              : (document.getElementById('block' + counter).style.backgroundColor = colours[counter - 1]);
          }}
          // onMouseEnter={() => {
          //   document.getElementById('block' + counter).style.fontSize = '900%';
          //   //document.getElementById('block' + counter).style.color = 'white';

          //   document.getElementById('block' + counter).style.transition = 'all 2s ease-in-out';
          // }}
          // onMouseLeave={() => {
          //   document.getElementById('block' + counter).style.fontSize = '800%';
          //   //document.getElementById('block' + counter).style.color = 'black';
          //   document.getElementById('block' + counter).style.transition = 'all 2s ease-in-out';
          // }}
          style={{
            gridColumn: j,
            gridRow: i,
            margin: '2px',
            textAlign: 'center',
            fontSize: '200%',
            fontFamily: 'sans-serif',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            backgroundColor: colours[counter - 1]
          }}
        >
          {contents[counter - 1]}
        </div>
      );
    }
  }
  return (
    <div>
      <Head>
        <title>Numbers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {gridBlocks.map((block) => {
          return block;
        })}
      </main>
    </div>
  );
}
