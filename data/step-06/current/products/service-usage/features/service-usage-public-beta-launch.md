---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.208Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Service Usage public beta launch"
feature_slug: "service-usage-public-beta-launch"
latest_feature_date: "2018-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient"
keywords:
  - "usage"
  - "public"
  - "beta"
  - "launch"
  - "introduced"
  - "in"
  - "as"
  - "an"
---

# Service Usage public beta launch

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Introduced Service Usage in public beta as an infrastructure service for discovering and managing APIs and services in a Google Cloud project.

## Extended Definition

Introduced Service Usage in public beta as an infrastructure service for discovering and managing APIs and services in a Google Cloud project.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)

## Supporting Pages

### "Class ServiceUsageAsyncClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch get services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample disable service(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample enable service(): Create a client client = service usage v1 .

### Manage consumer policies \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-consumer-policies)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Result : { "@type" : "type.googleapis.com/google.api.serviceusage.v2beta.ConsumerPolicy" , "createTime" : "1970-01-01T00:00:00Z" , "enableRules" :[ { "services" :[ "services/serviceusage.googleapis.com" ] } ], "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "1970-01-01T00:00:00Z" } Retrieving effective policy Retrieving BASIC view of the effective policy for current project: gcloud beta services policies get-effective Output: EnabledRules : Services : - services/apikeys.googleapis.com - services/compute.googleapis.com - services/computescanning.googleapis.com - services/containeranalysis.googleapis.com - services/containerscanning.googleapis.com - services/gkebackup.googleapis.com - services/osconfig.googleapis.com - services/oslogin.googleapis.com - services/serviceusage.googleapis.com Retrieving FULL view of the effective policy for current project: gcloud beta services policies get-effective --view = FULL Output: EnabledRules : Services : - services/apikeys.googleapis.com - services/compute.googleapis.com - services/computescanning.googleapis.com - services/containeranalysis.googleapis.com - services/containerscanning.googleapis.com - services/gkebackup.googleapis.com - services/osconfig.googleapis.com - services/oslogin.googleapis.com - services/serviceusage.googleapis.com Metadata of effective policy : EnabledService : services/apikeys.googleapis.com EnabledPolicies : [ 'projects/ PROJECT ID /consumerPolicies/default' ] EnabledService : services/bcidcloudenforcer-pa.googleapis.com EnabledPolicies : [ 'folders/ FOLDER ID /consumerPolicies/default' ] EnabledService : services/compute.googleapis.com EnabledPolicies : [ 'projects/ PROJECT ID /consumerPolicies/default' ] ...
- You can use the --validate-only flag to preview changes before applying them. gcloud beta services policies update --consumer-policy-file = PATH TO CONSUMER POLICY Replace PATH TO CONSUMER POLICY with the path to the YAML file that contains the consumer policy—for example: gcloud beta services policies update --consumer-policy-file=/path/to/the/file.yaml Supported flags: --bypass-api-usage-check to bypass usage checks.
- Help Token : AVSZLmtCfGwMm4oHmOyExdDEFRQ0pFiBrl879nbZlY2JkfVzeU63u66ApXYr6MIEAoig..." Updating consumer policy when service has been used or enabled recently by bypassing usage check: gcloud beta services policies update --consumer-policy-file = /tmp/test.yaml --bypass-api-usage-check Output: Operation [operations/ucpat.p39-581601899707-8ffda670-ed04-4776-8d43-d2f8e1817e00] complete.
- Attempting to update consumer policy when service has been used or enabled recently: gcloud beta services policies update --consumer-policy-file = /tmp/test.yaml Output: The operation "operations/ucpat.p39-581601899707-4884bdb0-d899-49ac-9c83-38457950ef33" resulted in a failure "The services apikeys.googleapis.com have usage in the last 30 days or were enabled in the past 3 days.

### Manage service enablement \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resul t : { "@type" : "type.googleapis.com/google.api.serviceusage.v2beta.ConsumerPolicy" , "createTime" : "2025-01-31T20:17:37.272343Z" , "enableRules" :[ { "services" :[ "services/analyticshub.googleapis.com" , "services/apikeys.googleapis.com" , "services/bigqueryconnection.googleapis.com" , "services/bigquerydatapolicy.googleapis.com" , "services/bigquerydatatransfer.googleapis.com" , "services/bigquerymigration.googleapis.com" , "services/bigqueryreservation.googleapis.com" , "services/cloudresourcemanager.googleapis.com" , "services/compute.googleapis.com" , "services/dataform.googleapis.com" , "services/dataplex.googleapis.com" , "services/oslogin.googleapis.com" , "services/serviceusage.googleapis.com" ] } ], "etag" : "W/\"TqbPaELDHlZQOj7As1P06g==\"" , "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "2025-09-30T21:39:40.746125Z" } What's next To manage policies, see Manage consumer policies .
- Disabling BigQuery service and its dependencies and bypassing the usage check: gcloud beta services disable bigquery.googleapis.com --disable-dependency-services --bypass-api-usage-check Output: Opera t io n [ opera t io ns /ucpa t .p 39-581601899707-5 c 02 aa 04-7 ad 7-4e b 6- a 6 a 1- dc 68653 bcdb 4 ] comple te .
- Resul t : { "@type" : "type.googleapis.com/google.api.serviceusage.with Hierarchical Service Activationbeta.ConsumerPolicy" , "createTime" : "2025-01-31T20:17:37.272343Z" , "enableRules" :[ { "services" :[ "services/apikeys.googleapis.com" , "services/compute.googleapis.com" , "services/oslogin.googleapis.com" , "services/serviceusage.googleapis.com" , "services/cloudresourcemanager.googleapis.com" , "services/dataplex.googleapis.com" , "services/bigquery.googleapis.com" , "services/bigquerystorage.googleapis.com" , "services/bigqueryconnection.googleapis.com" , "services/analyticshub.googleapis.com" , "services/bigquerymigration.googleapis.com" , "services/dataform.googleapis.com" , "services/bigquerydatapolicy.googleapis.com" , "services/bigquerydatatransfer.googleapis.com" , "services/bigqueryreservation.googleapis.com" ] } ], "etag" : "W/\"FDXMAIdsBW7BrXjL7oP6FA==\"" , "name" : "projects/ PROJECT ID /consumerPolicies/default" , "updateTime" : "2025-09-12T19:44:23.675769Z" } Disabling a service Attempting to disable BigQuery service with active dependencies: gcloud beta services disable bigquery.googleapis.com Error message: ERROR: ( gcloud.beta.services.disable ) The services are depended on by the following active service ( s ) { "bigquery.googleapis.com" : [ "services/bigquerystorage.googleapis.com" ]} .
- Attempting to disable BigQuery service with recent usage: gcloud beta services disable bigquery.googleapis.com --disable-dependency-services Error message: ERROR: ( gcloud.beta.services.disable ) The operation "operations/ucpat.p39-581601899707-d35c2e2b-d2a3-47af-a1c0-033ed65df236" resulted in a failure "The services bigquery.googleapis.com,bigquerystorage.googleapis.com have usage in the last 30 days or were enabled in the past 3 days.

### "Class ServiceUsageClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- Source ID: `site-python-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch get services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample disable service(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample enable service(): Create a client client = service usage v1 .

