import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getEventApi } from "../services/allApi";

function Home() {
    const [event, setEvent] = useState([]);
    const [categories, setCategories] = useState([]);

    const getEventitems = async () => {
        const result = await getEventApi();
        console.log(result);
        setEvent(result.data);
    };

    useEffect(() => {
        getEventitems();
    }, []);

    useEffect(() => {
        if (event.length > 0) {
            const uniqueCategories = [...new Set(event.map((e) => e.eventCategory))];
            setCategories(uniqueCategories);
        }
    }, [event]);

    return (
        <>
            <Header />
            <div className='text-white'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold p-2'>
                        Explore. Engage. Excel!
                    </p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        Celebrating the Power
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                            Connect, Create, Collaborate!
                        </p>
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>
                        Fueling Curiosity and Shaping Innovation for the Future!
                    </p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='w-full bg-white py-16 px-4'>
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <div key={index}>
                            <h1 className="text-[#00df9a] text-5xl text-center mb-8">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h1>
                            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                                <Cards category={category} events={event} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No categories available.</p>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Home;
