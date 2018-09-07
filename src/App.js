import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const LineChart = ({ data }) =>
  <C3Chart data={{ json: data }} />;

const dataA = {
  data1: [30, 20, 50, 40, 60, 50],
  data2: [200, 130, 90, 240, 130, 220],
  data3: [300, 200, 160, 400, 250, 250]
}

const dataB = {
  data1: [30, 200, 100, 400, 150, 250],
  data2: [130, 100, 140, 200, 150, 50]
}

class App extends Component {
  state = {
    data: dataA
  }

  changeData = () => {
    this.setState({ data: this.state.data === dataA ? dataB : dataA })
  }

  render() {
    return (
      <section class="hero is-success is-fullheight">
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
            </a>
                  <a class="navbar-item">
                    Examples
            </a>
                  <a class="navbar-item">
                    Documentation
            </a>
                  <span class="navbar-item">
                    <a class="button is-success is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="hero-body">
          <section className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <LineChart data={this.state.data} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <button className="button is-fullwidth" onClick={this.changeData}>Other data</button>
              </div>
            </div>
          </section>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default App;
