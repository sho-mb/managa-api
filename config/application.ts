export default () => ({
  app: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  api: {
    doc: process.env.DOC_PATH,
  },
  storage: {
    email: process.env.MEGA_EMAIL,
    password: process.env.MEGA_PASSWORD,
  },
});
