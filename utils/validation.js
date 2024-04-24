import Joi from "joi";

export const validateAddress = (address) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(20),
    lastName: Joi.string().required().min(2).max(20),
    phone: Joi.string().required(),
    country: Joi.string().required(),
    county: Joi.number().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
  });

  return schema.validate(address, { allowUnknown: true });
};
