// Code generated for API Clients. DO NOT EDIT.

export interface Empty {}

export interface Item {
  /** a resource identifier */
  id: string;
}

export interface Paging {
  beforeId?: string;
  limit?: string;
}

export interface Error {
  errorCode: string;
  statusCode: number;
  msg: string;
  details: Map<string, string>;
}

export interface Ref {
  /** a resource identifier */
  id: string;
  /** a uri for locating a resource */
  uri: string;
}

export interface AbuseReport {
  /** ID of the abuse report */
  id: string;
  /** URI of the abuse report API resource */
  uri: string;
  /** timestamp that the abuse report record was created in RFC 3339 format */
  createdAt: Date;
  /** a list of URLs containing suspected abusive content */
  urls: Array<string>;
  /** arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. */
  metadata?: string;
  /** Indicates whether ngrok has processed the abuse report. one of `PENDING`, `PROCESSED`, or `PARTIALLY_PROCESSED` */
  status: string;
  /** an array of hostname statuses related to the report */
  hostnames: Array<AbuseReportHostname>;
}

export interface AbuseReportHostname {
  /** the hostname ngrok has parsed out of one of the reported URLs in this abuse report */
  hostname: string;
  /** indicates what action ngrok has taken against the hostname. one of `PENDING`, `BANNED`, `UNBANNED`, or `IGNORE` */
  status: string;
}

export interface AbuseReportCreate {
  /** a list of URLs containing suspected abusive content */
  urls: Array<string>;
  /** arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. */
  metadata?: string;
}

export interface AgentIngressCreate {
  /** human-readable description of the use of this Agent Ingress. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes */
  metadata?: string;
  /** the domain that you own to be used as the base domain name to generate regional agent ingress domains. */
  domain: string;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional. */
  certificateManagementPolicy?: AgentIngressCertPolicy;
}

export interface AgentIngressUpdate {
  id: string;
  /** human-readable description of the use of this Agent Ingress. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes */
  metadata?: string;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional. */
  certificateManagementPolicy?: AgentIngressCertPolicy;
}

export interface AgentIngress {
  /** unique Agent Ingress resource identifier */
  id: string;
  /** URI to the API resource of this Agent ingress */
  uri: string;
  /** human-readable description of the use of this Agent Ingress. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes */
  metadata?: string;
  /** the domain that you own to be used as the base domain name to generate regional agent ingress domains. */
  domain: string;
  /** a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok */
  nsTargets: Array<string>;
  /** a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions */
  regionDomains: Array<string>;
  /** timestamp when the Agent Ingress was created, RFC 3339 format */
  createdAt: Date;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled */
  certificateManagementPolicy?: AgentIngressCertPolicy;
  /** status of the automatic certificate management for this domain, or null if automatic management is disabled */
  certificateManagementStatus?: AgentIngressCertStatus;
}

export interface AgentIngressList {
  /** the list of Agent Ingresses owned by this account */
  ingresses: Array<AgentIngress>;
  /** URI of the Agent Ingress list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface AgentIngressCertPolicy {
  /** certificate authority to request certificates from. The only supported value is letsencrypt. */
  authority: string;
  /** type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. */
  privateKeyType: string;
}

export interface AgentIngressCertStatus {
  /** timestamp when the next renewal will be requested, RFC 3339 format */
  renewsAt?: Date;
  /** status of the certificate provisioning job, or null if the certificiate isn't being provisioned or renewed */
  provisioningJob?: AgentIngressCertJob;
}

export interface AgentIngressCertJob {
  /** if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). */
  errorCode?: string;
  /** a message describing the current status or error */
  msg: string;
  /** timestamp when the provisioning job started, RFC 3339 format */
  startedAt: Date;
  /** timestamp when the provisioning job will be retried */
  retriesAt?: Date;
}

