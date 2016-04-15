import React from 'react';
import AccountsUIWrapper from '../login/AccountsUIWrapper.jsx';

export class Header extends React.Component {


  channelHeader() {
      return (
        <div className="nav-inner flex-box">
          <div className="nav-left">
            <a href="#" className="nav-icon"><i className="material-icons md-light">arrow_back</i></a>
          </div>

          <div className="nav-middle flex-item">
            <div className="middle-text">{this.props.title}</div>
          </div>

          <div className="nav-right">
              <AccountsUIWrapper/>
          </div>
        </div>
      )
    }
  render(){
    return (
      <div className="mobile-nav navbar-fixed-top">
        {  this.channelHeader()  }
      </div>
    )

  }

}
