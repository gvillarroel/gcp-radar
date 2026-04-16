---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.885Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automatic Private Service Connect endpoint creation"
feature_slug: "automatic-private-service-connect-endpoint-creation"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
keywords:
  - "automatic"
  - "private"
  - "connect"
  - "endpoint"
  - "creation"
  - "feature"
  - "automatically"
  - "creates"
---

# Automatic Private Service Connect endpoint creation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature automatically creates a Private Service Connect endpoint for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network.

## Extended Definition

This feature automatically creates a Private Service Connect endpoint for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect PROJECT ID : the ID or project number of the Google Cloud project that contains the instance The following example shows a sample output for this command: gcloud sql instances describe myinstance \ --project = 12345 ... pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect to an instance using a write endpoint \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- Source ID: `site-docs-reference-3`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate the write endpoint If you create a new Cloud SQL instance, then Cloud SQL automatically creates the write endpoint when the following prerequisites are met: The following APIs must be enabled in the Google Cloud project where your Cloud SQL instance resides: Compute Engine API Cloud DNS API Failure to enable the Cloud DNS API in the project leads to the failure to create the peering DNS zone which will make the DNS names unusable.
- The private IP address pointed to by the write endpoint is automatically changed by Cloud SQL when you perform a replica failover or switchover operation to promote a replica instance to be the new primary instance.
- In the case of a replica failover or switchover operation, this write endpoint redirects incoming connections to the new primary instance automatically.
- To create a write endpoint, Cloud SQL performs the following setup: Creates a private DNS zone in the service Cloud SQL producer VPC network Creates a peering DNS zone in the customer VPC network Creates a DNS record in the private DNS zone in the service producer network The following diagram illustrates how this process works: Figure 1.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service attachment When you create a Cloud SQL instance and configure the instance to use Private Service Connect, Cloud SQL creates a service attachment for the instance automatically.
- Create a Cloud SQL instance with Private Service Connect enabled for the instance and configure the instance to create an endpoint automatically.
- As a result, you can provision Private Service Connect endpoints automatically.
- The connection propagation feature in NCC benefits the following use case for Private Service Connect deployments: You can use a common services VPC network to create multiple Private Service Connect endpoints.

