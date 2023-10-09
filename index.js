// Please read the README.md to understand what to do. Happy Coding !
async function fetchUserData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = await response.json();
        //console.log(userData)
        const user = await userData.map((x)=>{
            const  users =
                {
                name: x.name,
                userName: x.username,
                email: x.email,
                address: x.address.street,
                phone: x.phone,
                website: x.website,
                company: x.company.name
                }
                return users
            }) 
        //console.log(user)
        const filteredUsers = await user.filter((u) => u.email.endsWith('.biz') )
        //console.log(filteredUsers)
        const sortedUsers = await filteredUsers.sort(function(a, b) {
            var textA = a.name.toUpperCase()
            var textB = b.name.toUpperCase()
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        console.log(sortedUsers)
    }catch(error){
        console.log(error)
    }
}
 fetchUserData()