import React, { useState, useEffect } from "react";
import { getEventApi } from "../services/allApi";
import { BASE_URL } from "../services/baseurl";
import EventModal from "./EventModal";

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    eventCategory: "",
    posterPath: ""
  });

  const getEventitems = async () => {
    const result = await getEventApi();
    setEvents(result.data); // Assuming result.data is an array of event objects
  };

  useEffect(() => {
    getEventitems();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add the new event to the events array (or make an API call to save it)
    setEvents([...events, newEvent]);
    toggleModal(); // Close the modal after submission
  };

  const highlightText = (text) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Events</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search events..."
            className="bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Event
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">SL No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Poster</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Event Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Venue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={event._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <img
                    src={`${BASE_URL}/uploads/event-posters/${event.posterPath}`}
                    alt={`${event.eventName} poster`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {highlightText(event.eventName)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{event.eventDescription}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(event.eventDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{event.eventTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{event.eventVenue}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{event.eventCategory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EventModal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          newEvent={newEvent}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default EventTable;
