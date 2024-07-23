const { Controller } = require('egg');

class LoginController extends Controller {
  async index() {
    const { ctx, service, logger } = this;
    const { query } = ctx;
    try {
      const result = await service.user.findOne(query);
      if (!result) {
        ctx.error('用户不存在');
      } else if (result.pass !== query.pass) {
        ctx.error('密码不正确');
      } else {
        ctx.success(result);
      }
    } catch (error) {
      logger.error('login', error)
      ctx.error(error)
    }
  }
}

module.exports = LoginController;
