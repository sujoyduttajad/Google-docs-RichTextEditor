import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center px-8 py-2 shadow-md bg-white">
            <Button
                color='blue'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" />
            </Button>
            <Icon name="description" size="5xl" color="blue" />
            <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl mx-2">Docs</h1>

            <div className="flex flex-grow items-center p-5 py-2 bg-gray-100 
            mx-5 md:mx-20 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="darkgray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button
                color='gray'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className=" md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" />
            </Button>

            <img
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src="https://lh3.googleusercontent.com/-LFXiL6jSAXU/WvY7H3c10pI/AAAAAAAAAjs/ChFr0JdTTD8KPwdp0SutGd4bGxcxw-_gwCEwYBhgLKtMDABHVOhxzzy0d76X8tPbaolaRW2OWxP-5vIiVoq8rlyo9iQ4yqu3SQippK0GSQ4KhPquJm_gIW0RmdBeVTmT-JXVY1Lxv8tZvYW_aanh-oNf-H5EiH52uYmJYxoqHdjrX_GdvB1iUWhcIeISbzGz93UwDBwLbVdlOxU5scCPFl3DRXsjORsJUGe0M0AipvtXO9rCRgYuBEqXwuuM8p-nYZvRhUxug5wbdDw6eVQMSO0StBRrYUcst8yucdE7nUd-KWew5Qs5Qn_f_8iwsoC3LSWlvHTHBgYXeeFBeEhEaOPBs1eZUQrxl104WdPXMt8mcCkDh-lgyS2nYBnNCynMQmzHQh6CHwdfi8yj0R15O3ecz_5K8Ylqeccsfknc-BjBYh4fRw4EwJkGLLox0PqZDy7HHkK5JxO9zZOHdro2xDyD6HjoBuky3i4FB7zmLdzAdIZ6iTpI7-AJ78uWKwPQWFjfpIdkEb_4M4-IEJT8f1yEuNWysYxD-Pu201Zvn6OXfqZVMh2uILAkugz4nJOQK-WpC65Jq_oy0Q96DNbEd8YAe8USSraw6OCTCVp1NXuuwVeG8jBJbdEpcG7mJNjessDMxZ7bPKdksn4NpR6SEOQcgx3Aw_feEiAY/w140-h140-p/1cc3b04d-4e86-463e-8630-ce661c29889c"
                alt="profile picture"
            />
        </header>
    )
}

export default Header
