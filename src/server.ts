/* eslint-disable no-console */
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
    try {
        mongoose.connect(config.db_url as string);
        app.listen(config.port || 3000, () => {
            console.log(`App running on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