export interface APIKeyCreate {
  /** human-readable description of what uses the API key to authenticate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined data of this API key. optional, max 4096 bytes */
  metadata?: string;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface APIKeyUpdate {
  id: string;
  /** human-readable description of what uses the API key to authenticate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined data of this API key. optional, max 4096 bytes */
  metadata?: string;
}

export interface APIKey {
  /** unique API key resource identifier */
  id: string;
  /** URI to the API resource of this API key */
  uri: string;
  /** human-readable description of what uses the API key to authenticate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined data of this API key. optional, max 4096 bytes */
  metadata?: string;
  /** timestamp when the api key was created, RFC 3339 format */
  createdAt: Date;
  /** the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** */
  token?: string;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface APIKeyList {
  /** the list of API keys for this account */
  keys: Array<APIKey>;
  /** URI of the API keys list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface ApplicationSession {
  /** unique application session resource identifier */
  id: string;
  /** URI of the application session API resource */
  uri: string;
  /** URL of the hostport served by this endpoint */
  publicUrl: string;
  /** browser session details of the application session */
  browserSession: BrowserSession;
  /** application user this session is associated with */
  applicationUser?: Ref;
  /** timestamp when the user was created in RFC 3339 format */
  createdAt?: Date;
  /** timestamp when the user was last active in RFC 3339 format */
  lastActive?: Date;
  /** timestamp when session expires in RFC 3339 format */
  expiresAt?: Date;
  /** ephemeral endpoint this session is associated with */
  endpoint?: Ref;
  /** edge this session is associated with, null if the endpoint is agent-initiated */
  edge?: Ref;
  /** route this session is associated with, null if the endpoint is agent-initiated */
  route?: Ref;
}

export interface ApplicationSessionList {
  /** list of all application sessions on this account */
  applicationSessions: Array<ApplicationSession>;
  /** URI of the application session list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface BrowserSession {
  /** HTTP User-Agent data */
  userAgent: UserAgent;
  /** IP address */
  ipAddress: string;
  /** IP geolocation data */
  location?: Location;
}

export interface UserAgent {
  /** raw User-Agent request header */
  raw: string;
  /** browser name (e.g. Chrome) */
  browserName?: string;
  /** browser version (e.g. 102) */
  browserVersion?: string;
  /** type of device (e.g. Desktop) */
  deviceType?: string;
  /** operating system name (e.g. MacOS) */
  osName?: string;
  /** operating system version (e.g. 10.15.7) */
  osVersion?: string;
}

export interface Location {
  /** ISO country code */
  countryCode?: string;
  /** geographical latitude */
  latitude?: number;
  /** geographical longitude */
  longitude?: number;
  /** accuracy radius of the geographical coordinates */
  latLongRadiusKm?: number;
}

export interface ApplicationUser {
  /** unique application user resource identifier */
  id: string;
  /** URI of the application user API resource */
  uri: string;
  /** identity provider that the user authenticated with */
  identityProvider: IdentityProvider;
  /** unique user identifier */
  providerUserId: string;
  /** user username */
  username?: string;
  /** user email */
  email?: string;
  /** user common name */
  name?: string;
  /** timestamp when the user was created in RFC 3339 format */
  createdAt?: Date;
  /** timestamp when the user was last active in RFC 3339 format */
  lastActive?: Date;
  /** timestamp when the user last signed-in in RFC 3339 format */
  lastLogin?: Date;
}

export interface ApplicationUserList {
  /** list of all application users on this account */
  applicationUsers: Array<ApplicationUser>;
  /** URI of the application user list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface IdentityProvider {
  /** name of the identity provider (e.g. Google) */
  name: string;
  /** URL of the identity provider (e.g. https://accounts.google.com) */
  url: string;
}

export interface TunnelSession {
  /** version of the ngrok agent that started this ngrok tunnel session */
  agentVersion: string;
  /** reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session */
  credential: Ref;
  /** unique tunnel session resource identifier */
  id: string;
  /** source ip address of the tunnel session */
  ip: string;
  /** arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option */
  metadata?: string;
  /** operating system of the host the ngrok agent is running on */
  os: string;
  /** the ngrok region identifier in which this tunnel session was started */
  region: string;
  /** time when the tunnel session first connected to the ngrok servers */
  startedAt: Date;
  /** the transport protocol used to start the tunnel session. Either `ngrok/v2` or `ssh` */
  transport: string;
  /** URI to the API resource of the tunnel session */
  uri: string;
}

export interface TunnelSessionList {
  /** list of all tunnel sessions on this account */
  tunnelSessions: Array<TunnelSession>;
  /** URI to the API resource of the tunnel session list */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface TunnelSessionsUpdate {
  id: string;
}

export interface FailoverBackend {
  /** unique identifier for this Failover backend */
  id: string;
  /** URI of the FailoverBackend API resource */
  uri: string;
  /** timestamp when the backend was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends in order */
  backends: Array<string>;
}

export interface FailoverBackendCreate {
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends in order */
  backends: Array<string>;
}

export interface FailoverBackendUpdate {
  id: string;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends in order */
  backends: Array<string>;
}

export interface FailoverBackendList {
  /** the list of all Failover backends on this account */
  backends: Array<FailoverBackend>;
  /** URI of the Failover backends list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface HTTPResponseBackend {
  id: string;
  /** URI of the HTTPResponseBackend API resource */
  uri: string;
  /** timestamp when the backend was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** body to return as fixed content */
  body: string;
  /** headers to return */
  headers: Map<string, string>;
  /** status code to return */
  statusCode: number;
}

export interface HTTPResponseBackendCreate {
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** body to return as fixed content */
  body: string;
  /** headers to return */
  headers: Map<string, string>;
  /** status code to return */
  statusCode?: number;
}

export interface HTTPResponseBackendUpdate {
  id: string;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** body to return as fixed content */
  body?: string;
  /** headers to return */
  headers?: Map<string, string>;
  /** status code to return */
  statusCode?: number;
}

export interface HTTPResponseBackendList {
  backends: Array<HTTPResponseBackend>;
  uri: string;
  nextPageUri?: string;
}

export interface TunnelGroupBackend {
  /** unique identifier for this TunnelGroup backend */
  id: string;
  /** URI of the TunnelGroupBackend API resource */
  uri: string;
  /** timestamp when the backend was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** labels to watch for tunnels on, e.g. app->foo, dc->bar */
  labels: Map<string, string>;
  /** tunnels matching this backend */
  tunnels: Array<Ref>;
}

export interface TunnelGroupBackendCreate {
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** labels to watch for tunnels on, e.g. app->foo, dc->bar */
  labels: Map<string, string>;
}

export interface TunnelGroupBackendUpdate {
  id: string;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** labels to watch for tunnels on, e.g. app->foo, dc->bar */
  labels: Map<string, string>;
}

export interface TunnelGroupBackendList {
  /** the list of all TunnelGroup backends on this account */
  backends: Array<TunnelGroupBackend>;
  /** URI of the TunnelGroup backends list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface WeightedBackend {
  /** unique identifier for this Weighted backend */
  id: string;
  /** URI of the WeightedBackend API resource */
  uri: string;
  /** timestamp when the backend was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends to their weights [0-10000] */
  backends: Map<string, number>;
}

export interface WeightedBackendCreate {
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends to their weights [0-10000] */
  backends: Map<string, number>;
}

export interface WeightedBackendUpdate {
  id: string;
  /** human-readable description of this backend. Optional */
  description?: string;
  /** arbitrary user-defined machine-readable data of this backend. Optional */
  metadata?: string;
  /** the ids of the child backends to their weights [0-10000] */
  backends: Map<string, number>;
}

export interface WeightedBackendList {
  /** the list of all Weighted backends on this account */
  backends: Array<WeightedBackend>;
  /** URI of the Weighted backends list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface CertificateAuthorityCreate {
  /** human-readable description of this Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
  /** raw PEM of the Certificate Authority */
  caPem: string;
}

export interface CertificateAuthorityUpdate {
  id: string;
  /** human-readable description of this Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
}

export interface CertificateAuthority {
  /** unique identifier for this Certificate Authority */
  id: string;
  /** URI of the Certificate Authority API resource */
  uri: string;
  /** timestamp when the Certificate Authority was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
  /** raw PEM of the Certificate Authority */
  caPem: string;
  /** subject common name of the Certificate Authority */
  subjectCommonName: string;
  /** timestamp when this Certificate Authority becomes valid, RFC 3339 format */
  notBefore: Date;
  /** timestamp when this Certificate Authority becomes invalid, RFC 3339 format */
  notAfter: Date;
  /** set of actions the private key of this Certificate Authority can be used for */
  keyUsages: Array<string>;
  /** extended set of actions the private key of this Certificate Authority can be used for */
  extendedKeyUsages: Array<string>;
}

export interface CertificateAuthorityList {
  /** the list of all certificate authorities on this account */
  certificateAuthorities: Array<CertificateAuthority>;
  /** URI of the certificates authorities list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface CredentialCreate {
  /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl: Array<string>;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface CredentialUpdate {
  id: string;
  /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl?: Array<string>;
}

export interface Credential {
  /** unique tunnel credential resource identifier */
  id: string;
  /** URI of the tunnel credential API resource */
  uri: string;
  /** timestamp when the tunnel credential was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** the credential's authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** */
  token?: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl: Array<string>;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface CredentialList {
  /** the list of all tunnel credentials on this account */
  credentials: Array<Credential>;
  /** URI of the tunnel credential list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface EndpointWebhookValidation {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge/modules/webhook */
  provider: string;
  /** a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret */
  secret: string;
}

export interface EndpointCompression {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
}

export interface EndpointMutualTLS {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. */
  certificateAuthorities: Array<Ref>;
}

export interface EndpointMutualTLSMutate {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection */
  certificateAuthorityIds: Array<string>;
}

export interface EndpointTLSTermination {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. */
  terminateAt: string;
  /** The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. */
  minVersion?: string;
}

export interface EndpointTLSTerminationAtEdge {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. */
  minVersion?: string;
}

export interface EndpointRequestHeaders {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server */
  add: Map<string, string>;
  /** a list of header names that will be removed from the HTTP Request before being sent to the upstream application server */
  remove: Array<string>;
}

export interface EndpointResponseHeaders {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client */
  add: Map<string, string>;
  /** a list of header names that will be removed from the HTTP Response returned to the HTTP client */
  remove: Array<string>;
}

export interface EndpointIPPolicy {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** list of all IP policies that will be used to check if a source IP is allowed access to the endpoint */
  ipPolicies: Array<Ref>;
}

export interface EndpointIPPolicyMutate {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** list of all IP policies that will be used to check if a source IP is allowed access to the endpoint */
  ipPolicyIds: Array<string>;
}

export interface EndpointCircuitBreaker {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health */
  trippedDuration: number;
  /** Integer number of seconds in the statistical rolling window that metrics are retained for. */
  rollingWindow: number;
  /** Integer number of buckets into which metrics are retained. Max 128. */
  numBuckets: number;
  /** Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. */
  volumeThreshold: number;
  /** Error threshold percentage should be between 0 - 1.0, not 0-100.0 */
  errorThresholdPercentage: number;
}

export interface EndpointOAuth {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** an object which defines the identity provider to use for authentication and configuration for who may access the endpoint */
  provider: EndpointOAuthProvider;
  /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
  optionsPassthrough: boolean;
  /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
  cookiePrefix: string;
  /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
  inactivityTimeout: number;
  /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
  maximumDuration: number;
  /** Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. */
  authCheckInterval: number;
}

export interface EndpointOAuthProvider {
  /** configuration for using github as the identity provider */
  github?: EndpointOAuthGitHub;
  /** configuration for using facebook as the identity provider */
  facebook?: EndpointOAuthFacebook;
  /** configuration for using microsoft as the identity provider */
  microsoft?: EndpointOAuthMicrosoft;
  /** configuration for using google as the identity provider */
  google?: EndpointOAuthGoogle;
  /** configuration for using linkedin as the identity provider */
  linkedin?: EndpointOAuthLinkedIn;
  /** configuration for using gitlab as the identity provider */
  gitlab?: EndpointOAuthGitLab;
  /** configuration for using twitch as the identity provider */
  twitch?: EndpointOAuthTwitch;
  /** configuration for using amazon as the identity provider */
  amazon?: EndpointOAuthAmazon;
}

export interface EndpointOAuthGitHub {
  /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
  clientId?: string;
  /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. */
  clientSecret?: string;
  /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) */
  scopes?: Array<string>;
  /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
  emailAddresses?: Array<string>;
  /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
  emailDomains?: Array<string>;
  /** a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` */
  teams?: Array<string>;
  /** a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' */
  organizations?: Array<string>;
}

export interface EndpointOAuthFacebook {
  /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
  clientId?: string;
  /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. */
  clientSecret?: string;
  /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) */
  scopes: Array<string>;
  /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
  emailAddresses: Array<string>;
  /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
  emailDomains: Array<string>;
}

export interface EndpointOAuthMicrosoft {
  /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
  clientId?: string;
  /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. */
  clientSecret?: string;
  /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) */
  scopes: Array<string>;
  /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
  emailAddresses: Array<string>;
  /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
  emailDomains: Array<string>;
}

export interface EndpointOAuthGoogle {
  /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
  clientId?: string;
  /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. */
  clientSecret?: string;
  /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) */
  scopes: Array<string>;
  /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
  emailAddresses: Array<string>;
  /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
  emailDomains: Array<string>;
}

