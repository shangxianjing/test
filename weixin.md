﻿
 
###uexWeiXin [![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fgf.png)]() 
 
 微信分享插件
#### 业务限制资源规格限制说明
 封装了微信开放平台的SDK，集成了微信登录、微信分享功能；可用于实现第三方账号登录，分享内容到朋友圈或好友；使用之前须从[微信开放平台](https://open.weixin.qq.com/ "微信开放平台")申请开发者账号并创建应用，获取 appid 和 secret。同时包含微信支付功能。如何申请请参考附录。
###### 安卓微信插件在使用时，调用接口时只需填写对应的参数，直接在线勾选插件使用；IDE不建议测试使用，原因：IDE涉及证书和包名问题！
###### iOS微信插件暂时需要自定义插件使用，需要更改uexWeiXin插件包里uexWeiXin.plist文件的CFBundleURLSchemes值
````
 修改CFBundleURLSchemes值可参考： 
 <string>weixin</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>填写自己申请的appID</string>
			</array>
````
下载地址：[iOS插件包](http://bbs.appcan.cn/forum.php?mod=viewthread&tid=17089&extra=page%3D1 "iOS插件包")
#### UI展示
 
 ![](http://newdocx.appcan.cn/docxapi/getCImg?img=162019s2015p6u16v.png)
#### 开源源码：
插件测试用例与源码下载：[点击](http://plugin.appcan.cn/details.html?id=195_index) 插件中心至插件详情页 （插件测试用例与插件源码已经提供）
#### 查看版本log
 [更新历史](http://newdocx1.appcan.cn/newdocx/ejsTemplate?type=1021_975 "更新历史")
#### 术语表
------------
Path Types

|  协议头 |  Android对应路径 (其中"/sdcard/"等 同于"/storage/emulated/0/") | iOS对应路径  |
| ------------ | ------------ | ------------ |
| res:// |widget/wgtRes/   |widget/wgtRes   |
|  wgts:// | /storage/emulated/0/widgetone/apps/ xxx(widgetAppId)/  |  /Documents/apps/xxx(widgetAppId)/ |
|  wgts:// |  /storage/emulated/0/widgetone/widgets/ |  /Documents/widgets/ |
|  file:///sdcard/ | /storage/emulated/0/  | 无  |
 
   
 
#API概览
   
### 	方法:
- ##### [registerApp](#registerApp) 	  用户授权

- ##### [weiXinLogin](#weiXinLogin) 	  微信授权登录

- ##### [getWeiXinLoginAccessToken](#getWeiXinLoginAccessToken) 	  获取微信登录accessToken。

- ##### [getWeiXinLoginCheckAccessToken](#getWeiXinLoginCheckAccessToken) 	  检验accessToken是否有效。

- ##### [getWeiXinLoginRefreshAccessToken](#getWeiXinLoginRefreshAccessToken) 	  获取微信登录刷新或续期accessToken。

- ##### [getWeiXinLoginUnionID](#getWeiXinLoginUnionID) 	  获取用户个人信息

- ##### [isWXAppInstalled](#isWXAppInstalled) 	  检查微信是否已安装

- ##### [getWXAppInstalUrl](#getWXAppInstalUrl) 	  获取微信的itunes安装地址

- ##### [isWXAppSupportApi](#isWXAppSupportApi) 	  判断API是否被支持

- ##### [getApiVersion](#getApiVersion) 	  获取SDK的版本号

- ##### [openWXApp](#openWXApp) 	  打开微信

- ##### [~~sendTextContent~~](#sendTextContent) 	  分享文本

- ##### [~~sendImageContent~~](#sendImageContent) 	  分享图片

- ##### [shareTextContent](#shareTextContent) 	  分享文本

- ##### [shareImageContent](#shareImageContent) 	  分享图片

- ##### [shareLinkContent](#shareLinkContent) 	  分享Link

- ##### [isSupportPay](#isSupportPay) 	  判断是否支持支付功能

- ##### [getPrepayId](#getPrepayId) 	  生成预支付订单

- ##### [startPay](#startPay) 	  支付

- ##### [~~getAccessToken~~](#getAccessToken) 	  获取支付token<旧版接口，新版插件不支持>

- ##### [~~getAccessTokenLocal~~](#getAccessTokenLocal) 	  获取本地支付token<旧版接口，新版插件不支持>

- ##### [~~generateAdvanceOrder~~](#generateAdvanceOrder) 	  生成预支付订单<旧版接口，新版插件不支持>

- ##### [~~generatePrepayID~~](#generatePrepayID) 	  生成预支付订单<旧版接口，新版插件不支持>

- ##### [~~gotoPay~~](#gotoPay) 	  支付<旧版接口，新版插件不支持>

- ##### [~~sendPay~~](#sendPay) 	  支付<旧版接口，新版插件不支持>

### 	回调方法:
- ##### [cbRegisterApp](#cbRegisterApp) 	  用户授权的回调方法

- ##### [cbWinXinLogin](#cbWinXinLogin) 	  微信登录授权的回调方法

- ##### [cbGetWeiXinLoginAccessToken](#cbGetWeiXinLoginAccessToken) 	  获取微信accessToken的回调方法

- ##### [cbGetWeiXinLoginCheckAccessToken](#cbGetWeiXinLoginCheckAccessToken) 	  检验微信accessToken是否超时回调方法

- ##### [cbGetWeiXinLoginRefreshAccessToken](#cbGetWeiXinLoginRefreshAccessToken) 	  微信刷新或续期accessToken回调方法

- ##### [cbGetWeiXinLoginUnionID](#cbGetWeiXinLoginUnionID) 	  获取用户个人信息的回调方法

- ##### [cbIsWXAppInstalled](#cbIsWXAppInstalled) 	  检查微信是否已安装的回调方法

- ##### [cbGetWXAppInstalUrl](#cbGetWXAppInstalUrl) 	  获取微信的itunes安装地址的回调方法

- ##### [cbIsWXAppSupportApi](#cbIsWXAppSupportApi) 	  判断API是否被支持的回调方法

- ##### [cbGetApiVersion](#cbGetApiVersion) 	  获取SDK的版本号的回调方法

- ##### [~~cbSendTextContent~~](#cbSendTextContent) 	  分享文本的回调方法

- ##### [~~cbSendImageContent~~](#cbSendImageContent) 	  分享图片的回调方法

- ##### [cbShareTextContent](#cbShareTextContent) 	  分享文本的回调方法

- ##### [cbShareImageContent](#cbShareImageContent) 	  分享图片的回调方法

- ##### [cbShareLinkContent](#cbShareLinkContent) 	  分享Link的回调方法

- ##### [cbIsSupportPay](#cbIsSupportPay) 	  是否支持支付功能的回调方法

- ##### [cbGetPrepayId](#cbGetPrepayId) 	  生成预支付订单的回调接口

- ##### [cbStartPay](#cbStartPay) 	  支付结果的回调方法

- ##### [~~cbGetAccessToken~~](#cbGetAccessToken) 	  获取支付token的回调方法<旧版接口，新版插件不支持>

- ##### [ ~~cbGetAccessTokenLocal~~](#cbGetAccessTokenLocal) 	  获取本地支付token的回调方法<旧版接口，新版插件不支持>

- ##### [~~cbGenerateAdvanceOrder~~](#cbGenerateAdvanceOrder) 	  生成预支付订单的回调方法<旧版接口，新版插件不支持>

- ##### [~~cbGotoPay~~](#cbGotoPay) 	  支付的回调方法<旧版接口，新版插件不支持>

> ###registerApp		

用户授权		

`uexWeiXin.registerApp(appID)					`
#####说明:		
必须先向微信终端注册本应用才可以进行其他操作					
#####参数:		
	　appID:(String类型) 必选到微信开发者登记页面进行登记并设置相关信息后将获得appID					
#####平台支持:		
Android2.2+					
iOS6.0+					
#####版本支持:		
3.0.0+					
#####示例:		

```
<!DOCTYPE HTML>
        <HTML>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <title>微信功能</title>
        <script type="text/javascript">
        window.uexOnload = function(){
        uexWeiXin.cbRegisterApp=function(opCode,dataType,data){
        alert(data);
        }
        }
        </script>
        </head>
        <body>
        <div class="tit">微信功能</div>
        <div class="conbor">
        <div class="consj">
        <span>注册App </span>
        <input class="btn" type="button" value="注册App" onclick="uexWeiXin.registerApp('wxd930ea5d5a258f4f');">
        </div>
        </div>
        </body>
        </html>
    
```
> ### 		weiXinLogin	

微信授权登录	

`uexWeiXin.weiXinLogin(scope,state)			`
#####说明:	
必须先向微信客户端注册本应用才可以进行改操作			
#####参数:	
	scope:(String类型) 必选应用授权作用域.注：授权作用域（scope）代表用户授权给第三方的接口权限，第三方应用需要向微信开放平台申请使用相应scope的权限后，使用文档所述方式让用户进行授权，经过用户授权，获取到相应access_token后方可对接口进行调用.一般为snsapi_userinfo
	state:(String类型) 可选注:用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验			
#####平台支持:	
Android2.2+			
iOS6.0+			
#####版本支持:	
3.0.0+			
#####示例:	

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="css/index.css">
<title>微信授权登录功能</title>
<script type="text/javascript">
var cText = 0;
var cJson = 1;
var cInt = 2;
var openid;
var access_token;
var refresh_token;
window.uexOnload = function(){
uexWeiXin.cbRegisterApp = function(opCode,dataType,data) {
alert(data);
}
uexWeiXin.cbWeiXinLogin = function (opCode,dataType,data) {
alert(data);
}
uexWeiXin.cbGetWeiXinLoginAccessToken = function (opCode,dataType,data) {
alert(data);
data = JSON.parse(data);
openid=data.openid;
access_token = data.access_token;
refresh_token = data.refresh_token;
}
uexWeiXin.cbGetWeiXinLoginUnionID = function (opCode,dataType,data) {
alert(data);
}
uexWeiXin.cbGetWeiXinLoginCheckAccessToken = function (opCode,dataType,data) {
alert(data);
}
//刷新后重新赋值
uexWeiXin.cbGetWeiXinLoginRefreshAccessToken = function (opCode,dataType,data) {
alert(data);
data = JSON.parse(data);
openid=data.openid;
access_token = data.access_token;
refresh_token = data.refresh_token;
}

uexWeiXin.cbIsWXAppInstalled=function(opCode,dataType,data){
alert("cbIsWXAppInstalled："+data);
};
uexWeiXin.cbGetWXAppInstallUrl=function(opCode,dataType,data){
alert("cbGetWXAppInstallUrl："+data);
};

}
</script>
</head>
<body>
<div class="tit">微信授权登录功能</div>
<div class="conbor">
<div class="consj">
<span>1.注册app id</span>
<input class="btn" type="button" value="注册App" onClick="uexWeiXin.registerApp('wxd930ea5d5a258f4f');">
<span>2.检测是否安装微信(必须先注册)</span>
<input class="btn" type="button" value="检测" onClick="uexWeiXin.isWXAppInstalled();">
<input class="btn" type="button" value="授权登陆" onClick="uexWeiXin.weiXinLogin('snsapi_userinfo,snsapi_base','0744');">
<input class="btn" type="button" value="获取accessToken" onClick="uexWeiXin.getWeiXinLoginAccessToken('db426a9829e4b49a0dcac7b4162da6b6','authorization_code');">
<input class="btn" type="button" value="获取个人信息" onClick="uexWeiXin.getWeiXinLoginUnionID(access_token,openid);">
<input class="btn" type="button" value="获取刷新accessToken" onClick="uexWeiXin.getWeiXinLoginRefreshAccessToken('refresh_token',refresh_token);">
<input class="btn" type="button" value="检验accessToken" onClick="uexWeiXin.getWeiXinLoginCheckAccessToken(access_token,openid);">
</div>
</body>
</html>

    
```
> ### 	getWeiXinLoginAccessToken

获取微信登录accessToken

`uexWeiXin.getWeiXinLoginAccessToken(secret,grant_type)	`
#####说明:
获取微信登录accessToken	
#####参数:
	secret:(String类型) 必选应用密钥AppSecret，在微信开放平台提交应用审核通过后获得
	grant_type:(String类型) 必选根据微信SDK要求,填authorization_code(固定值)	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
> ### 	getWeiXinLoginCheckAccessToken

检验accessToken是否有效

`uexWeiXin.getWeiXinLoginCheckAccessToken(access_token,openid)	`
#####说明:
用于检验通过uexWeiXin.getWeiXinLoginAccessToken()方法获取的accessToken是否还在有效期内(目前为2个小时)其中access_token和openid从cbGetWeiXinLoginAccessToken的返回数据获取.	
#####参数:
	access_token:(String类型) 必选调用接口凭证
	openid:(String类型) 必选普通用户标识,对该公众帐号唯一	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
> ### 	getWeiXinLoginRefreshAccessToken

获取微信登录的刷新或续期access_token

`uexWeiXin.getWeiXinLoginRefreshAccessToken(grant_type,refresh_token)	`
#####说明:
当access_token超时后,可以使用refresh_token进行刷新其中refresh_token从cbGetWeiXinLoginAccessToken的返回数据获取.	
#####参数:
	grant_type:(String类型) 必选填refresh_token(固定值)	
	refresh_token:(String类型) 必选	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
> ### 	getWeiXinLoginUnionID

获取用户个人信息

`uexWeiXin.getWeiXinLoginUnionID(access_token,openid)	`
#####说明:
获取授权用户的个人信息其中access_token和openid从cbGetWeiXinLoginAccessToken的返回数据获取.若调用getWeiXinLoginRefreshAccessToken方法,则从cbGetWeiXinLoginRefreshAccessToken的返回数据获取	
#####参数:
	access_token:(String类型) 必选调用接口凭证
	openid:(String类型) 必选普通用户标识,对该公众帐号唯一	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
> ### 	isWXAppInstalled

检查微信是否已安装

`uexWeiXin.isWXAppInstalled()	`
#####说明:
检查微信是否已安装	
#####参数:
			  无	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbIsWXAppInstalled=function(opCode,dataType,data){
    alert(data);
    }
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>检测是否安装微信 </span>
    <input class="btn" type="button" value="检测是否安装微信" onclick="uexWeiXin.isWXAppInstalled();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	getWXAppInstalUrl

获取微信的安装地址

uexWeiXin.getWXAppInstalUrl()	
#####说明:
获取微信的安装地址	
#####参数:
			  无	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbGetWXAppInstalUrl=function(opCode,dataType,data){
    alert(data);
    }
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>获取微信安装地址 </span>
    <input class="btn" type="button" value="获取微信安装地址" onclick="uexWeiXin.getWXAppInstalUrl();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	isWXAppSupportApi

判断API是否被支持

`uexWeiXin.isWXAppSupportApi()	`
#####说明:
判断API是否被支持	
#####参数:
			  无	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbIsWXAppSupportApi=function(opCode,dataType,data){
    alert(data);
    }
    }
    </scriptv
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>是否支持本API </span>
    <input class="btn" type="button" value="是否支持本API" onclick="uexWeiXin.isWXAppSupportApi();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	getApiVersion

获取SDK的版本号

`uexWeiXin.getApiVersion()	`
#####说明:
获取SDK的版本号	
#####参数:
			  无	
#####平台支持:
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbGetApiVersion =function(opCode,dataType,data){
    alert(data);
    }
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>获取微信安装地址 </span>
    <input class="btn" type="button" value="获取微信安装地址" onclick="uexWeiXin.getApiVersion();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	openWXApp

打开微信

`uexWeiXin.openWXApp()	`
#####说明:
打开微信	
#####参数:
			  无	
#####平台支持:
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>打开微信 </span>
    <input class="btn" type="button" value="打开微信" onclick="uexWeiXin.openWeiXin();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	sendTextContent

分享文本

`uexWeiXin.sendTextContent(sence,txt)	`
#####说明:
分享文本	
#####参数:
	  sence:(Number类型) 必选  发送的目标场景，0-会话场景，1-朋友圈场景。	
	  txt:(String类型) 必选  发送的文本内容	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbSendTextContent=function(opCode,dataType,data){
    alert(data);
    }
    }
    function shareText(){
    var txt = "这是来自AppCan中国最大的移动中间平台对微信支持测试";
    var sence = 1;
    uexWeiXin.sendTextContent(sence,txt);
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>打开微信 </span>
    <input class="btn" type="button" value="打开微信" onclick="shareText();">
    </div>
    </div>
    </body>
    </html>

```
> ### 	sendImageContent

分享图片到微信

`uexWeiXin.sendImageContent(sence,thumbImgPath,imgPath,webpageURL,title,description)	`
#####说明:
分享结果将回调给cbSendImageContent方法	
#####参数:
	  sence:(Number类型) 必选  发送的目标场景，0-会话场景，1-朋友圈场景。	
	  thumbImgPath:(String类型) 必选  缩略图地址大小不能超过32K	
	  imgPath:(String类型) 必选  图片地址，路径协议详见CONSTANT中PathTypes	
	  webpageURL:(String类型) 可选  分享的链接地址，使用此参数将分享一个链接	
	  title:(String类型) 可选  链接标题长度不能超过512字节	
	  description:(String类型) 可选链接描述内容大小不能超过1K	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbSendImageContent=function(opCode,dataType,data){
    //data是状态码
    document.getElementById("showPicStatus").innerHTML = "返回分享图片状态码:"+data;
    };}
    function sharePic(){
    var thumImgPath = "res://icon.png";
    var realImgPath = "res://Default.png";
    var sence = 1;
    uexWeiXin.sendImageContent(sence,thumImgPath,realImgPath);
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>分享图片 </span>
    <input class="btn" type="button" value="分享图片" onclick="sharePic();">
    </div>
    </div>
    </body>
    </html>
    
```
> ### 	shareTextContent

分享文本

` uexWeiXin.shareTextContent(jsonData)`
##### 说明
分享文本内容到微信	
#####参数:
    jsonData: (String类型) 必选   分享的文本内容,JSON格式,格式为:{"text":"中国最大的移动中间键平台AppCan对微信分享的文本支持测试","scene":1}
![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbShareTextContent=function(data){
    alert(data);
    }
    }
    function shareText(){
       var JsonData = '{"text":"中国最大的移动中间键平台AppCan对微信分享的图片支持测试","scene":1}';
       uexWeiXin.shareTextContent(JsonData);
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>分享文本 </span>
    <input class="btn" type="button" value="分享文本" onclick="shareText();">
    </div>
    </div>
    </body>
    </html>
```
> ### 	shareImageContent

分享图片

`uexWeiXin.shareImageContent(jsonData)`
##### 说明：
分享图片到微信	
#####参数:
      jsonData: (String类型) 必选   分享的图片内容,JSON格式,格式为:{"thumbImg":"res://icon.png","image":"res://Default.png","scene":1}
![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
#####平台支持:
Android 2.2+
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbShareImageContent=function(data){
    //data是状态码
    alert(data);
    };}
    function sharePic(){
        var JsonData = '{"thumbImg":"res://icon.png","image":"res://Default.png","scene":1}';
    uexWeiXin.shareImageContent(JsonData);
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>分享图片 </span>
    <input class="btn" type="button" value="分享图片" onclick="sharePic();">
    </div>
    </div>
    </body>
    </html>
    
```
> ### 	shareLinkContent

分享Link

`uexWeiXin.shareLinkContent(jsonData)`
##### 说明：
  分享Link到微信
##### 参数：
       jsonData: (String类型) 必选   分享的图片内容,JSON格式,格式为: {"thumbImg":"res://icon.png","wedpageUrl":"http://www.appcan.cn","scene":1,"title":"你好,我是AppCan","description":"中国最大的移动中间键平台AppCan对微信分享的图片支持测试"}
 ![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
##### 平台支持：
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信功能</title>
    <script type="text/javascript">
    window.uexOnload = function(){
    uexWeiXin.cbShareLinkContent=function(data){
    //data是状态码
    alert(data);
    };}
    function sharePic(){
    var JsonData = '{"thumbImg":"res://icon.png","wedpageUrl":"http://www.appcan.cn","scene":1,"title":"你好,我是AppCan","description":"中国最大的移动中间键平台AppCan对微信分享的图片支持测试"}';
    uexWeiXin.shareLinkContent(JsonData);
    
    }
    </script>
    </head>
    <body>
    <div class="tit">微信功能</div>
    <div class="conbor">
    <div class="consj">
    <span>分享Link </span>
    <input class="btn" type="button" value="分享Link" onclick="sharePic();">
    </div>
    </div>
    </body>
    </html>
    
```
> ### 	isSupportPay

判断是否支持支付功能

`uexWeiXin.isSupportPay()	`
#####说明:
微信5.0以上版本支持支付功能	
#####参数:
			  无	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
			  见gotoPay方法示例	
> ### 	getPrepayId

生成预支付订单

`uexWeiXin.getPrepayId(json)	`
#####说明:
生成预支付订单	
#####参数:
	  参数说明及生成办法详见微信开放平台文档统一下单接口参数说明中的“请求参数”	
		varjson={appid:,//(必选)微信分配的AppIDmch_id:,//(必选)微信支付分配的商户号device_info:,//(可选)nonce_str:,//(必选)随机字符串，不长于32位。body:,//(必选)终端设备号(门店号或收银设备ID)detail:,//(可选)商品名称明细列表attach:,//(可选)附加数据，在查询API和支付通知中原样返回，该字段主要用于商户携带订单的自定义数据out_trade_no://(必选)商户系统内部的订单号,32个字符内、可包含字母fee_type:,//(可选)符合ISO4217标准的三位字母代码，默认人民币：CNYtotal_fee:,//(必选)订单总金额，只能为整数spbill_create_ip:,//(必选)用户端iptime_start:,//(可选)订单生成时间time_expire:,//(可选)订单失效时间goods_tag:,//(可选)商品标记，代金券或立减优惠功能的参数notify_url:,//(必选)接收微信支付异步通知回调地址trade_type:,//(必选)交易类型，此处为固定值"APP"product_id:,//(可选)商品IDopenid:,//(可选)用户标识sign://(必选)签名}	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
		 var param1 = {
        appid:"wx5h8hdi9o2hs6gd0c5g",
        mch_id:"1234567890",
        device_info:"013467007045764",
        nonce_str:"weradfdgdvccfexs1",
        body:"appcan pay",
        detail:"detail",
        attach:"attach",
        out_trade_no:"1217752501201406033233356018",
        fee_type:"CNY",
        total_fee:"1",
        spbill_create_ip:"127.0.0.1",
        time_start:"20150503152510",
        time_expire:"20150703152510",
        goods_tag:"WXG",
        notify_url:"http://www.baidu.com/",
        trade_type:"APP",
        product_id:"12235413214070356458058",
        openid:"oUpF8uMuAJO_M2pxb1Q9zNjWeS6o",
        sign:"8FC5935C38628F44B924C838D760E33E"
    };
    var data1 = JSON.stringify(param1);
    uexWeiXin.getPrepayId(data1);
> ### 	startPay

支付

`uexWeiXin.startPay(json)	`
#####说明:
支付	
#####参数:
	  参数说明及生成办法详见微信开放平台文档调起支付接口参数说明中的“请求参数”	
		varjson={appid:,//(必选)微信分配的AppIDpartnerid:,//(必选)微信支付分配的商户号textareapayid:,//(必选)微信返回的支付交易会话ID,从gettextareapayId接口的回调方法中获取package:,//(必选)暂填写固定值Sign=WXPaynoncestr:,//(必选)随机字符串timestamp:,//(必选)时间戳sign://(必选)签名}	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
		 var param1 = {
        appid:"wx5h8hdi9o2hs6gd0c5g",
        partnerid:"1234567890",
        prepayid:"wx201506031538433160984eee0861221810",
        package:"Sign=WXPay",
        noncestr:"weradfdgdvccfexs",
        timestamp:"1412000000",
        sign:"8FC5935C38628F44B924C838D760E33E"
    };
    var data1 = JSON.stringify(param1);
    uexWeiXin.startPay(data1);
> ### 	getAccessToken

获取支付token`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.getAccessToken(AppID,AppSecret)	`
#####说明:
请先向微信开放平台申请AppID、AppSecret、AppKey、partnerKey。	
#####参数:
	  AppID:(Number类型) 必选  在微信开放平台申请的AppID	
	  AppSecret:(String类型) 必选  在微信开放平台申请的AppSecret	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
			  见gotoPay方法示例	
> ### 	getAccessTokenLocal

获取本地支付token`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.getAccessTokenLocal()	`
#####说明:
必选先使用getAccessToken方法将支付token存在本地，在使用本方法获得支付token，目的是因为微信对getAccessToken方法的调用次数有限制。	
#####参数:
			  无	
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
			  见gotoPay方法示例	
> ### 	generateAdvanceOrder

生成预支付订单`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.generateAdvanceOrder(token,postJson)	`
#####说明:
生成预支付订单	
#####参数:
	  token:(String类型) 必选 支付token	
	  postJson:(String类型) 必选 json字符串,格式为：	
	  {"appid":"wwwwb4f85f3a797777",
	  "traceid":"crestxu",
	  "noncestr":"111112222233333",
	  "package":"bank_type=WX&body=XXX&fee_type=1&input_charset=GBK?ify_url=http%3a%2f%2f
	  www.qq.com&out_trade_no=16642817866003386000&partner=1900000109&spbill_create_ip=1
	  27.0.0.1&total_fee=1&sign=BEEF37AD19575D92E191C1E4B1474CA9",
	  "timestamp":1381405298,
	  "app_signature":"53cca9d47b883bd4a5c85a9300df3da0cb48565c",
	  "sign_method":"sha1"}
	  各字段含义如下:

|				参数			|				是否必须			|				说明			|
|-----|-----|-----|
|				appid			|				是			|				应用唯一标识,在微信开放平台提交应用审核通过后获得			|
|				traceid			|				否			|				商家对用户的唯一标识,如果用微信SSO,此处建议填写授权用户的openid			|
|				noncestr			|				是			|				32位内的随机串,防重发			|
|				package			|				是			|				订单详情(具体生成方法见后文)			|
|				timestamp			|				是			|				时间戳,为1970年1月1日00:00到请求发起时间的秒数			|
|				app_signature			|				是			|				签名(具体生成方法见后文)			|
|				sign_method			|				是			|				加密方式,默认为sha1			|
package生成方法:
	  
	  A)对所有传入参数按照字段名的ASCII码从小到大排序(字典序)后,使用URL键值对的格式(即key1=value1&key2=value2...)拼接成字符串string1;
	  B)在string1最后拼接上key=partnerKey得到stringSignTemp字符串,并对stringSignTemp进行md5运算,再将得到的字符串所有字符转换为大写,得
	  到sign值signValue。
	  C)对string1中的所有键值对中的value进行urlencode转码,按照a步骤重新拼接成字符串,得到string2。对于js前端程序,一定要使用函数
	  encodeURIComponent进行urlencode编码(注意!进行urlencode时要将空格转化为%20而不是+)。
	  D)将sign=signValue拼接到string1后面得到最终的package字符串。
app_signature生成方法:

	A)参与签名的字段包括:appid、appkey、noncer、package、timestamp以及traceid
	B)对所有待签名参数按照字段名的ASCII码从小到大排序(字典序)后,使用URL键值对的格式(即key1=value1&key2=value2...)拼接成字符串string1。注
	  意:所有参数名均为小写字符
	C)对string1作签名算法,字段名和字段值都采用原始值,不进行URL转义。具体签名算法为SHA1
	  正确的Json返回示例:{"textareapayid":"textareaPAY_ID","errcode":0,"errmsg":"Success"}
	  错误的Json返回示例:{"errcode":48001,"errmsg":"apiunauthorized"}
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
			  见gotoPay方法示例	
> ###  generatePrepayID

生成预支付订单`<旧版接口，新版插件不支持>`使用新接口

` uexWeiXin.generatePrepayID(token,app_key，packageValue)	`
#####说明:
生成预支付订单,generateAdvanceOrder方法的替代方法	
#####参数:
	  token:(String类型) 必选 支付token	
	  app_key:(String类型) 必选 app_key	
	  packageValue:(String类型) 必选 生成方法如下	
packageValue生成方法:

	  A)对所有传入参数按照字段名的ASCII码从小到大排序(字典序)后,使用URL键值对的格式(即key1=value1&key2=value2...)拼接成字符串string1;
	  B)在string1最后拼接上key=partnerKey得到stringSignTemp字符串,并对stringSignTemp进行md5运算,再将得到的字符串所有字符转换为大写,得
	  到sign值signValue。
	  C)对string1中的所有键值对中的value进行urlencode转码,按照a步骤重新拼接成字符串,得到string2。对于js前端程序,一定要使用函数
	  encodeURIComponent进行urlencode编码(注意!进行urlencode时要将空格转化为%20而不是+)。
	  D)将sign=signValue拼接到string1后面得到最终的package字符串。
