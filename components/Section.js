import React from 'react';
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Image from 'next/image'

const Section = () => {
    return (
        <section className="bg-gray-100 pb-10 px-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between py-6">
                    <h2 className="text-gray-700 text-lg font-bold">Start a new document</h2>

                    <Button
                        color="gray"
                        buttonType="outline"
                        iconOnly={true}
                        rounded={true}
                        ripple="dark"
                        className="border-0"
                    >
                        <Icon name="more_vert" size="3xl" />
                    </Button>
                </div>
                <div>
                    <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                        <Image src="https://links.papareact.com/pju" layout="fill" />
                    </div>

                    <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
                </div>
            </div>
        </section>
    )
}

export default Section
