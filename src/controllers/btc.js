import BtcService from '../models/btc/btc.service.js';
import { asyncHandler } from '../middleware/async.js';

/**
 * @Route : GET /btcs
 */
export const getLast24 = asyncHandler(async (req, res, next) => {
  const btcList = await BtcService.getLast24();
  res.json({
    success: true,
    data: btcList,
  });
});
