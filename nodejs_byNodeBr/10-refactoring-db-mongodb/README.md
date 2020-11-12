## ===== postgresql
docker run --name postgres -e POSTGRES_USER=higor -e POSTGRES_PASSWORD=higor -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ===== mongodb
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'higor', pwd: 'higor', roles: [{role: 'readWrite', db: 'herois'}]})"

docker ps
docker exec -it 699cbbfbf4a2 mongo -u higor -p higor --authenticationDatabase herois
docker exec -it mongoContainer mongo -u higor -p higor --authenticationDatabase herois
show dbs
use herois
show collections 
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1999-01-01'
})
db.herois.find()
db.herois.find().pretty()
for(let i=0; i<=10000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1999-01-01'
    })
}
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })
db.herois.find({}, { poder:1, _id: 0 })
db.herois.update({ _id: ObjectId("5f9a0891a5860b9accf39a8f") },
                 {nome: 'Random'})
db.herois.findOne({ _id: ObjectId("5f9a0891a5860b9accf39a8f") })
db.herois.update({ _id: ObjectId("5f9a0891a5860b9accf39a90") },
                 { $set: {nome: 'Random'} })
db.herois.findOne({ _id: ObjectId("5f9a0891a5860b9accf39a90") })
db.herois.remove({nome: 'Random'})
db.herois.remove({})

