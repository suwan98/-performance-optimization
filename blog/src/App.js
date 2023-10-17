import React, {Suspense, lazy} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";

const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <Suspense fallback={<div>로딩중..</div>}>
      <div className="App">
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
