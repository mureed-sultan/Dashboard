import getComp from 'setjs/template/component.js';
export default {
  templates: ['site/admin/dashboard'],
  comp: function () {
    let page = getComp('site/admin/dashboard');
    return page;
  },
};
