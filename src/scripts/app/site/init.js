import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
// import home from './pages/home.js';
import admin from './pages/admin.js';
import media from './pages/media.js';

export default function() {
  addPage('', admin);
  addPage('media', media);
  addPaths('site/admin',[
    'update',
    'post',
    'pages',
    'comment',
  ]);
}
