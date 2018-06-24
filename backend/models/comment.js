import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
	email: String,
	message: String,
}, { timestamps: true });

export default mongoose.model('Comment', CommentsSchema);