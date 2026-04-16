---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.165Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker data source field count limits"
feature_slug: "looker-data-source-field-count-limits"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/use-a-service-account"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
keywords:
  - "looker"
  - "source"
  - "field"
  - "count"
  - "limits"
  - "table"
  - "charts"
  - "connected"
---

# Looker data source field count limits

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Table charts connected to a Looker data source can include up to 100 dimensions and 100 metrics.

## Extended Definition

Table charts connected to a Looker data source can include up to 100 dimensions and 100 metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/use-a-service-account](https://developers.google.com/looker-studio/connector/use-a-service-account)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)

## Supporting Pages

### Use a service account \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/use-a-service-account](https://developers.google.com/looker-studio/connector/use-a-service-account)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Accessing BigQuery with Looker Studio Advanced Services and a service account You are building a solution where your users will build dashboards from a BigQuery table.
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- The provided example demonstrates using a service account with Looker Studio Advanced Services for secure and controlled access to BigQuery data, consolidating billing and delegating access efficiently.
- Page Summary outlined flag Community Connectors can utilize service accounts for centralized resource access management, enabling data access delegation beyond user credentials.

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a service to see which of its resource types support allow policies: All services BigQuery Identity-Aware Proxy Access Context Manager Vertex AI BigQuery sharing API Gateway Apigee Apigee Registry App Hub Artifact Registry AutoML Backup and Disaster Recovery Chrome Enterprise Premium BigLake BigQuery Connection API BigQuery Data Policy BigQuery Reservation API Cloud Bigtable Admin API Binary Authorization Cloud Billing Cloud Build Cloud Deploy Cloud Run functions Cloud Key Management Service Resource Manager Cloud Tasks Compute Engine Cloud Config Manager API Customer Experience Insights Artifact Analysis Data Catalog Dataform Cloud Data Fusion Database Migration Service Knowledge Catalog Managed Service for Apache Spark Cloud Deployment Manager Discovery Engine Cloud DNS Cloud Domains Eventarc Backup for GKE GKE Hub Google Distributed Cloud Cloud Healthcare API Identity and Access Management Cloud Logging Managed Service for Microsoft Active Directory Dataproc Metastore AI Platform Network Connectivity Center Network Management API Network Security Network Services Notebooks Certificate Authority Service Pub/Sub Cloud Run Secret Manager Secure Source Manager Security Command Center Service Directory Service Management Spanner Cloud Storage Google Cloud VMware Engine Cloud Workstations Service Resources that accept allow policies BigQuery Datasets Routines Tables Identity-Aware Proxy All web services Individual web services Tunnel Tunnel instances Tunnel zones Web service types Web service versions Access Context Manager Access policies Vertex AI Datasets Entity types Feature groups Feature online stores Feature views Featurestores Models Notebook runtime templates Reasoning engines BigQuery sharing Data exchanges Listings Subscriptions API Gateway APIs Configs Gateways Apigee Deployments Environments Spaces Apigee Registry APIs Artifacts Deployments Documents Instances Runtime Specs Versions App Hub Applications Artifact Registry Repositories AutoML Datasets Locations Models Backup and Disaster Recovery Management servers Chrome Enterprise Premium App connections App connectors App gateways Applications Security gateways BigLake Catalogs Namespaces Tables BigQuery Connection API Connections BigQuery Data Policy Data policies BigQuery Reservation API Assignments Reservations Cloud Bigtable Admin API Authorized views Backups Instances Logical views Materialized views Schema bundles Tables Binary Authorization Attestors Policy Cloud Billing Billing accounts Cloud Build Connections Cloud Deploy Custom target types Delivery pipelines Deploy policies Targets Cloud Run functions Functions Cloud Key Management Service Crypto keys EKM config EKM connections Import jobs Key rings Resource Manager Folders Organizations Projects Tag keys Tag values Cloud Tasks Queues Compute Engine Backend buckets Backend services Disks Firewall policies Images Instance templates Instances Instant snapshot groups Instant snapshots Interconnect attachment groups Interconnect groups Licenses Machine images Network attachments Network firewall policies Node groups Node templates Region backend buckets Region backend services Region disks Region instant snapshot groups Region instant snapshots Region network firewall policies Region snapshots Reservation blocks Reservation sub-blocks Reservations Resource policies Service attachments Snapshots Storage pools Subnetworks Cloud Config Manager API Deployments Customer Experience Insights Authorized views Artifact Analysis Notes Occurrences Data Catalog Entry groups Policy tags Tag templates Taxonomies Dataform Folders Repositories Team folders Workspaces Cloud Data Fusion Instances Database Migration Service Connection profiles Conversion workspaces Migration jobs Objects Private connections Knowledge Catalog Aspect types Assets Attributes Categories Change requests Data attribute bindings Data domains Data products Data scans Data taxonomies Encryption configs Entry groups Entry link types Entry types Glossaries Governance rules Lakes Policy intents Tasks Terms Zones Managed Service for Apache Spark Autoscaling policies Clusters Jobs Operations Workflow templates Cloud Deployment Manager Deployments Discovery Engine Engines Cloud DNS Managed zones Cloud Domains Registrations Eventarc Channel connections Channels Enrollments Google API sources Message buses Pipelines Triggers Backup for GKE Backup plans Backups Restore plans Restores Volume backups Volume restores GKE Hub Features Memberships Scopes Google Distributed Cloud Bare metal admin clusters Bare metal clusters Bare metal node pools VMware admin clusters VMware clusters VMware node pools Cloud Healthcare API Consent stores Data mapper workspaces Datasets DICOM stores FHIR stores HL7v2 stores Identity and Access Management Service accounts Workforce identity pools Workload identity pools Cloud Logging Views Managed Service for Microsoft Active Directory Backups Domains Peerings Dataproc Metastore Backups Databases Federations Services Tables AI Platform Jobs Models Network Connectivity Center Groups Hubs Internal ranges Policy-based routes Spokes Network Management API Connectivity tests Network Security Address groups Authorization policies Authz policies Client TLS policies Server TLS policies Network Services Edge cache keysets Edge cache origins Edge cache services Notebooks Instances Runtimes Certificate Authority Service CA pools Certificate revocation lists Certificate templates Pub/Sub Schemas Snapshots Subscriptions Topics Cloud Run Jobs Services Worker pools Secret Manager Secrets Secure Source Manager Instances Repositories Security Command Center Sources Service Directory Namespaces Services Service Management Consumers Services Spanner Backup schedules Backups Databases Instances Cloud Storage Buckets Managed folders Google Cloud VMware Engine Clusters HCX activation keys Private clouds Cloud Workstations Workstation configs Workstations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Resource types that accept allow policies Stay organized with collections Save and categorize content based on your preferences.
- Note: Allow policies set on a parent resource (a project, folder, or organization) are inherited by the resource's children, regardless of the policy set on the child resource itself.
- This page lists the resource types on which you can set allow policies .

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).

