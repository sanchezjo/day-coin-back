import BtcService from '../models/btc/btc.service.js';

/**
 * @Route : GET /btcs
 */
export const getLast24 = async (req, res, next) => {
  const btcList = await BtcService.getLast24();
  res.json({
    success: true,
    data: btcList,
  });
};

