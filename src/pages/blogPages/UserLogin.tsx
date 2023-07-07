import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import { loginUser } from '../../service/userAPI';
import Swal from 'sweetalert2';
import Button from '../../components/Button';

type LoginFormData = {
  email: string;
  password: string;
};

const UserLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginFormData>();
  const [loginError, setLoginError] = useState<string | null>('');
  const navigateTo = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { accessToken, refreshToken } = await loginUser(data.email, data.password);

      // Save the tokens to localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      Swal.fire({
        icon: 'success',
        title: 'Logged In!',
        text: 'You are successfully logged in',
        showConfirmButton: false,
        timer: 1000,
      });

      // Clear form fields
      reset();

      // Redirect to the user's dashboard or any other desired page
      navigateTo('/profile');
    } catch (error: any) {

      if (error.response.status === 400 || error.response.status === 404 || error.response.status === 401) {
        const errorData = error.response.data;
        if (errorData.error) {
          setLoginError(errorData.error);
        } else if (errorData.errors && errorData.errors.length > 0) {
          const errorMessage = errorData.errors[0].msg;
          setLoginError(errorMessage);
        } else {
          setLoginError('Login failed. Please try again.');
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Card header={<h2>LOGIN</h2>}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>
              {loginError && <p className="text-danger">{loginError}</p>}
              <div className="d-flex justify-content-center mt-5">
                <Button type="submit" buttonStyle="btn btn-success btn-block">
                  LOGIN
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
