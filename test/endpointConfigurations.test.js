const {Ngrok} = require('..');

global.fetch = require('node-fetch')

const nock = require('nock')

describe('valid ngrok api key', () => {
    let ngrok;

    beforeAll(() => {
        ngrok = new Ngrok({
            apiToken: process.env.NGROK_API_KEY,
            baseUrl: 'https://api.ngrok.com.lan',
        });
    });

    test('create endpoint configuration', () => {
        expect.assertions(1);

        nock('https://api.ngrok.com.lan')
            .post('/endpoint_configurations')
            .reply(200, {
                id: 'ec_1jFQm2FyjAGRYLijtEADZ2S9O3f',
                type: 'https',
                description: 'some endpoint configuration description',
                metadata: 'some endpoint configuration metadata',
                created_at: '2020-10-22T20:11:54Z',
                uri:
                    'https://api.ngrok.com.lan/endpoint_configurations/ec_1jFQm2FyjAGRYLijtEADZ2S9O3f',
                basic_auth:
                    {
                        enabled: true,
                        auth_provider_id: 'agent',
                        realm: 'ngrok',
                        allow_options: true
                    },
                circuit_breaker: null,
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

        let epConfCreate = {
            type: 'https',
            description: 'some endpoint configuration description',
            metadata: 'some endpoint configuration metadata',
            basic_auth: {
                enabled: true,
                auth_provider_id: 'agent',
                realm: 'ngrok',
                allow_options: true,
            },
        }

        return ngrok.EndpointConfigurations.create(epConfCreate)
            .then(data => {
                expect(data.basic_auth.enabled).toBeTruthy();
            });
    });
});

