import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectStats, selectPractices } from '../actions/view_actions';

class TeamSite extends Component {
    render() {
        if (this.props.view === "stats") {
            return (
                <div>
                    {this.renderNavbar()}
                    {this.renderStats()}
                </div>
            );
        } if (this.props.view === "practices") {
            return (
                <div>
                    {this.renderNavbar()}
                    {this.renderPractices()}
                </div>
            );
        }
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
                    <li><a onClick={() => this.props.selectStats()}>Team Stats</a></li>
                    <li><a onClick={() => this.props.selectPractices()}>Agile Practices</a></li>
                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        );
    }

    renderStats() {
        return (
            <div className="row">
                <div className="col s12 m12 l12">

                    <div id="happiness_team" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Happiness Index</h5>
                            <hr />
                            <img src={require('../../img/hapiness_team.png')} alt="happiness_team" />
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

                    <div id="scrum_team" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Scrum</h5>
                            <hr />
                            <img src={require('../../img/scrum_team.png')} alt="scrum_prac" />
                        </div>
                    </div>

                    <div id="xp_team" className="section scrollspy">
                        <div className="display_pic">
                            <h5 className="display_header">Extreme Programming</h5>
                            <hr />
                            <img src={require('../../img/xp_team.png')} alt="xp_team" />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        view: state.view
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
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
)(TeamSite);