"use strict";
// Code generated for API Clients. DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ngrok = void 0;
const wretch_1 = require("wretch");
const formData = require("form-data");
const url_1 = require("url");
const node_fetch_1 = require("node-fetch");
const services = require("./services");
(0, wretch_1.default)().polyfills({
    fetch: node_fetch_1.default,
    FormData: formData,
    URLSearchParams: url_1.URLSearchParams,
});
class Ngrok {
    /**
     * Creates an instance of the Ngrok HTTP API client
     * @constructor
     * @param {Object} config - config.apiToken and config.baseUrl
     */
    constructor({ baseUrl = 'https://api.ngrok.com', apiToken }) {
        this.baseUrl = baseUrl;
        if (apiToken) {
            this.token = apiToken;
        }
        else {
            throw new Error('Cannot create ngrok agent without an API token');
        }
        this.httpClient = (0, wretch_1.default)()
            .url(baseUrl)
            .headers({
            'User-Agent': 'ngrok-api-typescript/0.10.0/' + process.version,
            'Ngrok-Version': '2',
        })
            .content("application/json")
            .auth('Bearer ' + this.token);
        this.abuseReports = new services.AbuseReports(this.httpClient);
        this.agentIngresses = new services.AgentIngresses(this.httpClient);
        this.apiKeys = new services.APIKeys(this.httpClient);
        this.applicationSessions = new services.ApplicationSessions(this.httpClient);
        this.applicationUsers = new services.ApplicationUsers(this.httpClient);
        this.tunnelSessions = new services.TunnelSessions(this.httpClient);
        this.certificateAuthorities = new services.CertificateAuthorities(this.httpClient);
        this.credentials = new services.Credentials(this.httpClient);
        this.endpoints = new services.Endpoints(this.httpClient);
        this.eventDestinations = new services.EventDestinations(this.httpClient);
        this.eventSubscriptions = new services.EventSubscriptions(this.httpClient);
        this.eventSources = new services.EventSources(this.httpClient);
        this.ipPolicies = new services.IPPolicies(this.httpClient);
        this.ipPolicyRules = new services.IPPolicyRules(this.httpClient);
        this.ipRestrictions = new services.IPRestrictions(this.httpClient);
        this.reservedAddrs = new services.ReservedAddrs(this.httpClient);
        this.reservedDomains = new services.ReservedDomains(this.httpClient);
        this.sshCertificateAuthorities = new services.SSHCertificateAuthorities(this.httpClient);
        this.sshCredentials = new services.SSHCredentials(this.httpClient);
        this.sshHostCertificates = new services.SSHHostCertificates(this.httpClient);
        this.sshUserCertificates = new services.SSHUserCertificates(this.httpClient);
        this.tlsCertificates = new services.TLSCertificates(this.httpClient);
        this.tunnels = new services.Tunnels(this.httpClient);
        this.backends = {
            failoverBackends: new services.FailoverBackends(this.httpClient),
            httpResponseBackends: new services.HTTPResponseBackends(this.httpClient),
            tunnelGroupBackends: new services.TunnelGroupBackends(this.httpClient),
            weightedBackends: new services.WeightedBackends(this.httpClient),
        };
        this.edges = {
            edgesHttpsRoutes: new services.EdgesHTTPSRoutes(this.httpClient),
            edgesHttps: new services.EdgesHTTPS(this.httpClient),
            edgesTcp: new services.EdgesTCP(this.httpClient),
            edgesTls: new services.EdgesTLS(this.httpClient),
        };
        this.edgeModules = {
            httpsEdgeMutualTlsModule: new services.HTTPSEdgeMutualTLSModule(this.httpClient),
            httpsEdgeTlsTerminationModule: new services.HTTPSEdgeTLSTerminationModule(this.httpClient),
            edgeRouteBackendModule: new services.EdgeRouteBackendModule(this.httpClient),
            edgeRouteIpRestrictionModule: new services.EdgeRouteIPRestrictionModule(this.httpClient),
            edgeRouteRequestHeadersModule: new services.EdgeRouteRequestHeadersModule(this.httpClient),
            edgeRouteResponseHeadersModule: new services.EdgeRouteResponseHeadersModule(this.httpClient),
            edgeRouteCompressionModule: new services.EdgeRouteCompressionModule(this.httpClient),
            edgeRouteCircuitBreakerModule: new services.EdgeRouteCircuitBreakerModule(this.httpClient),
            edgeRouteWebhookVerificationModule: new services.EdgeRouteWebhookVerificationModule(this.httpClient),
            edgeRouteOAuthModule: new services.EdgeRouteOAuthModule(this.httpClient),
            edgeRouteSamlModule: new services.EdgeRouteSAMLModule(this.httpClient),
            edgeRouteOidcModule: new services.EdgeRouteOIDCModule(this.httpClient),
            edgeRouteWebsocketTcpConverterModule: new services.EdgeRouteWebsocketTCPConverterModule(this.httpClient),
            tcpEdgeBackendModule: new services.TCPEdgeBackendModule(this.httpClient),
            tcpEdgeIpRestrictionModule: new services.TCPEdgeIPRestrictionModule(this.httpClient),
            tlsEdgeBackendModule: new services.TLSEdgeBackendModule(this.httpClient),
            tlsEdgeIpRestrictionModule: new services.TLSEdgeIPRestrictionModule(this.httpClient),
            tlsEdgeMutualTlsModule: new services.TLSEdgeMutualTLSModule(this.httpClient),
            tlsEdgeTlsTerminationModule: new services.TLSEdgeTLSTerminationModule(this.httpClient),
        };
    }
}
exports.Ngrok = Ngrok;
//# sourceMappingURL=client.js.map