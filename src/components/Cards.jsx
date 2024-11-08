import React from "react";
import { BASE_URL } from "../services/baseurl";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Cards({ category, events, isLoggedIn }) {
    const navigate = useNavigate();

    // Filter events based on the passed category
    const filteredEvents = events.filter(event => event.eventCategory === category);

    // Display a message if no events are found for the category
    if (filteredEvents.length === 0) {
        return (
            <Typography variant="h6" color="blue-gray" className="text-center mt-4">
                No events available in this category.
            </Typography>
        );
    }

    return (
        <>
            {filteredEvents.map((event, index) => (
                <Card key={index} className="w-full">
                    <CardHeader shadow={false} floated={false} className="h-72 sm:h-80 md:h-96">
                        <img src={`${BASE_URL}/uploads/event-posters/${event.posterPath}`}
                            alt={`${event.eventName} Image`}
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">{event.eventName}</Typography>
                            <Typography color="blue-gray" className="font-medium">{event.eventTime}</Typography>
                        </div>
                        <Typography variant="small" color="gray" className="font-normal opacity-75">
                            {event.eventDescription}
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
