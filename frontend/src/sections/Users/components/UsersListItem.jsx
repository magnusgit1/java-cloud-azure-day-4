function UsersListItem({ user }) {
  if (!user) return null; // Prevent rendering if user is undefined

  return (
    <li>
      <strong>Email:</strong> {user.email || "N/A"}<br />
      <strong>First Name:</strong> {user.firstName || "N/A"}<br />
      <strong>Last Name:</strong> {user.lastName || "N/A"}<br />
      <strong>Username:</strong> {user.userName || "N/A"}<br />
      <strong>Phone:</strong> {user.phone || "N/A"}
    </li>
  );
}

export default UsersListItem
