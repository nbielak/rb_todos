import React from 'react';

const userInfo = ({user}) => {
    return (
        <div className="user-info">
            <div className="name-wrapper">
                <h3>{user.name}</h3>
            </div>
            <div className="personal-info">
                <div>
                <div>
                    <h5>Contact</h5>
                    <div className="contact-info-wrapper">
                        <div>Email:</div> 
                        <div>{user.email}</div>
                    </div>
                    <div className="contact-info-wrapper">
                        <div>Phone:</div> 
                        <div>{user.phone.split(" ")[0]}</div>
                    </div>
                    <div className="contact-info-wrapper">
                        <div>Website:</div> 
                        <div>{user.website}</div>
                    </div>
                </div>
            </div>
            
            <div>
                <h5>Address</h5>
                <div>{user.address.street}, {user.address.suite}</div>
                <div>{user.address.city}, {user.address.zipcode}</div>
            </div>
            <div>
                <h5>Company</h5>
                <div>{user.company.name}</div>
                <div className="transform">"{user.company.catchPhrase}"</div>
                <div className="transform">{user.company.bs}</div>
            </div>
            
            </div>
        </div>
    )
}

export default userInfo