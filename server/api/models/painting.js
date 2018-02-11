import mongoose from 'mongoose';

const paintingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // {
  //   img: String,
  //   required: true,
  // },
  isGenerated: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Painting', paintingSchema);
