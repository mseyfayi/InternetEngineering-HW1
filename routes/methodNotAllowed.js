module.exports = (method) => (req, res) => {
    res.set('Allow', method.toUpperCase());
    res.status(405);
    res.send('Method Not Allowed');
};