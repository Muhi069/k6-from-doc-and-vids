import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '30s', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '40s', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5s', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
    http.get("https://test-api.k6.io/public/crocodiles/");
    sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};
