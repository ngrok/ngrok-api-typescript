// Code generated by apic. DO NOT EDIT.

import wretch, {Wretcher} from 'wretch';

import * as t from './types';

interface Config {
  apiToken: string;
  baseUrl: string;
}

export class Ngrok {
  token: string;
  baseUrl: string;

  rest: Wretcher;

  /**
   * Creates an instance of the Ngrok REST client
   * @constructor
   * @param {Object} config - config.apiToken and config.baseUrl
   */
  constructor({baseUrl = 'https://api.ngrok.com', apiToken}: Config) {
    this.baseUrl = baseUrl;

    if (apiToken) {
      this.token = apiToken;
    } else {
      throw new Error('Cannot create ngrok client without an API token');
    }

    this.rest = wretch()
      .url(baseUrl)
      .headers({
        'User-Agent': 'ngrok-ts-user-agent',
        'Ngrok-Version': '2',
      })
      .auth('Bearer ' + this.token);
  }

  AbuseReports = {
    /** Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access */
    create: (arg: t.AbuseReportCreate): Promise<t.AbuseReport> =>
      this.rest.url(`/abuse_reports`).post(arg).json(),
    /** Get the detailed status of abuse report by ID. */
    get: (arg: t.Item): Promise<t.AbuseReport> =>
      this.rest.url(`/abuse_reports/${arg.id}`).get().json(),
  }

