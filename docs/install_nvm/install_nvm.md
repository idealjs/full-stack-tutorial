## 在linux下安装nvm以及nodejs
### 1. 打开Ubantu命令行
### 2. 使用以下命令安装cURL
`sudo apt-get install curl`
### 3. 使用以下命令安装nvm
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`        
安装后注意记得配置环境变量，不然后续查不到nvm，以下是环境变量
`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
### 4. 验证是否安装
`command -v nvm`                     
若安装了则返回nvm，如果收到找不到命令或者没有相应，关闭终端后再出现打开
### 5. 列出当前安装的Node版本
`nvm ls`
![nvm](./nvm.png)
### 6. 安装Node.js的当前稳定的LTS版本
`nvm install --lts`
### 7. 验证是否Node.js是否已经安装
`node --version`