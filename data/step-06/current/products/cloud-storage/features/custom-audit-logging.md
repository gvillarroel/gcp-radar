---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.744Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Custom audit logging"
feature_slug: "custom-audit-logging"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
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
Coverage: LOW

## Step 02 Summary

Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs.

## Extended Definition

Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST APIs JSON API curl -X GET "https://storage.googleapis.com/storage/v1/b/example bucket/o/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" XML API curl -X GET "https://storage.googleapis.com/example bucket/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Signed URL requests curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host,x-goog-custom-audit-job,x-goog-custom-audit-user&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Note that the custom audit headers must also be included in X-Goog-SignedHeaders .
- Example header entries The following list shows examples of key-value pairs you can include in header entries: x-goog-custom-audit-job: test-job-id-here x-goog-custom-audit-user: user ID test 1 x-goog-custom-audit-internal-user-id: MATR2022-11 x-goog-custom-audit-tracking-ticket: TT/1516512851 x-goog-custom-audit-justification: Removed customer identity record at customer request x-goog-custom-audit-customer-id: USCU12315154 Example requests Command line gcloud storage hash gs://example bucket/example object.jpeg --additional-headers=x-goog-custom-audit-job="job name",x-goog-custom-audit-user="test user" Client libraries C++ To learn how to add custom headers to requests, see Add custom headers .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --headers=x-goog-custom-audit-job:"job name",x-goog-custom-audit-user="test user" You can also use client libraries to generate the signed URL when you set custom headers .

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- In addition to using the Cloud Storage JSON API, you can now attach custom information to audit logs for requests by using the following tools: The gcloud or gsutil command-line tools The Cloud Storage client libraries The Cloud Storage XML API Signed URLs June 28, 2023 Change You can now have a maximum of 10 HMAC keys per service account.
- JSON API requests now support user-defined headers that are prefixed with x-goog-custom-audit- .
- July 07, 2023 Feature Custom audit logging for Cloud Storage is now generally available (GA) .
- May 11, 2023 Feature Custom audit logging for Cloud Storage is now available in Preview.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PUT / example-logs-bucket ?acl HTTP/1.1 Host: storage.googleapis.com <AccessControlList> <Entries> <Entry> <Scope type="GroupByEmail"> <EmailAddress>cloud-storage-analytics@google.com</EmailAddress> </Scope> <Permission>WRITE</Permission> </Entry> <!-- include other existing ACL entries here--> </Entries> </AccessControlList> Enable logging for your bucket using the logging query parameter: PUT / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com <Logging> <LogBucket> example-logs-bucket </LogBucket> <LogObjectPrefix> log object prefix </LogObjectPrefix> </Logging> Check logging status Command line Check logging by using the buckets describe command with the --format flag: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" You can also save the logging configurations to a file: gcloud storage buckets describe gs://example-bucket > your logging configuration file --format="default(logging config)" If logging is enabled, the server returns the logging configuration in the response: logging: logBucket: example-logs-bucket logObjectPrefix: log object prefix If logging is not enabled, the following is returned: null REST APIs JSON API Send a GET request for the bucket's logging configuration as shown in the following example: GET /s t orage/v 1 /b/ example - bucke t ? f ields=loggi n g Hos t : s t orage. googleapis.com If logging is enabled, the server sends the configuration in the response.
- For example, the following query shows how to summarize the request methods that clients use to access resources in the logged bucket. project-name>SELECT cs method, COUNT( ) AS count FROM [storageanalysis.usage] GROUP BY cs method Example output from the query: Waiting on bqjob r1a6b4596bd9c29fb 000001437d6f8a52 1 ... (0s) Current status: DONE +-----------+-------+ cs method count +-----------+-------+ PUT 8002 GET 12631 POST 2737 HEAD 2173 DELETE 7290 +-----------+-------+ Quit the interactive shell of the bq tool. project-name> quit Disable logging Command line Disable logging with the --clear-log-bucket flag in the buckets update command: gcloud storage buckets update gs://example-bucket --clear-log-bucket To check that logging was successfully disabled, use the buckets describe command: gcloud storage buckets describe gs://example-bucket --format="default(logging config)" If logging is disabled, the following is returned: null REST APIs JSON API Disable logging by sending a PATCH request to the bucket's logging configuration as shown in the following example.
- Here's an example of a modified log file: "bucket","storage byte hours","filename" "example-bucket","5532482018","example-bucket storage 2014 01 05 08 00 00 021fd v0" When you load the storage usage logs into BigQuery, load your locally modified logs and use the customized schema. for f in example-bucket storage\ ; \ do ./bq.py load --skip leading rows=1 storageanalysis.storage $f ./cloud storage storage schema custom.json; done Query logs in BigQuery Once your logs are loaded into BigQuery, you can query your usage logs to return information about your logged bucket(s).
- A response might look similar to the following: { "logging": { "logBucket": "example-logs-bucket", "logObjectPrefix": "log object prefix" } } If logging is not enabled, an empty configuration is returned: {} XML API Send a GET Bucket request for the bucket's logging configuration as shown in the following example: GET / example-bucket ?logging HTTP/1.1 Host: storage.googleapis.com If logging is enabled, the server sends the configuration in the response.

