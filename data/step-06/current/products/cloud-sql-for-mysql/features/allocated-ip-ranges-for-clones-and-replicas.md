---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.961Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Allocated IP ranges for clones and replicas"
feature_slug: "allocated-ip-ranges-for-clones-and-replicas"
latest_feature_date: "2022-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/clone-instance"
keywords:
  - "allocated"
  - "ip"
  - "ranges"
  - "clones"
  - "replicas"
  - "sql"
  - "lets"
  - "you"
---

# Allocated IP ranges for clones and replicas

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you select an allocated IP range for clones and replicas created from a primary instance that uses private IP.

## Extended Definition

Cloud SQL lets you select an allocated IP range for clones and replicas created from a primary instance that uses private IP.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Database minor version for read replicas, clones, and PITR When creating a read replica , you can specify the database minor version of the read replica.
- Couldn't find free blocks in allocated IP ranges.
- Learn more about allocated IP address ranges .
- After creating a new IP range, update the vpc peering with the following command: gcloud services vpc-peerings update \ --service = servicenetworking.googleapis.com \ --ranges = OLD RESERVED RANGE NAME , NEW RESERVED RANGE NAME \ --network = VPC NETWORK \ --project = PROJECT ID \ --force If you're expanding an existing allocation, take care to increase only the allocation range and not decrease it.

### Clone instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- Source ID: `site-docs-reference-3`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Couldn't find free blocks in allocated IP ranges.
- REST v1beta4 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example, google-managed-services-default . gcloud Clone the instance, optionally specifying the allocated IP range you want to use: gcloud sql instances clone SOURCE INSTANCE NAME TARGET INSTANCE NAME \ --allocated-ip-range-name ALLOCATED IP RANGE NAME The user or service account that's running the gcloud sql instances clone command must have the cloudsql.instances.clone permission.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The following flags are invalidated or impacted: --no-assign-ip: use this flag because instances with Private Service Connect enabled aren't supported to use other connectivity types such as external IP connections --authorized-networks: you can't use this flag to add authorized networks --network: you can't use this flag because it's associated with private services access --allocated-ip-range-name: you can't use this flag because allowed IP range names aren't supported You can't configure an instance that has Private Service Connect enabled to use private services access or external IP connections.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- Create a service connection policy A service connection policy lets you authorize a specified service class to create a Private Service Connect endpoint in your consumer VPC network.
- These IP addresses are allocated automatically and returned to the subnet's pool as managed service instances are created and deleted.

