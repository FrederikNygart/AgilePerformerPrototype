import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TeamList from '../containers/team_list';
import TeamSite from '../containers/team_site';
import { selectUser } from '../actions/user_actions';
import { Button, Row, Col, Icon, Navbar, NavItem } from 'react-materialize';
require('../../scss/style.scss');


class App extends Component {

    render() {
        if (!this.props.user) {
            return (
                <div>
                    <Navbar className="blue darken-3">
                        <a href="#" className="brand-logo">Logo</a>
                        <NavItem className="right" onClick={() => this.props.selectUser()}>
                            <Icon>more_vert</Icon>
                        </NavItem>
                    </Navbar>
                    <TeamList></TeamList>
                </div>
            );
        } if(this.props.user){
            return (
                <div>
                    <Navbar className="blue darken-3">
                        <a href="#" className="brand-logo">Logo</a>
                        <NavItem className="right" onClick={() => this.props.selectUser()}>
                            <Icon>more_vert</Icon>
                        </NavItem>
                    </Navbar>
                    <TeamSite> </TeamSite>
                </div>
            );
        }
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectUser: selectUser
        },
        dispatch
    );
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
    mapStateToProps,
    matchDispatchToProps
)(App);