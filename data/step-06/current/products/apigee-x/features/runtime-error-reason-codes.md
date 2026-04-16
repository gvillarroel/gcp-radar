---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.186Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Runtime error reason codes"
feature_slug: "runtime-error-reason-codes"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jwt-policy"
keywords:
  - "include"
  - "improve"
  - "reason"
  - "error"
  - "codes"
  - "messages"
  - "runtime"
---

# Runtime error reason codes

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Runtime error messages can include reason codes to improve error diagnosis and filtering in the error catalog.

## Extended Definition

Runtime error messages can include reason codes to improve error diagnosis and filtering in the error catalog.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jwt-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jwt-policy)

## Supporting Pages

### Handling faults \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- Source ID: `site-docs-reference-required-3`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Category Subcategory Fault Name Description Messaging Failures that occur during the message flow (not including policy failures) Custom faults {fault name} Any faults explicitly handled by the API proxy using the RaiseFault policy Response codes InternalServerError, NotFound HTTP error codes 5xx , 4xx Routing failures NoRoutesMatched Failure in selecting a named TargetEndpoint for a request Classification failures NotFound Failures caused by a request URI that does not match any BasePath for any ProxyEndpoint configurations (that is, no API proxies match the URL in the client app's request) Transport HTTP transport-level errors Connectivity ConnectionRefused, ConnectionReset, ConnectionTimeout Failures occur while establishing network or transport-level connections Request validations ContentLengthMissing, HostHeaderMissing Faults occur during semantics checks on every request Response validations Faults occur during semantics checks on every response IO errors SSLHandshakeError, ReadTimeout, ReadError, WriteTimeout, WriteError, ChunkError Read/write errors at client or target endpoints, timeouts, TLS/SSL errors, and chunked errors System Undefined runtime errors Memory OutOfMemory, GCOverLimit Memory-related failures Thread RogueTaskTerminated Failures such as termination of run-away tasks Policy Faults for each policy type are defined in the Policy reference .
- For example, you might not want to treat all HTTP response codes in the range 4xx-5xx as "failure" but only 5xx , or you might want to return custom error messages for HTTP response codes 400 and 500 .
- The following TargetEndpoint uses the policy named ReturnError to handle HTTP 400 and 500 response codes: <TargetEndpoint name="default"> <PreFlow name="PreFlow"> <Request/> <Response> <Step> <Name>ReturnError</Name> <Condition>(response.status.code = 400) or (response.status.code = 500)</Condition> </Step> </Response> </PreFlow> <HTTPTargetConnection> <Properties> <Property name="success.codes">1xx,2xx,3xx,400,500</Property> </Properties> <URL>http://weather.yahooapis.com</URL> </HTTPTargetConnection> </TargetEndpoint> This TargetEndpoint configuration causes the policy called ReturnError to handle the response whenever the TargetEndpoint encounters an HTTP response code of 400 OR 500 .
- By treating those codes as a success, the TargetEndpoint takes over the processing of the response message, instead of invoking the error state: <TargetEndpoint name="default"> ... <HTTPTargetConnection> <Properties> <Property name="success.codes">1xx,2xx,3xx,400,500</Property> </Properties> <URL>http://weather.yahooapis.com</URL> </HTTPTargetConnection> </TargetEndpoint> As you can see in this example, you can use wildcards to set the success.codes property to a range of values..

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For details, see Authentication element in the ServiceCallout policy reference. <Authentication> element error reference If you are using the <Authentication> element, you can find possible error messages and troubleshooting tips for deployment and runtime errors in the Errors section of the ServiceCallout policy documentation. <Authentication> element examples The following example shows how to call a service deployed on Cloud Run as the target using the Authentication element to generate an OpenID Connect token needed to authenticate the call: <TargetEndpoint name="TargetEndpoint-1"> <HTTPTargetConnection> <Properties/> <URL>https://cloudrun-hostname.a.run.app/test</URL> <Authentication> <GoogleIDToken> <Audience>https://cloudrun-hostname.a.run.app/test</Audience> </GoogleIDToken> </Authentication> </HTTPTargetConnection> </TargetEndpoint> The following example shows how to call a TargetService that points to Cloud Run using the Authentication element to generate an OpenID Connect token needed to authenticate the call.
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- Enabling two-way TLS typically requires that you set up both a truststore and a keystore on Apigee. false No KeyStore A keystore containing private keys used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) KeyAlias The key alias of the private key used for outbound client authentication N/A Yes (if ClientAuthEnabled is true) IgnoreValidationErrors Indicates whether validation errors are ignored.
- If the request path does not include the suffix /accesstoken , then the flow does not execute (although another conditional flow might). <Flows> <Flow name="TokenEndpoint"> <Condition>proxy.pathsuffix MatchesPath "/accesstoken"</Condition> <Request> <Step> <Name>GenerateAccessToken</Name> </Step> </Request> </Flow> </Flows> Flow configuration elements Name Description Default Required?

