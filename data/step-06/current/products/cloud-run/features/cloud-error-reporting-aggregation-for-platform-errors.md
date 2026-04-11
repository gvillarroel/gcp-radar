---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.921Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Error Reporting aggregation for platform errors"
feature_slug: "cloud-error-reporting-aggregation-for-platform-errors"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "error"
  - "reporting"
  - "aggregation"
  - "for"
  - "platform"
  - "errors"
  - "captures"
  - "and"
---

# Cloud Error Reporting aggregation for platform errors

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Error Reporting aggregation captures and groups Cloud Run platform errors such as memory limit exceeded and no instances available.

## Extended Definition

Cloud Error Reporting aggregation captures and groups Cloud Run platform errors such as memory limit exceeded and no instances available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The server extracts the Identity Platform uid for that user. """ @wraps ( func ) def decorated function ( args : a , kwargs : a ) - > a : header = request . headers . get ( "Authorization" , None ) if header : token = header . split ( " " )[ 1 ] try : decoded token = firebase admin . auth . verify id token ( token ) except Exception as e : logger . exception ( e ) return Response ( status = 403 , response = f "Error with authentication: { e } " ) else : return Response ( status = 401 ) request . uid = decoded token [ "uid" ] return func ( args , kwargs ) return decorated function Java / Extract and verify Id Token from header / private String authenticateJwt ( Map<String , String > headers ) { String authHeader = ( headers . get ( "authorization" ) != null ) ? headers . get ( "authorization" ) : headers . get ( "Authorization" ); if ( authHeader != null ) { String idToken = authHeader . split ( " " ) [ 1 ] ; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token try { FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken ); String uid = decodedToken . getUid (); return uid ; } catch ( FirebaseAuthException e ) { logger . error ( "Error with authentication: " + e . toString ()); throw new ResponseStatusException ( HttpStatus .
- Node.js const firebase = require ( 'firebase-admin' ); // Initialize Firebase Admin SDK firebase . initializeApp (); // Extract and verify Id Token from header const authenticateJWT = ( req , res , next ) = > { const authHeader = req . headers . authorization ; if ( authHeader ) { const token = authHeader . split ( ' ' )[ 1 ]; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token firebase . auth () . verifyIdToken ( token ) . then ( decodedToken = > { const uid = decodedToken . uid ; req . uid = uid ; next (); }) . catch ( err = > { req . logger . error ( Error with authentication: ${ err } ); return res . sendStatus ( 403 ); }); } else { return res . sendStatus ( 401 ); } }; Python def jwt authenticated ( func : Callable [ ... , int ]) - > Callable [ ... , int ]: """Use the Firebase Admin SDK to parse Authorization header to verify the user ID token.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use available Google Cloud Observability tools to collect more details: Use the Error Reporting console, which provides a dashboard with details and recurrence tracking for errors with a recognized stack trace .
- Errors are grouped by message across revisions, services, and platforms.
- Update components: gcloud components update Follow the instructions to install Docker locally Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Error Reporting Viewer ( roles/errorreporting.viewer ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Objectives Write, build, and deploy a service to Cloud Run Use Error Reporting and Cloud Logging to identify an error Retrieve the container image from Container Registry for a root cause analysis Fix the "production" service, then improve the service to mitigate future problems Caution: Container Registry is deprecated.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- To update the brand setting to external for enabling access for out-of-org principals with IAP, complete the following steps: In the Google Cloud console, go to the Google Auth Platform Audience page: Go to Audience Under User type , click Make external .
- Out-of-org access errors The following are errors you might encounter when configuring access for users outside of your organization.
- For issues with enabling IAP for Cloud Run, see Troubleshooting errors .
- Before you begin Enable the IAP API: Enable the IAP API Required roles To get the permissions that you need to enable IAP, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Grant access to the IAP-enabled service: IAP Policy Admin ( roles/iap.admin ) on the project Create an IAP-enabled service or update an existing service to enable IAP: Artifact Registry Reader ( roles/artifactregistry.reader ) on the deployed container images Service Account User ( roles/iam.serviceAccountUser ) on the service identity Grant access to users not part of a Google organization: IAP Settings Admin ( roles/iap.settingsAdmin ) on the project Grant access to users from outside an organization or not part of an organization: OAuth Config Editor ( roles/oauthconfig.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