export interface EndpointOAuthLinkedIn {
  clientId?: string;
  clientSecret?: string;
  scopes: Array<string>;
  emailAddresses: Array<string>;
  emailDomains: Array<string>;
}

export interface EndpointOAuthGitLab {
  clientId?: string;
  clientSecret?: string;
  scopes: Array<string>;
  emailAddresses: Array<string>;
  emailDomains: Array<string>;
}

export interface EndpointOAuthTwitch {
  clientId?: string;
  clientSecret?: string;
  scopes: Array<string>;
  emailAddresses: Array<string>;
  emailDomains: Array<string>;
}

export interface EndpointOAuthAmazon {
  clientId?: string;
  clientSecret?: string;
  scopes: Array<string>;
  emailAddresses: Array<string>;
  emailDomains: Array<string>;
}

export interface EndpointSAML {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
  optionsPassthrough: boolean;
  /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
  cookiePrefix: string;
  /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
  inactivityTimeout: number;
  /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
  maximumDuration: number;
  /** The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. */
  idpMetadata: string;
  /** If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. */
  forceAuthn: boolean;
  /** If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. */
  allowIdpInitiated?: boolean;
  /** If present, only users who are a member of one of the listed groups may access the target endpoint. */
  authorizedGroups: Array<string>;
  /** The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. */
  entityId: string;
  /** The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. */
  assertionConsumerServiceUrl: string;
  /** The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. */
  singleLogoutUrl: string;
  /** PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. */
  requestSigningCertificatePem: string;
  /** A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. */
  metadataUrl: string;
  /** Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. */
  nameidFormat: string;
}

export interface EndpointSAMLMutate {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
  optionsPassthrough: boolean;
  /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
  cookiePrefix: string;
  /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
  inactivityTimeout: number;
  /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
  maximumDuration: number;
  /** The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. */
  idpMetadata: string;
  /** If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. */
  forceAuthn: boolean;
  /** If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. */
  allowIdpInitiated?: boolean;
  /** If present, only users who are a member of one of the listed groups may access the target endpoint. */
  authorizedGroups: Array<string>;
  /** Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. */
  nameidFormat: string;
}

