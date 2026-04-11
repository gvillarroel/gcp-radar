---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.716Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Access Transparency logging"
feature_slug: "access-transparency-logging"
latest_feature_date: "2020-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/audit-logging"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest"
  - "https://docs.cloud.google.com/vision/docs/release-notes"
keywords:
  - "access"
  - "transparency"
  - "logging"
  - "provides"
  - "logs"
  - "for"
  - "staff"
  - "actions"
---

# Access Transparency logging

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Access Transparency logging provides logs for Google staff actions on customer content.

## Extended Definition

Access Transparency logging provides logs for Google staff actions on customer content.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/audit-logging](https://docs.cloud.google.com/vision/docs/audit-logging)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest](https://docs.cloud.google.com/python/docs/reference/vision/latest)
- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)

## Supporting Pages

### Vision API audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/audit-logging](https://docs.cloud.google.com/vision/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.

### "Python Client for Cloud Vision \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest](https://docs.cloud.google.com/python/docs/reference/vision/latest)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Take care to restrict access to the logs if they are saved, whether it be on local storage or on Google Cloud Logging.
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- June 04, 2020 Feature Access Transparency GA Access Transparency logging is now Generally Available.
- If you want to enable Access Transparency logs, see Enabling Access Transparency .
- For more infomation, see the OCR how-to pages: Detect text in images Detect handwriting in images Detect text in files (PDF/TIFF) August 29, 2019 Change Improved detection models are now default for the following features: Logo Detection Landmark Detection Crop hints Object Localization The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.
- You can see the latest product updates for all of Google Cloud on the Google Cloud page, browse and filter all release notes in the Google Cloud console , or programmatically access release notes in BigQuery .

