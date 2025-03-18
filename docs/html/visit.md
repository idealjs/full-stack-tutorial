---
sidebar_position: 1
---

# 访问HTML网页的流程
通过http-server来模拟，从浏览器、网络、服务器方面来介绍

## 先决条件
- 已安装并启动http-server

>**提示**                                                    
若未安装和启动`http-server`，可以参考[http-server](http://localhost:3000/full-stack-tutorial/docs/html/http-server)文档

## 浏览器
1. 检查本地缓存中是否有跟`localhost`对应的地址，通常浏览器会用`localhost`因为`localhost`映射到`127.0.0.1`
2. 建立tcp连接，浏览器向`127.0.0.1：8080`发送TCP连接请求，服务端确认客户端并回复，服务端与客户端建立连接
3. 浏览器向服务器发送GET请求，请求路径为`/`
![请求路径](./get.png)

## 服务器
 1. 服务器收到请求后，查找`index.js`文件
 ![文件](./index.png)
 2. 生成HTTP响应
 3. 服务器将生成的HTTP响应通过TCP连接再发送给浏览器

## 渲染页面
 1. 浏览器接收资源后渲染页面
 2. 显示给用户