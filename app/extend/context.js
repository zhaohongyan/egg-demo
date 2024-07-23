// 在 app/extend/context.js 文件中定义扩展方法
module.exports = {
  success(data) {
    this.body = {
      code: '00',
      data,
      message: '',
      success: true,
    };
  },
  error(message) {
      this.body = {
        code: '99',
        data: null,
        message: message || '未知异常',
        success: false,
      };
    },
};