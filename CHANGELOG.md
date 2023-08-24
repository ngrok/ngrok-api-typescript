<!-- Code generated for API Clients. DO NOT EDIT. -->

## 0.3.0

ENHANCEMENTS:

* Added `owner_id` field to the `api_key`, `credential`, and `ssh_credential` resources. If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot.
* Added `failover_backend`, `http_response_backend`, and `tunnel_group_backend` resources. A Failover backend defines failover behavior within a list of referenced backends. Traffic is sent to the first backend in the list. If that backend is offline or no connection can be established, ngrok attempts to connect to the next backend in the list until one is successful.

## 0.2.0

ENHANCEMENTS:

* Restructure to use classes instead of embedded objects
* Added support for namespaces to avoid clutter
* Rewrote README explaining async usage, error handling, and more examples
* Run tests against mock or actual API
* Improved Typedoc generated documentation

FIXES:

* Use the correct naming convention for TypeScript properties
* Use Markdown instead of plain text for Typedoc
* Use Promise when a method returns no result instead of an empty object

## 0.1.0

ENHANCEMENTS:

* List iterators supporting automatic paging
* Generate TypeScript documentation

## 0.0.11

FIXES:

* Fix missing Ngrok module
* Fix Map type JSON serialization

ENHANCEMENTS:

* Refine error messages to an Error type
* Add a CHANGELOG and an example usage