  APIKeys = {
    /** Create a new API key. The generated API key can be used to authenticateto the ngrok API. */
    create: (arg: t.APIKeyCreate): Promise<t.APIKey> =>
      this.rest.url(`/api_keys`).post(arg).json(),
    /** Delete an API key by ID */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/api_keys/${arg.id}`).delete().json(),
    /** Get the details of an API key by ID. */
    get: (arg: t.Item): Promise<t.APIKey> =>
      this.rest.url(`/api_keys/${arg.id}`).get().json(),
    /** List all API keys owned by this account */
    list: (arg: t.Page): Promise<t.APIKeyList> =>
      this.rest.url(`/api_keys`).get().json(),
    /** Update attributes of an API key by ID. */
    update: (arg: t.APIKeyUpdate): Promise<t.APIKey> =>
      this.rest.url(`/api_keys/${arg.id}`).patch(arg).json(),
  }

  CertificateAuthorities = {
    /** Upload a new Certificate Authority */
    create: (arg: t.CertificateAuthorityCreate): Promise<t.CertificateAuthority> =>
      this.rest.url(`/certificate_authorities`).post(arg).json(),
    /** Delete a Certificate Authority */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/certificate_authorities/${arg.id}`).delete().json(),
    /** Get detailed information about a certficate authority */
    get: (arg: t.Item): Promise<t.CertificateAuthority> =>
      this.rest.url(`/certificate_authorities/${arg.id}`).get().json(),
    /** List all Certificate Authority on this account */
    list: (arg: t.Page): Promise<t.CertificateAuthorityList> =>
      this.rest.url(`/certificate_authorities`).get().json(),
    /** Update attributes of a Certificate Authority by ID */
    update: (arg: t.CertificateAuthorityUpdate): Promise<t.CertificateAuthority> =>
      this.rest.url(`/certificate_authorities/${arg.id}`).patch(arg).json(),
  }

  Credentials = {
    /** Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself. */
    create: (arg: t.CredentialCreate): Promise<t.Credential> =>
      this.rest.url(`/credentials`).post(arg).json(),
    /** Delete a tunnel authtoken credential by ID */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/credentials/${arg.id}`).delete().json(),
    /** Get detailed information about a tunnel authtoken credential */
    get: (arg: t.Item): Promise<t.Credential> =>
      this.rest.url(`/credentials/${arg.id}`).get().json(),
    /** List all tunnel authtoken credentials on this account */
    list: (arg: t.Page): Promise<t.CredentialList> =>
      this.rest.url(`/credentials`).get().json(),
    /** Update attributes of an tunnel authtoken credential by ID */
    update: (arg: t.CredentialUpdate): Promise<t.Credential> =>
      this.rest.url(`/credentials/${arg.id}`).patch(arg).json(),
  }

  IPPolicies = {
    /** Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction. */
    create: (arg: t.IPPolicyCreate): Promise<t.IPPolicy> =>
      this.rest.url(`/ip_policies`).post(arg).json(),
    /** Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ip_policies/${arg.id}`).delete().json(),
    /** Get detailed information about an IP policy by ID. */
    get: (arg: t.Item): Promise<t.IPPolicy> =>
      this.rest.url(`/ip_policies/${arg.id}`).get().json(),
    /** List all IP policies on this account */
    list: (arg: t.Page): Promise<t.IPPolicyList> =>
      this.rest.url(`/ip_policies`).get().json(),
    /** Update attributes of an IP policy by ID */
    update: (arg: t.IPPolicyUpdate): Promise<t.IPPolicy> =>
      this.rest.url(`/ip_policies/${arg.id}`).patch(arg).json(),
  }

  IPPolicyRules = {
    /** Create a new IP policy rule attached to an IP Policy. */
    create: (arg: t.IPPolicyRuleCreate): Promise<t.IPPolicyRule> =>
      this.rest.url(`/ip_policy_rules`).post(arg).json(),
    /** Delete an IP policy rule. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ip_policy_rules/${arg.id}`).delete().json(),
    /** Get detailed information about an IP policy rule by ID. */
    get: (arg: t.Item): Promise<t.IPPolicyRule> =>
      this.rest.url(`/ip_policy_rules/${arg.id}`).get().json(),
    /** List all IP policy rules on this account */
    list: (arg: t.Page): Promise<t.IPPolicyRuleList> =>
      this.rest.url(`/ip_policy_rules`).get().json(),
    /** Update attributes of an IP policy rule by ID */
    update: (arg: t.IPPolicyRuleUpdate): Promise<t.IPPolicyRule> =>
      this.rest.url(`/ip_policy_rules/${arg.id}`).patch(arg).json(),
  }

  IPRestrictions = {
    /** Create a new IP restriction */
    create: (arg: t.IPRestrictionCreate): Promise<t.IPRestriction> =>
      this.rest.url(`/ip_restrictions`).post(arg).json(),
    /** Delete an IP restriction */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ip_restrictions/${arg.id}`).delete().json(),
    /** Get detailed information about an IP restriction */
    get: (arg: t.Item): Promise<t.IPRestriction> =>
      this.rest.url(`/ip_restrictions/${arg.id}`).get().json(),
    /** List all IP restrictions on this account */
    list: (arg: t.Page): Promise<t.IPRestrictionList> =>
      this.rest.url(`/ip_restrictions`).get().json(),
    /** Update attributes of an IP restriction by ID */
    update: (arg: t.IPRestrictionUpdate): Promise<t.IPRestriction> =>
      this.rest.url(`/ip_restrictions/${arg.id}`).patch(arg).json(),
  }

  IPWhitelist = {
    /** Create a new IP whitelist entry that will restrict traffic to all tunnel endpoints on the account. */
    create: (arg: t.IPWhitelistEntryCreate): Promise<t.IPWhitelistEntry> =>
      this.rest.url(`/ip_whitelist`).post(arg).json(),
    /** Delete an IP whitelist entry. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ip_whitelist/${arg.id}`).delete().json(),
    /** Get detailed information about an IP whitelist entry by ID. */
    get: (arg: t.Item): Promise<t.IPWhitelistEntry> =>
      this.rest.url(`/ip_whitelist/${arg.id}`).get().json(),
    /** List all IP whitelist entries on this account */
    list: (arg: t.Page): Promise<t.IPWhitelistEntryList> =>
      this.rest.url(`/ip_whitelist`).get().json(),
    /** Update attributes of an IP whitelist entry by ID */
    update: (arg: t.IPWhitelistEntryUpdate): Promise<t.IPWhitelistEntry> =>
      this.rest.url(`/ip_whitelist/${arg.id}`).patch(arg).json(),
  }

  LogConfigs = {
    /** Create a new Log Config. It will not apply to anything until you associate it with one or more Endpoint Configs. */
    create: (arg: t.LogConfigCreate): Promise<t.LogConfig> =>
      this.rest.url(`/log_configs`).post(arg).json(),
    /** Delete a Log Config. Associated Log Destinations will be preserved. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/log_configs/${arg.id}`).delete().json(),
    /** Get detailed information about a Log Config by ID. */
    get: (arg: t.Item): Promise<t.LogConfig> =>
      this.rest.url(`/log_configs/${arg.id}`).get().json(),
    /** List all Log Configs available on this account. */
    list: (arg: t.Page): Promise<t.LogConfigList> =>
      this.rest.url(`/log_configs`).get().json(),
    /** Update attributes of an Log Config by ID. */
    update: (arg: t.LogConfigUpdate): Promise<t.LogConfig> =>
      this.rest.url(`/log_configs/${arg.id}`).patch(arg).json(),
  }

  LogDestinations = {
    /** Create a new Log Destination. It will not apply to anything until it is associated with a Log Config, and that Log Config is associated with an Endpoint Config. */
    create: (arg: t.LogDestinationCreate): Promise<t.LogDestination> =>
      this.rest.url(`/log_destinations`).post(arg).json(),
    /** Delete a Log Destination. If the Log Destination is still referenced by a Log Config, this will throw an error until that Log Config has removed that reference. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/log_destinations/${arg.id}`).delete().json(),
    /** Get detailed information about a Log Destination by ID. */
    get: (arg: t.Item): Promise<t.LogDestination> =>
      this.rest.url(`/log_destinations/${arg.id}`).get().json(),
    /** List all Log Destinations on this account. */
    list: (arg: t.Page): Promise<t.LogDestinationList> =>
      this.rest.url(`/log_destinations`).get().json(),
    /** Update attributes of a Log Destination. */
    update: (arg: t.LogDestinationUpdate): Promise<t.LogDestination> =>
      this.rest.url(`/log_destinations/${arg.id}`).patch(arg).json(),
  }

  EndpointConfigurations = {
    /** Create a new endpoint configuration */
    create: (arg: t.EndpointConfigurationCreate): Promise<t.EndpointConfiguration> =>
      this.rest.url(`/endpoint_configurations`).post(arg).json(),
    /** Delete an endpoint configuration. This operation will fail if the endpoint configuration is still referenced by any reserved domain or reserved address. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}`).delete().json(),
    /** Returns detailed information about an endpoint configuration */
    get: (arg: t.Item): Promise<t.EndpointConfiguration> =>
      this.rest.url(`/endpoint_configurations/${arg.id}`).get().json(),
    /** Returns a list of all endpoint configurations on this account */
    list: (arg: t.Page): Promise<t.EndpointConfigurationList> =>
      this.rest.url(`/endpoint_configurations`).get().json(),
    /** Updates an endpoint configuration. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API. */
    update: (arg: t.EndpointConfigurationUpdate): Promise<t.EndpointConfiguration> =>
      this.rest.url(`/endpoint_configurations/${arg.id}`).patch(arg).json(),
  }

  EndpointLoggingModule = {
    replace: (arg: t.EndpointLoggingReplace): Promise<t.EndpointLogging> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/logging`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointLogging> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/logging`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/logging`).delete().json(),
  }

  EndpointBasicAuthModule = {
    replace: (arg: t.EndpointBasicAuthReplace): Promise<t.EndpointBasicAuth> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/basic_auth`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointBasicAuth> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/basic_auth`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/basic_auth`).delete().json(),
  }

  EndpointCircuitBreakerModule = {
    replace: (arg: t.EndpointCircuitBreakerReplace): Promise<t.EndpointCircuitBreaker> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/circuit_breaker`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointCircuitBreaker> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/circuit_breaker`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/circuit_breaker`).delete().json(),
  }

  EndpointCompressionModule = {
    replace: (arg: t.EndpointCompressionReplace): Promise<t.EndpointCompression> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/compression`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointCompression> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/compression`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/compression`).delete().json(),
  }

  EndpointTLSTerminationModule = {
    replace: (arg: t.EndpointTLSTerminationReplace): Promise<t.EndpointTLSTermination> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/tls_termination`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointTLSTermination> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/tls_termination`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/tls_termination`).delete().json(),
  }

  EndpointIPPolicyModule = {
    replace: (arg: t.EndpointIPPolicyReplace): Promise<t.EndpointIPPolicy> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/ip_policy`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointIPPolicy> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/ip_policy`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/ip_policy`).delete().json(),
  }

  EndpointMutualTLSModule = {
    replace: (arg: t.EndpointMutualTLSReplace): Promise<t.EndpointMutualTLS> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/mutual_tls`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointMutualTLS> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/mutual_tls`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/mutual_tls`).delete().json(),
  }

  EndpointRequestHeadersModule = {
    replace: (arg: t.EndpointRequestHeadersReplace): Promise<t.EndpointRequestHeaders> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/request_headers`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointRequestHeaders> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/request_headers`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/request_headers`).delete().json(),
  }

  EndpointResponseHeadersModule = {
    replace: (arg: t.EndpointResponseHeadersReplace): Promise<t.EndpointResponseHeaders> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/response_headers`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointResponseHeaders> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/response_headers`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/response_headers`).delete().json(),
  }

  EndpointOAuthModule = {
    replace: (arg: t.EndpointOAuthReplace): Promise<t.EndpointOAuth> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oauth`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointOAuth> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oauth`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oauth`).delete().json(),
  }

  EndpointWebhookValidationModule = {
    replace: (arg: t.EndpointWebhookValidationReplace): Promise<t.EndpointWebhookValidation> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/webhook_validation`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointWebhookValidation> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/webhook_validation`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/webhook_validation`).delete().json(),
  }

  EndpointSAMLModule = {
    replace: (arg: t.EndpointSAMLReplace): Promise<t.EndpointSAML> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/saml`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointSAML> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/saml`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/saml`).delete().json(),
  }

  EndpointOIDCModule = {
    replace: (arg: t.EndpointOIDCReplace): Promise<t.EndpointOIDC> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oidc`).put(arg).json(),
    get: (arg: t.Item): Promise<t.EndpointOIDC> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oidc`).get().json(),
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/endpoint_configurations/${arg.id}/oidc`).delete().json(),
  }

  ReservedAddrs = {
    /** Create a new reserved address. */
    create: (arg: t.ReservedAddrCreate): Promise<t.ReservedAddr> =>
      this.rest.url(`/reserved_addrs`).post(arg).json(),
    /** Delete a reserved address. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_addrs/${arg.id}`).delete().json(),
    /** Get the details of a reserved address. */
    get: (arg: t.Item): Promise<t.ReservedAddr> =>
      this.rest.url(`/reserved_addrs/${arg.id}`).get().json(),
    /** List all reserved addresses on this account. */
    list: (arg: t.Page): Promise<t.ReservedAddrList> =>
      this.rest.url(`/reserved_addrs`).get().json(),
    /** Update the attributes of a reserved address. */
    update: (arg: t.ReservedAddrUpdate): Promise<t.ReservedAddr> =>
      this.rest.url(`/reserved_addrs/${arg.id}`).patch(arg).json(),
    /** Detach the endpoint configuration attached to a reserved address. */
    deleteEndpointConfig: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_addrs/${arg.id}/endpoint_configuration`).delete().json(),
  }

  ReservedDomains = {
    /** Create a new reserved domain. */
    create: (arg: t.ReservedDomainCreate): Promise<t.ReservedDomain> =>
      this.rest.url(`/reserved_domains`).post(arg).json(),
    /** Delete a reserved domain. */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_domains/${arg.id}`).delete().json(),
    /** Get the details of a reserved domain. */
    get: (arg: t.Item): Promise<t.ReservedDomain> =>
      this.rest.url(`/reserved_domains/${arg.id}`).get().json(),
    /** List all reserved domains on this account. */
    list: (arg: t.Page): Promise<t.ReservedDomainList> =>
      this.rest.url(`/reserved_domains`).get().json(),
    /** Update the attributes of a reserved domain. */
    update: (arg: t.ReservedDomainUpdate): Promise<t.ReservedDomain> =>
      this.rest.url(`/reserved_domains/${arg.id}`).patch(arg).json(),
    /** Detach the certificate management policy attached to a reserved domain. */
    deleteCertificateManagementPolicy: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_domains/${arg.id}/certificate_management_policy`).delete().json(),
    /** Detach the certificate attached to a reserved domain. */
    deleteCertificate: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_domains/${arg.id}/certificate`).delete().json(),
    /** Detach the http endpoint configuration attached to a reserved domain. */
    deleteHTTPEndpointConfig: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_domains/${arg.id}/http_endpoint_configuration`).delete().json(),
    /** Detach the https endpoint configuration attached to a reserved domain. */
    deleteHTTPSEndpointConfig: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/reserved_domains/${arg.id}/https_endpoint_configuration`).delete().json(),
  }

  Root = {
    get: (arg: t.Empty): Promise<t.RootResponse> =>
      this.rest.url(`/`).get().json(),
  }

  SSHCertificateAuthorities = {
    /** Create a new SSH Certificate Authority */
    create: (arg: t.SSHCertificateAuthorityCreate): Promise<t.SSHCertificateAuthority> =>
      this.rest.url(`/ssh_certificate_authorities`).post(arg).json(),
    /** Delete an SSH Certificate Authority */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ssh_certificate_authorities/${arg.id}`).delete().json(),
    /** Get detailed information about an SSH Certficate Authority */
    get: (arg: t.Item): Promise<t.SSHCertificateAuthority> =>
      this.rest.url(`/ssh_certificate_authorities/${arg.id}`).get().json(),
    /** List all SSH Certificate Authorities on this account */
    list: (arg: t.Page): Promise<t.SSHCertificateAuthorityList> =>
      this.rest.url(`/ssh_certificate_authorities`).get().json(),
    /** Update an SSH Certificate Authority */
    update: (arg: t.SSHCertificateAuthorityUpdate): Promise<t.SSHCertificateAuthority> =>
      this.rest.url(`/ssh_certificate_authorities/${arg.id}`).patch(arg).json(),
  }

  SSHCredentials = {
    /** Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok's SSH gateway. */
    create: (arg: t.SSHCredentialCreate): Promise<t.SSHCredential> =>
      this.rest.url(`/ssh_credentials`).post(arg).json(),
    /** Delete an ssh_credential by ID */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ssh_credentials/${arg.id}`).delete().json(),
    /** Get detailed information about an ssh_credential */
    get: (arg: t.Item): Promise<t.SSHCredential> =>
      this.rest.url(`/ssh_credentials/${arg.id}`).get().json(),
    /** List all ssh credentials on this account */
    list: (arg: t.Page): Promise<t.SSHCredentialList> =>
      this.rest.url(`/ssh_credentials`).get().json(),
    /** Update attributes of an ssh_credential by ID */
    update: (arg: t.SSHCredentialUpdate): Promise<t.SSHCredential> =>
      this.rest.url(`/ssh_credentials/${arg.id}`).patch(arg).json(),
  }

  SSHHostCertificates = {
    /** Create a new SSH Host Certificate */
    create: (arg: t.SSHHostCertificateCreate): Promise<t.SSHHostCertificate> =>
      this.rest.url(`/ssh_host_certificates`).post(arg).json(),
    /** Delete an SSH Host Certificate */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ssh_host_certificates/${arg.id}`).delete().json(),
    /** Get detailed information about an SSH Host Certficate */
    get: (arg: t.Item): Promise<t.SSHHostCertificate> =>
      this.rest.url(`/ssh_host_certificates/${arg.id}`).get().json(),
    /** List all SSH Host Certificates issued on this account */
    list: (arg: t.Page): Promise<t.SSHHostCertificateList> =>
      this.rest.url(`/ssh_host_certificates`).get().json(),
    /** Update an SSH Host Certificate */
    update: (arg: t.SSHHostCertificateUpdate): Promise<t.SSHHostCertificate> =>
      this.rest.url(`/ssh_host_certificates/${arg.id}`).patch(arg).json(),
  }

  SSHUserCertificates = {
    /** Create a new SSH User Certificate */
    create: (arg: t.SSHUserCertificateCreate): Promise<t.SSHUserCertificate> =>
      this.rest.url(`/ssh_user_certificates`).post(arg).json(),
    /** Delete an SSH User Certificate */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/ssh_user_certificates/${arg.id}`).delete().json(),
    /** Get detailed information about an SSH User Certficate */
    get: (arg: t.Item): Promise<t.SSHUserCertificate> =>
      this.rest.url(`/ssh_user_certificates/${arg.id}`).get().json(),
    /** List all SSH User Certificates issued on this account */
    list: (arg: t.Page): Promise<t.SSHUserCertificateList> =>
      this.rest.url(`/ssh_user_certificates`).get().json(),
    /** Update an SSH User Certificate */
    update: (arg: t.SSHUserCertificateUpdate): Promise<t.SSHUserCertificate> =>
      this.rest.url(`/ssh_user_certificates/${arg.id}`).patch(arg).json(),
  }

  TLSCertificates = {
    /** Upload a new TLS certificate */
    create: (arg: t.TLSCertificateCreate): Promise<t.TLSCertificate> =>
      this.rest.url(`/tls_certificates`).post(arg).json(),
    /** Delete a TLS certificate */
    delete: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/tls_certificates/${arg.id}`).delete().json(),
    /** Get detailed information about a TLS certificate */
    get: (arg: t.Item): Promise<t.TLSCertificate> =>
      this.rest.url(`/tls_certificates/${arg.id}`).get().json(),
    /** List all TLS certificates on this account */
    list: (arg: t.Page): Promise<t.TLSCertificateList> =>
      this.rest.url(`/tls_certificates`).get().json(),
    /** Update attributes of a TLS Certificate by ID */
    update: (arg: t.TLSCertificateUpdate): Promise<t.TLSCertificate> =>
      this.rest.url(`/tls_certificates/${arg.id}`).patch(arg).json(),
  }

  TunnelSessions = {
    /** List all online tunnel sessions running on this account. */
    list: (arg: t.Page): Promise<t.TunnelSessionList> =>
      this.rest.url(`/tunnel_sessions`).get().json(),
    /** Get the detailed status of a tunnel session by ID */
    get: (arg: t.Item): Promise<t.TunnelSession> =>
      this.rest.url(`/tunnel_sessions/${arg.id}`).get().json(),
    /** Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID. */
    restart: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/tunnel_sessions/${arg.id}/restart`).post(arg).json(),
    /** Issues a command instructing the ngrok agent that started this tunnel session to exit. */
    stop: (arg: t.Item): Promise<t.Empty> =>
      this.rest.url(`/tunnel_sessions/${arg.id}/stop`).post(arg).json(),
    /** Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted */
    update: (arg: t.TunnelSessionsUpdate): Promise<t.Empty> =>
      this.rest.url(`/tunnel_sessions/${arg.id}/update`).post(arg).json(),
  }

  Tunnels = {
    /** List all online tunnels currently running on the account. */
    list: (arg: t.Page): Promise<t.TunnelList> =>
      this.rest.url(`/tunnels`).get().json(),
  }
}
