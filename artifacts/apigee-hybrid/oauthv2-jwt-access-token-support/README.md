# OAuthV2 JWT access token support

Product: Apigee hybrid
Feature slug: `oauthv2-jwt-access-token-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens.

## Lifecycle

- Latest feature date: 2022-04-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
