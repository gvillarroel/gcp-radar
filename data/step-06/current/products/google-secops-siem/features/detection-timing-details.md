---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.310Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Detection timing details"
feature_slug: "detection-timing-details"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/detection/default-rules"
keywords:
  - "detection"
  - "timing"
  - "details"
  - "records"
  - "now"
  - "distinguish"
  - "primary"
  - "rule"
---

# Detection timing details

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Detection records now distinguish primary rule runs from rule replays in dashboards and the Alerts lister.

## Extended Definition

Detection records now distinguish primary rule runs from rule replays in dashboards and the Alerts lister.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You can now easily distinguish whether a detection was generated during a primary rule run or through a rule replay .
- Aikido ( AIKIDO ) Akamai API Security ( AKAMAI API SECURITY ) Alkira IP Flow ( ALKIRA IP FLOW ) Atlassian Guard Detect ( ATLASSIAN GUARD DETECT ) BlinkOps ( BLINKOPS ) Canvas LMS ( CANVAS LMS ) Cisco Secure Email Threat Defense ( CISCO SECURE EMAIL THREAT DEFENSE ) Cisco StarOS ( CISCO STAR OS ) Citadel Identity360 ( CITADEL IDENTITY360 ) Cyware Threat Intelligence Exchange ( CTIX ) Cyberark Identity Audit ( CYBERARK IDENTITY AUDIT ) CyCognito ASM ( CYCOGNITO ASM ) Dell VxRail ( DELL VXRAIL ) Gene6 FTP Server ( GENE6 FTP ) IBM Copy Services Manager ( IBM CSM ) LangSmith Audit ( LANGSMITH AUDIT ) Mellanox Switch ( MELLANOX SWITCH ) Microsoft Entra ID Protection ( MICROSOFT ENTRA ID PROTECTION ) NSFOCUS Next Generation Intrusion Prevention System ( NSFOCUS NGIPS ) Perplexity ( PERPLEXITY ) Pleasant Password Server ( PLEASANT PASSWORD SERVER ) Prompt Security ( PROMPT SECURITY ) Qualtrics Audit ( QUALTRICS AUDIT ) Rancher API Audit Log ( RANCHER API AUDIT LOG ) Rubrik Security Cloud ( RUBRIK SECURITY CLOUD ) SAP Business Warehouse ( SAP BW ) SAP Change Document ( SAP CHANGE DOCUMENT ) SAP Gateway ( SAP GATEWAY ) SAP Hana Audit ( SAP HANA AUDIT ) Scale Computing ( SCALE COMPUTING ) Slack API ( SLACK API ) Snowplow ( SNOWPLOW ) Sterling Order Management System Data ( STERLING OMS DATA ) Strivacity ( STRIVACITY ) Tencent CloudAudit ( TENCENT CLOUD AUDIT ) Trellix EX ( TRELLIX EX ) Unifi System ( UNIFI SYSTEM ) Windows Bindplane ( WINDOWS BINDPLANE ) Witness AI Control ( WITNESS AI CONTROL ) Zendesk Advanced Data Privacy and Protection ( ZENDESK ADPP ) January 30, 2026 Announcement The following v2 feed types, which utilize Google Storage Transfer Service (STS), are now in General Availability: Google Cloud Storage v2 Amazon S3 v2 Google Cloud Storage (Event Driven) Amazon SQS v2 Azure Blobstore v2 January 29, 2026 Feature Enhanced rule observability for detections Google SecOps now provides increased visibility into detection timing to help improve dashboard and reporting accuracy.
- Key improvements Enhanced metadata : Detection and alert objects now include specific metadata that identifies whether they were produced during a primary rule run, or as part of a rule replay or retrohunt.
- These changes help Google SecOps teams distinguish between primary rule runs and rule replays , which provides clarity on detection delays and the impact of late-arriving enrichment data.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- January 30, 2026 Announcement The following v2 connectors, which utilize Google Storage Transfer Service (STS), are now in General Availability: Google Cloud Storage v2 Amazon S3 v2 Google Cloud Storage (Event Driven) Amazon SQS v2 Azure Blobstore v2 January 29, 2026 Feature Rule observability for detections and alerts New metadata is now included in all detection and alert objects, indicating if the detection was produced during a primary rule run or through a rule replay .
- Key improvements Enhanced metadata : Detection and alert objects now include specific metadata that identifies whether they were produced during a primary rule run, or as part of a rule replay or retrohunt.
- These changes help Google SecOps teams distinguish between primary rule runs and rule replays , which provides clarity on detection delays and the impact of late-arriving enrichment data.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Familiarize yourself with the following topics to understand how these factors influence rule detection delays: Detection generation methods Known limitations Factors contributing to rule detection delays Detection generation methods Learn how the system creates rule detections to understand how the detection generation method affects detection delays.
- These delays depend on known structural factors, such as the rule type , run frequency , the detection generation method , known limitations , and other predictable factors.
- Known limitations Here are some standard limitations that contribute to rule detection delays: Enrichment delays can sometimes take longer than expected.
- In the Rules dashboard , click a rule name to view the detection history and other details for a specific rule.

### "Default detection rules \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- When using time periods, the Google SecOps Detection Engine only examines the discrete blocks of time you specify. rule OutcomeRuleMultiEvent { meta: author = "noone@google.com" events: $u.udm.principal.hostname = $hostname $asset context.graph.entity.hostname = $hostname $severity = $asset context.graph.entity.asset.vulnerabilities.severity match: $hostname over 5m outcome: $risk score = max( 100 + if($hostname = "my-hostname", 100, 50) + if($severity = "HIGH", 10) + if($severity = "MEDIUM", 5) + if($severity = "LOW", 1) ) $asset id list = array( if($u.principal.asset id = "", "Empty asset id", $u.principal.asset id ) ) $asset id distinct list = array distinct($u.principal.asset id) $asset id count = count($u.principal.asset id) $asset id distinct count = count distinct($u.principal.asset id) condition: $u and $asset context and $risk score > 50 and not arrays.contains($asset id list, "id 1234") } Conclusion YARA-L is a flexible detection language which enables you to examine security events and not simply just return a data query.
- The condition states the logical condition that triggers the detection. rule ExcludeZeroValues { meta: author = "noone@google.com" events: $e1.metadata.event type = "NETWORK DNS" $e1.principal.hostname = $hostname // $e1.principal.user.userid may be empty string. $e1.principal.user.userid != "Guest" $e2.metadata.event type = "NETWORK HTTP" $e2.principal.hostname = $hostname // $e2.target.asset id cannot be empty string as explicitly specified. $e2.target.asset id != "" match: // $hostname cannot be empty string. $hostname over 1h condition: $e1 and $e2 } Rules outcome section Use the outcome section to set holding variables within the rule detection to provide enrichment for downstream consumption.
- Further not conditions could be added to this rule if you identify frequent false positives coming from other known file paths. rule suspicious unusual location svchost execution { meta: author = "Google Cloud Security" description = "Windows 'svchost' executed from an unusual location" yara version = "YL2.0" rule version = "1.0" events: $e1.metadata.event type = "PROCESS LAUNCH" re.regex($e1.principal.process.command line, \bsvchost(\.exe)?\b) nocase not re.regex($e1.principal.process.command line, \\Windows\\System32\\) nocase condition: $e1 } Specify more than one event variable YARA-L enables you to have more than one event variable in a rule.
- This repository contains several different categories of detection rules, including the following: Google Cloud CloudAudit Google Workspace Informational warnings Malware MITRE ATT&CK SOC prime rules Suspicious events Each category takes a specific approach in how it views data sources and specifies what events and matching statements to use.

