---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.855Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "OAuthV2 JWT access token support"
feature_slug: "oauthv2-jwt-access-token-support"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "oauthv2"
  - "token"
  - "access"
  - "adds"
---

# OAuthV2 JWT access token support

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens.

## Extended Definition

Apigee hybrid v1.7.0 adds OAuthV2 JWT operations to generate, verify, and refresh JWT-compliant access tokens.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)

## Supporting Pages

### Using JWT OAuth tokens \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth](https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/using-jwt-oauth)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The refresh operation generates a new JWT token with an updated expiry time, keeping other claims the same. <OAuthV2 name="RefreshAccessToken"> <Operation>RefreshJWTAccessToken</Operation> <GenerateResponse enabled="true"/> <Algorithm>HS512</Algorithm> <SecretKey> <Value ref="private.mysecretkey"/> </SecretKey> <RefreshTokenExpiresIn ref="kvm.oauth.expires in">3600000</RefreshTokenExpiresIn> </OAuthV2> Refreshing an RSA-signed JWT access token The following policy sample illustrates how to configure the OAuthV2 policy to refresh a JWT token that was signed with an RSA algorithm.
- The following example shows a policy configured to generate a JWT signed with an RSA private key using the RS256 algorithm. <OAuthV2 name="generate-policy"> <Operation>GenerateJWTAccessToken</Operation> <SupportedGrantTypes> <GrantType>client credentials</GrantType> </SupportedGrantTypes> <GenerateResponse enabled="true"/> <Algorithm>RS256</Algorithm> <PrivateKey> <Value ref="private.rsa-privatekey-1"/> </PrivateKey> <ExpiresIn ref="kvm.oauth.expires in">3600000</ExpiresIn> </OAuthV2> RSA private keys are secrets.
- The following example shows a policy configured to generate a JWT signed with the HS512 algorithm, using the specified secret key. <OAuthV2 name="generate-policy"> <Operation>GenerateJWTAccessToken</Operation> <SupportedGrantTypes> <GrantType>client credentials</GrantType> </SupportedGrantTypes> <GenerateResponse enabled="true"/> <Algorithm>HS512</Algorithm> <SecretKey> <Value ref="private.mysecretkey"/> </SecretKey> <ExpiresIn ref="kvm.oauth.expires in">3600000</ExpiresIn> </OAuthV2> Secret keys are secrets.
- When using the VerifyJWTAccessToken operation with an RSA algorithm, the policy configuration must use the <PublicKey> element to specify the public key that corresponds to the private key that was used to sign the JWT. <OAuthV2 name="OAuthV2-verify-jwt"> <Operation>VerifyJWTAccessToken</Operation> <Algorithm>RS512</Algorithm> <PublicKey> <Value ref="propertyset.non-secrets.rsa-publickey-1"/> </PublicKey> </OAuthV2> The public key is not a secret.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference-required-3`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click the GenerateAccessTokenClient policy in the Request pane: The following XML configuration is displayed: < OAuthV2 name = "GenerateAccessTokenClient" > < ! -- This policy generates an OAuth 2.0 access token using the client credentials grant type -- > < Operation>GenerateAccessToken < / Operation > < ! -- This is in milliseconds , so expire in an hour -- > < ExpiresIn>3600000 < / ExpiresIn > < SupportedGrantTypes > < ! -- This part is very important : most real OAuth 2.0 apps will want to use other grant types .
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- Click the Verify OAuth v2.0 Access Token icon in the right-hand pane and look at the XML below it in the text editor. <OAuthV2 async="false" continueOnError="false" enabled="true" name="verify-oauth-v2-access-token"> <DisplayName>Verify OAuth v2.0 Access Token</DisplayName> <Operation>VerifyAccessToken</Operation> </OAuthV2> Notice that the <Operation> is VerifyAccessToken .
- You should get a response like this: { "issued at" : "1466025769306" , "application name" : "716bbe61-f14a-4d85-9b56-a62ff8e0d347" , "scope" : "" , "status" : "approved" , "api product list" : "[helloworld oauth2-Product]" , "expires in" : "3599" , //--in seconds "developer.email" : "nigel@example.com" , "token type" : "BearerToken" , "client id" : "xNnREu1DNGfiwzQZ5HUN8IAUwZSW1GZW" , "access token" : "GTPY9VUHCqKVMRB0cHxnmAp0RXc0" , "organization name" : "myOrg" , "refresh token expires in" : "0" , //--in seconds "refresh count" : "0" } You got your OAuth 2.0 access token!

### Security actions overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use the API keys , API products , access tokens , developers , or developer apps conditions, you need to also use either the Verify API Key policy or the OAuthV2 policy.
- For Apigee hybrid, these conditions are available in version 1.12 and later: API keys, API products, access tokens, developers, developer apps, and user agents.
- Access tokens , one or more access tokens.
- Note: If you are using both security actions and the AccessControl policy to manage traffic based on IP address, the security action always executes before the AccessControl policy.

