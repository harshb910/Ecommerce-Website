//Create Token and saving it in cookie
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    //Options For Cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    })
}

module.exports = sendToken;