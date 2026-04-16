---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.047Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Node.js 12 runtime"
feature_slug: "node-js-12-runtime"
latest_feature_date: "2020-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/tutorials/terraform"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/securing/execution-environment-security"
keywords:
  - "node"
  - "js"
  - "12"
  - "runtime"
  - "lets"
  - "functions"
  - "run"
---

# Node.js 12 runtime

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

The Node.js 12 runtime lets functions run on Node.js 12.

## Extended Definition

The Node.js 12 runtime lets functions run on Node.js 12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)

## Supporting Pages

### Terraform Tutorial \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the main.tf file: terraform { required providers { google = { source = "hashicorp/google" version = ">= 4.34.0" } } } resource "random id" "default" { byte length = 8 } resource "google storage bucket" "default" { name = "${random id.default.hex}-gcf-source" # Every bucket name must be globally unique location = "US" uniform bucket level access = true } data "archive file" "default" { type = "zip" output path = "/tmp/function-source.zip" source dir = "functions/hello-world/" } resource "google storage bucket object" "object" { name = "function-source.zip" bucket = google storage bucket.default.name source = data.archive file.default.output path # Add path to the zipped function source code } resource "google cloudfunctions2 function" "default" { name = "function-v2" location = "us-central1" description = "a new function" build config { runtime = "nodejs22" entry point = "helloHttp" # Set the entry point source { storage source { bucket = google storage bucket.default.name object = google storage bucket object.object.name } } } service config { max instance count = 1 available memory = "256M" timeout seconds = 60 } } resource "google cloud run service iam member" "member" { location = google cloudfunctions2 function.default.location service = google cloudfunctions2 function.default.name role = "roles/run.invoker" member = "allUsers" } output "function uri" { value = google cloudfunctions2 function.default.service config[0].uri } Initialize Terraform In the terraform-docs-samples/functions/basic directory containing the main.tf file, run this command to add the necessary plugins and build the .terraform directory: terraform init Apply the Terraform configuration In the same terraform-docs-samples/functions/basic directory containing the main.tf file, deploy the function by applying the configuration.
- Cloud Shell can take several minutes to initialize: Open Cloud Shell Preparing the application In Cloud Shell, perform the following steps: Clone the sample app repository to your Cloud Shell instance: git clone https://github.com/terraform-google-modules/terraform-docs-samples.git Change to the directory that contains the Cloud Run functions sample code examples: cd terraform-docs-samples/functions/basic The Node.JS sample used in this tutorial is a basic "Hello World" HTTP function.
- Terraform lets you remove all the resources defined in the configuration file by running the terraform destroy command in the terraform-docs-samples/functions/basic directory containing your main.tf file: terraform destroy Enter yes to allow Terraform to delete your resources.
- Go to the Node.js setup guide Required roles Users deploying functions must have the Cloud Functions Developer ( roles/cloudfunctions.developer ) IAM role or a role that includes the same permissions.

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

