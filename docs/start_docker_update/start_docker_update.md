---
sidebar_position: 1
---

# 如何使用Docker启动数据库
使用Docker启动PostgreSQL数据库

### 1. 拉取 PostgreSQL 镜像和启动 PostgreSQL 容器
根据[Docker教程](http://localhost:3000/full-stack-tutorial/docs/docker/install)，完成拉取 PostgreSQL 镜像和启动 PostgreSQL 容器
### 2. 连接 PostgreSQL
运行以下命令，连接到PostgreSQL数据库：
```
docker exec -it my-postgres psql -U postgres
```
### 3. 配置[Prisma](#22-配置env文件)
### 4. 启动Docker容器
运行以下命令启动`Docker`容器：
```
docker-compose up --build
```