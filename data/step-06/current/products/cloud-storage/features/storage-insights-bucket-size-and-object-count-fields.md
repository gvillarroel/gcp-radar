---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.878Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Insights bucket size and object count fields"
feature_slug: "storage-insights-bucket-size-and-object-count-fields"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
keywords:
  - "storage"
  - "insights"
  - "bucket"
  - "size"
  - "and"
  - "object"
  - "count"
  - "fields"
---

# Storage Insights bucket size and object count fields

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage Insights bucket attribute views include objectCount and totalSize fields for bucket inventory reporting.

## Extended Definition

Storage Insights bucket attribute views include objectCount and totalSize fields for bucket inventory reporting.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)

## Supporting Pages

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To update the bucket's IP filter, create and assign a new IPFilter object to this property and then call xref patch. .. code-block:: python from google.cloud.storage.ip filter import ( IPFilter, PublicNetworkSource, ) ip filter = IPFilter() ip filter.mode = "Enabled" ip filter.public network source = PublicNetworkSource( allowed ip cidr ranges=["203.0.113.5/32"] ) bucket.ip filter = ip filter bucket.patch() :setter: Set the IP Filter configuration for this bucket. :getter: Gets the IP Filter configuration for this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/access-logs#status Returns Type Description dict or None a dict w/ keys, logBucket and logObjectPrefix (if logging is enabled), or None (if not). get notification get notification ( notification id , client = None , timeout = 60 , retry = google . api core . retry . retry unary .
- See https://cloud.google.com/storage/docs/ip-filtering-overview and https://cloud.google.com/storage/docs/json api/v1/buckets#ipFilter Note: The getter for this property returns an xref IPFilter object, which is a structured representation of the bucket's IP filter configuration.

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- REST APIs JSON API curl -X GET "https://storage.googleapis.com/storage/v1/b/example bucket/o/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" XML API curl -X GET "https://storage.googleapis.com/example bucket/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Signed URL requests curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host,x-goog-custom-audit-job,x-goog-custom-audit-user&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Note that the custom audit headers must also be included in X-Goog-SignedHeaders .
- Example header entries The following list shows examples of key-value pairs you can include in header entries: x-goog-custom-audit-job: test-job-id-here x-goog-custom-audit-user: user ID test 1 x-goog-custom-audit-internal-user-id: MATR2022-11 x-goog-custom-audit-tracking-ticket: TT/1516512851 x-goog-custom-audit-justification: Removed customer identity record at customer request x-goog-custom-audit-customer-id: USCU12315154 Example requests Command line gcloud storage hash gs://example bucket/example object.jpeg --additional-headers=x-goog-custom-audit-job="job name",x-goog-custom-audit-user="test user" Client libraries C++ To learn how to add custom headers to requests, see Add custom headers .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Part Metadata Field Decorator A Decorator which is used to manipulate metadata fields, specifically on the part objects created in a Parallel Composite Upload See Also: #withPartMetadataFieldDecorator(PartMetadataFieldDecorator) com. google. cloud. storage.
- Logging The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs. com. google. cloud. storage.
- Instances of PostPolicyV4 include a URL and a map of fields that can be specified in an HTML form to submit a POST request to upload an object.
- Public Network Source The public network IP address ranges that can access the bucket and its data. com. google. cloud. storage.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- For example, the following query shows how to summarize the request methods that clients use to access resources in the logged bucket. project-name>SELECT cs method, COUNT( ) AS count FROM [storageanalysis.usage] GROUP BY cs method Example output from the query: Waiting on bqjob r1a6b4596bd9c29fb 000001437d6f8a52 1 ... (0s) Current status: DONE +-----------+-------+ cs method count +-----------+-------+ PUT 8002 GET 12631 POST 2737 HEAD 2173 DELETE 7290 +-----------+-------+ Quit the interactive shell of the bq tool. project-name> quit Disable logging Command line Disable logging with the --clear-log-bucket flag in the buckets update command: gcloud storage buckets update gs://example-bucket --clear-log-bucket To check that logging was successfully disabled, use the buckets describe command: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" If logging is disabled, the following is returned: null REST APIs JSON API Disable logging by sending a PATCH request to the bucket's logging configuration as shown in the following example.
- Your usage logs are in CSV format and have the following naming convention: OBJECT PREFIX usage TIMESTAMP ID v0 Similarly, storage logs are named using the following convention: OBJECT PREFIX storage TIMESTAMP ID v0 For example, the following is the name of a usage log object that uses the default object prefix, reports usage for the bucket named example-bucket , and was created on June 18, 2022 at 14:00 UTC: example-bucket usage 2022 06 18 14 00 00 1702e6 v0 Similarly, the following is the name of the storage log object that uses the default object prefix and was created on June 18, 2022 for the same bucket: example-bucket storage 2022 06 18 07 00 00 1702e6 v0 To download logs: Console In the Google Cloud console, go to the Cloud Storage Buckets page.
- The following steps describe how to set up log delivery for a bucket: Command line Grant Cloud Storage the roles/storage.objectCreator role for the bucket: gcloud storage buckets add-iam-policy-binding gs://example-logs-bucket --member=group:cloud-storage-analytics@google.com --role=roles/storage.objectCreator The role gives Cloud Storage, in the form of the group cloud-storage-analytics@google.com , permission to create and store your logs as new objects.

