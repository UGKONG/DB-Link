import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Documents from "./pages/Documents";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import Database from "./pages/Database";
import Alert from "./other/Alert";

export const Store = React.createContext();

function App() {

  const [documents, setDocuments] = useState([
    { seq: 1001, name: '닥터케어유니온 (관리자용)', description: '회원관리 프로그램 (관리자용) DB 모델링', createDate: '2021-08-01', modifyDate: '2021-08-05' },
    { seq: 1002, name: '닥터케어유니온 (회원용)', description: '닥터케어유니온 (회원용) DB 모델링', createDate: '2021-08-03', modifyDate: '2021-08-03' },
    { seq: 1003, name: '부평 스마트 커뮤니티 플랫폼', description: '부평 스마트 커뮤니티 플랫폼 DB 모델링', createDate: '2021-08-02', modifyDate: '2021-08-04' },
  ]);
  const [_documents, _setDocuments] = useState([]);
  const [sort, setSort] = useState('modifyDate');
  const [hash, setHash] = useState('/');
  const [headerYN, setHeaderYN] = useState(true);

  useEffect(() => {
    setHash(window.location.hash.replace('#', ''));
  }, []);

  useEffect(() => {
    _setDocuments(documents);
  }, [documents])

  return (
    <Store.Provider value={{
      hash, setHash,
      headerYN, setHeaderYN,
      documents, setDocuments,
      _documents, _setDocuments,
      sort, setSort, 
    }}>
      <Header />
      {/* <Alert color={'green'} text={'저장되었습니다.'} /> */}

      <Switch>
        <Route exact path={ '/' } component={ Documents }/>
        <Route exact path={ '/Document' } component={ Documents }/>
        <Route exact path={ '/MyPage' } component={ MyPage }/>
        <Route exact path={ '/Setting' } component={ Setting }/>

        <Route exact path={ '/Document/:id' } component={ Database }/>
      </Switch>
    </Store.Provider>
  );
}

export default App;