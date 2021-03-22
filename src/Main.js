import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


export default function Main() {
    let history = useHistory();
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [listUser, setListUser] = useState([])

    const submit = () => {
        let obj = {
            name,
            age
        }
        setName('')
        setAge(0)
        let newList = listUser
        newList.push(obj)
        setListUser([...newList])
    }

    const changeName = (event) => setName(event.target.value)
    const addAge = () => setAge(age + 1)
    const minusAge = () => setAge(age - 1)

    const remove = (index) => {

    }

    const changeColor = (index) => {
        let newList = listUser
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
        newList[index].r = r
        newList[index].g = g
        newList[index].b = b
        setListUser([...newList])
    }

    const renderItem = (item, index) => {
        return <li key={index}
            style={{ color: `rgb(${item.r},${item.g},${item.b})` }}
        >Người thứ {index + 1}, có tên: {item.name}, tuổi {item.age}
            <button onClick={() => remove(index)}>Remove</button>
            <button onClick={() => changeColor(index)}>Change</button></li>
    }
    return (
        <div>
            Hello {name},
            Age {age}
            <br />
            <input type='text' value={name} onChange={changeName} />
            <button onClick={addAge} >Add</button>
            <button onClick={minusAge}>Minus</button>
            <button onClick={submit} >Submit</button>
            <ul>
                {listUser.map(renderItem)}
            </ul>
        </div>
    )
}
// THêm 1 nút edit vào từng thẻ li
// khi bấm edit thì hiện tên tuổi lên trên ô nhập
// nút submit thành nút edit, xuất hiện thêm nút cancel
// bấm cancel thì nút edit lại trở thành nút submit, nút cancel mất đi
//bấm edit thì edit data, giữ nguyên thứ tự
