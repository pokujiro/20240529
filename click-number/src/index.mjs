import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 400);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
  // ランダムな位置、色、大きさを設定
  let size = 30 + Math.floor(Math.random() * 70); // 30pxから100pxの範囲でランダムな大きさ
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // ランダムな色

  document.getElementById(num).style.width = `${size}px`;
  document.getElementById(num).style.height = `${size}px`;
  document.getElementById(num).style.backgroundColor = color;
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};

setInterval(() => {
  for (let num = 9; num > 0; num--) {
    if (document.getElementById(num)) {
      let left_pos = 10 + Math.floor(Math.random() * 400);
      let top_pos = 100 + Math.floor(Math.random() * 400);
      let size = 30 + Math.floor(Math.random() * 70); // 30pxから100pxの範囲でランダムな大きさ
      let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // ランダムな色

      let elm = document.getElementById(num);
      elm.style.left = `${left_pos}px`;
      elm.style.top = `${top_pos}px`;
      elm.style.width = `${size}px`;
      elm.style.height = `${size}px`;
      elm.style.backgroundColor = color;
    }
  }
}, 5000); // 5秒ごとに再配置
