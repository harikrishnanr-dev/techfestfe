import React, { useState } from 'react';

const ParticipantsTable = () => {
  const [participants] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", event: "Tech Conference", status: "Confirmed" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", event: "Annual Meetup", status: "Pending" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", event: "Developer Workshop", status: "Confirmed" },
  ]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Participants</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {participants.map((participant) => (
              <tr key={participant.id}>
                <td className="px-6 py-4 whitespace-nowrap">{participant.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{participant.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{participant.event}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${participant.status === 'Confirmed' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    {participant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <button className="text-blue-600 hover:text-blue-500 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsTable;