#####平台支持:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:
			  见sendPay方法示例	
> ### 	gotoPay

支付`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.gotoPay(partnerID,textareapayID,package,nonceStr,timeStamp,sign)	`
#####说明:
支付前需要生成预支付订单	
#####参数:
	  partnerID:(String类型) 必选  商家向财付通申请的商家ID	
	  textareapayID:(String类型) 必选  预支付订单	
	  package:(String类型) 必选  随机串，防重发	
	  nonceStr:(String类型) 必选  时间戳，防重发	
	  timestamp:(String类型) 必选  商家根据财付通文档填写的数据和签名	
	  sign:(String类型) 必选  商家根据微信开放平台文档对数据做得签名	
#####支持平台:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
    <HTML>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>微信支付功能</title>
    <script type="text/javascript">
    var cText = 0;
    var cJson = 1;
    var cInt = 2;
    window.uexOnload = function(){
    uexWeiXin.cbIsSupportPay =function(opCode,dataType,data) {
    document.getElementById("showSupportInfo").innerHTML = data;
    }
    uexWeiXin.cbGotoPay = function(opCode,dataType,data) {
    data = eval('(' + data + ')');
    if(data.errCode==0){
    document.getElementById("showPayInfo").innerHTML = data;
    }else{
    document.getElementById("showPayInfo").innerHTML = data.errCode;
    }
    }
    
    uexWeiXin.cbGenerateAdvanceOrder = function(opCode,dataType,data) {
    document.getElementById("showOrderInfo").innerHTML = data;
    }
    uexWeiXin.cbGetAccessToken = function(opCode,dataType,data) {
    document.getElementById("showAccess_tokenold").innerHTML = data;
    }
    uexWeiXin.cbGetAccessTokenLocal = function(opCode,dataType,data) {
	   document.getElementById("showAccess_token").innerHTML = data;
       }
       uexWeiXin.cbIsWXAppInstalled=function(opCode,dataType,data){
       alert("cbIsWXAppInstalled："+data);
       };
       }
       function generateAdvanceOrder(){
       var token = document.getElementById("showAccess_token").innerHTML;
       var postJsonStr = "{\"appid\":\"wx652070b3a10fcd45\",\"noncestr\":\"3b3ee08309979aa868ed5980d62e7db0\",\"package\":\"bank_type=WX&body=%C0%D6%B1%B4%CB%B9%CC%F0%C6%B7%C3%C0%CE%B6%CA%A5%B4%FA3%D1%A11%A3%AC%B2%DD%DD%AE%2F%C7%C9%BF%CB%C1%A6%2F%C3%A2%B9%FB&fee_type=1&input_charset=GBK?ify_url=http%3A%2F%2Ftuan.iweihai.cn%2Fmobile%2Fweixinpay%2Fnotify_url.php&out_trade_no=20140604260005&partner=1218583701&spbill_create_ip=221.2.146.40&total_fee=500&sign=9D3AC54D47C3346A07248E0C74AD996B\",\"timestamp\":1401861361,\"traceid\":\"\",\"sign_method\":\"sha1\",\"app_signature\":\"e647c6357755a1151fe1a1eb6dc6a2f4b7d33ba3\"}";
       uexWeiXin.generateAdvanceOrder(token,postJsonStr);
       }
       function gotoPay(){
       uexWeiXin.gotoPay('1218583701','1101000000140702906bfc8e71d49c1d','Sign=WXPay','62645c89febabd1906f1a56c635e6e3f','1404281177','8a94d714eaa156897c3d6dd0446eb04b7ec12a20');
       }
       </script>
       </head>
       <body>
       <div class="tit">微信功能</div>
       <div class="conbor">
       <div class="consj">
       <span>1.注册app id </span>
       <input class="btn" type="button" value="注册App" onclick="uexWeiXin.registerApp('wxd930ea5d5a258f4f');">
       <div class="tcxx" id="selectItem"></div><br>
       <span>零.当前手机安装的微信版本是否支持微信支付</span>
       <span>返回0支持，1版本太低不支持</span>
       <input class="btn" type="button" value="判断是否支持微信支付" onclick="uexWeiXin.isSupportPay()">
       <div class="tcxx" id="showSupportInfo"></div><br>
       <span>一.获取微信支付access_token</span>
       <span>准备工作:在使用接口之前请先保证持有向微信开放平台申请得到的 appid、appsecret(长度为
       32 的字符串,用于获取 access_token)、appkey(长度为 128 的字符串,用于支付过程中生 成 app_signature)及 partnerkey(微信公众平台商户模块生成的商户密钥)。网页会在cbGetAccessTocken（）中获得。</span>
       <input class="btn" type="button" value="获取access_token" onclick="uexWeiXin.getAccessToken('wx652070b3a10fcd45','00f373c57777e46ba86d461cbcc2fbe8');">
       <div class="tcxx" id="showAccess_tokenold"></div><br>
       <span>一.获取本地微信支付access_token</span>
       <span>第一次调用getAccessTokenLocal，是没有办法获取access_token，必须通过getAccessToken获取access_token之后会把access_token存在本地，下次再使用access_token的时候就可以通过getAccessTokenLocal来获得，这么做的目的是因为微信对每天获得token的次数有限制</span>
       <input class="btn" type="button" value="获取本地access_token" onclick="uexWeiXin.getAccessTokenLocal();">
       <div class="tcxx" id="showAccess_token"></div><br>
       <span>二.生成预支付订单</span>
       <span>用第一步请求的 access_token 作为参数,然后往微信开放平台接口post订单详情(需要在服务器端生成)生成预支付订单。网页会在cbGetAccessTocken（）中获得生成订单情况</span>
       <input class="btn" type="button" value="生成预支付订单" onclick="generateAdvanceOrder()">
       <div class="tcxx" id="showOrderInfo"></div><br>
       <span>三.调起微信支付</span>
       <span>将第二步生成的 textareapayId 作为参数,调用微信 sdk 发送支付请求到微信。</span>
       <input class="btn" type="button" value="调微信支付" onclick="gotoPay()">
       <div class="tcxx" id="showPayInfo"></div><br>
       </div>
       </div>
       </body>
       </html>

