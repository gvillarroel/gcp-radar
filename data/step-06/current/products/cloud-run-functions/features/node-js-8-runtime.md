---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.157Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Node.js 8 runtime"
feature_slug: "node-js-8-runtime"
latest_feature_date: "2018-07-24"
deprecation_date: "2020-06-05"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/securing/execution-environment-security"
keywords:
  - "node"
  - "js"
  - "runtime"
  - "lets"
  - "functions"
  - "run"
  - "deprecated"
  - "2020"
---

# Node.js 8 runtime

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

The Node.js 8 runtime lets functions run on Node.js 8; The Node.js 8 runtime lets functions run on Node.js 8; deprecated on 2020-06-05.

## Extended Definition

The Node.js 8 runtime lets functions run on Node.js 8; The Node.js 8 runtime lets functions run on Node.js 8; deprecated on 2020-06-05.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Example import logging import traceback def try catch log(wrapped func): def wrapper( args, kwargs): try: response = wrapped func( args, kwargs) except Exception: Replace new lines with spaces so as to prevent several entries which would trigger several errors. error message = traceback.format exc().replace('\n', ' ') logging.error(error message) return 'Error'; return response; return wrapper; #Example hello world function @try catch log def python hello world(request): request args = request.args if request args and 'name' in request args: 1 + 's' return 'Hello World!' Logs too large in Node.js 10+, Python 3.8, Go 1.13, and Java 11 The maximum size for a regular log entry in these runtimes is 105 KiB.
- The solution If your function terminates early, you should make sure all your function's asynchronous tasks are complete before your function performs any of the following actions: Returning a value Resolving or rejecting a returned Promise object (Node.js functions only) Throwing uncaught exceptions or errors Sending an HTTP response Calling a callback function If your function fails to terminate after completing asynchronous tasks, you should verify that your function is correctly signaling Cloud Run functions after it has completed.
- The error message gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[404], code=[Ok], message=[Service account projects/-/serviceAccounts/ PROJECT NUMBER -compute@developer.gserviceaccount.com was not found.] The solution To resolve this issue, follow any of these solutions: Specify a user managed runtime service account before deploying your function.
- In environments where multiple functions are accessing different resources, it's a common practice to use per-function identities with named runtime service accounts rather than the default runtime service account ( PROJECT NUMBER -compute@developer.gserviceaccount.com ).

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Configure Direct VPC egress for 2nd gen functions Direct VPC egress lets you route traffic from your Cloud Run functions (2nd gen) function directly to your VPC network.
- RUNTIME : the runtime for your function, for example, nodejs20 .

### "Execution environment security \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a log entry for a Nodejs function might look as follows: { ... "textPayload" : "Step #2 - \"build\": Adding image label google.run-image: us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/runtimes/nodejs22:nodejs20 20230924 20 6 1 RC00" , ... } Security update policy You can choose one of the following security update policies: Automatic updates (default): Updates and security patches to the runtime environment are published in new versions of the runtime image.
- By default, automatic security updates are enabled for functions deployed using: gcloud functions Cloud Functions v2 API gcloud run with the --functions flag and the --base-image flag Set your function's update policy You can change your function's update policy by using the following command: gcloud functions deploy FUNCTION NAME \ --runtime-update-policy= POLICY ...
- On deployment updates : Updates and security patches are applied to runtimes only when functions are deployed or redeployed, unless otherwise noted.
- After a period of testing for stability and reliability, the updated runtime is rolled out to all functions resulting in a zero downtime update.

