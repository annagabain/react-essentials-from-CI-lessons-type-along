import React from 'react'

function UserMessage(props) {
    return (
        <div>
            <p>UserMessage:</p>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>

                    </div>

                ) : (
                    <div>
                        <p>Please log in</p>
                    </div>
                )}
        </div>
    )
}

export default UserMessage