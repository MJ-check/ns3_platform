import React, { useEffect, useState } from "react";
import { Spin, Pagination } from "antd";
import "./index.css";
import "../../App.css";
const MAX_ITEM_NUMBER = 8;  //每页最多项目数

/**
 * @description 用于展示课堂信息的组件
 * @param {Array} classData 存储课堂信息的数组 
 * @example
 * {
 *    classname: "class1",
 *    classid: "1234567890",
 * }
 * @param {Component} actionComponent 最后的操作组件
 * @param {Number} sumOfClasses 课堂总数
 * @param {Function} onPageChange(page) 换页函数 ,page是改变后的页码
 */
const ClassesList = ({ classData, actionComponent, sumOfClasses, onPageChange }) => {
  const [divStyle, setDivStyle] = useState(new Array(MAX_ITEM_NUMBER));
  const [lastItem, setLastItem] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    var new_divStyle = new Array(MAX_ITEM_NUMBER);
    new_divStyle[lastItem] = {
      backgroundColor: "rgb(255, 255, 255)",
      animation: "mouse_leave 100ms linear 1",
    };
    if (currentItem !== lastItem) {
      new_divStyle[currentItem] = {
        backgroundColor: "rgb(250, 250, 250)",
        animation: "mouse_enter 50ms linear 15ms 1",
      };
    } else {
      setTimeout(() => {
        setCurrentItem(null);
        setLastItem(null);
      }, 90);
    }
    setDivStyle(new_divStyle);
  }, [lastItem, currentItem]);

  return (
    <div className="ClassesList-container">
      <div className="ClassesList-title flex-row-start-center">
        <div>课堂名</div>
        <div>课堂ID</div>
        <div style={{paddingLeft: "22px"}}>操作</div>
      </div>
      <div className="ClassesList-content">
        {classData === null ? (
          <div className="ClassesList-loading flex-column-center-center">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            {classData.map((value, index) => {
              return (
                <div 
                  className="ClassesList-item flex-row-start-center" 
                  key={index}
                  style={divStyle[index]}
                  onMouseEnter={() => setCurrentItem(index)}
                  onMouseLeave={() => setLastItem(index)}
                >
                  <div>{value.classname}</div>
                  <div>{value.classid}</div>
                  <div>{actionComponent}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="ClassesList-pagination flex-row-start-end">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={MAX_ITEM_NUMBER}
          total={sumOfClasses}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export {
  ClassesList,
  MAX_ITEM_NUMBER,
};