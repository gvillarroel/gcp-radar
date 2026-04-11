---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.897Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Flexible committed use discounts for request-based billing and functions"
feature_slug: "flexible-committed-use-discounts-for-request-based-billing-and-functions"
latest_feature_date: "2025-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
keywords:
  - "flexible"
  - "committed"
  - "use"
  - "discounts"
  - "for"
  - "request"
  - "based"
  - "billing"
---

# Flexible committed use discounts for request-based billing and functions

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Flexible committed use discounts cover Cloud Billing spend for Cloud Run services with request-based billing and Cloud Run functions.

## Extended Definition

Flexible committed use discounts cover Cloud Billing spend for Cloud Run services with request-based billing and Cloud Run functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Feature Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.
- February 06, 2026 Feature Expanded coverage for compute flexible committed use discounts (CUDs) is available to all Cloud Billing accounts.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- July 15, 2024 Feature Compute flexible committed use discounts are now available for Cloud Run services with CPU always allocated , and Cloud Run jobs.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The server extracts the Identity Platform uid for that user. """ @wraps ( func ) def decorated function ( args : a , kwargs : a ) - > a : header = request . headers . get ( "Authorization" , None ) if header : token = header . split ( " " )[ 1 ] try : decoded token = firebase admin . auth . verify id token ( token ) except Exception as e : logger . exception ( e ) return Response ( status = 403 , response = f "Error with authentication: { e } " ) else : return Response ( status = 401 ) request . uid = decoded token [ "uid" ] return func ( args , kwargs ) return decorated function Java / Extract and verify Id Token from header / private String authenticateJwt ( Map<String , String > headers ) { String authHeader = ( headers . get ( "authorization" ) != null ) ? headers . get ( "authorization" ) : headers . get ( "Authorization" ); if ( authHeader != null ) { String idToken = authHeader . split ( " " ) [ 1 ] ; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token try { FirebaseToken decodedToken = FirebaseAuth . getInstance (). verifyIdToken ( idToken ); String uid = decodedToken . getUid (); return uid ; } catch ( FirebaseAuthException e ) { logger . error ( "Error with authentication: " + e . toString ()); throw new ResponseStatusException ( HttpStatus .
- The client adds the ID token to the Authorization header of its request to the server. async function vote ( team ) { if ( firebase . auth (). currentUser ) { // Retrieve JWT to identify the user to the Identity Platform service. // Returns the current token if it has not expired.
- Costs In this document, you use the following billable components of Google Cloud: Cloud Build Artifact Registry Secret Manager Cloud SQL Identity Platform Cloud Run To generate a cost estimate based on your projected usage, use the pricing calculator .
- Home Documentation Application hosting Cloud Run Guides Send feedback End user authentication for Cloud Run tutorial Stay organized with collections Save and categorize content based on your preferences.

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Refer to pricing for more information, and refer to Billing settings to learn how to enable request-based or instance-based billing for your service.
- Scale to zero and minimum instances By default, if billing is set to instance-based billing , Cloud Run adds and removes instances automatically to handle all incoming requests or to handle increased CPU utilization outside requests.
- If you're using Go, Node.js, Python, Java, .NET, Ruby, or a supported framework you can use the source-based deployment option that builds the container for you, using the best practices for the language you're using.
- Fast request-based auto scaling Cloud Run rapidly scales out to handle all incoming requests or to handle increased CPU utilization outside requests if the billing setting is set to instance-based billing .

