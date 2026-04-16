---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.774Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Programmatic access to IAP-protected resources with service account JWTs"
feature_slug: "programmatic-access-to-iap-protected-resources-with-service-account-jwts"
latest_feature_date: "2024-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/custom-oauth-configuration"
  - "https://docs.cloud.google.com/iap/docs/access-external-resources"
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
keywords:
  - "programmatic"
  - "access"
  - "to"
  - "iap"
  - "protected"
  - "resources"
  - "with"
  - "account"
---

# Programmatic access to IAP-protected resources with service account JWTs

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Service accounts can use JWTs to programmatically access Identity-Aware Proxy-protected applications and services.

## Extended Definition

Service accounts can use JWTs to programmatically access Identity-Aware Proxy-protected applications and services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources)
- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)

## Supporting Pages

### "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply the settings file. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/yaml" \ "https://iap.googleapis.com/v1/projects/cb-managed-ingress-demo/iap web/forwarding rule-us-central1/services/psc-fr:iapSettings?update mask=iapSettings.accessSettings.oauthSettings.oauthClientId,iapSettings.accessSettings.oauthSettings.oauthClientSecret" \ -d @iap-oauth.json To test that your web applications are protected by IAP with the OAuth clients, see Test access .
- However, IAP-protected applications that use the Google-managed OAuth client can still be accessed programmatically using a separate OAuth client configured through the programmatic clients setting or a service account JWT .
- Compare Google-managed OAuth clients and custom OAuth clients Google-managed OAuth clients cannot programmatically access IAP-protected applications.
- Terraform To apply the custom OAuth client using Terraform, do the following: resource "google iap settings" "iap settings" { name = IAP RESOURCE NAME access settings { oauth settings { oauth client id = CLIENT ID oauth client secret = CLIENT SECRET } } } Replace the following: IAP RESOURCE NAME : the resource name of the iap settings resource for the service, which has the following format: projects/ PROJECT NUMBER /iap web/ REGION /services/ SERVICE NAME CLIENT ID : the client ID from the OAuth credentials that you generated earlier CLIENT SECRET : the client secret from the OAuth credentials that you generated earlier REST API Create a settings JSON file. cat iap-oauth.json { "accessSettings": { "oauthSettings": { "clientId": " CLIENT ID ", "clientSecret": " CLIENT SECRET " } } } EOF Replace the following: CLIENT ID : The client ID from the OAuth credentials that you generated earlier.

### "Accessing non-Google resources programmatically \_|\_ Identity-Aware Proxy\

