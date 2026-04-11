---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.955Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Extractors"
feature_slug: "extractors"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "extractors"
  - "let"
  - "users"
  - "pull"
  - "specific"
  - "fields"
  - "from"
  - "high"
---

# Extractors

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Extractors let users pull specific fields from high-volume log sources to improve log management.

## Extended Definition

Extractors let users pull specific fields from high-volume log sources to improve log management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- You can now optimize log management by creating extractors to pull specific fields from high-volume log sources.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- Unlike standard inner joins, these operations let you retrieve all records from a primary data source even if no matching entry exists in the secondary source (unmatched fields are returned as null ).
- This update provides more granular control over your queries, letting you filter by nested fields from events and entities within a detection.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can now optimize log management by creating extractors to pull specific fields from high-volume log sources.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 11, 2025 Change Playbook names must now be unique across all SOAR environments, as part of updates to support future features.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 26, 2025 Feature Delete high-load SOAR environments You can now easily delete environments with heavy loads directly from the platform.
- Unlike standard inner joins, these operations let you retrieve all records from a primary data source even if no matching entry exists in the secondary source (unmatched fields are returned as null ).

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- This enhancement allows users to leverage organization-specific data captured in custom fields to gain deeper insights and create tailored visualizations within Looker reports.
- October 26, 2025 Feature Delete high-load environments You can now easily delete environments with heavy loads directly from the platform.

