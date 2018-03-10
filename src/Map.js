import React, { Component } from 'react';
// import EchartsCore from 'echarts-for-react/lib/core';
// import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china';
import ReactEcharts from 'echarts-for-react';
import './Map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  getInitialState = () => ({option: this.getOption()});

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(() => {
      const option = this.state.option;
      const r = new Date().getSeconds();
      option.title.text = '全图' + r;
      option.series[0].name = '全图' + r;
      option.series[0].data[0].value = r * 50;
      this.setState({ option: option });
    }, 1000);
  };
  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  };
  randomData() {
    return Math.round(Math.random()*1000);
  };
  getOption = () => {
    return {
      title: {
        text: '全图',
        subtext: '即刻影迷会的一年',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        show: false
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],       // 文本，默认为数值文本
        calculable: false,
        show: false
      },
      toolbox: {
        show: false
      },
      series: [
        {
          name: '泡泡数',
          type: 'map',
          mapType: 'china',
          roam: false,
          silent: false,
          itemStyle:{
            emphasis:{label:{show:true}}
          },
          left: 5,
          top: 10,
          right: 10,
          data:[
            {name: '新疆',value: this.randomData() },
            {name: '北京',value: this.randomData() },
            // {name: '天津',value: this.randomData() },
            // {name: '上海',value: this.randomData() },
            // {name: '重庆',value: this.randomData() },
            // {name: '河北',value: this.randomData() },
            // {name: '河南',value: this.randomData() },
            // {name: '云南',value: this.randomData() },
            // {name: '辽宁',value: this.randomData() },
            // {name: '黑龙江',value: this.randomData() },
            // {name: '湖南',value: this.randomData() },
            // {name: '安徽',value: this.randomData() },
            // {name: '山东',value: this.randomData() },
            // {name: '江苏',value: this.randomData() },
            // {name: '浙江',value: this.randomData() },
            // {name: '江西',value: this.randomData() },
            // {name: '湖北',value: this.randomData() },
            // {name: '广西',value: this.randomData() },
            // {name: '甘肃',value: this.randomData() },
            // {name: '山西',value: this.randomData() },
            // {name: '内蒙古',value: this.randomData() },
            // {name: '陕西',value: this.randomData() },
            // {name: '吉林',value: this.randomData() },
            // {name: '福建',value: this.randomData() },
            // {name: '贵州',value: this.randomData() },
            // {name: '广东',value: this.randomData() },
            // {name: '青海',value: this.randomData() },
            // {name: '西藏',value: this.randomData() },
            // {name: '四川',value: this.randomData() },
            // {name: '宁夏',value: this.randomData() },
            // {name: '海南',value: this.randomData() },
            // {name: '台湾',value: this.randomData() },
            // {name: '香港',value: this.randomData() },
            {name: '澳门',value: this.randomData() }
          ]
        }
      ]
    };
  };
  render() {
    return (
      <div className="map">
        <ReactEcharts
            option={this.state.option}
            style={{height: '100vh', width: '100%'}}
            className='react_for_echarts' />
      </div>
    );
  };
}

export default Map;