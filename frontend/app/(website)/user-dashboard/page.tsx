export default function UserDashboard() {
  return (
    <div className="py-12 w-auto px-8">
      <h3 className="text-2xl font-semibold">User Name,</h3>
      <div className="bg-gradient-to-br w-auto from-lightGreen to-darkGreen p-[1px] rounded-xl mt-4">
        <div className="p-8 flex flex-col gap-4 bg-background rounded-xl">
          <h2 className="text-gray font-medium">Personal Information</h2>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">Name: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">Anonymous Name: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">Email: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">City: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">State: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <div className="flex gap-1">
            <h3 className="text-xl font-semibold">Profession: </h3>
            <h4 className="text-xl">user Name</h4>
          </div>
          <button
            className={
              "bg-gradient-to-r w-fit text-white from-[#4ED6DA] font-semibold to-[#04789D] text-center h-fit py-2 my-1 px-8 rounded-xl"
            }
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
