import mongoose from 'mongoose';

export const BtcSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  rate_float: Number,
  code: String,
});

export const BtcModel = mongoose.model('Btc', BtcSchema);
