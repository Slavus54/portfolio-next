module.exports = function (email) {
    return {
        to: email,
        from: 'x.miros@yandex.ru',
        subject: 'Next are great',
        html: `
        <h2>Welcome to Next-app</h2>
        <strong>You have successfuly subscribed with email - ${email}<br />
        My phone: +79134579350
        </strong>
        <hr />
        <b>Thank you, ${email}</b>
        `
    }
}