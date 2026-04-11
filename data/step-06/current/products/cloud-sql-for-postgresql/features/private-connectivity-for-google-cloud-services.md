---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.379Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Private connectivity for Google Cloud services"
feature_slug: "private-connectivity-for-google-cloud-services"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access"
keywords:
  - "private"
  - "connectivity"
  - "for"
  - "services"
  - "other"
  - "such"
  - "as"
  - "can"
---

# Private connectivity for Google Cloud services

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Other Google Cloud services such as BigQuery can access and query Cloud SQL for PostgreSQL data over a private connection.

## Extended Definition

Other Google Cloud services such as BigQuery can access and query Cloud SQL for PostgreSQL data over a private connection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "RUNNING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "startTime": "2023-06-14T18:48:35.499Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Get the service attachment After creating a Cloud SQL instance with Private Service Connect enabled, get the service attachment URI and use it to create the Private Service Connect endpoint. gcloud To view summary information about an instance with Private Service Connect enabled, such as the pscServiceAttachmentLink field which displays the URI that points to the service attachment of the instance, use the gcloud sql instances describe command: gcloud sql instances describe INSTANCE NAME \ --project = PROJECT ID Note: The service attachment URI is used to create the Private Service Connect endpoint.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the DNS zone ZONE NAME : the name of the zone DESCRIPTION : a description of the zone (for example, a DNS zone for the Cloud SQL instance) DNS NAME : the name of the DNS suffix for the zone, such as REGION NAME .sql.goog. (where REGION NAME is the region name for the zone) NETWORK NAME : the name of the VPC network HTTP method and URL: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones Request JSON body: { "name": " ZONE NAME ", "description": " DESCRIPTION ", "dnsName": " DNS NAME ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK NAME " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies?serviceConnectionPolicyId= POLICY NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.networkconnectivity.v1.OperationMetadata", "createTime": "2023-08-15T16:59:29.236110917Z", "target": "projects/ PROJECT ID /locations/ REGION /serviceConnectionPolicies/ POLICY NAME ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } Create a Cloud SQL instance You can create an instance with Private Service Connect enabled for the instance and configure the instance to create endpoints automatically by using gcloud CLI or the API.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- December 15, 2022 Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for PostgreSQL and make queries against this data over a private connection.
- October 21, 2024 Feature You can now create a read replica for an instance that has private services access configured for it and connector enforcement enabled for it.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) December 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.

### "Configure private services access \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check whether the operation was successful. gcloud services vpc-peerings operations describe \ --name = OPERATION ID You can specify more than one allocated range when you create a private connection.
- The following example allocates an IP range that allows resources in the VPC network my-vpc-network to connect to Cloud SQL instances using private IP. gcloud compute addresses create google-managed-services-my-vpc-network \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --network = projects/myprojectid/global/networks/myvpcnetwork \ --project = my-project Terraform To allocate an IP address range, use a Terraform resource . resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage a private services access connection: compute.addresses.create compute.addresses.list compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.list compute.networks.list compute.networks.use servicenetworking.services.addPeering serviceusage.services.list You might also be able to get these permissions with custom roles or other predefined roles .
- If you see an error about either the compute.globalAddresses.list permission or the compute.projects.get permission for the project, run this gcloud command: gcloud projects add-iam-policy-binding HOST PROJECT NAME \ --member = serviceAccount:service- HOST PROJECT NUMBER @service-networking.iam.gserviceaccount.com \ --role = roles/servicenetworking.serviceAgent Change the private service access configuration You can change the allocated address range of a private service connection without modifying any existing Cloud SQL instances.

