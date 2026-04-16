---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.549Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Parser documentation for log sources"
feature_slug: "parser-documentation-for-log-sources"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "parser"
  - "documentation"
  - "log"
  - "sources"
  - "available"
  - "additional"
  - "help"
  - "ingest"
---

# Parser documentation for log sources

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

New parser documentation is available for additional log sources to help ingest and normalize logs.

## Extended Definition

New parser documentation is available for additional log sources to help ingest and normalize logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.
- To ingest logs from an additional organization to the same Google SecOps instance, select the organization from the Organization menu, and then repeat the steps to define the type of data to export and export filters.
- Note: If your organization implements VPC Service Controls , no additional ingress or egress rule is required for Google SecOps to access resources and services outside its service perimeter.
- Troubleshooting If the relationships between resources and identities are missing from your Google SecOps instance, disable and then re-enable direct ingestion of log data to Google SecOps.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Other sources of data can be ingested into Google SecOps as alerts, such as Crowdstrike Falcon Alerts.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The following threat-intelligence sources are available in Google SecOps out-of-box: Google SecOps Enterprise package Google SecOps Enterprise Plus package Enriched open-source intelligence (OSINT) Enriched open-source intelligence (OSINT) Mandiant Fusion VirusTotal Real-time and retroactive matching Google SecOps performs IOC matching in two ways: Real-time matching : when new security telemetry is ingested and normalized, it is immediately checked against all available IOC feeds.
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- Google Security Operations continuously ingests data from your infrastructure and other security data sources, and automatically correlates suspicious security indicators with your security data.
- You can view information about the IOCs, such as type, priority, status, categories, assets, campaigns, sources, IOC ingest time, first seen, and last seen.

