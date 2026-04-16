---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.828Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private IP connectivity"
feature_slug: "private-ip-connectivity"
latest_feature_date: "2018-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
keywords:
  - "made"
  - "connectivity"
  - "generally"
  - "available"
  - "private"
---

# Private IP connectivity

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL made Private IP connectivity generally available; Cloud SQL for PostgreSQL added Beta support for Private IP connectivity using private services access.

## Extended Definition

Cloud SQL for PostgreSQL made Private IP connectivity generally available; Cloud SQL for PostgreSQL added Beta support for Private IP connectivity using private services access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To connect to Cloud SQL instances from an external network using Private IP connectivity, see Connect to a Cloud SQL instance from outside its VPC .
- Note : A write endpoint is available only for Cloud SQL Enterprise Plus edition instances that have private IP addresses and associated networks.
- Therefore, a connectivity path doesn't exist between Cloud Shell and the private IP address space of the your VPC network.
- After you configure an instance to use private IP, you cannot disable private IP connectivity for that instance.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/global/operations/operation- OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkmanagement.v1.OperationMetadata", "createTime": "2024-05-23T16:43:49.313981473Z", "target": "projects/ PROJECT ID /locations/global/connectivityTests/ CONNECTIVITY TEST NAME ", "verb": "create", "cancelRequested": false, "apiVersion": "v1" }, "done": false } Note: In addition to testing connectivity, you can restrict connectivity to Private Service Connect endpoints from service consumers in a VPC network.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } For troubleshooting information related to Private Service Connect outbound connectivity, see Private Service Connect troubleshooting .

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display the current tcp keepalive time value. cat /proc/sys/net/ipv4/tcp keepalive time Set tcp keepalive time to 60 seconds and make it permanent across reboots. echo 'net.ipv4.tcp keepalive time = 60' sudo tee -a /etc/sysctl.conf Apply the change. sudo /sbin/sysctl --load = /etc/sysctl.conf Display the tcp keepalive time value to verify the change was applied. cat /proc/sys/net/ipv4/tcp keepalive time Connect with IPv6 If you get either of the error messages Can't connect to MySQL server on '2001:1234::4321' (10051) Can't connect to MySQL server on '2001:1234::4321' (101) when you connect it is likely that you are attempting to connect to the IPv6 address of your instance but do not have IPv6 available on your workstation.
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- The following section includes examples of questions you can ask yourself to help further narrow down the issue: Connection issues checklist Connecting Private IP Have you enabled the Service Networking API for your project?
- It's highly encouraged to run tcpdump to capture and inspect the packets between your host and the Cloud SQL instances when you are debugging the connectivity problems.

