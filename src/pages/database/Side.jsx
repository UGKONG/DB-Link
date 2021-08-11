import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import $ from 'jquery';

const Side = ({Common, categoryList, fieldList, wrapRef, tableRef}) => {

  const removeBox = useCallback((e) => {
    let boxParent = e.currentTarget.parentNode.parentNode;
    boxParent.style.minWidth = 0;
    boxParent.style.width = 0;
    boxParent.style.opacity = 0;
    boxParent.style.border = 0;
    boxParent.style.margin = '10px 0';
    setTimeout(() => boxParent.remove(), 200);
  }, []);

  const onDragEnd = useCallback((e) => {
    let mouseX = e.pageX; // 마우스 위치
    let mouseY = e.pageY; // 마우스 위치
    let startX = $(wrapRef.current).offset().left; // 테이블 시작 위치
    let startY = $(wrapRef.current).offset().top; // 테이블 시작 위치
    let endX = startX + $(wrapRef.current).outerWidth(); // 테이블 종료 위치
    let endY = startY + $(wrapRef.current).outerHeight(); // 테이블 종료 위치
    if (mouseX > startX && endX > mouseX && mouseY > startY && endY > mouseY) {
      let id = Number(e.target.id);
      let data = categoryList.find(e => e.seq === id);
      let list = fieldList.filter(e => e.category === id);
      let box = document.createElement('article');
      box.setAttribute('class', 'box');
      ReactDOM.render(
        <>
          <h2>{data.name}
            <div className="xBtnWrap" onClick={removeBox}>
              <div><span></span><span></span></div>
            </div>
          </h2>
          <ul>
            {list.map(data => (
              <li className={data.seq} title={data.name} key={data.seq}>
                {data.name}
              </li>
            ))}
          </ul>
        </>, box
      );
      tableRef.current.appendChild(box);
    }
  }, [categoryList, fieldList, removeBox, tableRef, wrapRef]);

  return (
    <NavWrap>
      <Common.Div>
        <Common.Title>STOCKS</Common.Title>
        <Common.ContentContainer display={'block'}>
          <Ul>
            {categoryList.map(li => {
              return (
                <Li id={li.seq} key={li.seq} onDragEnd={onDragEnd} draggable={true}>
                  {li.name}
                </Li>
              )
            })}
          </Ul>
        </Common.ContentContainer>
      </Common.Div>
    </NavWrap>
  )
}

export default Side;

const NavWrap = Styled.nav`
  width: 250px;
  height: 100%;
  padding: 10px;
  z-index: 9;
`;
const Ul = Styled.ul`
  height: calc(100% - 10px);
  overflow: auto;
  margin: 10px 0 0;
  padding: 10px;
`;
const Li = Styled.li`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  margin-bottom: 5px;
  font-size: 12px;
  border-radius: 6px;
  cursor: move;
  &:hover {
    background-color: #e1e9e1;
  }
`;