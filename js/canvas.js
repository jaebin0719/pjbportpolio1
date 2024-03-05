$(document).ready(function () {
  // 배경 js------------------------------------------------------
  const area = $(".galaxy");

  let amountMeteor = 15;
  let amountStar = 200;
  let i = 0;
  let j = 0;
  let k = 0;

  function galaxy() {
    // while (i < amountMeteor) {
    //   // meteor from top
    //   let size = Math.random() * 2 + 0.5;
    //   let posX = Math.floor(Math.random() * area.width());
    //   let delay = Math.random() * -20;
    //   let duration = Math.random() * 20 + 3;

    //   $("<i>")
    //     .css({
    //       width: size + "px",
    //       left: posX + "px",
    //       top: 0,
    //       animationDelay: delay + "s",
    //       animationDuration: duration + "s",
    //     })
    //     .appendTo(area);

    //   i++;
    // }

    // while (k < amountMeteor * 2) {
    //   // meteor from right
    //   let size = Math.random() * 2 + 0.5;
    //   let posY = Math.floor(Math.random() * area.height());
    //   let delay = Math.random() * -20;
    //   let duration = Math.random() * 30 + 3;

    //   $("<i>")
    //     .css({
    //       width: size + "px",
    //       right: 0,
    //       top: posY + "px",
    //       animationDelay: delay + "s",
    //       animationDuration: duration + "s",
    //     })
    //     .appendTo(area);

    //   k++;
    // }

    while (j < amountStar) {
      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * area.width() * 2);
      let posY = Math.floor(Math.random() * area.height());
      let delay = Math.random() * 100 + 50;
      let duration = Math.random() * 300 + 15;

      $("<j>")
        .css({
          width: size + "px",
          height: size + "px",
          left: posX + "px",
          top: posY + "px",
          animationDuration: duration + "s",
        })
        .appendTo(area);

      j++;
    }
  }

  galaxy();
  // -----------------------------------------------------------
  //텍스트 효과
  // ——————————————————————————————————————————————————
  // // TextScramble
  // // ——————————————————————————————————————————————————

  // class TextScramble {
  //   constructor(el) {
  //     this.el = el;
  //     this.chars = "!<>-_\\/[]{}—=+*^?#________";
  //     this.update = this.update.bind(this);
  //   }
  //   setText(newText) {
  //     const oldText = this.el.text();
  //     const length = Math.max(oldText.length, newText.length);
  //     const promise = new Promise((resolve) => (this.resolve = resolve));
  //     this.queue = [];
  //     for (let i = 0; i < length; i++) {
  //       const from = oldText[i] || "";
  //       const to = newText[i] || "";
  //       const start = Math.floor(Math.random() * 40);
  //       const end = start + Math.floor(Math.random() * 40);
  //       this.queue.push({ from, to, start, end });
  //     }
  //     cancelAnimationFrame(this.frameRequest);
  //     this.frame = 0;
  //     this.update();
  //     return promise;
  //   }
  //   update() {
  //     let output = "";
  //     let complete = 0;
  //     for (let i = 0, n = this.queue.length; i < n; i++) {
  //       let { from, to, start, end, char } = this.queue[i];
  //       if (this.frame >= end) {
  //         complete++;
  //         output += to;
  //       } else if (this.frame >= start) {
  //         if (!char || Math.random() < 0.28) {
  //           char = this.randomChar();
  //           this.queue[i].char = char;
  //         }
  //         output += '<span class="dud">' + char + "</span>";
  //       } else {
  //         output += from;
  //       }
  //     }
  //     this.el.html(output);
  //     if (complete === this.queue.length) {
  //       this.resolve();
  //     } else {
  //       this.frameRequest = requestAnimationFrame(this.update);
  //       this.frame++;
  //     }
  //   }
  //   randomChar() {
  //     return this.chars[Math.floor(Math.random() * this.chars.length)];
  //   }
  // }

  // // ——————————————————————————————————————————————————
  // // Example
  // // ——————————————————————————————————————————————————

  // const phrases = ["PJB's <br><span>Web Publisher Portpolio</span>"];

  // const el = $(".text");
  // const fx = new TextScramble(el);

  // let counter = 0;
  // const next = () => {
  //   fx.setText(phrases[counter]).then(() => {
  //     setTimeout(next, 2000);
  //   });
  //   counter = (counter + 1) % phrases.length;
  // };

  // next();
});
