import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
// 无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }} value={props.inputVal}>
            <Input
                onChange={props.handleChangeInput}
                placeholder={props.placeHolder}
                value={props.inputVal}
                style={{ width: '300px', marginRight: '10px' }} />
            <Button type="primary" onClick={props.handleSubmit}>提交</Button>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.lists}
                renderItem={(item, index) => (<List.Item onClick={()=>{props.handleRemoveItem(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI;