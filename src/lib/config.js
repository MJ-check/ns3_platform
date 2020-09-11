import React from "react";
import {
  UserOutlined,
  TeamOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import {
  AllClasses,
  JoinedClasses,
  CreatedClasses,
} from "../page/Class/index"
import { 
  PersonalInformation,
  MyNews,
} from "../page/Home/index"
import {
  MyExperiment,
  ManageExperiment,
} from "../page/Lab/index"

/**
 * @description 学生页面配置
 */
const StudentMenu = [
  {
    key: "sub1",
    title: "班级",
    icon: <TeamOutlined />,
    item: [
      {key: "1", text: "所有课堂", content: <AllClasses />},
      {key: "2", text: "加入的课堂", content: <JoinedClasses />},
      {key: "3", text: "创建的课堂", content: <CreatedClasses />},
    ],
  },
  {
    key: "sub2",
    title: "实验",
    icon: <DesktopOutlined />,
    item: [
      {key: "4", text: "我的实验", content: <MyExperiment />},
      {key: "5", text: "管理实验", content: <ManageExperiment />},
    ],
  },
  {
    key: "sub3",
    title: "我的",
    icon: <UserOutlined />,
    item: [
      {key: "6", text: "个人资料", content: <PersonalInformation />},
      {key: "7", text: "我的消息", content: <MyNews />},
    ],
  },
];

const TeacherMenu = [];

const AdminMenu = [];


/**
 * @description 根据角色选择标题栏的配置
 * @param {"student"|"teacher"|"admin"} character 
 */
function getTitleConfig(character) {
  switch(character) {
    case "student":
      return StudentMenu;
    case "teacher":
      return TeacherMenu;
    case "admin":
      return AdminMenu;
    default:
      return null;
  };
}


export { 
  getTitleConfig
};