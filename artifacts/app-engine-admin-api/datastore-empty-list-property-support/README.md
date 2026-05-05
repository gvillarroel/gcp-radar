# Datastore empty-list property support

Product: App Engine Admin API
Feature slug: `datastore-empty-list-property-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Enabled Datastore properties to represent an empty list value.

## Lifecycle

- Latest feature date: 2015-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- authorization (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- secret (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
