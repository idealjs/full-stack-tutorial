# 使用 ssh 的方式，克隆代码

1. 创建公钥 私钥

参考 https://gist.github.com/yisibl/8019693

`~/.ssh/some_key`
`~/.ssh/some_key_pub`

2. 添加公钥到 git 平台
3. 配置本地 ssh config 文件


文件位置 `~/.ssh/config`
```ssh-config
Host github.com
    HostName ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/some_key
```

# 运行本地项目

克隆当前项目

```shell
git clone git@github.com:idealjs/full-stack-tutorial.git
```

```shell
cd full-stack-tutorial
```

安装依赖

```shell
yarn
```

启动项目
> package.json 中查看 scripts 字段
```shell
yarn start
```
