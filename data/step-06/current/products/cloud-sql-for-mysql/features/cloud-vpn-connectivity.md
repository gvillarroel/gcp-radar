---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.990Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud VPN connectivity"
feature_slug: "cloud-vpn-connectivity"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
keywords:
  - "vpn"
  - "connectivity"
  - "sql"
  - "can"
  - "used"
  - "network"
---

# Cloud VPN connectivity

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL can be used with Cloud VPN for network connectivity.

## Extended Definition

Cloud SQL can be used with Cloud VPN for network connectivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)

## Supporting Pages

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test with Connectivity Test Connectivity Test is a diagnostics tool that lets you check connectivity between endpoints in your network.
- To get a thread count, you can use: mysql> SHOW STATUS WHERE Variable name = 'Threads connected' ; You get output similar to the following: +-------------------+-------+ Variable name Value +-------------------+-------+ Threads connected 7 +-------------------+-------+ 1 row in set (0.08 sec) Connections timeout (from Compute Engine) Connections with a Compute Engine instance timeout after 10 minutes of inactivity, which can affect long-lived unused connections between your Compute Engine instance and your Cloud SQL instance.
- The following section includes examples of questions you can ask yourself to help further narrow down the issue: Connection issues checklist Connecting Private IP Have you enabled the Service Networking API for your project?
- For example: gcloud compute networks peerings update cloudsql-mysql-googleapis-com --network = NETWORK --export-subnet-routes-with-public-ip --project = PROJECT ID VPN troubleshooting See the Cloud VPN troubleshooting page.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/global/operations/operation- OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata", "createTime": "2024-05-23T16:43:49.313981473Z", "target": "projects/ PROJECT ID /locations/global/connectivityTests/ CONNECTIVITY TEST NAME ", "verb": "create", "cancelRequested": false, "apiVersion": "v1" }, "done": false } Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network.
- HTTP method and URL: POST https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME Request JSON body: { "source": { "ipAddress": " SOURCE IP ADDRESS ", "instance": " SOURCE INSTANCE ", "network": " SOURCE NETWORK " }, "destination": { "ipAddress": " DESTINATION IP ADDRESS ", "port": DESTINATION PORT , "network": " DESTINATION NETWORK ", "projectId": " PROJECT ID " }, "protocol": "TCP" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After expanding an existing IP range, update the vpc peering with following command: gcloud services vpc-peerings update \ --service = servicenetworking.googleapis.com --ranges = RESERVED RANGE NAME \ --network = VPC NETWORK \ --project = PROJECT ID \ --force Error message Troubleshooting (gcloud.sql.connect) It seems your client does not have ipv6 connectivity and the database instance does not have an ipv4 address.
- Authorized Networks are configured for public IP addresses in the Connectivity section of the Google Cloud console, and cloning isn't permitted due to security considerations .
- It can also be caused by intermittent connectivity issues.
- After creating a new IP range, update the VPC peering with the following command: gcloud services vpc-peerings update \ --service = servicenetworking.googleapis.com --ranges = OLD RESERVED RANGE NAME , NEW RESERVED RANGE NAME \ --network = VPC NETWORK --project = PROJECT ID \ --force If you're expanding an existing allocation, take care to only increase the allocation range and not decrease it.

