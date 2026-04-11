---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.975Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini search summaries"
feature_slug: "gemini-search-summaries"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "gemini"
  - "search"
  - "summaries"
  - "can"
  - "automatically"
  - "summarize"
  - "results"
  - "and"
---

# Gemini search summaries

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Gemini can automatically summarize search results and answer follow-up questions about those summaries.

## Extended Definition

Gemini can automatically summarize search results and answer follow-up questions about those summaries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Search summaries : Gemini can automatically summarize search results after every search and subsequent filter action.
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
- September 05, 2025 Change Advanced filtering in alerts and search results You can now filter alerts and search results by any field in the detection object.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Use a block comment: additional.fields["pod name"] = "kube-scheduler" / Block comments can span multiple lines. / AND additional.fields["pod name1"] = "kube-scheduler1" Use a single-line comment: additional.fields["pod name"] != "" // my single-line comment Search settings You can set the maximum number of search results in UDM search settings .
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Search summaries : Gemini can automatically summarize search results after every search and subsequent filter action.
- September 08, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Akamai Cloud Monitor logs Collect Akamai DataStream 2 logs Collect Aware audit logs Collect AWS API Gateway access logs Collect AWS VPC Transit Gateway flow logs Collect Bitwarden Enterprise event logs Collect Box Collaboration JSON logs Collect Censys logs Collect Code42 Incydr core datasets Collect CSV Custom IOC files Collect Deep Instinct EDR logs Collect DigiCert audit logs Collect DomainTools Iris Investigate results Collect Duo administrator logs Collect Duo authentication logs Collect Duo entity context logs Collect Google Cloud Abuse Events logs Collect Harness IO audit logs Collect HPE Aruba Networking Central logs Collect Jamf Pro context logs Collect PingOne Advanced Identity Cloud logs Collect Slack audit logs Collect Snyk group-level audit logs Collect Snyk group-level audit and issues logs Collect Venafi Zero Touch PKI logs Collect Veritas NetBackup logs Collect VMware AirWatch logs Collect VMware Avi Load Balancer WAF logs Collect VMware Horizon logs Collect VMware VeloCloud SD-WAN logs Collect Zoom operation logs September 05, 2025 Change Advanced filtering in alerts and search results You can now filter alerts and search results by any field in the detection object.
- You can now do the following: Use enhanced filtering to include Bottom 30 values in addition to Top 30 values for each UDM Field in search results Use 'field[key] = value' exact match to search the 'additional' and 'labels' fields Pin fields (using the push pin icon) in Quick Filter to save them as a favorite.
- May 06, 2024 Feature Gemini for investigation assistance Gemini for investigation assistance can now support you with the following: Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.

