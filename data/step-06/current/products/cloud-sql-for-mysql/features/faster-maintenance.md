---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.976Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Faster maintenance"
feature_slug: "faster-maintenance"
latest_feature_date: "2021-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ip"
keywords:
  - "faster"
  - "maintenance"
  - "sql"
  - "now"
  - "typically"
  - "causes"
  - "connectivity"
  - "drops"
---

# Faster maintenance

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL maintenance now typically causes connectivity drops of less than 60 seconds on average.

## Extended Definition

Cloud SQL maintenance now typically causes connectivity drops of less than 60 seconds on average.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Network connectivity issues with private IP instances You might experience some of the following issues during integration setup: Slow operations to create Microsoft Entra ID logins Unable to create Microsoft Entra ID logins Unable to connect to the instance using Microsoft Entra ID authentication For more information on how to help address these issues, see Troubleshooting Microsoft Entra ID integration .
- Authorized Networks are configured for public IP addresses in the Connectivity section of the Google Cloud console, and cloning is not permitted due to security considerations .
- The network attachment is unable to accept connections from the Private Service Connect interface when using Private Service Connect outbound connectivity .

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After expanding an existing IP range, update the vpc peering with following command: gcloud services vpc-peerings update \ --service = servicenetworking.googleapis.com --ranges = RESERVED RANGE NAME \ --network = VPC NETWORK \ --project = PROJECT ID \ --force Error message Troubleshooting (gcloud.sql.connect) It seems your client does not have ipv6 connectivity and the database instance does not have an ipv4 address.
- There can be many causes because authorization occurs at many levels: At the database level, the database user must exist and its password match At the project level, the user might not have the correct IAM permissions, including the serviceusage.services.use or cloudsql.instances.connect permissions.
- Authorized Networks are configured for public IP addresses in the Connectivity section of the Google Cloud console, and cloning isn't permitted due to security considerations .
- Access denied for user 'XXX'@'XXX' (using password: XXX) There could be several causes, including: The username (or password) is incorrect.

### Configure public IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- Source ID: `site-docs-reference-required-5`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address ", "name": " ip-address-name ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [], "ipv4Enabled": false }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

