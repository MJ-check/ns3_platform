import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "./index.css";
import "../../../App.css";
import { ClassesList, MAX_ITEM_NUMBER } from "../../../component/index";

import { ClassInfo } from "../../../data/ClassData";

const { Search } = Input;


/**
 * @description 用于展示加入的课堂的组件
 */
const JoinedClasses = () => {
  const [classData, setClassData] = useState(null);
  const [sumOfCLasses, setSumOfClasses] = useState(0);

  useEffect(() => {
    //接入请求班级列表API
    setClassData(ClassInfo.slice(0, MAX_ITEM_NUMBER));
    setSumOfClasses(ClassInfo.length);
  }, []);

  /**
   * @description 处理搜索组件
   * @param {string} value 搜索字符串 
   */
  const handleSearch = (value) => {
    //接入搜索API
    console.log("搜索" + value);
  };

  /**
   * @description 响应换页函数
   * @param {Number} page 换页的页码 
   */
  const handlePageChange = (page) => {
    //接入重新请求列表API
    console.log("换页" + page);
    if (page === 1) {
      setClassData(ClassInfo.slice(0, MAX_ITEM_NUMBER));
    } else {
      setClassData(ClassInfo.slice(MAX_ITEM_NUMBER, ClassInfo.length));
    }
  };

  return (
    <div className="JC-container">
      <div className="JC-search-box flex-row-end-center">
        <div className="JC-search-text">
          搜索课堂 :
        </div>
        <Search 
          className="JC-search-input"
          placeholder="课堂ID"
          enterButton="Search"
          size="large"
          onSearch={value => handleSearch(value)}
        />
      </div>
      <div className="JC-list-box">
        <ClassesList 
          classData={classData}
          sumOfClasses={sumOfCLasses}
          onPageChange={handlePageChange}
          actionComponent={(
            <div style={{padding: 0, width: "100%"}} className="flex-row-start-center">
              <Button 
                className="JC-list-button"
                type="link"
              >
                课堂详情
              </Button>
              <Button
                className="JC-list-button"
                type="link"
              >
                退出课堂
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default JoinedClasses;