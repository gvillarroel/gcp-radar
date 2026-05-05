# App Engine SSL certificate management

Product: App Engine Admin API
Feature slug: `app-engine-ssl-certificate-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Beta-level App Engine Admin API and gcloud features can now create and manage SSL certificates.

## Lifecycle

- Latest feature date: 2017-06-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates), [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging](https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
