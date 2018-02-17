import mongoose from 'mongoose';
import random from 'mongoose-simple-random';

const paintingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  isGenerated: {
    type: Boolean,
    required: true,
  },
});

paintingSchema.plugin(random);

export default mongoose.model('Painting', paintingSchema);
