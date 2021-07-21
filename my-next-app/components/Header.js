import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <div className="flex items-center">
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
        </div>
    )
}

export default Header
