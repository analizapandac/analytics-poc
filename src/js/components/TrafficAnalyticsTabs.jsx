import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import Loader from 'react-loader';
import request from '../utils/request';
import { API_END_POINT } from '../constants/index.js';

export default class TrafficAnalytics extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      loaded: true,
      activeTab: '1',
      posts: []
    };

    this.getPosts = this.getPosts.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount(){
    this.getPosts();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      this.getPosts();
    }
  }

  getPosts(){
    let _this = this;
    _this.setState({ loaded: false });
    request(`${API_END_POINT}/posts`)
    .then(function (response) {
       _this.setState({ posts: response, loaded: true });
    })  
    .catch(function (error) {
      console.log(error);
      _this.setState({ loaded: true });
    });
  }

  renderRows() {
    return this.state.posts.map((post, index) => {
      return (
        <tr key={index}>
          <td>{post.id}</td>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td className="text-center">April 18, 2018</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Nav tabs className="nav-fill ua-tab-links-wrapper">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <span className="ua-tab-label">Estimated Revenue</span>
              <span className="ua-tab-value">RM 1,670,000</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span className="ua-tab-label">Reservations</span>
              <span className="ua-tab-value">3,722</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="ua-tab-label">Cancellations</span>
              <span className="ua-tab-value">631</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <span className="ua-tab-label">No-shows</span>
              <span className="ua-tab-value">463</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab="1">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Loader loaded={this.state.loaded} className="ua-loader-icon">
                	<p>Showing 1 to 100 out of 100 items. This is just a sample data to test the perfomance of the page.</p>
                   <Table>
                    <thead>
                       <tr>
                         <td>ID</td>
                         <td>Author ID</td>
                         <td width="15%">Title</td>
                         <td width="30%">Excerpt</td>
                         <td className="text-center">Date Created</td>
                       </tr>
                    </thead>
                    <tbody>
                      {this.renderRows()}
                    </tbody>
                 </Table>
                </Loader>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}