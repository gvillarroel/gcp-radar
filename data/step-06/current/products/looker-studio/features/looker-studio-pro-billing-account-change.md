---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.123Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker Studio Pro billing account change"
feature_slug: "looker-studio-pro-billing-account-change"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/use-a-service-account"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
keywords:
  - "looker"
  - "studio"
  - "pro"
  - "billing"
  - "account"
  - "change"
  - "you"
  - "can"
---

# Looker Studio Pro billing account change

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

You can change the Google Cloud billing account for a Looker Studio Pro subscription without interrupting access to Pro assets.

## Extended Definition

You can change the Google Cloud billing account for a Looker Studio Pro subscription without interrupting access to Pro assets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/use-a-service-account](https://developers.google.com/looker-studio/connector/use-a-service-account)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)

## Supporting Pages

### Use a service account \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/use-a-service-account](https://developers.google.com/looker-studio/connector/use-a-service-account)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The provided example demonstrates using a service account with Looker Studio Advanced Services for secure and controlled access to BigQuery data, consolidating billing and delegating access efficiently.
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- Example: Accessing BigQuery with Looker Studio Advanced Services and a service account You are building a solution where your users will build dashboards from a BigQuery table.
- Home Products Looker Studio Community Connectors Use a service account Stay organized with collections Save and categorize content based on your preferences.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).
- Examples A Google Analytics configuration for a Universal Analytics property: https://lookerstudio.google.com/reporting/create? c.reportId=789ghi &ds.ds2.connector=googleAnalytics &ds.ds2.accountId=54516992 &ds.ds2.propertyId=UA-54516992-1 &ds.ds2.viewId=92320289 A Google Analytics configuration for a Google Analytics 4 property: https://lookerstudio.google.com/reporting/create? c.reportId=789ghi &ds.ds2.connector=googleAnalytics &ds.ds2.accountId=54516992 &ds.ds2.propertyId=213025502 Google Cloud Storage Parameter name Description ds. alias .connector link Optional.
- Example A Cloud Spanner configuration with a SQL statement: https://lookerstudio.google.com/reporting/create? c.reportId=456def &ds.ds1.connector=cloudSpanner &ds.ds1.projectId=myProject &ds.ds1.instanceId=production &ds.ds1.datasetId=transactions &ds.ds1.sql=SELECT%20accountId%2C%20date%2C%20revenue%20FROM%20sales%3B Community Connectors Parameter name Description ds. alias .connector link Optional.

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.

