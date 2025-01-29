import React, { useState } from "react";

const ManagementDashboard: React.FC = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDetails: "",
    itemId: "",
    newOwner: "",
    stateItemId: "",
    itemState: "Created",
    itemLocation: "",
    viewItemId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    if (type === "create") {
      alert(`Item Created: ${formData.itemName}, Details: ${formData.itemDetails}`);
    } else if (type === "transfer") {
      alert(`Ownership Transferred: Item ID ${formData.itemId}, New Owner ${formData.newOwner}`);
    } else if (type === "update") {
      alert(
        `State Updated: Item ID ${formData.stateItemId}, State ${formData.itemState}, Location ${formData.itemLocation}`
      );
    } else if (type === "view") {
      // Mock data for demonstration purposes
      const mockData = {
        id: formData.viewItemId,
        name: "Sample Item",
        state: "Shipped",
        location: "Distribution Center",
        owner: "0x123456789abcdef",
      };
      alert(
        `ID: ${mockData.id}, Name: ${mockData.name}, State: ${mockData.state}, Location: ${mockData.location}, Owner: ${mockData.owner}`
      );
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <nav className="bg-gray-800 text-white p-4 rounded mb-4">
        <h1 className="text-center text-lg font-bold">Supply Chain Management Dashboard</h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Create Item Section */}
        <div className="bg-gray-800 shadow-md rounded p-4">
          <h4 className="mb-4 text-lg font-semibold">Create Item</h4>
          <form onSubmit={(e) => handleSubmit(e, "create")}> 
            <div className="mb-3">
              <label htmlFor="itemName" className="block text-sm font-medium">Item Name</label>
              <input
                type="text"
                id="itemName"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter item name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="itemDetails" className="block text-sm font-medium">Details</label>
              <textarea
                id="itemDetails"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                rows={3}
                placeholder="Enter item details"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600">Create Item</button>
          </form>
        </div>

        {/* Transfer Ownership Section */}
        <div className="bg-gray-800 shadow-md rounded p-4">
          <h4 className="mb-4 text-lg font-semibold">Transfer Ownership</h4>
          <form onSubmit={(e) => handleSubmit(e, "transfer")}> 
            <div className="mb-3">
              <label htmlFor="itemId" className="block text-sm font-medium">Item ID</label>
              <input
                type="number"
                id="itemId"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter item ID"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newOwner" className="block text-sm font-medium">New Owner Address</label>
              <input
                type="text"
                id="newOwner"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter new owner address"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="w-full p-2 bg-yellow-500 rounded hover:bg-yellow-600">Transfer Ownership</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
