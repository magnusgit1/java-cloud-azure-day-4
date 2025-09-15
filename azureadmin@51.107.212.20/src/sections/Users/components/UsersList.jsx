import UsersListItem from "./UsersListItem"

function UsersList({ data }) {
    if (!Array.isArray(data)) return <div>No users found.</div>;

    return (
        <ul className="users_list">
            {data.map((user, index) => (
                <UsersListItem user={user} key={user.id || index} />
            ))}
        </ul>
    )
}

export default UsersList
