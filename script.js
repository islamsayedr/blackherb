// counter -------------
!(function (t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = function (e) {
        t(e, window, document);
      })
    : t(jQuery, window, document);
})(function (t, e, n, o) {
  var s;
  Number.isFinite =
    Number.isFinite ||
    function (t) {
      return "number" == typeof t && isFinite(t);
    };
  var i = function (t) {
    return (this._options = {}), (this.targetElement = t), this;
  };
  (i.start = function (t, e) {
    return (
      (function (t, e) {
        (e = e || {}),
          (t._options.elementContainer = e.elementContainer || "div");
        var n = e.classNames || {};
        (t._options.classNameSeconds = n.seconds || "jst-seconds"),
          (t._options.classNameMinutes = n.minutes || "jst-minutes"),
          (t._options.classNameHours = n.hours || "jst-hours"),
          (t._options.classNameClearDiv = n.clearDiv || "jst-clearDiv"),
          (t._options.classNameTimeout = n.timeout || "jst-timeout");
      })((s = new i(e)), t),
      s.start(t)
    );
  }),
    (i.prototype.start = function (e) {
      var o = this,
        i = function (t) {
          var e = n.createElement(o._options.elementContainer);
          e.className = o._options.classNameSeconds;
          var s = n.createElement(o._options.elementContainer);
          s.className = o._options.classNameMinutes;
          var i = n.createElement(o._options.elementContainer);
          i.className = o._options.classNameHours;
          var r = n.createElement(o._options.elementContainer);
          return (
            (r.className = o._options.classNameClearDiv),
            t.append(i).append(s).append(e).append(r)
          );
        };
      this.targetElement.each(
        function (n, o) {
          var r = this,
            a = t(o),
            u = a.attr("class");
          return (
            a.on("complete", function () {
              clearInterval(a.intervalId);
            }),
            a.on("complete", function () {
              a.onComplete(a);
            }),
            a.on("complete", function () {
              a.addClass(r._options.classNameTimeout);
            }),
            a.on("complete", function () {
              e && !0 === e.loop && s.resetTimer(a, e, u);
            }),
            a.on("pause", function () {
              clearInterval(a.intervalId), (a.paused = !0);
            }),
            a.on("resume", function () {
              (a.paused = !1),
                r.startCountdown(a, { secondsLeft: a.data("timeLeft") });
            }),
            i(a),
            this.startCountdown(a, e)
          );
        }.bind(this)
      );
    }),
    (i.prototype.resetTimer = function (t, e, n) {
      var o = 0;
      e.loopInterval && (o = 1e3 * parseInt(e.loopInterval, 10)),
        setTimeout(function () {
          t.trigger("reset"),
            t.attr("class", n + " loop"),
            s.startCountdown(t, e);
        }, o);
    }),
    (i.prototype.fetchSecondsLeft = function (t) {
      var e = t.data("seconds-left"),
        n = t.data("minutes-left");
      if (Number.isFinite(e)) return parseInt(e, 10);
      if (Number.isFinite(n)) return 60 * parseFloat(n);
      throw "Missing time data";
    }),
    (i.prototype.startCountdown = function (t, e) {
      e = e || {};
      var n = null,
        o = function () {
          return clearInterval(n), this.clearTimer(t);
        }.bind(this);
      (t.onComplete = e.onComplete || o),
        (t.allowPause = e.allowPause || !1),
        t.allowPause &&
          t.on("click", function () {
            t.paused ? t.trigger("resume") : t.trigger("pause");
          });
      var s = e.secondsLeft || this.fetchSecondsLeft(t),
        i = e.refreshRate || 1e3,
        r = s + this.currentTime(),
        a = r - this.currentTime();
      this.setFinalValue(this.formatTimeLeft(a), t),
        (n = setInterval(
          function () {
            (a = r - this.currentTime()) < 0 && (a = 0),
              t.data("timeLeft", a),
              this.setFinalValue(this.formatTimeLeft(a), t);
          }.bind(this),
          i
        )),
        (t.intervalId = n);
    }),
    (i.prototype.clearTimer = function (t) {
      t.find(".jst-seconds").text("00"),
        t.find(".jst-minutes").text("00:"),
        t.find(".jst-hours").text("00:");
    }),
    (i.prototype.currentTime = function () {
      return Math.round(new Date().getTime() / 1e3);
    }),
    (i.prototype.formatTimeLeft = function (t) {
      var e = function (t, e) {
          return (t += "").length >= (e = e || 2)
            ? t
            : Array(e - t.length + 1).join(0) + t;
        },
        n = Math.floor(t / 3600);
      t -= 3600 * n;
      var o = Math.floor(t / 60);
      t -= 60 * o;
      var s = parseInt(t % 60, 10);
      return 0 == +n && 0 == +o && 0 == +s ? [] : [e(n), e(o), e(s)];
    }),
    (i.prototype.setFinalValue = function (t, e) {
      if (0 === t.length) return this.clearTimer(e), e.trigger("complete"), !1;
      e.find("." + this._options.classNameSeconds).text(t.pop()),
        e.find("." + this._options.classNameMinutes).text(t.pop() + ":"),
        e.find("." + this._options.classNameHours).text(t.pop() + ":");
    }),
    (t.fn.startTimer = function (t) {
      return (this.TimerObject = i), i.start(t, this), this;
    });
});
$(function () {
  $(".timer").startTimer();
});

