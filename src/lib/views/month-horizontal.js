import { useState, useEffect, forwardRef } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import {
  Col,
  Stack,
  Card
} from 'react-bootstrap';
import moment from "moment";

import Item from '../components/Item';

const MonthHorizontalView = forwardRef((props, ref) => {
  console.log("props")
  console.log(props)
  const dates = props.dates;

  if (!dates) {
    return <></>
  }

  const _dates = [];

  dates.map(
    (week, weekIndex) => 
      {
        week.map(
          (entry, index) => {
            if (props.todayMonth) {
              if (props.todayMonth != entry.month()) {
                return;
              }
            }
            _dates.push(entry);
          }
        )
      }
  )

  return <Stack direction="horizontal" gap={0}>
    
      {
        _dates.map(
          date => 
         <Col xs={4}>          
          <Card style={{ width: '18rem', minHeight : 400, margin : 0 }}>
            <Card.Body>
              <Card.Title>{ date.format("DD") }</Card.Title>
            </Card.Body>
          </Card>
         </Col>           
        )
      }
    
  </Stack>;
});

export { MonthHorizontalView }