export interface EndpointOIDC {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
  optionsPassthrough: boolean;
  /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
  cookiePrefix: string;
  /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
  inactivityTimeout: number;
  /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
  maximumDuration: number;
  /** URL of the OIDC "OpenID provider". This is the base URL used for discovery. */
  issuer: string;
  /** The OIDC app's client ID and OIDC audience. */
  clientId: string;
  /** The OIDC app's client secret. */
  clientSecret: string;
  /** The set of scopes to request from the OIDC identity provider. */
  scopes: Array<string>;
}

export interface EndpointBackend {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** backend to be used to back this endpoint */
  backend: Ref;
}

export interface EndpointBackendMutate {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
  /** backend to be used to back this endpoint */
  backendId: string;
}

export interface EndpointWebsocketTCPConverter {
  /** `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified */
  enabled?: boolean;
}

export interface EdgeRouteItem {
  /** unique identifier of this edge */
  edgeId: string;
  /** unique identifier of this edge route */
  id: string;
}

export interface HTTPSEdgeRouteCreate {
  /** unique identifier of this edge */
  edgeId: string;
  /** Type of match to use for this route. Valid values are "exact_path" and "path_prefix". */
  matchType: string;
  /** Route selector: "/blog" or "example.com" or "example.com/blog" */
  match: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** backend module configuration or `null` */
  backend?: EndpointBackendMutate;
  /** ip restriction module configuration or `null` */
  ipRestriction?: EndpointIPPolicyMutate;
  /** circuit breaker module configuration or `null` */
  circuitBreaker?: EndpointCircuitBreaker;
  /** compression module configuration or `null` */
  compression?: EndpointCompression;
  /** request headers module configuration or `null` */
  requestHeaders?: EndpointRequestHeaders;
  /** response headers module configuration or `null` */
  responseHeaders?: EndpointResponseHeaders;
  /** webhook verification module configuration or `null` */
  webhookVerification?: EndpointWebhookValidation;
  /** oauth module configuration or `null` */
  oauth?: EndpointOAuth;
  /** saml module configuration or `null` */
  saml?: EndpointSAMLMutate;
  /** oidc module configuration or `null` */
  oidc?: EndpointOIDC;
  /** websocket to tcp adapter configuration or `null` */
  websocketTcpConverter?: EndpointWebsocketTCPConverter;
}

export interface HTTPSEdgeRouteUpdate {
  /** unique identifier of this edge */
  edgeId: string;
  /** unique identifier of this edge route */
  id: string;
  /** Type of match to use for this route. Valid values are "exact_path" and "path_prefix". */
  matchType: string;
  /** Route selector: "/blog" or "example.com" or "example.com/blog" */
  match: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** backend module configuration or `null` */
  backend?: EndpointBackendMutate;
  /** ip restriction module configuration or `null` */
  ipRestriction?: EndpointIPPolicyMutate;
  /** circuit breaker module configuration or `null` */
  circuitBreaker?: EndpointCircuitBreaker;
  /** compression module configuration or `null` */
  compression?: EndpointCompression;
  /** request headers module configuration or `null` */
  requestHeaders?: EndpointRequestHeaders;
  /** response headers module configuration or `null` */
  responseHeaders?: EndpointResponseHeaders;
  /** webhook verification module configuration or `null` */
  webhookVerification?: EndpointWebhookValidation;
  /** oauth module configuration or `null` */
  oauth?: EndpointOAuth;
  /** saml module configuration or `null` */
  saml?: EndpointSAMLMutate;
  /** oidc module configuration or `null` */
  oidc?: EndpointOIDC;
  /** websocket to tcp adapter configuration or `null` */
  websocketTcpConverter?: EndpointWebsocketTCPConverter;
}

export interface HTTPSEdgeRoute {
  /** unique identifier of this edge */
  edgeId: string;
  /** unique identifier of this edge route */
  id: string;
  /** timestamp when the edge configuration was created, RFC 3339 format */
  createdAt: Date;
  /** Type of match to use for this route. Valid values are "exact_path" and "path_prefix". */
  matchType: string;
  /** Route selector: "/blog" or "example.com" or "example.com/blog" */
  match: string;
  /** URI of the edge API resource */
  uri: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** backend module configuration or `null` */
  backend?: EndpointBackend;
  /** ip restriction module configuration or `null` */
  ipRestriction?: EndpointIPPolicy;
  /** circuit breaker module configuration or `null` */
  circuitBreaker?: EndpointCircuitBreaker;
  /** compression module configuration or `null` */
  compression?: EndpointCompression;
  /** request headers module configuration or `null` */
  requestHeaders?: EndpointRequestHeaders;
  /** response headers module configuration or `null` */
  responseHeaders?: EndpointResponseHeaders;
  /** webhook verification module configuration or `null` */
  webhookVerification?: EndpointWebhookValidation;
  /** oauth module configuration or `null` */
  oauth?: EndpointOAuth;
  /** saml module configuration or `null` */
  saml?: EndpointSAML;
  /** oidc module configuration or `null` */
  oidc?: EndpointOIDC;
  /** websocket to tcp adapter configuration or `null` */
  websocketTcpConverter?: EndpointWebsocketTCPConverter;
}

export interface HTTPSEdgeList {
  /** the list of all HTTPS Edges on this account */
  httpsEdges: Array<HTTPSEdge>;
  /** URI of the HTTPS Edge list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface HTTPSEdgeCreate {
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  mutualTls?: EndpointMutualTLSMutate;
  tlsTermination?: EndpointTLSTerminationAtEdge;
}

export interface HTTPSEdgeUpdate {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  mutualTls?: EndpointMutualTLSMutate;
  tlsTermination?: EndpointTLSTerminationAtEdge;
}

export interface HTTPSEdge {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. */
  metadata?: string;
  /** timestamp when the edge configuration was created, RFC 3339 format */
  createdAt: Date;
  /** URI of the edge API resource */
  uri: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  mutualTls?: EndpointMutualTLS;
  tlsTermination?: EndpointTLSTermination;
  /** routes */
  routes: Array<HTTPSEdgeRoute>;
}

export interface EdgeBackendReplace {
  id: string;
  module: EndpointBackendMutate;
}

export interface EdgeIPRestrictionReplace {
  id: string;
  module: EndpointIPPolicyMutate;
}

export interface EdgeMutualTLSReplace {
  id: string;
  module: EndpointMutualTLSMutate;
}

export interface EdgeTLSTerminationReplace {
  id: string;
  module: EndpointTLSTermination;
}

export interface EdgeTLSTerminationAtEdgeReplace {
  id: string;
  module: EndpointTLSTerminationAtEdge;
}

