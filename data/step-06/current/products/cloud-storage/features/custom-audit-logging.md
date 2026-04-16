---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.920Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Custom audit logging"
feature_slug: "custom-audit-logging"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "custom"
  - "audit"
  - "logging"
  - "lets"
  - "storage"
  - "requests"
  - "attach"
  - "user"
---

# Custom audit logging

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs.

## Extended Definition

Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST APIs JSON API curl -X GET "https://storage.googleapis.com/storage/v1/b/example bucket/o/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" XML API curl -X GET "https://storage.googleapis.com/example bucket/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Signed URL requests curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host,x-goog-custom-audit-job,x-goog-custom-audit-user&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Note that the custom audit headers must also be included in X-Goog-SignedHeaders .
- Example header entries The following list shows examples of key-value pairs you can include in header entries: x-goog-custom-audit-job: test-job-id-here x-goog-custom-audit-user: user ID test 1 x-goog-custom-audit-internal-user-id: MATR2022-11 x-goog-custom-audit-tracking-ticket: TT/1516512851 x-goog-custom-audit-justification: Removed customer identity record at customer request x-goog-custom-audit-customer-id: USCU12315154 Example requests Command line gcloud storage hash gs://example bucket/example object.jpeg --additional-headers=x-goog-custom-audit-job="job name",x-goog-custom-audit-user="test user" Client libraries C++ To learn how to add custom headers to requests, see Add custom headers .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --headers=x-goog-custom-audit-job:"job name",x-goog-custom-audit-user="test user" You can also use client libraries to generate the signed URL when you set custom headers .

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- For example, the following query shows how to summarize the request methods that clients use to access resources in the logged bucket. project-name>SELECT cs method, COUNT( ) AS count FROM [storageanalysis.usage] GROUP BY cs method Example output from the query: Waiting on bqjob r1a6b4596bd9c29fb 000001437d6f8a52 1 ... (0s) Current status: DONE +-----------+-------+ cs method count +-----------+-------+ PUT 8002 GET 12631 POST 2737 HEAD 2173 DELETE 7290 +-----------+-------+ Quit the interactive shell of the bq tool. project-name> quit Disable logging Command line Disable logging with the --clear-log-bucket flag in the buckets update command: gcloud storage buckets update gs://example-bucket --clear-log-bucket To check that logging was successfully disabled, use the buckets describe command: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" If logging is disabled, the following is returned: null REST APIs JSON API Disable logging by sending a PATCH request to the bucket's logging configuration as shown in the following example.
- Here's an example of a modified log file: "bucket","storage byte hours","filename" "example-bucket","5532482018","example-bucket storage 2014 01 05 08 00 00 021fd v0" When you load the storage usage logs into BigQuery, load your locally modified logs and use the customized schema. for f in example-bucket storage\ ; \ do ./bq.py load --skip leading rows=1 storageanalysis.storage $f ./cloud storage storage schema custom.json; done Query logs in BigQuery Once your logs are loaded into BigQuery, you can query your usage logs to return information about your logged bucket(s).
- A response might look similar to the following: { "logging": { "logBucket": "example-logs-bucket", "logObjectPrefix": "log object prefix" } } If logging is not enabled, an empty configuration is returned: {} XML API Send a GET Bucket request for the bucket's logging configuration as shown in the following example: GET / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com If logging is enabled, the server sends the configuration in the response.

### Class Client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- Source ID: `site-python-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Note this is only used when a custom endpoint is set in conjunction. extra headers dict (Optional) Custom headers to be sent with the requests attached to the client.
- For example, you can add custom audit logging headers. api key string (Optional) An API key.
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 Client ( project = object , credentials = None , http = None , client info = None , client options = None , use auth w custom endpoint = True , extra headers = {}, , api key = None ) Client to bundle configuration needed for API requests.
- See requests.Session.request documentation for details. if metageneration match Optional[int] Make the operation conditional on whether the bucket's current metageneration matches the given value. if metageneration not match Optional[int] Make the operation conditional on whether the bucket's current metageneration does not match the given value. retry Optional[Union[google.api core.retry.Retry, google.cloud.storage.retry.ConditionalRetryPolicy ]] How to retry the RPC.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.
- The custom endpoint must support the equivalent resources and operations as the Cloud Storage gRPC endpoint, storage.googleapis.com:443 , or the Cloud Storage JSON endpoint, https://storage.googleapis.com/storage/v1 .
- 0 --key-file Specifies an absolute path to the credential JSON key file for authenticating requests to Cloud Storage.

