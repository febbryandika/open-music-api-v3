class AlbumLikesHandler {
  constructor(service, albumsService, validator) {
    this._service = service;
    this._albumsService = albumsService;
    this._validator = validator;

    this.postAlbumLikeHandler = this.postAlbumLikeHandler.bind(this);
    this.getAlbumLikeHandler = this.getAlbumLikeHandler.bind(this);
  }

  async postAlbumLikeHandler(request, h) {
    const { id: albumId } = request.params;
    const { id: userId } = request.auth.credentials;

    await this._albumsService.getAlbumById(albumId);
    await this._service.checkAlbumLike(userId, albumId);

    const response = h.response({
      status: 'success',
      message: 'Album berhasil disukai',
    });
    response.code(201);
    return response;
  }

  async getAlbumLikeHandler(request, h) {
    const { id: albumId } = request.params;

    const { isCache, likes } = await this._service.getAlbumLike(albumId);

    const response = h.response({
      status: 'success',
      data: {
        likes,
      },
    });
    if (isCache === 1) {
      response.header('X-Data-Source', 'cache');
    }
    return response;
  }
}

module.exports = AlbumLikesHandler;
