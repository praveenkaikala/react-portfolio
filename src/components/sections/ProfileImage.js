function ProfileImage() {
  return (
    <div className="relative">
      {/* Background circle decoration */}
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full opacity-20" />
      <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20" />
      
      {/* Profile image container */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="Profile"
          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
        />
        
        {/* Floating card */}
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;