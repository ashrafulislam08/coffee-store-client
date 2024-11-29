import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, photo } = coffee;
  const navigate = useNavigate();

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const updateCoffee = { name, chef, supplier, taste, photo };
    // console.log(coffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Exit",
          });
          form.reset();
          navigate("/");
        }
      });
  };
  return (
    <div>
      <section>
        <div className="border rounded-lg shadow relative m-10 py-8 bg-[#F4F3F0]">
          <h3 className="text-xl font-semibold text-center">Update Coffee</h3>
          <p className="text-gray-500 text-sm  px-8 mt-3">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <div className="flex items-start justify-between p-5 border-b rounded-t"></div>

          <div className="p-6 space-y-6 text-left">
            <form onSubmit={handleAddCoffee}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Coffee Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Coffee Name"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="chef"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Chef
                  </label>
                  <input
                    type="text"
                    name="chef"
                    id="chef"
                    defaultValue={chef}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Chef"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Supplier
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    id="supplier    "
                    defaultValue={supplier}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Supplier"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="taste"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Taste
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    id="taste"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Taste"
                    required=""
                  />
                </div>
              </div>
              <div className="w-full mt-3 sm:col-span-3">
                <label
                  htmlFor="photo"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  required=""
                />
              </div>
              <div className=" mt-5 w-full border-t border-gray-200 rounded-b">
                <button
                  className="btn hover:bg-[#967259] w-full text-[#38220f] bg-[#967259] border-2 border-[#38220f]"
                  type="submit"
                >
                  Update Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateCoffee;
