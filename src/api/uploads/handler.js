class UploadsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUploadCoverHandler = this.postUploadCoverHandler.bind(this);
  }

  async postUploadCoverHandler(request, h) {
    const { cover } = request.payload;
    this._validator.validateCoverHeaders(cover.hapi.headers);

    const filename = await this._service.writeFile(cover, cover.hapi);
    const { id: albumId } = request.params;
    const fileLocation = `http://${process.env.HOST}:${process.env.PORT}/upload/covers/${filename}`;

    await this._service.addCoverUrl(fileLocation, albumId);

    const response = h.response({
      status: 'success',
      message: 'Sampul berhasil diunggah',
    });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
