import { Wretcher } from 'wretch';
import * as datatypes from './datatypes';
/**
 * Abuse Reports allow you to submit take-down requests for URLs hosted by
 ngrok that violate ngrok's terms of service.
 */
export declare class AbuseReports {
    private httpClient;
    /** Do not construct this object directly, use the <code>abuseReports</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access
     */
    create(arg: datatypes.AbuseReportCreate): Promise<datatypes.AbuseReport>;
    /**
     * Get the detailed status of abuse report by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.AbuseReport>;
}
/**
 * API Keys are used to authenticate to the [ngrok
 API](https://ngrok.com/docs/api#authentication). You may use the API itself
 to provision and manage API Keys but you'll need to provision your first API
 key from the [API Keys page](https://dashboard.ngrok.com/api/keys) on your
 ngrok.com dashboard.
 */
export declare class APIKeys {
    private httpClient;
    /** Do not construct this object directly, use the <code>apiKeys</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new API key. The generated API key can be used to authenticate to the ngrok API.
     */
    create(arg: datatypes.APIKeyCreate): Promise<datatypes.APIKey>;
    /**
     * Delete an API key by ID
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get the details of an API key by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.APIKey>;
    /**
     * List all API keys owned by this account
     */
    list(): Promise<Array<datatypes.APIKey>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an API key by ID.
     */
    update(arg: datatypes.APIKeyUpdate): Promise<datatypes.APIKey>;
}
/**
 * Certificate Authorities are x509 certificates that are used to sign other
 x509 certificates. Attach a Certificate Authority to the Mutual TLS module
 to verify that the TLS certificate presented by a client has been signed by
 this CA. Certificate Authorities  are used only for mTLS validation only and
 thus a private key is not included in the resource.
 */
export declare class CertificateAuthorities {
    private httpClient;
    /** Do not construct this object directly, use the <code>certificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Upload a new Certificate Authority
     */
    create(arg: datatypes.CertificateAuthorityCreate): Promise<datatypes.CertificateAuthority>;
    /**
     * Delete a Certificate Authority
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about a certficate authority
     */
    get(arg: datatypes.Item): Promise<datatypes.CertificateAuthority>;
    /**
     * List all Certificate Authority on this account
     */
    list(): Promise<Array<datatypes.CertificateAuthority>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of a Certificate Authority by ID
     */
    update(arg: datatypes.CertificateAuthorityUpdate): Promise<datatypes.CertificateAuthority>;
}
/**
 * Tunnel Credentials are ngrok agent authtokens. They authorize the ngrok
 agent to connect the ngrok service as your account. They are installed with
 the `ngrok authtoken` command or by specifying it in the `ngrok.yml`
 configuration file with the `authtoken` property.
 */
export declare class Credentials {
    private httpClient;
    /** Do not construct this object directly, use the <code>credentials</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself.
     */
    create(arg: datatypes.CredentialCreate): Promise<datatypes.Credential>;
    /**
     * Delete a tunnel authtoken credential by ID
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about a tunnel authtoken credential
     */
    get(arg: datatypes.Item): Promise<datatypes.Credential>;
    /**
     * List all tunnel authtoken credentials on this account
     */
    list(): Promise<Array<datatypes.Credential>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an tunnel authtoken credential by ID
     */
    update(arg: datatypes.CredentialUpdate): Promise<datatypes.Credential>;
}
/**
 * Endpoint Configurations are a reusable group of modules that encapsulate how
 traffic to a domain or address is handled. Endpoint configurations are only
 applied to Domains and TCP Addresses they have been attached to.
 */
export declare class EndpointConfigurations {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointConfigurations</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new endpoint configuration
     */
    create(arg: datatypes.EndpointConfigurationCreate): Promise<datatypes.EndpointConfiguration>;
    /**
     * Delete an endpoint configuration. This operation will fail if the endpoint configuration is still referenced by any reserved domain or reserved address.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Returns detailed information about an endpoint configuration
     */
    get(arg: datatypes.Item): Promise<datatypes.EndpointConfiguration>;
    /**
     * Returns a list of all endpoint configurations on this account
     */
    list(): Promise<Array<datatypes.EndpointConfiguration>>;
    private _pagedList;
    private _asyncList;
    /**
     * Updates an endpoint configuration. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
     */
    update(arg: datatypes.EndpointConfigurationUpdate): Promise<datatypes.EndpointConfiguration>;
}
export declare class EventStreams {
    private httpClient;
    /** Do not construct this object directly, use the <code>eventStreams</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Event Stream. It will not apply to anything until you associate it with one or more Endpoint Configs.
     */
    create(arg: datatypes.EventStreamCreate): Promise<datatypes.EventStream>;
    /**
     * Delete an Event Stream. Associated Event Destinations will be preserved.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an Event Stream by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.EventStream>;
    /**
     * List all Event Streams available on this account.
     */
    list(): Promise<Array<datatypes.EventStream>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an Event Stream by ID.
     */
    update(arg: datatypes.EventStreamUpdate): Promise<datatypes.EventStream>;
}
export declare class EventDestinations {
    private httpClient;
    /** Do not construct this object directly, use the <code>eventDestinations</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Event Destination. It will not apply to anything until it is associated with an Event Stream, and that Event Stream is associated with an Endpoint Config.
     */
    create(arg: datatypes.EventDestinationCreate): Promise<datatypes.EventDestination>;
    /**
     * Delete an Event Destination. If the Event Destination is still referenced by an Event Stream, this will throw an error until that Event Stream has removed that reference.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an Event Destination by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.EventDestination>;
    /**
     * List all Event Destinations on this account.
     */
    list(): Promise<Array<datatypes.EventDestination>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an Event Destination.
     */
    update(arg: datatypes.EventDestinationUpdate): Promise<datatypes.EventDestination>;
}
export declare class EventSubscriptions {
    private httpClient;
    /** Do not construct this object directly, use the <code>eventSubscriptions</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create an Event Subscription.
     */
    create(arg: datatypes.EventSubscriptionCreate): Promise<datatypes.EventSubscription>;
    /**
     * Delete an Event Subscription.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get an Event Subscription by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.EventSubscription>;
    /**
     * List this Account's Event Subscriptions.
     */
    list(): Promise<Array<datatypes.EventSubscription>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update an Event Subscription.
     */
    update(arg: datatypes.EventSubscriptionUpdate): Promise<datatypes.EventSubscription>;
}
export declare class EventSources {
    private httpClient;
    /** Do not construct this object directly, use the <code>eventSources</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Add an additional type for which this event subscription will trigger
     */
    create(arg: datatypes.EventSourceCreate): Promise<datatypes.EventSource>;
    /**
     * Remove a type for which this event subscription will trigger
     */
    delete(arg: datatypes.EventSourceItem): Promise<void>;
    /**
     * Get the details for a given type that triggers for the given event subscription
     */
    get(arg: datatypes.EventSourceItem): Promise<datatypes.EventSource>;
    /**
     * List the types for which this event subscription will trigger
     */
    list(arg: datatypes.EventSourcePaging): Promise<datatypes.EventSourceList>;
    /**
     * Update the type for which this event subscription will trigger
     */
    update(arg: datatypes.EventSourceUpdate): Promise<datatypes.EventSource>;
}
/**
 * IP Policies are reusable groups of CIDR ranges with an `allow` or `deny`
 action. They can be attached to endpoints via the Endpoint Configuration IP
 Policy module. They can also be used with IP Restrictions to control source
 IP ranges that can start tunnel sessions and connect to the API and dashboard.
 */
export declare class IPPolicies {
    private httpClient;
    /** Do not construct this object directly, use the <code>ipPolicies</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction.
     */
    create(arg: datatypes.IPPolicyCreate): Promise<datatypes.IPPolicy>;
    /**
     * Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an IP policy by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.IPPolicy>;
    /**
     * List all IP policies on this account
     */
    list(): Promise<Array<datatypes.IPPolicy>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP policy by ID
     */
    update(arg: datatypes.IPPolicyUpdate): Promise<datatypes.IPPolicy>;
}
/**
 * IP Policy Rules are the IPv4 or IPv6 CIDRs entries that
 make up an IP Policy.
 */
export declare class IPPolicyRules {
    private httpClient;
    /** Do not construct this object directly, use the <code>ipPolicyRules</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new IP policy rule attached to an IP Policy.
     */
    create(arg: datatypes.IPPolicyRuleCreate): Promise<datatypes.IPPolicyRule>;
    /**
     * Delete an IP policy rule.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an IP policy rule by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.IPPolicyRule>;
    /**
     * List all IP policy rules on this account
     */
    list(): Promise<Array<datatypes.IPPolicyRule>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP policy rule by ID
     */
    update(arg: datatypes.IPPolicyRuleUpdate): Promise<datatypes.IPPolicyRule>;
}
/**
 * An IP restriction is a restriction placed on the CIDRs that are allowed to
 initate traffic to a specific aspect of your ngrok account. An IP
 restriction has a type which defines the ingress it applies to. IP
 restrictions can be used to enforce the source IPs that can make API
 requests, log in to the dashboard, start ngrok agents, and connect to your
 public-facing endpoints.
 */
export declare class IPRestrictions {
    private httpClient;
    /** Do not construct this object directly, use the <code>ipRestrictions</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new IP restriction
     */
    create(arg: datatypes.IPRestrictionCreate): Promise<datatypes.IPRestriction>;
    /**
     * Delete an IP restriction
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an IP restriction
     */
    get(arg: datatypes.Item): Promise<datatypes.IPRestriction>;
    /**
     * List all IP restrictions on this account
     */
    list(): Promise<Array<datatypes.IPRestriction>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP restriction by ID
     */
    update(arg: datatypes.IPRestrictionUpdate): Promise<datatypes.IPRestriction>;
}
/**
 * The IP Whitelist is deprecated and will be removed. Use an IP Restriction
 with an `endpoints` type instead.
 */
export declare class IPWhitelist {
    private httpClient;
    /** Do not construct this object directly, use the <code>ipWhitelist</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new IP whitelist entry that will restrict traffic to all tunnel endpoints on the account.
     */
    create(arg: datatypes.IPWhitelistEntryCreate): Promise<datatypes.IPWhitelistEntry>;
    /**
     * Delete an IP whitelist entry.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an IP whitelist entry by ID.
     */
    get(arg: datatypes.Item): Promise<datatypes.IPWhitelistEntry>;
    /**
     * List all IP whitelist entries on this account
     */
    list(): Promise<Array<datatypes.IPWhitelistEntry>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP whitelist entry by ID
     */
    update(arg: datatypes.IPWhitelistEntryUpdate): Promise<datatypes.IPWhitelistEntry>;
}
export declare class EndpointLoggingModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointLoggingModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointLoggingReplace): Promise<datatypes.EndpointLogging>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointLogging>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointCircuitBreakerModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointCircuitBreakerModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointCircuitBreakerReplace): Promise<datatypes.EndpointCircuitBreaker>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointCircuitBreaker>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointCompressionModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointCompressionModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointCompressionReplace): Promise<datatypes.EndpointCompression>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointCompression>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointTLSTerminationModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointTLSTerminationReplace): Promise<datatypes.EndpointTLSTermination>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointTLSTermination>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointIPPolicyModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointIpPolicyModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointIPPolicyReplace): Promise<datatypes.EndpointIPPolicy>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointIPPolicy>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointMutualTLSModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointMutualTLSReplace): Promise<datatypes.EndpointMutualTLS>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointMutualTLS>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointRequestHeadersModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointRequestHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointRequestHeadersReplace): Promise<datatypes.EndpointRequestHeaders>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointRequestHeaders>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointResponseHeadersModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointResponseHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointResponseHeadersReplace): Promise<datatypes.EndpointResponseHeaders>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointResponseHeaders>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointOAuthModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointOAuthModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointOAuthReplace): Promise<datatypes.EndpointOAuth>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointOAuth>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointWebhookValidationModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointWebhookValidationModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointWebhookValidationReplace): Promise<datatypes.EndpointWebhookValidation>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointWebhookValidation>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointSAMLModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointSamlModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointSAMLReplace): Promise<datatypes.EndpointSAML>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointSAML>;
    delete(arg: datatypes.Item): Promise<void>;
}
export declare class EndpointOIDCModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpointOidcModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EndpointOIDCReplace): Promise<datatypes.EndpointOIDC>;
    get(arg: datatypes.Item): Promise<datatypes.EndpointOIDC>;
    delete(arg: datatypes.Item): Promise<void>;
}
/**
 * Reserved Addresses are TCP addresses that can be used to listen for traffic.
 TCP address hostnames and ports are assigned by ngrok, they cannot be
 chosen.
 */
