import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        cname: "default cname"
    }
    static propTypes = {
        cname: PropTypes.string, //name props 타입을 문자열로 설정'
        age: PropTypes.number.isRequired, //필수적으로 존재해야만 하며, 숫자이다.
    }
    state = {
        number: 0
    }
    /*constructor(props) {
        super(props);
        this.state = {
          number: 0
        }
    }*/
    render() {
        return (
            <div>
                My Component!! <br/>
                this.props.cname : {this.props.cname}  <br/>
                this.props.age: {this.props.age} <br/>
                this.state.number : {this.state.number}
                <div //props 에 접근할 때는 this 키워드 사용한다.}
                />
                {
                    // 이벤트 사용시 주의사항
                    // 1. 이벤트 이름은 camelCase로 작성해야 한다.
                    // 2. 함수 형태의 값을 전달해야 한다.
                    // 3. DOM 요소에만 이벤트를 설정 할 수 있다.
                }
                <button onClick={()=> {
                    this.setState({ 
                        // setState 로 업데이트 하지 않고, 그냥 state 값을 변경하면 컴포넌트가 리렌더링하도록 트리거 하지 않으므로, 
                        // state 를 업데이트 할 때는 꼭 setState 를 사용하여 값을 수정해야 한다.
                        // 물론, this.forceUpdate() 메서드를 호출하여 강제로 리렌더링을 시작할 수 있으나, 매우 비효율 적이므로 피할 것.
                        number: this.state.number + 1
                    })
                }}>plus</button>
            </div>
        )
    }
}

MyComponent.PropTypes = {
    cname: PropTypes.string // name props 타입을 문자열로 설정.
}

//MyComponent.defaultProps = {
//    cname: 'default cname'
//}
export default MyComponent; //모듈 내보내기 (export)