```
> ### 	sendPay

支付`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.sendPay(partnerID,textareapayID,app_key,packageValue)	`
#####说明:
支付前需要生成预支付订单，gotoPay方法的替代方法	
#####参数:
	  partnerID:(String类型) 必选  商家向财付通申请的商家ID	
	  textareapayID:(String类型) 必选  预支付订单	
	  app_key:(String类型) 必选  app_key	
	  packageValue:(String类型) 必选  packageValue	
#####支持平台:
Android2.2+	
iOS6.0+	
#####版本支持:
3.0.0+	
#####示例:

```
<!DOCTYPE HTML>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, user-scalable=no" /><link rel="stylesheet" type="text/css" href="../css/index.css">
<title>微信功能</title>
<script type="text/javascript">
var cText = 0;
var cJson = 1;
var cInt = 2;
var appId = "wxd930ea5d5a258f4f";
var app_serect = "db426a9829e4b49a0dcac7b4162da6b6";
var app_key = "L8LrMqqeGRxST5reouB0K66CaYAWpqhAVsq7ggKkxHCOastWksvuX1uvmvQclxaHoYd3ElNBrNO2DHnnzgfVG9Qs473M3DTOZug5er46FhuGofumV8H2FVR9qkjSlC5K";
var partnerId = "1900000109";
var traceId = "crestxu_test";
var packageValue = "bank_type=WX&body=%E5%8D%83%E8%B6%B3%E9%87%91%E7%AE%8D%E6%A3%92&fee_type=1&input_charset=UTF-8?ify_url=http%3A%2F%2Fweixin.qq.com&out_trade_no=9d86d83f925f2149e9edb0ac3b492299c&partner=1900000109&spbill_create_ip=196.168.1.1&total_fee=1&sign=899815E4F3106CC5DCFAF76A4D16069B";

    window.uexOnload = function(){
        uexWeiXin.cbRegisterApp =function(opCode,dataType,data)
        {
            //0支持，1 不支持
            alert("cbRegisterApp："+data);
            document.getElementById("selectItem").innerHTML = data;
        }
        
        uexWeiXin.cbGotoPay = function(opCode,dataType,data)
        {
            //如果datatype是0说明返回的data是整数0，意味着支付成功了。
            //如果datatype是2说明返回的data是字符串，意味着支付失败了。data就是失败信息
            console.log("cbGotoPay");
            alert("cbGotoPay："+data);
            document.getElementById("showPayInfo").innerHTML = data;
        }
        
        uexWeiXin.cbGenerateAdvanceOrder = function(opCode,dataType,data)
        {
            alert("cbGenerateAdvanceOrder："+data);
            document.getElementById("showOrderInfo").innerHTML = data;
        }
        
        uexWeiXin.cbGetAccessToken = function(opCode,dataType,data)
        {
           alert("cbGetAccessToken："+data);
           document.getElementById("showAccess_token").innerHTML = data;
        }
        
        
        uexWeiXin.cbGetAccessTokenLocal = function(opCode,dataType,data)
        {
           alert("cbGetAccessTokenLocal:"+data);
           document.getElementById("showAccess_token").innerHTML = data;
        }
     }

   
   
    function getAccessToken(){
        uexWeiXin.getAccessToken(appId,app_serect); 
    }        
    function generateAdvanceOrder(){
        var JsonStr = document.getElementById("showAccess_token").innerHTML;
        var token = JSON.parse(JsonStr).access_token;
        uexWeiXin.generatetextareapayID(token,app_key,packageValue);
    }
    function gotoPay(){
        var JsonStr = document.getElementById("showOrderInfo").innerHTML;
        var textareapayid = JSON.parse(JsonStr).textareapayid;
        uexWeiXin.sendPay(partnerId,textareapayid,app_key,packageValue);
    }
