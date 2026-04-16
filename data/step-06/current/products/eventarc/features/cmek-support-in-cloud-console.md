---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.541Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "CMEK support in Cloud Console"
feature_slug: "cmek-support-in-cloud-console"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/use-cmek"
  - "https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints"
  - "https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial"
keywords:
  - "cmek"
  - "in"
  - "console"
  - "eventarc"
  - "can"
  - "use"
  - "customer"
  - "managed"
---

# CMEK support in Cloud Console

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can use customer-managed encryption keys when configured through Cloud Console.

## Extended Definition

Eventarc can use customer-managed encryption keys when configured through Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial](https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- Source ID: `site-docs-root-2`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Trigger details page, the Encryption status displays, the message, Events encrypted using Customer-managed encryption keys . gcloud To confirm the CMEK key, you can use the google-channels describe command. gcloud eventarc google-channels describe \ --location = LOCATION The output should be similar to the following: cryptoKeyName: projects/ PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME name: projects/ PROJECT ID /locations/ LOCATION /googleChannelConfig updateTime: '2022-06-28T17:24:56.365866104Z' The cryptokeyName value shows the Cloud KMS key used for the Google channel.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Eventarc.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "cryptoKeyName": "" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ?updateMask=cryptoKeyName" Select-Object -Expand Content If successful, the response body contains a newly created instance of Operation : { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata", "createTime": "2024-01-25T17:17:45.782370139Z", "target": "projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Apply a CMEK organization policy Eventarc is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "cryptoKeyName": "projects/ PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME " } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ?updateMask=cryptoKeyName" Select-Object -Expand Content If successful, the response body contains a newly created instance of Operation : { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata", "createTime": "2024-01-25T17:17:45.782370139Z", "target": "projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Verify Cloud KMS usage To verify that the channel is now CMEK-compliant: Console In the Google Cloud console, go to the Eventarc > Triggers page.

### "Create custom organization policy constraints for Eventarc \_|\_ Eventarc\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Require CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcCMEKOrgPolicy resourceTypes : - eventarc.googleapis.com/Channel methodTypes : - CREATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : ALLOW displayName : Enforce the use of a CMEK key from my-project description : All Eventarc channels must be created with a CMEK key from my-project Deny CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcGoogleChannelKey resourceTypes : - eventarc.googleapis.com/GoogleChannelConfig methodTypes : - CREATE - UPDATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : DENY displayName : Constrain the use of CMEK keys from my-project description : CMEK keys from a specific project are denied when creating or updating the configuration that supports using a Google Cloud service as an event source Require logging severity name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcPipelineErrorLog resourceTypes : - eventarc.googleapis.com/Pipeline methodTypes : - CREATE condition : "resource.loggingConfig.logSeverity=='ERROR'" actionType : ALLOW displayName : Enforce minimum severity for log entries description : All Eventarc Advanced pipelines must be configured with a logging level of ERROR applied Deny destination name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcTriggerNoTestDestination resourceTypes : - eventarc.googleapis.com/Trigger methodTypes : - CREATE condition : "resource.destination.cloudRun.service.contains('test')" actionType : DENY displayName : Constrain Cloud Run service destinations description : Specific Cloud Run service destinations are denied when creating an Eventarc Standard trigger Eventarc supported resources The following table lists the Eventarc resources that you can reference in custom constraints.
- Advanced Standard This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: eventarc.googleapis.com/Channel eventarc.googleapis.com/ChannelConnection eventarc.googleapis.com/Enrollment eventarc.googleapis.com/GoogleApiSource eventarc.googleapis.com/GoogleChannelConfig eventarc.googleapis.com/MessageBus eventarc.googleapis.com/Pipeline eventarc.googleapis.com/Trigger To learn more about Organization Policy, see Custom organization policies .
- Limitations To apply a custom organization policy constraint to a Pub/Sub topic created by Eventarc and used as a trigger's transport layer ( resource.transport.pubsub.topic ), you must enforce the constraint on the Pub/Sub topic resource instead, and not the Eventarc Standard trigger.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### "Package google.cloud.eventarc.publishing.v1 \_|\_ Eventarc \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1](https://docs.cloud.google.com/eventarc/docs/reference/publishing/rpc/google.cloud.eventarc.publishing.v1)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ChannelConnection is a first-class Eventarc resource that is created and managed by the partner in their Google Cloud project.
- Channel is a first-class Eventarc resource that is created and managed by the subscriber in their Google Cloud project.
- Bus is a first-class Eventarc resource that is created and managed in a Google Cloud project.
- Index Publisher (interface) CloudEvent (message) CloudEvent.CloudEventAttributeValue (message) PublishChannelConnectionEventsRequest (message) PublishChannelConnectionEventsResponse (message) PublishEventsRequest (message) PublishEventsResponse (message) PublishRequest (message) PublishResponse (message) Publisher Eventarc processes events generated by an event provider and delivers them to a subscriber.

### "Build a BigQuery processing pipeline for Knative serving with Eventarc \_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial](https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following roles are bound: roles/compute.viewer roles/container.developer roles/iam.serviceAccountAdmin Create a service account and bind access roles Before creating the Eventarc trigger, set up a user-managed service account and grant it specific roles so that Eventarc can forward Pub/Sub events.
- Create an Identity and Access Management (IAM) binding between the service accounts: PROJECT NUMBER = " $( gcloud projects describe $( gcloud config get-value project ) --format = 'value(projectNumber)' ) " gcloud iam service-accounts add-iam-policy-binding \ --role roles/iam.workloadIdentityUser \ --member "serviceAccount: $PROJECT ID .svc.id.goog[default/default]" \ $PROJECT NUMBER -compute@developer.gserviceaccount.com Add the iam.gke.io/gcp-service-account annotation to the GKE service account, using the email address of the compute service account: kubectl annotate serviceaccount \ --namespace default \ default \ iam.gke.io/gcp-service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com Enable GKE destinations To allow Eventarc to manage resources in the GKE cluster, enable GKE destinations and bind the Eventarc service account with the required roles.
- Make sure that the bucket and the charts are publicly available, and in the same region as your GKE service: export BUCKET = " $( gcloud config get-value core/project ) -charts" gcloud storage buckets create gs:// ${ BUCKET } --location = $( gcloud config get-value run/region ) gcloud storage buckets update gs:// ${ BUCKET } --uniform-bucket-level-access gcloud storage buckets add-iam-policy-binding gs:// ${ BUCKET } --member = allUsers --role = roles/storage.objectViewer Clone the repository Clone the GitHub repository. git clone https://github.com/GoogleCloudPlatform/eventarc-samples cd eventarc-samples/processing-pipelines Deploy the notifier service From the bigquery/notifier/python directory, deploy a Knative serving service that receives chart creator events and uses SendGrid to email links to the generated charts.
- Set the defaults used in this tutorial: CLUSTER NAME = events-cluster CLUSTER LOCATION = us-central1 PROJECT ID = PROJECT ID gcloud config set project $PROJECT ID gcloud config set run/region $CLUSTER LOCATION gcloud config set run/cluster $CLUSTER NAME gcloud config set run/cluster location $CLUSTER LOCATION gcloud config set run/platform gke gcloud config set eventarc/location $CLUSTER LOCATION Replace PROJECT ID with your project ID.

