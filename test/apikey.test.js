// Code generated for API Clients. DO NOT EDIT.

const {Ngrok} = require('../');
const nock = require('nock')

global.fetch = require('node-fetch')

describe('valid ngrok api key', () => {
    let ngrok;
    let noMocks = process.env.TEST_NO_MOCK == "1";
    let ifMock = (fn) => {
      if (!noMocks) {
        return fn()
      }
    }

    beforeAll(() => {
        ngrok = new Ngrok({
            apiToken: process.env.NGROK_API_KEY,
            baseUrl: 'https://api.ngrok.com',
        });
    });

    test('non-empty api keys list', () => {
        ifMock(() =>
          nock('https://api.ngrok.com')
              .get('/api_keys')
              .query({
                  limit: '100',
              })
              .reply(200,
                  {
                      "keys": [{
                          id: "ak_1jCnOTFMXku4RbU8icW3lncpCoz",
                          uri: "https://api.ngrok.com/api_keys/ak_1jCnOTFMXku4RbU8icW3lncpCoz",
                          description: "",
                          metadata: "",
                          created_at: "2020-10-21T21:48:28Z",
                          token: null
                      }],
                      uri: "https://api.ngrok.com/api_keys",
                      next_page_uri: null
                  }
              )
        )

        expect.assertions(1);
        return ngrok.apiKeys.list()
            .then(result => {
                expect(result.length).toBeGreaterThan(0);
            });
    });

    test('api keys invalid id', () => {
        ifMock(() =>
          nock('https://api.ngrok.com')
              .get('/api_keys/1000')
              .reply(404, {
                  "error_code": "ERR_NGROK_222",
                  "status_code": 404,
                  "msg": "The API Key resource identified by '100' could not be found because the identifier is not a valid identifier.",
                  "details": {"operation_id": "op_1jF49fn7npJRATGKUgqig5GgHMA"},
              })
        )

        expect.assertions(1);
        return ngrok.apiKeys.get('1000')
            /* eslint jest/no-conditional-expect: "warn" */
            .catch(result => {
                expect(JSON.stringify(result)).toMatch('the identifier is not a valid identifier')
            });
    });
});

