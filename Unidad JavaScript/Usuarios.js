const users = [

    {username: 'ppc90', age: 30, premium: false},
    
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

    const premium =users.filter(function(user) {
        return user.premium;
    })

 console.log("Usuarios Premium", premium)
 
 const nonpremium =users.filter(function(user) {
    return !user.premium;
})
console.log("Usuarios No Premium", nonpremium)

premium.forEach(function(user) {
    console.log(`El Siguiente Usuario es Premium: ${user.username}, Age: ${user.age}`);
});




