import {
  Row,
  Col,
  Badge,
} from 'react-bootstrap';

const Item = ({ entry }) => {
  return <Row>
      <Col>
        <Badge bg="light" style={{ color : "#000" }}>{ entry.format("DD") }</Badge>
      </Col>
    </Row> 

    {
      /*
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
      */
    };
}

export default Item;