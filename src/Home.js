import React, { Component, useState, useEffect } from "react";
 


class Home extends Component {
    _renderCounter = () => () => {
        const [currentTime, setCurrentTime] = useState(0);

        useEffect(() => {
            fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
          });
        }, []);
        return <div>{ currentTime }</div>
      }
    render() {
        const MyInLineHook = this._renderCounter()
        return (
            <div>
              <h2>Flask Example using proxy: </h2>
              <MyInLineHook />
              </div>
        );
    }
}
 
export default Home;