import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { appConstants } from '../../../constans';
import { LOG_IN } from '../../../graphql/queries';
import { useQuery, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

const { navigation } = appConstants;

function SinginPage() {
    let history = useHistory();
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers ] = useState<{ username: string, password: string}>({ username: '', password: ''});
    const { error, loading, data } = useQuery(LOG_IN,
        {
            variables : {username : users.username,
                password: users.password}
        });

    useEffect(() => {
        if (data) {
            localStorage.setItem('ACCESS_TOKEN', data.login.accessToken);
            setIsLogin(true);
        }
    }, [data]);

    const navigateToAllCandidates  = () => {
        if(isLogin){
            history.push(navigation.allCandidatesPage);
        }
    };



    return(
        <div className='max-w-sm w-full mx-auto px-4 sm:p-0'>
            <div className='mt-28 font-medium text-2xl leading-tight text-gray-600'>Sign in</div>
            <form className='text-left'>
                <label className='text-base leading-tight text-gray-600'>Enter your email</label>
                <input className='mb-5 w-full px-3 py-3'
                       name="email"
                       type="name"
                       autoComplete="name"
                       required placeholder='example@mail.com'
                       onChange={(e) => setUsers({...users, username: e.target.value})} />
                <label className='text-base leading-tight text-gray-600'>Password</label>
                <div className='relative'>
                    <input className='mb-5 w-full px-3 py-3'
                           name="password"
                           type={showPassword? 'text' : "password"}
                           autoComplete="password"
                           required placeholder='Password'
                           onChange={(e) =>
                               setUsers({
                                   ...users,
                                   password: e.target.value
                               })
                           }

                    />
                    <button type='button'
                            title={`${showPassword? 'Hide' : 'Show'} password`}
                            className='absolute right-3 top-2.5 bg-transparent hover:bg-transparent p-0'
                            onMouseUp={() => setShowPassword(false)}
                            onMouseDown={() => setShowPassword(true)}>

                    </button>
                </div>
                <button className='shadow-md mb-5 w-full' type='submit' onClick={navigateToAllCandidates} >Sign in</button>
            </form>

            <div className='flex justify-between normal items-baseline'>
                <p>Forgot password?</p>
                <Link className="font-medium text-theme transition delay-50 hover:text-theme-hover " to={navigation.resPass}>Reset password</Link>
            </div>
            <div className='flex justify-between normal items-baseline mt-2'>
                <p>Not a member yet?</p>
                <Link className="font-medium text-theme transition delay-50 hover:text-theme-hover " to={navigation.singup}>Join now</Link>
            </div>
        </div>
    );
}

export default SinginPage;