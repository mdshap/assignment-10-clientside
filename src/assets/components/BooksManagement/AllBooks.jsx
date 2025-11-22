import React from "react";

const AllBooks = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                </label>
              </th>
              <th> Book Name & Author</th>
              <th className="hidden md:block">Short Description</th>
              <th>Rating</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img 
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Harry Potter</div>
                    <div className="text-sm opacity-50">J. K. Rowling</div>
                  </div>
                </div>
              </td>
              <td className="hidden md:block">
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td className="text-yellow-600 font-bold text-lg">
                5
              </td>
              <td>Fantasy</td>
              <th className="flex gap-3 justify-center items-center">
                <button className="btn text-md p-4 bg-secondary text-white ">Details</button>
                <button className="btn text-md p-4 ">Delete</button>
              </th>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