export declare class ReservedAddrs {
    private httpClient;
    /** Do not construct this object directly, use the <code>reservedAddrs</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new reserved address.
     */
    create(arg: datatypes.ReservedAddrCreate): Promise<datatypes.ReservedAddr>;
    /**
     * Delete a reserved address.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get the details of a reserved address.
     */
    get(arg: datatypes.Item): Promise<datatypes.ReservedAddr>;
    /**
     * List all reserved addresses on this account.
     */
    list(): Promise<Array<datatypes.ReservedAddr>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update the attributes of a reserved address.
     */
    update(arg: datatypes.ReservedAddrUpdate): Promise<datatypes.ReservedAddr>;
    /**
     * Detach the endpoint configuration attached to a reserved address.
     */
    deleteEndpointConfig(arg: datatypes.Item): Promise<void>;
}
/**
 * Reserved Domains are hostnames that you can listen for traffic on. Domains
 can be used to listen for http, https or tls traffic. You may use a domain
 that you own by creating a CNAME record specified in the returned resource.
 This CNAME record points traffic for that domain to ngrok's edge servers.
 */
export declare class ReservedDomains {
    private httpClient;
    /** Do not construct this object directly, use the <code>reservedDomains</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new reserved domain.
     */
    create(arg: datatypes.ReservedDomainCreate): Promise<datatypes.ReservedDomain>;
    /**
     * Delete a reserved domain.
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get the details of a reserved domain.
     */
    get(arg: datatypes.Item): Promise<datatypes.ReservedDomain>;
    /**
     * List all reserved domains on this account.
     */
    list(): Promise<Array<datatypes.ReservedDomain>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update the attributes of a reserved domain.
     */
    update(arg: datatypes.ReservedDomainUpdate): Promise<datatypes.ReservedDomain>;
    /**
     * Detach the certificate management policy attached to a reserved domain.
     */
    deleteCertificateManagementPolicy(arg: datatypes.Item): Promise<void>;
    /**
     * Detach the certificate attached to a reserved domain.
     */
    deleteCertificate(arg: datatypes.Item): Promise<void>;
    /**
     * Detach the http endpoint configuration attached to a reserved domain.
     */
    deleteHttpEndpointConfig(arg: datatypes.Item): Promise<void>;
    /**
     * Detach the https endpoint configuration attached to a reserved domain.
     */
    deleteHttpsEndpointConfig(arg: datatypes.Item): Promise<void>;
}
/**
 * An SSH Certificate Authority is a pair of an SSH Certificate and its private
 key that can be used to sign other SSH host and user certificates.
 */
