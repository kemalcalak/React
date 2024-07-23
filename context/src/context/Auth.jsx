import { useContext } from "react";
import AuthContext from "../context/auth-context";


function Auth() {
    const {status,login} =useContext(AuthContext);
    return ( 
        <div>
            <h1>Giriş yaptın mı?</h1>
            {status ? <p>Evet</p> : <p>Hayır</p>}
            <button onClick={login}>Giriş Yap</button>
        </div>
     );
}

export default Auth;