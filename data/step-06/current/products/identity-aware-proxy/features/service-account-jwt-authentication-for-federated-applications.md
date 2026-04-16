---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.773Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Service account JWT authentication for federated applications"
feature_slug: "service-account-jwt-authentication-for-federated-applications"
latest_feature_date: "2025-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts"
  - "https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities"
  - "https://docs.cloud.google.com/iap/docs/configuring-reauth"
keywords:
  - "account"
  - "jwt"
  - "authentication"
  - "for"
  - "federated"
  - "applications"
  - "configured"
  - "with"
---

# Service account JWT authentication for federated applications

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Applications configured with Identity Platform or Workforce Identity Federation can accept service account JWT authentication.

## Extended Definition

Applications configured with Identity Platform or Workforce Identity Federation can accept service account JWT authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts](https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts)
- [https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities](https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities)
- [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)

## Supporting Pages

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Authenticate with a service account JWT IAP supports service account JWT authentication for Google identities, Identity Platform, and Workforce Identity Federation configured applications.
- For more information, see Set up authentication for a local development environment . gcloud Run the following command to prepare a request with the JWT payload: cat > claim.json << EOM { "iss" : " SERVICE ACCOUNT EMAIL ADDRESS " , "sub" : " SERVICE ACCOUNT EMAIL ADDRESS " , "aud" : " TARGET URL " , "iat" : $( date +%s ) , "exp" : $(( date +%s + 3600 )) } EOM Use the following Google Cloud CLI command to sign the payload in claim.json : gcloud iam service-accounts sign-jwt --iam-account = " SERVICE ACCOUNT EMAIL ADDRESS " claim.json output.jwt After a successful request, output.jwt contains a signed JWT that you can use to access your IAP-secured resource.
- The following Bash script demonstrates this process: Bash #!/usr/bin/env bash Example script that generates an OIDC token using a service account key file and uses it to access an IAP-secured resource. set -euo pipefail get token () { Get the bearer token in exchange for the service account credentials local service account key file path = " ${ 1 } " local iap client id = " ${ 2 } " Define the scope and token endpoint local iam scope = "https://www.googleapis.com/auth/iam" local oauth token uri = "https://www.googleapis.com/oauth2/v4/token" Extract data from service account key file local private key id = " $( cat " ${ service account key file path } " jq -r '.private key id' ) " local client email = " $( cat " ${ service account key file path } " jq -r '.client email' ) " local private key = " $( cat " ${ service account key file path } " jq -r '.private key' ) " Set token timestamps (current time and expiration 10 minutes later) local issued at = " $( date +%s ) " local expires at = " $(( issued at + 600 )) " Create JWT header and payload local header = "{'alg':'RS256','typ':'JWT','kid':' ${ private key id } '}" local header base64 = " $( echo " ${ header } " base64 tr -d '\n' ) " local payload = "{'iss':' ${ client email } ','aud':' ${ oauth token uri } ','exp': ${ expires at } ,'iat': ${ issued at } ,'sub':' ${ client email } ','target audience':' ${ iap client id } '}" local payload base64 = " $( echo " ${ payload } " base64 tr -d '\n' ) " Create JWT signature using the private key local signature base64 = " $( printf %s " ${ header base64 } . ${ payload base64 } " openssl dgst -binary -sha256 -sign < ( printf '%s\n' " ${ private key } " ) base64 tr -d '\n')" local assertion = " ${ header base64 } . ${ payload base64 } . ${ signature base64 } " Exchange the signed JWT assertion for an ID token local token payload = " $( curl -s \ --data-urlencode "grant type=urn:ietf:params:oauth:grant-type:jwt-bearer" \ --data-urlencode "assertion= ${ assertion } " \ https://www.googleapis.com/oauth2/v4/token ) " Extract just the ID token from the response local bearer id token = " $( echo " ${ token payload } " jq -r '.id token' ) " echo " ${ bearer id token } " } main () { Check if required arguments are provided if [[ $# -lt 3 ]] ; then echo "Usage: $0 <service account key file.json> <iap client id> <url>" exit 1 fi Assign parameters to variables SERVICE ACCOUNT KEY = " $1 " IAP CLIENT ID = " $2 " URL = " $3 " Generate the ID token echo "Generating token..." ID TOKEN = $( get token " ${ SERVICE ACCOUNT KEY } " " ${ IAP CLIENT ID } " ) Access the IAP-secured resource with the token echo "Accessing: ${ URL } " curl --header "Authorization: Bearer ${ ID TOKEN } " " ${ URL } " } Run the main function with all provided arguments main " $@ " This script performs the following steps: Extracts the service account key information from your JSON key file Creates a JWT with the necessary fields, including the IAP client ID as the target audience Signs the JWT using the service account's private key Exchanges this JWT for an OIDC token through Google's OAuth service Uses the resulting token to make an authenticated request to your IAP-secured resource To use this script: Save it to a file, for example: get iap token.sh Make it executable: chmod +x get iap token.sh Run it with three parameters: ./get iap token.sh service-account-key.json \ OAUTH CLIENT ID \ URL Where: service-account-key.json is your downloaded service account key file OAUTH CLIENT ID is the OAuth client ID for your IAP-secured resource URL is the URL you want to access Obtain an OIDC token by using service account impersonation In all other cases, use the IAM credentials API to generate an OIDC token by impersonating a target service account right before accessing an IAP-secured resource.
- For more information, see Set up authentication for a local development environment . url = "The Identity-Aware Proxy-protected URL to fetch" client id = "The client ID used by Identity-Aware Proxy" require "googleauth" require "faraday" The client ID as the target audience for IAP id token creds = Google :: Auth :: Credentials . default target audience : client id headers = {} id token creds . client . apply! headers resp = Faraday . get url , nil , headers if resp . status == 200 puts "X-Goog-Iap-Jwt-Assertion:" puts resp . body else puts "Error requesting IAP" puts resp . status puts resp . headers end Obtain an OIDC token from a local service account key file To generate an OIDC token using a service account key file, create and sign a JWT assertion using the key file and then exchange that assertion for an ID token.