export declare class SSHCertificateAuthorities {
    private httpClient;
    /** Do not construct this object directly, use the <code>sshCertificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new SSH Certificate Authority
     */
    create(arg: datatypes.SSHCertificateAuthorityCreate): Promise<datatypes.SSHCertificateAuthority>;
    /**
     * Delete an SSH Certificate Authority
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an SSH Certficate Authority
     */
    get(arg: datatypes.Item): Promise<datatypes.SSHCertificateAuthority>;
    /**
     * List all SSH Certificate Authorities on this account
     */
    list(): Promise<Array<datatypes.SSHCertificateAuthority>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update an SSH Certificate Authority
     */
    update(arg: datatypes.SSHCertificateAuthorityUpdate): Promise<datatypes.SSHCertificateAuthority>;
}
/**
 * SSH Credentials are SSH public keys that can be used to start SSH tunnels
 via the ngrok SSH tunnel gateway.
 */
export declare class SSHCredentials {
    private httpClient;
    /** Do not construct this object directly, use the <code>sshCredentials</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok's SSH gateway.
     */
    create(arg: datatypes.SSHCredentialCreate): Promise<datatypes.SSHCredential>;
    /**
     * Delete an ssh_credential by ID
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an ssh_credential
     */
    get(arg: datatypes.Item): Promise<datatypes.SSHCredential>;
    /**
     * List all ssh credentials on this account
     */
    list(): Promise<Array<datatypes.SSHCredential>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an ssh_credential by ID
     */
    update(arg: datatypes.SSHCredentialUpdate): Promise<datatypes.SSHCredential>;
}
/**
 * SSH Host Certificates along with the corresponding private key allows an SSH
 server to assert its authenticity to connecting SSH clients who trust the
 SSH Certificate Authority that was used to sign the certificate.
 */
