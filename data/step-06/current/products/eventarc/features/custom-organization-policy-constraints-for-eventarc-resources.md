---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.522Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Custom organization policy constraints for Eventarc resources"
feature_slug: "custom-organization-policy-constraints-for-eventarc-resources"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints"
  - "https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced"
  - "https://docs.cloud.google.com/eventarc/docs/use-cmek"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
keywords:
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "for"
  - "eventarc"
  - "resources"
  - "advanced"
---

# Custom organization policy constraints for Eventarc resources

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc Advanced and Eventarc Standard can create custom organization policy constraints for some Eventarc resources.

## Extended Definition

Eventarc Advanced and Eventarc Standard can create custom organization policy constraints for some Eventarc resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)

## Supporting Pages

### "Create custom organization policy constraints for Eventarc \_|\_ Eventarc\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 351
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Require CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcCMEKOrgPolicy resourceTypes : - eventarc.googleapis.com/Channel methodTypes : - CREATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : ALLOW displayName : Enforce the use of a CMEK key from my-project description : All Eventarc channels must be created with a CMEK key from my-project Deny CMEK key name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcGoogleChannelKey resourceTypes : - eventarc.googleapis.com/GoogleChannelConfig methodTypes : - CREATE - UPDATE condition : "resource.cryptoKeyName.contains('projects/my-project/')" actionType : DENY displayName : Constrain the use of CMEK keys from my-project description : CMEK keys from a specific project are denied when creating or updating the configuration that supports using a Google Cloud service as an event source Require logging severity name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcPipelineErrorLog resourceTypes : - eventarc.googleapis.com/Pipeline methodTypes : - CREATE condition : "resource.loggingConfig.logSeverity=='ERROR'" actionType : ALLOW displayName : Enforce minimum severity for log entries description : All Eventarc Advanced pipelines must be configured with a logging level of ERROR applied Deny destination name : organizations/ ORGANIZATION ID /customConstraints/custom.eventarcTriggerNoTestDestination resourceTypes : - eventarc.googleapis.com/Trigger methodTypes : - CREATE condition : "resource.destination.cloudRun.service.contains('test')" actionType : DENY displayName : Constrain Cloud Run service destinations description : Specific Cloud Run service destinations are denied when creating an Eventarc Standard trigger Eventarc supported resources The following table lists the Eventarc resources that you can reference in custom constraints.
- Advanced Standard This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: eventarc.googleapis.com/Channel eventarc.googleapis.com/ChannelConnection eventarc.googleapis.com/Enrollment eventarc.googleapis.com/GoogleApiSource eventarc.googleapis.com/GoogleChannelConfig eventarc.googleapis.com/MessageBus eventarc.googleapis.com/Pipeline eventarc.googleapis.com/Trigger To learn more about Organization Policy, see Custom organization policies .
- Home Documentation Application development Eventarc Standard Guides Send feedback Create custom organization policy constraints for Eventarc Stay organized with collections Save and categorize content based on your preferences.
- Limitations To apply a custom organization policy constraint to a Pub/Sub topic created by Eventarc and used as a trigger's transport layer ( resource.transport.pubsub.topic ), you must enforce the constraint on the Pub/Sub topic resource instead, and not the Eventarc Standard trigger.

### "Disable Eventarc Advanced resources \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- Source ID: `site-iam-reference`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a custom constraint You can create a custom constraint and use this custom constraint in an organization policy to prevent the creating and updating of new Eventarc Advanced resources.
- Before you begin Before you disable Eventarc Advanced resources, make sure that the following prerequisites are met: You know your Google Cloud organization ID .
- Note: Any existing Eventarc Advanced resources created prior to enabling the organization policy continue to function after you enable the policy.
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.disableEventarcAdvancedResources .

### "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "cryptoKeyName": "" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ?updateMask=cryptoKeyName" Select-Object -Expand Content If successful, the response body contains a newly created instance of Operation : { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata", "createTime": "2024-01-25T17:17:45.782370139Z", "target": "projects/ PROJECT ID /locations/ LOCATION /channels/ CHANNEL NAME ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Apply a CMEK organization policy Eventarc is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- Require CMEKs for new Eventarc resources You can use the constraints/gcp.restrictNonCmekServices constraint to require that CMEKs be used to protect new Eventarc resources in an organization.
- This integration lets you specify the following encryption compliance requirements for Eventarc resources in your organization: Require CMEKs for new Eventarc resources Restrict Cloud KMS keys for an Eventarc project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.
- For example, you can specify a rule similar to the following: "For applicable Eventarc resources in projects/my-company-data-project , Cloud KMS keys used in this project must come from projects/my-company-central-keys OR projects/team-specific-keys ." Console In the Google Cloud console, go to the Organization policies page.

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . channel connection path channel connection path ( project : str , location : str , channel connection : str ) - > str Returns a fully-qualified channel connection string. channel path channel path ( project : str , location : str , channel : str ) - > str Returns a fully-qualified channel string. cloud function path cloud function path ( project : str , location : str , function : str ) - > str Returns a fully-qualified cloud function string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create channel create channel ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- CreateChannelConnectionRequest ( parent="parent value", channel connection=channel connection, channel connection id="channel connection id value", ) Make the request operation = client. create channel connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.eventarc v1.types.CreateChannelConnectionRequest , dict] The request object.

