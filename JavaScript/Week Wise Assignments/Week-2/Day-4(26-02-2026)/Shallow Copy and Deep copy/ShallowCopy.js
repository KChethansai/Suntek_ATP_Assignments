const user = {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
    }
    };
    //1. Create a shallow copy of user
    let copyUser={...user}
    // 2. Change:
         // i. name in the copied object
          //ii. preferences.theme in the copied object
          //iii .Log both original and copied objects
          //iv. Observe what changes and what doesn’t
    copyUser.name='Bhanu'
    copyUser.preferences.theme='Light'
    console.log('Original:',user)
    console.log('Copy:',copyUser)

