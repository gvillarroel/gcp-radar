---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.775Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "OAuth client allowlisting for programmatic access"
feature_slug: "oauth-client-allowlisting-for-programmatic-access"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/custom-oauth-configuration"
  - "https://docs.cloud.google.com/iap/docs/create-custom-auth-ui"
  - "https://docs.cloud.google.com/iap/docs/enabling-compute-howto"
keywords:
  - "oauth"
  - "client"
  - "allowlisting"
  - "for"
  - "programmatic"
  - "access"
  - "identity"
  - "aware"
---

# OAuth client allowlisting for programmatic access

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy can allowlist OAuth clients for programmatic access.

## Extended Definition

Identity-Aware Proxy can allowlist OAuth clients for programmatic access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)

## Supporting Pages

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( open id connect token )}, kwargs ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text Ruby To authenticate to IAP, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . from google.auth.transport.requests import Request from google.oauth2 import id token import requests def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- Add the OAuth client ID to the allowlist for programmatic access to the application.
- The following Bash script demonstrates this process: Bash #!/usr/bin/env bash Example script that generates an OIDC token using a service account key file and uses it to access an IAP-secured resource. set -euo pipefail get token () { Get the bearer token in exchange for the service account credentials local service account key file path = " ${ 1 } " local iap client id = " ${ 2 } " Define the scope and token endpoint local iam scope = "https://www.googleapis.com/auth/iam" local oauth token uri = "https://www.googleapis.com/oauth2/v4/token" Extract data from service account key file local private key id = " $( cat " ${ service account key file path } " jq -r '.private key id' ) " local client email = " $( cat " ${ service account key file path } " jq -r '.client email' ) " local private key = " $( cat " ${ service account key file path } " jq -r '.private key' ) " Set token timestamps (current time and expiration 10 minutes later) local issued at = " $( date +%s ) " local expires at = " $(( issued at + 600 )) " Create JWT header and payload local header = "{'alg':'RS256','typ':'JWT','kid':' ${ private key id } '}" local header base64 = " $( echo " ${ header } " base64 tr -d '\n' ) " local payload = "{'iss':' ${ client email } ','aud':' ${ oauth token uri } ','exp': ${ expires at } ,'iat': ${ issued at } ,'sub':' ${ client email } ','target audience':' ${ iap client id } '}" local payload base64 = " $( echo " ${ payload } " base64 tr -d '\n' ) " Create JWT signature using the private key local signature base64 = " $( printf %s " ${ header base64 } . ${ payload base64 } " openssl dgst -binary -sha256 -sign < ( printf '%s\n' " ${ private key } " ) base64 tr -d '\n')" local assertion = " ${ header base64 } . ${ payload base64 } . ${ signature base64 } " Exchange the signed JWT assertion for an ID token local token payload = " $( curl -s \ --data-urlencode "grant type=urn:ietf:params:oauth:grant-type:jwt-bearer" \ --data-urlencode "assertion= ${ assertion } " \ https://www.googleapis.com/oauth2/v4/token ) " Extract just the ID token from the response local bearer id token = " $( echo " ${ token payload } " jq -r '.id token' ) " echo " ${ bearer id token } " } main () { Check if required arguments are provided if [[ $# -lt 3 ]] ; then echo "Usage: $0 <service account key file.json> <iap client id> <url>" exit 1 fi Assign parameters to variables SERVICE ACCOUNT KEY = " $1 " IAP CLIENT ID = " $2 " URL = " $3 " Generate the ID token echo "Generating token..." ID TOKEN = $( get token " ${ SERVICE ACCOUNT KEY } " " ${ IAP CLIENT ID } " ) Access the IAP-secured resource with the token echo "Accessing: ${ URL } " curl --header "Authorization: Bearer ${ ID TOKEN } " " ${ URL } " } Run the main function with all provided arguments main " $@ " This script performs the following steps: Extracts the service account key information from your JSON key file Creates a JWT with the necessary fields, including the IAP client ID as the target audience Signs the JWT using the service account's private key Exchanges this JWT for an OIDC token through Google's OAuth service Uses the resulting token to make an authenticated request to your IAP-secured resource To use this script: Save it to a file, for example: get iap token.sh Make it executable: chmod +x get iap token.sh Run it with three parameters: ./get iap token.sh service-account-key.json \ OAUTH CLIENT ID \ URL Where: service-account-key.json is your downloaded service account key file OAUTH CLIENT ID is the OAuth client ID for your IAP-secured resource URL is the URL you want to access Obtain an OIDC token by using service account impersonation In all other cases, use the IAM credentials API to generate an OIDC token by impersonating a target service account right before accessing an IAP-secured resource.

