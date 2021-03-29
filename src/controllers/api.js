/**
 * @Route : GET /server/health-check
 */
export const ping = (req, res, next) => {
  res.json({ success: true });
};