export interface EdgeRouteBackendReplace {
  edgeId: string;
  id: string;
  module: EndpointBackendMutate;
}

export interface EdgeRouteIPRestrictionReplace {
  edgeId: string;
  id: string;
  module: EndpointIPPolicyMutate;
}

export interface EdgeRouteRequestHeadersReplace {
  edgeId: string;
  id: string;
  module: EndpointRequestHeaders;
}

export interface EdgeRouteResponseHeadersReplace {
  edgeId: string;
  id: string;
  module: EndpointResponseHeaders;
}

export interface EdgeRouteCompressionReplace {
  edgeId: string;
  id: string;
  module: EndpointCompression;
}

export interface EdgeRouteCircuitBreakerReplace {
  edgeId: string;
  id: string;
  module: EndpointCircuitBreaker;
}

export interface EdgeRouteWebhookVerificationReplace {
  edgeId: string;
  id: string;
  module: EndpointWebhookValidation;
}

export interface EdgeRouteOAuthReplace {
  edgeId: string;
  id: string;
  module: EndpointOAuth;
}

export interface EdgeRouteSAMLReplace {
  edgeId: string;
  id: string;
  module: EndpointSAMLMutate;
}

export interface EdgeRouteOIDCReplace {
  edgeId: string;
  id: string;
  module: EndpointOIDC;
}

export interface EdgeRouteWebsocketTCPConverterReplace {
  edgeId: string;
  id: string;
  module: EndpointWebsocketTCPConverter;
}

export interface TCPEdgeList {
  /** the list of all TCP Edges on this account */
  tcpEdges: Array<TCPEdge>;
  /** URI of the TCP Edge list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface TCPEdgeCreate {
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackendMutate;
  ipRestriction?: EndpointIPPolicyMutate;
}

export interface TCPEdgeUpdate {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackendMutate;
  ipRestriction?: EndpointIPPolicyMutate;
}

export interface TCPEdge {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** timestamp when the edge was created, RFC 3339 format */
  createdAt: Date;
  /** URI of the edge API resource */
  uri: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackend;
  ipRestriction?: EndpointIPPolicy;
}

export interface TLSEdgeList {
  /** the list of all TLS Edges on this account */
  tlsEdges: Array<TLSEdge>;
  /** URI of the TLS Edge list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface TLSEdgeCreate {
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackendMutate;
  ipRestriction?: EndpointIPPolicyMutate;
  mutualTls?: EndpointMutualTLSMutate;
  tlsTermination?: EndpointTLSTermination;
}

export interface TLSEdgeUpdate {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackendMutate;
  ipRestriction?: EndpointIPPolicyMutate;
  mutualTls?: EndpointMutualTLSMutate;
  tlsTermination?: EndpointTLSTermination;
}

export interface TLSEdge {
  /** unique identifier of this edge */
  id: string;
  /** human-readable description of what this edge will be used for; optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. */
  metadata?: string;
  /** timestamp when the edge configuration was created, RFC 3339 format */
  createdAt: Date;
  /** URI of the edge API resource */
  uri: string;
  /** hostports served by this edge */
  hostports?: Array<string>;
  /** edge modules */
  backend?: EndpointBackend;
  ipRestriction?: EndpointIPPolicy;
  mutualTls?: EndpointMutualTLS;
  tlsTermination?: EndpointTLSTermination;
}

export interface Endpoint {
  /** unique endpoint resource identifier */
  id: string;
  /** identifier of the region this endpoint belongs to */
  region?: string;
  /** timestamp when the endpoint was created in RFC 3339 format */
  createdAt?: Date;
  /** timestamp when the endpoint was updated in RFC 3339 format */
  updatedAt?: Date;
  /** URL of the hostport served by this endpoint */
  publicUrl: string;
  /** protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` */
  proto: string;
  /** hostport served by this endpoint (hostname:port) */
  hostport: string;
  /** whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) */
  type: string;
  /** user-supplied metadata of the associated tunnel or edge object */
  metadata?: string;
  /** the domain reserved for this endpoint */
  domain?: Ref;
  /** the address reserved for this endpoint */
  tcpAddr?: Ref;
  /** the tunnel serving requests to this endpoint, if this is an ephemeral endpoint */
  tunnel?: Ref;
  /** the edge serving requests to this endpoint, if this is an edge endpoint */
  edge?: Ref;
}

export interface EndpointList {
  /** the list of all active endpoints on this account */
  endpoints: Array<Endpoint>;
  /** URI of the endpoints list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface EventDestinationCreate {
  /** Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. */
  metadata?: string;
  /** Human-readable description of the Event Destination. Optional, max 255 bytes. */
  description?: string;
  /** The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. */
  format: string;
  /** An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. */
  target: EventTarget;
}

export interface EventDestinationUpdate {
  /** Unique identifier for this Event Destination. */
  id: string;
  /** Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. */
  metadata?: string;
  /** Human-readable description of the Event Destination. Optional, max 255 bytes. */
  description?: string;
  /** The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. */
  format?: string;
  /** An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. */
  target?: EventTarget;
}

export interface EventDestination {
  /** Unique identifier for this Event Destination. */
  id: string;
  /** Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. */
  metadata?: string;
  /** Timestamp when the Event Destination was created, RFC 3339 format. */
  createdAt: Date;
  /** Human-readable description of the Event Destination. Optional, max 255 bytes. */
  description?: string;
  /** The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. */
  format: string;
  /** An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. */
  target: EventTarget;
  /** URI of the Event Destination API resource. */
  uri: string;
}

export interface EventDestinationList {
  /** The list of all Event Destinations on this account. */
  eventDestinations: Array<EventDestination>;
  /** URI of the Event Destinations list API resource. */
  uri: string;
  /** URI of the next page, or null if there is no next page. */
  nextPageUri?: string;
}

export interface EventTarget {
  /** Configuration used to send events to Amazon Kinesis Data Firehose. */
  firehose?: EventTargetFirehose;
  /** Configuration used to send events to Amazon Kinesis. */
  kinesis?: EventTargetKinesis;
  /** Configuration used to send events to Amazon CloudWatch Logs. */
  cloudwatchLogs?: EventTargetCloudwatchLogs;
  /** Configuration used to send events to Datadog. */
  datadog?: EventTargetDatadog;
}

export interface EventTargetFirehose {
  /** Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. */
  auth: AWSAuth;
  /** An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. */
  deliveryStreamArn: string;
}