</script>
</head>

<body>
    <div class="conbor">
        <div class="consj">            
            <span>1.注册app id</span>
               //wxd930ea5d5a258f4f
                <input class="btn" type="button" value="iOS注册App" onclick="uexWeiXin.registerApp('wxd930ea5d5a258f4f');">
                
            <span>一.获取微信支付access_token</span>
            <span>准备工作:在使用接口之前请先保证持有向微信开放平台申请得到的 appid、appsecret(长度为
                32 的字符串,用于获取 access_token)、appkey(长度为 128 的字符串,用于支付过程中生 成 app_signature)及 partnerkey(微信公众平台商户模块生成的商户密钥)。网页会在cbGetAccessTocken（）中获得。</span>
            <input class="btn" type="button" value="获取access_token" onclick="getAccessToken()">      
            
             <span>一.获取本地微信支付access_token</span>
             <span>第一次调用getAccessTokenLocal，是没有办法获取access_token，必须通过getAccessToken获取access_token之后会把access_token存在本地，下次再使用access_token的时候就可以通过getAccessTokenLocal来获得，这么做的目的是因为微信对每天获得token的次数有限制</span>
            <input class="btn" type="button" value="获取本地access_token" onclick="uexWeiXin.getAccessTokenLocal();">
            <div class="tcxx" id="showAccess_token"></div><br>
            <span>二.生成预支付订单</span>
            <span>用第一步请求的 access_token 作为参数,然后往微信开放平台接口post订单详情(需要在服务器端生成)生成预支付订单。网页会在cbGetAccessTocken（）中获得生成订单情况</span>
            <input class="btn" type="button" value="生成预支付订单" onclick="generateAdvanceOrder()">
                <div class="tcxx" id="showOrderInfo"></div><br>
                <span>三.调起微信支付</span>
                <span>将第二步生成的 textareapayId 作为参数,调用微信 sdk 发送支付请求到微信。</span>
                <input class="btn" type="button" value="调微信支付" onclick="gotoPay()">
                    <div class="tcxx" id="showPayInfo"></div>
        </div>
    </div>
