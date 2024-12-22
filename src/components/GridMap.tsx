'use client';

import Image from 'next/image';
import seeImage from 'public/image/oz_image/land0.gif';
import xCellNoImage from 'public/image/oz_image/xbar.gif';
// import xBar0 from 'public/image/oz_image/xbar0.gif';
// import xBar1 from 'public/image/oz_image/xbar1.gif';
// import xBar2 from 'public/image/oz_image/xbar2.gif';
// import xBar3 from 'public/image/oz_image/xbar3.gif';
// import xBar4 from 'public/image/oz_image/xbar4.gif';
// import xBar5 from 'public/image/oz_image/xbar5.gif';
// import xBar6 from 'public/image/oz_image/xbar6.gif';
// import xBar7 from 'public/image/oz_image/xbar7.gif';
// import xBar8 from 'public/image/oz_image/xbar8.gif';
// import xBar9 from 'public/image/oz_image/xbar9.gif';
// import xBar10 from 'public/image/oz_image/xbar10.gif';
// import xBar11 from 'public/image/oz_image/xbar11.gif';

import yBar0 from 'public/image/oz_image/space0.gif';
import yBar1 from 'public/image/oz_image/space1.gif';
import yBar2 from 'public/image/oz_image/space2.gif';
import yBar3 from 'public/image/oz_image/space3.gif';
import yBar4 from 'public/image/oz_image/space4.gif';
import yBar5 from 'public/image/oz_image/space5.gif';
import yBar6 from 'public/image/oz_image/space6.gif';
import yBar7 from 'public/image/oz_image/space7.gif';
import yBar8 from 'public/image/oz_image/space8.gif';
import yBar9 from 'public/image/oz_image/space9.gif';
import yBar10 from 'public/image/oz_image/space10.gif';
import yBar11 from 'public/image/oz_image/space11.gif';
import yBar12 from 'public/image/oz_image/space12.gif';
import yBar13 from 'public/image/oz_image/space13.gif';

export default function GridMap() {
  // prettier-ignore
  const grid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 1
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 2
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 3
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 4
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 5
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 6
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 7
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 8
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 9
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 10
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 11
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 12
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 13
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 14
  ];

  const COLS = 14;

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-gray-900 p-2 rounded-lg inline-block">
        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(25, 16px)' }}
        >
          {/* X */}
          {/* top */}
          <div className="" style={{ gridColumn: '1 / span 29' }}>
            <Image src={xCellNoImage} width={464} height={16} alt="" />
          </div>
          {/* bottom */}
          <div
            className=""
            style={{ gridColumn: '1 / span 29', gridRow: '30' }}
          >
            <Image src={xCellNoImage} width={464} height={16} alt="" />
          </div>

          {/* Y */}
          {/* left */}
          <div style={{ gridColumn: '1 / span 1', gridRow: '2 / span 1' }}>
            <Image src={yBar0} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '4 / span 1' }}>
            <Image src={yBar2} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '6 / span 1' }}>
            <Image src={yBar4} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '8 / span 1' }}>
            <Image src={yBar6} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '10 / span 1' }}>
            <Image src={yBar8} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '12 / span 1' }}>
            <Image src={yBar10} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '1 / span 1', gridRow: '14 / span 1' }}>
            <Image src={yBar12} width={16} height={32} alt="" unoptimized />
          </div>
          {/* right */}
          <div style={{ gridColumn: '29 / span 1', gridRow: '3 / span 1' }}>
            <Image src={yBar1} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '5 / span 1' }}>
            <Image src={yBar3} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '7 / span 1' }}>
            <Image src={yBar5} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '9 / span 1' }}>
            <Image src={yBar7} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '11 / span 1' }}>
            <Image src={yBar9} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '13 / span 1' }}>
            <Image src={yBar11} width={16} height={32} alt="" unoptimized />
          </div>
          <div style={{ gridColumn: '29 / span 1', gridRow: '15 / span 1' }}>
            <Image src={yBar13} width={16} height={32} alt="" unoptimized />
          </div>

          {/* <div style={{ gridColumn: '2 / span 2' }}>
            <Image src={xBar0} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '5 / span 2' }}>
            <Image src={xBar1} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '7 / span 2' }}>
            <Image src={xBar2} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '9 / span 2' }}>
            <Image src={xBar3} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '11 / span 2' }}>
            <Image src={xBar4} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '13 / span 2' }}>
            <Image src={xBar5} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '15 / span 2' }}>
            <Image src={xBar6} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '17 / span 2' }}>
            <Image src={xBar7} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '19 / span 2' }}>
            <Image src={xBar8} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '21 / span 2' }}>
            <Image src={xBar9} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '23 / span 2' }}>
            <Image src={xBar10} width={32} height={16} alt="" />
          </div>
          <div style={{ gridColumn: '25 / span 2' }}>
            <Image src={xBar11} width={32} height={16} alt="" />
          </div> */}

          {grid.map((cell, index) => {
            const rowIndex = Math.floor(index / COLS);
            const colIndex = index % COLS;

            return (
              <button
                key={index}
                className="w-8 h-8 cursor-pointer bg-gray-800
                    hover:bg-gray-600 hover:z-10 hover:contrast-200
                    transition-all duration-200 ease-in-out
                    hover:scale-125 transform origin-center"
                style={{
                  gridColumn: `${
                    colIndex * 2 + (rowIndex % 2 ? 1 : 2)
                  } / span 2`,
                  gridRow: `${rowIndex + 1 + 1}`,
                }}
                onClick={() => console.log('row', rowIndex, 'col', colIndex)}
                // onMouseEnter={() => setIsHover(index)}
                // onMouseLeave={() => setIsHover(null)}
              >
                <Image src={seeImage} width={32} height={32} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
