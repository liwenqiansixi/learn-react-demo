import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import {getChangeInputAction, getSubmitAction, getRemoveItemAction} from './store/actionCreator';
import store from './store';
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        // 组件去订阅store，只要发生改变subscribt中的函数就会被自动执行
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <Fragment>
                <div style={{marginTop: '10px', marginLeft: '10px'}} value={this.state.inputVal}>
                    <Input 
                        onChange={this.handleChangeInput} 
                        placeholder={this.state.placeHolder} 
                        value={this.state.inputVal}
                        style={{width: '300px', marginRight: '10px'}}/>
                    <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                    <List
                        style={{marginTop: '10px', width: '300px'}}
                        bordered
                        dataSource={this.state.lists}
                        renderItem={(item,index) => (<List.Item onClick={this.handleRemoveItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </Fragment>
        )
    }
    handleChangeInput (e) {
        const action = getChangeInputAction(e.target.value)
        store.dispatch(action)
    }
    handleSubmit () {
        const action = getSubmitAction(store.getState().inputVal)
        store.dispatch(action)
    }
    handleStoreChange () {
        this.setState(store.getState())
    }
    handleRemoveItem (index) {
        const action = getRemoveItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;