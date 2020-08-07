/**
 * @description 根据name参数获取cookie内的值
 * @param {string} name
 * @returns {string} 若cookie中该字段存在，则返回该字段的内容，否则返回一个空字符串
 */
export default function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]); 
  return "";
}