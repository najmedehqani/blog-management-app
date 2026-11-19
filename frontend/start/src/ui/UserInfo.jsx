import Avatar from "./Avatar";
function UserInfo({ user, isLoading }) {
  return (
    <div className="flex items-center gap-x-1">
      <div className="flex-shrink-0">
        <Avatar src={user?.avatarUrl} name={user?.name} isLoading={isLoading} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="font-bold text-secondary-700 text-sm mb-[3px] truncate">
          {user?.name}
        </div>
        <span className="text-secondary-600 text-xs truncate">
          {user?.email}
        </span>
      </div>
    </div>
  );
}

export default UserInfo;
