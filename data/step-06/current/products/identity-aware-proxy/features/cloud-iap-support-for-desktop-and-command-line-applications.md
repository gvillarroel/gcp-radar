---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.779Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Cloud IAP support for desktop and command-line applications"
feature_slug: "cloud-iap-support-for-desktop-and-command-line-applications"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/authentication-howto"
  - "https://docs.cloud.google.com/iap/docs/configuring-reauth"
  - "https://docs.cloud.google.com/iap/docs/enabling-app-engine"
  - "https://docs.cloud.google.com/iap/docs/custom-oauth-configuration"
keywords:
  - "iap"
  - "for"
  - "desktop"
  - "and"
  - "command"
  - "line"
  - "applications"
  - "supports"
---

# Cloud IAP support for desktop and command-line applications

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud IAP supports authenticating desktop and command-line applications.

## Extended Definition

Cloud IAP supports authenticating desktop and command-line applications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)

## Supporting Pages

### "Programmatic authentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Example using Netcat (http://netcat.sourceforge.net/) nc -k -l 4444 Go to the following URI, where DESKTOP CLIENT ID is the Desktop app client ID: https://accounts.google.com/o/oauth2/v2/auth?client id= DESKTOP CLIENT ID &response type=code&scope=openid%20email&access type=offline&redirect uri=http://localhost:4444&cred ref=true In the local server output, look for the request parameters: GET /?code= CODE &scope=email%20openid%20https://www.googleapis.com/auth/userinfo.email&hd=google.com&prompt=consent HTTP/1.1 Copy the CODE value to replace CODE in the following command, along with the Desktop app client ID and secret: curl --verbose \ --data client id = DESKTOP CLIENT ID \ --data client secret = DESKTOP CLIENT SECRET \ --data code = CODE \ --data redirect uri = http://localhost:4444 \ --data grant type = authorization code \ https://oauth2.googleapis.com/token This command returns a JSON object with an id token field that you can use to access the application.
- Authenticate with a service account JWT IAP supports service account JWT authentication for Google identities, Identity Platform, and Workforce Identity Federation configured applications.
- Programmatic access refers to calling IAP-secured applications from non-browser clients, such as command-line tools, service-to-service calls, and mobile applications.
- For more information, see Set up authentication for a local development environment . gcloud Run the following command to prepare a request with the JWT payload: cat > claim.json << EOM { "iss" : " SERVICE ACCOUNT EMAIL ADDRESS " , "sub" : " SERVICE ACCOUNT EMAIL ADDRESS " , "aud" : " TARGET URL " , "iat" : $( date +%s ) , "exp" : $(( date +%s + 3600 )) } EOM Use the following Google Cloud CLI command to sign the payload in claim.json : gcloud iam service-accounts sign-jwt --iam-account = " SERVICE ACCOUNT EMAIL ADDRESS " claim.json output.jwt After a successful request, output.jwt contains a signed JWT that you can use to access your IAP-secured resource.

### IAP reauthentication \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/configuring-reauth](https://docs.cloud.google.com/iap/docs/configuring-reauth)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, mobile and desktop applications cannot reauthenticate users because the resources that require reauthentication are inaccessible to these applications.
- IAP reauthentication (or, reauth) is designed to enforce reauthentication policies for IAP-protected services and applications (or, apps).
- Run the following command: gcloud iap settings set SETTING FILE [--organization= ORGANIZATION --folder= FOLDER --project=/ PROJECT --resource-type= RESOURCE TYPE --service= SERVICE --version= VERSION To set a reauthentication policy on the resources within an organization, run the following command: gcloud iap settings set SETTING FILE --organization= ORGANIZATION To set a reauthentication policy on the resources within a folder, run the following command: gcloud iap settings set SETTING FILE --folder= FOLDER To set a reauthentication policy on all web type resources within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=iap web To set a reauthentication policy on an App Engine service within a project, run the following command: gcloud iap settings set SETTING FILE --project= PROJECT --resource-type=app-engine --service= SERVICE Where SETTING FILE is: accessSettings : reauthSettings : method : "LOGIN" maxAge : "3600s" policyType : "MINIMUM" Replace the following: FOLDER : The folder ID.
- IAP reauthentication lets service and application owners or Google Cloud administrators require authenticated end users to reauthenticate after a specified time when accessing an IAP-protected service or application and limit how long a user can access a IAP-protected service or application before authentication is required.

### "Enabling IAP for App Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to specify the project that contains the applications that you want to protect with IAP. gcloud config set project PROJECT ID To enable IAP, run the following command. gcloud iap web enable --resource-type=app-engine --versions= version Add principals who should have the IAP-secured Web App user role to the project. gcloud projects add-iam-policy-binding PROJECT ID \ --member= PRINCIPAL IDENTIFIER \ --role=roles/iap.httpsResourceAccessor Replace PROJECT ID with your project ID.
- API Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled":true } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://appengine.googleapis.com/v1/apps/ PROJECT ID ?updateMask=iap" After you enable IAP, you can use the Google Cloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .
- Only principals with the IAP-Secured Web App User ( roles/iap.httpsResourceAccessor ) role on the project will be given access. gcloud Before you set up your project and IAP, you need an up-to-date version of the gcloud CLI.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enabling IAP for App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to specify the project that contains the resource that you want to protect with IAP. gcloud config set project PROJECT ID Follow the instructions in Creating OAuth clients for IAP. to configure the OAuth consent screen and create the OAuth client.
- Run the following command to specify the project that contains the resource that you want to protect with IAP. gcloud config set project PROJECT ID Follow the instructions in Creating OAuth clients for IAP to configure the OAuth consent screen and create the OAuth client.
- Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled": true, "oauth2ClientId": " CLIENT ID ", "oauth2ClientSecret": " CLIENT SECRET " } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID / REGION /backendServices/ BACKEND SERVICE NAME " After you enable IAP, you can use the gcloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .
- Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled": true, "oauth2ClientId": " CLIENT ID ", "oauth2ClientSecret":" CLIENT SECRET " } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://appengine.googleapis.com/v1/apps/ PROJECT ID ?updateMask=iap" After you enable IAP, you can use the Google Cloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .

