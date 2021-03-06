import React, {Component} from 'react';
import base from '../base';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName : "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.goToBookmarkedBadges = this.goToBookmarkedBadges.bind(this);
    this.goToCompletedBadges = this.goToCompletedBadges.bind(this);
  }
  signUp(e) {
    e.preventDefault();
    console.log(this.props.currentUser.uid);
    // var authHandler = function(error, user) {
      let uid = this.props.currentUser.uid;
      let newUser = {firstName:this.state.firstName, lastName:this.state.lastName, pushId:uid}
      console.log(newUser);
      base.post(`users/${uid}`, {
        data: newUser,
        then(err){
          if (!err){
            console.log(!err);
          }else {
            this.context.router.transitionTo(`/`);
          }
        }
      })
    // }
    //make call to Facebook API
    // base.authWithOAuthPopup('facebook', authHandler.bind(this), {scope: 'public_profile, email'});
  }


  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  goToBookmarkedBadges() {
    this.context.router.transitionTo(`/my-bookmarks`);
  }
  goToCompletedBadges() {
    this.context.router.transitionTo(`/my-completed-badges`);
  }
  render() {
    return(
      <div>
        <form onSubmit={this.signUp}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}></input>
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName}  name="lastName" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <button type="submit" onClick={this.goToBookmarkedBadges}>View Bookmarked Badges</button>
        <button type="submit" onClick={this.goToCompletedBadges}>View Completed Badges</button>
      </div>
    );
  }
}


SignUp.contextTypes = {
  router: React.PropTypes.object
}
export default SignUp;
