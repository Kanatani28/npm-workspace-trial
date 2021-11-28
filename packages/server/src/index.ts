import fastify from "fastify";
import cors from "fastify-cors";
import { HelloResponse } from "../../schemas/@types";

const server = fastify({
  logger: true,
}).register(cors, {
  origin: "http://localhost:3000",
  methods: ["GET", "OPTION"],
  allowedHeaders: "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept",
});

server.get("/", async (request, reply) => {
  const result: HelloResponse = {
    hello: "world",
  };
  reply.type("application/json").code(200);
  return result;
});

server.listen(3002, (err, address) => {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});
