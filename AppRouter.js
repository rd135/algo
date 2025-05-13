// src/AppRouter.js
import React, { useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

// 서비스 & 상태 관리
import tokenSvc from './common/token-service';

// 레이아웃 & 페이지 컴포넌트
import RcsTmpltLayout from './pages/RcsTmpltLayout';
//import GwRcsPage from './pages/GwRcsPage';
import Error404 from './pages/ErrorPage404';
import Error500 from './pages/ErrorPage500';

// 모듈별 라우트 배열 (React Router 형식으로 변환된 파일들)
   import loginRoutes     from './pages/login/routes';
// import rcsMsgRoutes    from './modules/rcsmsg/routes';
// import userRoutes      from './modules/user/routes';
// import homeRoutes      from './modules/home/routes';
// import sendMgtRoutes   from './modules/sendmgt/routes';
// import mgtRoutes       from './modules/mgt/routes';
// import brandMgtRoutes  from './modules/brmgt/routes';
// import sendNoMgtRoutes from './modules/sendnomgt/routes';
// import templateMgtRoutes from './modules/templatemgt/routes';
// import notiRoutes      from './modules/notice/routes';
// import pubTmpltRoutes  from './modules/pubtmplt/routes';
// import addrMgtRoutes   from './modules/addrmgt/routes';
// import staticsRoutes   from './modules/statics/routes';
// import msgRoutes       from './modules/smsTmp/routes';
// import itgTmpRoutes    from './modules/itgTmp/routes';
// import sendXmsRoutes   from './modules/sendXms/routes';
// import sendRcsRoutes   from './modules/sendRcs/routes';
// import sendItgRoutes   from './modules/sendItg/routes';
// import sendManagementRoutes from './modules/sendManagement/routes';
// import sysconfigRoutes from './modules/sysconfig/routes';
// import rcConfigRoutes  from './modules/rcConfig/routes';
// import sendMsgRoutes   from './modules/sendmsg/routes';
// import alimtalkRoutes  from './modules/alimtalkTmp/routes';
// import alimtalkSend    from './modules/sendAlimtalk/routes';
// import queMonitor      from './modules/monitor/routes';
// import BasicDist       from './modules/serv/routes';

// 인증 체크용 라우트 래퍼
function PrivateRoute({ element, meta }) {
  const loggedIn = !!tokenSvc.getToken();
  return (!meta?.public && !loggedIn)
    ? <Navigate to="/login" replace />
    : element;
}

// 스크롤 최상단 이동 컴포넌트
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 검색조건 초기화 훅
// function useSearchConditionGuard(shareList) {
//   const location = useLocation();
//   const prev = useRef(location);
//   useEffect(() => {
//     const fromPath = prev.current.pathname;
//     if (!shareList?.includes(fromPath)) {
//       resetSearchCondition();
//     }
//     prev.current = location;
//   }, [location, shareList]);
// }

// 각 라우트를 감싸는 컴포넌트
// function RouteWrapper({ path, element, meta, shareList }) {
//   //useSearchConditionGuard(shareList);
//   return <Route path={path} element={<PrivateRoute element={element} meta={meta} />} />;
// }

// 최상위 라우터 설정
export default function AppRouter() {
  const allModuleRoutes = [
    ...loginRoutes,
    // ...rcsMsgRoutes,
    // ...homeRoutes,
    // ...userRoutes,
    // ...sendMgtRoutes,
    // ...mgtRoutes,
    // ...brandMgtRoutes,
    // ...sendNoMgtRoutes,
    // ...templateMgtRoutes,
    // ...notiRoutes,
    // ...pubTmpltRoutes,
    // ...addrMgtRoutes,
    // ...staticsRoutes,
    // ...sysconfigRoutes,
    // ...msgRoutes,
    // ...itgTmpRoutes,
    // ...sendXmsRoutes,
    // ...sendRcsRoutes,
    // ...sendItgRoutes,
    // ...sendManagementRoutes,
    // ...rcConfigRoutes,
    // ...sendMsgRoutes,
    // ...alimtalkRoutes,
    // ...alimtalkSend,
    // ...queMonitor,
    // ...BasicDist,
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* 메인 레이아웃 */}
        <Route path="/" element={<RcsTmpltLayout />}>
          {/* 인덱스 */}
          {/* <Route
            index
            element={<PrivateRoute element={<GwRcsPage />} meta={{}} />}
          /> */}
          {/* / 에 바로 들어오면 /login 으로 이동 */}
          <Route
            index
            element={<Navigate to="/login" replace />}
          />
          {/* 에러 페이지 */}
          <Route path="view/error/404" element={<Error404 />} />
          <Route path="view/error/500" element={<Error500 />} />

          {/* 모듈별 라우트 */}
          {allModuleRoutes.map(r => (
            // <RouteWrapper
            //   key={r.path}
            //   path={r.path}
            //   element={r.element}
            //   meta={r.meta}
            //   shareList={r.meta?.shareList}
            // />
            <Route
            key={r.path}
            path={r.path}
            element={<PrivateRoute element={r.element} meta={r.meta} />}
            />
          ))}
        </Route>

        {/* 매칭되지 않으면 404 */}
        <Route path="*" element={<Navigate to="/view/error/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
