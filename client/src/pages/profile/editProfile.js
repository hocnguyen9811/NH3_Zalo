import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from './globalTypes'
// import { updateProfileUser } from '../../redux/actions/profileAction'
export const updateProfileUser = ({userData, avatar}) => async (dispatch) => {
    if(!userData.username)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add your full name."}})

    if(userData.username.length > 25)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your full name too long."}})

    if(userData.city.length > 200)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your story too long."}})

}

const EditProfile = ({setOnEdit}) => {
    const initState = {
        username: '', city: '', from: '', relationship: ''
    }
    const [userData, setUserData] = useState(initState)
    const { username, city, from, relationship } = userData

    const [avatar, setAvatar] = useState('')

    // const { auth, theme } = useSelector(state => state)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     setUserData(auth.user)
    // }, [auth.user])




    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        (updateProfileUser({userData}))
    }

    return (
        <div className="edit_profile">
           

            <form onSubmit={handleSubmit}>
                {/* <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} 
                    alt="avatar" style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                        accept="image/*" onChange={changeAvatar} />
                    </span>
                </div> */}

                <div className="form-group">
                    <label htmlFor="username">username </label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="username"
                        name="username" value={username} onChange={handleInput} />
                        {/* <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {username.length}/25
                        </small> */}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="city">Địa chỉ</label><br></br>
                    <input type="text" name="city" value={city}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="from">Giới tính</label>
                    <br></br>
                    <input type="text" name="from" value={from}
                    className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="relationship">Ngày sinh</label>
                    <br></br>
                    <input type="text" name="relationship" value={relationship}
                    className="form-control" onChange={handleInput} />
                </div>
<br></br>
                <button className="btn btn-info w-100" type="submit">Save</button>
                <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>
            </form>
        </div>
    )
}

export default EditProfile
