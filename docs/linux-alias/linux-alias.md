# Linux alias
## 1. 临时设置别名
在Ubantu中如果有每次进入命令行都需要输入一串相同的命令，就可以设置别名，输入以下命令，其中ev就是3e3e3e...的别名                 
`alias ev='3e3e3e...'`
## 2. 永久设置别名
要想每次关闭了wsl后还能执行别名，就需要在.zshrc里面添加别名，这里我用的vscode打开，也可以用vim进行编写以下命令，记得保存             
`alias ev='3e3e3e...`                                          
## 3. 临时取消别名
`unalias ev=alias ev='3e3e3e...`