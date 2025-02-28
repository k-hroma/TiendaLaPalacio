
import './item-book.css'
import { useState } from 'react';

const ItemBook = ({ index, itemSrc, itemAlt, title, author }) => { 

  const bgColors = [
    '#CDB0EA', 
    '#383838',
    '#954300',
    '#CDB0EA', 
    '#DBD0C1',
    '#CDB0EA',
    '#34C759',
    '#7D94A3',
  ];

  const bgBorders = [
    '#954300',
    '#DBD0C1',
    '#CDB0EA',
    '#DBD0C1',
    '#7D94A3',
    '#954300',
    '#DBD0C1',
    '#34C759',
  ]
  // index wrapping
  const bgColor = bgColors[index % bgColors.length];

  const bgBorder = bgBorders[index % bgBorders.length];

  const [hover, setHover] = useState(false)
  
  const handleMouseOver = () => { 
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

  return (
    <>
      <div className="item-container">
        <div style={hover ? { backgroundColor: bgColor, border: "10px solid #FF76DC" } : { backgroundColor: bgColor, border: `10px solid ${bgBorder}` }} className={"cover-container"} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
        <img src={itemSrc} alt={itemAlt} />
      </div>
      <div className='item-info-container'>
        <div className="item-description-container">
        <p>{title.toUpperCase()}</p>
        <p>{author}</p>
        </div>
          <div className='price-container'>
            <p>$16.500</p>
        </div>  
      </div>  
    </div>
    </>
  )
}
export {ItemBook}