export interface EventTargetKinesis {
  /** Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. */
  auth: AWSAuth;
  /** An Amazon Resource Name specifying the Kinesis stream to deposit events into. */
  streamArn: string;
}

export interface EventTargetCloudwatchLogs {
  /** Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. */
  auth: AWSAuth;
  /** An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. */
  logGroupArn: string;
}

export interface EventTargetDatadog {
  /** Datadog API key to use. */
  apiKey?: string;
  /** Tags to send with the event. */
  ddtags?: string;
  /** Service name to send with the event. */
  service?: string;
  /** Datadog site to send event to. */
  ddsite?: string;
}

export interface AWSAuth {
  /** A role for ngrok to assume on your behalf to deposit events into your AWS account. */
  role?: AWSRole;
  /** Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. */
  creds?: AWSCredentials;
}

export interface AWSRole {
  /** An ARN that specifies the role that ngrok should use to deliver to the configured target. */
  roleArn: string;
}

export interface AWSCredentials {
  /** The ID portion of an AWS access key. */
  awsAccessKeyId: string;
  /** The secret portion of an AWS access key. */
  awsSecretAccessKey?: string;
}

export interface EventSubscriptionCreate {
  /** Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. */
  metadata?: string;
  /** Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. */
  description?: string;
  /** Sources containing the types for which this event subscription will trigger */
  sources: Array<EventSourceReplace>;
  /** A list of Event Destination IDs which should be used for this Event Subscription. */
  destinationIds: Array<string>;
}

export interface EventSubscriptionUpdate {
  /** Unique identifier for this Event Subscription. */
  id: string;
  /** Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. */
  metadata?: string;
  /** Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. */
  description?: string;
  /** Sources containing the types for which this event subscription will trigger */
  sources?: Array<EventSourceReplace>;
  /** A list of Event Destination IDs which should be used for this Event Subscription. */
  destinationIds?: Array<string>;
}

export interface EventSubscriptionList {
  /** The list of all Event Subscriptions on this account. */
  eventSubscriptions: Array<EventSubscription>;
  /** URI of the Event Subscriptions list API resource. */
  uri: string;
  /** URI of next page, or null if there is no next page. */
  nextPageUri?: string;
}

export interface EventSubscription {
  /** Unique identifier for this Event Subscription. */
  id: string;
  /** URI of the Event Subscription API resource. */
  uri: string;
  /** When the Event Subscription was created (RFC 3339 format). */
  createdAt: Date;
  /** Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. */
  metadata?: string;
  /** Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. */
  description?: string;
  /** Sources containing the types for which this event subscription will trigger */
  sources: Array<EventSource>;
  /** Destinations to which these events will be sent */
  destinations: Array<Ref>;
}

export interface EventSourceReplace {
  /** Type of event for which an event subscription will trigger */
  type: string;
}

export interface EventSource {
  /** Type of event for which an event subscription will trigger */
  type: string;
  /** URI of the Event Source API resource. */
  uri: string;
}

export interface EventSourceList {
  /** The list of all Event Sources for an Event Subscription */
  sources: Array<EventSource>;
  /** URI of the next page, or null if there is no next page. */
  uri: string;
}

export interface EventSourceCreate {
  /** The unique identifier for the Event Subscription that this Event Source is attached to. */
  subscriptionId: string;
  /** Type of event for which an event subscription will trigger */
  type: string;
}

export interface EventSourceUpdate {
  /** The unique identifier for the Event Subscription that this Event Source is attached to. */
  subscriptionId: string;
  /** Type of event for which an event subscription will trigger */
  type: string;
}

/** This is needed instead of Item because the parameters are different. */
export interface EventSourceItem {
  /** The unique identifier for the Event Subscription that this Event Source is attached to. */
  subscriptionId: string;
  /** Type of event for which an event subscription will trigger */
  type: string;
}

/** This is needed instead of Paging because the parameters are different. We also don't need the typical pagination params because pagination of this isn't necessary or supported. */
export interface EventSourcePaging {
  /** The unique identifier for the Event Subscription that this Event Source is attached to. */
  subscriptionId: string;
}

export interface IPPolicyCreate {
  /** human-readable description of the source IPs of this IP policy. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. */
  metadata?: string;
}

export interface IPPolicyUpdate {
  id: string;
  /** human-readable description of the source IPs of this IP policy. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. */
  metadata?: string;
}

export interface IPPolicy {
  /** unique identifier for this IP policy */
  id: string;
  /** URI of the IP Policy API resource */
  uri: string;
  /** timestamp when the IP policy was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of the source IPs of this IP policy. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. */
  metadata?: string;
}

export interface IPPolicyList {
  /** the list of all IP policies on this account */
  ipPolicies: Array<IPPolicy>;
  /** URI of the IP policy list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface IPPolicyRuleCreate {
  /** human-readable description of the source IPs of this IP rule. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. */
  metadata?: string;
  /** an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. */
  cidr: string;
  /** ID of the IP policy this IP policy rule will be attached to */
  ipPolicyId: string;
  /** the action to apply to the policy rule, either `allow` or `deny` */
  action?: string;
}

export interface IPPolicyRuleUpdate {
  id: string;
  /** human-readable description of the source IPs of this IP rule. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. */
  metadata?: string;
  /** an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. */
  cidr?: string;
}

export interface IPPolicyRule {
  /** unique identifier for this IP policy rule */
  id: string;
  /** URI of the IP policy rule API resource */
  uri: string;
  /** timestamp when the IP policy rule was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of the source IPs of this IP rule. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. */
  metadata?: string;
  /** an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. */
  cidr: string;
  /** object describing the IP policy this IP Policy Rule belongs to */
  ipPolicy: Ref;
  /** the action to apply to the policy rule, either `allow` or `deny` */
  action: string;
}

export interface IPPolicyRuleList {
  /** the list of all IP policy rules on this account */
  ipPolicyRules: Array<IPPolicyRule>;
  /** URI of the IP policy rule list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface IPRestrictionCreate {
  /** human-readable description of this IP restriction. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
  metadata?: string;
  /** true if the IP restriction will be enforced. if false, only warnings will be issued */
  enforced: boolean;
  /** the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` */
  type: string;
  /** the set of IP policy identifiers that are used to enforce the restriction */
  ipPolicyIds: Array<string>;
}

export interface IPRestrictionUpdate {
  id: string;
  /** human-readable description of this IP restriction. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
  metadata?: string;
  /** true if the IP restriction will be enforced. if false, only warnings will be issued */
  enforced?: boolean;
  /** the set of IP policy identifiers that are used to enforce the restriction */
  ipPolicyIds: Array<string>;
}

