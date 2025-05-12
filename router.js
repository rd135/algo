import Vue from 'vue';
import Router from 'vue-router';
import searchcondition from './store'
import tokenSvc from '@/common/token-service';

import RcsTmpltLayout from './views/RcsTmpltLayout.vue';
import gwRcsPage from "./modules/rcsmsg/views/GwRcsPage";

import rcsMsgRoutes from './modules/rcsmsg/router';
import userRoutes from './modules/user/router';
import homeRoutes from './modules/home/router';
import loginRoutes from './modules/login/router';
import sendMgtRoutes from './modules/sendmgt/router';
import mgtRoutes from './modules/mgt/router';
import brandMgtRoutes from './modules/brmgt/router';
import sendNoMgtRoutes from './modules/sendnomgt/router';
import templateMgtRoutes from './modules/templatemgt/router';
import notiRoutes from './modules/notice/router';
import pubTmpltRoutes from './modules/pubtmplt/router';
import addrMgtRoutes from './modules/addrmgt/router';
import staticsRoutes from './modules/statics/router';
import msgRoutes from './modules/smsTmp/router';
import itgTmpRoutes from './modules/itgTmp/router';
import sendXmsRoutes from '@/modules/sendXms/router';
import sendRcsRoutes from '@/modules/sendRcs/router';
import sendItgRoutes from '@/modules/sendItg/router';
import sendManagementRoutes from '@/modules/sendManagement/router';
import sysconfigRoutes from './modules/sysconfig/router';
import rcConfigRoutes from './modules/rcConfig/router'; // 발송건수 관리
import sendMsgRoutes from './modules/sendmsg/router'; // 메시지발송
import alimtalkRoutes from './modules/alimtalkTmp/router';
import alimtalkSend from './modules/sendAlimtalk/router';
import queMonitor from './modules/monitor/router';
import BasicDist from './modules/serv/router';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RcsTmpltLayout,
      children: [
        {
          path: '',
          component: gwRcsPage
        },
        {
          path: '/view/error/404',
          component: () => import('./views/ErrorPage404.vue'),
          meta: { public: true }
        },
        {
          path: '/view/error/500',
          component: () => import('./views/ErrorPage500.vue'),
          meta: { public: true }
        },
        ...loginRoutes,
        ...rcsMsgRoutes,
        ...homeRoutes,
        ...userRoutes,
        ...sendMgtRoutes,
        ...mgtRoutes,
        ...brandMgtRoutes,
        ...sendNoMgtRoutes,
        ...templateMgtRoutes,
        ...notiRoutes,
        ...pubTmpltRoutes,
        ...addrMgtRoutes,
        ...staticsRoutes,
        ...sysconfigRoutes,
        ...msgRoutes,
        ...itgTmpRoutes,
	    ...sendXmsRoutes,
        ...sendRcsRoutes,
        ...sendMsgRoutes, // 메시지발송	    
        ...sendItgRoutes,
	    ...sendManagementRoutes,
	    ...rcConfigRoutes, // 발송건수 관리
	    ...alimtalkRoutes,	// 알림톡 템플릿
	    ...alimtalkSend,	// 알림톡 발송
	    ...queMonitor,		// 큐모니터링
	    ...BasicDist, 		// 배분.
      ]
    },
    {path: '*', redirect: '/view/error/404'}
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x : 0,
      y : 0
    }
  }
});

router.beforeEach((to, from, next) => {
  // 앞으로 갈 route의 meta.public이 true인지 (다시 말해서 아무에게나 개방이 되는 페이지인지)
  const isPublic = to.matched.some(record => record.meta.public);
  const loggedIn = !!tokenSvc.getToken();

  // 개방되는 페이지도 아니고 로그인도 안됐으면 로그인으로 보낸다.
  if (!isPublic && !loggedIn) {
    return next('/login');
  }

  // 앞으로 갈 페이지에 meta.usingSearchCondition 값이 true라면(템플릿관리, sendnomgt)
  to.matched.some(record => {
    if (record.meta.usingSearchCondition) {
      const shareList = record.meta.shareList; // 배열로 만들어진 값이 있다. 
      // 뒤로가기 등 디테일 페이지에서 원류가 되는 list로 돌아올 때 검색을 남기기 위해 만들어진 로직같음.
      if (from.name && shareList && shareList.includes(from.name)) {
        // shareList에 포함되어 있는 라우터에서 온 경우 검색 조건을 유지한다.
        // console.log("패밀리");
      } else {
        // 그 외의 경우 검색 조건 초기화
        searchcondition.commit("searchcondition/updateSearchCondition", null);
        // console.log("낫패밀리");
      }
    }
    next();
  });
});

export default router;
