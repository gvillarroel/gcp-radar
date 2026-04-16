---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.991Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Access Transparency"
feature_slug: "access-transparency"
latest_feature_date: "2019-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-users"
keywords:
  - "access"
  - "transparency"
  - "sql"
  - "supports"
  - "logs"
  - "actions"
  - "staff"
  - "take"
---

# Access Transparency

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports Access Transparency logs for actions Google staff take when accessing customer data.

## Extended Definition

Cloud SQL supports Access Transparency logs for actions Google staff take when accessing customer data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)

## Supporting Pages

### Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access Approval complements the visibility provided by Access Transparency , which generates near-real-time audit logs when Google administrators interact with your data.
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- The audit logs include the office location of the administrator and the reason for the access.
- Each time one of your keys is requested to encrypt or decrypt data, Key Access Justifications provides a detailed justification, along with a mechanism for you to approve or deny key access using an automated policy that you set.

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Create a Private Service Connect endpoint . gcloud To create an instance that supports both private services access and Private Service Connect, use the gcloud sql instances create command: gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --tier = MACHINE TYPE \ --database-version = DATABASE VERSION \ --network = VPC PSA NETWORK PATH \ --enable-bin-log \ --psc-auto-connections = network = VPC PSC NETWORK PATH ,project = SERVICE PROJECT Make the following replacements: INSTANCE NAME : the name of the instance.
- Create a instance that supports private services access and Private Service Connect By creating a Cloud SQL instance that supports both private services access and Private Service Connect, you get the benefits of both services.
- You can create a Cloud SQL instance that supports private services access and Private Service Connect by using gcloud CLI or the API.
- Terraform To create an instance with both private services access and Private Service Connect enabled, use the google sql database instance Terraform resource . resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "192.168.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Manage users with built-in authentication \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
- Source ID: `site-docs-reference-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?name= USER ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2021-11-02T19:12:08.132Z", "startTime": "2021-11-02T19:12:08.132Z", "endTime": "2021-11-02T19:12:09.125Z", "operationType": "UPDATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } To view the user password policy, see List users . mysql Client To set a user password policy, at the mysql prompt, use the following ALTER USER statement: ALTER USER USER NAME FAILED LOGIN ATTEMPTS ALLOWED FAILED ATTEMPTS PASSWORD EXPIRE INTERVAL PASSWORD EXPIRATION DURATION DAY PASSWORD REQUIRE CURRENT ; Replace the following: USER NAME : The user name.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client To change the password, at the mysql prompt, use the following SET PASSWORD statement: SET PASSWORD FOR USER NAME = PASSWORD ( 'auth string' ); Flush the mysql.user table to ensure that the change persists: FLUSH TABLES mysql . user ; If a user is locked out due to password policy settings, change the password to unlock them.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users?host=&name= USERNAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "DELETE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } mysql Client To delete a user, at the mysql prompt, use the following DROP USER statement: DROP USER ' USER NAME ' @ ' HOST NAME ' ; Flush the mysql.user table to ensure that the change persists: FLUSH TABLES mysql . user ; Update user properties To update user properties such as host or privileges, you must use the mysql client.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-20T22:44:16.656Z", "startTime": "2025-10-20T22:44:16.686Z", "endTime": "2025-10-20T22:44:20.437Z", "operationType": "UPDATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Replace database roles for an existing user If you want to replace or remove database roles from the user, you must revoke all of their existing roles while specifying new database roles, if any.