export interface IPRestriction {
  /** unique identifier for this IP restriction */
  id: string;
  /** URI of the IP restriction API resource */
  uri: string;
  /** timestamp when the IP restriction was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this IP restriction. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
  metadata?: string;
  /** true if the IP restriction will be enforced. if false, only warnings will be issued */
  enforced: boolean;
  /** the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` */
  type: string;
  /** the set of IP policies that are used to enforce the restriction */
  ipPolicies: Array<Ref>;
}

export interface IPRestrictionList {
  /** the list of all IP restrictions on this account */
  ipRestrictions: Array<IPRestriction>;
  /** URI of the IP restrictions list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface ReservedAddrCreate {
  /** human-readable description of what this reserved address will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
  metadata?: string;
  /** reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
  region: string;
}

export interface ReservedAddrUpdate {
  id: string;
  /** human-readable description of what this reserved address will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
  metadata?: string;
}

export interface ReservedAddr {
  /** unique reserved address resource identifier */
  id: string;
  /** URI of the reserved address API resource */
  uri: string;
  /** timestamp when the reserved address was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of what this reserved address will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostname:port of the reserved address that was assigned at creation time */
  addr: string;
  /** reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
  region: string;
}

export interface ReservedAddrList {
  /** the list of all reserved addresses on this account */
  reservedAddrs: Array<ReservedAddr>;
  /** URI of the reserved address list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface ReservedDomainCreate {
  /** hostname of the reserved domain */
  domain: string;
  /** reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
  region: string;
  /** human-readable description of what this reserved domain will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
  metadata?: string;
  /** ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. */
  certificateId?: string;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. */
  certificateManagementPolicy?: ReservedDomainCertPolicy;
}

export interface ReservedDomainUpdate {
  id: string;
  /** human-readable description of what this reserved domain will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
  metadata?: string;
  /** ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. */
  certificateId?: string;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. */
  certificateManagementPolicy?: ReservedDomainCertPolicy;
}

export interface ReservedDomain {
  /** unique reserved domain resource identifier */
  id: string;
  /** URI of the reserved domain API resource */
  uri: string;
  /** timestamp when the reserved domain was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of what this reserved domain will be used for */
  description?: string;
  /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
  metadata?: string;
  /** hostname of the reserved domain */
  domain: string;
  /** reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
  region: string;
  /** DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io */
  cnameTarget?: string;
  /** object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. */
  certificate?: Ref;
  /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled */
  certificateManagementPolicy?: ReservedDomainCertPolicy;
  /** status of the automatic certificate management for this domain, or null if automatic management is disabled */
  certificateManagementStatus?: ReservedDomainCertStatus;
  /** DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. */
  acmeChallengeCnameTarget?: string;
}

export interface ReservedDomainList {
  /** the list of all reserved domains on this account */
  reservedDomains: Array<ReservedDomain>;
  /** URI of the reserved domain list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface ReservedDomainCertPolicy {
  /** certificate authority to request certificates from. The only supported value is letsencrypt. */
  authority: string;
  /** type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. */
  privateKeyType: string;
}

export interface ReservedDomainCertStatus {
  /** timestamp when the next renewal will be requested, RFC 3339 format */
  renewsAt?: Date;
  /** status of the certificate provisioning job, or null if the certificiate isn't being provisioned or renewed */
  provisioningJob?: ReservedDomainCertJob;
}

export interface ReservedDomainCertJob {
  /** if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). */
  errorCode?: string;
  /** a message describing the current status or error */
  msg: string;
  /** timestamp when the provisioning job started, RFC 3339 format */
  startedAt: Date;
  /** timestamp when the provisioning job will be retried */
  retriesAt?: Date;
}

export interface SSHCertificateAuthorityCreate {
  /** human-readable description of this SSH Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
  /** the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519` */
  privateKeyType: string;
  /** the type of elliptic curve to use when creating an ECDSA key */
  ellipticCurve: string;
  /** the key size to use when creating an RSA key. one of `2048` or `4096` */
  keySize: number;
}

export interface SSHCertificateAuthorityUpdate {
  id: string;
  /** human-readable description of this SSH Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
}

export interface SSHCertificateAuthority {
  /** unique identifier for this SSH Certificate Authority */
  id: string;
  /** URI of the SSH Certificate Authority API resource */
  uri: string;
  /** timestamp when the SSH Certificate Authority API resource was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this SSH Certificate Authority. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. */
  metadata?: string;
  /** raw public key for this SSH Certificate Authority */
  publicKey: string;
  /** the type of private key for this SSH Certificate Authority */
  keyType: string;
}

