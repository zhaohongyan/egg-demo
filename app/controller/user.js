const { Controller } = require('egg');

class UserController extends Controller {
  /**
   * 列表
   */
  async list() {
    const { ctx, service } = this;
    try {
      const result = await service.user.getList();
      ctx.success(result);
    } catch (error) {
      ctx.error()
    }
  }
  /**
     * 详情
     */
  async detail() {
    const { ctx, service } = this;
    try {
      const result = await service.user.getDetail(ctx.query);
      ctx.success(result);
    } catch (error) {
      ctx.error()
    }
  }
  /**
     * 新增
     */
  async add() {
    const { ctx, service } = this;
    const bodyParams = ctx.request.body;
    try {
      const result = await service.user.addUser(bodyParams);
      ctx.success(result);
    } catch (error) {
      ctx.error()
    }
  }

  /**
   * 编辑
   */
  async edit() {
    const { ctx, service } = this;
    const bodyParams = ctx.request.body;
    try {
      const result = await service.user.editUser(bodyParams);
      ctx.success(result);
    } catch (error) {
      ctx.error()
    }
  }

  /**
   * 删除
   */
  async delete() {
    const { ctx, service } = this;
    const params = ctx.params;
    try {
      const result = await service.user.deleteUser(params.id);
      ctx.success(result);
    } catch (error) {
      ctx.error()
    }
  }
}

module.exports = UserController;