### "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google managed OAuth client Custom OAuth client Users Internal only Internal and External Brand Google Cloud brand Customer owned brand OAuth configuration Google configured Customer configured OAuth credentials Google managed Customer managed Application access Browser flow only Browser flow and Programmatic access Important: The Google-managed OAuth client doesn't create a new OAuth client and secret for every application.
- This document describes when and how to use custom OAuth clients for Identity-Aware Proxy (IAP) .
- Terraform To apply the custom OAuth client using Terraform, do the following: resource "google iap settings" "iap settings" { name = IAP RESOURCE NAME access settings { oauth settings { oauth client id = CLIENT ID oauth client secret = CLIENT SECRET } } } Replace the following: IAP RESOURCE NAME : the resource name of the iap settings resource for the service, which has the following format: projects/ PROJECT NUMBER /iap web/ REGION /services/ SERVICE NAME CLIENT ID : the client ID from the OAuth credentials that you generated earlier CLIENT SECRET : the client secret from the OAuth credentials that you generated earlier REST API Create a settings JSON file. cat iap-oauth.json { "accessSettings": { "oauthSettings": { "clientId": " CLIENT ID ", "clientSecret": " CLIENT SECRET " } } } EOF Replace the following: CLIENT ID : The client ID from the OAuth credentials that you generated earlier.
- Apply the settings file. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/yaml" \ "https://iap.googleapis.com/v1/projects/cb-managed-ingress-demo/iap web/forwarding rule-us-central1/services/psc-fr:iapSettings?update mask=iapSettings.accessSettings.oauthSettings.oauthClientId,iapSettings.accessSettings.oauthSettings.oauthClientSecret" \ -d @iap-oauth.json To test that your web applications are protected by IAP with the OAuth clients, see Test access .

