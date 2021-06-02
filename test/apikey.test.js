const { Ngrok } = require('../');
const nock = require('nock');

global.fetch = require('node-fetch');

describe('valid ngrok api key', () => {
  let ngrok;

  beforeAll(() => {
    ngrok = new Ngrok({
      apiToken: process.env.NGROK_API_KEY,
      baseUrl: 'https://api.ngrok.com.lan',
    });
  });

  test('non-empty api keys list', () => {
    nock('https://api.ngrok.com.lan')
      .get('/api_keys')
      .reply(200, {
        keys: [
          {
            id: 'ak_1jCnOTFMXku4RbU8icW3lncpCoz',
            uri: 'https://api.ngrok.com.lan/api_keys/ak_1jCnOTFMXku4RbU8icW3lncpCoz',
            description: '',
            metadata: '',
            created_at: '2020-10-21T21:48:28Z',
            token: null,
          },
        ],
        uri: 'https://api.ngrok.com.lan/api_keys',
        next_page_uri: null,
      });

    expect.assertions(1);
    return ngrok.APIKeys.list({}).then(data => {
      expect(data.keys.length).toBeGreaterThan(0);
    });
  });

  test('api keys invalid id', () => {
    nock('https://api.ngrok.com.lan')
      .get('/api_keys/1000')
      .reply(404, {
        error_code: 'ERR_NGROK_222',
        status_code: 404,
        msg: "The API Key resource identified by '100' could not be found because the identifier is not a valid identifier.",
        details: { operation_id: 'op_1jF49fn7npJRATGKUgqig5GgHMA' },
      });

    expect.assertions(1);
    return (
      ngrok.APIKeys.get({ id: '1000' })
        /* eslint jest/no-conditional-expect: "warn" */
        .catch(data => {
          expect(JSON.stringify(data)).toMatch(
            'the identifier is not a valid identifier'
          );
        })
    );
  });
});
