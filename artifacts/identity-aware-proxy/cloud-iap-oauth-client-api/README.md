# Cloud IAP OAuth client API

Product: Identity-Aware Proxy
Feature slug: `cloud-iap-oauth-client-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud IAP lets you programmatically create OAuth clients through the REST API or gcloud.

## Lifecycle

- Latest feature date: 2020-02-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- credential (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- encrypt (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- secret (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui), [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis), [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)
- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- [https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis](https://docs.cloud.google.com/iap/docs/reference/compute-engine-apis)
- [https://docs.cloud.google.com/iap/docs/reference/rest](https://docs.cloud.google.com/iap/docs/reference/rest)
