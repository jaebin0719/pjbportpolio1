// $(document).ready(function () {
//   // 무한 루프로 스크롤할 텍스트 설정
//   var text = "Welcome PJB's Portpolio";

//   // canvas-back 요소 선택
//   var canvasBack = $(".canvas-back");

//   // canvas-back에 텍스트를 추가하고 무한 루프 애니메이션 실행
//   canvasBack.text(text);
//   animateText();

//   // 텍스트 무한 루프 애니메이션 함수
//   function animateText() {
//     // 텍스트를 오른쪽 끝으로 이동하여 보이지 않도록 설정
//     canvasBack.css("marginLeft", "100%");

//     // 텍스트가 오른쪽에서 왼쪽으로 이동하면서 나오는 애니메이션 실행
//     canvasBack.animate(
//       {
//         marginLeft: "-" + canvasBack.width() + "px",
//       },
//       5000,
//       "linear",
//       function () {
//         // 애니메이션이 완료되면 텍스트를 왼쪽 끝으로 이동하여 다시 시작
//         canvasBack.css("marginLeft", "0");
//         // 다시 애니메이션을 시작하여 무한 루프 생성
//         animateText();
//       }
//     );
//   }
// });
