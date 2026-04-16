---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.525Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Error Reporting aggregation for platform errors"
feature_slug: "cloud-error-reporting-aggregation-for-platform-errors"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
keywords:
  - "aggregation"
  - "reporting"
  - "platform"
  - "errors"
  - "groups"
  - "error"
  - "captures"
---

# Cloud Error Reporting aggregation for platform errors

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Error Reporting aggregation captures and groups Cloud Run platform errors such as memory limit exceeded and no instances available.

## Extended Definition

Cloud Error Reporting aggregation captures and groups Cloud Run platform errors such as memory limit exceeded and no instances available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Supporting Pages

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use available Google Cloud Observability tools to collect more details: Use the Error Reporting console, which provides a dashboard with details and recurrence tracking for errors with a recognized stack trace .
- Verify that no unexpected messages or errors appear in Cloud Logging or Error Reporting.
- Errors are grouped by message across revisions, services, and platforms.
- Go to Error Reporting console List of recorded errors.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Out-of-org access errors The following are errors you might encounter when configuring access for users outside of your organization.
- For issues with enabling IAP for Cloud Run, see Troubleshooting errors .
- To save the user configuration, click Save . gcloud To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.
- To add or remove access to a Cloud Run service for individual users or groups, run one of the following commands: To add access: gcloud iap web add-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To remove access: gcloud iap web remove-iam-policy-binding \ --member = user: USER EMAIL \ --role = roles/iap.httpsResourceAccessor \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME To view access: gcloud iap web get-iam-policy \ --region = REGION \ --resource-type = cloud-run \ --service = SERVICE NAME Replace the following: USER EMAIL : the user's email address.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The server extracts the Identity Platform uid for that user. """ @wraps ( func ) def decorated function ( args : a , kwargs : a ) - > a : header = request . headers . get ( "Authorization" , None ) if header : token = header . split ( " " )[ 1 ] try : decoded token = firebase admin . auth . verify id token ( token ) except Exception as e : logger . exception ( e ) return Response ( status = 403 , response = f "Error with authentication: { e } " ) else : return Response ( status = 401 ) request . uid = decoded token [ "uid" ] return func ( args , kwargs ) return decorated function Java / Extract and verify Id Token from header / private String authenticateJwt ( Map<String , String > headers ) { String authHeader = ( headers . get ( "authorization" ) != null ) ? headers . get ( "authorization" ) : headers . get ( "Authorization" ); if ( authHeader != null ) { String idToken = authHeader . split ( " " ) [ 1 ] ; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token try { FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken ); String uid = decodedToken . getUid (); return uid ; } catch ( FirebaseAuthException e ) { logger . error ( "Error with authentication: " + e . toString ()); throw new ResponseStatusException ( HttpStatus .
- For an implementation example, refer to Stackdriver Error Reporting library .
- Node.js const firebase = require ( 'firebase-admin' ); // Initialize Firebase Admin SDK firebase . initializeApp (); // Extract and verify Id Token from header const authenticateJWT = ( req , res , next ) = > { const authHeader = req . headers . authorization ; if ( authHeader ) { const token = authHeader . split ( ' ' )[ 1 ]; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token firebase . auth () . verifyIdToken ( token ) . then ( decodedToken = > { const uid = decodedToken . uid ; req . uid = uid ; next (); }) . catch ( err = > { req . logger . error ( Error with authentication: ${ err } ); return res . sendStatus ( 403 ); }); } else { return res . sendStatus ( 401 ); } }; Python def jwt authenticated ( func : Callable [ ... , int ]) - > Callable [ ... , int ]: """Use the Firebase Admin SDK to parse Authorization header to verify the user ID token.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

