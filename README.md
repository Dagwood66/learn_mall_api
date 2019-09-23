# learn_mall_api 后台接口
## 目录
    
## 生产依赖
    express
## 开发依赖
    supervisor 本地开发热更新
    cross-env 环境配置     
    env-cmd 环境配置 
## 开发命令 
    断点调试 npm run dev
    env-cmd -e base,dev node --inspect-brk index.js
    热更新-断点调试接口 npm run debug     
    env-cmd -e base,dev supervisor --ignore node_modules node --inspect index.js
