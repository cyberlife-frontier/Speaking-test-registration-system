<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>大学生四六级口语考试报名系统</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="icon" href="images/cet.ico" type="image/x-icon">
</head>
<body>

<div class="video-wrap">
    <video class="video-wrap__video" poster="images/graduation travell.jpg" src="videos/graduation travell.mp4"  tabindex="-1" airplay="allow" x-webkit-airplay="true" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" autoplay muted playsinline loop></video>
</div>

<!-- 导航栏 -->
<div class="header-wrap">
    <div class="header-wrap__inner">
        <div class="header-wrap__hd">
            <a href="javascript:void(0);" class="header-wrap__logo" title="CET" ></a>
            <!--<p class="header-wrap__p">大学生四六级口语考试报名系统</p>-->
            <!--<a href="javascript:void(0);" class="header-wrap__logo" title="CET" data-bind="click: home"></a>-->
        </div>
        <div class="header-wrap__bd">
            <div class="nav-wrap">
                <div class="nav-wrap__inner">
                    <div class="nav-wrap__item">
                        <div class="lianghao-wrap" data-bind="visible: isChs(), hasHover: lianghaoEntryHovered">
                            <div class="lianghao-wrap__hd">
                                <a class="lianghao-wrap__text lianghao-wrap__text-link" href="https://openai.com/blog/chatgpt" onclick="monitor(2759877)" target="_blank">智能客服</a>
                            </div>
                            <div class="search-wrap" data-bind="hasHover: lianghaoDetailHovered, visible: isChs() && lianghaoOpened()">
                                <div class="search-wrap__hd">
                                    <a href="javascript:void(0)" class="search-icon" data-bind="click:searchLianghao">
                                        <div class="search-icon-img"></div>
                                    </a>
                                    <div class="search">
                                        <label class="search-placeholder" data-bind="visible: lianghaoKey().length === 0" for="lianghao-key">搜索，如“无法登录”</label>
                                        <input type="text" id="lianghao-key" data-bind="value: lianghaoKey, valueUpdate: 'afterkeydown', event: { keypress: typeLianghao }, hasFocus: lianghaoFocus">
                                    </div>
                                </div>
                                <div class="search-wrap__bd">
                                    <div class="suggest-detail">
                                        <a target="_blank" onclick="monitor(2759878)" >智能AI为您提供服务</a>
                                        <!--<a target="_blank" onclick="monitor(2759879)" >星座</a>-->
                                        <!--<a target="_blank" onclick="monitor(2759881)" href="http://haoma.qq.com/shop.html#topic=love&from=zc">爱情</a>
                                        <a target="_blank" onclick="monitor(2759880)" href="http://haoma.qq.com/shop.html#topic=phone&from=zc">手机</a>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-wrap__item">
                        <div class="lang-wrap" data-bind="event:{mouseenter:openLang,mouseleave:closeLang}">
                            <div class="lang-wrap__innner">
                                <div class="lang-wrap__hd">
                                            <span class="nav-wrap__text lang-wrap__text">
                                                简体中文<i class="lang-wrap__icon lang-wrap__icon-down"></i>
                                            </span>
                                </div>
                                <div class="lang-wrap__bd" data-bind="visible: langOpened()">
                                    <ul class="lang-wrap__list">
                                        <li>
                                            <!--data-bind="click:function(){$root.switchLanguage(1028)}"-->
                                            <a class="lang-wrap__list-text"  href="javascript:void(0)">繁體中文</a>
                                        </li>
                                        <li>
                                            <!--data-bind="click:function(){$root.switchLanguage(1033)}"-->
                                            <a class="lang-wrap__list-text"  href="javascript:void(0)">English</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-wrap__item">
                        <span class="nav-wrap__text" data-bind="click: feedback">意见反馈</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="main-wraper">
    <div class="main" ><!--data-bind="style:{height: is_up_sms() || is_verify() ? '100%' : ''}"-->
        <div class="form" ><!--data-bind="visible: !error() && !succ()"-->
            <div><!-- data-bind="visible: isQQ() || isQQMail() || isMail()" -->
                <div class="welcome">欢迎登录</div>
                <div class="header">今天也是充满希望的一天</div>
            </div>
            <!-- data-bind="submit: submit" -->
            <!-- 表单 -->
            <form class="input-warp" action="account?method=login" method="post">
            <!-- 用户名 -->
                <div class="input-wrap__item input-area">
                    <div class="input-flags">
                        <div class="input-ok" data-bind="visible: nicknameStatus() === 1"></div>
                    </div>
                    <label class="input-placeholder" id="nickname-tips" for="nickname" data-bind="visible: nickname().length == 0">用户名</label>
                    <div class="input-outer">
                        <!--data-bind="textInput: nickname, event: {blur:checkDirtyNickname,focus:onNicknameFocus}, css:{error: typeof nicknameStatus() == 'string'}"-->
                        <input name="username" required type="text" id="nickname" class="nickname" maxlength="24" data-bind=" textInput: nickname, event: {blur:checkDirtyNickname,focus:onNicknameFocus}" tabindex="3">
                        <span style="color:red;font-size:13px;">${usernameError}</span>
                    </div>
                   
                </div>
				<!--密码-->
                <div class="input-wrap__item input-area input-wrap__item-password">
                    <label class="input-placeholder" id="password-tips" for="password" data-bind="visible: password().length == 0">密码</label>
                    <div class="input-flags">
                        <div class="input-ok" data-bind="visible:passwordStatus() === 1"></div>
                        <div href="javascript:void(0)" class="eye" data-bind="event:{mousedown:function(){$root.show_password(true)},mouseup:function(){$root.show_password(false)},mouseleave:function(){$root.show_password(false)}},visible:password().length > 0,css:{close:!show_password(), clickBubble: false}" title="长按显示密码"></div>
                    </div>
                    <div class="input-outer">
                        <div class="password-raw" data-bind="text: password, visible: show_password(), clickBubble: false"></div>
                        <!--data-bind="textInput: password, event: {blur:checkPassword,focus:onPasswordFocus}, css:{error:typeof passwordStatus() === 'string'}, hasFocus:passwordFocus,  visible: !show_password()"-->
                        <input name="password" required type="password" id="password" class="password" maxlength="16" data-bind="textInput: password, event: {blur:checkPassword,focus:onPasswordFocus}, hasFocus:passwordFocus,  visible: !show_password()" tabindex="4">
                        <span style="color:red;font-size:13px;">${passwordError}</span>
                    </div>      
                </div>
                <div>
                    <input id="get_acc" type="submit" class="btn-submit" value="立即登录" tabindex="8">   
                </div>
            </form>

        </div>

    </div><!--class="main"-->

    <div class="footer">
        Copyright <span class="footer__text-copryright">©</span>
        <span class="footer__text-date">
                    1998-<script>
                        document.write((new Date).getFullYear())
                    </script>
                </span>
        Edward Nash All Rights Reserved.
    </div>
</div>


<script type="text/javascript">
            window.lang = 2052
        </script>
<script src="js/index.js"></script>

</body>
</html>