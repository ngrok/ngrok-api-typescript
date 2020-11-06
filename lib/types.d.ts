export interface Empty {
}
export interface Item {
    /** a resource identifier */
    id: string;
}
export interface Page {
    before_id?: string;
    limit?: string;
}
export interface Error {
    error_code: string;
    status_code: number;
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
    created_at: string;
    /** a list of URLs containing suspected abusive content */
    urls: Array<string>;
    /** arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. */
    metadata: string;
    /** Indicates whether ngrok has processed the abuse report. one of <code>PENDING</code>, <code>PROCESSED</code>, or <code>PARTIALLY_PROCESSED</code> */
    status: string;
    /** an array of hostname statuses related to the report */
    hostnames: Array<AbuseReportHostname>;
}
export interface AbuseReportHostname {
    /** the hostname ngrok has parsed out of one of the reported URLs in this abuse report */
    hostname: string;
    /** indicates what action ngrok has taken against the hostname. one of <code>PENDING</code>, <code>BANNED</code>, <code>UNBANNED</code>, or <code>IGNORE</code> */
    status: string;
}
export interface AbuseReportCreate {
    /** a list of URLs containing suspected abusive content */
    urls: Array<string>;
    /** arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. */
    metadata: string;
}
export interface APIKeyCreate {
    /** human-readable description of what uses the API key to authenticate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined data of this API key. optional, max 4096 bytes */
    metadata: string;
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
    description: string;
    /** arbitrary user-defined data of this API key. optional, max 4096 bytes */
    metadata: string;
    /** timestamp when the api key was created, RFC 3339 format */
    created_at: string;
    /** the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. <strong>This value is only available one time, on the API response from key creation. Otherwise it is null.</strong> */
    token?: string;
}
export interface APIKeyList {
    /** the list of API keys for this account */
    keys: Array<APIKey>;
    /** URI of the API keys list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface CertificateAuthorityCreate {
    /** human-readable description of this Certificate Authority. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. */
    metadata: string;
    /** raw PEM of the Certificate Authority */
    ca_pem: string;
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
    created_at: string;
    /** human-readable description of this Certificate Authority. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. */
    metadata: string;
    /** raw PEM of the Certificate Authority */
    ca_pem: string;
    /** subject common name of the Certificate Authority */
    subject_common_name: string;
    /** timestamp when this Certificate Authority becomes valid, RFC 3339 format */
    not_before: string;
    /** timestamp when this Certificate Authority becomes invalid, RFC 3339 format */
    not_after: string;
    /** set of actions the private key of this Certificate Authority can be used for */
    key_usages: Array<string>;
    /** extended set of actions the private key of this Certificate Authority can be used for */
    extended_key_usages: Array<string>;
}
export interface CertificateAuthorityList {
    /** the list of all certificate authorities on this account */
    certificate_authorities: Array<CertificateAuthority>;
    /** URI of the certificates authorities list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface CredentialCreate {
    /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
    metadata: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl: Array<string>;
}
export interface CredentialUpdate {
    id: string;
    /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
    description?: string;
    /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
    metadata?: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl?: Array<string>;
}
export interface Credential {
    /** unique tunnel credential resource identifier */
    id: string;
    /** URI of the tunnel credential API resource */
    uri: string;
    /** timestamp when the tunnel credential was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. */
    metadata: string;
    /** the credential's authtoken that can be used to authenticate an ngrok client. <strong><em>This value is only available one time, on the API response from credential creation, otherwise it is null.</em></strong> */
    token?: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl: Array<string>;
}
export interface CredentialList {
    /** the list of all tunnel credentials on this account */
    credentials: Array<Credential>;
    /** URI of the tunnel credential list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface IPPolicyCreate {
    /** human-readable description of the source IPs of this IP policy. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. */
    metadata: string;
    /** the IP policy action. Supported values are <code>allow</code> or <code>deny</code> */
    action: string;
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
    created_at: string;
    /** human-readable description of the source IPs of this IP policy. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. */
    metadata: string;
    /** the IP policy action. Supported values are <code>allow</code> or <code>deny</code> */
    action: string;
}
export interface IPPolicyList {
    /** the list of all IP policies on this account */
    ip_policies: Array<IPPolicy>;
    /** URI of the IP policy list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface IPPolicyRuleCreate {
    /** human-readable description of the source IPs of this IP rule. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. */
    metadata: string;
    /** an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. */
    cidr: string;
    /** ID of the IP policy this IP policy rule will be attached to */
    ip_policy_id: string;
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
    created_at: string;
    /** human-readable description of the source IPs of this IP rule. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. */
    metadata: string;
    /** an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. */
    cidr: string;
    /** object describing the IP policy this IP Policy Rule belongs to */
    ip_policy: Ref;
}
export interface IPPolicyRuleList {
    /** the list of all IP policy rules on this account */
    ip_policy_rules: Array<IPPolicyRule>;
    /** URI of the IP policy rule list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface IPRestrictionCreate {
    /** human-readable description of this IP restriction. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
    metadata: string;
    /** true if the IP restriction will be enforce. if false, only warnings will be issued */
    enforced: boolean;
    /** the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: <code>dashboard</code>, <code>api</code>, <code>agent</code>, and <code>endpoints</code> */
    type: string;
    /** the set of IP policy identifiers that are used to enforce the restriction */
    ip_policy_ids: Array<string>;
}
export interface IPRestrictionUpdate {
    id: string;
    /** human-readable description of this IP restriction. optional, max 255 bytes. */
    description?: string;
    /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
    metadata?: string;
    /** true if the IP restriction will be enforce. if false, only warnings will be issued */
    enforced?: boolean;
    /** the set of IP policy identifiers that are used to enforce the restriction */
    ip_policy_ids: Array<string>;
}
export interface IPRestriction {
    /** unique identifier for this IP restriction */
    id: string;
    /** URI of the IP restriction API resource */
    uri: string;
    /** timestamp when the IP restriction was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of this IP restriction. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. */
    metadata: string;
    /** true if the IP restriction will be enforce. if false, only warnings will be issued */
    enforced: boolean;
    /** the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: <code>dashboard</code>, <code>api</code>, <code>agent</code>, and <code>endpoints</code> */
    type: string;
    /** the set of IP policies that are used to enforce the restriction */
    ip_policies: Array<Ref>;
}
export interface IPRestrictionList {
    /** the list of all IP restrictions on this account */
    ip_restrictions: Array<IPRestriction>;
    /** URI of the IP resrtrictions list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface IPWhitelistEntryCreate {
    /** human-readable description of the source IPs for this IP whitelist entry. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP whitelist entry. optional, max 4096 bytes. */
    metadata: string;
    /** an IP address or IP network range in CIDR notation (e.g. 10.1.1.1 or 10.1.0.0/16) of addresses that will be whitelisted to communicate with your tunnel endpoints */
    ip_net: string;
}
export interface IPWhitelistEntryUpdate {
    id: string;
    /** human-readable description of the source IPs for this IP whitelist entry. optional, max 255 bytes. */
    description?: string;
    /** arbitrary user-defined machine-readable data of this IP whitelist entry. optional, max 4096 bytes. */
    metadata?: string;
}
export interface IPWhitelistEntry {
    /** unique identifier for this IP whitelist entry */
    id: string;
    /** URI of the IP whitelist entry API resource */
    uri: string;
    /** timestamp when the IP whitelist entry was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of the source IPs for this IP whitelist entry. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this IP whitelist entry. optional, max 4096 bytes. */
    metadata: string;
    /** an IP address or IP network range in CIDR notation (e.g. 10.1.1.1 or 10.1.0.0/16) of addresses that will be whitelisted to communicate with your tunnel endpoints */
    ip_net: string;
}
export interface IPWhitelistEntryList {
    /** the list of all IP whitelist entries on this account */
    whitelist: Array<IPWhitelistEntry>;
    /** URI of the IP whitelist API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface LogConfigCreate {
    /** Arbitrary user-defined machine-readable data of this Log Config. Optional, max 4096 bytes. */
    metadata: string;
    /** Human-readable description of the Log Config. Optional, max 255 bytes. */
    description: string;
    /** A list of protocol-specific fields you want to collect on each logging event. */
    fields: Array<string>;
    /** The protocol that determines which events can be logged. Supported values are <code>tcp_connection_closed</code> and <code>http_request_complete</code>. */
    event_type: string;
    /** A list of Log Destination ids which should be applied to this Log Config. Log Configs are required to have at least one Log Destination. */
    destination_ids: Array<string>;
    /** The percentage of all events you would like to log. Valid values range from 0.01, representing 1% of all events to 1.00, representing 100% of all events. */
    sampling_rate: number;
}
export interface LogConfigUpdate {
    /** Unique identifier for this Log Config. */
    id: string;
    /** Arbitrary user-defined machine-readable data of this Log Config. Optional, max 4096 bytes. */
    metadata?: string;
    /** Human-readable description of the Log Config. Optional, max 255 bytes. */
    description?: string;
    /** A list of protocol-specific fields you want to collect on each logging event. */
    fields?: Array<string>;
    /** A list of Log Destination ids which should be applied to this Log Config. Log Configs are required to have at least one Log Destination. */
    destination_ids?: Array<string>;
    /** The percentage of all events you would like to log. Valid values range from 0.01, representing 1% of all events to 1.00, representing 100% of all events. */
    sampling_rate?: number;
}
export interface LogConfigList {
    /** The list of all Log Configs on this account. */
    log_configs: Array<LogConfig>;
    /** URI of the Log Config list API resource. */
    uri: string;
    /** URI of the next page, or null if there is no next page. */
    next_page_uri?: string;
}
export interface LogConfig {
    /** Unique identifier for this Log Config. */
    id: string;
    /** URI of the Log Config API resource. */
    uri: string;
    /** Timestamp when the Log Config was created, RFC 3339 format. */
    created_at: string;
    /** Arbitrary user-defined machine-readable data of this Log Config. Optional, max 4096 bytes. */
    metadata: string;
    /** Human-readable description of the Log Config. Optional, max 255 bytes. */
    description: string;
    /** A list of protocol-specific fields you want to collect on each logging event. */
    fields: Array<string>;
    /** The protocol that determines which events can be logged. Supported values are <code>tcp_connection_closed</code> and <code>http_request_complete</code>. */
    event_type: string;
    /** A list of Log Destination ids which should be applied to this Log Config. Log Configs are required to have at least one Log Destination. */
    destination_ids: Array<string>;
    /** The percentage of all events you would like to log. Valid values range from 0.01, representing 1% of all events to 1.00, representing 100% of all events. */
    sampling_rate: number;
}
export interface LogDestinationCreate {
    /** Arbitrary user-defined machine-readable data of this Log Destination. Optional, max 4096 bytes. */
    metadata: string;
    /** Human-readable description of the Log Destination. Optional, max 255 bytes. */
    description: string;
    /** The output format you would like to serialize your logs into before they post to their target. Currently the only accepted value is <code>JSON</code>. */
    format: string;
    /** An object that encapsulates where and how to send your logs to their ultimate destination. A log destination must contain exactly one of the following objects, leaving the rest null: <code>kinesis</code>, <code>firehose</code>, <code>cloudwatch</code>, or <code>S3</code>. */
    target: LogDestinationTarget;
}
export interface LogDestinationUpdate {
    /** Unique identifier for this Log Destination. */
    id: string;
    /** Arbitrary user-defined machine-readable data of this Log Destination. Optional, max 4096 bytes. */
    metadata?: string;
    /** Human-readable description of the Log Destination. Optional, max 255 bytes. */
    description?: string;
    /** The output format you would like to serialize your logs into before they post to their target. Currently the only accepted value is <code>JSON</code>. */
    format?: string;
    /** An object that encapsulates where and how to send your logs to their ultimate destination. A log destination must contain exactly one of the following objects, leaving the rest null: <code>kinesis</code>, <code>firehose</code>, <code>cloudwatch</code>, or <code>S3</code>. */
    target?: LogDestinationTarget;
}
export interface LogDestination {
    /** Unique identifier for this Log Destination. */
    id: string;
    /** Arbitrary user-defined machine-readable data of this Log Destination. Optional, max 4096 bytes. */
    metadata: string;
    /** Timestamp when the Log Destination was created, RFC 3339 format. */
    created_at: string;
    /** Human-readable description of the Log Destination. Optional, max 255 bytes. */
    description: string;
    /** The output format you would like to serialize your logs into before they post to their target. Currently the only accepted value is <code>JSON</code>. */
    format: string;
    /** An object that encapsulates where and how to send your logs to their ultimate destination. A log destination must contain exactly one of the following objects, leaving the rest null: <code>kinesis</code>, <code>firehose</code>, <code>cloudwatch</code>, or <code>S3</code>. */
    target: LogDestinationTarget;
    /** URI of the Log Destination API resource. */
    uri: string;
}
export interface LogDestinationList {
    /** The list of all Log Destinations on this account. */
    log_destinations: Array<LogDestination>;
    /** URI of the Log Destinations list API resource. */
    uri: string;
    /** URI of the next page, or null if there is no next page. */
    next_page_uri?: string;
}
export interface LogDestinationTarget {
    /** Configuration used to stream logs to Amazon Kinesis Data Firehose. */
    firehose?: Firehose;
    /** Configuration used to stream logs to Amazon Kinesis. */
    kinesis?: Kinesis;
    /** Configuration used to send logs to Amazon CloudWatch Logs. */
    cloudwatch?: Cloudwatch;
    /** Configuration used for internal debugging. */
    debug?: EventTargetDebug;
}
export interface Firehose {
    /** Configuration authentication into your AWS account. Exactly one of <code>role</code> or <code>creds</code> should be configured. */
    auth: AWSAuth;
    /** An Amazon Resource Name specifying the Firehose delivery stream to deposit logs into. */
    delivery_stream_arn: string;
}
export interface Kinesis {
    /** Configuration authentication into your AWS account. Exactly one of <code>role</code> or <code>creds</code> should be configured. */
    auth: AWSAuth;
    /** An Amazon Resource Name specifying the Kinesis stream to deposit logs into. */
    stream_arn: string;
}
export interface Cloudwatch {
    /** Configuration authentication into your AWS account. Exactly one of <code>role</code> or <code>creds</code> should be configured. */
    auth: AWSAuth;
    /** An Amazon Resource Name specifying the CloudWatch Logs group to deposit logs with. */
    log_group_arn: string;
}
export interface S3 {
    /** Configuration authentication into your AWS account. Exactly one of <code>role</code> or <code>creds</code> should be configured. */
    auth: AWSAuth;
    /** An Amazon Resource Name specifying the S3 bucket to post logs into. */
    bucket_arn: string;
    /** An optional prefix to prepend to S3 object keys. */
    object_prefix: string;
    /** Whether or not to compress log files with gzip. */
    compression: boolean;
    /** How large in bytes we should accumulate logs before sending them to S3. */
    max_file_size: number;
    /** The maximum age in seconds we should accumulate logs before sending them to S3. */
    max_file_age: number;
}
export interface EventTargetDebug {
    /** Whether or not to output to publisher service logs. */
    log: boolean;
    /** Url to send events to. */
    callback_url: string;
}
export interface AWSAuth {
    /** A role for ngrok to assume on your behalf to deposit logs into your AWS account. */
    role?: AWSRole;
    /** Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. */
    creds?: AWSCredentials;
}
export interface AWSRole {
    /** An arn that describes a role that ngrok can assume and use to post to the configured target. */
    arn: string;
}
export interface AWSCredentials {
    /** The ID portion of an AWS access key. */
    aws_access_key_id: string;
    /** The secret portion of an AWS access key. */
    aws_secret_access_key?: string;
}
export interface EndpointConfiguration {
    /** unique identifier of this endpoint configuration */
    id: string;
    /** they type of traffic this endpoint configuration can be applied to. one of: <code>http</code>, <code>https</code>, <code>tcp</code> */
    type: string;
    /** human-readable description of what this endpoint configuration will be do when applied or what traffic it will be applied to. Optional, max 255 bytes */
    description: string;
    /** arbitrary user-defined machine-readable data of this endpoint configuration. Optional, max 4096 bytes. */
    metadata: string;
    /** timestamp when the endpoint configuration was created, RFC 3339 format */
    created_at: string;
    /** URI of the endpoint configuration API resource */
    uri: string;
    /** basic auth module configuration or <code>null</code> */
    basic_auth?: EndpointBasicAuth;
    /** circuit breaker module configuration or <code>null</code> */
    circuit_breaker?: EndpointCircuitBreaker;
    /** compression module configuration or <code>null</code> */
    compression?: EndpointCompression;
    /** request headers module configuration or <code>null</code> */
    request_headers?: EndpointRequestHeaders;
    /** response headers module configuration or <code>null</code> */
    response_headers?: EndpointResponseHeaders;
    /** ip policy module configuration or <code>null</code> */
    ip_policy?: EndpointIPPolicy;
    /** mutual TLS module configuration or <code>null</code> */
    mutual_tls?: EndpointMutualTLS;
    /** TLS termination module configuration or <code>null</code> */
    tls_termination?: EndpointTLSTermination;
    /** webhook validation module configuration or <code>null</code> */
    webhook_validation?: EndpointWebhookValidation;
    /** oauth module configuration or <code>null</code> */
    oauth?: EndpointOAuth;
    /** logging module configuration or <code>null</code> */
    logging?: EndpointLogging;
    /** saml module configuration or <code>null</code> */
    saml?: EndpointSAML;
    /** oidc module configuration or <code>null</code> */
    oidc?: EndpointOIDC;
}
export interface EndpointConfigurationList {
    /** the list of all endpoint configurations on this account */
    endpoint_configurations: Array<EndpointConfiguration>;
    /** URI of the endpoint configurations list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface EndpointConfigurationUpdate {
    /** unique identifier of this endpoint configuration */
    id: string;
    /** human-readable description of what this endpoint configuration will be do when applied or what traffic it will be applied to. Optional, max 255 bytes */
    description?: string;
    /** arbitrary user-defined machine-readable data of this endpoint configuration. Optional, max 4096 bytes. */
    metadata?: string;
    /** basic auth module configuration or <code>null</code> */
    basic_auth?: EndpointBasicAuth;
    /** circuit breaker module configuration or <code>null</code> */
    circuit_breaker?: EndpointCircuitBreaker;
    /** compression module configuration or <code>null</code> */
    compression?: EndpointCompression;
    /** request headers module configuration or <code>null</code> */
    request_headers?: EndpointRequestHeaders;
    /** response headers module configuration or <code>null</code> */
    response_headers?: EndpointResponseHeaders;
    /** ip policy module configuration or <code>null</code> */
    ip_policy?: EndpointIPPolicyMutate;
    /** mutual TLS module configuration or <code>null</code> */
    mutual_tls?: EndpointMutualTLSMutate;
    /** TLS termination module configuration or <code>null</code> */
    tls_termination?: EndpointTLSTermination;
    /** webhook validation module configuration or <code>null</code> */
    webhook_validation?: EndpointWebhookValidation;
    /** oauth module configuration or <code>null</code> */
    oauth?: EndpointOAuth;
    /** logging module configuration or <code>null</code> */
    logging?: EndpointLoggingMutate;
    /** saml module configuration or <code>null</code> */
    saml?: EndpointSAMLMutate;
    /** oidc module configuration or <code>null</code> */
    oidc?: EndpointOIDC;
}
export interface EndpointConfigurationCreate {
    /** they type of traffic this endpoint configuration can be applied to. one of: <code>http</code>, <code>https</code>, <code>tcp</code> */
    type: string;
    /** human-readable description of what this endpoint configuration will be do when applied or what traffic it will be applied to. Optional, max 255 bytes */
    description: string;
    /** arbitrary user-defined machine-readable data of this endpoint configuration. Optional, max 4096 bytes. */
    metadata: string;
    /** basic auth module configuration or <code>null</code> */
    basic_auth?: EndpointBasicAuth;
    /** circuit breaker module configuration or <code>null</code> */
    circuit_breaker?: EndpointCircuitBreaker;
    /** compression module configuration or <code>null</code> */
    compression?: EndpointCompression;
    /** request headers module configuration or <code>null</code> */
    request_headers?: EndpointRequestHeaders;
    /** response headers module configuration or <code>null</code> */
    response_headers?: EndpointResponseHeaders;
    /** ip policy module configuration or <code>null</code> */
    ip_policy?: EndpointIPPolicyMutate;
    /** mutual TLS module configuration or <code>null</code> */
    mutual_tls?: EndpointMutualTLSMutate;
    /** TLS termination module configuration or <code>null</code> */
    tls_termination?: EndpointTLSTermination;
    /** webhook validation module configuration or <code>null</code> */
    webhook_validation?: EndpointWebhookValidation;
    /** oauth module configuration or <code>null</code> */
    oauth?: EndpointOAuth;
    /** logging module configuration or <code>null</code> */
    logging?: EndpointLoggingMutate;
    /** saml module configuration or <code>null</code> */
    saml?: EndpointSAMLMutate;
    /** oidc module configuration or <code>null</code> */
    oidc?: EndpointOIDC;
}
export interface EndpointWebhookValidation {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: <code>SLACK</code>, <code>SNS</code>, <code>STRIPE</code>, <code>GITHUB</code>, <code>TWILIO</code>, <code>SHOPIFY</code>, <code>GITLAB</code>, <code>INTERCOM</code>. */
    provider: string;
    /** a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret */
    secret: string;
}
export interface EndpointCompression {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
}
export interface EndpointMutualTLS {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. */
    certificate_authorities: Array<Ref>;
}
export interface EndpointMutualTLSMutate {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** list of certificate authorities that will be used to validate the TLS client certificate presnted by the initiatiator of the TLS connection */
    certificate_authority_ids: Array<string>;
}
export interface EndpointTLSTermination {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** <code>edge</code> if the ngrok edge should terminate TLS traffic, <code>upstream</code> if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if <code>upstream</code> is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. */
    terminate_at: string;
    /** The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if <code>terminate_at</code> is set to <code>upstream</code>. */
    min_version?: string;
}
export interface EndpointBasicAuth {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** determines how the basic auth credentials are validated. Currently only the value <code>agent</code> is supported which means that credentials will be validated against the username and password specified by the ngrok agent's <code>-auth</code> flag, if any. */
    auth_provider_id: string;
    /** an arbitrary string to be specified in as the 'realm' value in the <code>WWW-Authenticate</code> header. default is <code>ngrok</code> */
    realm: string;
    /** true or false indicating whether to allow OPTIONS requests through without authentication which is necessary for CORS. default is <code>false</code> */
    allow_options: boolean;
}
export interface EndpointLogging {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** list of all LogConfigs that will be used to configure and export this endpoint's logs */
    log_configs: Array<Ref>;
}
export interface EndpointLoggingMutate {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** list of all LogConfigs that will be used to configure and export this endpoint's logs */
    log_config_ids: Array<string>;
}
export interface EndpointRequestHeaders {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server */
    add: Map<string, string>;
    /** a list of header names that will be removed from the HTTP Request before being sent to the upstream application server */
    remove: Array<string>;
}
export interface EndpointResponseHeaders {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client */
    add: Map<string, string>;
    /** a list of header names that will be removed from the HTTP Response returned to the HTTP client */
    remove: Array<string>;
}
export interface EndpointIPPolicy {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    ip_policies: Array<Ref>;
}
export interface EndpointIPPolicyMutate {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** list of all IP policies that will be used to check if a source IP is allowed access to the endpoint */
    ip_policy_ids: Array<string>;
}
export interface EndpointCircuitBreaker {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health */
    tripped_duration: number;
    /** Integer number of seconds in the statistical rolling window that metrics are retained for. */
    rolling_window: number;
    /** Integer number of buckets into which metrics are retained. Max 128. */
    num_buckets: number;
    /** Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. */
    volume_threshold: number;
    /** Error threshold percentage should be between 0 - 1.0, not 0-100.0 */
    error_threshold_percentage: number;
}
export interface EndpointOAuth {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** an object which defines the identity provider to use for authentication and configuration for who may access the endpoint */
    provider: EndpointOAuthProvider;
    /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
    options_passthrough: boolean;
    /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
    cookie_prefix: string;
    /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
    inactivity_timeout: number;
    /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
    maximum_duration: number;
    /** Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. */
    auth_check_interval: number;
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
}
export interface EndpointOAuthGitHub {
    /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
    client_id?: string;
    /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for <code>client_id</code>. */
    client_secret?: string;
    /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both <code>client_id</code> and <code>client_secret</code> to set scopes) */
    scopes: Array<string>;
    /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
    email_addresses: Array<string>;
    /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
    email_domains: Array<string>;
    /** a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. <code>org-name/team-name</code> */
    teams: Array<string>;
    /** a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' */
    organizations: Array<string>;
}
export interface EndpointOAuthFacebook {
    /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
    client_id?: string;
    /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for <code>client_id</code>. */
    client_secret?: string;
    /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both <code>client_id</code> and <code>client_secret</code> to set scopes) */
    scopes: Array<string>;
    /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
    email_addresses: Array<string>;
    /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
    email_domains: Array<string>;
}
export interface EndpointOAuthMicrosoft {
    /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
    client_id?: string;
    /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for <code>client_id</code>. */
    client_secret?: string;
    /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both <code>client_id</code> and <code>client_secret</code> to set scopes) */
    scopes: Array<string>;
    /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
    email_addresses: Array<string>;
    /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
    email_domains: Array<string>;
}
export interface EndpointOAuthGoogle {
    /** the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. */
    client_id?: string;
    /** the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for <code>client_id</code>. */
    client_secret?: string;
    /** a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both <code>client_id</code> and <code>client_secret</code> to set scopes) */
    scopes: Array<string>;
    /** a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint */
    email_addresses: Array<string>;
    /** a list of email domains of users authenticated by identity provider who are allowed access to the endpoint */
    email_domains: Array<string>;
}
export interface EndpointSAML {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
    options_passthrough: boolean;
    /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
    cookie_prefix: string;
    /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
    inactivity_timeout: number;
    /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
    maximum_duration: number;
    /** The IdP's metadata URL which returns the XML IdP EntityDescriptor. The IdP's metadata URL specifies how to connect to the IdP as well as its public key which is then used to validate the signature on incoming SAML assertions to the ACS endpoint. */
    idp_metadata_url: string;
    /** The full XML IdP EntityDescriptor in bytes. This parameter is mutually exclusive with <code>idp_metadata_url</code>. It is recommended to use that parameter instead if the IdP exposes a metadata URL. */
    idp_metadata: string;
    /** If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. */
    force_authn: boolean;
    /** If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the <code>RelayState</code> parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. */
    allow_idp_initiated?: boolean;
    /** If present, only users who are a member of one of the listed groups may access the target endpoint. */
    authorized_groups: Array<string>;
    /** The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. */
    entity_id: string;
    /** The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. */
    assertion_consumer_service_url: string;
    /** The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. */
    single_logout_url: string;
    /** PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. */
    request_signing_certificate_pem: string;
    /** A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. */
    metadata_url: string;
}
export interface EndpointSAMLMutate {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
    options_passthrough: boolean;
    /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
    cookie_prefix: string;
    /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
    inactivity_timeout: number;
    /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
    maximum_duration: number;
    /** The IdP's metadata URL which returns the XML IdP EntityDescriptor. The IdP's metadata URL specifies how to connect to the IdP as well as its public key which is then used to validate the signature on incoming SAML assertions to the ACS endpoint. */
    idp_metadata_url: string;
    /** The full XML IdP EntityDescriptor in bytes. This parameter is mutually exclusive with <code>idp_metadata_url</code>. It is recommended to use that parameter instead if the IdP exposes a metadata URL. */
    idp_metadata: string;
    /** If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. */
    force_authn: boolean;
    /** If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the <code>RelayState</code> parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. */
    allow_idp_initiated?: boolean;
    /** If present, only users who are a member of one of the listed groups may access the target endpoint. */
    authorized_groups: Array<string>;
}
export interface EndpointOIDC {
    /** <code>true</code> if the module will be applied to traffic, <code>false</code> to disable. default <code>true</code> if unspecified */
    enabled?: boolean;
    /** Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. */
    options_passthrough: boolean;
    /** the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' */
    cookie_prefix: string;
    /** Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. */
    inactivity_timeout: number;
    /** Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. */
    maximum_duration: number;
    /** URL of the OIDC "OpenID provider". This is the base URL used for discovery. */
    issuer: string;
    /** The OIDC app's client ID and OIDC audience. */
    client_id: string;
    /** The OIDC app's client secret. */
    client_secret: string;
    /** The set of scopes to request from the OIDC identity provider. */
    scopes: Array<string>;
}
export interface EndpointLoggingReplace {
    id: string;
    module: EndpointLoggingMutate;
}
export interface EndpointBasicAuthReplace {
    id: string;
    module: EndpointBasicAuth;
}
export interface EndpointCircuitBreakerReplace {
    id: string;
    module: EndpointCircuitBreaker;
}
export interface EndpointCompressionReplace {
    id: string;
    module: EndpointCompression;
}
export interface EndpointTLSTerminationReplace {
    id: string;
    module: EndpointTLSTermination;
}
export interface EndpointIPPolicyReplace {
    id: string;
    module: EndpointIPPolicyMutate;
}
export interface EndpointMutualTLSReplace {
    id: string;
    module: EndpointMutualTLSMutate;
}
export interface EndpointRequestHeadersReplace {
    id: string;
    module: EndpointRequestHeaders;
}
export interface EndpointResponseHeadersReplace {
    id: string;
    module: EndpointResponseHeaders;
}
export interface EndpointOAuthReplace {
    id: string;
    module: EndpointOAuth;
}
export interface EndpointWebhookValidationReplace {
    id: string;
    module: EndpointWebhookValidation;
}
export interface EndpointSAMLReplace {
    id: string;
    module: EndpointSAMLMutate;
}
export interface EndpointOIDCReplace {
    id: string;
    module: EndpointOIDC;
}
export interface ReservedAddrCreate {
    /** human-readable description of what this reserved address will be used for */
    description: string;
    /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
    metadata: string;
    /** reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
    region: string;
    /** ID of an endpoint configuration of type tcp that will be used to handle inbound traffic to this address */
    endpoint_configuration_id: string;
}
export interface ReservedAddrUpdate {
    id: string;
    /** human-readable description of what this reserved address will be used for */
    description?: string;
    /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
    metadata?: string;
    /** ID of an endpoint configuration of type tcp that will be used to handle inbound traffic to this address */
    endpoint_configuration_id?: string;
}
export interface ReservedAddr {
    /** unique reserved address resource identifier */
    id: string;
    /** URI of the reserved address API resource */
    uri: string;
    /** timestamp when the reserved address was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of what this reserved address will be used for */
    description: string;
    /** arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. */
    metadata: string;
    /** hostname:port of the reserved address that was assigned at creation time */
    addr: string;
    /** reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
    region: string;
    /** object reference to the endpoint configuration that will be applied to traffic to this address */
    endpoint_configuration?: Ref;
}
export interface ReservedAddrList {
    /** the list of all reserved addresses on this account */
    reserved_addrs: Array<ReservedAddr>;
    /** URI of the reserved address list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface ReservedDomainCreate {
    /** the domain name to reserve. It may be a full domain name like app.example.com. If the name does not contain a '.' it will reserve that subdomain on ngrok.io. */
    name: string;
    /** reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
    region: string;
    /** human-readable description of what this reserved domain will be used for */
    description: string;
    /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
    metadata: string;
    /** ID of an endpoint configuration of type http that will be used to handle inbound http traffic to this domain */
    http_endpoint_configuration_id: string;
    /** ID of an endpoint configuration of type https that will be used to handle inbound https traffic to this domain */
    https_endpoint_configuration_id: string;
    /** ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. */
    certificate_id?: string;
    /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. */
    certificate_management_policy?: ReservedDomainCertPolicy;
}
export interface ReservedDomainUpdate {
    id: string;
    /** human-readable description of what this reserved domain will be used for */
    description?: string;
    /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
    metadata?: string;
    /** ID of an endpoint configuration of type http that will be used to handle inbound http traffic to this domain */
    http_endpoint_configuration_id?: string;
    /** ID of an endpoint configuration of type https that will be used to handle inbound https traffic to this domain */
    https_endpoint_configuration_id?: string;
    /** ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. */
    certificate_id?: string;
    /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. */
    certificate_management_policy?: ReservedDomainCertPolicy;
}
export interface ReservedDomain {
    /** unique reserved domain resource identifier */
    id: string;
    /** URI of the reserved domain API resource */
    uri: string;
    /** timestamp when the reserved domain was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of what this reserved domain will be used for */
    description: string;
    /** arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. */
    metadata: string;
    /** hostname of the reserved domain */
    domain: string;
    /** reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) */
    region: string;
    /** DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io */
    cname_target?: string;
    /** object referencing the endpoint configuration applied to http traffic on this domain */
    http_endpoint_configuration?: Ref;
    /** object referencing the endpoint configuration applied to https traffic on this domain */
    https_endpoint_configuration?: Ref;
    /** object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. */
    certificate?: Ref;
    /** configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled */
    certificate_management_policy?: ReservedDomainCertPolicy;
    /** status of the automatic certificate management for this domain, or null if automatic management is disabled */
    certificate_management_status?: ReservedDomainCertStatus;
}
export interface ReservedDomainList {
    /** the list of all reserved domains on this account */
    reserved_domains: Array<ReservedDomain>;
    /** URI of the reserved domain list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface ReservedDomainCertPolicy {
    /** certificate authority to request certificates from. The only supported value is letsencrypt. */
    authority: string;
    /** type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. */
    private_key_type: string;
}
export interface ReservedDomainCertStatus {
    /** timestamp when the next renewal will be requested, RFC 3339 format */
    renews_at?: string;
    /** status of the certificate provisioning job, or null if the certificiate isn't being provisioned or renewed */
    provisioning_job?: ReservedDomainCertJob;
}
export interface ReservedDomainCertNSTarget {
    /** the zone that the nameservers need to be applied to */
    zone: string;
    /** the nameservers the user must add */
    nameservers: Array<string>;
}
export interface ReservedDomainCertJob {
    /** if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). */
    error_code?: string;
    /** a message describing the current status or error */
    msg: string;
    /** timestamp when the provisioning job started, RFC 3339 format */
    started_at: string;
    /** timestamp when the provisioning job will be retried */
    retries_at?: string;
    /** if present, indicates the dns nameservers that the user must configure to complete the provisioning process of a wildcard certificate */
    ns_targets: Array<ReservedDomainCertNSTarget>;
}
export interface RootResponse {
    uri: string;
    subresource_uris: Map<string, string>;
}
export interface SSHCertificateAuthorityCreate {
    /** human-readable description of this SSH Certificate Authority. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. */
    metadata: string;
    /** the type of private key to generate. one of <code>rsa</code>, <code>ecdsa</code>, <code>ed25519</code> */
    private_key_type: string;
    /** the type of elliptic curve to use when creating an ECDSA key */
    elliptic_curve: string;
    /** the key size to use when creating an RSA key. one of <code>2048</code> or <code>4096</code> */
    key_size: number;
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
    created_at: string;
    /** human-readable description of this SSH Certificate Authority. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. */
    metadata: string;
    /** raw public key for this SSH Certificate Authority */
    public_key: string;
    /** the type of private key for this SSH Certificate Authority */
    key_type: string;
}
export interface SSHCertificateAuthorityList {
    /** the list of all certificate authorities on this account */
    ssh_certificate_authorities: Array<SSHCertificateAuthority>;
    /** URI of the certificates authorities list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface SSHCredentialCreate {
    /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
    metadata: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl: Array<string>;
    /** the PEM-encoded public key of the SSH keypair that will be used to authenticate */
    public_key: string;
}
export interface SSHCredentialUpdate {
    id: string;
    /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
    description?: string;
    /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
    metadata?: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl?: Array<string>;
}
export interface SSHCredential {
    /** unique ssh credential resource identifier */
    id: string;
    /** URI of the ssh credential API resource */
    uri: string;
    /** timestamp when the ssh credential was created, RFC 3339 format */
    created_at: string;
    /** human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. */
    metadata: string;
    /** the PEM-encoded public key of the SSH keypair that will be used to authenticate */
    public_key: string;
    /** optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the <code>bind</code> rule. The <code>bind</code> rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule <code>bind:example.ngrok.io</code>. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of <code>bind:*.example.com</code> which will allow <code>x.example.com</code>, <code>y.example.com</code>, <code>*.example.com</code>, etc. A rule of <code>'*'</code> is equivalent to no acl at all and will explicitly permit all actions. */
    acl: Array<string>;
}
export interface SSHCredentialList {
    /** the list of all ssh credentials on this account */
    ssh_credentials: Array<SSHCredential>;
    /** URI of the ssh credential list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface SSHHostCertificateCreate {
    /** the ssh certificate authority that is used to sign this ssh host certificate */
    ssh_certificate_authority_id: string;
    /** a public key in OpenSSH Authorized Keys format that this certificate signs */
    public_key: string;
    /** the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. */
    principals: Array<string>;
    /** The time when the host certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. */
    valid_after: string;
    /** The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of one year in the future will be used. The OpenSSH certificates RFC calls this <code>valid_before</code>. */
    valid_until: string;
    /** human-readable description of this SSH Host Certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. */
    metadata: string;
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
    created_at: string;
    /** human-readable description of this SSH Host Certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. */
    metadata: string;
    /** a public key in OpenSSH Authorized Keys format that this certificate signs */
    public_key: string;
    /** the key type of the <code>public_key</code>, one of <code>rsa</code>, <code>ecdsa</code> or <code>ed25519</code> */
    key_type: string;
    /** the ssh certificate authority that is used to sign this ssh host certificate */
    ssh_certificate_authority_id: string;
    /** the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. */
    principals: Array<string>;
    /** the time when the ssh host certificate becomes valid, in RFC 3339 format. */
    valid_after: string;
    /** the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this <code>valid_before</code>. */
    valid_until: string;
    /** the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a <code>-cert.pub</code> certificate file on disk that should be referenced in your <code>sshd_config</code> configuration file with a <code>HostCertificate</code> directive */
    certificate: string;
}
export interface SSHHostCertificateList {
    /** the list of all ssh host certificates on this account */
    ssh_host_certificates: Array<SSHHostCertificate>;
    /** URI of the ssh host certificates list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface SSHUserCertificateCreate {
    /** the ssh certificate authority that is used to sign this ssh user certificate */
    ssh_certificate_authority_id: string;
    /** a public key in OpenSSH Authorized Keys format that this certificate signs */
    public_key: string;
    /** the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizinig the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. */
    principals: Array<string>;
    /** A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: <code>force-command</code> and <code>source-address</code>. See <a href="https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys">the OpenSSH certificate protocol spec</a> for additional details. */
    critical_options: Map<string, string>;
    /** A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: <code>{"permit-pty": "", "permit-user-rc": ""}</code> OpenSSH understands a number of predefined extensions. See <a href="https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys">the OpenSSH certificate protocol spec</a> for additional details. */
    extensions: Map<string, string>;
    /** The time when the user certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. */
    valid_after: string;
    /** The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of 24 hours will be used. The OpenSSH certificates RFC calls this <code>valid_before</code>. */
    valid_until: string;
    /** human-readable description of this SSH User Certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. */
    metadata: string;
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
    created_at: string;
    /** human-readable description of this SSH User Certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. */
    metadata: string;
    /** a public key in OpenSSH Authorized Keys format that this certificate signs */
    public_key: string;
    /** the key type of the <code>public_key</code>, one of <code>rsa</code>, <code>ecdsa</code> or <code>ed25519</code> */
    key_type: string;
    /** the ssh certificate authority that is used to sign this ssh user certificate */
    ssh_certificate_authority_id: string;
    /** the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizinig the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. */
    principals: Array<string>;
    /** A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: <code>force-command</code> and <code>source-address</code>. See <a href="https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys">the OpenSSH certificate protocol spec</a> for additional details. */
    critical_options: Map<string, string>;
    /** A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: <code>{"permit-pty": "", "permit-user-rc": ""}</code> OpenSSH understands a number of predefined extensions. See <a href="https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys">the OpenSSH certificate protocol spec</a> for additional details. */
    extensions: Map<string, string>;
    /** the time when the ssh host certificate becomes valid, in RFC 3339 format. */
    valid_after: string;
    /** the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this <code>valid_before</code>. */
    valid_until: string;
    /** the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a <code>-cert.pub</code> certificate file on disk that should be referenced in your <code>sshd_config</code> configuration file with a <code>HostCertificate</code> directive */
    certificate: string;
}
export interface SSHUserCertificateList {
    /** the list of all ssh user certificates on this account */
    ssh_user_certificates: Array<SSHUserCertificate>;
    /** URI of the ssh user certificates list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface TLSCertificateCreate {
    /** human-readable description of this TLS certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. */
    metadata: string;
    /** chain of PEM-encoded certificates, leaf first. See <a href="#tls-certificates-pem">Certificate Bundles</a>. */
    certificate_pem: string;
    /** private key for the TLS certificate, PEM-encoded. See <a href="#tls-certificates-key">Private Keys</a>. */
    private_key_pem: string;
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
    created_at: string;
    /** human-readable description of this TLS certificate. optional, max 255 bytes. */
    description: string;
    /** arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. */
    metadata: string;
    /** chain of PEM-encoded certificates, leaf first. See <a href="#tls-certificates-pem">Certificate Bundles</a>. */
    certificate_pem: string;
    /** subject common name from the leaf of this TLS certificate */
    subject_common_name: string;
    /** subject alternative names (SANs) from the leaf of this TLS certificate */
    subject_alternative_names: TLSCertificateSANs;
    /** timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded */
    issued_at?: string;
    /** timestamp when this TLS certificate becomes valid, RFC 3339 format */
    not_before: string;
    /** timestamp when this TLS certificate becomes invalid, RFC 3339 format */
    not_after: string;
    /** set of actions the private key of this TLS certificate can be used for */
    key_usages: Array<string>;
    /** extended set of actions the private key of this TLS certificate can be used for */
    extended_key_usages: Array<string>;
    /** type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. */
    private_key_type: string;
    /** issuer common name from the leaf of this TLS certificate */
    issuer_common_name: string;
    /** serial number of the leaf of this TLS certificate */
    serial_number: string;
    /** subject organization from the leaf of this TLS certificate */
    subject_organization: string;
    /** subject organizational unit from the leaf of this TLS certificate */
    subject_organizational_unit: string;
    /** subject locality from the leaf of this TLS certificate */
    subject_locality: string;
    /** subject province from the leaf of this TLS certificate */
    subject_province: string;
    /** subject country from the leaf of this TLS certificate */
    subject_country: string;
}
export interface TLSCertificateList {
    /** the list of all TLS certificates on this account */
    tls_certificates: Array<TLSCertificate>;
    /** URI of the TLS certificates list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface TLSCertificateSANs {
    /** set of additional domains (including wildcards) this TLS certificate is valid for */
    dns_names: Array<string>;
    /** set of IP addresses this TLS certificate is also valid for */
    ips: Array<string>;
}
export interface TunnelSession {
    /** version of the ngrok agent that started this ngrok tunnel session */
    agent_version: string;
    /** reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session */
    credential: Ref;
    /** unique tunnel session resource identifier */
    id: string;
    /** source ip address of the tunnel session */
    ip: string;
    /** arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option */
    metadata: string;
    /** operating system of the host the ngrok agent is running on */
    os: string;
    /** the ngrok region identifier in which this tunnel session was started */
    region: string;
    /** time when the tunnel session first connected to the ngrok servers */
    started_at: string;
    /** the transport protocol used to start the tunnel session. Either <code>ngrok/v2</code> or <code>ssh</code> */
    transport: string;
    /** URI to the API resource of the tunnel session */
    uri: string;
}
export interface TunnelSessionList {
    /** list of all tunnel sessions on this account */
    tunnel_sessions: Array<TunnelSession>;
    /** URI to the API resource of the tunnel session list */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}
export interface TunnelSessionsUpdate {
    id: string;
    /** request that the ngrok agent update to this specific version instead of the latest available version */
    version: string;
}
export interface Tunnel {
    /** unique tunnel resource identifier */
    id: string;
    /** URL of the tunnel's public endpoint */
    public_url: string;
    /** timestamp when the tunnel was initiated in RFC 3339 format */
    started_at: string;
    /** user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel <a href="https://ngrok.com/docs#tunnel-definitions-metadata">metadata configuration option</a> In API version 0, this value was instead pulled from the top-level <a href="https://ngrok.com/docs#config_metadata">metadata configuration option</a>. */
    metadata: string;
    /** tunnel protocol. one of <code>http</code>, <code>https</code>, <code>tcp</code> or <code>tls</code> */
    proto: string;
    /** identifier of tune region where the tunnel is running */
    region: string;
    /** reference object pointing to the tunnel session on which this tunnel was started */
    tunnel_session: Ref;
}
export interface TunnelList {
    /** the list of all online tunnels on this account */
    tunnels: Array<Tunnel>;
    /** URI of the tunnels list API resource */
    uri: string;
    /** URI of the next page, or null if there is no next page */
    next_page_uri?: string;
}