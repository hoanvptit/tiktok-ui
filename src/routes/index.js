import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';

// không cần đăng nhập vẫn vào đc
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.live, component: Live },
];

//cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
