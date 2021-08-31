(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    388: function(e, t, r) {
        "use strict";
        r.r(t);
        r(10),
        r(8),
        r(25),
        r(11),
        r(12);
        var B = r(0)
          , I = r.n(B)
          , n = r(18)
          , v = r.n(n)
          , M = r(32)
          , T = r(23)
          , x = r(502)
          , R = r(3)
          , u = (r(13),
        r(9),
        r(19),
        r(7),
        r(17),
        r(20),
        r(16),
        r(1));
        function a(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function o(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function c(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var s, l = (Y = u.b.bound,
        m = u.b.bound,
        c((d = function() {
            function r(e, t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                this.root = e,
                this.page = t,
                this.business = e.business
            }
            var e, t, n;
            return e = r,
            (t = [{
                key: "tradeStatus",
                get: function() {
                    return this.root.currency.isCny ? this.business.data.takerStatus : R.q.canTrade
                }
            }, {
                key: "offerParams",
                get: function() {
                    var e = this.root
                      , t = e.currency
                      , r = e.form
                      , e = this.business.quick
                      , r = r.valueMap;
                    return {
                        quote: t.quote,
                        baseCurrencyName: t.baseCurrencyName,
                        amount: e.isBuySide ? r.quoteAmount : r.baseAmount,
                        payment: e.selectedPaymentMethod,
                        side: e.side
                    }
                }
            }, {
                key: "depositLimitParams",
                get: function() {
                    var e = this.root.currency
                      , t = this.business.quick;
                    return o(o({}, e.params), {}, {
                        tradeType: t.side,
                        paymentMethod: t.selectedPaymentMethod
                    })
                }
            }, {
                key: "setQuoteAmount",
                value: function(e) {
                    var t = this.page.ticker.refPrice;
                    this.business.amount.setQuoteWithSync(e, t)
                }
            }, {
                key: "setBaseAmount",
                value: function(e) {
                    var t = this.page.ticker.refPrice;
                    this.business.amount.setBaseWithSync(e, t)
                }
            }]) && i(e.prototype, t),
            n && i(e, n),
            r
        }()).prototype, "tradeStatus", [u.d], Object.getOwnPropertyDescriptor(d.prototype, "tradeStatus"), d.prototype),
        c(d.prototype, "offerParams", [u.d], Object.getOwnPropertyDescriptor(d.prototype, "offerParams"), d.prototype),
        c(d.prototype, "depositLimitParams", [u.d], Object.getOwnPropertyDescriptor(d.prototype, "depositLimitParams"), d.prototype),
        c(d.prototype, "setQuoteAmount", [Y], Object.getOwnPropertyDescriptor(d.prototype, "setQuoteAmount"), d.prototype),
        c(d.prototype, "setBaseAmount", [m], Object.getOwnPropertyDescriptor(d.prototype, "setBaseAmount"), d.prototype),
        d), p = (r(29),
        r(6));
        function b(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function y(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var m, d, O, h, g, j, w, P = {
            locale: R.G
        }, k = (q = u.g.shallow,
        n = u.b.bound,
        s = y((Y = function() {
            function o() {
                var e, t, r, n;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                t = "depositDescList",
                n = e = this,
                (r = s) && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                })
            }
            var e, t, r, c, n;
            return e = o,
            (t = [{
                key: "getDepositDescList",
                value: (c = regeneratorRuntime.mark(function e() {
                    var t, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                p.i.get("/v3/b2c/deposit/description", {
                                    params: P
                                });
                            case 2:
                                t = e.sent,
                                Object(u.i)(function() {
                                    r.depositDescList = t
                                });
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }),
                n = function() {
                    var e = this
                      , i = arguments;
                    return new Promise(function(t, r) {
                        var n = c.apply(e, i);
                        function o(e) {
                            b(n, t, r, o, a, "next", e)
                        }
                        function a(e) {
                            b(n, t, r, o, a, "throw", e)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }]) && f(e.prototype, t),
            r && f(e, r),
            o
        }()).prototype, "depositDescList", [q], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        y(Y.prototype, "getDepositDescList", [n], Object.getOwnPropertyDescriptor(Y.prototype, "getDepositDescList"), Y.prototype),
        Y);
        r(38);
        function E(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function C(c) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise(function(t, r) {
                    var n = c.apply(e, i);
                    function o(e) {
                        E(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        E(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function S(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function D(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var q, N, A = (m = u.g.shallow,
        d = u.b.bound,
        q = u.b.bound,
        n = u.b.bound,
        O = _((Y = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                S(this, "introduce", O, this),
                S(this, "issueTime", h, this),
                S(this, "marketCap", g, this),
                S(this, "highPrice", j, this),
                S(this, "candles", w, this)
            }
            var t, r, n, o, a, i;
            return t = e,
            (r = [{
                key: "getCandles",
                value: (i = C(regeneratorRuntime.mark(function e(t) {
                    var r, n, o = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = {
                                    granularity: 300,
                                    size: 300
                                },
                                n = [],
                                e.prev = 4,
                                e.next = 7,
                                p.i.get(p.e.CANDLES, {
                                    params: r,
                                    alertError: !1
                                });
                            case 7:
                                n = e.sent,
                                e.next = 12;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(4);
                            case 12:
                                Object(u.i)(function() {
                                    n && 0 < n.length ? o.candles = n.map(function(e) {
                                        return e[4]
                                    }) : o.candles = []
                                });
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }, e, null, [[4, 10]])
                })),
                function(e) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "getCoinDataInfo",
                value: (a = C(regeneratorRuntime.mark(function e(t) {
                    var r, n, o = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = {
                                    projectName: t
                                },
                                e.next = 5,
                                p.i.get(p.f.COIN_DATA, {
                                    params: r
                                });
                            case 5:
                                n = e.sent,
                                Object(u.i)(function() {
                                    o.marketCap = n.marketCap || "",
                                    o.issueTime = n.issueTime || "",
                                    o.highPrice = n.high_price || ""
                                });
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function(e) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "getCoinDetail",
                value: (o = C(regeneratorRuntime.mark(function e(t) {
                    var r, n, o = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = {
                                    projectName: t
                                },
                                e.next = 5,
                                p.i.get(p.f.COIN_DETAIL, {
                                    params: r
                                });
                            case 5:
                                n = e.sent,
                                Object(u.i)(function() {
                                    o.introduce = n.introduce || ""
                                });
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function(e) {
                    return o.apply(this, arguments)
                }
                )
            }]) && D(t.prototype, r),
            n && D(t, n),
            e
        }()).prototype, "introduce", [u.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        h = _(Y.prototype, "issueTime", [u.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        g = _(Y.prototype, "marketCap", [u.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        j = _(Y.prototype, "highPrice", [u.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        w = _(Y.prototype, "candles", [m], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        _(Y.prototype, "getCandles", [d], Object.getOwnPropertyDescriptor(Y.prototype, "getCandles"), Y.prototype),
        _(Y.prototype, "getCoinDataInfo", [q], Object.getOwnPropertyDescriptor(Y.prototype, "getCoinDataInfo"), Y.prototype),
        _(Y.prototype, "getCoinDetail", [n], Object.getOwnPropertyDescriptor(Y.prototype, "getCoinDetail"), Y.prototype),
        Y);
        r(14),
        r(15),
        r(27),
        r(28);
        function z(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function Q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? z(Object(r), !0).forEach(function(e) {
                    U(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }
        function U(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function V(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], i = !0, c = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); i = !0)
                            ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return F(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? F(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function F(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function L(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function H(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function K(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var W = (q = u.g.shallow,
        n = u.b.bound,
        N = K((Y = function() {
            function a(e) {
                var t, r, n, o;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                r = "rateMap",
                o = t = this,
                (n = N) && Object.defineProperty(t, r, {
                    enumerable: n.enumerable,
                    configurable: n.configurable,
                    writable: n.writable,
                    value: n.initializer ? n.initializer.call(o) : void 0
                }),
                this.root = e
            }
            var e, t, r, c, n;
            return e = a,
            (t = [{
                key: "currentRate",
                get: function() {
                    var e = this.root.currency.quote;
                    return "USD" === e ? 1 : this.rateMap[e] || 0
                }
            }, {
                key: "getCurrentRate",
                value: (c = regeneratorRuntime.mark(function e(t) {
                    var r, n, o, a = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if ("usd" === t)
                                    return e.abrupt("return");
                                e.next = 4;
                                break;
                            case 4:
                                return r = this.root.currency.quote,
                                e.next = 7,
                                p.i.get(p.d.RATE_DETAIL(r));
                            case 7:
                                n = e.sent,
                                n = V(n, 1),
                                o = n[0],
                                Object(u.i)(function() {
                                    a.rateMap = Q(Q({}, a.rateMap), {}, U({}, r, o.pairAvg))
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }),
                n = function() {
                    var e = this
                      , i = arguments;
                    return new Promise(function(t, r) {
                        var n = c.apply(e, i);
                        function o(e) {
                            L(n, t, r, o, a, "next", e)
                        }
                        function a(e) {
                            L(n, t, r, o, a, "throw", e)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function(e) {
                    return n.apply(this, arguments)
                }
                )
            }]) && H(e.prototype, t),
            r && H(e, r),
            a
        }()).prototype, "rateMap", [q], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        K(Y.prototype, "currentRate", [u.d], Object.getOwnPropertyDescriptor(Y.prototype, "currentRate"), Y.prototype),
        K(Y.prototype, "getCurrentRate", [n], Object.getOwnPropertyDescriptor(Y.prototype, "getCurrentRate"), Y.prototype),
        Y);
        function J(e) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, J),
            this.base = new A,
            this.rate = new W(e),
            this.partner = new k,
            this.data = new l(e,this)
        }
        r(146),
        r(62),
        r(64),
        r(22);
        var Y = r(24)
          , G = r(564)
          , $ = r(39)
          , X = (r(773),
        r(415))
          , Z = r(4)
          , ee = r(43)
          , te = r(947)
          , re = r(513);
        function ne(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function oe(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ne(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : ne(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function ae(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ie(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return ie(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ie(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ie(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function ce() {
            return [{
                label: Object(Z.b)("buy"),
                value: R.o.buy,
                className: "side-buy"
            }, {
                label: Object(Z.b)("sell"),
                value: R.o.sell,
                className: "side-sell"
            }]
        }
        function ue(e) {
            e !== R.o.buy && Object(re.a)({
                action: "side_sell"
            })
        }
        var se = (window.okui || {}).peity
          , le = {
            fill: "transparent",
            strokeWidth: 1,
            stroke: "#2D60E0"
        }
          , pe = Object(Y.a)(function() {
            var e, t, r, n, o, a = (e = Object(T.s)().media,
            I.a.useMemo(function() {
                return "xl" === e ? {
                    width: 520,
                    height: 149
                } : "lg" === e ? {
                    width: 456,
                    height: 149
                } : "md" === e ? {
                    width: 472,
                    height: 142
                } : {
                    width: 332,
                    height: 100
                }
            }, [e])), i = Object(B.useRef)(null), c = Object(re.b)(), u = c.base, s = c.rate, l = Object(M.g)().currency, p = u.issueTime, b = u.marketCap, f = u.highPrice, y = u.introduce, m = u.candles;
            t = i,
            r = m,
            n = a,
            o = Math.min.apply(Math, ae(r)),
            Object(B.useEffect)(function() {
                var e = t.current;
                e && (e.innerHTML = r.join(","),
                se(e, "line", oe(oe({
                    min: o
                }, le), n)))
            }, [t, r, o, n]);
            var d = s.currentRate
              , c = l.selectedPair
              , u = "USDT" === c.baseCurrencyName ? "USDT" : c.baseName
              , a = I.a.createElement("div", {
                className: "about-tip-box"
            }, I.a.createElement("div", {
                className: "about-tip",
                dangerouslySetInnerHTML: {
                    __html: y
                }
            }))
              , s = I.a.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: y
                }
            })
              , y = R.N.includes(l.base);
            return l.base ? I.a.createElement("div", {
                className: "about-base"
            }, I.a.createElement("div", {
                className: "title"
            }, I.a.createElement("img", {
                className: "base-logo",
                src: l.selectedPair.baseColorfulIconUrl,
                alt: "currency"
            }), I.a.createElement("h3", {
                className: "base-title"
            }, Object(Z.b)("about_title", {
                value: u
            }))), I.a.createElement("div", {
                className: v()("about", {
                    "stable-base": y,
                    "not-stable-base": !y
                })
            }, y ? a : I.a.createElement(G.a, {
                prefixClassName: "currency-detail-popover",
                placement: G.a.DIRECTION.bottomLeft,
                description: s,
                alwaysUpdatePopper: !0,
                graspBaseDom: !0
            }, a)), 0 < m.length && I.a.createElement("div", {
                className: "line"
            }, I.a.createElement("div", {
                ref: i
            })), I.a.createElement("div", {
                className: "data"
            }, I.a.createElement("div", {
                className: "data-col data-left"
            }, I.a.createElement("div", {
                className: "data-item"
            }, I.a.createElement("div", {
                className: "data-item-col"
            }, Object(Z.b)("issue_date")), I.a.createElement("div", {
                className: "data-item-value"
            }, p ? Object(X.b)(p, "yyyy-MM-dd") : "--")), I.a.createElement("div", {
                className: "data-item"
            }, I.a.createElement("div", {
                className: "data-item-col"
            }, Object(Z.b)("market_cap")), I.a.createElement("div", {
                className: "data-item-value"
            }, b ? "".concat(l.quoteSymbol).concat(te.a.floorShort(b * d, 2)) : "--"))), I.a.createElement("div", {
                className: "data-col data-right"
            }, !y && I.a.createElement("div", {
                className: "data-item"
            }, I.a.createElement("div", {
                className: "data-item-col"
            }, Object(Z.b)("all_time_high")), I.a.createElement("div", {
                className: "data-item-value"
            }, f ? "".concat(l.quoteSymbol).concat(te.a.floor(f * d, 2)) : "--")))), !y && I.a.createElement("div", {
                className: "link"
            }, I.a.createElement("div", {
                className: "link-item"
            }, I.a.createElement("a", {
                href: ee.d.markets(null === (y = c.baseCurrencyName) || void 0 === y ? void 0 : y.toLowerCase(), null === (c = c.baseCurrency) || void 0 === c ? void 0 : c.toLowerCase()),
                target: "_blank",
                rel: "noopener noreferrer"
            }, I.a.createElement($.a, {
                className: "icon-fabi_more"
            }), Object(Z.b)("more_informations"))))) : null
        })
          , be = r(59)
          , fe = r(26)
          , ye = [{
            side: "buy"
        }, {
            side: "sell"
        }]
          , me = Object(Y.a)(function(e) {
            var t, r, n, o, a = e.className, i = Object(M.g)().currency, c = Object(M.c)(), u = c.quick, s = c.amount, e = c.view, l = u.side, p = i.quote, b = i.base, c = (t = i.quote,
            r = i.base,
            Object(B.useCallback)(function(e) {
                return Object(fe.C)({
                    target: "click",
                    action: "buy_crypto_tab_".concat(e),
                    params: [{
                        value: t
                    }, {
                        value: r
                    }]
                })
            }, [t, r])), i = Object(T.i)(u.setSide, ue, c), c = Object(T.m)("data-side", i), i = (n = s.setBase,
            o = s.setQuote,
            I.a.useCallback(function() {
                n(""),
                o("")
            }, [n, o])), s = Object(B.useCallback)(function() {
                l === R.o.sell && Object(fe.u)("web_c2c_sell_crypto", {
                    quote: p,
                    base: b
                })
            }, [p, b, l]), f = Object(T.x)(c, i, s, u.setError, e.focusInput), y = Object(T.f)("buy", ye), e = Object(T.t)(ce);
            return I.a.createElement("div", {
                className: v()("buy-take-side", a)
            }, e.map(function(e, t) {
                var r = e.value === l;
                return I.a.createElement(be.Link, {
                    className: v()("side", e.className, {
                        "side-active": r
                    }),
                    onClick: f,
                    "data-side": e.value,
                    key: t,
                    to: y[t]
                }, e.label)
            }))
        })
          , de = (r(82),
        r(127))
          , ve = r(44)
          , Oe = r(463)
          , he = r(128)
          , ge = r(90);
        function je(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function we(c) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise(function(t, r) {
                    var n = c.apply(e, i);
                    function o(e) {
                        je(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        je(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Pe(e, t) {
            return e = e ? Object(Z.b)("buy") : Object(Z.b)("sell"),
            Object(Z.c)("home_trade_btn", {
                tradeSide: e,
                baseCurrency: t
            })
        }
        var ke = Object(Y.a)(function() {
            var r, n, o, e, t, a, i, c, u, s, l, p = Object(M.g)(), b = p.currency, f = p.user, y = p.form, m = Object(M.c)(), d = m.quick, v = m.view, O = d.params, h = O.quoteCurrency, g = O.baseCurrency, j = O.payment, p = b.base, w = b.selectedPair, m = Object(T.t)(Pe, d.isBuySide, p), b = Object(x.e)(), P = (p = Object(M.g)(),
            n = p.user,
            o = p.currency,
            e = p.form,
            t = Object(M.c)().data.platformInvalids,
            a = Object(M.c)().quick.isBuySide,
            i = n.internalAccount.kycLevel,
            c = Object(re.b)().data.offerParams,
            p = Object(T.g)("offer"),
            u = Object(T.r)(p),
            s = Object(B.useCallback)(function() {
                Object(ge.a)({
                    paymentmethod: c.payment,
                    cryptocurrency: c.baseCurrencyName,
                    fiatocurrency: c.quote,
                    fiatamount: c.amount
                }),
                u(c)
            }, [u, c]),
            l = function() {
                var e = we(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n.getAccountsCurrent(o.quoteLower);
                            case 2:
                                t = n.account.nationality,
                                "CN" === t ? r = de.a.info({
                                    title: Object(Z.b)("buy_with_value", {
                                        value: o.quote
                                    }),
                                    text: Object(Z.b)("buy_with_cny_desc", {
                                        value: o.quote
                                    }),
                                    hideCloseBtn: !1,
                                    confirmText: Object(Z.b)("buy_with_cny_confirm"),
                                    onConfirm: k,
                                    onClose: k
                                }) : s();
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            we(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!a) {
                                e.next = 9;
                                break
                            }
                            if (0 !== i) {
                                e.next = 5;
                                break
                            }
                            R.D ? Object(fe.z)({
                                platformInvalids: t,
                                onFinish: function() {
                                    return we(regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    l();
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }, e)
                                    }))()
                                },
                                onCancel: function() {
                                    return we(regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    n.getAccountsCurrent();
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }, e)
                                    }))()
                                }
                            }) : s(),
                            e.next = 7;
                            break;
                        case 5:
                            return e.next = 7,
                            l();
                        case 7:
                            e.next = 10;
                            break;
                        case 9:
                            s();
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })));
            function k() {
                r.destroy(),
                o.updateQuote(R.L),
                e.reset()
            }
            var E, C, S, D, p = Object(he.r)(b), _ = Object(T.s)().isMobile ? "H5" : "PC", q = (b = O.side,
            E = O.quoteCurrency,
            C = O.baseCurrency,
            S = O.payment,
            D = b === R.o.buy ? R.o.sell : R.o.buy,
            Object(B.useMemo)(function() {
                return {
                    target: "click",
                    action: "post_buy_crypto",
                    params: [{
                        value: D
                    }, {
                        value: E
                    }, {
                        value: C
                    }, {
                        value: S
                    }]
                }
            }, [D, E, C, S])), b = Object(T.d)(fe.C, q), N = "CN" === f.account.nationality, A = Object(T.x)(p, b), z = Object(B.useCallback)(function() {
                var e = {
                    language: window.okGlobal.locale,
                    is_validated_success: d.isCanNotMatch ? "no" : "yes",
                    currency: h,
                    symbol: g
                }
                  , t = "buy" === O.side ? "web_buysell_buy_click" : "web_buysell_sell_click";
                Object(fe.u)(t, e)
            }, [g, O.side, d.isCanNotMatch, h]), p = Object(B.useCallback)(function() {
                Object(fe.u)("web_c2c_trade_button_click", {
                    c2c_type: N ? "p2p" : "non_p2p",
                    trade_type: O.side
                });
                var e = {
                    side: q.params[0].value,
                    quote_currency: q.params[1].value,
                    base_currency: q.params[2].value,
                    payment: q.params[3].value
                }
                  , t = {
                    token_type: g,
                    token_value: y.valueMap.baseAmount,
                    currency: h,
                    amount: y.valueMap.quoteAmount,
                    payment_type: j,
                    device_type: _
                };
                Object(fe.u)("web_c2c_post_buy_crypto", e),
                Object(fe.u)("web_buysell_homepage_clickbuy", t),
                z(),
                ((null == w ? void 0 : w.route[O.side]) === R.K.c2c ? A : P)()
            }, [g, P, y, N, z, _, A, q.params, O.side, j, h, w]), b = Object(B.useCallback)(function() {
                v.blurInput(),
                z()
            }, [z, v]);
            return I.a.createElement(Oe.a, {
                className: "taker-btn",
                category: ve.a.CATEGORY.fill,
                type: ve.a.TYPE.primary,
                disabled: d.isBalanceOutLimit,
                size: ve.a.SIZE.lg,
                onClick: d.isCanNotMatch ? b : p
            }, m)
        })
          , Ee = (r(46),
        r(40),
        r(63),
        r(84),
        r(71),
        r(53));
        function Ce(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Se(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return Se(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Se(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Se(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var De = document.querySelector(".ssr-popular-base")
          , _e = Object(Y.a)(function() {
            var r, n, e = Object(M.c)(), t = e.quick, o = e.roughly, a = e.bonus, i = e.amount, c = Object(M.g)().currency, u = Object(re.b)(), s = u.base, l = u.partner, p = u.rate, e = u.data;
            Object(B.useEffect)(function() {
                Ce(document.querySelectorAll('a[href="/buy-ripple"]')).forEach(function(e) {
                    e.href = "/buy-bitcoin"
                })
            }, []),
            r = Object(T.w)().baseCurrencyName.toUpperCase(),
            n = Object(Ee.f)().currencyPairsStore.c2c.pairs,
            Object(B.useEffect)(function() {
                var e = null === (e = n.find(function(e) {
                    return e.baseUpper === r
                })) || void 0 === e || null === (t = e.baseCurrencyName) || void 0 === t ? void 0 : t.toLowerCase()
                  , t = window.location.href.replace(new RegExp(r,"i"), e);
                e && e.toUpperCase() !== r && !document.querySelector('link[href="'.concat(t, '"]')) && ((e = document.createElement("link")).rel = "canonical",
                e.href = t,
                document.head.appendChild(e))
            }, [r, n]),
            Object(T.v)(a.getBonusConfig, l.getDepositDescList),
            Object(T.l)([p.getCurrentRate], c.quoteLower),
            Object(T.l)([s.getCoinDataInfo, s.getCoinDetail], c.base),
            Object(T.l)([s.getCandles], c.base, c.quote);
            u = Object(T.w)(),
            a = u.side,
            l = u.quoteAmount,
            p = u.type,
            s = u.baseCurrencyName;
            Object(T.l)([t.getPayments], c.base, c.quote, a),
            Object(T.l)([o.getOtcTicker], c.base, c.quote, t.side, t.selectedPaymentMethod),
            Object(T.l)([t.setSide], a);
            var b, f, u = a === R.o.buy, a = "quantity" === p ? i.setBase : i.setQuote, a = (b = a,
            f = l,
            Object(B.useCallback)(function() {
                f && b(f)
            }, [f, b]));
            Object(T.v)(a);
            o = o.refPrice;
            return i = i.syncBase,
            l = l,
            p = p,
            o = o,
            u || "quantity" !== p && l && i(l, o),
            Object(T.v)(t.setError),
            I.a.useEffect(function() {
                return De && (De.style.display = "block"),
                function() {
                    De && (De.style.display = "none")
                }
            }, []),
            Object(T.l)([c.getDepositLimit], e.depositLimitParams),
            Object(T.l)([t.checkUrlParams], s, c.baseCurrencyName),
            null
        })
          , qe = Object(Y.a)(function() {
            return Object(M.g)().currency.isUseOtc ? null : I.a.createElement(_e, null)
        })
          , Ne = (r(83),
        Object(Y.a)(function() {
            var e = Object(M.g)().currency
              , t = e.quote
              , r = e.base
              , n = Object(be.useHistory)().location
              , e = Object(T.s)().isMobile
              , o = n.pathname.split("/")[1]
              , a = window.okGlobal.locale
              , i = e ? "H5" : "PC";
            return Object(B.useEffect)(function() {
                var e = {
                    action: "view_nav_buy-crypto",
                    target: "click",
                    params: [{
                        value: t
                    }, {
                        value: r
                    }]
                };
                t && r && (Object(fe.C)(e),
                Object(fe.u)("web_c2c_view_nav_buy_crypto", {
                    quote: t,
                    base: r
                }))
            }, [t, r]),
            Object(B.useEffect)(function() {
                Object(fe.u)("web_buysell_homepage_view", {
                    language: a,
                    slug: o,
                    device_type: i
                })
            }, [a, o, i]),
            null
        }))
          , Ae = (r(774),
        I.a.lazy(function() {
            return Promise.all([r.e(9), r.e(23)]).then(r.bind(null, 963))
        }))
          , ze = ["buy"]
          , Y = function() {
            Object(M.f)(ze, J),
            Object(M.e)(x.c);
            var e = "sm" !== Object(T.s)().media && !R.C;
            return I.a.createElement("div", {
                className: "trade-buy"
            }, I.a.createElement(Ne, null), I.a.createElement(qe, null), I.a.createElement("div", {
                className: v()("base", {
                    "broker-base": R.C
                })
            }, I.a.createElement("div", {
                className: "taker-cont"
            }, I.a.createElement(me, {
                className: "taker-full"
            }), I.a.createElement(x.a, null), I.a.createElement(ke, null), I.a.createElement(x.b, null)), I.a.createElement(pe, null)), e && I.a.createElement(Ae, null))
        };
        t.default = I.a.memo(Y)
    },
    415: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return o
        }),
        r.d(t, "a", function() {
            return a
        });
        var n = r(366)
          , o = n.a.format
          , a = function(e, t) {
            return n.a.add(e, t)
        }
    },
    423: function(e, t, r) {
        "use strict";
        r(7);
        var n = r(14)
          , n = (r(8),
        r(15))
          , n = (r(10),
        r(11))
          , n = (r(12),
        r(28))
          , n = (r(19),
        r(27))
          , n = (r(9),
        r(36))
          , n = (r(22),
        r(38))
          , o = r(0)
          , s = r.n(o)
          , l = r(4)
          , i = r(23)
          , n = r(30)
          , o = r(18)
          , p = r.n(o)
          , b = r(449)
          , f = (r(443),
        ["noIcon", "allLabel", "className", "options", "onChange", "valueKey", "isQuote", "optionTitle"]);
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function m(e, t) {
            if (null == e)
                return {};
            var r, n = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    0 <= t.indexOf(r) || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++)
                    r = o[a],
                    0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
        }
        function a(e) {
            return function(e) {
                if (Array.isArray(e))
                    return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function u(e, t) {
            return t ? [{
                value: "all",
                label: t
            }].concat(a(e)) : e
        }
        function d(n, o) {
            var a = Object(i.j)();
            return s.a.useCallback(function(e) {
                var t, r = e.value;
                n(r),
                "all" !== r && a((t = r,
                (e = o)in (r = {}) ? Object.defineProperty(r, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[e] = t,
                r))
            }, [o, n, a])
        }
        function v() {
            return document.body
        }
        var O = n.f(n.a, function(e, t, r, n) {
            e = e.map(function(e) {
                return {
                    label: s.a.createElement("div", {
                        className: "currency-option-wrap"
                    }, !n && s.a.createElement("img", {
                        className: "img",
                        src: e.baseColorfulIconUrl
                    }), s.a.createElement("div", {
                        className: "currency-section"
                    }, s.a.createElement("div", {
                        className: "full"
                    }, e.baseCurrency), s.a.createElement("div", {
                        className: "abbreviation"
                    }, e.baseName))),
                    basesValuelabel: s.a.createElement("div", {
                        className: "currency-option-wrap"
                    }, !n && s.a.createElement("img", {
                        className: "img",
                        src: e.baseColorfulIconUrl
                    }), s.a.createElement("div", {
                        className: "currency-section"
                    }, s.a.createElement("span", {
                        className: "name"
                    }, e.baseCurrency))),
                    value: e[t]
                }
            });
            return u(e, r)
        })
          , h = n.f(n.a, function(e, t, r, n) {
            e = e.map(function(e) {
                return {
                    label: s.a.createElement("div", {
                        className: "currency-option-wrap"
                    }, !n && s.a.createElement("img", {
                        className: "img",
                        src: e.countryIcon
                    }), s.a.createElement("span", {
                        className: "name"
                    }, e.quoteCurrency)),
                    value: e[t]
                }
            });
            return u(e, r)
        });
        t.a = function(e) {
            var t = e.noIcon
              , r = e.allLabel
              , n = e.className
              , o = e.options
              , a = void 0 === o ? [] : o
              , i = e.onChange
              , c = e.valueKey
              , u = e.isQuote
              , o = e.optionTitle
              , e = m(e, f)
              , t = (u ? h : O)(a, c = (c = u ? "quoteCurrency" : c) || "baseCurrencyName", r, t)
              , c = d(i, c)
              , u = u ? Object(l.b)("quote_select_title") : Object(l.b)("base_select_title")
              , u = o || u;
            return s.a.createElement(b.a, y({}, e, {
                className: p()("currency-select", n),
                options: t,
                onChange: c,
                optionTitle: u,
                getContainer: v
            }))
        }
    },
    440: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return b
        });
        r(13),
        r(9),
        r(19);
        var n, o, t = r(16), a = r(26), i = r(1), c = r(3), u = r(43);
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function l(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        function p(e) {
            var t = e.kycLevel
              , r = [];
            return e.boundPhoneNumber || r.push(c.q.notBoundPhone),
            t < 1 && r.push(c.q.kyc0),
            r.length ? r : c.z
        }
        var b = (n = i.b.bound,
        o = i.b.bound,
        t = i.b.bound,
        l((r = function() {
            function r(e, t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                this.root = e,
                this.page = t
            }
            var e, t, n;
            return e = r,
            (t = [{
                key: "platformInvalids",
                get: function() {
                    var e = this.root.user.account;
                    return p(e)
                }
            }, {
                key: "takerPlatformInvalids",
                get: function() {
                    var e = this.page.taker.account;
                    return p(e)
                }
            }, {
                key: "tradeStatus",
                get: function() {
                    return this.root.currency.isCny && this.platformInvalids.length ? this.platformInvalids[0] : c.q.canTrade
                }
            }, {
                key: "checkPlatformValid",
                value: function(e) {
                    if (!c.F)
                        return window.location.href = u.d.login(),
                        !1;
                    var t = this.root
                      , r = t.currency
                      , n = t.user
                      , t = function() {
                        n.getAccountsCurrent(r.quoteLower)
                    }
                      , e = "taker" === e ? this.takerPlatformInvalids : this.platformInvalids;
                    return !e.length || (Object(a.z)({
                        platformInvalids: e,
                        onFinish: t,
                        onCancel: t
                    }),
                    !1)
                }
            }, {
                key: "lastTicker",
                get: function() {
                    var e = this.page
                      , t = e.ticker
                      , r = e.makerForm
                      , e = t.lastMap
                      , t = r.valueMap
                      , r = t.baseCurrency;
                    return (e[t.quoteCurrency] || {})[r] || 0
                }
            }, {
                key: "setQuickQuote",
                value: function(e) {
                    var t = this.page.roughly.refPrice;
                    this.page.amount.setQuoteWithSync(e, t)
                }
            }, {
                key: "setQuickBase",
                value: function(e) {
                    var t = this.page.roughly.refPrice;
                    this.page.amount.setBaseWithSync(e, t)
                }
            }]) && s(e.prototype, t),
            n && s(e, n),
            r
        }()).prototype, "platformInvalids", [i.d], Object.getOwnPropertyDescriptor(r.prototype, "platformInvalids"), r.prototype),
        l(r.prototype, "takerPlatformInvalids", [i.d], Object.getOwnPropertyDescriptor(r.prototype, "takerPlatformInvalids"), r.prototype),
        l(r.prototype, "tradeStatus", [i.d], Object.getOwnPropertyDescriptor(r.prototype, "tradeStatus"), r.prototype),
        l(r.prototype, "checkPlatformValid", [n], Object.getOwnPropertyDescriptor(r.prototype, "checkPlatformValid"), r.prototype),
        l(r.prototype, "lastTicker", [i.d], Object.getOwnPropertyDescriptor(r.prototype, "lastTicker"), r.prototype),
        l(r.prototype, "setQuickQuote", [o], Object.getOwnPropertyDescriptor(r.prototype, "setQuickQuote"), r.prototype),
        l(r.prototype, "setQuickBase", [t], Object.getOwnPropertyDescriptor(r.prototype, "setQuickBase"), r.prototype),
        r)
    },
    443: function(e, t, r) {},
    452: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return v
        });
        r(13),
        r(9),
        r(19),
        r(16);
        var n, o, a, i, c, u, s, l, p, b, f = r(1);
        function y(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function m(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function d(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var v = (t = f.b.bound,
        n = f.b.bound,
        o = f.b.bound,
        a = f.b.bound,
        i = f.b.bound,
        c = d((r = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                y(this, "password", c, this),
                y(this, "makerDrawerFundVisible", u, this),
                y(this, "statusBtnFundVisible", s, this),
                y(this, "statusSwitchFundVisible", l, this),
                y(this, "makerOrEditFundVisible", p, this),
                y(this, "takerFoudPwdVisible", b, this)
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "toggleDialogVisible",
                value: function(e) {
                    this.password = "",
                    this.takerFoudPwdVisible = !0,
                    this[e] = !this[e]
                }
            }, {
                key: "closeDialogVisible",
                value: function() {
                    this.password = "",
                    this.takerFoudPwdVisible = !0,
                    this.makerDrawerFundVisible = !1,
                    this.statusBtnFundVisible = !1,
                    this.makerOrEditFundVisible = !1,
                    this.statusSwitchFundVisible = !1
                }
            }, {
                key: "toggleTakerFoudPwdVisible",
                value: function(e) {
                    this.password = "",
                    this.takerFoudPwdVisible = e
                }
            }, {
                key: "setPassword",
                value: function(e) {
                    this.password = e.target ? e.target.value : ""
                }
            }, {
                key: "clearPassword",
                value: function() {
                    this.password = ""
                }
            }]) && m(t.prototype, r),
            n && m(t, n),
            e
        }()).prototype, "password", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return ""
            }
        }),
        u = d(r.prototype, "makerDrawerFundVisible", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        s = d(r.prototype, "statusBtnFundVisible", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        l = d(r.prototype, "statusSwitchFundVisible", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        p = d(r.prototype, "makerOrEditFundVisible", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        b = d(r.prototype, "takerFoudPwdVisible", [f.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }),
        d(r.prototype, "toggleDialogVisible", [t], Object.getOwnPropertyDescriptor(r.prototype, "toggleDialogVisible"), r.prototype),
        d(r.prototype, "closeDialogVisible", [n], Object.getOwnPropertyDescriptor(r.prototype, "closeDialogVisible"), r.prototype),
        d(r.prototype, "toggleTakerFoudPwdVisible", [o], Object.getOwnPropertyDescriptor(r.prototype, "toggleTakerFoudPwdVisible"), r.prototype),
        d(r.prototype, "setPassword", [a], Object.getOwnPropertyDescriptor(r.prototype, "setPassword"), r.prototype),
        d(r.prototype, "clearPassword", [i], Object.getOwnPropertyDescriptor(r.prototype, "clearPassword"), r.prototype),
        r)
    },
    453: function(e, t, r) {
        "use strict";
        r(9),
        r(7),
        r(36),
        r(27);
        var n = r(0)
          , f = r.n(n)
          , y = r(497)
          , m = r(107)
          , n = r(18)
          , d = r.n(n)
          , v = (r(484),
        ["readonly", "errorClass", "className", "error", "inputClassName", "beforeInput", "afterInput", "name", "onChange"]);
        function O() {
            return (O = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function h(e, t) {
            if (null == e)
                return {};
            var r, n = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    0 <= t.indexOf(r) || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++)
                    r = o[a],
                    0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
        }
        t.a = function(e) {
            var t, r, n = e.readonly, o = e.errorClass, a = e.className, i = e.error, c = e.inputClassName, u = e.beforeInput, s = e.afterInput, l = e.name, p = e.onChange, b = h(e, v), l = (t = p,
            r = l,
            f.a.useCallback(function(e) {
                t(e, r)
            }, [r, t])), a = d()("input-cont", a, {
                "input-cont-err": !!i
            }, {
                "input-cont-readonly": n
            }), c = d()("input", c);
            return f.a.createElement("div", {
                className: a
            }, u, n ? f.a.createElement("span", {
                className: c
            }, m.a.showTruncation(e.value)) : f.a.createElement(y.a, O({
                className: c
            }, b, {
                onChange: l
            })), s, f.a.createElement("span", {
                className: d()("input-err", o)
            }, i))
        }
    },
    484: function(e, t, r) {},
    485: function(e, t, r) {
        "use strict";
        r(9),
        r(7),
        r(36);
        var n = r(0)
          , o = r.n(n)
          , a = r(453)
          , i = (r(509),
        ["label", "currency", "afterInput"]);
        function c() {
            return (c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function u(e, t) {
            if (null == e)
                return {};
            var r, n = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    0 <= t.indexOf(r) || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++)
                    r = o[a],
                    0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
        }
        t.a = function(e) {
            var t = e.label
              , r = (e.currency,
            e.afterInput)
              , e = u(e, i);
            return o.a.createElement(a.a, c({}, e, {
                className: "common-input-currency-group",
                inputClassName: "product-input",
                beforeInput: o.a.createElement("span", {
                    className: "input-label"
                }, t),
                afterInput: r,
                errorClass: "common-input-error"
            }))
        }
    },
    502: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return Ne
        }),
        r.d(t, "d", function() {
            return ye
        }),
        r.d(t, "a", function() {
            return Be
        }),
        r.d(t, "c", function() {
            return Ie
        }),
        r.d(t, "e", function() {
            return Me
        });
        r(8),
        r(25),
        r(29);
        var i, y = r(0), m = r.n(y), a = r(39), d = r(23), n = r(24), v = r(32), O = r(4), h = r(6), g = r(56), o = r(452), f = r(107), j = r(53), l = (r(13),
        r(9),
        r(19),
        r(33),
        r(34),
        r(35),
        r(7),
        r(14),
        r(15),
        r(10),
        r(11),
        r(12),
        r(46),
        r(22),
        r(16),
        r(26)), w = r(1);
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function u(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function b(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t = k(r);
                return e = n ? (e = k(this).constructor,
                Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
                t = this,
                !(e = e) || "object" !== c(e) && "function" != typeof e ? P(t) : e
            }
        }
        function P(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function k(e) {
            return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function E(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var C = (De = w.b.bound,
        se = ue = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(a, j["a"]);
            var e, t, r, c, n, o = b(a);
            function a() {
                var s, e, t, r, n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                s = o.call(this),
                e = s,
                t = "prices",
                r = i,
                n = P(s),
                r && Object.defineProperty(e, t, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0
                }),
                s.getQuotedPrice(),
                s.registDestroy(clearInterval.bind(null, setInterval(s.getQuotedPrice, 5e3))),
                s.registDestroy(Object(w.h)(function() {
                    return s.preStores.business.quick.params
                }, Object(l.d)("getC2cPrice", s.getQuotedPrice))),
                s.registDestroy(Object(w.h)(function() {
                    var e = P(s);
                    return {
                        price: e.price,
                        pairs: e.stores.currencyPairsStore.c2c.pairs
                    }
                }, function(e) {
                    var t = e.price
                      , r = e.pairs
                      , n = s.preStores
                      , o = n.business
                      , a = n.form
                      , i = o.roughly
                      , e = o.quick.params
                      , n = e.standard
                      , o = e.baseAmount
                      , c = e.baseCurrency
                      , u = e.quoteCurrency
                      , e = e.quoteAmount;
                    "number" == typeof n && t && (i.setQuotedPrice(t),
                    o && e && (r = (i = r.find(function(e) {
                        return e.quoteUpper === u && e.baseUpper === c
                    }) || {}).quoteScale,
                    i = i.baseScale,
                    0 === n ? a.batchSetValue({
                        quoteAmount: f.a.floorMul(o, t, r)
                    }) : a.batchSetValue({
                        baseAmount: f.a.floorDiv(e, t, i, !1)
                    })))
                })),
                s
            }
            return e = a,
            (t = [{
                key: "price",
                get: function() {
                    var t = this.preStores.business.quick;
                    return (this.prices.find(function(e) {
                        return e.payment === t.params.payment || e.bestOption
                    }) || {}).price
                }
            }, {
                key: "getQuotedPrice",
                value: (c = regeneratorRuntime.mark(function e() {
                    var o, a, i, c, u, s, l, p, b, f = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (l = this.preStores,
                                a = l.business,
                                i = l.form,
                                p = a.quick.params,
                                c = p.baseCurrency,
                                u = p.quoteCurrency,
                                s = p.side,
                                l = p.standard,
                                c && u) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return p = {
                                    baseCurrency: c,
                                    quoteCurrency: u,
                                    side: s,
                                    amount: null == i || null === (o = i.valueMap) || void 0 === o ? void 0 : o[1 === l ? "quoteAmount" : "baseAmount"],
                                    standard: l,
                                    paymentMethod: a.quick.selectedPaymentMethod
                                },
                                e.prev = 5,
                                e.next = 8,
                                h.i.get(h.b.TICKER_QUOTE, (t = {
                                    params: p,
                                    alertError: !1,
                                    cancelPrev: !0
                                },
                                r = h.h,
                                n = ["".concat(c, "-").concat(u)],
                                r in t ? Object.defineProperty(t, r, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[r] = n,
                                t));
                            case 8:
                                b = e.sent,
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(5),
                                b = [];
                            case 14:
                                Object(w.i)(function() {
                                    f.prices = b
                                });
                            case 15:
                            case "end":
                                return e.stop()
                            }
                        var t, r, n
                    }, e, this, [[5, 11]])
                }),
                n = function() {
                    var e = this
                      , i = arguments;
                    return new Promise(function(t, r) {
                        var n = c.apply(e, i);
                        function o(e) {
                            u(n, t, r, o, a, "next", e)
                        }
                        function a(e) {
                            u(n, t, r, o, a, "throw", e)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }]) && s(e.prototype, t),
            r && s(e, r),
            a
        }(),
        ue.key = "quotedPriceStore",
        i = E((_e = se).prototype, "prices", [w.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }),
        E(_e.prototype, "price", [w.d], Object.getOwnPropertyDescriptor(_e.prototype, "price"), _e.prototype),
        E(_e.prototype, "getQuotedPrice", [De], Object.getOwnPropertyDescriptor(_e.prototype, "getQuotedPrice"), _e.prototype),
        _e);
        function S() {
            return Object(j.c)(C)
        }
        var D = Object(n.a)(function(e) {
            var t = e.children
              , r = S().quotedPriceStore.price
              , n = Object(v.g)().currency
              , o = n.base
              , e = n.quote
              , n = n.quoteScale;
            return m.a.createElement(m.a.Fragment, null, m.a.createElement("p", {
                className: "common-quick-price-lab"
            }, Object(O.b)("base_ref_price_label", {
                base: o
            })), m.a.createElement("div", {
                className: "common-quick-price-value"
            }, m.a.createElement("span", null, r ? f.a.showTruncation(r, n) : "--", m.a.createElement("span", {
                className: "common-quick-price-quote"
            }, e)), t))
        })
          , _ = (r(17),
        r(38),
        r(28),
        r(27),
        r(20),
        r(18))
          , q = r.n(_)
          , N = r(485)
          , A = r(423)
          , z = r(3);
        function B(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function I(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : B(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function M(e) {
            return function(e) {
                if (Array.isArray(e))
                    return T(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? T(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var x = Object(n.a)(function(e) {
            var t = e.isViewCurrency
              , r = e.children
              , n = Object(v.g)()
              , o = n.currency
              , a = n.form
              , i = Object(v.c)()
              , c = i.data
              , u = i.quick
              , s = i.view
              , l = o.baseScale
              , e = q()("common-quick-currency-select", {
                "common-quick-currency-view": t
            })
              , n = Object(j.f)().currencyPairs
              , i = n.c2c
              , n = n.b2c
              , i = i.pairs.filter(function(e) {
                return e.quoteUpper === o.quote.toUpperCase() && e.canPlaceFlashTrade
            })
              , p = M(n.pairs.filter(function(e) {
                var t = e.quoteUpper
                  , e = e.b2cSupportType;
                return t === o.quote.toUpperCase() && (u.isBuySide ? e === z.b.buy || e === z.b.all : e === z.b.sell || e === z.b.all)
            }));
            i.forEach(function(t) {
                p.find(function(e) {
                    e = e.baseUpper;
                    return t.baseUpper === e
                }) || p.push(t)
            });
            p = p.map(function(e) {
                return I(I({}, e), {}, {
                    baseCurrency: e.baseUpper
                })
            }).filter(function(e) {
                return u.side === z.o.buy || !e.swap
            }),
            t = m.a.createElement(A.a, {
                className: e,
                optionContClassName: "common-quick-currency-option",
                value: o.baseCurrencyName,
                options: p,
                onChange: o.updateBaseCurrencyName,
                isView: t
            });
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(N.a, {
                onChange: c.setQuickBase,
                value: a.valueMap.baseAmount,
                precision: l,
                placeholder: f.a.showTruncation(0, l),
                label: Object(O.b)(u.isBuySide ? "taker_base_label" : "taker_sell_base_label"),
                afterInput: t,
                onFocus: s.focusInput
            }), r)
        });
        function R(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function Q(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? R(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function U(e) {
            return function(e) {
                if (Array.isArray(e))
                    return V(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return V(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? V(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function V(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var F = Object(n.a)(function(e) {
            var t = e.isViewCurrency
              , r = Object(v.g)()
              , n = r.currency
              , o = r.form
              , a = Object(v.c)()
              , i = a.data
              , c = a.view
              , u = a.quick
              , s = q()("common-quick-currency-select", {
                "common-quick-currency-view": t
            })
              , e = Object(j.f)().currencyPairs
              , r = e.c2c
              , a = e.b2c
              , e = r.pairs.filter(function(e) {
                return e.baseUpper === n.base.toUpperCase() && e.canPlaceFlashTrade
            })
              , l = U(a.pairs.filter(function(e) {
                var t = e.baseUpper
                  , e = e.b2cSupportType;
                return t === n.base.toUpperCase() && (u.isBuySide ? e === z.b.buy || e === z.b.all : e === z.b.sell || e === z.b.all)
            }));
            e.forEach(function(t) {
                l.find(function(e) {
                    e = e.quoteUpper;
                    return t.quoteUpper === e
                }) || l.push(t)
            });
            var l = l.map(function(e) {
                return Q(Q({}, e), {}, {
                    quoteCurrency: e.quoteUpper
                })
            })
              , p = r.isLoaded && a.isLoaded
              , b = Object(d.j)();
            Object(y.useEffect)(function() {
                var e = l.find(function(e) {
                    return e.quoteUpper === n.quote.toUpperCase()
                })
                  , t = null === (t = l[0]) || void 0 === t ? void 0 : t.quoteUpper;
                p && !e && t && (n.updateQuote(t),
                b({
                    quoteCurrency: t
                }))
            }, [p, n, l, b]);
            t = m.a.createElement(A.a, {
                className: s,
                optionContClassName: "common-quick-currency-option",
                value: n.quote,
                options: l,
                onChange: n.updateQuote,
                isQuote: !0,
                isView: t,
                hasSearch: !0
            });
            return m.a.createElement(N.a, {
                onChange: i.setQuickQuote,
                value: o.valueMap.quoteAmount,
                error: c.isBlurInput && u.quoteAmountErr,
                precision: n.quoteScale,
                placeholder: f.a.showTruncation(0, n.quoteScale),
                label: Object(O.b)(u.isBuySide ? "taker_quote_label" : "taker_sell_quote_label"),
                afterInput: t,
                onFocus: c.focusInput,
                onBlur: c.blurInput
            })
        })
          , L = Object(n.a)(function(e) {
            var t = e.children
              , e = Object(v.c)().quick
              , t = m.a.Children.toArray(t);
            return e.isBuySide || t.reverse(),
            t
        })
          , H = r(471);
        function K(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function W(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? K(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : K(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function J(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], i = !0, c = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); i = !0)
                            ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return Y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Y(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var G = Object(n.a)(function() {
            var e = Object(v.g)().currency
              , r = S().quotedPriceStore.prices
              , t = Object(v.c)().quick
              , n = J(Object(y.useState)([]), 2)
              , o = n[0]
              , a = n[1];
            return Object(y.useEffect)(function() {
                var e = t.payments;
                0 !== r.length && (e = e.map(function(t) {
                    var e = r.find(function(e) {
                        return e.payment === t.payment
                    }) || {};
                    return W(W({}, t), {}, {
                        bestOption: !1
                    }, e)
                })),
                a(e)
            }, [r, t.payments]),
            m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                className: "common-quick-payment"
            }, Object(O.b)(t.isBuySide ? "taker_buy_payment_label" : "taker_sell_payment_label")), m.a.createElement(H.a, {
                isFiat: e.isCny,
                iconBig: !0,
                payments: o,
                onChange: t.setPaymentMethod,
                paymentMethod: t.selectedPaymentMethod
            }))
        })
          , $ = r(177)
          , X = (r(36),
        r(578),
        "".concat(z.y, "/cdn/assets/imgs/MjAyMDM/"))
          , Z = {
            info: "A1080ECDAB964E8402BD5F62116E9C81"
        }
          , ee = {};
        Object.keys(Z).forEach(function(e) {
            var t = Z[e];
            ee[e] = "".concat(X).concat(t, ".png")
        });
        var te = ee
          , re = ["type", "className"];
        function ne() {
            return (ne = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function oe(e, t) {
            if (null == e)
                return {};
            var r, n = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    0 <= t.indexOf(r) || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++)
                    r = o[a],
                    0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
        }
        function ae(e) {
            var t = e.type
              , r = e.className
              , e = oe(e, re);
            return m.a.createElement("img", ne({}, e, {
                className: q()("color-icon", r),
                src: te[t]
            }))
        }
        function ie(e, r) {
            return e.map(function(e, t) {
                return m.a.createElement("span", {
                    className: "block tip-text",
                    key: t
                }, Object(O.c)(e, r))
            })
        }
        function ce(e) {
            var t = e.quoteSymbol
              , r = e.bonusAmount
              , n = e.quoteAmount
              , o = e.curBonusConfig
              , e = ["bonus_param_tip1", "bonus_param_tip2"]
              , r = {
                min: t + o.min,
                max: t + o.max,
                value: r
            };
            return n ? n < o.min || n > o.max ? m.a.createElement("span", {
                className: "block"
            }, m.a.createElement(a.a, {
                className: "bonus-tip-icon icon-icon_smile"
            }), ie(e, r)) : m.a.createElement("span", {
                className: "block"
            }, m.a.createElement(a.a, {
                className: "bonus-tip-icon icon-icon_laugh"
            }), ie(e, r)) : ie(e, r)
        }
        var ue, se, le, pe, be = Object(n.a)(function() {
            var e = Object(v.g)()
              , t = e.currency
              , r = e.form
              , n = Object(v.c)()
              , o = n.bonus
              , e = n.quick
              , n = (n = o.curBonusReward,
            m.a.createElement("span", {
                className: "bonus-amount"
            }, Object(O.b)("price_param", {
                value: n
            })));
            if (!o.enableBonusActivity)
                return null;
            if (z.C)
                return null;
            if (!e.isBuySide)
                return null;
            e = m.a.createElement("span", {
                className: "bonus-title"
            }, Object(O.c)("bonus_title_param_rewards", {
                value: n,
                rewards: m.a.createElement("a", {
                    style: {
                        textDecoration: "underline"
                    },
                    href: Object(O.b)("bonus_link")
                }, Object(O.b)("bonus_link_title"))
            }), m.a.createElement(ae, {
                type: "info",
                className: "bonus-icon"
            })),
            r = r.valueMap.quoteAmount,
            t = m.a.createElement(ce, {
                bonusAmount: n,
                quoteAmount: r,
                isCny: t.isCny,
                curBonusConfig: o.curBonusConfig,
                quoteSymbol: t.selectedPair.quoteSymbol
            });
            return m.a.createElement("div", {
                className: q()("common-quick-bonus"),
                "data-nosnippet": "true"
            }, m.a.createElement($.a, {
                tips: [t],
                placement: e,
                align: "left",
                position: "top",
                showArrowPoint: !0,
                arrowPointClass: "arrow-point"
            }))
        }), fe = r(128), ye = Object(n.a)(function(e) {
            var t, r, n = e.className, o = e.transferClass, a = Object(v.g)(), i = a.user, c = a.currency, u = Object(v.c)().quick, e = Object(fe.q)(), a = u.params, a = (t = a.quoteCurrency,
            r = a.baseCurrency,
            Object(y.useMemo)(function() {
                return {
                    action: "buy_crypto_transfer",
                    target: "click",
                    params: [{
                        value: t
                    }, {
                        value: r
                    }]
                }
            }, [t, r])), a = Object(d.d)(l.C, a), a = Object(d.x)(e, a);
            if (u.isBuySide)
                return null;
            i = i.balance.available,
            c = void 0 !== i ? m.a.createElement("span", {
                className: u.isBalanceOutLimit ? "out-limit" : ""
            }, f.a.showTruncation(i, c.baseScale)) : "--";
            return m.a.createElement("div", {
                className: q()("relative", n)
            }, m.a.createElement("span", {
                className: q()("common-quick-transfer", o)
            }, Object(O.c)("assets_available", {
                value: c
            }), m.a.createElement("span", {
                className: "common-btn",
                onClick: a
            }, Object(O.b)("transfer"))))
        }), me = !0, de = Object(n.a)(function() {
            var e, t, r, n, o, a, i, c, u = Object(v.g)().form, s = Object(v.c)(), l = s.amount, p = s.quick, b = s.roughly, f = u.valueMap, s = f.baseAmount, u = f.quoteAmount, f = b.refPrice, b = p.isBuySide, p = l.syncBase, l = l.syncQuote;
            return e = b,
            t = u,
            r = f,
            n = p,
            Object(y.useEffect)(function() {
                e && t && n(t, r)
            }, [r]),
            o = b,
            a = s,
            i = f,
            c = l,
            Object(y.useEffect)(function() {
                o || a && (me ? me = !1 : c(a, i))
            }, [i]),
            null
        }), ve = r(551), Oe = r(510), he = r(511), t = r(440);
        function ge(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function je(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function we(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? je(Object(r), !0).forEach(function(e) {
                    Pe(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }
        function Pe(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function ke(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function Ee(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ce(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var Se = "otcTickerRoughly"
          , De = (ue = w.g.shallow,
        se = w.b.bound,
        De = w.b.bound,
        _e = w.b.bound,
        le = Ce((_ = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                ke(this, "tickerMap", le, this),
                ke(this, "quotedPrices", pe, this),
                this.root = e
            }
            var e, r, n, c, o;
            return e = t,
            (r = [{
                key: "refPrice",
                get: function() {
                    var e = this.root.currency
                      , t = e.base
                      , r = e.quote
                      , e = this.quotedPrices["".concat(r, "-").concat(t)];
                    return e || +(this.tickerMap[r] || {})[t] || 0
                }
            }, {
                key: "setTicker",
                value: function(e, t, r) {
                    r = we(we({}, this.tickerMap[t]), {}, Pe({}, e, r));
                    this.tickerMap = we(we({}, this.tickerMap), {}, Pe({}, t, r))
                }
            }, {
                key: "getOtcTicker",
                value: (c = regeneratorRuntime.mark(function e(t, r, n, o) {
                    var a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (h.i.cancel(Se),
                                t && r && o) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return a = {
                                    baseCurrency: t,
                                    quoteCurrency: r,
                                    paymentMethod: o,
                                    side: Object(l.p)(n)
                                },
                                e.next = 6,
                                h.i.get(h.b.TICKER_ROUGHLY, Pe({
                                    params: a
                                }, h.h, Se));
                            case 6:
                                a = e.sent,
                                this.setTicker(t, r, a.price);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }),
                o = function() {
                    var e = this
                      , i = arguments;
                    return new Promise(function(t, r) {
                        var n = c.apply(e, i);
                        function o(e) {
                            ge(n, t, r, o, a, "next", e)
                        }
                        function a(e) {
                            ge(n, t, r, o, a, "throw", e)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function(e, t, r, n) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "setQuotedPrice",
                value: function(e) {
                    var t = this.root.currency
                      , r = t.base
                      , t = t.quote;
                    this.quotedPrices = we(we({}, this.quotedPrices), {}, Pe({}, "".concat(t, "-").concat(r), e))
                }
            }]) && Ee(e.prototype, r),
            n && Ee(e, n),
            t
        }()).prototype, "tickerMap", [ue], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        pe = Ce(_.prototype, "quotedPrices", [w.g], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        Ce(_.prototype, "refPrice", [w.d], Object.getOwnPropertyDescriptor(_.prototype, "refPrice"), _.prototype),
        Ce(_.prototype, "setTicker", [se], Object.getOwnPropertyDescriptor(_.prototype, "setTicker"), _.prototype),
        Ce(_.prototype, "getOtcTicker", [De], Object.getOwnPropertyDescriptor(_.prototype, "getOtcTicker"), _.prototype),
        Ce(_.prototype, "setQuotedPrice", [_e], Object.getOwnPropertyDescriptor(_.prototype, "setQuotedPrice"), _.prototype),
        _)
          , _e = r(552)
          , _ = r(416)
          , qe = (r(579),
        r(542))
          , Ne = Object(n.a)(function() {
            var e = Object(v.c)()
              , t = e.view
              , r = e.quick
              , e = r.tradeStatus;
            return e !== z.q.canTrade ? m.a.createElement(qe.a, {
                tradeStatus: e
            }) : m.a.createElement("p", {
                style: Object(l.q)(!t.isShowQuickConfirmDialog),
                className: "common-quick-error"
            }, r.error.message)
        });
        function Ae(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function ze(c) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise(function(t, r) {
                    var n = c.apply(e, i);
                    function o(e) {
                        Ae(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        Ae(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        var Be = Object(n.a)(function(e) {
            e = e.isViewCurrency;
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(de, null), m.a.createElement(D, null, m.a.createElement(be, null)), m.a.createElement(L, null, m.a.createElement(F, {
                isViewCurrency: e
            }), m.a.createElement(a.a, {
                className: "icon-web_link common-quick-icon"
            }), m.a.createElement(x, {
                isViewCurrency: e
            }, m.a.createElement(ye, null))), m.a.createElement(G, null))
        })
          , Ie = {
            quick: ve.a,
            amount: Oe.a,
            data: t.a,
            roughly: De,
            view: _.a,
            bonus: _e.a,
            taker: he.a,
            fundPassword: o.a
        }
          , Me = function(e) {
            var t, r, n, o, a, i, c, u, s, l, p = Object(v.c)(), b = Object(v.g)().currency, f = Object(fe.o)(e), e = (t = (e = p).data.checkPlatformValid,
            r = e.view.showUserInvalid,
            e = e.quick,
            n = e.getTradeStatus,
            o = e.setError,
            a = e.clearMatch,
            m.a.useCallback(function() {
                return !!t() && (r(),
                o(),
                a(),
                n())
            }, [t, a, n, o, r])), b = (i = p,
            b = b,
            c = Object(fe.j)({
                isBuy: !1
            }),
            u = Object(fe.k)(),
            s = b.swap,
            l = i.quick.params,
            Object(y.useCallback)(ze(regeneratorRuntime.mark(function e() {
                var t, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            i.quick.matchOrder(!0);
                        case 3:
                            if (t = e.sent,
                            s)
                                return e.next = 7,
                                i.quick.getQpPrice(l.quoteCurrency, l.baseCurrency, i.quick.selectedMatch.amount);
                            e.next = 7;
                            break;
                        case 7:
                            return e.abrupt("return", t);
                        case 10:
                            throw e.prev = 10,
                            e.t0 = e.catch(0),
                            r = e.t0.code,
                            n = e.t0.message,
                            r === h.c.NEED_KYC1 || r === h.c.NEED_KYC2 || r === h.c.NEED_KYC3 || r === h.c.NEED_KYC_OLD ? u({
                                code: r,
                                message: n,
                                quoteCurrency: i.quick.params.quoteCurrency
                            }) : r === h.c.HAS_OPEN_PAYMENTS_CANUSE || r === h.c.NO_PAYMENTS || r === h.c.NO_RECEIPT_PAYMENTS || r === h.c.NO_BIND_BANK_CARD ? c({
                                message: n
                            }) : g.a({
                                content: e.t0.message || Object(O.b)("server_error"),
                                duration: 4
                            }),
                            e.t0;
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[0, 10]])
            })), [i.quick, l.baseCurrency, l.quoteCurrency, c, u, s]));
            return Object(d.a)(e, b, f)
        }
    },
    509: function(e, t, r) {},
    510: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return b
        });
        r(13),
        r(9),
        r(19),
        r(16);
        var n, o, a, i, c = r(1), u = r(107), s = r(3);
        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function p(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var b = (t = c.b.bound,
        n = c.b.bound,
        o = c.b.bound,
        a = c.b.bound,
        i = c.b.bound,
        r = c.b.bound,
        p((c = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.root = e
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "setBase",
                value: function(e) {
                    var t = this.root.form.setValue;
                    +e > s.H || (t("baseAmount", e),
                    t("key", 0))
                }
            }, {
                key: "setQuote",
                value: function(e) {
                    var t = this.root.form.setValue;
                    +e > s.H || (t("quoteAmount", e),
                    t("key", 1))
                }
            }, {
                key: "setQuoteWithSync",
                value: function(e, t, r) {
                    +e > s.H || (this.setQuote(e),
                    this.syncBase(e, t, r))
                }
            }, {
                key: "setBaseWithSync",
                value: function(e, t, r) {
                    +e > s.H || (this.setBase(e),
                    this.syncQuote(e, t, r))
                }
            }, {
                key: "syncBase",
                value: function(e, t, r) {
                    var n = this.root
                      , o = n.form
                      , n = n.currency
                      , o = o.setValue
                      , n = void 0 !== r ? r : n.baseScale;
                    o("key", 1),
                    e ? t && o("baseAmount", +u.a.floorDiv(e, t, n, !1) || "") : o("baseAmount", "")
                }
            }, {
                key: "syncQuote",
                value: function(e, t, r) {
                    var n = this.root
                      , o = n.form
                      , n = n.currency
                      , o = o.setValue
                      , n = void 0 !== r ? r : n.quoteScale;
                    o("key", 0),
                    e ? t && o("quoteAmount", +u.a.floorMul(e, t, n, !1) || "") : o("quoteAmount", "")
                }
            }]) && l(e.prototype, r),
            n && l(e, n),
            t
        }()).prototype, "setBase", [t], Object.getOwnPropertyDescriptor(c.prototype, "setBase"), c.prototype),
        p(c.prototype, "setQuote", [n], Object.getOwnPropertyDescriptor(c.prototype, "setQuote"), c.prototype),
        p(c.prototype, "setQuoteWithSync", [o], Object.getOwnPropertyDescriptor(c.prototype, "setQuoteWithSync"), c.prototype),
        p(c.prototype, "setBaseWithSync", [a], Object.getOwnPropertyDescriptor(c.prototype, "setBaseWithSync"), c.prototype),
        p(c.prototype, "syncBase", [i], Object.getOwnPropertyDescriptor(c.prototype, "syncBase"), c.prototype),
        p(c.prototype, "syncQuote", [r], Object.getOwnPropertyDescriptor(c.prototype, "syncQuote"), c.prototype),
        c)
    },
    511: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return D
        });
        r(13),
        r(9),
        r(19),
        r(7),
        r(17),
        r(20),
        r(8),
        r(25);
        var n, o, a, i, c, u, s, l, t = r(29), p = (r(38),
        r(46),
        r(62),
        r(64),
        r(16),
        r(1)), b = r(4), f = r(3), y = r(180), m = r(6), d = r(43), v = r(188), O = r(456);
        function h(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function g(c) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise(function(t, r) {
                    var n = c.apply(e, i);
                    function o(e) {
                        h(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        h(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function j(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function w(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? j(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : j(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function P(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function k(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function E(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        var C = Object(d.c)("shareCode")
          , S = {
            creator: f.B,
            paymentMethods: f.z
        }
          , D = (n = p.g.shallow,
        t = p.g.shallow,
        o = p.b.bound,
        a = p.b.bound,
        i = p.b.bound,
        c = p.b.bound,
        u = p.b.bound,
        r = p.b.bound,
        s = E((d = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                P(this, "internalEntrust", s, this),
                P(this, "error", l, this),
                this.root = e
            }
            var e, r, n, o, a, i;
            return e = t,
            (r = [{
                key: "account",
                get: function() {
                    var e = this.entrust.quoteCurrency;
                    return this.root.user.accountMap[e] || f.B
                }
            }, {
                key: "payments",
                get: function() {
                    var t = this.root.payment.paymentMap;
                    return this.entrust.paymentMethods.map(function(e) {
                        return t[e] || {}
                    })
                }
            }, {
                key: "receiptPayment",
                get: function() {
                    return this.account.receiptPayment || f.z
                }
            }, {
                key: "selectedPayment",
                get: function() {
                    var t = this.root.form.valueMap.paymentMethod;
                    return this.payments.find(function(e) {
                        return e.payment === t
                    }) || this.payments[0] || f.B
                }
            }, {
                key: "selectedPaymentMethod",
                get: function() {
                    return this.selectedPayment.payment || ""
                }
            }, {
                key: "selectedJoinPayment",
                get: function() {
                    if (this.isOpenPayment)
                        return this.selectedPayment;
                    var t = this.receiptPayment;
                    return this.payments.find(function(e) {
                        return t.includes(e.payment)
                    }) || f.B
                }
            }, {
                key: "selectedJoinPaymentMethod",
                get: function() {
                    return this.selectedJoinPayment.payment || ""
                }
            }, {
                key: "entrust",
                get: function() {
                    if (!this.internalEntrust.publicId)
                        return S;
                    var e = this.internalEntrust
                      , t = this.root.currency.pairs
                      , r = e.quoteCurrency.toUpperCase()
                      , n = e.baseCurrency.toUpperCase()
                      , t = t.find(function(e) {
                        return e.quoteCurrency === r && e.baseCurrency === n
                    }) || {};
                    return w(w({}, e), {}, {
                        isBuySide: e.side === f.o.sell,
                        baseUpper: e.baseCurrency.toUpperCase(),
                        quoteUpper: r,
                        quoteSymbol: t.quoteSymbol,
                        baseCurrencyId: t.baseCurrencyId
                    })
                }
            }, {
                key: "fromArea",
                get: function() {
                    return "block" === this.root.nav.curParams.userType ? "blockTrade" : null
                }
            }, {
                key: "submitForm",
                get: function() {
                    var e = this.root
                      , t = e.form
                      , r = e.nav
                      , e = t.valueMap
                      , t = "normal";
                    return "ads-merchant" === r.cate && (t = "mpage"),
                    {
                        baseAmount: e.baseAmount,
                        from: t = C ? "tOShare" : t,
                        key: e.key,
                        publicTradingOrderId: this.entrust.publicId,
                        totalMoney: e.quoteAmount,
                        payment: this.selectedPaymentMethod,
                        fromArea: this.fromArea,
                        tradePassword: this.root.business.fundPassword.password
                    }
                }
            }, {
                key: "balance",
                get: function() {
                    var e = this.root.user
                      , t = this.entrust.baseCurrency
                      , t = e.balanceMap[t] || f.B;
                    return w(w({}, t), {}, {
                        realAvailable: t.realAvailable || 0
                    })
                }
            }, {
                key: "isBuySide",
                get: function() {
                    return this.entrust.isBuySide
                }
            }, {
                key: "isOpenPayment",
                get: function() {
                    return !!this.entrust.isBuySide || this.receiptPayment.includes(this.selectedPaymentMethod)
                }
            }, {
                key: "setPaymentMethod",
                value: function(e) {
                    this.root.form.setValue("paymentMethod", e)
                }
            }, {
                key: "setError",
                value: function() {
                    this.error = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}) || {}
                }
            }, {
                key: "setEntrust",
                value: function(e) {
                    this.internalEntrust = e || {};
                    var t = this.root.form
                      , r = t.store
                      , t = t.popStore;
                    (e ? r : t)()
                }
            }, {
                key: "getEntrust",
                value: (i = g(regeneratorRuntime.mark(function e(t) {
                    var r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this.setError(),
                                r = {
                                    fromArea: this.fromArea
                                },
                                e.next = 4,
                                m.i.get(m.b.TRADING_DETAIL(t), {
                                    params: r
                                });
                            case 4:
                                r = e.sent,
                                this.setEntrust(r);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function(e) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "check",
                value: (a = g(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                this.setError(),
                                this.root.business.fundPassword.toggleTakerFoudPwdVisible(!1),
                                e.next = 5,
                                m.i.post(m.b.ORDER_CHECK, this.submitForm, {
                                    alertError: !1
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 8:
                                if (e.prev = 8,
                                e.t0 = e.catch(0),
                                e.t0.code === m.c.NEED_CAPITAL_PASSWORD)
                                    return this.root.business.fundPassword.toggleTakerFoudPwdVisible(!0),
                                    e.abrupt("return", !0);
                                e.next = 13;
                                break;
                            case 13:
                                throw e.t0.code === m.c.NEED_RISK_CONTROL && this.startRiskControl(),
                                this.setError(w(w({}, e.t0), {}, {
                                    message: e.t0.message || Object(b.b)("server_error")
                                })),
                                e.t0;
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[0, 8]])
                })),
                function() {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "createOrder",
                value: (o = g(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                this.setError(),
                                t = w(w({}, this.submitForm), {}, {
                                    payment: this.selectedJoinPaymentMethod
                                }),
                                e.next = 5,
                                m.i.post(m.b.ORDER_NEW, w(w({}, t), {}, {
                                    from: Object(y.b)("Q")
                                }), {
                                    alertError: !1
                                });
                            case 5:
                                return t = e.sent,
                                e.abrupt("return", t);
                            case 9:
                                throw e.prev = 9,
                                e.t0 = e.catch(0),
                                e.t0.code === m.c.NEED_RISK_CONTROL ? this.startRiskControl() : e.t0.code === m.c.NEED_FORBID_AREA && Object(O.a)(e.t0.message),
                                this.setError(w(w({}, e.t0), {}, {
                                    message: e.t0.message || Object(b.b)("server_error")
                                })),
                                e.t0;
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[0, 9]])
                })),
                function() {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "startRiskControl",
                value: function() {
                    v.a.init({
                        list: [{
                            name: "riskControl",
                            props: {
                                onFinish: function() {},
                                onCancel: function() {}
                            }
                        }],
                        needContainer: !1
                    })
                }
            }]) && k(e.prototype, r),
            n && k(e, n),
            t
        }()).prototype, "internalEntrust", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        l = E(d.prototype, "error", [t], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        E(d.prototype, "account", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "account"), d.prototype),
        E(d.prototype, "payments", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "payments"), d.prototype),
        E(d.prototype, "receiptPayment", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "receiptPayment"), d.prototype),
        E(d.prototype, "selectedPayment", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "selectedPayment"), d.prototype),
        E(d.prototype, "selectedPaymentMethod", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "selectedPaymentMethod"), d.prototype),
        E(d.prototype, "selectedJoinPayment", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "selectedJoinPayment"), d.prototype),
        E(d.prototype, "selectedJoinPaymentMethod", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "selectedJoinPaymentMethod"), d.prototype),
        E(d.prototype, "entrust", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "entrust"), d.prototype),
        E(d.prototype, "fromArea", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "fromArea"), d.prototype),
        E(d.prototype, "submitForm", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "submitForm"), d.prototype),
        E(d.prototype, "balance", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "balance"), d.prototype),
        E(d.prototype, "isBuySide", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "isBuySide"), d.prototype),
        E(d.prototype, "isOpenPayment", [p.d], Object.getOwnPropertyDescriptor(d.prototype, "isOpenPayment"), d.prototype),
        E(d.prototype, "setPaymentMethod", [o], Object.getOwnPropertyDescriptor(d.prototype, "setPaymentMethod"), d.prototype),
        E(d.prototype, "setError", [a], Object.getOwnPropertyDescriptor(d.prototype, "setError"), d.prototype),
        E(d.prototype, "setEntrust", [i], Object.getOwnPropertyDescriptor(d.prototype, "setEntrust"), d.prototype),
        E(d.prototype, "getEntrust", [c], Object.getOwnPropertyDescriptor(d.prototype, "getEntrust"), d.prototype),
        E(d.prototype, "check", [u], Object.getOwnPropertyDescriptor(d.prototype, "check"), d.prototype),
        E(d.prototype, "createOrder", [r], Object.getOwnPropertyDescriptor(d.prototype, "createOrder"), d.prototype),
        d)
    },
    512: function(e, t, r) {},
    513: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return c
        }),
        r.d(t, "a", function() {
            return u
        });
        var t = r(9)
          , t = r(7)
          , t = r(17)
          , t = r(16)
          , t = r(13)
          , t = r(20)
          , n = r(26)
          , o = r(32);
        function a(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function i(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        var c = function() {
            return Object(o.d)(["buy"])
        }
          , u = function(e) {
            Object(n.C)(i({
                area: "buy",
                target: "click"
            }, e))
        }
    },
    542: function(e, t, r) {
        "use strict";
        r(62),
        r(64);
        var o = r(0)
          , a = r.n(o)
          , n = r(24)
          , i = r(3)
          , c = r(32)
          , u = (r(36),
        r(4))
          , s = r(43);
        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function p() {
            var e = a.a.createElement("a", l({}, i.w, {
                href: s.d.kyc(),
                className: "invalid-btn"
            }), Object(u.b)("invalid_kyc_btn"));
            return a.a.createElement("div", {
                className: "common-user-invalid"
            }, Object(u.c)("invalid_kyc", {
                value: e
            }))
        }
        function b() {
            var e, t, r = Object(c.g)().currency, n = Object(y.g)("fiat"), r = (e = r.quote,
            t = r.base,
            Object(o.useMemo)(function() {
                return {
                    action: "buy_crypto_go_p2p",
                    target: "click",
                    params: [{
                        value: e
                    }, {
                        value: t
                    }]
                }
            }, [e, t])), r = Object(y.d)(m.C, r), r = Object(y.x)(n, r), r = a.a.createElement("span", {
                onClick: r,
                className: "invalid-btn"
            }, Object(u.b)("invalid_match_btn"));
            return a.a.createElement("div", {
                className: "common-user-invalid"
            }, Object(u.c)("invalid_match", {
                value: r
            }))
        }
        function f() {
            return a.a.createElement("div", {
                className: "common-user-invalid"
            })
        }
        var y = r(23)
          , m = r(26)
          , d = (r(512),
        [i.q.kyc1Limit, i.q.kyc1TotalLimit, i.q.kyc2Limit])
          , v = [i.q.noMatch];
        t.a = Object(n.a)(function(e) {
            e = e.tradeStatus;
            return Object(c.c)().view.isShowUserInvalid ? d.includes(e) ? a.a.createElement(p, null) : v.includes(e) ? a.a.createElement(b, null) : a.a.createElement(f, null) : a.a.createElement(f, null)
        })
    },
    552: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return k
        });
        r(13),
        r(9),
        r(7),
        r(17),
        r(20);
        var n, o, a, i, c, u, s, l, p, t = r(8), t = (r(25),
        r(29),
        r(19),
        r(40),
        r(83),
        r(238)), b = (r(70),
        r(16),
        r(6)), f = r(101), y = r(1), m = r(3);
        function d(e, t, r, n, o, a, i) {
            try {
                var c = e[a](i)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function v(c) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise(function(t, r) {
                    var n = c.apply(e, i);
                    function o(e) {
                        d(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        d(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function O(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function h(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? O(Object(o), !0).forEach(function(e) {
                    var t, r;
                    t = n,
                    e = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : O(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }
        function g(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function j(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function w(r, n, e, t, o) {
            var a = {};
            return Object.keys(t).forEach(function(e) {
                a[e] = t[e]
            }),
            a.enumerable = !!a.enumerable,
            a.configurable = !!a.configurable,
            ("value"in a || a.initializer) && (a.writable = !0),
            a = e.slice().reverse().reduce(function(e, t) {
                return t(r, n, e) || e
            }, a),
            o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0,
            a.initializer = void 0),
            void 0 === a.initializer && (Object.defineProperty(r, n, a),
            a = null),
            a
        }
        function P(e) {
            var t = Math.max(String(parseInt(e, 10)).length - 3, 0)
              , t = Math.pow(10, t)
              , e = e / t
              , e = Math.ceil(e);
            return parseInt(e * t, 10)
        }
        var k = (n = y.g.shallow,
        o = y.g.shallow,
        a = y.g.shallow,
        t = y.g.shallow,
        i = y.b.bound,
        c = y.b.bound,
        u = w((r = function() {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                g(this, "c2cBonusConfig", u, this),
                g(this, "b2cBonusConfig", s, this),
                g(this, "reward", l, this),
                g(this, "amountData", p, this),
                this.root = e
            }
            var e, r, n, o, a;
            return e = t,
            (r = [{
                key: "bonusConfig",
                get: function() {
                    return h(h({}, this.c2cBonusConfig), this.b2cBonusConfig)
                }
            }, {
                key: "curBonusConfig",
                get: function() {
                    var e = this.root.currency.quoteLower
                      , e = this.bonusConfig[e] || {}
                      , e = (e.condition ? e.condition.slice(1, -1) : "").split(",");
                    return {
                        min: P(e[0]) || 0,
                        max: P(e[1]) || Number.MAX_SAFE_INTEGER
                    }
                }
            }, {
                key: "curBonusReward",
                get: function() {
                    var e = this.root.currency.quoteLower;
                    return (this.bonusConfig[e] || {}).reward || ""
                }
            }, {
                key: "enableBonusActivity",
                get: function() {
                    var e = this.root.user;
                    return !m.F || e.account.enableBonusActivity
                }
            }, {
                key: "getBonusConfig",
                value: (a = v(regeneratorRuntime.mark(function e() {
                    var t, r = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                b.i.get(f.a.BONUS_CONFIG);
                            case 2:
                                t = e.sent,
                                Object(y.i)(function() {
                                    r.c2cBonusConfig = t.c2cBonusConfig,
                                    r.b2cBonusConfig = t.b2cBonusConfig
                                });
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function() {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "getSendAmount",
                value: (o = v(regeneratorRuntime.mark(function e(t) {
                    var r, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.enableBonusActivity) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                b.i.get(f.a.SEND_AMOUNT, {
                                    params: t
                                });
                            case 4:
                                r = e.sent,
                                Object(y.i)(function() {
                                    n.reward = r
                                });
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                })),
                function(e) {
                    return o.apply(this, arguments)
                }
                )
            }]) && j(e.prototype, r),
            n && j(e, n),
            t
        }()).prototype, "c2cBonusConfig", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        s = w(r.prototype, "b2cBonusConfig", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        l = w(r.prototype, "reward", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        p = w(r.prototype, "amountData", [t], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return {}
            }
        }),
        w(r.prototype, "bonusConfig", [y.d], Object.getOwnPropertyDescriptor(r.prototype, "bonusConfig"), r.prototype),
        w(r.prototype, "curBonusConfig", [y.d], Object.getOwnPropertyDescriptor(r.prototype, "curBonusConfig"), r.prototype),
        w(r.prototype, "curBonusReward", [y.d], Object.getOwnPropertyDescriptor(r.prototype, "curBonusReward"), r.prototype),
        w(r.prototype, "enableBonusActivity", [y.d], Object.getOwnPropertyDescriptor(r.prototype, "enableBonusActivity"), r.prototype),
        w(r.prototype, "getBonusConfig", [i], Object.getOwnPropertyDescriptor(r.prototype, "getBonusConfig"), r.prototype),
        w(r.prototype, "getSendAmount", [c], Object.getOwnPropertyDescriptor(r.prototype, "getSendAmount"), r.prototype),
        r)
    },
    578: function(e, t, r) {},
    579: function(e, t, r) {},
    774: function(e, t, r) {}
  }]);
  