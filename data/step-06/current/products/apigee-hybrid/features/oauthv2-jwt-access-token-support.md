---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.258Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "OAuthV2 JWT access token support"
feature_slug: "oauthv2-jwt-access-token-support"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth"
keywords:
  - "JWT claim validation"
  - "Generate JWT token"
  - "JWT token operations"
  - "OAuthV2 operation"
  - "Verify JWT token"
  - "JWT access token support"
  - "OAuthV2 JWT"
  - "JWT access token"
---

# OAuthV2 JWT access token support

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens.

## Extended Definition

Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth)

## Supporting Pages

### Using JWT OAuth tokens \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The refresh operation generates a new JWT token with an updated expiry time, keeping other claims the same. <OAuthV2 name="RefreshAccessToken"> <Operation>RefreshJWTAccessToken</Operation> <GenerateResponse enabled="true"/> <Algorithm>HS512</Algorithm> <SecretKey> <Value ref="private.mysecretkey"/> </SecretKey> <RefreshTokenExpiresIn ref="kvm.oauth.expires in">3600000</RefreshTokenExpiresIn> </OAuthV2> Refreshing an RSA-signed JWT access token The following policy sample illustrates how to configure the OAuthV2 policy to refresh a JWT token that was signed with an RSA algorithm.
- Unsupported policy elements The following OAuthV2 policy elements are not supported with JWT token configurations: Element Notes ExternalAuthorization When generating a JWT access token, the OAuthV2 policy will validate the client ID and Secret.
- Verifying a JWT access token signed with an HMAC algorithm The following example shows how to configure the OAuthV2 policy to verify a JWT token that was signed with the HS512 algorithm.
- Verifying a JWT access token signed with an RSA algorithm The following example shows how to configure the OAuthV2 policy to verify a JWT token that was signed with the RS512 algorithm.

