module.exports = function (data) {
    return {
        to: 'x.miros@yandex.ru',
        from: 'viipuri54@yandex.ru',
        subject: 'Data here',
        html: `
        <h3>Data from user, sir</h3>
        <p>
        Name: ${data.name} <br />
        Email: ${data.email} <br />
        Phone: ${data.phone} <br />
        </p>
        <b>Thank you</b>
        `
    }
}