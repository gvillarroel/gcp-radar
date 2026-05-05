# Programmatic access to IAP-protected resources with service account JWTs

Product: Identity-Aware Proxy
Feature slug: `programmatic-access-to-iap-protected-resources-with-service-account-jwts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service accounts can use JWTs to programmatically access Identity-Aware Proxy-protected applications and services.

## Lifecycle

- Latest feature date: 2024-05-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- credential (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- key (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- private (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- role (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- secret (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- security (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- token (evidence: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration), [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources)
- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
