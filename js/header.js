$(document).ready(function () {
  // 섹션의 상단 위치를 배열에 저장
  var sectionOffsets = {};
  $("section").each(function () {
    sectionOffsets[$(this).attr("id")] = $(this).offset().top;
  });

  // 윈도우 스크롤 이벤트 처리
  $(window).scroll(function () {
    // 현재 스크롤 위치
    var scrollPosition = $(window).scrollTop();

    // 각 섹션의 위치를 확인하고 활성 메뉴 항목을 변경
    $.each(sectionOffsets, function (sectionId, sectionOffset) {
      if (scrollPosition >= sectionOffset) {
        $(".menu li a").removeClass("active"); // 모든 메뉴 항목에서 활성 클래스 제거
        $('.menu li a[href="#' + sectionId + '"]').addClass("active"); // 해당 섹션과 연결된 메뉴 항목에 활성 클래스 추가
      }
    });
  });
});