// tooltip

const tooltip = document.querySelector(".tooltip");
tooltip.addEventListener("click", () => {
  tooltip.setAttribute("style", "display: none;");
});

// reviews

const reviews = [
  {
    name: "نجود الحارثي",
    comment: "المنتج مو طبيعي 😍 الله يعطيكم العافية.",
    rate: 4,
  },
  {
    name: "خلود",
    comment:
      "بنتي كان شعرها شوي خشن ومعذبني في التمشيط ووالله الحين أفضل بكلم كل صحباتي عنه👏.",
    rate: 4,
  },
  {
    name: "سديم تركي",
    comment: "منتج جيد الصراحة و حاسة بأختلاف بس مشكلته يخلص بسرعة.",
    rate: 4,
  },
  {
    name: "سارة الشمري",
    comment:
      "شعري يعاني من تلف بسبب الصبغات والحرارة و اول مرة ألقى منتج يرجع لي حيويته بذي السرعة ، برافو🙌🏻.",
    rate: 4,
  },
  {
    name: "سلمى الأنصاري",
    comment: "عيبكم شيء واحد تردون متأخر 🙂",
    rate: 4,
  },
  {
    name: "عبدالله العويس",
    comment: "منتج جبار👍🏻",
    rate: 4,
  },
  {
    name: "ياسمين عزت",
    comment: "حبيتو كتير بدي اعرف الخلطة😅",
    rate: 4,
  },
  {
    name: "خالد النويصر",
    comment: "يااخي ابلشتونا كل شوي المنتج ماهو متوفر؟",
    rate: 4,
  },
  {
    name: "عبير هوساوي",
    comment:
      "واااو ماتوقعته يكون كدا الصراحة😍النتيجة مرة سريعة حتى الكيرلي صار يلمع ✨ صدق شكراً 🙌🏽",
    rate: 5,
  },
  {
    name: "فدوة",
    comment: "👏🏻👏🏻👏🏻10/10",
    rate: 5,
  },
  {
    name: "الجوهرة العبدلي",
    comment: "ماعندكم عروض لليوم الوطني نبي نشتري حق سنة😂",
    rate: 3,
  },
  {
    name: "منيرة القحطاني",
    comment:
      "صحباتي يسألوني يقولون في شيء متغير في شعرك صاير يلمع 🫢 ماقلت لهم عنكم أسفة 😅.",
    rate: 4,
  },
  {
    name: "خالد الدوسري",
    comment: "ليه الطلبية قلتم بتوصلك خلال ثلاث ايام ووصلتني بعد أسبوع؟",
    rate: 3,
  },
  {
    name: "عهود",
    comment:
      "شريت علبة منكم على أساس بستخدمها لحالي، من الاسبوع الثاني كل البيت شاركني و الحين قضت😭",
    rate: 3,
  },
  {
    name: "فيصل",
    comment: "👍🏻",
    rate: 4,
  },
  {
    name: "لطيفة مسعود",
    comment: "ممتاز 👌",
    rate: 4,
  },
  {
    name: "مها ياسر",
    comment: "عجييييب! مفعوله سريع صدق وش تحطون فيه؟🌚",
    rate: 5,
  },
  {
    name: "ندى",
    comment:
      "يا جماعة، جربت زيت العشبة السوداء والصراحة ما صدقت النتيجة! شعري صار أنعم و ألمع لكن يمكن أنه يحتاج رائحة أفضل",
    rate: 4,
  },
  {
    name: "ريم صالح",
    comment:
      "بصراحة، يساعد في إصلاح الأضرار. شعري كان تالف وتحسن بشكل واضح بعد ماستخدمته ولكن السعر شوي غالي🤷🏻‍♀️",
    rate: 3,
  },
];

let currentReviewIndex = 0;

const reviewCard = document.querySelector(".review-card");
const dotContainer = document.querySelector(".dot-container");
//geterate dots
for(let i = 0; i<= reviews.length; i++){
    dotContainer.innerHTML += `<span class="dot"></span>`;
};
const dots = Array.from(dotContainer.querySelectorAll(".dot"));
//create comment
function showReview(index) {
  reviewCard.style.display = "block";
  reviewCard.innerHTML = `
                <h3>${reviews[index].name}</h3>
                <p>${reviews[index].comment}</p>
                <p>⭐${reviews[index].rate.toFixed(1)}</p>
            `;
}

//update dots
function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.className = i === index ? "dot active" : "dot";
  });
}
// actions
function nextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  showReview(currentReviewIndex);
  updateDots(currentReviewIndex);
}

function prevReview() {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  showReview(currentReviewIndex);
  updateDots(currentReviewIndex);
}

showReview(currentReviewIndex);
updateDots(currentReviewIndex);
