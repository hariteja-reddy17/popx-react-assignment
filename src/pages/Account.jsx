import "../styles/Account.css";

function Account() {
  return (
    <div className="mobile-container account-page">
      <div className="account-header">Account Settings</div>

      <div className="account-content">
        <div className="account-profile">
          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="profile-image"
            />

            <div className="camera-icon">📷</div>
          </div>

          <div className="profile-details">
            <h3 className="profile-name">Marry Doe</h3>
            <div className="profile-email">Marry@gmail.com</div>
          </div>
        </div>

        <div className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          Sed Diam
        </div>
      </div>

      <div className="account-empty"></div>
    </div>
  );
}

export default Account;