export interface SSHCertificateAuthorityList {
  /** the list of all certificate authorities on this account */
  sshCertificateAuthorities: Array<SSHCertificateAuthority>;
  /** URI of the certificates authorities list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface SSHCredentialCreate {
  /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl: Array<string>;
  /** the PEM-encoded public key of the SSH keypair that will be used to authenticate */
  publicKey: string;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface SSHCredentialUpdate {
  id: string;
  /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl?: Array<string>;
}

export interface SSHCredential {
  /** unique ssh credential resource identifier */
  id: string;
  /** URI of the ssh credential API resource */
  uri: string;
  /** timestamp when the ssh credential was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
  metadata?: string;
  /** the PEM-encoded public key of the SSH keypair that will be used to authenticate */
  publicKey: string;
  /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. */
  acl: Array<string>;
  /** If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. */
  ownerId?: string;
}

export interface SSHCredentialList {
  /** the list of all ssh credentials on this account */
  sshCredentials: Array<SSHCredential>;
  /** URI of the ssh credential list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface SSHHostCertificateCreate {
  /** the ssh certificate authority that is used to sign this ssh host certificate */
  sshCertificateAuthorityId: string;
  /** a public key in OpenSSH Authorized Keys format that this certificate signs */
  publicKey: string;
  /** the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. */
  principals: Array<string>;
  /** The time when the host certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. */
  validAfter: Date;
  /** The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of one year in the future will be used. The OpenSSH certificates RFC calls this `valid_before`. */
  validUntil: Date;
  /** human-readable description of this SSH Host Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. */
  metadata?: string;
}

export interface SSHHostCertificateUpdate {
  id: string;
  /** human-readable description of this SSH Host Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. */
  metadata?: string;
}

export interface SSHHostCertificate {
  /** unique identifier for this SSH Host Certificate */
  id: string;
  /** URI of the SSH Host Certificate API resource */
  uri: string;
  /** timestamp when the SSH Host Certificate API resource was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this SSH Host Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. */
  metadata?: string;
  /** a public key in OpenSSH Authorized Keys format that this certificate signs */
  publicKey: string;
  /** the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` */
  keyType: string;
  /** the ssh certificate authority that is used to sign this ssh host certificate */
  sshCertificateAuthorityId: string;
  /** the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. */
  principals: Array<string>;
  /** the time when the ssh host certificate becomes valid, in RFC 3339 format. */
  validAfter: Date;
  /** the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. */
  validUntil: Date;
  /** the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive */
  certificate: string;
}

export interface SSHHostCertificateList {
  /** the list of all ssh host certificates on this account */
  sshHostCertificates: Array<SSHHostCertificate>;
  /** URI of the ssh host certificates list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface SSHUserCertificateCreate {
  /** the ssh certificate authority that is used to sign this ssh user certificate */
  sshCertificateAuthorityId: string;
  /** a public key in OpenSSH Authorized Keys format that this certificate signs */
  publicKey: string;
  /** the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. */
  principals: Array<string>;
  /** A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. */
  criticalOptions: Map<string, string>;
  /** A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. */
  extensions: Map<string, string>;
  /** The time when the user certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. */
  validAfter: Date;
  /** The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of 24 hours will be used. The OpenSSH certificates RFC calls this `valid_before`. */
  validUntil: Date;
  /** human-readable description of this SSH User Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. */
  metadata?: string;
}

export interface SSHUserCertificateUpdate {
  id: string;
  /** human-readable description of this SSH User Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. */
  metadata?: string;
}

export interface SSHUserCertificate {
  /** unique identifier for this SSH User Certificate */
  id: string;
  /** URI of the SSH User Certificate API resource */
  uri: string;
  /** timestamp when the SSH User Certificate API resource was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this SSH User Certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. */
  metadata?: string;
  /** a public key in OpenSSH Authorized Keys format that this certificate signs */
  publicKey: string;
  /** the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` */
  keyType: string;
  /** the ssh certificate authority that is used to sign this ssh user certificate */
  sshCertificateAuthorityId: string;
  /** the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. */
  principals: Array<string>;
  /** A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. */
  criticalOptions: Map<string, string>;
  /** A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. */
  extensions: Map<string, string>;
  /** the time when the ssh host certificate becomes valid, in RFC 3339 format. */
  validAfter: Date;
  /** the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. */
  validUntil: Date;
  /** the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive */
  certificate: string;
}

export interface SSHUserCertificateList {
  /** the list of all ssh user certificates on this account */
  sshUserCertificates: Array<SSHUserCertificate>;
  /** URI of the ssh user certificates list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface TLSCertificateCreate {
  /** human-readable description of this TLS certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. */
  metadata?: string;
  /** chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/cloud-edge/endpoints#certificate-chains). */
  certificatePem: string;
  /** private key for the TLS certificate, PEM-encoded. See [Private Keys](https://ngrok.com/docs/cloud-edge/endpoints#private-keys). */
  privateKeyPem: string;
}

export interface TLSCertificateUpdate {
  id: string;
  /** human-readable description of this TLS certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. */
  metadata?: string;
}

export interface TLSCertificate {
  /** unique identifier for this TLS certificate */
  id: string;
  /** URI of the TLS certificate API resource */
  uri: string;
  /** timestamp when the TLS certificate was created, RFC 3339 format */
  createdAt: Date;
  /** human-readable description of this TLS certificate. optional, max 255 bytes. */
  description?: string;
  /** arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. */
  metadata?: string;
  /** chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/cloud-edge/endpoints#certificate-chains). */
  certificatePem: string;
  /** subject common name from the leaf of this TLS certificate */
  subjectCommonName: string;
  /** subject alternative names (SANs) from the leaf of this TLS certificate */
  subjectAlternativeNames: TLSCertificateSANs;
  /** timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded */
  issuedAt?: Date;
  /** timestamp when this TLS certificate becomes valid, RFC 3339 format */
  notBefore: Date;
  /** timestamp when this TLS certificate becomes invalid, RFC 3339 format */
  notAfter: Date;
  /** set of actions the private key of this TLS certificate can be used for */
  keyUsages: Array<string>;
  /** extended set of actions the private key of this TLS certificate can be used for */
  extendedKeyUsages: Array<string>;
  /** type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. */
  privateKeyType: string;
  /** issuer common name from the leaf of this TLS certificate */
  issuerCommonName: string;
  /** serial number of the leaf of this TLS certificate */
  serialNumber: string;
  /** subject organization from the leaf of this TLS certificate */
  subjectOrganization: string;
  /** subject organizational unit from the leaf of this TLS certificate */
  subjectOrganizationalUnit: string;
  /** subject locality from the leaf of this TLS certificate */
  subjectLocality: string;
  /** subject province from the leaf of this TLS certificate */
  subjectProvince: string;
  /** subject country from the leaf of this TLS certificate */
  subjectCountry: string;
}

export interface TLSCertificateList {
  /** the list of all TLS certificates on this account */
  tlsCertificates: Array<TLSCertificate>;
  /** URI of the TLS certificates list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}

export interface TLSCertificateSANs {
  /** set of additional domains (including wildcards) this TLS certificate is valid for */
  dnsNames: Array<string>;
  /** set of IP addresses this TLS certificate is also valid for */
  ips: Array<string>;
}

export interface Tunnel {
  /** unique tunnel resource identifier */
  id: string;
  /** URL of the ephemeral tunnel's public endpoint */
  publicUrl?: string;
  /** timestamp when the tunnel was initiated in RFC 3339 format */
  startedAt: Date;
  /** user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config#common-tunnel-configuration-properties) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config#metadata). */
  metadata?: string;
  /** tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` */
  proto?: string;
  /** identifier of tune region where the tunnel is running */
  region: string;
  /** reference object pointing to the tunnel session on which this tunnel was started */
  tunnelSession: Ref;
  /** the ephemeral endpoint this tunnel is associated with, if this is an agent-initiated tunnel */
  endpoint?: Ref;
  /** the labels the tunnel group backends will match against, if this is a backend tunnel */
  labels?: Map<string, string>;
  /** tunnel group backends served by this backend tunnel */
  backends?: Array<Ref>;
  /** upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. */
  forwardsTo: string;
}

export interface TunnelList {
  /** the list of all online tunnels on this account */
  tunnels: Array<Tunnel>;
  /** URI of the tunnels list API resource */
  uri: string;
  /** URI of the next page, or null if there is no next page */
  nextPageUri?: string;
}