</body>
</html>

```
> ### 	cbRegisterApp

用户授权的回调方法

`uexWeiXin.cbRegisterApp(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Number类型) 必选  0-成功，1-失败。	
#####版本支持:
3.0.0+	
> ###cbWeiXinLogin

微信登录授权的回调方法

`uexWeiXin.cbWeiXinLogin(opid,dataType,data)	`
#####参数:
	  appId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  授权结果:0--成功,-2--用户取消,-4--用户拒绝	
#####版本支持:
3.0.0+	
> ### 	cbGetWeiXinLoginAccessToken

获取微信accessToken的回调方法

`uexWeiXin.cbGetWeiXinLoginAccessToken(opid,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Json类型) 必选  返回的数据,正确格式如下:
````
{ 
"access_token":"ACCESS_TOKEN", 
"expires_in":7200, 
"refresh_token":"REFRESH_TOKEN",
"openid":"OPENID", 
"scope":"SCOPE" 
}
````
	  各字段说明:			
![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
	  图_uexWeiXin_3.0				
#####版本支持:
3.0.0+	
> ### 	cbGetWeiXinLoginCheckAccessToken

检验微信accessToken是否超时的回调方法

`uexWeiXin.cbGetWeiXinLoginCheckAccessToken(opid,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Number类型) 必选  0--(有效),1--(无效)	
#####版本支持:
3.0.0+	
> ### 	cbGetWeiXinLoginRefreshAccessToken

