import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTeam, deselectTeam } from "../actions/select_team";
import { selectStats, selectPractices } from '../actions/view_actions';
import { Card, CardTitle, Col, Row } from 'react-materialize';

class TeamList extends Component {

    teamSelected() {
        var teams = this.props.teams.values();
        for (let team of teams) {
            if (team.selected) {
                return true;
            }
        }
        return false;
    }

    render() {
        if (!this.teamSelected()) {
            return (
                <div>
                    {this.renderTeams()}
                </div>
            )
        } if (this.teamSelected() && this.props.view === "stats") {
            console.log("we're in stats")
            return (
                <div>
                    {this.renderNavbar()}
                    {this.renderStats()}
                </div>
            )
        } if (this.teamSelected() && this.props.view === "practices") {
            console.log("we're in practices")
            return (
                <div>
                    {this.renderNavbar()}
                    {this.renderPractices()}
                </div>
            )
        }

    }

    renderStats() {
        return (
            <div className="row">
                <div className="col s12 m12 l12">

                    <div id="tdd" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Test Driven Development</h5>
                            <hr />
                            <img src={require('../../img/tdd.png')} alt="Tests" />
                            <img src={require('../../img/tdd_2.png')} alt="Tests" />
                        </div>
                    </div>

                    <div id="velo" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Velocity</h5>
                            <hr />
                            <img src={require('../../img/velo.png')} alt="sprint_velo" />
                        </div>
                    </div>

                    <div id="burndown_chart" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Burndown chart</h5>
                            <hr />
                            <img src={require('../../img/burndown.png')} alt="burndown_chart" />
                        </div>
                    </div>

                    <div id="happiness_index" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Happiness Index</h5>
                            <hr />
                            <img src={require('../../img/hapi.png')} alt="happiness_index" />
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    renderPractices() {
        return (
            <div className="row">
                <div className="col s12 m12 l12">

                    <div id="scrum_prac" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Scrum</h5>
                            <hr />
                            <img src={require('../../img/scrum_prac.png')} alt="scrum_prac" />
                        </div>
                    </div>

                    <div id="xp_prac" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Extreme Programming</h5>
                            <hr />
                            <img src={require('../../img/xp_prac.png')} alt="xp_prac" />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
    
    renderNavbar() {
        return (
            <div className="navbar-fixed">

                <ul id="slide-out" className="side-nav fixed">
                    <li>
                        <div className="userView">
                            <div className="background">
                                <img src={require('../../img/blue_bg.png')} />
                            </div>

                            <a href="#!user"><img /></a>
                            <h5 className="white-text">
                                Team Blue
                            </h5>
                            <a href="#!user"><img /></a>
                            <a href="#!name"><span></span></a>

                        </div>
                    </li>
                    <li><a onClick={() => this.props.selectStats()}>Statistics</a></li>
                    <li><a onClick={() => this.props.selectPractices()}>Practices</a></li>
                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        )



    }

    renderTeams() {
        return (

            <div>
                <Row />
                <Row />
                <Row >
                    <Col m={2} />
                    <Col m={8} >
                        <Col l={4}>
                            {this.renderTeam(1)}
                        </Col>

                        <Col l={4}>
                            {this.renderTeam(2)}
                        </Col>

                        <Col l={4}>
                            {this.renderTeam(3)}
                        </Col>
                    </Col>
                    <Col m={2} />
                </Row>
                <Row />
            </div>

        );
    }

    renderTeam(teamId) {
        return this.props.teams.map((team) => {
            if (teamId === team.id) {
                return (

                    <Card
                        className="team_pic"
                        key={team.id}
                        onClick={() => this.props.selectTeam(team)}
                        header={
                            <CardTitle
                                image={require('../../img/dev_team.png')}
                            >
                            </CardTitle>}
                    >
                        <h5>{team.name}</h5>
                    </Card>

                );
            }
        });
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        view: state.view
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectTeam: selectTeam,
            deselectTeam: deselectTeam,
            selectStats: selectStats,
            selectPractices: selectPractices
        },
        dispatch
    );
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
    mapStateToProps,
    matchDispatchToProps
)(TeamList);