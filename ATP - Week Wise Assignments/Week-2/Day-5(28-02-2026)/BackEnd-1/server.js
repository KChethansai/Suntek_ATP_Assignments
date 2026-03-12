    //POST AND PUT Request should send data to the api as body of the request object
    //GET and DELETE requests dont support the body of the request object.So that these two requests can send data through endpoint


//Create HTTP server
import exp from 'express'

const app=exp()

//use body parser middleware
app.use(exp.json())


//Set a port number
const port=2106
//assign port number to HTTP server
app.listen(port,()=>console.log(`Server listening to port ${port}...`))

//Test data (Replace this test data with DB)
    let users=[]

//Create API(REST API : REpresntational State Transfer)

    //Route to handle GET req of CLient(http://localhost:2106/users)
    app.get('/users/:id',(req,res)=>{
        //read all users & send res
        if(Number(req.params.id===undefined)){
        res.json({message:"All users",payload:users})
    }})
    //Route to handle POST req of Client
    app.post('/users',(req,res)=>{
        //get user from client
        const newUser=req.body
        //Push user into user
        users.push(newUser)
        //send res
        res.json({message:"User Created"})
    })
    //Route to handle PUT req of Client
    app.put('/users',(req,res)=>{
        
        //get modified user from client{}
        const modifiedUsed=req.body
        //get index of existing user in users array
        let index=users.findIndex(userObj=>userObj.id===modifiedUsed.id)
        //if user not found
        if(index===-1){
            return res.json({message:"user not found"})
        }
        //update user with index
        users.splice(index,1,modifiedUsed)
        //send res
        res.json({message:"User modified"})
    })
    //Route to handle DELETE req of Client
    app.delete('/users/:id',(req,res)=>{
        //get id of user from uri parameter
        let idOfUrl=Number(req.params.id)
        //find index of user
        let index=users.findIndex(userObj=>userObj.id===idOfUrl)
        if(index === -1){
            res.json({message:'User not found'})
        }
        //deleter user by index
        users.splice(index,1)
        //send res
        res.json({message:'User Deleted'})
    })

    app.get('/users/:id',(req,res)=>{
        let userID=Number(req.params.id)
        let user=users.find(userObj=>userObj.id===userID)
        if(user===undefined){
            return res.json({message:'User not found'})
        }
        res.json({message:'A user',payload:user})})


let products=[]
        //Route to handle GET req of CLient(http://localhost:2106/products)

        //get all the products

        app.get('/products',(req,res)=>{
            res.json({message:'Products are:',payload:products})
        })

        //get product by brand

        app.get('/products/:brand',(req,res)=>{
            let idOfUrl=req.params.brand
            let product=products.filter(productObj=>productObj.brand===idOfUrl)
            if(product===undefined){
               return res.json({message:'Product not found'})
            }
            res.json({message:"The product is ",payload:product})
        })

        app.post('/products',(req,res)=>{
            let newProduct=req.body
            products.push(newProduct)
            res.json({message:'Product added'})
        })

        app.put('/products',(req,res)=>{
            let modifiedProduct=req.body
            let product=products.findIndex(productObj=>productObj.productID===modifiedProduct.productID)
            if(product===-1){
                return res.json({message:'Product not found'})
            }
            products.splice(product,1,modifiedProduct)
            res.json({message:'product modifies'})
        })

        app.delete('/products/:productID',(req,res)=>{
            let id=Number(req.params.productID)
            let index=products.findIndex(productObj=>productObj.productID===id)
            if(index===-1){
              return  res.json({message:'Product not found'})
            }
            products.splice(index,1)
            res.json({message:'Product removed'})
        })