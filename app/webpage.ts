import * as express from 'express';

namespace Server {
    export const PORT = 80;
}

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(Server.PORT, () => {
    console.log(`Server started on port ${Server.PORT}`)
})
