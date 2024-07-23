module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    pass: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
  });

  return mongoose.model('User', UserSchema, 'user');
}
