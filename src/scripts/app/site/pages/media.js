import getComp from 'setjs/template/component';
let imgArr = [
    '/images/media/pic-01.jpg',
    '/images/media/pic-02.jpg',
    '/images/media/pic-03.jpg',
    '/images/media/pic-04.jpg',
    '/images/media/pic-05.jpg',
    '/images/media/pic-06.jpg',
    '/images/media/pic-07.jpg',
    '/images/media/pic-08.jpg',
    '/images/media/pic-09.jpg',
    '/images/media/pic-10.jpg',
    '/images/media/pic-11.jpg',
    '/images/media/pic-12.jpg',
];
export default {
  templates: ['site/admin/media'],
  loaded: () => {},
  comp: () => {
    let page = getComp('site/admin/media',{imgArr});
    return page;
  },
};
