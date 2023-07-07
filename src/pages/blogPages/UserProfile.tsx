import { useEffect, useState } from 'react';
import { getUserProfile } from '../../service/userAPI';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';

interface UserProfileData {
  id: string;
  name: string;
  email: string;
  // Add other properties from the user profile
}

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          const response = await getUserProfile(accessToken);
          setUserProfile(response.user);
        } else {
          //if token invalid
          navigateTo('/login');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateClick = () => {
    // navigateTo(`/profileupdate/${id}`);
    console.log('click update')
  };

  const handleDeleteClick = () => {
    // navigateTo(`/profileupdate/${id}`);
    console.log('click delete')
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {userProfile && (
              <Card header={<h2>{userProfile.name}</h2>}>
                <p>Email: {userProfile.email}</p>
                <p>Welcome </p>
                <div className="row justify-content-center mt-3">
                  <div className="col-md-6">
                    <Button
                      buttonStyle={'btn btn-outline-warning btn-block'}
                      onClick={() => handleUpdateClick()}
                    >
                      UPDATE
                    </Button>

                  </div>
                  <div className="col-md-6">
                    <Button
                      buttonStyle={'btn btn-outline-danger btn-block'}
                      onClick={() => handleDeleteClick()}
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
