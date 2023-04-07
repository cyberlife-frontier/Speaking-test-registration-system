!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    "use strict";
    function i(e, t) {
        t || (t = window.location.href),
        e = e.replace(/[[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)")
          , i = n.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    function r(e) {
        var t;
        return function(e) {
            if (!e)
                return e;
            for (; e != unescape(e); )
                e = unescape(e);
            for (var t = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], i = 0; i < t.length; i++)
                e = e.replace(new RegExp(t[i],"gi"), n[i]);
            return e
        }((t = document.cookie.match(RegExp("(^|;\\s*)" + e + "=([^;]*)(;|$)"))) ? unescape(t[2]) : "")
    }
    var a = this && this.__awaiter || function(e, t, n, i) {
        function r(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            }
            )
        }
        return new (n || (n = Promise))(function(n, a) {
            function o(e) {
                try {
                    c(i.next(e))
                } catch (t) {
                    a(t)
                }
            }
            function s(e) {
                try {
                    c(i["throw"](e))
                } catch (t) {
                    a(t)
                }
            }
            function c(e) {
                e.done ? n(e.value) : r(e.value).then(o, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        )
    }
      , o = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return i([e, t])
            }
        }
        function i(n) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; c; )
                try {
                    if (r = 1,
                    a && (o = 2 & n[0] ? a["return"] : n[0] ? a["throw"] || ((o = a["return"]) && o.call(a),
                    0) : a.next) && !(o = o.call(a, n[1])).done)
                        return o;
                    switch (a = 0,
                    o && (n = [2 & n[0], o.value]),
                    n[0]) {
                    case 0:
                    case 1:
                        o = n;
                        break;
                    case 4:
                        return c.label++,
                        {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        c.label++,
                        a = n[1],
                        n = [0];
                        continue;
                    case 7:
                        n = c.ops.pop(),
                        c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys,
                        !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                            c.label = n[1];
                            break
                        }
                        if (6 === n[0] && c.label < o[1]) {
                            c.label = o[1],
                            o = n;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2],
                            c.ops.push(n);
                            break
                        }
                        o[2] && c.ops.pop(),
                        c.trys.pop();
                        continue
                    }
                    n = t.call(e, c)
                } catch (i) {
                    n = [6, i],
                    a = 0
                } finally {
                    r = o = 0
                }
            if (5 & n[0])
                throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var r, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }
        ),
        s
    }
    ;
    t.__esModule = !0;
    var s = n(1)
      , c = n(2)
      , u = window.aegis
      , l = n(3);
    Object.keys || c(".upgrade-tips").show(),
    s.bindingHandlers.hasHover = {
        init: function(e, t) {
            var n = function(e) {
                t()(e)
            };
            s.utils.registerEventHandler(e, "mouseover", n.bind(null, !0)),
            s.utils.registerEventHandler(e, "mouseout", n.bind(null, !1))
        }
    },
    n(4),
    n(5).polyfill();
    var p = n(7)
      , f = n(8)
      , d = n(9)
      , h = n(10)
      , m = n(11)
      , g = n(12);
    g.country_list = m,
    h.country_list = d,
    f.country_list = p,
    window.monitor = function(e, t, n) {
        var i = "/cgi-bin/common/attr?id=" + encodeURIComponent(e) + "&r=" + Math.random()
          , r = document.createElement("img")
          , a = !1
          , o = function() {
            a || (a = !0,
            t())
        };
        "function" == typeof t && (n || (n = 100),
        r.onload = o,
        r.onerror = o,
        setTimeout(o, n)),
        r.src = i
    }
    ,
    c(function() {
        !function(e) {
            var t, n, i = e.charAt(0).toUpperCase() + e.slice(1), r = ["Moz", "Webkit", "O", "ms"], a = document.createElement("div");
            if (e in a.style)
                n = e;
            else
                for (var o = 0; o < r.length; o++)
                    if ((t = r[o] + i)in a.style) {
                        n = t;
                        break
                    }
            return a = null,
            n
        }("borderRadius") && navigator.userAgent.match(/msie/i)
    });
    var y = function() {
        function e() {
            var e = this;
            this.lang = function() {
                switch (window.lang) {
                case 2052:
                case 1033:
                case 1028:
                    return s.observable(window.lang);
                default:
                    var e = navigator.language;
                    return e || (e = navigator.browserLanguage),
                    /zh-tw|zh-hk/i.test(e) ? s.observable(1028) : /en-/.test(e) ? s.observable(1033) : s.observable(2052)
                }
            }(),
            this.reg_type = function() {
                var e = parseInt(i("type"));
                switch (e) {
                case 0:
                case 1:
                case 2:
                    return s.observable(e);
                default:
                    return s.observable(0)
                }
            }(),
            this.chs = g,
            this.cht = c.extend({}, g, h),
            this.en = c.extend({}, g, f),
            this.str = function() {
                switch (e.lang()) {
                case 1033:
                    return s.observable(e.en);
                case 1028:
                    return s.observable(e.cht);
                case 2052:
                default:
                    return s.observable(e.chs)
                }
            }(),
            this.error = s.observable(0),
            this.errorMsg = s.computed(function() {
                switch (e.error()) {
                case 9999:
                    return e.str().frq_error;
                case 9997:
                    return "你肿么现在才来，今天的靓号早被抢光了，明天要早点来啊！";
                case 8:
                    return e.str().mail_binded;
                case 10:
                    return e.str().mail_duplicate;
                case 11:
                    return e.str().mail_expire;
                case 21:
                case 9996:
                    return e.str().evil_error;
                case 9998:
                default:
                    return e.str().system_busy
                }
            }),
            this.succ = s.observable(!1),
            this.active = s.observable(!1),
            this.qq = s.observable(""),
            this.country_list = s.observableArray(this.str().country_list),
            this.mail_list = s.observableArray(["@foxmail.com", "@qq.com"]),
            this.nickname = s.observable(""),
            this.nicknameStatus = s.observable(0),
            this.nicknameTips = s.computed(function() {
                if ("string" == typeof e.nicknameStatus())
                    return e.nicknameStatus();
                switch (e.nicknameStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().nick_plz_input
                }
            }),
            this.password = s.observable(""),
            this.encryptedPassword = s.computed(function() {
                var t = e.password();
                if ("" === t)
                    return "";
                var n;
                try {
                    var i = new l;
                    i.setPublic("C4D23C2DB0ECC904FE0CD0CBBCDC988C039D79E1BDA8ED4BFD4D43754EC9693460D15271AB43A59AD6D0F0EEE95424F70920F2C4A08DFDF03661300047CA3A6212E48204C1BE71A846E08DD2D9F1CBDDFF40CA00C10C62B1DD42486C70A09C454293BCA9ED4E7D6657E3F62076A14304943252A88EFA416770E0FBA270A141E7", "10001"),
                    n = i.encrypt(t)
                } catch (r) {
                    u.infoAll("password RSA fail | " + r.message),
                    u.report(r)
                }
                return n !== undefined && "" !== n || u.infoAll("password RSA empty | origin:" + t),
                n
            }),
            this.passwordFocus = s.observable(!1),
            this.passwordStatus = s.observable(0),
            this.passwordTips = s.computed(function() {
                if (e.passwordFocus())
                    return "";
                if ("string" == typeof e.passwordStatus())
                    return e.passwordStatus();
                switch (e.passwordStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().password_input
                }
            }),
            this.show_password = s.observable(!1),
            this.passwordHasBlank = s.pureComputed(function() {
                return / /.test(e.password())
            }),
            this.passwordBadLength = s.pureComputed(function() {
                return !/^.{8,16}$/.test(e.password())
            }),
            this.passwordSimple = s.pureComputed(function() {
                return (e.password().match(/\d/) ? 1 : 0) + (e.password().match(/[a-z]/i) ? 1 : 0) + (e.password().match(/[^\da-zA-Z\s]/) ? 1 : 0) < 2
            }),
            this.phoneFocus = s.observable(!1),
            this.phoneStatus = s.observable(0),
            this.phoneTips = s.computed(function() {
                if ("string" == typeof e.phoneStatus())
                    return e.phoneStatus();
                switch (e.phoneStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().phone_null
                }
            }),
            this._phone = s.observable(""),
            this.phone = s.computed({
                read: function() {
                    return e._phone()
                },
                write: function(t) {
                    e._phone(t)
                }
            }),
            this.maskPhone = s.computed(function() {
                var t = e._phone() || ""
                  , n = t.length
                  , i = "";
                if (n > 5)
                    for (var r = 0; r < n - 3 - 2; r++)
                        i += "*";
                var a = new RegExp("(\\d{3})\\d*(\\d{2})");
                return t.replace(a, "$1" + i + "$2")
            }),
            this.code = s.observable(""),
            this._country = s.observable("+" + this.str().country_list[0].c),
            this.country = s.computed({
                read: function() {
                    return e._country()
                },
                write: function(t) {
                    e._country(t);
                    var n = new RegExp(t.replace(/[^a-z0-9]/i, "").split("").join(".{0,}"),"i");
                    e.country_list(c(e.str().country_list).filter(function(e, t) {
                        return !!(n.test(t.c) || n.test(t.p) || n.test(t.n))
                    }).toArray())
                }
            }),
            this.phoneSubmit = s.computed(function() {
                return 0 === e.phone().length ? "" : e.country().replace("+", "00") + e.phone()
            }),
            this.qzone = s.observable(!0),
            this.agree = s.observable(!1),
            this.bind_result = s.observable(-1),
            this.phone_tips = s.computed(function() {
                if (0 !== e.bind_result())
                    return "";
                var t = e.phone();
                return "+86" != e.country() && (t = "00" + e.country().replace("+", "") + e.phone()),
                e.str().phone_tips_succ.replace("{phone}", t)
            }),
            this.send_sms = s.observable(this.str().send_sms),
            this.mail = s.observable(""),
            this.othermail_tips = s.computed(function() {
                return e.str().mail_tips_succ.replace("{mail}", e.mail())
            }),
            this._qqmail = s.observable(this.mail_list()[1]),
            this.qqmail = s.computed({
                read: function() {
                    return e._qqmail()
                },
                write: function(t) {
                    e._qqmail(t),
                    e.checkMail(null, !0)
                }
            }),
            this.qqmail_tips = s.computed(function() {
                return e.str().qqmail_tips_succ.replace("{mail}", e.mail() + e.qqmail())
            }),
            this.mailStatus = s.observable(0),
            this.mailTips = s.computed(function() {
                if ("string" == typeof e.mailStatus())
                    return e.mailStatus();
                switch (e.mailStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().mail_plz_input
                }
            }),
            this.mail_has_send = s.computed(function() {
                return e.str().mail_has_send.replace("{mail}", e.mail())
            }),
            this.mail_has_resend = s.computed(function() {
                return e.str().mail_has_resend.replace("{mail}", e.mail())
            }),
            this.isSelectingCountry = s.observable(!1),
            this.lianghaoKey = s.observable(""),
            this.lianghaoFocus = s.observable(!1),
            this.lianghaoEntryHovered = s.observable(!1),
            this.lianghaoDetailHovered = s.observable(!1),
            this.lianghaoOpened = s.computed(function() {
                return e.lianghaoEntryHovered() || e.lianghaoDetailHovered() || e.lianghaoFocus()
            }),
            this.langOpened = s.observable(!1),
            this.side = ["img/01-1.jpg", "img/01-3.jpg", "img/01-4.jpg"],
            this.currentSide = s.observable(0),
            this.currentSideUrl = s.computed(function() {
                return "url(https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/" + e.side[e.currentSide()] + ")"
            }),
            this.up_sms_port = s.observable("10690700511"),
            this.up_sms_port_string = s.computed(function() {
                return e.up_sms_port().match(/\d{1,4}/g).join(" ")
            }),
            this.up_error_msg = s.observable(this.str().up_sms_failed),
            this._is_up_sms = s.observable(!1),
            this.is_up_sms = s.computed({
                read: function() {
                    return e._is_up_sms()
                },
                write: function(t) {
                    !e._is_up_sms() && t && (e.up_error_msg(""),
                    e.up_error_count(0),
                    e.up_port_updated(!1)),
                    e._is_up_sms(t),
                    window.scrollTo(0, 0)
                }
            }),
            this.up_port_updated = s.observable(!1),
            this.up_error_count = s.observable(0),
            this.is_mobile_qq_register = s.observable(!1),
            this.mobile_qq_tips = s.computed(function() {
                return e.str().mobile_qq_register_tips.replace("{phone}", e.phone())
            }),
            this.isSelectingMail = s.observable(!1),
            this.blackPhone = [],
            this.sendSMSHover = s.observable(!1),
            this._friends = s.observableArray([]),
            this.friends = s.computed({
                read: function() {
                    return e._friends()
                },
                write: function(t) {
                    for (var n in t)
                        e.loadAvatar(t[n].qq);
                    e._friends(t)
                }
            }),
            this.getNumTips = s.observable(""),
            this.codeTips = s.observable(""),
            this.includeNum = ["168", "560", "1314", "200", "230", "300", "510", "521", "530", "609", "6699", "920", "930"],
            this.includeMean = ["一路发", "我念你", "一生一世", "爱你哦", "爱死你", "想你哦", "我依你", "我愿意", "我想你", "到永久", "顺顺利利", "就爱你", "好想你"],
            this.lianghao_list = s.observableArray([]),
            this.lianghao = s.observable(""),
            this.lianghao_html = s.computed(function() {
                for (var t = e.lianghao(), n = 0, i = e.includeNum; n < i.length; n++) {
                    var r = i[n];
                    if (t.indexOf(r) >= 0) {
                        return t.replace(r, "<span class='linght-num'>" + r + "</span>")
                    }
                }
                for (var a = 0; a < e.lianghao_list().length; ++a)
                    if (e.lianghao_list()[a][0] == e.lianghao())
                        switch (e.lianghao_list()[a][1]) {
                        case 3:
                            for (var o = 0; o < e.includeNum.length; ++o)
                                if (e.lianghao().indexOf(e.includeNum[o]) >= 0)
                                    return t.replace(e.includeNum[o], "<span class='linght-num'>" + e.includeNum[o] + "</span>");
                            return "";
                        case 4:
                        case 5:
                            var s = e.lianghao_list()[a][1] - 2;
                            return "<span class='linght-num'>" + t.substring(0, s) + "</span>" + t.substr(s, t.length - 2 * s) + "<span class='linght-num'>" + t.substring(-s, s) + "</span>"
                        }
                return t
            }),
            this.lianghao_mean = s.computed(function() {
                for (var t = 0; t < e.lianghao_list().length; ++t)
                    if (e.lianghao_list()[t][0] == e.lianghao())
                        switch (e.lianghao_list()[t][1]) {
                        case 2:
                            return "（9位靓号）";
                        case 3:
                            for (var n = 0; n < e.includeNum.length; ++n)
                                if (e.lianghao().indexOf(e.includeNum[n]) >= 0)
                                    return "（寓意：" + e.includeMean[n] + "）";
                            return "";
                        case 4:
                        case 5:
                            return "（寓意：首尾呼应）";
                        case 1:
                        default:
                            return ""
                        }
                return ""
            }),
            this._is_verify = s.observable(!1),
            this.is_verify = s.computed({
                read: function() {
                    return e._is_verify()
                },
                write: function(t) {
                    if (e._is_verify(t),
                    t)
                        if (window.scrollTo(0, 0),
                        window.capInit)
                            window.capRefresh();
                        else {
                            var n = ("https:" == location.protocol ? "https://ssl.captcha.qq.com" : "http://captcha.qq.com") + "/template/TCapIframeApi.js?aid=1600000592&clientype=2&lang=" + e.lang() + "&captype=" + e.capt_type() + "&disturblevel=" + e.capt_level();
                            c.getScript(n, function() {
                                window.capInit(c("#verify-content")[0], {
                                    type: "embed",
                                    callback: function(t) {
                                        if (0 != t.ret)
                                            return void window.capRefresh();
                                        switch (e.verify_type()) {
                                        case 0:
                                            e.onLianghaoVerifyOK(t);
                                            break;
                                        case 1:
                                            e.onEmailVerifyOK(t);
                                            break;
                                        case 2:
                                            e.onSMSVerifyOK(t);
                                            break;
                                        case 3:
                                            e.onGetNumVerifyOK(t)
                                        }
                                    }
                                })
                            })
                        }
                }
            }),
            this._elevel = s.observable(0),
            this.elevel = s.computed({
                read: function() {
                    return e._elevel()
                },
                write: function(t) {
                    switch (e._elevel(t),
                    t % 10) {
                    case 6:
                        e.error(9996)
                    }
                }
            }),
            this.capt_type = s.pureComputed(function() {
                return Math.floor(e.elevel() / 10)
            }),
            this.capt_level = s.pureComputed(function() {
                return e.elevel() % 10
            }),
            this.verify_type = s.observable(3),
            this.can_close_verify = s.computed(function() {
                return 1 != e.verify_type()
            }),
            this.knownEmail = {
                "sina.com": "http://mail.sina.com",
                "163.com": "http://mail.163.com",
                "126.com": "http://mail.126.com",
                "vip.sina.com": "http://vip.sina.com.cn/",
                "sina.cn": "http://mail.sina.com.cn/cnmail/",
                "hotmail.com": "http://www.hotmail.com",
                "gmail.com": "http://mail.google.com",
                "sohu.com": "http://mail.sohu.com",
                "yahoo.cn": "http://mail.cn.yahoo.com/",
                "yahoo.com.cn": "http://mail.cn.yahoo.com/",
                "yahoo.com": "https://login.yahoo.com/",
                "139.com": "http://mail.10086.cn/",
                "wo.com.cn": "http://mail.wo.com.cn/",
                "189.cn": "http://www.189.cn/webmail/",
                "yahoo.com.tw": "http://mail.yahoo.com.tw/",
                "yahoo.com.hk": "http://mail.yahoo.com.hk/",
                "yeah.net": "http://www.yeah.net",
                "hotmail.com.hk": "http://hotmail.com.hk/",
                "hotmail.com.tw": "http://hotmail.com.tw/",
                "live.com": "http://live.com",
                "live.cn": "http://live.cn",
                "live.hk": "http://live.hk"
            },
            this.IsKnownEmail = s.computed(function() {
                var t = e.mail()
                  , n = t.substr(t.lastIndexOf("@") + 1);
                return !!e.knownEmail.hasOwnProperty(n)
            }),
            this.agreementOpened = s.observable(!1);
            var t = this;
            t.sideTimer || (t.sideTimer = 0,
            t.startSide());
            var n = function() {
                var e = c(".side")
                  , n = c(window)
                  , i = c(".main")
                  , r = c(".main-wraper")
                  , a = c(".footer");
                n.width() > 1200 ? (e.show(),
                r.css({
                    margin: ""
                }),
                e.css({
                    width: ""
                })) : n.width() > 1e3 ? (e.show(),
                e.css({
                    width: "240px"
                }),
                r.css({
                    margin: "0 0 0 240px"
                })) : (e.hide(),
                r.css({
                    margin: 0
                }));
                var o = a.hasClass(".bottom") ? 0 : a.outerHeight(!0);
                i.outerHeight(!0) + i.offset().top + o < n.height() ? (a.addClass("bottom"),
                a.width(i.width())) : (a.removeClass("bottom"),
                a.width("")),
                t.resizeContent()
            };
            c(n),
            c(window).resize(n),
            c(document.body).on("keydown", function(t) {
                if (e.isSelectingCountry()) {
                    var n;
                    switch (t.which) {
                    case 38:
                        n = -1;
                        break;
                    case 40:
                        n = 1;
                        break;
                    case 13:
                        n = 0;
                        break;
                    default:
                        return
                    }
                    var i, r = c(".country li.focus");
                    if (0 === r.length)
                        i = c(".country li:first");
                    else {
                        var a = c(".country li")
                          , o = a.index(r)
                          , s = o + n;
                        s <= 0 ? s = 0 : s >= a.length && (s = a.length - 1),
                        r.removeClass("focus"),
                        i = c(a[s])
                    }
                    if (0 === n)
                        return e.setCountry(parseInt(i.text().replace(/[^\d]/g, ""))),
                        !1;
                    i.addClass("focus");
                    var u = c(".country")
                      , l = c(".country li:first")
                      , p = i.offset().top - l.offset().top
                      , f = p + i.height()
                      , d = u.scrollTop();
                    return f > d + u.height() ? u.scrollTop(p - u.height() + i.height()) : p < d && u.scrollTop(p),
                    !1
                }
            }),
            c.ajax({
                url: "/cgi-bin/common/getUpPort?r=" + Math.random()
            }).done(function(e) {
                0 == e.ec && t.up_sms_port(e.upport)
            }),
            c(document.body).on("click", function(t) {
                return 0 === c(t.target).parents("input.nation, ul.options.country").length && -1 === c("input.nation, ul.options.country").index(t.target) && e.endSelectCountry(),
                0 === c(t.target).parents(".input-outer.qqmail-outer").length && -1 === c(".input-outer.qqmail-outer").index(t.target) && e.isSelectingMail(!1),
                !0
            });
            var a = i("ADTAG") || ""
              , o = i("regkey") || ""
              , p = new Date;
            p.setTime(p.getTime() + 2628e3),
            document.cookie = "ADTAG=" + a + "; expires=" + p.toUTCString() + "; domain=.zc.qq.com; path=/",
            document.cookie = "regkey=" + o + "; expires=" + p.toUTCString() + "; domain=.zc.qq.com; path=/";
            var d = i("email")
              , m = i("uin")
              , y = i("key2")
              , v = i("ec");
            if (v)
                return void this.error(parseInt(v));
            if (d && m && y) {
                this.qq(m),
                this.mail(d),
                this.succ(!0),
                this.reg_type(2),
                this.friends([]);
                for (var b = 0, w = [1, 2, 3]; b < w.length; b++) {
                    var _ = w[b]
                      , x = r("fuin" + _)
                      , T = r("nick" + _);
                    x && T && this.friends().push({
                        qq: x,
                        nickname: T,
                        status: 0,
                        tips: "",
                        icon: ""
                    })
                }
                return void this.friends(this.friends())
            }
            this.initSession()
        }
        return e.prototype.openBeginPage = function(e, t) {
            var n;
            switch (e) {
            case 1033:
                n = "en";
                break;
            case 1028:
                n = "cht";
                break;
            case 2052:
            default:
                n = "chs"
            }
            location.href = "/v3/index-" + n + ".html?" + c.param({
                type: t
            })
        }
        ,
        e.prototype.switchLanguage = function(e) {
            if (0 != this.lang() && e != this.lang())
                return void (2052 != e && 3 == this.reg_type() ? this.openBeginPage(e, 0) : this.openBeginPage(e, this.reg_type()));
            switch (e) {
            case 1028:
                this.lang(1028),
                this.str(this.cht);
                break;
            case 1033:
                this.lang(1033),
                this.str(this.en);
                break;
            default:
                this.lang(2052),
                this.str(this.chs)
            }
            this.isChs() || 3 != this.reg_type() || this.reg_type(0),
            this.initSession()
        }
        ,
        e.prototype.getInitCallbackErrorMessage = function(e) {
            switch (parseInt(e.ec)) {
            case 0:
                return null;
            case 6:
                return 9996;
            default:
                return 9998
            }
        }
        ,
        e.prototype.handleToObserveDataElevel = function(e) {
            (null === e || void 0 === e ? void 0 : e.elevel) && this.elevel(parseInt(e.elevel))
        }
        ,
        e.prototype.initSession = function() {
            var e, t = this;
            e = this.isLianghao() ? "/cgi-bin/chs/zc_new/init" : "/cgi-bin/zc/init",
            c.ajax({
                url: e,
                data: {
                    r: Math.random(),
                    accounttype: this.reg_type(),
                    lang: this.lang()
                }
            }).then(function(e) {
                if (t.isLianghao()) {
                    if (0 != e.ec)
                        return void t.error(parseInt(e.ec));
                    switch (t.handleToObserveDataElevel(e),
                    parseInt(e.elevel)) {
                    case 0:
                        t.onLianghaoVerifyOK();
                        break;
                    case 6:
                        1 == parseInt(e.reason) ? t.error(9997) : t.error(9999);
                        break;
                    case 1:
                        t.verify_type(0),
                        t.is_verify(!0);
                        break;
                    default:
                    case 2:
                        t.error(9997)
                    }
                } else
                    t.handleToObserveDataElevel(e);
                var n = t.getInitCallbackErrorMessage(e);
                n && t.error(n)
            }, function() {
                t.error(9998)
            })
        }
        ,
        e.prototype.isChs = function() {
            return this.str().now_language == this.chs.now_language
        }
        ,
        e.prototype.isCht = function() {
            return this.str().now_language == this.cht.now_language
        }
        ,
        e.prototype.isEn = function() {
            return this.str().now_language == this.en.now_language
        }
        ,
        e.prototype.checkDirtyNickname = function(e) {
            var t = this
              , n = this.nickname();
            return 0 == n.length ? void this.nicknameStatus(this.str().nick_null) : "" == n.trim() ? void this.nicknameStatus(this.str().nick_blank) : encodeURIComponent(n).match(/%[0-9a-z]{2}|./gi).length > 36 ? void this.nicknameStatus(this.str().nick_max) : void (!1 !== e && c.ajax({
                url: this.isLianghao() ? "/cgi-bin/chs/common/dirty_check" : "/cgi-bin/zc/dirty_check",
                data: {
                    r: Math.random(),
                    nick: this.nickname()
                },
                method: "GET"
            }).then(function(e) {
                if (t.nickname() == n) {
                    if (!e || !Object.prototype.hasOwnProperty.call(e, "ec"))
                        return void t.nicknameStatus(t.str().nick_invalid);
                    switch (parseInt(e.ec)) {
                    case 0:
                        t.nicknameStatus(1);
                        break;
                    case 15:
                    default:
                        t.nicknameStatus(t.str().nick_invalid)
                    }
                }
            }, function() {
                t.nicknameStatus(t.str().nick_invalid)
            }))
        }
        ,
        e.prototype.checkPassword = function(e) {
            var t = this;
            this.passwordStatus(function() {
                return 0 == t.password().length ? t.str().password_null : t.passwordHasBlank() ? t.str().password_blank : t.passwordBadLength() ? t.str().password_length : t.passwordSimple() ? t.str().password_simple : 1
            }()),
            this.passwordFocus(!1),
            this.isLianghao() || !1 !== e && c.ajax({
                url: "/cgi-bin/zc/pwd_check",
                method: "POST",
                data: {
                    nick: this.nickname(),
                    mobile: this.country() + this.phone(),
                    password: this.encryptedPassword()
                }
            }).then(function(e) {
                switch (parseInt(e.ec)) {
                case 0:
                    t.handleToObserveDataElevel(e);
                    break;
                case 21:
                    t.error(9996)
                }
            }, function() {})
        }
        ,
        e.prototype.onPasswordFocus = function() {
            this.passwordFocus(!0),
            this.passwordStatus(0)
        }
        ,
        e.prototype.onNicknameFocus = function() {
            this.nicknameStatus(0)
        }
        ,
        e.prototype.onMailFocus = function() {
            this.mailStatus(0)
        }
        ,
        e.prototype.onPhoneFocus = function() {
            this.phoneStatus(0)
        }
        ,
        e.prototype.checkPhone = function() {
            if (0 === this.phone().length)
                return void this.phoneStatus(this.str().phone_null);
            if (this.isLianghao()) {
                if ("+86" != this.country())
                    return void this.phoneStatus("只支持国内手机号");
                this.phone().match(/^\d+$/) ? -1 !== this.blackPhone.indexOf(this.phoneSubmit()) ? this.phoneStatus(this.str().phone_error) : this.phoneStatus(1) : this.phoneStatus(this.str().phone_invalid)
            } else
                this.phone().length || -1 !== [3, 4].indexOf(this.capt_level()) ? this.phone().match(/^\d+$/) ? -1 !== this.blackPhone.indexOf(this.phoneSubmit()) ? this.phoneStatus(this.str().phone_error) : this.phoneStatus(1) : this.phoneStatus(this.str().phone_invalid) : this.phoneStatus(0)
        }
        ,
        e.prototype.clearCode = function() {
            this.getNumTips(""),
            this.codeTips("")
        }
        ,
        e.prototype.checkMail = function(e, t) {
            var n = this;
            if (0 == this.mail().length)
                return void (!0 === t ? this.mailStatus(0) : this.mailStatus(this.str().mail_plz_input));
            if (this.isQQMail()) {
                if (/^[^a-z]+/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_start_limit);
                if (/[^a-z0-9_.-]/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_char_limit);
                if (/[._-]{2,}/.test(this.mail()))
                    return void this.mailStatus(this.str().mail_special_limit);
                if (/[^a-z0-9]+$/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_end_limit)
            } else {
                if (/^[^a-z0-9]/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_illeagl);
                if (/@(qq|foxmail)\.com$/.test(this.mail()))
                    return void this.mailStatus(this.str().mail_not_qq)
            }
            if (!1 !== e) {
                var i = {
                    r: Math.random(),
                    nick: this.nickname()
                };
                return (null === e || void 0 === e ? void 0 : e.ticket) && (null === e || void 0 === e ? void 0 : e.randstr) && (i.tk = e.ticket,
                i.verifycode = e.randstr),
                this.isQQMail() ? i.email = this.mail() + this.qqmail() : i.other_email = this.mail(),
                c.ajax({
                    url: "/cgi-bin/zc/check_mail",
                    data: i,
                    method: "GET"
                }).then(function(e) {
                    switch (n.handleToObserveDataElevel(e),
                    parseInt(e.ec)) {
                    case 0:
                        n.mailStatus(1);
                        break;
                    case 7:
                    case 4:
                        n.mailStatus(n.str().mail_illeagl);
                        break;
                    case 8:
                    case 9:
                        n.mailStatus(n.str().mail_exist);
                        break;
                    case 2:
                    case 12:
                        n.verify_type(1),
                        n.is_verify(!0);
                        break;
                    default:
                        n.mailStatus(n.str().mail_exist)
                    }
                }, function() {
                    n.mailStatus(n.str().mail_exist)
                }),
                0
            }
        }
        ,
        e.prototype.beginSelectCountry = function() {
            this.country_list(this.str().country_list),
            this.isSelectingCountry(!0)
        }
        ,
        e.prototype.endSelectCountry = function() {
            this.isSelectingCountry(!1),
            this.checkCountry()
        }
        ,
        e.prototype.togglerCountry = function() {
            this.isSelectingCountry() ? this.checkCountry() : this.country_list(this.str().country_list),
            this.isSelectingCountry(!this.isSelectingCountry())
        }
        ,
        e.prototype.setCountry = function(e) {
            this._country("+" + e),
            this.isSelectingCountry(!1),
            this.checkCountry()
        }
        ,
        e.prototype.checkCountry = function() {
            this._country(this._country().trim()),
            /^\+\d+$/.test(this._country()) || this._country("+" + this.str().country_list[0].c)
        }
        ,
        e.prototype.searchLianghao = function() {
            window.monitor(2759875),
            window.open("//www.baidu.com/s?ie=utf-8&wd=" + encodeURIComponent(this.lianghaoKey()) )
        }
        ,
        e.prototype.typeLianghao = function(e, t) {
            return 13 !== t.keyCode || (e.searchLianghao(),
            !1)
        }
        ,
        e.prototype.toggleLang = function() {
            this.langOpened(!this.langOpened())
        }
        ,
        e.prototype.openLang = function() {
            this.langOpened(!0)
        }
        ,
        e.prototype.closeLang = function() {
            this.langOpened(!1)
        }
        ,
        e.prototype.sideTo = function(e) {
            this.currentSide(e)
        }
        ,
        e.prototype.stopSide = function() {
            clearInterval(this.sideTimer)
        }
        ,
        e.prototype.startSide = function() {
            var e = this;
            clearInterval(this.sideTimer),
            this.sideTimer = setInterval(function() {
                e.sideTo((e.currentSide() + 1) % e.side.length)
            }, 5e3)
        }
        ,
        e.prototype.toQQ = function() {
            this.openBeginPage(this.lang(), 0)
        }
        ,
        e.prototype.toMail = function() {
            this.openBeginPage(this.lang(), 2)
        }
        ,
        e.prototype.toQQMail = function() {
            this.openBeginPage(this.lang(), 1)
        }
        ,
        e.prototype.toLianghao = function() {
            var e = this;
            window.monitor(2759876, function() {
                e.openBeginPage(e.lang(), 3)
            })
        }
        ,
        e.prototype.isMail = function() {
            return 2 == this.reg_type()
        }
        ,
        e.prototype.isQQMail = function() {
            return 1 == this.reg_type()
        }
        ,
        e.prototype.isQQ = function() {
            return 0 == this.reg_type()
        }
        ,
        e.prototype.isLianghao = function() {
            return 3 == this.reg_type()
        }
        ,
        e.prototype.setMail = function(e) {
            this.qqmail(e),
            this.isSelectingMail(!1)
        }
        ,
        e.prototype.beginSelectMail = function() {
            this.isSelectingMail(!0)
        }
        ,
        e.prototype.toggleSelectMail = function() {
            this.isSelectingMail(!this.isSelectingMail())
        }
        ,
        e.prototype.checkIfVerify = function() {
            return !0
        }
        ,
        e.prototype.sendSMS = function(e) {
            var t = this;
            if (!this.agree())
                return void this.getNumTips(this.str().agreement_need);
            switch (this.phoneStatus()) {
            case 0:
                this.phoneStatus(this.str().phone_null);
                break;
            case 1:
                break;
            default:
                return
            }
            if (4 == this.capt_level())
                return void this.is_up_sms(!0);
            if (this.checkIfVerify() && !window.verifySig) {
                return void new window.TencentCaptcha("2088570579",function(n) {
                    console.log(n),
                    0 === n.ret && (window.verifySig = n.ticket,
                    window.randstr = n.randstr,
                    t.sendSMS(e))
                }
                ).show()
            }
            if (this.send_sms() == this.str().send_sms) {
                c("#send-sms").attr("disabled", "disabled");
                var n = {
                    telphone: this.phoneSubmit(),
                    nick: this.nickname(),
                    elevel: this.elevel(),
                    fsq_sig: window.verifySig,
                    rand_str: window.randstr
                };
                (null === e || void 0 === e ? void 0 : e.ticket) && (null === e || void 0 === e ? void 0 : e.randstr) && (n.tk = e.ticket,
                n.verifycode = e.randstr),
                this.doSendSms(n, 60),
                window.verifySig = null
            }
        }
        ,
        e.prototype.doSendSms = function(e, t) {
            var n = this;
            c.ajax({
                url: this.isLianghao() ? "/cgi-bin/chs/zc_new/sms_send" : "/cgi-bin/zc/sms_send",
                method: "POST",
                data: e
            }).then(function(e) {
                var i = function() {
                    n.send_sms(t.toString());
                    var e = setInterval(function() {
                        t -= 1,
                        n.send_sms(t.toString()),
                        0 == t && (c("#send-sms").removeAttr("disabled"),
                        clearInterval(e),
                        n.send_sms(n.str().send_sms))
                    }, 1e3)
                };
                if (n.isLianghao())
                    switch (parseInt(e.ec)) {
                    case 0:
                        i(),
                        c("input.code").focus();
                        break;
                    case 1:
                        n.phoneStatus("抱歉，服务器繁忙，请稍后再试。");
                        break;
                    case 31:
                        n.phoneStatus(n.str().phone_error),
                        n.blackPhone.push(n.phoneSubmit());
                        break;
                    case 12:
                        n.phoneStatus("手机号码出错");
                        break;
                    case 10:
                    case 11:
                    case 14:
                    case 15:
                        n.phoneStatus("该手机号码今天接收验证码数目已达上限，建议尝试其他手机号码");
                        break;
                    case 21:
                        n.error(9996);
                        break;
                    case 22:
                        n.error(9997);
                        break;
                    case 23:
                        n.phoneStatus("该号码已经参加过该活动");
                        break;
                    case 26:
                        n.error(9996)
                    }
                else
                    switch (parseInt(e.ec)) {
                    case 0:
                        i(),
                        c("input.code").focus();
                        break;
                    case 1:
                        n.error(9998);
                        break;
                    case 12:
                        n.phoneStatus(n.str().phone_security_error);
                        break;
                    case 14:
                        n.error(9999);
                        break;
                    case 4:
                    case 31:
                        n.phoneStatus(n.str().phone_error),
                        n.blackPhone.push(n.phoneSubmit());
                        break;
                    case 26:
                        n.is_up_sms(!0);
                        break;
                    case 60:
                        n.is_mobile_qq_register(!0);
                        break;
                    case 21:
                        n.error(9996);
                        break;
                    default:
                        n.error(9998)
                    }
                0 != e.ec && c("#send-sms").removeAttr("disabled"),
                n.handleToObserveDataElevel(e)
            }, function() {})
        }
        ,
        e.prototype.addFriend = function(e) {
            for (var t = this, n = 0, i = this.friends(); n < i.length; n++) {
                var r = i[n];
                if (r.qq == e && 1 == r.status)
                    return
            }
            var a = function() {
                for (var n = t.friends(), i = 0, r = n; i < r.length; i++) {
                    var a = r[i];
                    if (a.qq == e)
                        return a.status = 0,
                        a.tips = t.str().friends_failed,
                        t.friends([]),
                        void t.friends(n)
                }
            };
            c.ajax({
                url: "/cgi-bin/zc/add_friend",
                method: "POST",
                data: {
                    uin: this.qq(),
                    fuin: e
                }
            }).then(function(n) {
                switch (parseInt(n.ec)) {
                case 0:
                    for (var i = t.friends(), r = 0; r < i.length; ++r) {
                        var o = i[r];
                        if (o.qq == e)
                            return o.status = 1,
                            o.tips = t.str().friends_succ,
                            t.friends([]),
                            void t.friends(i)
                    }
                    break;
                default:
                    a()
                }
            }, function() {
                a()
            })
        }
        ,
        e.prototype.loadAvatar = function(e) {
            c.ajax({
                url: ("https:" === location.protocol ? "https://ssl." : "http://") + "ptlogin2.qq.com/getface?appid=1&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + encodeURIComponent(e) + "&r=" + Math.random(),
                dataType: "jsonp"
            })
        }
        ,
        e.prototype.submit = function(e) {
            var t = this;
            this._is_up_sms() && (this.up_error_msg(""),
            this.up_port_updated(!1));
            var n = !1;
            if (this.checkPassword(!1),
            this.checkDirtyNickname(!1),
            this.checkPhone(),
            this.agree() || (this.getNumTips(this.str().agreement_need),
            n = !0),
            1 !== this.nicknameStatus() && (n = !0),
            1 !== this.passwordStatus() && (n = !0),
            "number" != typeof this.phoneStatus() && (n = !0),
            this.phone().length) {
                if (this.capt_level() <= 3)
                    0 === this.code().length && (this.codeTips(this.str().code_null),
                    n = !0);
                else if (4 === this.capt_level() && !this.is_up_sms())
                    return void this.is_up_sms(!0)
            } else
                (-1 !== [3, 4].indexOf(this.capt_level()) || this.isLianghao()) && (this.codeTips(this.str().code_null),
                n = !0);
            if (!n) {
                var i = {
                    qzone_flag: 1,
                    nick: this.nickname(),
                    telphone: this.phoneSubmit(),
                    password: this.encryptedPassword(),
                    smsvc: this.code()
                };
                if (this.isLianghao() && (i.bind_uin = this.lianghao(),
                i.act_lsig = this.act_lsig,
                i.elevel = this.elevel()),
                this.isQQMail() && (i.email = this.mail() + this.qqmail()),
                this.isMail() && (i.other_email = this.mail()),
                -1 !== [1, 2].indexOf(this.capt_level()) && 0 == this.code().length) {
                    if (!((null === e || void 0 === e ? void 0 : e.ticket) && (null === e || void 0 === e ? void 0 : e.randstr)))
                        return this.verify_type(3),
                        void this.is_verify(!0);
                    i.verifycode = e.randstr,
                    i.tk = e.ticket
                }
                return c("#get_acc").attr("disabled", "disabled").addClass("disabled"),
                c.ajax({
                    url: this.isLianghao() ? "/cgi-bin/chs/lh_activity/bind_acc" : "/cgi-bin/zc/get_acc",
                    method: "POST",
                    data: i
                }).then(function(e) {
                    if (t.isLianghao())
                        switch (parseInt(e.ec)) {
                        case 0:
                            t.succ(!0),
                            t.qq(e.uin),
                            window.monitor(2891812);
                            break;
                        case 2:
                            t.codeTips("验证码错误");
                            break;
                        case 40:
                            t.getNumTips("号码已绑定，请更换号码");
                            break;
                        case 41:
                            t.getNumTips("页面超时，请刷新页面重试");
                            break;
                        case 43:
                            t.getNumTips("当前手机号已绑定多个QQ号，超过上限。请更换其他手机号注册QQ，或使用最新版手机QQ进行处理。");
                            break;
                        case 44:
                            t.getNumTips("当前手机号无法注册，请更换号码重试。");
                            break;
                        case 21:
                        default:
                            t.error(parseInt(e.ec))
                        }
                    else
                        switch (parseInt(e.ec)) {
                        case 0:
                            t.succ(!0),
                            t.qq(e.uin),
                            t.isMail() && t.active(!0),
                            t.friends([]);
                            for (var n = 1; n < 4; ++n)
                                e["fuin" + n] && e["nick" + n] && t.friends().push({
                                    qq: e["fuin" + n],
                                    nickname: e["nick" + n],
                                    status: 0,
                                    tips: "",
                                    icon: ""
                                });
                            t.friends(t.friends()),
                            window.monitor(2892272),
                            t.bind_result(parseInt(e.bind_result));
                            break;
                        case 2:
                        case 16:
                            t.codeTips(t.str().verify_code_error);
                            break;
                        case 17:
                            t.up_error_msg(t.str().up_sms_failed),
                            t.up_error_count(t.up_error_count() + 1);
                            break;
                        case 18:
                            t.getNumTips(t.str().need_send_sms);
                            break;
                        case 31:
                            t.phoneStatus(t.str().phone_error),
                            t.blackPhone.push(t.phoneSubmit());
                            break;
                        case 8:
                        case 9:
                            t.mailStatus(t.str().mail_exist);
                            break;
                        case 13:
                        case 15:
                            t.nicknameStatus(t.str().nick_invalid);
                            break;
                        case 26:
                            t.is_up_sms(!0);
                            break;
                        case 21:
                            t.error(9996);
                            break;
                        case 43:
                            t.getNumTips("当前手机号已绑定多个QQ号，超过上限。请更换其他手机号注册QQ，或使用最新版手机QQ进行处理。");
                            break;
                        case 44:
                            t.getNumTips("当前手机号无法注册，请更换号码重试。");
                            break;
                        default:
                            t.error(parseInt(e.ec))
                        }
                    -1 == [17, 26].indexOf(parseInt(e.ec)) && t.is_up_sms(!1)
                }, function() {}).always(function() {
                    return c("#get_acc").removeAttr("disabled").removeClass("disabled")
                }),
                !1
            }
        }
        ,
        e.prototype.changeLianghao = function() {
            for (var e = 0; e < this.lianghao_list().length; ++e)
                if (this.lianghao_list()[e][0] == this.lianghao())
                    return void this.lianghao(this.lianghao_list()[(e + 1) % this.lianghao_list().length][0])
        }
        ,
        e.prototype.onLianghaoVerifyOK = function(e) {
            var t = this;
            if (!(this.lianghao_list().length > 0)) {
                this.is_verify(!1);
                var n = {
                    elevel: this.elevel()
                };
                (null === e || void 0 === e ? void 0 : e.randstr) && (n.verifycode = e.randstr),
                c.ajax({
                    url: "/cgi-bin/chs/lh_activity/get_acc",
                    method: "POST",
                    data: n
                }).then(function(e) {
                    if (0 != e.ec)
                        return void t.error(9998);
                    t.lianghao_list([]);
                    for (var n = 0; n < e.uin_cnt; ++n)
                        t.lianghao_list.push([e["new_uin_" + n], parseInt(e["keep_type_" + n])]);
                    t.lianghao_list(t.lianghao_list()),
                    t.lianghao(t.lianghao_list()[0][0]),
                    t.act_lsig = e.act_lsig
                }, function() {
                    t.error(9998)
                })
            }
        }
        ,
        e.prototype.onEmailVerifyOK = function(e) {
            this.is_verify(!1),
            this.checkMail(e)
        }
        ,
        e.prototype.onSMSVerifyOK = function(e) {
            this.is_verify(!1),
            this.sendSMS(e)
        }
        ,
        e.prototype.onGetNumVerifyOK = function(e) {
            this.is_verify(!1),
            this.submit(e)
        }
        ,
        e.prototype.download = function() {
            location.href = "/cgi-bin/zc/download?" + c.param({
                uin: this.qq(),
                lang: this.lang()
            })
        }
        ,
        e.prototype.resend = function() {
            c.ajax({
                url: "/cgi-bin/zc/re_act",
                data: {
                    uin: this.qq(),
                    other_email: this.mail(),
                    telphone: this.phoneSubmit()
                },
                method: "GET"
            }),
            alert(this.mail_has_resend())
        }
        ,
        e.prototype.resizeContent = function() {
            var e = c(".main")
              , t = c(window);
            if (e.outerHeight() + 300 < t.outerHeight()) {
                var n = {
                    top: "50%"
                };
                "100px" === e.css("top") && (n.marginTop = "-" + (e.outerHeight() / 2 + 50) + "px"),
                e.css(n)
            } else
                e.css({
                    top: "",
                    marginTop: ""
                })
        }
        ,
        e.prototype.startClient = function() {
            var e, t, n, i = this, r = function() {
                var e = document.createElement("iframe");
                e.style.height = "0px",
                e.style.width = "0px",
                e.src = "tencent://OpenQQLogin/?FUIN=" + i.qq(),
                document.body.appendChild(e)
            }, a = !1;
            try {
                navigator.mimeTypes["application/qscall-plugin"] ? (e = document.createElement("embed"),
                e.type = "application/qscall-plugin",
                e.style.width = "0px",
                e.style.height = "0px",
                document.body.appendChild(e),
                e.InitActiveX("TimwpDll.TimwpCheck")) : e = new ActiveXObject("TimwpDll.TimwpCheck"),
                n = e.GetHummerQQVersion(),
                a = n >= 2509
            } catch (o) {
                a = !1
            }
            if (a)
                try {
                    navigator.mimeTypes["application/qscall-plugin"] ? (t = document.createElement("embed"),
                    t.type = "application/qscall-plugin",
                    t.style.width = "0px",
                    t.style.height = "0px",
                    document.body.appendChild(t),
                    t.InitActiveX("QQCPHelper.CPAdder")) : t = new ActiveXObject("QQCPHelper.CPAdder"),
                    t.StartupIM(this.qq())
                } catch (o) {
                    return r(),
                    !1
                }
            else
                r()
        }
        ,
        e.prototype.openMail = function() {
            var e = this.mail()
              , t = e.substr(e.lastIndexOf("@") + 1);
            Object.prototype.hasOwnProperty.call(this.knownEmail, t) && window.open(this.knownEmail[t])
        }
        ,
        e.prototype.    feedback = function() {
            if (this.isEn())
                return void (window.location.href = "mailto:qqimail@tencent.com?subject=Feedback from English signup page");
            window.open("https://www.bh3.com/valkyries/16948/22226")
        }
        ,
        e.prototype.errorReturn = function() {
            var e = i("ec");
            if (e)
                switch (parseInt(e)) {
                case 8:
                case 10:
                    return void this.openBeginPage(this.lang(), 2);
                default:
                    location.href = location.pathname
                }
            else
                location.reload()
        }
        ,
        e.prototype.home = function() {
            this.openBeginPage(this.lang(), 0)
        }
        ,
        e.prototype.switchAgreement = function() {
            this.agreementOpened(!this.agreementOpened())
        }
        ,
        e.prototype.closeVerify = function() {
            switch (this.verify_type()) {
            case 0:
                this.openBeginPage(this.lang(), 0);
                break;
            case 3:
            case 2:
                this.is_verify(!1)
            }
        }
        ,
        e.prototype.getUpPortAsync = function() {
            return new Promise(function(e, t) {
                c.get("/cgi-bin/common/getUpPort?r=" + Math.random()).done(function(n) {
                    0 == n.ec ? e(n.upport) : t(n.ec)
                }).fail(function(e) {
                    t(e)
                })
            }
            )
        }
        ,
        e.prototype.switchUpPort = function() {
            return a(this, void 0, void 0, function() {
                var e, t, n;
                return o(this, function(i) {
                    switch (i.label) {
                    case 0:
                        e = this.up_sms_port(),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, this.getUpPortAsync()];
                    case 2:
                        return t = i.sent(),
                        t != e ? (this.up_sms_port(t),
                        [3, 5]) : [3, 4];
                    case 3:
                        return n = i.sent(),
                        [3, 5];
                    case 4:
                        return [3, 1];
                    case 5:
                        return this.up_port_updated(!0),
                        [2]
                    }
                })
            })
        }
        ,
        e
    }();
    t["default"] = y;
    var v = new y;
    window.app = v,
    s.applyBindings(v),
    document.body.style.display = "block",
    setTimeout(function() {
        return document.body.style.opacity = "1"
    }, 0),
    window.pt = {
        setHeader: function(e) {
            for (var t in e)
                for (var n = v.friends(), i = 0, r = n; i < r.length; i++) {
                    var a = r[i];
                    if (a.qq == t)
                        return void (a.icon != e[t] && (a.icon = e[t],
                        v._friends([]),
                        v._friends(n)))
                }
        }
    }
}
, function(e, t, n) {
    var i, r, a;
    !function() {
        !function(o) {
            var s = this || (0,
            eval)("this")
              , c = s.document
              , u = s.navigator
              , l = s.jQuery
              , p = s.JSON;
            l || "undefined" == typeof jQuery || (l = jQuery),
            function(o) {
                r = [t, n],
                i = o,
                (a = "function" == typeof i ? i.apply(t, r) : i) !== undefined && (e.exports = a)
            }(function(e, t) {
                function n(e, t) {
                    return (null === e || typeof e in m) && e === t
                }
                function i(e, t) {
                    var n;
                    return function() {
                        n || (n = h.a.setTimeout(function() {
                            n = o,
                            e()
                        }, t))
                    }
                }
                function r(e, t) {
                    var n;
                    return function() {
                        clearTimeout(n),
                        n = h.a.setTimeout(e, t)
                    }
                }
                function a(e, t) {
                    t && "change" !== t ? "beforeChange" === t ? this.pc(e) : this.gb(e, t) : this.qc(e)
                }
                function f(e, t) {
                    null !== t && t.s && t.s()
                }
                function d(e, t) {
                    var n = this.qd
                      , i = n[w];
                    i.ra || (this.Qb && this.mb[t] ? (n.uc(t, e, this.mb[t]),
                    this.mb[t] = null,
                    --this.Qb) : i.I[t] || n.uc(t, e, i.J ? {
                        da: e
                    } : n.$c(e)),
                    e.Ja && e.gd())
                }
                var h = void 0 !== e ? e : {};
                h.b = function(e, t) {
                    for (var n = e.split("."), i = h, r = 0; r < n.length - 1; r++)
                        i = i[n[r]];
                    i[n[n.length - 1]] = t
                }
                ,
                h.L = function(e, t, n) {
                    e[t] = n
                }
                ,
                h.version = "3.5.1",
                h.b("version", h.version),
                h.options = {
                    deferUpdates: !1,
                    useOnlyNativeEvents: !1,
                    foreachHidesDestroyed: !1
                },
                h.a = function() {
                    function e(e, t) {
                        for (var n in e)
                            r.call(e, n) && t(n, e[n])
                    }
                    function t(e, t) {
                        if (t)
                            for (var n in t)
                                r.call(t, n) && (e[n] = t[n]);
                        return e
                    }
                    function n(e, t) {
                        return e.__proto__ = t,
                        e
                    }
                    function i(e, t, n, i) {
                        var r = e[t].match(b) || [];
                        h.a.D(n.match(b), function(e) {
                            h.a.Na(r, e, i)
                        }),
                        e[t] = r.join(" ")
                    }
                    var r = Object.prototype.hasOwnProperty
                      , a = {
                        __proto__: []
                    }instanceof Array
                      , f = "function" == typeof Symbol
                      , d = {}
                      , m = {};
                    d[u && /Firefox\/2/i.test(u.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
                    d.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "),
                    e(d, function(e, t) {
                        if (t.length)
                            for (var n = 0, i = t.length; n < i; n++)
                                m[t[n]] = e
                    });
                    var g, y = {
                        propertychange: !0
                    }, v = c && function() {
                        for (var e = 3, t = c.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e",
                        n[0]; )
                            ;
                        return 4 < e ? e : o
                    }(), b = /\S+/g;
                    return {
                        Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                        D: function(e, t, n) {
                            for (var i = 0, r = e.length; i < r; i++)
                                t.call(n, e[i], i, e)
                        },
                        A: "function" == typeof Array.prototype.indexOf ? function(e, t) {
                            return Array.prototype.indexOf.call(e, t)
                        }
                        : function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t)
                                    return n;
                            return -1
                        }
                        ,
                        Lb: function(e, t, n) {
                            for (var i = 0, r = e.length; i < r; i++)
                                if (t.call(n, e[i], i, e))
                                    return e[i];
                            return o
                        },
                        Pa: function(e, t) {
                            var n = h.a.A(e, t);
                            0 < n ? e.splice(n, 1) : 0 === n && e.shift()
                        },
                        wc: function(e) {
                            var t = [];
                            return e && h.a.D(e, function(e) {
                                0 > h.a.A(t, e) && t.push(e)
                            }),
                            t
                        },
                        Mb: function(e, t, n) {
                            var i = [];
                            if (e)
                                for (var r = 0, a = e.length; r < a; r++)
                                    i.push(t.call(n, e[r], r));
                            return i
                        },
                        jb: function(e, t, n) {
                            var i = [];
                            if (e)
                                for (var r = 0, a = e.length; r < a; r++)
                                    t.call(n, e[r], r) && i.push(e[r]);
                            return i
                        },
                        Nb: function(e, t) {
                            if (t instanceof Array)
                                e.push.apply(e, t);
                            else
                                for (var n = 0, i = t.length; n < i; n++)
                                    e.push(t[n]);
                            return e
                        },
                        Na: function(e, t, n) {
                            var i = h.a.A(h.a.bc(e), t);
                            0 > i ? n && e.push(t) : n || e.splice(i, 1)
                        },
                        Ba: a,
                        extend: t,
                        setPrototypeOf: n,
                        Ab: a ? n : t,
                        P: e,
                        Ga: function(e, t, n) {
                            if (!e)
                                return e;
                            var i, a = {};
                            for (i in e)
                                r.call(e, i) && (a[i] = t.call(n, e[i], i, e));
                            return a
                        },
                        Tb: function(e) {
                            for (; e.firstChild; )
                                h.removeNode(e.firstChild)
                        },
                        Yb: function(e) {
                            e = h.a.la(e);
                            for (var t = (e[0] && e[0].ownerDocument || c).createElement("div"), n = 0, i = e.length; n < i; n++)
                                t.appendChild(h.oa(e[n]));
                            return t
                        },
                        Ca: function(e, t) {
                            for (var n = 0, i = e.length, r = []; n < i; n++) {
                                var a = e[n].cloneNode(!0);
                                r.push(t ? h.oa(a) : a)
                            }
                            return r
                        },
                        va: function(e, t) {
                            if (h.a.Tb(e),
                            t)
                                for (var n = 0, i = t.length; n < i; n++)
                                    e.appendChild(t[n])
                        },
                        Xc: function(e, t) {
                            var n = e.nodeType ? [e] : e;
                            if (0 < n.length) {
                                for (var i = n[0], r = i.parentNode, a = 0, o = t.length; a < o; a++)
                                    r.insertBefore(t[a], i);
                                for (a = 0,
                                o = n.length; a < o; a++)
                                    h.removeNode(n[a])
                            }
                        },
                        Ua: function(e, t) {
                            if (e.length) {
                                for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t; )
                                    e.splice(0, 1);
                                for (; 1 < e.length && e[e.length - 1].parentNode !== t; )
                                    e.length--;
                                if (1 < e.length) {
                                    var n = e[0]
                                      , i = e[e.length - 1];
                                    for (e.length = 0; n !== i; )
                                        e.push(n),
                                        n = n.nextSibling;
                                    e.push(i)
                                }
                            }
                            return e
                        },
                        Zc: function(e, t) {
                            7 > v ? e.setAttribute("selected", t) : e.selected = t
                        },
                        Db: function(e) {
                            return null === e || e === o ? "" : e.trim ? e.trim() : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                        },
                        Ud: function(e, t) {
                            return e = e || "",
                            !(t.length > e.length) && e.substring(0, t.length) === t
                        },
                        vd: function(e, t) {
                            if (e === t)
                                return !0;
                            if (11 === e.nodeType)
                                return !1;
                            if (t.contains)
                                return t.contains(1 !== e.nodeType ? e.parentNode : e);
                            if (t.compareDocumentPosition)
                                return 16 == (16 & t.compareDocumentPosition(e));
                            for (; e && e != t; )
                                e = e.parentNode;
                            return !!e
                        },
                        Sb: function(e) {
                            return h.a.vd(e, e.ownerDocument.documentElement)
                        },
                        kd: function(e) {
                            return !!h.a.Lb(e, h.a.Sb)
                        },
                        R: function(e) {
                            return e && e.tagName && e.tagName.toLowerCase()
                        },
                        Ac: function(e) {
                            return h.onError ? function() {
                                try {
                                    return e.apply(this, arguments)
                                } catch (t) {
                                    throw h.onError && h.onError(t),
                                    t
                                }
                            }
                            : e
                        },
                        setTimeout: function(e, t) {
                            return setTimeout(h.a.Ac(e), t)
                        },
                        Gc: function(e) {
                            setTimeout(function() {
                                throw h.onError && h.onError(e),
                                e
                            }, 0)
                        },
                        B: function(e, t, n) {
                            var i = h.a.Ac(n);
                            if (n = y[t],
                            h.options.useOnlyNativeEvents || n || !l)
                                if (n || "function" != typeof e.addEventListener) {
                                    if ("undefined" == typeof e.attachEvent)
                                        throw Error("Browser doesn't support addEventListener or attachEvent");
                                    var r = function(t) {
                                        i.call(e, t)
                                    }
                                      , a = "on" + t;
                                    e.attachEvent(a, r),
                                    h.a.K.za(e, function() {
                                        e.detachEvent(a, r)
                                    })
                                } else
                                    e.addEventListener(t, i, !1);
                            else
                                g || (g = "function" == typeof l(e).on ? "on" : "bind"),
                                l(e)[g](t, i)
                        },
                        Fb: function(e, t) {
                            if (!e || !e.nodeType)
                                throw Error("element must be a DOM node when calling triggerEvent");
                            var n;
                            if ("input" === h.a.R(e) && e.type && "click" == t.toLowerCase() ? (n = e.type,
                            n = "checkbox" == n || "radio" == n) : n = !1,
                            h.options.useOnlyNativeEvents || !l || n)
                                if ("function" == typeof c.createEvent) {
                                    if ("function" != typeof e.dispatchEvent)
                                        throw Error("The supplied element doesn't support dispatchEvent");
                                    n = c.createEvent(m[t] || "HTMLEvents"),
                                    n.initEvent(t, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e),
                                    e.dispatchEvent(n)
                                } else if (n && e.click)
                                    e.click();
                                else {
                                    if ("undefined" == typeof e.fireEvent)
                                        throw Error("Browser doesn't support triggering events");
                                    e.fireEvent("on" + t)
                                }
                            else
                                l(e).trigger(t)
                        },
                        f: function(e) {
                            return h.O(e) ? e() : e
                        },
                        bc: function(e) {
                            return h.O(e) ? e.v() : e
                        },
                        Eb: function(e, t, n) {
                            var r;
                            t && ("object" == typeof e.classList ? (r = e.classList[n ? "add" : "remove"],
                            h.a.D(t.match(b), function(t) {
                                r.call(e.classList, t)
                            })) : "string" == typeof e.className.baseVal ? i(e.className, "baseVal", t, n) : i(e, "className", t, n))
                        },
                        Bb: function(e, t) {
                            var n = h.a.f(t);
                            null !== n && n !== o || (n = "");
                            var i = h.h.firstChild(e);
                            !i || 3 != i.nodeType || h.h.nextSibling(i) ? h.h.va(e, [e.ownerDocument.createTextNode(n)]) : i.data = n,
                            h.a.Ad(e)
                        },
                        Yc: function(e, t) {
                            if (e.name = t,
                            7 >= v)
                                try {
                                    var n = e.name.replace(/[&<>'"]/g, function(e) {
                                        return "&#" + e.charCodeAt(0) + ";"
                                    });
                                    e.mergeAttributes(c.createElement("<input name='" + n + "'/>"), !1)
                                } catch (n) {}
                        },
                        Ad: function(e) {
                            9 <= v && (e = 1 == e.nodeType ? e : e.parentNode,
                            e.style && (e.style.zoom = e.style.zoom))
                        },
                        wd: function(e) {
                            if (v) {
                                var t = e.style.width;
                                e.style.width = 0,
                                e.style.width = t
                            }
                        },
                        Pd: function(e, t) {
                            e = h.a.f(e),
                            t = h.a.f(t);
                            for (var n = [], i = e; i <= t; i++)
                                n.push(i);
                            return n
                        },
                        la: function(e) {
                            for (var t = [], n = 0, i = e.length; n < i; n++)
                                t.push(e[n]);
                            return t
                        },
                        Da: function(e) {
                            return f ? Symbol(e) : e
                        },
                        Zd: 6 === v,
                        $d: 7 === v,
                        W: v,
                        Lc: function(e, t) {
                            for (var n = h.a.la(e.getElementsByTagName("input")).concat(h.a.la(e.getElementsByTagName("textarea"))), i = "string" == typeof t ? function(e) {
                                return e.name === t
                            }
                            : function(e) {
                                return t.test(e.name)
                            }
                            , r = [], a = n.length - 1; 0 <= a; a--)
                                i(n[a]) && r.push(n[a]);
                            return r
                        },
                        Nd: function(e) {
                            return "string" == typeof e && (e = h.a.Db(e)) ? p && p.parse ? p.parse(e) : new Function("return " + e)() : null
                        },
                        hc: function(e, t, n) {
                            if (!p || !p.stringify)
                                throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                            return p.stringify(h.a.f(e), t, n)
                        },
                        Od: function(t, n, i) {
                            i = i || {};
                            var r = i.params || {}
                              , a = i.includeFields || this.Jc
                              , o = t;
                            if ("object" == typeof t && "form" === h.a.R(t))
                                for (var o = t.action, s = a.length - 1; 0 <= s; s--)
                                    for (var u = h.a.Lc(t, a[s]), l = u.length - 1; 0 <= l; l--)
                                        r[u[l].name] = u[l].value;
                            n = h.a.f(n);
                            var p = c.createElement("form");
                            p.style.display = "none",
                            p.action = o,
                            p.method = "post";
                            for (var f in n)
                                t = c.createElement("input"),
                                t.type = "hidden",
                                t.name = f,
                                t.value = h.a.hc(h.a.f(n[f])),
                                p.appendChild(t);
                            e(r, function(e, t) {
                                var n = c.createElement("input");
                                n.type = "hidden",
                                n.name = e,
                                n.value = t,
                                p.appendChild(n)
                            }),
                            c.body.appendChild(p),
                            i.submitter ? i.submitter(p) : p.submit(),
                            setTimeout(function() {
                                p.parentNode.removeChild(p)
                            }, 0)
                        }
                    }
                }(),
                h.b("utils", h.a),
                h.b("utils.arrayForEach", h.a.D),
                h.b("utils.arrayFirst", h.a.Lb),
                h.b("utils.arrayFilter", h.a.jb),
                h.b("utils.arrayGetDistinctValues", h.a.wc),
                h.b("utils.arrayIndexOf", h.a.A),
                h.b("utils.arrayMap", h.a.Mb),
                h.b("utils.arrayPushAll", h.a.Nb),
                h.b("utils.arrayRemoveItem", h.a.Pa),
                h.b("utils.cloneNodes", h.a.Ca),
                h.b("utils.createSymbolOrString", h.a.Da),
                h.b("utils.extend", h.a.extend),
                h.b("utils.fieldsIncludedWithJsonPost", h.a.Jc),
                h.b("utils.getFormFields", h.a.Lc),
                h.b("utils.objectMap", h.a.Ga),
                h.b("utils.peekObservable", h.a.bc),
                h.b("utils.postJson", h.a.Od),
                h.b("utils.parseJson", h.a.Nd),
                h.b("utils.registerEventHandler", h.a.B),
                h.b("utils.stringifyJson", h.a.hc),
                h.b("utils.range", h.a.Pd),
                h.b("utils.toggleDomNodeCssClass", h.a.Eb),
                h.b("utils.triggerEvent", h.a.Fb),
                h.b("utils.unwrapObservable", h.a.f),
                h.b("utils.objectForEach", h.a.P),
                h.b("utils.addOrRemoveItem", h.a.Na),
                h.b("utils.setTextContent", h.a.Bb),
                h.b("unwrap", h.a.f),
                Function.prototype.bind || (Function.prototype.bind = function(e) {
                    var t = this;
                    if (1 === arguments.length)
                        return function() {
                            return t.apply(e, arguments)
                        }
                        ;
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var i = n.slice(0);
                        return i.push.apply(i, arguments),
                        t.apply(e, i)
                    }
                }
                ),
                h.a.g = new function() {
                    var e, t, n = 0, i = "__ko__" + (new Date).getTime(), r = {};
                    return h.a.W ? (e = function(e, t) {
                        var a = e[i];
                        if (!a || "null" === a || !r[a]) {
                            if (!t)
                                return o;
                            a = e[i] = "ko" + n++,
                            r[a] = {}
                        }
                        return r[a]
                    }
                    ,
                    t = function(e) {
                        var t = e[i];
                        return !!t && (delete r[t],
                        e[i] = null,
                        !0)
                    }
                    ) : (e = function(e, t) {
                        var n = e[i];
                        return !n && t && (n = e[i] = {}),
                        n
                    }
                    ,
                    t = function(e) {
                        return !!e[i] && (delete e[i],
                        !0)
                    }
                    ),
                    {
                        get: function(t, n) {
                            var i = e(t, !1);
                            return i && i[n]
                        },
                        set: function(t, n, i) {
                            (t = e(t, i !== o)) && (t[n] = i)
                        },
                        Ub: function(t, n, i) {
                            return t = e(t, !0),
                            t[n] || (t[n] = i)
                        },
                        clear: t,
                        Z: function() {
                            return n++ + i
                        }
                    }
                }
                ,
                h.b("utils.domData", h.a.g),
                h.b("utils.domData.clear", h.a.g.clear),
                h.a.K = new function() {
                    function e(e, t) {
                        var n = h.a.g.get(e, i);
                        return n === o && t && (n = [],
                        h.a.g.set(e, i, n)),
                        n
                    }
                    function t(t) {
                        var i = e(t, !1);
                        if (i)
                            for (var i = i.slice(0), r = 0; r < i.length; r++)
                                i[r](t);
                        h.a.g.clear(t),
                        h.a.K.cleanExternalData(t),
                        a[t.nodeType] && n(t.childNodes, !0)
                    }
                    function n(e, n) {
                        for (var i, r = [], a = 0; a < e.length; a++)
                            if ((!n || 8 === e[a].nodeType) && (t(r[r.length] = i = e[a]),
                            e[a] !== i))
                                for (; a-- && -1 == h.a.A(r, e[a]); )
                                    ;
                    }
                    var i = h.a.g.Z()
                      , r = {
                        1: !0,
                        8: !0,
                        9: !0
                    }
                      , a = {
                        1: !0,
                        9: !0
                    };
                    return {
                        za: function(t, n) {
                            if ("function" != typeof n)
                                throw Error("Callback must be a function");
                            e(t, !0).push(n)
                        },
                        yb: function(t, n) {
                            var r = e(t, !1);
                            r && (h.a.Pa(r, n),
                            0 == r.length && h.a.g.set(t, i, o))
                        },
                        oa: function(e) {
                            return h.u.G(function() {
                                r[e.nodeType] && (t(e),
                                a[e.nodeType] && n(e.getElementsByTagName("*")))
                            }),
                            e
                        },
                        removeNode: function(e) {
                            h.oa(e),
                            e.parentNode && e.parentNode.removeChild(e)
                        },
                        cleanExternalData: function(e) {
                            l && "function" == typeof l.cleanData && l.cleanData([e])
                        }
                    }
                }
                ,
                h.oa = h.a.K.oa,
                h.removeNode = h.a.K.removeNode,
                h.b("cleanNode", h.oa),
                h.b("removeNode", h.removeNode),
                h.b("utils.domNodeDisposal", h.a.K),
                h.b("utils.domNodeDisposal.addDisposeCallback", h.a.K.za),
                h.b("utils.domNodeDisposal.removeDisposeCallback", h.a.K.yb),
                function() {
                    var e = [0, "", ""]
                      , t = [1, "<table>", "</table>"]
                      , n = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
                      , i = [1, "<select multiple='multiple'>", "</select>"]
                      , r = {
                        thead: t,
                        tbody: t,
                        tfoot: t,
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: n,
                        th: n,
                        option: i,
                        optgroup: i
                    }
                      , a = 8 >= h.a.W;
                    h.a.ua = function(t, n) {
                        var i;
                        if (l) {
                            if (l.parseHTML)
                                i = l.parseHTML(t, n) || [];
                            else if ((i = l.clean([t], n)) && i[0]) {
                                for (var o = i[0]; o.parentNode && 11 !== o.parentNode.nodeType; )
                                    o = o.parentNode;
                                o.parentNode && o.parentNode.removeChild(o)
                            }
                        } else {
                            (i = n) || (i = c);
                            var u, o = i.parentWindow || i.defaultView || s, p = h.a.Db(t).toLowerCase(), f = i.createElement("div");
                            for (u = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && r[p[1]] || e,
                            p = u[0],
                            u = "ignored<div>" + u[1] + t + u[2] + "</div>",
                            "function" == typeof o.innerShiv ? f.appendChild(o.innerShiv(u)) : (a && i.body.appendChild(f),
                            f.innerHTML = u,
                            a && f.parentNode.removeChild(f)); p--; )
                                f = f.lastChild;
                            i = h.a.la(f.lastChild.childNodes)
                        }
                        return i
                    }
                    ,
                    h.a.Md = function(e, t) {
                        var n = h.a.ua(e, t);
                        return n.length && n[0].parentElement || h.a.Yb(n)
                    }
                    ,
                    h.a.fc = function(e, t) {
                        if (h.a.Tb(e),
                        null !== (t = h.a.f(t)) && t !== o)
                            if ("string" != typeof t && (t = t.toString()),
                            l)
                                l(e).html(t);
                            else
                                for (var n = h.a.ua(t, e.ownerDocument), i = 0; i < n.length; i++)
                                    e.appendChild(n[i])
                    }
                }(),
                h.b("utils.parseHtmlFragment", h.a.ua),
                h.b("utils.setHtml", h.a.fc),
                h.aa = function() {
                    function e(t, n) {
                        if (t)
                            if (8 == t.nodeType) {
                                var i = h.aa.Uc(t.nodeValue);
                                null != i && n.push({
                                    ud: t,
                                    Kd: i
                                })
                            } else if (1 == t.nodeType)
                                for (var i = 0, r = t.childNodes, a = r.length; i < a; i++)
                                    e(r[i], n)
                    }
                    var t = {};
                    return {
                        Xb: function(e) {
                            if ("function" != typeof e)
                                throw Error("You can only pass a function to ko.memoization.memoize()");
                            var n = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                            return t[n] = e,
                            "\x3c!--[ko_memo:" + n + "]--\x3e"
                        },
                        bd: function(e, n) {
                            var i = t[e];
                            if (i === o)
                                throw Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized.");
                            try {
                                return i.apply(null, n || []),
                                !0
                            } finally {
                                delete t[e]
                            }
                        },
                        cd: function(t, n) {
                            var i = [];
                            e(t, i);
                            for (var r = 0, a = i.length; r < a; r++) {
                                var o = i[r].ud
                                  , s = [o];
                                n && h.a.Nb(s, n),
                                h.aa.bd(i[r].Kd, s),
                                o.nodeValue = "",
                                o.parentNode && o.parentNode.removeChild(o)
                            }
                        },
                        Uc: function(e) {
                            return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null
                        }
                    }
                }(),
                h.b("memoization", h.aa),
                h.b("memoization.memoize", h.aa.Xb),
                h.b("memoization.unmemoize", h.aa.bd),
                h.b("memoization.parseMemoText", h.aa.Uc),
                h.b("memoization.unmemoizeDomNodeAndDescendants", h.aa.cd),
                h.na = function() {
                    function e() {
                        if (r)
                            for (var e, t = r, n = 0; o < r; )
                                if (e = i[o++]) {
                                    if (o > t) {
                                        if (5e3 <= ++n) {
                                            o = r,
                                            h.a.Gc(Error("'Too much recursion' after processing " + n + " task groups."));
                                            break
                                        }
                                        t = r
                                    }
                                    try {
                                        e()
                                    } catch (a) {
                                        h.a.Gc(a)
                                    }
                                }
                    }
                    function t() {
                        e(),
                        o = r = i.length = 0
                    }
                    var n, i = [], r = 0, a = 1, o = 0;
                    return n = s.MutationObserver ? function(e) {
                        var t = c.createElement("div");
                        return new MutationObserver(e).observe(t, {
                            attributes: !0
                        }),
                        function() {
                            t.classList.toggle("foo")
                        }
                    }(t) : c && "onreadystatechange"in c.createElement("script") ? function(e) {
                        var t = c.createElement("script");
                        t.onreadystatechange = function() {
                            t.onreadystatechange = null,
                            c.documentElement.removeChild(t),
                            t = null,
                            e()
                        }
                        ,
                        c.documentElement.appendChild(t)
                    }
                    : function(e) {
                        setTimeout(e, 0)
                    }
                    ,
                    {
                        scheduler: n,
                        zb: function(e) {
                            return r || h.na.scheduler(t),
                            i[r++] = e,
                            a++
                        },
                        cancel: function(e) {
                            (e -= a - r) >= o && e < r && (i[e] = null)
                        },
                        resetForTesting: function() {
                            var e = r - o;
                            return o = r = i.length = 0,
                            e
                        },
                        Sd: e
                    }
                }(),
                h.b("tasks", h.na),
                h.b("tasks.schedule", h.na.zb),
                h.b("tasks.runEarly", h.na.Sd),
                h.Ta = {
                    throttle: function(e, t) {
                        e.throttleEvaluation = t;
                        var n = null;
                        return h.$({
                            read: e,
                            write: function(i) {
                                clearTimeout(n),
                                n = h.a.setTimeout(function() {
                                    e(i)
                                }, t)
                            }
                        })
                    },
                    rateLimit: function(e, t) {
                        var n, a, o;
                        "number" == typeof t ? n = t : (n = t.timeout,
                        a = t.method),
                        e.Hb = !1,
                        o = "function" == typeof a ? a : "notifyWhenChangesStop" == a ? r : i,
                        e.ub(function(e) {
                            return o(e, n, t)
                        })
                    },
                    deferred: function(e, t) {
                        if (!0 !== t)
                            throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                        e.Hb || (e.Hb = !0,
                        e.ub(function(t) {
                            var n, i = !1;
                            return function() {
                                if (!i) {
                                    h.na.cancel(n),
                                    n = h.na.zb(t);
                                    try {
                                        i = !0,
                                        e.notifySubscribers(o, "dirty")
                                    } finally {
                                        i = !1
                                    }
                                }
                            }
                        }))
                    },
                    notify: function(e, t) {
                        e.equalityComparer = "always" == t ? null : n
                    }
                };
                var m = {
                    undefined: 1,
                    "boolean": 1,
                    number: 1,
                    string: 1
                };
                h.b("extenders", h.Ta),
                h.ic = function(e, t, n) {
                    this.da = e,
                    this.lc = t,
                    this.mc = n,
                    this.Ib = !1,
                    this.fb = this.Jb = null,
                    h.L(this, "dispose", this.s),
                    h.L(this, "disposeWhenNodeIsRemoved", this.l)
                }
                ,
                h.ic.prototype.s = function() {
                    this.Ib || (this.fb && h.a.K.yb(this.Jb, this.fb),
                    this.Ib = !0,
                    this.mc(),
                    this.da = this.lc = this.mc = this.Jb = this.fb = null)
                }
                ,
                h.ic.prototype.l = function(e) {
                    this.Jb = e,
                    h.a.K.za(e, this.fb = this.s.bind(this))
                }
                ,
                h.T = function() {
                    h.a.Ab(this, g),
                    g.qb(this)
                }
                ;
                var g = {
                    qb: function(e) {
                        e.U = {
                            change: []
                        },
                        e.sc = 1
                    },
                    subscribe: function(e, t, n) {
                        var i = this;
                        n = n || "change";
                        var r = new h.ic(i,t ? e.bind(t) : e,function() {
                            h.a.Pa(i.U[n], r),
                            i.hb && i.hb(n)
                        }
                        );
                        return i.Qa && i.Qa(n),
                        i.U[n] || (i.U[n] = []),
                        i.U[n].push(r),
                        r
                    },
                    notifySubscribers: function(e, t) {
                        if (t = t || "change",
                        "change" === t && this.Gb(),
                        this.Wa(t)) {
                            var n = "change" === t && this.ed || this.U[t].slice(0);
                            try {
                                h.u.xc();
                                for (var i, r = 0; i = n[r]; ++r)
                                    i.Ib || i.lc(e)
                            } finally {
                                h.u.end()
                            }
                        }
                    },
                    ob: function() {
                        return this.sc
                    },
                    Dd: function(e) {
                        return this.ob() !== e
                    },
                    Gb: function() {
                        ++this.sc
                    },
                    ub: function(e) {
                        var t, n, i, r, o, s = this, c = h.O(s);
                        s.gb || (s.gb = s.notifySubscribers,
                        s.notifySubscribers = a);
                        var u = e(function() {
                            s.Ja = !1,
                            c && r === s && (r = s.nc ? s.nc() : s());
                            var e = n || o && s.sb(i, r);
                            o = n = t = !1,
                            e && s.gb(i = r)
                        });
                        s.qc = function(e, n) {
                            n && s.Ja || (o = !n),
                            s.ed = s.U.change.slice(0),
                            s.Ja = t = !0,
                            r = e,
                            u()
                        }
                        ,
                        s.pc = function(e) {
                            t || (i = e,
                            s.gb(e, "beforeChange"))
                        }
                        ,
                        s.rc = function() {
                            o = !0
                        }
                        ,
                        s.gd = function() {
                            s.sb(i, s.v(!0)) && (n = !0)
                        }
                    },
                    Wa: function(e) {
                        return this.U[e] && this.U[e].length
                    },
                    Bd: function(e) {
                        if (e)
                            return this.U[e] && this.U[e].length || 0;
                        var t = 0;
                        return h.a.P(this.U, function(e, n) {
                            "dirty" !== e && (t += n.length)
                        }),
                        t
                    },
                    sb: function(e, t) {
                        return !this.equalityComparer || !this.equalityComparer(e, t)
                    },
                    toString: function() {
                        return "[object Object]"
                    },
                    extend: function(e) {
                        var t = this;
                        return e && h.a.P(e, function(e, n) {
                            var i = h.Ta[e];
                            "function" == typeof i && (t = i(t, n) || t)
                        }),
                        t
                    }
                };
                h.L(g, "init", g.qb),
                h.L(g, "subscribe", g.subscribe),
                h.L(g, "extend", g.extend),
                h.L(g, "getSubscriptionsCount", g.Bd),
                h.a.Ba && h.a.setPrototypeOf(g, Function.prototype),
                h.T.fn = g,
                h.Qc = function(e) {
                    return null != e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
                }
                ,
                h.b("subscribable", h.T),
                h.b("isSubscribable", h.Qc),
                h.S = h.u = function() {
                    function e(e) {
                        i.push(n),
                        n = e
                    }
                    function t() {
                        n = i.pop()
                    }
                    var n, i = [], r = 0;
                    return {
                        xc: e,
                        end: t,
                        cc: function(e) {
                            if (n) {
                                if (!h.Qc(e))
                                    throw Error("Only subscribable things can act as dependencies");
                                n.od.call(n.pd, e, e.fd || (e.fd = ++r))
                            }
                        },
                        G: function(n, i, r) {
                            try {
                                return e(),
                                n.apply(i, r || [])
                            } finally {
                                t()
                            }
                        },
                        qa: function() {
                            if (n)
                                return n.o.qa()
                        },
                        Va: function() {
                            if (n)
                                return n.o.Va()
                        },
                        Ya: function() {
                            if (n)
                                return n.Ya
                        },
                        o: function() {
                            if (n)
                                return n.o
                        }
                    }
                }(),
                h.b("computedContext", h.S),
                h.b("computedContext.getDependenciesCount", h.S.qa),
                h.b("computedContext.getDependencies", h.S.Va),
                h.b("computedContext.isInitial", h.S.Ya),
                h.b("computedContext.registerDependency", h.S.cc),
                h.b("ignoreDependencies", h.Yd = h.u.G);
                var y = h.a.Da("_latestValue");
                h.ta = function(e) {
                    function t() {
                        return 0 < arguments.length ? (t.sb(t[y], arguments[0]) && (t.ya(),
                        t[y] = arguments[0],
                        t.xa()),
                        this) : (h.u.cc(t),
                        t[y])
                    }
                    return t[y] = e,
                    h.a.Ba || h.a.extend(t, h.T.fn),
                    h.T.fn.qb(t),
                    h.a.Ab(t, v),
                    h.options.deferUpdates && h.Ta.deferred(t, !0),
                    t
                }
                ;
                var v = {
                    equalityComparer: n,
                    v: function() {
                        return this[y]
                    },
                    xa: function() {
                        this.notifySubscribers(this[y], "spectate"),
                        this.notifySubscribers(this[y])
                    },
                    ya: function() {
                        this.notifySubscribers(this[y], "beforeChange")
                    }
                };
                h.a.Ba && h.a.setPrototypeOf(v, h.T.fn);
                var b = h.ta.Ma = "__ko_proto__";
                v[b] = h.ta,
                h.O = function(e) {
                    if ((e = "function" == typeof e && e[b]) && e !== v[b] && e !== h.o.fn[b])
                        throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                    return !!e
                }
                ,
                h.Za = function(e) {
                    return "function" == typeof e && (e[b] === v[b] || e[b] === h.o.fn[b] && e.Nc)
                }
                ,
                h.b("observable", h.ta),
                h.b("isObservable", h.O),
                h.b("isWriteableObservable", h.Za),
                h.b("isWritableObservable", h.Za),
                h.b("observable.fn", v),
                h.L(v, "peek", v.v),
                h.L(v, "valueHasMutated", v.xa),
                h.L(v, "valueWillMutate", v.ya),
                h.Ha = function(e) {
                    if ("object" != typeof (e = e || []) || !("length"in e))
                        throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return e = h.ta(e),
                    h.a.Ab(e, h.Ha.fn),
                    e.extend({
                        trackArrayChanges: !0
                    })
                }
                ,
                h.Ha.fn = {
                    remove: function(e) {
                        for (var t = this.v(), n = [], i = "function" != typeof e || h.O(e) ? function(t) {
                            return t === e
                        }
                        : e, r = 0; r < t.length; r++) {
                            var a = t[r];
                            if (i(a)) {
                                if (0 === n.length && this.ya(),
                                t[r] !== a)
                                    throw Error("Array modified during remove; cannot remove item");
                                n.push(a),
                                t.splice(r, 1),
                                r--
                            }
                        }
                        return n.length && this.xa(),
                        n
                    },
                    removeAll: function(e) {
                        if (e === o) {
                            var t = this.v()
                              , n = t.slice(0);
                            return this.ya(),
                            t.splice(0, t.length),
                            this.xa(),
                            n
                        }
                        return e ? this.remove(function(t) {
                            return 0 <= h.a.A(e, t)
                        }) : []
                    },
                    destroy: function(e) {
                        var t = this.v()
                          , n = "function" != typeof e || h.O(e) ? function(t) {
                            return t === e
                        }
                        : e;
                        this.ya();
                        for (var i = t.length - 1; 0 <= i; i--) {
                            var r = t[i];
                            n(r) && (r._destroy = !0)
                        }
                        this.xa()
                    },
                    destroyAll: function(e) {
                        return e === o ? this.destroy(function() {
                            return !0
                        }) : e ? this.destroy(function(t) {
                            return 0 <= h.a.A(e, t)
                        }) : []
                    },
                    indexOf: function(e) {
                        var t = this();
                        return h.a.A(t, e)
                    },
                    replace: function(e, t) {
                        var n = this.indexOf(e);
                        0 <= n && (this.ya(),
                        this.v()[n] = t,
                        this.xa())
                    },
                    sorted: function(e) {
                        var t = this().slice(0);
                        return e ? t.sort(e) : t.sort()
                    },
                    reversed: function() {
                        return this().slice(0).reverse()
                    }
                },
                h.a.Ba && h.a.setPrototypeOf(h.Ha.fn, h.ta.fn),
                h.a.D("pop push reverse shift sort splice unshift".split(" "), function(e) {
                    h.Ha.fn[e] = function() {
                        var t = this.v();
                        this.ya(),
                        this.zc(t, e, arguments);
                        var n = t[e].apply(t, arguments);
                        return this.xa(),
                        n === t ? this : n
                    }
                }),
                h.a.D(["slice"], function(e) {
                    h.Ha.fn[e] = function() {
                        var t = this();
                        return t[e].apply(t, arguments)
                    }
                }),
                h.Pc = function(e) {
                    return h.O(e) && "function" == typeof e.remove && "function" == typeof e.push
                }
                ,
                h.b("observableArray", h.Ha),
                h.b("isObservableArray", h.Pc),
                h.Ta.trackArrayChanges = function(e, t) {
                    function n() {
                        function t() {
                            if (u) {
                                var t, n = [].concat(e.v() || []);
                                e.Wa("arrayChange") && ((!c || 1 < u) && (c = h.a.Pb(a, n, e.Ob)),
                                t = c),
                                a = n,
                                c = null,
                                u = 0,
                                t && t.length && e.notifySubscribers(t, "arrayChange")
                            }
                        }
                        s ? t() : (s = !0,
                        r = e.subscribe(function() {
                            ++u
                        }, null, "spectate"),
                        a = [].concat(e.v() || []),
                        c = null,
                        i = e.subscribe(t))
                    }
                    if (e.Ob = {},
                    t && "object" == typeof t && h.a.extend(e.Ob, t),
                    e.Ob.sparse = !0,
                    !e.zc) {
                        var i, r, a, s = !1, c = null, u = 0, l = e.Qa, p = e.hb;
                        e.Qa = function(t) {
                            l && l.call(e, t),
                            "arrayChange" === t && n()
                        }
                        ,
                        e.hb = function(t) {
                            p && p.call(e, t),
                            "arrayChange" !== t || e.Wa("arrayChange") || (i && i.s(),
                            r && r.s(),
                            r = i = null,
                            s = !1,
                            a = o)
                        }
                        ,
                        e.zc = function(e, t, n) {
                            function i(e, t, n) {
                                return r[r.length] = {
                                    status: e,
                                    value: t,
                                    index: n
                                }
                            }
                            if (s && !u) {
                                var r = []
                                  , a = e.length
                                  , o = n.length
                                  , l = 0;
                                switch (t) {
                                case "push":
                                    l = a;
                                case "unshift":
                                    for (t = 0; t < o; t++)
                                        i("added", n[t], l + t);
                                    break;
                                case "pop":
                                    l = a - 1;
                                case "shift":
                                    a && i("deleted", e[l], l);
                                    break;
                                case "splice":
                                    t = Math.min(Math.max(0, 0 > n[0] ? a + n[0] : n[0]), a);
                                    for (var a = 1 === o ? a : Math.min(t + (n[1] || 0), a), o = t + o - 2, l = Math.max(a, o), p = [], f = [], d = 2; t < l; ++t,
                                    ++d)
                                        t < a && f.push(i("deleted", e[t], t)),
                                        t < o && p.push(i("added", n[d], t));
                                    h.a.Kc(f, p);
                                    break;
                                default:
                                    return
                                }
                                c = r
                            }
                        }
                    }
                }
                ;
                var w = h.a.Da("_state");
                h.o = h.$ = function(e, t, n) {
                    function i() {
                        if (0 < arguments.length) {
                            if ("function" != typeof r)
                                throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return r.apply(a.nb, arguments),
                            this
                        }
                        return a.ra || h.u.cc(i),
                        (a.ka || a.J && i.Xa()) && i.ha(),
                        a.X
                    }
                    if ("object" == typeof e ? n = e : (n = n || {},
                    e && (n.read = e)),
                    "function" != typeof n.read)
                        throw Error("Pass a function that returns the value of the ko.computed");
                    var r = n.write
                      , a = {
                        X: o,
                        sa: !0,
                        ka: !0,
                        rb: !1,
                        jc: !1,
                        ra: !1,
                        wb: !1,
                        J: !1,
                        Wc: n.read,
                        nb: t || n.owner,
                        l: n.disposeWhenNodeIsRemoved || n.l || null,
                        Sa: n.disposeWhen || n.Sa,
                        Rb: null,
                        I: {},
                        V: 0,
                        Ic: null
                    };
                    return i[w] = a,
                    i.Nc = "function" == typeof r,
                    h.a.Ba || h.a.extend(i, h.T.fn),
                    h.T.fn.qb(i),
                    h.a.Ab(i, _),
                    n.pure ? (a.wb = !0,
                    a.J = !0,
                    h.a.extend(i, x)) : n.deferEvaluation && h.a.extend(i, T),
                    h.options.deferUpdates && h.Ta.deferred(i, !0),
                    a.l && (a.jc = !0,
                    a.l.nodeType || (a.l = null)),
                    a.J || n.deferEvaluation || i.ha(),
                    a.l && i.ja() && h.a.K.za(a.l, a.Rb = function() {
                        i.s()
                    }
                    ),
                    i
                }
                ;
                var _ = {
                    equalityComparer: n,
                    qa: function() {
                        return this[w].V
                    },
                    Va: function() {
                        var e = [];
                        return h.a.P(this[w].I, function(t, n) {
                            e[n.Ka] = n.da
                        }),
                        e
                    },
                    Vb: function(e) {
                        if (!this[w].V)
                            return !1;
                        var t = this.Va();
                        return -1 !== h.a.A(t, e) || !!h.a.Lb(t, function(t) {
                            return t.Vb && t.Vb(e)
                        })
                    },
                    uc: function(e, t, n) {
                        if (this[w].wb && t === this)
                            throw Error("A 'pure' computed must not be called recursively");
                        this[w].I[e] = n,
                        n.Ka = this[w].V++,
                        n.La = t.ob()
                    },
                    Xa: function() {
                        var e, t, n = this[w].I;
                        for (e in n)
                            if (Object.prototype.hasOwnProperty.call(n, e) && (t = n[e],
                            this.Ia && t.da.Ja || t.da.Dd(t.La)))
                                return !0
                    },
                    Jd: function() {
                        this.Ia && !this[w].rb && this.Ia(!1)
                    },
                    ja: function() {
                        var e = this[w];
                        return e.ka || 0 < e.V
                    },
                    Rd: function() {
                        this.Ja ? this[w].ka && (this[w].sa = !0) : this.Hc()
                    },
                    $c: function(e) {
                        if (e.Hb) {
                            var t = e.subscribe(this.Jd, this, "dirty")
                              , n = e.subscribe(this.Rd, this);
                            return {
                                da: e,
                                s: function() {
                                    t.s(),
                                    n.s()
                                }
                            }
                        }
                        return e.subscribe(this.Hc, this)
                    },
                    Hc: function() {
                        var e = this
                          , t = e.throttleEvaluation;
                        t && 0 <= t ? (clearTimeout(this[w].Ic),
                        this[w].Ic = h.a.setTimeout(function() {
                            e.ha(!0)
                        }, t)) : e.Ia ? e.Ia(!0) : e.ha(!0)
                    },
                    ha: function(e) {
                        var t = this[w]
                          , n = t.Sa
                          , i = !1;
                        if (!t.rb && !t.ra) {
                            if (t.l && !h.a.Sb(t.l) || n && n()) {
                                if (!t.jc)
                                    return void this.s()
                            } else
                                t.jc = !1;
                            t.rb = !0;
                            try {
                                i = this.zd(e)
                            } finally {
                                t.rb = !1
                            }
                            return i
                        }
                    },
                    zd: function(e) {
                        var t = this[w]
                          , n = !1
                          , i = t.wb ? o : !t.V
                          , n = {
                            qd: this,
                            mb: t.I,
                            Qb: t.V
                        };
                        h.u.xc({
                            pd: n,
                            od: d,
                            o: this,
                            Ya: i
                        }),
                        t.I = {},
                        t.V = 0;
                        var r = this.yd(t, n);
                        return t.V ? n = this.sb(t.X, r) : (this.s(),
                        n = !0),
                        n && (t.J ? this.Gb() : this.notifySubscribers(t.X, "beforeChange"),
                        t.X = r,
                        this.notifySubscribers(t.X, "spectate"),
                        !t.J && e && this.notifySubscribers(t.X),
                        this.rc && this.rc()),
                        i && this.notifySubscribers(t.X, "awake"),
                        n
                    },
                    yd: function(e, t) {
                        try {
                            var n = e.Wc;
                            return e.nb ? n.call(e.nb) : n()
                        } finally {
                            h.u.end(),
                            t.Qb && !e.J && h.a.P(t.mb, f),
                            e.sa = e.ka = !1
                        }
                    },
                    v: function(e) {
                        var t = this[w];
                        return (t.ka && (e || !t.V) || t.J && this.Xa()) && this.ha(),
                        t.X
                    },
                    ub: function(e) {
                        h.T.fn.ub.call(this, e),
                        this.nc = function() {
                            return this[w].J || (this[w].sa ? this.ha() : this[w].ka = !1),
                            this[w].X
                        }
                        ,
                        this.Ia = function(e) {
                            this.pc(this[w].X),
                            this[w].ka = !0,
                            e && (this[w].sa = !0),
                            this.qc(this, !e)
                        }
                    },
                    s: function() {
                        var e = this[w];
                        !e.J && e.I && h.a.P(e.I, function(e, t) {
                            t.s && t.s()
                        }),
                        e.l && e.Rb && h.a.K.yb(e.l, e.Rb),
                        e.I = o,
                        e.V = 0,
                        e.ra = !0,
                        e.sa = !1,
                        e.ka = !1,
                        e.J = !1,
                        e.l = o,
                        e.Sa = o,
                        e.Wc = o,
                        this.Nc || (e.nb = o)
                    }
                }
                  , x = {
                    Qa: function(e) {
                        var t = this
                          , n = t[w];
                        if (!n.ra && n.J && "change" == e) {
                            if (n.J = !1,
                            n.sa || t.Xa())
                                n.I = null,
                                n.V = 0,
                                t.ha() && t.Gb();
                            else {
                                var i = [];
                                h.a.P(n.I, function(e, t) {
                                    i[t.Ka] = e
                                }),
                                h.a.D(i, function(e, i) {
                                    var r = n.I[e]
                                      , a = t.$c(r.da);
                                    a.Ka = i,
                                    a.La = r.La,
                                    n.I[e] = a
                                }),
                                t.Xa() && t.ha() && t.Gb()
                            }
                            n.ra || t.notifySubscribers(n.X, "awake")
                        }
                    },
                    hb: function(e) {
                        var t = this[w];
                        t.ra || "change" != e || this.Wa("change") || (h.a.P(t.I, function(e, n) {
                            n.s && (t.I[e] = {
                                da: n.da,
                                Ka: n.Ka,
                                La: n.La
                            },
                            n.s())
                        }),
                        t.J = !0,
                        this.notifySubscribers(o, "asleep"))
                    },
                    ob: function() {
                        var e = this[w];
                        return e.J && (e.sa || this.Xa()) && this.ha(),
                        h.T.fn.ob.call(this)
                    }
                }
                  , T = {
                    Qa: function(e) {
                        "change" != e && "beforeChange" != e || this.v()
                    }
                };
                h.a.Ba && h.a.setPrototypeOf(_, h.T.fn);
                var k = h.ta.Ma;
                _[k] = h.o,
                h.Oc = function(e) {
                    return "function" == typeof e && e[k] === _[k]
                }
                ,
                h.Fd = function(e) {
                    return h.Oc(e) && e[w] && e[w].wb
                }
                ,
                h.b("computed", h.o),
                h.b("dependentObservable", h.o),
                h.b("isComputed", h.Oc),
                h.b("isPureComputed", h.Fd),
                h.b("computed.fn", _),
                h.L(_, "peek", _.v),
                h.L(_, "dispose", _.s),
                h.L(_, "isActive", _.ja),
                h.L(_, "getDependenciesCount", _.qa),
                h.L(_, "getDependencies", _.Va),
                h.xb = function(e, t) {
                    return "function" == typeof e ? h.o(e, t, {
                        pure: !0
                    }) : (e = h.a.extend({}, e),
                    e.pure = !0,
                    h.o(e, t))
                }
                ,
                h.b("pureComputed", h.xb),
                function() {
                    function e(i, r, a) {
                        if (a = a || new n,
                        "object" != typeof (i = r(i)) || null === i || i === o || i instanceof RegExp || i instanceof Date || i instanceof String || i instanceof Number || i instanceof Boolean)
                            return i;
                        var s = i instanceof Array ? [] : {};
                        return a.save(i, s),
                        t(i, function(t) {
                            var n = r(i[t]);
                            switch (typeof n) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                s[t] = n;
                                break;
                            case "object":
                            case "undefined":
                                var c = a.get(n);
                                s[t] = c !== o ? c : e(n, r, a)
                            }
                        }),
                        s
                    }
                    function t(e, t) {
                        if (e instanceof Array) {
                            for (var n = 0; n < e.length; n++)
                                t(n);
                            "function" == typeof e.toJSON && t("toJSON")
                        } else
                            for (n in e)
                                t(n)
                    }
                    function n() {
                        this.keys = [],
                        this.values = []
                    }
                    h.ad = function(t) {
                        if (0 == arguments.length)
                            throw Error("When calling ko.toJS, pass the object you want to convert.");
                        return e(t, function(e) {
                            for (var t = 0; h.O(e) && 10 > t; t++)
                                e = e();
                            return e
                        })
                    }
                    ,
                    h.toJSON = function(e, t, n) {
                        return e = h.ad(e),
                        h.a.hc(e, t, n)
                    }
                    ,
                    n.prototype = {
                        constructor: n,
                        save: function(e, t) {
                            var n = h.a.A(this.keys, e);
                            0 <= n ? this.values[n] = t : (this.keys.push(e),
                            this.values.push(t))
                        },
                        get: function(e) {
                            return e = h.a.A(this.keys, e),
                            0 <= e ? this.values[e] : o
                        }
                    }
                }(),
                h.b("toJS", h.ad),
                h.b("toJSON", h.toJSON),
                h.Wd = function(e, t, n) {
                    function i(t) {
                        var i = h.xb(e, n).extend({
                            ma: "always"
                        })
                          , r = i.subscribe(function(e) {
                            e && (r.s(),
                            t(e))
                        });
                        return i.notifySubscribers(i.v()),
                        r
                    }
                    return "function" != typeof Promise || t ? i(t.bind(n)) : new Promise(i)
                }
                ,
                h.b("when", h.Wd),
                function() {
                    h.w = {
                        M: function(e) {
                            switch (h.a.R(e)) {
                            case "option":
                                return !0 === e.__ko__hasDomDataOptionValue__ ? h.a.g.get(e, h.c.options.$b) : 7 >= h.a.W ? e.getAttributeNode("value") && e.getAttributeNode("value").specified ? e.value : e.text : e.value;
                            case "select":
                                return 0 <= e.selectedIndex ? h.w.M(e.options[e.selectedIndex]) : o;
                            default:
                                return e.value
                            }
                        },
                        cb: function(e, t, n) {
                            switch (h.a.R(e)) {
                            case "option":
                                "string" == typeof t ? (h.a.g.set(e, h.c.options.$b, o),
                                "__ko__hasDomDataOptionValue__"in e && delete e.__ko__hasDomDataOptionValue__,
                                e.value = t) : (h.a.g.set(e, h.c.options.$b, t),
                                e.__ko__hasDomDataOptionValue__ = !0,
                                e.value = "number" == typeof t ? t : "");
                                break;
                            case "select":
                                "" !== t && null !== t || (t = o);
                                for (var i, r = -1, a = 0, s = e.options.length; a < s; ++a)
                                    if ((i = h.w.M(e.options[a])) == t || "" === i && t === o) {
                                        r = a;
                                        break
                                    }
                                (n || 0 <= r || t === o && 1 < e.size) && (e.selectedIndex = r,
                                6 === h.a.W && h.a.setTimeout(function() {
                                    e.selectedIndex = r
                                }, 0));
                                break;
                            default:
                                null !== t && t !== o || (t = ""),
                                e.value = t
                            }
                        }
                    }
                }(),
                h.b("selectExtensions", h.w),
                h.b("selectExtensions.readValue", h.w.M),
                h.b("selectExtensions.writeValue", h.w.cb),
                h.m = function() {
                    function e(e) {
                        e = h.a.Db(e),
                        123 === e.charCodeAt(0) && (e = e.slice(1, -1)),
                        e += "\n,";
                        var t, n = [], o = e.match(i), s = [], c = 0;
                        if (1 < o.length) {
                            for (var u, l = 0; u = o[l]; ++l) {
                                var p = u.charCodeAt(0);
                                if (44 === p) {
                                    if (0 >= c) {
                                        n.push(t && s.length ? {
                                            key: t,
                                            value: s.join("")
                                        } : {
                                            unknown: t || s.join("")
                                        }),
                                        t = c = 0,
                                        s = [];
                                        continue
                                    }
                                } else if (58 === p) {
                                    if (!c && !t && 1 === s.length) {
                                        t = s.pop();
                                        continue
                                    }
                                } else {
                                    if (47 === p && 1 < u.length && (47 === u.charCodeAt(1) || 42 === u.charCodeAt(1)))
                                        continue;
                                    47 === p && l && 1 < u.length ? (p = o[l - 1].match(r)) && !a[p[0]] && (e = e.substr(e.indexOf(u) + 1),
                                    o = e.match(i),
                                    l = -1,
                                    u = "/") : 40 === p || 123 === p || 91 === p ? ++c : 41 === p || 125 === p || 93 === p ? --c : t || s.length || 34 !== p && 39 !== p || (u = u.slice(1, -1))
                                }
                                s.push(u)
                            }
                            if (0 < c)
                                throw Error("Unbalanced parentheses, braces, or brackets")
                        }
                        return n
                    }
                    var t = ["true", "false", "null", "undefined"]
                      , n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                      , i = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g")
                      , r = /[\])"'A-Za-z0-9_$]+$/
                      , a = {
                        "in": 1,
                        "return": 1,
                        "typeof": 1
                    }
                      , o = {};
                    return {
                        Ra: [],
                        wa: o,
                        ac: e,
                        vb: function(i, r) {
                            function a(e, i) {
                                var r;
                                if (!l) {
                                    var p = h.getBindingHandler(e);
                                    if (p && p.preprocess && !(i = p.preprocess(i, e, a)))
                                        return;
                                    (p = o[e]) && (r = i,
                                    0 <= h.a.A(t, r) ? r = !1 : (p = r.match(n),
                                    r = null !== p && (p[1] ? "Object(" + p[1] + ")" + p[2] : r)),
                                    p = r),
                                    p && c.push("'" + ("string" == typeof o[e] ? o[e] : e) + "':function(_z){" + r + "=_z}")
                                }
                                u && (i = "function(){return " + i + " }"),
                                s.push("'" + e + "':" + i)
                            }
                            r = r || {};
                            var s = []
                              , c = []
                              , u = r.valueAccessors
                              , l = r.bindingParams
                              , p = "string" == typeof i ? e(i) : i;
                            return h.a.D(p, function(e) {
                                a(e.key || e.unknown, e.value)
                            }),
                            c.length && a("_ko_property_writers", "{" + c.join(",") + " }"),
                            s.join(",")
                        },
                        Id: function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n].key == t)
                                    return !0;
                            return !1
                        },
                        eb: function(e, t, n, i, r) {
                            e && h.O(e) ? !h.Za(e) || r && e.v() === i || e(i) : (e = t.get("_ko_property_writers")) && e[n] && e[n](i)
                        }
                    }
                }(),
                h.b("expressionRewriting", h.m),
                h.b("expressionRewriting.bindingRewriteValidators", h.m.Ra),
                h.b("expressionRewriting.parseObjectLiteral", h.m.ac),
                h.b("expressionRewriting.preProcessBindings", h.m.vb),
                h.b("expressionRewriting._twoWayBindings", h.m.wa),
                h.b("jsonExpressionRewriting", h.m),
                h.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", h.m.vb),
                function() {
                    function e(e) {
                        return 8 == e.nodeType && a.test(r ? e.text : e.nodeValue)
                    }
                    function t(e) {
                        return 8 == e.nodeType && o.test(r ? e.text : e.nodeValue)
                    }
                    function n(n, i) {
                        for (var r = n, a = 1, o = []; r = r.nextSibling; ) {
                            if (t(r) && (h.a.g.set(r, u, !0),
                            0 === --a))
                                return o;
                            o.push(r),
                            e(r) && a++
                        }
                        if (!i)
                            throw Error("Cannot find closing comment tag to match: " + n.nodeValue);
                        return null
                    }
                    function i(e, t) {
                        var i = n(e, t);
                        return i ? 0 < i.length ? i[i.length - 1].nextSibling : e.nextSibling : null
                    }
                    var r = c && "\x3c!--test--\x3e" === c.createComment("test").text
                      , a = r ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                      , o = r ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/
                      , s = {
                        ul: !0,
                        ol: !0
                    }
                      , u = "__ko_matchedEndComment__";
                    h.h = {
                        ea: {},
                        childNodes: function(t) {
                            return e(t) ? n(t) : t.childNodes
                        },
                        Ea: function(t) {
                            if (e(t)) {
                                t = h.h.childNodes(t);
                                for (var n = 0, i = t.length; n < i; n++)
                                    h.removeNode(t[n])
                            } else
                                h.a.Tb(t)
                        },
                        va: function(t, n) {
                            if (e(t)) {
                                h.h.Ea(t);
                                for (var i = t.nextSibling, r = 0, a = n.length; r < a; r++)
                                    i.parentNode.insertBefore(n[r], i)
                            } else
                                h.a.va(t, n)
                        },
                        Vc: function(t, n) {
                            var i;
                            e(t) ? (i = t.nextSibling,
                            t = t.parentNode) : i = t.firstChild,
                            i ? n !== i && t.insertBefore(n, i) : t.appendChild(n)
                        },
                        Wb: function(t, n, i) {
                            i ? (i = i.nextSibling,
                            e(t) && (t = t.parentNode),
                            i ? n !== i && t.insertBefore(n, i) : t.appendChild(n)) : h.h.Vc(t, n)
                        },
                        firstChild: function(n) {
                            if (e(n))
                                return !n.nextSibling || t(n.nextSibling) ? null : n.nextSibling;
                            if (n.firstChild && t(n.firstChild))
                                throw Error("Found invalid end comment, as the first child of " + n);
                            return n.firstChild
                        },
                        nextSibling: function(n) {
                            if (e(n) && (n = i(n)),
                            n.nextSibling && t(n.nextSibling)) {
                                var r = n.nextSibling;
                                if (t(r) && !h.a.g.get(r, u))
                                    throw Error("Found end comment without a matching opening comment, as child of " + n);
                                return null
                            }
                            return n.nextSibling
                        },
                        Cd: e,
                        Vd: function(e) {
                            return (e = (r ? e.text : e.nodeValue).match(a)) ? e[1] : null
                        },
                        Sc: function(n) {
                            if (s[h.a.R(n)]) {
                                var r = n.firstChild;
                                if (r)
                                    do {
                                        if (1 === r.nodeType) {
                                            var a;
                                            a = r.firstChild;
                                            var o = null;
                                            if (a)
                                                do {
                                                    if (o)
                                                        o.push(a);
                                                    else if (e(a)) {
                                                        var c = i(a, !0);
                                                        c ? a = c : o = [a]
                                                    } else
                                                        t(a) && (o = [a])
                                                } while (a = a.nextSibling);
                                            if (a = o)
                                                for (o = r.nextSibling,
                                                c = 0; c < a.length; c++)
                                                    o ? n.insertBefore(a[c], o) : n.appendChild(a[c])
                                        }
                                    } while (r = r.nextSibling)
                            }
                        }
                    }
                }(),
                h.b("virtualElements", h.h),
                h.b("virtualElements.allowedBindings", h.h.ea),
                h.b("virtualElements.emptyNode", h.h.Ea),
                h.b("virtualElements.insertAfter", h.h.Wb),
                h.b("virtualElements.prepend", h.h.Vc),
                h.b("virtualElements.setDomNodeChildren", h.h.va),
                function() {
                    h.ga = function() {
                        this.nd = {}
                    }
                    ,
                    h.a.extend(h.ga.prototype, {
                        nodeHasBindings: function(e) {
                            switch (e.nodeType) {
                            case 1:
                                return null != e.getAttribute("data-bind") || h.j.getComponentNameForNode(e);
                            case 8:
                                return h.h.Cd(e);
                            default:
                                return !1
                            }
                        },
                        getBindings: function(e, t) {
                            var n = this.getBindingsString(e, t)
                              , n = n ? this.parseBindingsString(n, t, e) : null;
                            return h.j.tc(n, e, t, !1)
                        },
                        getBindingAccessors: function(e, t) {
                            var n = this.getBindingsString(e, t)
                              , n = n ? this.parseBindingsString(n, t, e, {
                                valueAccessors: !0
                            }) : null;
                            return h.j.tc(n, e, t, !0)
                        },
                        getBindingsString: function(e) {
                            switch (e.nodeType) {
                            case 1:
                                return e.getAttribute("data-bind");
                            case 8:
                                return h.h.Vd(e);
                            default:
                                return null
                            }
                        },
                        parseBindingsString: function(e, t, n, i) {
                            try {
                                var r, a = this.nd, o = e + (i && i.valueAccessors || "");
                                if (!(r = a[o])) {
                                    var s, c = "with($context){with($data||{}){return{" + h.m.vb(e, i) + "}}}";
                                    s = new Function("$context","$element",c),
                                    r = a[o] = s
                                }
                                return r(t, n)
                            } catch (u) {
                                throw u.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + u.message,
                                u
                            }
                        }
                    }),
                    h.ga.instance = new h.ga
                }(),
                h.b("bindingProvider", h.ga),
                function() {
                    function e(e) {
                        var t = (e = h.a.g.get(e, x)) && e.N;
                        t && (e.N = null,
                        t.Tc())
                    }
                    function t(t, n, i) {
                        this.node = t,
                        this.yc = n,
                        this.kb = [],
                        this.H = !1,
                        n.N || h.a.K.za(t, e),
                        i && i.N && (i.N.kb.push(t),
                        this.Kb = i)
                    }
                    function n(e) {
                        return function() {
                            return e
                        }
                    }
                    function i(e) {
                        return e()
                    }
                    function r(e) {
                        return h.a.Ga(h.u.G(e), function(t, n) {
                            return function() {
                                return e()[n]
                            }
                        })
                    }
                    function a(e, t, i) {
                        return "function" == typeof e ? r(e.bind(null, t, i)) : h.a.Ga(e, n)
                    }
                    function u(e, t) {
                        return r(this.getBindings.bind(this, e, t))
                    }
                    function p(e, t) {
                        var n = h.h.firstChild(t);
                        if (n) {
                            var i, r = h.ga.instance, a = r.preprocessNode;
                            if (a) {
                                for (; i = n; )
                                    n = h.h.nextSibling(i),
                                    a.call(r, i);
                                n = h.h.firstChild(t)
                            }
                            for (; i = n; )
                                n = h.h.nextSibling(i),
                                f(e, i)
                        }
                        h.i.ma(t, h.i.H)
                    }
                    function f(e, t) {
                        var n = e
                          , i = 1 === t.nodeType;
                        i && h.h.Sc(t),
                        (i || h.ga.instance.nodeHasBindings(t)) && (n = m(t, null, e).bindingContextForDescendants),
                        n && !w[h.a.R(t)] && p(n, t)
                    }
                    function d(e) {
                        var t = []
                          , n = {}
                          , i = [];
                        return h.a.P(e, function r(a) {
                            if (!n[a]) {
                                var o = h.getBindingHandler(a);
                                o && (o.after && (i.push(a),
                                h.a.D(o.after, function(t) {
                                    if (e[t]) {
                                        if (-1 !== h.a.A(i, t))
                                            throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                        r(t)
                                    }
                                }),
                                i.length--),
                                t.push({
                                    key: a,
                                    Mc: o
                                })),
                                n[a] = !0
                            }
                        }),
                        t
                    }
                    function m(e, t, n) {
                        var r = h.a.g.Ub(e, x, {})
                          , a = r.hd;
                        if (!t) {
                            if (a)
                                throw Error("You cannot apply bindings multiple times to the same element.");
                            r.hd = !0
                        }
                        a || (r.context = n),
                        r.Zb || (r.Zb = {});
                        var s;
                        if (t && "function" != typeof t)
                            s = t;
                        else {
                            var c = h.ga.instance
                              , l = c.getBindingAccessors || u
                              , p = h.$(function() {
                                return (s = t ? t(n, e) : l.call(c, e, n)) && (n[y] && n[y](),
                                n[b] && n[b]()),
                                s
                            }, null, {
                                l: e
                            });
                            s && p.ja() || (p = null)
                        }
                        var f, m = n;
                        if (s) {
                            var g = function() {
                                return h.a.Ga(p ? p() : s, i)
                            }
                              , v = p ? function(e) {
                                return function() {
                                    return i(p()[e])
                                }
                            }
                            : function(e) {
                                return s[e]
                            }
                            ;
                            g.get = function(e) {
                                return s[e] && i(v(e))
                            }
                            ,
                            g.has = function(e) {
                                return e in s
                            }
                            ,
                            h.i.H in s && h.i.subscribe(e, h.i.H, function() {
                                var t = (0,
                                s[h.i.H])();
                                if (t) {
                                    var n = h.h.childNodes(e);
                                    n.length && t(n, h.Ec(n[0]))
                                }
                            }),
                            h.i.pa in s && (m = h.i.Cb(e, n),
                            h.i.subscribe(e, h.i.pa, function() {
                                var t = (0,
                                s[h.i.pa])();
                                t && h.h.firstChild(e) && t(e)
                            })),
                            r = d(s),
                            h.a.D(r, function(t) {
                                var n = t.Mc.init
                                  , i = t.Mc.update
                                  , r = t.key;
                                if (8 === e.nodeType && !h.h.ea[r])
                                    throw Error("The binding '" + r + "' cannot be used with virtual elements");
                                try {
                                    "function" == typeof n && h.u.G(function() {
                                        var t = n(e, v(r), g, m.$data, m);
                                        if (t && t.controlsDescendantBindings) {
                                            if (f !== o)
                                                throw Error("Multiple bindings (" + f + " and " + r + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                            f = r
                                        }
                                    }),
                                    "function" == typeof i && h.$(function() {
                                        i(e, v(r), g, m.$data, m)
                                    }, null, {
                                        l: e
                                    })
                                } catch (a) {
                                    throw a.message = 'Unable to process binding "' + r + ": " + s[r] + '"\nMessage: ' + a.message,
                                    a
                                }
                            })
                        }
                        return r = f === o,
                        {
                            shouldBindDescendants: r,
                            bindingContextForDescendants: r && m
                        }
                    }
                    function g(e, t) {
                        return e && e instanceof h.fa ? e : new h.fa(e,o,o,t)
                    }
                    var y = h.a.Da("_subscribable")
                      , v = h.a.Da("_ancestorBindingInfo")
                      , b = h.a.Da("_dataDependency");
                    h.c = {};
                    var w = {
                        script: !0,
                        textarea: !0,
                        template: !0
                    };
                    h.getBindingHandler = function(e) {
                        return h.c[e]
                    }
                    ;
                    var _ = {};
                    h.fa = function(e, t, n, i, r) {
                        function a() {
                            var e = p ? l() : l
                              , r = h.a.f(e);
                            return t ? (h.a.extend(c, t),
                            v in t && (c[v] = t[v])) : (c.$parents = [],
                            c.$root = r,
                            c.ko = h),
                            c[y] = s,
                            u ? r = c.$data : (c.$rawData = e,
                            c.$data = r),
                            n && (c[n] = r),
                            i && i(c, t, r),
                            t && t[y] && !h.S.o().Vb(t[y]) && t[y](),
                            f && (c[b] = f),
                            c.$data
                        }
                        var s, c = this, u = e === _, l = u ? o : e, p = "function" == typeof l && !h.O(l), f = r && r.dataDependency;
                        r && r.exportDependencies ? a() : (s = h.xb(a),
                        s.v(),
                        s.ja() ? s.equalityComparer = null : c[y] = o)
                    }
                    ,
                    h.fa.prototype.createChildContext = function(e, t, n, i) {
                        if (!i && t && "object" == typeof t && (i = t,
                        t = i.as,
                        n = i.extend),
                        t && i && i.noChildContext) {
                            var r = "function" == typeof e && !h.O(e);
                            return new h.fa(_,this,null,function(i) {
                                n && n(i),
                                i[t] = r ? e() : e
                            }
                            ,i)
                        }
                        return new h.fa(e,this,t,function(e, t) {
                            e.$parentContext = t,
                            e.$parent = t.$data,
                            e.$parents = (t.$parents || []).slice(0),
                            e.$parents.unshift(e.$parent),
                            n && n(e)
                        }
                        ,i)
                    }
                    ,
                    h.fa.prototype.extend = function(e, t) {
                        return new h.fa(_,this,null,function(t) {
                            h.a.extend(t, "function" == typeof e ? e(t) : e)
                        }
                        ,t)
                    }
                    ;
                    var x = h.a.g.Z();
                    t.prototype.Tc = function() {
                        this.Kb && this.Kb.N && this.Kb.N.sd(this.node)
                    }
                    ,
                    t.prototype.sd = function(e) {
                        h.a.Pa(this.kb, e),
                        !this.kb.length && this.H && this.Cc()
                    }
                    ,
                    t.prototype.Cc = function() {
                        this.H = !0,
                        this.yc.N && !this.kb.length && (this.yc.N = null,
                        h.a.K.yb(this.node, e),
                        h.i.ma(this.node, h.i.pa),
                        this.Tc())
                    }
                    ,
                    h.i = {
                        H: "childrenComplete",
                        pa: "descendantsComplete",
                        subscribe: function(e, t, n, i, r) {
                            var a = h.a.g.Ub(e, x, {});
                            return a.Fa || (a.Fa = new h.T),
                            r && r.notifyImmediately && a.Zb[t] && h.u.G(n, i, [e]),
                            a.Fa.subscribe(n, i, t)
                        },
                        ma: function(e, t) {
                            var n = h.a.g.get(e, x);
                            if (n && (n.Zb[t] = !0,
                            n.Fa && n.Fa.notifySubscribers(e, t),
                            t == h.i.H))
                                if (n.N)
                                    n.N.Cc();
                                else if (n.N === o && n.Fa && n.Fa.Wa(h.i.pa))
                                    throw Error("descendantsComplete event not supported for bindings on this node")
                        },
                        Cb: function(e, n) {
                            var i = h.a.g.Ub(e, x, {});
                            return i.N || (i.N = new t(e,i,n[v])),
                            n[v] == i ? n : n.extend(function(e) {
                                e[v] = i
                            })
                        }
                    },
                    h.Td = function(e) {
                        return (e = h.a.g.get(e, x)) && e.context
                    }
                    ,
                    h.ib = function(e, t, n) {
                        return 1 === e.nodeType && h.h.Sc(e),
                        m(e, t, g(n))
                    }
                    ,
                    h.ld = function(e, t, n) {
                        return n = g(n),
                        h.ib(e, a(t, n, e), n)
                    }
                    ,
                    h.Oa = function(e, t) {
                        1 !== t.nodeType && 8 !== t.nodeType || p(g(e), t)
                    }
                    ,
                    h.vc = function(e, t, n) {
                        if (!l && s.jQuery && (l = s.jQuery),
                        2 > arguments.length) {
                            if (!(t = c.body))
                                throw Error("ko.applyBindings: could not find document.body; has the document been loaded?")
                        } else if (!t || 1 !== t.nodeType && 8 !== t.nodeType)
                            throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                        f(g(e, n), t)
                    }
                    ,
                    h.Dc = function(e) {
                        return !e || 1 !== e.nodeType && 8 !== e.nodeType ? o : h.Td(e)
                    }
                    ,
                    h.Ec = function(e) {
                        return (e = h.Dc(e)) ? e.$data : o
                    }
                    ,
                    h.b("bindingHandlers", h.c),
                    h.b("bindingEvent", h.i),
                    h.b("bindingEvent.subscribe", h.i.subscribe),
                    h.b("bindingEvent.startPossiblyAsyncContentBinding", h.i.Cb),
                    h.b("applyBindings", h.vc),
                    h.b("applyBindingsToDescendants", h.Oa),
                    h.b("applyBindingAccessorsToNode", h.ib),
                    h.b("applyBindingsToNode", h.ld),
                    h.b("contextFor", h.Dc),
                    h.b("dataFor", h.Ec)
                }(),
                function(e) {
                    function t(t, i) {
                        var o, s = Object.prototype.hasOwnProperty.call(r, t) ? r[t] : e;
                        s ? s.subscribe(i) : (s = r[t] = new h.T,
                        s.subscribe(i),
                        n(t, function(e, n) {
                            var i = !(!n || !n.synchronous);
                            a[t] = {
                                definition: e,
                                Gd: i
                            },
                            delete r[t],
                            o || i ? s.notifySubscribers(e) : h.na.zb(function() {
                                s.notifySubscribers(e)
                            })
                        }),
                        o = !0)
                    }
                    function n(e, t) {
                        i("getConfig", [e], function(n) {
                            n ? i("loadComponent", [e, n], function(e) {
                                t(e, n)
                            }) : t(null, null)
                        })
                    }
                    function i(t, n, r, a) {
                        a || (a = h.j.loaders.slice(0));
                        var o = a.shift();
                        if (o) {
                            var s = o[t];
                            if (s) {
                                var c = !1;
                                if (s.apply(o, n.concat(function(e) {
                                    c ? r(null) : null !== e ? r(e) : i(t, n, r, a)
                                })) !== e && (c = !0,
                                !o.suppressLoaderExceptions))
                                    throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                            } else
                                i(t, n, r, a)
                        } else
                            r(null)
                    }
                    var r = {}
                      , a = {};
                    h.j = {
                        get: function(n, i) {
                            var r = Object.prototype.hasOwnProperty.call(a, n) ? a[n] : e;
                            r ? r.Gd ? h.u.G(function() {
                                i(r.definition)
                            }) : h.na.zb(function() {
                                i(r.definition)
                            }) : t(n, i)
                        },
                        Bc: function(e) {
                            delete a[e]
                        },
                        oc: i
                    },
                    h.j.loaders = [],
                    h.b("components", h.j),
                    h.b("components.get", h.j.get),
                    h.b("components.clearCachedDefinition", h.j.Bc)
                }(),
                function() {
                    function e(e, t, n, i) {
                        function r() {
                            0 == --s && i(o)
                        }
                        var o = {}
                          , s = 2
                          , c = n.template;
                        n = n.viewModel,
                        c ? a(t, c, function(t) {
                            h.j.oc("loadTemplate", [e, t], function(e) {
                                o.template = e,
                                r()
                            })
                        }) : r(),
                        n ? a(t, n, function(t) {
                            h.j.oc("loadViewModel", [e, t], function(e) {
                                o[l] = e,
                                r()
                            })
                        }) : r()
                    }
                    function n(e, t, i) {
                        if ("function" == typeof t)
                            i(function(e) {
                                return new t(e)
                            });
                        else if ("function" == typeof t[l])
                            i(t[l]);
                        else if ("instance"in t) {
                            var r = t.instance;
                            i(function() {
                                return r
                            })
                        } else
                            "viewModel"in t ? n(e, t.viewModel, i) : e("Unknown viewModel value: " + t)
                    }
                    function i(e) {
                        switch (h.a.R(e)) {
                        case "script":
                            return h.a.ua(e.text);
                        case "textarea":
                            return h.a.ua(e.value);
                        case "template":
                            if (r(e.content))
                                return h.a.Ca(e.content.childNodes)
                        }
                        return h.a.Ca(e.childNodes)
                    }
                    function r(e) {
                        return s.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                    }
                    function a(e, n, i) {
                        "string" == typeof n.require ? t || s.require ? (t || s.require)([n.require], function(e) {
                            e && "object" == typeof e && e.Xd && e["default"] && (e = e["default"]),
                            i(e)
                        }) : e("Uses require, but no AMD loader is present") : i(n)
                    }
                    function o(e) {
                        return function(t) {
                            throw Error("Component '" + e + "': " + t)
                        }
                    }
                    var u = {};
                    h.j.register = function(e, t) {
                        if (!t)
                            throw Error("Invalid configuration for " + e);
                        if (h.j.tb(e))
                            throw Error("Component " + e + " is already registered");
                        u[e] = t
                    }
                    ,
                    h.j.tb = function(e) {
                        return Object.prototype.hasOwnProperty.call(u, e)
                    }
                    ,
                    h.j.unregister = function(e) {
                        delete u[e],
                        h.j.Bc(e)
                    }
                    ,
                    h.j.Fc = {
                        getConfig: function(e, t) {
                            t(h.j.tb(e) ? u[e] : null)
                        },
                        loadComponent: function(t, n, i) {
                            var r = o(t);
                            a(r, n, function(n) {
                                e(t, r, n, i)
                            })
                        },
                        loadTemplate: function(e, t, n) {
                            if (e = o(e),
                            "string" == typeof t)
                                n(h.a.ua(t));
                            else if (t instanceof Array)
                                n(t);
                            else if (r(t))
                                n(h.a.la(t.childNodes));
                            else if (t.element)
                                if (t = t.element,
                                s.HTMLElement ? t instanceof HTMLElement : t && t.tagName && 1 === t.nodeType)
                                    n(i(t));
                                else if ("string" == typeof t) {
                                    var a = c.getElementById(t);
                                    a ? n(i(a)) : e("Cannot find element with ID " + t)
                                } else
                                    e("Unknown element type: " + t);
                            else
                                e("Unknown template value: " + t)
                        },
                        loadViewModel: function(e, t, i) {
                            n(o(e), t, i)
                        }
                    };
                    var l = "createViewModel";
                    h.b("components.register", h.j.register),
                    h.b("components.isRegistered", h.j.tb),
                    h.b("components.unregister", h.j.unregister),
                    h.b("components.defaultLoader", h.j.Fc),
                    h.j.loaders.push(h.j.Fc),
                    h.j.dd = u
                }(),
                function() {
                    function e(e, n) {
                        var i = e.getAttribute("params");
                        if (i) {
                            var i = t.parseBindingsString(i, n, e, {
                                valueAccessors: !0,
                                bindingParams: !0
                            })
                              , i = h.a.Ga(i, function(t) {
                                return h.o(t, null, {
                                    l: e
                                })
                            })
                              , r = h.a.Ga(i, function(t) {
                                var n = t.v();
                                return t.ja() ? h.o({
                                    read: function() {
                                        return h.a.f(t())
                                    },
                                    write: h.Za(n) && function(e) {
                                        t()(e)
                                    }
                                    ,
                                    l: e
                                }) : n
                            });
                            return Object.prototype.hasOwnProperty.call(r, "$raw") || (r.$raw = i),
                            r
                        }
                        return {
                            $raw: {}
                        }
                    }
                    h.j.getComponentNameForNode = function(e) {
                        var t = h.a.R(e);
                        if (h.j.tb(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || 8 >= h.a.W && e.tagName === t))
                            return t
                    }
                    ,
                    h.j.tc = function(t, n, i, r) {
                        if (1 === n.nodeType) {
                            var a = h.j.getComponentNameForNode(n);
                            if (a) {
                                if (t = t || {},
                                t.component)
                                    throw Error('Cannot use the "component" binding on a custom element matching a component');
                                var o = {
                                    name: a,
                                    params: e(n, i)
                                };
                                t.component = r ? function() {
                                    return o
                                }
                                : o
                            }
                        }
                        return t
                    }
                    ;
                    var t = new h.ga;
                    9 > h.a.W && (h.j.register = function(e) {
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(h.j.register),
                    c.createDocumentFragment = function(e) {
                        return function() {
                            var t, n = e(), i = h.j.dd;
                            for (t in i)
                                ;
                            return n
                        }
                    }(c.createDocumentFragment))
                }(),
                function() {
                    function e(e, t, n) {
                        if (!(t = t.template))
                            throw Error("Component '" + e + "' has no template");
                        e = h.a.Ca(t),
                        h.h.va(n, e)
                    }
                    function t(e, t, n) {
                        var i = e.createViewModel;
                        return i ? i.call(e, t, n) : t
                    }
                    var n = 0;
                    h.c.component = {
                        init: function(i, r, a, o, s) {
                            function c() {
                                var e = u && u.dispose;
                                "function" == typeof e && e.call(u),
                                p && p.s(),
                                l = u = p = null
                            }
                            var u, l, p, f = h.a.la(h.h.childNodes(i));
                            return h.h.Ea(i),
                            h.a.K.za(i, c),
                            h.o(function() {
                                var a, o, d = h.a.f(r());
                                if ("string" == typeof d ? a = d : (a = h.a.f(d.name),
                                o = h.a.f(d.params)),
                                !a)
                                    throw Error("No component name specified");
                                var m = h.i.Cb(i, s)
                                  , g = l = ++n;
                                h.j.get(a, function(n) {
                                    if (l === g) {
                                        if (c(),
                                        !n)
                                            throw Error("Unknown component '" + a + "'");
                                        e(a, n, i);
                                        var r = t(n, o, {
                                            element: i,
                                            templateNodes: f
                                        });
                                        n = m.createChildContext(r, {
                                            extend: function(e) {
                                                e.$component = r,
                                                e.$componentTemplateNodes = f
                                            }
                                        }),
                                        r && r.koDescendantsComplete && (p = h.i.subscribe(i, h.i.pa, r.koDescendantsComplete, r)),
                                        u = r,
                                        h.Oa(n, i)
                                    }
                                })
                            }, null, {
                                l: i
                            }),
                            {
                                controlsDescendantBindings: !0
                            }
                        }
                    },
                    h.h.ea.component = !0
                }();
                var S = {
                    "class": "className",
                    "for": "htmlFor"
                };
                h.c.attr = {
                    update: function(e, t) {
                        var n = h.a.f(t()) || {};
                        h.a.P(n, function(t, n) {
                            n = h.a.f(n);
                            var i = t.indexOf(":")
                              , i = "lookupNamespaceURI"in e && 0 < i && e.lookupNamespaceURI(t.substr(0, i))
                              , r = !1 === n || null === n || n === o;
                            r ? i ? e.removeAttributeNS(i, t) : e.removeAttribute(t) : n = n.toString(),
                            8 >= h.a.W && t in S ? (t = S[t],
                            r ? e.removeAttribute(t) : e[t] = n) : r || (i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)),
                            "name" === t && h.a.Yc(e, r ? "" : n)
                        })
                    }
                },
                function() {
                    h.c.checked = {
                        after: ["value", "attr"],
                        init: function(e, t, n) {
                            function i() {
                                var i = e.checked
                                  , r = a();
                                if (!h.S.Ya() && (i || !c && !h.S.qa())) {
                                    var u = h.u.G(t);
                                    if (l) {
                                        var f = p ? u.v() : u
                                          , m = d;
                                        d = r,
                                        m !== r ? i && (h.a.Na(f, r, !0),
                                        h.a.Na(f, m, !1)) : h.a.Na(f, r, i),
                                        p && h.Za(u) && u(f)
                                    } else
                                        s && (r === o ? r = i : i || (r = o)),
                                        h.m.eb(u, n, "checked", r, !0)
                                }
                            }
                            function r() {
                                var n = h.a.f(t())
                                  , i = a();
                                l ? (e.checked = 0 <= h.a.A(n, i),
                                d = i) : e.checked = s && i === o ? !!n : a() === n
                            }
                            var a = h.xb(function() {
                                return n.has("checkedValue") ? h.a.f(n.get("checkedValue")) : f ? n.has("value") ? h.a.f(n.get("value")) : e.value : void 0
                            })
                              , s = "checkbox" == e.type
                              , c = "radio" == e.type;
                            if (s || c) {
                                var u = t()
                                  , l = s && h.a.f(u)instanceof Array
                                  , p = !(l && u.push && u.splice)
                                  , f = c || l
                                  , d = l ? a() : o;
                                c && !e.name && h.c.uniqueName.init(e, function() {
                                    return !0
                                }),
                                h.o(i, null, {
                                    l: e
                                }),
                                h.a.B(e, "click", i),
                                h.o(r, null, {
                                    l: e
                                }),
                                u = o
                            }
                        }
                    },
                    h.m.wa.checked = !0,
                    h.c.checkedValue = {
                        update: function(e, t) {
                            e.value = h.a.f(t())
                        }
                    }
                }(),
                h.c["class"] = {
                    update: function(e, t) {
                        var n = h.a.Db(h.a.f(t()));
                        h.a.Eb(e, e.__ko__cssValue, !1),
                        e.__ko__cssValue = n,
                        h.a.Eb(e, n, !0)
                    }
                },
                h.c.css = {
                    update: function(e, t) {
                        var n = h.a.f(t());
                        null !== n && "object" == typeof n ? h.a.P(n, function(t, n) {
                            n = h.a.f(n),
                            h.a.Eb(e, t, n)
                        }) : h.c["class"].update(e, t)
                    }
                },
                h.c.enable = {
                    update: function(e, t) {
                        var n = h.a.f(t());
                        n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled = !0)
                    }
                },
                h.c.disable = {
                    update: function(e, t) {
                        h.c.enable.update(e, function() {
                            return !h.a.f(t())
                        })
                    }
                },
                h.c.event = {
                    init: function(e, t, n, i, r) {
                        var a = t() || {};
                        h.a.P(a, function(a) {
                            "string" == typeof a && h.a.B(e, a, function(e) {
                                var o, s = t()[a];
                                if (s) {
                                    try {
                                        var c = h.a.la(arguments);
                                        i = r.$data,
                                        c.unshift(i),
                                        o = s.apply(i, c)
                                    } finally {
                                        !0 !== o && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                    }
                                    !1 === n.get(a + "Bubble") && (e.cancelBubble = !0,
                                    e.stopPropagation && e.stopPropagation())
                                }
                            })
                        })
                    }
                },
                h.c.foreach = {
                    Rc: function(e) {
                        return function() {
                            var t = e()
                              , n = h.a.bc(t);
                            return n && "number" != typeof n.length ? (h.a.f(t),
                            {
                                foreach: n.data,
                                as: n.as,
                                noChildContext: n.noChildContext,
                                includeDestroyed: n.includeDestroyed,
                                afterAdd: n.afterAdd,
                                beforeRemove: n.beforeRemove,
                                afterRender: n.afterRender,
                                beforeMove: n.beforeMove,
                                afterMove: n.afterMove,
                                templateEngine: h.ba.Ma
                            }) : {
                                foreach: t,
                                templateEngine: h.ba.Ma
                            }
                        }
                    },
                    init: function(e, t) {
                        return h.c.template.init(e, h.c.foreach.Rc(t))
                    },
                    update: function(e, t, n, i, r) {
                        return h.c.template.update(e, h.c.foreach.Rc(t), n, i, r)
                    }
                },
                h.m.Ra.foreach = !1,
                h.h.ea.foreach = !0,
                h.c.hasfocus = {
                    init: function(e, t, n) {
                        function i(i) {
                            e.__ko_hasfocusUpdating = !0;
                            var r = e.ownerDocument;
                            if ("activeElement"in r) {
                                var a;
                                try {
                                    a = r.activeElement
                                } catch (o) {
                                    a = r.body
                                }
                                i = a === e
                            }
                            r = t(),
                            h.m.eb(r, n, "hasfocus", i, !0),
                            e.__ko_hasfocusLastValue = i,
                            e.__ko_hasfocusUpdating = !1
                        }
                        var r = i.bind(null, !0)
                          , a = i.bind(null, !1);
                        h.a.B(e, "focus", r),
                        h.a.B(e, "focusin", r),
                        h.a.B(e, "blur", a),
                        h.a.B(e, "focusout", a),
                        e.__ko_hasfocusLastValue = !1
                    },
                    update: function(e, t) {
                        var n = !!h.a.f(t());
                        e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(),
                        !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(),
                        h.u.G(h.a.Fb, null, [e, n ? "focusin" : "focusout"]))
                    }
                },
                h.m.wa.hasfocus = !0,
                h.c.hasFocus = h.c.hasfocus,
                h.m.wa.hasFocus = "hasfocus",
                h.c.html = {
                    init: function() {
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(e, t) {
                        h.a.fc(e, t())
                    }
                },
                function() {
                    function e(e, t, n) {
                        h.c[e] = {
                            init: function(e, i, r, a, o) {
                                var s, c, u, l, p, f = {};
                                if (t) {
                                    a = r.get("as");
                                    var d = r.get("noChildContext");
                                    p = !(a && d),
                                    f = {
                                        as: a,
                                        noChildContext: d,
                                        exportDependencies: p
                                    }
                                }
                                return l = (u = "render" == r.get("completeOn")) || r.has(h.i.pa),
                                h.o(function() {
                                    var r, a = h.a.f(i()), d = !n != !a, m = !c;
                                    (p || d !== s) && (l && (o = h.i.Cb(e, o)),
                                    d && (t && !p || (f.dataDependency = h.S.o()),
                                    r = t ? o.createChildContext("function" == typeof a ? a : i, f) : h.S.qa() ? o.extend(null, f) : o),
                                    m && h.S.qa() && (c = h.a.Ca(h.h.childNodes(e), !0)),
                                    d ? (m || h.h.va(e, h.a.Ca(c)),
                                    h.Oa(r, e)) : (h.h.Ea(e),
                                    u || h.i.ma(e, h.i.H)),
                                    s = d)
                                }, null, {
                                    l: e
                                }),
                                {
                                    controlsDescendantBindings: !0
                                }
                            }
                        },
                        h.m.Ra[e] = !1,
                        h.h.ea[e] = !0
                    }
                    e("if"),
                    e("ifnot", !1, !0),
                    e("with", !0)
                }(),
                h.c["let"] = {
                    init: function(e, t, n, i, r) {
                        return t = r.extend(t),
                        h.Oa(t, e),
                        {
                            controlsDescendantBindings: !0
                        }
                    }
                },
                h.h.ea["let"] = !0;
                var C = {};
                h.c.options = {
                    init: function(e) {
                        if ("select" !== h.a.R(e))
                            throw Error("options binding applies only to SELECT elements");
                        for (; 0 < e.length; )
                            e.remove(0);
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(e, t, n) {
                        function i() {
                            return h.a.jb(e.options, function(e) {
                                return e.selected
                            })
                        }
                        function r(e, t, n) {
                            var i = typeof t;
                            return "function" == i ? t(e) : "string" == i ? e[t] : n
                        }
                        function a(t, n) {
                            if (m && l)
                                h.i.ma(e, h.i.H);
                            else if (d.length) {
                                var i = 0 <= h.a.A(d, h.w.M(n[0]));
                                h.a.Zc(n[0], i),
                                m && !i && h.u.G(h.a.Fb, null, [e, "change"])
                            }
                        }
                        var s = e.multiple
                          , c = 0 != e.length && s ? e.scrollTop : null
                          , u = h.a.f(t())
                          , l = n.get("valueAllowUnset") && n.has("value")
                          , p = n.get("optionsIncludeDestroyed");
                        t = {};
                        var f, d = [];
                        l || (s ? d = h.a.Mb(i(), h.w.M) : 0 <= e.selectedIndex && d.push(h.w.M(e.options[e.selectedIndex]))),
                        u && ("undefined" == typeof u.length && (u = [u]),
                        f = h.a.jb(u, function(e) {
                            return p || e === o || null === e || !h.a.f(e._destroy)
                        }),
                        n.has("optionsCaption") && null !== (u = h.a.f(n.get("optionsCaption"))) && u !== o && f.unshift(C));
                        var m = !1;
                        if (t.beforeRemove = function(t) {
                            e.removeChild(t)
                        }
                        ,
                        u = a,
                        n.has("optionsAfterRender") && "function" == typeof n.get("optionsAfterRender") && (u = function(e, t) {
                            a(0, t),
                            h.u.G(n.get("optionsAfterRender"), null, [t[0], e !== C ? e : o])
                        }
                        ),
                        h.a.ec(e, f, function(t, i, a) {
                            return a.length && (d = !l && a[0].selected ? [h.w.M(a[0])] : [],
                            m = !0),
                            i = e.ownerDocument.createElement("option"),
                            t === C ? (h.a.Bb(i, n.get("optionsCaption")),
                            h.w.cb(i, o)) : (a = r(t, n.get("optionsValue"), t),
                            h.w.cb(i, h.a.f(a)),
                            t = r(t, n.get("optionsText"), a),
                            h.a.Bb(i, t)),
                            [i]
                        }, t, u),
                        !l) {
                            var g;
                            g = s ? d.length && i().length < d.length : d.length && 0 <= e.selectedIndex ? h.w.M(e.options[e.selectedIndex]) !== d[0] : d.length || 0 <= e.selectedIndex,
                            g && h.u.G(h.a.Fb, null, [e, "change"])
                        }
                        (l || h.S.Ya()) && h.i.ma(e, h.i.H),
                        h.a.wd(e),
                        c && 20 < Math.abs(c - e.scrollTop) && (e.scrollTop = c)
                    }
                },
                h.c.options.$b = h.a.g.Z(),
                h.c.selectedOptions = {
                    init: function(e, t, n) {
                        function i() {
                            var i = t()
                              , r = [];
                            h.a.D(e.getElementsByTagName("option"), function(e) {
                                e.selected && r.push(h.w.M(e))
                            }),
                            h.m.eb(i, n, "selectedOptions", r)
                        }
                        function r() {
                            var n = h.a.f(t())
                              , i = e.scrollTop;
                            n && "number" == typeof n.length && h.a.D(e.getElementsByTagName("option"), function(e) {
                                var t = 0 <= h.a.A(n, h.w.M(e));
                                e.selected != t && h.a.Zc(e, t)
                            }),
                            e.scrollTop = i
                        }
                        if ("select" != h.a.R(e))
                            throw Error("selectedOptions binding applies only to SELECT elements");
                        var a;
                        h.i.subscribe(e, h.i.H, function() {
                            a ? i() : (h.a.B(e, "change", i),
                            a = h.o(r, null, {
                                l: e
                            }))
                        }, null, {
                            notifyImmediately: !0
                        })
                    },
                    update: function() {}
                },
                h.m.wa.selectedOptions = !0,
                h.c.style = {
                    update: function(e, t) {
                        var n = h.a.f(t() || {});
                        h.a.P(n, function(t, n) {
                            if (n = h.a.f(n),
                            null !== n && n !== o && !1 !== n || (n = ""),
                            l)
                                l(e).css(t, n);
                            else if (/^--/.test(t))
                                e.style.setProperty(t, n);
                            else {
                                t = t.replace(/-(\w)/g, function(e, t) {
                                    return t.toUpperCase()
                                });
                                var i = e.style[t];
                                e.style[t] = n,
                                n === i || e.style[t] != i || isNaN(n) || (e.style[t] = n + "px")
                            }
                        })
                    }
                },
                h.c.submit = {
                    init: function(e, t, n, i, r) {
                        if ("function" != typeof t())
                            throw Error("The value for a submit binding must be a function");
                        h.a.B(e, "submit", function(n) {
                            var i, a = t();
                            try {
                                i = a.call(r.$data, e)
                            } finally {
                                !0 !== i && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                            }
                        })
                    }
                },
                h.c.text = {
                    init: function() {
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(e, t) {
                        h.a.Bb(e, t())
                    }
                },
                h.h.ea.text = !0,
                function() {
                    if (s && s.navigator) {
                        var e, t, n, i, r, a = function(e) {
                            if (e)
                                return parseFloat(e[1])
                        }, c = s.navigator.userAgent;
                        (e = s.opera && s.opera.version && parseInt(s.opera.version())) || (r = a(c.match(/Edge\/([^ ]+)$/))) || a(c.match(/Chrome\/([^ ]+)/)) || (t = a(c.match(/Version\/([^ ]+) Safari/))) || (n = a(c.match(/Firefox\/([^ ]+)/))) || (i = h.a.W || a(c.match(/MSIE ([^ ]+)/))) || (i = a(c.match(/rv:([^ )]+)/)))
                    }
                    if (8 <= i && 10 > i)
                        var u = h.a.g.Z()
                          , l = h.a.g.Z()
                          , p = function(e) {
                            var t = this.activeElement;
                            (t = t && h.a.g.get(t, l)) && t(e)
                        }
                          , f = function(e, t) {
                            var n = e.ownerDocument;
                            h.a.g.get(n, u) || (h.a.g.set(n, u, !0),
                            h.a.B(n, "selectionchange", p)),
                            h.a.g.set(e, l, t)
                        };
                    h.c.textInput = {
                        init: function(a, s, c) {
                            function u(e, t) {
                                h.a.B(a, e, t)
                            }
                            function l() {
                                var e = h.a.f(s());
                                null !== e && e !== o || (e = ""),
                                g !== o && e === g ? h.a.setTimeout(l, 4) : a.value !== e && (b = !0,
                                a.value = e,
                                b = !1,
                                y = a.value)
                            }
                            function p() {
                                m || (g = a.value,
                                m = h.a.setTimeout(d, 4))
                            }
                            function d() {
                                clearTimeout(m),
                                g = m = o;
                                var e = a.value;
                                y !== e && (y = e,
                                h.m.eb(s(), c, "textInput", e))
                            }
                            var m, g, y = a.value, v = 9 == h.a.W ? p : d, b = !1;
                            i && u("keypress", d),
                            11 > i && u("propertychange", function(e) {
                                b || "value" !== e.propertyName || v(e)
                            }),
                            8 == i && (u("keyup", d),
                            u("keydown", d)),
                            f && (f(a, v),
                            u("dragend", p)),
                            (!i || 9 <= i) && u("input", v),
                            5 > t && "textarea" === h.a.R(a) ? (u("keydown", p),
                            u("paste", p),
                            u("cut", p)) : 11 > e ? u("keydown", p) : 4 > n ? (u("DOMAutoComplete", d),
                            u("dragdrop", d),
                            u("drop", d)) : r && "number" === a.type && u("keydown", p),
                            u("change", d),
                            u("blur", d),
                            h.o(l, null, {
                                l: a
                            })
                        }
                    },
                    h.m.wa.textInput = !0,
                    h.c.textinput = {
                        preprocess: function(e, t, n) {
                            n("textInput", e)
                        }
                    }
                }(),
                h.c.uniqueName = {
                    init: function(e, t) {
                        if (t()) {
                            var n = "ko_unique_" + ++h.c.uniqueName.rd;
                            h.a.Yc(e, n)
                        }
                    }
                },
                h.c.uniqueName.rd = 0,
                h.c.using = {
                    init: function(e, t, n, i, r) {
                        var a;
                        return n.has("as") && (a = {
                            as: n.get("as"),
                            noChildContext: n.get("noChildContext")
                        }),
                        t = r.createChildContext(t, a),
                        h.Oa(t, e),
                        {
                            controlsDescendantBindings: !0
                        }
                    }
                },
                h.h.ea.using = !0,
                h.c.value = {
                    init: function(e, t, n) {
                        var i = h.a.R(e)
                          , r = "input" == i;
                        if (!r || "checkbox" != e.type && "radio" != e.type) {
                            var a = []
                              , s = n.get("valueUpdate")
                              , c = !1
                              , u = null;
                            s && (a = "string" == typeof s ? [s] : h.a.wc(s),
                            h.a.Pa(a, "change"));
                            var l = function() {
                                u = null,
                                c = !1;
                                var i = t()
                                  , r = h.w.M(e);
                                h.m.eb(i, n, "value", r)
                            };
                            !h.a.W || !r || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != h.a.A(a, "propertychange") || (h.a.B(e, "propertychange", function() {
                                c = !0
                            }),
                            h.a.B(e, "focus", function() {
                                c = !1
                            }),
                            h.a.B(e, "blur", function() {
                                c && l()
                            })),
                            h.a.D(a, function(t) {
                                var n = l;
                                h.a.Ud(t, "after") && (n = function() {
                                    u = h.w.M(e),
                                    h.a.setTimeout(l, 0)
                                }
                                ,
                                t = t.substring(5)),
                                h.a.B(e, t, n)
                            });
                            var p;
                            if (p = r && "file" == e.type ? function() {
                                var n = h.a.f(t());
                                null === n || n === o || "" === n ? e.value = "" : h.u.G(l)
                            }
                            : function() {
                                var r = h.a.f(t())
                                  , a = h.w.M(e);
                                null !== u && r === u ? h.a.setTimeout(p, 0) : r === a && a !== o || ("select" === i ? (a = n.get("valueAllowUnset"),
                                h.w.cb(e, r, a),
                                a || r === h.w.M(e) || h.u.G(l)) : h.w.cb(e, r))
                            }
                            ,
                            "select" === i) {
                                var f;
                                h.i.subscribe(e, h.i.H, function() {
                                    f ? n.get("valueAllowUnset") ? p() : l() : (h.a.B(e, "change", l),
                                    f = h.o(p, null, {
                                        l: e
                                    }))
                                }, null, {
                                    notifyImmediately: !0
                                })
                            } else
                                h.a.B(e, "change", l),
                                h.o(p, null, {
                                    l: e
                                })
                        } else
                            h.ib(e, {
                                checkedValue: t
                            })
                    },
                    update: function() {}
                },
                h.m.wa.value = !0,
                h.c.visible = {
                    update: function(e, t) {
                        var n = h.a.f(t())
                          , i = "none" != e.style.display;
                        n && !i ? e.style.display = "" : !n && i && (e.style.display = "none")
                    }
                },
                h.c.hidden = {
                    update: function(e, t) {
                        h.c.visible.update(e, function() {
                            return !h.a.f(t())
                        })
                    }
                },
                function(e) {
                    h.c[e] = {
                        init: function(t, n, i, r, a) {
                            return h.c.event.init.call(this, t, function() {
                                var t = {};
                                return t[e] = n(),
                                t
                            }, i, r, a)
                        }
                    }
                }("click"),
                h.ca = function() {}
                ,
                h.ca.prototype.renderTemplateSource = function() {
                    throw Error("Override renderTemplateSource")
                }
                ,
                h.ca.prototype.createJavaScriptEvaluatorBlock = function() {
                    throw Error("Override createJavaScriptEvaluatorBlock")
                }
                ,
                h.ca.prototype.makeTemplateSource = function(e, t) {
                    if ("string" == typeof e) {
                        t = t || c;
                        var n = t.getElementById(e);
                        if (!n)
                            throw Error("Cannot find template with ID " + e);
                        return new h.C.F(n)
                    }
                    if (1 == e.nodeType || 8 == e.nodeType)
                        return new h.C.ia(e);
                    throw Error("Unknown template type: " + e)
                }
                ,
                h.ca.prototype.renderTemplate = function(e, t, n, i) {
                    return e = this.makeTemplateSource(e, i),
                    this.renderTemplateSource(e, t, n, i)
                }
                ,
                h.ca.prototype.isTemplateRewritten = function(e, t) {
                    return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten")
                }
                ,
                h.ca.prototype.rewriteTemplate = function(e, t, n) {
                    e = this.makeTemplateSource(e, n),
                    t = t(e.text()),
                    e.text(t),
                    e.data("isRewritten", !0)
                }
                ,
                h.b("templateEngine", h.ca),
                h.kc = function() {
                    function e(e, t, n, i) {
                        e = h.m.ac(e);
                        for (var r = h.m.Ra, a = 0; a < e.length; a++) {
                            var o = e[a].key;
                            if (Object.prototype.hasOwnProperty.call(r, o)) {
                                var s = r[o];
                                if ("function" == typeof s) {
                                    if (o = s(e[a].value))
                                        throw Error(o)
                                } else if (!s)
                                    throw Error("This template engine does not support the '" + o + "' binding within its templates")
                            }
                        }
                        return n = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + h.m.vb(e, {
                            valueAccessors: !0
                        }) + " } })()},'" + n.toLowerCase() + "')",
                        i.createJavaScriptEvaluatorBlock(n) + t
                    }
                    var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                      , n = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                    return {
                        xd: function(e, t, n) {
                            t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                                return h.kc.Ld(e, t)
                            }, n)
                        },
                        Ld: function(i, r) {
                            return i.replace(t, function(t, n, i, a, o) {
                                return e(o, n, i, r)
                            }).replace(n, function(t, n) {
                                return e(n, "\x3c!-- ko --\x3e", "#comment", r)
                            })
                        },
                        md: function(e, t) {
                            return h.aa.Xb(function(n, i) {
                                var r = n.nextSibling;
                                r && r.nodeName.toLowerCase() === t && h.ib(r, e, i)
                            })
                        }
                    }
                }(),
                h.b("__tr_ambtns", h.kc.md),
                function() {
                    h.C = {},
                    h.C.F = function(e) {
                        if (this.F = e) {
                            var t = h.a.R(e);
                            this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4
                        }
                    }
                    ,
                    h.C.F.prototype.text = function() {
                        var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                        if (0 == arguments.length)
                            return this.F[e];
                        var t = arguments[0];
                        "innerHTML" === e ? h.a.fc(this.F, t) : this.F[e] = t
                    }
                    ;
                    var e = h.a.g.Z() + "_";
                    h.C.F.prototype.data = function(t) {
                        if (1 === arguments.length)
                            return h.a.g.get(this.F, e + t);
                        h.a.g.set(this.F, e + t, arguments[1])
                    }
                    ;
                    var t = h.a.g.Z();
                    h.C.F.prototype.nodes = function() {
                        var e = this.F;
                        if (0 == arguments.length) {
                            var n = h.a.g.get(e, t) || {}
                              , i = n.lb || (3 === this.ab ? e.content : 4 === this.ab ? e : o);
                            if (!i || n.jd) {
                                var r = this.text();
                                r && r !== n.bb && (i = h.a.Md(r, e.ownerDocument),
                                h.a.g.set(e, t, {
                                    lb: i,
                                    bb: r,
                                    jd: !0
                                }))
                            }
                            return i
                        }
                        n = arguments[0],
                        this.ab !== o && this.text(""),
                        h.a.g.set(e, t, {
                            lb: n
                        })
                    }
                    ,
                    h.C.ia = function(e) {
                        this.F = e
                    }
                    ,
                    h.C.ia.prototype = new h.C.F,
                    h.C.ia.prototype.constructor = h.C.ia,
                    h.C.ia.prototype.text = function() {
                        if (0 == arguments.length) {
                            var e = h.a.g.get(this.F, t) || {};
                            return e.bb === o && e.lb && (e.bb = e.lb.innerHTML),
                            e.bb
                        }
                        h.a.g.set(this.F, t, {
                            bb: arguments[0]
                        })
                    }
                    ,
                    h.b("templateSources", h.C),
                    h.b("templateSources.domElement", h.C.F),
                    h.b("templateSources.anonymousTemplate", h.C.ia)
                }(),
                function() {
                    function e(e, t, n) {
                        var i;
                        for (t = h.h.nextSibling(t); e && (i = e) !== t; )
                            e = h.h.nextSibling(i),
                            n(i, e)
                    }
                    function t(t, n) {
                        if (t.length) {
                            var i = t[0]
                              , r = t[t.length - 1]
                              , a = i.parentNode
                              , o = h.ga.instance
                              , s = o.preprocessNode;
                            if (s) {
                                if (e(i, r, function(e, t) {
                                    var n = e.previousSibling
                                      , a = s.call(o, e);
                                    a && (e === i && (i = a[0] || t),
                                    e === r && (r = a[a.length - 1] || n))
                                }),
                                t.length = 0,
                                !i)
                                    return;
                                i === r ? t.push(i) : (t.push(i, r),
                                h.a.Ua(t, a))
                            }
                            e(i, r, function(e) {
                                1 !== e.nodeType && 8 !== e.nodeType || h.vc(n, e)
                            }),
                            e(i, r, function(e) {
                                1 !== e.nodeType && 8 !== e.nodeType || h.aa.cd(e, [n])
                            }),
                            h.a.Ua(t, a)
                        }
                    }
                    function n(e) {
                        return e.nodeType ? e : 0 < e.length ? e[0] : null
                    }
                    function i(e, i, r, o, s) {
                        s = s || {};
                        var c = (e && n(e) || r || {}).ownerDocument
                          , u = s.templateEngine || a;
                        if (h.kc.xd(r, u, c),
                        r = u.renderTemplate(r, o, s, c),
                        "number" != typeof r.length || 0 < r.length && "number" != typeof r[0].nodeType)
                            throw Error("Template engine must return an array of DOM nodes");
                        switch (c = !1,
                        i) {
                        case "replaceChildren":
                            h.h.va(e, r),
                            c = !0;
                            break;
                        case "replaceNode":
                            h.a.Xc(e, r),
                            c = !0;
                            break;
                        case "ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " + i)
                        }
                        return c && (t(r, o),
                        s.afterRender && h.u.G(s.afterRender, null, [r, o[s.as || "$data"]]),
                        "replaceChildren" == i && h.i.ma(e, h.i.H)),
                        r
                    }
                    function r(e, t, n) {
                        return h.O(e) ? e() : "function" == typeof e ? e(t, n) : e
                    }
                    var a;
                    h.gc = function(e) {
                        if (e != o && !(e instanceof h.ca))
                            throw Error("templateEngine must inherit from ko.templateEngine");
                        a = e
                    }
                    ,
                    h.dc = function(e, t, s, c, u) {
                        if (s = s || {},
                        (s.templateEngine || a) == o)
                            throw Error("Set a template engine before calling renderTemplate");
                        if (u = u || "replaceChildren",
                        c) {
                            var l = n(c);
                            return h.$(function() {
                                var a = t && t instanceof h.fa ? t : new h.fa(t,null,null,null,{
                                    exportDependencies: !0
                                })
                                  , o = r(e, a.$data, a)
                                  , a = i(c, u, o, a, s);
                                "replaceNode" == u && (c = a,
                                l = n(c))
                            }, null, {
                                Sa: function() {
                                    return !l || !h.a.Sb(l)
                                },
                                l: l && "replaceNode" == u ? l.parentNode : l
                            })
                        }
                        return h.aa.Xb(function(n) {
                            h.dc(e, t, s, n, "replaceNode")
                        })
                    }
                    ,
                    h.Qd = function(e, n, a, s, c) {
                        function u(e, t) {
                            h.u.G(h.a.ec, null, [s, e, p, a, l, t]),
                            h.i.ma(s, h.i.H)
                        }
                        function l(e, n) {
                            t(n, f),
                            a.afterRender && a.afterRender(n, e),
                            f = null
                        }
                        function p(t, n) {
                            f = c.createChildContext(t, {
                                as: d,
                                noChildContext: a.noChildContext,
                                extend: function(e) {
                                    e.$index = n,
                                    d && (e[d + "Index"] = n)
                                }
                            });
                            var o = r(e, t, f);
                            return i(s, "ignoreTargetNode", o, f, a)
                        }
                        var f, d = a.as, m = !1 === a.includeDestroyed || h.options.foreachHidesDestroyed && !a.includeDestroyed;
                        if (m || a.beforeRemove || !h.Pc(n))
                            return h.$(function() {
                                var e = h.a.f(n) || [];
                                "undefined" == typeof e.length && (e = [e]),
                                m && (e = h.a.jb(e, function(e) {
                                    return e === o || null === e || !h.a.f(e._destroy)
                                })),
                                u(e)
                            }, null, {
                                l: s
                            });
                        u(n.v());
                        var g = n.subscribe(function(e) {
                            u(n(), e)
                        }, null, "arrayChange");
                        return g.l(s),
                        g
                    }
                    ;
                    var s = h.a.g.Z()
                      , c = h.a.g.Z();
                    h.c.template = {
                        init: function(e, t) {
                            var n = h.a.f(t());
                            if ("string" == typeof n || "name"in n)
                                h.h.Ea(e);
                            else if ("nodes"in n) {
                                if (n = n.nodes || [],
                                h.O(n))
                                    throw Error('The "nodes" option must be a plain, non-observable array.');
                                var i = n[0] && n[0].parentNode;
                                i && h.a.g.get(i, c) || (i = h.a.Yb(n),
                                h.a.g.set(i, c, !0)),
                                new h.C.ia(e).nodes(i)
                            } else {
                                if (n = h.h.childNodes(e),
                                !(0 < n.length))
                                    throw Error("Anonymous template defined, but no template content was provided");
                                i = h.a.Yb(n),
                                new h.C.ia(e).nodes(i)
                            }
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t, n, i, r) {
                            var a = t();
                            t = h.a.f(a),
                            n = !0,
                            i = null,
                            "string" == typeof t ? t = {} : (a = "name"in t ? t.name : e,
                            "if"in t && (n = h.a.f(t["if"])),
                            n && "ifnot"in t && (n = !h.a.f(t.ifnot)),
                            n && !a && (n = !1)),
                            "foreach"in t ? i = h.Qd(a, n && t.foreach || [], t, e, r) : n ? (n = r,
                            "data"in t && (n = r.createChildContext(t.data, {
                                as: t.as,
                                noChildContext: t.noChildContext,
                                exportDependencies: !0
                            })),
                            i = h.dc(a, n, t, e)) : h.h.Ea(e),
                            r = i,
                            (t = h.a.g.get(e, s)) && "function" == typeof t.s && t.s(),
                            h.a.g.set(e, s, !r || r.ja && !r.ja() ? o : r)
                        }
                    },
                    h.m.Ra.template = function(e) {
                        return e = h.m.ac(e),
                        1 == e.length && e[0].unknown || h.m.Id(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                    }
                    ,
                    h.h.ea.template = !0
                }(),
                h.b("setTemplateEngine", h.gc),
                h.b("renderTemplate", h.dc),
                h.a.Kc = function(e, t, n) {
                    if (e.length && t.length) {
                        var i, r, a, o, s;
                        for (i = r = 0; (!n || i < n) && (o = e[r]); ++r) {
                            for (a = 0; s = t[a]; ++a)
                                if (o.value === s.value) {
                                    o.moved = s.index,
                                    s.moved = o.index,
                                    t.splice(a, 1),
                                    i = a = 0;
                                    break
                                }
                            i += a
                        }
                    }
                }
                ,
                h.a.Pb = function() {
                    function e(e, t, n, i, r) {
                        var a, o, s, c, u, l = Math.min, p = Math.max, f = [], d = e.length, m = t.length, g = m - d || 1, y = d + m + 1;
                        for (a = 0; a <= d; a++)
                            for (c = s,
                            f.push(s = []),
                            u = l(m, a + g),
                            o = p(0, a - 1); o <= u; o++)
                                s[o] = o ? a ? e[a - 1] === t[o - 1] ? c[o - 1] : l(c[o] || y, s[o - 1] || y) + 1 : o + 1 : a + 1;
                        for (l = [],
                        p = [],
                        g = [],
                        a = d,
                        o = m; a || o; )
                            m = f[a][o] - 1,
                            o && m === f[a][o - 1] ? p.push(l[l.length] = {
                                status: n,
                                value: t[--o],
                                index: o
                            }) : a && m === f[a - 1][o] ? g.push(l[l.length] = {
                                status: i,
                                value: e[--a],
                                index: a
                            }) : (--o,
                            --a,
                            r.sparse || l.push({
                                status: "retained",
                                value: t[o]
                            }));
                        return h.a.Kc(g, p, !r.dontLimitMoves && 10 * d),
                        l.reverse()
                    }
                    return function(t, n, i) {
                        return i = "boolean" == typeof i ? {
                            dontLimitMoves: i
                        } : i || {},
                        t = t || [],
                        n = n || [],
                        t.length < n.length ? e(t, n, "added", "deleted", i) : e(n, t, "deleted", "added", i)
                    }
                }(),
                h.b("utils.compareArrays", h.a.Pb),
                function() {
                    function e(e, t, n, i, r) {
                        var a = []
                          , s = h.$(function() {
                            var o = t(n, r, h.a.Ua(a, e)) || [];
                            0 < a.length && (h.a.Xc(a, o),
                            i && h.u.G(i, null, [n, o, r])),
                            a.length = 0,
                            h.a.Nb(a, o)
                        }, null, {
                            l: e,
                            Sa: function() {
                                return !h.a.kd(a)
                            }
                        });
                        return {
                            Y: a,
                            $: s.ja() ? s : o
                        }
                    }
                    var t = h.a.g.Z()
                      , n = h.a.g.Z();
                    h.a.ec = function(i, r, a, s, c, u) {
                        function l(e) {
                            d = {
                                Aa: e,
                                pb: h.ta(b++)
                            },
                            y.push(d),
                            g || k.push(d)
                        }
                        function p(e) {
                            d = m[e],
                            b !== d.pb.v() && T.push(d),
                            d.pb(b++),
                            h.a.Ua(d.Y, i),
                            y.push(d)
                        }
                        function f(e, t) {
                            if (e)
                                for (var n = 0, i = t.length; n < i; n++)
                                    h.a.D(t[n].Y, function(i) {
                                        e(i, n, t[n].Aa)
                                    })
                        }
                        r = r || [],
                        "undefined" == typeof r.length && (r = [r]),
                        s = s || {};
                        var d, m = h.a.g.get(i, t), g = !m, y = [], v = 0, b = 0, w = [], _ = [], x = [], T = [], k = [], S = 0;
                        if (g)
                            h.a.D(r, l);
                        else {
                            if (!u || m && m._countWaitingForRemove) {
                                var C = h.a.Mb(m, function(e) {
                                    return e.Aa
                                });
                                u = h.a.Pb(C, r, {
                                    dontLimitMoves: s.dontLimitMoves,
                                    sparse: !0
                                })
                            }
                            for (var E, N, D, C = 0; E = u[C]; C++)
                                switch (N = E.moved,
                                D = E.index,
                                E.status) {
                                case "deleted":
                                    for (; v < D; )
                                        p(v++);
                                    N === o && (d = m[v],
                                    d.$ && (d.$.s(),
                                    d.$ = o),
                                    h.a.Ua(d.Y, i).length && (s.beforeRemove && (y.push(d),
                                    S++,
                                    d.Aa === n ? d = null : x.push(d)),
                                    d && w.push.apply(w, d.Y))),
                                    v++;
                                    break;
                                case "added":
                                    for (; b < D; )
                                        p(v++);
                                    N !== o ? (_.push(y.length),
                                    p(N)) : l(E.value)
                                }
                            for (; b < r.length; )
                                p(v++);
                            y._countWaitingForRemove = S
                        }
                        h.a.g.set(i, t, y),
                        f(s.beforeMove, T),
                        h.a.D(w, s.beforeRemove ? h.oa : h.removeNode);
                        var q, j, A;
                        try {
                            A = i.ownerDocument.activeElement
                        } catch (k) {}
                        if (_.length)
                            for (; (C = _.shift()) != o; ) {
                                for (d = y[C],
                                q = o; C; )
                                    if ((j = y[--C].Y) && j.length) {
                                        q = j[j.length - 1];
                                        break
                                    }
                                for (r = 0; v = d.Y[r]; q = v,
                                r++)
                                    h.h.Wb(i, v, q)
                            }
                        for (C = 0; d = y[C]; C++) {
                            for (d.Y || h.a.extend(d, e(i, a, d.Aa, c, d.pb)),
                            r = 0; v = d.Y[r]; q = v,
                            r++)
                                h.h.Wb(i, v, q);
                            !d.Ed && c && (c(d.Aa, d.Y, d.pb),
                            d.Ed = !0,
                            q = d.Y[d.Y.length - 1])
                        }
                        for (A && i.ownerDocument.activeElement != A && A.focus(),
                        f(s.beforeRemove, x),
                        C = 0; C < x.length; ++C)
                            x[C].Aa = n;
                        f(s.afterMove, T),
                        f(s.afterAdd, k)
                    }
                }(),
                h.b("utils.setDomNodeChildrenFromArrayMapping", h.a.ec),
                h.ba = function() {
                    this.allowTemplateRewriting = !1
                }
                ,
                h.ba.prototype = new h.ca,
                h.ba.prototype.constructor = h.ba,
                h.ba.prototype.renderTemplateSource = function(e, t, n, i) {
                    return (t = (9 > h.a.W ? 0 : e.nodes) ? e.nodes() : null) ? h.a.la(t.cloneNode(!0).childNodes) : (e = e.text(),
                    h.a.ua(e, i))
                }
                ,
                h.ba.Ma = new h.ba,
                h.gc(h.ba.Ma),
                h.b("nativeTemplateEngine", h.ba),
                function() {
                    h.$a = function() {
                        var e = this.Hd = function() {
                            if (!l || !l.tmpl)
                                return 0;
                            try {
                                if (0 <= l.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                    return 2
                            } catch (e) {}
                            return 1
                        }();
                        this.renderTemplateSource = function(t, n, i, r) {
                            if (r = r || c,
                            i = i || {},
                            2 > e)
                                throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                            var a = t.data("precompiled");
                            return a || (a = t.text() || "",
                            a = l.template(null, "{{ko_with $item.koBindingContext}}" + a + "{{/ko_with}}"),
                            t.data("precompiled", a)),
                            t = [n.$data],
                            n = l.extend({
                                koBindingContext: n
                            }, i.templateOptions),
                            n = l.tmpl(a, t, n),
                            n.appendTo(r.createElement("div")),
                            l.fragments = {},
                            n
                        }
                        ,
                        this.createJavaScriptEvaluatorBlock = function(e) {
                            return "{{ko_code ((function() { return " + e + " })()) }}"
                        }
                        ,
                        this.addTemplate = function(e, t) {
                            c.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>")
                        }
                        ,
                        0 < e && (l.tmpl.tag.ko_code = {
                            open: "__.push($1 || '');"
                        },
                        l.tmpl.tag.ko_with = {
                            open: "with($1) {",
                            close: "} "
                        })
                    }
                    ,
                    h.$a.prototype = new h.ca,
                    h.$a.prototype.constructor = h.$a;
                    var e = new h.$a;
                    0 < e.Hd && h.gc(e),
                    h.b("jqueryTmplTemplateEngine", h.$a)
                }()
            })
        }()
    }()
}
, function(e, t, n) {
    var i, r;
    !function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, a) {
        function o(e) {
            var t = !!e && "length"in e && e.length
              , n = ge.type(e);
            return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function s(e, t, n) {
            if (ge.isFunction(t))
                return ge.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                });
            if (t.nodeType)
                return ge.grep(e, function(e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (Ce.test(t))
                    return ge.filter(t, e, n);
                t = ge.filter(t, e)
            }
            return ge.grep(e, function(e) {
                return ge.inArray(e, t) > -1 !== n
            })
        }
        function c(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }
        function u(e) {
            var t = {};
            return ge.each(e.match(je) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function l() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", p),
            n.removeEventListener("load", p)) : (se.detachEvent("onreadystatechange", p),
            n.detachEvent("onload", p))
        }
        function p() {
            (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (l(),
            ge.ready())
        }
        function f(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Be, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? ge.parseJSON(n) : n)
                    } catch (r) {}
                    ge.data(e, t, n)
                } else
                    n = undefined
            }
            return n
        }
        function d(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        function h(e, t, n, i) {
            if (Oe(e)) {
                var r, a, o = ge.expando, s = e.nodeType, c = s ? ge.cache : e, u = s ? e[o] : e[o] && o;
                if (u && c[u] && (i || c[u].data) || n !== undefined || "string" != typeof t)
                    return u || (u = s ? e[o] = oe.pop() || ge.guid++ : o),
                    c[u] || (c[u] = s ? {} : {
                        toJSON: ge.noop
                    }),
                    "object" != typeof t && "function" != typeof t || (i ? c[u] = ge.extend(c[u], t) : c[u].data = ge.extend(c[u].data, t)),
                    a = c[u],
                    i || (a.data || (a.data = {}),
                    a = a.data),
                    n !== undefined && (a[ge.camelCase(t)] = n),
                    "string" == typeof t ? null == (r = a[t]) && (r = a[ge.camelCase(t)]) : r = a,
                    r
            }
        }
        function m(e, t, n) {
            if (Oe(e)) {
                var i, r, a = e.nodeType, o = a ? ge.cache : e, s = a ? e[ge.expando] : ge.expando;
                if (o[s]) {
                    if (t && (i = n ? o[s] : o[s].data)) {
                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in i ? t = [t] : (t = ge.camelCase(t),
                        t = t in i ? [t] : t.split(" ")),
                        r = t.length;
                        for (; r--; )
                            delete i[t[r]];
                        if (n ? !d(i) : !ge.isEmptyObject(i))
                            return
                    }
                    (n || (delete o[s].data,
                    d(o[s]))) && (a ? ge.cleanData([e], !0) : me.deleteExpando || o != o.window ? delete o[s] : o[s] = undefined)
                }
            }
        }
        function g(e, t, n, i) {
            var r, a = 1, o = 20, s = i ? function() {
                return i.cur()
            }
            : function() {
                return ge.css(e, t, "")
            }
            , c = s(), u = n && n[3] || (ge.cssNumber[t] ? "" : "px"), l = (ge.cssNumber[t] || "px" !== u && +c) && Pe.exec(ge.css(e, t));
            if (l && l[3] !== u) {
                u = u || l[3],
                n = n || [],
                l = +c || 1;
                do {
                    a = a || ".5",
                    l /= a,
                    ge.style(e, t, l + u)
                } while (a !== (a = s() / c) && 1 !== a && --o)
            }
            return n && (l = +l || +c || 0,
            r = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = u,
            i.start = l,
            i.end = r)),
            r
        }
        function y(e) {
            var t = Ve.split("|")
              , n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length; )
                    n.createElement(t.pop());
            return n
        }
        function v(e, t) {
            var n, i, r = 0, a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!a)
                for (a = [],
                n = e.childNodes || e; null != (i = n[r]); r++)
                    !t || ge.nodeName(i, t) ? a.push(i) : ge.merge(a, v(i, t));
            return t === undefined || t && ge.nodeName(e, t) ? ge.merge([e], a) : a
        }
        function b(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)
                ge._data(n, "globalEval", !t || ge._data(t[i], "globalEval"))
        }
        function w(e) {
            He.test(e.type) && (e.defaultChecked = e.checked)
        }
        function _(e, t, n, i, r) {
            for (var a, o, s, c, u, l, p, f = e.length, d = y(t), h = [], m = 0; m < f; m++)
                if ((o = e[m]) || 0 === o)
                    if ("object" === ge.type(o))
                        ge.merge(h, o.nodeType ? [o] : o);
                    else if (Ge.test(o)) {
                        for (c = c || d.appendChild(t.createElement("div")),
                        u = (Qe.exec(o) || ["", ""])[1].toLowerCase(),
                        p = We[u] || We._default,
                        c.innerHTML = p[1] + ge.htmlPrefilter(o) + p[2],
                        a = p[0]; a--; )
                            c = c.lastChild;
                        if (!me.leadingWhitespace && Ue.test(o) && h.push(t.createTextNode(Ue.exec(o)[0])),
                        !me.tbody)
                            for (o = "table" !== u || Je.test(o) ? "<table>" !== p[1] || Je.test(o) ? 0 : c : c.firstChild,
                            a = o && o.childNodes.length; a--; )
                                ge.nodeName(l = o.childNodes[a], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (ge.merge(h, c.childNodes),
                        c.textContent = ""; c.firstChild; )
                            c.removeChild(c.firstChild);
                        c = d.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (c && d.removeChild(c),
            me.appendChecked || ge.grep(v(h, "input"), w),
            m = 0; o = h[m++]; )
                if (i && ge.inArray(o, i) > -1)
                    r && r.push(o);
                else if (s = ge.contains(o.ownerDocument, o),
                c = v(d.appendChild(o), "script"),
                s && b(c),
                n)
                    for (a = 0; o = c[a++]; )
                        $e.test(o.type || "") && n.push(o);
            return c = null,
            d
        }
        function x() {
            return !0
        }
        function T() {
            return !1
        }
        function k() {
            try {
                return se.activeElement
            } catch (e) {}
        }
        function S(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n,
                n = undefined);
                for (s in t)
                    S(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n,
            i = n = undefined) : null == r && ("string" == typeof n ? (r = i,
            i = undefined) : (r = i,
            i = n,
            n = undefined)),
            !1 === r)
                r = T;
            else if (!r)
                return e;
            return 1 === a && (o = r,
            r = function(e) {
                return ge().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = ge.guid++)),
            e.each(function() {
                ge.event.add(this, t, r, i, n)
            })
        }
        function C(e, t) {
            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function E(e) {
            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function N(e) {
            var t = ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function D(e, t) {
            if (1 === t.nodeType && ge.hasData(e)) {
                var n, i, r, a = ge._data(e), o = ge._data(t, a), s = a.events;
                if (s) {
                    delete o.handle,
                    o.events = {};
                    for (n in s)
                        for (i = 0,
                        r = s[n].length; i < r; i++)
                            ge.event.add(t, n, s[n][i])
                }
                o.data && (o.data = ge.extend({}, o.data))
            }
        }
        function q(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(),
                !me.noCloneEvent && t[ge.expando]) {
                    r = ge._data(t);
                    for (i in r.events)
                        ge.removeEvent(t, i, r.handle);
                    t.removeAttribute(ge.expando)
                }
                "script" === n && t.text !== e.text ? (E(t).text = e.text,
                N(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                me.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && He.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        function j(e, t, n, i) {
            t = ue.apply([], t);
            var r, a, o, s, c, u, l = 0, p = e.length, f = p - 1, d = t[0], h = ge.isFunction(d);
            if (h || p > 1 && "string" == typeof d && !me.checkClone && at.test(d))
                return e.each(function(r) {
                    var a = e.eq(r);
                    h && (t[0] = d.call(this, r, a.html())),
                    j(a, t, n, i)
                });
            if (p && (u = _(t, e[0].ownerDocument, !1, e, i),
            r = u.firstChild,
            1 === u.childNodes.length && (u = r),
            r || i)) {
                for (s = ge.map(v(u, "script"), E),
                o = s.length; l < p; l++)
                    a = u,
                    l !== f && (a = ge.clone(a, !0, !0),
                    o && ge.merge(s, v(a, "script"))),
                    n.call(e[l], a, l);
                if (o)
                    for (c = s[s.length - 1].ownerDocument,
                    ge.map(s, N),
                    l = 0; l < o; l++)
                        a = s[l],
                        $e.test(a.type || "") && !ge._data(a, "globalEval") && ge.contains(c, a) && (a.src ? ge._evalUrl && ge._evalUrl(a.src) : ge.globalEval((a.text || a.textContent || a.innerHTML || "").replace(st, "")));
                u = r = null
            }
            return e
        }
        function A(e, t, n) {
            for (var i, r = t ? ge.filter(t, e) : e, a = 0; null != (i = r[a]); a++)
                n || 1 !== i.nodeType || ge.cleanData(v(i)),
                i.parentNode && (n && ge.contains(i.ownerDocument, i) && b(v(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        function M(e, t) {
            var n = ge(t.createElement(e)).appendTo(t.body)
              , i = ge.css(n[0], "display");
            return n.detach(),
            i
        }
        function O(e) {
            var t = se
              , n = pt[e];
            return n || (n = M(e, t),
            "none" !== n && n || (lt = (lt || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
            t = (lt[0].contentWindow || lt[0].contentDocument).document,
            t.write(),
            t.close(),
            n = M(e, t),
            lt.detach()),
            pt[e] = n),
            n
        }
        function I(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function B(e) {
            if (e in Ct)
                return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--; )
                if ((e = St[n] + t)in Ct)
                    return e
        }
        function L(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++)
                i = e[o],
                i.style && (a[o] = ge._data(i, "olddisplay"),
                n = i.style.display,
                t ? (a[o] || "none" !== n || (i.style.display = ""),
                "" === i.style.display && ze(i) && (a[o] = ge._data(i, "olddisplay", O(i.nodeName)))) : (r = ze(i),
                (n && "none" !== n || !r) && ge._data(i, "olddisplay", r ? n : ge.css(i, "display"))));
            for (o = 0; o < s; o++)
                i = e[o],
                i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }
        function P(e, t, n) {
            var i = xt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function F(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2)
                "margin" === n && (o += ge.css(e, n + Fe[a], !0, r)),
                i ? ("content" === n && (o -= ge.css(e, "padding" + Fe[a], !0, r)),
                "margin" !== n && (o -= ge.css(e, "border" + Fe[a] + "Width", !0, r))) : (o += ge.css(e, "padding" + Fe[a], !0, r),
                "padding" !== n && (o += ge.css(e, "border" + Fe[a] + "Width", !0, r)));
            return o
        }
        function z(e, t, n) {
            var i = !0
              , r = "width" === t ? e.offsetWidth : e.offsetHeight
              , a = gt(e)
              , o = me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (r = yt(e, t, a),
                (r < 0 || null == r) && (r = e.style[t]),
                dt.test(r))
                    return r;
                i = o && (me.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
            }
            return r + F(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }
        function R(e, t, n, i, r) {
            return new R.prototype.init(e,t,n,i,r)
        }
        function H() {
            return n.setTimeout(function() {
                Et = undefined
            }),
            Et = ge.now()
        }
        function Q(e, t) {
            var n, i = {
                height: e
            }, r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                n = Fe[r],
                i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function $(e, t, n) {
            for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, t, e))
                    return i
        }
        function U(e, t, n) {
            var i, r, a, o, s, c, u, l = this, p = {}, f = e.style, d = e.nodeType && ze(e), h = ge._data(e, "fxshow");
            n.queue || (s = ge._queueHooks(e, "fx"),
            null == s.unqueued && (s.unqueued = 0,
            c = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || c()
            }
            ),
            s.unqueued++,
            l.always(function() {
                l.always(function() {
                    s.unqueued--,
                    ge.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
            u = ge.css(e, "display"),
            "inline" === ("none" === u ? ge._data(e, "olddisplay") || O(e.nodeName) : u) && "none" === ge.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== O(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
            n.overflow && (f.overflow = "hidden",
            me.shrinkWrapBlocks() || l.always(function() {
                f.overflow = n.overflow[0],
                f.overflowX = n.overflow[1],
                f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i],
                Dt.exec(r)) {
                    if (delete t[i],
                    a = a || "toggle" === r,
                    r === (d ? "hide" : "show")) {
                        if ("show" !== r || !h || h[i] === undefined)
                            continue;
                        d = !0
                    }
                    p[i] = h && h[i] || ge.style(e, i)
                } else
                    u = undefined;
            if (ge.isEmptyObject(p))
                "inline" === ("none" === u ? O(e.nodeName) : u) && (f.display = u);
            else {
                h ? "hidden"in h && (d = h.hidden) : h = ge._data(e, "fxshow", {}),
                a && (h.hidden = !d),
                d ? ge(e).show() : l.done(function() {
                    ge(e).hide()
                }),
                l.done(function() {
                    var t;
                    ge._removeData(e, "fxshow");
                    for (t in p)
                        ge.style(e, t, p[t])
                });
                for (i in p)
                    o = $(d ? h[i] : 0, i, l),
                    i in h || (h[i] = o.start,
                    d && (o.end = o.start,
                    o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function V(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (i = ge.camelCase(n),
                r = t[i],
                a = e[n],
                ge.isArray(a) && (r = a[1],
                a = e[n] = a[0]),
                n !== i && (e[i] = a,
                delete e[n]),
                (o = ge.cssHooks[i]) && "expand"in o) {
                    a = o.expand(a),
                    delete e[i];
                    for (n in a)
                        n in e || (e[n] = a[n],
                        t[n] = r)
                } else
                    t[i] = r
        }
        function W(e, t, n) {
            var i, r, a = 0, o = W.prefilters.length, s = ge.Deferred().always(function() {
                delete c.elem
            }), c = function() {
                if (r)
                    return !1;
                for (var t = Et || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, c = u.tweens.length; o < c; o++)
                    u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]),
                a < 1 && c ? n : (s.resolveWith(e, [u]),
                !1)
            }, u = s.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Et || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]),
                    s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                    this
                }
            }), l = u.props;
            for (V(l, u.opts.specialEasing); a < o; a++)
                if (i = W.prefilters[a].call(u, e, l, u.opts))
                    return ge.isFunction(i.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(i.stop, i)),
                    i;
            return ge.map(l, $, u),
            ge.isFunction(u.opts.start) && u.opts.start.call(e, u),
            ge.fx.timer(ge.extend(c, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function G(e) {
            return ge.attr(e, "class") || ""
        }
        function J(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var i, r = 0, a = t.toLowerCase().match(je) || [];
                if (ge.isFunction(n))
                    for (; i = a[r++]; )
                        "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function K(e, t, n, i) {
            function r(s) {
                var c;
                return a[s] = !0,
                ge.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || a[u] ? o ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                    r(u),
                    !1)
                }),
                c
            }
            var a = {}
              , o = e === en;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }
        function X(e, t) {
            var n, i, r = ge.ajaxSettings.flatOptions || {};
            for (i in t)
                t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ge.extend(!0, e, n),
            e
        }
        function Y(e, t, n) {
            for (var i, r, a, o, s = e.contents, c = e.dataTypes; "*" === c[0]; )
                c.shift(),
                r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        c.unshift(o);
                        break
                    }
            if (c[0]in n)
                a = c[0];
            else {
                for (o in n) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        a = o;
                        break
                    }
                    i || (i = o)
                }
                a = a || i
            }
            if (a)
                return a !== c[0] && c.unshift(a),
                n[a]
        }
        function Z(e, t, n, i) {
            var r, a, o, s, c, u = {}, l = e.dataTypes.slice();
            if (l[1])
                for (o in e.converters)
                    u[o.toLowerCase()] = e.converters[o];
            for (a = l.shift(); a; )
                if (e.responseFields[a] && (n[e.responseFields[a]] = t),
                !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                c = a,
                a = l.shift())
                    if ("*" === a)
                        a = c;
                    else if ("*" !== c && c !== a) {
                        if (!(o = u[c + " " + a] || u["* " + a]))
                            for (r in u)
                                if (s = r.split(" "),
                                s[1] === a && (o = u[c + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0],
                                    l.unshift(s[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && e["throws"])
                                t = o(t);
                            else
                                try {
                                    t = o(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: o ? p : "No conversion from " + c + " to " + a
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        function ee(e) {
            return e.style && e.style.display || ge.css(e, "display")
        }
        function te(e) {
            if (!ge.contains(e.ownerDocument || se, e))
                return !0;
            for (; e && 1 === e.nodeType; ) {
                if ("none" === ee(e) || "hidden" === e.type)
                    return !0;
                e = e.parentNode
            }
            return !1
        }
        function ne(e, t, n, i) {
            var r;
            if (ge.isArray(t))
                ge.each(t, function(t, r) {
                    n || on.test(e) ? i(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                });
            else if (n || "object" !== ge.type(t))
                i(e, t);
            else
                for (r in t)
                    ne(e + "[" + r + "]", t[r], n, i)
        }
        function ie() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        function re() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
        function ae(e) {
            return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var oe = []
          , se = n.document
          , ce = oe.slice
          , ue = oe.concat
          , le = oe.push
          , pe = oe.indexOf
          , fe = {}
          , de = fe.toString
          , he = fe.hasOwnProperty
          , me = {}
          , ge = function(e, t) {
            return new ge.fn.init(e,t)
        }
          , ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , ve = /^-ms-/
          , be = /-([\da-z])/gi
          , we = function(e, t) {
            return t.toUpperCase()
        };
        ge.fn = ge.prototype = {
            jquery: "1.12.4",
            constructor: ge,
            selector: "",
            length: 0,
            toArray: function() {
                return ce.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ce.call(this)
            },
            pushStack: function(e) {
                var t = ge.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e) {
                return ge.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ge.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ce.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: le,
            sort: oe.sort,
            splice: oe.splice
        },
        ge.extend = ge.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof o && (u = o,
            o = arguments[s] || {},
            s++),
            "object" == typeof o || ge.isFunction(o) || (o = {}),
            s === c && (o = this,
            s--); s < c; s++)
                if (null != (r = arguments[s]))
                    for (i in r)
                        e = o[i],
                        n = r[i],
                        o !== n && (u && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1,
                        a = e && ge.isArray(e) ? e : []) : a = e && ge.isPlainObject(e) ? e : {},
                        o[i] = ge.extend(u, a, n)) : n !== undefined && (o[i] = n));
            return o
        }
        ,
        ge.extend({
            expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ge.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ge.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !ge.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                if (!me.ownFirst)
                    for (t in e)
                        return he.call(e, t);
                for (t in e)
                    ;
                return t === undefined || he.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[de.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && ge.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                }
                )(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(be, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (o(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ye, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (pe)
                        return pe.call(t, e, n);
                    for (i = t.length,
                    n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; )
                    e[r++] = t[i++];
                if (n !== n)
                    for (; t[i] !== undefined; )
                        e[r++] = t[i++];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++)
                    !t(e[r], r) !== o && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, a = 0, s = [];
                if (o(e))
                    for (i = e.length; a < i; a++)
                        null != (r = t(e[a], a, n)) && s.push(r);
                else
                    for (a in e)
                        null != (r = t(e[a], a, n)) && s.push(r);
                return ue.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t],
                t = e,
                e = r),
                ge.isFunction(e) ? (n = ce.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, n.concat(ce.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || ge.guid++,
                i) : undefined
            },
            now: function() {
                return +new Date
            },
            support: me
        }),
        "function" == typeof Symbol && (ge.fn[Symbol.iterator] = oe[Symbol.iterator]),
        ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var _e = function(e) {
            function t(e, t, n, i) {
                var r, a, o, s, u, p, f, d, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                    return n;
                if (!i && ((t ? t.ownerDocument || t : P) !== q && D(t),
                t = t || q,
                A)) {
                    if (11 !== m && (p = me.exec(e)))
                        if (r = p[1]) {
                            if (9 === m) {
                                if (!(o = t.getElementById(r)))
                                    return n;
                                if (o.id === r)
                                    return n.push(o),
                                    n
                            } else if (h && (o = h.getElementById(r)) && B(t, o) && o.id === r)
                                return n.push(o),
                                n
                        } else {
                            if (p[2])
                                return K.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((r = p[3]) && b.getElementsByClassName && t.getElementsByClassName)
                                return K.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                    if (b.qsa && !Q[e + " "] && (!M || !M.test(e))) {
                        if (1 !== m)
                            h = t,
                            d = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = L),
                            f = T(e),
                            a = f.length,
                            u = le.test(s) ? "#" + s : "[id='" + s + "']"; a--; )
                                f[a] = u + " " + l(f[a]);
                            d = f.join(","),
                            h = ge.test(e) && c(t.parentNode) || t
                        }
                        if (d)
                            try {
                                return K.apply(n, h.querySelectorAll(d)),
                                n
                            } catch (g) {} finally {
                                s === L && t.removeAttribute("id")
                            }
                    }
                }
                return S(e.replace(ae, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[L] = !0,
                e
            }
            function r(e) {
                var t = q.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    w.attrHandle[n[i]] = t
            }
            function o(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function s(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--; )
                            n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function u() {}
            function l(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function p(e, t, n) {
                var i = t.dir
                  , r = n && "parentNode" === i
                  , a = z++;
                return t.first ? function(t, n, a) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r)
                            return e(t, n, a)
                }
                : function(t, n, o) {
                    var s, c, u, l = [F, a];
                    if (o) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || r) && e(t, n, o))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || r) {
                                if (u = t[L] || (t[L] = {}),
                                c = u[t.uniqueID] || (u[t.uniqueID] = {}),
                                (s = c[i]) && s[0] === F && s[1] === a)
                                    return l[2] = s[2];
                                if (c[i] = l,
                                l[2] = e(t, n, o))
                                    return !0
                            }
                }
            }
            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--; )
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function d(e, n, i) {
                for (var r = 0, a = n.length; r < a; r++)
                    t(e, n[r], i);
                return i
            }
            function h(e, t, n, i, r) {
                for (var a, o = [], s = 0, c = e.length, u = null != t; s < c; s++)
                    (a = e[s]) && (n && !n(a, i, r) || (o.push(a),
                    u && t.push(s)));
                return o
            }
            function m(e, t, n, r, a, o) {
                return r && !r[L] && (r = m(r)),
                a && !a[L] && (a = m(a, o)),
                i(function(i, o, s, c) {
                    var u, l, p, f = [], m = [], g = o.length, y = i || d(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? y : h(y, f, e, s, c), b = n ? a || (i ? e : g || r) ? [] : o : v;
                    if (n && n(v, b, s, c),
                    r)
                        for (u = h(b, m),
                        r(u, [], s, c),
                        l = u.length; l--; )
                            (p = u[l]) && (b[m[l]] = !(v[m[l]] = p));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (u = [],
                                l = b.length; l--; )
                                    (p = b[l]) && u.push(v[l] = p);
                                a(null, b = [], u, c)
                            }
                            for (l = b.length; l--; )
                                (p = b[l]) && (u = a ? Y(i, p) : f[l]) > -1 && (i[u] = !(o[u] = p))
                        }
                    } else
                        b = h(b === o ? b.splice(g, b.length) : b),
                        a ? a(null, o, b, c) : K.apply(o, b)
                })
            }
            function g(e) {
                for (var t, n, i, r = e.length, a = w.relative[e[0].type], o = a || w.relative[" "], s = a ? 1 : 0, c = p(function(e) {
                    return e === t
                }, o, !0), u = p(function(e) {
                    return Y(t, e) > -1
                }, o, !0), d = [function(e, n, i) {
                    var r = !a && (i || n !== C) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                    return t = null,
                    r
                }
                ]; s < r; s++)
                    if (n = w.relative[e[s].type])
                        d = [p(f(d), n)];
                    else {
                        if (n = w.filter[e[s].type].apply(null, e[s].matches),
                        n[L]) {
                            for (i = ++s; i < r && !w.relative[e[i].type]; i++)
                                ;
                            return m(s > 1 && f(d), s > 1 && l(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && l(e))
                        }
                        d.push(n)
                    }
                return f(d)
            }
            function y(e, n) {
                var r = n.length > 0
                  , a = e.length > 0
                  , o = function(i, o, s, c, u) {
                    var l, p, f, d = 0, m = "0", g = i && [], y = [], v = C, b = i || a && w.find.TAG("*", u), _ = F += null == v ? 1 : Math.random() || .1, x = b.length;
                    for (u && (C = o === q || o || u); m !== x && null != (l = b[m]); m++) {
                        if (a && l) {
                            for (p = 0,
                            o || l.ownerDocument === q || (D(l),
                            s = !A); f = e[p++]; )
                                if (f(l, o || q, s)) {
                                    c.push(l);
                                    break
                                }
                            u && (F = _)
                        }
                        r && ((l = !f && l) && d--,
                        i && g.push(l))
                    }
                    if (d += m,
                    r && m !== d) {
                        for (p = 0; f = n[p++]; )
                            f(g, y, o, s);
                        if (i) {
                            if (d > 0)
                                for (; m--; )
                                    g[m] || y[m] || (y[m] = G.call(c));
                            y = h(y)
                        }
                        K.apply(c, y),
                        u && !i && y.length > 0 && d + n.length > 1 && t.uniqueSort(c)
                    }
                    return u && (F = _,
                    C = v),
                    g
                };
                return r ? i(o) : o
            }
            var v, b, w, _, x, T, k, S, C, E, N, D, q, j, A, M, O, I, B, L = "sizzle" + 1 * new Date, P = e.document, F = 0, z = 0, R = n(), H = n(), Q = n(), $ = function(e, t) {
                return e === t && (N = !0),
                0
            }, U = 1 << 31, V = {}.hasOwnProperty, W = [], G = W.pop, J = W.push, K = W.push, X = W.slice, Y = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+","g"), ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), oe = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ue = new RegExp(ie), le = new RegExp("^" + te + "$"), pe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
                bool: new RegExp("^(?:" + Z + ")$","i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
            }, fe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ye = /'|\\/g, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), be = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, we = function() {
                D()
            };
            try {
                K.apply(W = X.call(P.childNodes), P.childNodes),
                W[P.childNodes.length].nodeType
            } catch (_e) {
                K = {
                    apply: W.length ? function(e, t) {
                        J.apply(e, X.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {},
            x = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            D = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : P;
                return i !== q && 9 === i.nodeType && i.documentElement ? (q = i,
                j = q.documentElement,
                A = !x(q),
                (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                b.attributes = r(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                b.getElementsByTagName = r(function(e) {
                    return e.appendChild(q.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                b.getElementsByClassName = he.test(q.getElementsByClassName),
                b.getById = r(function(e) {
                    return j.appendChild(e).id = L,
                    !q.getElementsByName || !q.getElementsByName(L).length
                }),
                b.getById ? (w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && A) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ,
                w.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ) : (delete w.find.ID,
                w.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ),
                w.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], r = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }
                ,
                w.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && A)
                        return t.getElementsByClassName(e)
                }
                ,
                O = [],
                M = [],
                (b.qsa = he.test(q.querySelectorAll)) && (r(function(e) {
                    j.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + L + "-]").length || M.push("~="),
                    e.querySelectorAll(":checked").length || M.push(":checked"),
                    e.querySelectorAll("a#" + L + "+*").length || M.push(".#.+[+~]")
                }),
                r(function(e) {
                    var t = q.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    M.push(",.*:")
                })),
                (b.matchesSelector = he.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                    b.disconnectedMatch = I.call(e, "div"),
                    I.call(e, "[s!='']:x"),
                    O.push("!=", ie)
                }),
                M = M.length && new RegExp(M.join("|")),
                O = O.length && new RegExp(O.join("|")),
                t = he.test(j.compareDocumentPosition),
                B = t || he.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                $ = t ? function(e, t) {
                    if (e === t)
                        return N = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === P && B(P, e) ? -1 : t === q || t.ownerDocument === P && B(P, t) ? 1 : E ? Y(E, e) - Y(E, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return N = !0,
                        0;
                    var n, i = 0, r = e.parentNode, a = t.parentNode, s = [e], c = [t];
                    if (!r || !a)
                        return e === q ? -1 : t === q ? 1 : r ? -1 : a ? 1 : E ? Y(E, e) - Y(E, t) : 0;
                    if (r === a)
                        return o(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        c.unshift(n);
                    for (; s[i] === c[i]; )
                        i++;
                    return i ? o(s[i], c[i]) : s[i] === P ? -1 : c[i] === P ? 1 : 0
                }
                ,
                q) : q
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== q && D(e),
                n = n.replace(ce, "='$1']"),
                b.matchesSelector && A && !Q[n + " "] && (!O || !O.test(n)) && (!M || !M.test(n)))
                    try {
                        var i = I.call(e, n);
                        if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (_e) {}
                return t(n, q, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== q && D(e),
                B(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== q && D(e);
                var n = w.attrHandle[t.toLowerCase()]
                  , i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !A) : undefined;
                return i !== undefined ? i : b.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (N = !b.detectDuplicates,
                E = !b.sortStable && e.slice(0),
                e.sort($),
                N) {
                    for (; t = e[r++]; )
                        t === e[r] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return E = null,
                e
            }
            ,
            _ = t.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += _(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += _(t);
                return n
            }
            ,
            w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, be),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = R[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : !n || (a += "",
                            "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3)
                          , o = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, c) {
                            var u, l, p, f, d, h, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !c && !s, b = !1;
                            if (g) {
                                if (a) {
                                    for (; m; ) {
                                        for (f = t; f = f[m]; )
                                            if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                                return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? g.firstChild : g.lastChild],
                                o && v) {
                                    for (f = g,
                                    p = f[L] || (f[L] = {}),
                                    l = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                    u = l[e] || [],
                                    d = u[0] === F && u[1],
                                    b = d && u[2],
                                    f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || h.pop(); )
                                        if (1 === f.nodeType && ++b && f === t) {
                                            l[e] = [F, d, b];
                                            break
                                        }
                                } else if (v && (f = t,
                                p = f[L] || (f[L] = {}),
                                l = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                u = l[e] || [],
                                d = u[0] === F && u[1],
                                b = d),
                                !1 === b)
                                    for (; (f = ++d && f && f[m] || (b = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && (p = f[L] || (f[L] = {}),
                                    l = p[f.uniqueID] || (p[f.uniqueID] = {}),
                                    l[e] = [F, b]),
                                    f !== t)); )
                                        ;
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[L] ? a(n) : a.length > 1 ? (r = [e, e, "", n],
                        w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = a(e, n), o = r.length; o--; )
                                i = Y(e, r[o]),
                                e[i] = !(t[i] = r[o])
                        }) : function(e) {
                            return a(e, 0, r)
                        }
                        ) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                          , n = []
                          , r = k(e.replace(ae, "$1"));
                        return r[L] ? i(function(e, t, n, i) {
                            for (var a, o = r(e, null, i, []), s = e.length; s--; )
                                (a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, i, a) {
                            return t[0] = e,
                            r(t, null, a, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(ve, be),
                        function(t) {
                            return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return le.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(ve, be).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === j
                    },
                    focus: function(e) {
                        return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return de.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            },
            w.pseudos.nth = w.pseudos.eq;
            for (v in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                w.pseudos[v] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(v);
            for (v in {
                submit: !0,
                reset: !0
            })
                w.pseudos[v] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(v);
            return u.prototype = w.filters = w.pseudos,
            w.setFilters = new u,
            T = t.tokenize = function(e, n) {
                var i, r, a, o, s, c, u, l = H[e + " "];
                if (l)
                    return n ? 0 : l.slice(0);
                for (s = e,
                c = [],
                u = w.preFilter; s; ) {
                    i && !(r = oe.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                    c.push(a = [])),
                    i = !1,
                    (r = se.exec(s)) && (i = r.shift(),
                    a.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }),
                    s = s.slice(i.length));
                    for (o in w.filter)
                        !(r = pe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(),
                        a.push({
                            value: i,
                            type: o,
                            matches: r
                        }),
                        s = s.slice(i.length));
                    if (!i)
                        break
                }
                return n ? s.length : s ? t.error(e) : H(e, c).slice(0)
            }
            ,
            k = t.compile = function(e, t) {
                var n, i = [], r = [], a = Q[e + " "];
                if (!a) {
                    for (t || (t = T(e)),
                    n = t.length; n--; )
                        a = g(t[n]),
                        a[L] ? i.push(a) : r.push(a);
                    a = Q(e, y(r, i)),
                    a.selector = e
                }
                return a
            }
            ,
            S = t.select = function(e, t, n, i) {
                var r, a, o, s, u, p = "function" == typeof e && e, f = !i && T(e = p.selector || e);
                if (n = n || [],
                1 === f.length) {
                    if (a = f[0] = f[0].slice(0),
                    a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === t.nodeType && A && w.relative[a[1].type]) {
                        if (!(t = (w.find.ID(o.matches[0].replace(ve, be), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode),
                        e = e.slice(a.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r],
                    !w.relative[s = o.type]); )
                        if ((u = w.find[s]) && (i = u(o.matches[0].replace(ve, be), ge.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(r, 1),
                            !(e = i.length && l(a)))
                                return K.apply(n, i),
                                n;
                            break
                        }
                }
                return (p || k(e, f))(i, t, !A, n, !t || ge.test(e) && c(t.parentNode) || t),
                n
            }
            ,
            b.sortStable = L.split("").sort($).join("") === L,
            b.detectDuplicates = !!N,
            D(),
            b.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(q.createElement("div"))
            }),
            r(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            b.attributes && r(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            r(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(Z, function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            t
        }(n);
        ge.find = _e,
        ge.expr = _e.selectors,
        ge.expr[":"] = ge.expr.pseudos,
        ge.uniqueSort = ge.unique = _e.uniqueSort,
        ge.text = _e.getText,
        ge.isXMLDoc = _e.isXML,
        ge.contains = _e.contains;
        var xe = function(e, t, n) {
            for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && ge(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
          , Te = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , ke = ge.expr.match.needsContext
          , Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
          , Ce = /^.[^:#\[\.,]*$/;
        ge.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        ge.fn.extend({
            find: function(e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e)
                    return this.pushStack(ge(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (ge.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; t < r; t++)
                    ge.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ge.unique(n) : n),
                n.selector = this.selector ? this.selector + " " + e : e,
                n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && ke.test(e) ? ge(e) : e || [], !1).length
            }
        });
        var Ee, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ge.fn.init = function(e, t, n) {
            var i, r;
            if (!e)
                return this;
            if (n = n || Ee,
            "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ge ? t[0] : t,
                    ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)),
                    Se.test(i[1]) && ge.isPlainObject(t))
                        for (i in t)
                            ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = se.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2])
                        return Ee.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = se,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : ge.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ge) : (e.selector !== undefined && (this.selector = e.selector,
            this.context = e.context),
            ge.makeArray(e, this))
        }
        ).prototype = ge.fn,
        Ee = ge(se);
        var De = /^(?:parents|prev(?:Until|All))/
          , qe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ge.fn.extend({
            has: function(e) {
                var t, n = ge(e, this), i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (ge.contains(this, n[t]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, a = [], o = ke.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? ge.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        ge.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return xe(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return xe(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return xe(e, "nextSibling")
            },
            prevAll: function(e) {
                return xe(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return xe(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return xe(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Te((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Te(e.firstChild)
            },
            contents: function(e) {
                return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
            }
        }, function(e, t) {
            ge.fn[e] = function(n, i) {
                var r = ge.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = ge.filter(i, r)),
                this.length > 1 && (qe[e] || (r = ge.uniqueSort(r)),
                De.test(e) && (r = r.reverse())),
                this.pushStack(r)
            }
        });
        var je = /\S+/g;
        ge.Callbacks = function(e) {
            e = "string" == typeof e ? u(e) : ge.extend({}, e);
            var t, n, i, r, a = [], o = [], s = -1, c = function() {
                for (r = e.once,
                i = t = !0; o.length; s = -1)
                    for (n = o.shift(); ++s < a.length; )
                        !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                r && (a = n ? [] : "")
            }, l = {
                add: function() {
                    return a && (n && !t && (s = a.length - 1,
                    o.push(n)),
                    function i(t) {
                        ge.each(t, function(t, n) {
                            ge.isFunction(n) ? e.unique && l.has(n) || a.push(n) : n && n.length && "string" !== ge.type(n) && i(n)
                        })
                    }(arguments),
                    n && !t && c()),
                    this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n; (n = ge.inArray(t, a, n)) > -1; )
                            a.splice(n, 1),
                            n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? ge.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []),
                    this
                },
                disable: function() {
                    return r = o = [],
                    a = n = "",
                    this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = !0,
                    n || l.disable(),
                    this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    o.push(n),
                    t || c()),
                    this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return l
        }
        ,
        ge.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]]
                  , n = "pending"
                  , i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return ge.Deferred(function(n) {
                            ge.each(t, function(t, a) {
                                var o = ge.isFunction(e[t]) && e[t];
                                r[a[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, i) : i
                    }
                }
                  , r = {};
                return i.pipe = i.then,
                ge.each(t, function(e, a) {
                    var o = a[2]
                      , s = a[3];
                    i[a[1]] = o.add,
                    s && o.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments),
                        this
                    }
                    ,
                    r[a[0] + "With"] = o.fireWith
                }),
                i.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t, n, i, r = 0, a = ce.call(arguments), o = a.length, s = 1 !== o || e && ge.isFunction(e.promise) ? o : 0, c = 1 === s ? e : ge.Deferred(), u = function(e, n, i) {
                    return function(r) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? ce.call(arguments) : r,
                        i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
                if (o > 1)
                    for (t = new Array(o),
                    n = new Array(o),
                    i = new Array(o); r < o; r++)
                        a[r] && ge.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, t)).done(u(r, i, a)).fail(c.reject) : --s;
                return s || c.resolveWith(i, a),
                c.promise()
            }
        });
        var Ae;
        ge.fn.ready = function(e) {
            return ge.ready.promise().done(e),
            this
        }
        ,
        ge.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ge.readyWait++ : ge.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0,
                !0 !== e && --ge.readyWait > 0 || (Ae.resolveWith(se, [ge]),
                ge.fn.triggerHandler && (ge(se).triggerHandler("ready"),
                ge(se).off("ready"))))
            }
        }),
        ge.ready.promise = function(e) {
            if (!Ae)
                if (Ae = ge.Deferred(),
                "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll)
                    n.setTimeout(ge.ready);
                else if (se.addEventListener)
                    se.addEventListener("DOMContentLoaded", p),
                    n.addEventListener("load", p);
                else {
                    se.attachEvent("onreadystatechange", p),
                    n.attachEvent("onload", p);
                    var t = !1;
                    try {
                        t = null == n.frameElement && se.documentElement
                    } catch (i) {}
                    t && t.doScroll && function r() {
                        if (!ge.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (i) {
                                return n.setTimeout(r, 50)
                            }
                            l(),
                            ge.ready()
                        }
                    }()
                }
            return Ae.promise(e)
        }
        ,
        ge.ready.promise();
        var Me;
        for (Me in ge(me))
            break;
        me.ownFirst = "0" === Me,
        me.inlineBlockNeedsLayout = !1,
        ge(function() {
            var e, t, n, i;
            (n = se.getElementsByTagName("body")[0]) && n.style && (t = se.createElement("div"),
            i = se.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
            me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
            e && (n.style.zoom = 1)),
            n.removeChild(i))
        }),
        function() {
            var e = se.createElement("div");
            me.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                me.deleteExpando = !1
            }
            e = null
        }();
        var Oe = function(e) {
            var t = ge.noData[(e.nodeName + " ").toLowerCase()]
              , n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        }
          , Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Be = /([A-Z])/g;
        ge.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) && !d(e)
            },
            data: function(e, t, n) {
                return h(e, t, n)
            },
            removeData: function(e, t) {
                return m(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return m(e, t, !0)
            }
        }),
        ge.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0], o = a && a.attributes;
                if (e === undefined) {
                    if (this.length && (r = ge.data(a),
                    1 === a.nodeType && !ge._data(a, "parsedAttrs"))) {
                        for (n = o.length; n--; )
                            o[n] && (i = o[n].name,
                            0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)),
                            f(a, i, r[i])));
                        ge._data(a, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ge.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ge.data(this, e, t)
                }) : a ? f(a, e, ge.data(a, e)) : undefined
            },
            removeData: function(e) {
                return this.each(function() {
                    ge.removeData(this, e)
                })
            }
        }),
        ge.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue",
                    i = ge._data(e, t),
                    n && (!i || ge.isArray(n) ? i = ge._data(e, t, ge.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ge.queue(e, t)
                  , i = n.length
                  , r = n.shift()
                  , a = ge._queueHooks(e, t)
                  , o = function() {
                    ge.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(),
                i--),
                r && ("fx" === t && n.unshift("inprogress"),
                delete a.stop,
                r.call(e, o, a)),
                !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ge._data(e, n) || ge._data(e, n, {
                    empty: ge.Callbacks("once memory").add(function() {
                        ge._removeData(e, t + "queue"),
                        ge._removeData(e, n)
                    })
                })
            }
        }),
        ge.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? ge.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = ge.queue(this, e, t);
                    ge._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ge.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, r = ge.Deferred(), a = this, o = this.length, s = function() {
                    --i || r.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                e = undefined),
                e = e || "fx"; o--; )
                    (n = ge._data(a[o], e + "queueHooks")) && n.empty && (i++,
                    n.empty.add(s));
                return s(),
                r.promise(t)
            }
        }),
        function() {
            var e;
            me.shrinkWrapBlocks = function() {
                if (null != e)
                    return e;
                e = !1;
                var t, n, i;
                return (n = se.getElementsByTagName("body")[0]) && n.style ? (t = se.createElement("div"),
                i = se.createElement("div"),
                i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(i).appendChild(t),
                "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                t.appendChild(se.createElement("div")).style.width = "5px",
                e = 3 !== t.offsetWidth),
                n.removeChild(i),
                e) : void 0
            }
        }();
        var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Pe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$","i")
          , Fe = ["Top", "Right", "Bottom", "Left"]
          , ze = function(e, t) {
            return e = t || e,
            "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
        }
          , Re = function(e, t, n, i, r, a, o) {
            var s = 0
              , c = e.length
              , u = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n)
                    Re(e, t, s, n[s], !0, a, o)
            } else if (i !== undefined && (r = !0,
            ge.isFunction(i) || (o = !0),
            u && (o ? (t.call(e, i),
            t = null) : (u = t,
            t = function(e, t, n) {
                return u.call(ge(e), n)
            }
            )),
            t))
                for (; s < c; s++)
                    t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : c ? t(e[0], n) : a
        }
          , He = /^(?:checkbox|radio)$/i
          , Qe = /<([\w:-]+)/
          , $e = /^$|\/(?:java|ecma)script/i
          , Ue = /^\s+/
          , Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function() {
            var e = se.createElement("div")
              , t = se.createDocumentFragment()
              , n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            me.leadingWhitespace = 3 === e.firstChild.nodeType,
            me.tbody = !e.getElementsByTagName("tbody").length,
            me.htmlSerialize = !!e.getElementsByTagName("link").length,
            me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML,
            n.type = "checkbox",
            n.checked = !0,
            t.appendChild(n),
            me.appendChecked = n.checked,
            e.innerHTML = "<textarea>x</textarea>",
            me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            t.appendChild(e),
            n = se.createElement("input"),
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            me.noCloneEvent = !!e.addEventListener,
            e[ge.expando] = 1,
            me.attributes = !e.getAttribute(ge.expando)
        }();
        var We = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        We.optgroup = We.option,
        We.tbody = We.tfoot = We.colgroup = We.caption = We.thead,
        We.th = We.td;
        var Ge = /<|&#?\w+;/
          , Je = /<tbody/i;
        !function() {
            var e, t, i = se.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                t = "on" + e,
                (me[e] = t in n) || (i.setAttribute(t, "t"),
                me[e] = !1 === i.attributes[t].expando);
            i = null
        }();
        var Ke = /^(?:input|select|textarea)$/i
          , Xe = /^key/
          , Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Ze = /^(?:focusinfocus|focusoutblur)$/
          , et = /^([^.]*)(?:\.(.+)|)/;
        ge.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, c, u, l, p, f, d, h, m, g = ge._data(e);
                if (g) {
                    for (n.handler && (c = n,
                    n = c.handler,
                    r = c.selector),
                    n.guid || (n.guid = ge.guid++),
                    (o = g.events) || (o = g.events = {}),
                    (l = g.handle) || (l = g.handle = function(e) {
                        return void 0 === ge || e && ge.event.triggered === e.type ? undefined : ge.event.dispatch.apply(l.elem, arguments)
                    }
                    ,
                    l.elem = e),
                    t = (t || "").match(je) || [""],
                    s = t.length; s--; )
                        a = et.exec(t[s]) || [],
                        d = m = a[1],
                        h = (a[2] || "").split(".").sort(),
                        d && (u = ge.event.special[d] || {},
                        d = (r ? u.delegateType : u.bindType) || d,
                        u = ge.event.special[d] || {},
                        p = ge.extend({
                            type: d,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && ge.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, c),
                        (f = o[d]) || (f = o[d] = [],
                        f.delegateCount = 0,
                        u.setup && !1 !== u.setup.call(e, i, h, l) || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))),
                        u.add && (u.add.call(e, p),
                        p.handler.guid || (p.handler.guid = n.guid)),
                        r ? f.splice(f.delegateCount++, 0, p) : f.push(p),
                        ge.event.global[d] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, c, u, l, p, f, d, h, m, g = ge.hasData(e) && ge._data(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(je) || [""],
                    u = t.length; u--; )
                        if (s = et.exec(t[u]) || [],
                        d = m = s[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                            for (p = ge.event.special[d] || {},
                            d = (i ? p.delegateType : p.bindType) || d,
                            f = l[d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            c = a = f.length; a--; )
                                o = f[a],
                                !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(a, 1),
                                o.selector && f.delegateCount--,
                                p.remove && p.remove.call(e, o));
                            c && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || ge.removeEvent(e, d, g.handle),
                            delete l[d])
                        } else
                            for (d in l)
                                ge.event.remove(e, d + t[u], n, i, !0);
                    ge.isEmptyObject(l) && (delete g.handle,
                    ge._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var a, o, s, c, u, l, p, f = [i || se], d = he.call(e, "type") ? e.type : e, h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = l = i = i || se,
                3 !== i.nodeType && 8 !== i.nodeType && !Ze.test(d + ge.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
                d = h.shift(),
                h.sort()),
                o = d.indexOf(":") < 0 && "on" + d,
                e = e[ge.expando] ? e : new ge.Event(d,"object" == typeof e && e),
                e.isTrigger = r ? 2 : 3,
                e.namespace = h.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = undefined,
                e.target || (e.target = i),
                t = null == t ? [e] : ge.makeArray(t, [e]),
                u = ge.event.special[d] || {},
                r || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                    if (!r && !u.noBubble && !ge.isWindow(i)) {
                        for (c = u.delegateType || d,
                        Ze.test(c + d) || (s = s.parentNode); s; s = s.parentNode)
                            f.push(s),
                            l = s;
                        l === (i.ownerDocument || se) && f.push(l.defaultView || l.parentWindow || n)
                    }
                    for (p = 0; (s = f[p++]) && !e.isPropagationStopped(); )
                        e.type = p > 1 ? c : u.bindType || d,
                        a = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"),
                        a && a.apply(s, t),
                        (a = o && s[o]) && a.apply && Oe(s) && (e.result = a.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    if (e.type = d,
                    !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && Oe(i) && o && i[d] && !ge.isWindow(i)) {
                        l = i[o],
                        l && (i[o] = null),
                        ge.event.triggered = d;
                        try {
                            i[d]()
                        } catch (m) {}
                        ge.event.triggered = undefined,
                        l && (i[o] = l)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ge.event.fix(e);
                var t, n, i, r, a, o = [], s = ce.call(arguments), c = (ge._data(this, "events") || {})[e.type] || [], u = ge.event.special[e.type] || {};
                if (s[0] = e,
                e.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (o = ge.event.handlers.call(this, e, c),
                    t = 0; (r = o[t++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = r.elem,
                        n = 0; (a = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                            e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a,
                            e.data = a.data,
                            (i = ((ge.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(),
                            e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o = [], s = t.delegateCount, c = e.target;
                if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                            for (i = [],
                            n = 0; n < s; n++)
                                a = t[n],
                                r = a.selector + " ",
                                i[r] === undefined && (i[r] = a.needsContext ? ge(r, this).index(c) > -1 : ge.find(r, this, null, [c]).length),
                                i[r] && i.push(a);
                            i.length && o.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }),
                o
            },
            fix: function(e) {
                if (e[ge.expando])
                    return e;
                var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Ye.test(r) ? this.mouseHooks : Xe.test(r) ? this.keyHooks : {}),
                i = o.props ? this.props.concat(o.props) : this.props,
                e = new ge.Event(a),
                t = i.length; t--; )
                    n = i[t],
                    e[n] = a[n];
                return e.target || (e.target = a.srcElement || se),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, a = t.button, o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se,
                    r = i.documentElement,
                    n = i.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                    e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus)
                            try {
                                return this.focus(),
                                !1
                            } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click)
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return ge.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = ge.extend(new ge.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ge.event.trigger(i, null, t),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        ge.removeEvent = se.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
            e.detachEvent(i, n))
        }
        ,
        ge.Event = function(e, t) {
            if (!(this instanceof ge.Event))
                return new ge.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? x : T) : this.type = e,
            t && ge.extend(this, t),
            this.timeStamp = e && e.timeStamp || ge.now(),
            this[ge.expando] = !0
        }
        ,
        ge.Event.prototype = {
            constructor: ge.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = x,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = x,
                e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = x,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        ge.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ge.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, r = e.relatedTarget, a = e.handleObj;
                    return r && (r === i || ge.contains(i, r)) || (e.type = a.origType,
                    n = a.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        me.submit || (ge.event.special.submit = {
            setup: function() {
                if (ge.nodeName(this, "form"))
                    return !1;
                ge.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target
                      , n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : undefined;
                    n && !ge._data(n, "submit") && (ge.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }),
                    ge._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble,
                this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (ge.nodeName(this, "form"))
                    return !1;
                ge.event.remove(this, "._submit")
            }
        }),
        me.change || (ge.event.special.change = {
            setup: function() {
                if (Ke.test(this.nodeName))
                    return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }),
                    ge.event.add(this, "click._change", function(e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1),
                        ge.event.simulate("change", this, e)
                    })),
                    !1;
                ge.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ke.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                    }),
                    ge._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                    return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ge.event.remove(this, "._change"),
                !Ke.test(this.nodeName)
            }
        }),
        me.focusin || ge.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ge.event.simulate(t, e.target, ge.event.fix(e))
            };
            ge.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , r = ge._data(i, t);
                    r || i.addEventListener(e, n, !0),
                    ge._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , r = ge._data(i, t) - 1;
                    r ? ge._data(i, t, r) : (i.removeEventListener(e, n, !0),
                    ge._removeData(i, t))
                }
            }
        }),
        ge.fn.extend({
            on: function(e, t, n, i) {
                return S(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return S(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = undefined),
                !1 === n && (n = T),
                this.each(function() {
                    ge.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ge.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return ge.event.trigger(e, t, n, !0)
            }
        });
        var tt = / jQuery\d+="(?:null|\d+)"/g
          , nt = new RegExp("<(?:" + Ve + ")[\\s/>]","i")
          , it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
          , rt = /<script|<style|<link/i
          , at = /checked\s*(?:[^=]|=\s*.checked.)/i
          , ot = /^true\/(.*)/
          , st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , ct = y(se)
          , ut = ct.appendChild(se.createElement("div"));
        ge.extend({
            htmlPrefilter: function(e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, s, c = ge.contains(e.ownerDocument, e);
                if (me.html5Clone || ge.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML,
                ut.removeChild(a = ut.firstChild)),
                !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                    for (i = v(a),
                    s = v(e),
                    o = 0; null != (r = s[o]); ++o)
                        i[o] && q(r, i[o]);
                if (t)
                    if (n)
                        for (s = s || v(e),
                        i = i || v(a),
                        o = 0; null != (r = s[o]); o++)
                            D(r, i[o]);
                    else
                        D(e, a);
                return i = v(a, "script"),
                i.length > 0 && b(i, !c && v(e, "script")),
                i = s = r = null,
                a
            },
            cleanData: function(e, t) {
                for (var n, i, r, a, o = 0, s = ge.expando, c = ge.cache, u = me.attributes, l = ge.event.special; null != (n = e[o]); o++)
                    if ((t || Oe(n)) && (r = n[s],
                    a = r && c[r])) {
                        if (a.events)
                            for (i in a.events)
                                l[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, a.handle);
                        c[r] && (delete c[r],
                        u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s),
                        oe.push(r))
                    }
            }
        }),
        ge.fn.extend({
            domManip: j,
            detach: function(e) {
                return A(this, e, !0)
            },
            remove: function(e) {
                return A(this, e)
            },
            text: function(e) {
                return Re(this, function(e) {
                    return e === undefined ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        C(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ge.cleanData(v(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return ge.clone(this, e, t)
                })
            },
            html: function(e) {
                return Re(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (e === undefined)
                        return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : undefined;
                    if ("string" == typeof e && !rt.test(e) && (me.htmlSerialize || !nt.test(e)) && (me.leadingWhitespace || !Ue.test(e)) && !We[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ge.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (ge.cleanData(v(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return j(this, arguments, function(t) {
                    var n = this.parentNode;
                    ge.inArray(this, e) < 0 && (ge.cleanData(v(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        ge.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ge.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = ge(e), o = a.length - 1; i <= o; i++)
                    n = i === o ? this : this.clone(!0),
                    ge(a[i])[t](n),
                    le.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var lt, pt = {
            HTML: "block",
            BODY: "block"
        }, ft = /^margin/, dt = new RegExp("^(" + Le + ")(?!px)[a-z%]+$","i"), ht = function(e, t, n, i) {
            var r, a, o = {};
            for (a in t)
                o[a] = e.style[a],
                e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t)
                e.style[a] = o[a];
            return r
        }, mt = se.documentElement;
        !function() {
            function e() {
                var e, l, p = se.documentElement;
                p.appendChild(c),
                u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                t = r = s = !1,
                i = o = !0,
                n.getComputedStyle && (l = n.getComputedStyle(u),
                t = "1%" !== (l || {}).top,
                s = "2px" === (l || {}).marginLeft,
                r = "4px" === (l || {
                    width: "4px"
                }).width,
                u.style.marginRight = "50%",
                i = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight,
                e = u.appendChild(se.createElement("div")),
                e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                e.style.marginRight = e.style.width = "0",
                u.style.width = "1px",
                o = !parseFloat((n.getComputedStyle(e) || {}).marginRight),
                u.removeChild(e)),
                u.style.display = "none",
                a = 0 === u.getClientRects().length,
                a && (u.style.display = "",
                u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                u.childNodes[0].style.borderCollapse = "separate",
                e = u.getElementsByTagName("td"),
                e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                (a = 0 === e[0].offsetHeight) && (e[0].style.display = "",
                e[1].style.display = "none",
                a = 0 === e[0].offsetHeight)),
                p.removeChild(c)
            }
            var t, i, r, a, o, s, c = se.createElement("div"), u = se.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5",
            me.opacity = "0.5" === u.style.opacity,
            me.cssFloat = !!u.style.cssFloat,
            u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            me.clearCloneStyle = "content-box" === u.style.backgroundClip,
            c = se.createElement("div"),
            c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            u.innerHTML = "",
            c.appendChild(u),
            me.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
            ge.extend(me, {
                reliableHiddenOffsets: function() {
                    return null == t && e(),
                    a
                },
                boxSizingReliable: function() {
                    return null == t && e(),
                    r
                },
                pixelMarginRight: function() {
                    return null == t && e(),
                    i
                },
                pixelPosition: function() {
                    return null == t && e(),
                    t
                },
                reliableMarginRight: function() {
                    return null == t && e(),
                    o
                },
                reliableMarginLeft: function() {
                    return null == t && e(),
                    s
                }
            }))
        }();
        var gt, yt, vt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (gt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
        ,
        yt = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || gt(e),
            o = n ? n.getPropertyValue(t) || n[t] : undefined,
            "" !== o && o !== undefined || ge.contains(e.ownerDocument, e) || (o = ge.style(e, t)),
            n && !me.pixelMarginRight() && dt.test(o) && ft.test(t) && (i = s.width,
            r = s.minWidth,
            a = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = o,
            o = n.width,
            s.width = i,
            s.minWidth = r,
            s.maxWidth = a),
            o === undefined ? o : o + ""
        }
        ) : mt.currentStyle && (gt = function(e) {
            return e.currentStyle
        }
        ,
        yt = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || gt(e),
            o = n ? n[t] : undefined,
            null == o && s && s[t] && (o = s[t]),
            dt.test(o) && !vt.test(t) && (i = s.left,
            r = e.runtimeStyle,
            a = r && r.left,
            a && (r.left = e.currentStyle.left),
            s.left = "fontSize" === t ? "1em" : o,
            o = s.pixelLeft + "px",
            s.left = i,
            a && (r.left = a)),
            o === undefined ? o : o + "" || "auto"
        }
        );
        var bt = /alpha\([^)]*\)/i
          , wt = /opacity\s*=\s*([^)]*)/i
          , _t = /^(none|table(?!-c[ea]).+)/
          , xt = new RegExp("^(" + Le + ")(.*)$","i")
          , Tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , kt = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , St = ["Webkit", "O", "Moz", "ms"]
          , Ct = se.createElement("div").style;
        ge.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = yt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": me.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = ge.camelCase(t), c = e.style;
                    if (t = ge.cssProps[s] || (ge.cssProps[s] = B(s) || s),
                    o = ge.cssHooks[t] || ge.cssHooks[s],
                    n === undefined)
                        return o && "get"in o && (r = o.get(e, !1, i)) !== undefined ? r : c[t];
                    if (a = typeof n,
                    "string" === a && (r = Pe.exec(n)) && r[1] && (n = g(e, t, r),
                    a = "number"),
                    null != n && n === n && ("number" === a && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")),
                    me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    !(o && "set"in o && (n = o.set(e, n, i)) === undefined)))
                        try {
                            c[t] = n
                        } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, s = ge.camelCase(t);
                return t = ge.cssProps[s] || (ge.cssProps[s] = B(s) || s),
                o = ge.cssHooks[t] || ge.cssHooks[s],
                o && "get"in o && (a = o.get(e, !0, n)),
                a === undefined && (a = yt(e, t, i)),
                "normal" === a && t in kt && (a = kt[t]),
                "" === n || n ? (r = parseFloat(a),
                !0 === n || isFinite(r) ? r || 0 : a) : a
            }
        }),
        ge.each(["height", "width"], function(e, t) {
            ge.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return _t.test(ge.css(e, "display")) && 0 === e.offsetWidth ? ht(e, Tt, function() {
                            return z(e, t, i)
                        }) : z(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && gt(e);
                    return P(e, n, i ? F(e, t, i, me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }),
        me.opacity || (ge.cssHooks.opacity = {
            get: function(e, t) {
                return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style
                  , i = e.currentStyle
                  , r = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                  , a = i && i.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === ge.trim(a.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === t || i && !i.filter) || (n.filter = bt.test(a) ? a.replace(bt, r) : a + " " + r)
            }
        }),
        ge.cssHooks.marginRight = I(me.reliableMarginRight, function(e, t) {
            if (t)
                return ht(e, {
                    display: "inline-block"
                }, yt, [e, "marginRight"])
        }),
        ge.cssHooks.marginLeft = I(me.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(yt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px"
        }),
        ge.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ge.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        r[e + Fe[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            },
            ft.test(e) || (ge.cssHooks[e + t].set = P)
        }),
        ge.fn.extend({
            css: function(e, t) {
                return Re(this, function(e, t, n) {
                    var i, r, a = {}, o = 0;
                    if (ge.isArray(t)) {
                        for (i = gt(e),
                        r = t.length; o < r; o++)
                            a[t[o]] = ge.css(e, t[o], !1, i);
                        return a
                    }
                    return n !== undefined ? ge.style(e, t, n) : ge.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ze(this) ? ge(this).show() : ge(this).hide()
                })
            }
        }),
        ge.Tween = R,
        R.prototype = {
            constructor: R,
            init: function(e, t, n, i, r, a) {
                this.elem = e,
                this.prop = n,
                this.easing = r || ge.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = a || (ge.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : R.propHooks._default.set(this),
                this
            }
        },
        R.prototype.init.prototype = R.prototype,
        R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ge.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        ge.fx = R.prototype.init,
        ge.fx.step = {};
        var Et, Nt, Dt = /^(?:toggle|show|hide)$/, qt = /queueHooks$/;
        ge.Animation = ge.extend(W, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, Pe.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(je);
                for (var n, i = 0, r = e.length; i < r; i++)
                    n = e[i],
                    W.tweeners[n] = W.tweeners[n] || [],
                    W.tweeners[n].unshift(t)
            },
            prefilters: [U],
            prefilter: function(e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }),
        ge.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ge.extend({}, e) : {
                complete: n || !n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ge.isFunction(t) && t
            };
            return i.duration = ge.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ge.fx.speeds ? ge.fx.speeds[i.duration] : ge.fx.speeds._default,
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                ge.isFunction(i.old) && i.old.call(this),
                i.queue && ge.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        ge.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ge.isEmptyObject(e)
                  , a = ge.speed(t, n, i)
                  , o = function() {
                    var t = W(this, ge.extend({}, e), a);
                    (r || ge._data(this, "finish")) && t.stop(!0)
                };
                return o.finish = o,
                r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = undefined),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , r = null != e && e + "queueHooks"
                      , a = ge.timers
                      , o = ge._data(this);
                    if (r)
                        o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o)
                            o[r] && o[r].stop && qt.test(r) && i(o[r]);
                    for (r = a.length; r--; )
                        a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n),
                        t = !1,
                        a.splice(r, 1));
                    !t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = ge._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = ge.timers, o = i ? i.length : 0;
                    for (n.finish = !0,
                    ge.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = a.length; t--; )
                        a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                        a.splice(t, 1));
                    for (t = 0; t < o; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ge.each(["toggle", "show", "hide"], function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, i, r)
            }
        }),
        ge.each({
            slideDown: Q("show"),
            slideUp: Q("hide"),
            slideToggle: Q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ge.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        ge.timers = [],
        ge.fx.tick = function() {
            var e, t = ge.timers, n = 0;
            for (Et = ge.now(); n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || ge.fx.stop(),
            Et = undefined
        }
        ,
        ge.fx.timer = function(e) {
            ge.timers.push(e),
            e() ? ge.fx.start() : ge.timers.pop()
        }
        ,
        ge.fx.interval = 13,
        ge.fx.start = function() {
            Nt || (Nt = n.setInterval(ge.fx.tick, ge.fx.interval))
        }
        ,
        ge.fx.stop = function() {
            n.clearInterval(Nt),
            Nt = null
        }
        ,
        ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ge.fn.delay = function(e, t) {
            return e = ge.fx ? ge.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(r)
                }
            })
        }
        ,
        function() {
            var e, t = se.createElement("input"), n = se.createElement("div"), i = se.createElement("select"), r = i.appendChild(se.createElement("option"));
            n = se.createElement("div"),
            n.setAttribute("className", "t"),
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            e = n.getElementsByTagName("a")[0],
            t.setAttribute("type", "checkbox"),
            n.appendChild(t),
            e = n.getElementsByTagName("a")[0],
            e.style.cssText = "top:1px",
            me.getSetAttribute = "t" !== n.className,
            me.style = /top/.test(e.getAttribute("style")),
            me.hrefNormalized = "/a" === e.getAttribute("href"),
            me.checkOn = !!t.value,
            me.optSelected = r.selected,
            me.enctype = !!se.createElement("form").enctype,
            i.disabled = !0,
            me.optDisabled = !r.disabled,
            t = se.createElement("input"),
            t.setAttribute("value", ""),
            me.input = "" === t.getAttribute("value"),
            t.value = "t",
            t.setAttribute("type", "radio"),
            me.radioValue = "t" === t.value
        }();
        var jt = /\r/g
          , At = /[\x20\t\r\n\f]+/g;
        ge.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)
                        return i = ge.isFunction(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? e.call(this, n, ge(this).val()) : e,
                            null == r ? r = "" : "number" == typeof r ? r += "" : ge.isArray(r) && (r = ge.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, r, "value") !== undefined || (this.value = r))
                        });
                    if (r)
                        return (t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()]) && "get"in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value,
                        "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
                }
            }
        }),
        ge.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ge.find.attr(e, "value");
                        return null != t ? t : ge.trim(ge.text(e)).replace(At, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, c = r < 0 ? s : a ? r : 0; c < s; c++)
                            if (n = i[c],
                            (n.selected || c === r) && (me.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ge(n).val(),
                                a)
                                    return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = ge.makeArray(t), o = r.length; o--; )
                            if (i = r[o],
                            ge.inArray(ge.valHooks.option.get(i), a) > -1)
                                try {
                                    i.selected = n = !0
                                } catch (s) {
                                    i.scrollHeight
                                }
                            else
                                i.selected = !1;
                        return n || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        ge.each(["radio", "checkbox"], function() {
            ge.valHooks[this] = {
                set: function(e, t) {
                    if (ge.isArray(t))
                        return e.checked = ge.inArray(ge(e).val(), t) > -1
                }
            },
            me.checkOn || (ge.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        });
        var Mt, Ot, It = ge.expr.attrHandle, Bt = /^(?:checked|selected)$/i, Lt = me.getSetAttribute, Pt = me.input;
        ge.fn.extend({
            attr: function(e, t) {
                return Re(this, ge.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ge.removeAttr(this, e)
                })
            }
        }),
        ge.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === a && ge.isXMLDoc(e) || (t = t.toLowerCase(),
                    r = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? Ot : Mt)),
                    n !== undefined ? null === n ? void ge.removeAttr(e, t) : r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""),
                    n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = ge.find.attr(e, t),
                    null == i ? undefined : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!me.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0, a = t && t.match(je);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++]; )
                        i = ge.propFix[n] || n,
                        ge.expr.match.bool.test(n) ? Pt && Lt || !Bt.test(n) ? e[i] = !1 : e[ge.camelCase("default-" + n)] = e[i] = !1 : ge.attr(e, n, ""),
                        e.removeAttribute(Lt ? n : i)
            }
        }),
        Ot = {
            set: function(e, t, n) {
                return !1 === t ? ge.removeAttr(e, n) : Pt && Lt || !Bt.test(n) ? e.setAttribute(!Lt && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = It[t] || ge.find.attr;
            Pt && Lt || !Bt.test(t) ? It[t] = function(e, t, i) {
                var r, a;
                return i || (a = It[t],
                It[t] = r,
                r = null != n(e, t, i) ? t.toLowerCase() : null,
                It[t] = a),
                r
            }
            : It[t] = function(e, t, n) {
                if (!n)
                    return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
        Pt && Lt || (ge.attrHooks.value = {
            set: function(e, t, n) {
                if (!ge.nodeName(e, "input"))
                    return Mt && Mt.set(e, t, n);
                e.defaultValue = t
            }
        }),
        Lt || (Mt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                i.value = t += "",
                "value" === n || t === e.getAttribute(n))
                    return t
            }
        },
        It.id = It.name = It.coords = function(e, t, n) {
            var i;
            if (!n)
                return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }
        ,
        ge.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified)
                    return n.value
            },
            set: Mt.set
        },
        ge.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Mt.set(e, "" !== t && t, n)
            }
        },
        ge.each(["width", "height"], function(e, t) {
            ge.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n)
                        return e.setAttribute(t, "auto"),
                        n
                }
            }
        })),
        me.style || (ge.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Ft = /^(?:input|select|textarea|button|object)$/i
          , zt = /^(?:a|area)$/i;
        ge.fn.extend({
            prop: function(e, t) {
                return Re(this, ge.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ge.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = undefined,
                        delete this[e]
                    } catch (t) {}
                })
            }
        }),
        ge.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return 1 === a && ge.isXMLDoc(e) || (t = ge.propFix[t] || t,
                    r = ge.propHooks[t]),
                    n !== undefined ? r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ge.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ft.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        me.hrefNormalized || ge.each(["href", "src"], function(e, t) {
            ge.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        me.optSelected || (ge.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex),
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ge.propFix[this.toLowerCase()] = this
        }),
        me.enctype || (ge.propFix.enctype = "encoding");
        var Rt = /[\t\r\n\f]/g;
        ge.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s, c = 0;
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).addClass(e.call(this, t, G(this)))
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[c++]; )
                        if (r = G(n),
                        i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                            for (o = 0; a = t[o++]; )
                                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = ge.trim(i),
                            r !== s && ge.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s, c = 0;
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).removeClass(e.call(this, t, G(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[c++]; )
                        if (r = G(n),
                        i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                            for (o = 0; a = t[o++]; )
                                for (; i.indexOf(" " + a + " ") > -1; )
                                    i = i.replace(" " + a + " ", " ");
                            s = ge.trim(i),
                            r !== s && ge.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                    ge(this).toggleClass(e.call(this, n, G(this), t), t)
                }) : this.each(function() {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0,
                        r = ge(this),
                        a = e.match(je) || []; t = a[i++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        e !== undefined && "boolean" !== n || (t = G(this),
                        t && ge._data(this, "__className__", t),
                        ge.attr(this, "class", t || !1 === e ? "" : ge._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + G(n) + " ").replace(Rt, " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        }),
        ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ge.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ge.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Ht = n.location
          , Qt = ge.now()
          , $t = /\?/
          , Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ge.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse)
                return n.JSON.parse(e + "");
            var t, i = null, r = ge.trim(e + "");
            return r && !ge.trim(r.replace(Ut, function(e, n, r, a) {
                return t && n && (i = 0),
                0 === i ? e : (t = r || n,
                i += !a - !r,
                "")
            })) ? Function("return " + r)() : ge.error("Invalid JSON: " + e)
        }
        ,
        ge.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e)
                return null;
            try {
                n.DOMParser ? (i = new n.DOMParser,
                t = i.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"),
                t.async = "false",
                t.loadXML(e))
            } catch (r) {
                t = undefined
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
            t
        }
        ;
        var Vt = /#.*$/
          , Wt = /([?&])_=[^&]*/
          , Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
          , Jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Kt = /^(?:GET|HEAD)$/
          , Xt = /^\/\//
          , Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
          , Zt = {}
          , en = {}
          , tn = "*/".concat("*")
          , nn = Ht.href
          , rn = Yt.exec(nn.toLowerCase()) || [];
        ge.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: nn,
                type: "GET",
                isLocal: Jt.test(rn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ge.parseJSON,
                    "text xml": ge.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? X(X(e, ge.ajaxSettings), t) : X(ge.ajaxSettings, e)
            },
            ajaxPrefilter: J(Zt),
            ajaxTransport: J(en),
            ajax: function(e, t) {
                function i(e, t, i, r) {
                    var a, p, v, b, _, T = t;
                    2 !== w && (w = 2,
                    c && n.clearTimeout(c),
                    l = undefined,
                    s = r || "",
                    x.readyState = e > 0 ? 4 : 0,
                    a = e >= 200 && e < 300 || 304 === e,
                    i && (b = Y(f, x, i)),
                    b = Z(f, b, x, a),
                    a ? (f.ifModified && (_ = x.getResponseHeader("Last-Modified"),
                    _ && (ge.lastModified[o] = _),
                    (_ = x.getResponseHeader("etag")) && (ge.etag[o] = _)),
                    204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                    p = b.data,
                    v = b.error,
                    a = !v)) : (v = T,
                    !e && T || (T = "error",
                    e < 0 && (e = 0))),
                    x.status = e,
                    x.statusText = (t || T) + "",
                    a ? m.resolveWith(d, [p, T, x]) : m.rejectWith(d, [x, T, v]),
                    x.statusCode(y),
                    y = undefined,
                    u && h.trigger(a ? "ajaxSuccess" : "ajaxError", [x, f, a ? p : v]),
                    g.fireWith(d, [x, T]),
                    u && (h.trigger("ajaxComplete", [x, f]),
                    --ge.active || ge.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                e = undefined),
                t = t || {};
                var r, a, o, s, c, u, l, p, f = ge.ajaxSetup({}, t), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? ge(d) : ge.event, m = ge.Deferred(), g = ge.Callbacks("once memory"), y = f.statusCode || {}, v = {}, b = {}, w = 0, _ = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!p)
                                for (p = {}; t = Gt.exec(s); )
                                    p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e,
                        v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return w || (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else
                                x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return l && l.abort(t),
                        i(0, t),
                        this
                    }
                };
                if (m.promise(x).complete = g.add,
                x.success = x.done,
                x.error = x.fail,
                f.url = ((e || f.url || nn) + "").replace(Vt, "").replace(Xt, rn[1] + "//"),
                f.type = t.method || t.type || f.method || f.type,
                f.dataTypes = ge.trim(f.dataType || "*").toLowerCase().match(je) || [""],
                null == f.crossDomain && (r = Yt.exec(f.url.toLowerCase()),
                f.crossDomain = !(!r || r[1] === rn[1] && r[2] === rn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (rn[3] || ("http:" === rn[1] ? "80" : "443")))),
                f.data && f.processData && "string" != typeof f.data && (f.data = ge.param(f.data, f.traditional)),
                K(Zt, f, t, x),
                2 === w)
                    return x;
                u = ge.event && f.global,
                u && 0 == ge.active++ && ge.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Kt.test(f.type),
                o = f.url,
                f.hasContent || (f.data && (o = f.url += ($t.test(o) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (f.url = Wt.test(o) ? o.replace(Wt, "$1_=" + Qt++) : o + ($t.test(o) ? "&" : "?") + "_=" + Qt++)),
                f.ifModified && (ge.lastModified[o] && x.setRequestHeader("If-Modified-Since", ge.lastModified[o]),
                ge.etag[o] && x.setRequestHeader("If-None-Match", ge.etag[o])),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType),
                x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers)
                    x.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (!1 === f.beforeSend.call(d, x, f) || 2 === w))
                    return x.abort();
                _ = "abort";
                for (a in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    x[a](f[a]);
                if (l = K(en, f, t, x)) {
                    if (x.readyState = 1,
                    u && h.trigger("ajaxSend", [x, f]),
                    2 === w)
                        return x;
                    f.async && f.timeout > 0 && (c = n.setTimeout(function() {
                        x.abort("timeout")
                    }, f.timeout));
                    try {
                        w = 1,
                        l.send(v, i)
                    } catch (T) {
                        if (!(w < 2))
                            throw T;
                        i(-1, T)
                    }
                } else
                    i(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, n) {
                return ge.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ge.get(e, undefined, t, "script")
            }
        }),
        ge.each(["get", "post"], function(e, t) {
            ge[t] = function(e, n, i, r) {
                return ge.isFunction(n) && (r = r || i,
                i = n,
                n = undefined),
                ge.ajax(ge.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, ge.isPlainObject(e) && e))
            }
        }),
        ge._evalUrl = function(e) {
            return ge.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        ge.fn.extend({
            wrapAll: function(e) {
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ge.isFunction(e) ? this.each(function(t) {
                    ge(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ge(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ge.isFunction(e);
                return this.each(function(n) {
                    ge(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        ge.expr.filters.hidden = function(e) {
            return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
        }
        ,
        ge.expr.filters.visible = function(e) {
            return !ge.expr.filters.hidden(e)
        }
        ;
        var an = /%20/g
          , on = /\[\]$/
          , sn = /\r?\n/g
          , cn = /^(?:submit|button|image|reset|file)$/i
          , un = /^(?:input|select|textarea|keygen)/i;
        ge.param = function(e, t) {
            var n, i = [], r = function(e, t) {
                t = ge.isFunction(t) ? t() : null == t ? "" : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === undefined && (t = ge.ajaxSettings && ge.ajaxSettings.traditional),
            ge.isArray(e) || e.jquery && !ge.isPlainObject(e))
                ge.each(e, function() {
                    r(this.name, this.value)
                });
            else
                for (n in e)
                    ne(n, e[n], t, r);
            return i.join("&").replace(an, "+")
        }
        ,
        ge.fn.extend({
            serialize: function() {
                return ge.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ge.prop(this, "elements");
                    return e ? ge.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ge(this).is(":disabled") && un.test(this.nodeName) && !cn.test(e) && (this.checked || !He.test(e))
                }).map(function(e, t) {
                    var n = ge(this).val();
                    return null == n ? null : ge.isArray(n) ? ge.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(sn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(sn, "\r\n")
                    }
                }).get()
            }
        }),
        ge.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
            return this.isLocal ? re() : se.documentMode > 8 ? ie() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ie() || re()
        }
        : ie;
        var ln = 0
          , pn = {}
          , fn = ge.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in pn)
                pn[e](undefined, !0)
        }),
        me.cors = !!fn && "withCredentials"in fn,
        fn = me.ajax = !!fn,
        fn && ge.ajaxTransport(function(e) {
            if (!e.crossDomain || me.cors) {
                var t;
                return {
                    send: function(i, r) {
                        var a, o = e.xhr(), s = ++ln;
                        if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (a in e.xhrFields)
                                o[a] = e.xhrFields[a];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i)
                            i[a] !== undefined && o.setRequestHeader(a, i[a] + "");
                        o.send(e.hasContent && e.data || null),
                        t = function(n, i) {
                            var a, c, u;
                            if (t && (i || 4 === o.readyState))
                                if (delete pn[s],
                                t = undefined,
                                o.onreadystatechange = ge.noop,
                                i)
                                    4 !== o.readyState && o.abort();
                                else {
                                    u = {},
                                    a = o.status,
                                    "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        c = o.statusText
                                    } catch (l) {
                                        c = ""
                                    }
                                    a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && r(a, c, u, o.getAllResponseHeaders())
                        }
                        ,
                        e.async ? 4 === o.readyState ? n.setTimeout(t) : o.onreadystatechange = pn[s] = t : t()
                    },
                    abort: function() {
                        t && t(undefined, !0)
                    }
                }
            }
        }),
        ge.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ge.globalEval(e),
                    e
                }
            }
        }),
        ge.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
            e.global = !1)
        }),
        ge.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = se.head || ge("head")[0] || se.documentElement;
                return {
                    send: function(i, r) {
                        t = se.createElement("script"),
                        t.async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                        t.src = e.url,
                        t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null,
                            n || r(200, "success"))
                        }
                        ,
                        n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var dn = []
          , hn = /(=)\?(?=&|$)|\?\?/;
        ge.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = dn.pop() || ge.expando + "_" + Qt++;
                return this[e] = !0,
                e
            }
        }),
        ge.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, a, o, s = !1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(hn, "$1" + r) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return o || ge.error(r + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                a = n[r],
                n[r] = function() {
                    o = arguments
                }
                ,
                i.always(function() {
                    a === undefined ? ge(n).removeProp(r) : n[r] = a,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                    dn.push(r)),
                    o && ge.isFunction(a) && a(o[0]),
                    o = a = undefined
                }),
                "script"
        }),
        ge.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || se;
            var i = Se.exec(e)
              , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = _([e], t, r),
            r && r.length && ge(r).remove(),
            ge.merge([], i.childNodes))
        }
        ;
        var mn = ge.fn.load;
        ge.fn.load = function(e, t, n) {
            if ("string" != typeof e && mn)
                return mn.apply(this, arguments);
            var i, r, a, o = this, s = e.indexOf(" ");
            return s > -1 && (i = ge.trim(e.slice(s, e.length)),
            e = e.slice(0, s)),
            ge.isFunction(t) ? (n = t,
            t = undefined) : t && "object" == typeof t && (r = "POST"),
            o.length > 0 && ge.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments,
                o.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ge.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ge.expr.filters.animated = function(e) {
            return ge.grep(ge.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        ge.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, c, u, l = ge.css(e, "position"), p = ge(e), f = {};
                "static" === l && (e.style.position = "relative"),
                s = p.offset(),
                a = ge.css(e, "top"),
                c = ge.css(e, "left"),
                u = ("absolute" === l || "fixed" === l) && ge.inArray("auto", [a, c]) > -1,
                u ? (i = p.position(),
                o = i.top,
                r = i.left) : (o = parseFloat(a) || 0,
                r = parseFloat(c) || 0),
                ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + o),
                null != t.left && (f.left = t.left - s.left + r),
                "using"in t ? t.using.call(e, f) : p.css(f)
            }
        },
        ge.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return e === undefined ? this : this.each(function(t) {
                        ge.offset.setOffset(this, e, t)
                    });
                var t, n, i = {
                    top: 0,
                    left: 0
                }, r = this[0], a = r && r.ownerDocument;
                if (a)
                    return t = a.documentElement,
                    ge.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()),
                    n = ae(a),
                    {
                        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                    return "fixed" === ge.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    ge.nodeName(e[0], "html") || (n = e.offset()),
                    n.top += ge.css(e[0], "borderTopWidth", !0),
                    n.left += ge.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - ge.css(i, "marginTop", !0),
                        left: t.left - n.left - ge.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position"); )
                        e = e.offsetParent;
                    return e || mt
                })
            }
        }),
        ge.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            ge.fn[e] = function(i) {
                return Re(this, function(e, i, r) {
                    var a = ae(e);
                    if (r === undefined)
                        return a ? t in a ? a[t] : a.document.documentElement[i] : e[i];
                    a ? a.scrollTo(n ? ge(a).scrollLeft() : r, n ? r : ge(a).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }),
        ge.each(["top", "left"], function(e, t) {
            ge.cssHooks[t] = I(me.pixelPosition, function(e, n) {
                if (n)
                    return n = yt(e, t),
                    dt.test(n) ? ge(e).position()[t] + "px" : n
            })
        }),
        ge.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ge.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ge.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                      , o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return Re(this, function(t, n, i) {
                        var r;
                        return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                        Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? ge.css(t, n, o) : ge.style(t, n, i, o)
                    }, t, a ? i : undefined, a, null)
                }
            })
        }),
        ge.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        ge.fn.size = function() {
            return this.length
        }
        ,
        ge.fn.andSelf = ge.fn.addBack,
        i = [],
        (r = function() {
            return ge
        }
        .apply(t, i)) !== undefined && (e.exports = r);
        var gn = n.jQuery
          , yn = n.$;
        return ge.noConflict = function(e) {
            return n.$ === ge && (n.$ = yn),
            e && n.jQuery === ge && (n.jQuery = gn),
            ge
        }
        ,
        a || (n.jQuery = n.$ = ge),
        ge
    })
}
, function(e, t, n) {
    var i;
    !function(r) {
        function a(e, t) {
            return new p(e,t)
        }
        function o(e, t) {
            if (t < e.length + 11)
                return uv_alert("Message too long for RSA"),
                null;
            for (var n = new Array, i = e.length - 1; i >= 0 && t > 0; ) {
                var r = e.charCodeAt(i--);
                r < 128 ? n[--t] = r : r > 127 && r < 2048 ? (n[--t] = 63 & r | 128,
                n[--t] = r >> 6 | 192) : (n[--t] = 63 & r | 128,
                n[--t] = r >> 6 & 63 | 128,
                n[--t] = r >> 12 | 224)
            }
            n[--t] = 0;
            for (var a = new re, o = new Array; t > 2; ) {
                for (o[0] = 0; 0 == o[0]; )
                    a.nextBytes(o);
                n[--t] = o[0]
            }
            return n[--t] = 2,
            n[--t] = 0,
            new p(n)
        }
        function s() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        function c(e, t) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = a(e, 16),
            this.e = parseInt(t, 16)) : uv_alert("Invalid RSA public key")
        }
        function u(e) {
            return e.modPowInt(this.e, this.n)
        }
        function l(e) {
            var t = o(e, this.n.bitLength() + 7 >> 3);
            if (null == t)
                return null;
            var n = this.doPublic(t);
            if (null == n)
                return null;
            var i = n.toString(16);
            return 0 == (1 & i.length) ? i : "0" + i
        }
        function p(e, t, n) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }
        function f() {
            return new p(null)
        }
        function d(e, t, n, i, r, a) {
            for (; --a >= 0; ) {
                var o = t * this[e++] + n[i] + r;
                r = Math.floor(o / 67108864),
                n[i++] = 67108863 & o
            }
            return r
        }
        function h(e, t, n, i, r, a) {
            for (var o = 32767 & t, s = t >> 15; --a >= 0; ) {
                var c = 32767 & this[e]
                  , u = this[e++] >> 15
                  , l = s * c + u * o;
                c = o * c + ((32767 & l) << 15) + n[i] + (1073741823 & r),
                r = (c >>> 30) + (l >>> 15) + s * u + (r >>> 30),
                n[i++] = 1073741823 & c
            }
            return r
        }
        function m(e, t, n, i, r, a) {
            for (var o = 16383 & t, s = t >> 14; --a >= 0; ) {
                var c = 16383 & this[e]
                  , u = this[e++] >> 14
                  , l = s * c + u * o;
                c = o * c + ((16383 & l) << 14) + n[i] + r,
                r = (c >> 28) + (l >> 14) + s * u,
                n[i++] = 268435455 & c
            }
            return r
        }
        function g(e) {
            return fe.charAt(e)
        }
        function y(e, t) {
            var n = de[e.charCodeAt(t)];
            return null == n ? -1 : n
        }
        function v(e) {
            for (var t = this.t - 1; t >= 0; --t)
                e[t] = this[t];
            e.t = this.t,
            e.s = this.s
        }
        function b(e) {
            this.t = 1,
            this.s = e < 0 ? -1 : 0,
            e > 0 ? this[0] = e : e < -1 ? this[0] = e + DV : this.t = 0
        }
        function w(e) {
            var t = f();
            return t.fromInt(e),
            t
        }
        function _(e, t) {
            var n;
            if (16 == t)
                n = 4;
            else if (8 == t)
                n = 3;
            else if (256 == t)
                n = 8;
            else if (2 == t)
                n = 1;
            else if (32 == t)
                n = 5;
            else {
                if (4 != t)
                    return void this.fromRadix(e, t);
                n = 2
            }
            this.t = 0,
            this.s = 0;
            for (var i = e.length, r = !1, a = 0; --i >= 0; ) {
                var o = 8 == n ? 255 & e[i] : y(e, i);
                o < 0 ? "-" == e.charAt(i) && (r = !0) : (r = !1,
                0 == a ? this[this.t++] = o : a + n > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - a) - 1) << a,
                this[this.t++] = o >> this.DB - a) : this[this.t - 1] |= o << a,
                (a += n) >= this.DB && (a -= this.DB))
            }
            8 == n && 0 != (128 & e[0]) && (this.s = -1,
            a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
            this.clamp(),
            r && p.ZERO.subTo(this, this)
        }
        function x() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
                --this.t
        }
        function T(e) {
            if (this.s < 0)
                return "-" + this.negate().toString(e);
            var t;
            if (16 == e)
                t = 4;
            else if (8 == e)
                t = 3;
            else if (2 == e)
                t = 1;
            else if (32 == e)
                t = 5;
            else {
                if (4 != e)
                    return this.toRadix(e);
                t = 2
            }
            var n, i = (1 << t) - 1, r = !1, a = "", o = this.t, s = this.DB - o * this.DB % t;
            if (o-- > 0)
                for (s < this.DB && (n = this[o] >> s) > 0 && (r = !0,
                a = g(n)); o >= 0; )
                    s < t ? (n = (this[o] & (1 << s) - 1) << t - s,
                    n |= this[--o] >> (s += this.DB - t)) : (n = this[o] >> (s -= t) & i,
                    s <= 0 && (s += this.DB,
                    --o)),
                    n > 0 && (r = !0),
                    r && (a += g(n));
            return r ? a : "0"
        }
        function k() {
            var e = f();
            return p.ZERO.subTo(this, e),
            e
        }
        function S() {
            return this.s < 0 ? this.negate() : this
        }
        function C(e) {
            var t = this.s - e.s;
            if (0 != t)
                return t;
            var n = this.t;
            if (0 != (t = n - e.t))
                return t;
            for (; --n >= 0; )
                if (0 != (t = this[n] - e[n]))
                    return t;
            return 0
        }
        function E(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t,
            n += 16),
            0 != (t = e >> 8) && (e = t,
            n += 8),
            0 != (t = e >> 4) && (e = t,
            n += 4),
            0 != (t = e >> 2) && (e = t,
            n += 2),
            0 != (t = e >> 1) && (e = t,
            n += 1),
            n
        }
        function N() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + E(this[this.t - 1] ^ this.s & this.DM)
        }
        function D(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n)
                t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n)
                t[n] = 0;
            t.t = this.t + e,
            t.s = this.s
        }
        function q(e, t) {
            for (var n = e; n < this.t; ++n)
                t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0),
            t.s = this.s
        }
        function j(e, t) {
            var n, i = e % this.DB, r = this.DB - i, a = (1 << r) - 1, o = Math.floor(e / this.DB), s = this.s << i & this.DM;
            for (n = this.t - 1; n >= 0; --n)
                t[n + o + 1] = this[n] >> r | s,
                s = (this[n] & a) << i;
            for (n = o - 1; n >= 0; --n)
                t[n] = 0;
            t[o] = s,
            t.t = this.t + o + 1,
            t.s = this.s,
            t.clamp()
        }
        function A(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t)
                return void (t.t = 0);
            var i = e % this.DB
              , r = this.DB - i
              , a = (1 << i) - 1;
            t[0] = this[n] >> i;
            for (var o = n + 1; o < this.t; ++o)
                t[o - n - 1] |= (this[o] & a) << r,
                t[o - n] = this[o] >> i;
            i > 0 && (t[this.t - n - 1] |= (this.s & a) << r),
            t.t = this.t - n,
            t.clamp()
        }
        function M(e, t) {
            for (var n = 0, i = 0, r = Math.min(e.t, this.t); n < r; )
                i += this[n] - e[n],
                t[n++] = i & this.DM,
                i >>= this.DB;
            if (e.t < this.t) {
                for (i -= e.s; n < this.t; )
                    i += this[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; n < e.t; )
                    i -= e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i -= e.s
            }
            t.s = i < 0 ? -1 : 0,
            i < -1 ? t[n++] = this.DV + i : i > 0 && (t[n++] = i),
            t.t = n,
            t.clamp()
        }
        function O(e, t) {
            var n = this.abs()
              , i = e.abs()
              , r = n.t;
            for (t.t = r + i.t; --r >= 0; )
                t[r] = 0;
            for (r = 0; r < i.t; ++r)
                t[r + n.t] = n.am(0, i[r], t, r, 0, n.t);
            t.s = 0,
            t.clamp(),
            this.s != e.s && p.ZERO.subTo(t, t)
        }
        function I(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
                e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var i = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV,
                e[n + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
            e.s = 0,
            e.clamp()
        }
        function B(e, t, n) {
            var i = e.abs();
            if (!(i.t <= 0)) {
                var r = this.abs();
                if (r.t < i.t)
                    return null != t && t.fromInt(0),
                    void (null != n && this.copyTo(n));
                null == n && (n = f());
                var a = f()
                  , o = this.s
                  , s = e.s
                  , c = this.DB - E(i[i.t - 1]);
                c > 0 ? (i.lShiftTo(c, a),
                r.lShiftTo(c, n)) : (i.copyTo(a),
                r.copyTo(n));
                var u = a.t
                  , l = a[u - 1];
                if (0 != l) {
                    var d = l * (1 << this.F1) + (u > 1 ? a[u - 2] >> this.F2 : 0)
                      , h = this.FV / d
                      , m = (1 << this.F1) / d
                      , g = 1 << this.F2
                      , y = n.t
                      , v = y - u
                      , b = null == t ? f() : t;
                    for (a.dlShiftTo(v, b),
                    n.compareTo(b) >= 0 && (n[n.t++] = 1,
                    n.subTo(b, n)),
                    p.ONE.dlShiftTo(u, b),
                    b.subTo(a, a); a.t < u; )
                        a[a.t++] = 0;
                    for (; --v >= 0; ) {
                        var w = n[--y] == l ? this.DM : Math.floor(n[y] * h + (n[y - 1] + g) * m);
                        if ((n[y] += a.am(0, w, n, v, 0, u)) < w)
                            for (a.dlShiftTo(v, b),
                            n.subTo(b, n); n[y] < --w; )
                                n.subTo(b, n)
                    }
                    null != t && (n.drShiftTo(u, t),
                    o != s && p.ZERO.subTo(t, t)),
                    n.t = u,
                    n.clamp(),
                    c > 0 && n.rShiftTo(c, n),
                    o < 0 && p.ZERO.subTo(n, n)
                }
            }
        }
        function L(e) {
            var t = f();
            return this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(p.ZERO) > 0 && e.subTo(t, t),
            t
        }
        function P(e) {
            this.m = e
        }
        function F(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }
        function z(e) {
            return e
        }
        function R(e) {
            e.divRemTo(this.m, null, e)
        }
        function H(e, t, n) {
            e.multiplyTo(t, n),
            this.reduce(n)
        }
        function Q(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        function $() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if (0 == (1 & e))
                return 0;
            var t = 3 & e;
            return t = t * (2 - (15 & e) * t) & 15,
            t = t * (2 - (255 & e) * t) & 255,
            t = t * (2 - ((65535 & e) * t & 65535)) & 65535,
            t = t * (2 - e * t % this.DV) % this.DV,
            t > 0 ? this.DV - t : -t
        }
        function U(e) {
            this.m = e,
            this.mp = e.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << e.DB - 15) - 1,
            this.mt2 = 2 * e.t
        }
        function V(e) {
            var t = f();
            return e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(p.ZERO) > 0 && this.m.subTo(t, t),
            t
        }
        function W(e) {
            var t = f();
            return e.copyTo(t),
            this.reduce(t),
            t
        }
        function G(e) {
            for (; e.t <= this.mt2; )
                e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t]
                  , i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (n = t + this.m.t,
                e[n] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV; )
                    e[n] -= e.DV,
                    e[++n]++
            }
            e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }
        function J(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        function K(e, t, n) {
            e.multiplyTo(t, n),
            this.reduce(n)
        }
        function X() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function Y(e, t) {
            if (e > 4294967295 || e < 1)
                return p.ONE;
            var n = f()
              , i = f()
              , r = t.convert(this)
              , a = E(e) - 1;
            for (r.copyTo(n); --a >= 0; )
                if (t.sqrTo(n, i),
                (e & 1 << a) > 0)
                    t.mulTo(i, r, n);
                else {
                    var o = n;
                    n = i,
                    i = o
                }
            return t.revert(n)
        }
        function Z(e, t) {
            var n;
            return n = e < 256 || t.isEven() ? new P(t) : new U(t),
            this.exp(e, n)
        }
        function ee(e) {
            me[ge++] ^= 255 & e,
            me[ge++] ^= e >> 8 & 255,
            me[ge++] ^= e >> 16 & 255,
            me[ge++] ^= e >> 24 & 255,
            ge >= be && (ge -= be)
        }
        function te() {
            ee((new Date).getTime())
        }
        function ne() {
            if (null == he) {
                for (te(),
                he = ce(),
                he.init(me),
                ge = 0; ge < me.length; ++ge)
                    me[ge] = 0;
                ge = 0
            }
            return he.next()
        }
        function ie(e) {
            var t;
            for (t = 0; t < e.length; ++t)
                e[t] = ne()
        }
        function re() {}
        function ae() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function oe(e) {
            var t, n, i;
            for (t = 0; t < 256; ++t)
                this.S[t] = t;
            for (n = 0,
            t = 0; t < 256; ++t)
                n = n + this.S[t] + e[t % e.length] & 255,
                i = this.S[t],
                this.S[t] = this.S[n],
                this.S[n] = i;
            this.i = 0,
            this.j = 0
        }
        function se() {
            var e;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            e = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = e,
            this.S[e + this.S[this.i] & 255]
        }
        function ce() {
            return new ae
        }
        s.prototype.doPublic = u,
        s.prototype.setPublic = c,
        s.prototype.encrypt = l;
        var ue;
        "Microsoft Internet Explorer" == navigator.appName ? (p.prototype.am = h,
        ue = 30) : "Netscape" != navigator.appName ? (p.prototype.am = d,
        ue = 26) : (p.prototype.am = m,
        ue = 28),
        p.prototype.DB = ue,
        p.prototype.DM = (1 << ue) - 1,
        p.prototype.DV = 1 << ue;
        p.prototype.FV = Math.pow(2, 52),
        p.prototype.F1 = 52 - ue,
        p.prototype.F2 = 2 * ue - 52;
        var le, pe, fe = "0123456789abcdefghijklmnopqrstuvwxyz", de = new Array;
        for (le = "0".charCodeAt(0),
        pe = 0; pe <= 9; ++pe)
            de[le++] = pe;
        for (le = "a".charCodeAt(0),
        pe = 10; pe < 36; ++pe)
            de[le++] = pe;
        for (le = "A".charCodeAt(0),
        pe = 10; pe < 36; ++pe)
            de[le++] = pe;
        P.prototype.convert = F,
        P.prototype.revert = z,
        P.prototype.reduce = R,
        P.prototype.mulTo = H,
        P.prototype.sqrTo = Q,
        U.prototype.convert = V,
        U.prototype.revert = W,
        U.prototype.reduce = G,
        U.prototype.mulTo = K,
        U.prototype.sqrTo = J,
        p.prototype.copyTo = v,
        p.prototype.fromInt = b,
        p.prototype.fromString = _,
        p.prototype.clamp = x,
        p.prototype.dlShiftTo = D,
        p.prototype.drShiftTo = q,
        p.prototype.lShiftTo = j,
        p.prototype.rShiftTo = A,
        p.prototype.subTo = M,
        p.prototype.multiplyTo = O,
        p.prototype.squareTo = I,
        p.prototype.divRemTo = B,
        p.prototype.invDigit = $,
        p.prototype.isEven = X,
        p.prototype.exp = Y,
        p.prototype.toString = T,
        p.prototype.negate = k,
        p.prototype.abs = S,
        p.prototype.compareTo = C,
        p.prototype.bitLength = N,
        p.prototype.mod = L,
        p.prototype.modPowInt = Z,
        p.ZERO = w(0),
        p.ONE = w(1);
        var he, me, ge;
        if (null == me) {
            me = new Array,
            ge = 0;
            var ye;
            if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
                var ve = window.crypto.random(32);
                for (ye = 0; ye < ve.length; ++ye)
                    me[ge++] = 255 & ve.charCodeAt(ye)
            }
            for (; ge < be; )
                ye = Math.floor(65536 * Math.random()),
                me[ge++] = ye >>> 8,
                me[ge++] = 255 & ye;
            ge = 0,
            te()
        }
        re.prototype.nextBytes = ie,
        ae.prototype.init = oe,
        ae.prototype.next = se;
        var be = 256;
        (i = function() {
            return s
        }
        .call(t, n, t, e)) !== undefined && (e.exports = i)
    }()
}
, function(e, t, n) {
    var i, r;
    !function(a, o) {
        "use strict";
        i = o,
        (r = "function" == typeof i ? i.call(t, n, t, e) : i) !== undefined && (e.exports = r)
    }(0, function() {
        var e, t, n = Array, i = n.prototype, r = Object, a = r.prototype, o = Function, s = o.prototype, c = String, u = c.prototype, l = Number, p = l.prototype, f = i.slice, d = i.splice, h = i.push, m = i.unshift, g = i.concat, y = i.join, v = s.call, b = s.apply, w = Math.max, _ = Math.min, x = a.toString, T = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, k = Function.prototype.toString, S = /^\s*class /, C = function(e) {
            try {
                var t = k.call(e)
                  , n = t.replace(/\/\/.*\n/g, "")
                  , i = n.replace(/\/\*[.\s\S]*\*\//g, "")
                  , r = i.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return S.test(r)
            } catch (a) {
                return !1
            }
        }, E = function(e) {
            try {
                return !C(e) && (k.call(e),
                !0)
            } catch (t) {
                return !1
            }
        }, e = function(e) {
            if (!e)
                return !1;
            if ("function" != typeof e && "object" != typeof e)
                return !1;
            if (T)
                return E(e);
            if (C(e))
                return !1;
            var t = x.call(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t
        }, N = RegExp.prototype.exec, D = function(e) {
            try {
                return N.call(e),
                !0
            } catch (t) {
                return !1
            }
        };
        t = function(e) {
            return "object" == typeof e && (T ? D(e) : "[object RegExp]" === x.call(e))
        }
        ;
        var q, j = String.prototype.valueOf, A = function(e) {
            try {
                return j.call(e),
                !0
            } catch (t) {
                return !1
            }
        };
        q = function(e) {
            return "string" == typeof e || "object" == typeof e && (T ? A(e) : "[object String]" === x.call(e))
        }
        ;
        var M = r.defineProperty && function() {
            try {
                var e = {};
                r.defineProperty(e, "x", {
                    enumerable: !1,
                    value: e
                });
                for (var t in e)
                    return !1;
                return e.x === e
            } catch (n) {
                return !1
            }
        }()
          , O = function(e) {
            var t;
            return t = M ? function(e, t, n, i) {
                !i && t in e || r.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: n
                })
            }
            : function(e, t, n, i) {
                !i && t in e || (e[t] = n)
            }
            ,
            function(n, i, r) {
                for (var a in i)
                    e.call(i, a) && t(n, a, i[a], r)
            }
        }(a.hasOwnProperty)
          , I = function(e) {
            var t = typeof e;
            return null === e || "object" !== t && "function" !== t
        }
          , B = l.isNaN || function(e) {
            return e !== e
        }
          , L = {
            ToInteger: function(e) {
                var t = +e;
                return B(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
                t
            },
            ToPrimitive: function(t) {
                var n, i, r;
                if (I(t))
                    return t;
                if (i = t.valueOf,
                e(i) && (n = i.call(t),
                I(n)))
                    return n;
                if (r = t.toString,
                e(r) && (n = r.call(t),
                I(n)))
                    return n;
                throw new TypeError
            },
            ToObject: function(e) {
                if (null == e)
                    throw new TypeError("can't convert " + e + " to object");
                return r(e)
            },
            ToUint32: function(e) {
                return e >>> 0
            }
        }
          , P = function() {};
        O(s, {
            bind: function(t) {
                var n = this;
                if (!e(n))
                    throw new TypeError("Function.prototype.bind called on incompatible " + n);
                for (var i, a = f.call(arguments, 1), s = function() {
                    if (this instanceof i) {
                        var e = b.call(n, this, g.call(a, f.call(arguments)));
                        return r(e) === e ? e : this
                    }
                    return b.call(n, t, g.call(a, f.call(arguments)))
                }, c = w(0, n.length - a.length), u = [], l = 0; l < c; l++)
                    h.call(u, "$" + l);
                return i = o("binder", "return function (" + y.call(u, ",") + "){ return binder.apply(this, arguments); }")(s),
                n.prototype && (P.prototype = n.prototype,
                i.prototype = new P,
                P.prototype = null),
                i
            }
        });
        var F = v.bind(a.hasOwnProperty)
          , z = v.bind(a.toString)
          , R = v.bind(f)
          , H = b.bind(f);
        if ("object" == typeof document && document && document.documentElement)
            try {
                R(document.documentElement.childNodes)
            } catch (Ct) {
                var Q = R
                  , $ = H;
                R = function(e) {
                    for (var t = [], n = e.length; n-- > 0; )
                        t[n] = e[n];
                    return $(t, Q(arguments, 1))
                }
                ,
                H = function(e, t) {
                    return $(R(e), t)
                }
            }
        var U = v.bind(u.slice)
          , V = v.bind(u.split)
          , W = v.bind(u.indexOf)
          , G = v.bind(h)
          , J = v.bind(a.propertyIsEnumerable)
          , K = v.bind(i.sort)
          , X = n.isArray || function(e) {
            return "[object Array]" === z(e)
        }
          , Y = 1 !== [].unshift(0);
        O(i, {
            unshift: function() {
                return m.apply(this, arguments),
                this.length
            }
        }, Y),
        O(n, {
            isArray: X
        });
        var Z = r("a")
          , ee = "a" !== Z[0] || !(0 in Z)
          , te = function(e) {
            var t = !0
              , n = !0
              , i = !1;
            if (e)
                try {
                    e.call("foo", function(e, n, i) {
                        "object" != typeof i && (t = !1)
                    }),
                    e.call([1], function() {
                        "use strict";
                        n = "string" == typeof this
                    }, "x")
                } catch (Ct) {
                    i = !0
                }
            return !!e && !i && t && n
        };
        O(i, {
            forEach: function(t) {
                var n, i = L.ToObject(this), r = ee && q(this) ? V(this, "") : i, a = -1, o = L.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError("Array.prototype.forEach callback must be a function");
                for (; ++a < o; )
                    a in r && (void 0 === n ? t(r[a], a, i) : t.call(n, r[a], a, i))
            }
        }, !te(i.forEach)),
        O(i, {
            map: function(t) {
                var i, r = L.ToObject(this), a = ee && q(this) ? V(this, "") : r, o = L.ToUint32(a.length), s = n(o);
                if (arguments.length > 1 && (i = arguments[1]),
                !e(t))
                    throw new TypeError("Array.prototype.map callback must be a function");
                for (var c = 0; c < o; c++)
                    c in a && (s[c] = void 0 === i ? t(a[c], c, r) : t.call(i, a[c], c, r));
                return s
            }
        }, !te(i.map)),
        O(i, {
            filter: function(t) {
                var n, i, r = L.ToObject(this), a = ee && q(this) ? V(this, "") : r, o = L.ToUint32(a.length), s = [];
                if (arguments.length > 1 && (i = arguments[1]),
                !e(t))
                    throw new TypeError("Array.prototype.filter callback must be a function");
                for (var c = 0; c < o; c++)
                    c in a && (n = a[c],
                    (void 0 === i ? t(n, c, r) : t.call(i, n, c, r)) && G(s, n));
                return s
            }
        }, !te(i.filter)),
        O(i, {
            every: function(t) {
                var n, i = L.ToObject(this), r = ee && q(this) ? V(this, "") : i, a = L.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError("Array.prototype.every callback must be a function");
                for (var o = 0; o < a; o++)
                    if (o in r && !(void 0 === n ? t(r[o], o, i) : t.call(n, r[o], o, i)))
                        return !1;
                return !0
            }
        }, !te(i.every)),
        O(i, {
            some: function(t) {
                var n, i = L.ToObject(this), r = ee && q(this) ? V(this, "") : i, a = L.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError("Array.prototype.some callback must be a function");
                for (var o = 0; o < a; o++)
                    if (o in r && (void 0 === n ? t(r[o], o, i) : t.call(n, r[o], o, i)))
                        return !0;
                return !1
            }
        }, !te(i.some));
        var ne = !1;
        i.reduce && (ne = "object" == typeof i.reduce.call("es5", function(e, t, n, i) {
            return i
        })),
        O(i, {
            reduce: function(t) {
                var n = L.ToObject(this)
                  , i = ee && q(this) ? V(this, "") : n
                  , r = L.ToUint32(i.length);
                if (!e(t))
                    throw new TypeError("Array.prototype.reduce callback must be a function");
                if (0 === r && 1 === arguments.length)
                    throw new TypeError("reduce of empty array with no initial value");
                var a, o = 0;
                if (arguments.length >= 2)
                    a = arguments[1];
                else
                    for (; ; ) {
                        if (o in i) {
                            a = i[o++];
                            break
                        }
                        if (++o >= r)
                            throw new TypeError("reduce of empty array with no initial value")
                    }
                for (; o < r; o++)
                    o in i && (a = t(a, i[o], o, n));
                return a
            }
        }, !ne);
        var ie = !1;
        i.reduceRight && (ie = "object" == typeof i.reduceRight.call("es5", function(e, t, n, i) {
            return i
        })),
        O(i, {
            reduceRight: function(t) {
                var n = L.ToObject(this)
                  , i = ee && q(this) ? V(this, "") : n
                  , r = L.ToUint32(i.length);
                if (!e(t))
                    throw new TypeError("Array.prototype.reduceRight callback must be a function");
                if (0 === r && 1 === arguments.length)
                    throw new TypeError("reduceRight of empty array with no initial value");
                var a, o = r - 1;
                if (arguments.length >= 2)
                    a = arguments[1];
                else
                    for (; ; ) {
                        if (o in i) {
                            a = i[o--];
                            break
                        }
                        if (--o < 0)
                            throw new TypeError("reduceRight of empty array with no initial value")
                    }
                if (o < 0)
                    return a;
                do {
                    o in i && (a = t(a, i[o], o, n))
                } while (o--);
                return a
            }
        }, !ie);
        var re = i.indexOf && -1 !== [0, 1].indexOf(1, 2);
        O(i, {
            indexOf: function(e) {
                var t = ee && q(this) ? V(this, "") : L.ToObject(this)
                  , n = L.ToUint32(t.length);
                if (0 === n)
                    return -1;
                var i = 0;
                for (arguments.length > 1 && (i = L.ToInteger(arguments[1])),
                i = i >= 0 ? i : w(0, n + i); i < n; i++)
                    if (i in t && t[i] === e)
                        return i;
                return -1
            }
        }, re);
        var ae = i.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
        O(i, {
            lastIndexOf: function(e) {
                var t = ee && q(this) ? V(this, "") : L.ToObject(this)
                  , n = L.ToUint32(t.length);
                if (0 === n)
                    return -1;
                var i = n - 1;
                for (arguments.length > 1 && (i = _(i, L.ToInteger(arguments[1]))),
                i = i >= 0 ? i : n - Math.abs(i); i >= 0; i--)
                    if (i in t && e === t[i])
                        return i;
                return -1
            }
        }, ae);
        var oe = function() {
            var e = [1, 2]
              , t = e.splice();
            return 2 === e.length && X(t) && 0 === t.length
        }();
        O(i, {
            splice: function(e, t) {
                return 0 === arguments.length ? [] : d.apply(this, arguments)
            }
        }, !oe);
        var se = function() {
            var e = {};
            return i.splice.call(e, 0, 0, 1),
            1 === e.length
        }();
        O(i, {
            splice: function(e, t) {
                if (0 === arguments.length)
                    return [];
                var n = arguments;
                return this.length = w(L.ToInteger(this.length), 0),
                arguments.length > 0 && "number" != typeof t && (n = R(arguments),
                n.length < 2 ? G(n, this.length - e) : n[1] = L.ToInteger(t)),
                d.apply(this, n)
            }
        }, !se);
        var ce = function() {
            var e = new n(1e5);
            return e[8] = "x",
            e.splice(1, 1),
            7 === e.indexOf("x")
        }()
          , ue = function() {
            var e = [];
            return e[256] = "a",
            e.splice(257, 0, "b"),
            "a" === e[256]
        }();
        O(i, {
            splice: function(e, t) {
                for (var n, i = L.ToObject(this), r = [], a = L.ToUint32(i.length), o = L.ToInteger(e), s = o < 0 ? w(a + o, 0) : _(o, a), u = _(w(L.ToInteger(t), 0), a - s), l = 0; l < u; )
                    n = c(s + l),
                    F(i, n) && (r[l] = i[n]),
                    l += 1;
                var p, f = R(arguments, 2), d = f.length;
                if (d < u) {
                    l = s;
                    for (var h = a - u; l < h; )
                        n = c(l + u),
                        p = c(l + d),
                        F(i, n) ? i[p] = i[n] : delete i[p],
                        l += 1;
                    l = a;
                    for (var m = a - u + d; l > m; )
                        delete i[l - 1],
                        l -= 1
                } else if (d > u)
                    for (l = a - u; l > s; )
                        n = c(l + u - 1),
                        p = c(l + d - 1),
                        F(i, n) ? i[p] = i[n] : delete i[p],
                        l -= 1;
                l = s;
                for (var g = 0; g < f.length; ++g)
                    i[l] = f[g],
                    l += 1;
                return i.length = a - u + d,
                r
            }
        }, !ce || !ue);
        var le, pe = i.join;
        try {
            le = "1,2,3" !== Array.prototype.join.call("123", ",")
        } catch (Ct) {
            le = !0
        }
        le && O(i, {
            join: function(e) {
                var t = void 0 === e ? "," : e;
                return pe.call(q(this) ? V(this, "") : this, t)
            }
        }, le);
        var fe = "1,2" !== [1, 2].join(undefined);
        fe && O(i, {
            join: function(e) {
                var t = void 0 === e ? "," : e;
                return pe.call(this, t)
            }
        }, fe);
        var de = function(e) {
            for (var t = L.ToObject(this), n = L.ToUint32(t.length), i = 0; i < arguments.length; )
                t[n + i] = arguments[i],
                i += 1;
            return t.length = n + i,
            n + i
        }
          , he = function() {
            var e = {};
            return 1 !== Array.prototype.push.call(e, undefined) || 1 !== e.length || "undefined" != typeof e[0] || !F(e, 0)
        }();
        O(i, {
            push: function(e) {
                return X(this) ? h.apply(this, arguments) : de.apply(this, arguments)
            }
        }, he);
        var me = function() {
            var e = [];
            return 1 !== e.push(undefined) || 1 !== e.length || "undefined" != typeof e[0] || !F(e, 0)
        }();
        O(i, {
            push: de
        }, me),
        O(i, {
            slice: function(e, t) {
                var n = q(this) ? V(this, "") : this;
                return H(n, arguments)
            }
        }, ee);
        var ge = function() {
            try {
                [1, 2].sort(null)
            } catch (Ct) {
                try {
                    [1, 2].sort({})
                } catch (e) {
                    return !1
                }
            }
            return !0
        }()
          , ye = function() {
            try {
                return [1, 2].sort(/a/),
                !1
            } catch (Ct) {}
            return !0
        }()
          , ve = function() {
            try {
                return [1, 2].sort(undefined),
                !0
            } catch (Ct) {}
            return !1
        }();
        O(i, {
            sort: function(t) {
                if (void 0 === t)
                    return K(this);
                if (!e(t))
                    throw new TypeError("Array.prototype.sort callback must be a function");
                return K(this, t)
            }
        }, ge || !ve || !ye);
        var be = !J({
            toString: null
        }, "toString")
          , we = J(function() {}, "prototype")
          , _e = !F("x", "0")
          , xe = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        }
          , Te = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
            $width: !0,
            $height: !0,
            $top: !0,
            $localStorage: !0
        }
          , ke = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var e in window)
                try {
                    !Te["$" + e] && F(window, e) && null !== window[e] && "object" == typeof window[e] && xe(window[e])
                } catch (Ct) {
                    return !0
                }
            return !1
        }()
          , Se = function(e) {
            if ("undefined" == typeof window || !ke)
                return xe(e);
            try {
                return xe(e)
            } catch (Ct) {
                return !1
            }
        }
          , Ce = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , Ee = Ce.length
          , Ne = function(e) {
            return "[object Arguments]" === z(e)
        }
          , De = function(t) {
            return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !X(t) && e(t.callee)
        }
          , qe = Ne(arguments) ? Ne : De;
        O(r, {
            keys: function(t) {
                var n = e(t)
                  , i = qe(t)
                  , r = null !== t && "object" == typeof t
                  , a = r && q(t);
                if (!r && !n && !i)
                    throw new TypeError("Object.keys called on a non-object");
                var o = []
                  , s = we && n;
                if (a && _e || i)
                    for (var u = 0; u < t.length; ++u)
                        G(o, c(u));
                if (!i)
                    for (var l in t)
                        s && "prototype" === l || !F(t, l) || G(o, c(l));
                if (be)
                    for (var p = Se(t), f = 0; f < Ee; f++) {
                        var d = Ce[f];
                        p && "constructor" === d || !F(t, d) || G(o, d)
                    }
                return o
            }
        });
        var je = r.keys && function() {
            return 2 === r.keys(arguments).length
        }(1, 2)
          , Ae = r.keys && function() {
            var e = r.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
        }(1)
          , Me = r.keys;
        O(r, {
            keys: function(e) {
                return Me(qe(e) ? R(e) : e)
            }
        }, !je || Ae);
        var Oe, Ie, Be = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), Le = new Date(-0x55d318d56a724), Pe = new Date(14496624e5), Fe = "Mon, 01 Jan -45875 11:59:59 GMT" !== Le.toUTCString();
        Le.getTimezoneOffset() < -720 ? (Oe = "Tue Jan 02 -45875" !== Le.toDateString(),
        Ie = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Pe))) : (Oe = "Mon Jan 01 -45875" !== Le.toDateString(),
        Ie = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Pe)));
        var ze = v.bind(Date.prototype.getFullYear)
          , Re = v.bind(Date.prototype.getMonth)
          , He = v.bind(Date.prototype.getDate)
          , Qe = v.bind(Date.prototype.getUTCFullYear)
          , $e = v.bind(Date.prototype.getUTCMonth)
          , Ue = v.bind(Date.prototype.getUTCDate)
          , Ve = v.bind(Date.prototype.getUTCDay)
          , We = v.bind(Date.prototype.getUTCHours)
          , Ge = v.bind(Date.prototype.getUTCMinutes)
          , Je = v.bind(Date.prototype.getUTCSeconds)
          , Ke = v.bind(Date.prototype.getUTCMilliseconds)
          , Xe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          , Ye = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          , Ze = function(e, t) {
            return He(new Date(t,e,0))
        };
        O(Date.prototype, {
            getFullYear: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = ze(this);
                return e < 0 && Re(this) > 11 ? e + 1 : e
            },
            getMonth: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = ze(this)
                  , t = Re(this);
                return e < 0 && t > 11 ? 0 : t
            },
            getDate: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = ze(this)
                  , t = Re(this)
                  , n = He(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return Ze(0, e + 1) - n + 1
                }
                return n
            },
            getUTCFullYear: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Qe(this);
                return e < 0 && $e(this) > 11 ? e + 1 : e
            },
            getUTCMonth: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Qe(this)
                  , t = $e(this);
                return e < 0 && t > 11 ? 0 : t
            },
            getUTCDate: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Qe(this)
                  , t = $e(this)
                  , n = Ue(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return Ze(0, e + 1) - n + 1
                }
                return n
            }
        }, Be),
        O(Date.prototype, {
            toUTCString: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Ve(this)
                  , t = Ue(this)
                  , n = $e(this)
                  , i = Qe(this)
                  , r = We(this)
                  , a = Ge(this)
                  , o = Je(this);
                return Xe[e] + ", " + (t < 10 ? "0" + t : t) + " " + Ye[n] + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT"
            }
        }, Be || Fe),
        O(Date.prototype, {
            toDateString: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = this.getDay()
                  , t = this.getDate()
                  , n = this.getMonth()
                  , i = this.getFullYear();
                return Xe[e] + " " + Ye[n] + " " + (t < 10 ? "0" + t : t) + " " + i
            }
        }, Be || Oe),
        (Be || Ie) && (Date.prototype.toString = function() {
            if (!(this && this instanceof Date))
                throw new TypeError("this is not a Date object.");
            var e = this.getDay()
              , t = this.getDate()
              , n = this.getMonth()
              , i = this.getFullYear()
              , r = this.getHours()
              , a = this.getMinutes()
              , o = this.getSeconds()
              , s = this.getTimezoneOffset()
              , c = Math.floor(Math.abs(s) / 60)
              , u = Math.floor(Math.abs(s) % 60);
            return Xe[e] + " " + Ye[n] + " " + (t < 10 ? "0" + t : t) + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT" + (s > 0 ? "-" : "+") + (c < 10 ? "0" + c : c) + (u < 10 ? "0" + u : u)
        }
        ,
        M && r.defineProperty(Date.prototype, "toString", {
            configurable: !0,
            enumerable: !1,
            writable: !0
        }));
        var et = Date.prototype.toISOString && -1 === new Date(-621987552e5).toISOString().indexOf("-000001")
          , tt = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString()
          , nt = v.bind(Date.prototype.getTime);
        O(Date.prototype, {
            toISOString: function() {
                if (!isFinite(this) || !isFinite(nt(this)))
                    throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                var e = Qe(this)
                  , t = $e(this);
                e += Math.floor(t / 12),
                t = (t % 12 + 12) % 12;
                var n = [t + 1, Ue(this), We(this), Ge(this), Je(this)];
                e = (e < 0 ? "-" : e > 9999 ? "+" : "") + U("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                for (var i = 0; i < n.length; ++i)
                    n[i] = U("00" + n[i], -2);
                return e + "-" + R(n, 0, 2).join("-") + "T" + R(n, 2).join(":") + "." + U("000" + Ke(this), -3) + "Z"
            }
        }, et || tt),
        function() {
            try {
                return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(-621987552e5).toJSON().indexOf("-000001") && Date.prototype.toJSON.call({
                    toISOString: function() {
                        return !0
                    }
                })
            } catch (Ct) {
                return !1
            }
        }() || (Date.prototype.toJSON = function(t) {
            var n = r(this)
              , i = L.ToPrimitive(n);
            if ("number" == typeof i && !isFinite(i))
                return null;
            var a = n.toISOString;
            if (!e(a))
                throw new TypeError("toISOString property is not callable");
            return a.call(n)
        }
        );
        var it = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z")
          , rt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
        if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || rt || !it) {
            var at = Math.pow(2, 31) - 1
              , ot = B(new Date(1970,0,1,0,0,0,at + 1).getTime());
            Date = function(e) {
                var t = function(n, i, r, a, o, s, u) {
                    var l, p = arguments.length;
                    if (this instanceof e) {
                        var f = s
                          , d = u;
                        if (ot && p >= 7 && u > at) {
                            var h = Math.floor(u / at) * at
                              , m = Math.floor(h / 1e3);
                            f += m,
                            d -= 1e3 * m
                        }
                        l = 1 === p && c(n) === n ? new e(t.parse(n)) : p >= 7 ? new e(n,i,r,a,o,f,d) : p >= 6 ? new e(n,i,r,a,o,f) : p >= 5 ? new e(n,i,r,a,o) : p >= 4 ? new e(n,i,r,a) : p >= 3 ? new e(n,i,r) : p >= 2 ? new e(n,i) : p >= 1 ? new e(n instanceof e ? +n : n) : new e
                    } else
                        l = e.apply(this, arguments);
                    return I(l) || O(l, {
                        constructor: t
                    }, !0),
                    l
                }
                  , n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$")
                  , i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
                  , r = function(e, t) {
                    var n = t > 1 ? 1 : 0;
                    return i[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                }
                  , a = function(t) {
                    var n = 0
                      , i = t;
                    if (ot && i > at) {
                        var r = Math.floor(i / at) * at
                          , a = Math.floor(r / 1e3);
                        n += a,
                        i -= 1e3 * a
                    }
                    return l(new e(1970,0,1,0,0,n,i))
                };
                for (var o in e)
                    F(e, o) && (t[o] = e[o]);
                return O(t, {
                    now: e.now,
                    UTC: e.UTC
                }, !0),
                t.prototype = e.prototype,
                O(t.prototype, {
                    constructor: t
                }, !0),
                O(t, {
                    parse: function(t) {
                        var i = n.exec(t);
                        if (i) {
                            var o, s = l(i[1]), c = l(i[2] || 1) - 1, u = l(i[3] || 1) - 1, p = l(i[4] || 0), f = l(i[5] || 0), d = l(i[6] || 0), h = Math.floor(1e3 * l(i[7] || 0)), m = Boolean(i[4] && !i[8]), g = "-" === i[9] ? 1 : -1, y = l(i[10] || 0), v = l(i[11] || 0);
                            return p < (f > 0 || d > 0 || h > 0 ? 24 : 25) && f < 60 && d < 60 && h < 1e3 && c > -1 && c < 12 && y < 24 && v < 60 && u > -1 && u < r(s, c + 1) - r(s, c) && (o = 60 * (24 * (r(s, c) + u) + p + y * g),
                            o = 1e3 * (60 * (o + f + v * g) + d) + h,
                            m && (o = a(o)),
                            -864e13 <= o && o <= 864e13) ? o : NaN
                        }
                        return e.parse.apply(this, arguments)
                    }
                }),
                t
            }(Date)
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        );
        var st = p.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))
          , ct = {
            base: 1e7,
            size: 6,
            data: [0, 0, 0, 0, 0, 0],
            multiply: function(e, t) {
                for (var n = -1, i = t; ++n < ct.size; )
                    i += e * ct.data[n],
                    ct.data[n] = i % ct.base,
                    i = Math.floor(i / ct.base)
            },
            divide: function(e) {
                for (var t = ct.size, n = 0; --t >= 0; )
                    n += ct.data[t],
                    ct.data[t] = Math.floor(n / e),
                    n = n % e * ct.base
            },
            numToString: function() {
                for (var e = ct.size, t = ""; --e >= 0; )
                    if ("" !== t || 0 === e || 0 !== ct.data[e]) {
                        var n = c(ct.data[e]);
                        "" === t ? t = n : t += U("0000000", 0, 7 - n.length) + n
                    }
                return t
            },
            pow: function Et(e, t, n) {
                return 0 === t ? n : t % 2 == 1 ? Et(e, t - 1, n * e) : Et(e * e, t / 2, n)
            },
            log: function(e) {
                for (var t = 0, n = e; n >= 4096; )
                    t += 12,
                    n /= 4096;
                for (; n >= 2; )
                    t += 1,
                    n /= 2;
                return t
            }
        };
        O(p, {
            toFixed: function(e) {
                var t, n, i, r, a, o, s, u;
                if (t = l(e),
                (t = B(t) ? 0 : Math.floor(t)) < 0 || t > 20)
                    throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (n = l(this),
                B(n))
                    return "NaN";
                if (n <= -1e21 || n >= 1e21)
                    return c(n);
                if (i = "",
                n < 0 && (i = "-",
                n = -n),
                r = "0",
                n > 1e-21)
                    if (a = ct.log(n * ct.pow(2, 69, 1)) - 69,
                    o = a < 0 ? n * ct.pow(2, -a, 1) : n / ct.pow(2, a, 1),
                    o *= 4503599627370496,
                    (a = 52 - a) > 0) {
                        for (ct.multiply(0, o),
                        s = t; s >= 7; )
                            ct.multiply(1e7, 0),
                            s -= 7;
                        for (ct.multiply(ct.pow(10, s, 1), 0),
                        s = a - 1; s >= 23; )
                            ct.divide(1 << 23),
                            s -= 23;
                        ct.divide(1 << s),
                        ct.multiply(1, 1),
                        ct.divide(2),
                        r = ct.numToString()
                    } else
                        ct.multiply(0, o),
                        ct.multiply(1 << -a, 0),
                        r = ct.numToString() + U("0.00000000000000000000", 2, 2 + t);
                return t > 0 ? (u = r.length,
                r = u <= t ? i + U("0.0000000000000000000", 0, t - u + 2) + r : i + U(r, 0, u - t) + "." + U(r, u - t)) : r = i + r,
                r
            }
        }, st);
        var ut = function() {
            try {
                return "1" === 1..toPrecision(undefined)
            } catch (Ct) {
                return !0
            }
        }()
          , lt = p.toPrecision;
        O(p, {
            toPrecision: function(e) {
                return void 0 === e ? lt.call(this) : lt.call(this, e)
            }
        }, ut),
        2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
            var e = "undefined" == typeof /()??/.exec("")[1]
              , n = Math.pow(2, 32) - 1;
            u.split = function(i, r) {
                var a = String(this);
                if (void 0 === i && 0 === r)
                    return [];
                if (!t(i))
                    return V(this, i, r);
                var o, s, c, u, l = [], p = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), f = 0, d = new RegExp(i.source,p + "g");
                e || (o = new RegExp("^" + d.source + "$(?!\\s)",p));
                var m = void 0 === r ? n : L.ToUint32(r);
                for (s = d.exec(a); s && !((c = s.index + s[0].length) > f && (G(l, U(a, f, s.index)),
                !e && s.length > 1 && s[0].replace(o, function() {
                    for (var e = 1; e < arguments.length - 2; e++)
                        "undefined" == typeof arguments[e] && (s[e] = void 0)
                }),
                s.length > 1 && s.index < a.length && h.apply(l, R(s, 1)),
                u = s[0].length,
                f = c,
                l.length >= m)); )
                    d.lastIndex === s.index && d.lastIndex++,
                    s = d.exec(a);
                return f === a.length ? !u && d.test("") || G(l, "") : G(l, U(a, f)),
                l.length > m ? R(l, 0, m) : l
            }
        }() : "0".split(void 0, 0).length && (u.split = function(e, t) {
            return void 0 === e && 0 === t ? [] : V(this, e, t)
        }
        );
        var pt = u.replace;
        (function() {
            var e = [];
            return "x".replace(/x(.)?/g, function(t, n) {
                G(e, n)
            }),
            1 === e.length && "undefined" == typeof e[0]
        }
        )() || (u.replace = function(n, i) {
            var r = e(i)
              , a = t(n) && /\)[*?]/.test(n.source);
            if (r && a) {
                var o = function(e) {
                    var t = arguments.length
                      , r = n.lastIndex;
                    n.lastIndex = 0;
                    var a = n.exec(e) || [];
                    return n.lastIndex = r,
                    G(a, arguments[t - 2], arguments[t - 1]),
                    i.apply(this, a)
                };
                return pt.call(this, n, o)
            }
            return pt.call(this, n, i)
        }
        );
        var ft = u.substr
          , dt = "".substr && "b" !== "0b".substr(-1);
        O(u, {
            substr: function(e, t) {
                var n = e;
                return e < 0 && (n = w(this.length + e, 0)),
                ft.call(this, n, t)
            }
        }, dt);
        var ht = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
          , mt = "​"
          , gt = "[" + ht + "]"
          , yt = new RegExp("^" + gt + gt + "*")
          , vt = new RegExp(gt + gt + "*$")
          , bt = u.trim && (ht.trim() || !mt.trim());
        O(u, {
            trim: function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                return c(this).replace(yt, "").replace(vt, "")
            }
        }, bt);
        var wt = v.bind(String.prototype.trim)
          , _t = u.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
        O(u, {
            lastIndexOf: function(e) {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                for (var t = c(this), n = c(e), i = arguments.length > 1 ? l(arguments[1]) : NaN, r = B(i) ? Infinity : L.ToInteger(i), a = _(w(r, 0), t.length), o = n.length, s = a + o; s > 0; ) {
                    s = w(0, s - o);
                    var u = W(U(t, s, a + o), n);
                    if (-1 !== u)
                        return s + u
                }
                return -1
            }
        }, _t);
        var xt = u.lastIndexOf;
        if (O(u, {
            lastIndexOf: function(e) {
                return xt.apply(this, arguments)
            }
        }, 1 !== u.lastIndexOf.length),
        8 === parseInt(ht + "08") && 22 === parseInt(ht + "0x16") || (parseInt = function(e) {
            var t = /^[-+]?0[xX]/;
            return function(n, i) {
                var r = wt(String(n))
                  , a = l(i) || (t.test(r) ? 16 : 10);
                return e(r, a)
            }
        }(parseInt)),
        1 / parseFloat("-0") != -Infinity && (parseFloat = function(e) {
            return function(t) {
                var n = wt(String(t))
                  , i = e(n);
                return 0 === i && "-" === U(n, 0, 1) ? -0 : i
            }
        }(parseFloat)),
        "RangeError: test" !== String(new RangeError("test"))) {
            var Tt = function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                var e = this.name;
                void 0 === e ? e = "Error" : "string" != typeof e && (e = c(e));
                var t = this.message;
                return void 0 === t ? t = "" : "string" != typeof t && (t = c(t)),
                e ? t ? e + ": " + t : e : t
            };
            Error.prototype.toString = Tt
        }
        if (M) {
            var kt = function(e, t) {
                if (J(e, t)) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.configurable && (n.enumerable = !1,
                    Object.defineProperty(e, t, n))
                }
            };
            kt(Error.prototype, "message"),
            "" !== Error.prototype.message && (Error.prototype.message = ""),
            kt(Error.prototype, "name")
        }
        if ("/a/gim" !== String(/a/gim)) {
            var St = function() {
                var e = "/" + this.source + "/";
                return this.global && (e += "g"),
                this.ignoreCase && (e += "i"),
                this.multiline && (e += "m"),
                e
            };
            RegExp.prototype.toString = St
        }
    })
}
, function(e, t, n) {
    (function(t, n) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }
            function i(e) {
                return "function" == typeof e
            }
            function r(e) {
                F = e
            }
            function a(e) {
                z = e
            }
            function o() {
                return void 0 !== P ? function() {
                    P(c)
                }
                : s()
            }
            function s() {
                var e = setTimeout;
                return function() {
                    return e(c, 1)
                }
            }
            function c() {
                for (var e = 0; e < L; e += 2) {
                    (0,
                    V[e])(V[e + 1]),
                    V[e] = undefined,
                    V[e + 1] = undefined
                }
                L = 0
            }
            function u(e, t) {
                var n = this
                  , i = new this.constructor(p);
                i[G] === undefined && E(i);
                var r = n._state;
                if (r) {
                    var a = arguments[r - 1];
                    z(function() {
                        return k(r, i, a, n._result)
                    })
                } else
                    x(n, i, e, t);
                return i
            }
            function l(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t)
                    return e;
                var n = new t(p);
                return v(n, e),
                n
            }
            function p() {}
            function f() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function d() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function h(e, t, n, i) {
                try {
                    e.call(t, n, i)
                } catch (r) {
                    return r
                }
            }
            function m(e, t, n) {
                z(function(e) {
                    var i = !1
                      , r = h(n, t, function(n) {
                        i || (i = !0,
                        t !== n ? v(e, n) : w(e, n))
                    }, function(t) {
                        i || (i = !0,
                        _(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !i && r && (i = !0,
                    _(e, r))
                }, e)
            }
            function g(e, t) {
                t._state === K ? w(e, t._result) : t._state === X ? _(e, t._result) : x(t, undefined, function(t) {
                    return v(e, t)
                }, function(t) {
                    return _(e, t)
                })
            }
            function y(e, t, n) {
                t.constructor === e.constructor && n === u && t.constructor.resolve === l ? g(e, t) : n === undefined ? w(e, t) : i(n) ? m(e, t, n) : w(e, t)
            }
            function v(t, n) {
                if (t === n)
                    _(t, f());
                else if (e(n)) {
                    var i = void 0;
                    try {
                        i = n.then
                    } catch (r) {
                        return void _(t, r)
                    }
                    y(t, n, i)
                } else
                    w(t, n)
            }
            function b(e) {
                e._onerror && e._onerror(e._result),
                T(e)
            }
            function w(e, t) {
                e._state === J && (e._result = t,
                e._state = K,
                0 !== e._subscribers.length && z(T, e))
            }
            function _(e, t) {
                e._state === J && (e._state = X,
                e._result = t,
                z(b, e))
            }
            function x(e, t, n, i) {
                var r = e._subscribers
                  , a = r.length;
                e._onerror = null,
                r[a] = t,
                r[a + K] = n,
                r[a + X] = i,
                0 === a && e._state && z(T, e)
            }
            function T(e) {
                var t = e._subscribers
                  , n = e._state;
                if (0 !== t.length) {
                    for (var i = void 0, r = void 0, a = e._result, o = 0; o < t.length; o += 3)
                        i = t[o],
                        r = t[o + n],
                        i ? k(n, i, r, a) : r(a);
                    e._subscribers.length = 0
                }
            }
            function k(e, t, n, r) {
                var a = i(n)
                  , o = void 0
                  , s = void 0
                  , c = !0;
                if (a) {
                    try {
                        o = n(r)
                    } catch (u) {
                        c = !1,
                        s = u
                    }
                    if (t === o)
                        return void _(t, d())
                } else
                    o = r;
                t._state !== J || (a && c ? v(t, o) : !1 === c ? _(t, s) : e === K ? w(t, o) : e === X && _(t, o))
            }
            function S(e, t) {
                try {
                    t(function(t) {
                        v(e, t)
                    }, function(t) {
                        _(e, t)
                    })
                } catch (n) {
                    _(e, n)
                }
            }
            function C() {
                return Y++
            }
            function E(e) {
                e[G] = Y++,
                e._state = undefined,
                e._result = undefined,
                e._subscribers = []
            }
            function N() {
                return new Error("Array Methods must be provided an Array")
            }
            function D(e) {
                return new Z(this,e).promise
            }
            function q(e) {
                var t = this;
                return new t(B(e) ? function(n, i) {
                    for (var r = e.length, a = 0; a < r; a++)
                        t.resolve(e[a]).then(n, i)
                }
                : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }
                )
            }
            function j(e) {
                var t = this
                  , n = new t(p);
                return _(n, e),
                n
            }
            function A() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function M() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function O() {
                var e = void 0;
                if (void 0 !== n)
                    e = n;
                else if ("undefined" != typeof self)
                    e = self;
                else
                    try {
                        e = Function("return this")()
                    } catch (r) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var t = e.Promise;
                if (t) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(t.resolve())
                    } catch (r) {}
                    if ("[object Promise]" === i && !t.cast)
                        return
                }
                e.Promise = ee
            }
            var I = void 0;
            I = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ;
            var B = I
              , L = 0
              , P = void 0
              , F = void 0
              , z = function(e, t) {
                V[L] = e,
                V[L + 1] = t,
                2 === (L += 2) && (F ? F(c) : W())
            }
              , R = "undefined" != typeof window ? window : undefined
              , H = R || {}
              , Q = H.MutationObserver || H.WebKitMutationObserver
              , $ = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t)
              , U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
              , V = new Array(1e3)
              , W = void 0;
            W = $ ? function() {
                return function() {
                    return t.nextTick(c)
                }
            }() : Q ? function() {
                var e = 0
                  , t = new Q(c)
                  , n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
            }() : U ? function() {
                var e = new MessageChannel;
                return e.port1.onmessage = c,
                function() {
                    return e.port2.postMessage(0)
                }
            }() : R === undefined ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return P = e.runOnLoop || e.runOnContext,
                    o()
                } catch (t) {
                    return s()
                }
            }() : s();
            var G = Math.random().toString(36).substring(2)
              , J = void 0
              , K = 1
              , X = 2
              , Y = 0
              , Z = function() {
                function e(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(p),
                    this.promise[G] || E(this.promise),
                    B(t) ? (this.length = t.length,
                    this._remaining = t.length,
                    this._result = new Array(this.length),
                    0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(t),
                    0 === this._remaining && w(this.promise, this._result))) : _(this.promise, N())
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === J && t < e.length; t++)
                        this._eachEntry(e[t], t)
                }
                ,
                e.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor
                      , i = n.resolve;
                    if (i === l) {
                        var r = void 0
                          , a = void 0
                          , o = !1;
                        try {
                            r = e.then
                        } catch (c) {
                            o = !0,
                            a = c
                        }
                        if (r === u && e._state !== J)
                            this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof r)
                            this._remaining--,
                            this._result[t] = e;
                        else if (n === ee) {
                            var s = new n(p);
                            o ? _(s, a) : y(s, e, r),
                            this._willSettleAt(s, t)
                        } else
                            this._willSettleAt(new n(function(t) {
                                return t(e)
                            }
                            ), t)
                    } else
                        this._willSettleAt(i(e), t)
                }
                ,
                e.prototype._settledAt = function(e, t, n) {
                    var i = this.promise;
                    i._state === J && (this._remaining--,
                    e === X ? _(i, n) : this._result[t] = n),
                    0 === this._remaining && w(i, this._result)
                }
                ,
                e.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    x(e, undefined, function(e) {
                        return n._settledAt(K, t, e)
                    }, function(e) {
                        return n._settledAt(X, t, e)
                    })
                }
                ,
                e
            }()
              , ee = function() {
                function e(t) {
                    this[G] = C(),
                    this._result = this._state = undefined,
                    this._subscribers = [],
                    p !== t && ("function" != typeof t && A(),
                    this instanceof e ? S(this, t) : M())
                }
                return e.prototype["catch"] = function(e) {
                    return this.then(null, e)
                }
                ,
                e.prototype["finally"] = function(e) {
                    var t = this
                      , n = t.constructor;
                    return i(e) ? t.then(function(t) {
                        return n.resolve(e()).then(function() {
                            return t
                        })
                    }, function(t) {
                        return n.resolve(e()).then(function() {
                            throw t
                        })
                    }) : t.then(e, e)
                }
                ,
                e
            }();
            return ee.prototype.then = u,
            ee.all = D,
            ee.race = q,
            ee.resolve = l,
            ee.reject = j,
            ee._setScheduler = r,
            ee._setAsap = a,
            ee._asap = z,
            ee.polyfill = O,
            ee.Promise = ee,
            ee
        })
    }
    ).call(t, n(6), function() {
        return this
    }())
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(e) {
        if (l === setTimeout)
            return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
            return l = setTimeout,
            setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }
    function a(e) {
        if (p === clearTimeout)
            return clearTimeout(e);
        if ((p === i || !p) && clearTimeout)
            return p = clearTimeout,
            clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }
    function o() {
        m && d && (m = !1,
        d.length ? h = d.concat(h) : g = -1,
        h.length && s())
    }
    function s() {
        if (!m) {
            var e = r(o);
            m = !0;
            for (var t = h.length; t; ) {
                for (d = h,
                h = []; ++g < t; )
                    d && d[g].run();
                g = -1,
                t = h.length
            }
            d = null,
            m = !1,
            a(e)
        }
    }
    function c(e, t) {
        this.fun = e,
        this.array = t
    }
    function u() {}
    var l, p, f = e.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            p = i
        }
    }();
    var d, h = [], m = !1, g = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new c(e,t)),
        1 !== h.length || m || r(s)
    }
    ,
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    f.title = "browser",
    f.browser = !0,
    f.env = {},
    f.argv = [],
    f.version = "",
    f.versions = {},
    f.on = u,
    f.addListener = u,
    f.once = u,
    f.off = u,
    f.removeListener = u,
    f.removeAllListeners = u,
    f.emit = u,
    f.prependListener = u,
    f.prependOnceListener = u,
    f.listeners = function(e) {
        return []
    }
    ,
    f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    f.cwd = function() {
        return "/"
    }
    ,
    f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    f.umask = function() {
        return 0
    }
}
, function(e, t) {
    e.exports = [{
        c: "86",
        n: "China",
        p: "China"
    }, {
        c: "852",
        n: "Hong Kong SAR China",
        p: "Hong Kong SAR China"
    }, {
        c: "853",
        n: "Macau SAR China",
        p: "Macau SAR China"
    }, {
        c: "886",
        n: "Taiwan China",
        p: "Taiwan China"
    }, {
        c: "93",
        n: "Afghanistan",
        p: "Afghanistan"
    }, {
        c: "355",
        n: "Albania",
        p: "Albania"
    }, {
        c: "213",
        n: "Algeria",
        p: "Algeria"
    }, {
        c: "1684",
        n: "American Samoa",
        p: "American Samoa"
    }, {
        c: "376",
        n: "Andorra",
        p: "Andorra"
    }, {
        c: "244",
        n: "Angola",
        p: "Angola"
    }, {
        c: "1264",
        n: "Anguilla",
        p: "Anguilla"
    }, {
        c: "672",
        n: "Antarctica",
        p: "Antarctica"
    }, {
        c: "1268",
        n: "Antigua and Barbuda",
        p: "Antigua and Barbuda"
    }, {
        c: "54",
        n: "Argentina",
        p: "Argentina"
    }, {
        c: "374",
        n: "Armenia",
        p: "Armenia"
    }, {
        c: "297",
        n: "Aruba",
        p: "Aruba"
    }, {
        c: "61",
        n: "Australia",
        p: "Australia"
    }, {
        c: "43",
        n: "Austria",
        p: "Austria"
    }, {
        c: "994",
        n: "Azerbaijan",
        p: "Azerbaijan"
    }, {
        c: "1242",
        n: "Bahamas",
        p: "Bahamas"
    }, {
        c: "973",
        n: "Bahrain",
        p: "Bahrain"
    }, {
        c: "880",
        n: "Bangladesh",
        p: "Bangladesh"
    }, {
        c: "1246",
        n: "Barbados",
        p: "Barbados"
    }, {
        c: "375",
        n: "Belarus",
        p: "Belarus"
    }, {
        c: "32",
        n: "Belgium",
        p: "Belgium"
    }, {
        c: "501",
        n: "Belize",
        p: "Belize"
    }, {
        c: "229",
        n: "Benin",
        p: "Benin"
    }, {
        c: "1441",
        n: "Bermuda",
        p: "Bermuda"
    }, {
        c: "975",
        n: "Bhutan",
        p: "Bhutan"
    }, {
        c: "591",
        n: "Bolivia",
        p: "Bolivia"
    }, {
        c: "387",
        n: "Bosnia and Herzegovina",
        p: "Bosnia and Herzegovina"
    }, {
        c: "267",
        n: "Botswana",
        p: "Botswana"
    }, {
        c: "55",
        n: "Brazil",
        p: "Brazil"
    }, {
        c: "1284",
        n: "British Virgin Islands",
        p: "British Virgin Islands"
    }, {
        c: "673",
        n: "Brunei",
        p: "Brunei"
    }, {
        c: "359",
        n: "Bulgaria",
        p: "Bulgaria"
    }, {
        c: "226",
        n: "Burkina Faso",
        p: "Burkina Faso"
    }, {
        c: "257",
        n: "Burundi",
        p: "Burundi"
    }, {
        c: "225",
        n: "Côte d'Ivoire",
        p: "Côte d'Ivoire"
    }, {
        c: "855",
        n: "Cambodia",
        p: "Cambodia"
    }, {
        c: "237",
        n: "Cameroon",
        p: "Cameroon"
    }, {
        c: "1",
        n: "Canada",
        p: "Canada"
    }, {
        c: "238",
        n: "Cape Verde",
        p: "Cape Verde"
    }, {
        c: "1345",
        n: "Cayman Islands",
        p: "Cayman Islands"
    }, {
        c: "236",
        n: "Central African Republic",
        p: "Central African Republic"
    }, {
        c: "235",
        n: "Chad",
        p: "Chad"
    }, {
        c: "56",
        n: "Chile",
        p: "Chile"
    }, {
        c: "61",
        n: "Christmas Island",
        p: "Christmas Island"
    }, {
        c: "61",
        n: "Cocos [Keeling] Islands",
        p: "Cocos [Keeling] Islands"
    }, {
        c: "57",
        n: "Colombia",
        p: "Colombia"
    }, {
        c: "269",
        n: "Comoros",
        p: "Comoros"
    }, {
        c: "242",
        n: "Congo - Brazzaville",
        p: "Congo - Brazzaville"
    }, {
        c: "243",
        n: "Congo - Kinshasa",
        p: "Congo - Kinshasa"
    }, {
        c: "682",
        n: "Cook Islands",
        p: "Cook Islands"
    }, {
        c: "506",
        n: "Costa Rica",
        p: "Costa Rica"
    }, {
        c: "385",
        n: "Croatia",
        p: "Croatia"
    }, {
        c: "53",
        n: "Cuba",
        p: "Cuba"
    }, {
        c: "357",
        n: "Cyprus",
        p: "Cyprus"
    }, {
        c: "420",
        n: "Czech Republic",
        p: "Czech Republic"
    }, {
        c: "45",
        n: "Denmark",
        p: "Denmark"
    }, {
        c: "253",
        n: "Djibouti",
        p: "Djibouti"
    }, {
        c: "1767",
        n: "Dominica",
        p: "Dominica"
    }, {
        c: "1809",
        n: "Dominican Republic",
        p: "Dominican Republic"
    }, {
        c: "593",
        n: "Ecuador",
        p: "Ecuador"
    }, {
        c: "20",
        n: "Egypt",
        p: "Egypt"
    }, {
        c: "503",
        n: "El Salvador",
        p: "El Salvador"
    }, {
        c: "240",
        n: "Equatorial Guinea",
        p: "Equatorial Guinea"
    }, {
        c: "291",
        n: "Eritrea",
        p: "Eritrea"
    }, {
        c: "372",
        n: "Estonia",
        p: "Estonia"
    }, {
        c: "251",
        n: "Ethiopia",
        p: "Ethiopia"
    }, {
        c: "500",
        n: "Falkland Islands",
        p: "Falkland Islands"
    }, {
        c: "298",
        n: "Faroe Islands",
        p: "Faroe Islands"
    }, {
        c: "679",
        n: "Fiji",
        p: "Fiji"
    }, {
        c: "358",
        n: "Finland",
        p: "Finland"
    }, {
        c: "33",
        n: "France",
        p: "France"
    }, {
        c: "689",
        n: "French Polynesia",
        p: "French Polynesia"
    }, {
        c: "241",
        n: "Gabon",
        p: "Gabon"
    }, {
        c: "220",
        n: "Gambia",
        p: "Gambia"
    }, {
        c: "995",
        n: "Georgia",
        p: "Georgia"
    }, {
        c: "49",
        n: "Germany",
        p: "Germany"
    }, {
        c: "233",
        n: "Ghana",
        p: "Ghana"
    }, {
        c: "350",
        n: "Gibraltar",
        p: "Gibraltar"
    }, {
        c: "30",
        n: "Greece",
        p: "Greece"
    }, {
        c: "299",
        n: "Greenland",
        p: "Greenland"
    }, {
        c: "1473",
        n: "Grenada",
        p: "Grenada"
    }, {
        c: "1671",
        n: "Guam",
        p: "Guam"
    }, {
        c: "502",
        n: "Guatemala",
        p: "Guatemala"
    }, {
        c: "224",
        n: "Guinea",
        p: "Guinea"
    }, {
        c: "245",
        n: "Guinea-Bissau",
        p: "Guinea-Bissau"
    }, {
        c: "592",
        n: "Guyana",
        p: "Guyana"
    }, {
        c: "509",
        n: "Haiti",
        p: "Haiti"
    }, {
        c: "504",
        n: "Honduras",
        p: "Honduras"
    }, {
        c: "36",
        n: "Hungary",
        p: "Hungary"
    }, {
        c: "354",
        n: "Iceland",
        p: "Iceland"
    }, {
        c: "91",
        n: "India",
        p: "India"
    }, {
        c: "62",
        n: "Indonesia",
        p: "Indonesia"
    }, {
        c: "98",
        n: "Iran",
        p: "Iran"
    }, {
        c: "964",
        n: "Iraq",
        p: "Iraq"
    }, {
        c: "353",
        n: "Ireland",
        p: "Ireland"
    }, {
        c: "44",
        n: "Isle of Man",
        p: "Isle of Man"
    }, {
        c: "972",
        n: "Israel",
        p: "Israel"
    }, {
        c: "39",
        n: "Italy",
        p: "Italy"
    }, {
        c: "1876",
        n: "Jamaica",
        p: "Jamaica"
    }, {
        c: "81",
        n: "Japan",
        p: "Japan"
    }, {
        c: "962",
        n: "Jordan",
        p: "Jordan"
    }, {
        c: "7",
        n: "Kazakhstan",
        p: "Kazakhstan"
    }, {
        c: "254",
        n: "Kenya",
        p: "Kenya"
    }, {
        c: "686",
        n: "Kiribati",
        p: "Kiribati"
    }, {
        c: "965",
        n: "Kuwait",
        p: "Kuwait"
    }, {
        c: "996",
        n: "Kyrgyzstan",
        p: "Kyrgyzstan"
    }, {
        c: "856",
        n: "Laos",
        p: "Laos"
    }, {
        c: "371",
        n: "Latvia",
        p: "Latvia"
    }, {
        c: "961",
        n: "Lebanon",
        p: "Lebanon"
    }, {
        c: "266",
        n: "Lesotho",
        p: "Lesotho"
    }, {
        c: "231",
        n: "Liberia",
        p: "Liberia"
    }, {
        c: "218",
        n: "Libya",
        p: "Libya"
    }, {
        c: "423",
        n: "Liechtenstein",
        p: "Liechtenstein"
    }, {
        c: "370",
        n: "Lithuania",
        p: "Lithuania"
    }, {
        c: "352",
        n: "Luxembourg",
        p: "Luxembourg"
    }, {
        c: "389",
        n: "Macedonia",
        p: "Macedonia"
    }, {
        c: "261",
        n: "Madagascar",
        p: "Madagascar"
    }, {
        c: "265",
        n: "Malawi",
        p: "Malawi"
    }, {
        c: "60",
        n: "Malaysia",
        p: "Malaysia"
    }, {
        c: "960",
        n: "Maldives",
        p: "Maldives"
    }, {
        c: "223",
        n: "Mali",
        p: "Mali"
    }, {
        c: "356",
        n: "Malta",
        p: "Malta"
    }, {
        c: "692",
        n: "Marshall Islands",
        p: "Marshall Islands"
    }, {
        c: "222",
        n: "Mauritania",
        p: "Mauritania"
    }, {
        c: "230",
        n: "Mauritius",
        p: "Mauritius"
    }, {
        c: "262",
        n: "Mayotte",
        p: "Mayotte"
    }, {
        c: "52",
        n: "Mexico",
        p: "Mexico"
    }, {
        c: "691",
        n: "Micronesia",
        p: "Micronesia"
    }, {
        c: "373",
        n: "Moldova",
        p: "Moldova"
    }, {
        c: "377",
        n: "Monaco",
        p: "Monaco"
    }, {
        c: "976",
        n: "Mongolia",
        p: "Mongolia"
    }, {
        c: "382",
        n: "Montenegro",
        p: "Montenegro"
    }, {
        c: "1664",
        n: "Montserrat",
        p: "Montserrat"
    }, {
        c: "212",
        n: "Morocco",
        p: "Morocco"
    }, {
        c: "258",
        n: "Mozambique",
        p: "Mozambique"
    }, {
        c: "95",
        n: "Myanmar [Burma]",
        p: "Myanmar [Burma]"
    }, {
        c: "264",
        n: "Namibia",
        p: "Namibia"
    }, {
        c: "674",
        n: "Nauru",
        p: "Nauru"
    }, {
        c: "977",
        n: "Nepal",
        p: "Nepal"
    }, {
        c: "31",
        n: "Netherlands",
        p: "Netherlands"
    }, {
        c: "599",
        n: "Netherlands Antilles",
        p: "Netherlands Antilles"
    }, {
        c: "687",
        n: "New Caledonia",
        p: "New Caledonia"
    }, {
        c: "64",
        n: "New Zealand",
        p: "New Zealand"
    }, {
        c: "505",
        n: "Nicaragua",
        p: "Nicaragua"
    }, {
        c: "227",
        n: "Niger",
        p: "Niger"
    }, {
        c: "234",
        n: "Nigeria",
        p: "Nigeria"
    }, {
        c: "683",
        n: "Niue",
        p: "Niue"
    }, {
        c: "850",
        n: "North Korea",
        p: "North Korea"
    }, {
        c: "1670",
        n: "Northern Mariana Islands",
        p: "Northern Mariana Islands"
    }, {
        c: "47",
        n: "Norway",
        p: "Norway"
    }, {
        c: "968",
        n: "Oman",
        p: "Oman"
    }, {
        c: "92",
        n: "Pakistan",
        p: "Pakistan"
    }, {
        c: "680",
        n: "Palau",
        p: "Palau"
    }, {
        c: "507",
        n: "Panama",
        p: "Panama"
    }, {
        c: "675",
        n: "Papua New Guinea",
        p: "Papua New Guinea"
    }, {
        c: "595",
        n: "Paraguay",
        p: "Paraguay"
    }, {
        c: "51",
        n: "Peru",
        p: "Peru"
    }, {
        c: "63",
        n: "Philippines",
        p: "Philippines"
    }, {
        c: "870",
        n: "Pitcairn Islands",
        p: "Pitcairn Islands"
    }, {
        c: "48",
        n: "Poland",
        p: "Poland"
    }, {
        c: "351",
        n: "Portugal",
        p: "Portugal"
    }, {
        c: "1",
        n: "Puerto Rico",
        p: "Puerto Rico"
    }, {
        c: "974",
        n: "Qatar",
        p: "Qatar"
    }, {
        c: "40",
        n: "Romania",
        p: "Romania"
    }, {
        c: "7",
        n: "Russia",
        p: "Russia"
    }, {
        c: "250",
        n: "Rwanda",
        p: "Rwanda"
    }, {
        c: "239",
        n: "S?o Tomé and Príncipe",
        p: "S?o Tomé and Prín"
    }, {
        c: "590",
        n: "Saint Barthélemy",
        p: "Saint Barthélemy"
    }, {
        c: "290",
        n: "Saint Helena",
        p: "Saint Helena"
    }, {
        c: "1869",
        n: "Saint Kitts and Nevis",
        p: "Saint Kitts and Nevis"
    }, {
        c: "1758",
        n: "Saint Lucia",
        p: "Saint Lucia"
    }, {
        c: "1599",
        n: "Saint Martin",
        p: "Saint Martin"
    }, {
        c: "508",
        n: "Saint Pierre and Miquelon",
        p: "Saint Pierre and Miquelon"
    }, {
        c: "1784",
        n: "Saint Vincent and the Grenadines",
        p: "Saint Vincent and the Grenadines"
    }, {
        c: "685",
        n: "Samoa",
        p: "Samoa"
    }, {
        c: "378",
        n: "San Marino",
        p: "San Marino"
    }, {
        c: "966",
        n: "Saudi Arabia",
        p: "Saudi Arabia"
    }, {
        c: "221",
        n: "Senegal",
        p: "Senegal"
    }, {
        c: "381",
        n: "Serbia",
        p: "Serbia"
    }, {
        c: "248",
        n: "Seychelles",
        p: "Seychelles"
    }, {
        c: "232",
        n: "Sierra Leone",
        p: "Sierra Leone"
    }, {
        c: "65",
        n: "Singapore",
        p: "Singapore"
    }, {
        c: "421",
        n: "Slovakia",
        p: "Slovakia"
    }, {
        c: "386",
        n: "Slovenia",
        p: "Slovenia"
    }, {
        c: "677",
        n: "Solomon Islands",
        p: "Solomon Islands"
    }, {
        c: "252",
        n: "Somalia",
        p: "Somalia"
    }, {
        c: "27",
        n: "South Africa",
        p: "South Africa"
    }, {
        c: "82",
        n: "South Korea",
        p: "South Korea"
    }, {
        c: "34",
        n: "Spain",
        p: "Spain"
    }, {
        c: "94",
        n: "Sri Lanka",
        p: "Sri Lanka"
    }, {
        c: "249",
        n: "Sudan",
        p: "Sudan"
    }, {
        c: "268",
        n: "Swaziland",
        p: "Swaziland"
    }, {
        c: "46",
        n: "Sweden",
        p: "Sweden"
    }, {
        c: "41",
        n: "Switzerland",
        p: "Switzerland"
    }, {
        c: "963",
        n: "Syria",
        p: "Syria"
    }, {
        c: "992",
        n: "Tajikistan",
        p: "Tajikistan"
    }, {
        c: "255",
        n: "Tanzania",
        p: "Tanzania"
    }, {
        c: "66",
        n: "Thailand",
        p: "Thailand"
    }, {
        c: "670",
        n: "Timor-Leste",
        p: "Timor-Leste"
    }, {
        c: "228",
        n: "Togo",
        p: "Togo"
    }, {
        c: "690",
        n: "Tokelau",
        p: "Tokelau"
    }, {
        c: "676",
        n: "Tonga",
        p: "Tonga"
    }, {
        c: "1868",
        n: "Trinidad and Tobago",
        p: "Trinidad and Tobago"
    }, {
        c: "216",
        n: "Tunisia",
        p: "Tunisia"
    }, {
        c: "90",
        n: "Turkey",
        p: "Turkey"
    }, {
        c: "993",
        n: "Turkmenistan",
        p: "Turkmenistan"
    }, {
        c: "1649",
        n: "Turks and Caicos Islands",
        p: "Turks and Caicos Islands"
    }, {
        c: "688",
        n: "Tuvalu",
        p: "Tuvalu"
    }, {
        c: "1340",
        n: "U.S. Virgin Islands",
        p: "U.S. Virgin Islands"
    }, {
        c: "256",
        n: "Uganda",
        p: "Uganda"
    }, {
        c: "380",
        n: "Ukraine",
        p: "Ukraine"
    }, {
        c: "971",
        n: "United Arab Emirates",
        p: "United Arab Emirates"
    }, {
        c: "44",
        n: "United Kingdom",
        p: "United Kingdom"
    }, {
        c: "1",
        n: "United States",
        p: "United States"
    }, {
        c: "598",
        n: "Uruguay",
        p: "Uruguay"
    }, {
        c: "998",
        n: "Uzbekistan",
        p: "Uzbekistan"
    }, {
        c: "678",
        n: "Vanuatu",
        p: "Vanuatu"
    }, {
        c: "39",
        n: "Vatican City",
        p: "Vatican City"
    }, {
        c: "58",
        n: "Venezuela",
        p: "Venezuela"
    }, {
        c: "84",
        n: "Vietnam",
        p: "Vietnam"
    }, {
        c: "681",
        n: "Wallis and Futuna",
        p: "Wallis and Futuna"
    }, {
        c: "967",
        n: "Yemen",
        p: "Yemen"
    }, {
        c: "260",
        n: "Zambia",
        p: "Zambia"
    }]
}
, function(e, t) {
    e.exports = {
        title: "QQ Registration",
        lang: 1033,
        now_language: "English",
        welcome: "Welcome to QQ",
        header: "Everyday, enjoy your communication",
        nickname: "Nickname",
        password: "Password",
        phone_number: "Tel",
        reg_now: "Sign up now",
        agree: "I have read and agreed to the Service Agreement and the Privacy Policy",
        mail_account: "Mail Account",
        qq_account: "QQ Account",
        feedback: "Feedback",
        code: "Code",
        phone_tips: "You can find your password by using the phone number",
        send_sms: "Send",
        need_send_sms: "please send sms first",
        please_send_sms: "please send SMS to help us verify your identification",
        edit_sms: "Send：",
        up_sms_content: "1",
        sms_to: "To:",
        up_sms_price: "No extra fee will be charged except the standard SMS fee",
        has_send_sms: "Sent",
        up_sms_failed: "SMS failed to verify, please resend the message",
        up_sms_failed_multi: " or <a href='#' onclick='app.switchUpPort()'>change receive number</a>",
        up_port_updated: "(updated)",
        qq_mail_welcome: "QQ  Email Account",
        qq_mail_header: " Personalized QQ Email account",
        qq_mail_tips: "Please enter your Email name",
        other_mail_welcome: "Email Account",
        other_mail_header: "Use Email to log in QQ",
        other_mail_tips: "Please enter your Email (non-QQ / FOXMAIL Email account)",
        qq_mail_entry: "No Email?",
        mail: "Mail",
        reg_succ: "Sign-up successful",
        phone_tips_succ: "You could use {phone} to log in QQ",
        mibao_tips: "Find your password through {phone}",
        recycle_tips: "This account will be recycled if you were not to log in in three days",
        qqmail_tips_succ: "Linked：{mail}",
        mail_tips_succ: "Connected To：{mail}",
        need_active: "Waiting for activation",
        mail_has_send: "Activation email has been sent to: {mail}",
        active_tips: "Please log in your email account in 24 hours and follow instructions to bind your account.",
        login_mail: "Log in Mailbox",
        if_no_mail: "If you have not received activation email",
        try_mail: "Please try one of the following methods",
        mail_tip1: "1. Check your junk mail box to see if the activation email is there.",
        mail_tip2: "2. Click here to re-send activation email",
        mail_tip3: "3. If you still don't receive activation email, <a href='javascript:location.reload()'>click here to use a different email</a>",
        mail_has_resend: "Activation email has been sent to: {mail}",
        login: "Login",
        other_number_tips: "Always forgot your account? Add it to your history account",
        nick_null: "Nickname cannot be empty",
        nick_blank: "Nickname cannot be space",
        nick_max: "Cannot exceed 24 letters",
        nick_invalid: "You cannot use this nickname",
        nick_plz_input: "Please enter nickname",
        mail_plz_input: "Please enter Email address",
        mail_exist: "This Email account is already registered",
        mail_illeagl: "Invalid email",
        mail_not_qq: "Register with non-QQ/Foxmail Email",
        mail_length: "3-18 characters",
        mail_start_limit: "Begin with a letter (case insensitive)",
        mail_end_limit: "End with letters or numbers",
        mail_char_limit: "Create a username using 3-18 alphabets, numbers, period, dash, or underscore",
        mail_special_limit: "Dot, dash and underscore cannot appear more than once each",
        "return": "return",
        password_null: "Please enter your password",
        password_blank: "Not contain space",
        password_length: "8-16 characters",
        password_simple: "Please choose a more secure password",
        agreement_text_read: "I have read and agree to ",
        agreement_text_and: "and ",
        agreement_number: "tencent QQ service agreement ",
        agreement_number_link: "https://ti.qq.com/agreement/index.html",
        agreement_qzone: "Q-Zone Service Agreement",
        agreement_qzone_link: "http://qzone.qq.com/web/tk.html",
        agreement_privacy: "privacy policy ",
        agreement_privacy_link: "https://ti.qq.com/doc/redirect/qq-privacy-guild",
        friends_failed: "Failed",
        friends_succ: "Sended",
        add_friend_tips: "Click to send request",
        download_qq_tips: "Click to save the QQ number to local",
        verify_code_error: "Invalid verification code",
        phone_error: "Invalid mobile number",
        phone_security_error: "Your mobile phone number may have security risks tested by our system. Please change a new mobile phone number to register QQ account.",
        system_busy: "Sorry, server is busy. Please try again later",
        evil_error: "Please try again after 24 hours due to unusually high volume of signups from your IP",
        frq_error: "Too many attempts within time limit. Please try again later",
        phone_null: "Please enter your mobile number",
        phone_invalid: "Invalid mobile number",
        code_null: "Please enter verification code",
        password_input: "Please enter password",
        agreement_need: "Please accept the Service Agreement first",
        mail_duplicate: "This Email has been activated, you can log with this Email or QQ account",
        mail_binded: "This Email has been connected: This Email has been connected to an QQ account, please apply with other Email account",
        mail_expire: "The activate link is invalid: this activate link is invalid, please apply again",
        save_uin_to_pc: "Save QQ number to computer",
        password_eye: "Long press to display the password",
        upgrade_tips: 'The browser version is too low, please <a href="https://dldir1.qq.com/invc/tt/QQBrowser_Setup_qqzc.exe" target="_blank">upgrade the browser</a>',
        mobile_qq_register: "Mobile QQ Registration",
        mobile_qq_register_tips: "Your mobile phone number {phone} is a security risk, please go to mobile QQ to register.",
        mobile_qq_download_tips: "If you haven't downloaded mobile QQ, scan the QR code below to download mobile QQ and register.",
        qrcode_tips: "If you have downloaded mobile QQ, please register directly on mobile QQ."
    }
}
, function(e, t) {
    e.exports = [{
        c: "86",
        n: "中華人民共和國",
        p: "zhonghuarenmingongheguo"
    }, {
        c: "852",
        n: "中華人民共和國香港特別行政區",
        p: "zhonghuarenmingongheguoxianggangtebiexingzhengqu"
    }, {
        c: "853",
        n: "中華人民共和國澳門特別行政區",
        p: "zhonghuarenmingongheguoaomentebiexingzhengqu"
    }, {
        c: "886",
        n: "中華人民共和國台灣地區",
        p: "zhonghuarenmingongheguotaiwandiqu"
    }, {
        c: "93",
        n: "阿富汗",
        p: "afuhan"
    }, {
        c: "54",
        n: "阿根廷",
        p: "agenting"
    }, {
        c: "20",
        n: "埃及",
        p: "aiji"
    }, {
        c: "353",
        n: "愛爾蘭",
        p: "aimilan"
    }, {
        c: "372",
        n: "愛沙尼亞",
        p: "aishaniya"
    }, {
        c: "971",
        n: "阿拉伯聯合大公國",
        p: "alabolianhedagongguo"
    }, {
        c: "297",
        n: "阿路巴",
        p: "aluba"
    }, {
        c: "968",
        n: "阿曼王國",
        p: "amanwangguo"
    }, {
        c: "355",
        n: "阿爾巴尼亞",
        p: "amibaniya"
    }, {
        c: "213",
        n: "阿爾及利亞",
        p: "amijiliya"
    }, {
        c: "376",
        n: "安道爾",
        p: "andaomi"
    }, {
        c: "1268",
        n: "安地卡及巴布達",
        p: "andikajibabuta"
    }, {
        c: "244",
        n: "安哥拉",
        p: "angela"
    }, {
        c: "1264",
        n: "安圭拉島",
        p: "anguiladao"
    }, {
        c: "43",
        n: "奧地利",
        p: "aodili"
    }, {
        c: "61",
        n: "澳洲",
        p: "aozhou"
    }, {
        c: "1246",
        n: "巴貝多",
        p: "babeiduo"
    }, {
        c: "675",
        n: "巴布亞紐幾內亞",
        p: "babuyaniujiruiya"
    }, {
        c: "1242",
        n: "巴哈馬",
        p: "bahama"
    }, {
        c: "375",
        n: "白俄羅斯",
        p: "baieluosi"
    }, {
        c: "1441",
        n: "百慕達",
        p: "baimuta"
    }, {
        c: "92",
        n: "巴基斯坦",
        p: "bajisitan"
    }, {
        c: "595",
        n: "巴拉圭",
        p: "balagui"
    }, {
        c: "973",
        n: "巴林",
        p: "balin"
    }, {
        c: "507",
        n: "巴拿馬",
        p: "banama"
    }, {
        c: "359",
        n: "保加利亞",
        p: "baojialiya"
    }, {
        c: "55",
        n: "巴西",
        p: "baxi"
    }, {
        c: "850",
        n: "北韓",
        p: "beihan"
    }, {
        c: "501",
        n: "貝里斯",
        p: "beilisi"
    }, {
        c: "1670",
        n: "北馬里亞納群島",
        p: "beimaliyanaqundao"
    }, {
        c: "229",
        n: "貝南",
        p: "beinan"
    }, {
        c: "32",
        n: "比利時",
        p: "bilishi"
    }, {
        c: "354",
        n: "冰島",
        p: "bingdao"
    }, {
        c: "1",
        n: "波多黎各",
        p: "boduolige"
    }, {
        c: "48",
        n: "波蘭",
        p: "bolan"
    }, {
        c: "680",
        n: "帛琉",
        p: "boliu"
    }, {
        c: "591",
        n: "玻利維亞",
        p: "boliyiya"
    }, {
        c: "387",
        n: "波士尼亞與赫塞格維納",
        p: "boshiniyayuhesaigeyina"
    }, {
        c: "267",
        n: "波札那",
        p: "bozhana"
    }, {
        c: "975",
        n: "不丹",
        p: "budan"
    }, {
        c: "226",
        n: "布吉納法索",
        p: "bujinafasuo"
    }, {
        c: "235",
        n: "查德",
        p: "chade"
    }, {
        c: "240",
        n: "赤道幾內亞",
        p: "chidaojiruiya"
    }, {
        c: "45",
        n: "丹麥",
        p: "danmai"
    }, {
        c: "49",
        n: "德國",
        p: "deguo"
    }, {
        c: "670",
        n: "東帝汶",
        p: "dongdiwen"
    }, {
        c: "676",
        n: "東加",
        p: "dongjia"
    }, {
        c: "228",
        n: "多哥共和國",
        p: "duogegongheguo"
    }, {
        c: "1767",
        n: "多明尼加",
        p: "duomingnijia"
    }, {
        c: "1809",
        n: "多明尼加共和國",
        p: "duomingnijiagongheguo"
    }, {
        c: "593",
        n: "厄瓜多",
        p: "eguaduo"
    }, {
        c: "291",
        n: "厄利垂亞",
        p: "elichuiya"
    }, {
        c: "7",
        n: "俄羅斯",
        p: "eluosi"
    }, {
        c: "33",
        n: "法國",
        p: "faguo"
    }, {
        c: "298",
        n: "法羅群島",
        p: "faluoqundao"
    }, {
        c: "39",
        n: "梵蒂岡",
        p: "fandigang"
    }, {
        c: "689",
        n: "法屬玻里尼西亞",
        p: "fazhubolinixiya"
    }, {
        c: "63",
        n: "菲律賓",
        p: "feilvbin"
    }, {
        c: "679",
        n: "斐濟",
        p: "feiqi"
    }, {
        c: "358",
        n: "芬蘭",
        p: "fenlan"
    }, {
        c: "500",
        n: "福克蘭群島",
        p: "fukelanqundao"
    }, {
        c: "220",
        n: "甘比亞",
        p: "ganbiya"
    }, {
        c: "242",
        n: "剛果（布拉薩）",
        p: "gangguobulasa"
    }, {
        c: "243",
        n: "剛果（金夏沙）",
        p: "gangguojinxiasha"
    }, {
        c: "299",
        n: "格陵蘭",
        p: "gelinglan"
    }, {
        c: "57",
        n: "哥倫比亞",
        p: "gelunbiya"
    }, {
        c: "1473",
        n: "格瑞納達",
        p: "geruinata"
    }, {
        c: "506",
        n: "哥斯大黎加",
        p: "gesidalijia"
    }, {
        c: "592",
        n: "蓋亞納",
        p: "geyana"
    }, {
        c: "502",
        n: "瓜地馬拉",
        p: "guadimala"
    }, {
        c: "53",
        n: "古巴",
        p: "guba"
    }, {
        c: "509",
        n: "海地",
        p: "haidi"
    }, {
        c: "7",
        n: "哈薩克",
        p: "hasake"
    }, {
        c: "31",
        n: "荷蘭",
        p: "helan"
    }, {
        c: "599",
        n: "荷屬安地列斯",
        p: "hezhuandiliesi"
    }, {
        c: "504",
        n: "宏都拉斯",
        p: "hongdoulasi"
    }, {
        c: "233",
        n: "迦納",
        p: "jiana"
    }, {
        c: "1",
        n: "加拿大",
        p: "jianada"
    }, {
        c: "855",
        n: "柬埔寨",
        p: "jianpuzhai"
    }, {
        c: "241",
        n: "加彭",
        p: "jiapeng"
    }, {
        c: "253",
        n: "吉布地",
        p: "jibudi"
    }, {
        c: "420",
        n: "捷克共和國",
        p: "jiekegongheguo"
    }, {
        c: "686",
        n: "吉里巴斯",
        p: "jilibasi"
    }, {
        c: "996",
        n: "吉爾吉斯",
        p: "jimijisi"
    }, {
        c: "224",
        n: "幾內亞",
        p: "jiruiya"
    }, {
        c: "245",
        n: "幾內亞比索",
        p: "jiruiyabisuo"
    }, {
        c: "237",
        n: "喀麥隆",
        p: "kamailong"
    }, {
        c: "974",
        n: "卡達",
        p: "kata"
    }, {
        c: "61",
        n: "可可斯群島",
        p: "kekesiqundao"
    }, {
        c: "385",
        n: "克羅埃西亞",
        p: "keluoaixiya"
    }, {
        c: "269",
        n: "科摩羅群島",
        p: "kemoluoqundao"
    }, {
        c: "254",
        n: "肯亞",
        p: "kenya"
    }, {
        c: "225",
        n: "科特迪瓦",
        p: "ketediwa"
    }, {
        c: "965",
        n: "科威特",
        p: "keweite"
    }, {
        c: "682",
        n: "庫克群島",
        p: "kukequndao"
    }, {
        c: "231",
        n: "賴比瑞亞",
        p: "laibiruiya"
    }, {
        c: "266",
        n: "賴索扥",
        p: "laisuotuo"
    }, {
        c: "371",
        n: "拉脫維亞",
        p: "latuoyiya"
    }, {
        c: "856",
        n: "寮國",
        p: "liaoguo"
    }, {
        c: "961",
        n: "黎巴嫩",
        p: "libanen"
    }, {
        c: "218",
        n: "利比亞",
        p: "libiya"
    }, {
        c: "423",
        n: "列支敦斯登",
        p: "liezhidunsideng"
    }, {
        c: "370",
        n: "立陶宛",
        p: "litaowan"
    }, {
        c: "40",
        n: "羅馬尼亞",
        p: "luomaniya"
    }, {
        c: "250",
        n: "盧安達",
        p: "lvanta"
    }, {
        c: "352",
        n: "盧森堡",
        p: "lvsenbao"
    }, {
        c: "60",
        n: "馬來西亞",
        p: "malaixiya"
    }, {
        c: "265",
        n: "馬拉威",
        p: "malawei"
    }, {
        c: "223",
        n: "馬利",
        p: "mali"
    }, {
        c: "960",
        n: "馬爾地夫",
        p: "mamidifu"
    }, {
        c: "356",
        n: "馬爾他",
        p: "mamita"
    }, {
        c: "44",
        n: "曼島",
        p: "mandao"
    }, {
        c: "222",
        n: "茅利塔尼亞",
        p: "maolitaniya"
    }, {
        c: "389",
        n: "馬其頓",
        p: "maqidun"
    }, {
        c: "692",
        n: "馬紹爾群島",
        p: "mashaomiqundao"
    }, {
        c: "261",
        n: "馬達加斯加",
        p: "matajiasijia"
    }, {
        c: "262",
        n: "馬約特",
        p: "mayuete"
    }, {
        c: "1",
        n: "美國",
        p: "meiguo"
    }, {
        c: "1684",
        n: "美屬薩摩亞群島",
        p: "meizhusamoyaqundao"
    }, {
        c: "1340",
        n: "美屬維京群島",
        p: "meizhuyijingqundao"
    }, {
        c: "976",
        n: "蒙古",
        p: "menggu"
    }, {
        c: "880",
        n: "孟加拉",
        p: "mengjiala"
    }, {
        c: "382",
        n: "蒙特內哥羅",
        p: "mengteruigeluo"
    }, {
        c: "1664",
        n: "蒙特色拉特島",
        p: "mengteselatedao"
    }, {
        c: "95",
        n: "緬甸",
        p: "miandian"
    }, {
        c: "691",
        n: "密克羅尼西亞群島",
        p: "mikeluonixiyaqundao"
    }, {
        c: "51",
        n: "秘魯",
        p: "milv"
    }, {
        c: "230",
        n: "模里西斯",
        p: "molixisi"
    }, {
        c: "212",
        n: "摩洛哥",
        p: "moluoge"
    }, {
        c: "373",
        n: "摩爾多瓦",
        p: "momiduowa"
    }, {
        c: "377",
        n: "摩納哥",
        p: "monage"
    }, {
        c: "258",
        n: "莫三比克",
        p: "mosanbike"
    }, {
        c: "52",
        n: "墨西哥",
        p: "moxige"
    }, {
        c: "234",
        n: "奈及利亞",
        p: "naijiliya"
    }, {
        c: "264",
        n: "納米比亞",
        p: "namibiya"
    }, {
        c: "27",
        n: "南非",
        p: "nanfei"
    }, {
        c: "82",
        n: "南韓",
        p: "nanhan"
    }, {
        c: "672",
        n: "南極洲",
        p: "nanjizhou"
    }, {
        c: "977",
        n: "尼泊爾",
        p: "nibomi"
    }, {
        c: "505",
        n: "尼加拉瓜",
        p: "nijialagua"
    }, {
        c: "227",
        n: "尼日",
        p: "niri"
    }, {
        c: "683",
        n: "紐威島",
        p: "niuweidao"
    }, {
        c: "64",
        n: "紐西蘭",
        p: "niuxilan"
    }, {
        c: "674",
        n: "諾魯",
        p: "nuolv"
    }, {
        c: "47",
        n: "挪威",
        p: "nuowei"
    }, {
        c: "870",
        n: "皮特康",
        p: "pitekang"
    }, {
        c: "257",
        n: "蒲隆地",
        p: "pulongdi"
    }, {
        c: "351",
        n: "葡萄牙",
        p: "putaoya"
    }, {
        c: "1868",
        n: "千里達及托巴哥",
        p: "qianlitajituobage"
    }, {
        c: "1345",
        n: "開曼群島",
        p: "qianmanqundao"
    }, {
        c: "995",
        n: "喬治亞共和國",
        p: "qiaozhiyagongheguo"
    }, {
        c: "81",
        n: "日本",
        p: "riben"
    }, {
        c: "46",
        n: "瑞典",
        p: "ruidian"
    }, {
        c: "41",
        n: "瑞士",
        p: "ruishi"
    }, {
        c: "381",
        n: "塞爾維亞",
        p: "saimiyiya"
    }, {
        c: "357",
        n: "賽普勒斯",
        p: "saipulesi"
    }, {
        c: "221",
        n: "塞內加爾",
        p: "sairuijiami"
    }, {
        c: "248",
        n: "塞席爾",
        p: "saiximi"
    }, {
        c: "503",
        n: "薩爾瓦多",
        p: "samiwaduo"
    }, {
        c: "685",
        n: "薩摩亞群島",
        p: "samoyaqundao"
    }, {
        c: "260",
        n: "尚比亞",
        p: "shangbiya"
    }, {
        c: "966",
        n: "沙烏地阿拉伯",
        p: "shayadialabo"
    }, {
        c: "590",
        n: "聖巴瑟米",
        p: "shengbasemi"
    }, {
        c: "508",
        n: "聖彼德與密啟崙",
        p: "shengbideyumiqilun"
    }, {
        c: "61",
        n: "聖誕島",
        p: "shengdandao"
    }, {
        c: "239",
        n: "聖多美及普林西比",
        p: "shengduomeijipulinxibi"
    }, {
        c: "290",
        n: "聖赫勒拿島",
        p: "shenghelenadao"
    }, {
        c: "1869",
        n: "聖克里斯多福及尼維斯",
        p: "shengkelisiduofujiniyisi"
    }, {
        c: "1758",
        n: "聖露西亞",
        p: "shengluxiya"
    }, {
        c: "1599",
        n: "聖馬丁",
        p: "shengmading"
    }, {
        c: "378",
        n: "聖馬利諾",
        p: "shengmalinuo"
    }, {
        c: "1784",
        n: "聖文森及格瑞那丁",
        p: "shengwensenjigeruinading"
    }, {
        c: "268",
        n: "史瓦濟蘭",
        p: "shiwaqilan"
    }, {
        c: "232",
        n: "獅子山",
        p: "shizishan"
    }, {
        c: "94",
        n: "斯里蘭卡",
        p: "sililanka"
    }, {
        c: "421",
        n: "斯洛伐克",
        p: "siluofake"
    }, {
        c: "386",
        n: "斯洛維尼亞",
        p: "siluoyiniya"
    }, {
        c: "249",
        n: "蘇丹",
        p: "sudan"
    }, {
        c: "677",
        n: "索羅門群島",
        p: "suoluomenqundao"
    }, {
        c: "252",
        n: "索馬利亞",
        p: "suomaliya"
    }, {
        c: "66",
        n: "泰國",
        p: "taiguo"
    }, {
        c: "992",
        n: "塔吉克",
        p: "tajike"
    }, {
        c: "255",
        n: "坦尚尼亞",
        p: "tanshangniya"
    }, {
        c: "90",
        n: "土耳其",
        p: "tuerqi"
    }, {
        c: "1649",
        n: "土克斯及開科斯群島",
        p: "tukesijiqiankesiqundao"
    }, {
        c: "993",
        n: "土庫曼",
        p: "tukuman"
    }, {
        c: "216",
        n: "突尼西亞",
        p: "tunixiya"
    }, {
        c: "690",
        n: "托克勞群島",
        p: "tuokeliaoqundao"
    }, {
        c: "688",
        n: "吐瓦魯",
        p: "tuwalv"
    }, {
        c: "681",
        n: "瓦利斯和福杜納群島",
        p: "walisihefudunaqundao"
    }, {
        c: "1671",
        n: "關島",
        p: "wandao"
    }, {
        c: "678",
        n: "萬那杜",
        p: "wannadu"
    }, {
        c: "58",
        n: "委內瑞拉",
        p: "weiruiruila"
    }, {
        c: "673",
        n: "汶萊",
        p: "wenlai"
    }, {
        c: "34",
        n: "西班牙",
        p: "xibanya"
    }, {
        c: "30",
        n: "希臘",
        p: "xilie"
    }, {
        c: "65",
        n: "新加坡",
        p: "xinjiapo"
    }, {
        c: "687",
        n: "新喀里多尼亞群島",
        p: "xinkaliduoniyaqundao"
    }, {
        c: "36",
        n: "匈牙利",
        p: "xiongyali"
    }, {
        c: "963",
        n: "敘利亞",
        p: "xuliya"
    }, {
        c: "256",
        n: "烏干達",
        p: "yaganta"
    }, {
        c: "380",
        n: "烏克蘭",
        p: "yakelan"
    }, {
        c: "598",
        n: "烏拉圭",
        p: "yalagui"
    }, {
        c: "1876",
        n: "牙買加",
        p: "yamaijia"
    }, {
        c: "374",
        n: "亞美尼亞",
        p: "yameiniya"
    }, {
        c: "994",
        n: "亞塞拜然",
        p: "yasaibairan"
    }, {
        c: "998",
        n: "烏茲別克",
        p: "yazibieke"
    }, {
        c: "967",
        n: "葉門",
        p: "yemen"
    }, {
        c: "39",
        n: "義大利",
        p: "yidali"
    }, {
        c: "238",
        n: "維德角",
        p: "yidejiao"
    }, {
        c: "964",
        n: "伊拉克",
        p: "yilake"
    }, {
        c: "98",
        n: "伊朗",
        p: "yilang"
    }, {
        c: "91",
        n: "印度",
        p: "yindu"
    }, {
        c: "44",
        n: "英國",
        p: "yingguo"
    }, {
        c: "1284",
        n: "英屬維京群島",
        p: "yingzhuyijingqundao"
    }, {
        c: "62",
        n: "印尼",
        p: "yinni"
    }, {
        c: "972",
        n: "以色列",
        p: "yiselie"
    }, {
        c: "251",
        n: "衣索比亞",
        p: "yisuobiya"
    }, {
        c: "962",
        n: "約旦",
        p: "yuedan"
    }, {
        c: "84",
        n: "越南",
        p: "yuenan"
    }, {
        c: "350",
        n: "直布羅陀",
        p: "zhibuluotuo"
    }, {
        c: "56",
        n: "智利",
        p: "zhili"
    }, {
        c: "236",
        n: "中非共和國",
        p: "zhongfeigongheguo"
    }]
}
, function(e, t) {
    e.exports = {
        title: "QQ註冊",
        lang: 1028,
        now_language: "繁體中文",
        welcome: "歡迎註冊QQ",
        header: "每一天，樂在溝通。",
        nickname: "昵稱",
        password: "密碼",
        phone_number: "手機號碼",
        reg_now: "立即註冊",
        agree: "我已閱讀並同意相關服務條款和隱私政策",
        mail_account: "郵箱帳號",
        qq_account: "QQ帳號",
        feedback: "意見回饋",
        code: "短信驗證碼",
        phone_tips: "可通過該手機號找回密碼",
        send_sms: "發送驗證碼",
        need_send_sms: "請先發送短信驗證碼",
        please_send_sms: "請發送短信幫助我們確認你的身份",
        edit_sms: "編輯短信：",
        up_sms_content: "1",
        sms_to: "發送至：",
        up_sms_price: "除運營商收取的標準短信費用外，無額外費用。",
        has_send_sms: "我已發送短信",
        up_sms_failed: "短信驗證失敗，請重新發送短信驗證",
        up_sms_failed_multi: "或<a href='#' onclick='app.switchUpPort()'>更換接收號碼</a>",
        up_port_updated: "(接收號碼已更新)",
        qq_mail_welcome: "QQ郵箱註冊",
        qq_mail_header: "個性化QQ郵箱名稱",
        qq_mail_tips: "請創建郵箱名，由3-18個英文、數位、點、減號、底線組成",
        other_mail_welcome: "郵箱帳號註冊QQ",
        other_mail_header: "郵箱登錄，便於記憶",
        other_mail_tips: "請輸入你常用的郵箱（非qq/foxmail郵箱）",
        qq_mail_entry: "創建QQ郵箱",
        mail: "郵箱",
        reg_succ: "註冊成功",
        phone_tips_succ: "你可以將手機號碼{phone}作為輔助帳號登錄QQ。",
        mibao_tips: "你可以通過手機號碼{phone}快速找回密碼",
        recycle_tips: "三天內未登錄，該號碼將會被收回。",
        qqmail_tips_succ: "對應郵箱：{mail}",
        mail_tips_succ: "已綁定郵箱：{mail}",
        need_active: "等待啟動",
        mail_has_send: "啟動郵件已發送至：{mail}",
        active_tips: "請在24小時內登錄您的郵箱，按照郵件中的提示啟動帳號。",
        login_mail: "登錄郵箱",
        if_no_mail: "如果您沒有收到啟動郵件",
        try_mail: "您可以嘗試以下方法",
        mail_tip1: "1. 查看您郵箱的垃圾箱，啟動郵件是否被誤認為是垃圾郵件",
        mail_tip2: "2. 點擊這裡讓系統重新發送一封郵件",
        mail_tip3: "3. 如果您總收不到，<a href='javascript:location.reload()'>可以點擊這裡更換其他郵箱位址</a>",
        mail_has_resend: "啟動郵件已重新發送至：{mail}",
        login: "立即登錄",
        other_number_tips: "點擊添加新號碼為常用號碼好友",
        nick_null: "昵稱不可以為空",
        nick_blank: "昵稱不可以為空格",
        nick_max: "不能超過24個字母或12個漢字",
        nick_invalid: "您不能使用該昵稱註冊",
        nick_plz_input: "請輸入昵稱",
        mail_plz_input: "請輸入郵箱",
        mail_exist: "郵箱已被註冊",
        mail_illeagl: "郵箱格式錯誤",
        mail_not_qq: "QQ/foxmail郵箱無需註冊，可以直接登錄",
        mail_length: "長度為3-18個字元",
        mail_start_limit: "必須以a-z的英文字母（不分大小寫）開頭",
        mail_end_limit: "由英文字母、數位結尾",
        mail_char_limit: "由3-16個英文、數位、點、減號、底線組成",
        mail_special_limit: "點、減號、底線不能連續出現兩次或兩次以上",
        "return": "返回",
        password_null: "密碼不能為空",
        password_blank: "不能包括空格",
        password_length: "長度為8-16個字元",
        password_simple: "必須包含字母、數位、符號中至少2種",
        agreement_text_read: "我已閱讀並同意",
        agreement_text_and: "和",
        agreement_number: "服務協議",
        agreement_number_link: "https://ti.qq.com/agreement/index.html",
        agreement_qzone: "《QQ空間服務協定》",
        agreement_qzone_link: "http://qzone.qq.com/web/tk.html",
        agreement_privacy: "QQ隱私保護指引",
        agreement_privacy_link: "https://ti.qq.com/doc/redirect/qq-privacy-guild",
        friends_failed: "發送好友請求失敗",
        friends_succ: "已發送好友請求",
        add_friend_tips: "點擊發送好友請求",
        download_qq_tips: "點擊將QQ號碼保持到本地",
        verify_code_error: "驗證碼錯誤",
        phone_error: "手機號有誤",
        phone_security_error: "經檢測，您的手機號存在安全風險，請您更換手機號註冊。",
        system_busy: "很抱歉，伺服器繁忙，請稍後重試。",
        evil_error: "受惡意註冊影響，您暫時無法完成註冊，請24小時後再試。",
        frq_error: "非常抱歉，你操作過於頻繁，請稍後再試！",
        phone_null: "請填寫手機號",
        phone_invalid: "手機號碼格式不正確",
        code_null: "請填寫驗證碼",
        password_input: "請輸入密碼",
        agreement_need: "請先同意服務條款",
        mail_duplicate: "該郵箱已啟動，可直接使用qq號或郵箱登錄。",
        mail_binded: "該郵箱已綁定QQ號，請使用其他郵箱申請。",
        mail_expire: "該連結已失效，請重新申請。",
        save_uin_to_pc: "保存號碼到電腦",
        password_eye: "長按顯示密碼",
        upgrade_tips: '流覽器版本太低，為保障資訊的安全和展現，建議<a href="https://dldir1.qq.com/invc/tt/QQBrowser_Setup_qqzc.exe" target="_blank">升級流覽器</a>',
        mobile_qq_register: "去手機QQ注册",
        mobile_qq_register_tips: "你的手機號{phone}存在安全風險，請前往手機QQ進行註冊。",
        mobile_qq_download_tips: "若你未下載手機QQ，則掃以下二維碼下載手機QQ後，進行註冊。",
        qrcode_tips: "若你已下載了手機QQ，請直接在手機QQ進行註冊。"
    }
}
, function(e, t) {
    e.exports = [{
        c: "86",
        n: "中国",
        p: "zhongguo"
    }, {
        c: "852",
        n: "中国香港特别行政区",
        p: "zhongguoxianggangtebiexingzhengqu"
    }, {
        c: "853",
        n: "中国澳门特别行政区",
        p: "zhongguoaomentebiexingzhengqu"
    }, {
        c: "886",
        n: "中国台湾地区",
        p: "zhongguotaiwandiqu"
    }, {
        c: "355",
        n: "阿尔巴尼亚",
        p: "aerbaniya"
    }, {
        c: "213",
        n: "阿尔及利亚",
        p: "aerjiliya"
    }, {
        c: "93",
        n: "阿富汗",
        p: "afuhan"
    }, {
        c: "54",
        n: "阿根廷",
        p: "agenting"
    }, {
        c: "353",
        n: "爱尔兰",
        p: "aierlan"
    }, {
        c: "20",
        n: "埃及",
        p: "aiji"
    }, {
        c: "251",
        n: "埃塞俄比亚",
        p: "aisaiebiya"
    }, {
        c: "372",
        n: "爱沙尼亚",
        p: "aishaniya"
    }, {
        c: "971",
        n: "阿拉伯联合酋长国",
        p: "alabolianheqiuzhangguo"
    }, {
        c: "297",
        n: "阿鲁巴",
        p: "aluba"
    }, {
        c: "968",
        n: "阿曼",
        p: "aman"
    }, {
        c: "376",
        n: "安道尔",
        p: "andaoer"
    }, {
        c: "244",
        n: "安哥拉",
        p: "angela"
    }, {
        c: "1264",
        n: "安圭拉",
        p: "anguila"
    }, {
        c: "1268",
        n: "安提瓜和巴布达",
        p: "antiguahebabuda"
    }, {
        c: "61",
        n: "澳大利亚",
        p: "aodaliya"
    }, {
        c: "43",
        n: "奥地利",
        p: "aodili"
    }, {
        c: "994",
        n: "阿塞拜疆",
        p: "asaibaijiang"
    }, {
        c: "1246",
        n: "巴巴多斯",
        p: "babaduosi"
    }, {
        c: "675",
        n: "巴布亚新几内亚",
        p: "babuyaxinjineiya"
    }, {
        c: "1242",
        n: "巴哈马",
        p: "bahama"
    }, {
        c: "375",
        n: "白俄罗斯",
        p: "baieluosi"
    }, {
        c: "1441",
        n: "百慕大",
        p: "baimuda"
    }, {
        c: "92",
        n: "巴基斯坦",
        p: "bajisitan"
    }, {
        c: "595",
        n: "巴拉圭",
        p: "balagui"
    }, {
        c: "973",
        n: "巴林",
        p: "balin"
    }, {
        c: "507",
        n: "巴拿马",
        p: "banama"
    }, {
        c: "359",
        n: "保加利亚",
        p: "baojialiya"
    }, {
        c: "55",
        n: "巴西",
        p: "baxi"
    }, {
        c: "1670",
        n: "北马里亚纳群岛",
        p: "beimaliyanaqundao"
    }, {
        c: "229",
        n: "贝宁",
        p: "beining"
    }, {
        c: "32",
        n: "比利时",
        p: "bilishi"
    }, {
        c: "354",
        n: "冰岛",
        p: "bingdao"
    }, {
        c: "267",
        n: "博茨瓦纳",
        p: "bociwana"
    }, {
        c: "1",
        n: "波多黎各",
        p: "boduolige"
    }, {
        c: "48",
        n: "波兰",
        p: "bolan"
    }, {
        c: "591",
        n: "玻利维亚",
        p: "boliweiya"
    }, {
        c: "501",
        n: "伯利兹",
        p: "bolizi"
    }, {
        c: "387",
        n: "波斯尼亚和黑塞哥维那",
        p: "bosiniyaheheisaigeweina"
    }, {
        c: "975",
        n: "不丹",
        p: "budan"
    }, {
        c: "226",
        n: "布基纳法索",
        p: "bujinafasuo"
    }, {
        c: "257",
        n: "布隆迪",
        p: "bulongdi"
    }, {
        c: "850",
        n: "朝鲜",
        p: "chaoxian"
    }, {
        c: "240",
        n: "赤道几内亚",
        p: "chidaojineiya"
    }, {
        c: "45",
        n: "丹麦",
        p: "danmai"
    }, {
        c: "49",
        n: "德国",
        p: "deguo"
    }, {
        c: "670",
        n: "东帝汶",
        p: "dongdiwen"
    }, {
        c: "228",
        n: "多哥",
        p: "duoge"
    }, {
        c: "1767",
        n: "多米尼加",
        p: "duominijia"
    }, {
        c: "1809",
        n: "多米尼加共和国",
        p: "duominijiagongheguo"
    }, {
        c: "593",
        n: "厄瓜多尔",
        p: "eguaduoer"
    }, {
        c: "291",
        n: "厄立特里亚",
        p: "eliteliya"
    }, {
        c: "7",
        n: "俄罗斯",
        p: "eluosi"
    }, {
        c: "33",
        n: "法国",
        p: "faguo"
    }, {
        c: "298",
        n: "法罗群岛",
        p: "faluoqundao"
    }, {
        c: "39",
        n: "梵蒂冈",
        p: "fandigang"
    }, {
        c: "689",
        n: "法属波利尼西亚",
        p: "fashubolinixiya"
    }, {
        c: "679",
        n: "斐济",
        p: "feiji"
    }, {
        c: "63",
        n: "菲律宾",
        p: "feilvbin"
    }, {
        c: "358",
        n: "芬兰",
        p: "fenlan"
    }, {
        c: "238",
        n: "佛得角",
        p: "fodejiao"
    }, {
        c: "500",
        n: "福克兰群岛",
        p: "fukelanqundao"
    }, {
        c: "220",
        n: "冈比亚",
        p: "gangbiya"
    }, {
        c: "242",
        n: "刚果（布）",
        p: "gangguobu"
    }, {
        c: "243",
        n: "刚果（金）",
        p: "gangguojin"
    }, {
        c: "299",
        n: "格陵兰",
        p: "gelinglan"
    }, {
        c: "1473",
        n: "格林纳达",
        p: "gelinnada"
    }, {
        c: "995",
        n: "格鲁吉亚",
        p: "gelujiya"
    }, {
        c: "57",
        n: "哥伦比亚",
        p: "gelunbiya"
    }, {
        c: "506",
        n: "哥斯达黎加",
        p: "gesidalijia"
    }, {
        c: "1671",
        n: "关岛",
        p: "guandao"
    }, {
        c: "53",
        n: "古巴",
        p: "guba"
    }, {
        c: "592",
        n: "圭亚那",
        p: "guiyana"
    }, {
        c: "509",
        n: "海地",
        p: "haidi"
    }, {
        c: "82",
        n: "韩国",
        p: "hanguo"
    }, {
        c: "7",
        n: "哈萨克斯坦",
        p: "hasakesitan"
    }, {
        c: "382",
        n: "黑山共和国",
        p: "heishangongheguo"
    }, {
        c: "31",
        n: "荷兰",
        p: "helan"
    }, {
        c: "599",
        n: "荷属安的列斯群岛",
        p: "heshuandeliesiqundao"
    }, {
        c: "504",
        n: "洪都拉斯",
        p: "hongdoulasi"
    }, {
        c: "233",
        n: "加纳",
        p: "jiana"
    }, {
        c: "1",
        n: "加拿大",
        p: "jianada"
    }, {
        c: "855",
        n: "柬埔寨",
        p: "jianpuzhai"
    }, {
        c: "241",
        n: "加蓬",
        p: "jiapeng"
    }, {
        c: "253",
        n: "吉布提",
        p: "jibuti"
    }, {
        c: "420",
        n: "捷克共和国",
        p: "jiekegongheguo"
    }, {
        c: "996",
        n: "吉尔吉斯斯坦",
        p: "jierjisisitan"
    }, {
        c: "686",
        n: "基里巴斯",
        p: "jilibasi"
    }, {
        c: "224",
        n: "几内亚",
        p: "jineiya"
    }, {
        c: "245",
        n: "几内亚比绍",
        p: "jineiyabishao"
    }, {
        c: "1345",
        n: "开曼群岛",
        p: "kaimanqundao"
    }, {
        c: "237",
        n: "喀麦隆",
        p: "kamailong"
    }, {
        c: "974",
        n: "卡塔尔",
        p: "kataer"
    }, {
        c: "61",
        n: "科科斯群岛",
        p: "kekesiqundao"
    }, {
        c: "385",
        n: "克罗地亚",
        p: "keluodiya"
    }, {
        c: "269",
        n: "科摩罗",
        p: "kemoluo"
    }, {
        c: "254",
        n: "肯尼亚",
        p: "kenniya"
    }, {
        c: "225",
        n: "科特迪瓦",
        p: "ketediwa"
    }, {
        c: "965",
        n: "科威特",
        p: "keweite"
    }, {
        c: "682",
        n: "库克群岛",
        p: "kukequndao"
    }, {
        c: "266",
        n: "莱索托",
        p: "laisuotuo"
    }, {
        c: "856",
        n: "老挝人民民主共和国",
        p: "laoworenminminzhugongheguo"
    }, {
        c: "371",
        n: "拉脱维亚",
        p: "latuoweiya"
    }, {
        c: "961",
        n: "黎巴嫩",
        p: "libanen"
    }, {
        c: "231",
        n: "利比里亚",
        p: "libiliya"
    }, {
        c: "218",
        n: "利比亚",
        p: "libiya"
    }, {
        c: "423",
        n: "列支敦士登",
        p: "liezhidunshideng"
    }, {
        c: "370",
        n: "立陶宛",
        p: "litaowan"
    }, {
        c: "40",
        n: "罗马尼亚",
        p: "luomaniya"
    }, {
        c: "352",
        n: "卢森堡",
        p: "lusenbao"
    }, {
        c: "250",
        n: "卢旺达",
        p: "luwangda"
    }, {
        c: "261",
        n: "马达加斯加",
        p: "madajiasijia"
    }, {
        c: "960",
        n: "马尔代夫",
        p: "maerdaifu"
    }, {
        c: "356",
        n: "马耳他",
        p: "maerta"
    }, {
        c: "60",
        n: "马来西亚",
        p: "malaixiya"
    }, {
        c: "265",
        n: "马拉维",
        p: "malawei"
    }, {
        c: "223",
        n: "马里",
        p: "mali"
    }, {
        c: "44",
        n: "曼岛",
        p: "mandao"
    }, {
        c: "230",
        n: "毛里求斯",
        p: "maoliqiusi"
    }, {
        c: "222",
        n: "毛里塔尼亚",
        p: "maolitaniya"
    }, {
        c: "389",
        n: "马其顿",
        p: "maqidun"
    }, {
        c: "692",
        n: "马绍尔群岛",
        p: "mashaoerqundao"
    }, {
        c: "262",
        n: "马约特",
        p: "mayuete"
    }, {
        c: "1",
        n: "美国",
        p: "meiguo"
    }, {
        c: "1684",
        n: "美属萨摩亚",
        p: "meishusamoya"
    }, {
        c: "1340",
        n: "美属维京群岛",
        p: "meishuweijingqundao"
    }, {
        c: "976",
        n: "蒙古",
        p: "menggu"
    }, {
        c: "880",
        n: "孟加拉国",
        p: "mengjialaguo"
    }, {
        c: "1664",
        n: "蒙塞拉特群岛",
        p: "mengsailatequndao"
    }, {
        c: "95",
        n: "缅甸",
        p: "miandian"
    }, {
        c: "691",
        n: "密克罗尼西亚联邦",
        p: "mikeluonixiyalianbang"
    }, {
        c: "51",
        n: "秘鲁",
        p: "milu"
    }, {
        c: "373",
        n: "摩尔多瓦",
        p: "moerduowa"
    }, {
        c: "212",
        n: "摩洛哥",
        p: "moluoge"
    }, {
        c: "377",
        n: "摩纳哥",
        p: "monage"
    }, {
        c: "258",
        n: "莫桑比克",
        p: "mosangbike"
    }, {
        c: "52",
        n: "墨西哥",
        p: "moxige"
    }, {
        c: "264",
        n: "纳米比亚",
        p: "namibiya"
    }, {
        c: "27",
        n: "南非",
        p: "nanfei"
    }, {
        c: "672",
        n: "南极洲",
        p: "nanjizhou"
    }, {
        c: "674",
        n: "瑙鲁",
        p: "naolu"
    }, {
        c: "977",
        n: "尼泊尔",
        p: "niboer"
    }, {
        c: "505",
        n: "尼加拉瓜",
        p: "nijialagua"
    }, {
        c: "227",
        n: "尼日尔",
        p: "nirier"
    }, {
        c: "234",
        n: "尼日利亚",
        p: "niriliya"
    }, {
        c: "683",
        n: "纽埃",
        p: "niuai"
    }, {
        c: "47",
        n: "挪威",
        p: "nuowei"
    }, {
        c: "680",
        n: "帕劳",
        p: "palao"
    }, {
        c: "870",
        n: "皮特凯恩群岛",
        p: "pitekaienqundao"
    }, {
        c: "351",
        n: "葡萄牙",
        p: "putaoya"
    }, {
        c: "81",
        n: "日本",
        p: "riben"
    }, {
        c: "46",
        n: "瑞典",
        p: "ruidian"
    }, {
        c: "41",
        n: "瑞士",
        p: "ruishi"
    }, {
        c: "503",
        n: "萨尔瓦多",
        p: "saerwaduo"
    }, {
        c: "381",
        n: "塞尔维亚",
        p: "saierweiya"
    }, {
        c: "232",
        n: "塞拉利昂",
        p: "sailaliang"
    }, {
        c: "221",
        n: "塞内加尔",
        p: "saineijiaer"
    }, {
        c: "357",
        n: "塞浦路斯",
        p: "saipulusi"
    }, {
        c: "248",
        n: "塞舌尔群岛",
        p: "saisheerqundao"
    }, {
        c: "685",
        n: "萨摩亚",
        p: "samoya"
    }, {
        c: "966",
        n: "沙特阿拉伯",
        p: "shatealabo"
    }, {
        c: "590",
        n: "圣巴泰勒米",
        p: "shengbatailemi"
    }, {
        c: "61",
        n: "圣诞岛",
        p: "shengdandao"
    }, {
        c: "239",
        n: "圣多美和普林西比",
        p: "shengduomeihepulinxibi"
    }, {
        c: "290",
        n: "圣赫勒拿",
        p: "shenghelena"
    }, {
        c: "1869",
        n: "圣基茨和尼维斯",
        p: "shengjiciheniweisi"
    }, {
        c: "1758",
        n: "圣卢西亚",
        p: "shengluxiya"
    }, {
        c: "1599",
        n: "圣马丁",
        p: "shengmading"
    }, {
        c: "378",
        n: "圣马力诺",
        p: "shengmalinuo"
    }, {
        c: "508",
        n: "圣皮埃尔和密克隆",
        p: "shengpiaierhemikelong"
    }, {
        c: "1784",
        n: "圣文森特和格林纳丁斯",
        p: "shengwensentehegelinnadingsi"
    }, {
        c: "94",
        n: "斯里兰卡",
        p: "sililanka"
    }, {
        c: "421",
        n: "斯洛伐克",
        p: "siluofake"
    }, {
        c: "386",
        n: "斯洛文尼亚",
        p: "siluowenniya"
    }, {
        c: "268",
        n: "斯威士兰",
        p: "siweishilan"
    }, {
        c: "249",
        n: "苏丹",
        p: "sudan"
    }, {
        c: "677",
        n: "所罗门群岛",
        p: "suoluomenqundao"
    }, {
        c: "252",
        n: "索马里",
        p: "suomali"
    }, {
        c: "66",
        n: "泰国",
        p: "taiguo"
    }, {
        c: "992",
        n: "塔吉克斯坦",
        p: "tajikesitan"
    }, {
        c: "676",
        n: "汤加",
        p: "tangjia"
    }, {
        c: "255",
        n: "坦桑尼亚",
        p: "tansangniya"
    }, {
        c: "1649",
        n: "特克斯和凯科斯群岛",
        p: "tekesihekaikesiqundao"
    }, {
        c: "1868",
        n: "特立尼达和多巴哥",
        p: "telinidaheduobage"
    }, {
        c: "90",
        n: "土耳其",
        p: "tuerqi"
    }, {
        c: "993",
        n: "土库曼斯坦",
        p: "tukumansitan"
    }, {
        c: "216",
        n: "突尼斯",
        p: "tunisi"
    }, {
        c: "690",
        n: "托克劳",
        p: "tuokelao"
    }, {
        c: "688",
        n: "图瓦卢",
        p: "tuwalu"
    }, {
        c: "681",
        n: "瓦利斯和富图纳",
        p: "walisihefutuna"
    }, {
        c: "678",
        n: "瓦努阿图",
        p: "wanuatu"
    }, {
        c: "502",
        n: "危地马拉",
        p: "weidimala"
    }, {
        c: "58",
        n: "委内瑞拉",
        p: "weineiruila"
    }, {
        c: "673",
        n: "文莱",
        p: "wenlai"
    }, {
        c: "256",
        n: "乌干达",
        p: "wuganda"
    }, {
        c: "380",
        n: "乌克兰",
        p: "wukelan"
    }, {
        c: "598",
        n: "乌拉圭",
        p: "wulagui"
    }, {
        c: "998",
        n: "乌兹别克斯坦",
        p: "wuzibiekesitan"
    }, {
        c: "34",
        n: "西班牙",
        p: "xibanya"
    }, {
        c: "30",
        n: "希腊",
        p: "xila"
    }, {
        c: "65",
        n: "新加坡",
        p: "xinjiapo"
    }, {
        c: "687",
        n: "新喀里多尼亚",
        p: "xinkaliduoniya"
    }, {
        c: "64",
        n: "新西兰",
        p: "xinxilan"
    }, {
        c: "36",
        n: "匈牙利",
        p: "xiongyali"
    }, {
        c: "963",
        n: "叙利亚",
        p: "xuliya"
    }, {
        c: "1876",
        n: "牙买加",
        p: "yamaijia"
    }, {
        c: "374",
        n: "亚美尼亚",
        p: "yameiniya"
    }, {
        c: "967",
        n: "也门",
        p: "yemen"
    }, {
        c: "39",
        n: "意大利",
        p: "yidali"
    }, {
        c: "964",
        n: "伊拉克",
        p: "yilake"
    }, {
        c: "98",
        n: "伊朗",
        p: "yilang"
    }, {
        c: "91",
        n: "印度",
        p: "yindu"
    }, {
        c: "62",
        n: "印度尼西亚",
        p: "yindunixiya"
    }, {
        c: "44",
        n: "英国",
        p: "yingguo"
    }, {
        c: "1284",
        n: "英属维京群岛",
        p: "yingshuweijingqundao"
    }, {
        c: "972",
        n: "以色列",
        p: "yiselie"
    }, {
        c: "962",
        n: "约旦",
        p: "yuedan"
    }, {
        c: "84",
        n: "越南",
        p: "yuenan"
    }, {
        c: "260",
        n: "赞比亚",
        p: "zanbiya"
    }, {
        c: "235",
        n: "乍得",
        p: "zhade"
    }, {
        c: "350",
        n: "直布罗陀",
        p: "zhibuluotuo"
    }, {
        c: "56",
        n: "智利",
        p: "zhili"
    }, {
        c: "236",
        n: "中非共和国",
        p: "zhongfeigongheguo"
    }]
}
, function(e, t) {
    e.exports = {
        title: "QQ注册",
        lang: 2052,
        now_language: "简体中文",
        welcome: "欢迎注册QQ",
        header: "每一天，乐在沟通。",
        nickname: "昵称",
        password: "密码",
        phone_number: "手机号码",
        reg_now: "立即注册",
        agree: "我已阅读并同意相关服务条款和隐私政策",
        mail_account: "邮箱帐号",
        qq_account: "QQ帐号",
        feedback: "意见反馈",
        code: "短信验证码",
        phone_tips: "可通过该手机号找回密码",
        send_sms: "发送验证码",
        need_send_sms: "请先发送短信验证码",
        please_send_sms: "请发送短信帮助我们确认你的身份",
        edit_sms: "发短信：",
        up_sms_content: "1",
        sms_to: "到号码：",
        up_sms_price: "除运营商收取的标准短信费用外，无额外费用。",
        has_send_sms: "我已发送短信",
        up_sms_failed: "短信验证失败，请重新发送短信验证",
        up_sms_failed_multi: "或<a href='#' onclick='app.switchUpPort()'>更换接收号码</a>",
        up_port_updated: "(接收号码已更新)",
        qq_mail_welcome: "QQ邮箱注册",
        qq_mail_header: "个性化QQ邮箱名称",
        qq_mail_tips: "请创建邮箱名，由3-18个英文、数字、点、减号、下划线组成",
        other_mail_welcome: "邮箱帐号注册QQ",
        other_mail_header: "邮箱登录，便于记忆",
        other_mail_tips: "请输入你常用的邮箱（非qq/foxmail邮箱）",
        qq_mail_entry: "创建QQ邮箱",
        mail: "邮箱",
        reg_succ: "注册成功",
        phone_tips_succ: "你可以将手机号码{phone}作为辅助帐号登录QQ。",
        mibao_tips: "你可以通过手机号码{phone}快速找回密码",
        recycle_tips: "三天内未登录，该号码将会被收回。",
        qqmail_tips_succ: "对应邮箱：{mail}",
        mail_tips_succ: "已绑定邮箱：{mail}",
        need_active: "等待激活",
        mail_has_send: "激活邮件已发送至：{mail}",
        active_tips: "请在24小时内登录你的邮箱，按照邮件中的提示激活帐号。",
        login_mail: "登录邮箱",
        if_no_mail: "如果你没有收到激活邮件",
        try_mail: "你可以尝试以下方法",
        mail_tip1: "1. 查看你邮箱的垃圾箱，激活邮件是否被误认为是垃圾邮件",
        mail_tip2: "2. 点击这里让系统重新发送一封邮件",
        mail_tip3: "3. 如果你总收不到，<a href='javascript:location.reload()'>可以点击这里更换其他邮箱地址</a>",
        mail_has_resend: "激活邮件已重新发送至：{mail}",
        login: "立即登录",
        other_number_tips: "点击添加新号码为常用号码好友",
        nick_null: "工号不可以为空",
        nick_blank: "工号不可以为空格",
        nick_max: "不能超过24个字母或12个汉字",
        nick_invalid: "你不能使用该工号登录",
        nick_plz_input: "请输入昵称",
        mail_plz_input: "请输入邮箱",
        mail_exist: "邮箱已被注册",
        mail_illeagl: "邮箱格式错误",
        mail_not_qq: "QQ/foxmail邮箱无需注册，可以直接登录",
        mail_length: "长度为3-18个字符",
        mail_start_limit: "必须以a-z的英文字母（不分大小写）开头",
        mail_end_limit: "由英文字母、数字结尾",
        mail_char_limit: "由3-16个英文、数字、点、减号、下划线组成",
        mail_special_limit: "点、减号、下划线不能连续出现两次或两次以上",
        "return": "返回",
        password_null: "密码不能为空",
        password_blank: "不能包括空格",
        password_length: "长度为8-16个字符",
        password_simple: "必须包含字母、数字、符号中至少2种",
        agreement_text_read: "我已阅读并同意",
        agreement_text_and: "和",
        agreement_number: "服务协议",
        agreement_number_link: "https://ti.qq.com/agreement/index.html",
        agreement_qzone: "《QQ空间服务协议》",
        agreement_qzone_link: "http://qzone.qq.com/web/tk.html",
        agreement_privacy: "QQ隐私保护指引",
        agreement_privacy_link: "https://ti.qq.com/doc/redirect/qq-privacy-guild",
        friends_failed: "发送好友请求失败",
        friends_succ: "已发送好友请求",
        add_friend_tips: "点击发送好友请求",
        download_qq_tips: "点击将QQ号码保持到本地",
        verify_code_error: "验证码错误",
        phone_error: "手机号有误",
        phone_security_error: "经检测，你的手机号存在安全风险，请你更换手机号注册。",
        system_busy: "很抱歉，服务器繁忙，请稍后重试。",
        evil_error: "受恶意注册影响，你暂时无法完成注册，请24小时后再试。",
        frq_error: "非常抱歉，你操作过于频繁，请稍后再试！",
        phone_null: "请填写手机号",
        phone_invalid: "手机号码格式不正确",
        code_null: "请填写验证码",
        password_input: "请输入密码",
        agreement_need: "请先同意服务条款和隐私政策",
        mail_duplicate: "该邮箱已激活，可直接使用qq号或邮箱登录。",
        mail_binded: "该邮箱已绑定QQ号，请使用其他邮箱申请。",
        mail_expire: "该链接已失效，请重新申请。",
        save_uin_to_pc: "保存号码到电脑",
        password_eye: "长按显示密码",
        upgrade_tips: '浏览器版本太低，为保障信息的安全和展现，建议<a href="https://dldir1.qq.com/invc/tt/QQBrowser_Setup_qqzc.exe" target="_blank">升级浏览器</a>',
        mobile_qq_register: "去手机QQ注册",
        mobile_qq_register_tips: "你的手机号{phone}存在安全风险，请前往手机QQ进行注册。",
        mobile_qq_download_tips: "若你未下载手机QQ，则扫以下二维码下载手机QQ后，进行注册。",
        qrcode_tips: "若你已下载了手机QQ，请直接在手机QQ进行注册。"
    }
}
]);
