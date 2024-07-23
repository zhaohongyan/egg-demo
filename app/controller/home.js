const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.logger.info('query', ctx.query)
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
