const app = require('express')();
const server = require('http').Server(app);
const { ApolloServer, gql } = require('apollo-server-express');
const io = require('socket.io')(server);
const next = require('next');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const mail = require('./emails/call');
const mailT = require('./emails/tartar');
const mongoose = require('mongoose');
const Users = require('./models/User');
const bodyParser = require('body-parser');


const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();
const PORT = 4000 || process.env.PORT;
const uri = 'mongodb+srv://Slavus54:12345@nextappendb.od5z2.mongodb.net/Main'

const transporter = nodemailer.createTransport(sendgrid({
    auth: {
        api_key: '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'
    }
}))

async function start() {
	try {
		await mongoose.connect(uri, {
			useUnifiedTopology: true, useNewUrlParser: true
		})
		console.log('MongoDB connected...')
	} catch (e) {
		console.log(e)
	}
}
start();

const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
        phone: String
    }
    type Query {
        hello: String,
        users: [User]
    }
    type Mutation {
        AddUser(name: String, email: String, phone: String): User!
        register: User
    }
    input UserInput {
        id: ID
        name: String
        email: String
        phone: String
    }
`;
 
const resolvers = {
    Query: {
        hello: () => 'Hi from Slavus54',
        users: async () => {
            let data = await Users.find();
            return data;
        }
    },
    Mutation: {
        AddUser: async (_, {name, email, phone}) => {
            let res = {
                name: name,
                email: email,
                phone: phone
            }
            // for (let key in args) {
            //     res[key] = args[key]
            // }
            const user = new Users({
                name: res.name,
                email: res.email,
                phone: res.phone
            })
            await user.save();
            // const users = {
            //     name: 'Slavus54',
            //     email: email,
            //     phone: 'Slavus54'
            // }
            
            console.log(user)
            return user;
        },
        register: (nam = 'Slavus') => ({name: nam, email: 'mail.ru', phone: '813878131'})
    }
};
 
const apollo = new ApolloServer({ typeDefs, resolvers });
apollo.applyMiddleware({app});

// const typeDefs = `
//   type Query {
//     hello: String!
//   }
// `

// const resolvers = {
//   Query: {
//     hello: () => `Hello World`,
//   },
// }

// const opts = {
//     port: 7777,
//     endpoint: '/graphql'
// }
// const gh = new GraphQLServer({ typeDefs, resolvers, opts })

// gh.start(() => console.log(`GraphQL server started on ${opts.port} port...`))

io.on('connection', (socket) => {
    console.log('New WS connected...')
    socket.on('email', async (data) => {
        console.log(data)
        try {
            await transporter.sendMail(mail(data.email))
            await transporter.sendMail(mailT(data))
            const user = new Users({
                name: data.name,
                email: data.email,
                phone: data.phone
            })
            user.save();
            const users = Users.estimatedDocumentCount();
            //console.log(users)
            socket.emit('data', user)
        } catch (e) {
            console.log(e)
        }
        
    })
})

nextApp.prepare().then(() => {
    app.get('*', (req,res) => {
        return handle(req,res)
    })
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())   

    server.listen(PORT, console.log(`Server have started with apollo at ${PORT} port`))
    app.post('/api', (req, res) => {
        console.log('Great POST request', req.body)
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        user.save();
        res.send(user)
    })
    app.get('/api', (req, res) => {
        let cur = Users.find()
        let data = {
            name: 'Slava',
            age: 15
        }
        console.log('Great GET request')
        res.send('Great GET request')
    })
})


//const server = http.createServer(app);

// const transporter = nodemailer.createTransport(sendgrid({
//         auth: {
//             api_key: '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'
//         }
// }))

// const io = socketio(server);

// app.get('/', (req, res) => {
//     res.send('API running');
// })

// io
//     .of('/contacts')
//     .on('connection', function (socket) {
//     console.log('New WS connection...')
//     socket.on('email', async (data) => {
//         console.log(data)
//         try {
// 			await transporter.sendMail(mail(data))
// 		} catch (e) {
// 			console.log(e)
// 		}
//     })
//     socket.on('disconnect', () => {
// 		console.log('User has left')
// 	})
// })

// const PORT = 6000 || process.env.PORT;

// server.listen(PORT, console.log(`Server have started at ${PORT} port`));