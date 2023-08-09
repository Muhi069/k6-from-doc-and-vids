import http from 'k6/http';
import {sleep} from 'k6';


export function setup() {
    console.log('1. Steup Code. ');
}

export default function(data) {
    console.log('2. VU code');
    let result= http.get('https://test-api.k6.io');


    sleep(1)
};


export function teardown(data) {
    console.log('3. Teardown Code. ')
}