---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.207Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Hierarchical service activation"
feature_slug: "hierarchical-service-activation"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies"
keywords:
  - "hierarchical"
  - "activation"
  - "usage"
  - "adds"
  - "allowing"
  - "services"
  - "to"
  - "be"
---

# Hierarchical service activation

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Service Usage adds hierarchical service activation, allowing services to be enabled or disabled across an organization's resource hierarchy.

## Extended Definition

Service Usage adds hierarchical service activation, allowing services to be enabled or disabled across an organization's resource hierarchy.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies)

## Supporting Pages

### "Hierarchical service activation overview \_|\_ Service Usage \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: N/A

Evidence snippets:
- Hierarchical service activation is a Service Usage feature that gives you more control over enabling and disabling services, including public and private services , across your organization's resource hierarchy .
- Organization policy While hierarchical service activation lets you enable or disable services, the Organization Policy Service complements this by providing centralized control over how services can be used.
- Hierarchical service activation overview Preview — Hierarchical service activation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can use hierarchical service activation features, like enabling services at the folder or organization level, without changing existing project-level settings.

### Manage service enablement \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resul t : { "@type" : "type.googleapis.com/google.api.serviceusage.with Hierarchical Service Activationbeta.ConsumerPolicy" , "createTime" : "2025-01-31T20:17:37.272343Z" , "enableRules" :[ { "services" :[ "services/apikeys.googleapis.com" , "services/compute.googleapis.com" , "services/oslogin.googleapis.com" , "services/serviceusage.googleapis.com" , "services/cloudresourcemanager.googleapis.com" , "services/dataplex.googleapis.com" , "services/bigquery.googleapis.com" , "services/bigquerystorage.googleapis.com" , "services/bigqueryconnection.googleapis.com" , "services/analyticshub.googleapis.com" , "services/bigquerymigration.googleapis.com" , "services/dataform.googleapis.com" , "services/bigquerydatapolicy.googleapis.com" , "services/bigquerydatatransfer.googleapis.com" , "services/bigqueryreservation.googleapis.com" ] } ], "etag" : "W/\"FDXMAIdsBW7BrXjL7oP6FA==\"" , "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "2025-09-12T19:44:23.675769Z" } Disabling a service Attempting to disable BigQuery service with active dependencies: gcloud beta services disable bigquery.googleapis.com Error message: ERROR: ( gcloud.beta.services.disable ) The services are depended on by the following active service ( s ) { "bigquery.googleapis.com" : [ "services/bigquerystorage.googleapis.com" ]} .
- Resul t : { "@type" : "type.googleapis.com/google.api.serviceusage.with Hierarchical Service Activationbeta.ConsumerPolicy" , "createTime" : "2025-01-31T20:17:37.272343Z" , "enableRules" :[ { "services" :[ "services/apikeys.googleapis.com" , "services/compute.googleapis.com" , "services/oslogin.googleapis.com" , "services/serviceusage.googleapis.com" , "services/bigquery.googleapis.com" ] } ], "etag" : "W/\"W9nsVJK0V1m7ee7tM7pFDg==\"" , "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "2025-09-11T23:05:22.758394Z" } Enabling BigQuery service with its dependencies: gcloud beta services enable bigquery.googleapis.com Output: Opera t io n [ opera t io ns /ucpa t .p 39-581601899707-73192 b 0 f -053 c -46ee-911 a -7e ca 6 b 8 fe 899 ] comple te .
- Resul t : { "@type" : "type.googleapis.com/google.api.serviceusage.v2beta.ConsumerPolicy" , "createTime" : "2025-01-31T20:17:37.272343Z" , "enableRules" :[ { "services" :[ "services/analyticshub.googleapis.com" , "services/apikeys.googleapis.com" , "services/bigqueryconnection.googleapis.com" , "services/bigquerydatapolicy.googleapis.com" , "services/bigquerydatatransfer.googleapis.com" , "services/bigquerymigration.googleapis.com" , "services/bigqueryreservation.googleapis.com" , "services/cloudresourcemanager.googleapis.com" , "services/compute.googleapis.com" , "services/dataform.googleapis.com" , "services/dataplex.googleapis.com" , "services/oslogin.googleapis.com" , "services/serviceusage.googleapis.com" ] } ], "etag" : "W/\"TqbPaELDHlZQOj7As1P06g==\"" , "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "2025-09-30T21:39:40.746125Z" } What's next To manage policies, see Manage consumer policies .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage service enablement: List services: serviceusage.effectivepolicy.get serviceusage.services.list serviceusage.services.get Enable services: serviceusage.consumerpolicy.get serviceusage.consumerpolicy.update serviceusage.groups.listExpandedMembers Disable services: serviceusage.consumerpolicy.get serviceusage.consumerpolicy.update serviceusage.consumerpolicy.analyze You might also be able to get these permissions with custom roles or other predefined roles .

### Manage consumer policies \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the --validate-only flag to preview changes before applying them. gcloud beta services policies update --consumer-policy-file = PATH TO CONSUMER POLICY Replace PATH TO CONSUMER POLICY with the path to the YAML file that contains the consumer policy—for example: gcloud beta services policies update --consumer-policy-file=/path/to/the/file.yaml Supported flags: --bypass-api-usage-check to bypass usage checks.
- Help Token : AVSZLmtCfGwMm4oHmOyExdDEFRQ0pFiBrl879nbZlY2JkfVzeU63u66ApXYr6MIEAoig..." Updating consumer policy when service has been used or enabled recently by bypassing usage check: gcloud beta services policies update --consumer-policy-file = /tmp/test.yaml --bypass-api-usage-check Output: Operation [operations/ucpat.p39-581601899707-8ffda670-ed04-4776-8d43-d2f8e1817e00] complete.
- Attempting to update consumer policy when service has been used or enabled recently: gcloud beta services policies update --consumer-policy-file = /tmp/test.yaml Output: The operation "operations/ucpat.p39-581601899707-4884bdb0-d899-49ac-9c83-38457950ef33" resulted in a failure "The services apikeys.googleapis.com have usage in the last 30 days or were enabled in the past 3 days.
- Checking if a service is enabled Checking the status of enabled API keys service for current project: gcloud beta services policies test-enabled apikeys.googleapis.com Output: Service apikeys.googleapis.com is ENABLED for resource projects/test-project Hierarchical Service Activation.

### List service dependencies \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing expanded dependency group members Listing expanded dependencies of BigQuery service for the current project: gcloud beta services groups list-expanded-members bigquery.googleapis.com dependencies Output: services/analyticshub.googleapis.com services/bigquery.googleapis.com services/bigqueryconnection.googleapis.com services/bigquerydatapolicy.googleapis.com services/bigquerydatatransfer.googleapis.com services/bigquerymigration.googleapis.com services/bigqueryreservation.googleapis.com services/bigquerystorage.googleapis.com services/cloudresourcemanager.googleapis.com services/dataform.googleapis.com services/dataplex.googleapis.com What's next To enable and disable services, see Manage service enablement .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to list service dependencies: List dependency group members: serviceusage.groups.listMembers List expanded dependency group members: serviceusage.groups.listExpandedMembers You might also be able to get these permissions with custom roles or other predefined roles .
- Examples Listing direct dependency group members Listing direct dependencies of BigQuery service for the current project: gcloud beta services groups list-members bigquery.googleapis.com dependencies Output: NAME : services/analyticshub.googleapis.com REASON : BigQuery depends on this group to allow users to exchange data and analytics assets.
- Attempting to list dependencies of API keys service without a corresponding service dependency group: gcloud beta services groups list-members apikeys.googleapis.com dependencies --project = test-project Output: Listed 0 items.

