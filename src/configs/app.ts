export default {
  env: import.meta.env.VITE_APP_ENV,

  server: import.meta.env.VITE_APP_SERVER,

  // 服务器环境（测试、本地、生产）
  serverEnv: import.meta.env.VITE_APP_ENV,
};
