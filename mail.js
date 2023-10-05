const mailer = require("nodemailer");

require("dotenv").config();
const PASS = process.env.PASS;

const transporter = mailer.createTransport({
	service: "gmail",
	auth: {
		user: "asthakur_m23@mc.vjti.ac.in",
		pass: PASS,
	},
});

const mailOptions = {
	from: "asthakur_m23@mc.vjti.ac.in",
	to: "thakur.aashay@gmail.com",
	subject: "Sending Email using Node.js",
	text: "Mail Sent Successfully",
};

transporter.sendMail(mailOptions, (err, data) => {
	if (err) throw err;
	else console.log("Mail Sent: ", data.response);
});
