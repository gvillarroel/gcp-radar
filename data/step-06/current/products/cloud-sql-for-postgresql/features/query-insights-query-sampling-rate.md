---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.805Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Query Insights query sampling rate"
feature_slug: "query-insights-query-sampling-rate"
latest_feature_date: "2022-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
keywords:
  - "rate"
  - "configure"
  - "insights"
  - "sampling"
  - "query"
  - "used"
  - "lets"
---

# Query Insights query sampling rate

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Query Insights lets you configure the sampling rate used for collected query data.

## Extended Definition

Query Insights lets you configure the sampling rate used for collected query data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- Integration with Vertex AI --enable-google-ml-integration Enables Cloud SQL instances to connect to Vertex AI to pass requests for real-time predictions and insights to the AI. --database-flags cloudsql.enable google ml integration=on By turning this flag on, Cloud SQL can integrate with Vertex AI.
- The range name should comply with RFC-1035 and be within 1-63 characters. ( gcloud alpha sql instances create ). --enable-google-private-path : If you use this parameter, then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private connection.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Client IP-based control, logging, and metrics aren't supported for Query and System insights.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "RUNNING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "startTime": "2023-06-14T18:48:35.499Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Get the service attachment After creating a Cloud SQL instance with Private Service Connect enabled, get the service attachment URI and use it to create the Private Service Connect endpoint. gcloud To view summary information about an instance with Private Service Connect enabled, such as the pscServiceAttachmentLink field which displays the URI that points to the service attachment of the instance, use the gcloud sql instances describe command: gcloud sql instances describe INSTANCE NAME \ --project = PROJECT ID Note: The service attachment URI is used to create the Private Service Connect endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.
- For more information about best practices for private DNS zones, including how to allow on-premises hosts to query DNS records that are hosted in these zones, see Best practices for Cloud DNS private zones . gcloud To view summary information about a Cloud SQL instance, including the DNS name of the instance, use the gcloud sql instances describe command: gcloud sql instances describe INSTANCE NAME \ --project = PROJECT ID Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance PROJECT ID : the ID or project number of the Google Cloud project that contains the instance In the response, verify that the DNS name appears.

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Connect to an instance configured with privately used public IP addresses If your instance is configured in a privately used public IP address range and you want to connect to it, then enable import-subnet-routes-with-public-ip on the network peering between your network and the Cloud SQL network. gcloud compute networks peerings update cloudsql-postgres-googleapis-com \ --network = VPC NETWORK NAME \ --import-subnet-routes-with-public-ip \ --project = PROJECT ID Replace the following: cloudsql-postgres-googleapis-com is a Private Service Connection name from your VPC network page.
- Connect from privately used public IP addresses If you want to configure your instance in a privately used public IP address range, then enable export-subnet-routes-with-public-ip on the network peering between your network and the Cloud SQL network. gcloud compute networks peerings update cloudsql-postgres-googleapis-com \ --network = VPC NETWORK NAME \ --export-subnet-routes-with-public-ip \ --project = PROJECT ID Replace the following: cloudsql-postgres-googleapis-com is a Private Service Connection name from your VPC network page.
- Local routes for a destination are used even though the Cloud SQL peering is configured to import custom routes from your VPC network.
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --database-version = DATABASE VERSION \ --cpu = NUMBER OF CPU \ --memory = MEMORY IN GB \ --region = REGION NAME \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "private-ip-sql-instance" region = "us-central1" database version = "POSTGRES 14" depends on = [google service networking connection.default] settings { tier = "db-custom-2-7680" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } [START cloud sql postgres instance private ip dns] Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.id dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

