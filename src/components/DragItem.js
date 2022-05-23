import React, {useState} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import styled from 'styled-components'


const Item = ({index, move, data}) => {
    
    const [hover, setHover] = useState(0);

    const [{ isDragging }, drag] = useDrag({
        // monitor.getItem() 의 내용으로 들어갈 값을 정의합니다.
        // type 값은 무조건 설정되어 있어야 합니다. (useDrop의 accept와 일치시켜야 함)
        type: 'CARD',
        item : {index},

        // Return array의 첫번째 값에 들어갈 객체를 정의합니다.
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

        // 드래그가 완전히 끝났을때 실행됩니다. 보통 여기에서 Redux dispatch를 많이 실행시킵니다.
        end: (item) => {
          move(item.index.index, index.index);
          console.log(`${index.index}${index.item} should move to ${item.index.index}${item.index.item}`)
        },
      })
    
      const [, drop] = useDrop({
        accept: 'CARD',
        hover: (item) => {
          if (item.index === index) {
            return null
          }
          item.index = index // item is mutable
        },
      })
    
      return (
        <div ref={node => drag(drop(node))}>{data}</div>
      )
}

export default Item
