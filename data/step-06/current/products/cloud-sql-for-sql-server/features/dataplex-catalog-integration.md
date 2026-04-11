---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.654Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Dataplex Catalog integration"
feature_slug: "dataplex-catalog-integration"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries"
keywords:
  - "dataplex"
  - "catalog"
  - "integration"
  - "sql"
  - "integrates"
  - "with"
  - "for"
  - "searching"
---

# Dataplex Catalog integration

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL integrates with Dataplex Catalog for searching and managing Cloud SQL resources.

## Extended Definition

Cloud SQL integrates with Dataplex Catalog for searching and managing Cloud SQL resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the integration of Cloud SQL and Dataplex Catalog, see Manage your Cloud SQL resources using Dataplex Catalog .
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- June 28, 2021 Feature Integration of SQL Server with Managed Service for Microsoft Active Directory is generally available .

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To create a service account with gcloud , run the following command: gcloud beta services identity create --service = sqladmin.googleapis.com \ --project = PROJECT NUMBER That command returns a service account name in the following format: service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com Here is an example of a service account name: service-333445@gcp-sa-cloud-sql.iam.gserviceaccount.com Granting the necessary permission for integration requires existing permissions.
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- Integrating Cloud SQL for SQL Server with an AD domain has the additional advantage of Cloud integration with your on-premises AD domains.
- MySQL PostgreSQL SQL Server You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory (also called Managed Microsoft AD).

### "Client libraries and sample code for Cloud SQL \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Items , nil } Java For the Client Library for Java , you can optionally specify the service path directly. // Set up global SQLAdmin instance. client = new SQLAdmin.Builder(httpTransport, JSON FACTORY, credential) .setApplicationName(APPLICATION NAME).build(); InstancesListResponse resp = client.instances().list("PROJECT ID").execute(); List<DatabaseInstance> list = resp.getItems(); for (DatabaseInstance d : list) { System.out.println(d.getName()); } JavaScript For the Client Library for JavaScript , specify sqladmin to build a client. gapi.client.load(' sqladmin ', 'v1beta4', function() { console.log('loaded');}); gapi.client.sql.instances.list({'project': PROJECT ID}).execute(showResult); function showResult(result) { // Process the result. }; Python For the Client Library for Python , specify sqladmin to build a client. from googleapiclient import discovery Construct the service object for the interacting with the Cloud SQL Admin API. service = discovery.build(' sqladmin ', 'v1beta4', http=http) req = service.instances().list(project="PROJECT ID") resp = req.execute() print(json.dumps(resp, indent=2)) The service object queries the discovery document and uses the correct service path, in this case, "sql/v1beta4/projects/".
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Client libraries and sample code for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- List ( request )) { if ( ! database ) throw std :: move ( database ). status (); std :: cout << database - > DebugString () << " \n " ; } return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Java For the Client Library for Java , you can optionally specify the service path directly. // Set up global SQLAdmin instance. client = new SQLAdmin.Builder(httpTransport, JSON FACTORY, credential) .setServicePath(" sql/v1beta4/ ") .setApplicationName(APPLICATION NAME).build(); InstancesListResponse resp = client.instances().list("PROJECT ID").execute(); List<DatabaseInstance> list = resp.getItems(); for (DatabaseInstance d : list) { System.out.println(d.getName()); } Go For the Client Library for Go , import the sqladmin package. func ListInstances ( projectId string ) ([] sqladmin .
- C++ For the C++ Client Library , follow Setting up a C++ development environment to install the library. #include "google/cloud/sql/v1/sql instances client.h" #include "google/cloud/project.h" #include <iostream> int main ( int argc , char argv []) try { if ( argc != 2 ) { std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ; return 1 ; } namespace sql = :: google :: cloud :: sql v1 ; auto client = sql :: SqlInstancesServiceClient ( sql :: MakeSqlInstancesServiceConnectionRest ()); google :: cloud :: sql :: v1 :: SqlInstancesListRequest request ; request . set project ( argv [ 1 ]); for ( auto database : client .

