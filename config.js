var config = {};
 
// HTTP Port to run our web application
config.port = process.env.PORT || 3000;
 
// My own telephone number for notifications and calls
config.ownNumber = '+12064123618';
 
// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// A good practice is to store these string values as system environment variables, and load them from there as we are doing below. 
// Alternately, you could hard code these values here as strings.
config.twilioConfig = {
    accountSid: 'AC7a3539e53db4e2867a430cbd92cf2c18',
    authToken: '2643e1d00eb2965a84ca0a08b81712e7',
    // A Twilio number you control - choose one from:
    // https://www.twilio.com/user/account/phone-numbers/incoming
    number: '+12062073089'
  }
// Google OAuth Configuration
config.googleConfig = {
  clientID: '583354012469-ppkbj8cle231p8inm74lvuj69aqvfo52.apps.googleusercontent.com',
  clientSecret: 'EjhIoutjYU_4JX9kb0X-NyCP',
  calendarId: 'nuo@uw.edu',
  // same as configured at the Developer Console
  redirectURL: 'http://localhost:3000/auth'
};
// MongoDB Settings
config.mongoConfig = {
    ip: '127.0.0.1',
    port: 27017,
    name: 'iothack3'
  }
// Export configuration object
module.exports = config;