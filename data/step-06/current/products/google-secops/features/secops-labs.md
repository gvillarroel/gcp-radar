---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.748Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "SecOps Labs"
feature_slug: "secops-labs"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/detection"
keywords:
  - "secops"
  - "labs"
  - "lets"
  - "users"
  - "run"
  - "gemini"
  - "other"
  - "intelligence"
---

# SecOps Labs

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

SecOps Labs lets users run Gemini and other intelligence experiments in Google SecOps without disrupting production systems.

## Extended Definition

SecOps Labs lets users run Gemini and other intelligence experiments in Google SecOps without disrupting production systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/detection](https://docs.cloud.google.com/chronicle/docs/detection)

## Supporting Pages

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- You can ask Gemini questions about MITRE tactics, techniques, and procedures (TTPs), and receive contextually relevant answers that include the following MITRE details: Tactic Technique Sub-technique Detection suggestions Procedures Mitigations Gemini returns a link to the curated detections Google SecOps makes available for each TTP.
- Specifically, threat intelligence data is more limited in product editions other than Enterprise Plus because they don't include full access to Mandiant and VirusTotal.
- Investigate further by asking Gemini to create queries to look for specific indicators of compromise (IOCs) referenced in the threat intelligence reports.

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Default Supported Log Types The agent supports automatic investigation for alerts that contain events with the following metadata.log type values: Source metadata.log type values Amazon AWS CLOUDTRAIL , AWS IAM , AWS NETWORK FIREWALL , AWS VPC FLOW Cisco CISCO ASA FIREWALL, CISCO FIREPOWER FIREWALL, CISCO ISE, CISCO MERAKI CrowdStrike CROWDSTRIKE IOC , CS ALERTS , CS CEF EDR , CS DETECTS , CS EDR , CS IDP Fortinet FORTINET FIREWALL , FORTINET FORTIEDR , FORTINET WEBPROXY Google GCP CLOUDAUDIT , GCP CLOUDIDENTITY DEVICES , GCP CLOUDIDENTITY DEVICEUSERS , GCP DNS , GCP NGFW ENTERPRISE , GCP VPC FLOW , WORKSPACE ACTIVITY , WORKSPACE ALERTS , WORKSPACE USERS Microsoft ADFS , AZURE AD , AZURE AD AUDIT , AZURE AD CONTEXT , AZURE AD SIGNIN , AZURE FIREWALL , AZURE NSG FLOW , GITHUB , MICROSOFT DEFENDER ATP , MICROSOFT DEFENDER ENDPOINT , MICROSOFT DEFENDER ENDPOINT IOS , MICROSOFT DEFENDER IDENTITY , MICROSOFT GRAPH ALERT , OFFICE 365 , SENTINELONE ACTIVITY , SENTINELONE ALERT , SENTINELONE CF , SENTINEL DV , SENTINEL EDR , WINDOWS AD , WINDOWS DEFENDER ATP , WINDOWS DEFENDER AV , WINDOWS DHCP , WINDOWS DNS , WINDOWS FIREWALL , WINDOWS SYSMON , WINEVTLOG Okta OKTA , OKTA ACCESS GATEWAY , OKTA USER CONTEXT Other BARRACUDA FIREWALL , BOX , BRO DNS , CB APP CONTROL , CB DEFENSE , CB EDR , CHECKPOINT EDR , CHECKPOINT FIREWALL , CLOUDFLARE WAF , CYBERARK EPM , CYBEREASON EDR , DUO AUTH , DUO USER CONTEXT , ELASTIC EDR , F5 AFM , F5 ASM , F5 BIGIP LTM , FIREEYE HX , FIREEYE NX , FORCEPOINT FIREWALL , INFOBLOX DNS , JUNIPER FIREWALL , KEYCLOAK , LIMACHARLIE EDR , MALWAREBYTES EDR , MCAFEE EDR , NETFILTER IPTABLES , ONELOGIN SSO , ONE IDENTITY IDENTITY MANAGER , OPENSSH , PAN FIREWALL , PING , SALESFORCE , SEP , SOPHOS EDR , SOPHOS FIREWALL , SQUID WEBPROXY , SURICATA EVE , SURICATA IDS , SYMANTEC EDR , TANIUM EDR , TANIUM THREAT RESPONSE , TRENDMICRO EDR , UMBRELLA DNS , UMBRELLA FIREWALL , UMBRELLA WEBPROXY , ZEEK , ZSCALER FIREWALL , ZSCALER WEBPROXY .
- View an alert or re-run an investigation The investigation panel lets you take the following actions: View alert : Opens the alert details in the Google SecOps SIEM view.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Contextual enrichment and evidence gathering The agent executes several parallel analysis steps to build a comprehensive picture of the suspicious activity by leveraging internal and external intelligence: Google Threat Intelligence (GTI) enrichment : Identifies and evaluates indicators of compromise (IoCs), such as file hashes, IP addresses, and domains against Google Threat Intelligence and VirusTotal to identify known malicious entities.

### "Threat Intelligence overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection](https://docs.cloud.google.com/chronicle/docs/detection)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can integrate and use Google Threat Intelligence within Google SecOps using the following integration methods: Applied Threat Intelligence (ATI) This fully managed, native pipeline automatically curates and applies Google's threat intelligence.
- Bring your own license (BYOL) Google Threat Intelligence integration This customer-deployed pipeline ingests licensed Google Threat Intelligence (GTI) data (Threat Lists, IoC Streams, and adversary context) into Google SecOps.
- This method lets you deploy and manage resources (such as Cloud Run functions, Cloud Scheduler, Secret Manager) in your Google SecOps environment to fetch data from the Chronicle API and stream it to Google SecOps.
- Threat Intelligence overview Supported in: Google secops SIEM Google Threat Intelligence provides a comprehensive and proactive approach to identifying, analyzing, and mitigating security threats.

