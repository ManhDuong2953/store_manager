import { checkMissingInputs } from '../../middlewares/index';
import { Authorization } from '../../middlewares/authorization';
import { Authentication } from '../../middlewares/authentication';
const LoginRouter = (router) => {
  router.post('/login', checkMissingInputs, Authentication, Authorization, (req, res) => {
    res.status(200).json(req.body);
  });

  
  router.post('/logout', (req, res) => {
    res.clearCookie('accessToken');
    res.status(200).send('Logout successful');
  });
  return router;
}
export default LoginRouter