### "Quickstart: Authenticate users with Google Accounts \_|\_ Identity-Aware\

- URL: [https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts](https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to specify the project that contains the applications that you want to protect with IAP. gcloud config set project PROJECT ID To enable IAP, run the following command. gcloud iap web enable --resource-type=app-engine --versions= version Add principals who should have the IAP-secured Web App user role to the project. gcloud projects add-iam-policy-binding PROJECT ID \ --member= PRINCIPAL IDENTIFIER \ --role=roles/iap.httpsResourceAccessor Replace PROJECT ID with your project ID.
- Only principals with the IAP-Secured Web App User ( roles/iap.httpsResourceAccessor ) role on the project will be given access. gcloud Before you set up your project and IAP, you need an up-to-date version of the gcloud CLI.
- Required roles To get the permissions that you need to authenticate users with Google Accounts, ask your administrator to grant you the IAP Policy Admin ( roles/iap.policyAdmin ) IAM role on your project.
- Authenticate users with Google Accounts This page walks you through deploying an App Engine standard or flexible environment application and securing it with Identity-Aware Proxy (IAP) .

### "Quickstart: Authenticate users with external identities \_|\_ Identity-Aware\

- URL: [https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities](https://docs.cloud.google.com/iap/docs/authenticate-users-external-identities)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test user authentication To test that IAP is protecting your app and authenticating users with Facebook: Go to the client App Engine app in your browser: https:// project-id .appspot.com After a brief loading screen, you are redirected to the Identity Platform sign-in page.
- By combining IAP and Identity Platform , you can authenticate users with a wide range of identity providers, such as OAuth , SAML , and OIDC , in addition to Google Accounts.
- If the user signs in successfully, the authentication app responds with a JSON Web Token (JWT).
- First, download the code, and deploy the client app: Download the sample code: git clone https://github.com/GoogleCloudPlatform/iap-gcip-web-toolkit.git Change to the client app directory: cd iap - gcip - web - toolkit / sample / app Install dependencies: npm install Deploy the client app to App Engine: npm run deploy The client app launches at the URL: https://[PROJECT-ID].appspot.com Next, deploy the authentication app: Change to the directory for the authentication app: cd ../authui-firebaseui Install dependencies: npm install export NODE OPTIONS =-- openssl - legacy - provider Configure the authentication app to use Firebase Hosting.

### IAP reauthentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, mobile and desktop applications cannot reauthenticate users because the resources that require reauthentication are inaccessible to these applications.
- To prevent frequent reauthentication for applications on the same domain, the cookie is set on the top-level private domain and is valid for that entire domain.
- IAP reauthentication (or, reauth) is designed to enforce reauthentication policies for IAP-protected services and applications (or, apps).
- Using this service, you can enforce reauthentication policies for critical services and applications that handle confidential information.

