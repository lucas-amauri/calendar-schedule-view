import { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Badge,
  Table,
  Dropdown,
  Container
} from 'react-bootstrap';
import moment from "moment";

import 'bootstrap/dist/css/bootstrap.min.css';

import { MonthView, MonthHorizontalView } from './views';

const Calendar = ({ entries, view }) => {
  const [viewMode, setViewMode] = useState("month");

  useEffect(() => {
    setViewMode(view);
  }, [view]);

  const views = [
    { value : "month", label : "Mês" },
    { value : "month-horizontal", label : "Mês em horizontal" },
  ];

  const todayMonth = moment().month();
  const todayYear = moment().year();
  const weekDay = moment().day();
  const todayDay = moment().date();

  const startDate = moment([todayYear, todayMonth, 1]);  

  var actualDate = moment(startDate.subtract(weekDay > 0 ? weekDay-1 : 0, "days"));

  const dates = [];

  let isThisMonth = false;
  let dayWeek = 0;
  let weekCount = 0;
  dates[weekCount] = [];

  while (true) {
    if (actualDate.month() != todayMonth && isThisMonth) {
      isThisMonth = false;
    };

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

    dates[weekCount].push(moment(actualDate));

    actualDate = moment(actualDate.add(1, 'days'));
    dayWeek++;
  }

  const props = {
    entries : entries,
    dates : dates,    
    todayYear : todayYear,
    todayMonth : todayMonth,
    todayDay : todayDay
  }

  let ViewSelected = <MonthView {...props} />;

  switch (viewMode) {
    case "month-horizontal" :
      ViewSelected = <MonthHorizontalView {...props} />
      break;
  }

  return <Container>
      <Row>
        <Col>
          { moment().format("MMMM [de] YYYY")}        
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Modo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                views.map(
                  view => <Dropdown.Item onClick={() => setViewMode(view.value)}>{ view.label }</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          { ViewSelected }
        </Col>        
      </Row>
  </Container>;
}

export { Calendar }