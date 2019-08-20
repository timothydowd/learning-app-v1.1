import React, { Component } from "react";
import { Link } from "@reach/router";


export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
        
          <div className="topnav">
            <Link to ='/'>Home</Link>
            <Link to ='antonyms_study'>Antonyms Study</Link> 
            <Link to ='synonyms_study'>Synonyms Study</Link>
            <Link to ='antonyms_test'>Antonyms Test</Link>
            <Link to ='synonyms_test'>Synonyms Test</Link>
            <div className="topnav-right">
                <Link to ='sign_in'>Sign In</Link>{" "}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
