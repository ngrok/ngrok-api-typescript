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
    get(id: any): Promise<datatypes.AbuseReport>;
}
export declare class AgentIngresses {
    private httpClient;
    /** Do not construct this object directly, use the <code>agentIngresses</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Agent Ingress. The ngrok agent can be configured to connect to ngrok via the new set of addresses on the returned Agent Ingress.
     */
    create(arg: datatypes.AgentIngressCreate): Promise<datatypes.AgentIngress>;
    /**
     * Delete an Agent Ingress by ID
     */
    delete(id: any): Promise<void>;
    /**
     * Get the details of an Agent Ingress by ID.
     */
    get(id: any): Promise<datatypes.AgentIngress>;
    /**
     * List all Agent Ingresses owned by this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.AgentIngress>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an Agent Ingress by ID.
     */
    update(arg: datatypes.AgentIngressUpdate): Promise<datatypes.AgentIngress>;
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
    delete(id: any): Promise<void>;
    /**
     * Get the details of an API key by ID.
     */
    get(id: any): Promise<datatypes.APIKey>;
    /**
     * List all API keys owned by this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.APIKey>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an API key by ID.
     */
    update(arg: datatypes.APIKeyUpdate): Promise<datatypes.APIKey>;
}
export declare class ApplicationSessions {
    private httpClient;
    /** Do not construct this object directly, use the <code>applicationSessions</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Get an application session by ID.
     */
    get(id: any): Promise<datatypes.ApplicationSession>;
    /**
     * Delete an application session by ID.
     */
    delete(id: any): Promise<void>;
    /**
     * List all application sessions for this account.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.ApplicationSession>>;
    private _pagedList;
    private _asyncList;
}
export declare class ApplicationUsers {
    private httpClient;
    /** Do not construct this object directly, use the <code>applicationUsers</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Get an application user by ID.
     */
    get(id: any): Promise<datatypes.ApplicationUser>;
    /**
     * Delete an application user by ID.
     */
    delete(id: any): Promise<void>;
    /**
     * List all application users for this account.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.ApplicationUser>>;
    private _pagedList;
    private _asyncList;
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
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.TunnelSession>>;
    private _pagedList;
    private _asyncList;
    /**
     * Get the detailed status of a tunnel session by ID
     */
    get(id: any): Promise<datatypes.TunnelSession>;
    /**
     * Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID.
     */
    restart(id: any): Promise<void>;
    /**
     * Issues a command instructing the ngrok agent that started this tunnel session to exit.
     */
    stop(id: any): Promise<void>;
    /**
     * Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted
     */
    update(arg: datatypes.TunnelSessionsUpdate): Promise<void>;
}
/**
 * A Failover backend defines failover behavior within a list of referenced
 backends. Traffic is sent to the first backend in the list. If that backend
 is offline or no connection can be established, ngrok attempts to connect to
 the next backend in the list until one is successful.
 */
