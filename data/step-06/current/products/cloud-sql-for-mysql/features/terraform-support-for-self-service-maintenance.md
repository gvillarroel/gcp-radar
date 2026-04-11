---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.895Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Terraform support for self-service maintenance"
feature_slug: "terraform-support-for-self-service-maintenance"
latest_feature_date: "2022-10-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ip"
keywords:
  - "terraform"
  - "for"
  - "self"
  - "maintenance"
  - "sql"
  - "supports"
---

# Terraform support for self-service maintenance

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL self-service maintenance supports Terraform.

## Extended Definition

Cloud SQL self-service maintenance supports Terraform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- February 09, 2024 Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- September 29, 2022 Announcement Cloud SQL for MySQL now supports high-availability for self-service migration.
- July 18, 2023 Feature Cloud SQL now supports default maintenance windows for your instances.
- October 04, 2022 Feature Terraform is supported when you use self-service maintenance .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2019-09-26T14:32:30.592Z", "startTime": "2019-09-26T14:32:30.594Z", "endTime": "2019-09-26T14:32:33.518Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Retrieve the IPv4 address Retrieve the automatically assigned IPv4 address for the new instance: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Set the password for the "root@%" MySQL user: gcloud sql users set-password root \ --host = % \ --instance INSTANCE NAME \ --password PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "mysql pvp instance name" { name = "mysql-pvp-instance-name" region = "asia-northeast1" database version = "MYSQL 8 0" root password = "abcABC123!" settings { tier = "db-f1-micro" password validation policy { min length = 6 complexity = "COMPLEXITY DEFAULT" reuse interval = 2 disallow username substring = true enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### Configure public IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type 4", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address1 ", "name": " ip-address-name1 ", "kind": "sql#aclEntry" }, { "value": " ip-address2 ", "name": " ip-address-name2 ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } Update the instance, by including all the addresses you want to keep and dropping off any addresses you want to remove: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 The authorized IP address or network range to remove HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address ", "name": " ip-address-name ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [], "ipv4Enabled": false }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

