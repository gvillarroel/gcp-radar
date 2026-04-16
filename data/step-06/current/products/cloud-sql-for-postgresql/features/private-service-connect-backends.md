---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.751Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private Service Connect backends"
feature_slug: "private-service-connect-backends"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "backends"
  - "alternative"
  - "endpoints"
  - "accessing"
  - "provide"
  - "connect"
  - "private"
---

# Private Service Connect backends

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect backends provide an alternative to PSC endpoints for accessing Cloud SQL instances.

## Extended Definition

Private Service Connect backends provide an alternative to PSC endpoints for accessing Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Service Connect backend You can use Private Service Connect backends , as an alternative to Private Service Connect endpoints , to access Cloud SQL instances.
- The hub provides a centralized connectivity management model to interconnect spoke VPC networks to Private Service Connect endpoints.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Service Connect backend You can use Private Service Connect backends , as an alternative to Private Service Connect endpoints , to access Cloud SQL instances.
- The hub provides a centralized connectivity management model to interconnect spoke VPC networks to Private Service Connect endpoints.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect PROJECT ID : the ID or project number of the Google Cloud project that contains the instance The following example shows a sample output for this command: gcloud sql instances describe myinstance \ --project = 12345 ... pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/global/operations/operation- OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata", "createTime": "2024-05-23T16:43:49.313981473Z", "target": "projects/ PROJECT ID /locations/global/connectivityTests/ CONNECTIVITY TEST NAME ", "verb": "create", "cancelRequested": false, "apiVersion": "v1" }, "done": false } Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network.
- Alternatively, retrieve the internal IP address of the Private Service Connect endpoint using the service attachment of the Cloud SQL instance. gcloud To retrieve the IP address, use the gcloud compute forwarding-rules list command: gcloud compute forwarding-rules list \ --filter = "TARGET: REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME " \ --project = PROJECT ID Make the following replacements: REGION NAME : the region name for the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint SERVICE ATTACHMENT NAME : the name of the service attachment for the Cloud SQL instance In the response, verify that an IP address appears.

