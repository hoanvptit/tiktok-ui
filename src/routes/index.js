import routeConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

// không cần đăng nhập vẫn vào đc
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
];

//cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
