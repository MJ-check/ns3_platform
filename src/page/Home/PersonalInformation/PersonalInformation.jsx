import React, { useEffect, useState } from "react"
import { Spin, Button, Input } from 'antd';
import "./index.css";
import "../../../App.css";
import UserIcon from "../../../img/icon/user.png";

import { UserInfo } from "../../../data/UserData";


/**
 * @description 用于展示用户个人资料的组件
 * @param {Object} userData
 * @param {Function} onPresentStateChange() 用于改变组件显示状态
 */
const PIPresentation = ({ userData, onPresentStateChange }) => {
  return (
    <div>
      <div className="PIPresentation-msg-box">
        <div className="PIPresentation-msg-item flex-row-start-center">
          <div className="PIPresentation-msg-item-title">
            用户名:
          </div>
          <div>{userData.username}</div>
        </div>
        <div className="PIPresentation-msg-item flex-row-start-center">
          <div className="PIPresentation-msg-item-title">
            真实姓名:
          </div>
          <div>{userData.realname}</div>
        </div>
        <div className="PIPresentation-msg-item flex-row-start-center">
          <div className="PIPresentation-msg-item-title">
            班级:
          </div>
          <div>{userData.class}</div>
        </div>
        <div className="PIPresentation-msg-item flex-row-start-center">
          <div className="PIPresentation-msg-item-title">
            学号:
          </div>
          <div>{userData.uid}</div>
        </div>
      </div>
      <div className="PIPresentation-button">
        <Button 
          type="primary" 
          shape="round"
          onClick={() => onPresentStateChange()}
        >
          修改信息
        </Button>
      </div>
    </div>
  );
};


/**
 * @description 用于修改用户个人资料的组件
 * @param {Object} userData 
 * @param {Function} onPresentStateChange() 用于改变组件显示状态
 */
const PIModification = ({ userData, onPresentStateChange }) => {
  const [userName, setUserName] = useState(null);
  const [realName, setRealName] = useState(null);
  const [userClass, setUserClass] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    setUserName(userData.username);
    setRealName(userData.realname);
    setUserClass(userData.class);
    setUid(userData.uid);
  }, [userData]);

  /**
   * @description 提交修改后的用户信息
   */
  const submitUserInfo = () => {
    if (
      userName !== userData.username || 
      realName !== userData.realName ||
      userClass !== userData.class ||
      uid !== userData.uid
    ) {
      const newUserInfo = {
        username: userName,
        realname: realName,
        class: userClass,
        uid: uid,
      };
      //须要接入API
      console.log("个人资料修改");
      console.log(newUserInfo);
    }
  }

  return (
    <div>
      <div className="PIModification-input-box">
        <div className="PIModification-input-item flex-row-start-center">
          <div className="PIModification-input-item-title">用户名:</div>
          <div>
            <Input 
              size="large"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
        </div>
        <div className="PIModification-input-item flex-row-start-center">
          <div className="PIModification-input-item-title">真实姓名:</div>
          <div>
            <Input 
              size="large"
              value={realName}
              onChange={(event) => setRealName(event.target.value)}
            />
          </div>
        </div>
        <div className="PIModification-input-item flex-row-start-center">
          <div className="PIModification-input-item-title">班级:</div>
          <div>
            <Input 
              size="large"
              value={userClass}
              onChange={(event) => setUserClass(event.target.value)}
            />
          </div>
        </div>
        <div className="PIModification-input-item flex-row-start-center">
          <div className="PIModification-input-item-title">学号:</div>
          <div>
            <Input
              size="large"
              value={uid}
              onChange={(event) => setUid(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="PIModification-button">
        <Button
          type="primary"
          shape="round"
          onClick={() => submitUserInfo()}
        > 
          保存修改
        </Button>
        <Button 
          type="primary"
          shape="round"
          onClick={() => onPresentStateChange()}
        >
          返回
        </Button>
      </div>
    </div>
  );
};


/**
 * @description 展示用户个人资料的组件
 */
const PersonalInformation = () => {
  const [userData, setUserData] = useState(null);
  const [present, setPresent] = useState(true);  //用户信息展示(true)/用户信息修改(false)

  useEffect(() => {
    //使用测试数据，需要接入API
    setUserData(UserInfo);
  }, []);

  /**
   * @description 更改组件函数
   */
  const handlePresentStateChange = () => {
    setPresent(!present);
  };

  return (
    <div className="PI-container">
      {userData === null ? (
        <div className="PI-loading flex-column-center-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="PI-content-container">
          <div className="PI-content-icon">
            <img className="PI-user-icon" src={UserIcon} alt="userIcon"/>
          </div>
          <div className="PI-content-msg-box">
            {present === true ? (
              <PIPresentation
                userData={userData}
                onPresentStateChange={handlePresentStateChange}
              />
            ) : (
              <PIModification
                userData={userData}
                onPresentStateChange={handlePresentStateChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default PersonalInformation;