export declare class SSHHostCertificates {
    private httpClient;
    /** Do not construct this object directly, use the <code>sshHostCertificates</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new SSH Host Certificate
     */
    create(arg: datatypes.SSHHostCertificateCreate): Promise<datatypes.SSHHostCertificate>;
    /**
     * Delete an SSH Host Certificate
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an SSH Host Certficate
     */
    get(arg: datatypes.Item): Promise<datatypes.SSHHostCertificate>;
    /**
     * List all SSH Host Certificates issued on this account
     */
    list(): Promise<Array<datatypes.SSHHostCertificate>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update an SSH Host Certificate
     */
    update(arg: datatypes.SSHHostCertificateUpdate): Promise<datatypes.SSHHostCertificate>;
}
/**
 * SSH User Certificates are presented by SSH clients when connecting to an SSH
 server to authenticate their connection. The SSH server must trust the SSH
 Certificate Authority used to sign the certificate.
 */
export declare class SSHUserCertificates {
    private httpClient;
    /** Do not construct this object directly, use the <code>sshUserCertificates</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new SSH User Certificate
     */
    create(arg: datatypes.SSHUserCertificateCreate): Promise<datatypes.SSHUserCertificate>;
    /**
     * Delete an SSH User Certificate
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about an SSH User Certficate
     */
    get(arg: datatypes.Item): Promise<datatypes.SSHUserCertificate>;
    /**
     * List all SSH User Certificates issued on this account
     */
    list(): Promise<Array<datatypes.SSHUserCertificate>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update an SSH User Certificate
     */
    update(arg: datatypes.SSHUserCertificateUpdate): Promise<datatypes.SSHUserCertificate>;
}
/**
 * TLS Certificates are pairs of x509 certificates and their matching private
 key that can be used to terminate TLS traffic. TLS certificates are unused
 until they are attached to a Domain. TLS Certificates may also be
 provisioned by ngrok automatically for domains on which you have enabled
 automated certificate provisioning.
 */
