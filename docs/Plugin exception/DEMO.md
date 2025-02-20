## 如何处理vscode安装插件异常

### 1. 检查网络是否异常，在浏览器中输入以下网址，看是否能访问，若能则无网络问题
`https://marketplace.visualstudio.com`       

![网络无异常](./marketplace.png)      

### 2. 查看是否出现第一次启动调试功能时，vscode会弹出防火墙阻止
![防火墙成功阻止](./code.png)

### 3. 设置代理
1.打开vscode                               
2.在其左下角找到齿轮状(Manage)点击找到Settings  
3.找到右上角的OpenSettings(Json)添加以下代理                      
`"http.proxy": "http://127.0.0.1:7897",`                       
`"https.proxy": "http://127.0.0.1:7897",`                      
`"http.proxyAuthorization": null,`                         
`"http.proxyStrictSSL": false`

### 4. 若以上方法都不行则查看clash是否配置完成

### 5. 安装插件完成后，将代理配置就可以去掉了