import * as services from './services';
export interface NgrokConfig {
    apiToken: string;
    baseUrl: string;
}
export declare class Ngrok {
    private token;
    private baseUrl;
    private httpClient;
    /**
     * Abuse Reports allow you to submit take-down requests for URLs hosted by
   ngrok that violate ngrok's terms of service.
     */
    abuseReports: services.AbuseReports;
    /**
     * API Keys are used to authenticate to the [ngrok
   API](https://ngrok.com/docs/api#authentication). You may use the API itself
   to provision and manage API Keys but you'll need to provision your first API
   key from the [API Keys page](https://dashboard.ngrok.com/api/keys) on your
   ngrok.com dashboard.
     */
    apiKeys: services.APIKeys;
    /**
     * Certificate Authorities are x509 certificates that are used to sign other
   x509 certificates. Attach a Certificate Authority to the Mutual TLS module
   to verify that the TLS certificate presented by a client has been signed by
   this CA. Certificate Authorities  are used only for mTLS validation only and
   thus a private key is not included in the resource.
     */
    certificateAuthorities: services.CertificateAuthorities;
    /**
     * Tunnel Credentials are ngrok agent authtokens. They authorize the ngrok
   agent to connect the ngrok service as your account. They are installed with
   the `ngrok authtoken` command or by specifying it in the `ngrok.yml`
   configuration file with the `authtoken` property.
     */
    credentials: services.Credentials;
    /**
     * Endpoint Configurations are a reusable group of modules that encapsulate how
   traffic to a domain or address is handled. Endpoint configurations are only
   applied to Domains and TCP Addresses they have been attached to.
     */
    endpointConfigurations: services.EndpointConfigurations;
    eventStreams: services.EventStreams;
    eventDestinations: services.EventDestinations;
    eventSubscriptions: services.EventSubscriptions;
    eventSources: services.EventSources;
    /**
     * IP Policies are reusable groups of CIDR ranges with an `allow` or `deny`
   action. They can be attached to endpoints via the Endpoint Configuration IP
   Policy module. They can also be used with IP Restrictions to control source
   IP ranges that can start tunnel sessions and connect to the API and dashboard.
     */
    ipPolicies: services.IPPolicies;
    /**
     * IP Policy Rules are the IPv4 or IPv6 CIDRs entries that
   make up an IP Policy.
     */
    ipPolicyRules: services.IPPolicyRules;
    /**
     * An IP restriction is a restriction placed on the CIDRs that are allowed to
   initate traffic to a specific aspect of your ngrok account. An IP
   restriction has a type which defines the ingress it applies to. IP
   restrictions can be used to enforce the source IPs that can make API
   requests, log in to the dashboard, start ngrok agents, and connect to your
   public-facing endpoints.
     */
    ipRestrictions: services.IPRestrictions;
    /**
     * The IP Whitelist is deprecated and will be removed. Use an IP Restriction
   with an `endpoints` type instead.
     */
    ipWhitelist: services.IPWhitelist;
    /**
     * Reserved Addresses are TCP addresses that can be used to listen for traffic.
   TCP address hostnames and ports are assigned by ngrok, they cannot be
   chosen.
     */
    reservedAddrs: services.ReservedAddrs;
    /**
     * Reserved Domains are hostnames that you can listen for traffic on. Domains
   can be used to listen for http, https or tls traffic. You may use a domain
   that you own by creating a CNAME record specified in the returned resource.
   This CNAME record points traffic for that domain to ngrok's edge servers.
     */
    reservedDomains: services.ReservedDomains;
    /**
     * An SSH Certificate Authority is a pair of an SSH Certificate and its private
   key that can be used to sign other SSH host and user certificates.
     */
    sshCertificateAuthorities: services.SSHCertificateAuthorities;
    /**
     * SSH Credentials are SSH public keys that can be used to start SSH tunnels
   via the ngrok SSH tunnel gateway.
     */
    sshCredentials: services.SSHCredentials;
    /**
     * SSH Host Certificates along with the corresponding private key allows an SSH
   server to assert its authenticity to connecting SSH clients who trust the
   SSH Certificate Authority that was used to sign the certificate.
     */
    sshHostCertificates: services.SSHHostCertificates;
    /**
     * SSH User Certificates are presented by SSH clients when connecting to an SSH
   server to authenticate their connection. The SSH server must trust the SSH
   Certificate Authority used to sign the certificate.
     */
    sshUserCertificates: services.SSHUserCertificates;
    /**
     * TLS Certificates are pairs of x509 certificates and their matching private
   key that can be used to terminate TLS traffic. TLS certificates are unused
   until they are attached to a Domain. TLS Certificates may also be
   provisioned by ngrok automatically for domains on which you have enabled
   automated certificate provisioning.
     */
    tlsCertificates: services.TLSCertificates;
    /**
     * Tunnel Sessions represent instances of ngrok agents or SSH reverse tunnel
   sessions that are running and connected to the ngrok service. Each tunnel
   session can include one or more Tunnels.
     */
    tunnelSessions: services.TunnelSessions;
    /**
     * Tunnels provide endpoints to access services exposed by a running ngrok
   agent tunnel session or an SSH reverse tunnel session.
     */
    tunnels: services.Tunnels;
    pointcfgModule: {
        endpointLoggingModule: services.EndpointLoggingModule;
        endpointCircuitBreakerModule: services.EndpointCircuitBreakerModule;
        endpointCompressionModule: services.EndpointCompressionModule;
        endpointTlsTerminationModule: services.EndpointTLSTerminationModule;
        endpointIpPolicyModule: services.EndpointIPPolicyModule;
        endpointMutualTlsModule: services.EndpointMutualTLSModule;
        endpointRequestHeadersModule: services.EndpointRequestHeadersModule;
        endpointResponseHeadersModule: services.EndpointResponseHeadersModule;
        endpointOAuthModule: services.EndpointOAuthModule;
        endpointWebhookValidationModule: services.EndpointWebhookValidationModule;
        endpointSamlModule: services.EndpointSAMLModule;
        endpointOidcModule: services.EndpointOIDCModule;
    };
    /**
     * Creates an instance of the Ngrok HTTP API client
     * @constructor
     * @param {Object} config - config.apiToken and config.baseUrl
     */
    constructor({ baseUrl, apiToken }: NgrokConfig);
}
//# sourceMappingURL=client.d.ts.map