### GenerateJWT policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jwt-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jwt-policy)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Error reference This section describes the fault codes and error messages that are returned and fault variables that are set by Apigee when this policy triggers an error.
- Error name Cause Fix InvalidNameForAdditionalClaim The deployment will fail if the claim used in the child element <Claim> of the <AdditionalClaims> element is one of the following registered names: kid , iss , sub , aud , iat , exp , nbf , or jti . build InvalidTypeForAdditionalClaim If the claim used in the child element <Claim> of the <AdditionalClaims> element is not of type string , number , boolean , or map , the deployment will fail. build MissingNameForAdditionalClaim If the name of the claim is not specified in the child element <Claim> of the <AdditionalClaims> element, the deployment will fail. build InvalidNameForAdditionalHeader This error ccurs when the name of the claim used in the child element <Claim> of the <AdditionalClaims> element is either alg or typ . build InvalidTypeForAdditionalHeader If the type of claim used in the child element <Claim> of the <AdditionalClaims> element is not of type string , number , boolean , or map , the deployment will fail. build InvalidValueOfArrayAttribute This error occurs when the value of the array attribute in the child element <Claim> of the <AdditionalClaims> element is not set to true or false . build InvalidConfigurationForActionAndAlgorithm If the <PrivateKey> element is used with HS Family algorithms or the <SecretKey> element is used with RSA Family algorithms, the deployment will fail. build InvalidValueForElement If the value specified in the <Algorithm> element is not a supported value, the deployment will fail. build MissingConfigurationElement This error will occur if the <PrivateKey> element is not used with RSA family algorithms or the <SecretKey> element is not used with HS Family algorithms. build InvalidKeyConfiguration If the child element <Value> is not defined in the <PrivateKey> or <SecretKey> elements, the deployment will fail. build EmptyElementForKeyConfiguration If the ref attribute of the child element <Value> of the <PrivateKey> or <SecretKey> elements is empty or unspecified, the deployment will fail. build InvalidVariableNameForSecret This error occurs if the flow variable name specified in the ref attribute of the child element <Value> of the <PrivateKey> or <SecretKey> elements does not contain the private prefix (private.) . build InvalidSecretInConfig This error occurs if the child element <Value> of the <PrivateKey> or <SecretKey> elements does not contain the private prefix (private.) . build InvalidTimeFormat If the value specified in the <NotBefore> element does not use a supported format, the deployment will fail. build Fault variables These variables are set when a runtime error occurs.
- The JWT is possibly corrupted. steps.jwt.GenerationFailed 401 The policy was unable to generate the JWT. steps.jwt.InsufficientKeyLength 401 For a key less than 32 bytes for the HS256 algorithm, less than 48 bytes for the HS386 algortithm, and less than 64 bytes for the HS512 algorithm. steps.jwt.InvalidClaim 401 For a missing claim or claim mismatch, or a missing header or header mismatch. steps.jwt.InvalidConfiguration 401 Both the <Algorithm> and <Algorithms> elements are present. steps.jwt.InvalidCurve 401 The curve specified by the key is not valid for the Elliptic Curve algorithm. steps.jwt.InvalidJsonFormat 401 Invalid JSON found in the header or payload. steps.jwt.InvalidPasswordKey 401 The specified key specified did not meet the requirements. steps.jwt.InvalidPrivateKey 401 The specified key specified did not meet the requirements. steps.jwt.InvalidPublicKey 401 The specified key specified did not meet the requirements. steps.jwt.InvalidSecretKey 401 The specified key specified did not meet the requirements. steps.jwt.InvalidToken 401 This error occurs when the JWT signature verification fails. steps.jwt.JwtAudienceMismatch 401 The audience claim failed on token verification. steps.jwt.JwtIssuerMismatch 401 The issuer claim failed on token verification. steps.jwt.JwtSubjectMismatch 401 The subject claim failed on token verification. steps.jwt.KeyIdMissing 401 The Verify policy uses a JWKS as a source for public keys, but the signed JWT does not include a kid property in the header. steps.jwt.KeyParsingFailed 401 The public key could not be parsed from the given key information. steps.jwt.NoAlgorithmFoundInHeader 401 Occurs when the JWT contains no algorithm header. steps.jwt.NoMatchingPublicKey 401 The Verify policy uses a JWKS as a source for public keys, but the kid in the signed JWT is not listed in the JWKS. steps.jwt.SigningFailed 401 In GenerateJWT , for a key less than the minimum size for the HS384 or HS512 algorithms steps.jwt.TokenExpired 401 The policy attempts to verify an expired token. steps.jwt.TokenNotYetValid 401 The token is not yet valid. steps.jwt.UnhandledCriticalHeader 401 A header found by the Verify JWT policy in the crit header is not listed in KnownHeaders . steps.jwt.UnknownException 401 An unknown exception occurred. steps.jwt.WrongKeyType 401 Wrong type of key specified.
- Using a lower-strength key causes a runtime error. <Subject> <Subject>subject-string-here</Subject> or < Subject ref = " flow variable " / > For example: <Subject ref="apigee.developer.email"/> The policy generates a JWT containing a sub claim, set to the specified value.This claim identifies or makes a statement about the subject of the JWT.

