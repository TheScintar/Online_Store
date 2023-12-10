import React from 'react';
import {useContext } from "react";
import {Context} from "../index"
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
      {user.isAuth === true && authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} exact />
      ))}
      <Route path='*' element={<Navigate to={SHOP_ROUTE} />} exact />
    </Routes>
  );
};

export default AppRouter;