export declare class TLSCertificates {
    private httpClient;
    /** Do not construct this object directly, use the <code>tlsCertificates</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Upload a new TLS certificate
     */
    create(arg: datatypes.TLSCertificateCreate): Promise<datatypes.TLSCertificate>;
    /**
     * Delete a TLS certificate
     */
    delete(arg: datatypes.Item): Promise<void>;
    /**
     * Get detailed information about a TLS certificate
     */
    get(arg: datatypes.Item): Promise<datatypes.TLSCertificate>;
    /**
     * List all TLS certificates on this account
     */
    list(): Promise<Array<datatypes.TLSCertificate>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of a TLS Certificate by ID
     */
    update(arg: datatypes.TLSCertificateUpdate): Promise<datatypes.TLSCertificate>;
}
/**
 * Tunnel Sessions represent instances of ngrok agents or SSH reverse tunnel
 sessions that are running and connected to the ngrok service. Each tunnel
 session can include one or more Tunnels.
 */
export declare class TunnelSessions {
    private httpClient;
    /** Do not construct this object directly, use the <code>tunnelSessions</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * List all online tunnel sessions running on this account.
     */
    list(): Promise<Array<datatypes.TunnelSession>>;
    private _pagedList;
    private _asyncList;
    /**
     * Get the detailed status of a tunnel session by ID
     */
    get(arg: datatypes.Item): Promise<datatypes.TunnelSession>;
    /**
     * Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID.
     */
    restart(arg: datatypes.Item): Promise<void>;
    /**
     * Issues a command instructing the ngrok agent that started this tunnel session to exit.
     */
    stop(arg: datatypes.Item): Promise<void>;
    /**
     * Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted
     */
    update(arg: datatypes.TunnelSessionsUpdate): Promise<void>;
}
/**
 * Tunnels provide endpoints to access services exposed by a running ngrok
 agent tunnel session or an SSH reverse tunnel session.
 */
export declare class Tunnels {
    private httpClient;
    /** Do not construct this object directly, use the <code>tunnels</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * List all online tunnels currently running on the account.
     */
    list(): Promise<Array<datatypes.Tunnel>>;
    private _pagedList;
    private _asyncList;
}
//# sourceMappingURL=services.d.ts.map