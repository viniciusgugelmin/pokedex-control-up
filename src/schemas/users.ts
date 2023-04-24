import Joi from "joi";

const signupBodySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signinBodySchema = Joi.object({
  usernameOrEmail: Joi.string().required(),
  password: Joi.string().required(),
});

const feedPokemonBodySchema = Joi.object({
  food: Joi.string().valid("seed", "apple", "watermelon").required(),
});

export { signupBodySchema, signinBodySchema, feedPokemonBodySchema };
