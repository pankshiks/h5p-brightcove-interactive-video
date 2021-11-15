!(function (t) {
  function e(o) {
    if (n[o]) return n[o].exports;
    var i = (n[o] = { i: o, l: !1, exports: {} });
    return t[o].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, o) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 4));
})([
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        },
      r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      })(),
      s = n(11),
      a = n(1),
      l = n(12),
      c = (0, s.removeAttribute)("tabindex"),
      u = ((0, a.forEach)(c), (0, s.setAttribute)("tabindex", "0")),
      d = (0, s.setAttribute)("tabindex", "-1"),
      h = (0, s.hasAttribute)("tabindex"),
      p = (function () {
        function t(e) {
          o(this, t),
            i(this, (0, l.Eventful)()),
            (this.plugins = e || []),
            (this.elements = []),
            (this.negativeTabIndexAllowed = !1),
            this.on("nextElement", this.nextElement, this),
            this.on("previousElement", this.previousElement, this),
            this.on("firstElement", this.firstElement, this),
            this.on("lastElement", this.lastElement, this),
            this.initPlugins();
        }
        return (
          r(t, [
            {
              key: "addElement",
              value: function (t) {
                this.elements.push(t),
                  this.firesEvent("addElement", t),
                  1 === this.elements.length && this.setTabbable(t);
              },
            },
            {
              key: "insertElementAt",
              value: function (t, e) {
                this.elements.splice(e, 0, t),
                  this.firesEvent("addElement", t),
                  1 === this.elements.length && this.setTabbable(t);
              },
            },
            {
              key: "removeElement",
              value: function (t) {
                (this.elements = (0, a.without)([t], this.elements)),
                  h(t) &&
                    (this.setUntabbable(t),
                    this.elements[0] && this.setTabbable(this.elements[0])),
                  this.firesEvent("removeElement", t);
              },
            },
            {
              key: "count",
              value: function () {
                return this.elements.length;
              },
            },
            {
              key: "firesEvent",
              value: function (t, e) {
                var n = this.elements.indexOf(e);
                return this.fire(t, {
                  element: e,
                  index: n,
                  elements: this.elements,
                  oldElement: this.tabbableElement,
                });
              },
            },
            {
              key: "nextElement",
              value: function (t) {
                var e = t.index,
                  n = e === this.elements.length - 1,
                  o = this.elements[n ? 0 : e + 1];
                this.setTabbable(o), o.focus();
              },
            },
            {
              key: "firstElement",
              value: function () {
                var t = this.elements[0];
                this.setTabbable(t), t.focus();
              },
            },
            {
              key: "lastElement",
              value: function () {
                var t = this.elements[this.elements.length - 1];
                this.setTabbable(t), t.focus();
              },
            },
            {
              key: "setTabbableByIndex",
              value: function (t) {
                var e = this.elements[t];
                e && this.setTabbable(e);
              },
            },
            {
              key: "setTabbable",
              value: function (t) {
                (0, a.forEach)(this.setUntabbable.bind(this), this.elements),
                  u(t),
                  (this.tabbableElement = t);
              },
            },
            {
              key: "setUntabbable",
              value: function (t) {
                t !== document.activeElement &&
                  (this.negativeTabIndexAllowed ? d(t) : c(t));
              },
            },
            {
              key: "previousElement",
              value: function (t) {
                var e = t.index,
                  n = 0 === e,
                  o = this.elements[n ? this.elements.length - 1 : e - 1];
                this.setTabbable(o), o.focus();
              },
            },
            {
              key: "useNegativeTabIndex",
              value: function () {
                (this.negativeTabIndexAllowed = !0),
                  this.elements.forEach(function (t) {
                    t.hasAttribute("tabindex") || d(t);
                  });
              },
            },
            {
              key: "initPlugins",
              value: function () {
                this.plugins.forEach(function (t) {
                  void 0 !== t.init && t.init(this);
                }, this);
              },
            },
          ]),
          t
        );
      })();
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (e.curry = function (t) {
        var e = t.length;
        return function n() {
          var o = Array.prototype.slice.call(arguments, 0);
          return o.length >= e
            ? t.apply(null, o)
            : function () {
                var t = Array.prototype.slice.call(arguments, 0);
                return n.apply(null, o.concat(t));
              };
        };
      }),
      i =
        ((e.compose = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return e.reduce(function (t, e) {
            return function () {
              return t(e.apply(void 0, arguments));
            };
          });
        }),
        (e.forEach = o(function (t, e) {
          e.forEach(t);
        })),
        (e.map = o(function (t, e) {
          return e.map(t);
        })),
        (e.filter = o(function (t, e) {
          return e.filter(t);
        }))),
      r =
        ((e.some = o(function (t, e) {
          return e.some(t);
        })),
        (e.contains = o(function (t, e) {
          return -1 != e.indexOf(t);
        })));
    (e.without = o(function (t, e) {
      return i(function (e) {
        return !r(e, t);
      }, e);
    })),
      (e.inverseBooleanString = function (t) {
        return ("true" !== t).toString();
      });
  },
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      })(),
      r = (function () {
        function t() {
          o(this, t), (this.selectability = !0);
        }
        return (
          i(t, [
            {
              key: "init",
              value: function (t) {
                (this.boundHandleKeyDown = this.handleKeyDown.bind(this)),
                  (this.controls = t),
                  this.controls.on("addElement", this.listenForKeyDown, this),
                  this.controls.on(
                    "removeElement",
                    this.removeKeyDownListener,
                    this
                  );
              },
            },
            {
              key: "listenForKeyDown",
              value: function (t) {
                t.element.addEventListener("keydown", this.boundHandleKeyDown);
              },
            },
            {
              key: "removeKeyDownListener",
              value: function (t) {
                t.element.removeEventListener(
                  "keydown",
                  this.boundHandleKeyDown
                );
              },
            },
            {
              key: "handleKeyDown",
              value: function (t) {
                switch (t.which) {
                  case 27:
                    this.close(t.target),
                      t.preventDefault(),
                      t.stopPropagation();
                    break;
                  case 35:
                    this.lastElement(t.target),
                      t.preventDefault(),
                      t.stopPropagation();
                    break;
                  case 36:
                    this.firstElement(t.target),
                      t.preventDefault(),
                      t.stopPropagation();
                    break;
                  case 13:
                  case 32:
                    this.select(t.target),
                      t.preventDefault(),
                      t.stopPropagation();
                    break;
                  case 37:
                  case 38:
                    this.hasChromevoxModifiers(t) ||
                      (this.previousElement(t.target),
                      t.preventDefault(),
                      t.stopPropagation());
                    break;
                  case 39:
                  case 40:
                    this.hasChromevoxModifiers(t) ||
                      (this.nextElement(t.target),
                      t.preventDefault(),
                      t.stopPropagation());
                }
              },
            },
            {
              key: "hasChromevoxModifiers",
              value: function (t) {
                return t.shiftKey || t.ctrlKey;
              },
            },
            {
              key: "previousElement",
              value: function (t) {
                !1 !== this.controls.firesEvent("beforePreviousElement", t) &&
                  (this.controls.firesEvent("previousElement", t),
                  this.controls.firesEvent("afterPreviousElement", t));
              },
            },
            {
              key: "nextElement",
              value: function (t) {
                !1 !== this.controls.firesEvent("beforeNextElement", t) &&
                  (this.controls.firesEvent("nextElement", t),
                  this.controls.firesEvent("afterNextElement", t));
              },
            },
            {
              key: "select",
              value: function (t) {
                this.selectability &&
                  !1 !== this.controls.firesEvent("before-select", t) &&
                  (this.controls.firesEvent("select", t),
                  this.controls.firesEvent("after-select", t));
              },
            },
            {
              key: "firstElement",
              value: function (t) {
                !1 !== this.controls.firesEvent("beforeFirstElement", t) &&
                  (this.controls.firesEvent("firstElement", t),
                  this.controls.firesEvent("afterFirstElement", t));
              },
            },
            {
              key: "lastElement",
              value: function (t) {
                !1 !== this.controls.firesEvent("beforeLastElement", t) &&
                  (this.controls.firesEvent("lastElement", t),
                  this.controls.firesEvent("afterLastElement", t));
              },
            },
            {
              key: "disableSelectability",
              value: function () {
                this.selectability = !1;
              },
            },
            {
              key: "enableSelectability",
              value: function () {
                this.selectability = !0;
              },
            },
            {
              key: "close",
              value: function (t) {
                !1 !== this.controls.firesEvent("before-close", t) &&
                  (this.controls.firesEvent("close", t),
                  this.controls.firesEvent("after-close", t));
              },
            },
          ]),
          t
        );
      })();
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (e.Keys = {
        ENTER: 13,
        SPACE: 32,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
      }),
      i = (e.isKey = function (t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { ctrl: !1, shift: !1 };
        return (
          -1 !== e.indexOf(t.which) &&
          !(n.ctrl && !t.ctrlKey) &&
          !(n.shift && !t.shiftKey)
        );
      });
    (e.isSpaceOrEnterKey = function (t) {
      return -1 !== [o.ENTER, o.SPACE].indexOf(t.which);
    }),
      (e.onKey = function (t, e, n) {
        t.on("keydown", function (t) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            if (i(t, [r.key], { ctrl: r.ctrl, shift: r.shift }))
              return r.preventDefault && t.preventDefault(), n(t);
          }
        });
      });
  },
  function (t, e, n) {
    "use strict";
    n(5), n(6), n(7), n(8);
    var o = n(9),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    (H5P = H5P || {}), (H5P.BrightcoveInteractiveVideo = i.default);
  },
  function (t, e) {},
  function (t, e) {},
  function (t, e) {},
  function (t, e) {},
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function i(t, e, n) {
      var o,
        r,
        s = this;
      H5P.EventDispatcher.call(s),
        (s.contentId = e),
        (s.contentData = n),
        (s.instanceIndex = C()),
        (s.bookmarksMenuId =
          "interactive-video-" + this.contentId + "-bookmarks-chooser"),
        (s.endscreensMenuId =
          "interactive-video-" + this.contentId + "-endscreens-chooser"),
        (s.qualityMenuId =
          "interactive-video-" + this.contentId + "-quality-chooser"),
        (s.captionsMenuId =
          "interactive-video-" + this.contentId + "-captions-chooser"),
        (s.playbackRateMenuId =
          "interactive-video-" + this.contentId + "-playback-rate-chooser"),
        (s.popupMenuButtons = []),
        (s.popupMenuChoosers = []),
        (this.visibleInteractions = []),
        (s.isMinimal = !1),
        (s.options = k.extend(
          { video: { textTracks: { videoTrack: [] } }, assets: {} },
          t.interactiveVideo
        )),
        (s.options.video.startScreenOptions =
          s.options.video.startScreenOptions || {}),
        (s.qualities = void 0),
        s.options.video.startScreenOptions.title ||
          (s.options.video.startScreenOptions.title = "Interactive Video"),
        (s.startScreenOptions = k.extend(
          { hideStartTitle: !1, shortStartDescription: "" },
          s.options.video.startScreenOptions
        )),
        t.override &&
          (t.override.showSolutionButton || t.override.retryButton) &&
          ((s.override = {}),
          t.override.showSolutionButton &&
            (s.override.enableSolutionsButton =
              "on" === t.override.showSolutionButton),
          t.override.retryButton &&
            (s.override.enableRetry = "on" === t.override.retryButton)),
        void 0 !== t.override &&
          ((s.showRewind10 =
            void 0 !== t.override.showRewind10 && t.override.showRewind10),
          (s.showBookmarksmenuOnLoad =
            void 0 !== t.override.showBookmarksmenuOnLoad &&
            t.override.showBookmarksmenuOnLoad),
          (s.preventSkipping = t.override.preventSkipping || !1),
          (s.deactivateSound = t.override.deactivateSound || !1)),
        (s.l10n = k.extend(
          {
            interaction: "Interaction",
            play: "Play",
            pause: "Pause",
            mute: "Mute",
            unmute: "Unmute",
            quality: "Video quality",
            captions: "Captions",
            close: "Close",
            fullscreen: "Fullscreen",
            exitFullscreen: "Exit fullscreen",
            summary: "Open summary dialog",
            bookmarks: "Bookmarks",
            endscreens: "Submit Screens",
            defaultAdaptivitySeekLabel: "Continue",
            continueWithVideo: "Continue with video",
            more: "More",
            playbackRate: "Playback rate",
            rewind10: "Rewind 10 seconds",
            navDisabled: "Navigation is disabled",
            sndDisabled: "Sound is disabled",
            requiresCompletionWarning:
              "You need to answer all the questions correctly before continuing.",
            back: "Back",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            currentTime: "Current time:",
            totalTime: "Total time:",
            singleInteractionAnnouncement: "Interaction appeared:",
            multipleInteractionsAnnouncement: "Multiple interactions appeared:",
            videoPausedAnnouncement: "Video was paused",
            content: "Content",
            answered: "@answered answered!",
          },
          t.l10n
        )),
        (s.l10n.play += " (k)"),
        (s.l10n.pause += " (k)"),
        (s.l10n.mute += " (m)"),
        (s.l10n.unmute += " (m)"),
        n &&
          void 0 !== n.previousState &&
          void 0 !== n.previousState.progress &&
          void 0 !== n.previousState.answers &&
          (s.previousState = n.previousState),
        (s.menuitems = []),
        (s.lastState = H5P.Video.ENDED),
        (s.justVideo = !1);
      var a = navigator.userAgent.match(/(iPhone|iPod) OS (\d*)_/i);
      null !== a && 3 === a.length && (s.justVideo = a[2] < 10),
        (o =
          s.previousState && s.previousState.progress
            ? Math.floor(s.previousState.progress)
            : 0),
        0 === o &&
          t.override &&
          t.override.startVideoAt &&
          (o = t.override.startVideoAt),
        (s.interactionsProgress = []),
        s.previousState &&
          s.previousState.interactionsProgress &&
          (s.interactionsProgress = s.previousState.interactionsProgress),
        (r = t.override && !!t.override.loop),
        (this.autoplay = t.override && !!t.override.autoplay),
        (s.$videoWrapper = k("<div>", { class: "h5p-video-wrapper" })),
        (s.$controls = k("<div>", {
          role: "toolbar",
          class: "h5p-controls hidden",
        })),
        (s.$read = k("<div/>", {
          "aria-live": "polite",
          class: "hidden-but-read",
        })),
        (this.fontSize = 16),
        (this.width = 640);
      var l = !1,
        c = !0,
        u = !1;
      if (
        ((s.isTask = !1), (s.interactions = []), s.options.assets.interactions)
      )
        for (var d = 0; d < s.options.assets.interactions.length; d++)
          this.initInteraction(d);
      (s.initialize = function () {
        if (!u) {
          (u = !0),
            s.on("resize", function () {
              s.resize();
            });
          var e = this.editor
            ? []
            : s.options.video.textTracks &&
              s.options.video.textTracks.videoTrack
            ? s.options.video.textTracks.videoTrack
            : [];
          if (
            ((s.video = H5P.newRunnable(
              {
                library: "H5P.Video 1.3",
                params: {
                  sources: s.options.video.files,
                  visuals: {
                    poster: s.options.video.startScreenOptions.poster,
                    controls: s.justVideo,
                    fit: !1,
                    disableRemotePlayback: !0,
                  },
                  startAt: o,
                  a11y: e,
                },
              },
              s.contentId,
              void 0,
              void 0,
              { parent: s }
            )),
            s.justVideo)
          )
            return void s.video.on("loaded", function () {
              s.trigger("resize");
            });
          s.video.on("loaded", function () {
            (l = !0), s.loaded();
          }),
            s.video.on("canplay", function () {
              s.trigger("resize");
            }),
            s.video.on("error", function () {
              s.removeSplash();
            }),
            s.video.on("stateChange", function (e) {
              !s.controls && l && (s.addControls(), s.trigger("resize"));
              var n = e.data;
              if (s.currentState !== i.SEEKING)
                switch (n) {
                  case H5P.Video.ENDED:
                    (s.currentState = H5P.Video.ENDED),
                      s.controls.$play
                        .addClass("h5p-pause")
                        .attr("aria-label", s.l10n.play),
                      s.timeUpdate(s.video.getCurrentTime()),
                      s.updateCurrentTime(s.getDuration());
                    var o = s.interactions
                      .map(function (t) {
                        return t.getProgress() || 0;
                      })
                      .reduce(function (t, e) {
                        return t + e;
                      }, 0);
                    if (
                      (s.endscreensMap[s.getDuration()] &&
                        o > 0 &&
                        s.toggleEndscreen(!0),
                      r)
                    ) {
                      s.video.play();
                      var a =
                        t.override && t.override.startVideoAt
                          ? t.override.startVideoAt
                          : 0;
                      s.seek(a);
                    }
                    break;
                  case H5P.Video.PLAYING:
                    c &&
                      (s.addQualityChooser(),
                      s.addPlaybackRateChooser(),
                      s.removeSplash(),
                      s.startUpdatingBufferBar(),
                      s.toggleBookmarksChooser(!1, { firstPlay: c }),
                      s.toggleEndscreensChooser(!1, { firstPlay: c }),
                      (c = !1)),
                      (s.currentState = H5P.Video.PLAYING),
                      s.controls.$play
                        .removeClass("h5p-pause")
                        .attr("aria-label", s.l10n.pause),
                      s.controls.$play.is(":focus") &&
                        (s.controls.$play.blur(), s.controls.$play.focus()),
                      s.timeUpdate(s.video.getCurrentTime());
                    break;
                  case H5P.Video.PAUSED:
                    (s.currentState = H5P.Video.PAUSED),
                      s.controls.$play
                        .addClass("h5p-pause")
                        .attr("aria-label", s.l10n.play),
                      s.focusInteraction
                        ? (s.focusInteraction.focusOnFirstTabbableElement(),
                          delete s.focusInteraction)
                        : s.controls.$play.is(":focus") &&
                          (s.controls.$play.blur(), s.controls.$play.focus()),
                      s.timeUpdate(s.video.getCurrentTime());
                    break;
                  case H5P.Video.BUFFERING:
                    (s.currentState = H5P.Video.BUFFERING),
                      s.removeSplash(),
                      s.startUpdatingBufferBar();
                }
            }),
            s.video.on("qualityChange", function (t) {
              var e = t.data;
              if (s.controls && s.controls.$qualityChooser) {
                if ("YouTube" === this.getHandlerName()) {
                  if (!s.qualities) return;
                  var n = s.qualities.filter(function (e) {
                    return e.name === t.data;
                  })[0];
                  return void s.controls.$qualityChooser
                    .find("li")
                    .attr("data-quality", t.data)
                    .html(n.label);
                }
                s.controls.$qualityChooser
                  .find("li")
                  .attr("aria-checked", "false")
                  .filter('[data-quality="' + e + '"]')
                  .attr("aria-checked", "true");
              }
            }),
            s.video.on("playbackRateChange", function (t) {
              var e = t.data;
              s.controls &&
                s.controls.$playbackRateChooser &&
                s.controls.$playbackRateChooser
                  .find("li")
                  .attr("aria-checked", "false")
                  .filter('[playback-rate="' + e + '"]')
                  .attr("aria-checked", "true");
            }),
            s.on("enterFullScreen", function () {
              var t = this;
              (s.hasFullScreen = !0),
                s.$container.parent(".h5p-content").css("height", "100%"),
                s.controls.$fullscreen
                  .addClass("h5p-exit")
                  .attr("aria-label", s.l10n.exitFullscreen),
                s.controls.$fullscreen.blur(),
                s.controls.$fullscreen.focus(),
                s.resizeInteractions(),
                setTimeout(function () {
                  void 0 !== t.bubbleEndscreen && t.bubbleEndscreen.update();
                }, 225);
            }),
            s.on("exitFullScreen", function () {
              s.$container.hasClass("h5p-standalone") &&
                s.$container.hasClass("h5p-minimal") &&
                s.pause(),
                (s.hasFullScreen = !1),
                s.$container.parent(".h5p-content").css("height", ""),
                s.controls.$fullscreen
                  .removeClass("h5p-exit")
                  .attr("aria-label", s.l10n.fullscreen),
                s.controls.$fullscreen.blur(),
                s.controls.$fullscreen.focus(),
                s.resizeInteractions(),
                s.dnb &&
                  s.dnb.dialog &&
                  !s.hasUncompletedRequiredInteractions() &&
                  s.dnb.dialog.close();
            }),
            s.video.on("captions", function (t) {
              s.controls || (s.addControls(), s.trigger("resize")),
                s.setCaptionTracks(t.data);
            }),
            (s.accessibility = new v.default(s.l10n));
        }
      }),
        (s.togglePlayPause = function () {
          var t = s.isDisabled(s.controls.$play);
          if (s.controls.$play.hasClass("h5p-pause") && !t) {
            var e = !screen || Math.min(screen.width, screen.height) <= s.width;
            H5P.fullscreenSupported &&
              !s.hasFullScreen &&
              e &&
              s.$container.hasClass("h5p-standalone") &&
              s.$container.hasClass("h5p-minimal") &&
              s.toggleFullScreen(),
              s.video.play(),
              s.toggleEndscreen(!1),
              s.closePopupMenus();
          } else s.video.pause();
          s.handleAnswered();
        }),
        (s.toggleMute = function () {
          var t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            e = s.controls.$volume;
          s.deactivateSound ||
            (e.hasClass("h5p-muted")
              ? (e.removeClass("h5p-muted").attr("aria-label", s.l10n.mute),
                s.video.unMute())
              : (e.addClass("h5p-muted").attr("aria-label", s.l10n.unmute),
                s.video.mute()),
            t && (e.blur(), e.focus()));
        });
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(10),
      s = o(r),
      a = n(0),
      l = o(a),
      c = n(2),
      u = o(c),
      d = n(3),
      h = n(13),
      p = o(h),
      f = n(14),
      v = o(f),
      m = n(15),
      b = o(m),
      g = n(16),
      y = o(g),
      k = H5P.jQuery;
    (i.prototype = Object.create(H5P.EventDispatcher.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.setCaptionTracks = function (t) {
        var e = this;
        if (
          (t.unshift(new H5P.Video.LabelValue("Off", "off")),
          e.captionsTrackSelector)
        )
          return void e.captionsTrackSelector.updateOptions(t);
        var n = this.editor
            ? void 0
            : e.options.video.textTracks.defaultTrackLabel,
          o = t.reduce(function (t, e) {
            return void 0 === t && n && e.label === n ? e : t;
          }, void 0),
          i = o || e.video.getCaptionsTrack();
        i || (i = t[0]),
          (e.captionsTrackSelector = new s.default(
            "captions",
            t,
            i,
            "menuitemradio",
            e.l10n,
            e.contentId
          )),
          (e.controls.$captionsButton = k(e.captionsTrackSelector.control)),
          e.popupMenuButtons.push(e.controls.$captionsButton),
          k(e.captionsTrackSelector.control).insertAfter(e.controls.$volume),
          k(e.captionsTrackSelector.popup)
            .css(e.controlsCss)
            .insertAfter(k(e.captionsTrackSelector.control)),
          e.popupMenuChoosers.push(k(e.captionsTrackSelector.popup)),
          k(e.captionsTrackSelector.overlayControl).insertAfter(
            e.controls.$qualityButtonMinimal
          ),
          (e.controls.$overlayButtons = e.controls.$overlayButtons.add(
            e.captionsTrackSelector.overlayControl
          )),
          e.captionsTrackSelector.on("select", function (t) {
            e.video.setCaptionsTrack("off" === t.data.value ? null : t.data);
          }),
          e.captionsTrackSelector.on("close", function () {
            "true" === e.controls.$more.attr("aria-expanded") &&
              e.controls.$more.click(),
              e.resumeVideo();
          }),
          e.captionsTrackSelector.on("open", function () {
            e.controls.$overlayButtons.addClass("h5p-hide"),
              e.closePopupMenus(e.controls.$captionsButton);
          }),
          e.minimalMenuKeyboardControls.insertElementAt(
            e.captionsTrackSelector.overlayControl,
            2
          );
      }),
      (i.prototype.getCurrentState = function () {
        var t = this;
        if (t.video.play) {
          var e = {
            progress: t.video.getCurrentTime(),
            answers: [],
            interactionsProgress: t.interactions
              .slice()
              .sort(function (t, e) {
                return t.getDuration().from - e.getDuration().from;
              })
              .map(function (t) {
                return t.getProgress();
              }),
          };
          if (void 0 !== t.interactions)
            for (var n = 0; n < t.interactions.length; n++)
              e.answers[n] = t.interactions[n].getCurrentState();
          return e.progress
            ? e
            : t.previousState && t.previousState.progress
            ? t.previousState
            : void 0;
        }
      }),
      (i.prototype.removeSplash = function () {
        void 0 !== this.$splash && (this.$splash.remove(), delete this.$splash);
      }),
      (i.prototype.attach = function (t) {
        var e = this;
        (this.$container = t),
          this.initialize(),
          void 0 !== this.isRoot && this.isRoot() && this.setActivityStarted(),
          t.addClass("h5p-interactive-video").html(""),
          this.$videoWrapper.appendTo(t),
          this.$controls.appendTo(t);
        var n = this.hasMainSummary();
        if (
          (this.interactions &&
            this.interactions.forEach(function (t) {
              t.reCreate(), t.isAnswerable() && (n = !0);
            }),
          (this.hasStar =
            this.editor || (void 0 !== this.options.assets.endscreens && n)),
          this.attachVideo(this.$videoWrapper),
          this.justVideo)
        )
          return (
            this.$videoWrapper.find("video").css("minHeight", "200px"),
            void t.children(":not(.h5p-video-wrapper)").remove()
          );
        this.$read.appendTo(t),
          (this.readText = null),
          void 0 === this.editor
            ? ((this.dnb = new H5P.DragNBar(
                [],
                this.$videoWrapper,
                this.$container,
                { disableEditor: !0 }
              )),
              this.dnb.dialog.on("open", function () {
                (e.lastState = e.currentState),
                  e.currentState !== H5P.Video.PAUSED &&
                    e.currentState !== H5P.Video.ENDED &&
                    e.video.pause();
              }),
              this.dnb.dialog.on("close", function () {
                e.restoreTabIndexes(),
                  e.lastState !== H5P.Video.PAUSED &&
                    e.lastState !== H5P.Video.ENDED &&
                    e.video.play(),
                  e.handleAnswered();
              }))
            : e.on("dnbEditorReady", function () {
                (e.dnb = e.editor.dnb), (e.dnb.dialog.disableOverlay = !0);
              }),
          this.video.pressToPlay ||
            (this.currentState === i.LOADED
              ? this.addControls()
              : this.addSplash()),
          t.attr("tabindex", "-1");
        var o = function (t, n) {
          var o = e.controls && e.controls[n] ? e.controls[n] : void 0;
          return (
            !(void 0 !== o && "-1" !== o.attr("tabindex")) ||
            "INPUT" === t.target.nodeName
          );
        };
        (0, d.onKey)(t, [{ key: d.Keys.M }], function (t) {
          o(t, "$volume") || e.toggleMute(!1);
        }),
          (0, d.onKey)(t, [{ key: d.Keys.K }], function (t) {
            if (!o(t, "$play"))
              if (e.hasUncompletedRequiredInteractions()) {
                var n = k(document.activeElement),
                  i = e.showWarningMask();
                i.find(".h5p-button-back").click(function () {
                  return n.focus();
                });
              } else e.togglePlayPause();
          }),
          this.$container.append(
            k(this.accessibility.getInteractionAnnouncer())
          ),
          (this.currentState = i.ATTACHED),
          this.autoplay && e.video.play();
      }),
      (i.prototype.attachVideo = function (t) {
        this.video.attach(t),
          this.justVideo ||
            (this.$overlay = k(
              '<div class="h5p-overlay h5p-ie-transparent-background"></div>'
            ).appendTo(t));
      }),
      (i.prototype.addSplash = function () {
        var t = this;
        void 0 !== this.editor ||
          this.video.pressToPlay ||
          !this.video.play ||
          this.$splash ||
          ((this.$splash = k(
            '<div class="h5p-splash-wrapper"><div class="h5p-splash-outer"><div class="h5p-splash" role="button" tabindex="0"><div class="h5p-splash-main"><div class="h5p-splash-main-outer"><div class="h5p-splash-main-inner"><div class="h5p-splash-play-icon" aria-label="' +
              this.l10n.play +
              '"></div><div class="h5p-splash-title">' +
              this.options.video.startScreenOptions.title +
              '</div></div></div></div><div class="h5p-splash-footer"><div class="h5p-splash-footer-holder"><div class="h5p-splash-description">' +
              t.startScreenOptions.shortStartDescription +
              "</div></div></div></div></div></div>"
          )
            .click(function () {
              t.video.play();
            })
            .appendTo(this.$overlay)
            .find(".h5p-interaction-button")
            .click(function () {
              return !1;
            })
            .end()),
          k(".h5p-splash", this.$splash).keydown(function (e) {
            (0, d.isSpaceOrEnterKey)(e) &&
              (t.video.play(),
              e.preventDefault(),
              t.$controls.find(".h5p-play").focus());
          }),
          (void 0 !== this.startScreenOptions.shortStartDescription &&
            this.startScreenOptions.shortStartDescription.length) ||
            this.$splash.addClass("no-description"),
          this.startScreenOptions.hideStartTitle &&
            this.$splash.addClass("no-title"));
      }),
      (i.prototype.getDuration = function () {
        return (
          void 0 === this.duration &&
            (this.duration = this.video.getDuration()),
          this.duration
        );
      }),
      (i.prototype.addControls = function () {
        var t = this,
          e = this;
        this.addSplash(),
          this.attachControls(this.$controls.removeClass("hidden"));
        var n = this.getDuration(),
          o = i.humanizeTime(n),
          r = i.formatTimeForA11y(n, e.l10n);
        this.controls.$totalTime.find(".human-time").html(o),
          this.controls.$totalTime
            .find(".hidden-but-read")
            .html(e.l10n.totalTime + " " + r),
          this.controls.$slider.slider("option", "max", n),
          (this.bookmarkMenuKeyboardControls = new l.default([
            new u.default(),
          ])),
          this.bookmarkMenuKeyboardControls.on("close", function () {
            return t.toggleBookmarksChooser(!1);
          }),
          (this.endscreenMenuKeyboardControls = new l.default([
            new u.default(),
          ])),
          this.endscreenMenuKeyboardControls.on("close", function () {
            return t.toggleEndscreensChooser(!1);
          }),
          this.addSliderInteractions(),
          this.addBookmarks(),
          this.addEndscreenMarkers(),
          this.addBubbles(),
          this.trigger("controls");
      }),
      (i.prototype.loaded = function () {
        var t = this.getDuration();
        if (
          ((this.oneSecondInPercentage = 100 / t),
          (t = Math.floor(t)),
          void 0 !== this.editor)
        ) {
          var e = $("interactions", this.editor.field.fields),
            n = $("duration", e.field.fields).fields;
          (n[0].max = n[1].max = t), (n[0].min = n[1].min = 0);
          for (
            var o = $("adaptivity", e.field.fields).fields, r = 0;
            r < o.length;
            r++
          )
            o[r].fields && ($("seekTo", o[r].fields).max = t);
        }
        if (this.hasMainSummary()) {
          var s = t - this.options.summary.displayAt;
          s < 0 && (s = 0),
            void 0 === this.options.assets.interactions &&
              (this.options.assets.interactions = []),
            this.options.assets.interactions.push({
              action: this.options.summary.task,
              x: 80,
              y: 80,
              duration: { from: s, to: t },
              displayType: "button",
              bigDialog: !0,
              className: "h5p-summary-interaction h5p-end-summary",
              label: "<p>" + this.l10n.summary + "</p>",
              mainSummary: !0,
            }),
            this.initInteraction(this.options.assets.interactions.length - 1);
        }
        this.currentState === i.ATTACHED &&
          (this.video.pressToPlay || this.addControls(),
          this.trigger("resize")),
          (this.currentState = i.LOADED);
      }),
      (i.prototype.initInteraction = function (t) {
        var e = this,
          n = e.options.assets.interactions[t];
        if (e.override) {
          var o = {};
          n.adaptivity &&
            n.adaptivity.requireCompletion &&
            (o.enableRetry = !0),
            H5P.jQuery.extend(n.action.params.behaviour, e.override, o);
        }
        var i;
        void 0 !== e.previousState &&
          void 0 !== e.previousState.answers &&
          null !== e.previousState.answers[t] &&
          (i = e.previousState.answers[t]);
        var r = new p.default(n, e, i);
        return (
          r.on("display", function (t) {
            var n = t.data;
            n.appendTo(e.$overlay), r.repositionToWrapper(e.$videoWrapper);
            var o = void 0 !== e.video.pressToPlay;
            w(o ? 100 : null, function () {
              (e.currentState === H5P.Video.PLAYING ||
                e.currentState === H5P.Video.BUFFERING) &&
                r.pause() &&
                (e.focusInteraction || (e.focusInteraction = r),
                e.video.pause());
            }),
              e.seekingTo && ((e.seekingTo = void 0), n.focus()),
              setTimeout(function () {
                r.positionLabel(e.$videoWrapper.width());
              }, 0),
              e.toggleEndscreen(!1);
          }),
          r.on("hide", function () {
            e.handleAnswered();
          }),
          r.on("xAPI", function (t) {
            var n = t.getVerb();
            "interacted" === n &&
              this.setProgress(p.default.PROGRESS_INTERACTED),
              -1 !== k.inArray(n, ["completed", "answered"]) &&
                t.setVerb("answered"),
              void 0 === t.data.statement.context.extensions &&
                (t.data.statement.context.extensions = {}),
              (t.data.statement.context.extensions[
                "http://id.tincanapi.com/extension/ending-point"
              ] = "PT" + Math.floor(e.video.getCurrentTime()) + "S");
          }),
          e.interactions.push(r),
          r
        );
      }),
      (i.prototype.handleAnswered = function () {
        var t = this;
        t.interactions.forEach(function (e) {
          e.getProgress() === p.default.PROGRESS_INTERACTED &&
            (e.setProgress(p.default.PROGRESS_ANSWERED),
            e.$menuitem.addClass("h5p-interaction-answered"),
            t.hasStar &&
              (t.playStarAnimation(),
              t.playBubbleAnimation(
                t.l10n.answered.replace(
                  "@answered",
                  "<strong>" + t.getAnsweredTotal() + "</strong>"
                )
              ),
              t.endscreen.update(t.interactions)));
        });
      }),
      (i.prototype.getAnsweredTotal = function () {
        return this.interactions.filter(function (t) {
          return t.getProgress() === p.default.PROGRESS_ANSWERED;
        }).length;
      }),
      (i.prototype.hasMainSummary = function () {
        var t = this.options.summary;
        return !(
          void 0 === t ||
          void 0 === t.displayAt ||
          void 0 === t.task ||
          void 0 === t.task.params ||
          void 0 === t.task.params.summaries ||
          !t.task.params.summaries.length ||
          void 0 === t.task.params.summaries[0].summary ||
          !t.task.params.summaries[0].summary.length
        );
      }),
      (i.prototype.addSliderInteractions = function () {
        var t = this,
          e = this;
        this.controls.$interactionsContainer.children().remove(),
          H5P.jQuery
            .extend([], this.interactions)
            .sort(function (t, e) {
              return t.getDuration().from - e.getDuration().from;
            })
            .forEach(function (n) {
              var o = n.addDot();
              e.menuitems.push(o),
                void 0 === e.previousState &&
                  e.interactionsProgress.push(void 0),
                e.interactionsProgress[e.menuitems.length - 1] ===
                  p.default.PROGRESS_ANSWERED &&
                  (n.setProgress(
                    e.interactionsProgress[e.menuitems.length - 1]
                  ),
                  o.addClass("h5p-interaction-answered")),
                void 0 !== o &&
                  (o.appendTo(t.controls.$interactionsContainer),
                  t.preventSkipping ||
                    t.interactionKeyboardControls.addElement(o.get(0)));
            });
      }),
      (i.prototype.closePopupMenus = function (t) {
        this.popupMenuButtons.forEach(function (e) {
          void 0 !== e &&
            e !== t &&
            void 0 === e.attr("aria-disabled") &&
            "true" === e.attr("aria-expanded") &&
            e.click();
        });
      }),
      (i.prototype.displayBookmarks = function () {
        return (
          this.options.assets.bookmarks &&
          this.options.assets.bookmarks.length &&
          !this.preventSkipping
        );
      }),
      (i.prototype.addBookmarks = function () {
        if (
          ((this.bookmarksMap = {}),
          void 0 !== this.options.assets.bookmarks && !this.preventSkipping)
        )
          for (var t = 0; t < this.options.assets.bookmarks.length; t++)
            this.addBookmark(t);
      }),
      (i.prototype.addEndscreenMarkers = function () {
        if (
          ((this.endscreensMap = {}), void 0 !== this.options.assets.endscreens)
        )
          for (var t = 0; t < this.options.assets.endscreens.length; t++)
            this.addEndscreen(t);
        this.editor &&
          this.editor.freshVideo &&
          (this.endscreensMap[this.getDuration()] ||
            this.editor.addEndscreen(this.getDuration(), !0));
      }),
      (i.prototype.addBubbles = function () {
        var t = this;
        !this.editor &&
          this.hasStar &&
          ((this.bubbleScore = new b.default(this.$star)),
          (this.endscreen = new y.default(this, {
            l10n: {
              title: this.l10n.endcardTitle,
              information: this.l10n.endcardInformation,
              informationNoAnswers: this.l10n.endcardInformationNoAnswers,
              informationMustHaveAnswer:
                this.l10n.endcardInformationMustHaveAnswer,
              submitButton: this.l10n.endcardSubmitButton,
              submitMessage: this.l10n.endcardSubmitMessage,
              tableRowAnswered: this.l10n.endcardTableRowAnswered,
              tableRowScore: this.l10n.endcardTableRowScore,
              answeredScore: this.l10n.endcardAnsweredScore,
              tableRowSummary: this.l10n.endCardTableRowSummary,
              tableRowSummaryWithoutScore:
                this.l10n.endCardTableRowSummaryWithoutScore,
            },
          })),
          this.endscreen.update(this.interactions),
          (this.bubbleEndscreen = new b.default(this.$star, {
            content: this.endscreen.getDOM(),
            focus: function () {
              return t.endscreen.focus();
            },
            maxWidth: "auto",
            style: "h5p-interactive-video-bubble-endscreen",
            mode: "full",
          })));
      }),
      (i.prototype.toggleBookmarksChooser = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { keepStopped: !1, firstPlay: !1 };
        if (this.controls.$bookmarksButton) {
          t =
            void 0 === t
              ? !this.controls.$bookmarksChooser.hasClass("h5p-show")
              : t;
          var n = this.controls.$bookmarksChooser.hasClass("h5p-show");
          this.controls.$minimalOverlay.toggleClass("h5p-show", t),
            this.controls.$minimalOverlay
              .find(".h5p-minimal-button")
              .toggleClass("h5p-hide", t),
            this.controls.$bookmarksButton.attr("aria-expanded", !!t && "true"),
            this.controls.$more.attr("aria-expanded", t ? "true" : "false"),
            this.controls.$bookmarksChooser
              .css({ maxHeight: t ? this.controlsCss.maxHeight : "32px" })
              .toggleClass("h5p-show", t)
              .toggleClass("h5p-transitioning", t || n);
        }
        t
          ? (this.closePopupMenus(this.controls.$bookmarksButton),
            this.controls.$bookmarksChooser
              .find('[tabindex="0"]')
              .first()
              .focus(),
            this.editor &&
              (this.interruptVideo(),
              this.updateChooserTime(
                this.controls.$bookmarksChooser,
                ".h5p-add-bookmark"
              )))
          : e.firstPlay ||
            (this.editor && !e.keepStopped && this.resumeVideo(),
            this.controls.$bookmarksChooser.hasClass("h5p-show") ||
              this.controls.$bookmarksButton.focus());
      }),
      (i.prototype.toggleEndscreensChooser = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { keepStopped: !1, firstPlay: !1 };
        if (this.editor && this.controls.$endscreensButton) {
          t =
            void 0 === t
              ? !this.controls.$endscreensChooser.hasClass("h5p-show")
              : t;
          var n = this.controls.$endscreensChooser.hasClass("h5p-show");
          this.controls.$minimalOverlay.toggleClass("h5p-show", t),
            this.controls.$minimalOverlay
              .find(".h5p-minimal-button")
              .toggleClass("h5p-hide", t),
            this.controls.$endscreensButton
              .attr("aria-expanded", t ? "true" : "false")
              .toggleClass("h5p-star-active-editor", t),
            this.controls.$more.attr("aria-expanded", t ? "true" : "false");
          var o =
            -10 +
            Math.min(
              0,
              this.$container.outerWidth() -
                this.controls.$endscreensChooser.parent().offset().left -
                this.controls.$endscreensChooser.outerWidth()
            ) +
            "px";
          this.controls.$endscreensChooser
            .css({ maxHeight: t ? this.controlsCss.maxHeight : "32px" })
            .css({ left: o })
            .toggleClass("h5p-show", t)
            .toggleClass("h5p-transitioning", t || n);
        }
        t
          ? (this.closePopupMenus(this.controls.$endscreensButton),
            this.editor &&
              (this.interruptVideo(),
              this.updateChooserTime(
                this.controls.$endscreensChooser,
                ".h5p-add-endscreen"
              )),
            this.controls.$endscreensChooser
              .find('[tabindex="0"]')
              .first()
              .focus())
          : e.firstPlay ||
            (this.editor && !e.keepStopped && this.resumeVideo(),
            this.controls.$endscreensChooser.hasClass("h5p-show") ||
              this.controls.$endscreensButton.focus());
      }),
      (i.prototype.updateChooserTime = function (t, e) {
        var n = t.find(e);
        n.html(
          n
            .data("default")
            .replace("@timecode", i.humanizeTime(this.video.getCurrentTime()))
        );
      }),
      (i.prototype.interruptVideo = function () {
        this.currentState === H5P.Video.PLAYING &&
          ((this.interruptedTemporarily = !0), this.video.pause());
      }),
      (i.prototype.resumeVideo = function (t) {
        if (!t) {
          if (!this.interruptedTemporarily) return;
          if (
            this.popupMenuChoosers.some(function (t) {
              return t.hasClass("h5p-show");
            })
          )
            return;
        }
        (this.interruptedTemporarily = !1), this.video.play();
      }),
      (i.prototype.toggleEndscreen = function (t) {
        !this.editor &&
          this.hasStar &&
          t !== this.bubbleEndscreen.isActive() &&
          ((t = void 0 === t ? !this.bubbleEndscreen.isActive() : t),
          t
            ? (this.disableTabIndexes(".h5p-interactive-video-endscreen"),
              (this.stateBeforeEndscreen = this.currentState),
              this.video.pause())
            : (this.restoreTabIndexes(),
              this.controls.$endscreensButton.focus(),
              this.stateBeforeEndscreen === H5P.Video.PLAYING &&
                (this.video.play(), (this.stateBeforeEndscreen = void 0))),
          this.controls.$endscreensButton.toggleClass("h5p-star-active", t),
          this.bubbleEndscreen.toggle(t, !0));
      }),
      (i.prototype.showPreventSkippingMessage = function (t) {
        var e = this;
        e.preventSkippingWarningTimeout ||
          (e.$preventSkippingMessage ||
            ((e.$preventSkippingMessage = k("<div>", {
              class: "h5p-prevent-skipping-message",
              appendTo: e.controls.$bookmarksContainer,
            })),
            (e.$preventSkippingMessage = k("<div>", {
              class: "h5p-prevent-skipping-message",
              appendTo: e.controls.$endscreensContainer,
            })),
            (e.$preventSkippingMessageText = k("<div>", {
              class: "h5p-prevent-skipping-message-text",
              html: e.l10n.navDisabled,
              appendTo: e.$preventSkippingMessage,
            })),
            (e.$preventSkippingMessageTextA11y = k("<div>", {
              class: "hidden-but-read",
              html: e.l10n.navDisabled,
              appendTo: e.controls.$slider,
            }))),
          e.$preventSkippingMessage.css("left", t),
          setTimeout(function () {
            e.$preventSkippingMessage
              .addClass("h5p-show")
              .attr("aria-hidden", "false");
          }, 0),
          (e.preventSkippingWarningTimeout = setTimeout(function () {
            e.$preventSkippingMessage
              .removeClass("h5p-show")
              .attr("aria-hidden", "true"),
              setTimeout(function () {
                e.preventSkippingWarningTimeout = void 0;
              }, 500);
          }, 2e3)));
      }),
      (i.prototype.onBookmarkSelect = function (t, e) {
        var n = this;
        n.currentState !== H5P.Video.PLAYING &&
          (t.mouseover().mouseout(),
          setTimeout(function () {
            n.timeUpdate(n.video.getCurrentTime());
          }, 0)),
          "true" === n.controls.$more.attr("aria-expanded") &&
          n.$container.hasClass("h5p-minimal")
            ? n.controls.$more.click()
            : n.toggleBookmarksChooser(!1),
          n.video.play(),
          n.seek(e.time);
        var o = i.formatTimeForA11y(e.time, n.l10n);
        setTimeout(function () {
          return n.read(n.l10n.currentTime + " " + o);
        }, 150);
      }),
      (i.prototype.onEndscreenSelect = function (t, e) {
        var n = this;
        n.currentState !== H5P.Video.PLAYING &&
          (t.mouseover().mouseout(),
          setTimeout(function () {
            n.timeUpdate(n.video.getCurrentTime());
          }, 0)),
          "true" === n.controls.$more.attr("aria-expanded") &&
          n.$container.hasClass("h5p-minimal")
            ? n.controls.$more.click()
            : n.toggleEndscreensChooser(!1),
          n.video.play(),
          n.seek(e.time);
        var o = i.formatTimeForA11y(e.time, n.l10n);
        setTimeout(function () {
          return n.read(n.l10n.currentTime + " " + o);
        }, 150);
      }),
      (i.prototype.addBookmark = function (t, e) {
        var n = this,
          o = n.options.assets.bookmarks[t];
        void 0 === e && (e = Math.floor(10 * o.time) / 10);
        var i = (n.bookmarksMap[e] = k(
          '<div class="h5p-bookmark" style="left:' +
            o.time * n.oneSecondInPercentage +
            '%"><div class="h5p-bookmark-label"><div class="h5p-bookmark-text">' +
            o.label +
            "</div></div></div>"
        )
          .appendTo(n.controls.$bookmarksContainer)
          .data("id", t)
          .hover(
            function () {
              void 0 !== n.bookmarkTimeout && clearTimeout(n.bookmarkTimeout),
                n.controls.$bookmarksContainer
                  .children(".h5p-show")
                  .removeClass("h5p-show"),
                i.addClass("h5p-show");
            },
            function () {
              n.bookmarkTimeout = setTimeout(
                function () {
                  i.removeClass("h5p-show");
                },
                n.editor ? 1e3 : 2e3
              );
            }
          ));
        i
          .find(".h5p-bookmark-label")
          .css(
            "maxWidth",
            parseInt(n.controls.$slider.parent().css("marginRight")) - 35
          ),
          void 0 === n.controls.$bookmarksList &&
            (n.controls.$bookmarksList = k('<ul role="menu"></ul>').insertAfter(
              n.controls.$bookmarksChooser.find("h3")
            ));
        var r = k(
          '<li role="menuitem" aria-describedby="' +
            n.bookmarksMenuId +
            '">' +
            o.label +
            "</li>"
        )
          .click(function () {
            return n.onBookmarkSelect(i, o);
          })
          .keydown(function (t) {
            (0, d.isSpaceOrEnterKey)(t) && n.onBookmarkSelect(i, o),
              t.stopPropagation();
          });
        n.bookmarkMenuKeyboardControls.addElement(r.get(0));
        var s = n.controls.$bookmarksList.children(":eq(" + t + ")");
        return (
          0 !== s.length
            ? r.insertBefore(s)
            : r.appendTo(n.controls.$bookmarksList),
          n.on("bookmarksChanged", function (o) {
            var s = o.data.index,
              a = o.data.number;
            s === t && a < 0
              ? (r.remove(), delete n.bookmarksMap[e])
              : t >= s && ((t += a), i.data("id", t));
          }),
          n.trigger("bookmarkAdded", { bookmark: i }),
          i
        );
      }),
      (i.prototype.addEndscreen = function (t, e) {
        if (void 0 !== this.parent) return !1;
        var n = this,
          o = n.options.assets.endscreens[t];
        void 0 === e && (e = Math.floor(10 * o.time) / 10);
        var i;
        if (!this.editor)
          return (
            n.getDuration() - e < 1 && (e = n.getDuration()),
            void (i = n.endscreensMap[e] = !0)
          );
        (i = n.endscreensMap[e] =
          k(
            '<div class="h5p-endscreen" style="left:' +
              o.time * n.oneSecondInPercentage +
              '%"><div class="h5p-endscreen-label"><div class="h5p-endscreen-text">' +
              o.label +
              "</div></div></div>"
          )
            .appendTo(n.controls.$endscreensContainer)
            .data("id", t)
            .hover(
              function () {
                void 0 !== n.endscreenTimeout &&
                  clearTimeout(n.endscreenTimeout),
                  n.controls.$endscreensContainer
                    .children(".h5p-show")
                    .removeClass("h5p-show"),
                  i.addClass("h5p-show");
              },
              function () {
                n.endscreenTimeout = setTimeout(
                  function () {
                    i.removeClass("h5p-show");
                  },
                  n.editor ? 1e3 : 2e3
                );
              }
            )),
          n.editor &&
            (n.endscreenTimeout = setTimeout(function () {
              i.removeClass("h5p-show");
            }, 1e3)),
          i
            .find(".h5p-endscreen-label")
            .css(
              "maxWidth",
              parseInt(n.controls.$slider.parent().css("marginRight")) - 35
            ),
          void 0 === n.controls.$endscreensList &&
            (n.controls.$endscreensList = k(
              '<ul role="menu"></ul>'
            ).insertAfter(n.controls.$endscreensChooser.find("h3")));
        var r = k(
          '<li role="menuitem" aria-describedby="' +
            n.endscreensMenuId +
            '">' +
            o.label +
            "</li>"
        )
          .click(function () {
            return n.onEndscreenSelect(i, o);
          })
          .keydown(function (t) {
            (0, d.isSpaceOrEnterKey)(t) && n.onEndscreenSelect(i, o),
              t.stopPropagation();
          });
        n.endscreenMenuKeyboardControls.addElement(r.get(0));
        var s = n.controls.$endscreensList.children(":eq(" + t + ")");
        return (
          0 !== s.length
            ? r.insertBefore(s)
            : r.appendTo(n.controls.$endscreensList),
          n.on("endscreensChanged", function (o) {
            var s = o.data.index,
              a = o.data.number;
            s === t && a < 0
              ? (r.remove(), delete n.endscreensMap[e])
              : t >= s && ((t += a), i.data("id", t));
          }),
          n.trigger("endscreenAdded", { endscreen: i }),
          i
        );
      }),
      (i.prototype.attachControls = function (t) {
        var e = this,
          n = k("<div/>", { class: "h5p-controls-left", appendTo: t }),
          o = k("<div/>", { class: "h5p-control h5p-slider", appendTo: t });
        e.hasStar &&
          ((e.$star = k("<div/>", {
            class: "h5p-control h5p-star",
            appendTo: t,
          })),
          (e.$starBar = k("<div/>", {
            class: "h5p-control h5p-star h5p-star-bar",
            appendTo: e.$star,
          })),
          k("<div/>", {
            class: "h5p-control h5p-star h5p-star-background",
            appendTo: e.$star,
          }),
          (e.$starAnimation = k("<div/>", {
            class:
              "h5p-control h5p-star h5p-star-animation h5p-star-animation-inactive",
            appendTo: e.$star,
          })));
        var r = k("<div/>", { class: "h5p-controls-right", appendTo: t });
        e.preventSkipping && e.setDisabled(o),
          (e.controls = {}),
          (e.controls.$play = e.createButton(
            "play",
            "h5p-control h5p-pause",
            n,
            e.togglePlayPause
          )),
          e.showRewind10 &&
            (e.controls.$rewind10 = e.createButton(
              "rewind10",
              "h5p-control",
              n,
              function () {
                if (e.video.getCurrentTime() > 0) {
                  var t = Math.max(e.video.getCurrentTime() - 10, 0);
                  e.seek(t),
                    e.currentState === H5P.Video.PAUSED && e.timeUpdate(t),
                    e.currentState === H5P.Video.ENDED && e.video.play();
                }
              }
            ));
        var s = function () {
            var t =
              e.$container.hasClass("h5p-minimal") &&
              "true" === e.controls.$more.attr("aria-expanded");
            return t && e.controls.$more.click(), t;
          },
          a = function (t, n) {
            return function () {
              var o = e.controls[t],
                i = e.controls[n],
                r = "true" === o.attr("aria-disabled"),
                a = "true" === o.attr("aria-expanded");
              r ||
                (a
                  ? (o.attr("aria-expanded", "false"),
                    i.hasClass("h5p-show") || o.focus(),
                    i.removeClass("h5p-show"),
                    s(),
                    e.resumeVideo())
                  : (o.attr("aria-expanded", "true"),
                    i.addClass("h5p-show"),
                    i.find('[tabindex="0"]').focus(),
                    e.closePopupMenus(o)));
            };
          },
          c = e.editor || e.displayBookmarks();
        if (
          (c &&
            ((e.controls.$bookmarksChooser = H5P.jQuery("<div/>", {
              class: "h5p-chooser h5p-bookmarks",
              role: "dialog",
              html:
                '<h3 id="' +
                e.bookmarksMenuId +
                '">' +
                e.l10n.bookmarks +
                "</h3>",
            })),
            e.popupMenuChoosers.push(e.controls.$bookmarksChooser),
            e.controls.$bookmarksChooser.append(
              k("<span>", {
                role: "button",
                class: "h5p-chooser-close-button",
                tabindex: "0",
                "aria-label": e.l10n.close,
                click: function () {
                  return e.toggleBookmarksChooser();
                },
                keydown: function (t) {
                  (0, d.isSpaceOrEnterKey)(t) &&
                    (e.toggleBookmarksChooser(), t.preventDefault());
                },
              })
            ),
            e.showRewind10 &&
              e.controls.$bookmarksChooser.addClass("h5p-rewind-displacement"),
            (e.controls.$bookmarksButton = e.createButton(
              "bookmarks",
              "h5p-control",
              n,
              function () {
                e.toggleBookmarksChooser();
              }
            )),
            e.controls.$bookmarksButton.attr("aria-haspopup", "true"),
            e.controls.$bookmarksButton.attr("aria-expanded", "false"),
            e.controls.$bookmarksChooser.insertAfter(
              e.controls.$bookmarksButton
            ),
            e.controls.$bookmarksChooser.bind("transitionend", function () {
              e.controls.$bookmarksChooser.removeClass("h5p-transitioning");
            }),
            e.popupMenuButtons.push(e.controls.$bookmarksButton)),
          e.hasStar)
        ) {
          var h = e.editor
              ? "star h5p-star-foreground-editor"
              : "star h5p-star-foreground",
            p = e.editor
              ? function () {
                  return e.toggleEndscreensChooser();
                }
              : function () {
                  return e.toggleEndscreen();
                };
          (e.controls.$endscreensButton = e.createButton(
            h,
            "h5p-control",
            e.$star,
            p
          )),
            e.controls.$endscreensButton.attr("aria-label", e.l10n.summary),
            e.popupMenuButtons.push(e.controls.$endscreensButton);
        }
        e.editor &&
          ((e.controls.$endscreensChooser = H5P.jQuery("<div/>", {
            class: "h5p-chooser h5p-endscreens",
            role: "dialog",
            html:
              '<h3 id="' +
              e.endscreensMenuId +
              '">' +
              e.l10n.endscreens +
              "</h3>",
          })),
          e.popupMenuChoosers.push(e.controls.$endscreensChooser),
          e.controls.$endscreensChooser.append(
            k("<span>", {
              role: "button",
              class: "h5p-chooser-close-button",
              tabindex: "0",
              "aria-label": e.l10n.close,
              click: function () {
                return e.toggleEndscreensChooser();
              },
              keydown: function (t) {
                (0, d.isSpaceOrEnterKey)(t) &&
                  (e.toggleEndscreensChooser(), t.preventDefault());
              },
            })
          ),
          e.hasStar &&
            (e.controls.$endscreensButton
              .attr("aria-haspopup", "true")
              .attr("aria-expanded", "false"),
            e.controls.$endscreensChooser
              .insertAfter(e.controls.$endscreensButton)
              .bind("transitionend", function () {
                e.controls.$endscreensChooser.removeClass("h5p-transitioning");
              })));
        var f =
            '<time class="h5p-current">\n      <span class="hidden-but-read"></span>\n      <span class="human-time" aria-hidden="true">0:00</span>\n    </time>',
          v = k(
            '<div class="h5p-control h5p-simple-time">' + f + "</div>"
          ).appendTo(n);
        (e.controls.$currentTimeSimple = v.find(".human-time")),
          (e.controls.$currentTimeA11ySimple = v.find(".hidden-but-read"));
        var m = i.formatTimeForA11y(0, e.l10n),
          b = k(
            '<div class="h5p-control h5p-time">\n    ' +
              f +
              '\n    <span aria-hidden="true"> / </span>\n    <time class="h5p-total">\n      <span class="hidden-but-read">' +
              e.l10n.totalTime +
              " " +
              m +
              '</span>\n      <span class="human-time" aria-hidden="true">0:00</span>\n    </time>\n  </div>'
          ).appendTo(r),
          g = b.find(".h5p-current");
        (e.controls.$currentTime = g.find(".human-time")),
          (e.controls.$currentTimeA11y = g.find(".hidden-but-read")),
          (e.controls.$totalTime = b.find(".h5p-total")),
          e.updateCurrentTime(0);
        var y = function () {
          e.controls.$minimalOverlay.removeClass("h5p-show"),
            e.controls.$more.attr("aria-expanded", "false"),
            e.controls.$more.focus(),
            setTimeout(function () {
              e.controls.$overlayButtons.removeClass("h5p-hide");
            }, 150);
        };
        (e.controls.$more = e.createButton(
          "more",
          "h5p-control",
          r,
          function () {
            "true" === e.controls.$more.attr("aria-expanded")
              ? y()
              : (e.controls.$minimalOverlay.addClass("h5p-show"),
                e.controls.$more.attr("aria-expanded", "true"),
                e.removeSplash(),
                setTimeout(function () {
                  e.controls.$minimalOverlay.find('[tabindex="0"]').focus();
                }, 150)),
              e.closePopupMenus();
          }
        )),
          (e.controls.$playbackRateChooser = H5P.jQuery("<div/>", {
            class: "h5p-chooser h5p-playbackRate",
            role: "dialog",
            html:
              '<h3 id="' +
              e.playbackRateMenuId +
              '">' +
              e.l10n.playbackRate +
              "</h3>",
          })),
          e.popupMenuChoosers.push(e.controls.$playbackRateChooser);
        var S = function () {
          e.isMinimal
            ? e.controls.$more.click()
            : e.controls.$playbackRateButton.click(),
            e.resumeVideo();
        };
        e.controls.$playbackRateChooser.append(
          k("<span>", {
            role: "button",
            class: "h5p-chooser-close-button",
            tabindex: "0",
            "aria-label": e.l10n.close,
            click: function () {
              return S();
            },
            keydown: function (t) {
              (0, d.isSpaceOrEnterKey)(t) && (S(), t.preventDefault());
            },
          })
        ),
          (e.controls.$playbackRateButton = e.createButton(
            "playbackRate",
            "h5p-control",
            r,
            a("$playbackRateButton", "$playbackRateChooser")
          )),
          e.popupMenuButtons.push(e.controls.$playbackRateButton),
          e.setDisabled(e.controls.$playbackRateButton),
          e.controls.$playbackRateButton.attr("aria-haspopup", "true"),
          e.controls.$playbackRateButton.attr("aria-expanded", "false"),
          e.controls.$playbackRateChooser.insertAfter(
            e.controls.$playbackRateButton
          ),
          (function () {
            return -1 !== navigator.userAgent.indexOf("Android");
          })() ||
            (function () {
              return -1 !== navigator.userAgent.indexOf("iPad");
            })() ||
            ((e.controls.$volume = e.createButton(
              "mute",
              "h5p-control",
              r,
              e.toggleMute
            )),
            e.deactivateSound &&
              (e.controls.$volume
                .addClass("h5p-muted")
                .attr("aria-label", e.l10n.sndDisabled),
              e.setDisabled(e.controls.$volume))),
          e.deactivateSound && e.video.mute(),
          e.video.isMuted() &&
            e.controls.$volume
              .addClass("h5p-muted")
              .attr("aria-label", e.l10n.sndDisabled),
          (e.controls.$qualityChooser = H5P.jQuery("<div/>", {
            class: "h5p-chooser h5p-quality",
            role: "dialog",
            html:
              '<h3 id="' + e.qualityMenuId + '">' + e.l10n.quality + "</h3>",
          })),
          e.popupMenuChoosers.push(e.controls.$qualityChooser);
        var $ = function () {
          e.isMinimal
            ? e.controls.$more.click()
            : e.controls.$qualityButton.click(),
            e.resumeVideo();
        };
        e.controls.$qualityChooser.append(
          k("<span>", {
            role: "button",
            class: "h5p-chooser-close-button",
            tabindex: "0",
            "aria-label": e.l10n.close,
            click: function () {
              return $();
            },
            keydown: function (t) {
              (0, d.isSpaceOrEnterKey)(t) && ($(), t.preventDefault());
            },
          })
        ),
          (e.controls.$qualityButton = e.createButton(
            "quality",
            "h5p-control",
            r,
            a("$qualityButton", "$qualityChooser")
          )),
          e.popupMenuButtons.push(e.controls.$qualityButton),
          e.setDisabled(e.controls.$qualityButton),
          e.controls.$qualityButton.attr("aria-haspopup", "true"),
          e.controls.$qualityButton.attr("aria-expanded", "false"),
          e.controls.$qualityChooser.insertAfter(e.controls.$qualityButton),
          e.editor ||
            !1 === H5P.fullscreenSupported ||
            (e.controls.$fullscreen = e.createButton(
              "fullscreen",
              "h5p-control",
              r,
              function () {
                e.toggleFullScreen();
              }
            )),
          (e.controls.$minimalOverlay = H5P.jQuery("<div/>", {
            class: "h5p-minimal-overlay",
            appendTo: e.$container,
          }));
        var w = H5P.jQuery("<div/>", {
          role: "menu",
          class: "h5p-minimal-wrap",
          appendTo: e.controls.$minimalOverlay,
        });
        (e.minimalMenuKeyboardControls = new l.default([new u.default()])),
          e.minimalMenuKeyboardControls.on("close", function () {
            return y();
          }),
          (e.controls.$overlayButtons = H5P.jQuery([])),
          c &&
            ((e.controls.$bookmarkButtonMinimal = e.createButton(
              "bookmarks",
              "h5p-minimal-button",
              w,
              function () {
                e.controls.$overlayButtons.addClass("h5p-hide"),
                  e.toggleBookmarksChooser(!0);
              },
              !0
            )),
            e.controls.$bookmarkButtonMinimal.attr("role", "menuitem"),
            e.controls.$bookmarkButtonMinimal.attr("tabindex", "-1"),
            (e.controls.$overlayButtons = e.controls.$overlayButtons.add(
              e.controls.$bookmarkButtonMinimal
            )),
            e.minimalMenuKeyboardControls.addElement(
              e.controls.$bookmarkButtonMinimal.get(0)
            )),
          (e.controls.$qualityButtonMinimal = e.createButton(
            "quality",
            "h5p-minimal-button",
            w,
            function () {
              e.isDisabled(e.controls.$qualityButton) ||
                (e.controls.$overlayButtons.addClass("h5p-hide"),
                e.controls.$qualityButton.click());
            },
            !0
          )),
          e.setDisabled(e.controls.$qualityButtonMinimal),
          e.controls.$qualityButtonMinimal.attr("role", "menuitem"),
          (e.controls.$overlayButtons = e.controls.$overlayButtons.add(
            e.controls.$qualityButtonMinimal
          )),
          e.minimalMenuKeyboardControls.addElement(
            e.controls.$qualityButtonMinimal.get(0)
          ),
          (e.controls.$playbackRateButtonMinimal = e.createButton(
            "playbackRate",
            "h5p-minimal-button",
            w,
            function () {
              e.isDisabled(e.controls.$playbackRateButton) ||
                (e.controls.$overlayButtons.addClass("h5p-hide"),
                e.controls.$playbackRateButton.click());
            },
            !0
          )),
          e.controls.$playbackRateButtonMinimal.attr("role", "menuitem"),
          e.setDisabled(e.controls.$playbackRateButtonMinimal),
          (e.controls.$overlayButtons = e.controls.$overlayButtons.add(
            e.controls.$playbackRateButtonMinimal
          )),
          e.minimalMenuKeyboardControls.addElement(
            e.controls.$playbackRateButtonMinimal.get(0)
          ),
          e.addQualityChooser(),
          e.addPlaybackRateChooser(),
          (e.interactionKeyboardControls = new l.default([new u.default()])),
          (e.controls.$interactionsContainer = k("<div/>", {
            role: "menu",
            class: "h5p-interactions-container",
            "aria-label": e.l10n.interaction,
          })),
          (e.controls.$bookmarksContainer = k("<div/>", {
            class: "h5p-bookmarks-container",
            appendTo: o,
          })),
          (e.controls.$endscreensContainer = k("<div/>", {
            class: "h5p-endscreens-container",
            appendTo: o,
          })),
          (e.hasPlayPromise = !1),
          (e.hasQueuedPause = !1),
          (e.delayed = !1),
          (e.controls.$slider = k("<div/>", { appendTo: o }).slider({
            value: 0,
            step: 0.01,
            orientation: "horizontal",
            range: "min",
            max: 0,
            create: function (t) {
              var n = k(t.target).find(".ui-slider-handle");
              n
                .attr("role", "slider")
                .attr("aria-valuemin", "0")
                .attr("aria-valuemax", e.getDuration().toString())
                .attr("aria-valuetext", i.formatTimeForA11y(0, e.l10n))
                .attr("aria-valuenow", "0"),
                e.preventSkipping &&
                  e.setDisabled(n).attr("aria-hidden", "true");
            },
            start: function () {
              e.currentState !== i.SEEKING &&
                (e.toggleEndscreen(!1),
                e.delayedState ||
                  (e.currentState === H5P.Video.ENDED
                    ? (e.lastState = H5P.Video.PLAYING)
                    : (e.currentState === H5P.Video.BUFFERING && e.lastState) ||
                      (e.lastState = e.currentState)),
                (e.delayedState = !0),
                clearTimeout(e.delayTimeout),
                (e.delayTimeout = setTimeout(function () {
                  e.delayedState = !1;
                }, 200)),
                e.hasPlayPromise ? (e.hasQueuedPause = !0) : e.video.pause(),
                (e.currentState = i.SEEKING),
                e.removeSplash(),
                e.$overlay.addClass("h5p-visible"));
            },
            slide: function (t, n) {
              var o = (0, d.isKey)(t, [d.Keys.ARROW_LEFT, d.Keys.ARROW_RIGHT]),
                i = n.value;
              if (o) {
                var r = (0, d.isKey)(t, [d.Keys.ARROW_RIGHT]),
                  s = e.getDuration();
                (i = r ? Math.min(i + 5, s) : Math.max(i - 5, 0)),
                  e.timeUpdate(i, !0);
              }
              return (
                e.seek(i), e.updateInteractions(i), e.updateCurrentTime(i), !o
              );
            },
            stop: function (t, n) {
              (e.currentState = e.lastState),
                e.seek(n.value),
                e.recreateCurrentInteractions();
              var o =
                e.lastState === H5P.Video.PLAYING ||
                e.lastState === H5P.Video.VIDEO_CUED ||
                e.hasQueuedPause;
              if (e.hasPlayPromise) e.hasQueuedPause = !1;
              else if (o) {
                e.hasQueuedPause = !1;
                var i = e.video.play();
                (e.hasQueuedPause = !1),
                  i && i.then
                    ? ((e.hasPlayPromise = !0),
                      i.then(function () {
                        setTimeout(function () {
                          (e.hasQueuedPause || e.hasActivePauseInteraction()) &&
                            e.video.pause(),
                            (e.hasPlayPromise = !1);
                        }, 0);
                      }))
                    : e.hasActivePauseInteraction() &&
                      (e.video.play(),
                      setTimeout(function () {
                        e.video.pause();
                      }, 50));
              } else e.timeUpdate(n.value);
              e.$overlay.removeClass("h5p-visible"),
                e.editor &&
                  (e.updateChooserTime(
                    e.controls.$bookmarksChooser,
                    ".h5p-add-bookmark"
                  ),
                  e.updateChooserTime(
                    e.controls.$endscreensChooser,
                    ".h5p-add-endscreen"
                  ));
            },
          })),
          e.controls.$interactionsContainer.appendTo(o),
          e.preventSkipping &&
            (e.controls.$slider.slider("disable"),
            e.controls.$slider.click(function (t) {
              return e.showPreventSkippingMessage(t.offsetX), !1;
            })),
          e.displayBookmarks() &&
            e.showBookmarksmenuOnLoad &&
            !1 === e.video.pressToPlay &&
            e.toggleBookmarksChooser(!0),
          (e.controls.$buffered = k("<div/>", {
            class: "h5p-buffered",
            prependTo: e.controls.$slider,
          }));
      }),
      (i.prototype.playStarAnimation = function () {
        var t = this;
        this.$starAnimation.hasClass("h5p-star-animation-inactive") &&
          (this.$starAnimation
            .removeClass("h5p-star-animation-inactive")
            .addClass("h5p-star-animation-active"),
          setTimeout(function () {
            t.$starAnimation
              .removeClass("h5p-star-animation-active")
              .addClass("h5p-star-animation-inactive");
          }, 1e3));
      }),
      (i.prototype.playBubbleAnimation = function (t) {
        this.bubbleScore.setContent(t), this.bubbleScore.animate();
      }),
      (i.prototype.hasActivePauseInteraction = function () {
        var t = !1;
        return (
          this.interactions.forEach(function (e) {
            e.getElement() && e.pause() && (t = !0);
          }),
          t
        );
      }),
      (i.prototype.createButton = function (t, e, n, o, i) {
        var r = this,
          s = {
            role: "button",
            tabindex: 0,
            class: (void 0 === e ? "" : e + " ") + "h5p-" + t,
            on: {
              click: function () {
                o.call(this);
              },
              keydown: function (t) {
                (0, d.isSpaceOrEnterKey)(t) &&
                  (o.call(this), t.preventDefault(), t.stopPropagation());
              },
            },
            appendTo: n,
          };
        return (
          (s[i ? "text" : "aria-label"] = r.l10n[t]), H5P.jQuery("<div/>", s)
        );
      }),
      (i.prototype.addQualityChooser = function () {
        var t = this;
        if (
          ((t.qualityMenuKeyboardControls = new l.default([new u.default()])),
          t.qualityMenuKeyboardControls.on("close", function () {
            return t.controls.$qualityButton.click();
          }),
          this.video.getQualities &&
            ((t.qualities = this.video.getQualities()),
            t.qualities &&
              void 0 !== this.controls.$qualityButton &&
              t.isDisabled(t.controls.$qualityButton)))
        ) {
          var e = this.video.getQuality(),
            n = t.qualities;
          "YouTube" === this.video.getHandlerName() &&
            (n = n.filter(function (t) {
              return t.name === e;
            }));
          for (var o = "", i = 0; i < n.length; i++) {
            var r = n[i],
              s = r.name === e;
            o +=
              '<li role="menuitemradio" data-quality="' +
              r.name +
              '" aria-checked="' +
              s +
              '" aria-describedby="' +
              t.qualityMenuId +
              '">' +
              r.label +
              "</li>";
          }
          var a = k('<ul role="menu">' + o + "</ul>").appendTo(
            this.controls.$qualityChooser
          );
          a.children()
            .click(function () {
              var e = k(this).attr("data-quality");
              t.updateQuality(e);
            })
            .keydown(function (e) {
              if ((0, d.isSpaceOrEnterKey)(e)) {
                var n = k(this).attr("data-quality");
                t.updateQuality(n);
              }
              e.stopPropagation();
            });
          a
            .find("li")
            .get()
            .forEach(function (e) {
              t.qualityMenuKeyboardControls.addElement(e);
              var n = "true" === e.getAttribute("aria-checked");
              S(e, n);
            }),
            t.removeDisabled(
              this.controls.$qualityButton.add(
                this.controls.$qualityButtonMinimal
              )
            );
        }
      }),
      (i.prototype.updateQuality = function (t) {
        var e = this;
        e.video.setQuality(t),
          "true" === e.controls.$more.attr("aria-expanded")
            ? e.controls.$more.click()
            : (e.controls.$qualityButton.click(),
              e.controls.$qualityButton.focus());
      }),
      (i.prototype.addPlaybackRateChooser = function () {
        var t = this,
          e = this;
        if (
          ((this.playbackRateMenuKeyboardControls = new l.default([
            new u.default(),
          ])),
          this.playbackRateMenuKeyboardControls.on("close", function () {
            return e.controls.$playbackRateButton.click();
          }),
          this.video.getPlaybackRates)
        ) {
          var n = this.video.getPlaybackRates();
          if (
            !(n.length < 2) &&
            n &&
            void 0 !== this.controls.$playbackRateButton &&
            e.isDisabled(this.controls.$playbackRateButton)
          ) {
            for (
              var o = this.video.getPlaybackRate(), i = "", r = 0;
              r < n.length;
              r++
            ) {
              var s = n[r];
              i +=
                '<li role="menuitemradio" playback-rate="' +
                s +
                '" aria-checked="' +
                (s === o) +
                '" aria-describedby="' +
                e.playbackRateMenuId +
                '">' +
                s +
                "</li>";
            }
            var a = k('<ul role="menu">' + i + "</ul>").appendTo(
              this.controls.$playbackRateChooser
            );
            a
              .children()
              .click(function () {
                var t = k(this).attr("playback-rate");
                e.updatePlaybackRate(t);
              })
              .keydown(function (t) {
                if ((0, d.isSpaceOrEnterKey)(t)) {
                  var n = k(this).attr("playback-rate");
                  e.updatePlaybackRate(n);
                }
                t.stopPropagation();
              }),
              a
                .find("li")
                .get()
                .forEach(function (e) {
                  t.playbackRateMenuKeyboardControls.addElement(e);
                  var n = "true" === e.getAttribute("aria-checked");
                  S(e, n);
                }),
              e.removeDisabled(
                this.controls.$playbackRateButton.add(
                  this.controls.$playbackRateButtonMinimal
                )
              );
          }
        }
      }),
      (i.prototype.updatePlaybackRate = function (t) {
        var e = this;
        e.video.setPlaybackRate(t),
          "true" === e.controls.$more.attr("aria-expanded")
            ? e.controls.$more.click()
            : e.controls.$playbackRateButton.click();
      }),
      (i.prototype.startUpdatingBufferBar = function () {
        var t = this;
        if (!t.bufferLoop) {
          !(function e() {
            var n = t.video.getBuffered();
            n &&
              t.controls.$buffered &&
              (t.controls.$buffered.css("width", n + "%"),
              t.hasStar &&
                (n > 99
                  ? t.$starBar.addClass("h5p-star-bar-buffered")
                  : t.$starBar.removeClass("h5p-star-bar-buffered"))),
              (t.bufferLoop = setTimeout(e, 500));
          })();
        }
      }),
      (i.prototype.resize = function () {
        if (this.$container) {
          var t =
            this.$container.hasClass("h5p-fullscreen") ||
            this.$container.hasClass("h5p-semi-fullscreen");
          this.$videoWrapper.css({
            marginTop: "",
            marginLeft: "",
            width: "",
            height: "",
          }),
            this.video.trigger("resize");
          var e,
            n,
            o = this.justVideo ? 0 : this.$controls.height(),
            i = this.$container.height();
          if (t) {
            if ((n = this.$videoWrapper.height()) + o <= i)
              this.$videoWrapper.css("marginTop", (i - o - n) / 2),
                (e = this.$videoWrapper.width()),
                void 0 !== this.bubbleEndscreen &&
                  this.bubbleEndscreen.fullscreen(!0, i, n);
            else {
              var r = this.$videoWrapper.width() / n,
                s = i - o;
              (e = s * r),
                this.$videoWrapper.css({
                  marginLeft: (this.$container.width() - e) / 2,
                  width: e,
                  height: s,
                }),
                void 0 !== this.bubbleEndscreen &&
                  this.bubbleEndscreen.fullscreen(!0);
            }
            this.video.trigger("resize");
          } else
            (e = this.$container.width()),
              void 0 !== this.bubbleEndscreen &&
                this.bubbleEndscreen.fullscreen();
          (this.scaledFontSize =
            e > this.width ? this.fontSize * (e / this.width) : this.fontSize),
            this.$container.css("fontSize", this.scaledFontSize + "px"),
            this.editor ||
              (e < this.width
                ? this.$container.hasClass("h5p-minimal") ||
                  this.$container.addClass("h5p-minimal")
                : this.$container.hasClass("h5p-minimal") &&
                  this.$container.removeClass("h5p-minimal")),
            (this.isMinimal = this.$container.hasClass("h5p-minimal"));
          var a = this.$videoWrapper.height();
          if (((this.controlsCss = { bottom: "", maxHeight: a + "px" }), t)) {
            var l = o;
            n + o <= i && (l = o + (i - o - n) / 2),
              (this.controlsCss.bottom = l + "px");
          }
          this.controls &&
            this.controls.$minimalOverlay &&
            this.controls.$minimalOverlay.css(this.controlsCss),
            this.$container.find(".h5p-chooser").css(this.controlsCss),
            this.editor
              ? this.editor.dnb &&
                this.editor.dnb.dnr.setContainerEm(this.scaledFontSize)
              : (this.resizeMobileView(),
                void 0 !== this.$splash && this.resizeStartScreen()),
            this.bubbleScore &&
              (this.bubbleScore.update(), this.bubbleEndscreen.update()),
            this.resizeInteractions();
        }
      }),
      (i.prototype.resizeMobileView = function () {
        if (!isNaN(this.currentState)) {
          if (
            this.$container.width() /
              parseInt(this.$container.css("font-size"), 10) <
            30
          ) {
            if ((this.resizeInteractions(), !this.isMobileView)) {
              if (
                (this.$container.addClass("mobile"),
                (this.isMobileView = !0),
                this.hasUncompletedRequiredInteractions())
              ) {
                var t = k(".h5p-dialog", this.$container);
                t.show();
              } else this.restoreTabIndexes(), this.dnb.dialog.closeOverlay();
              this.recreateCurrentInteractions();
            }
          } else if (this.isMobileView) {
            if (
              this.dnb &&
              this.dnb.dialog &&
              !this.hasUncompletedRequiredInteractions()
            ) {
              this.dnb.dialog.close(!0);
              var e = this.$container.find(".h5p-dialog .h5p-image img");
              e.css({ width: "", height: "" });
            }
            this.$container.removeClass("mobile"),
              (this.isMobileView = !1),
              this.recreateCurrentInteractions();
          }
        }
      }),
      (i.prototype.resizeInteractions = function () {
        if (!isNaN(this.currentState)) {
          var t = this;
          this.interactions.forEach(function (e) {
            e.resizeInteraction(),
              e.repositionToWrapper(t.$videoWrapper),
              e.positionLabel(t.$videoWrapper.width());
          });
        }
      }),
      (i.prototype.recreateCurrentInteractions = function () {
        void 0 !== this.dnb && this.dnb.blurAll(),
          this.interactions.forEach(function (t) {
            t.reCreateInteraction();
          });
      }),
      (i.prototype.resizeStartScreen = function () {
        var t = 50,
          e = !0,
          n = !0;
        (void 0 !== this.startScreenOptions.shortStartDescription &&
          this.startScreenOptions.shortStartDescription.length) ||
          ((e = !1),
          this.startScreenOptions.hideStartTitle && ((n = !1), (t = 45)));
        var o = k(".h5p-splash-description", this.$splash),
          i = k(".h5p-splash-title", this.$splash),
          r = o
            .clone()
            .css("position", "absolute")
            .addClass("minimum-font-size")
            .appendTo(o.parent()),
          s = i
            .clone()
            .css("position", "absolute")
            .addClass("minimum-font-size")
            .appendTo(i.parent()),
          a = parseInt(r.css("font-size"), 10),
          l = parseInt(s.css("font-size"), 10),
          c = this.$container.width(),
          u = parseInt(c / t, 10);
        e || (n && u < a ? (u = a) : u < 10 && (u = 10)),
          c < 510
            ? this.$splash.addClass("mobile")
            : this.$splash.removeClass("mobile"),
          0.8 * u < a
            ? o.addClass("minimum-font-size")
            : o.removeClass("minimum-font-size"),
          1.5 * u < l
            ? i.addClass("minimum-font-size")
            : i.removeClass("minimum-font-size"),
          this.$splash.css("font-size", u),
          r.remove(),
          s.remove();
      }),
      (i.prototype.toggleFullScreen = function () {
        var t = this;
        H5P.isFullscreen ||
        this.$container.hasClass("h5p-fullscreen") ||
        this.$container.hasClass("h5p-semi-fullscreen")
          ? void 0 !== H5P.exitFullScreen &&
            void 0 !== H5P.fullScreenBrowserPrefix
            ? H5P.exitFullScreen()
            : (void 0 === H5P.fullScreenBrowserPrefix
                ? k(".h5p-disable-fullscreen").click()
                : "" === H5P.fullScreenBrowserPrefix
                ? window.top.document.exitFullScreen()
                : "ms" === H5P.fullScreenBrowserPrefix
                ? window.top.document.msExitFullscreen()
                : window.top.document[
                    H5P.fullScreenBrowserPrefix + "CancelFullScreen"
                  ](),
              t.trigger("exitFullScreen"))
          : (H5P.fullScreen(this.$container, this),
            void 0 === H5P.exitFullScreen && t.trigger("enterFullScreen")),
          this.resizeInteractions();
      }),
      (i.prototype.timeUpdate = function (t, e) {
        var n = this;
        if (t >= 0)
          try {
            var o = n.controls.$slider.find(".ui-slider-handle"),
              r = i.formatTimeForA11y(t, n.l10n);
            n.controls.$slider.slider("option", "value", t),
              o.attr("aria-valuetext", r),
              o.attr("aria-valuenow", t.toString());
          } catch (t) {
            return;
          }
        n.updateInteractions(t),
          e ||
            setTimeout(function () {
              (n.currentState === H5P.Video.PLAYING ||
                (n.currentState === H5P.Video.BUFFERING &&
                  n.lastState === H5P.Video.PLAYING)) &&
                n.timeUpdate(n.video.getCurrentTime());
            }, 40);
      }),
      (i.prototype.updateInteractions = function (t) {
        var e = this,
          n = Math.floor(10 * t) / 10;
        if (n !== e.lastTenth) {
          void 0 !== e.bookmarksMap &&
            void 0 !== e.bookmarksMap[n] &&
            e.bookmarksMap[n].mouseover().mouseout();
          (function () {
            return (
              void 0 !== e.endscreensMap &&
              void 0 !== e.endscreensMap[n] &&
              e.currentState !== i.SEEKING
            );
          })() &&
            e.getAnsweredTotal() > 0 &&
            e.toggleEndscreen(!0);
        }
        (e.lastTenth = n), e.toggleInteractions(t);
        var o = Math.floor(t);
        o !== e.lastSecond &&
          ((e.currentState !== H5P.Video.PLAYING &&
            e.currentState !== H5P.Video.PAUSED) ||
            e.updateCurrentTime(o)),
          (e.lastSecond = o);
      }),
      (i.prototype.updateCurrentTime = function (t) {
        var e = this;
        t = Math.max(t, 0);
        var n = i.humanizeTime(t),
          o = i.formatTimeForA11y(t, e.l10n);
        e.controls.$currentTime.html(n),
          e.controls.$currentTimeA11y.html(e.l10n.currentTime + " " + o),
          e.controls.$currentTimeSimple.html(n),
          e.controls.$currentTimeA11ySimple.html(e.l10n.currentTime + " " + o);
      }),
      (i.prototype.getUsersScore = function () {
        for (var t = 0, e = 0; e < this.interactions.length; e++)
          this.interactions[e].score && (t += this.interactions[e].score);
        return t;
      }),
      (i.prototype.getUsersMaxScore = function () {
        for (var t = 0, e = 0; e < this.interactions.length; e++)
          this.interactions[e].maxScore && (t += this.interactions[e].maxScore);
        return t;
      }),
      (i.prototype.getScore = function () {
        return this.getUsersScore();
      }),
      (i.prototype.getMaxScore = function () {
        return this.getUsersMaxScore();
      }),
      (i.prototype.showOverlayMask = function () {
        var t = this;
        t.$videoWrapper.addClass("h5p-disable-opt-out"),
          t.disableTabIndexes(),
          t.dnb.dialog.openOverlay(),
          t.restorePosterTabIndexes(),
          t.$container.find(".h5p-dialog-wrapper").click(function () {
            t.hasUncompletedRequiredInteractions() && t.showWarningMask();
          }),
          t.toggleFocusTrap();
      }),
      (i.prototype.restorePosterTabIndexes = function () {
        var t = this;
        t.$overlay.find(".h5p-interaction.h5p-poster").each(function () {
          t.restoreTabIndexes(k(this));
        });
      }),
      (i.prototype.disableTabIndexes = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ".h5p-dialog-wrapper",
          e = this,
          n = e.$container.find(t);
        e.$tabbables = e.$container
          .find(
            "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
          )
          .filter(function () {
            var t = k(this),
              e = k.contains(n.get(0), t.get(0));
            if (t.data("tabindex")) return !0;
            if (!e) {
              var o = t.attr("tabindex");
              return t.data("tabindex", o), t.attr("tabindex", "-1"), !0;
            }
            return !1;
          });
      }),
      (i.prototype.restoreTabIndexes = function (t) {
        var e = this;
        e.$tabbables &&
          (e.$tabbables.each(function () {
            var e = k(this),
              n = e.data("tabindex");
            if (t && !k.contains(t.get(0), e.get(0))) return !0;
            e.hasClass("ui-slider-handle")
              ? (e.attr("tabindex", 0), e.removeData("tabindex"))
              : void 0 !== n
              ? (e.attr("tabindex", n), e.removeData("tabindex"))
              : e.removeAttr("tabindex");
          }),
          t || (e.$tabbables = void 0));
      }),
      (i.prototype.toggleFocusTrap = function () {
        var t = this,
          e = this.getVisibleInteractions().filter(function (t) {
            return t.getRequiresCompletion() && !t.hasFullScore();
          });
        e.length > 0
          ? this.$container.off("focusin").on("focusin", function (n) {
              return t.trapFocusInInteractions(e, k(n.target));
            })
          : this.$container.off("focusin", "**");
      }),
      (i.prototype.trapFocusInInteractions = function (t, e) {
        var n = t.some(function (t) {
            var n = t.getElement();
            return P(n, e);
          }),
          o = !!this.$mask && P(this.$mask, e);
        if (!n && !o) {
          var i = t[0].getElement();
          i && i.focus();
        }
      }),
      (i.prototype.hideOverlayMask = function () {
        var t = this;
        return (
          t.restoreTabIndexes(),
          t.dnb.dialog.closeOverlay(),
          t.$videoWrapper.removeClass("h5p-disable-opt-out"),
          t.toggleFocusTrap(),
          t.$container.find(".h5p-dialog-wrapper")
        );
      }),
      (i.prototype.showWarningMask = function () {
        var t = this,
          e =
            "interactive-video-" +
            t.contentId +
            "-" +
            t.instanceIndex +
            "-completion-warning-text";
        return (
          t.$mask ||
            (t.$mask = k(
              '<div class="h5p-warning-mask" role="alertdialog" aria-describedby="' +
                e +
                '">\n        <div class="h5p-warning-mask-wrapper">\n          <div id="' +
                e +
                '" class="h5p-warning-mask-content">' +
                t.l10n.requiresCompletionWarning +
                '</div>\n          <button type="button" class="h5p-joubelui-button h5p-button-back">' +
                t.l10n.back +
                "</button>\n        </div>\n      </div>"
            )
              .click(function () {
                t.$mask.hide();
              })
              .appendTo(t.$container)),
          t.$mask.show(),
          t.$mask.find(".h5p-button-back").focus(),
          t.$mask
        );
      }),
      (i.prototype.setDisabled = function (t) {
        return t.attr("aria-disabled", "true").attr("tabindex", "-1");
      }),
      (i.prototype.isDisabled = function (t) {
        return "true" === t.attr("aria-disabled");
      }),
      (i.prototype.removeDisabled = function (t) {
        return t.removeAttr("aria-disabled").attr("tabindex", "0");
      }),
      (i.prototype.hasUncompletedRequiredInteractions = function (t) {
        var e = this;
        return (
          void 0 !== t
            ? e.getVisibleInteractionsAt(t)
            : e.getVisibleInteractions()
        ).some(function (t) {
          return t.getRequiresCompletion() && !t.hasFullScore();
        });
      }),
      (i.prototype.getVisibleInteractions = function () {
        return this.interactions.filter(function (t) {
          return t.isVisible();
        });
      }),
      (i.prototype.getVisibleInteractionsAt = function (t) {
        return this.interactions.filter(function (e) {
          return e.visibleAt(t);
        });
      }),
      (i.prototype.showSolutions = function () {}),
      (i.prototype.getTitle = function () {
        return H5P.createTitle(
          this.contentData &&
            this.contentData.metadata &&
            this.contentData.metadata.title
            ? this.contentData.metadata.title
            : "Interactive Video"
        );
      }),
      (i.prototype.findNextInteractionToShow = function (t, e) {
        for (var n = void 0, o = 0; o < this.interactions.length; o++) {
          var i = this.interactions[o].getDuration();
          if (
            this.interactions[o].visibleAt(t) &&
            !this.interactions[o].isVisible()
          ) {
            n = o;
            break;
          }
          (i.from > t || (i.from == t && (void 0 === e || o > e))) &&
            (void 0 === n ||
              i.from < this.interactions[n].getDuration().from) &&
            (n = o);
        }
        return n;
      }),
      (i.prototype.findNextInteractionToHide = function (t) {
        for (var e = void 0, n = 0; n < this.visibleInteractions.length; n++) {
          var o = this.interactions[this.visibleInteractions[n]].getDuration();
          (void 0 === e ||
            o.to <
              this.interactions[this.visibleInteractions[e]].getDuration()
                .to) &&
            (e = n);
        }
        return e;
      }),
      (i.prototype.hideInteractions = function (t) {
        void 0 === this.nextInteractionToHide &&
          (this.nextInteractionToHide = this.findNextInteractionToHide(t));
        for (
          var e =
            void 0 !== this.nextInteractionToHide
              ? this.interactions[
                  this.visibleInteractions[this.nextInteractionToHide]
                ]
              : null;
          e && !e.visibleAt(t);

        )
          e.toggle(t),
            this.visibleInteractions.splice(this.nextInteractionToHide, 1),
            (this.nextInteractionToHide = this.findNextInteractionToHide(t)),
            (e =
              void 0 !== this.nextInteractionToHide
                ? this.interactions[
                    this.visibleInteractions[this.nextInteractionToHide]
                  ]
                : null);
      }),
      (i.prototype.showInteractions = function (t) {
        void 0 === this.nextInteractionToShow &&
          (this.nextInteractionToShow = this.findNextInteractionToShow(t));
        for (
          var e = [],
            n =
              void 0 !== this.nextInteractionToShow
                ? this.interactions[this.nextInteractionToShow]
                : null;
          n && n.getDuration().from <= t;

        )
          n.toggle(t),
            n.repositionToWrapper(this.$videoWrapper),
            this.visibleInteractions.push(this.nextInteractionToShow),
            (this.nextInteractionToHide = void 0),
            e.push(n),
            (this.nextInteractionToShow = this.findNextInteractionToShow(
              t,
              this.nextInteractionToShow
            )),
            (n =
              void 0 !== this.nextInteractionToShow
                ? this.interactions[this.nextInteractionToShow]
                : null);
        this.accessibility.announceInteractions(e);
      }),
      (i.prototype.toggleInteractions = function (t) {
        this.hideInteractions(t), this.showInteractions(t);
      }),
      (i.prototype.play = function () {
        this.video.play();
      }),
      (i.prototype.seek = function (t) {
        (this.nextInteractionToShow = this.nextInteractionToHide = void 0),
          this.video.seek(t);
      }),
      (i.prototype.pause = function () {
        this.video && this.video.pause && this.video.pause();
      }),
      (i.prototype.resetTask = function () {
        if (void 0 !== this.controls) {
          this.seek(0),
            this.timeUpdate(-1),
            this.controls.$slider.slider("option", "value", 0);
          for (var t = 0; t < this.interactions.length; t++)
            this.interactions[t].resetTask();
        }
      }),
      (i.prototype.read = function (t) {
        var e = this;
        e.$read &&
          (e.readText
            ? (e.readText +=
                ("." === e.readText.substr(-1, 1) ? " " : ". ") + t)
            : (e.readText = t),
          e.$read.html(e.readText),
          setTimeout(function () {
            (e.readText = null), e.$read.html("");
          }, 100));
      }),
      (i.prototype.getCopyrights = function () {
        var t = this,
          e = new H5P.ContentCopyrights();
        void 0 !== t.options.video.files &&
          void 0 !== t.options.video.files[0] &&
          e.addMedia(
            new H5P.MediaCopyright(t.options.video.files[0].copyright, t.l10n)
          ),
          void 0 !== t.options.video.startScreenOptions.copyright &&
            e.addMedia(t.options.video.startScreenOptions.copyright);
        var n = t.options.video.startScreenOptions.poster;
        if (n && void 0 !== n.copyright) {
          var o = new H5P.MediaCopyright(n.copyright, t.l10n),
            i = H5P.getPath(n.path, t.contentId);
          o.setThumbnail(new H5P.Thumbnail(i, n.width, n.height)),
            e.addMedia(o);
        }
        for (var r = 0; r < t.interactions.length; r++) {
          var s = t.interactions[r].getCopyrights();
          s && e.addContent(s);
        }
        if (t.hasMainSummary()) {
          var a = H5P.newRunnable(t.options.summary.task, t.contentId);
          if (void 0 !== a) {
            var l = new H5P.ContentCopyrights();
            l.addContent(
              H5P.getCopyrights(
                a,
                { action: t.options.summary.task },
                t.contentId
              )
            ),
              l.setLabel(t.l10n.summary),
              e.addContent(l);
          }
        }
        return e;
      }),
      (i.prototype.skippingPrevented = function () {
        return this.preventSkipping;
      }),
      (i.SEEKING = 4),
      (i.LOADED = 5),
      (i.ATTACHED = 6),
      (i.humanizeTime = function (t) {
        var e = i.secondsToMinutesAndHours(t),
          n = "";
        return (
          0 !== e.hours && ((n += e.hours + ":"), e.minutes < 10 && (n += "0")),
          (n += e.minutes + ":"),
          e.seconds < 10 && (n += "0"),
          (n += e.seconds)
        );
      }),
      (i.formatTimeForA11y = function (t, e) {
        var n = i.secondsToMinutesAndHours(t);
        return (
          (n.hours > 0 ? n.hours + " " + e.hours + ", " : "") +
          n.minutes +
          " " +
          e.minutes +
          ", " +
          n.seconds +
          " " +
          e.seconds
        );
      }),
      (i.secondsToMinutesAndHours = function (t) {
        var e = Math.floor(t / 60);
        return {
          seconds: Math.floor(t % 60),
          minutes: e % 60,
          hours: Math.floor(e / 60),
        };
      });
    var S = function (t, e) {
        e ? t.setAttribute("tabindex", "0") : t.removeAttribute("tabindex");
      },
      $ = function (t, e) {
        for (var n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
      },
      w = function (t, e) {
        null === t ? e() : setTimeout(e, t);
      },
      C = function () {
        return (
          void 0 === window.interactiveVideoCounter &&
            (window.interactiveVideoCounter = 0),
          window.interactiveVideoCounter++
        );
      };
    i.prototype.getXAPIData = function () {
      var t = this,
        e = this.createXAPIEventTemplate("answered");
      T(e),
        e.setScoredResult(
          t.getScore(),
          t.getMaxScore(),
          t,
          !0,
          t.getScore() === t.getMaxScore()
        );
      var n = E(t.interactions);
      return { statement: e.data.statement, children: n };
    };
    var T = function (t) {
        var e = t.getVerifiedStatementValue(["object", "definition"]);
        H5P.jQuery.extend(e, x());
      },
      x = function () {
        var t = {};
        return (
          (t.interactionType = "compound"),
          (t.type = "http://adlnet.gov/expapi/activities/cmi.interaction"),
          (t.description = { "en-US": "" }),
          t
        );
      },
      P = function (t, e) {
        return (
          void 0 !== t &&
          void 0 !== e &&
          (t.is(e) || k.contains(t.get(0), e.get(0)))
        );
      },
      E = function (t) {
        return t
          .map(function (t) {
            return t.getXAPIData();
          })
          .filter(function (t) {
            return !!t;
          });
      };
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(0),
      r = o(i),
      s = n(2),
      a = o(s),
      l = { ICON: 0, TEXT: 1 },
      c = function (t, e, n, o, i, s) {
        var c = this,
          h = "interactive-video-" + s + "-menu-" + t,
          p = new r.default([new a.default()]);
        p.on("close", function () {
          return b();
        });
        var f = [];
        H5P.EventDispatcher.call(c);
        var v,
          m = function () {
            c.control.setAttribute("aria-expanded", "true"),
              c.popup.classList.add("h5p-show"),
              c.trigger("open"),
              c.popup.querySelector('li[tabindex="0"]').focus();
          },
          b = function () {
            c.control.setAttribute("aria-expanded", "false"),
              c.control.focus(),
              c.popup.classList.remove("h5p-show"),
              c.trigger("close");
          },
          g = function () {
            "true" === c.control.getAttribute("aria-expanded") ? b() : m();
          },
          y = function (t, e, n) {
            for (var o = 0; o < t.length; o++) e.call(n, t[o], o);
          },
          k = function (t, e) {
            n = e;
            var o = v.querySelectorAll('[aria-checked="true"]');
            y(
              o,
              function (t) {
                return t.setAttribute("aria-checked", "false");
              },
              this
            ),
              t.setAttribute("aria-checked", "true"),
              b(),
              c.trigger("select", e);
          },
          S = function (t) {
            var e = t.value === n.value,
              i = d(
                null,
                l.TEXT,
                t.label,
                function () {
                  k(this, t);
                },
                "li",
                o
              );
            return (
              f.push({ option: t, element: i }),
              i.setAttribute("aria-checked", e.toString()),
              i.setAttribute("aria-describedby", h),
              p.addElement(i),
              e
                ? i.setAttribute("tabindex", "0")
                : i.removeAttribute("tabindex"),
              i
            );
          };
        (c.updateOptions = function (t) {
          v && v.parentNode.removeChild(v),
            (v = u(null, null, "ol")),
            v.setAttribute("role", "menu");
          for (var e = 0; e < t.length; e++) v.appendChild(S(t[e]));
          c.popup.appendChild(v);
        }),
          (c.popup = u(
            "h5p-chooser h5p-" + t,
            '<h3 id="' + h + '">' + i[t] + "</h3>"
          )),
          c.popup.setAttribute("role", "dialog");
        var $ = d(
          "h5p-chooser-close-button",
          l.ICON,
          i.close,
          g,
          "div",
          "button"
        );
        c.popup.appendChild($),
          (c.control = d(
            "h5p-control h5p-" + t,
            l.ICON,
            i[t],
            g,
            "div",
            "button"
          )),
          c.control.setAttribute("aria-haspopup", "true"),
          (c.overlayControl = d(
            "h5p-minimal-button h5p-" + t,
            l.TEXT,
            i[t],
            g,
            "div",
            "menuitem"
          )),
          (c.overlayControl.tabIndex = "-1"),
          c.overlayControl.classList.add("h5p-hide"),
          c.updateOptions(e);
      };
    (c.prototype = Object.create(H5P.EventDispatcher.prototype)),
      (c.prototype.constructor = c);
    var u = function (t, e, n) {
        var o = document.createElement(n || "div");
        return t && (o.className = t), e && (o.innerHTML = e), o;
      },
      d = function (t, e, n, o, i, r) {
        var s = u(t, e === l.TEXT ? n : "", i);
        return (
          (s.tabIndex = 0),
          s.setAttribute("role", r),
          e === l.ICON && (s.title = n),
          s.addEventListener(
            "click",
            function (t) {
              o.call(s, t);
            },
            !1
          ),
          s.addEventListener(
            "keydown",
            function (t) {
              (32 !== t.which && 13 !== t.which) ||
                (t.preventDefault(), o.call(s, t));
            },
            !1
          ),
          s
        );
      };
    e.default = c;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createElement =
        e.toggleClass =
        e.toggleVisibility =
        e.show =
        e.hide =
        e.removeClass =
        e.addClass =
        e.classListContains =
        e.removeChild =
        e.querySelectorAll =
        e.nodeListToArray =
        e.querySelector =
        e.appendChild =
        e.toggleAttribute =
        e.attributeEquals =
        e.hasAttribute =
        e.removeAttribute =
        e.setAttribute =
        e.getAttribute =
          void 0);
    var o = n(1),
      i = (e.getAttribute = (0, o.curry)(function (t, e) {
        return e.getAttribute(t);
      })),
      r = (e.setAttribute = (0, o.curry)(function (t, e, n) {
        return n.setAttribute(t, e);
      })),
      s =
        ((e.removeAttribute = (0, o.curry)(function (t, e) {
          return e.removeAttribute(t);
        })),
        (e.hasAttribute = (0, o.curry)(function (t, e) {
          return e.hasAttribute(t);
        })),
        (e.attributeEquals = (0, o.curry)(function (t, e, n) {
          return n.getAttribute(t) === e;
        })),
        (e.toggleAttribute = (0, o.curry)(function (t, e) {
          var n = i(t, e);
          r(t, (0, o.inverseBooleanString)(n), e);
        })),
        (e.appendChild = (0, o.curry)(function (t, e) {
          return t.appendChild(e);
        })),
        (e.querySelector = (0, o.curry)(function (t, e) {
          return e.querySelector(t);
        })),
        (e.nodeListToArray = function (t) {
          return Array.prototype.slice.call(t);
        })),
      a =
        ((e.querySelectorAll = (0, o.curry)(function (t, e) {
          return s(e.querySelectorAll(t));
        })),
        (e.removeChild = (0, o.curry)(function (t, e) {
          return t.removeChild(e);
        })),
        (e.classListContains = (0, o.curry)(function (t, e) {
          return e.classList.contains(t);
        })),
        (e.addClass = (0, o.curry)(function (t, e) {
          return e.classList.add(t);
        }))),
      l = (e.removeClass = (0, o.curry)(function (t, e) {
        return e.classList.remove(t);
      })),
      c = (e.hide = a("hidden")),
      u = (e.show = l("hidden"));
    (e.toggleVisibility = (0, o.curry)(function (t, e) {
      return (t ? u : c)(e);
    })),
      (e.toggleClass = (0, o.curry)(function (t, e, n) {
        n.classList[e ? "add" : "remove"](t);
      })),
      (e.createElement = function (t) {
        var e = t.tag,
          n = t.id,
          o = t.classes,
          i = t.attributes,
          r = document.createElement(e);
        return (
          n && (r.id = n),
          o &&
            o.forEach(function (t) {
              r.classList.add(t);
            }),
          i &&
            Object.keys(i).forEach(function (t) {
              r.setAttribute(t, i[t]);
            }),
          r
        );
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.Eventful = function () {
      return {
        listeners: {},
        on: function (t, e, n) {
          var o = { listener: e, scope: n };
          return (
            (this.listeners[t] = this.listeners[t] || []),
            this.listeners[t].push(o),
            this
          );
        },
        fire: function (t, e) {
          return (this.listeners[t] || []).every(function (t) {
            return !1 !== t.listener.call(t.scope || this, e);
          });
        },
        propagate: function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return e.on(t, function (e) {
              return n.fire(t, e);
            });
          });
        },
      };
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t, e, n) {
      var o = this;
      H5P.EventDispatcher.call(o);
      var h,
        f,
        v,
        m,
        b = t.action;
      n && (b.userDatas = { state: n });
      var g,
        y,
        k,
        S,
        $ = b.library.split(" ")[0],
        w = e.l10n[d($, t) ? "content" : "interaction"],
        C = "H5P.Nil" !== $ && "button" === t.displayType,
        T = [b.params.contentName, C ? a(t.label) : "", t.libraryTitle].filter(
          s
        )[0],
        x = !1,
        P = !1,
        E = !1,
        I = t.action.metadata;
      this.on("open-dialog", function () {
        L();
      }),
        this.on("show-mask", function () {
          F(this.getElement());
        });
      var A = function () {
          return r.extend(
            {},
            { backgroundColor: "rgb(255,255,255)", boxShadow: !0 },
            t.visuals
          );
        },
        B = function (n) {
          (h = r("<div/>", {
            tabindex: 0,
            role: "button",
            class: "h5p-interaction " + g + (n ? "" : " h5p-hidden"),
            "aria-popup": "true",
            "aria-expanded": "false",
            "aria-label": T,
            css: { left: t.x + "%", top: t.y + "%", width: "", height: "" },
            on: {
              click: function () {
                o.dialogDisabled || (L(), h.attr("aria-expanded", "true"));
              },
              keydown: function (t) {
                (13 !== t.which && 32 !== t.which) ||
                  o.dialogDisabled ||
                  (L(), h.attr("aria-expanded", "true"), t.preventDefault());
              },
            },
          })),
            o.getRequiresCompletion() &&
              void 0 === e.editor &&
              e.currentState !== H5P.BrightcoveInteractiveVideo.SEEKING &&
              L(!0),
            r("<div/>", { class: "h5p-touch-area" }).appendTo(h),
            r("<div/>", { class: "h5p-interaction-button" }).appendTo(h),
            e.editor &&
              h
                .hover(
                  function () {
                    h.is(".focused") ||
                    h.is(":focus") ||
                    (e.dnb && (!e.dnb || e.dnb.newElement))
                      ? (e.editor.hideInteractionTitle(), (x = !1))
                      : (e.editor.showInteractionTitle(T, h), (x = !0));
                  },
                  function () {
                    e.editor.hideInteractionTitle(), (x = !1);
                  }
                )
                .focus(function () {
                  e.editor.hideInteractionTitle(), (x = !1);
                })
                .click(function () {
                  e.editor.hideInteractionTitle();
                });
          var i = s(a(t.label));
          t.label && i && (f = M(t.label, "h5p-interaction").appendTo(h)),
            o.trigger("display", h),
            setTimeout(function () {
              h && h.removeClass("h5p-hidden");
            }, 0);
        },
        M = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return r("<div/>", {
            class: "h5p-interaction-label " + e,
            html: '<div class="h5p-interaction-label-text">' + t + "</div>",
          });
        },
        H = function () {
          return (
            (h = M(
              t.label,
              "h5p-interaction h5p-interaction-label-standalone"
            )),
            h.css({
              left: t.x + "%",
              top: t.y + "%",
              width: "",
              height: "initial",
            }),
            o.trigger("display", h),
            setTimeout(function () {
              h && h.removeClass("h5p-hidden");
            }, 0),
            h
          );
        },
        D = function (e) {
          if ("timecode" === t.goto.type)
            e.click(function (e) {
              1 === e.which && W({ data: t.goto.time });
            })
              .keypress(function (e) {
                32 === e.which && W({ data: t.goto.time });
              })
              .attr("href", "#")
              .attr("tabindex", "0");
          else {
            var n = t.goto.url;
            e.keypress(function (t) {
              32 === t.which && this.click();
            }).attr({
              href: ("other" !== n.protocol ? n.protocol : "") + n.url,
              target: "_blank",
            });
          }
          return e.addClass("goto-clickable");
        },
        R = function (t) {
          var n = !e.hasUncompletedRequiredInteractions(t);
          y && y.trigger("hide"),
            h && o.trigger("hide", h),
            o.isButton()
              ? n && e.dnb.dialog.close()
              : (e.isMobileView && n && e.dnb.dialog.close(), h && h.detach()),
            o.trigger("remove", h),
            n && K(h);
        },
        O = function () {
          var t = document.createElement("button");
          return (
            (t.innerHTML = e.l10n.continueWithVideo),
            (t.className = "h5p-interaction-continue-button"),
            t.addEventListener("click", function () {
              R(), e.play();
            }),
            t
          );
        },
        V = function (t) {
          if ("H5P.Questionnaire" === $) {
            if (t.find(".h5p-interaction-continue-button").length) return;
            var n = O(),
              o = t.find(".h5p-questionnaire-success-center");
            o.length && o.get(0).appendChild(n),
              y.on("noSuccessScreen", function () {
                R(), e.play();
              });
          }
          "H5P.FreeTextQuestion" === $ &&
            y.on("continue", function () {
              R(), e.play();
            });
        },
        q = function (t, e) {
          var n = function (t) {
              return e.target === t.get(0);
            },
            o = 9 === e.which,
            i = t.first(),
            r = t.last();
          o && e.shiftKey && n(i)
            ? (r.focus(), e.preventDefault())
            : o && n(r) && (i.focus(), e.preventDefault());
        },
        L = function (n) {
          var i = e.$container.find(".h5p-dialog-wrapper");
          "function" == typeof y.setActivityStarted &&
            "function" == typeof y.getScore &&
            y.setActivityStarted();
          var s = o.isGotoClickable(),
            a = i.find("[tabindex]"),
            u = r(s ? "<a>" : "<div>", {
              class: "h5p-dialog-interaction h5p-frame",
            });
          !s && p($) && u.attr("tabindex", "0"),
            void 0 !== e.editor
              ? u.attr("tabindex", -1)
              : 0 === a.length && u.attr("tabindex", 0),
            o.getRequiresCompletion() &&
              i.keydown(function (t) {
                var e = i
                  .find('[tabindex="0"], button, input')
                  .filter(":visible");
                q(e, t);
              });
          var d = s ? D(u) : u;
          if (
            (y.attach(d),
            V(d),
            X(y) && ((o.score = y.getScore()), (o.maxScore = y.getMaxScore())),
            o.hasFullScore() && n)
          ) {
            if (i.hasClass("h5p-hidden")) return;
          } else
            o.getRequiresCompletion() &&
              !o.hasFullScore() &&
              (e.dnb.dialog.hideCloseButton(),
              (e.dnb.dialog.disableOverlay = !0),
              i.click(function () {
                if (!o.hasFullScore()) {
                  e.showWarningMask()
                    .find(".h5p-button-back")
                    .click(function () {
                      return u.find("button").last().focus();
                    });
                }
              }));
          e.dnb.dialog.open(u),
            e.disableTabIndexes(),
            e.dnb.dialog.addLibraryClass($),
            e.dnb.dialog.toggleClass(
              "goto-clickable-visualize",
              !(!s || !t.goto.visualize)
            ),
            e.dnb.dialog.toggleClass("h5p-goto-timecode", c(t, l.TIME_CODE)),
            e.dnb.dialog.disableOverlay && e.restorePosterTabIndexes();
          var f = function () {
            e.dnb.$dialogContainer.one("transitionend", function () {
              if (u.is(".h5p-image")) {
                u.find("img").css({ width: "", height: "" });
              }
            });
            try {
              void 0 !== y.pause &&
                (y.pause instanceof Function || "function" == typeof y.pause) &&
                y.pause();
            } catch (t) {
              H5P.error(t);
            }
            h && (h.focus(), h.attr("aria-expanded", "false")),
              y && y.trigger("hide");
          };
          e.dnb.dialog.once("close", f);
          var v = function t() {
            (o.dialogWidth = e.dnb.dialog.getDialogWidth()),
              e.dnb.dialog.off("close", t);
          };
          if ((e.dnb.dialog.on("close", v), "H5P.Image" === $)) {
            var m = e.dnb.dialog.getMaxSize(h),
              g = u.find("img");
            b.params.file.width && b.params.file.height
              ? N(
                  g,
                  m,
                  { width: b.params.file.width, height: b.params.file.height },
                  !e.isMobileView
                )
              : (g.on("load", function () {
                  g.is(":visible") &&
                    N(
                      g,
                      m,
                      { width: this.width, height: this.height },
                      !e.isMobileView
                    );
                }),
                e.dnb.dialog.position(h));
          } else
            e.isMobileView ||
              ("H5P.FreeTextQuestion" === $
                ? e.dnb.dialog.position(h, { width: o.dialogWidth / 16 }, "big")
                : "H5P.Text" !== $ && "H5P.Table" !== $
                ? e.dnb.dialog.position(
                    h,
                    { width: o.dialogWidth / 16 },
                    "medium"
                  )
                : e.dnb.dialog.position(
                    h,
                    { width: o.dialogWidth / 16 },
                    null
                  ));
          if ("H5P.Summary" === $) {
            var k = 0;
            H5P.on(y, "resize", function () {
              var t = u.height();
              (k > t + 10 || k < t - 10) &&
                setTimeout(function () {
                  e.dnb.dialog.scroll(t, 300);
                }, 500),
                (k = t);
            });
          }
          setTimeout(function () {
            H5P.trigger(y, "resize");
          }, 0);
        },
        N = function (t, n, o, i) {
          (o.width /= 16),
            (o.height /= 16),
            o.height > n.height &&
              ((o.width = (o.width * n.height) / o.height),
              (o.height = n.height)),
            o.width > n.width &&
              ((o.height = (o.height * n.width) / o.width),
              (o.width = n.width));
          var r = 16 / Number(t.css("fontSize").replace("px", ""));
          t.css({ width: o.width * r + "em", height: o.height * r + "em" }),
            i && e.dnb.dialog.position(h, o);
        },
        W = function (n) {
          o.isButton() && e.dnb.dialog.close(),
            (e.currentState !== H5P.Video.PAUSED &&
              e.currentState !== H5P.Video.ENDED) ||
              e.play();
          var i = n.data;
          i === t.duration.from && (i += 0.2), e.seek(i);
        },
        z = function () {
          var n = t.height || 10,
            o = t.width || 10,
            i = e.width / e.fontSize;
          return {
            height:
              (n / (i / (e.$videoWrapper.width() / e.$videoWrapper.height()))) *
                100 +
              "%",
            width: (o / i) * 100 + "%",
          };
        },
        F = function (t) {
          t.css("zIndex", 52), e.showOverlayMask();
        },
        K = function (t) {
          t && t.css("zIndex", ""), e.hideOverlayMask();
        },
        _ = function () {
          var n = o.isGotoClickable(),
            i = z(),
            s = A();
          if (
            ((h = r("<div/>", {
              "aria-label": e.l10n.interaction,
              tabindex: "-1",
              class:
                "h5p-interaction h5p-poster " +
                g +
                (n && t.goto.visualize ? " goto-clickable-visualize" : ""),
              css: {
                left: t.x + "%",
                top: t.y + "%",
                width: i.width,
                height: i.height,
              },
            })),
            "H5P.IVHotspot" !== $)
          ) {
            h.css("background", s.backgroundColor);
            var a = s.backgroundColor.split(",");
            if (a[3]) {
              0 === parseFloat(a[3].replace(")", "")) &&
                h.addClass("h5p-transparent-interaction");
            }
          }
          !1 === s.boxShadow && h.addClass("h5p-box-shadow-disabled"),
            "H5P.Link" === $ &&
              (h.css("height", "auto"),
              h.css("width", "auto"),
              void 0 === e.editor &&
                h.click(function () {
                  return window.open(y.getUrl()), e.pause(), !1;
                })),
            (m = r("<div>", { class: "h5p-interaction-outer" }).appendTo(h)),
            (v = r(n ? "<a>" : "<div>", {
              class: "h5p-interaction-inner h5p-frame",
            }).appendTo(m)),
            !n && p($) && v.attr("tabindex", "0"),
            void 0 !== e.editor && y.disableAutoPlay && y.disableAutoPlay();
          var l = n ? D(v) : v;
          y.attach(l),
            V(l),
            o.trigger("display", h),
            o.getRequiresCompletion() &&
              e.currentState !== H5P.BrightcoveInteractiveVideo.SEEKING &&
              void 0 === e.editor &&
              !o.hasFullScore() &&
              (F(h), h.focus()),
            setTimeout(function () {
              H5P.trigger(y, "resize");
            }, 0),
            "function" == typeof y.setActivityStarted &&
              "function" == typeof y.getScore &&
              y.setActivityStarted();
        },
        j = function () {
          var n,
            i,
            r = !0;
          if (
            (t.adaptivity &&
              ((i = o.hasFullScore()),
              (r = !o.getRequiresCompletion() || i),
              i ? (n = t.adaptivity.correct) : i || (n = t.adaptivity.wrong)),
            !n || void 0 === n.seekTo)
          )
            return void (
              void 0 !== y.hasButton &&
              (y.hasButton("iv-continue") ||
                y.addButton(
                  "iv-continue",
                  e.l10n.defaultAdaptivitySeekLabel,
                  function () {
                    R(), U();
                  }
                ),
              y[r ? "showButton" : "hideButton"]("iv-continue"))
            );
          e.pause(),
            !n.allowOptOut &&
              h &&
              (o.isButton()
                ? ((e.dnb.dialog.disableOverlay = !0),
                  e.dnb.dialog.hideCloseButton())
                : F(h));
          var s = i ? "correct" : "wrong",
            a = n.seekLabel ? n.seekLabel : e.l10n.defaultAdaptivitySeekLabel;
          y
            .hideButton("iv-continue")
            .addButton("iv-adaptivity-" + s, a, function () {
              R(n.seekTo),
                !i &&
                  y.resetTask &&
                  (y.resetTask(), y.hideButton("iv-adaptivity-" + s)),
                o.remove(),
                U(n.seekTo);
            })
            .showButton("iv-adaptivity-" + s, 1)
            .hideButton("iv-adaptivity-" + (i ? "wrong" : "correct"), 1)
            .hideButton("check-answer", 1)
            .hideButton("show-solution", 1)
            .hideButton("try-again", 1),
            void 0 !== y.disableInput &&
              (y.disableInput instanceof Function ||
                "function" == typeof y.disableInput) &&
              y.disableInput(),
            setTimeout(function () {
              var t = n.message.replace("<p>", "").replace("</p>", "");
              y.updateFeedbackContent(t, !0), y.read(t);
            }, 0);
        },
        U = function (t) {
          var n = G(),
            o = n.filter(function (t) {
              return !t.isButton();
            });
          if (
            (o.length
              ? (n = o)
              : n.length &&
                e.$container.find(".h5p-dialog-wrapper .h5p-dialog").show(),
            n.length)
          ) {
            var i = n[0];
            return (
              i.isButton() ? i.trigger("open-dialog") : i.trigger("show-mask"),
              void e.pause()
            );
          }
          e.currentState !== H5P.Video.ENDED &&
            (void 0 !== t && (e.pause(), e.seek(t)),
            e.play(),
            e.controls.$play.focus());
        },
        G = function () {
          return e
            .getVisibleInteractions()
            .filter(function (t) {
              return t !== o;
            })
            .filter(function (t) {
              return t.getRequiresCompletion() && !t.hasFullScore();
            });
        },
        Q = function () {
          var e = t.className;
          if (void 0 === e) {
            var n = b.library.split(" ")[0].toLowerCase().split(".");
            e = n[0] + "-" + n[1] + "-interaction";
          }
          return (
            t.goto && "timecode" === t.goto.type && (e += " h5p-goto-timecode"),
            e
          );
        };
      (o.isGotoClickable = function () {
        return (
          -1 !== ["H5P.Text", "H5P.Image"].indexOf($) &&
          t.goto &&
          -1 !== ["timecode", "url"].indexOf(t.goto.type)
        );
      }),
        (o.getCurrentState = function () {
          if (
            y &&
            (y.getCurrentState instanceof Function ||
              "function" == typeof y.getCurrentState)
          )
            return y.getCurrentState();
        }),
        (o.getDuration = function () {
          return { from: t.duration.from, to: t.duration.to + 1 };
        }),
        (o.getRequiresCompletion = function () {
          return !!t.adaptivity && !!t.adaptivity.requireCompletion;
        }),
        (o.pause = function () {
          return t.pause;
        }),
        (o.isButton = function () {
          return (
            "button" === t.displayType ||
            (!(!e.isMobileView || "H5P.IVHotspot" === $) &&
              ("H5P.Image" !== $ || !1 !== t.buttonOnMobile))
          );
        }),
        (o.isStandaloneLabel = function () {
          return "H5P.Nil" === $;
        }),
        (o.isMainSummary = function () {
          return !0 === t.mainSummary;
        }),
        (o.selectDot = function () {
          e.preventSkipping ||
            ((e.seekingTo = !0),
            Math.floor(10 * e.video.getCurrentTime()) !==
              Math.floor(10 * t.duration.from) &&
              (e.currentState === H5P.Video.VIDEO_CUED
                ? (e.play(), e.seek(t.duration.from))
                : e.currentState === H5P.Video.PLAYING
                ? e.seek(t.duration.from)
                : (e.play(), e.seek(t.duration.from), e.pause())));
        }),
        (o.addDot = function () {
          if ("H5P.Nil" === $) return r("<div/>", { class: n });
          var n = "h5p-seekbar-interaction " + g,
            i = r("<div/>", {
              role: "menuitem",
              class: n,
              "aria-label": w + ". " + T,
              title: T,
              css: { left: t.duration.from * e.oneSecondInPercentage + "%" },
              on: {
                click: o.selectDot,
                keydown: function (t) {
                  if (13 === t.which || 32 === t.which)
                    return o.selectDot(), !1;
                },
              },
            });
          return (
            e.preventSkipping &&
              i.attr("aria-disabled", "true").attr("tabindex", "-1"),
            (o.$menuitem = i),
            i
          );
        }),
        (o.isVisible = function () {
          return E;
        }),
        (o.visibleAt = function (e) {
          return !(e < t.duration.from || e >= t.duration.to + 1);
        }),
        (o.toggle = function (n, i) {
          if (!o.visibleAt(n))
            return (
              (E = !1),
              void (
                h &&
                (S &&
                  (S.hideContextMenu(),
                  S === e.dnb.focusedElement &&
                    (S.blur(), delete e.dnb.focusedElement)),
                e.editor && x && (e.editor.hideInteractionTitle(), (x = !1)),
                o.remove())
              )
            );
          if (!h)
            return (
              (E = !0),
              o.isStandaloneLabel() ? H() : o.isButton() ? B(i) : _(),
              void 0 === e.editor
                ? (S = e.dnb.add(h, void 0, {
                    dnbElement: S,
                    disableContextMenu: !0,
                  }))
                : (o.fit && (e.editor.fit(h, t), (o.fit = !1)),
                  h.focus(function () {
                    e.pause();
                  })),
              h
            );
        }),
        (o.setTitle = function (t) {
          h && h.attr("aria-label", t), (T = t);
        }),
        (o.reCreateInteraction = function () {
          "H5P.IVHotspot" !== $ &&
            h &&
            (y && y.trigger("hide"),
            o.trigger("hide", h),
            h.detach(),
            o.isStandaloneLabel() ? H() : o.isButton() ? B(!0) : _());
        }),
        (o.resizeInteraction = function () {
          o.isStandaloneLabel() || H5P.trigger(y, "resize");
        }),
        (o.positionLabel = function (t) {
          h &&
            o.isButton() &&
            f &&
            !o.isStandaloneLabel() &&
            (f.removeClass("h5p-left-label"),
            parseInt(h.css("left")) + f.position().left + f.outerWidth() > t &&
              f.addClass("h5p-left-label"));
        }),
        (o.setPosition = function (e, n) {
          (t.x = e), (t.y = n), h.css({ left: e + "%", top: n + "%" });
        }),
        (o.setSize = function (e, n) {
          e && (t.width = e), n && (t.height = n), H5P.trigger(y, "resize");
        }),
        (o.remove = function () {
          h &&
            (o.trigger(
              "domHidden",
              { $dom: h, key: "videoProgressedPast" },
              { bubbles: !0, external: !0 }
            ),
            y && y.trigger("hide"),
            o.trigger("hide", h),
            h.detach(),
            (h = void 0));
        }),
        (o.reCreate = function () {
          (g = Q()),
            o.isStandaloneLabel() ||
              ((b.params = b.params || {}),
              (y = H5P.newRunnable(b, e.contentId, void 0, void 0, {
                parent: e,
                editing: void 0 !== e.editor,
              })),
              void 0 === o.maxScore &&
                y.getMaxScore &&
                (o.maxScore = y.getMaxScore()),
              b.userDatas && X(y) && (o.score = y.getScore()),
              e.isTask ||
                void 0 === e.options.assets.endscreens ||
                ((y.isTask ||
                  (void 0 === y.isTask && void 0 !== y.showSolutions)) &&
                  (e.isTask = !0)),
              y.on &&
                (y.on("xAPI", function (t) {
                  var n =
                      t.getVerifiedStatementValue([
                        "context",
                        "contextActivities",
                        "parent",
                      ]) || [],
                    i = t.getContentXAPIId(e),
                    r =
                      "completed" === t.getVerb() || "answered" === t.getVerb(),
                    s = n.some(function (t) {
                      return t.id === i;
                    });
                  y.getScore && (o.score = y.getScore()),
                    y.getMaxScore && (o.maxScore = y.getMaxScore()),
                    s &&
                      r &&
                      t.getMaxScore() &&
                      ((o.score = null == t.getScore() ? 0 : t.getScore()),
                      (o.maxScore = o.maxScore ? o.maxScore : t.getMaxScore()),
                      j()),
                    o.setLastXAPIVerb(t.getVerb()),
                    o.trigger(t);
                }),
                y.on("question-finished", function () {
                  j();
                }),
                y.on("resize", function () {
                  delete o.dialogWidth,
                    e && e.dnb && e.dnb.dialog.removeStaticWidth();
                }),
                "H5P.IVHotspot" === $ && y.on("goto", W),
                "H5P.GoToQuestion" === $ && y.on("chosen", W)));
        });
      var X = function (t) {
        return (
          "undefined" !== (void 0 === t ? "undefined" : i(t)) &&
          "function" == typeof t.getScore &&
          "function" == typeof t.getMaxScore
        );
      };
      (o.setDnbElement = function (t) {
        return S !== t && ((S = t), !0);
      }),
        (o.hasFullScore = function () {
          return o.score >= o.maxScore;
        }),
        (o.getLibraryName = function () {
          return $;
        }),
        (o.getMetadata = function () {
          return I;
        }),
        (o.getTitle = function () {
          return T;
        }),
        (o.isAnswerable = function () {
          return -1 === u.indexOf(o.getLibraryName()) && !o.isStandaloneLabel();
        }),
        (o.setProgress = function (t) {
          this.progress = t;
        }),
        (o.getProgress = function () {
          return this.progress;
        }),
        (o.setLastXAPIVerb = function (t) {
          k = t;
        }),
        (o.getLastXAPIVerb = function () {
          return k;
        }),
        (o.getClass = function () {
          return g;
        }),
        (o.getCopyrights = function () {
          if (!o.isStandaloneLabel()) {
            var n = H5P.newRunnable(b, e.contentId);
            if (void 0 !== n) {
              var i = new H5P.ContentCopyrights();
              return (
                i.addContent(H5P.getCopyrights(n, t, e.contentId)),
                i.setLabel(
                  T +
                    " " +
                    H5P.BrightcoveInteractiveVideo.humanizeTime(t.duration.from) +
                    " - " +
                    H5P.BrightcoveInteractiveVideo.humanizeTime(t.duration.to)
                ),
                i
              );
            }
          }
        }),
        (o.getXAPIData = function () {
          if (
            y &&
            (y.getXAPIData instanceof Function ||
              "function" == typeof y.getXAPIData)
          )
            return y.getXAPIData();
        }),
        (o.getSubcontentId = function () {
          return b.subContentId;
        }),
        (o.getElement = function () {
          return h;
        }),
        (o.focusOnFirstTabbableElement = function () {
          if (h) {
            var t = r(h.get(0)).find("[tabindex]");
            t && t.length ? t.get(0).focus() : o.focus();
          }
        }),
        (o.focus = function () {
          h && h.focus();
        }),
        (o.getClipboardData = function () {
          return H5P.DragNBar.clipboardify(
            H5PEditor.BrightcoveInteractiveVideo.clipboardKey,
            t,
            "action"
          );
        }),
        (o.repositionToWrapper = function (e) {
          if (h && "H5P.IVHotspot" !== $ && "H5P.FreeTextQuestion" !== $) {
            if (
              (P &&
                (h.css({ top: t.y + "%", left: t.x + "%" }),
                h.css(o.isButton() ? { height: "", width: "" } : z()),
                (P = !1)),
              h.position().top + h.height() > e.height())
            ) {
              var n = ((e.height() - h.height()) / e.height()) * 100;
              if (n < 0) {
                n = 0;
                var i = e.height() / parseFloat(h.css("font-size"));
                h.css("height", i + "em");
              }
              h.css("top", n + "%"), (P = !0);
            }
            if (h.position().left + h.width() > e.width()) {
              var r = ((e.width() - h.width()) / e.width()) * 100;
              if (r < 0) {
                r = 0;
                var s = e.width() / parseFloat(h.css("font-size"));
                h.css("width", s + "em");
              }
              h.css("left", r + "%"), (P = !0);
            }
          }
        }),
        (o.resetTask = function () {
          void 0 !== b.userDatas &&
            void 0 !== b.userDatas.state &&
            delete b.userDatas.state,
            delete o.score,
            delete o.maxScore,
            o.reCreate();
        }),
        (o.getInstance = function () {
          return y;
        }),
        o.reCreate();
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      r = H5P.jQuery,
      s = function (t) {
        return void 0 !== t && "string" == typeof t && t.length > 0;
      },
      a = function (t) {
        return s(t) ? r("<div>" + t + "</div>").text() : void 0;
      },
      l = { TIME_CODE: "timecode", URL: "url" },
      c = function (t, e) {
        return void 0 !== t.goto && t.goto.type === e;
      },
      u = [
        "H5P.Image",
        "H5P.Nil",
        "H5P.Table",
        "H5P.Link",
        "H5P.GoToQuestion",
        "H5P.IVHotspot",
        "H5P.Text",
      ],
      d = function (t, e) {
        return -1 !== u.indexOf(t) || c(e, l.TIME_CODE);
      },
      h = ["H5P.Text", "H5P.Table"],
      p = function (t) {
        return -1 !== h.indexOf(t);
      };
    (o.prototype = Object.create(H5P.EventDispatcher.prototype)),
      (o.prototype.constructor = o),
      (o.PROGRESS_INTERACTED = 0),
      (o.PROGRESS_ANSWERED = 1),
      (e.default = o);
  },
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      })(),
      r = (function () {
        function t(e) {
          o(this, t), (this.l10n = e);
          var n = document.createElement("div");
          n.classList.add("h5p-iv-interactions-announcer"),
            n.setAttribute("aria-live", "polite"),
            (this.interactionsAnnouncer = n);
        }
        return (
          i(t, [
            {
              key: "getInteractionAnnouncer",
              value: function () {
                return this.interactionsAnnouncer;
              },
            },
            {
              key: "announceInteractions",
              value: function (t) {
                t.length > 0 &&
                  ((this.interactionsAnnouncer.textContent = ""),
                  (this.interactionsAnnouncer.textContent =
                    "\n        " +
                    this.getAnnouncementMessage(t.length) +
                    "\n        " +
                    this.getTitleAnnouncement(t.length, t[0]) +
                    "\n        " +
                    this.getPauseAnnouncement(t)));
              },
            },
            {
              key: "getAnnouncementMessage",
              value: function (t) {
                return 0 === t
                  ? ""
                  : 1 === t
                  ? this.l10n.singleInteractionAnnouncement
                  : this.l10n.multipleInteractionsAnnouncement;
              },
            },
            {
              key: "getTitleAnnouncement",
              value: function (t, e) {
                return 1 === t ? e.getTitle() : "";
              },
            },
            {
              key: "getPauseAnnouncement",
              value: function (t) {
                return t.some(function (t) {
                  return t.pause();
                })
                  ? ". " + this.l10n.videoPausedAnnouncement
                  : "";
              },
            },
          ]),
          t
        );
      })();
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      })(),
      r = H5P.jQuery,
      s = !!navigator.userAgent.match(/iPod|iPhone|iPad/g),
      a = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  content: "",
                  maxWidth: "auto",
                  style: "h5p-interactive-video-bubble",
                  mode: "centered",
                  focus: function () {},
                };
          o(this, t),
            (this.$reference = e),
            (this.maxWidth = n.maxWidth),
            (this.style = n.style),
            (this.mode = n.mode),
            (this.focus = n.focus),
            (this.$tail = r("<div/>", { class: this.style + "-tail" })),
            (this.$innerTail = r("<div/>", {
              class: this.style + "-inner-tail",
            })),
            (this.$content = r("<div/>", { class: this.style + "-text" })),
            "string" == typeof n.content
              ? this.$content.html(n.content)
              : this.$content.append(n.content),
            (this.$innerBubble = r("<div/>", { class: this.style + "-inner" })
              .append(this.$content)
              .prepend(this.$innerTail)),
            (this.$h5pContainer = this.$reference.closest(
              ".h5p-interactive-video"
            )),
            (this.$bubble = r("<div/>", {
              class: this.style,
              "aria-live": "polite",
            })
              .append([this.$tail, this.$innerBubble])
              .addClass(this.style + "-inactive")
              .appendTo(this.$h5pContainer)),
            s && H5P.$body.css("cursor", "pointer"),
            "centered" === this.mode &&
              this.$bubble.css({
                width: "auto" === this.maxWidth ? "auto" : this.maxWidth + "px",
              }),
            this.update();
        }
        return (
          i(t, [
            {
              key: "update",
              value: function () {
                var t = this,
                  e = this.getOffsetBetween(
                    this.$h5pContainer,
                    this.$reference
                  ),
                  n =
                    "full" === this.mode
                      ? this.$bubble.outerWidth()
                      : Math.min(
                          0.9 * e.outerWidth,
                          "auto" === this.maxWidth
                            ? this.$bubble.outerWidth()
                            : this.maxWidth
                        ),
                  o = this.getBubblePosition(n, e, this.mode);
                "centered" === this.mode &&
                  this.$bubble.css({
                    bottom: void 0 === o.bottom ? void 0 : o.bottom + "px",
                    left: o.left + "px",
                  }),
                  setTimeout(function () {
                    var e = t.getTailPosition(t.$reference),
                      n = {
                        bottom: e.bottom + "px",
                        left:
                          "string" == typeof e.left ? e.left : e.left + "px",
                      };
                    t.$tail.css(n), t.$innerTail.css(n);
                  }, 75);
              },
            },
            {
              key: "animate",
              value: function () {
                var t = this;
                this.$bubble.hasClass(this.style + "-inactive") &&
                  (this.$bubble
                    .removeClass(this.style + "-inactive")
                    .addClass(this.style + "-active"),
                  setTimeout(function () {
                    t.$bubble
                      .removeClass(t.style + "-active")
                      .addClass(t.style + "-inactive");
                  }, 2e3));
              },
            },
            {
              key: "setContent",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                this.$content.html(t), this.update();
              },
            },
            {
              key: "getContent",
              value: function () {
                return this.$content.get(0).outerHTML;
              },
            },
            {
              key: "isActive",
              value: function () {
                return this.$bubble.hasClass(this.style + "-active");
              },
            },
            {
              key: "toggle",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                (t = void 0 === t ? !this.isActive() : t),
                  t && n
                    ? (setTimeout(function () {
                        e.$bubble
                          .removeClass(e.style + "-preparing")
                          .addClass(e.style + "-active"),
                          setTimeout(function () {
                            return e.focus();
                          }, 400);
                      }, 100),
                      this.$bubble
                        .removeClass(this.style + "-inactive")
                        .addClass(this.style + "-preparing"))
                    : this.$bubble
                        .toggleClass(this.style + "-inactive", !t)
                        .toggleClass(this.style + "-active", t),
                  this.update();
              },
            },
            {
              key: "getBubblePosition",
              value: function (t, e, n) {
                var o = t / 2;
                return {
                  bottom: "full" === n ? void 0 : e.bottom + e.innerHeight + 4,
                  left: "full" === n ? (e.outerWidth - t) / 2 : e.left - o + 16,
                };
              },
            },
            {
              key: "getTailPosition",
              value: function (t) {
                return {
                  left: t.offset().left - this.$tail.parent().offset().left + 8,
                  top: -6,
                  bottom: -6,
                };
              },
            },
            {
              key: "getOffsetBetween",
              value: function (t, e) {
                var n = t[0].getBoundingClientRect(),
                  o = e[0].getBoundingClientRect();
                return {
                  top: o.top - n.top,
                  right: n.right - o.right,
                  bottom: n.bottom - o.bottom,
                  left: o.left - n.left + parseInt(e.css("marginLeft")),
                  innerWidth: o.width,
                  innerHeight: o.height,
                  outerWidth: n.width,
                  outerHeight: n.height,
                };
              },
            },
            {
              key: "fullscreen",
              value: function () {
                var t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : void 0,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : void 0,
                  o = this.isMobilePhone(),
                  i = t && !o && void 0 !== e && void 0 !== n,
                  r = { maxHeight: "", top: "" };
                i &&
                  ((r.maxHeight = "calc(" + n + "px - 1em - 9px)"),
                  (r.top = "calc(((" + (e - n) + "px + 1em) / 2) - 9px)")),
                  this.$bubble.toggleClass("mobile-fullscreen", o && t),
                  this.$bubble.css(r);
              },
            },
            {
              key: "isMobilePhone",
              value: function () {
                return (
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                    navigator.userAgent
                  ) ||
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                    navigator.userAgent.substr(0, 4)
                  )
                );
              },
            },
          ]),
          t
        );
      })();
    e.default = a;
  },
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function r(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      })(),
      l = n(17),
      c = H5P.jQuery,
      u = "h5p-interactive-video-endscreen",
      d = "h5p-interactive-video-endscreen-submit-button-hidden",
      h = function (t) {
        return void 0 !== t && null !== t;
      },
      p = (function (t) {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          o(this, e);
          var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (r.parent = t),
            (r.l10n = c.extend(
              {
                title: "@answered Questions answered",
                information:
                  "You have answered @answered questions, click below to submit your answers.",
                informationNoAnswers: "You have not answered any questions.",
                informationMustHaveAnswer:
                  "You have to answer at least one question before you can submit your answers.",
                submitButton: "Submit Answers",
                submitMessage: "Your answers have been submitted!",
                tableRowAnswered: "Answered questions",
                tableRowScore: "Score",
                answeredScore: "answered",
                tableRowSummaryWithScore:
                  "You got @score out of @total points for the @question that appeared after @minutes minutes and @seconds seconds.",
                tableRowSummaryWithoutScore:
                  "You have answered the @question that appeared after @minutes minutes and @seconds seconds.",
              },
              n.l10n
            )),
            r.buildDOM(),
            r
          );
        }
        return (
          r(e, t),
          a(e, [
            {
              key: "buildDOM",
              value: function () {
                var t = this;
                (this.$endscreenIntroductionTitleText = c("<div/>", {
                  class: u + "-introduction-title-text",
                  id: u + "-introduction-title-text",
                })),
                  (this.$closeButton = c("<div>", {
                    role: "button",
                    class: u + "-close-button",
                    tabindex: "0",
                    "aria-label": this.parent.l10n.close,
                  })),
                  (0, l.onClick)(this.$closeButton, function () {
                    return t.parent.toggleEndscreen(!1);
                  });
                var e = c("<div/>", {
                  class: u + "-introduction-title",
                }).append([
                  this.$endscreenIntroductionTitleText,
                  this.$closeButton,
                ]);
                (this.$endscreenIntroductionText = c("<div/>", {
                  class: u + "-introduction-text",
                  id: u + "-introduction-text",
                })),
                  (this.$submitButtonContainer = c("<div/>", {
                    class: u + "-submit-button-container " + d,
                  })),
                  (this.$submitButton = H5P.JoubelUI.createButton({
                    class: u + "-submit-button",
                    html: this.l10n.submitButton,
                    appendTo: this.$submitButtonContainer,
                    click: function () {
                      return t.handleSubmit();
                    },
                  })),
                  (this.$endscreenOverviewTitle = c("<div/>", {
                    class: u + "-overview-title",
                  })
                    .append(
                      c("<div/>", {
                        class: u + "-overview-title-answered-questions",
                        html: this.l10n.tableRowAnswered,
                      })
                    )
                    .append(
                      c("<div/>", {
                        class: u + "-overview-title-score",
                        html: this.l10n.tableRowScore,
                      })
                    )),
                  (this.$endscreenBottomTable = c("<div/>", {
                    class: u + "-overview-table",
                  })),
                  (this.$endscreen = c("<div/>", {
                    class: u,
                    role: "dialog",
                    "aria-labelledby": u + "-introduction-title-text",
                    "aria-describedby": u + "-introduction-text",
                  })
                    .append(
                      c("<div/>", { class: u + "-introduction" })
                        .append(c("<div/>", { class: u + "-star-symbol" }))
                        .append(
                          c("<div/>", {
                            class: u + "-introduction-container",
                          }).append([
                            e,
                            this.$endscreenIntroductionText,
                            this.$submitButtonContainer,
                          ])
                        )
                    )
                    .append(
                      c("<div/>", { class: u + "-overview" })
                        .append(this.$endscreenOverviewTitle)
                        .append(this.$endscreenBottomTable)
                    ));
              },
            },
            {
              key: "handleSubmit",
              value: function () {
                var t = this;
                this.$submitButtonContainer.hasClass(d) ||
                  (this.$submitButtonContainer.addClass(d),
                  this.$endscreenIntroductionText.html(
                    '<div class="' +
                      u +
                      '-introduction-text-submitted">' +
                      this.l10n.submitMessage +
                      "</div>"
                  ),
                  this.answered.forEach(function (e) {
                    if (
                      "completed" !== e.getLastXAPIVerb() &&
                      "answered" !== e.getLastXAPIVerb()
                    ) {
                      var n = new H5P.XAPIEvent();
                      (n.data.statement = e.getXAPIData().statement),
                        e.setLastXAPIVerb(n.getVerb()),
                        t.trigger(n);
                    }
                  }),
                  this.parent.triggerXAPIScored(
                    this.parent.getUsersScore(),
                    this.parent.getUsersMaxScore(),
                    "completed"
                  ),
                  void 0 !== s(this.parent.contentData.standalone) &&
                    this.parent.contentData.standalone &&
                    (console.log("Executed"),
                    this.parent.triggerXAPIScored(
                      this.parent.getUsersScore(),
                      this.parent.getUsersMaxScore(),
                      "submitted-curriki"
                    )));
              },
            },
            {
              key: "getDOM",
              value: function () {
                return this.$endscreen;
              },
            },
            {
              key: "buildTableRow",
              value: function (t, e, n, o) {
                var i = this,
                  r = h(n) && h(o),
                  s = r
                    ? this.l10n.tableRowSummaryWithScore
                    : this.l10n.tableRowSummaryWithoutScore,
                  a = this.parent.skippingPrevented()
                    ? " " + u + "-no-link"
                    : "",
                  d = c("<div/>", {
                    class: u + "-overview-table-row" + a,
                    role: "row",
                    tabIndex: 0,
                    "aria-label": s
                      .replace("@score", n)
                      .replace("@total", o)
                      .replace("@question", e)
                      .replace("@minutes", Math.floor(t / 60))
                      .replace("@seconds", t % 60),
                  });
                return (
                  (0, l.onClick)(d, function () {
                    return i.jump(t);
                  }),
                  c("<div/>", {
                    class: u + "-overview-table-row-time",
                    html: H5P.BrightcoveInteractiveVideo.humanizeTime(t),
                    appendTo: d,
                    "aria-hidden": !0,
                  }),
                  c("<div/>", {
                    class: u + "-overview-table-row-title",
                    html: e,
                    appendTo: d,
                    "aria-hidden": !0,
                  }),
                  c("<div/>", {
                    class: u + "-overview-table-row-score",
                    html: r ? n + " / " + o : this.l10n.answeredScore,
                    appendTo: d,
                    "aria-hidden": !0,
                  }),
                  d
                );
              },
            },
            {
              key: "jump",
              value: function (t) {
                this.parent.skippingPrevented() ||
                  (this.parent.seek(t), this.parent.toggleEndscreen(!1));
              },
            },
            {
              key: "update",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                (this.answered = e
                  .filter(function (t) {
                    return void 0 !== t.getProgress();
                  })
                  .sort(function (t, e) {
                    return t.getDuration().from - e.getDuration().from;
                  })),
                  this.$endscreenBottomTable.empty(),
                  this.answered.forEach(function (e) {
                    var n = e.getDuration().from,
                      o = t.getDescription(e),
                      i = e.getInstance(),
                      r = i.getScore ? i.getScore() : void 0,
                      s = i.getMaxScore ? i.getMaxScore() : void 0;
                    t.$endscreenBottomTable.append(t.buildTableRow(n, o, r, s));
                  });
                var n = this.answered.length;
                this.$endscreenIntroductionTitleText.html(
                  this.l10n.title.replace("@answered", n)
                ),
                  0 === n
                    ? this.$endscreenIntroductionText.html(
                        '<div class="' +
                          u +
                          '-bold-text">' +
                          this.l10n.informationNoAnswers +
                          "</div><div>" +
                          this.l10n.informationMustHaveAnswer +
                          "<div>"
                      )
                    : this.$endscreenIntroductionText.html(
                        this.l10n.information.replace("@answered", n)
                      ),
                  n > 0 && this.$submitButtonContainer.removeClass(d);
              },
            },
            {
              key: "getDescription",
              value: function (t) {
                return "function" == typeof t.getInstance &&
                  "function" == typeof t.getInstance().getTitle
                  ? t.getInstance().getTitle()
                  : t.getTitle();
              },
            },
            {
              key: "focus",
              value: function () {
                this.$submitButtonContainer.hasClass(d)
                  ? this.$closeButton.focus()
                  : this.$submitButton.focus();
              },
            },
          ]),
          e
        );
      })(H5P.EventDispatcher);
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.onClick = void 0);
    var o = n(3);
    e.onClick = function (t, e) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = n.ignoreKeyboard,
        r = void 0 !== i && i,
        s = n.preventDefaultForKeys,
        a = void 0 === s || s,
        l = function (t) {
          "click" !== t.type && a && t.preventDefault(), e(t);
        };
      t.click(l),
        !0 !== r &&
          (0, o.onKey)(t, [{ key: o.Keys.SPACE }, { key: o.Keys.ENTER }], l);
    };
  },
]);