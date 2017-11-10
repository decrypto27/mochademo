var mocha = require('mocha');
var chai = require('chai');
var testSuites = require('./suites/io.json');

var chaiHttp = require('chai-http');
// it spawns a server ...that can be opened per request and closed per se
var supertest = require('supertest');
var api = supertest('http://localhost:3000');
var jsonSchemas = require('./schemaValidators/aa.json');
var assert = chai.assert;
chai.use(require('chai-json-schema'));


//to discuss
// 1. input output -- file or db
// 2. endpoints and timeout configs -- might vary for each test
// 3. spawning a new server or using the pre running server
// cases of error -- 200 or not in error depends on backend handling

describe('Mocha Demo begins', function () {
    // we will pick the input from the files and
    // validate the corresponding resonses from the api 
    // with the help of 
    
    before(function (done) {
        // myriad of things can be done here.. like getting the input files from the database and so on
        done();
    });
    after(function (done) {
        // myriad of things can be done here.. like getting the input files from the database and so on
        done();
    });
    it('This is test one - we do not send any input', function (done) {
        this.timeout(1000);
        var input = testSuites.t1.input;
        var output = testSuites.t1.output;
        api.post('/weather')
            .type('form')
            .send(input)
            .expect(200)
            .end(function (err, response) {
                if(err){
                    return done(err);
                }
                assert.jsonSchema(response.body, jsonSchemas.failure);
                assert.deepEqual(response.body, output);
                done();
        });
    });

    it('This is test two - we pass a legitimate input - day today', function (done) {
        var input = testSuites.t2.input;
        var output = testSuites.t2.output;
        api.post('/weather')
            .type('form')
            .send(input)
            .expect(200)
            .end(function (err, response) {
                if(err){
                    return done(err);
                }
                assert.jsonSchema(response.body, jsonSchemas.success);
                assert.deepEqual(response.body, output);
                done();
        });

    });

    it('This is test three - we pass a legitimate input - day yesterday', function (done) {
        var input = testSuites.t3.input;
        var output = testSuites.t3.output;
        api.post('/weather')
            .type('form')
            .send(input)
            .expect(200)
            .end(function (err, response) {
                if(err){
                    return done(err);
                }
                assert.jsonSchema(response.body, jsonSchemas.success);
                assert.deepEqual(response.body, output);
                done();
        });
    });

    it('This is test three - we pass a legitimate input - day tomorrow', function (done) {
        var input = testSuites.t4.input;
        var output = testSuites.t4.output;
        api.post('/weather')
            .type('form')
            .send(input)
            .expect(200)
            .end(function (err, response) {
                if(err){
                    return done(err);
                }
                assert.jsonSchema(response.body, jsonSchemas.success);
                assert.deepEqual(response.body, output);
                done();
        });
    });

});