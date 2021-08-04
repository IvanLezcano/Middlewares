const fs = require('fs');
const path = require('path');

const controller = {
	user:  (req, res) => {
		return  res.render('logearse',{
			
		})
	},
	admin: (req, res) => {
		return  res.render('index',{
			
		})
	}
};

module.exports = controller;
