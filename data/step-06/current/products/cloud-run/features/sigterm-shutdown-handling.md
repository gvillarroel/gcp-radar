---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.605Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "SIGTERM shutdown handling"
feature_slug: "sigterm-shutdown-handling"
latest_feature_date: "2020-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
keywords:
  - "shutdown"
  - "handling"
  - "shutting"
  - "sigterm"
  - "sends"
  - "down"
  - "before"
---

# SIGTERM shutdown handling

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled.

## Extended Definition

Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance, indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance.
- This signal indicates the start of a 10-second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a task exceeds the task timeout , Cloud Run sends a 'SIGTERM' signal indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal, shutting down the container instance.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance, indicating the start of a 10 second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.
- Before shutting down an instance, Cloud Run sends a SIGTERM signal to all the containers in an instance.
- This signal indicates the start of a 10-second period before the actual shutdown occurs, at which point Cloud Run sends a SIGKILL signal.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node.js const firebase = require ( 'firebase-admin' ); // Initialize Firebase Admin SDK firebase . initializeApp (); // Extract and verify Id Token from header const authenticateJWT = ( req , res , next ) = > { const authHeader = req . headers . authorization ; if ( authHeader ) { const token = authHeader . split ( ' ' )[ 1 ]; // If the provided ID token has the correct format, is not expired, and is // properly signed, the method returns the decoded ID token firebase . auth () . verifyIdToken ( token ) . then ( decodedToken = > { const uid = decodedToken . uid ; req . uid = uid ; next (); }) . catch ( err = > { req . logger . error ( Error with authentication: ${ err } ); return res . sendStatus ( 403 ); }); } else { return res . sendStatus ( 401 ); } }; Python def jwt authenticated ( func : Callable [ ... , int ]) - > Callable [ ... , int ]: """Use the Firebase Admin SDK to parse Authorization header to verify the user ID token.
- Uncomment and add env vars for local development spring . datasource . username = $ { DB USER } spring . datasource . password = $ { DB PASSWORD } spring . cloud . gcp . sql . database - name = $ { DB NAME } spring . cloud . gcp . sql . instance - connection - name = $ { CLOUD SQL CONNECTION NAME } private final JdbcTemplate jdbcTemplate ; public VoteController ( JdbcTemplate jdbcTemplate ) { this . jdbcTemplate = jdbcTemplate ; } Handling sensitive configuration with Secret Manager Secret Manager provides centralized and secure storage of sensitive data such as Cloud SQL configuration.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- OK Retrieving the code sample To retrieve the code sample for use: Clone the sample app repository to your local machine: Node.js git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git Alternatively, you can download the sample as a zip file and extract it.

