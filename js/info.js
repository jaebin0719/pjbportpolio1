$(document).ready(function () {
  const SkillsBar = function (bars) {
    this.bars = $(bars);
    if (this.bars.length > 0) {
      this.init();
    }
  };

  SkillsBar.prototype = {
    init: function () {
      const self = this;
      self.index = -1;
      self.timer = setTimeout(function () {
        self.action();
      }, 1000);
    },
    select: function (n) {
      const self = this,
        bar = self.bars.eq(n);

      if (bar.length > 0) {
        const width = bar.parent().data("percent");

        bar.css("width", width);
        bar.parent().addClass("complete");
      }
    },
    action: function () {
      const self = this;
      self.index++;
      if (self.index === self.bars.length) {
        clearTimeout(self.timer);
      } else {
        self.select(self.index);
      }

      setTimeout(function () {
        self.action();
      }, 1000);
    },
  };

  window.SkillsBar = SkillsBar;

  const skills = new SkillsBar(".skillbar-bar");
});
