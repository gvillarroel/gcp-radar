---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.520Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder signing key rotation"
feature_slug: "chronicle-forwarder-signing-key-rotation"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "chronicle"
  - "forwarder"
  - "signing"
  - "key"
  - "rotation"
  - "the"
  - "rotates"
  - "every"
---

# Chronicle forwarder signing key rotation

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The Chronicle forwarder signing key rotates every six months for security.

## Extended Definition

The Chronicle forwarder signing key rotates every six months for security.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- This release also includes the following updates: The forwarder signing key will be rotated every 6 months for security.
- The corresponding documentation on the Container Registry key for the Linux version of the Chronicle Forwarder has also been removed.
- You must update the Chronicle forwarder for Windows on Docker image every 6 months.
- The following new fields were added to the Smtp object: helo mail from rcpt to server response message path is webmail is tls For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list June 29, 2022 Change Chronicle Forwarder configuration on Linux has been updated to include two separate configuration files.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example: Old rule name: ATI Active Breach Rule Match for File IoCs (SHA256) New rule name: ATI Active Breach Rule Match for File IoCs (about.file.sha256) March 26, 2025 Announcement The managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project will be fully deprecated by April 30, 2025.
- The Chronicle SecOps platform enables security analysts to analyze and mitigate a security threat throughout its lifecycle by employing the following capabilities: Collection : Data is ingested into the platform using software forwarders, parsers, connectors, and webhooks.
- Feature Forwarder troubleshooting guide is now available to help you diagnose and resolve common issues that may arise while using the Chronicle Linux forwarder.
- The following are key dates to note: Apr 1, 2026 : New Google SecOps customers cannot use the forwarder component.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- The managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project will be fully decommissioned by March 31, 2025.
- The following are key dates to note: Apr 1, 2026 : New Google SecOps customers cannot use the forwarder component.
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Restrict the API key access to the Chronicle API.
- Restrict the API key access to the Chronicle API.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Specify the endpoint URL In Amazon Data Firehose, specify the HTTPS endpoint and access key, as follows: Append the API key to the feed endpoint URL and specify this URL as the HTTP endpoint URL in the following format: ENDPOINT URL ?key= API KEY Replace the following: ENDPOINT URL : the feed endpoint URL.

