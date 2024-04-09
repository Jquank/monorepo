# 评物后台管理系统

## 项目介绍

monorepo + micro-app + ts + vite + vue3 + element-plus

## 常用命令

```sh
pnpm install, pnpm dev, pnpm build, pnpm lint
```

## 目录介绍

```sh
├── common                       # 共享模块（pnpm workspace）
│   ├── assets                     # 全局静态资源
│   ├── components                 # 全局公用组件（可发布npm）
│   ├── utils                      # 全局工具类（可发布npm）
├── project                      # 所有项目（数据后台为单独项目）
│   ├── base                       # microApp基座
│   ├── main-admin                 # 主后台
│   ├── statistics-admin           # 统计后台
│   ├── audit-admin                # 审核后台
```

## 开发规范

- 所有项目均使用pnpm管理依赖，安装在根目录的node_modules

  ```sh
  pnpm i xxx -w -D
  pnpm i xxx -w -S

  ```

- .vue组件命名：统一使用大驼峰命名AaBb.vue，index.vue除外，

- 文件夹命名：统一使用aa-bb的形式
