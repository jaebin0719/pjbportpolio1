$(document).ready(function () {
  //See in action: http://www.jeanpaze.com/#Honda-CRV

  var objArrowBuffer;

  var tlArrowR;
  var tlArrowL;
  var tlClose;

  function init() {
    objArrowBuffer = {};
    objArrowBuffer.left = {};
    objArrowBuffer.left.status = "";
    objArrowBuffer.right = {};
    objArrowBuffer.right.status = "";

    TweenMax.set("#work-detail-arrow-left svg", { scaleX: -1 });

    tlArrowR = createArrowAnimation({
      tl: tlArrowR,
      parent: "#work-detail-arrow-right ",
    });
    tlArrowL = createArrowAnimation({
      tl: tlArrowL,
      parent: "#work-detail-arrow-left ",
    });
    tlClose = createCloseAnimation({
      tl: tlClose,
      parent: "#work-detail-close ",
    });

    $("#work-detail-arrow-left a").on(
      "mouseover mouseout click",
      onArrowHandler
    );
    $("#work-detail-arrow-right a").on(
      "mouseover mouseout click",
      onArrowHandler
    );
    $("#work-detail-close a").on("mouseover mouseout click", onCloseHandler);

    TweenMax.set("#work-detail-arrow-right svg, #work-detail-arrow-left svg", {
      visibility: "visible",
    });
    TweenMax.set("#work-detail-close svg", { visibility: "visible" });

    tlArrowR.tweenFromTo("in", "in-end");
    tlArrowL.tweenFromTo("in", "in-end");
    tlClose.tweenFromTo("in", "in-end");
  }

  function createArrowAnimation(objConfig) {
    var parent = objConfig.parent;

    TweenMax.set(parent + ".arrow-pt-3-bottom", {
      drawSVG: "91% 91%",
      opacity: 0,
    });
    TweenMax.set(parent + ".arrow-pt-3-top", { drawSVG: "0" });
    TweenMax.set(parent + ".arrow-pt-1, " + parent + ".arrow-pt-2", {
      drawSVG: "100% 100%",
    });
    TweenMax.set(parent + ".mud-container", {
      scale: 0,
      transformOrigin: "50% 50%",
    });
    TweenMax.set(parent + ".xplod *", { drawSVG: "100% 100%" });

    objConfig.tl = new TimelineMax({ paused: true })
      .to(
        parent + ".arrow-pt-1",
        0.25,
        {
          drawSVG: "100% 100%",
          x: 7,
          rotation: -45,
          transformOrigin: "100% 100%",
          ease: Power2.easeIn,
        },
        "in"
      )
      .to(
        parent + ".arrow-pt-2",
        0.25,
        {
          drawSVG: "100% 100%",
          x: 7,
          rotation: 45,
          transformOrigin: "100% 0",
          ease: Power2.easeIn,
        },
        "in"
      )
      .to(
        parent + ".arrow-pt-3-top",
        0.3,
        { drawSVG: "0% 9%", ease: Power2.easeIn },
        "in"
      )
      .to(
        parent + ".arrow-pt-3-top",
        0.7,
        { drawSVG: "91% 100%", ease: Power2.easeOut },
        "in+=.3"
      )
      .set(
        parent + ".arrow-pt-1",
        {
          drawSVG: "0 100%",
          x: -8,
          rotation: -45,
          transformOrigin: "100% 100%",
          ease: Power2.easeIn,
        },
        "in+=.7"
      )
      .to(
        parent + ".arrow-pt-1",
        0.3,
        {
          x: 0,
          rotation: 0,
          transformOrigin: "100% 100%",
          ease: Back.easeOut.config(2),
        },
        "in+=.7"
      )
      .set(
        parent + ".arrow-pt-2",
        {
          drawSVG: "0 100%",
          x: -8,
          rotation: 45,
          transformOrigin: "100% 0",
          ease: Power2.easeIn,
        },
        "in+=.7"
      )
      .to(
        parent + ".arrow-pt-2",
        0.3,
        {
          x: 0,
          rotation: 0,
          transformOrigin: "100% 0",
          ease: Back.easeOut.config(2),
        },
        "in+=.7"
      )
      .set(
        parent + ".arrow-pt-3-bottom",
        { drawSVG: "91% 100%", opacity: 1 },
        "in+=1.1"
      )
      .set(parent + ".arrow-pt-3-top", { drawSVG: "0" }, "in+=1.1")
      .to({}, 0.01, {}, "in-end")

      .to(
        parent + ".mud-container",
        0.5,
        { scale: 1, transformOrigin: "50% 50%", ease: Back.easeOut },
        "over"
      )
      .fromTo(
        parent + ".circle-path-2",
        0.7,
        { rotation: 0, transformOrigin: "40% 45%" },
        { rotation: 360, transformOrigin: "40% 45%", ease: Back.easeOut },
        "over"
      )
      .to(
        parent + ".arrow *",
        0.2,
        { stroke: "#000000", ease: Back.easeOut },
        "over"
      )
      .to(
        parent + ".arrow-pt-1",
        0.1,
        { rotation: -15, transformOrigin: "100% 100%", ease: Power4.easeOut },
        "over"
      )
      .to(
        parent + ".arrow-pt-1",
        0.5,
        { rotation: 0, transformOrigin: "100% 100%", ease: Back.easeOut },
        "over+=.1"
      )
      .to(
        parent + ".arrow-pt-2",
        0.1,
        { rotation: 15, transformOrigin: "100% 0", ease: Power4.easeOut },
        "over"
      )
      .to(
        parent + ".arrow-pt-2",
        0.4,
        { rotation: 0, transformOrigin: "100% 0", ease: Back.easeOut },
        "over+=.1"
      )
      .to(
        parent + ".arrow",
        0.2,
        {
          rotation: -10,
          scale: 1.2,
          transformOrigin: "50% 50%",
          ease: Power4.easeOut,
        },
        "over"
      )
      .to(
        parent + ".arrow",
        0.6,
        {
          rotation: 0,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut,
        },
        "over+=.2"
      )
      .to({}, 0.01, {}, "over-end")

      .to(
        parent + ".arrow-pt-1",
        0.25,
        {
          drawSVG: "100% 100%",
          x: 7,
          rotation: -45,
          transformOrigin: "100% 100%",
          ease: Power2.easeIn,
        },
        "click"
      )
      .to(
        parent + ".arrow-pt-2",
        0.25,
        {
          drawSVG: "100% 100%",
          x: 7,
          rotation: 45,
          transformOrigin: "100% 0",
          ease: Power2.easeIn,
        },
        "click"
      )
      .to(
        parent + ".arrow-pt-3-bottom",
        0.3,
        { drawSVG: "100% 100%", ease: Power2.easeIn },
        "click"
      )
      .to(
        parent + ".arrow-pt-3-top",
        0.3,
        { drawSVG: "0% 9%", ease: Power2.easeIn },
        "click"
      )
      .to(
        parent + ".arrow-pt-3-top",
        1,
        { drawSVG: "91% 100%", ease: Power2.easeOut },
        "click+=.3"
      )
      .to(
        parent + ".mud-container, " + parent + ".arrow",
        0.3,
        { scale: 1.5, transformOrigin: "50% 50%", ease: Power4.easeOut },
        "click+=.3"
      )
      .to(
        parent + ".mud-container, " + parent + ".arrow",
        0.3,
        { scale: 1, transformOrigin: "50% 50%", ease: Power1.easeOut },
        "click+=.8"
      )
      .set(
        parent + ".arrow-pt-1",
        {
          drawSVG: "0 100%",
          x: -8,
          rotation: -45,
          transformOrigin: "100% 100%",
          ease: Power2.easeIn,
        },
        "click+=1"
      )
      .to(
        parent + ".arrow-pt-1",
        0.3,
        {
          x: 0,
          rotation: 0,
          transformOrigin: "100% 100%",
          ease: Back.easeOut.config(2),
        },
        "click+=1"
      )
      .set(
        parent + ".arrow-pt-2",
        {
          drawSVG: "0 100%",
          x: -8,
          rotation: 45,
          transformOrigin: "100% 0",
          ease: Power2.easeIn,
        },
        "click+=1"
      )
      .to(
        parent + ".arrow-pt-2",
        0.3,
        {
          x: 0,
          rotation: 0,
          transformOrigin: "100% 0",
          ease: Back.easeOut.config(2),
        },
        "click+=1"
      )
      .to({}, 0.01, {}, "click-end")

      .to(
        parent + ".circle-path-1",
        0.5,
        { x: 18, scale: 0.6, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out"
      )
      .to(
        parent + ".circle-path-2",
        0.5,
        { x: -18, scale: 0.6, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out"
      )
      .set(
        parent + ".circle-path-1, " + parent + ".circle-path-2",
        { x: 0, scale: 1, transformOrigin: "50% 50%" },
        "out+=.5"
      )
      .set(
        parent + ".mud-container",
        { scale: 0, transformOrigin: "50% 50%" },
        "out+=.5"
      )
      .to(
        parent + ".arrow *",
        0.2,
        { stroke: "#FFFFFF", ease: Back.easeOut },
        "out+=.5"
      )
      .to(
        parent + ".arrow-pt-1",
        0.2,
        { rotation: -30, transformOrigin: "100% 100%", ease: Power4.easeIn },
        "out+=.3"
      )
      .to(
        parent + ".arrow-pt-2",
        0.2,
        { rotation: 30, transformOrigin: "100% 0", ease: Power4.easeIn },
        "out+=.3"
      )
      .to(
        parent + ".arrow",
        0.2,
        {
          rotation: 10,
          scale: 1.2,
          transformOrigin: "50% 50%",
          ease: Power4.easeIn,
        },
        "out+=.3"
      )
      .to(
        parent + ".arrow",
        0.6,
        {
          rotation: 0,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut,
        },
        "out+=.6"
      )
      .to(
        parent + ".arrow-pt-1",
        0.5,
        {
          rotation: 0,
          transformOrigin: "100% 100%",
          ease: Back.easeOut.config(3),
        },
        "out+=.5"
      )
      .to(
        parent + ".arrow-pt-2",
        0.4,
        {
          rotation: 0,
          transformOrigin: "100% 0",
          ease: Back.easeOut.config(3),
        },
        "out+=.5"
      )
      .set(
        parent + ".xplod *",
        { drawSVG: "100% 100%", opacity: 1 },
        "out+=.45"
      )
      .to(
        parent + ".xplod *",
        0.1,
        { drawSVG: "0% 100%", ease: Power4.easeIn },
        "out+=.45"
      )
      .to(
        parent + ".xplod *",
        0.7,
        { drawSVG: "0", opacity: 0, ease: Power4.easeOut },
        "out+=.55"
      )
      .to({}, 0.01, {}, "out-end");

    return objConfig.tl;
  }

  function createCloseAnimation(objConfig) {
    var parent = objConfig.parent;

    TweenMax.set(parent + ".line-x-r", { drawSVG: "0" });
    TweenMax.set(parent + ".line-x-l", { drawSVG: "0" });
    TweenMax.set(parent + ".mud-container", {
      scale: 0,
      transformOrigin: "50% 50%",
    });
    TweenMax.set(parent + ".xplod *", { drawSVG: "100% 100%" });

    objConfig.tl = new TimelineMax({ paused: true })

      .to(
        parent + ".line-x-r",
        0.5,
        { drawSVG: "65% 54%", ease: Power2.easeIn },
        "in"
      )
      .to(
        parent + ".line-x-l",
        0.5,
        { drawSVG: "65% 54%", ease: Power2.easeIn },
        "in"
      )
      .to(
        parent + ".line-x-r",
        0.5,
        { drawSVG: "100% 83%", ease: Power2.easeOut },
        "in+=.5"
      )
      .to(
        parent + ".line-x-l",
        0.5,
        { drawSVG: "100% 83%", ease: Power2.easeOut },
        "in+=.5"
      )
      .to({}, 0.01, {}, "in-end")

      .to(
        parent + ".mud-container",
        0.5,
        { scale: 1, transformOrigin: "50% 50%", ease: Back.easeOut },
        "over"
      )
      .fromTo(
        parent + ".circle-path-2",
        0.7,
        { rotation: 0, transformOrigin: "40% 45%" },
        { rotation: 360, transformOrigin: "40% 45%", ease: Back.easeOut },
        "over"
      )
      .to(
        parent + ".line-x-r",
        0.5,
        { drawSVG: "65% 54%", ease: Power2.easeIn },
        "over"
      )
      .to(
        parent + ".line-x-l",
        0.5,
        { drawSVG: "65% 54%", ease: Power2.easeIn },
        "over"
      )
      .to(
        parent + ".line-x-r",
        0.5,
        { drawSVG: "0% 15.8%", ease: Power2.easeOut },
        "over+=.5"
      )
      .to(
        parent + ".line-x-l",
        0.5,
        { drawSVG: "0% 15.8%", ease: Power2.easeOut },
        "over+=.5"
      )
      .to(
        parent + ".x-path *",
        0.2,
        { stroke: "#000000", ease: Back.easeOut },
        "over"
      )
      .to(
        parent + ".line-x-r",
        0.1,
        { rotation: -15, transformOrigin: "50% 50%", ease: Power4.easeOut },
        "over"
      )
      .to(
        parent + ".line-x-r",
        0.5,
        { rotation: 0, transformOrigin: "50% 50%", ease: Back.easeOut },
        "over+=.1"
      )
      .to(
        parent + ".line-x-l",
        0.1,
        { rotation: 15, transformOrigin: "50% 50%", ease: Power4.easeOut },
        "over"
      )
      .to(
        parent + ".line-x-l",
        0.4,
        { rotation: 0, transformOrigin: "50% 50%", ease: Back.easeOut },
        "over+=.1"
      )
      .to(
        parent + ".x-path",
        0.2,
        {
          rotation: -10,
          scale: 1.2,
          transformOrigin: "50% 50%",
          ease: Power4.easeOut,
        },
        "over"
      )
      .to(
        parent + ".x-path",
        0.6,
        {
          rotation: 0,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut,
        },
        "over+=.2"
      )
      .to({}, 0.01, {}, "over-end")

      .to(
        parent + ".circle-path-1",
        0.5,
        { x: 18, scale: 0.6, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out"
      )
      .to(
        parent + ".circle-path-2",
        0.5,
        { x: -18, scale: 0.6, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out"
      )
      .set(
        parent + ".circle-path-1, " + parent + ".circle-path-2",
        { x: 0, scale: 1, transformOrigin: "50% 50%" },
        "out+=.5"
      )
      .set(
        parent + ".mud-container",
        { scale: 0, transformOrigin: "50% 50%" },
        "out+=.5"
      )
      .to(
        parent + ".x-path *",
        0.2,
        { stroke: "#FFFFFF", ease: Back.easeOut },
        "out+=.5"
      )
      .to(
        parent + ".line-x-r",
        0.2,
        { rotation: -30, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out+=.3"
      )
      .to(
        parent + ".line-x-l",
        0.2,
        { rotation: 30, transformOrigin: "50% 50%", ease: Power4.easeIn },
        "out+=.3"
      )
      .to(
        parent + ".x-path",
        0.2,
        {
          rotation: 10,
          scale: 1.2,
          transformOrigin: "50% 50%",
          ease: Power4.easeIn,
        },
        "out+=.3"
      )
      .to(
        parent + ".x-path",
        0.6,
        {
          rotation: 0,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut,
        },
        "out+=.6"
      )
      .to(
        parent + ".line-x-r",
        0.5,
        {
          rotation: 0,
          transformOrigin: "50% 50%",
          ease: Back.easeOut.config(3),
        },
        "out+=.5"
      )
      .to(
        parent + ".line-x-l",
        0.4,
        {
          rotation: 0,
          transformOrigin: "50% 50%",
          ease: Back.easeOut.config(3),
        },
        "out+=.5"
      )
      .set(
        parent + ".xplod *",
        { drawSVG: "100% 100%", opacity: 1 },
        "out+=.45"
      )
      .to(
        parent + ".xplod *",
        0.1,
        { drawSVG: "0% 100%", ease: Power4.easeIn },
        "out+=.45"
      )
      .to(
        parent + ".xplod *",
        0.7,
        { drawSVG: "0", opacity: 0, ease: Power4.easeOut },
        "out+=.55"
      )
      .to({}, 0.01, {}, "out-end");

    return objConfig.tl;
  }

  function onArrowHandler(event) {
    event.preventDefault();
    var itemDiv = $(event.currentTarget).parent();
    var side = itemDiv.attr("id").split("-")[3];
    var tlSide = side == "left" ? tlArrowL : tlArrowR;

    switch (event.type) {
      case "mouseover":
        if (objArrowBuffer[side].status != "")
          objArrowBuffer[side].event = event;
        else tlSide.tweenFromTo("over", "over-end");
        break;
      case "mouseout":
        if (objArrowBuffer[side].status != "")
          objArrowBuffer[side].event = event;
        else tlSide.tweenFromTo("out", "out-end");
        break;
      case "click":
        if (tlSide.currentLabel() != "click") {
          objArrowBuffer[side].status = "feeding";
          tlSide.tweenFromTo("click", "click-end", {
            onComplete: bufferAction,
            onCompleteParams: [{ side: side, tlSide: tlSide }],
          });
        }

        break;
    }
  }

  function bufferAction(objConfig) {
    var currentSideDiv = $("#work-detail-arrow-" + objConfig.side + " a");
    var currentBuffer = objArrowBuffer[objConfig.side];

    objArrowBuffer[objConfig.side] = {};
    objArrowBuffer[objConfig.side].status = "";

    if (currentBuffer.event) {
      if (currentBuffer.event.type != "mouseover")
        currentSideDiv.trigger(currentBuffer.event);
    }
  }

  function onCloseHandler(event) {
    event.preventDefault();

    switch (event.type) {
      case "mouseover":
        tlClose.tweenFromTo("over", "over-end");
        break;
      case "mouseout":
        tlClose.tweenTo("out-end");
        break;
      case "click":
        //
        break;
    }
  }

  init();
});
