import React, { useState } from "react";
import { toast } from "react-toastify"; // Importing toast for notifications
import { createEventApi } from "../services/allApi";

function EventFormModal({ isOpen, toggleModal }) {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    eventCategory: "",
    registrationDeadline: "", // Add the registrationDeadline field here
    posterPath: null, // File field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { eventName, eventDescription, eventDate, eventTime, eventVenue, eventCategory, registrationDeadline, posterPath } = eventData;
    
    // Check if all fields are filled
    if (!eventName || !eventDescription || !eventDate || !eventTime || !eventVenue || !eventCategory || !registrationDeadline || !posterPath) {
      toast.error("Please fill the form completely.");
      return;
    }

    // Creating FormData for file upload
    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("eventDescription", eventDescription);
    formData.append("eventCategory", eventCategory);
    formData.append("registrationDeadline", registrationDeadline);
    formData.append("eventDate", eventDate);
    formData.append("eventTime", eventTime);
    formData.append("eventVenue", eventVenue);
    formData.append("poster", posterPath);

    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      // 'Authorization': `Bearer ${token}` // If your API requires an authorization token
    };

    try {
      const result = await createEventApi(formData, reqHeader);
      console.log(result);  // Log the result to check the response
      if (result.status === 201)  {
        toast.success("Event created successfully!");
      toggleModal()
      } else {
        toast.error(result.message || "Failed to create event. Please try again.");
      }
    } catch (error) {
      console.error("Error creating event:", error);  // Log detailed error
      toast.error("An error occurred. Please try again later.");
    }
    
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto">
            <span className="text-lg font-semibold mb-4">Create New Event</span>

            <form onSubmit={handleSubmit}>
              {/* Event Name */}
              <div className="py-2">
                <label className="block text-sm mb-1">Event Name</label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  value={eventData.eventName}
                  onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}
                />
              </div>

              {/* Event Date & Time (Side by Side) */}
              <div className="flex gap-4">
                <div className="py-2 w-1/2">
                  <label className="block text-sm mb-1">Event Date</label>
                  <input
                    type="date"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    value={eventData.eventDate}
                    onChange={(e) => setEventData({ ...eventData, eventDate: e.target.value })}
                  />
                </div>

                <div className="py-2 w-1/2">
                  <label className="block text-sm mb-1">Event Time</label>
                  <input
                    type="time"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    value={eventData.eventTime}
                    onChange={(e) => setEventData({ ...eventData, eventTime: e.target.value })}
                  />
                </div>
              </div>

              {/* Event Venue & Category (Side by Side) */}
              <div className="flex gap-4">
                <div className="py-2 w-1/2">
                  <label className="block text-sm mb-1">Event Venue</label>
                  <input
                    type="text"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    value={eventData.eventVenue}
                    onChange={(e) => setEventData({ ...eventData, eventVenue: e.target.value })}
                  />
                </div>

                <div className="py-2 w-1/2">
                  <label className="block text-sm mb-1">Event Category</label>
                  <input
                    type="text"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    value={eventData.eventCategory}
                    onChange={(e) => setEventData({ ...eventData, eventCategory: e.target.value })}
                  />
                </div>
              </div>

              {/* Event Description */}
              <div className="py-2">
                <label className="block text-sm mb-1">Event Description</label>
                <textarea
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  rows="3"
                  value={eventData.eventDescription}
                  onChange={(e) => setEventData({ ...eventData, eventDescription: e.target.value })}
                />
              </div>

              {/* Registration Deadline */}
              <div className="py-2">
                <label className="block text-sm mb-1">Registration Deadline</label>
                <input
                  type="date"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  value={eventData.registrationDeadline}
                  onChange={(e) => setEventData({ ...eventData, registrationDeadline: e.target.value })}
                />
              </div>

              {/* Poster Path (File Upload) */}
              <div className="py-2">
                <label className="block text-sm mb-1">Poster</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  onChange={(e) => setEventData({ ...eventData, posterPath: e.target.files[0] })}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end items-center py-4 space-x-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-white text-black border border-gray-300 hover:text-white text-sm p-2 rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white text-sm p-2 rounded-lg hover:bg-green-800 hover:border hover:border-gray-300"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EventFormModal;
