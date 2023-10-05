### Nodemailer

```bash
npm install nodemailer
```

> Before you run the code, you will need to set the email and password of your actual mail.
> Instead of hardcoding it you can instead use environment variables.
>
> To do this, create a file named `.env` in the root directory of your project.
> Add the following code to it:
>
> ```bash
> EMAIL=your_email
> PASSWORD=your_password
> ```
>
> Now, install the `dotenv` package:
>
> ```bash
> npm install dotenv
> ```
>
> Finally, add the following code to the top of your `mail.js` file:
>
> ```js
> require("dotenv").config();
> const email = process.env.EMAIL;
> const password = process.env.PASSWORD;
> ```
>
> Now, you can use the `email` and `password` variables in your code.
> The `dotenv` package will automatically load the variables from the `.env` file into the `process.env` object.
> In Production, you can set the environment variables in the server instead of using a `.env` file.
>
> **Note:** The `.env` file should not be committed to the repository.
> Add it to the `.gitignore` file to prevent it from being committed.

### Gmail

If you are using Gmail, you will need to allow access to less secure apps.
You can do this by going to [https://myaccount.google.com/lesssecureapps](https://myaccount.google.com/lesssecureapps) and turning on the option.

> **_Note:_** This is not recommended as it makes your account vulnerable to attacks.
> Recommend turning this option off after you are done testing.
