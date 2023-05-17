"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _material = require("@mui/material");
var _reactBootstrap = require("react-bootstrap");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import { useState, useEffect } from 'react';

const Calendar = _ref => {
  let {
    entries
  } = _ref;
  const todayMonth = (0, _moment.default)().month();
  const todayYear = (0, _moment.default)().year();
  const weekDay = (0, _moment.default)().day();
  const todayDay = (0, _moment.default)().date();
  const startDate = (0, _moment.default)([todayYear, todayMonth, 1]);
  var actualDate = (0, _moment.default)(startDate.subtract(weekDay > 0 ? weekDay - 1 : 0, "days"));
  const dates = [];
  let isThisMonth = false;
  let dayWeek = 0;
  let weekCount = 0;
  dates[weekCount] = [];
  console.log("-----------------");
  while (true) {
    if (actualDate.month() != todayMonth && isThisMonth) {
      isThisMonth = false;
    }
    ;
    if (actualDate.month() == todayMonth) {
      isThisMonth = true;
    }
    if (dayWeek > 6) {
      if (isThisMonth == false) {
        break;
      }
      dayWeek = 0;
      weekCount++;
      dates[weekCount] = [];
    }
    dates[weekCount].push((0, _moment.default)(actualDate));
    actualDate = (0, _moment.default)(actualDate.add(1, 'days'));
    dayWeek++;
  }
  console.log("entries");
  console.log(entries);
  return /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, null, /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, null, (0, _moment.default)().format("MMMM [de] YYYY"))), /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    xs: 12
  }, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Table, {
    bordered: true,
    responsive: true
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("th", null, "Segunda"), /*#__PURE__*/React.createElement("th", null, "Ter\xE7a"), /*#__PURE__*/React.createElement("th", null, "Quarta"), /*#__PURE__*/React.createElement("th", null, "Quinta"), /*#__PURE__*/React.createElement("th", null, "Sexta"), /*#__PURE__*/React.createElement("th", null, "S\xE1bado"), /*#__PURE__*/React.createElement("th", null, "Domingo"))), /*#__PURE__*/React.createElement("tbody", null, dates.map((week, weekIndex) => /*#__PURE__*/React.createElement("tr", {
    key: weekIndex
  }, week.map((entry, index) => {
    const dateKeyName = entry.format("YYYY-MM-DD");
    return /*#__PURE__*/React.createElement("td", {
      key: index,
      style: {
        height: 70,
        width: 70,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: todayMonth == entry.month() ? todayDay == entry.date() ? "gray" : "#fff" : "lightgray"
      }
    }, /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, null, /*#__PURE__*/React.createElement(_reactBootstrap.Badge, {
      bg: "light",
      style: {
        color: "#000"
      }
    }, entry.format("DD")))), entries[dateKeyName] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactBootstrap.Badge, {
      bg: "warning"
    }, entries[dateKeyName].length), entries[dateKeyName].splice(0, entries[dateKeyName].length < 3 ? entries[dateKeyName].length : 3).map((issue, issueIndex) => {
      var _issue$shortName, _issue$summary;
      return /*#__PURE__*/React.createElement(Issue, {
        key: issueIndex
      }, (_issue$shortName = issue.shortName) !== null && _issue$shortName !== void 0 ? _issue$shortName : "", " - ", (_issue$summary = issue.summary) !== null && _issue$summary !== void 0 ? _issue$summary : "");
    })) : "");
  }))))))))));
};
exports.Calendar = Calendar;
const Issue = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(_material.Paper, {
    elevation: 5,
    style: {
      padding: 5,
      fontSize: 10
    }
  }, children);
};