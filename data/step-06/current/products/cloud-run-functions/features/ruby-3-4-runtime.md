---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.906Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Ruby 3.4 runtime"
feature_slug: "ruby-3-4-runtime"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/apis/libraries"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
keywords:
  - "ruby"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
---

# Ruby 3.4 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the Ruby 3.4 runtime; Cloud Run functions supports the Ruby 3.4 runtime.

## Extended Definition

Cloud Run functions supports the Ruby 3.4 runtime; Cloud Run functions supports the Ruby 3.4 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/apis/libraries](https://docs.cloud.google.com/functions/docs/apis/libraries)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Supporting Pages

### "Cloud Functions client libraries \_|\_ Cloud Run functions \_|\_ Google\

- URL: [https://docs.cloud.google.com/functions/docs/apis/libraries](https://docs.cloud.google.com/functions/docs/apis/libraries)
- Source ID: `site-docs-reference-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Ruby gem install google-cloud-functions For more information, see Setting Up a Ruby Development Environment .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - functions < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - functions : 2.90.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-functions" % "2.90.0" Note: Cloud Java client libraries do not currently support Android.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Cloud Functions client libraries Stay organized with collections Save and categorize content based on your preferences.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- Deploy your function to build using a private pool: gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --build-worker-pool PRIVATE POOL NAME [ FLAGS... ] Replace FUNCTION NAME with the name of the function, RUNTIME with the runtime you are using, and PRIVATE POOL NAME with the name of your pool.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- Create and deploy the function Create a new directory for the function and change into it: cd .. mkdir dvpc-function cd dvpc-function Create a package.json file with the following content: { "name" : "sample-http" , "version" : "0.0.1" , "dependencies" : { "axios" : "0.21.1" , "@google-cloud/functions-framework" : "^3.0.0" } } Create an index.js file with the following content.
- Using the Cloud Run functions (2nd gen) Direct VPC egress example as a starting point, update the following fields: service config.direct vpc network interface.network : the name of your VPC network. service config.direct vpc network interface.subnetwork : the name of your VPC subnetwork. service config.direct vpc egress : which traffic to send to the VPC network.

