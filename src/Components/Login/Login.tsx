import { useEffect, useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLogin(true)
    },1000)
  },[])
  return (
    <>
      <h3>
        {isLogin ? (
          <>
            <div>Start Learning</div>
            <button onClick={() => setIsLogin(false)}>Logout</button>
          </>
        ) : (
          <>
            <div>Now Learn</div>
            <button onClick={() => setIsLogin(true)}>Login</button>
          </>
        )}
      </h3>
    </>
  );
};

export default Login;
