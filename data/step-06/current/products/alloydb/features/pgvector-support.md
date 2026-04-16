---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.527Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pgvector support"
feature_slug: "pgvector-support"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect"
  - "https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview"
  - "https://docs.cloud.google.com/alloydb/docs/user-grant-access"
keywords:
  - "pgvector"
  - "alloydb"
  - "supports"
  - "extension"
  - "performance"
  - "enhancements"
  - "vector"
  - "queries"
---

# pgvector support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports the pgvector extension with performance enhancements for vector queries and vector indexing using scalar quantization; AlloyDB supports the pgvector extension for working with vector data.

## Extended Definition

AlloyDB supports the pgvector extension with performance enhancements for vector queries and vector indexing using scalar quantization; AlloyDB supports the pgvector extension for working with vector data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/user-grant-access](https://docs.cloud.google.com/alloydb/docs/user-grant-access)

## Supporting Pages

### "Create and query an AlloyDB database using the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect](https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and connect to an AlloyDB database: compute.networks.list compute.networks.addPeering compute.addresses.create servicenetworking.services.addPeering alloydb.clusters.create alloydb.instances.create alloydb.instances.login You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to create and connect to an AlloyDB database, ask your administrator to grant you the following IAM roles on your project: Compute Network Admin ( roles/compute.networkAdmin ) AlloyDB Admin ( roles/alloydb.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a cluster and its primary AlloyDB instance Note: To quickly set up a cluster, instance, and network for your development environment using a web interface, follow the steps in this codelab .
- The Compute Engine API and Cloud Resource Manager API are required if you plan to configure network connectivity to AlloyDB using a VPC network that resides in a different Google Cloud project.

### "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How the AlloyDB Auth Proxy authorizes IAM principals To authorize a client's connection to an AlloyDB instance, the Auth Proxy client authenticates to Google Cloud using IAM principal credentials on the client, and then validates that the IAM principal has the Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) IAM roles.
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- If the service account has the Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Identity and Access Management (IAM) roles for the AlloyDB instance, the Auth Proxy client authenticates successfully.
- Secure, encrypted communication: The Auth Proxy automatically creates, uses, and maintains a mutual TLS (mTLS) 1.3 connection using a 256-bit AES cipher between your client and an AlloyDB instance to verify client and server identities and encrypt data traffic.

### "Grant access to other users \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/user-grant-access](https://docs.cloud.google.com/alloydb/docs/user-grant-access)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Depending on the scope of control you want the account to have, you grant it one of these predefined IAM roles: roles/alloydb.admin (Cloud AlloyDB Admin) to grant full control for all AlloyDB resources roles/alloydb.client (Cloud AlloyDB Client) and roles/serviceusage.serviceUsageConsumer (Service Usage Consumer) to grant connectivity access to AlloyDB instances from clients connecting with the AlloyDB Auth proxy roles/alloydb.databaseUser (Cloud AlloyDB Database User) to grant database-user authentication to AlloyDB instances roles/alloydb.viewer (Cloud AlloyDB Viewer) to grant read-only access to all AlloyDB resources For detailed information about the specific IAM permissions these roles provide, see Predefined AlloyDB IAM roles .
- Use the add-iam-policy-binding command to grant an AlloyDB predefined role to an IAM principal (user account or service account). gcloud projects add-iam-policy-binding PROJECT ID \ --member= PRINCIPAL \ --role= ALLOYDB ROLE PROJECT ID : The ID of the project enabled to access AlloyDB.
- The value must be one of the following: roles/alloydb.admin roles/alloydb.viewer roles/alloydb.client and roles/serviceusage.serviceUsageConsumer roles/alloydb.databaseUser For details about the permissions these roles grant, see Predefined AlloyDB IAM roles .
- PRINCIPAL : The type and email ID (email address) of the principal: For user accounts: user: EMAIL ID For service accounts: serviceAccount: EMAIL ID ALLOYDB ROLE : The role you want to grant the principal.

