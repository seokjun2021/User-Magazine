import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

//스토어에 히스토리 넣어주기

export const history = createBrowserHistory() // History 객체 만듬



const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history), // 만든 히스토리와 라우터가 연결이 됨 => 스토어에 저장됨

  });

  const middlewares = [thunk.withExtraArgument({history:history})]; // 배열에 내가 사용할 미들웨어를 하나씩 넣는다
 // 액션생성함수 실행하고 리듀서가 실행되기 전 단계에서 history 사용가능 -> 페이지 이동 가능
// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger"); // require는 패키지를 가져온다 => 액션 전 상태,액션,액션 후 콘솔에 보여줌
//redux-logger 는 리덕스의 정보가 콘솔에 찍히기 때문에 굳이 배포할때에는 필요가 없으므로 require로 패키지를 가져온다
  middlewares.push(logger);
}
//리덕스 데브툴스 사용설정 
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

    // 미들웨어 묶기  -> 미들웨어를 가져올 뿐만 아니라 묶어줘야한다.
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
      );
// 스토어 만들기
    let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

// 스토어 만드는 것은 외울 필요없고 필요할때만 문서에서 찾아서 붙여넣기하면됌
