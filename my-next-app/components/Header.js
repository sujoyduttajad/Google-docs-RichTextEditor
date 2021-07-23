import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center px-8 py-2 shadow-md bg-white">
            <Button
                color='blue'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-10 w-10 border-0 px-2"
            >
                <Icon name="menu" size="2xl" />
            </Button>
            <Icon name="description" size="5xl" color="blue" />
            <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl mx-2">Docs</h1>

            <div className="flex flex-grow items-center p-5 py-2 bg-gray-100 m-2">
                <Icon name="search" size="3xl" color="darkgray" />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Header
