!
    function() {
        function k(b, a, c) {
            if (t[b] = {
                    exports: {},
                    value: null,
                    factory: null
                },
                2 === arguments.length && (c = a), "[object Object]" === t.toString.call(c)) t[b].value = c;
            else {
                if ("function" != typeof c) throw Error("define函数未定义的行为");
                t[b].factory = c
            }
        }
        function w(b) {
            var b = t[b],
                a = null;
            return b ? b.value ? b.value: (a = b.factory.call(null, w, b.exports, b), a && (b.exports = a), b.value = b.exports, b.value) : null
        }
        var t = {};
        k("animate/animator", "animate/timeline graphic/eventhandler animate/frame core/utils core/class animate/easing graphic/shape graphic/svg graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                function a(a) {
                    var c = parseFloat(a, 10);
                    return /ms/.test(a) ? c: /s/.test(a) ? 1E3 * c: /min/.test(a) ? c * 6E4: c
                }
                var c = b("animate/timeline"),
                    e = b("animate/easing"),
                    d = b("core/class").createClass("Animator", {
                        constructor: function(a, c, d) {
                            if (1 == arguments.length) {
                                var e = arguments[0];
                                this.beginValue = e.beginValue;
                                this.finishValue = e.finishValue;
                                this.setter = e.setter
                            } else {
                                this.beginValue = a;
                                this.finishValue = c;
                                this.setter = d
                            }
                        },
                        start: function(c, d, e, f, b) {
                            4 === arguments.length && "function" == typeof f && (b = f, f = 0);
                            var m = this.create(c, d, e, b);
                            return f = a(f),
                                f > 0 ? setTimeout(function() {
                                        m.play()
                                    },
                                    f) : m.play(),
                                m
                        },
                        create: function(f, b, j, i) {
                            var l;
                            return b = b && a(b) || d.DEFAULT_DURATION,
                                j = j || d.DEFAULT_EASING,
                            "string" == typeof j && (j = e[j]),
                                l = new c(this, f, b, j),
                            "function" == typeof i && l.on("finish", i),
                                l
                        },
                        reverse: function() {
                            return new d(this.finishValue, this.beginValue, this.setter)
                        }
                    });
                d.DEFAULT_DURATION = 300;
                d.DEFAULT_EASING = "linear";
                var f = b("graphic/shape");
                return b("core/class").extendClass(f, {
                    animate: function(a, c, d, e, f) {
                        var b = this._KityAnimateQueue = this._KityAnimateQueue || [],
                            a = a.create(this, c, d, f);
                        return a.on("finish",
                            function() {
                                b.shift();
                                b.length && setTimeout(b[0].t.play.bind(b[0].t), b[0].d)
                            }),
                            b.push({
                                t: a,
                                d: e
                            }),
                        1 == b.length && setTimeout(a.play.bind(a), e),
                            this
                    },
                    timeline: function() {
                        return this._KityAnimateQueue[0].t
                    },
                    stop: function() {
                        var a = this._KityAnimateQueue;
                        if (a) for (; a.length;) a.shift().stop()
                    }
                }),
                    d
            });
        k("animate/easing", [],
            function() {
                var b = {
                    linear: function(a, c, e, d) {
                        return e * (a / d) + c
                    },
                    swing: function(a, c, e, d) {
                        return b.easeOutQuad(a, c, e, d)
                    },
                    ease: function(a, c, e, d) {
                        return b.easeInOutCubic(a, c, e, d)
                    },
                    easeInQuad: function(a, c, e, d) {
                        return e * (a /= d) * a + c
                    },
                    easeOutQuad: function(a, c, e, d) {
                        return - e * (a /= d) * (a - 2) + c
                    },
                    easeInOutQuad: function(a, c, e, d) {
                        return 1 > (a /= d / 2) ? e / 2 * a * a + c: -e / 2 * (--a * (a - 2) - 1) + c
                    },
                    easeInCubic: function(a, c, e, d) {
                        return e * (a /= d) * a * a + c
                    },
                    easeOutCubic: function(a, c, e, d) {
                        return e * ((a = a / d - 1) * a * a + 1) + c
                    },
                    easeInOutCubic: function(a, c, e, d) {
                        return 1 > (a /= d / 2) ? e / 2 * a * a * a + c: e / 2 * ((a -= 2) * a * a + 2) + c
                    },
                    easeInQuart: function(a, c, e, d) {
                        return e * (a /= d) * a * a * a + c
                    },
                    easeOutQuart: function(a, c, e, d) {
                        return - e * ((a = a / d - 1) * a * a * a - 1) + c
                    },
                    easeInOutQuart: function(a, c, e, d) {
                        return 1 > (a /= d / 2) ? e / 2 * a * a * a * a + c: -e / 2 * ((a -= 2) * a * a * a - 2) + c
                    },
                    easeInQuint: function(a, c, e, d) {
                        return e * (a /= d) * a * a * a * a + c
                    },
                    easeOutQuint: function(a, c, e, d) {
                        return e * ((a = a / d - 1) * a * a * a * a + 1) + c
                    },
                    easeInOutQuint: function(a, c, e, d) {
                        return 1 > (a /= d / 2) ? e / 2 * a * a * a * a * a + c: e / 2 * ((a -= 2) * a * a * a * a + 2) + c
                    },
                    easeInSine: function(a, c, e, d) {
                        return - e * Math.cos(a / d * (Math.PI / 2)) + e + c
                    },
                    easeOutSine: function(a, c, e, d) {
                        return e * Math.sin(a / d * (Math.PI / 2)) + c
                    },
                    easeInOutSine: function(a, c, e, d) {
                        return - e / 2 * (Math.cos(Math.PI * a / d) - 1) + c
                    },
                    easeInExpo: function(a, c, e, d) {
                        return 0 === a ? c: e * Math.pow(2, 10 * (a / d - 1)) + c
                    },
                    easeOutExpo: function(a, c, e, d) {
                        return a == d ? c + e: e * ( - Math.pow(2, -10 * a / d) + 1) + c
                    },
                    easeInOutExpo: function(a, c, e, d) {
                        return 0 === a ? c: a == d ? c + e: 1 > (a /= d / 2) ? e / 2 * Math.pow(2, 10 * (a - 1)) + c: e / 2 * ( - Math.pow(2, -10 * --a) + 2) + c
                    },
                    easeInCirc: function(a, c, e, d) {
                        return - e * (Math.sqrt(1 - (a /= d) * a) - 1) + c
                    },
                    easeOutCirc: function(a, c, e, d) {
                        return e * Math.sqrt(1 - (a = a / d - 1) * a) + c
                    },
                    easeInOutCirc: function(a, c, e, d) {
                        return 1 > (a /= d / 2) ? -e / 2 * (Math.sqrt(1 - a * a) - 1) + c: e / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
                    },
                    easeInElastic: function(a, c, e, d) {
                        var f = 1.70158,
                            b = 0,
                            h = e;
                        return 0 === a ? c: 1 == (a /= d) ? c + e: (b || (b = 0.3 * d), h < Math.abs(e) ? (h = e, f = b / 4) : f = b / (2 * Math.PI) * Math.asin(e / h), -(h * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - f) * Math.PI / b)) + c)
                    },
                    easeOutElastic: function(a, c, e, d) {
                        var f = 1.70158,
                            b = 0,
                            h = e;
                        return 0 === a ? c: 1 == (a /= d) ? c + e: (b || (b = 0.3 * d), h < Math.abs(e) ? (h = e, f = b / 4) : f = b / (2 * Math.PI) * Math.asin(e / h), h * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - f) * Math.PI / b) + e + c)
                    },
                    easeInOutElastic: function(a, c, e, d) {
                        var b = 1.70158,
                            g = 0,
                            h = e;
                        if (0 === a) return c;
                        if (2 == (a /= d / 2)) return c + e; (g || (g = 1.5 * 0.3 * d), h < Math.abs(e)) ? (h = e, b = g / 4) : b = g / (2 * Math.PI) * Math.asin(e / h);
                        return 1 > a ? -0.5 * h * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - b) * Math.PI / g) + c: 0.5 * h * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - b) * Math.PI / g) + e + c
                    },
                    easeInBack: function(a, c, e, d, b) {
                        return void 0 == b && (b = 1.70158),
                        e * (a /= d) * a * ((b + 1) * a - b) + c
                    },
                    easeOutBack: function(a, c, e, d, b) {
                        return void 0 == b && (b = 1.70158),
                        e * ((a = a / d - 1) * a * ((b + 1) * a + b) + 1) + c
                    },
                    easeInOutBack: function(a, c, e, d, b) {
                        return void 0 == b && (b = 1.70158),
                            1 > (a /= d / 2) ? e / 2 * a * a * (((b *= 1.525) + 1) * a - b) + c: e / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) + c
                    },
                    easeInBounce: function(a, c, e, d) {
                        return e - b.easeOutBounce(d - a, 0, e, d) + c
                    },
                    easeOutBounce: function(a, c, e, d) {
                        return (a /= d) < 1 / 2.75 ? 7.5625 * e * a * a + c: 2 / 2.75 > a ? e * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c: 2.5 / 2.75 > a ? e * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c: e * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
                    },
                    easeInOutBounce: function(a, c, e, d) {
                        return d / 2 > a ? 0.5 * b.easeInBounce(2 * a, 0, e, d) + c: 0.5 * b.easeOutBounce(2 * a - d, 0, e, d) + 0.5 * e + c
                    }
                };
                return b
            });
        k("animate/frame", [],
            function(b, a) {
                function c() {
                    var a = f;
                    for (f = []; a.length;) {
                        var c = a.pop(),
                            d = +new Date,
                            e = d - c.time;
                        200 < e && (e = 1E3 / 60);
                        c.dur = e;
                        c.elapsed += e;
                        c.time = d;
                        c.action.call(null, c);
                        c.index++
                    }
                }
                function e(a) {
                    var e = {
                        index: 0,
                        time: +new Date,
                        elapsed: 0,
                        action: a,
                        next: function() {
                            1 === f.push(e) && d(c)
                        }
                    };
                    return e
                }
                var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
                        function(a) {
                            return setTimeout(a, 1E3 / 60)
                        },
                    f = [];
                a.requestFrame = function(a) {
                    a = e(a);
                    1 === f.push(a) && d(c);
                    return a
                };
                a.releaseFrame = function(a) {
                    a = f.indexOf(a);~a && f.splice(a, 1)
                }
            });
        k("animate/motionanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/geometry core/utils graphic/point graphic/vector graphic/matrix graphic/path graphic/svg".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("graphic/geometry"),
                    e = b("graphic/path"),
                    d = b("core/class").createClass("MotionAnimator", {
                        base: a,
                        constructor: function(a) {
                            var d = this;
                            this.callBase({
                                beginValue: 0,
                                finishValue: 1,
                                setter: function(a, b) {
                                    var f = d.motionPath instanceof e ? d.motionPath.getPathData() : d.motionPath,
                                        f = c.pointAtPath(f, b);
                                    a.setTranslate(f.x, f.y);
                                    a.setRotate(f.tan.getAngle())
                                }
                            });
                            this.updatePath(a)
                        },
                        updatePath: function(a) {
                            this.motionPath = a
                        }
                    });
                return b("core/class").extendClass(e, {
                    motion: function(a, c, e, b, i) {
                        return this.animate(new d(a), c, e, b, i)
                    }
                }),
                    d
            });
        k("animate/opacityanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("core/class").createClass("OpacityAnimator", {
                        base: a,
                        constructor: function(a) {
                            this.callBase({
                                beginValue: function(a) {
                                    return a.getOpacity()
                                },
                                finishValue: a,
                                setter: function(a, c) {
                                    a.setOpacity(c)
                                }
                            })
                        }
                    }),
                    a = b("graphic/shape");
                return b("core/class").extendClass(a, {
                    fxOpacity: function(a, d, b, g, h) {
                        return this.animate(new c(a), d, b, g, h)
                    },
                    fadeTo: function() {
                        return this.fxOpacity.apply(this, arguments)
                    },
                    fadeIn: function() {
                        return this.fxOpacity.apply(this, [1].concat([].slice.call(arguments)))
                    },
                    fadeOut: function() {
                        return this.fxOpacity.apply(this, [0].concat([].slice.call(arguments)))
                    }
                }),
                    c
            });
        k("animate/pathanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/geometry core/utils graphic/point graphic/vector graphic/matrix graphic/path graphic/svg".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("graphic/geometry"),
                    e = b("core/class").createClass("OpacityAnimator", {
                        base: a,
                        constructor: function(a) {
                            this.callBase({
                                beginValue: function(a) {
                                    return this.beginPath = a.getPathData(),
                                        0
                                },
                                finishValue: 1,
                                setter: function(e, b) {
                                    e.setPathData(c.pathTween(this.beginPath, a, b))
                                }
                            })
                        }
                    }),
                    a = b("graphic/path");
                return b("core/class").extendClass(a, {
                    fxPath: function(a, c, b, h, j) {
                        return this.animate(new e(a), c, b, h, j)
                    }
                }),
                    e
            });
        k("animate/rotateanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("core/class").createClass("RotateAnimator", {
                        base: a,
                        constructor: function(a, c, b) {
                            this.callBase({
                                beginValue: 0,
                                finishValue: a,
                                setter: function(a, e, j) {
                                    e = j.getDelta();
                                    a.rotate(e, c, b)
                                }
                            })
                        }
                    }),
                    a = b("graphic/shape");
                return b("core/class").extendClass(a, {
                    fxRotate: function(a, d, b, g, h) {
                        return this.animate(new c(a), d, b, g, h)
                    },
                    fxRotateAnchor: function(a, d, b, g, h, j, i) {
                        return this.animate(new c(a, d, b), g, h, j, i)
                    }
                }),
                    c
            });
        k("animate/scaleanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("core/class").createClass("ScaleAnimator", {
                        base: a,
                        constructor: function(a, c) {
                            this.callBase({
                                beginValue: 0,
                                finishValue: 1,
                                setter: function(b, g, h) {
                                    h = h.getDelta();
                                    g = Math.pow(a, h);
                                    h = Math.pow(c, h);
                                    b.scale(h, g)
                                }
                            })
                        }
                    }),
                    a = b("graphic/shape");
                return b("core/class").extendClass(a, {
                    fxScale: function(a, b, f, g, h, j) {
                        return this.animate(new c(a, b), f, g, h, j)
                    }
                }),
                    c
            });
        k("animate/timeline", ["graphic/eventhandler", "core/utils", "graphic/shapeevent", "core/class", "animate/frame"],
            function(b) {
                function a(a, c, b) {
                    return g.paralle(a, c,
                        function(a, c) {
                            return a + (c - a) * b
                        })
                }
                function c(a, c) {
                    return g.paralle(a, c,
                        function(a, c) {
                            return c - a
                        })
                }
                function e(a, c, b) {
                    this.timeline = a;
                    this.target = a.target;
                    this.type = c;
                    for (var d in b) b.hasOwnProperty(d) && (this[d] = b[d])
                }
                var d = b("graphic/eventhandler"),
                    f = b("animate/frame"),
                    g = b("core/utils"),
                    b = b("core/class").createClass("Timeline", {
                        mixins: [d],
                        constructor: function(a, c, b, d) {
                            this.callMixin();
                            this.target = c;
                            this.time = 0;
                            this.duration = b;
                            this.easing = d;
                            this.animator = a;
                            this.beginValue = a.beginValue;
                            this.finishValue = a.finishValue;
                            this.setter = a.setter;
                            this.status = "ready"
                        },
                        nextFrame: function(a) {
                            "playing" == this.status && (this.time += a.dur, this.setValue(this.getValue()), this.time >= this.duration && this.timeUp(), a.next())
                        },
                        getPlayTime: function() {
                            return this.rollbacking ? this.duration - this.time: this.time
                        },
                        getTimeProportion: function() {
                            return this.getPlayTime() / this.duration
                        },
                        getValueProportion: function() {
                            return this.easing(this.getPlayTime(), 0, 1, this.duration)
                        },
                        getValue: function() {
                            var c = this.beginValue,
                                b = this.finishValue,
                                d = this.getValueProportion();
                            return a(c, b, d)
                        },
                        setValue: function(a) {
                            this.lastValue = this.currentValue;
                            this.currentValue = a;
                            this.setter.call(this.target, this.target, a, this)
                        },
                        getDelta: function() {
                            return this.lastValue = void 0 === this.lastValue ? this.beginValue: this.lastValue,
                                c(this.lastValue, this.currentValue)
                        },
                        play: function() {
                            var a = this.status;
                            switch (this.status = "playing", a) {
                                case "ready":
                                    g.isFunction(this.beginValue) && (this.beginValue = this.beginValue.call(this.target, this.target));
                                    g.isFunction(this.finishValue) && (this.finishValue = this.finishValue.call(this.target, this.target));
                                    this.time = 0;
                                    this.frame = f.requestFrame(this.nextFrame.bind(this));
                                    break;
                                case "finished":
                                case "stoped":
                                    this.time = 0;
                                    this.frame = f.requestFrame(this.nextFrame.bind(this));
                                    break;
                                case "paused":
                                    this.frame.next()
                            }
                            return this.fire("play", new e(this, "play", {
                                lastStatus: a
                            })),
                                this
                        },
                        pause: function() {
                            return this.status = "paused",
                                this.fire("pause", new e(this, "pause")),
                                f.releaseFrame(this.frame),
                                this
                        },
                        stop: function() {
                            return this.status = "stoped",
                                this.setValue(this.finishValue),
                                this.rollbacking = !1,
                                this.fire("stop", new e(this, "stop")),
                                f.releaseFrame(this.frame),
                                this
                        },
                        timeUp: function() {
                            this.repeatOption ? (this.time = 0, this.rollback ? this.rollbacking ? (this.decreaseRepeat(), this.rollbacking = !1) : (this.rollbacking = !0, this.fire("rollback", new e(this, "rollback"))) : this.decreaseRepeat(), this.repeatOption ? this.fire("repeat", new e(this, "repeat")) : this.finish()) : this.finish()
                        },
                        finish: function() {
                            this.setValue(this.finishValue);
                            this.status = "finished";
                            this.fire("finish", new e(this, "finish"));
                            f.releaseFrame(this.frame)
                        },
                        decreaseRepeat: function() { ! 0 !== this.repeatOption && this.repeatOption--
                        },
                        repeat: function(a, c) {
                            return this.repeatOption = a,
                                this.rollback = c,
                                this
                        }
                    });
                return b.requestFrame = f.requestFrame,
                    b.releaseFrame = f.releaseFrame,
                    b
            });
        k("animate/translateanimator", "animate/animator animate/timeline animate/easing core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("animate/animator"),
                    c = b("core/class").createClass("TranslateAnimator", {
                        base: a,
                        constructor: function(a, c) {
                            this.callBase({
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: a,
                                    y: c
                                },
                                function(a, c, b) {
                                    c = b.getDelta();
                                    a.translate(c.x, c.y)
                                })
                        }
                    }),
                    a = b("graphic/shape");
                return b("core/class").extendClass(a, {
                    fxTranslate: function(a, b, f, g, h, j) {
                        return this.animate(new c(a, b), f, g, h, j)
                    }
                }),
                    c
            });
        k("core/browser", [],
            function() {
                var b, a = navigator.userAgent.toLowerCase(),
                    c = window.opera;
                b = {
                    ie: /(msie\s|trident.*rv:)([\w.]+)/.test(a),
                    opera: !!c && c.version,
                    webkit: -1 < a.indexOf(" applewebkit/"),
                    mac: -1 < a.indexOf("macintosh"),
                    quirks: "BackCompat" == document.compatMode
                };
                b.gecko = "Gecko" == navigator.product && !b.webkit && !b.opera && !b.ie;
                var e = 0;
                if (b.ie && (e = 1 * (a.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0), b.ie11Compat = 11 == document.documentMode, b.ie9Compat = 9 == document.documentMode), b.gecko) {
                    var d = a.match(/rv:([\d\.]+)/);
                    d && (d = d[1].split("."), e = 1E4 * d[0] + 100 * (d[1] || 0) + 1 * (d[2] || 0))
                }
                return /chrome\/(\d+\.\d)/i.test(a) && (b.chrome = +RegExp.$1),
                /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a) && !/chrome/i.test(a) && (b.safari = +(RegExp.$1 || RegExp.$2)),
                b.opera && (e = parseFloat(c.version())),
                b.webkit && (e = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])),
                    b.version = e,
                    b.isCompatible = !b.mobile && (b.ie && 6 <= e || b.gecko && 10801 <= e || b.opera && 9.5 <= e || b.air && 1 <= e || b.webkit && 522 <= e || !1),
                    b
            });
        k("core/class", [],
            function(b, a) {
                function c() {}
                function e(a, c) {
                    if (!/this\.callBase/.test(a.toString())) throw Error(c + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数");
                }
                function d(a, c) {
                    var b = function(a) {
                        a != h && b.__KityConstructor.apply(this, arguments);
                        this.__KityClassName = b.__KityClassName
                    };
                    b.__KityConstructor = a;
                    b.prototype = new c(h);
                    for (var d in c.prototype) c.prototype.hasOwnProperty(d) && 0 !== d.indexOf("__Kity") && (b.prototype[d] = c.prototype[d]);
                    return b.prototype.constructor = b,
                        b
                }
                function f(a, c) {
                    if (!1 == c instanceof Array) return a;
                    var b, d, e, f = c.length;
                    a.__KityMixins = {
                        constructor: []
                    };
                    for (b = 0; f > b; b++) for (e in d = c[b].prototype, d) ! 1 !== d.hasOwnProperty(e) && 0 !== e.indexOf("__Kity") && ("constructor" === e ? a.__KityMixins.constructor.push(d[e]) : a.prototype[e] = a.__KityMixins[e] = d[e]);
                    return a
                }
                function g(a, c) {
                    c.__KityClassName && (c = c.prototype);
                    for (var b in c) if (c.hasOwnProperty(b) && b.indexOf("__Kity") && "constructor" != b) {
                        var d = a.prototype[b] = c[b];
                        d.__KityMethodClass = a;
                        d.__KityMethodName = b
                    }
                    return a
                }
                Function.prototype.bind = Function.prototype.bind ||
                    function(a) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        return this.apply(a, c)
                    };
                c.__KityClassName = "Class";
                c.prototype.base = function(a) {
                    return arguments.callee.caller.__KityMethodClass.__KityBaseClass.prototype[a].apply(this, Array.prototype.slice.call(arguments, 1))
                };
                c.prototype.callBase = function() {
                    var a = arguments.callee.caller;
                    return a.__KityMethodClass.__KityBaseClass.prototype[a.__KityMethodName].apply(this, arguments)
                };
                c.prototype.mixin = function(a) {
                    var c = arguments.callee.caller.__KityMethodClass.__KityMixins;
                    return ! c ? this: c[a].apply(this, Array.prototype.slice.call(arguments, 1))
                };
                c.prototype.callMixin = function() {
                    var a = arguments.callee.caller,
                        c = a.__KityMethodName,
                        a = a.__KityMethodClass.__KityMixins;
                    if (!a) return this;
                    a = a[c];
                    if ("constructor" == c) {
                        for (var c = 0,
                                 b = a.length; b > c; c++) a[c].call(this);
                        return this
                    }
                    return a.apply(this, arguments)
                };
                c.prototype.pipe = function(a) {
                    return "function" == typeof a && a.call(this, this),
                        this
                };
                c.prototype.getType = function() {
                    return this.__KityClassName
                };
                c.prototype.getClass = function() {
                    return this.constructor
                };
                var h = "__KITY_INHERIT_FLAG_" + +new Date;
                c.prototype._accessProperty = function() {
                    return this._propertyRawData || (this._propertyRawData = {})
                };
                a.createClass = function(a, b) {
                    var h, m, k;
                    return 1 === arguments.length && (b = arguments[0], a = "AnonymousClass"),
                        k = b.base || c,
                        b.hasOwnProperty("constructor") ? (h = b.constructor, k != c && e(h, a)) : h = function() {
                            this.callBase.apply(this, arguments);
                            this.callMixin.apply(this, arguments)
                        },
                        m = d(h, k, a),
                        m = f(m, b.mixins),
                        m.__KityClassName = h.__KityClassName = a,
                        m.__KityBaseClass = h.__KityBaseClass = k,
                        m.__KityMethodName = h.__KityMethodName = "constructor",
                        m.__KityMethodClass = h.__KityMethodClass = m,
                        delete b.mixins,
                        delete b.constructor,
                        delete b.base,
                        m = g(m, b)
                };
                a.extendClass = g
            });
        k("core/utils", [],
            function() {
                var b = {
                    each: function(a, c, b) {
                        if (null !== a) if (a.length === +a.length) for (var d = 0,
                                                                             f = a.length; f > d; d++) {
                            if (!1 === c.call(b, a[d], d, a)) return ! 1
                        } else for (d in a) if (a.hasOwnProperty(d) && !1 === c.call(b, a[d], d, a)) return ! 1
                    },
                    extend: function(a) {
                        for (var c = arguments,
                                 b = this.isBoolean(c[c.length - 1]) ? c[c.length - 1] : !1, d = this.isBoolean(c[c.length - 1]) ? c.length - 1 : c.length, f = 1; d > f; f++) {
                            var g = c[f],
                                h;
                            for (h in g) b && a.hasOwnProperty(h) || (a[h] = g[h])
                        }
                        return a
                    },
                    deepExtend: function(a) {
                        for (var c = arguments,
                                 b = this.isBoolean(c[c.length - 1]) ? c[c.length - 1] : !1, d = this.isBoolean(c[c.length - 1]) ? c.length - 1 : c.length, f = 1; d > f; f++) {
                            var g = c[f],
                                h;
                            for (h in g) b && a.hasOwnProperty(h) || (this.isObject(a[h]) && this.isObject(g[h]) ? this.deepExtend(a[h], g[h], b) : a[h] = g[h])
                        }
                        return a
                    },
                    clone: function(a) {
                        var c = {},
                            b;
                        for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
                        return c
                    },
                    copy: function(a) {
                        return "object" != typeof a ? a: "function" == typeof a ? null: JSON.parse(JSON.stringify(a))
                    },
                    queryPath: function(a, c) {
                        for (var b = a.split("."), d = 0, f = c, g = b.length; g > d && b[d] in f;) if (f = f[b[d]], d++, d >= g || void 0 === f) return f
                    },
                    getValue: function(a, c) {
                        return void 0 !== a ? a: c
                    },
                    flatten: function(a) {
                        var c, e = [],
                            d = a.length;
                        for (c = 0; d > c; c++) a[c] instanceof Array ? e = e.concat(b.flatten(a[c])) : e.push(a[c]);
                        return e
                    },
                    paralle: function(a, c, e) {
                        var d, f, g;
                        if (a instanceof Array) {
                            g = [];
                            for (d = 0; d < a.length; d++) g.push(b.paralle(a[d], c[d], e));
                            return g
                        }
                        if (a instanceof Object) {
                            if (d = a.getClass && a.getClass(), d && d.parse) a = a.valueOf(),
                                c = c.valueOf(),
                                g = b.paralle(a, c, e),
                                g = d.parse(g);
                            else for (f in g = {},
                                a) a.hasOwnProperty(f) && c.hasOwnProperty(f) && (g[f] = b.paralle(a[f], c[f], e));
                            return g
                        }
                        return ! 1 === isNaN(parseFloat(a)) ? e(a, c) : g
                    },
                    parallelize: function(a) {
                        return function(c, e) {
                            return b.paralle(c, e, a)
                        }
                    }
                };
                return b.each("String Function Array Number RegExp Object Boolean".split(" "),
                    function(a) {
                        b["is" + a] = function(c) {
                            return Object.prototype.toString.apply(c) == "[object " + a + "]"
                        }
                    }),
                    b
            });
        k("filter/effect/colormatrixeffect", ["filter/effect/effect", "graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("filter/effect/effect"),
                    c = b("core/utils"),
                    e = b("core/class").createClass("ColorMatrixEffect", {
                        base: a,
                        constructor: function(b, f) {
                            this.callBase(a.NAME_COLOR_MATRIX);
                            this.set("type", c.getValue(b, e.TYPE_MATRIX));
                            this.set("in", c.getValue(f, a.INPUT_SOURCE_GRAPHIC))
                        }
                    });
                return c.extend(e, {
                    TYPE_MATRIX: "matrix",
                    TYPE_SATURATE: "saturate",
                    TYPE_HUE_ROTATE: "hueRotate",
                    TYPE_LUMINANCE_TO_ALPHA: "luminanceToAlpha",
                    MATRIX_ORIGINAL: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",
                    MATRIX_EMPTY: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                }),
                    e
            });
        k("filter/effect/compositeeffect", ["filter/effect/effect", "graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("filter/effect/effect"),
                    c = b("core/utils"),
                    e = b("core/class").createClass("CompositeEffect", {
                        base: a,
                        constructor: function(b, f, g) {
                            this.callBase(a.NAME_COMPOSITE);
                            this.set("operator", c.getValue(b, e.OPERATOR_OVER));
                            f && this.set("in", f);
                            g && this.set("in2", g)
                        }
                    });
                return c.extend(e, {
                    OPERATOR_OVER: "over",
                    OPERATOR_IN: "in",
                    OPERATOR_OUT: "out",
                    OPERATOR_ATOP: "atop",
                    OPERATOR_XOR: "xor",
                    OPERATOR_ARITHMETIC: "arithmetic"
                }),
                    e
            });
        k("filter/effect/convolvematrixeffect", ["filter/effect/effect", "graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("filter/effect/effect"),
                    c = b("core/utils"),
                    e = b("core/class").createClass("ConvolveMatrixEffect", {
                        base: a,
                        constructor: function(b, f) {
                            this.callBase(a.NAME_CONVOLVE_MATRIX);
                            this.set("edgeMode", c.getValue(b, e.MODE_DUPLICATE));
                            this.set("in", c.getValue(f, a.INPUT_SOURCE_GRAPHIC))
                        }
                    });
                return c.extend(e, {
                    MODE_DUPLICATE: "duplicate",
                    MODE_WRAP: "wrap",
                    MODE_NONE: "none"
                }),
                    e
            });
        k("filter/effect/effect", ["graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("graphic/svg"),
                    c = b("core/class").createClass("Effect", {
                        constructor: function(c) {
                            this.node = a.createNode(c)
                        },
                        getId: function() {
                            return this.node.id
                        },
                        setId: function(a) {
                            return this.node.id = a,
                                this
                        },
                        set: function(a, c) {
                            return this.node.setAttribute(a, c),
                                this
                        },
                        get: function(a) {
                            return this.node.getAttribute(a)
                        },
                        getNode: function() {
                            return this.node
                        },
                        toString: function() {
                            return this.node.getAttribute("result") || ""
                        }
                    });
                return b("core/utils").extend(c, {
                    NAME_GAUSSIAN_BLUR: "feGaussianBlur",
                    NAME_OFFSET: "feOffset",
                    NAME_COMPOSITE: "feComposite",
                    NAME_COLOR_MATRIX: "feColorMatrix",
                    NAME_CONVOLVE_MATRIX: "feConvolveMatrix",
                    INPUT_SOURCE_GRAPHIC: "SourceGraphic",
                    INPUT_SOURCE_ALPHA: "SourceAlpha",
                    INPUT_BACKGROUND_IMAGE: "BackgroundImage",
                    INPUT_BACKGROUND_ALPHA: "BackgroundAlpha",
                    INPUT_FILL_PAINT: "FillPaint",
                    INPUT_STROKE_PAINT: "StrokePaint"
                }),
                    c
            });
        k("filter/effect/gaussianblureffect", ["filter/effect/effect", "graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("filter/effect/effect"),
                    c = b("core/utils");
                return b("core/class").createClass("GaussianblurEffect", {
                    base: a,
                    constructor: function(b, d) {
                        this.callBase(a.NAME_GAUSSIAN_BLUR);
                        this.set("stdDeviation", c.getValue(b, 1));
                        this.set("in", c.getValue(d, a.INPUT_SOURCE_GRAPHIC))
                    }
                })
            });
        k("filter/effect/offseteffect", ["filter/effect/effect", "graphic/svg", "core/class", "core/utils"],
            function(b) {
                var a = b("filter/effect/effect"),
                    c = b("core/utils");
                return b("core/class").createClass("OffsetEffect", {
                    base: a,
                    constructor: function(b, d, f) {
                        this.callBase(a.NAME_OFFSET);
                        this.set("dx", c.getValue(b, 0));
                        this.set("dy", c.getValue(d, 0));
                        this.set("in", c.getValue(f, a.INPUT_SOURCE_GRAPHIC))
                    }
                })
            });
        k("filter/effectcontainer", ["core/class", "graphic/container"],
            function(b) {
                return b("core/class").createClass("EffectContainer", {
                    base: b("graphic/container"),
                    addEffect: function() {
                        return this.addItem.apply(this, arguments)
                    },
                    prependEffect: function() {
                        return this.prependItem.apply(this, arguments)
                    },
                    appendEffect: function() {
                        return this.appendItem.apply(this, arguments)
                    },
                    removeEffect: function() {
                        return this.removeItem.apply(this, arguments)
                    },
                    addEffects: function() {
                        return this.addItems.apply(this, arguments)
                    },
                    setEffects: function() {
                        return this.setItems.apply(this, arguments)
                    },
                    getEffect: function() {
                        return this.getItem.apply(this, arguments)
                    },
                    getEffects: function() {
                        return this.getItems.apply(this, arguments)
                    },
                    getFirstEffect: function() {
                        return this.getFirstItem.apply(this, arguments)
                    },
                    getLastEffect: function() {
                        return this.getLastItem.apply(this, arguments)
                    },
                    handleAdd: function(a, c) {
                        var b = this.getEffects().length,
                            d = this.getItem(c + 1);
                        return b === c + 1 ? void this.node.appendChild(a.getNode()) : void this.node.insertBefore(a.getNode(), d.getNode())
                    }
                })
            });
        k("filter/filter", "graphic/svg core/class filter/effectcontainer graphic/container graphic/shape core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("graphic/svg"),
                    c = b("core/class"),
                    e = c.createClass("Filter", {
                        mixins: [b("filter/effectcontainer")],
                        constructor: function(c, b, e, h) {
                            this.node = a.createNode("filter");
                            void 0 !== c && this.set("x", c);
                            void 0 !== b && this.set("y", b);
                            void 0 !== e && this.set("width", e);
                            void 0 !== h && this.set("height", h)
                        },
                        getId: function() {
                            return this.id
                        },
                        setId: function(a) {
                            return this.node.id = a,
                                this
                        },
                        set: function(a, c) {
                            return this.node.setAttribute(a, c),
                                this
                        },
                        get: function(a) {
                            return this.node.getAttribute(a)
                        },
                        getNode: function() {
                            return this.node
                        }
                    }),
                    b = b("graphic/shape");
                return c.extendClass(b, {
                    applyFilter: function(a) {
                        a = a.get("id");
                        return a && this.node.setAttribute("filter", "url(#" + a + ")"),
                            this
                    }
                }),
                    e
            });
        k("filter/gaussianblurfilter", "filter/effect/gaussianblureffect filter/effect/effect core/utils core/class filter/filter graphic/svg filter/effectcontainer graphic/shape".split(" "),
            function(b) {
                var a = b("filter/effect/gaussianblureffect");
                return b("core/class").createClass("GaussianblurFilter", {
                    base: b("filter/filter"),
                    constructor: function(c) {
                        this.callBase();
                        this.addEffect(new a(c))
                    }
                })
            });
        k("filter/projectionfilter", "filter/effect/gaussianblureffect filter/effect/effect core/utils core/class graphic/svg filter/effect/colormatrixeffect graphic/color graphic/standardcolor filter/effect/compositeeffect filter/effect/offseteffect filter/filter filter/effectcontainer graphic/shape".split(" "),
            function(b) {
                var a = b("filter/effect/gaussianblureffect"),
                    c = b("filter/effect/effect"),
                    e = b("filter/effect/colormatrixeffect"),
                    d = b("graphic/color"),
                    f = b("core/utils"),
                    g = b("filter/effect/compositeeffect"),
                    h = b("filter/effect/offseteffect");
                return b("core/class").createClass("ProjectionFilter", {
                    base: b("filter/filter"),
                    constructor: function(b, d, f) {
                        this.callBase();
                        this.gaussianblurEffect = new a(b, c.INPUT_SOURCE_ALPHA);
                        this.gaussianblurEffect.set("result", "gaussianblur");
                        this.addEffect(this.gaussianblurEffect);
                        this.offsetEffect = new h(d, f, this.gaussianblurEffect);
                        this.offsetEffect.set("result", "offsetBlur");
                        this.addEffect(this.offsetEffect);
                        this.colorMatrixEffect = new e(e.TYPE_MATRIX, this.offsetEffect);
                        this.colorMatrixEffect.set("values", e.MATRIX_ORIGINAL);
                        this.colorMatrixEffect.set("result", "colorOffsetBlur");
                        this.addEffect(this.colorMatrixEffect);
                        this.compositeEffect = new g(g.OPERATOR_OVER, c.INPUT_SOURCE_GRAPHIC, this.colorMatrixEffect);
                        this.addEffect(this.compositeEffect)
                    },
                    setColor: function(a) {
                        var c = null,
                            b = [];
                        if (f.isString(a) && (a = d.parse(a)), !a) return this;
                        c = e.MATRIX_EMPTY.split(" ");
                        b.push(a.get("r"));
                        b.push(a.get("g"));
                        b.push(a.get("b"));
                        for (var g = 0,
                                 h = b.length; h > g; g++) c[5 * g + 3] = b[g] / 255;
                        return c[18] = a.get("a"),
                            this.colorMatrixEffect.set("values", c.join(" ")),
                            this
                    },
                    setOpacity: function(a) {
                        var c = this.colorMatrixEffect.get("values").split(" ");
                        return c[18] = a,
                            this.colorMatrixEffect.set("values", c.join(" ")),
                            this
                    },
                    setOffset: function(a, c) {
                        this.setOffsetX(a);
                        this.setOffsetY(c)
                    },
                    setOffsetX: function(a) {
                        this.offsetEffect.set("dx", a)
                    },
                    setOffsetY: function(a) {
                        this.offsetEffect.set("dy", a)
                    },
                    setDeviation: function(a) {
                        this.gaussianblurEffect.set("stdDeviation", a)
                    }
                })
            });
        k("graphic/bezier", "core/class graphic/pointcontainer graphic/container graphic/path core/utils graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                return b("core/class").createClass("Bezier", {
                    mixins: [b("graphic/pointcontainer")],
                    base: b("graphic/path"),
                    constructor: function(a) {
                        this.callBase();
                        a = a || [];
                        this.changeable = true;
                        this.setBezierPoints(a)
                    },
                    getBezierPoints: function() {
                        return this.getPoints()
                    },
                    setBezierPoints: function(a) {
                        return this.setPoints(a)
                    },
                    onContainerChanged: function() {
                        this.changeable && this.update()
                    },
                    update: function() {
                        var a = null,
                            c = this.getBezierPoints();
                        if (! (c.length < 2)) {
                            a = this.getDrawer();
                            a.clear();
                            var b = c[0].getVertex(),
                                d = null,
                                f = null;
                            a.moveTo(b.x, b.y);
                            for (var g = 1,
                                     h = c.length; h > g; g++) {
                                b = c[g].getVertex();
                                f = c[g].getBackward();
                                d = c[g - 1].getForward();
                                a.bezierTo(d.x, d.y, f.x, f.y, b.x, b.y)
                            }
                            return this
                        }
                    }
                })
            });
        k("graphic/bezierpoint", ["graphic/shapepoint", "core/class", "graphic/point", "graphic/vector", "graphic/matrix"],
            function(b) {
                var a = b("graphic/shapepoint"),
                    c = b("graphic/vector"),
                    e = b("core/class").createClass("BezierPoint", {
                        constructor: function(c, b, e) {
                            this.vertex = new a(c, b);
                            this.forward = new a(c, b);
                            this.backward = new a(c, b);
                            this.setSmooth(void 0 === e || e);
                            this.setSymReflaction(!0)
                        },
                        clone: function() {
                            var a = new e,
                                c = null;
                            return c = this.getVertex(),
                                a.setVertex(c.x, c.y),
                                c = this.getForward(),
                                a.setForward(c.x, c.y),
                                c = this.getBackward(),
                                a.setBackward(c.x, c.y),
                                a.setSmooth(a.isSmooth()),
                                a
                        },
                        setVertex: function(a, c) {
                            return this.vertex.setPoint(a, c),
                                this.update(),
                                this
                        },
                        moveTo: function(a, c) {
                            var b = this.forward.getPoint(),
                                e = this.backward.getPoint(),
                                j = this.vertex.getPoint(),
                                i = a - j.x,
                                j = c - j.y;
                            this.forward.setPoint(b.x + i, b.y + j);
                            this.backward.setPoint(e.x + i, e.y + j);
                            this.vertex.setPoint(a, c);
                            this.update()
                        },
                        setForward: function(a, c) {
                            return this.forward.setPoint(a, c),
                            this.smooth && this.updateAnother(this.forward, this.backward),
                                this.update(),
                                this
                        },
                        setBackward: function(a, c) {
                            return this.backward.setPoint(a, c),
                            this.smooth && this.updateAnother(this.backward, this.forward),
                                this.update(),
                                this
                        },
                        setSymReflaction: function(a) {
                            this.symReflaction = a
                        },
                        isSymReflaction: function() {
                            return this.symReflaction
                        },
                        updateAnother: function(a, b) {
                            var e = this.getVertex(),
                                h = c.fromPoints(a.getPoint(), e),
                                j = c.fromPoints(e, b.getPoint()),
                                j = c.normalize(h, this.isSymReflaction() ? h.length() : j.length());
                            b.setPoint(e.x + j.x, e.y + j.y)
                        },
                        setSmooth: function(a) {
                            return this.smooth = !!a,
                                this
                        },
                        getVertex: function() {
                            return this.vertex.getPoint()
                        },
                        getForward: function() {
                            return this.forward.getPoint()
                        },
                        getBackward: function() {
                            return this.backward.getPoint()
                        },
                        isSmooth: function() {
                            return this.smooth
                        },
                        update: function() {
                            return this.container ? void(this.container.update && this.container.update(this)) : this
                        }
                    });
                return e
            });
        k("graphic/box", ["core/class"],
            function(b) {
                var a = b("core/class").createClass("Box", {
                    constructor: function(a, b, d, f) {
                        var g = a;
                        g && "object" == typeof g && (a = g.x, b = g.y, d = g.width, f = g.height);
                        0 > d && (a -= d = -d);
                        0 > f && (b -= f = -f);
                        this.x = a;
                        this.y = b;
                        this.width = d;
                        this.height = f
                    },
                    getLeft: function() {
                        return this.x
                    },
                    getRight: function() {
                        return this.x + this.width
                    },
                    getTop: function() {
                        return this.y
                    },
                    getBottom: function() {
                        return this.y + this.height
                    },
                    getRangeX: function() {
                        return [this.x, this.x + this.width]
                    },
                    getRangeY: function() {
                        return [this.y, this.y + this.height]
                    },
                    merge: function(c) {
                        var b = Math.min(this.x, c.x),
                            d = Math.max(this.x + this.width, c.x + c.width),
                            f = Math.min(this.y, c.y),
                            c = Math.max(this.y + this.height, c.y + c.height);
                        return new a(b, f, d - b, c - f)
                    },
                    valueOf: function() {
                        return [this.x, this.y, this.width, this.height]
                    },
                    toString: function() {
                        return this.valueOf().join(" ")
                    }
                });
                return a
            });
        k("graphic/circle", ["core/class", "graphic/ellipse", "core/utils", "graphic/point", "graphic/path"],
            function(b) {
                return b("core/class").createClass("Circle", {
                    base: b("graphic/ellipse"),
                    constructor: function(a, c, b) {
                        this.callBase(a, a, c, b)
                    },
                    getRadius: function() {
                        return this.getRadiusX()
                    },
                    setRadius: function(a) {
                        return this.callBase(a, a)
                    }
                })
            });
        k("graphic/clip", "core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box graphic/shapecontainer graphic/container".split(" "),
            function(b) {
                var a = b("core/class"),
                    c = b("graphic/shape"),
                    b = a.createClass("Clip", {
                        base: c,
                        mixins: [b("graphic/shapecontainer")],
                        constructor: function() {
                            this.callBase("clipPath")
                        },
                        clip: function(a) {
                            return a.getNode().setAttribute("clip-path", "url(#" + this.getId() + ")"),
                                this
                        }
                    });
                return a.extendClass(c, {
                    clipWith: function(a) {
                        return a.clip(this),
                            this
                    }
                }),
                    b
            });
        k("graphic/color", ["core/utils", "graphic/standardcolor", "core/class"],
            function(b) {
                var a = b("core/utils"),
                    c = b("graphic/standardcolor"),
                    e = {},
                    d = b("core/class").createClass("Color", {
                        constructor: function(c, b, d, j) {
                            var i = null;
                            "string" == typeof c ? (i = e.parseToValue(c), null === i && (i = {
                                r: 0,
                                g: 0,
                                b: 0,
                                h: 0,
                                s: 0,
                                l: 0,
                                a: 1
                            })) : (i = {
                                r: 0 | c,
                                g: 0 | b,
                                b: 0 | d,
                                a: parseFloat(j) || 1
                            },
                                i = e.overflowFormat(i), i = a.extend(i, e.rgbValueToHslValue(i)));
                            this._color = i
                        },
                        set: function(c, b) {
                            if (!d._MAX_VALUE[c]) throw Error("Color set(): Illegal parameter");
                            return "a" !== c && (b = Math.floor(b)),
                            "h" == c && (b = (b + 360) % 360),
                                this._color[c] = Math.max(d._MIN_VALUE[c], Math.min(d._MAX_VALUE[c], b)),
                                -1 !== "rgb".indexOf(c) ? this._color = a.extend(this._color, e.rgbValueToHslValue(this._color)) : -1 !== "hsl".indexOf(c) && (this._color = a.extend(this._color, e.hslValueToRGBValue(this._color))),
                                this
                        },
                        inc: function(a, c) {
                            return c = this.get(a) + c,
                                "h" == a ? c = (c + 360) % 360 : (c = Math.min(d._MAX_VALUE[a], c), c = Math.max(d._MIN_VALUE[a], c)),
                                this.clone().set(a, c)
                        },
                        dec: function(a, c) {
                            return this.inc(a, -c)
                        },
                        clone: function() {
                            return new d(this.toRGBA())
                        },
                        get: function(a) {
                            return d._MAX_VALUE[a] ? this._color[a] : null
                        },
                        getValues: function() {
                            return a.clone(this._color)
                        },
                        valueOf: function() {
                            return this.getValues()
                        },
                        toRGB: function() {
                            return e.toString(this._color, "rgb")
                        },
                        toRGBA: function() {
                            return e.toString(this._color, "rgba")
                        },
                        toHEX: function() {
                            return e.toString(this._color, "hex")
                        },
                        toHSL: function() {
                            return e.toString(this._color, "hsl")
                        },
                        toHSLA: function() {
                            return e.toString(this._color, "hsla")
                        },
                        toString: function() {
                            return 1 === this._color.a ? this.toRGB() : this.toRGBA()
                        }
                    });
                return a.extend(d, {
                    _MAX_VALUE: {
                        r: 255,
                        g: 255,
                        b: 255,
                        h: 360,
                        s: 100,
                        l: 100,
                        a: 1
                    },
                    _MIN_VALUE: {
                        r: 0,
                        g: 0,
                        b: 0,
                        h: 0,
                        s: 0,
                        l: 0,
                        a: 0
                    },
                    R: "r",
                    G: "g",
                    B: "b",
                    H: "h",
                    S: "s",
                    L: "l",
                    A: "a",
                    parse: function(c) {
                        var b;
                        return a.isString(c) && (b = e.parseToValue(c)),
                        a.isObject(c) && "r" in c && (b = c),
                            null === b ? new d: new d(b.r, b.g, b.b, b.a)
                    },
                    createHSL: function(a, c, b) {
                        return d.createHSLA(a, c, b, 1)
                    },
                    createHSLA: function(a, c, b, e) {
                        var i = null;
                        return c += "%",
                            b += "%",
                            i = ["hsla(" + a, c, b, e + ")"],
                            d.parse(i.join(", "))
                    },
                    createRGB: function(a, c, b) {
                        return d.createRGBA(a, c, b, 1)
                    },
                    createRGBA: function(a, c, b, e) {
                        return new d(a, c, b, e)
                    }
                }),
                    a.extend(e, {
                        parseToValue: function(a) {
                            var b = {};
                            if (a = c.EXTEND_STANDARD[a] || c.COLOR_STANDARD[a] || a, /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a)) b = e.hexToValue(a);
                            else if (/^(rgba?)/i.test(a)) b = e.rgbaToValue(a);
                            else {
                                if (!/^(hsla?)/i.test(a)) return null;
                                b = e.hslaToValue(a)
                            }
                            return e.overflowFormat(b)
                        },
                        hexToValue: function(c) {
                            var b = {},
                                d = ["r", "g", "b"];
                            return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c) ? (c = RegExp.$1.split(""), a.each(d,
                                function(a, d) {
                                    b[a] = e.toNumber(3 === c.length ? c[d] + c[d] : c[2 * d] + c[2 * d + 1])
                                }), b = a.extend(b, e.rgbValueToHslValue(b)), b.a = 1, b) : null
                        },
                        rgbaToValue: function(c) {
                            var b = {},
                                d = !1,
                                j = ["r", "g", "b"];
                            return /^(rgba?)/i.test(c) ? (d = 4 === RegExp.$1.length, c = c.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), a.each(j,
                                function(a, d) {
                                    b[a] = 0 | c[d]
                                }), b = a.extend(b, e.rgbValueToHslValue(b)), b.a = d ? parseFloat(c[3]) : 1, b) : null
                        },
                        hslaToValue: function(c) {
                            var b = {},
                                d = !1;
                            return /^(hsla?)/i.test(c) ? (d = 4 === RegExp.$1.length, c = c.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), b.h = 0 | c[0], b.s = 0 | c[1], b.l = 0 | c[2], b = a.extend(b, e.hslValueToRGBValue(b)), b = e.hslValueToRGBValue(b), b.a = d ? parseFloat(c[3]) : 1, b) : null
                        },
                        hslValueToRGBValue: function(c) {
                            function b(a, c, d) {
                                return 0 > d ? d += 1 : 1 < d && (d -= 1),
                                    1 > 6 * d ? a + 6 * (c - a) * d: 1 > 2 * d ? c: 2 > 3 * d ? a + 6 * (c - a) * (2 / 3 - d) : a
                            }
                            var d = null,
                                e = null,
                                i = {};
                            return c = a.extend({},
                                c),
                                c.h /= 360,
                                c.s /= 100,
                                c.l /= 100,
                                0 === c.s ? i.r = i.g = i.b = c.l: (d = 0.5 > c.l ? c.l * (1 + c.s) : c.l + c.s - c.l * c.s, e = 2 * c.l - d, i.r = b(e, d, c.h + 1 / 3), i.g = b(e, d, c.h), i.b = b(e, d, c.h - 1 / 3)),
                                i.r = Math.min(Math.round(255 * i.r), 255),
                                i.g = Math.min(Math.round(255 * i.g), 255),
                                i.b = Math.min(Math.round(255 * i.b), 255),
                                i
                        },
                        rgbValueToHslValue: function(c) {
                            var b = null,
                                d = null,
                                e = {};
                            return c = a.extend({},
                                c),
                                c.r /= 255,
                                c.g /= 255,
                                c.b /= 255,
                                b = Math.max(c.r, c.g, c.b),
                                d = Math.min(c.r, c.g, c.b),
                                b === d ? e.h = 0 : b === c.r ? e.h = c.g >= c.b ? 60 * (c.g - c.b) / (b - d) : 60 * (c.g - c.b) / (b - d) + 360 : b === c.g ? e.h = 60 * (c.b - c.r) / (b - d) + 120 : b === c.b && (e.h = 60 * (c.r - c.g) / (b - d) + 240),
                                e.l = (b + d) / 2,
                                e.s = 0 === e.l || b === d ? 0 : 0 < e.l && 0.5 >= e.l ? (b - d) / (b + d) : (b - d) / (2 - b - d),
                                e.h = Math.round(e.h),
                                e.s = Math.round(100 * e.s),
                                e.l = Math.round(100 * e.l),
                                e
                        },
                        toString: function(c, b) {
                            var d = [];
                            return c = a.extend({},
                                c),
                            -1 !== b.indexOf("hsl") && (c.s += "%", c.l += "%"),
                                "hex" !== b ? (a.each(b.split(""),
                                    function(a) {
                                        d.push(c[a])
                                    }), (b + "(" + d.join(", ") + ")").toLowerCase()) : (d.push(e.toHexValue( + c.r)), d.push(e.toHexValue( + c.g)), d.push(e.toHexValue( + c.b)), ("#" + d.join("")).toLowerCase())
                        },
                        toNumber: function(a) {
                            return 0 | Number("0x" + a)
                        },
                        toHexValue: function(a) {
                            a = a.toString(16);
                            return 1 === a.length ? "0" + a: a
                        },
                        overflowFormat: function(c) {
                            var b = a.extend({},
                                c);
                            return a.each(["r", "g", "b", "a"],
                                function(a) {
                                    b.hasOwnProperty(a) && (b[a] = Math.min(d._MAX_VALUE[a], b[a]), b[a] = Math.max(d._MIN_VALUE[a], b[a]))
                                }),
                                b
                        }
                    }),
                    d
            });
        k("graphic/container", ["core/class"],
            function(b) {
                function a() {
                    return this.container.removeItem(this),
                        this
                }
                return b("core/class").createClass("Container", {
                    getItems: function() {
                        return this.items || (this.items = [])
                    },
                    getItem: function(a) {
                        return this.getItems()[a]
                    },
                    getFirstItem: function() {
                        return this.getItem(0)
                    },
                    getLastItem: function() {
                        return this.getItem(this.getItems().length - 1)
                    },
                    indexOf: function(a) {
                        return this.getItems().indexOf(a)
                    },
                    eachItem: function(a) {
                        var b, d = this.getItems(),
                            f = d.length;
                        for (b = 0; f > b; b++) a.call(this, b, d[b]);
                        return this
                    },
                    addItem: function(c, b, d) {
                        var f = this.getItems(),
                            g = f.length;
                        return~f.indexOf(c) ? this: (0 <= b && g > b || (b = g), f.splice(b, 0, c), "object" == typeof c && (c.container = this, c.remove = a), this.handleAdd(c, b), d || this.onContainerChanged("add", [c]), this)
                    },
                    addItems: function(a) {
                        for (var b = 0,
                                 d = a.length; d > b; b++) this.addItem(a[b], -1, !0);
                        return this.onContainerChanged("add", a),
                            this
                    },
                    setItems: function(a) {
                        return this.clear().addItems(a)
                    },
                    appendItem: function(a) {
                        return this.addItem(a)
                    },
                    prependItem: function(a) {
                        return this.addItem(a, 0)
                    },
                    removeItem: function(a, b) {
                        if ("number" != typeof a) return this.removeItem(this.indexOf(a));
                        var d = this.getItems(),
                            f = (d.length, d[a]);
                        return void 0 === f ? this: (d.splice(a, 1), f.container && delete f.container, f.remove && delete f.remove, this.handleRemove(f, a), b || this.onContainerChanged("remove", [f]), this)
                    },
                    clear: function() {
                        for (var a, b = []; a = this.getFirstItem();) b.push(a),
                            this.removeItem(0, !0);
                        return this.onContainerChanged("remove", b),
                            this
                    },
                    onContainerChanged: function() {},
                    handleAdd: function() {},
                    handleRemove: function() {}
                })
            });
        k("graphic/curve", "core/utils core/class graphic/path graphic/shape graphic/svg graphic/geometry graphic/pointcontainer graphic/container".split(" "),
            function(b) {
                var a = b("core/utils"),
                    c = {
                        getCurvePanLines: function(a, b) {
                            var f = c.getCenterPoints(a),
                                f = c.getPanLine(a.length, f);
                            return c.getMovedPanLines(a, f, b)
                        },
                        getCenterPoints: function(a) {
                            for (var c = {},
                                     b = null,
                                     g = 0,
                                     h = 0,
                                     j = a.length; j > g; g++) {
                                h = g === j - 1 ? 0 : g + 1;
                                b = g + "," + h;
                                c[b] = {
                                    x: (a[g].x + a[h].y) / 2,
                                    y: (a[g].x + a[h].y) / 2
                                }
                            }
                            return c
                        },
                        getPanLine: function(a, c) {
                            for (var b, g = {},
                                     h = null,
                                     j = 0; a > j; j++) {
                                var i = null;
                                b = null;
                                h = b = (j + 1) % a;
                                i = c[j + "," + b];
                                j = b;
                                b = (j + 1) % a;
                                b = c[j + "," + b];
                                g[h] = {
                                    points: [{
                                        x: i.x,
                                        y: i.y
                                    },
                                        {
                                            x: b.x,
                                            y: b.y
                                        }],
                                    center: {
                                        x: (i.x + b.x) / 2,
                                        y: (i.y + b.y) / 2
                                    }
                                };
                                j = (h + a - 1) % a
                            }
                            return g
                        },
                        getMovedPanLines: function(c, b, f) {
                            var g = {};
                            return a.each(c,
                                function(c, e) {
                                    var i = b[e],
                                        l = i.center,
                                        m = l.x - c.x,
                                        k = l.y - c.y,
                                        o = g[e] = {
                                            points: [],
                                            center: {
                                                x: c.x,
                                                y: c.y
                                            }
                                        };
                                    a.each(i.points,
                                        function(a) {
                                            var a = {
                                                    x: a.x - m,
                                                    y: a.y - k
                                                },
                                                c = o.center,
                                                b = a.y - c.y;
                                            a.x = c.x + f * (a.x - c.x);
                                            a.y = c.y + f * b;
                                            o.points.push(a)
                                        })
                                }),
                                g
                        }
                    };
                return b("core/class").createClass("Curve", {
                    base: b("graphic/path"),
                    mixins: [b("graphic/pointcontainer")],
                    constructor: function(a, c) {
                        this.callBase();
                        this.setPoints(a || []);
                        this.closeState = !!c;
                        this.changeable = true;
                        this.smoothFactor = 1;
                        this.update()
                    },
                    onContainerChanged: function() {
                        this.changeable && this.update()
                    },
                    setSmoothFactor: function(a) {
                        return this.smoothFactor = 0 > a ? 0 : a,
                            this.update(),
                            this
                    },
                    getSmoothFactor: function() {
                        return this.smoothFactor
                    },
                    update: function() {
                        var a = this.getPoints(),
                            b = null,
                            f = this.getDrawer(),
                            g = null,
                            h = null,
                            j = null;
                        if ((f.clear(), 0 === a.length) || (f.moveTo(a[0]), 1 === a.length)) return this;
                        if (2 === a.length) return f.lineTo(a[1]),
                            this;
                        for (var b = c.getCurvePanLines(a, this.getSmoothFactor()), i = 1, l = a.length; l > i; i++) {
                            g = b[i].center;
                            h = this.closeState || i != l - 1 ? b[i].points[0] : b[i].center;
                            j = this.closeState || 1 != i ? b[i - 1].points[1] : b[i - 1].center;
                            f.bezierTo(j.x, j.y, h.x, h.y, g.x, g.y)
                        }
                        return this.closeState && (g = b[0].center, h = b[0].points[0], j = b[a.length - 1].points[1], f.bezierTo(j.x, j.y, h.x, h.y, g.x, g.y)),
                            this
                    },
                    close: function() {
                        return this.closeState = true,
                            this.update()
                    },
                    open: function() {
                        return this.closeState = false,
                            this.update()
                    },
                    isClose: function() {
                        return !! this.closeState
                    }
                })
            });
        k("graphic/data", ["core/class"],
            function(b) {
                return b("core/class").createClass("Data", {
                    constructor: function() {
                        this._data = {}
                    },
                    setData: function(a, c) {
                        return this._data[a] = c,
                            this
                    },
                    getData: function(a) {
                        return this._data[a]
                    },
                    removeData: function(a) {
                        return delete this._data[a],
                            this
                    }
                })
            });
        k("graphic/defbrush", ["core/class", "graphic/resource", "graphic/svg"],
            function(b) {
                return b("core/class").createClass("GradientBrush", {
                    base: b("graphic/resource"),
                    constructor: function(a) {
                        this.callBase(a)
                    }
                })
            });
        k("graphic/ellipse", "core/utils graphic/point core/class graphic/path graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                var a = (b("core/utils"), b("graphic/point"));
                return b("core/class").createClass("Ellipse", {
                    base: b("graphic/path"),
                    constructor: function(a, b, d, f) {
                        this.callBase();
                        this.rx = a || 0;
                        this.ry = b || 0;
                        this.cx = d || 0;
                        this.cy = f || 0;
                        this.update()
                    },
                    update: function() {
                        var a = this.rx,
                            b = this.ry,
                            d = this.cx + a,
                            f = this.cx - a,
                            g = this.cy,
                            h = this.getDrawer();
                        return h.clear(),
                            h.moveTo(d, g),
                            h.arcTo(a, b, 0, 1, 1, f, g),
                            h.arcTo(a, b, 0, 1, 1, d, g),
                            this
                    },
                    getRadius: function() {
                        return {
                            x: this.rx,
                            y: this.ry
                        }
                    },
                    getRadiusX: function() {
                        return this.rx
                    },
                    getRadiusY: function() {
                        return this.ry
                    },
                    getCenter: function() {
                        return new a(this.cx, this.cy)
                    },
                    getCenterX: function() {
                        return this.cx
                    },
                    getCenterY: function() {
                        return this.cy
                    },
                    setRadius: function(a, b) {
                        return this.rx = a,
                            this.ry = b,
                            this.update()
                    },
                    setRadiusX: function(a) {
                        return this.rx = a,
                            this.update()
                    },
                    setRadiusY: function(a) {
                        return this.ry = a,
                            this.update()
                    },
                    setCenter: function(b, e) {
                        if (1 == arguments.length) var d = a.parse(arguments[0]),
                            b = d.x,
                            e = d.y;
                        return this.cx = b,
                            this.cy = e,
                            this.update()
                    },
                    setCenterX: function(a) {
                        return this.cx = a,
                            this.update()
                    },
                    setCenterY: function(a) {
                        return this.cy = a,
                            this.update()
                    }
                })
            });
        k("graphic/eventhandler", ["core/utils", "graphic/shapeevent", "graphic/matrix", "graphic/point", "core/class"],
            function(b) {
                function a(a, b, c) {
                    return c = !!c,
                    g.isString(a) && (a = a.match(/\S+/g)),
                        g.each(a,
                            function(a) {
                                e.call(this, this.node, a, b, c)
                            },
                            this),
                        this
                }
                function c(a, b) {
                    var c = null,
                        d = this._EVNET_UID,
                        e = void 0 === b;
                    try {
                        c = i[d][a]
                    } catch(h) {
                        return
                    }
                    return e || (e = !0, g.each(c,
                        function(a, d) {
                            a === b ? delete c[d] : e = !1
                        })),
                    e && (f(this.node, a, j[d][a]), delete i[d][a], delete j[d][a]),
                        this
                }
                function e(a, b, c, e) {
                    var f = this._EVNET_UID,
                        l = this;
                    j[f] || (j[f] = {});
                    j[f][b] || (j[f][b] = function(a) {
                        a = new h(a || window.event);
                        g.each(i[f][b],
                            function(c) {
                                var d;
                                return c && (d = c.call(l, a), e && l.off(b, c)),
                                    d
                            },
                            l)
                    });
                    i[f] || (i[f] = {});
                    i[f][b] ? i[f][b].push(c) : (i[f][b] = [c], a && d(a, b, j[f][b]))
                }
                function d(a, b, c) {
                    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
                }
                function f(a, b, c) {
                    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent(b, c)
                } !
                    function() {
                        function a(b, c) {
                            var c = c || {
                                        bubbles: !1,
                                        cancelable: !1,
                                        detail: void 0
                                    },
                                d = document.createEvent("CustomEvent");
                            return d.initCustomEvent(b, c.bubbles, c.cancelable, c.detail),
                                d
                        }
                        a.prototype = window.Event.prototype;
                        window.CustomEvent = a
                    } ();
                var g = b("core/utils"),
                    h = b("graphic/shapeevent"),
                    j = {},
                    i = {},
                    l = 0;
                return b("core/class").createClass("EventHandler", {
                    constructor: function() {
                        this._EVNET_UID = ++l
                    },
                    addEventListener: function(b, c) {
                        return a.call(this, b, c, !1)
                    },
                    addOnceEventListener: function(b, c) {
                        return a.call(this, b, c, !0)
                    },
                    removeEventListener: function(a, b) {
                        return c.call(this, a, b)
                    },
                    on: function() {
                        return this.addEventListener.apply(this, arguments)
                    },
                    once: function() {
                        return this.addOnceEventListener.apply(this, arguments)
                    },
                    off: function() {
                        return this.removeEventListener.apply(this, arguments)
                    },
                    fire: function() {
                        return this.trigger.apply(this, arguments)
                    },
                    trigger: function(a, b) {
                        if (this.node) {
                            var c = this.node,
                                d = new CustomEvent(a, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                            d._kityParam = b;
                            c.dispatchEvent(d)
                        } else a: {
                            d = c = null;
                            try {
                                if (d = j[this._EVNET_UID][a], !d) break a
                            } catch(e) {
                                break a
                            }
                            c = g.extend({
                                    type: a,
                                    target: this
                                },
                                b || {});
                            d.call(this, c)
                        }
                        return this
                    }
                })
            });
        k("graphic/geometry", "core/utils graphic/point core/class graphic/vector graphic/matrix graphic/box".split(" "),
            function(b) {
                function a(a) {
                    var b, c, d, e, h;
                    b = [];
                    for (c = 0; c < a.length; c++) {
                        e = a[c];
                        b.push(h = []);
                        for (d = 0; d < e.length; d++) h.push(e[d])
                    }
                    return a.isUniform && (b.isUniform = true),
                    a.isAbsolute && (b.isAbsolute = true),
                    a.isCurve && (b.isCurve = true),
                        b
                }
                function c(a, b, c) {
                    function d() {
                        var e = Array.prototype.slice.call(arguments, 0),
                            h = e.join("␀"),
                            f = d.cache = d.cache || {},
                            g = d.count = d.count || [];
                        if (f.hasOwnProperty(h)) {
                            a: for (var e = g,
                                        g = h,
                                        i = 0,
                                        j = e.length; j > i; i++) if (e[i] === g) {
                                e.push(e.splice(i, 1)[0]);
                                break a
                            }
                            h = c ? c(f[h]) : f[h]
                        } else h = (g.length >= 1E3 && delete f[g.shift()], g.push(h), f[h] = a.apply(b, e), c ? c(f[h]) : f[h]);
                        return h
                    }
                    return d
                }
                function e(a, b, c, d, h, f, g, i, j, l) {
                    var m, k, y, n, o, u, s, C, D, q, p, t, w, L, M, N, O, P, Q, G, H, I, J, A, r = Math,
                        v = r.PI,
                        R = Math.abs,
                        S = 120 * v / 180,
                        E = v / 180 * ( + h || 0),
                        x = [],
                        F = function(a, b, c) {
                            var d = a * r.cos(c) - b * r.sin(c),
                                a = a * r.sin(c) + b * r.cos(c);
                            return {
                                x: d,
                                y: a
                            }
                        };
                    if (l ? (q = l[0], p = l[1], C = l[2], D = l[3]) : (m = F(a, b, -E), a = m.x, b = m.y, m = F(i, j, -E), i = m.x, j = m.y, r.cos(v / 180 * h), r.sin(v / 180 * h), y = (a - i) / 2, n = (b - j) / 2, k = y * y / (c * c) + n * n / (d * d), k > 1 && (k = r.sqrt(k), c = k * c, d = k * d), o = c * c, u = d * d, s = (f == g ? -1 : 1) * r.sqrt(R((o * u - o * n * n - u * y * y) / (o * n * n + u * y * y))), C = s * c * n / d + (a + i) / 2, D = s * -d * y / c + (b + j) / 2, q = r.asin(((b - D) / d).toFixed(9)), p = r.asin(((j - D) / d).toFixed(9)), q = C > a ? v - q: q, p = C > i ? v - p: p, 0 > q && (q = 2 * v + q), 0 > p && (p = 2 * v + p), g && q > p && (q = q - 2 * v), !g && p > q && (p = p - 2 * v)), t = p - q, R(t) > S && (w = p, L = i, M = j, p = q + S * (g && p > q ? 1 : -1), i = C + c * r.cos(p), j = D + d * r.sin(p), x = e(i, j, c, d, h, 0, g, L, M, [p, w, C, D])), t = p - q, N = r.cos(q), O = r.sin(q), P = r.cos(p), Q = r.sin(p), G = r.tan(t / 4), H = 4 / 3 * c * G, I = 4 / 3 * d * G, J = [a, b], A = [a + H * O, b - I * N], h = [i + H * Q, j - I * P], f = [i, j], A[0] = 2 * J[0] - A[0], A[1] = 2 * J[1] - A[1], l) return [A, h, f].concat(x);
                    x = [A, h, f].concat(x).join().split(",");
                    a = [];
                    b = 0;
                    for (c = x.length; c > b; b++) a[b] = b % 2 ? F(x[b - 1], x[b], E).y: F(x[b], x[b + 1], E).x;
                    return a
                }
                function d(a, b, c, d, e, h) {
                    var f = 1 / 3,
                        g = 2 / 3;
                    return [f * a + g * c, f * b + g * d, f * e + g * c, f * h + g * d, e, h]
                }
                function f(a, b) {
                    var c = function(a) {
                            return function(b, c) {
                                return b + a * (c - b)
                            }
                        } (b || 0.5),
                        d = a[0],
                        e = a[1],
                        h = a[2],
                        f = a[3],
                        g = a[4],
                        i = a[5],
                        j = a[6],
                        l = a[7],
                        m = c(d, h),
                        k = c(e, f),
                        n = c(h, g),
                        o = c(f, i),
                        g = c(g, j),
                        i = c(i, l),
                        f = c(m, n),
                        h = c(k, o),
                        n = c(n, g),
                        o = c(o, i),
                        u = c(f, n),
                        c = c(h, o);
                    return [[d, e, m, k, f, h, u, c], [u, c, n, o, g, i, j, l]]
                }
                var g = b("core/utils"),
                    h = b("graphic/point"),
                    j = b("graphic/vector"),
                    i = b("graphic/matrix"),
                    l = {},
                    m = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi,
                    k = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi,
                    o = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0
                    };
                l.pathToString = function(a) {
                    return a = a || this,
                        "string" == typeof a ? a: a instanceof Array ? (a = g.flatten(a), a.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")) : void 0
                };
                l.parsePathString = c(function(a) {
                    var b = [];
                    return a.replace(m,
                        function(a, c, d) {
                            var e = [],
                                a = c.toLowerCase();
                            if (d.replace(k,
                                    function(a, b) {
                                        b && e.push( + b)
                                    }), "m" == a && e.length > 2 && (b.push([c].concat(e.splice(0, 2))), a = "l", c = "m" == c ? "l": "L"), "r" == a) b.push([c].concat(e));
                            else for (; e.length >= o[a] && (b.push([c].concat(e.splice(0, o[a]))), o[a]););
                        }),
                        b.isUniform = true,
                        b.toString = l.pathToString,
                        b
                });
                l.pathToAbsolute = c(function(a) {
                    var b, c, d, e, h, f, a = a.isUniform ? a: l.parsePathString(l.pathToString(a)),
                        g = [],
                        i = 0,
                        j = 0,
                        m = 0,
                        k = 0;
                    b = 0;
                    "M" == a[0][0] && (i = +a[0][1], j = +a[0][2], m = i, k = j, b++, g[0] = ["M", i, j]);
                    d = b;
                    for (h = a.length; h > d; d++) {
                        if (g.push(b = []), c = a[d], c[0] != c[0].toUpperCase()) switch (b[0] = c[0].toUpperCase(), b[0]) {
                            case "A":
                                b[1] = c[1];
                                b[2] = c[2];
                                b[3] = c[3];
                                b[4] = c[4];
                                b[5] = c[5];
                                b[6] = +(c[6] + i);
                                b[7] = +(c[7] + j);
                                break;
                            case "V":
                                b[1] = +c[1] + j;
                                break;
                            case "H":
                                b[1] = +c[1] + i;
                                break;
                            case "M":
                                m = +c[1] + i;
                                k = +c[2] + j;
                                break;
                            default:
                                e = 1;
                                for (f = c.length; f > e; e++) b[e] = +c[e] + (e % 2 ? i: j)
                        } else {
                            e = 0;
                            for (f = c.length; f > e; e++) b[e] = c[e]
                        }
                        switch (b[0]) {
                            case "Z":
                                i = m;
                                j = k;
                                break;
                            case "H":
                                i = b[1];
                                break;
                            case "V":
                                j = b[1];
                                break;
                            case "M":
                                m = b[b.length - 2];
                                k = b[b.length - 1];
                                break;
                            default:
                                i = b[b.length - 2];
                                j = b[b.length - 1]
                        }
                    }
                    return g.isUniform = true,
                        g.isAbsolute = true,
                        g.toString = l.pathToString,
                        g
                });
                l.pathToCurve = c(function(a) {
                    var b, c, h, f, g, i, j, m, k, z, n, o = [];
                    a.isAbsolute || (a = l.pathToAbsolute(a));
                    for (b = 0; b < a.length; b++) if (c = a[b][0], h = a[b].slice(1), "M" != c) {
                        switch ("Z" == c && (j = true, c = "L", h = f), i = h.slice(h.length - 2), "H" == c && (i = [h[0], g[1]], c = "L"), "V" == c && (i = [g[0], h[0]], c = "L"), ("S" == c || "T" == c) && (k = [g[0] + (g[0] - m[0]), g[1] + (g[1] - m[1])]), c) {
                            case "L":
                                z = g;
                                n = i;
                                break;
                            case "C":
                                z = h.slice(0, 2);
                                n = h.slice(2, 4);
                                break;
                            case "S":
                                z = k.slice();
                                n = h.slice(0, 2);
                                break;
                            case "Q":
                                m = h.slice(0, 2);
                                h = d.apply(null, g.concat(h));
                                z = h.slice(0, 2);
                                n = h.slice(2, 4);
                                break;
                            case "T":
                                h = d.apply(null, g.concat(k).concat(h));
                                z = h.slice(0, 2);
                                n = h.slice(2, 4);
                                break;
                            case "A":
                                h = e.apply(null, g.concat(h));
                                z = h.slice(0, 2);
                                n = h.slice(2, 4)
                        }
                        o.push(["C"].concat(z).concat(n).concat(i));
                        g = i;
                        "Q" != c && (m = n);
                        j && (o.push(["Z"]), j = false)
                    } else {
                        f = m = g = h;
                        o.push(a[b])
                    }
                    return o.isUniform = true,
                        o.isAbsolute = true,
                        o.isCurve = true,
                        o.toString = l.pathToString,
                        o
                });
                l.cutBezier = c(f);
                l.subBezier = function(a, b, c) {
                    a = f(a, b)[0];
                    return c ? f(a, c / b)[1] : a
                };
                l.pointAtBezier = function(a, b) {
                    var c = f(a, b)[0],
                        d = h.parse(c.slice(6)),
                        c = h.parse(c.slice(4, 2)),
                        c = j.fromPoints(c, d);
                    return d.tan = 0 === b ? l.pointAtBezier(a, 0.01).tan: c.normalize(),
                        d
                };
                l.bezierLength = c(function B(a, b) {
                    function c(a, b) {
                        var d = a[0] - b[0],
                            e = a[1] - b[1];
                        return Math.sqrt(d * d + e * e)
                    }
                    var b = Math.max(b || 0.001, 1.0E-9),
                        d,
                        e,
                        h,
                        g,
                        i;
                    return d = f(a),
                        e = a.slice(0, 2),
                        h = a.slice(6),
                        g = d[1].slice(0, 2),
                        i = c(e, g) + c(g, h),
                        i - c(e, h) < b ? i: B(d[0], b / 2) + B(d[1], b / 3)
                });
                var n = c(function(a) {
                    var b, c, d, e, h, f, g;
                    f = [];
                    b = g = 0;
                    for (c = a.length; c > b; b++) {
                        d = a[b];
                        "M" != d[0] ? "Z" != d[0] ? (h = l.bezierLength(e.concat(d.slice(1))), f.push([g, g + h]), g = g + h, e = d.slice(4)) : f.push(null) : (e = d.slice(1), f.push(null))
                    }
                    return f.totalLength = g,
                        f
                });
                l.subPath = function(a, b, c) {
                    var d;
                    if (c = c || 0, d = b - c, d = d - (0 | d), c = c - (0 | c), b = c + d, b > 1) return l.subPath(a, 1, c).concat(l.subPath(a, b - 1));
                    a.isCurve || (a = l.pathToCurve(a));
                    var e, h, f, g, i, j;
                    d = n(a);
                    e = d.totalLength;
                    var b = e * b,
                        m = e * (c || 0),
                        k = [],
                        c = 0;
                    for (e = a.length; e > c; c++) if ("M" != a[c][0]) {
                        if ("Z" != a[c][0]) {
                            if (! (h = d[c][0], f = d[c][1], g = f - h, i = i.concat(a[c].slice(1)), m > f)) if (m >= h) {
                                g = l.subBezier(i, Math.min((b - h) / g, 1), (m - h) / g);
                                j = true;
                                g.slice(0, 2);
                                k.push(["M"].concat(g.slice(0, 2)));
                                k.push(["C"].concat(g.slice(2)))
                            } else if (b >= f) k.push(a[c].slice());
                            else {
                                if (! (b >= h)) break;
                                g = l.subBezier(i, (b - h) / g);
                                k.push(["C"].concat(g.slice(2)));
                                j = false
                            }
                            i = i.slice(i.length - 2)
                        }
                    } else {
                        i = a[c].slice(1);
                        j && k.push(a[c].slice())
                    }
                    return k.isAbsolute = true,
                        k.isCurve = true,
                        k.isUniform = true,
                        k.toString = l.pathToString,
                        k
                };
                l.pointAtPath = function(a, b) {
                    a.isCurve || (a = l.pathToCurve(a));
                    var c = l.subPath(a, b),
                        d = "Z" == c[c.length - 1][0] ? c[c.length - 2] : c[c.length - 1],
                        d = d.slice(1),
                        c = h.parse(d.slice(4)),
                        d = h.parse(d.slice(2, 4));
                    return c.tan = j.fromPoints(d, c).normalize(),
                        c
                };
                l.pathLength = c(function(a) {
                    a.isCurve || (a = l.pathToCurve(a));
                    return n(a).totalLength
                });
                l.pathKeyPoints = c(function(a) {
                    var c, b, d;
                    a.isCurve || (a = l.pathToCurve(a));
                    d = [];
                    c = 0;
                    for (b = a.length; b > c; c++)"z" != a[c][0] && d.push(a[c].slice(a[c].length - 2));
                    return d
                });
                var s = c(function(c, b) {
                    function d(a, c) {
                        return a[c || a.i] && a[c || a.i][0]
                    }
                    function e(a, c) {
                        var b = a[c || a.i] && a[c || a.i].slice(1);
                        return b && b.slice( - 2)
                    }
                    function h(a) {
                        return "Z" == d(a) ? (a.splice(a.i, 1), true) : false
                    }
                    function f(a) {
                        return "M" == d(a) ? (a.o.splice(a.o.i, 0, ["M"].concat(e(a.o, a.o.i - 1))), a.i++, a.o.i++, true) : false
                    }
                    function g(a) {
                        for (var c, b = 1; ! c;) c = e(a, a.length - b++);
                        for (a.o.i = a.i; a.length < a.o.length;) h(a.o) || f(a.o) || (a.push(["C"].concat(c).concat(c).concat(c)), a.i++, a.o.i++)
                    }
                    c.isCurve || (c = l.pathToCurve(c));
                    b.isCurve || (b = l.pathToCurve(b));
                    var i = a(c),
                        j = a(b);
                    i.i = 0;
                    j.i = 0;
                    i.o = j;
                    for (j.o = i; i.i < i.length && j.i < j.length;) h(i) || h(j) || (d(i) != d(j) ? f(i) || f(j) || (i.i++, j.i++) : (i.i++, j.i++));
                    return i.i == i.length && g(i),
                    j.i == j.length && g(j),
                        delete i.i,
                        delete i.o,
                        delete j.i,
                        delete j.o,
                        [i, j]
                });
                return l.alignCurve = s,
                    l.pathTween = function(a, c, b) {
                        if (0 === b) return a;
                        if (1 === b) return c;
                        var d, e, h, c = s(a, c),
                            f = [],
                            a = c[0],
                            c = c[1];
                        for (e = 0; e < a.length; e++) {
                            f.push(d = []);
                            d.push(a[e][0]);
                            for (h = 1; h < a[e].length; h++) d.push(a[e][h] + b * (c[e][h] - a[e][h]))
                        }
                        return f.isUniform = f.isCurve = f.isAbsolute = true,
                            f
                    },
                    l.transformPath = c(function(a, c) {
                        var b, d, e, f, g;
                        a.isCurve || (a = l.pathToCurve(a));
                        f = [];
                        b = 0;
                        for (d = a.length; d > b; b++) {
                            f.push([a[b][0]]);
                            for (e = 1; e < a[b].length; e = e + 2) {
                                g = a[b].slice(e, e + 2);
                                g = c.transformPoint(h.parse(g));
                                f.push(g)
                            }
                        }
                        return f
                    }),
                    b("core/class").extendClass(i, {
                        transformPath: function(a) {
                            return l.transformPath(a, this)
                        }
                    }),
                    l
            });
        k("graphic/gradientbrush", "graphic/svg graphic/defbrush core/class graphic/resource graphic/color core/utils graphic/standardcolor".split(" "),
            function(b) {
                var a = b("graphic/svg"),
                    c = b("graphic/defbrush"),
                    e = b("graphic/color");
                return b("core/class").createClass("GradientBrush", {
                    base: c,
                    constructor: function(a) {
                        this.callBase(a);
                        this.stops = []
                    },
                    addStop: function(c, b, g) {
                        var h = a.createNode("stop");
                        return b instanceof e || (b = e.parse(b)),
                        void 0 === g && (g = b.get("a")),
                            h.setAttribute("offset", c),
                            h.setAttribute("stop-color", b.toRGB()),
                        1 > g && h.setAttribute("stop-opacity", g),
                            this.node.appendChild(h),
                            this
                    }
                })
            });
        k("graphic/group", "graphic/shapecontainer graphic/container core/utils core/class graphic/shape graphic/svg graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("graphic/shapecontainer");
                return b("core/class").createClass("Group", {
                    mixins: [a],
                    base: b("graphic/shape"),
                    constructor: function() {
                        this.callBase("g")
                    }
                })
            });
        k("graphic/hyperlink", "graphic/shapecontainer graphic/container core/utils core/class graphic/shape graphic/svg graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("graphic/shapecontainer");
                return b("core/class").createClass("HyperLink", {
                    mixins: [a],
                    base: b("graphic/shape"),
                    constructor: function(a) {
                        this.callBase("a");
                        this.setHref(a)
                    },
                    setHref: function(a) {
                        return this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
                            this
                    },
                    getHref: function() {
                        return this.node.getAttributeNS("xlink:href")
                    },
                    setTarget: function(a) {
                        return this.node.setAttribute("target", a),
                            this
                    },
                    getTarget: function() {
                        return this.node.getAttribute("target")
                    }
                })
            });
        k("graphic/image", "core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                return b("core/class").createClass("Image", {
                    base: b("graphic/shape"),
                    constructor: function(a, c, b, d, f) {
                        this.callBase("image");
                        this.url = a;
                        this.width = c || 0;
                        this.height = b || 0;
                        this.x = d || 0;
                        this.y = f || 0;
                        this.update()
                    },
                    update: function() {
                        return this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.url),
                            this.node.setAttribute("x", this.x),
                            this.node.setAttribute("y", this.y),
                            this.node.setAttribute("width", this.width),
                            this.node.setAttribute("height", this.height),
                            this
                    },
                    setUrl: function(a) {
                        return this.url = "" === a ? null: a,
                            this.update()
                    },
                    getUrl: function() {
                        return this.url
                    },
                    setWidth: function(a) {
                        return this.width = a,
                            this.update()
                    },
                    getWidth: function() {
                        return this.width
                    },
                    setHeight: function(a) {
                        return this.height = a,
                            this.update()
                    },
                    getHeight: function() {
                        return this.height
                    },
                    setX: function(a) {
                        return this.x = a,
                            this.update()
                    },
                    getX: function() {
                        return this.x
                    },
                    setY: function(a) {
                        return this.y = a,
                            this.update()
                    },
                    getY: function() {
                        return this.y
                    }
                })
            });
        k("graphic/line", "core/class graphic/path core/utils graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                return b("core/class").createClass("Line", {
                    base: b("graphic/path"),
                    constructor: function(a, c, b, d) {
                        this.callBase();
                        this.point1 = {
                            x: a || 0,
                            y: c || 0
                        };
                        this.point2 = {
                            x: b || 0,
                            y: d || 0
                        };
                        this.update()
                    },
                    setPoint1: function(a, b) {
                        return this.point1.x = a,
                            this.point1.y = b,
                            this.update()
                    },
                    setPoint2: function(a, b) {
                        return this.point2.x = a,
                            this.point2.y = b,
                            this.update()
                    },
                    getPoint1: function() {
                        return {
                            x: this.point1.x,
                            y: this.point1.y
                        }
                    },
                    getPoint2: function() {
                        return {
                            x: this.point2.x,
                            y: this.point2.y
                        }
                    },
                    update: function() {
                        var a = this.getDrawer();
                        return a.clear(),
                            a.moveTo(this.point1.x, this.point1.y),
                            a.lineTo(this.point2.x, this.point2.y),
                            this
                    }
                })
            });
        k("graphic/lineargradientbrush", ["graphic/svg", "graphic/gradientbrush", "graphic/defbrush", "graphic/color", "core/class"],
            function(b) {
                var a = (b("graphic/svg"), b("graphic/gradientbrush"));
                return b("core/class").createClass("LinearGradientBrush", {
                    base: a,
                    constructor: function(a) {
                        this.callBase("linearGradient");
                        this.setStartPosition(0, 0);
                        this.setEndPosition(1, 0);
                        "function" == typeof a && a.call(this, this)
                    },
                    setStartPosition: function(a, b) {
                        return this.node.setAttribute("x1", a),
                            this.node.setAttribute("y1", b),
                            this
                    },
                    setEndPosition: function(a, b) {
                        return this.node.setAttribute("x2", a),
                            this.node.setAttribute("y2", b),
                            this
                    },
                    getStartPosition: function() {
                        return {
                            x: +this.node.getAttribute("x1"),
                            y: +this.node.getAttribute("y1")
                        }
                    },
                    getEndPosition: function() {
                        return {
                            x: +this.node.getAttribute("x2"),
                            y: +this.node.getAttribute("y2")
                        }
                    }
                })
            });
        k("graphic/marker", "graphic/point core/class graphic/resource graphic/svg graphic/shapecontainer graphic/container core/utils graphic/shape graphic/viewbox graphic/path graphic/geometry".split(" "),
            function(b) {
                var a = b("graphic/point"),
                    c = b("core/class").createClass("Marker", {
                        base: b("graphic/resource"),
                        mixins: [b("graphic/shapecontainer"), b("graphic/viewbox")],
                        constructor: function() {
                            this.callBase("marker");
                            this.setOrient("auto")
                        },
                        setRef: function(a, b) {
                            return 1 === arguments.length && (b = a.y, a = a.x),
                                this.node.setAttribute("refX", a),
                                this.node.setAttribute("refY", b),
                                this
                        },
                        getRef: function() {
                            return new a( + this.node.getAttribute("refX"), +this.node.getAttribute("refY"))
                        },
                        setWidth: function(a) {
                            return this.node.setAttribute("markerWidth", this.width = a),
                                this
                        },
                        setOrient: function(a) {
                            return this.node.setAttribute("orient", this.orient = a),
                                this
                        },
                        getOrient: function() {
                            return this.orient
                        },
                        getWidth: function() {
                            return + this.width
                        },
                        setHeight: function(a) {
                            return this.node.setAttribute("markerHeight", this.height = a),
                                this
                        },
                        getHeight: function() {
                            return + this.height
                        }
                    }),
                    e = b("graphic/path");
                return b("core/class").extendClass(e, {
                    setMarker: function(a, b) {
                        return b = b || "end",
                            a ? this.node.setAttribute("marker-" + b, a.toString()) : this.node.removeAttribute("marker-" + b),
                            this
                    }
                }),
                    c
            });
        k("graphic/mask", "core/class graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box graphic/shapecontainer graphic/container".split(" "),
            function(b) {
                var a = b("core/class"),
                    c = b("graphic/shape"),
                    b = a.createClass("Mask", {
                        base: c,
                        mixins: [b("graphic/shapecontainer")],
                        constructor: function() {
                            this.callBase("mask")
                        },
                        mask: function(a) {
                            return a.getNode().setAttribute("mask", "url(#" + this.getId() + ")"),
                                this
                        }
                    });
                return a.extendClass(c, {
                    maskWith: function(a) {
                        return a.mask(this),
                            this
                    }
                }),
                    b
            });
        k("graphic/matrix", ["core/utils", "graphic/box", "core/class", "graphic/point"],
            function(b) {
                function a(a, b) {
                    return {
                        a: b.a * a.a + b.c * a.b,
                        b: b.b * a.a + b.d * a.b,
                        c: b.a * a.c + b.c * a.d,
                        d: b.b * a.c + b.d * a.d,
                        e: b.a * a.e + b.c * a.f + b.e,
                        f: b.b * a.e + b.d * a.f + b.f
                    }
                }
                var c = b("core/utils"),
                    e = b("graphic/box"),
                    d = /matrix\((.+)\)/i,
                    f = b("graphic/point"),
                    g = b("core/class").createClass("Matrix", {
                        constructor: function() {
                            arguments.length ? this.setMatrix.apply(this, arguments) : this.setMatrix(1, 0, 0, 1, 0, 0)
                        },
                        translate: function(b, c) {
                            return this.m = a(this.m, {
                                a: 1,
                                c: 0,
                                e: b,
                                b: 0,
                                d: 1,
                                f: c
                            }),
                                this
                        },
                        rotate: function(b) {
                            var c = b * Math.PI / 180,
                                b = Math.sin(c),
                                c = Math.cos(c);
                            return this.m = a(this.m, {
                                a: c,
                                c: -b,
                                e: 0,
                                b: b,
                                d: c,
                                f: 0
                            }),
                                this
                        },
                        scale: function(b, c) {
                            return void 0 === c && (c = b),
                                this.m = a(this.m, {
                                    a: b,
                                    c: 0,
                                    e: 0,
                                    b: 0,
                                    d: c,
                                    f: 0
                                }),
                                this
                        },
                        skew: function(b, c) {
                            void 0 === c && (c = b);
                            var d = Math.tan(b * Math.PI / 180),
                                e = Math.tan(c * Math.PI / 180);
                            return this.m = a(this.m, {
                                a: 1,
                                c: d,
                                e: 0,
                                b: e,
                                d: 1,
                                f: 0
                            }),
                                this
                        },
                        inverse: function() {
                            var a, b, c, d, e, f, k, n = this.m,
                                s = n.a,
                                t = n.b,
                                B = n.c,
                                w = n.d,
                                K = n.e,
                                n = n.f;
                            return a = s * w - t * B,
                                b = w / a,
                                c = -t / a,
                                d = -B / a,
                                e = s / a,
                                f = (B * n - K * w) / a,
                                k = (t * K - s * n) / a,
                                new g(b, c, d, e, f, k)
                        },
                        setMatrix: function(a, b, d, e, f, g) {
                            return this.m = 1 === arguments.length ? c.clone(arguments[0]) : {
                                a: a,
                                b: b,
                                c: d,
                                d: e,
                                e: f,
                                f: g
                            },
                                this
                        },
                        getMatrix: function() {
                            return c.clone(this.m)
                        },
                        getTranslate: function() {
                            var a = this.m;
                            return {
                                x: a.e / a.a,
                                y: a.f / a.d
                            }
                        },
                        mergeMatrix: function(b) {
                            return new g(a(this.m, b.m))
                        },
                        merge: function(a) {
                            return this.mergeMatrix(a)
                        },
                        toString: function() {
                            return this.valueOf().join(" ")
                        },
                        valueOf: function() {
                            var a = this.m;
                            return [a.a, a.b, a.c, a.d, a.e, a.f]
                        },
                        equals: function(a) {
                            var b = this.m,
                                a = a.m;
                            return b.a == a.a && b.b == a.b && b.c == a.c && b.d == a.d && b.e == a.e && b.f == a.f
                        },
                        transformPoint: function() {
                            return g.transformPoint.apply(null, [].slice.call(arguments).concat([this.m]))
                        },
                        transformBox: function(a) {
                            return g.transformBox(a, this.m)
                        }
                    });
                return g.parse = function(a) {
                    var b = parseFloat;
                    if (a instanceof Array) return new g({
                        a: a[0],
                        b: a[1],
                        c: a[2],
                        d: a[3],
                        e: a[4],
                        f: a[5]
                    });
                    if (a = d.exec(a)) {
                        var c = a[1].split(",");
                        return 6 != c.length && (c = a[1].split(" ")),
                            new g({
                                a: b(c[0]),
                                b: b(c[1]),
                                c: b(c[2]),
                                d: b(c[3]),
                                e: b(c[4]),
                                f: b(c[5])
                            })
                    }
                    return new g
                },
                    g.transformPoint = function(a, b, c) {
                        return 2 === arguments.length && (c = b, b = a.y, a = a.x),
                            new f(c.a * a + c.c * b + c.e, c.b * a + c.d * b + c.f)
                    },
                    g.transformBox = function(a, b) {
                        for (var d, f = Number.MAX_VALUE,
                                 k = -Number.MAX_VALUE,
                                 u = Number.MAX_VALUE,
                                 o = -Number.MAX_VALUE,
                                 n = [[a.x, a.y], [a.x + a.width, a.y], [a.x, a.y + a.height], [a.x + a.width, a.y + a.height]], s = []; d = n.pop();) d = g.transformPoint(d[0], d[1], b),
                            s.push(d),
                            f = Math.min(f, d.x),
                            k = Math.max(k, d.x),
                            u = Math.min(u, d.y),
                            o = Math.max(o, d.y);
                        return a = new e({
                            x: f,
                            y: u,
                            width: k - f,
                            height: o - u
                        }),
                            c.extend(a, {
                                closurePoints: s,
                                left: f,
                                right: k,
                                top: u,
                                bottom: o,
                                cx: (f + k) / 2,
                                cy: (u + o) / 2
                            }),
                            a
                    },
                    g.getCTM = function(a, b) {
                        var c = {
                            a: 1,
                            b: 0,
                            c: 0,
                            d: 1,
                            e: 0,
                            f: 0
                        };
                        switch (b = b || "parent") {
                            case "screen":
                                c = a.node.getScreenCTM();
                                break;
                            case "doc":
                            case "paper":
                                c = a.node.getCTM();
                                break;
                            case "view":
                            case "top":
                                a.getPaper() && (c = a.node.getTransformToElement(a.getPaper().shapeNode));
                                break;
                            case "parent":
                                a.node.parentNode && (c = a.node.getTransformToElement(a.node.parentNode));
                                break;
                            default:
                                b.node && (c = a.node.getTransformToElement(b.shapeNode || b.node))
                        }
                        return c ? new g(c.a, c.b, c.c, c.d, c.e, c.f) : new g
                    },
                    g
            });
        k("graphic/palette", ["graphic/standardcolor", "graphic/color", "core/utils", "core/class"],
            function(b) {
                var a = b("graphic/standardcolor"),
                    c = b("graphic/color"),
                    e = b("core/utils"),
                    b = b("core/class").createClass("Palette", {
                        constructor: function() {
                            this.color = {}
                        },
                        get: function(b) {
                            return (b = this.color[b] || a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b] || "") ? new c(b) : null
                        },
                        getColorValue: function(b) {
                            return this.color[b] || a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b] || ""
                        },
                        add: function(a, b) {
                            return this.color[a] = "string" == typeof b ? (new c(b)).toRGBA() : b.toRGBA(),
                                b
                        },
                        remove: function(a) {
                            return this.color.hasOwnProperty(a) ? (delete this.color[a], !0) : !1
                        }
                    });
                return e.extend(b, {
                    getColor: function(b) {
                        return (b = a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b]) ? new c(b) : null
                    },
                    getColorValue: function(b) {
                        return a.EXTEND_STANDARD[b] || a.COLOR_STANDARD[b] || ""
                    },
                    addColor: function(b, e) {
                        return a.EXTEND_STANDARD[b] = "string" == typeof e ? (new c(e)).toRGBA() : e.toRGBA(),
                            e
                    },
                    removeColor: function(b) {
                        return a.EXTEND_STANDARD.hasOwnProperty(b) ? (delete a.EXTEND_STANDARD[b], !0) : !1
                    }
                }),
                    b
            });
        k("graphic/paper", "core/class core/utils graphic/svg graphic/container graphic/shapecontainer graphic/shape graphic/viewbox graphic/eventhandler graphic/shapeevent graphic/styled graphic/matrix graphic/box graphic/point graphic/data graphic/pen".split(" "),
            function(b) {
                var a = b("core/class"),
                    c = b("core/utils"),
                    e = b("graphic/svg"),
                    d = b("graphic/container"),
                    f = b("graphic/shapecontainer"),
                    g = b("graphic/viewbox"),
                    h = b("graphic/eventhandler"),
                    j = b("graphic/styled"),
                    i = b("graphic/matrix"),
                    k = a.createClass("Paper", {
                        mixins: [f, h, j, g],
                        constructor: function(a) {
                            this.callBase();
                            this.node = this.createSVGNode();
                            this.node.paper = this;
                            this.node.appendChild(this.resourceNode = e.createNode("defs"));
                            this.node.appendChild(this.shapeNode = e.createNode("g"));
                            this.resources = new d;
                            this.setWidth("100%").setHeight("100%");
                            a && this.renderTo(a);
                            this.callMixin()
                        },
                        renderTo: function(a) {
                            c.isString(a) && (a = document.getElementById(a));
                            this.container = a;
                            a.appendChild(this.node)
                        },
                        createSVGNode: function() {
                            var a = e.createNode("svg");
                            return a.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                                a.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                                a
                        },
                        getNode: function() {
                            return this.node
                        },
                        getContainer: function() {
                            return this.container
                        },
                        getWidth: function() {
                            return this.node.clientWidth
                        },
                        setWidth: function(a) {
                            return this.node.setAttribute("width", a),
                                this
                        },
                        getHeight: function() {
                            return this.node.clientHeight
                        },
                        setHeight: function(a) {
                            return this.node.setAttribute("height", a),
                                this
                        },
                        setViewPort: function(a, b, c) {
                            var d, e;
                            1 == arguments.length && (d = arguments[0], a = d.center.x, b = d.center.y, c = d.zoom);
                            c = c || 1;
                            e = this.getViewBox();
                            d = new i;
                            var f = e.x + e.width / 2 - a;
                            e = e.y + e.height / 2 - b;
                            return d.translate( - a, -b),
                                d.scale(c),
                                d.translate(a, b),
                                d.translate(f, e),
                                this.shapeNode.setAttribute("transform", "matrix(" + d + ")"),
                                this.viewport = {
                                    center: {
                                        x: a,
                                        y: b
                                    },
                                    offset: {
                                        x: f,
                                        y: e
                                    },
                                    zoom: c
                                },
                                this
                        },
                        getViewPort: function() {
                            if (!this.viewport) {
                                var a = this.getViewBox();
                                return {
                                    zoom: 1,
                                    center: {
                                        x: a.x + a.width / 2,
                                        y: a.y + a.height / 2
                                    },
                                    offset: {
                                        x: 0,
                                        y: 0
                                    }
                                }
                            }
                            return this.viewport
                        },
                        getViewPortTransform: function() {
                            var a = this.shapeNode.getCTM();
                            return new i(a.a, a.b, a.c, a.d, a.e, a.f)
                        },
                        getTransform: function() {
                            return this.getViewPortTransform().reverse()
                        },
                        addResource: function(a) {
                            return this.resources.appendItem(a),
                            a.node && this.resourceNode.appendChild(a.node),
                                this
                        },
                        removeResource: function(a) {
                            return a.remove && a.remove(),
                            a.node && this.resourceNode.removeChild(a.node),
                                this
                        },
                        getPaper: function() {
                            return this
                        }
                    }),
                    b = b("graphic/shape");
                return a.extendClass(b, {
                    getPaper: function() {
                        for (var a = this.container; a && a instanceof k == false;) a = a.container;
                        return a
                    },
                    whenPaperReady: function(a) {
                        function b() {
                            var d = c.getPaper();
                            return d && a && a.call(c, d),
                                d
                        }
                        var c = this;
                        return b() || this.on("add treeadd",
                            function s() {
                                b() && (c.off("add", s), c.off("treeadd", s))
                            }),
                            this
                    }
                }),
                    k
            });
        k("graphic/path", "core/utils core/class graphic/shape graphic/svg graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box graphic/geometry graphic/point graphic/vector".split(" "),
            function(b) {
                var a = b("core/utils"),
                    c = b("core/class").createClass,
                    e = b("graphic/shape"),
                    d = b("graphic/svg"),
                    f = b("graphic/geometry"),
                    g = Array.prototype.slice,
                    h = (a.flatten, c("PathDrawer", {
                        constructor: function(a) {
                            this.segment = [];
                            this.path = a;
                            this.__clear = false
                        },
                        getPath: function() {
                            return this.path
                        },
                        redraw: function() {
                            return this._transation = this._transation || [],
                                this.clear()
                        },
                        done: function() {
                            var a = this._transation;
                            return this._transation = null,
                                this.push(a),
                                this
                        },
                        clear: function() {
                            return this._transation ? this._transation = [] : this.path.setPathData("M 0 0"),
                                this._clear = true,
                                this
                        },
                        push: function() {
                            var a, b = g.call(arguments);
                            return this._transation ? (this._transation.push(b), this) : (this._clear ? (a = "", this._clear = false) : a = this.path.getPathData(), a = a || "", this.path.setPathData(a + f.pathToString(b)), this)
                        },
                        moveTo: function() {
                            return this.push("M", g.call(arguments))
                        },
                        moveBy: function() {
                            return this.push("m", g.call(arguments))
                        },
                        lineTo: function() {
                            return this.push("L", g.call(arguments))
                        },
                        lineBy: function() {
                            return this.push("l", g.call(arguments))
                        },
                        arcTo: function() {
                            return this.push("A", g.call(arguments))
                        },
                        arcBy: function() {
                            return this.push("a", arguments)
                        },
                        carcTo: function(a) {
                            return this.push("A", [a, a, 0].concat(g.call(arguments, 1)))
                        },
                        carcBy: function(a) {
                            return this.push("a", [a, a, 0].concat(g.call(arguments, 1)))
                        },
                        bezierTo: function() {
                            return this.push("C", g.call(arguments))
                        },
                        bezierBy: function() {
                            return this.push("c", g.call(arguments))
                        },
                        close: function() {
                            return this.push("z")
                        }
                    }));
                return c("Path", {
                    base: e,
                    constructor: function(a) {
                        this.callBase("path");
                        a && this.setPathData(a);
                        this.node.setAttribute("fill", d.defaults.fill);
                        this.node.setAttribute("stroke", d.defaults.stroke)
                    },
                    setPathData: function(a) {
                        return a = a || "M0,0",
                            this.pathdata = f.pathToString(a),
                            this.node.setAttribute("d", this.pathdata),
                            this.trigger("shapeupdate", {
                                type: "pathdata"
                            }),
                            this
                    },
                    getPathData: function() {
                        return this.pathdata || ""
                    },
                    getDrawer: function() {
                        return new h(this)
                    },
                    isClosed: function() {
                        var a = this.getPathData();
                        return !! ~a.indexOf("z") || !!~a.indexOf("Z")
                    }
                })
            });
        k("graphic/patternbrush", "graphic/defbrush core/class graphic/resource graphic/shapecontainer graphic/container core/utils graphic/shape graphic/svg".split(" "),
            function(b) {
                var a = b("graphic/defbrush"),
                    c = b("graphic/shapecontainer");
                b("graphic/svg");
                return b("core/class").createClass("PatternBrush", {
                    base: a,
                    mixins: [c],
                    constructor: function() {
                        this.callBase("pattern");
                        this.node.setAttribute("patternUnits", "userSpaceOnUse")
                    },
                    setX: function(a) {
                        return this.x = a,
                            this.node.setAttribute("x", a),
                            this
                    },
                    setY: function(a) {
                        return this.y = a,
                            this.node.setAttribute("y", a),
                            this
                    },
                    setWidth: function(a) {
                        return this.width = a,
                            this.node.setAttribute("width", a),
                            this
                    },
                    setHeight: function(a) {
                        return this.height = a,
                            this.node.setAttribute("height", a),
                            this
                    },
                    getWidth: function() {
                        return this.width
                    },
                    getHeight: function() {
                        return this.height
                    }
                })
            });
        k("graphic/pen", ["graphic/color", "core/utils", "graphic/standardcolor", "core/class"],
            function(b) {
                var a = b("graphic/color");
                return b("core/class").createClass("Pen", {
                    constructor: function(a, b) {
                        this.brush = a;
                        this.width = b || 1;
                        this.dashArray = this.linejoin = this.linecap = null;
                        this.opacity = 1
                    },
                    getBrush: function() {
                        return this.brush
                    },
                    setBrush: function(a) {
                        return this.brush = a,
                            this
                    },
                    setColor: function(a) {
                        return this.setBrush(a)
                    },
                    getColor: function() {
                        return this.brush instanceof a ? this.brush: null
                    },
                    getWidth: function() {
                        return this.width
                    },
                    setWidth: function(a) {
                        return this.width = a,
                            this
                    },
                    getOpacity: function() {
                        return this.opacity
                    },
                    setOpacity: function(a) {
                        this.opacity = a
                    },
                    getLineCap: function() {
                        return this.linecap
                    },
                    setLineCap: function(a) {
                        return this.linecap = a,
                            this
                    },
                    getLineJoin: function() {
                        return this.linejoin
                    },
                    setLineJoin: function(a) {
                        return this.linejoin = a,
                            this
                    },
                    getDashArray: function() {
                        return this.dashArray
                    },
                    setDashArray: function(a) {
                        return this.dashArray = a,
                            this
                    },
                    stroke: function(a) {
                        a = a.node;
                        a.setAttribute("stroke", this.brush.toString());
                        a.setAttribute("stroke-width", this.getWidth());
                        1 > this.getOpacity() && a.setAttribute("stroke-opacity", this.getOpacity());
                        this.getLineCap() && a.setAttribute("stroke-linecap", this.getLineCap());
                        this.getLineJoin() && a.setAttribute("stroke-linejoin", this.getLineJoin());
                        this.getDashArray() && a.setAttribute("stroke-dasharray", this.getDashArray())
                    }
                })
            });
        k("graphic/pie", ["core/class", "graphic/sweep", "graphic/point", "graphic/path"],
            function(b) {
                return b("core/class").createClass({
                    base: b("graphic/sweep"),
                    constructor: function(a, b, e) {
                        this.callBase([0, a], b, e)
                    },
                    getRadius: function() {
                        return this.getSectionArray()[1]
                    },
                    setRadius: function(a) {
                        this.setSectionArray([0, a])
                    }
                })
            });
        k("graphic/point", ["core/class"],
            function(b) {
                var a = b("core/class").createClass("Point", {
                    constructor: function(a, b) {
                        this.x = a || 0;
                        this.y = b || 0
                    },
                    offset: function(b, e) {
                        return 1 == arguments.length && (e = b.y, b = b.x),
                            new a(this.x + b, this.y + e)
                    },
                    valueOf: function() {
                        return [this.x, this.y]
                    },
                    toString: function() {
                        return this.valueOf().join(" ")
                    },
                    spof: function() {
                        return new a((0 | this.x) + 0.5, (0 | this.y) + 0.5)
                    }
                });
                return a.fromPolar = function(b, e, d) {
                    return "rad" != d && (e = e / 180 * Math.PI),
                        new a(b * Math.cos(e), b * Math.sin(e))
                },
                    a.parse = function(b) {
                        return b instanceof a ? b: "string" == typeof b ? a.parse(b.split(/\s*[\s,]\s*/)) : "0" in b && "1" in b ? new a(b[0], b[1]) : void 0
                    },
                    a
            });
        k("graphic/pointcontainer", ["core/class", "graphic/container"],
            function(b) {
                return b("core/class").createClass("PointContainer", {
                    base: b("graphic/container"),
                    constructor: function() {
                        this.callBase()
                    },
                    addPoint: function() {
                        return this.addItem.apply(this, arguments)
                    },
                    prependPoint: function() {
                        return this.prependItem.apply(this, arguments)
                    },
                    appendPoint: function() {
                        return this.appendItem.apply(this, arguments)
                    },
                    removePoint: function() {
                        return this.removeItem.apply(this, arguments)
                    },
                    addPoints: function() {
                        return this.addItems.apply(this, arguments)
                    },
                    setPoints: function() {
                        return this.setItems.apply(this, arguments)
                    },
                    getPoint: function() {
                        return this.getItem.apply(this, arguments)
                    },
                    getPoints: function() {
                        return this.getItems.apply(this, arguments)
                    },
                    getFirstPoint: function() {
                        return this.getFirstItem.apply(this, arguments)
                    },
                    getLastPoint: function() {
                        return this.getLastItem.apply(this, arguments)
                    }
                })
            });
        k("graphic/poly", "core/utils core/class graphic/path graphic/shape graphic/svg graphic/geometry graphic/pointcontainer graphic/container".split(" "),
            function(b) {
                b("core/utils");
                return b("core/class").createClass("Poly", {
                    base: b("graphic/path"),
                    mixins: [b("graphic/pointcontainer")],
                    constructor: function(a, b) {
                        this.callBase();
                        this.closeable = !!b;
                        this.setPoints(a || []);
                        this.changeable = true;
                        this.update()
                    },
                    onContainerChanged: function() {
                        this.changeable && this.update()
                    },
                    update: function() {
                        var a = this.getDrawer(),
                            b = this.getPoints();
                        if (a.clear(), !b.length) return this;
                        a.moveTo(b[0]);
                        for (var e, d = 1,
                                 f = b.length; f > d; d++) {
                            e = b[d];
                            a.lineTo(e)
                        }
                        return this.closeable && b.length > 2 && a.close(),
                            this
                    }
                })
            });
        k("graphic/polygon", ["core/class", "graphic/poly", "core/utils", "graphic/path", "graphic/pointcontainer"],
            function(b) {
                return b("core/class").createClass("Polygon", {
                    base: b("graphic/poly"),
                    constructor: function(a) {
                        this.callBase(a, !0)
                    }
                })
            });
        k("graphic/polyline", ["core/class", "graphic/poly", "core/utils", "graphic/path", "graphic/pointcontainer"],
            function(b) {
                return b("core/class").createClass("Polyline", {
                    base: b("graphic/poly"),
                    constructor: function(a) {
                        this.callBase(a)
                    }
                })
            });
        k("graphic/radialgradientbrush", ["graphic/gradientbrush", "graphic/svg", "graphic/defbrush", "graphic/color", "core/class"],
            function(b) {
                var a = b("graphic/gradientbrush");
                return b("core/class").createClass("RadialGradientBrush", {
                    base: a,
                    constructor: function(a) {
                        this.callBase("radialGradient");
                        this.setCenter(0.5, 0.5);
                        this.setFocal(0.5, 0.5);
                        this.setRadius(0.5);
                        "function" == typeof a && a.call(this, this)
                    },
                    setCenter: function(a, b) {
                        return this.node.setAttribute("cx", a),
                            this.node.setAttribute("cy", b),
                            this
                    },
                    getCenter: function() {
                        return {
                            x: +this.node.getAttribute("cx"),
                            y: +this.node.getAttribute("cy")
                        }
                    },
                    setFocal: function(a, b) {
                        return this.node.setAttribute("fx", a),
                            this.node.setAttribute("fy", b),
                            this
                    },
                    getFocal: function() {
                        return {
                            x: +this.node.getAttribute("fx"),
                            y: +this.node.getAttribute("fy")
                        }
                    },
                    setRadius: function(a) {
                        return this.node.setAttribute("r", a),
                            this
                    },
                    getRadius: function() {
                        return + this.node.getAttribute("r")
                    }
                })
            });
        k("graphic/rect", "core/utils graphic/point core/class graphic/path graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                var a = {},
                    c = b("core/utils"),
                    e = b("graphic/point");
                return c.extend(a, {
                    formatRadius: function(a, b, c) {
                        a = Math.floor(Math.min(a / 2, b / 2));
                        return Math.min(a, c)
                    }
                }),
                    b("core/class").createClass("Rect", {
                        base: b("graphic/path"),
                        constructor: function(b, c, e, h, j) {
                            this.callBase();
                            this.x = e || 0;
                            this.y = h || 0;
                            this.width = b || 0;
                            this.height = c || 0;
                            this.radius = a.formatRadius(this.width, this.height, j || 0);
                            this.update()
                        },
                        update: function() {
                            var a = this.x,
                                b = this.y,
                                c = this.width,
                                e = this.height,
                                j = this.radius,
                                i = this.getDrawer().redraw();
                            return j ? (c = c - 2 * j, e = e - 2 * j, i.push("M", a + j, b), i.push("h", c), i.push("a", j, j, 0, 0, 1, j, j), i.push("v", e), i.push("a", j, j, 0, 0, 1, -j, j), i.push("h", -c), i.push("a", j, j, 0, 0, 1, -j, -j), i.push("v", -e), i.push("a", j, j, 0, 0, 1, j, -j), i.push("z")) : (i.push("M", a, b), i.push("h", c), i.push("v", e), i.push("h", -c), i.push("z")),
                                i.done(),
                                this
                        },
                        setWidth: function(a) {
                            return this.width = a,
                                this.update()
                        },
                        setHeight: function(a) {
                            return this.height = a,
                                this.update()
                        },
                        setSize: function(a, b) {
                            return this.width = a,
                                this.height = b,
                                this.update()
                        },
                        getRadius: function() {
                            return this.radius
                        },
                        setRadius: function(a) {
                            return this.radius = a,
                                this.update()
                        },
                        getPosition: function() {
                            return new e(this.x, this.y)
                        },
                        setPosition: function(a, b) {
                            if (1 == arguments.length) var c = e.parse(arguments[0]),
                                b = c.y,
                                a = c.x;
                            return this.x = a,
                                this.y = b,
                                this.update()
                        },
                        getWidth: function() {
                            return this.width
                        },
                        getHeight: function() {
                            return this.height
                        },
                        getPositionX: function() {
                            return this.x
                        },
                        getPositionY: function() {
                            return this.y
                        },
                        setPositionX: function(a) {
                            return this.x = a,
                                this.update()
                        },
                        setPositionY: function(a) {
                            return this.y = a,
                                this.update()
                        }
                    })
            });
        k("graphic/regularpolygon", "graphic/point core/class graphic/path core/utils graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                var a = b("graphic/point");
                return b("core/class").createClass("RegularPolygon", {
                    base: b("graphic/path"),
                    constructor: function(b, e, d, f) {
                        this.callBase();
                        this.radius = e || 0;
                        this.side = Math.max(b || 3, 3);
                        arguments.length > 2 && 3 == arguments.length && (f = d.y, d = d.x);
                        this.center = new a(d, f);
                        this.draw()
                    },
                    getSide: function() {
                        return this.side
                    },
                    setSide: function(a) {
                        return this.side = a,
                            this.draw()
                    },
                    getRadius: function() {
                        return this.radius
                    },
                    setRadius: function(a) {
                        return this.radius = a,
                            this.draw()
                    },
                    draw: function() {
                        var b, e = this.radius,
                            d = this.side,
                            f = 2 * Math.PI / d,
                            g = this.getDrawer();
                        g.clear();
                        g.moveTo(a.fromPolar(e, Math.PI / 2, "rad").offset(this.center));
                        for (b = 0; d >= b; b++) g.lineTo(a.fromPolar(e, f * b + Math.PI / 2, "rad").offset(this.center));
                        return g.close(),
                            this
                    }
                })
            });
        k("graphic/resource", ["graphic/svg", "core/class"],
            function(b) {
                var a = b("graphic/svg");
                return b("core/class").createClass("Resource", {
                    constructor: function(b) {
                        this.callBase();
                        this.node = a.createNode(b)
                    },
                    toString: function() {
                        return "url(#" + this.node.id + ")"
                    }
                })
            });
        k("graphic/ring", ["core/class", "graphic/sweep", "graphic/point", "graphic/path"],
            function(b) {
                return b("core/class").createClass({
                    base: b("graphic/sweep"),
                    constructor: function(a, b) {
                        this.callBase([a, b], 360, 0)
                    },
                    getInnerRadius: function() {
                        return this.getSectionArray()[0]
                    },
                    getOuterRadius: function() {
                        return this.getSectionArray()[1]
                    },
                    setInnerRadius: function(a) {
                        this.setSectionArray([a, this.getOuterRadius()])
                    },
                    setOuterRadius: function(a) {
                        this.setSectionArray([this.getInnerRadius(), a])
                    }
                })
            });
        k("graphic/shape", "graphic/svg core/utils graphic/eventhandler graphic/shapeevent core/class graphic/styled graphic/data graphic/matrix graphic/box graphic/point graphic/pen graphic/color".split(" "),
            function(b) {
                var a = b("graphic/svg"),
                    c = b("core/utils"),
                    e = b("graphic/eventhandler"),
                    d = b("graphic/styled"),
                    f = b("graphic/data"),
                    g = b("graphic/matrix"),
                    h = (b("graphic/pen"), Array.prototype.slice),
                    j = b("graphic/box");
                return b("core/class").createClass("Shape", {
                    mixins: [e, d, f],
                    constructor: function(b) {
                        this.node = a.createNode(b);
                        this.node.shape = this;
                        this.transform = {
                            translate: null,
                            rotate: null,
                            scale: null,
                            matrix: null
                        };
                        this.callMixin()
                    },
                    getId: function() {
                        return this.node.id
                    },
                    setId: function(a) {
                        return this.node.id = a,
                            this
                    },
                    getNode: function() {
                        return this.node
                    },
                    getBoundaryBox: function() {
                        var a;
                        try {
                            a = this.node.getBBox()
                        } catch(b) {
                            a = {
                                x: this.node.clientLeft,
                                y: this.node.clientTop,
                                width: this.node.clientWidth,
                                height: this.node.clientHeight
                            }
                        }
                        return new j(a)
                    },
                    getRenderBox: function(a) {
                        var b = this.getBoundaryBox();
                        return this.getTransform(a).transformBox(b)
                    },
                    getWidth: function() {
                        return this.getRenderBox().width
                    },
                    getHeight: function() {
                        return this.getRenderBox().height
                    },
                    getSize: function() {
                        var a = this.getRenderBox();
                        return delete a.x,
                            delete a.y,
                            a
                    },
                    setOpacity: function(a) {
                        return this.node.setAttribute("opacity", a),
                            this
                    },
                    getOpacity: function() {
                        var a = this.node.getAttribute("opacity");
                        return a ? +a: 1
                    },
                    setVisible: function(a) {
                        return a ? this.node.removeAttribute("display") : this.node.setAttribute("display", "none"),
                            this
                    },
                    getVisible: function() {
                        this.node.getAttribute("display")
                    },
                    hasAncestor: function(a) {
                        for (var b = this.container; b;) {
                            if (b === a) return true;
                            b = b.container
                        }
                        return false
                    },
                    getTransform: function(a) {
                        return g.getCTM(this, a)
                    },
                    clearTransform: function() {
                        return this.node.removeAttribute("transform"),
                            this.transform = {
                                translate: null,
                                rotate: null,
                                scale: null,
                                matrix: null
                            },
                            this.trigger("shapeupdate", {
                                type: "transform"
                            }),
                            this
                    },
                    _applyTransform: function() {
                        var a = this.transform,
                            b = [];
                        return a.translate && b.push(["translate(", a.translate, ")"]),
                        a.rotate && b.push(["rotate(", a.rotate, ")"]),
                        a.scale && b.push(["scale(", a.scale, ")"]),
                        a.matrix && b.push(["matrix(", a.matrix, ")"]),
                            this.node.setAttribute("transform", c.flatten(b).join(" ")),
                            this
                    },
                    setMatrix: function(a) {
                        return this.transform.matrix = a,
                            this._applyTransform()
                    },
                    setTranslate: function(a) {
                        return this.transform.translate = null !== a && h.call(arguments) || null,
                            this._applyTransform()
                    },
                    setRotate: function(a) {
                        return this.transform.rotate = null !== a && h.call(arguments) || null,
                            this._applyTransform()
                    },
                    setScale: function(a) {
                        return this.transform.scale = null !== a && h.call(arguments) || null,
                            this._applyTransform()
                    },
                    translate: function(a, b) {
                        var c = this.transform.matrix || new g;
                        return void 0 === b && (b = 0),
                            this.transform.matrix = c.translate(a, b),
                            this._applyTransform()
                    },
                    rotate: function(a) {
                        return this.transform.matrix = (this.transform.matrix || new g).rotate(a),
                            this._applyTransform()
                    },
                    scale: function(a, b) {
                        var c = this.transform.matrix || new g;
                        return void 0 === b && (b = a),
                            this.transform.matrix = c.scale(a, b),
                            this._applyTransform()
                    },
                    skew: function(a, b) {
                        var c = this.transform.matrix || new g;
                        return void 0 === b && (b = a),
                            this.transform.matrix = c.skew(a, b),
                            this._applyTransform()
                    },
                    stroke: function(a, b) {
                        return a && a.stroke ? a.stroke(this) : (this.node.setAttribute("stroke", a.toString()), b && this.node.setAttribute("stroke-width", b)),
                            this
                    },
                    fill: function(a) {
                        return this.node.setAttribute("fill", a.toString()),
                            this
                    },
                    setAttr: function(a, b) {
                        var d = this;
                        c.isObject(a) && c.each(a,
                            function(a, b) {
                                d.setAttr(b, a)
                            });
                        void 0 === b || null === b || "" === b ? this.node.removeAttribute(a) : this.node.setAttribute(a, b)
                    },
                    getAttr: function(a) {
                        return this.node.getAttribute(a)
                    }
                })
            });
        k("graphic/shapecontainer", "graphic/container core/class core/utils graphic/shape graphic/svg graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("graphic/container"),
                    c = b("core/utils"),
                    a = b("core/class").createClass("ShapeContainer", {
                        base: a,
                        isShapeContainer: true,
                        handleAdd: function(a, b) {
                            var c = this.getShapeNode();
                            c.insertBefore(a.node, c.childNodes[b] || null);
                            a.trigger("add", {
                                container: this
                            });
                            a.notifyTreeModification && a.notifyTreeModification("treeadd", this)
                        },
                        handleRemove: function(a) {
                            this.getShapeNode().removeChild(a.node);
                            a.trigger("remove", {
                                container: this
                            });
                            a.notifyTreeModification && a.notifyTreeModification("treeremove", this)
                        },
                        notifyTreeModification: function(a, b) {
                            this.eachItem(function(c, e) {
                                e.notifyTreeModification && e.notifyTreeModification(a, b);
                                e.trigger(a, {
                                    container: b
                                })
                            })
                        },
                        getShape: function(a) {
                            return this.getItem(a)
                        },
                        addShape: function(a, b) {
                            return this.addItem(a, b)
                        },
                        appendShape: function(a) {
                            return this.addShape(a)
                        },
                        prependShape: function(a) {
                            return this.addShape(a, 0)
                        },
                        replaceShape: function(a, b) {
                            var c = this.indexOf(b);
                            if ( - 1 !== c) return this.removeShape(c),
                                this.addShape(a, c),
                                this
                        },
                        addShapeBefore: function(a, b) {
                            var c = this.indexOf(b);
                            return this.addShape(a, c)
                        },
                        addShapeAfter: function(a, b) {
                            var c = this.indexOf(b);
                            return this.addShape(a, -1 === c ? void 0 : c + 1)
                        },
                        addShapes: function(a) {
                            return this.addItems(a)
                        },
                        removeShape: function(a) {
                            return this.removeItem(a)
                        },
                        getShapes: function() {
                            return this.getItems()
                        },
                        getShapesByType: function(a) {
                            function b(h) {
                                a.toLowerCase() == h.getType().toLowerCase() && e.push(h);
                                h.isShapeContainer && c.each(h.getShapes(),
                                    function(a) {
                                        b(a)
                                    })
                            }
                            var e = [];
                            return b(this),
                                e
                        },
                        getShapeById: function(a) {
                            return this.getShapeNode().getElementById(a).shape
                        },
                        arrangeShape: function(a, b) {
                            return this.removeShape(a).addShape(a, b)
                        },
                        getShapeNode: function() {
                            return this.shapeNode || this.node
                        }
                    }),
                    e = b("graphic/shape");
                return b("core/class").extendClass(e, {
                    bringTo: function(a) {
                        return this.container.arrangeShape(this, a),
                            this
                    },
                    bringFront: function() {
                        return this.bringTo(this.container.indexOf(this) + 1)
                    },
                    bringBack: function() {
                        return this.bringTo(this.container.indexOf(this) - 1)
                    },
                    bringTop: function() {
                        return this.container.removeShape(this).addShape(this),
                            this
                    },
                    bringRear: function() {
                        return this.bringTo(0)
                    },
                    bringRefer: function(a, b) {
                        return a.container && (this.remove && this.remove(), a.container.addShape(this, a.container.indexOf(a) + (b || 0))),
                            this
                    },
                    bringAbove: function(a) {
                        return this.bringRefer(a)
                    },
                    bringBelow: function(a) {
                        return this.bringRefer(a, 1)
                    },
                    replaceBy: function(a) {
                        return this.container && (a.bringAbove(this), this.remove()),
                            this
                    }
                }),
                    a
            });
        k("graphic/shapeevent", ["graphic/matrix", "core/utils", "graphic/box", "graphic/point", "core/class"],
            function(b) {
                var a = b("graphic/matrix"),
                    c = b("core/utils");
                b("graphic/point");
                return b("core/class").createClass("ShapeEvent", {
                    constructor: function(a) {
                        var b = null;
                        c.isObject(a.target) ? c.extend(this, a) : (this.type = a.type, b = a.target, b.correspondingUseElement && (b = b.correspondingUseElement), this.originEvent = a, this.targetShape = b.shape || b.paper || a.currentTarget && (a.currentTarget.shape || a.currentTarget.paper), a._kityParam && c.extend(this, a._kityParam))
                    },
                    preventDefault: function() {
                        var a = this.originEvent;
                        return a ? a.preventDefault ? (a.preventDefault(), a.cancelable) : (a.returnValue = !1, !0) : !0
                    },
                    getPosition: function(b, c) {
                        if (!this.originEvent) return null;
                        var f = this.originEvent.touches ? this.originEvent.touches[c || 0] : this.originEvent,
                            f = a.transformPoint(f && f.clientX || 0, f && f.clientY || 0, (this.targetShape.shapeNode || this.targetShape.node).getScreenCTM().inverse());
                        return a.getCTM(this.targetShape, b || "view").transformPoint(f)
                    },
                    stopPropagation: function() {
                        var a = this.originEvent;
                        return a ? void(a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !1) : !0
                    }
                })
            });
        k("graphic/shapepoint", ["core/class", "graphic/point"],
            function(b) {
                return b("core/class").createClass("ShapePoint", {
                    base: b("graphic/point"),
                    constructor: function(a, b) {
                        this.callBase(a, b)
                    },
                    setX: function(a) {
                        return this.setPoint(a, this.y)
                    },
                    setY: function(a) {
                        return this.setPoint(this.x, a)
                    },
                    setPoint: function(a, b) {
                        return this.x = a,
                            this.y = b,
                            this.update(),
                            this
                    },
                    getPoint: function() {
                        return this
                    },
                    update: function() {
                        return this.container && this.container.update && this.container.update(),
                            this
                    }
                })
            });
        k("graphic/standardcolor", [], {
            COLOR_STANDARD: {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00"
            },
            EXTEND_STANDARD: {}
        });
        k("graphic/star", "graphic/point core/class graphic/path core/utils graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                var a = {
                        3 : 0.2,
                        5 : 0.38196601125,
                        6 : 0.57735026919,
                        8 : 0.541196100146,
                        10 : 0.726542528005,
                        12 : 0.707106781187
                    },
                    c = b("graphic/point");
                return b("core/class").createClass("Star", {
                    base: b("graphic/path"),
                    constructor: function(a, b, f, g, h) {
                        this.callBase();
                        this.vertex = a || 3;
                        this.radius = b || 0;
                        this.shrink = f;
                        this.offset = g || new c(0, 0);
                        this.angleOffset = h || 0;
                        this.draw()
                    },
                    getVertex: function() {
                        return this.vertex
                    },
                    setVertex: function(a) {
                        return this.vertex = a,
                            this.draw()
                    },
                    getRadius: function() {
                        return this.radius
                    },
                    setRadius: function(a) {
                        return this.radius = a,
                            this.draw()
                    },
                    getShrink: function() {
                        return this.shrink
                    },
                    setShrink: function(a) {
                        return this.shrink = a,
                            this.draw()
                    },
                    getOffset: function() {
                        return this.offset
                    },
                    setOffset: function(a) {
                        return this.offset = a,
                            this.draw()
                    },
                    getAngleOffset: function() {
                        return this.angleOffset
                    },
                    setAngleOffset: function(a) {
                        return this.angleOffset = a,
                            this.draw()
                    },
                    draw: function() {
                        var b, d, f = this.radius,
                            g = this.radius * (this.shrink || a[this.vertex] || 0.5),
                            h = this.vertex,
                            j = this.offset,
                            i = 180 / h,
                            k = this.angleOffset,
                            m = this.getDrawer();
                        m.clear();
                        m.moveTo(c.fromPolar(g, 90));
                        for (b = 1; 2 * h >= b; b++) {
                            d = 90 + i * b;
                            m.lineTo(b % 2 ? c.fromPolar(f, d + k).offset(j) : c.fromPolar(g, d))
                        }
                        m.close()
                    }
                })
            });
        k("graphic/styled", ["core/class"],
            function(b) {
                function a(a) {
                    return a.classList || (a.classList = new c(a)),
                        a.classList
                }
                var c = b("core/class").createClass("ClassList", {
                    constructor: function(a) {
                        this._node = a;
                        this._list = a.className.toString().split(" ")
                    },
                    _update: function() {
                        this._node.className = this._list.join(" ")
                    },
                    add: function(a) {
                        this._list.push(a);
                        this._update()
                    },
                    remove: function(a) {
                        a = this._list.indexOf(a);~a && this._list.splice(a, 1);
                        this._update()
                    },
                    contains: function(a) {
                        return !! ~this._list.indexOf(a)
                    }
                });
                return b("core/class").createClass("Styled", {
                    addClass: function(b) {
                        return a(this.node).add(b),
                            this
                    },
                    removeClass: function(b) {
                        return a(this.node).remove(b),
                            this
                    },
                    hasClass: function(b) {
                        return a(this.node).contains(b)
                    },
                    setStyle: function(a) {
                        if (2 == arguments.length) return this.node.style[arguments[0]] = arguments[1],
                            this;
                        for (var b in a) a.hasOwnProperty(b) && (this.node.style[b] = a[b]);
                        return this
                    }
                })
            });
        k("graphic/svg", [],
            function() {
                var b = document,
                    a = 0,
                    c = {
                        createNode: function(e) {
                            var d = b.createElementNS(c.ns, e);
                            return d.id = "kity_" + e + "_" + a++,
                                d
                        },
                        defaults: {
                            stroke: "none",
                            fill: "none"
                        },
                        xlink: "http://www.w3.org/1999/xlink",
                        ns: "http://www.w3.org/2000/svg"
                    };
                return c
            });
        k("graphic/sweep", "graphic/point core/class graphic/path core/utils graphic/shape graphic/svg graphic/geometry".split(" "),
            function(b) {
                var a = b("graphic/point");
                return b("core/class").createClass("Sweep", {
                    base: b("graphic/path"),
                    constructor: function(a, b, d) {
                        this.callBase();
                        this.sectionArray = a || [];
                        this.angle = b || 0;
                        this.angleOffset = d || 0;
                        this.draw()
                    },
                    getSectionArray: function() {
                        return this.sectionArray
                    },
                    setSectionArray: function(a) {
                        return this.sectionArray = a,
                            this.draw()
                    },
                    getAngle: function() {
                        return this.angle
                    },
                    setAngle: function(a) {
                        return this.angle = a,
                            this.draw()
                    },
                    getAngleOffset: function() {
                        return this.angleOffset
                    },
                    setAngleOffset: function(a) {
                        return this.angleOffset = a,
                            this.draw()
                    },
                    draw: function() {
                        var a, b = this.sectionArray;
                        for (a = 0; a < b.length; a = a + 2) this.drawSection(b[a], b[a + 1]);
                        return this
                    },
                    drawSection: function(b, e) {
                        var d = this.angle && (this.angle % 360 ? this.angle % 360 : 360),
                            f = this.angleOffset,
                            g = f + d / 2,
                            h = f + d,
                            j = this.getDrawer();
                        return j.redraw(),
                            0 === d ? void j.done() : (j.moveTo(a.fromPolar(b, f)), j.lineTo(a.fromPolar(e, f)), e && (j.carcTo(e, 0, 1, a.fromPolar(e, g)), j.carcTo(e, 0, 1, a.fromPolar(e, h))), j.lineTo(a.fromPolar(b, h)), b && (j.carcTo(b, 0, 1, a.fromPolar(b, g)), j.carcTo(b, 0, 1, a.fromPolar(b, f))), j.close(), void j.done())
                    }
                })
            });
        k("graphic/text", "graphic/textcontent graphic/shape core/class graphic/shapecontainer graphic/container core/utils graphic/svg".split(" "),
            function(b) {
                function a(a) {
                    var b = window.getComputedStyle(a.node),
                        b = [b.fontFamily, b.fontSize, b.fontStretch, b.fontStyle, b.fontVariant, b.fontWeight].join("-");
                    if (f[b]) return f[b];
                    var c = a.getContent();
                    a.setContent("test");
                    var d = a.getBoundaryBox(),
                        e = a.getY() + +a.node.getAttribute("dy") - d.y,
                        d = e - d.height;
                    return a.setContent(c),
                        f[b] = {
                            top: e,
                            bottom: d,
                            middle: (e + d) / 2
                        }
                }
                var c = b("graphic/textcontent"),
                    e = b("graphic/shapecontainer"),
                    d = b("graphic/svg"),
                    f = {};
                return b("core/class").createClass("Text", {
                    base: c,
                    mixins: [e],
                    constructor: function(a) {
                        this.callBase("text");
                        void 0 !== a && this.setContent(a)
                    },
                    setX: function(a) {
                        return this.node.setAttribute("x", a),
                            this
                    },
                    setPosition: function(a, b) {
                        return this.setX(a).setY(b)
                    },
                    setY: function(a) {
                        return this.node.setAttribute("y", a),
                            this
                    },
                    getX: function() {
                        return + this.node.getAttribute("x") || 0
                    },
                    getY: function() {
                        return + this.node.getAttribute("y") || 0
                    },
                    setFont: function(a) {
                        return this.callBase(a),
                            this.setVerticalAlign(this.getVerticalAlign())
                    },
                    setTextAnchor: function(a) {
                        return this.node.setAttribute("text-anchor", a),
                            this
                    },
                    getTextAnchor: function() {
                        return this.node.getAttribute("text-anchor") || "start"
                    },
                    setVerticalAlign: function(b) {
                        return this.whenPaperReady(function() {
                            var c;
                            switch (b) {
                                case "top":
                                    c = a(this).top;
                                    break;
                                case "bottom":
                                    c = a(this).bottom;
                                    break;
                                case "middle":
                                    c = a(this).middle;
                                    break;
                                default:
                                    c = 0
                            }
                            this.node.setAttribute("dy", c)
                        }),
                            this.verticalAlign = b,
                            this
                    },
                    getVerticalAlign: function() {
                        return this.verticalAlign || "baseline"
                    },
                    setStartOffset: function(a) {
                        this.shapeNode != this.node && this.shapeNode.setAttribute("startOffset", 100 * a + "%")
                    },
                    addSpan: function(a) {
                        return this.addShape(a),
                            this
                    },
                    setPath: function(a) {
                        var b = this.shapeNode;
                        if (this.shapeNode == this.node) {
                            for (b = this.shapeNode = d.createNode("textPath"); this.node.firstChild;) this.shapeNode.appendChild(this.node.firstChild);
                            this.node.appendChild(b)
                        }
                        return b.setAttributeNS(d.xlink, "xlink:href", "#" + a.node.id),
                            this.setTextAnchor(this.getTextAnchor()),
                            this
                    }
                })
            });
        k("graphic/textcontent", "graphic/shape graphic/svg core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box core/class".split(" "),
            function(b) {
                var a = b("graphic/shape");
                return b("core/class").createClass("TextContent", {
                    base: a,
                    constructor: function(a) {
                        this.callBase(a);
                        this.shapeNode = this.shapeNode || this.node
                    },
                    clearContent: function() {
                        for (; this.shapeNode.firstChild;) this.shapeNode.removeChild(this.shapeNode.firstChild);
                        return this
                    },
                    setContent: function(a) {
                        return this.shapeNode.textContent = a,
                            this
                    },
                    getContent: function() {
                        return this.shapeNode.textContent
                    },
                    appendContent: function(a) {
                        return this.shapeNode.textContent = this.shapeNode.textContent + a,
                            this
                    },
                    setSize: function(a) {
                        return this.setFontSize(a)
                    },
                    setFontSize: function(a) {
                        return this.setFont({
                            size: a
                        })
                    },
                    setFontFamily: function(a) {
                        return this.setFont({
                            family: a
                        })
                    },
                    setFontBold: function(a) {
                        return this.setFont({
                            weight: a ? "bold": "normal"
                        })
                    },
                    setFontItalic: function(a) {
                        return this.setFont({
                            style: a ? "italic": "normal"
                        })
                    },
                    setFont: function(a) {
                        var b = this.node;
                        return ["family", "size", "weight", "style"].forEach(function(d) {
                            null === a[d] ? b.removeAttribute("resource-" + d) : a[d] && b.setAttribute("resource-" + d, a[d])
                        }),
                            this
                    },
                    getExtentOfChar: function(a) {
                        return this.node.getExtentOfChar(a)
                    },
                    getRotationOfChar: function(a) {
                        return this.node.getRotationOfChar(a)
                    },
                    getCharNumAtPosition: function(a, b) {
                        return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(a, b))
                    }
                })
            });
        k("graphic/textspan", ["graphic/textcontent", "graphic/shape", "core/class", "graphic/styled"],
            function(b) {
                var a = b("graphic/textcontent"),
                    c = b("graphic/styled");
                return b("core/class").createClass("TextSpan", {
                    base: a,
                    mixins: [c],
                    constructor: function(a) {
                        this.callBase("tspan");
                        this.setContent(a)
                    }
                })
            });
        k("graphic/use", "graphic/svg core/class graphic/shape core/utils graphic/eventhandler graphic/styled graphic/data graphic/matrix graphic/pen graphic/box".split(" "),
            function(b) {
                var a = b("graphic/svg"),
                    c = b("core/class"),
                    e = c.createClass("Use", {
                        base: b("graphic/shape"),
                        constructor: function(b) {
                            var c = null;
                            this.callBase("use"); (c = b.getId()) && this.node.setAttributeNS(a.xlink, "xlink:href", "#" + c);
                            "none" === b.node.getAttribute("fill") && b.node.removeAttribute("fill");
                            "none" === b.node.getAttribute("stroke") && b.node.removeAttribute("stroke")
                        }
                    }),
                    b = b("graphic/shape");
                return c.extendClass(b, {
                    use: function() {
                        return new e(this)
                    }
                }),
                    e
            });
        k("graphic/vector", ["graphic/point", "core/class", "graphic/matrix", "core/utils", "graphic/box"],
            function(b) {
                var a = b("graphic/point"),
                    c = b("graphic/matrix"),
                    e = b("core/class").createClass("Vector", {
                        base: a,
                        constructor: function(a, b) {
                            this.callBase(a, b)
                        },
                        square: function() {
                            return this.x * this.x + this.y * this.y
                        },
                        length: function() {
                            return Math.sqrt(this.square())
                        },
                        add: function(a) {
                            return new e(this.x + a.x, this.y + a.y)
                        },
                        minus: function(a) {
                            return new e(this.x - a.x, this.y - a.y)
                        },
                        dot: function(a) {
                            return this.x * a.x + this.y * a.y
                        },
                        project: function(a) {
                            return a.multipy(this.dot(a) / a.square())
                        },
                        normalize: function(a) {
                            return void 0 === a && (a = 1),
                                this.multipy(a / this.length())
                        },
                        multipy: function(a) {
                            return new e(this.x * a, this.y * a)
                        },
                        rotate: function(a, b) {
                            "rad" == b && (a = 180 * (a / Math.PI));
                            var g = (new c).rotate(a).transformPoint(this);
                            return new e(g.x, g.y)
                        },
                        vertical: function() {
                            return new e(this.y, -this.x)
                        },
                        reverse: function() {
                            return this.multipy( - 1)
                        },
                        getAngle: function() {
                            var a = this.length();
                            return 0 === a ? 0 : 180 * (0 < this.y ? 1 : -1) * Math.acos(this.x / a) / Math.PI
                        }
                    });
                return e.fromPoints = function(a, b) {
                    return new e(b.x - a.x, b.y - a.y)
                },
                    b("core/class").extendClass(a, {
                        asVector: function() {
                            return new e(this.x, this.y)
                        }
                    }),
                    e
            });
        k("graphic/view", "graphic/shapecontainer graphic/container core/utils core/class graphic/shape graphic/viewbox graphic/view".split(" "),
            function(b) {
                var a = b("graphic/shapecontainer"),
                    c = b("graphic/viewbox");
                return b("core/class").createClass("View", {
                    mixins: [a, c],
                    base: b("graphic/view"),
                    constructor: function() {
                        this.callBase("view")
                    }
                })
            });
        k("graphic/viewbox", ["core/class"],
            function(b) {
                return b("core/class").createClass("ViewBox", {
                    getViewBox: function() {
                        var a = this.node.getAttribute("viewBox");
                        return null === a ? {
                            x: 0,
                            y: 0,
                            width: this.node.clientWidth || this.node.parentNode.clientWidth,
                            height: this.node.clientHeight || this.node.parentNode.clientHeight
                        }: (a = a.split(" "), {
                            x: +a[0],
                            y: +a[1],
                            width: +a[2],
                            height: +a[3]
                        })
                    },
                    setViewBox: function(a, b, e, d) {
                        return this.node.setAttribute("viewBox", [a, b, e, d].join(" ")),
                            this
                    }
                })
            });
        k("kity", "core/utils core/class core/browser graphic/bezier graphic/pointcontainer graphic/path graphic/bezierpoint graphic/shapepoint graphic/vector graphic/circle graphic/ellipse graphic/clip graphic/shape graphic/shapecontainer graphic/color graphic/standardcolor graphic/container graphic/curve graphic/point graphic/gradientbrush graphic/svg graphic/defbrush graphic/group graphic/hyperlink graphic/image graphic/line graphic/lineargradientbrush graphic/mask graphic/matrix graphic/box graphic/marker graphic/resource graphic/viewbox graphic/palette graphic/paper graphic/eventhandler graphic/styled graphic/geometry graphic/patternbrush graphic/pen graphic/polygon graphic/poly graphic/polyline graphic/pie graphic/sweep graphic/radialgradientbrush graphic/rect graphic/regularpolygon graphic/ring graphic/data graphic/star graphic/text graphic/textcontent graphic/textspan graphic/use animate/animator animate/timeline animate/easing animate/opacityanimator animate/rotateanimator animate/scaleanimator animate/frame animate/translateanimator animate/pathanimator animate/motionanimator filter/filter filter/effectcontainer filter/gaussianblurfilter filter/effect/gaussianblureffect filter/projectionfilter filter/effect/effect filter/effect/colormatrixeffect filter/effect/compositeeffect filter/effect/offseteffect filter/effect/convolvematrixeffect".split(" "),
            function(b) {
                var a = {},
                    c = b("core/utils");
                return a.version = "2.0.0",
                    c.extend(a, {
                        createClass: b("core/class").createClass,
                        extendClass: b("core/class").extendClass,
                        Utils: c,
                        Browser: b("core/browser"),
                        Bezier: b("graphic/bezier"),
                        BezierPoint: b("graphic/bezierpoint"),
                        Circle: b("graphic/circle"),
                        Clip: b("graphic/clip"),
                        Color: b("graphic/color"),
                        Container: b("graphic/container"),
                        Curve: b("graphic/curve"),
                        Ellipse: b("graphic/ellipse"),
                        GradientBrush: b("graphic/gradientbrush"),
                        Group: b("graphic/group"),
                        HyperLink: b("graphic/hyperlink"),
                        Image: b("graphic/image"),
                        Line: b("graphic/line"),
                        LinearGradientBrush: b("graphic/lineargradientbrush"),
                        Mask: b("graphic/mask"),
                        Matrix: b("graphic/matrix"),
                        Marker: b("graphic/marker"),
                        Palette: b("graphic/palette"),
                        Paper: b("graphic/paper"),
                        Path: b("graphic/path"),
                        PatternBrush: b("graphic/patternbrush"),
                        Pen: b("graphic/pen"),
                        Point: b("graphic/point"),
                        Polygon: b("graphic/polygon"),
                        Polyline: b("graphic/polyline"),
                        Pie: b("graphic/pie"),
                        RadialGradientBrush: b("graphic/radialgradientbrush"),
                        Rect: b("graphic/rect"),
                        RegularPolygon: b("graphic/regularpolygon"),
                        Ring: b("graphic/ring"),
                        Shape: b("graphic/shape"),
                        ShapePoint: b("graphic/shapepoint"),
                        ShapeContainer: b("graphic/shapecontainer"),
                        Sweep: b("graphic/sweep"),
                        Star: b("graphic/star"),
                        Text: b("graphic/text"),
                        TextSpan: b("graphic/textspan"),
                        Use: b("graphic/use"),
                        Vector: b("graphic/vector"),
                        g: b("graphic/geometry"),
                        Animator: b("animate/animator"),
                        Easing: b("animate/easing"),
                        OpacityAnimator: b("animate/opacityanimator"),
                        RotateAnimator: b("animate/rotateanimator"),
                        ScaleAnimator: b("animate/scaleanimator"),
                        Timeline: b("animate/timeline"),
                        TranslateAnimator: b("animate/translateanimator"),
                        PathAnimator: b("animate/pathanimator"),
                        MotionAnimator: b("animate/motionanimator"),
                        Filter: b("filter/filter"),
                        GaussianblurFilter: b("filter/gaussianblurfilter"),
                        ProjectionFilter: b("filter/projectionfilter"),
                        ColorMatrixEffect: b("filter/effect/colormatrixeffect"),
                        CompositeEffect: b("filter/effect/compositeeffect"),
                        ConvolveMatrixEffect: b("filter/effect/convolvematrixeffect"),
                        Effect: b("filter/effect/effect"),
                        GaussianblurEffect: b("filter/effect/gaussianblureffect"),
                        OffsetEffect: b("filter/effect/offseteffect")
                    }),
                    window.kity = a
            });
        try {
            inc.use("kity")
        } catch(T) {
            w("kity")
        }
    } ();