微信刷新或续期accessToken的回调方法

`uexWeiXin.cbGetWeiXinLoginRefreshAccessToken(opid,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Json类型) 必选  返回的数据正确返回格式:
	  { 
    "access_token":"ACCESS_TOKEN", 
    "expires_in":7200, 
    "refresh_token":"REFRESH_TOKEN", 
    "openid":"OPENID", 
    "scope":"SCOPE" 
    } 
	  各字段说明见:
 ![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
	  图_uexWeiXin_3.0	
#####版本支持:
3.0.0+	
> ### 	cbGetWeiXinLoginUnionID

获取用户个人信息的回调方法

`uexWeiXin.cbGetWeiXinLoginUnionID(opid,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Json类型) 必选  返回的数据正确的格式:	
````
 { 
"openid":"OPENID",
"nickname":"NICKNAME",
"sex":1,
"province":"PROVINCE",
"city":"CITY",
"country":"COUNTRY",
"headimgurl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
"privilege":[
"PRIVILEGE1", 
"PRIVILEGE2"
],
"unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"
}
````
	  各字段说明:	
![](http://appcan-download.oss-cn-beijing.aliyuncs.com/%E5%85%AC%E6%B5%8B%2Fnew.gif)
#####版本支持:
3.0.0+	
> ### 	cbIsWXAppInstalled

检查微信是否已安装的回调方法

`uexWeixin.cbIsWXAppInstalled(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(Number类型) 必选  0-已安装，1-未安装。	
#####版本支持:
3.0.0+	
> ### 	cbGetWXAppInstalUrl(opId,dataTpye,data)

获取微信的itunes安装地址的回调方法

`uexWeixin.cbGetWXAppInstalUrl(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  微信安装地址	
#####版本支持:
3.0.0+	
> ### 	cbIsWXAppSupportApi

判断API是否被支持的回调方法

`uexWeiXin.cbIsWXAppSupportApi(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  0-成功，1-失败。	
#####版本支持:
3.0.0+	
> ### 	cbGetApiVersion

获取SDK的版本号的回调方法

`uexWeixin.cbGetApiVersion(opId,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  SDK版本号	
#####版本支持:
3.0.0+	
 
> ### 	cbSendTextContent

分享文本的回调方法

`uexWeixin.cbSendTextContent(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  微信返回的错误码	
#####版本支持:
3.0.0+	
> ### 	cbSendImageContent

分享图片的回调方法

`uexWeixin.cbSendImageContent(opId,dataTpye,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  微信返回的错误码	
#####版本支持:
3.0.0+	
> ### 	cbShareTextContent

分享文本的回调方法

`uexWeixin.cbShareTextContent(data)	`
#####参数:
	  data:(Number类型) 必选  返回的错误码,0-成功,非0-失败.	
#####版本支持:
3.0.0+	
> ### 	cbShareImageContent

分享文本的回调方法

`uexWeixin.cbShareImageContent(data)	`
#####参数:
	  data:(Number类型) 必选  返回的错误码,0-成功,非0-失败.	
#####版本支持:
3.0.0+	
> ### 	cbShareLinkContent

分享Link的回调方法

`uexWeixin.cbShareLinkContent(data)	`
#####参数:
	  data:(Number类型) 必选  返回的错误码,0-成功,非0-失败.	
#####版本支持:
3.0.0+	
> ### 	cbIsSupportPay

是否支持支付功能的回调方法

`uexWeiXin.cbIsSupportPay(opId,dataType,data);	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  是否支持支付功能，0-支持，1-不支持。	
#####版本支持:
3.0.0+	
> ### 	cbGetPrepayId

生成预支付订单的回调接口

`uexWeiXin.cbGetPrepayId(json);	`
#####参数:
	  json格式数据，参数详见微信开放平台文档统一下单接口参数说明中的“返回结果”	
#####版本支持:
3.0.0+	
#####示例:
		uexWeiXin.cbGetPrepayId = function(data){
        alert(data);
    }
> ### 	cbStartPay

支付结果的回调方法

`uexWeiXin.cbStartPay(json);	`
#####参数:
	  参数说明及生成办法详见微信开放平台文档调起支付接口参数说明中的“返回结果”	
		var json = {
    errCode:,//状态码。0：成功；-1：错误；-2：用户取消
    errStr: //状态说明
}
#####版本支持:
3.0.0+	
#####示例:
	 uexWeiXin.cbStartPay = function(data){
        alert(data);
    }
> ### 	cbGetAccessToken

获取支付token的回调方法`<旧版接口，新版插件不支持>`使用新接口
uexWeiXin.cbGetAccessToken(opId,dataType,data)	
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  支付token。	
#####版本支持:
3.0.0+	
> ### 	cbGetAccessTokenLocal

获取本地支付token的回调方法`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.cbGetAccessTokenLocal(opId,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  本地支付token	
#####版本支持:
3.0.0+	
> ### 	cbGenerateAdvanceOrder

生成预支付订单的回调方法`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.cbGenerateAdvanceOrder(opId,dataType,data)	`
#####参数:
	 opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	 dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	 data:(String类型) 必选  预支付订单号。	
#####版本支持:
3.0.0+	
> ### ~~cbGotoPay~~

支付回调方法`<旧版接口，新版插件不支持>`使用新接口

`uexWeiXin.cbGotoPay(opId,dataType,data)	`
#####参数:
	  opId:(Number类型) 必选  操作ID，此函数中不起作用，可忽略。	
	  dataType:(Number类型) 必选  数据类型详见CONSTANT中Callback方法数据类型	
	  data:(String类型) 必选  json格式如下：{"errCode":0,"errStr":""}	
	  errCode: 支付成功返回0；否则返回错误码。	
	  errStr: 支付成功返回0；否则返回错误码。	
#####版本支持:
3.0.0+	


#更新历史

#### API 版本：uexWeiXin-3.0.15(iOS) uexWeiXin-3.0.29（Android）
#### 最近更新时间：2015-06-19
|  历史发布版本 | iOS更新  | 安卓更新  |
| ------------ | ------------ | ------------ |
  | 3.0.25  |   | 微信支付sdk升级  |
| 3.0.25  |   |  修正链接分享时图片本来已经比较小 不需要缩略导致的问题  |
| 3.0.25  |   | 修复分享回调时应用奔溃退出的问题  |
| 3.0.25  |   | 修改回调方法  |
  | 3.0.25  |  | 新添加微信登陆功能  |
| 3.0.24|   | 修改分享文本、分享图片、分享链接回调接口参数  |
| 3.0.23  |  |结合后台修复插件需要定制出包的问题   |
| 3.0.22  |   |  修复在Popover中微信分享失败问题 |
| 3.0.21  |  | 新增分享文本、分享图片、分享链接接口  |
| 3.0.20  |  |   插件包增加src目录文件，用于解决回调的定制问题  |
| 3.0.19  |  |  修复分享图片不支持wgt路径协议的问题 |
| 3.0.18  |  | 修复分享完成回调时奔溃的问题  |
| 3.0.17  |   | 修复分享完成回调时网页未恢复的问题  |
| 3.0.16  |   |  修改AndroidManifest文件中微信相关activity注册信息 |
| 3.0.15  | uexWeiXin.cbStartPay 回调结构修正| 更新插件中引擎jar包  |
| 3.0.14  | 新增接口getPrepayId和startPay及相应回调，以 支持V3 V4支付  | 修复支付完成回调时网页未恢复的问题  |
| 3.0.13  |  增加微信授权登录的五个接口以及相对应的回 调方法 | 新增接口generatePrepayID和sendPay  |
| 3.0.12  | 支持arm64  | 修复微信支付完成后没有回调的问题  |
| 3.0.11  |修改shareLinkContent,shareImageContent, shareTextContent三个接口的回调   |修改cbIsWXAppInstalled回调方法参数，已 安装返回0，未安装返回1   |
| 3.0.10  |  增加shareLinkContent,shareImageContent ,shareTextContent三个接口 | 修改mainfest添加微信activity  |
| 3.0.9  | 修复获取预支付订单失败的问题  | 添加cbSendTextContent和cbSendImageContent回调  |
  | 3.0.8  | 调整微信支付接口  |  添加注册回调cbRegisterApp |
  | 3.0.7  | 修复微信分享回调只是返回0的bug  | 添加架包  |
   | 3.0.6  | 统一回调方法名，  | 处理分享图片问题  |
   | 3.0.5  | 统一回调参数| 修复扶贫基金会中的回调兼容问题  |
| 3.0.4 |  添加分享成功回调 | 处理微信返回值问题  |
| 3.0.3  |   | 修复微信不能生成订单问题  |
 | 3.0.2  |修正微信分享HTTP图片失败的bug   | 修复配置问题  |
| 3.0.1  | 修正微信分享照片失败的bug| 修复微信资源问题|
| 3.0.0  | 微信分享功能插件  | 微信分享功能插件|
