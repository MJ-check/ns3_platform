import React from "react";

const StudentMenu = [
  {
    key: "sub1",
    title: "副标题1",
    icon: null,
    item: [
      {key: "1", text: "option1", content: <div>content1</div>},
      {key: "2", text: "option2", content: <div>content2</div>},
      {key: "3", text: "option3", content: <div>content3</div>},
    ],
  },
  {
    key: "sub2",
    title: "副标题2",
    icon: null,
    item: [
      {key: "4", text: "option4", content: <div>content4</div>},
      {key: "5", text: "option5", content: <div>content5</div>},
      {key: "6", text: "option6", content: <div>content6</div>},
    ],
  },
  {
    key: "sub3",
    title: "副标题3",
    icon: null,
    item: [
      {key: "7", text: "option7", content: <div>content7</div>},
      {key: "8", text: "option8", content: <div>content8</div>},
      {key: "9", text: "option9", content: <div>content9</div>},
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