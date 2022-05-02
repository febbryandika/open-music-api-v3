const routes = (handler) => [
  {
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationHandler,
    options: {
      auth: 'openmusic',
    },
  },
  {
    method: 'DELETE',
    path: '/collaborations',
    handler: handler.deleteCollaborationHandler,
    options: {
      auth: 'openmusic',
    },
  },
];

module.exports = routes;