- URL: [https://docs.cloud.google.com/iap/docs/access-external-resources](https://docs.cloud.google.com/iap/docs/access-external-resources)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Accessing resources To access a resource programmatically using a service account JWT, see Authenticating with a service account JWT .
- ID token can now be retrieved. }) . catch (( error ) = > { // Handler error. }); You can then retrieve an ID token on the user object: user . getIdToken () . then (( idToken ) = > { // idToken is now available and can be sent to API server. }) . catch (( error ) = > { // Handler error. }); REST Calling signInWithPassword returns an ID token in the response: curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= API-KEY ' \ -H 'Content-Type: application/json' \ --data-binary '{ "email":" EMAIL ", "password":" PASSWORD ", "returnSecureToken":true, "tenantId":" TENANT-ID " # Only used in multi-tenancy }' Include the ID token in the authorization header when calling an endpoint protected by IAP. curl -H "Authorization: Bearer GCIP-ID-TOKEN " "https://example.appspot.com/api" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This article shows you how to programmatically access a resource protected by Identity-Aware Proxy (IAP) using external identities.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Accessing non-Google resources programmatically Stay organized with collections Save and categorize content based on your preferences.

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAP supports the following types of credentials for programmatic access: OAuth 2.0 ID token - A Google-issued token for a human user or service account with the audience claim set to the resource ID of the IAP application.
- The following Bash script demonstrates this process: Bash #!/usr/bin/env bash Example script that generates an OIDC token using a service account key file and uses it to access an IAP-secured resource. set -euo pipefail get token () { Get the bearer token in exchange for the service account credentials local service account key file path = " ${ 1 } " local iap client id = " ${ 2 } " Define the scope and token endpoint local iam scope = "https://www.googleapis.com/auth/iam" local oauth token uri = "https://www.googleapis.com/oauth2/v4/token" Extract data from service account key file local private key id = " $( cat " ${ service account key file path } " jq -r '.private key id' ) " local client email = " $( cat " ${ service account key file path } " jq -r '.client email' ) " local private key = " $( cat " ${ service account key file path } " jq -r '.private key' ) " Set token timestamps (current time and expiration 10 minutes later) local issued at = " $( date +%s ) " local expires at = " $(( issued at + 600 )) " Create JWT header and payload local header = "{'alg':'RS256','typ':'JWT','kid':' ${ private key id } '}" local header base64 = " $( echo " ${ header } " base64 tr -d '\n' ) " local payload = "{'iss':' ${ client email } ','aud':' ${ oauth token uri } ','exp': ${ expires at } ,'iat': ${ issued at } ,'sub':' ${ client email } ','target audience':' ${ iap client id } '}" local payload base64 = " $( echo " ${ payload } " base64 tr -d '\n' ) " Create JWT signature using the private key local signature base64 = " $( printf %s " ${ header base64 } . ${ payload base64 } " openssl dgst -binary -sha256 -sign < ( printf '%s\n' " ${ private key } " ) base64 tr -d '\n')" local assertion = " ${ header base64 } . ${ payload base64 } . ${ signature base64 } " Exchange the signed JWT assertion for an ID token local token payload = " $( curl -s \ --data-urlencode "grant type=urn:ietf:params:oauth:grant-type:jwt-bearer" \ --data-urlencode "assertion= ${ assertion } " \ https://www.googleapis.com/oauth2/v4/token ) " Extract just the ID token from the response local bearer id token = " $( echo " ${ token payload } " jq -r '.id token' ) " echo " ${ bearer id token } " } main () { Check if required arguments are provided if [[ $# -lt 3 ]] ; then echo "Usage: $0 <service account key file.json> <iap client id> <url>" exit 1 fi Assign parameters to variables SERVICE ACCOUNT KEY = " $1 " IAP CLIENT ID = " $2 " URL = " $3 " Generate the ID token echo "Generating token..." ID TOKEN = $( get token " ${ SERVICE ACCOUNT KEY } " " ${ IAP CLIENT ID } " ) Access the IAP-secured resource with the token echo "Accessing: ${ URL } " curl --header "Authorization: Bearer ${ ID TOKEN } " " ${ URL } " } Run the main function with all provided arguments main " $@ " This script performs the following steps: Extracts the service account key information from your JSON key file Creates a JWT with the necessary fields, including the IAP client ID as the target audience Signs the JWT using the service account's private key Exchanges this JWT for an OIDC token through Google's OAuth service Uses the resulting token to make an authenticated request to your IAP-secured resource To use this script: Save it to a file, for example: get iap token.sh Make it executable: chmod +x get iap token.sh Run it with three parameters: ./get iap token.sh service-account-key.json \ OAUTH CLIENT ID \ URL Where: service-account-key.json is your downloaded service account key file OAUTH CLIENT ID is the OAuth client ID for your IAP-secured resource URL is the URL you want to access Obtain an OIDC token by using service account impersonation In all other cases, use the IAM credentials API to generate an OIDC token by impersonating a target service account right before accessing an IAP-secured resource.
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( open id connect token )}, kwargs ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text Ruby To authenticate to IAP, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . gcloud Run the following command to prepare a request with the JWT payload: cat > claim.json << EOM { "iss" : " SERVICE ACCOUNT EMAIL ADDRESS " , "sub" : " SERVICE ACCOUNT EMAIL ADDRESS " , "aud" : " TARGET URL " , "iat" : $( date +%s ) , "exp" : $(( date +%s + 3600 )) } EOM Use the following Google Cloud CLI command to sign the payload in claim.json : gcloud iam service-accounts sign-jwt --iam-account = " SERVICE ACCOUNT EMAIL ADDRESS " claim.json output.jwt After a successful request, output.jwt contains a signed JWT that you can use to access your IAP-secured resource.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Manage access to IAP-secured resources Stay organized with collections Save and categorize content based on your preferences.
- The following is an example of an IAM deny policy to deny access to the getSettings API to a principal at an organization and its descendants. { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/iap.organizations.getSettings" , "iap.googleapis.com/iap.folders.getSettings" , "iap.googleapis.com/iap.projects.getSettings" , "iap.googleapis.com/iap.web.getSettings" , "iap.googleapis.com/iap.webTypes.getSettings" , "iap.googleapis.com/iap.webServices.getSettings" , "iap.googleapis.com/iap.webServicesVersions.getSettings" , ], } } ] } Instead of specifying all granular permissions, the following is an example of the IAM deny policy with only one permission: .getSettings . { "name" : "policies/cloudresourcemanager.googleapis.com%2Forganizations%2F253519172624/denypolicies/testpolicyid" , "uid" : "06ccd2eb-d2a5-5dd1-a746-eaf4c6g3f816" , "kind" : "DenyPolicy" , "displayName" : "Only project admins can delete projects." , "etag" : "MTc1MTkzMjY0MjUyMTExODMxMDQ=" , "createTime" : "2021-09-07T23:15:35.258319Z" , "updateTime" : "2021-09-07T23:15:35.258319Z" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "iap.googleapis.com/ .getSettings" , ], } } ] } The following are some simpler ways to create an IAM deny policy without having to specify all of the granular permissions.
- IAP Policy Admin ( roles/iap.admin ) iap.web.getIamPolicy iap.web.setIamPolicy iap.webTypes.getIamPolicy iap.webTypes.setIamPolicy iap.webServices.getIamPolicy iap.webServices.setIamPolicy iap.webServiceVersions.getIamPolicy iap.webServiceVersions.setIamPolicy iap.tunnel.getIamPolicy iap.tunnel.setIamPolicy iap.tunnelZones.getIamPolicy iap.tunnelZones.setIamPolicy iap.tunnelInstances.getIamPolicy iap.tunnelInstances.setIamPolicy Grants IAP administrative rights to manage IAP access policies of resources.
- Public access To give everyone access to a resource, grant a role to one of the following principals: allAuthenticatedUsers : Anyone who is authenticated with a Google account or a service account. allUsers : Anyone who is on the internet, including authenticated and unauthenticated users.

