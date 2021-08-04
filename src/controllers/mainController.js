const fs = require('fs');
const path = require('path');

const controller = {
	user:  (req, res) => {
		return  res.render('index',{
			
		})
	},
	admin: (req, res) => {
		return  res.render('index',{
			
		})
	}
};

module.exports = controller;
