// userSwagger.js
module.exports = {
    userRouteSwagger: {
      '/api/user': {
        get: {
          summary: 'Get all users',
          description: 'Retrieve a list of all users',
          responses: {
            200: {
              description: 'A list of users',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  