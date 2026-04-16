---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.875Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Insights activity datasets"
feature_slug: "storage-insights-activity-datasets"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist"
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-permissions"
keywords:
  - "storage"
  - "insights"
  - "activity"
  - "datasets"
  - "can"
  - "be"
  - "generated"
  - "for"
---

# Storage Insights activity datasets

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage Insights datasets can be generated for activity data to analyze object mutations, errors, and activity trends.

## Extended Definition

Storage Insights datasets can be generated for activity data to analyze object mutations, errors, and activity trends.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)

## Supporting Pages

### "Analyze your stored data with Gemini Cloud Assist \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can ask prompts such as the following: Prompts related to usage and cost savings: "5 largest buckets without Object Lifecycle Management" "5 largest buckets without Autoclass enabled" Prompts related to security and compliance: "5 largest buckets without object versioning enabled" "5 largest objects with a retention expiration date within the next 30 days" Prompts related to data discovery: "Buckets with a high volume of small files (each under 1 MB)" "Objects in Standard storage class smaller than 50 MB" Before you begin In order to use Gemini Cloud Assist for general prompts related to Cloud Storage, you must first set up Gemini Cloud Assist, including getting required roles.
- To get the permissions that you need to get insights on bucket and object metadata, ask your administrator to grant you the following IAM roles on the project, folder, or organization that contains the datasets you want to analyze: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Storage Insights Viewer ( roles/storageinsights.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The generated SQL query is similar to the following: SELECT oa.contentType, ROUND(sum(oa.size) / (1024 1024 1024), 2) AS total size gb FROM object attributes latest AS oa GROUP BY oa.contentType ORDER BY sum(oa.size) DESC; Data processing quotas When you run a prompt using Gemini Cloud Assist to get information about your data in Cloud Storage, Gemini Cloud Assist processes your datasets to provide answers to your prompts.
- The generated SQL query is similar to the following: SELECT bucket id, bucket size FROM buckets WHERE project id = 'example-project' ORDER BY bucket size DESC LIMIT 1; Optionally, you can enter suggested prompts: In the Google Cloud console, go to the Cloud Storage Storage Insights page.

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- In addition to audit logs for Cloud Storage, Cloud Audit Logs can create audit logs for Storage Insights.
- As an alternative to using signed headers, you can use query parameters to pass custom audit entries. curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Custom-Audit-Key=Value&X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' These query parameters must be included when you generate the signed URL .
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access Note: The part of the log name following /logs/ must be URL-encoded.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- For example, the following commands can be used in a Linux, macOS, or Windows (Cygwin) environment: gcloud storage cp gs://example-logs-bucket/example-bucket storage\ . for f in example-bucket storage\ ; do sed -i -e "1s/$/,\"filename\"/" -e "2s/$/,\""$f"\"/" $f; done The gcloud storage command copies the files into your working directory.
- For example, the following query shows how to summarize the request methods that clients use to access resources in the logged bucket. project-name>SELECT cs method, COUNT( ) AS count FROM [storageanalysis.usage] GROUP BY cs method Example output from the query: Waiting on bqjob r1a6b4596bd9c29fb 000001437d6f8a52 1 ... (0s) Current status: DONE +-----------+-------+ cs method count +-----------+-------+ PUT 8002 GET 12631 POST 2737 HEAD 2173 DELETE 7290 +-----------+-------+ Quit the interactive shell of the bq tool. project-name> quit Disable logging Command line Disable logging with the --clear-log-bucket flag in the buckets update command: gcloud storage buckets update gs://example-bucket --clear-log-bucket To check that logging was successfully disabled, use the buckets describe command: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" If logging is disabled, the following is returned: null REST APIs JSON API Disable logging by sending a PATCH request to the bucket's logging configuration as shown in the following example.
- It assumes that you modified the storage usage logs as described in Modifying the usage log schema and that the log files are named "log storage ". project-name>SELECT SUBSTRING(filename, 13, 10) as day, storage byte hours/24 as size FROM [storageanalysis.storage] ORDER BY filename LIMIT 100 Example output from the query: Waiting on bqjob r36fbf5c164a966e8 0000014379bc199c 1 ... (0s) Current status: DONE +------------+----------------------+ day size +------------+----------------------+ 2014 01 05 2.3052008408333334E8 2014 01 06 2.3012297245833334E8 2014 01 07 3.3477797120833334E8 2014 01 08 4.4183686058333334E8 +-----------------------------------+ If you did not modify the schema and are using the default schema, you can run the following query: project-name>SELECT storage byte hours FROM [storageanalysis.storage] LIMIT 100 Run a query against the usage log table.

### IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- This permission alone does not allow you to read IAM policies or IP filtering rules. storage.buckets.getIamPolicy Read bucket IAM policies. storage.buckets.getIpFilter Lists or reads the IP filtering rules on a bucket. storage.buckets.getObjectInsights Read object metadata for generating inventory reports and Storage Insights datasets . storage.buckets.list List buckets in a project including read bucket metadata.
- Storage Insights dataset permissions Dataset permission name Description storageinsights.datasetConfigs.create Create dataset configurations. storageinsights.datasetConfigs.delete Delete dataset configurations. storageinsights.datasetConfigs.linkDataset Create linked datasets in BigQuery that contain the output of Storage Insights datasets. storageinsights.datasetConfigs.unlinkDataset Remove linked datasets from BigQuery that contain the output of Storage Insights datasets. storageinsights.datasetConfigs.update Modify dataset configurations. storageinsights.datasetConfigs.get Get dataset configurations. storageinsights.datasetConfigs.list List dataset configurations.
- This also returns any contexts attached to the objects. storage.objects.move Move an object within a bucket with hierarchical namespace enabled. storage.objects.overrideUnlockedRetention Use the x-goog-bypass-governance-retention header or the overrideUnlockedRetention query parameter when working with object retention configurations . storage.objects.restore Restore objects that have been soft-deleted . storage.objects.setIamPolicy Update object ACLs. storage.objects.setRetention Add or update retentions for objects. storage.objects.update Update object metadata, excluding ACLs.
- Storage batch operations permissions Storage batch operations permission name Description storagebatchoperations.jobs.create Create storage batch operations jobs. storagebatchoperations.jobs.cancel Cancel storage batch operations jobs. storagebatchoperations.jobs.delete Delete storage batch operations jobs. storagebatchoperations.jobs.get Retrieve storage batch operations jobs. storagebatchoperations.jobs.list List storage batch operations jobs. storagebatchoperations.operations.get Retrieve long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.list List long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.cancel Cancel long-running operations associated with storage batch operations jobs. storagebatchoperations.operations.delete Delete long-running operations associated with storage batch operations jobs.

