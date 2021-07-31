import React from 'react'
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

const Body = () => {
    return (
        <section className="bg-white px-10 md:px-0">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                <div className="flex item-center justify-between pb-5">
                    <h2 className="font-medium flex-grow">My Documents</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon name="folder" size="3xl" color="gray" />
                </div>
            </div>
        </section>
    )
}

export default Body
