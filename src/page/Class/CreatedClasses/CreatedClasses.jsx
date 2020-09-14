import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import "./index.css";
import "../../../App.css";
import { ClassesList, MAX_ITEM_NUMBER} from "../../../component/index";

import { ClassInfo } from "../../../data/ClassData";

const { Search } = Input; 


/**
 * @description 用于展示创建的课堂以及创建新的课堂的组件
 */
const CreatedClasses = () => {
  const [classData, setClassData] = useState(null);
  const [sumOfClasses, setSumOfClasses] = useState(0);

  useEffect(() => {
    //需要接入查询课堂的API
    setClassData(ClassInfo.slice(0, MAX_ITEM_NUMBER));
    setSumOfClasses(ClassInfo.length);
  }, []);

  /**
   * @description 搜索框输入处理函数
   * @param {string} value 
   */
  const handleSearch = (value) => {
    //查询结果需要重置classData
    console.log("搜索" + value);
  };

  /**
   * @description 换页函数，重新请求数据
   * @param {Number} page 
   */
  const handlePageChange = (page) => {
    //接入课堂列表API
    console.log("页面切换" + page);
    if (page === 2) 
      setClassData(ClassInfo.slice(MAX_ITEM_NUMBER, ClassInfo.length));
    else
      setClassData(ClassInfo.slice(0, MAX_ITEM_NUMBER));
  };

  return (
    <div className="CC-container">
      <div className="CC-option-box flex-row-between-center">
        <div className="CC-create-class flex-column-center-center">
          <Button 
            className="CC-create-class-button"
            type="primary"
          >
            创建课堂
          </Button>
        </div>
        <div className="CC-search-box flex-row-end-center">
          <div className="CC-search-text">
            搜索课堂 :
          </div>
          <Search
            className="CC-search-input"
            placeholder="课堂ID"
            enterButton="Search"
            size="large"
            onSearch={value => handleSearch(value)}
          />
        </div>
      </div>
      <div className="CC-list-box">  
        <ClassesList 
          classData={classData}
          sumOfClasses={sumOfClasses}
          onPageChange={handlePageChange}
          actionComponent={(
            <div style={{padding: 0, width: "100%"}} className="flex-row-start-center">
              <Button 
                className="CC-list-button"
                type="link"
              >
                课堂详情
              </Button>
              <Button 
                className="CC-list-button"
                type="link"
              >
                管理课堂
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default CreatedClasses;