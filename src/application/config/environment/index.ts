import dotenv from "dotenv";

dotenv.config();

const environment = {
  NODE_ENV: process.env.NODE_ENV,
  API_PORT: +process.env.PORT || +process.env.API_PORT || 5000,
  DOMAIN:
    process.env.DOMAIN ||
    `http://localhost:${process.env.PORT || process.env.API_PORT || 5000}`,
  JWT_SECRET: process.env.JWT_SECRET,
  CRYPT_SALT: +process.env.CRYPT_SALT,
  DATABASE_URL: process.env.DATABASE_URL,
  RABBITMQ_DEFAULT_USER: process.env.RABBITMQ_DEFAULT_USER,
  RABBITMQ_DEFAULT_PASS: process.env.RABBITMQ_DEFAULT_PASS,
  RABBITMQ_PORT: +process.env.RABBITMQ_PORT,
  RABBITMQ_COMUNICATION_PORT: +process.env.RABBITMQ_COMUNICATION_PORT,
  MESSAGE_BROKER_URI: process.env.MESSAGE_BROKER_URI,
};

if (Object.values(environment).includes(undefined)) {
  const missingVaribles = Object.keys(environment)
    .filter((key) => environment[key] === undefined)
    .join(", ");
  console.error("Missing environment variables: " + missingVaribles);
}

for (const key in environment) {
  if (typeof environment[key] !== "string") continue;

  environment[key] = environment[key].replace(/^'(.*)'$/, "$1");
}

export { environment };
