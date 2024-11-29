module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/custom',
     handler: 'custom.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/custom/mail',
      handler: 'custom.sendMail',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
