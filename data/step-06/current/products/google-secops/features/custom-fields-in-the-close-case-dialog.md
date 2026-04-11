---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.932Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Custom fields in the Close Case dialog"
feature_slug: "custom-fields-in-the-close-case-dialog"
latest_feature_date: "2025-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "custom"
  - "fields"
  - "in"
  - "the"
  - "close"
  - "case"
  - "dialog"
  - "administrators"
---

# Custom fields in the Close Case dialog

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Administrators can add custom fields to the Close Case dialog to streamline case closure.

## Extended Definition

Administrators can add custom fields to the Close Case dialog to streamline case closure.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- September 08, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Akamai Cloud Monitor logs Collect Akamai DataStream 2 logs Collect Aware audit logs Collect AWS API Gateway access logs Collect AWS VPC Transit Gateway flow logs Collect Bitwarden Enterprise event logs Collect Box Collaboration JSON logs Collect Censys logs Collect Code42 Incydr core datasets Collect CSV Custom IOC files Collect Deep Instinct EDR logs Collect DigiCert audit logs Collect DomainTools Iris Investigate results Collect Duo administrator logs Collect Duo authentication logs Collect Duo entity context logs Collect Google Cloud Abuse Events logs Collect Harness IO audit logs Collect HPE Aruba Networking Central logs Collect Jamf Pro context logs Collect PingOne Advanced Identity Cloud logs Collect Slack audit logs Collect Snyk group-level audit logs Collect Snyk group-level audit and issues logs Collect Venafi Zero Touch PKI logs Collect Veritas NetBackup logs Collect VMware AirWatch logs Collect VMware Avi Load Balancer WAF logs Collect VMware Horizon logs Collect VMware VeloCloud SD-WAN logs Collect Zoom operation logs September 07, 2025 Feature Use custom fields in the Close Case dialog Administrators can now add custom fields to the Close Case dialog.
- For more information, see Use custom fields in the Close Case dialog .
- For more information, refer to Customize the Close Case dialog .
- For more information, refer to Customize the Close Case dialog .

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- September 07, 2025 Feature Use custom fields in the Close Case dialog Administrators can now add custom fields to the Close Case dialog.
- For more information, see Use custom fields in the Close Case dialog .
- For more information, refer to Customize the Close Case dialog November 17, 2024 Announcement Release 6.3.25 is now in General Availability.
- For more information, refer to Customize the Close Case dialog .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

