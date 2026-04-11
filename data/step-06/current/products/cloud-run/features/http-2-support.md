---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.923Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "HTTP/2 support"
feature_slug: "http-2-support"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/triggering/https-request"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
keywords:
  - "http"
  - "run"
  - "supports"
  - "for"
  - "communication"
---

# HTTP/2 support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports HTTP/2 for service communication.

## Extended Definition

Cloud Run supports HTTP/2 for service communication.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Supporting Pages

### Invoke with an HTTPS Request \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Some of the use cases include the following: Custom RESTful web API Private microservice HTTP middleware or reverse proxy for your web applications Pre-packaged web application Create public services Creating a public service on Cloud Run requires the following: Access to the service from the public internet A URL intended for public use To make a service public, set your service to allow unauthenticated (public) access .
- The non-deterministic URL for a Cloud Run service has the format https://[ TAG ---] SERVICE IDENTIFIER .run.app , where TAG refers to the optional traffic tag for the revision that you are requesting, and SERVICE IDENTIFIER is a stable and unique identifier for a Cloud Run service.
- All Cloud Run services have a stable HTTPS URL, which represents the default HTTPS endpoint for the service, though you can configure custom domains as well.
- HTTP to HTTPS redirect Cloud Run redirects all HTTP requests to HTTPS but terminates TLS before they reach your web service.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To save the user configuration, click Save . gcloud To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.
- To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.
- To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.
- Add the following to a google iap web cloud run service iam binding resource in your Terraform configuration. resource "google iap web cloud run service iam binding" "binding" { project = " PROJECT ID " location = " REGION " cloud run service name = " SERVICE NAME " role = "roles/iap.httpsResourceAccessor" members = [ " PRINCIPAL A ", " PRINCIPAL B " ] } Replace the following: PROJECT ID : the name of the project.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The server extracts the Identity Platform uid for that user. """ @wraps ( func ) def decorated function ( args : a , kwargs : a ) - > a : header = request . headers . get ( "Authorization" , None ) if header : token = header . split ( " " )[ 1 ] try : decoded token = firebase admin . auth . verify id token ( token ) except Exception as e : logger . exception ( e ) return Response ( status = 403 , response = f "Error with authentication: { e } " ) else : return Response ( status = 401 ) request . uid = decoded token [ "uid" ] return func ( args , kwargs ) return decorated function Java / Extract and verify Id Token from header / private String authenticateJwt ( Map<String , String > headers ) { String authHeader = ( headers . get ( "authorization" ) != null ) ? headers . get ( "authorization" ) : headers . get ( "Authorization" ); if ( authHeader != null ) { String idToken = authHeader . split ( " " ) [ 1 ] ; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token try { FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken ); String uid = decodedToken . getUid (); return uid ; } catch ( FirebaseAuthException e ) { logger . error ( "Error with authentication: " + e . toString ()); throw new ResponseStatusException ( HttpStatus .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To connect to Identity Platform, the client-side JavaScript holds the reference to the project's credentials as a config object and imports the necessary Firebase JavaScript SDKs : const config = { apiKey : 'API KEY' , authDomain : 'PROJECT ID.firebaseapp.com' , }; < !-- Firebase App ( the core Firebase SDK ) is always required and must be listed first -- > < script src = "https://www.gstatic.com/firebasejs/7.18/firebase-app.js" >< / script > < !-- Add Firebase Auth service -- > < script src = "https://www.gstatic.com/firebasejs/7.18/firebase-auth.js" >< / script > The Firebase JavaScript SDK handles the sign-in flow by prompting the end-user to sign-in to their Google Account via a popup window.

