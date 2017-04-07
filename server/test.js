const jwt = require('jsonwebtoken');
const moment = require('moment');
const user = {
	mail: 'dounia@gmail.com',
	password: 'YOLO'
}
function generateToken(user){
	const payload={
		iat:moment().unix(), //isued at issu quand
		exp:moment().add(14,'days').unix(), //perime à la date de
		iss:user.mail, //createur
		sub:user.password //sujet du token= hash
	}
	return jwt.sign(payload,'app_secret');
}

const token = generateToken(user);

console.log(token);