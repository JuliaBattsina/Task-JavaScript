function UserComponents ({userName,repos}) {
    return (
        <div>
       <p> Full Name: {userName}</p>
      <p>Public Repositories: {repos}</p>
      
        </div>
    )
}
export default UserComponents;