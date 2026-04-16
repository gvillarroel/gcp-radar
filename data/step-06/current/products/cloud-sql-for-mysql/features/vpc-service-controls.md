---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.989Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2019-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
keywords:
  - "vpc"
  - "controls"
  - "sql"
  - "supports"
  - "protect"
  - "admin"
  - "host"
  - "project"
---

# VPC Service Controls

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Extended Definition

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you're using Shared VPC , we recommend that you include the host project in a service perimeter along with any projects that belong to the Shared VPC.
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.
- Create a service perimeter During this procedure, you select the Cloud SQL projects that you want the VPC service perimeter to protect.
- For this scenario, when you enable VPC-SC, you must add the KMS key hosting project to the security perimeter.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.
- Use VPC Service Controls with the Cloud SQL Admin API VPC Service Controls let you create a service perimeter around the Cloud SQL Admin API to help mitigate data exfiltration.
- Enable the API To use the Cloud SQL Admin API, you need to enable it: Console Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-docs-reference-3`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles and permissions To get the permissions that you need to create and manage a private services access connection, ask your administrator to grant you the Compute Network Admin ( roles/compute.networkAdmin ) IAM role on on the project where you plan to host your Cloud SQL instance.
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "instance" { name = "private-ip-sql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.name dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Create a new instance with a private IP address: Before using any of the request data, make the following replacements: PROJECT ID: The project ID INSTANCE ID: The instance ID VPC NETWORK NAME: Specify the name of the Virtual Private Cloud (VPC) network that you want to use for this instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Connect to an instance using its Private IP You use private services access to connect to Cloud SQL instances from Compute Engine or Google Kubernetes Engine instances in the same VPC network (defined here as internal sources) or from outside of that network (an external source).

