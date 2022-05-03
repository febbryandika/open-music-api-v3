const Joi = require('joi');

const AlbumLikePayloadSchema = Joi.object({
  userId: Joi.string().required(),
  albumId: Joi.string().required(),
});

module.exports = { AlbumLikePayloadSchema };
