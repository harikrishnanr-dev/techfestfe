import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Cards({ category, isLoggedIn }) {
    const navigate = useNavigate();

    // Centralize event data here
    const eventsData = [
        {
            title: "3D Printing Workshop",
            price: "Free",
            description: "Join us for a hands-on workshop on 3D printing techniques and applications.",
            image: "https://cdn.pixabay.com/photo/2020/06/04/17/06/3d-printer-5262832_960_720.jpg",
            category: "workshop",
        },
        {
            title: "Annual Coding Competition",
            price: "$20.00",
            description: "Show your skills and compete for exciting prizes!",
            image: "https://cdn.pixabay.com/photo/2017/03/02/07/07/computer-2119294_960_720.jpg",
            category: "competition",
        },
        {
            title: "Tech Event 2024",
            price: "Free",
            description: "Join us for a day of networking and learning about the latest in technology.",
            image: "https://cdn.pixabay.com/photo/2016/11/29/04/16/laptop-1861777_960_720.jpg",
            category: "event",
        },
        // Add more items as needed
    ];

    // Filter data based on the passed category
    const filteredData = eventsData.filter(event => event.category === category);

    // Display a message if no events are found for the category
    if (filteredData.length === 0) {
        return (
            <Typography variant="h6" color="blue-gray" className="text-center mt-4">
                No events available in this category.
            </Typography>
        );
    }

    return (
        <>
            {filteredData.map((card, index) => (
                <Card key={index} className="w-full">
                    <CardHeader shadow={false} floated={false} className="h-72 sm:h-80 md:h-96">
                        <img
                            src={card.image}
                            alt={`${card.title} Image`}
                            className="h-full w-full object-cover"
                            style={{ objectFit: 'cover' }}
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">{card.title}</Typography>
                            <Typography color="blue-gray" className="font-medium">{card.price}</Typography>
                        </div>
                        <Typography variant="small" color="gray" className="font-normal opacity-75">
                            {card.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        {isLoggedIn ? (
                            <Button ripple={false} fullWidth className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none">
                                Register Event
                            </Button>
                        ) : (
                            <Button
                                ripple={false}
                                fullWidth
                                className="bg-red-500 text-white shadow-none hover:scale-105 hover:shadow-none"
                                onClick={() => navigate("/login")}
                            >
                                Login to Register
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
