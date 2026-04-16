---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.825Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Connection organization policies"
feature_slug: "connection-organization-policies"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "organization"
  - "control"
  - "policies"
  - "connection"
  - "connectivity"
  - "instances"
  - "supports"
---

# Connection organization policies

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports organization policies that control connectivity to and from Cloud SQL instances.

## Extended Definition

Cloud SQL supports organization policies that control connectivity to and from Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- See Connection organization policies and Configuring the organization policy .
- Disallow or disable public IP for Cloud SQL instances To constrain data within the VPC for your Cloud SQL project, do not allow connections to Cloud SQL instances from public IPs.
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.

### "Configure VPC Service Controls \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- See Connection organization policies and Configuring the organization policy .
- Disallow or disable public IP for Cloud SQL instances To constrain data within the VPC for your Cloud SQL project, do not allow connections to Cloud SQL instances from public IPs.
- Optionally, add an organization policy that restricts public IP on instances in projects that use that policy.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- HTTP method and URL: POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME Request JSON body: { "description": " DESCRIPTION ", "network": "projects/ PROJECT ID /global/networks/ NETWORK ", "pscConfig": { "limit": " LIMIT ", "subnetworks": [ "projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET " ] }, "serviceClass": " SERVICE CLASS " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Click Create policy . gcloud To create a service connection policy, use the service-connection-policies create command . gcloud network-connectivity service-connection-policies create POLICY NAME \ --network= NETWORK \ --project= PROJECT ID \ --region= REGION \ --service-class= SERVICE CLASS \ --subnets=https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETS \ --psc-connection-limit= LIMIT \ --description=" DESCRIPTION " \ --producer-instance-location= PRODUCER INSTANCE LOCATION \ --allowed-google-producers-resource-hierarchy-level= RESOURCE HIERARCHY LEVEL Replace the following: POLICY NAME : the name of your service connection policy.
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.

