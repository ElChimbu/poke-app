import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Progress() {
  return <div className="flex justify-center list-none w-60 h-72 bg-gray-400 border-gray-900 border-solid 
  border-2 mt-12 p-4 rounded-md">
  <CircularProgress disableShrink  className="m-auto"/>
  </div>;
}