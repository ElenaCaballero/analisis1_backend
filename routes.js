var usersController = require('./controllers/usersController');
var roomController = require('./controllers/roomController');
var authController = require('./controllers/authController');
exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, productos')}}},
					 {method: 'POST', path: '/v1/register', config: usersController.createUser},
					 {method: 'POST', path: '/v1/updateUser', config: usersController.modifUser},
					 {method: 'DELETE', path: '/v1/deleteUser', config: usersController.deleteUser},
					 {method: 'GET', path: '/v1/getUser', config: usersController.getUser},
					 {method: 'GET', path : '/v1/getEmployees', config: usersController.getEmployee},
					 {method: 'POST', path: '/v1/registerRoom', config: roomController.createRoom},
					 {method: 'POST', path: '/v1/updateRoom', config: roomController.modifRoom},
					 {method: 'DELETE', path: '/v1/deleteRoom', config: roomController.deleteRoom},
					 {method: 'GET', path: '/v1/getRoom', config: roomController.getRoom},
					 {method: 'GET', path: '/v1/getAllRooms', config: roomController.getAllRooms},
					 {method: 'POST', path: '/v1/login', config: authController.login},
					 {method: 'POST', path: '/v1/getRoomEmpleado', config: roomController.getemproom},
					 {method: 'POST', path: '/v1/saveDistributedRooms', config: roomController.updateDistributedRooms},
					 {method: 'POST', path: '/v1/swapDistributedRooms', config: roomController.updateReDistributedRooms},
					 {method: 'GET', path: '/v1/logout', config: authController.logout}

				];