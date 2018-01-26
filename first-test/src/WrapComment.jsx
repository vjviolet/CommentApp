import React, {Component} from 'react';

export default (WrappedWithComment, name) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      let data = localStorage.getItem(name);
      try {
        this.setState({data: JSON.parse(data)});
      } catch(e) {
        this.setState({data});
      }
    }

      saveData(data) {
        try {
          //将data对象解析成字符串
          localStorage.setItem(name, JSON.stringify(data));
        } catch(e) {
          //如果不是对象就当做普通字符串保存
          localStorage.setItem(name, `${data}`);
        }
      }

      render() {
        return(
          <WrappedWithComment 
            data = {this.state.data} 
            saveData = {this.saveData.bind(this)}
            //这里的意思是将其他的参数原封不动的传递给包装的组件
            {...this.props}/>
        );
      }

    }
    return NewComponent;
  
} 