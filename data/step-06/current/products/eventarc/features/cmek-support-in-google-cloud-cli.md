---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.542Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "CMEK support in Google Cloud CLI"
feature_slug: "cmek-support-in-google-cloud-cli"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/use-cmek"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
  - "https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints"
keywords:
  - "cmek"
  - "in"
  - "cli"
  - "eventarc"
  - "can"
  - "use"
  - "customer"
  - "managed"
---

# CMEK support in Google Cloud CLI

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can use customer-managed encryption keys when configured through Google Cloud CLI.

## Extended Definition

Eventarc can use customer-managed encryption keys when configured through Google Cloud CLI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- Source ID: `site-docs-root-2`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Trigger details page, the Encryption status displays, the message, Events encrypted using Customer-managed encryption keys . gcloud To confirm the CMEK key, you can use the google-channels describe command. gcloud eventarc google-channels describe \ --location = LOCATION The output should be similar to the following: cryptoKeyName: projects/ PROJECT ID /locations/ LOCATION /keyRings/ RING NAME /cryptoKeys/ KEY NAME name: projects/ PROJECT ID /locations/ LOCATION /googleChannelConfig updateTime: '2022-06-28T17:24:56.365866104Z' The cryptokeyName value shows the Cloud KMS key used for the Google channel.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Eventarc.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "cryptoKeyName": "" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ?updateMask=cryptoKeyName" Select-Object -Expand Content If successful, the response body contains a newly created instance of Operation : { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata", "createTime": "2024-01-25T17:17:45.782370139Z", "target": "projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Apply a CMEK organization policy Eventarc is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- Click Save . gcloud Based on the type of channel, run the following command: Google channel gcloud eventarc google-channels \ update --clear-crypto-key Third-party channel gcloud eventarc channels CHANNEL NAME \ update --clear-crypto-key Terraform Based on the type of channel, clear the crypto key name value by not specifying it when configuring the Terraform resource: Google channel resource "google eventarc google channel config" "default" { location = "us-central1" name = "googleChannelConfig" } Third-party channel resource "google eventarc channel" "default" { location = "us-central1" name = " CHANNEL NAME " } REST Based on the type of channel, make the following request: Google channel To delete the CMEK key, you can update the GoogleChannelConfig resource for a given project and location using the projects.locations.updateGoogleChannelConfig method.

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 async def sample list message buses(): Create a client client = eventarc v1 .
- ListMessageBusEnrollmentsRequest ( parent="parent value", ) Make the request page result = client. list message bus enrollments (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.ListMessageBusEnrollmentsRequest , dict]] The request object.
- ListMessageBusesRequest ( parent="parent value", ) Make the request page result = client. list message buses (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.ListMessageBusesRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,EventarcTransport,Callable[..., EventarcTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 def sample list message buses(): Create a client client = eventarc v1 .
- ListMessageBusEnrollmentsRequest ( parent="parent value", ) Make the request page result = client. list message bus enrollments (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.eventarc v1.types.ListMessageBusEnrollmentsRequest , dict] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,EventarcTransport,Callable[..., EventarcTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- ListMessageBusesRequest ( parent="parent value", ) Make the request page result = client. list message buses (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.eventarc v1.types.ListMessageBusesRequest , dict] The request object.

### "Create custom organization policy constraints for Eventarc \_|\_ Eventarc\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Require CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcCMEKOrgPolicy resourceTypes : - eventarc.googleapis.com/Channel methodTypes : - CREATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : ALLOW displayName : Enforce the use of a CMEK key from my-project description : All Eventarc channels must be created with a CMEK key from my-project Deny CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcGoogleChannelKey resourceTypes : - eventarc.googleapis.com/GoogleChannelConfig methodTypes : - CREATE - UPDATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : DENY displayName : Constrain the use of CMEK keys from my-project description : CMEK keys from a specific project are denied when creating or updating the configuration that supports using a Google Cloud service as an event source Require logging severity name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcPipelineErrorLog resourceTypes : - eventarc.googleapis.com/Pipeline methodTypes : - CREATE condition : "resource.loggingConfig.logSeverity=='ERROR'" actionType : ALLOW displayName : Enforce minimum severity for log entries description : All Eventarc Advanced pipelines must be configured with a logging level of ERROR applied Deny destination name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcTriggerNoTestDestination resourceTypes : - eventarc.googleapis.com/Trigger methodTypes : - CREATE condition : "resource.destination.cloudRun.service.contains('test')" actionType : DENY displayName : Constrain Cloud Run service destinations description : Specific Cloud Run service destinations are denied when creating an Eventarc Standard trigger Eventarc supported resources The following table lists the Eventarc resources that you can reference in custom constraints.
- Advanced Standard This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: eventarc.googleapis.com/Channel eventarc.googleapis.com/ChannelConnection eventarc.googleapis.com/Enrollment eventarc.googleapis.com/GoogleApiSource eventarc.googleapis.com/GoogleChannelConfig eventarc.googleapis.com/MessageBus eventarc.googleapis.com/Pipeline eventarc.googleapis.com/Trigger To learn more about Organization Policy, see Custom organization policies .
- Limitations To apply a custom organization policy constraint to a Pub/Sub topic created by Eventarc and used as a trigger's transport layer ( resource.transport.pubsub.topic ), you must enforce the constraint on the Pub/Sub topic resource instead, and not the Eventarc Standard trigger.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

