/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/login', controller.login.index);

  router.get('/api/user/list', controller.user.list);
  router.get('/api/user/detail', controller.user.detail);
  router.post('/api/user/add', controller.user.add);
  router.post('/api/user/edit', controller.user.edit);
  router.delete('/api/user/delete/:id', controller.user.delete);

};
