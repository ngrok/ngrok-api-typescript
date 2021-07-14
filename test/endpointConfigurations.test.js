const { Ngrok } = require('..');

global.fetch = require('node-fetch');

const nock = require('nock');

describe('valid ngrok api key', () => {
  let ngrok;
  let noMocks = process.env.TEST_NO_MOCK == '1';
  let ifMock = fn => {
    if (!noMocks) {
      return fn();
    }
  };

  beforeAll(() => {
    ngrok = new Ngrok({
      apiToken: process.env.NGROK_API_KEY,
      baseUrl: 'https://api.ngrok.com',
    });
  });

  test('create endpoint configuration', () => {
    expect.assertions(1);

    ifMock(() =>
      nock('https://api.ngrok.com')
        .post('/endpoint_configurations')
        .reply(200, {
          id: 'ec_1jFQm2FyjAGRYLijtEADZ2S9O3f',
          type: 'https',
          description: 'some endpoint configuration description',
          metadata: 'some endpoint configuration metadata',
          created_at: '2020-10-22T20:11:54Z',
          uri: 'https://api.ngrok.com/endpoint_configurations/ec_1jFQm2FyjAGRYLijtEADZ2S9O3f',
          basic_auth: null,
          circuit_breaker: {
            enabled: true,
            errorThresholdPercentage: 0.6,
            numBuckets: 16,
          },
          compression: null,
          request_headers: null,
          response_headers: null,
          ip_policy: null,
          mutual_tls: null,
          tls_termination: null,
          webhook_validation: null,
          oauth: null,
          logging: null,
        })
    );

    let epConfCreate = {
      type: 'https',
      description: 'some endpoint configuration description',
      metadata: 'some endpoint configuration metadata',
      circuitBreaker: {
        errorThresholdPercentage: 0.6,
      },
    };

    return ngrok.endpointConfigurations.create(epConfCreate).then(data => {
      expect(data.circuitBreaker.enabled).toBeTruthy();
    });
  });
});
