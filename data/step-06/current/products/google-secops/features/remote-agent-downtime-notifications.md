---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.812Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Remote agent downtime notifications"
feature_slug: "remote-agent-downtime-notifications"
latest_feature_date: "2025-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial"
keywords:
  - "remote"
  - "agent"
  - "downtime"
  - "notifications"
  - "users"
  - "can"
  - "opt"
  - "app"
---

# Remote agent downtime notifications

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Users can opt in to in-app or email notifications when a remote agent is down.

## Extended Definition

Users can opt in to in-app or email notifications when a remote agent is down.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?
- Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.
- Existing Remote Agents will be available until September 30, 2026, after which they will no longer function.
- For detailed instructions, see Migrate Remote Agents to Google Cloud .

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Default Supported Log Types The agent supports automatic investigation for alerts that contain events with the following metadata.log type values: Source metadata.log type values Amazon AWS CLOUDTRAIL , AWS IAM , AWS NETWORK FIREWALL , AWS VPC FLOW Cisco CISCO ASA FIREWALL, CISCO FIREPOWER FIREWALL, CISCO ISE, CISCO MERAKI CrowdStrike CROWDSTRIKE IOC , CS ALERTS , CS CEF EDR , CS DETECTS , CS EDR , CS IDP Fortinet FORTINET FIREWALL , FORTINET FORTIEDR , FORTINET WEBPROXY Google GCP CLOUDAUDIT , GCP CLOUDIDENTITY DEVICES , GCP CLOUDIDENTITY DEVICEUSERS , GCP DNS , GCP NGFW ENTERPRISE , GCP VPC FLOW , WORKSPACE ACTIVITY , WORKSPACE ALERTS , WORKSPACE USERS Microsoft ADFS , AZURE AD , AZURE AD AUDIT , AZURE AD CONTEXT , AZURE AD SIGNIN , AZURE FIREWALL , AZURE NSG FLOW , GITHUB , MICROSOFT DEFENDER ATP , MICROSOFT DEFENDER ENDPOINT , MICROSOFT DEFENDER ENDPOINT IOS , MICROSOFT DEFENDER IDENTITY , MICROSOFT GRAPH ALERT , OFFICE 365 , SENTINELONE ACTIVITY , SENTINELONE ALERT , SENTINELONE CF , SENTINEL DV , SENTINEL EDR , WINDOWS AD , WINDOWS DEFENDER ATP , WINDOWS DEFENDER AV , WINDOWS DHCP , WINDOWS DNS , WINDOWS FIREWALL , WINDOWS SYSMON , WINEVTLOG Okta OKTA , OKTA ACCESS GATEWAY , OKTA USER CONTEXT Other BARRACUDA FIREWALL , BOX , BRO DNS , CB APP CONTROL , CB DEFENSE , CB EDR , CHECKPOINT EDR , CHECKPOINT FIREWALL , CLOUDFLARE WAF , CYBERARK EPM , CYBEREASON EDR , DUO AUTH , DUO USER CONTEXT , ELASTIC EDR , F5 AFM , F5 ASM , F5 BIGIP LTM , FIREEYE HX , FIREEYE NX , FORCEPOINT FIREWALL , INFOBLOX DNS , JUNIPER FIREWALL , KEYCLOAK , LIMACHARLIE EDR , MALWAREBYTES EDR , MCAFEE EDR , NETFILTER IPTABLES , ONELOGIN SSO , ONE IDENTITY IDENTITY MANAGER , OPENSSH , PAN FIREWALL , PING , SALESFORCE , SEP , SOPHOS EDR , SOPHOS FIREWALL , SQUID WEBPROXY , SURICATA EVE , SURICATA IDS , SYMANTEC EDR , TANIUM EDR , TANIUM THREAT RESPONSE , TRENDMICRO EDR , UMBRELLA DNS , UMBRELLA FIREWALL , UMBRELLA WEBPROXY , ZEEK , ZSCALER FIREWALL , ZSCALER WEBPROXY .
- Contextual enrichment and evidence gathering The agent executes several parallel analysis steps to build a comprehensive picture of the suspicious activity by leveraging internal and external intelligence: Google Threat Intelligence (GTI) enrichment : Identifies and evaluates indicators of compromise (IoCs), such as file hashes, IP addresses, and domains against Google Threat Intelligence and VirusTotal to identify known malicious entities.
- While these intermediate steps are primarily used by the agent to build context and refine its analysis, they are also visible within the Investigation timeline in the web interface, providing security analysts with clear visibility into the agent's investigation progress.
- Adaptive Investigation Based on the findings from the earlier investigation steps, the agent dynamically determines the next course of action: Evaluates findings : Assesses information gathered in previous steps to identify potential gaps or new avenues for inquiry.

### "Google Agentic SOC trial details \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Eligibility The Google Agentic SOC trial is available for customers with an active subscription to one of the following Google SecOps packages: Enterprise Enterprise Plus Google Unified Security (GUS) Tokens are granted on a per-subscription basis and may not be pooled, banked, or transferred between your different eligible subscriptions.
- Google Agentic SOC trial details The Triage and Investigation Agent (TIN) is an agentic AI feature for Google Security Operations that helps automate security investigations.
- For more information on TIN, see Use Triage and Investigation Agent to investigate alerts .

