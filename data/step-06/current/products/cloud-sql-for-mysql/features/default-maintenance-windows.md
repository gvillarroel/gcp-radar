---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.938Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Default maintenance windows"
feature_slug: "default-maintenance-windows"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "default"
  - "maintenance"
  - "windows"
  - "sql"
  - "assigns"
  - "window"
  - "outside"
  - "typical"
---

# Default maintenance windows

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL assigns a default maintenance window outside typical business hours when no user-specified maintenance window is set.

## Extended Definition

Cloud SQL assigns a default maintenance window outside typical business hours when no user-specified maintenance window is set.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Configure public IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- Source ID: `site-docs-reference-required-5`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address ", "name": " ip-address-name ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [], "ipv4Enabled": false }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?host=%25&name=root" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

