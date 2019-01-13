import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }
    /*
    constructor(props) {
        super(props);
        // 컴포넌트에 임의 메서드를 만들면 기본적으로는 this에 접근할 수 없다.
        // 따라서 컴포넌트의 생성자 메서드에서 각 메서드를 this와 바인딩 해 주어야 한다.
        // 이 작업을 하지 않으면, this를 부를 때 undefined가 리턴됨.
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    */

    // Property Initializer Syntax 사용한 메서드 작성
    // = 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것.
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
           // message: e.target.value
        });
    }
    handleClick = (e) => {
        alert(this.state.message+" : "+this.state.username);
        this.setState({
            message: '',
            username: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>event practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="input text"
                    value={this.state.message}
                    onChange={
                        this.handleChange
                        /* (e) => {
                            this.setState({
                                message: e.target.value
                            })
                            // e 객체는, SyntheticEvent 로, 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                            console.log(e.target.value);
                        } */
                    }
                />
                 <input
                    type="text"
                    name="username"
                    placeholder="input username"
                    value={this.state.username}
                    onChange={
                        this.handleChange
                    }
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={
                    this.handleClick
                    /* () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        }); 
                    } */
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;