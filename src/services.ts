import { Wretcher } from 'wretch';

import * as datatypes from './datatypes';
import * as util from './util';

/**
 * Abuse Reports allow you to submit take-down requests for URLs hosted by
 ngrok that violate ngrok's terms of service.
 */
export class AbuseReports {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>abuseReports</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access
   */
  public create(
    arg: datatypes.AbuseReportCreate
  ): Promise<datatypes.AbuseReport> {
    return this.httpClient
      .url(`/abuse_reports`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get the detailed status of abuse report by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.AbuseReport> {
    return this.httpClient
      .url(`/abuse_reports/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * API Keys are used to authenticate to the [ngrok
 API](https://ngrok.com/docs/api#authentication). You may use the API itself
 to provision and manage API Keys but you'll need to provision your first API
 key from the [API Keys page](https://dashboard.ngrok.com/api/keys) on your
 ngrok.com dashboard.
 */
export class APIKeys {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>apiKeys</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new API key. The generated API key can be used to authenticate to the ngrok API.
   */
  public create(arg: datatypes.APIKeyCreate): Promise<datatypes.APIKey> {
    return this.httpClient
      .url(`/api_keys`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an API key by ID
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get the details of an API key by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.APIKey> {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all API keys owned by this account
   */
  public async list(): Promise<Array<datatypes.APIKey>> {
    const array: Array<datatypes.APIKey> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(arg: datatypes.Paging): Promise<datatypes.APIKeyList> {
    return this.httpClient
      .url(`/api_keys`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.APIKey[] = pagedList.keys;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an API key by ID.
   */
  public update(arg: datatypes.APIKeyUpdate): Promise<datatypes.APIKey> {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Certificate Authorities are x509 certificates that are used to sign other
 x509 certificates. Attach a Certificate Authority to the Mutual TLS module
 to verify that the TLS certificate presented by a client has been signed by
 this CA. Certificate Authorities  are used only for mTLS validation only and
 thus a private key is not included in the resource.
 */
export class CertificateAuthorities {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>certificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Upload a new Certificate Authority
   */
  public create(
    arg: datatypes.CertificateAuthorityCreate
  ): Promise<datatypes.CertificateAuthority> {
    return this.httpClient
      .url(`/certificate_authorities`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete a Certificate Authority
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about a certficate authority
   */
  public get(arg: datatypes.Item): Promise<datatypes.CertificateAuthority> {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all Certificate Authority on this account
   */
  public async list(): Promise<Array<datatypes.CertificateAuthority>> {
    const array: Array<datatypes.CertificateAuthority> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.CertificateAuthorityList> {
    return this.httpClient
      .url(`/certificate_authorities`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.CertificateAuthority[] =
        pagedList.certificateAuthorities;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of a Certificate Authority by ID
   */
  public update(
    arg: datatypes.CertificateAuthorityUpdate
  ): Promise<datatypes.CertificateAuthority> {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Tunnel Credentials are ngrok agent authtokens. They authorize the ngrok
 agent to connect the ngrok service as your account. They are installed with
 the `ngrok authtoken` command or by specifying it in the `ngrok.yml`
 configuration file with the `authtoken` property.
 */
export class Credentials {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>credentials</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself.
   */
  public create(
    arg: datatypes.CredentialCreate
  ): Promise<datatypes.Credential> {
    return this.httpClient
      .url(`/credentials`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete a tunnel authtoken credential by ID
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about a tunnel authtoken credential
   */
  public get(arg: datatypes.Item): Promise<datatypes.Credential> {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all tunnel authtoken credentials on this account
   */
  public async list(): Promise<Array<datatypes.Credential>> {
    const array: Array<datatypes.Credential> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(arg: datatypes.Paging): Promise<datatypes.CredentialList> {
    return this.httpClient
      .url(`/credentials`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.Credential[] = pagedList.credentials;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an tunnel authtoken credential by ID
   */
  public update(
    arg: datatypes.CredentialUpdate
  ): Promise<datatypes.Credential> {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Endpoint Configurations are a reusable group of modules that encapsulate how
 traffic to a domain or address is handled. Endpoint configurations are only
 applied to Domains and TCP Addresses they have been attached to.
 */
export class EndpointConfigurations {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointConfigurations</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new endpoint configuration
   */
  public create(
    arg: datatypes.EndpointConfigurationCreate
  ): Promise<datatypes.EndpointConfiguration> {
    return this.httpClient
      .url(`/endpoint_configurations`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an endpoint configuration. This operation will fail if the endpoint configuration is still referenced by any reserved domain or reserved address.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Returns detailed information about an endpoint configuration
   */
  public get(arg: datatypes.Item): Promise<datatypes.EndpointConfiguration> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Returns a list of all endpoint configurations on this account
   */
  public async list(): Promise<Array<datatypes.EndpointConfiguration>> {
    const array: Array<datatypes.EndpointConfiguration> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.EndpointConfigurationList> {
    return this.httpClient
      .url(`/endpoint_configurations`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.EndpointConfiguration[] =
        pagedList.endpointConfigurations;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Updates an endpoint configuration. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
   */
  public update(
    arg: datatypes.EndpointConfigurationUpdate
  ): Promise<datatypes.EndpointConfiguration> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EventStreams {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>eventStreams</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Event Stream. It will not apply to anything until you associate it with one or more Endpoint Configs.
   */
  public create(
    arg: datatypes.EventStreamCreate
  ): Promise<datatypes.EventStream> {
    return this.httpClient
      .url(`/event_streams`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an Event Stream. Associated Event Destinations will be preserved.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/event_streams/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an Event Stream by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.EventStream> {
    return this.httpClient
      .url(`/event_streams/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all Event Streams available on this account.
   */
  public async list(): Promise<Array<datatypes.EventStream>> {
    const array: Array<datatypes.EventStream> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.EventStreamList> {
    return this.httpClient
      .url(`/event_streams`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.EventStream[] = pagedList.eventStreams;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an Event Stream by ID.
   */
  public update(
    arg: datatypes.EventStreamUpdate
  ): Promise<datatypes.EventStream> {
    return this.httpClient
      .url(`/event_streams/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EventDestinations {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>eventDestinations</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Event Destination. It will not apply to anything until it is associated with an Event Stream, and that Event Stream is associated with an Endpoint Config.
   */
  public create(
    arg: datatypes.EventDestinationCreate
  ): Promise<datatypes.EventDestination> {
    return this.httpClient
      .url(`/event_destinations`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an Event Destination. If the Event Destination is still referenced by an Event Stream, this will throw an error until that Event Stream has removed that reference.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an Event Destination by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.EventDestination> {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all Event Destinations on this account.
   */
  public async list(): Promise<Array<datatypes.EventDestination>> {
    const array: Array<datatypes.EventDestination> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.EventDestinationList> {
    return this.httpClient
      .url(`/event_destinations`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.EventDestination[] = pagedList.eventDestinations;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an Event Destination.
   */
  public update(
    arg: datatypes.EventDestinationUpdate
  ): Promise<datatypes.EventDestination> {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EventSubscriptions {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>eventSubscriptions</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create an Event Subscription.
   */
  public create(
    arg: datatypes.EventSubscriptionCreate
  ): Promise<datatypes.EventSubscription> {
    return this.httpClient
      .url(`/event_subscriptions`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an Event Subscription.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get an Event Subscription by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.EventSubscription> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List this Account's Event Subscriptions.
   */
  public async list(): Promise<Array<datatypes.EventSubscription>> {
    const array: Array<datatypes.EventSubscription> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.EventSubscriptionList> {
    return this.httpClient
      .url(`/event_subscriptions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.EventSubscription[] = pagedList.eventSubscriptions;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update an Event Subscription.
   */
  public update(
    arg: datatypes.EventSubscriptionUpdate
  ): Promise<datatypes.EventSubscription> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EventSources {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>eventSources</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Add an additional type for which this event subscription will trigger
   */
  public create(
    arg: datatypes.EventSourceCreate
  ): Promise<datatypes.EventSource> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Remove a type for which this event subscription will trigger
   */
  public delete(arg: datatypes.EventSourceItem): Promise<void> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get the details for a given type that triggers for the given event subscription
   */
  public get(arg: datatypes.EventSourceItem): Promise<datatypes.EventSource> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List the types for which this event subscription will trigger
   */
  public list(
    arg: datatypes.EventSourcePaging
  ): Promise<datatypes.EventSourceList> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Update the type for which this event subscription will trigger
   */
  public update(
    arg: datatypes.EventSourceUpdate
  ): Promise<datatypes.EventSource> {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * IP Policies are reusable groups of CIDR ranges with an `allow` or `deny`
 action. They can be attached to endpoints via the Endpoint Configuration IP
 Policy module. They can also be used with IP Restrictions to control source
 IP ranges that can start tunnel sessions and connect to the API and dashboard.
 */
export class IPPolicies {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>ipPolicies</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction.
   */
  public create(arg: datatypes.IPPolicyCreate): Promise<datatypes.IPPolicy> {
    return this.httpClient
      .url(`/ip_policies`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an IP policy by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.IPPolicy> {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all IP policies on this account
   */
  public async list(): Promise<Array<datatypes.IPPolicy>> {
    const array: Array<datatypes.IPPolicy> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(arg: datatypes.Paging): Promise<datatypes.IPPolicyList> {
    return this.httpClient
      .url(`/ip_policies`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.IPPolicy[] = pagedList.ipPolicies;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an IP policy by ID
   */
  public update(arg: datatypes.IPPolicyUpdate): Promise<datatypes.IPPolicy> {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * IP Policy Rules are the IPv4 or IPv6 CIDRs entries that
 make up an IP Policy.
 */
export class IPPolicyRules {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>ipPolicyRules</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP policy rule attached to an IP Policy.
   */
  public create(
    arg: datatypes.IPPolicyRuleCreate
  ): Promise<datatypes.IPPolicyRule> {
    return this.httpClient
      .url(`/ip_policy_rules`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an IP policy rule.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an IP policy rule by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.IPPolicyRule> {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all IP policy rules on this account
   */
  public async list(): Promise<Array<datatypes.IPPolicyRule>> {
    const array: Array<datatypes.IPPolicyRule> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.IPPolicyRuleList> {
    return this.httpClient
      .url(`/ip_policy_rules`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.IPPolicyRule[] = pagedList.ipPolicyRules;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an IP policy rule by ID
   */
  public update(
    arg: datatypes.IPPolicyRuleUpdate
  ): Promise<datatypes.IPPolicyRule> {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * An IP restriction is a restriction placed on the CIDRs that are allowed to
 initate traffic to a specific aspect of your ngrok account. An IP
 restriction has a type which defines the ingress it applies to. IP
 restrictions can be used to enforce the source IPs that can make API
 requests, log in to the dashboard, start ngrok agents, and connect to your
 public-facing endpoints.
 */
export class IPRestrictions {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>ipRestrictions</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP restriction
   */
  public create(
    arg: datatypes.IPRestrictionCreate
  ): Promise<datatypes.IPRestriction> {
    return this.httpClient
      .url(`/ip_restrictions`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an IP restriction
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an IP restriction
   */
  public get(arg: datatypes.Item): Promise<datatypes.IPRestriction> {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all IP restrictions on this account
   */
  public async list(): Promise<Array<datatypes.IPRestriction>> {
    const array: Array<datatypes.IPRestriction> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.IPRestrictionList> {
    return this.httpClient
      .url(`/ip_restrictions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.IPRestriction[] = pagedList.ipRestrictions;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an IP restriction by ID
   */
  public update(
    arg: datatypes.IPRestrictionUpdate
  ): Promise<datatypes.IPRestriction> {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * The IP Whitelist is deprecated and will be removed. Use an IP Restriction
 with an `endpoints` type instead.
 */
export class IPWhitelist {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>ipWhitelist</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP whitelist entry that will restrict traffic to all tunnel endpoints on the account.
   */
  public create(
    arg: datatypes.IPWhitelistEntryCreate
  ): Promise<datatypes.IPWhitelistEntry> {
    return this.httpClient
      .url(`/ip_whitelist`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an IP whitelist entry.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ip_whitelist/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an IP whitelist entry by ID.
   */
  public get(arg: datatypes.Item): Promise<datatypes.IPWhitelistEntry> {
    return this.httpClient
      .url(`/ip_whitelist/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all IP whitelist entries on this account
   */
  public async list(): Promise<Array<datatypes.IPWhitelistEntry>> {
    const array: Array<datatypes.IPWhitelistEntry> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.IPWhitelistEntryList> {
    return this.httpClient
      .url(`/ip_whitelist`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.IPWhitelistEntry[] = pagedList.whitelist;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an IP whitelist entry by ID
   */
  public update(
    arg: datatypes.IPWhitelistEntryUpdate
  ): Promise<datatypes.IPWhitelistEntry> {
    return this.httpClient
      .url(`/ip_whitelist/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointLoggingModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointLoggingModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointLoggingReplace
  ): Promise<datatypes.EndpointLogging> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/logging`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointLogging> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/logging`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/logging`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointCircuitBreakerModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointCircuitBreakerModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointCircuitBreakerReplace
  ): Promise<datatypes.EndpointCircuitBreaker> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/circuit_breaker`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointCircuitBreaker> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/circuit_breaker`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/circuit_breaker`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointCompressionModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointCompressionModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointCompressionReplace
  ): Promise<datatypes.EndpointCompression> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/compression`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointCompression> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/compression`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/compression`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointTLSTerminationModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointTLSTerminationReplace
  ): Promise<datatypes.EndpointTLSTermination> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/tls_termination`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointTLSTermination> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/tls_termination`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/tls_termination`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointIPPolicyModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointIpPolicyModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointIPPolicyReplace
  ): Promise<datatypes.EndpointIPPolicy> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/ip_policy`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointIPPolicy> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/ip_policy`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/ip_policy`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointMutualTLSModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointMutualTLSReplace
  ): Promise<datatypes.EndpointMutualTLS> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/mutual_tls`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointMutualTLS> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/mutual_tls`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/mutual_tls`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointRequestHeadersModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointRequestHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointRequestHeadersReplace
  ): Promise<datatypes.EndpointRequestHeaders> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/request_headers`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointRequestHeaders> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/request_headers`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/request_headers`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointResponseHeadersModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointResponseHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointResponseHeadersReplace
  ): Promise<datatypes.EndpointResponseHeaders> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/response_headers`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointResponseHeaders> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/response_headers`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/response_headers`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointOAuthModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointOAuthModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointOAuthReplace
  ): Promise<datatypes.EndpointOAuth> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oauth`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointOAuth> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oauth`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oauth`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointWebhookValidationModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointWebhookValidationModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointWebhookValidationReplace
  ): Promise<datatypes.EndpointWebhookValidation> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/webhook_validation`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(
    arg: datatypes.Item
  ): Promise<datatypes.EndpointWebhookValidation> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/webhook_validation`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/webhook_validation`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointSAMLModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointSamlModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointSAMLReplace
  ): Promise<datatypes.EndpointSAML> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/saml`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointSAML> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/saml`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/saml`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

export class EndpointOIDCModule {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>endpointOidcModule</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  public replace(
    arg: datatypes.EndpointOIDCReplace
  ): Promise<datatypes.EndpointOIDC> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oidc`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public get(arg: datatypes.Item): Promise<datatypes.EndpointOIDC> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oidc`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/endpoint_configurations/${arg.id}/oidc`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Reserved Addresses are TCP addresses that can be used to listen for traffic.
 TCP address hostnames and ports are assigned by ngrok, they cannot be
 chosen.
 */
export class ReservedAddrs {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>reservedAddrs</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new reserved address.
   */
  public create(
    arg: datatypes.ReservedAddrCreate
  ): Promise<datatypes.ReservedAddr> {
    return this.httpClient
      .url(`/reserved_addrs`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete a reserved address.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get the details of a reserved address.
   */
  public get(arg: datatypes.Item): Promise<datatypes.ReservedAddr> {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all reserved addresses on this account.
   */
  public async list(): Promise<Array<datatypes.ReservedAddr>> {
    const array: Array<datatypes.ReservedAddr> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.ReservedAddrList> {
    return this.httpClient
      .url(`/reserved_addrs`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.ReservedAddr[] = pagedList.reservedAddrs;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update the attributes of a reserved address.
   */
  public update(
    arg: datatypes.ReservedAddrUpdate
  ): Promise<datatypes.ReservedAddr> {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Detach the endpoint configuration attached to a reserved address.
   */
  public deleteEndpointConfig(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}/endpoint_configuration`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Reserved Domains are hostnames that you can listen for traffic on. Domains
 can be used to listen for http, https or tls traffic. You may use a domain
 that you own by creating a CNAME record specified in the returned resource.
 This CNAME record points traffic for that domain to ngrok's edge servers.
 */
export class ReservedDomains {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>reservedDomains</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new reserved domain.
   */
  public create(
    arg: datatypes.ReservedDomainCreate
  ): Promise<datatypes.ReservedDomain> {
    return this.httpClient
      .url(`/reserved_domains`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete a reserved domain.
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get the details of a reserved domain.
   */
  public get(arg: datatypes.Item): Promise<datatypes.ReservedDomain> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all reserved domains on this account.
   */
  public async list(): Promise<Array<datatypes.ReservedDomain>> {
    const array: Array<datatypes.ReservedDomain> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.ReservedDomainList> {
    return this.httpClient
      .url(`/reserved_domains`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.ReservedDomain[] = pagedList.reservedDomains;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update the attributes of a reserved domain.
   */
  public update(
    arg: datatypes.ReservedDomainUpdate
  ): Promise<datatypes.ReservedDomain> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Detach the certificate management policy attached to a reserved domain.
   */
  public deleteCertificateManagementPolicy(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/certificate_management_policy`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Detach the certificate attached to a reserved domain.
   */
  public deleteCertificate(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/certificate`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Detach the http endpoint configuration attached to a reserved domain.
   */
  public deleteHttpEndpointConfig(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/http_endpoint_configuration`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Detach the https endpoint configuration attached to a reserved domain.
   */
  public deleteHttpsEndpointConfig(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/https_endpoint_configuration`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * An SSH Certificate Authority is a pair of an SSH Certificate and its private
 key that can be used to sign other SSH host and user certificates.
 */
export class SSHCertificateAuthorities {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>sshCertificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH Certificate Authority
   */
  public create(
    arg: datatypes.SSHCertificateAuthorityCreate
  ): Promise<datatypes.SSHCertificateAuthority> {
    return this.httpClient
      .url(`/ssh_certificate_authorities`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an SSH Certificate Authority
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an SSH Certficate Authority
   */
  public get(arg: datatypes.Item): Promise<datatypes.SSHCertificateAuthority> {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all SSH Certificate Authorities on this account
   */
  public async list(): Promise<Array<datatypes.SSHCertificateAuthority>> {
    const array: Array<datatypes.SSHCertificateAuthority> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.SSHCertificateAuthorityList> {
    return this.httpClient
      .url(`/ssh_certificate_authorities`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.SSHCertificateAuthority[] =
        pagedList.sshCertificateAuthorities;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update an SSH Certificate Authority
   */
  public update(
    arg: datatypes.SSHCertificateAuthorityUpdate
  ): Promise<datatypes.SSHCertificateAuthority> {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * SSH Credentials are SSH public keys that can be used to start SSH tunnels
 via the ngrok SSH tunnel gateway.
 */
export class SSHCredentials {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>sshCredentials</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok's SSH gateway.
   */
  public create(
    arg: datatypes.SSHCredentialCreate
  ): Promise<datatypes.SSHCredential> {
    return this.httpClient
      .url(`/ssh_credentials`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an ssh_credential by ID
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an ssh_credential
   */
  public get(arg: datatypes.Item): Promise<datatypes.SSHCredential> {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all ssh credentials on this account
   */
  public async list(): Promise<Array<datatypes.SSHCredential>> {
    const array: Array<datatypes.SSHCredential> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.SSHCredentialList> {
    return this.httpClient
      .url(`/ssh_credentials`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.SSHCredential[] = pagedList.sshCredentials;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of an ssh_credential by ID
   */
  public update(
    arg: datatypes.SSHCredentialUpdate
  ): Promise<datatypes.SSHCredential> {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * SSH Host Certificates along with the corresponding private key allows an SSH
 server to assert its authenticity to connecting SSH clients who trust the
 SSH Certificate Authority that was used to sign the certificate.
 */
export class SSHHostCertificates {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>sshHostCertificates</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH Host Certificate
   */
  public create(
    arg: datatypes.SSHHostCertificateCreate
  ): Promise<datatypes.SSHHostCertificate> {
    return this.httpClient
      .url(`/ssh_host_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an SSH Host Certificate
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an SSH Host Certficate
   */
  public get(arg: datatypes.Item): Promise<datatypes.SSHHostCertificate> {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all SSH Host Certificates issued on this account
   */
  public async list(): Promise<Array<datatypes.SSHHostCertificate>> {
    const array: Array<datatypes.SSHHostCertificate> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.SSHHostCertificateList> {
    return this.httpClient
      .url(`/ssh_host_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.SSHHostCertificate[] =
        pagedList.sshHostCertificates;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update an SSH Host Certificate
   */
  public update(
    arg: datatypes.SSHHostCertificateUpdate
  ): Promise<datatypes.SSHHostCertificate> {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * SSH User Certificates are presented by SSH clients when connecting to an SSH
 server to authenticate their connection. The SSH server must trust the SSH
 Certificate Authority used to sign the certificate.
 */
export class SSHUserCertificates {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>sshUserCertificates</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH User Certificate
   */
  public create(
    arg: datatypes.SSHUserCertificateCreate
  ): Promise<datatypes.SSHUserCertificate> {
    return this.httpClient
      .url(`/ssh_user_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete an SSH User Certificate
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about an SSH User Certficate
   */
  public get(arg: datatypes.Item): Promise<datatypes.SSHUserCertificate> {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all SSH User Certificates issued on this account
   */
  public async list(): Promise<Array<datatypes.SSHUserCertificate>> {
    const array: Array<datatypes.SSHUserCertificate> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.SSHUserCertificateList> {
    return this.httpClient
      .url(`/ssh_user_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.SSHUserCertificate[] =
        pagedList.sshUserCertificates;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update an SSH User Certificate
   */
  public update(
    arg: datatypes.SSHUserCertificateUpdate
  ): Promise<datatypes.SSHUserCertificate> {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * TLS Certificates are pairs of x509 certificates and their matching private
 key that can be used to terminate TLS traffic. TLS certificates are unused
 until they are attached to a Domain. TLS Certificates may also be
 provisioned by ngrok automatically for domains on which you have enabled
 automated certificate provisioning.
 */
export class TLSCertificates {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>tlsCertificates</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * Upload a new TLS certificate
   */
  public create(
    arg: datatypes.TLSCertificateCreate
  ): Promise<datatypes.TLSCertificate> {
    return this.httpClient
      .url(`/tls_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Delete a TLS certificate
   */
  public delete(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Get detailed information about a TLS certificate
   */
  public get(arg: datatypes.Item): Promise<datatypes.TLSCertificate> {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * List all TLS certificates on this account
   */
  public async list(): Promise<Array<datatypes.TLSCertificate>> {
    const array: Array<datatypes.TLSCertificate> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.TLSCertificateList> {
    return this.httpClient
      .url(`/tls_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.TLSCertificate[] = pagedList.tlsCertificates;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Update attributes of a TLS Certificate by ID
   */
  public update(
    arg: datatypes.TLSCertificateUpdate
  ): Promise<datatypes.TLSCertificate> {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Tunnel Sessions represent instances of ngrok agents or SSH reverse tunnel
 sessions that are running and connected to the ngrok service. Each tunnel
 session can include one or more Tunnels.
 */
export class TunnelSessions {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>tunnelSessions</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * List all online tunnel sessions running on this account.
   */
  public async list(): Promise<Array<datatypes.TunnelSession>> {
    const array: Array<datatypes.TunnelSession> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(
    arg: datatypes.Paging
  ): Promise<datatypes.TunnelSessionList> {
    return this.httpClient
      .url(`/tunnel_sessions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.TunnelSession[] = pagedList.tunnelSessions;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
  /**
   * Get the detailed status of a tunnel session by ID
   */
  public get(arg: datatypes.Item): Promise<datatypes.TunnelSession> {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID.
   */
  public restart(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/restart`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Issues a command instructing the ngrok agent that started this tunnel session to exit.
   */
  public stop(arg: datatypes.Item): Promise<void> {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/stop`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }

  /**
   * Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted
   */
  public update(arg: datatypes.TunnelSessionsUpdate): Promise<void> {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/update`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}

/**
 * Tunnels provide endpoints to access services exposed by a running ngrok
 agent tunnel session or an SSH reverse tunnel session.
 */
export class Tunnels {
  private httpClient: Wretcher;

  /** Do not construct this object directly, use the <code>tunnels</code> property of an <code>Ngrok</code> client object instead. */
  public constructor(httpClient: Wretcher) {
    this.httpClient = httpClient;
  }
  /**
   * List all online tunnels currently running on the account.
   */
  public async list(): Promise<Array<datatypes.Tunnel>> {
    const array: Array<datatypes.Tunnel> = [];
    for await (const item of this._asyncList()) {
      array.push(item);
    }
    return array;
  }
  private _pagedList(arg: datatypes.Paging): Promise<datatypes.TunnelList> {
    return this.httpClient
      .url(`/tunnels`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  private async *_asyncList() {
    const limit = '100';
    let nextPage = 'initial loop';
    let page: datatypes.Paging = { limit: limit };

    while (nextPage) {
      const pagedList = await this._pagedList(page);
      nextPage = pagedList.nextPageUri;
      const items: datatypes.Tunnel[] = pagedList.tunnels;

      if (nextPage) {
        page = {
          beforeId: items[items.length - 1].id,
          limit: limit,
        };
      }

      for (const item of items) {
        yield item;
      }
    }
  }
}
