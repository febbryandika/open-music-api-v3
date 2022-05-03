const AlbumLikesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albumlikes',
  version: '1.0.0',
  register: async (server, { service, albumsService, validator }) => {
    const albumlikesHandler = new AlbumLikesHandler(service, albumsService, validator);
    server.route(routes(albumlikesHandler));
  },
};
