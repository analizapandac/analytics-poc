import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import TrafficAnalyticsTabs from './TrafficAnalyticsTabs.jsx';

export default class TrafficAnalytics extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row small-gutters">
        <div className="col-8">
            <div className="section-block p-0">
              <TrafficAnalyticsTabs />
            </div>
        </div>
        <div className="col-4">
            <div className="section-block">
              <div className="row">
                <div className="col-6">
                  <Card className="ua-info-box">
                    <CardBody className="text-center p-1">
                      <CardTitle>Reservations</CardTitle>
                      <div className="row">
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Guests</CardSubtitle>
                            <CardText>3,714</CardText>
                        </div>
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Parties</CardSubtitle>
                            <CardText>1,238</CardText>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-6">
                  <Card className="ua-info-box">
                    <CardBody className="text-center p-1">
                      <CardTitle>Walk-in</CardTitle>
                      <div className="row">
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Guests</CardSubtitle>
                            <CardText>7,389</CardText>
                        </div>
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Parties</CardSubtitle>
                            <CardText>3,213</CardText>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Card className="ua-info-box mb-0">
                    <CardBody className="text-center p-1">
                      <CardTitle>Cancellations</CardTitle>
                      <div className="row">
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Guests</CardSubtitle>
                            <CardText>2,436</CardText>
                        </div>
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Parties</CardSubtitle>
                            <CardText>405</CardText>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-6">
                  <Card className="ua-info-box mb-0">
                    <CardBody className="text-center p-1">
                      <CardTitle>No-show</CardTitle>
                      <div className="row">
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Guests</CardSubtitle>
                            <CardText>564</CardText>
                        </div>
                        <div className="col-6 ua-stat">
                            <CardSubtitle>Parties</CardSubtitle>
                            <CardText>236</CardText>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}