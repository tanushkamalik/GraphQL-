const fs = require('fs');
const path = require('path');

const load = (file) => {
    try {
        const filePath = path.join(__dirname, 'data', `${file}.json`);
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error loading ${file}:`, err.message);
        return [];
    }
};

module.exports = {
    students: load('students'),
    colleges: load('colleges')
};
