// app/service/user.js
const { Service } = require('egg');

class UserService extends Service {
  async getList() {
    this.logger.info('======getList======')
    return this.ctx.model.User.find()
  }

  async getDetail(params) {
    this.logger.info('======getDetail======', params)
    return this.ctx.model.User.findOne({ id: params.id });
  }

  async addUser(params) {
    this.logger.info('======addUser======', params)
    const length = (await this.ctx.model.User.find()).length
    const newParams = {...params, id: length + 1 }
    return this.ctx.model.User.create(newParams);
  }

  async editUser(params) {
    this.logger.info('======editUser======', params)
    return this.ctx.model.User.findOneAndUpdate({ id: params.id }, {
      pass: params.pass,
      age: params.age,
      city: params.city
    });
  }

  async findOne(params) {
    this.logger.info('=====findOne=======')
    return this.ctx.model.User.findOne({ name: params.name });
  }

  async deleteUser(id) {
    this.logger.info('=====deleteUser=======')
    return this.ctx.model.User.deleteOne({ id });
  }

}

module.exports = UserService;