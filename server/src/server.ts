import express, { response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
const users = [
    'Eduardo',
    'Renan'
];
//Rota com Query Param (?search=string)
app.get("/users", (request, response) => {
    const search = String(request.query.search);
    
    //Pode ter ou não query param
    const filter = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filter);

});

//Rota com Request Param
app.get("/users/:id", (request, response)=>{
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user)
});

app.post("/users",(request, response)=>{
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})
*/
