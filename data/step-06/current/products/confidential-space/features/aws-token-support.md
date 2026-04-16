---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.598Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "AWS token support"
feature_slug: "aws-token-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims"
keywords:
  - "aws"
  - "token"
  - "confidential"
  - "space"
  - "supports"
  - "tokens"
  - "integration"
  - "resources"
---

# AWS token support

Product: Confidential Space
Coverage: LOW

## Step 02 Summary

Confidential Space supports AWS tokens for integration with AWS resources.

## Extended Definition

Confidential Space supports AWS tokens for integration with AWS resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)

## Supporting Pages

### "Access resources not managed by Google Cloud IAM \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OIDC attestation tokens package main import ( "context" "crypto/rsa" "encoding/base64" "encoding/json" "errors" "fmt" "io" "math/big" "net" "net/http" "strings" "github.com/golang-jwt/jwt/v4" ) const ( socketPath = "/run/container launcher/teeserver.sock" expectedIssuer = "https://confidentialcomputing.googleapis.com" wellKnownPath = "/.well-known/openid-configuration" ) type jwksFile struct { Keys [] jwk json:"keys" } type jwk struct { N string json:"n" // "nMMTBwJ7H6Id8zUCZd-L7uoNyz9b7lvoyse9izD9l2rtOhWLWbiG-7pKeYJyHeEpilHP4KdQMfUo8JCwhd-OMW0be XtEu3jXEFjuq2YnPSPFk326eTfENtUc6qJohyMnfKkcOcY kTE11jM81-fsqtBKjO KiSkcmAO4wJJb8pHOjue3JCP09ZANL1uN4TuxbM2ibcyf25ODt3WQn54SRQTV0wn098Y5VDU-dzyeKYBNfL14iP0LiXBRfHd4YtEaGV9SBUuVhXdhx1eF0efztCNNz0GSLS2AEPLQduVuFoUImP4s51YdO9TPeeQ3hI8aGpOdC0syxmZ7LsL0rHE1Q", E string json:"e" // "AQAB" or 65537 as an int Kid string json:"kid" // "1f12fa916c3a0ef585894b4b420ad17dc9d6cdf5", // Unused fields: // Alg string json:"alg" // "RS256", // Kty string json:"kty" // "RSA", // Use string json:"use" // "sig", } type wellKnown struct { JwksURI string json:"jwks uri" // "https://www.googleapis.com/service accounts/v1/metadata/jwk/signer@confidentialspace-sign.iam.gserviceaccount.com" // Unused fields: // Iss string json:"issuer" // "https://confidentialcomputing.googleapis.com" // Subject types supported string json:"subject types supported" // [ "public" ] // Response types supported string json:"response types supported" // [ "id token" ] // Claims supported string json:"claims supported" // [ "sub", "aud", "exp", "iat", "iss", "jti", "nbf", "dbgstat", "eat nonce", "google service accounts", "hwmodel", "oemid", "secboot", "submods", "swname", "swversion" ] // Id token signing alg values supported string json:"id token signing alg values supported" // [ "RS256" ] // Scopes supported string json:"scopes supported" // [ "openid" ] } func getWellKnownFile () ( wellKnown , error ) { httpClient := http .
- The following is an example AWS policy that grants access to a workload with a specified digest and audience, CONFIDENTIAL SPACE as the software running on the VM instance, and STABLE as the support attribute: { "Version" : "2012-10-17" , "Statement" : [ { "Effect" : "Allow" , "Principal" : { "Federated" : "arn:aws:iam::232510754029:oidc-provider/confidentialcomputing.googleapis.com" }, "Action" : [ "sts:AssumeRoleWithWebIdentity" , "sts:TagSession" ], "Condition" : { "StringEquals" : { "confidentialcomputing.googleapis.com:aud" : "https://integration.test" , "aws:RequestTag/swname" : "CONFIDENTIAL SPACE" , "aws:RequestTag/container.image digest" : "sha256:ac74cbeca443e36325bad15a7c28f2598b22966aa94681a444553f0b838717cf" }, "StringLike" : { "aws:RequestTag/confidential space.support attributes" : " STABLE " } } } ] } Configure AWS resources After your integration is complete, configure your AWS resources.
- The following is an example https://aws.amazon.com/tags claim structure: { "https://aws.amazon.com/tags" : { "principal tags" : { "confidential space.support attributes" : [ "LATEST=STABLE=USABLE" ], "container.image digest" : [ "sha256:6eccbcf1a1de8bf50aefbb37e8c3600d5b59f4a12cf7d964b6f8ef964b782eb2" ], "gce.project id" : [ "confidentialcomputing-e2e" ], "gce.zone" : [ "us-west1-a" ], "hwmodel" : [ "GCP AMD SEV" ], "swname" : [ "CONFIDENTIAL SPACE" ], "swversion" : [ "250101" ] } } } AWS policies with container image signature claims AWS tokens also support container image signature claims.
- AWS principal tag claims Google Cloud Attestation generates verifiable identity tokens containing claims about the Confidential Space workload's integrity and configuration.

### Attestation token claims \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- Source ID: `site-api-reference-required-1`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The value is a JSON number that represents the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the expiry time. google service accounts String array The validated service accounts that are running the Confidential Space workload. hwmodel String The unique identifier for the hardware token.
- Home Documentation Security Confidential Space Reference Send feedback Attestation token claims Stay organized with collections Save and categorize content based on your preferences.
- This claim includes the container's entrypoint path and any additional command-line arguments. cmd override String array The CMD commands and parameters used in the workload image. env Object The environment variables and their values that have been explicitly passed to the container. env override Object The overwritten environment variables in the container. image digest String The image digest of the workload container. image id String The image ID of the workload container. image reference String The location of the workload container running in Confidential Space. image signatures Object array See Container image signature claims . restart policy String The restart policy of the container launcher when the workload stops.
- The value is a JSON number that represents the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the issue time. iss String The issuer of the token, which is set to https://confidentialcomputing.googleapis.com . nbf Int, Unix timestamp The time after which the JWT is allowed to be processed.

### "Attestation token validation endpoint fields \_|\_ Confidential Space \_\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields)
- Source ID: `site-api-reference-required-1`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confidential Space supports id token . scopes supported The OAuth 2.0 scope values that the Confidential VM instance supports.
- Which validation endpoint you use depends on the type of token that you requested: OIDC tokens PKI tokens OIDC tokens The following table describes the high-level fields returned at the OIDC token validation endpoint, https://confidentialcomputing.googleapis.com/.well-known/openid-configuration .
- PKI tokens The following table describes the high-level fields returned at the PKI token validation endpoint, https://confidentialcomputing.googleapis.com/.well-known/attestation-pki-root . root ca uri The path to the root certificate that is used to verify a PKI token type signature.
- Home Documentation Security Confidential Space Reference Send feedback Attestation token validation endpoint fields Stay organized with collections Save and categorize content based on your preferences.

