---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.890Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "AI Investigation widget"
feature_slug: "ai-investigation-widget"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "ai"
  - "investigation"
  - "widget"
  - "lets"
  - "users"
  - "review"
  - "whole"
  - "case"
---

# AI Investigation widget

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The AI Investigation widget lets users review the whole case and generates a case summary with remediation next steps.

## Extended Definition

The AI Investigation widget lets users review the whole case and generates a case summary with remediation next steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Default Supported Log Types The agent supports automatic investigation for alerts that contain events with the following metadata.log type values: Source metadata.log type values Amazon AWS CLOUDTRAIL , AWS IAM , AWS NETWORK FIREWALL , AWS VPC FLOW Cisco CISCO ASA FIREWALL, CISCO FIREPOWER FIREWALL, CISCO ISE, CISCO MERAKI CrowdStrike CROWDSTRIKE IOC , CS ALERTS , CS CEF EDR , CS DETECTS , CS EDR , CS IDP Fortinet FORTINET FIREWALL , FORTINET FORTIEDR , FORTINET WEBPROXY Google GCP CLOUDAUDIT , GCP CLOUDIDENTITY DEVICES , GCP CLOUDIDENTITY DEVICEUSERS , GCP DNS , GCP NGFW ENTERPRISE , GCP VPC FLOW , WORKSPACE ACTIVITY , WORKSPACE ALERTS , WORKSPACE USERS Microsoft ADFS , AZURE AD , AZURE AD AUDIT , AZURE AD CONTEXT , AZURE AD SIGNIN , AZURE FIREWALL , AZURE NSG FLOW , GITHUB , MICROSOFT DEFENDER ATP , MICROSOFT DEFENDER ENDPOINT , MICROSOFT DEFENDER ENDPOINT IOS , MICROSOFT DEFENDER IDENTITY , MICROSOFT GRAPH ALERT , OFFICE 365 , SENTINELONE ACTIVITY , SENTINELONE ALERT , SENTINELONE CF , SENTINEL DV , SENTINEL EDR , WINDOWS AD , WINDOWS DEFENDER ATP , WINDOWS DEFENDER AV , WINDOWS DHCP , WINDOWS DNS , WINDOWS FIREWALL , WINDOWS SYSMON , WINEVTLOG Okta OKTA , OKTA ACCESS GATEWAY , OKTA USER CONTEXT Other BARRACUDA FIREWALL , BOX , BRO DNS , CB APP CONTROL , CB DEFENSE , CB EDR , CHECKPOINT EDR , CHECKPOINT FIREWALL , CLOUDFLARE WAF , CYBERARK EPM , CYBEREASON EDR , DUO AUTH , DUO USER CONTEXT , ELASTIC EDR , F5 AFM , F5 ASM , F5 BIGIP LTM , FIREEYE HX , FIREEYE NX , FORCEPOINT FIREWALL , INFOBLOX DNS , JUNIPER FIREWALL , KEYCLOAK , LIMACHARLIE EDR , MALWAREBYTES EDR , MCAFEE EDR , NETFILTER IPTABLES , ONELOGIN SSO , ONE IDENTITY IDENTITY MANAGER , OPENSSH , PAN FIREWALL , PING , SALESFORCE , SEP , SOPHOS EDR , SOPHOS FIREWALL , SQUID WEBPROXY , SURICATA EVE , SURICATA IDS , SYMANTEC EDR , TANIUM EDR , TANIUM THREAT RESPONSE , TRENDMICRO EDR , UMBRELLA DNS , UMBRELLA FIREWALL , UMBRELLA WEBPROXY , ZEEK , ZSCALER FIREWALL , ZSCALER WEBPROXY .
- View an alert or re-run an investigation The investigation panel lets you take the following actions: View alert : Opens the alert details in the Google SecOps SIEM view.
- Case metadata integration : Retrieves broader context from the case the alert belongs to, incorporating metadata such as tags and priority into the investigation.
- Review an investigation Each investigation opens in a detailed view that summarizes Gemini's analysis, its reasoning, and the supporting data it used.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events that use multiple keys with the same name, using a regular expression: additional.fields.key = /myKeynumber / Use regular expressions and the nocase operator: additional.fields["pod name"] = /br/ additional.fields["pod name"] = bar nocase Use block and single-line comments.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- With the unified capabilities between Google SecOps and Security Command Center, SOC analysts and Cloud Security engineers have a single converged platform within which to view and respond to incidents and cases related to threats in their Google Cloud, Azure, and AWS platforms.

