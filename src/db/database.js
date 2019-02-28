import mongoose from 'mongoose';

const mongodbUri = 'mongodb://<dbuser>:<dbpassword>@ds031962.mlab.com:31962/techstack';
mongoose.connect(mongodbUri, {
  auth: {
    user: 'paul',
    password: 'William19'
  }
});

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error'));

conn.once('open', () => {
  console.log('Connected to mLab');
});