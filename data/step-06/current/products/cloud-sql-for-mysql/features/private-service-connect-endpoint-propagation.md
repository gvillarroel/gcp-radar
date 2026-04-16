---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.894Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private Service Connect endpoint propagation"
feature_slug: "private-service-connect-endpoint-propagation"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "endpoint"
  - "propagation"
  - "uses"
  - "network"
  - "connectivity"
  - "center"
---

# Private Service Connect endpoint propagation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across a VPC network; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Extended Definition

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across a VPC network; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/global/operations/operation- OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata", "createTime": "2024-05-23T16:43:49.313981473Z", "target": "projects/ PROJECT ID /locations/global/connectivityTests/ CONNECTIVITY TEST NAME ", "verb": "create", "cancelRequested": false, "apiVersion": "v1" }, "done": false } Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network.
- When testing connectivity to a Cloud SQL instance with Private Service Connect enabled , you can't set the following items: The instance's internal IP address or DNS name as the destination directly The instance as the source The IP address of the Private Service Connect endpoint as the source IP-based allowlisting by using authorized networks isn't supported.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, by propagating Private Service Connect endpoints through the Network Connectivity Center hub , these endpoints can be reachable by any other spoke VPC network in the same hub.
- The connection propagation feature in NCC benefits the following use case for Private Service Connect deployments: You can use a common services VPC network to create multiple Private Service Connect endpoints.
- To learn how to use the NCC hub to propagate Private Service Connect endpoints to spoke VPC networks, see the NCC—Private Service Connect propagation codelab .
- Private Service Connect endpoint propagation By default, Private Service Connect connections aren't transitive from peered VPC networks.

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Create a Private Service Connect endpoint . gcloud To create an instance that supports both private services access and Private Service Connect, use the gcloud sql instances create command: gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --tier = MACHINE TYPE \ --database-version = DATABASE VERSION \ --network = VPC PSA NETWORK PATH \ --enable-bin-log \ --psc-auto-connections = network = VPC PSC NETWORK PATH ,project = SERVICE PROJECT Make the following replacements: INSTANCE NAME : the name of the instance.
- Note: Private Service Connect endpoints are internal IP addresses in a VPC network, which clients in that network can access directly.
- VPC PSC NETWORK PATH : the path to the VPC network from where the Private Service Connect endpoint needs to be created.
- VPC PSC NETWORK PATH : the path to the VPC network from where the Private Service Connect endpoint needs to be created.

