import "./reset.scss";
import { useNavigate } from "react-router-dom";
import zxcvbn from 'zxcvbn';
import { useState } from "react";
import reset_img from "../../assets/gymnast_3.png"

const Reset = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState('');
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordStrength(zxcvbn(newPassword).score);

    // Check for password strength and set error message if needed
    if (passwordStrength < 3) {
      setPasswordError('Password is too weak.');
    } else {
      setPasswordError('');
    }
  };
    const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = ()=>{
      localStorage.clear();
      navigate('/back');
  }
  return (
    <div className="reset2">
<div class="reset_wrapper">
  <div class="reset_form_wrapper">
   

    <div class="form_ele form_resetpwd">
      <div class="img_section">
        <img src={reset_img} alt="gymnast"/>
      </div>
      <form class="reset1">
        <div class="title_reset">
          <p>Change Password</p>
        </div>
        <div class="form_grp_reset">
          <div class="form_head_reset">
            <div class="form_item_reset">
              <div class="label_rest">
                <p>Enter your new password and we will change your password after confirmation.</p>
              </div>
              <div class="input_item_reset">
                <input type="password" id="password-input"
        value={password}
        onChange={handlePasswordChange} class="input" placeholder="enter New password"/>
              {passwordStrength > 0 && (
        <div>Password strength: {passwordStrength}/4</div>
      )}
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              </div>
              
              <div class="label_rest">
                <p>Enter your old password and confirm new password for reset new password</p>
              </div>
              <div class="input_item_reset">
                <input type="text" class="input" placeholder="enter old password"/>
              </div>
            
              <input type="password" id="password-input"
        value={password}
        onChange={handlePasswordChange} class="input" placeholder="confirm New password"/>
              {passwordStrength > 0 && (
        <div>Password strength: {passwordStrength}/4</div>
      )}
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
            </div>
            <div class="form_info_reset">
              <p>Return to the <a onClick={logout}>Log in</a></p>
            </div>
          </div>
          <div class="btn_item_reset">
            <button class="r_button">Reset Password</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


    </div>
  );
};

export default Reset;
