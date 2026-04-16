---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.518Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Cloud SQL Dialect Authentication with Application Default Credentials and Service Account Impersonation"
feature_slug: "cloud-sql-dialect-authentication-with-application-default-credentials-and-service-account-impersonation"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
keywords:
  - "sql"
  - "dialect"
  - "authentication"
  - "application"
  - "default"
  - "credentials"
  - "account"
  - "impersonation"
---

# Cloud SQL Dialect Authentication with Application Default Credentials and Service Account Impersonation

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL dialects on Looker (Google Cloud core) can connect using application default credentials and service account impersonation.

## Extended Definition

Cloud SQL dialects on Looker (Google Cloud core) can connect using application default credentials and service account impersonation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)

## Supporting Pages

### Admin settings - Google authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Setting up Google authentication in Looker (Google Cloud core) is covered on the Create an OAuth client and credentials for a Looker (Google Cloud core) instance and the Use Google OAuth for Looker (Google Cloud core) user authentication documentation pages.
- New Looker accounts that authenticate using Google OAuth cannot switch to password authentication, even if OAuth is disabled for the Looker instance.
- Feature overview Looker can perform authentication using Google OAuth for users that have accounts registered with Google Google Workspace.
- Disabling Google Auth once it has been enabled If you'd like to disable Google Authentication for your Looker instance after it has already been enabled, there are some things to think about: Users who were created before Google Authentication was added, and already setup a normal email login and password, will still function.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The script generates timestamped ZIP files in this folder." echo " --local-base-dir The local base directory for logs and temp files." echo "" echo "Optional Hive connection options:" echo " --host The hostname for the dumper connection." echo " --port The port number for the dumper connection." echo "" echo "To use Kerberos authentication, include the following options." echo "If --kerberos-authentication is specified, then --host, --port," echo "--hive-kerberos-url and --hiveql-rpc-protection are all required:" echo "" echo " --kerberos-authentication Enable Kerberos authentication." echo " --hive-kerberos-url The Hive Kerberos URL." echo " --hiveql-rpc-protection " echo " The hiveql-rpc-protection level, equal to the value of" echo " 'hadoop.rpc.protection' in '/etc/hadoop/conf/core-site.xml'," echo " with one of the following values:" echo " - authentication" echo " - integrity" echo " - privacy" echo "" echo "Other Options:" echo " -h, --help Display this help message and exit." exit 1 } This loop processes command-line options and overrides the default configuration. while [[ " $# " -gt 0 ]] ; do case $1 in --dumper-executable ) DUMPER EXECUTABLE = " $2 " shift # past argument shift # past value ;; --gcs-base-path ) GCS BASE PATH = " $2 " shift shift ;; --local-base-dir ) LOCAL BASE DIR = " $2 " shift shift ;; --host ) DUMPER HOST = " $2 " shift shift ;; --port ) DUMPER PORT = " $2 " shift shift ;; --hive-kerberos-url ) HIVE KERBEROS URL = " $2 " shift shift ;; --hiveql-rpc-protection ) HIVEQL RPC PROTECTION = " $2 " shift shift ;; --kerberos-authentication ) KERBEROS AUTHENTICATION = "true" shift ;; -h --help ) usage ;; ) echo "Unknown option: $1 " usage ;; esac done This runs AFTER parsing arguments to ensure no placeholder values are left. if [[ " $DUMPER EXECUTABLE " == "DUMPER PATH" " $GCS BASE PATH " == "gs://PATH TO DUMPER OUTPUT" " $LOCAL BASE DIR " == "LOCAL BASE DIRECTORY PATH" ]] ; then echo "ERROR: One or more configuration variables have not been set.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- To authenticate with Google Cloud to allow gsutil to upload files to Cloud Storage, run the following command: gcloud auth application-default login Scheduling the automation Save the following script to a local file.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- If you are logged in to Looker using LDAP and want to disable LDAP authentication, be careful to first do both of the following steps: Ensure that you have other credentials to sign in.
- Test user information Enter a test user's credentials and click the Test User Authentication button.
- Connection authentication Looker requires access to an LDAP account that is password-protected.
- This defaults to dn (meaning that leaving it blank is the same as setting it to dn ), which will result in LDAP using the full Distinguished Name, which is the exact case-sensitive string that would exist in the LDAP search itself, to search Group entries.

