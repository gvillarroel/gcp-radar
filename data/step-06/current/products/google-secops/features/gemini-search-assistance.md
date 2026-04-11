---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.975Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini search assistance"
feature_slug: "gemini-search-assistance"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "gemini"
  - "search"
  - "assistance"
  - "can"
  - "build"
  - "edit"
  - "and"
  - "run"
---

# Gemini search assistance

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Gemini can build, edit, and run natural-language searches for relevant events.

## Extended Definition

Gemini can build, edit, and run natural-language searches for relevant events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can filter and refine the search results to display the older results, as an alternative to modifying and rerunning the search.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Active Countermeasures AI-Hunter logs Collect ADVA Fiber Service Platform logs Collect AIX system logs Collect Akamai SIEM Connector logs Collect AMD Pensando DSS firewall logs Collect Azure NSG Flow logs Collect Cloudflare Page Shield logs Collect FingerprintJS logs Collect FireEye eMPS logs Collect Forcepoint Email Security logs Collect Forcepoint NGFW logs Collect Fortinet FortiSASE logs Collect IBM DB2 logs Collect ManageEngine ADManager Plus logs Collect Microsoft Azure Resource logs Collect Microsoft Intune Context logs Collect Ubiquiti Unifi switch logs Collect Vectra Detect logs Collect Vectra Stream logs Collect Voltage SecureMail logs Collect Wallix Bastion logs January 16, 2026 Feature Perform all-time searches You can now run searches over your full retention period by clicking the Time Picker on the Search editor panel and selecting All Time .
- You can now do the following in UDM Search: Use Chronicle-provided pre-made search templates in Quick Searches and Search Manager Create, edit, and share searches in Search Manager (an enhancement to Saved Searches) Use reference lists in UDM searches January 06, 2023 Change Chronicle Curated Detections has been enhanced with the following additional detection content for Windows-based threats .
- March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
- January 16, 2026 Feature Perform all-time searches You can now run searches over your full retention period by clicking the Time Picker on the Search editor panel and selecting All Time .
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- You can now configure and run Google SecOps Gemini and other intelligence experiments without disrupting your existing production systems—and benefit from their output.

