import { useState, useEffect, forwardRef } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import {
  Col,
  Row,
  Table,
  Badge
} from 'react-bootstrap';
import moment from "moment";

import Item from '../components/Item';

const MonthView = forwardRef((props, ref) => {
  const entries = props.entries;
  const dates = props.dates;

  return <Row>
    <Col>      
      <Row>
        <Col xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Table bordered responsive  >
              <thead>
                <tr style={{ textAlign : "center" }}>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                  <th>Sábado</th>
                  <th>Domingo</th>
                </tr>
              </thead>
              <tbody>
              {
                dates.map(
                  (week, weekIndex) => 
                  <tr key={weekIndex}>
                    {
                      week.map(
                        (entry, index) => {
                          const dateKeyName = entry.format("YYYY-MM-DD");

                          return <td key={index} style={{
                            height : 70,
                            width : 70,
                            textAlign : "center",
                            alignItems : "center",
                            backgroundColor : (
                              props.todayMonth == entry.month() ? 
                              ( props.todayDay == entry.date() ? "gray" : "#fff") : 
                              "lightgray"
                              )
                          }}>  
                            <Row>
                              <Col>
                                <Badge bg="light" style={{ color : "#000" }}>{ entry.format("DD") }</Badge>
                              </Col>
                            </Row> 

                            {
                              entries ? 
                                entries[dateKeyName] ? 
                                  <>
                                  <Badge bg="warning">{ entries[dateKeyName].length }</Badge>
                                  {
                                    entries[dateKeyName]
                                    .splice(0, entries[dateKeyName].length < 3 ? entries[dateKeyName].length : 3)
                                    .map(
                                      (issue, issueIndex) => <Issue key={issueIndex}>
                                        { issue.shortName ?? "" } - { issue.summary ?? "" }
                                      </Issue>
                                    )
                                  }
                                  </>
                                : ""
                              : ""
                            }                      
                          </td>;
                        }
                      )
                    }
                  </tr>            
                )
              }
              </tbody>
            </Table>
          </Box>
        </Col>
      </Row>      
    </Col>
  </Row>;
});

const Issue = ({ children }) => 
<Paper elevation={5} style={{ 
    padding : 5,
    fontSize : 10
  }}>
  { children }
</Paper>

export { MonthView }