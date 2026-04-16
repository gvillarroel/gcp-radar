---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.793Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private connectivity for Google Cloud services"
feature_slug: "private-connectivity-for-google-cloud-services"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access"
keywords:
  - "such"
  - "other"
  - "connectivity"
  - "private"
  - "access"
  - "query"
---

# Private connectivity for Google Cloud services

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Other Google Cloud services such as BigQuery can access and query Cloud SQL for PostgreSQL data over a private connection.

## Extended Definition

Other Google Cloud services such as BigQuery can access and query Cloud SQL for PostgreSQL data over a private connection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private IP connection.
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private IP connection.
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private IP connection.
- If you set the enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private IP connection.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "RUNNING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "startTime": "2023-06-14T18:48:35.499Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Get the service attachment After creating a Cloud SQL instance with Private Service Connect enabled, get the service attachment URI and use it to create the Private Service Connect endpoint. gcloud To view summary information about an instance with Private Service Connect enabled, such as the pscServiceAttachmentLink field which displays the URI that points to the service attachment of the instance, use the gcloud sql instances describe command: gcloud sql instances describe INSTANCE NAME \ --project = PROJECT ID Note: The service attachment URI is used to create the Private Service Connect endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.

### "Configure private services access \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage a private services access connection: compute.addresses.create compute.addresses.list compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.list compute.networks.list compute.networks.use servicenetworking.services.addPeering serviceusage.services.list You might also be able to get these permissions with custom roles or other predefined roles .
- If you later delete the private connection, you remove private connectivity to your Cloud SQL instances and any other service that is using that connection .
- If you see an error about either the compute.globalAddresses.list permission or the compute.projects.get permission for the project, run this gcloud command: gcloud projects add-iam-policy-binding HOST PROJECT NAME \ --member = serviceAccount:service- HOST PROJECT NUMBER @service-networking.iam.gserviceaccount.com \ --role = roles/servicenetworking.serviceAgent Change the private service access configuration You can change the allocated address range of a private service connection without modifying any existing Cloud SQL instances.
- Move the Cloud SQL instance to the temporary VPC network. gcloud beta sql instances patch INSTANCE ID \ --project = PROJECT ID \ --network = projects/ PROJECT ID /global/networks/ TEMPORARY VPC NETWORK NAME \ --no-assign-ip Change the private service access configuration in the original network to add a new allocated range or delete existing ones.

