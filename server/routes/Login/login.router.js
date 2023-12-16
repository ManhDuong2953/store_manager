import { UserLogin } from '../../src/controllers/login/Login.controller';
import { checkMissingInputs } from '../../middlewares';
import { Authentication } from '../../middlewares/Authentication.middleware';
import { createAccessToken } from '../../middlewares';
const LoginRouter = (router) => {
    router.post('/',checkMissingInputs, UserLogin ,createAccessToken, Authentication);
    return router;
}
export default LoginRouter