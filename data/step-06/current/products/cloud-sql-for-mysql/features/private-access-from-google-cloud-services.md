---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.950Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Private access from Google Cloud services"
feature_slug: "private-access-from-google-cloud-services"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-functions"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access"
keywords:
  - "private"
  - "access"
  - "sql"
  - "mysql"
  - "supports"
  - "connectivity"
  - "lets"
  - "other"
---

# Private access from Google Cloud services

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports private connectivity that lets other Google Cloud services such as BigQuery access and query Cloud SQL data.

## Extended Definition

Cloud SQL for MySQL supports private connectivity that lets other Google Cloud services such as BigQuery access and query Cloud SQL data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)

## Supporting Pages

### "Connect from Cloud Run functions \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
- Source ID: `site-docs-reference-3`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Errorf ( "sql.Open: %w" , err ) } return dbPool , nil } Node.js To see this snippet in the context of a web application, view the README on GitHub . const mysql = require ( 'mysql2/promise' ); const { Connector } = require ( '@google-cloud/cloud-sql-connector' ); // In case the PRIVATE IP environment variable is defined then we set // the ipType=PRIVATE for the new connector instance, otherwise defaults // to public ip type. const getIpType = () = > process . env .
- URL . create ( drivername = "mysql+pymysql" , username = db user , password = db pass , database = db name , query = { "unix socket" : unix socket path }, ), ... ) return pool Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Fatalf ( "Fatal Error in connect connector.go: %s environment variable not set." , k ) } return v } // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep passwords and other secrets safe. var ( dbUser = mustGetenv ( "DB USER" ) // e.g. 'my-db-user' dbPwd = mustGetenv ( "DB PASS" ) // e.g. 'my-db-password' dbName = mustGetenv ( "DB NAME" ) // e.g. 'my-database' instanceConnectionName = mustGetenv ( "INSTANCE CONNECTION NAME" ) // e.g. 'project:region:instance' usePrivate = os .
- PRIVATE IP === 'true' ? 'PRIVATE' : 'PUBLIC' ; // connectWithConnector initializes a connection pool for a Cloud SQL instance // of MySQL using the Cloud SQL Node.js Connector. const connectWithConnector = async config = > { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. const connector = new Connector (); const clientOpts = await connector . getOptions ({ instanceConnectionName : process . env .

### "Configure both private services access and Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To create an instance with both private services access and Private Service Connect enabled, use the google sql database instance Terraform resource . resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" depends on = [google service networking connection.default] settings { tier = "db-f1-micro" ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "192.168.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For more information, see Create a Private Service Connect endpoint . gcloud To create an instance that supports both private services access and Private Service Connect, use the gcloud sql instances create command: gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --tier = MACHINE TYPE \ --database-version = DATABASE VERSION \ --network = VPC PSA NETWORK PATH \ --enable-bin-log \ --psc-auto-connections = network = VPC PSC NETWORK PATH ,project = SERVICE PROJECT Make the following replacements: INSTANCE NAME : the name of the instance.
- If you set the optional enablePrivatePathForGoogleCloudServices parameter to true , then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over an internal IP connection.
- Create a instance that supports private services access and Private Service Connect By creating a Cloud SQL instance that supports both private services access and Private Service Connect, you get the benefits of both services.

### "Configure private services access \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- Source ID: `site-docs-reference-3`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage a private services access connection: compute.addresses.create compute.addresses.list compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.list compute.networks.list compute.networks.use servicenetworking.services.addPeering serviceusage.services.list You might also be able to get these permissions with custom roles or other predefined roles .
- Configure private services access for Cloud SQL Important: When you create a private connection between your VPC network and the Cloud SQL service, it becomes available for use by any Google service that supports private services access.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure private services access Stay organized with collections Save and categorize content based on your preferences.
- If you later delete the private connection, you remove private connectivity to your Cloud SQL instances and any other service that is using that connection .

