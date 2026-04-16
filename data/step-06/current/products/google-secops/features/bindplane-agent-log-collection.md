---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.845Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "BindPlane agent log collection"
feature_slug: "bindplane-agent-log-collection"
latest_feature_date: "2024-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
keywords:
  - "bindplane"
  - "agent"
  - "log"
  - "collection"
  - "can"
  - "collect"
  - "logs"
  - "windows"
---

# BindPlane agent log collection

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The BindPlane agent can collect logs from Windows events, SQL databases, files, and syslog and send them to Google SecOps.

## Extended Definition

The BindPlane agent can collect logs from Windows events, SQL databases, files, and syslog and send them to Google SecOps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)

## Supporting Pages

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default Supported Log Types The agent supports automatic investigation for alerts that contain events with the following metadata.log type values: Source metadata.log type values Amazon AWS CLOUDTRAIL , AWS IAM , AWS NETWORK FIREWALL , AWS VPC FLOW Cisco CISCO ASA FIREWALL, CISCO FIREPOWER FIREWALL, CISCO ISE, CISCO MERAKI CrowdStrike CROWDSTRIKE IOC , CS ALERTS , CS CEF EDR , CS DETECTS , CS EDR , CS IDP Fortinet FORTINET FIREWALL , FORTINET FORTIEDR , FORTINET WEBPROXY Google GCP CLOUDAUDIT , GCP CLOUDIDENTITY DEVICES , GCP CLOUDIDENTITY DEVICEUSERS , GCP DNS , GCP NGFW ENTERPRISE , GCP VPC FLOW , WORKSPACE ACTIVITY , WORKSPACE ALERTS , WORKSPACE USERS Microsoft ADFS , AZURE AD , AZURE AD AUDIT , AZURE AD CONTEXT , AZURE AD SIGNIN , AZURE FIREWALL , AZURE NSG FLOW , GITHUB , MICROSOFT DEFENDER ATP , MICROSOFT DEFENDER ENDPOINT , MICROSOFT DEFENDER ENDPOINT IOS , MICROSOFT DEFENDER IDENTITY , MICROSOFT GRAPH ALERT , OFFICE 365 , SENTINELONE ACTIVITY , SENTINELONE ALERT , SENTINELONE CF , SENTINEL DV , SENTINEL EDR , WINDOWS AD , WINDOWS DEFENDER ATP , WINDOWS DEFENDER AV , WINDOWS DHCP , WINDOWS DNS , WINDOWS FIREWALL , WINDOWS SYSMON , WINEVTLOG Okta OKTA , OKTA ACCESS GATEWAY , OKTA USER CONTEXT Other BARRACUDA FIREWALL , BOX , BRO DNS , CB APP CONTROL , CB DEFENSE , CB EDR , CHECKPOINT EDR , CHECKPOINT FIREWALL , CLOUDFLARE WAF , CYBERARK EPM , CYBEREASON EDR , DUO AUTH , DUO USER CONTEXT , ELASTIC EDR , F5 AFM , F5 ASM , F5 BIGIP LTM , FIREEYE HX , FIREEYE NX , FORCEPOINT FIREWALL , INFOBLOX DNS , JUNIPER FIREWALL , KEYCLOAK , LIMACHARLIE EDR , MALWAREBYTES EDR , MCAFEE EDR , NETFILTER IPTABLES , ONELOGIN SSO , ONE IDENTITY IDENTITY MANAGER , OPENSSH , PAN FIREWALL , PING , SALESFORCE , SEP , SOPHOS EDR , SOPHOS FIREWALL , SQUID WEBPROXY , SURICATA EVE , SURICATA IDS , SYMANTEC EDR , TANIUM EDR , TANIUM THREAT RESPONSE , TRENDMICRO EDR , UMBRELLA DNS , UMBRELLA FIREWALL , UMBRELLA WEBPROXY , ZEEK , ZSCALER FIREWALL , ZSCALER WEBPROXY .
- Investigation tools The agent uses the following built-in tools to complete its analysis: Dynamic search queries: Runs and refines searches in SecOps to collect additional context for the alert.
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Contextual enrichment and evidence gathering The agent executes several parallel analysis steps to build a comprehensive picture of the suspicious activity by leveraging internal and external intelligence: Google Threat Intelligence (GTI) enrichment : Identifies and evaluates indicators of compromise (IoCs), such as file hashes, IP addresses, and domains against Google Threat Intelligence and VirusTotal to identify known malicious entities.

### Ingestion API \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is especially important for logs ingested using the Ingestion API, Forwarder and Bindplane agents.
- CUSTOMER ID= CUSTOMER ID Create a credential using an Ingestion Service Account Credential file and the Google Security Operations API Scope. credentials = service account.Credentials.from service account file(ING SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) UDM Event example (example: US region) url = 'https://malachiteingestion-pa.googleapis.com/v2/udmevents:batchCreate' For other regions, you may need to use another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints json events are a collection of UDM events in (serialized) JSON format. body = { "customerId": CUSTOMER ID, "events": json.loads(json events), } response = http session.request("POST", url, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/blob/master/ingestion/create entities.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create udm events.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create unstructured log entries.py The Service Account Credential provided to you corresponds to one Google SecOps instance.
- Provided by your Google SecOps representative. log type string Yes Identifies the log entries in the batch (for example, WINDOWS DNS). namespace string Yes User-configured environment namespace to identify the data domain the logs originated from.
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Review the context source collection time: Check the context source's collection time.
- Check their collection times: Fields derived from UDM enrichment.
- Complex single-event rules These rules are more susceptible to detection delays because they include match windows or reference lists: Windowed single-event rules These are single-event rules that include a match window and typically have a slightly longer delay than other single-event rules.

