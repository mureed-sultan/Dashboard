import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
// import home from './pages/home.js';
import admin from './pages/admin.js';

export default function() {
  addPage('', admin);
  addPaths('site',[
    'admin/update',
    'admin/post',
  ])
}