export declare class FailoverBackends {
    private httpClient;
    /** Do not construct this object directly, use the <code>failoverBackends</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Failover backend
     */
    create(arg: datatypes.FailoverBackendCreate): Promise<datatypes.FailoverBackend>;
    /**
     * Delete a Failover backend by ID.
     */
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a Failover backend by ID
     */
    get(id: any): Promise<datatypes.FailoverBackend>;
    /**
     * List all Failover backends on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.FailoverBackend>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update Failover backend by ID
     */
    update(arg: datatypes.FailoverBackendUpdate): Promise<datatypes.FailoverBackend>;
}
export declare class HTTPResponseBackends {
    private httpClient;
    /** Do not construct this object directly, use the <code>httpResponseBackends</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    create(arg: datatypes.HTTPResponseBackendCreate): Promise<datatypes.HTTPResponseBackend>;
    delete(id: any): Promise<void>;
    get(id: any): Promise<datatypes.HTTPResponseBackend>;
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.HTTPResponseBackend>>;
    private _pagedList;
    private _asyncList;
    update(arg: datatypes.HTTPResponseBackendUpdate): Promise<datatypes.HTTPResponseBackend>;
}
/**
 * A Tunnel Group Backend balances traffic among all online tunnels that match
 a label selector.
 */
export declare class TunnelGroupBackends {
    private httpClient;
    /** Do not construct this object directly, use the <code>tunnelGroupBackends</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new TunnelGroup backend
     */
    create(arg: datatypes.TunnelGroupBackendCreate): Promise<datatypes.TunnelGroupBackend>;
    /**
     * Delete a TunnelGroup backend by ID.
     */
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a TunnelGroup backend by ID
     */
    get(id: any): Promise<datatypes.TunnelGroupBackend>;
    /**
     * List all TunnelGroup backends on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.TunnelGroupBackend>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update TunnelGroup backend by ID
     */
    update(arg: datatypes.TunnelGroupBackendUpdate): Promise<datatypes.TunnelGroupBackend>;
}
/**
 * A Weighted Backend balances traffic among the referenced backends. Traffic
 is assigned proportionally to each based on its weight. The percentage of
 traffic is calculated by dividing a backend's weight by the sum of all
 weights.
 */
export declare class WeightedBackends {
    private httpClient;
    /** Do not construct this object directly, use the <code>weightedBackends</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Weighted backend
     */
    create(arg: datatypes.WeightedBackendCreate): Promise<datatypes.WeightedBackend>;
    /**
     * Delete a Weighted backend by ID.
     */
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a Weighted backend by ID
     */
    get(id: any): Promise<datatypes.WeightedBackend>;
    /**
     * List all Weighted backends on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.WeightedBackend>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update Weighted backend by ID
     */
    update(arg: datatypes.WeightedBackendUpdate): Promise<datatypes.WeightedBackend>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a certficate authority
     */
    get(id: any): Promise<datatypes.CertificateAuthority>;
    /**
     * List all Certificate Authority on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.CertificateAuthority>>;
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
 the `ngrok config add-authtoken` command or by specifying it in the `ngrok.yml`
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a tunnel authtoken credential
     */
    get(id: any): Promise<datatypes.Credential>;
    /**
     * List all tunnel authtoken credentials on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.Credential>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an tunnel authtoken credential by ID
     */
    update(arg: datatypes.CredentialUpdate): Promise<datatypes.Credential>;
}
export declare class EdgesHTTPSRoutes {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgesHttpsRoutes</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create an HTTPS Edge Route
     */
    create(arg: datatypes.HTTPSEdgeRouteCreate): Promise<datatypes.HTTPSEdgeRoute>;
    /**
     * Get an HTTPS Edge Route by ID
     */
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.HTTPSEdgeRoute>;
    /**
     * Updates an HTTPS Edge Route by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
     */
    update(arg: datatypes.HTTPSEdgeRouteUpdate): Promise<datatypes.HTTPSEdgeRoute>;
    /**
     * Delete an HTTPS Edge Route by ID
     */
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgesHTTPS {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgesHttps</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create an HTTPS Edge
     */
    create(arg: datatypes.HTTPSEdgeCreate): Promise<datatypes.HTTPSEdge>;
    /**
     * Get an HTTPS Edge by ID
     */
    get(id: any): Promise<datatypes.HTTPSEdge>;
    /**
     * Returns a list of all HTTPS Edges on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.HTTPSEdge>>;
    private _pagedList;
    private _asyncList;
    /**
     * Updates an HTTPS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
     */
    update(arg: datatypes.HTTPSEdgeUpdate): Promise<datatypes.HTTPSEdge>;
    /**
     * Delete an HTTPS Edge by ID
     */
    delete(id: any): Promise<void>;
}
export declare class HTTPSEdgeMutualTLSModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>httpsEdgeMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeMutualTLSReplace): Promise<datatypes.EndpointMutualTLS>;
    get(id: any): Promise<datatypes.EndpointMutualTLS>;
    delete(id: any): Promise<void>;
}
export declare class HTTPSEdgeTLSTerminationModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>httpsEdgeTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeTLSTerminationAtEdgeReplace): Promise<datatypes.EndpointTLSTermination>;
    get(id: any): Promise<datatypes.EndpointTLSTermination>;
    delete(id: any): Promise<void>;
}
export declare class EdgeRouteBackendModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteBackendModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteBackendReplace): Promise<datatypes.EndpointBackend>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointBackend>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteIPRestrictionModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteIPRestrictionReplace): Promise<datatypes.EndpointIPPolicy>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointIPPolicy>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteRequestHeadersModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteRequestHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteRequestHeadersReplace): Promise<datatypes.EndpointRequestHeaders>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointRequestHeaders>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteResponseHeadersModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteResponseHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteResponseHeadersReplace): Promise<datatypes.EndpointResponseHeaders>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointResponseHeaders>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteCompressionModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteCompressionModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteCompressionReplace): Promise<datatypes.EndpointCompression>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointCompression>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteCircuitBreakerModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteCircuitBreakerModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteCircuitBreakerReplace): Promise<datatypes.EndpointCircuitBreaker>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointCircuitBreaker>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteWebhookVerificationModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteWebhookVerificationModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteWebhookVerificationReplace): Promise<datatypes.EndpointWebhookValidation>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointWebhookValidation>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteOAuthModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteOAuthModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteOAuthReplace): Promise<datatypes.EndpointOAuth>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointOAuth>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteSAMLModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteSamlModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteSAMLReplace): Promise<datatypes.EndpointSAML>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointSAML>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteOIDCModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteOidcModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteOIDCReplace): Promise<datatypes.EndpointOIDC>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointOIDC>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgeRouteWebsocketTCPConverterModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgeRouteWebsocketTcpConverterModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeRouteWebsocketTCPConverterReplace): Promise<datatypes.EndpointWebsocketTCPConverter>;
    get(arg: datatypes.EdgeRouteItem): Promise<datatypes.EndpointWebsocketTCPConverter>;
    delete(arg: datatypes.EdgeRouteItem): Promise<void>;
}
export declare class EdgesTCP {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgesTcp</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a TCP Edge
     */
    create(arg: datatypes.TCPEdgeCreate): Promise<datatypes.TCPEdge>;
    /**
     * Get a TCP Edge by ID
     */
    get(id: any): Promise<datatypes.TCPEdge>;
    /**
     * Returns a list of all TCP Edges on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.TCPEdge>>;
    private _pagedList;
    private _asyncList;
    /**
     * Updates a TCP Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
     */
    update(arg: datatypes.TCPEdgeUpdate): Promise<datatypes.TCPEdge>;
    /**
     * Delete a TCP Edge by ID
     */
    delete(id: any): Promise<void>;
}
export declare class TCPEdgeBackendModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tcpEdgeBackendModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeBackendReplace): Promise<datatypes.EndpointBackend>;
    get(id: any): Promise<datatypes.EndpointBackend>;
    delete(id: any): Promise<void>;
}
export declare class TCPEdgeIPRestrictionModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tcpEdgeIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeIPRestrictionReplace): Promise<datatypes.EndpointIPPolicy>;
    get(id: any): Promise<datatypes.EndpointIPPolicy>;
    delete(id: any): Promise<void>;
}
export declare class EdgesTLS {
    private httpClient;
    /** Do not construct this object directly, use the <code>edgesTls</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a TLS Edge
     */
    create(arg: datatypes.TLSEdgeCreate): Promise<datatypes.TLSEdge>;
    /**
     * Get a TLS Edge by ID
     */
    get(id: any): Promise<datatypes.TLSEdge>;
    /**
     * Returns a list of all TLS Edges on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.TLSEdge>>;
    private _pagedList;
    private _asyncList;
    /**
     * Updates a TLS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
     */
    update(arg: datatypes.TLSEdgeUpdate): Promise<datatypes.TLSEdge>;
    /**
     * Delete a TLS Edge by ID
     */
    delete(id: any): Promise<void>;
}
export declare class TLSEdgeBackendModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tlsEdgeBackendModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeBackendReplace): Promise<datatypes.EndpointBackend>;
    get(id: any): Promise<datatypes.EndpointBackend>;
    delete(id: any): Promise<void>;
}
export declare class TLSEdgeIPRestrictionModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tlsEdgeIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeIPRestrictionReplace): Promise<datatypes.EndpointIPPolicy>;
    get(id: any): Promise<datatypes.EndpointIPPolicy>;
    delete(id: any): Promise<void>;
}
export declare class TLSEdgeMutualTLSModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tlsEdgeMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeMutualTLSReplace): Promise<datatypes.EndpointMutualTLS>;
    get(id: any): Promise<datatypes.EndpointMutualTLS>;
    delete(id: any): Promise<void>;
}
export declare class TLSEdgeTLSTerminationModule {
    private httpClient;
    /** Do not construct this object directly, use the <code>tlsEdgeTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    replace(arg: datatypes.EdgeTLSTerminationReplace): Promise<datatypes.EndpointTLSTermination>;
    get(id: any): Promise<datatypes.EndpointTLSTermination>;
    delete(id: any): Promise<void>;
}
/**
 * Endpoints provides an API for querying the endpoint objects
 which define what tunnel or edge is used to serve a hostport.
 Only active endpoints associated with a tunnel or backend are returned.
 */
export declare class Endpoints {
    private httpClient;
    /** Do not construct this object directly, use the <code>endpoints</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * List all active endpoints on the account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.Endpoint>>;
    private _pagedList;
    private _asyncList;
    /**
     * Get the status of an endpoint by ID
     */
    get(id: any): Promise<datatypes.Endpoint>;
}
export declare class EventDestinations {
    private httpClient;
    /** Do not construct this object directly, use the <code>eventDestinations</code> property of an <code>Ngrok</code> client object instead. */
    constructor(httpClient: Wretcher);
    /**
     * Create a new Event Destination. It will not apply to anything until it is associated with an Event Subscription.
     */
    create(arg: datatypes.EventDestinationCreate): Promise<datatypes.EventDestination>;
    /**
     * Delete an Event Destination. If the Event Destination is still referenced by an Event Subscription.
     */
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an Event Destination by ID.
     */
    get(id: any): Promise<datatypes.EventDestination>;
    /**
     * List all Event Destinations on this account.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.EventDestination>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get an Event Subscription by ID.
     */
    get(id: any): Promise<datatypes.EventSubscription>;
    /**
     * List this Account's Event Subscriptions.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.EventSubscription>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an IP policy by ID.
     */
    get(id: any): Promise<datatypes.IPPolicy>;
    /**
     * List all IP policies on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.IPPolicy>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an IP policy rule by ID.
     */
    get(id: any): Promise<datatypes.IPPolicyRule>;
    /**
     * List all IP policy rules on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.IPPolicyRule>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP policy rule by ID
     */
    update(arg: datatypes.IPPolicyRuleUpdate): Promise<datatypes.IPPolicyRule>;
}
/**
 * An IP restriction is a restriction placed on the CIDRs that are allowed to
 initiate traffic to a specific aspect of your ngrok account. An IP
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an IP restriction
     */
    get(id: any): Promise<datatypes.IPRestriction>;
    /**
     * List all IP restrictions on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.IPRestriction>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of an IP restriction by ID
     */
    update(arg: datatypes.IPRestrictionUpdate): Promise<datatypes.IPRestriction>;
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
    delete(id: any): Promise<void>;
    /**
     * Get the details of a reserved address.
     */
    get(id: any): Promise<datatypes.ReservedAddr>;
    /**
     * List all reserved addresses on this account.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.ReservedAddr>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update the attributes of a reserved address.
     */
    update(arg: datatypes.ReservedAddrUpdate): Promise<datatypes.ReservedAddr>;
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
    delete(id: any): Promise<void>;
    /**
     * Get the details of a reserved domain.
     */
    get(id: any): Promise<datatypes.ReservedDomain>;
    /**
     * List all reserved domains on this account.
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.ReservedDomain>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update the attributes of a reserved domain.
     */
    update(arg: datatypes.ReservedDomainUpdate): Promise<datatypes.ReservedDomain>;
    /**
     * Detach the certificate management policy attached to a reserved domain.
     */
    deleteCertificateManagementPolicy(id: any): Promise<void>;
    /**
     * Detach the certificate attached to a reserved domain.
     */
    deleteCertificate(id: any): Promise<void>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an SSH Certficate Authority
     */
    get(id: any): Promise<datatypes.SSHCertificateAuthority>;
    /**
     * List all SSH Certificate Authorities on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.SSHCertificateAuthority>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an ssh_credential
     */
    get(id: any): Promise<datatypes.SSHCredential>;
    /**
     * List all ssh credentials on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.SSHCredential>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an SSH Host Certficate
     */
    get(id: any): Promise<datatypes.SSHHostCertificate>;
    /**
     * List all SSH Host Certificates issued on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.SSHHostCertificate>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about an SSH User Certficate
     */
    get(id: any): Promise<datatypes.SSHUserCertificate>;
    /**
     * List all SSH User Certificates issued on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.SSHUserCertificate>>;
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
    delete(id: any): Promise<void>;
    /**
     * Get detailed information about a TLS certificate
     */
    get(id: any): Promise<datatypes.TLSCertificate>;
    /**
     * List all TLS certificates on this account
     */
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.TLSCertificate>>;
    private _pagedList;
    private _asyncList;
    /**
     * Update attributes of a TLS Certificate by ID
     */
    update(arg: datatypes.TLSCertificateUpdate): Promise<datatypes.TLSCertificate>;
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
    list(beforeId?: string, limit?: string): Promise<Array<datatypes.Tunnel>>;
    private _pagedList;
    private _asyncList;
    /**
     * Get the status of a tunnel by ID
     */
    get(id: any): Promise<datatypes.Tunnel>;
}
//# sourceMappingURL=services.d.ts.map