### "Creating a custom sign-in page \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/create-custom-auth-ui](https://docs.cloud.google.com/iap/docs/create-custom-auth-ui)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of implementing processUser() : gcip-iap v1.0.0 processUser ( user ) { return lastAuthUsed . getRedirectResult (). then ( function ( result ) { // Save additional data, or ask the user for additional profile information // to store in database, etc. if ( result ) { // Save result.additionalUserInfo. // Save result.credential.accessToken for OAuth provider, etc. } // Return the user. return user ; }); } gcip-iap v2.0.0 import { getRedirectResult } from 'firebase/auth' ; processUser ( user ) { return getRedirectResult ( lastAuthUsed ). then ( function ( result ) { // Save additional data, or ask the user for additional profile information // to store in database, etc. if ( result ) { // Save result.additionalUserInfo. // Save result.credential.accessToken for OAuth provider, etc. } // Return the user. return user ; }); } If you want any changes to a user reflected in the ID token claims propagated by IAP to your app, you must force the token to refresh: gcip-iap v1.0.0 processUser ( user ) { return user . updateProfile ({ photoURL : 'https://example.com/profile/1234/photo.png' , }). then ( function () { // To reflect updated photoURL in the ID token, force token // refresh. return user . getIdToken ( true ); }). then ( function () { return user ; }); } gcip-iap v2.0.0 import { updateProfile } from 'firebase/auth' ; processUser ( user ) { return updateProfile ( user , { photoURL : 'https://example.com/profile/1234/photo.png' , }). then ( function () { // To reflect updated photoURL in the ID token, force token // refresh. return user . getIdToken ( true ); }). then ( function () { return user ; }); } Testing the UI After you've created a class that implements AuthenticationHandler , you can use it to create a new Authentication instance, and start it: // Implement interface AuthenticationHandler . // const authHandlerImplementation = .... const ciapInstance = new ciap .
- IAP supports the same providers as Identity Platform, such as: Email and password OAuth (Google, Facebook, Twitter, GitHub, Microsoft, etc) SAML OIDC Phone number Custom Anonymous Phone number, custom, and anonymous authentication types are not supported for multi-tenancy.
- OAuthProvider ( 'microsoft.com' ); provider . setCustomParameters ({ login hint : selectedTenantInfo . email undefined , }); } else { // Figure out the provider used... } auth . signInWithPopup ( provider ) . then (( userCredential ) = > { resolve ( userCredential ); }) . catch (( error ) = > { // Show the error message. }); }); } gcip-iap v2.0.0 import { signInWithPopup , OAuthProvider } from 'firebase/auth' ; startSignIn ( auth , selectedTenantInfo ) { // Show the UI to sign in or sign up a user. return new Promise (( resolve , reject ) = > { // Use selectedTenantInfo to determine the provider and pass the login hint // if that provider supports it and the user specified an email address. if ( selectedTenantInfo && selectedTenantInfo . providerIds && selectedTenantInfo . providerIds . indexOf ( 'microsoft.com' ) !== - 1 ) { const provider = new OAuthProvider ( 'microsoft.com' ); provider . setCustomParameters ({ login hint : selectedTenantInfo . email undefined , }); } else { // Figure out the provider used... } signInWithPopup ( auth , provider ) . then (( userCredential ) = > { resolve ( userCredential ); }) . catch (( error ) = > { // Show the error message. }); }); } See Authenticating with multi-tenancy for more information.
- Specified resource is not found. aborted Concurrency conflict, such as read-modify-write conflict. already-exists The resource that a client tried to create already exists. resource-exhausted Either out of resource quota or reaching rate limiting. cancelled Request cancelled by the client. data-loss Unrecoverable data loss or data corruption. unknown Unknown server error. internal Internal server error. not-implemented API method not implemented by the server. unavailable Service unavailable. restart-process Revisit the URL that redirected you to this page to restart the authentication process. deadline-exceeded Request deadline exceeded. authentication-uri-fail Failed to generate authentication URI. gcip-token-invalid Invalid GCIP ID token provided. gcip-redirect-invalid Invalid redirect URL. get-project-mapping-fail Failed to get project ID. gcip-id-token-encryption-error GCIP ID token encryption error. gcip-id-token-decryption-error GCIP ID token decryption error. gcip-id-token-unescape-error Web safe base64 unescape failed. resource-missing-gcip-sign-in-url Missing GCIP authentication URL for the specified IAP resource.

### "Enable IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- Turning on IAP On the Identity-Aware Proxy page, under APPLICATIONS , find the load balancer that serves the instance group you want to restrict access to.
- Setting up IAP access Go to the Identity-Aware Proxy page .
- API Run the following command to prepare a policy.json file. cat << EOF > policy.json { "name": " AUTHZ POLICY NAME ", "target": { "loadBalancingScheme": "INTERNAL MANAGED", "resources": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID " ], }, "action": "CUSTOM", "httpRules": [ { "from": { "sources": { "ipBlocks": [ { "prefix": "10.0.0.0", "length": 24 } ] } } } ], "customProvider": { "cloudIap": {} } } EOF Run the following command to enable IAP on a forwarding rule. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://networksecurity.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /authzPolicies" Replace the following: PROJECT ID : The Google Cloud project ID.

