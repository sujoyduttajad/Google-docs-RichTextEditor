import React from 'react'
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

const Body = () => {
    return (
        <section>
            <div className="max-w-3xl mx-auto py-8">
                <div>
                    <h2>My Documents</h2>
                    <p>Date Created</p>
                    <Icon name="folder" size="3xl" color="gray" />
                </div>
            </div>
        </section>
    )
}

export default Body
