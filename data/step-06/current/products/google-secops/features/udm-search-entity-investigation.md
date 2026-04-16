---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.887Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "UDM Search entity investigation"
feature_slug: "udm-search-entity-investigation"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
keywords:
  - "udm"
  - "search"
  - "entity"
  - "investigation"
  - "can"
  - "now"
  - "return"
  - "details"
---

# UDM Search entity investigation

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

UDM Search can now return entity details alongside matching events and alerts when the query identifies a specific entity.

## Extended Definition

UDM Search can now return entity details alongside matching events and alerts when the query identifies a specific entity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example: principal.ip = /10. / Search for the execution of psexec.exe (Window): target.process.command line = /\bpsexec(\.exe)?\b/ nocase For details about regular expressions, see the regular expressions page .
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default Supported Log Types The agent supports automatic investigation for alerts that contain events with the following metadata.log type values: Source metadata.log type values Amazon AWS CLOUDTRAIL , AWS IAM , AWS NETWORK FIREWALL , AWS VPC FLOW Cisco CISCO ASA FIREWALL, CISCO FIREPOWER FIREWALL, CISCO ISE, CISCO MERAKI CrowdStrike CROWDSTRIKE IOC , CS ALERTS , CS CEF EDR , CS DETECTS , CS EDR , CS IDP Fortinet FORTINET FIREWALL , FORTINET FORTIEDR , FORTINET WEBPROXY Google GCP CLOUDAUDIT , GCP CLOUDIDENTITY DEVICES , GCP CLOUDIDENTITY DEVICEUSERS , GCP DNS , GCP NGFW ENTERPRISE , GCP VPC FLOW , WORKSPACE ACTIVITY , WORKSPACE ALERTS , WORKSPACE USERS Microsoft ADFS , AZURE AD , AZURE AD AUDIT , AZURE AD CONTEXT , AZURE AD SIGNIN , AZURE FIREWALL , AZURE NSG FLOW , GITHUB , MICROSOFT DEFENDER ATP , MICROSOFT DEFENDER ENDPOINT , MICROSOFT DEFENDER ENDPOINT IOS , MICROSOFT DEFENDER IDENTITY , MICROSOFT GRAPH ALERT , OFFICE 365 , SENTINELONE ACTIVITY , SENTINELONE ALERT , SENTINELONE CF , SENTINEL DV , SENTINEL EDR , WINDOWS AD , WINDOWS DEFENDER ATP , WINDOWS DEFENDER AV , WINDOWS DHCP , WINDOWS DNS , WINDOWS FIREWALL , WINDOWS SYSMON , WINEVTLOG Okta OKTA , OKTA ACCESS GATEWAY , OKTA USER CONTEXT Other BARRACUDA FIREWALL , BOX , BRO DNS , CB APP CONTROL , CB DEFENSE , CB EDR , CHECKPOINT EDR , CHECKPOINT FIREWALL , CLOUDFLARE WAF , CYBERARK EPM , CYBEREASON EDR , DUO AUTH , DUO USER CONTEXT , ELASTIC EDR , F5 AFM , F5 ASM , F5 BIGIP LTM , FIREEYE HX , FIREEYE NX , FORCEPOINT FIREWALL , INFOBLOX DNS , JUNIPER FIREWALL , KEYCLOAK , LIMACHARLIE EDR , MALWAREBYTES EDR , MCAFEE EDR , NETFILTER IPTABLES , ONELOGIN SSO , ONE IDENTITY IDENTITY MANAGER , OPENSSH , PAN FIREWALL , PING , SALESFORCE , SEP , SOPHOS EDR , SOPHOS FIREWALL , SQUID WEBPROXY , SURICATA EVE , SURICATA IDS , SYMANTEC EDR , TANIUM EDR , TANIUM THREAT RESPONSE , TRENDMICRO EDR , UMBRELLA DNS , UMBRELLA FIREWALL , UMBRELLA WEBPROXY , ZEEK , ZSCALER FIREWALL , ZSCALER WEBPROXY .
- Investigation tools The agent uses the following built-in tools to complete its analysis: Dynamic search queries: Runs and refines searches in SecOps to collect additional context for the alert.
- View an alert or re-run an investigation The investigation panel lets you take the following actions: View alert : Opens the alert details in the Google SecOps SIEM view.
- Supported fields include: detection.rule id detection.rule name udm.metadata.event type udm.metadata.log type udm.metadata.product event type udm.metadata.product name udm.metadata.vendor name udm.about.entity metadata.product name udm.principal.user.userid Select an operator to evaluate the field ( = or != ).

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE = os.path.join(os.environ['HOME'], 'bk credentials.json') Create a credential using the Google Developer Service Account Credential and Backstory API scope. credentials = service account.Credentials.from service account file( SERVICE ACCOUNT FILE, scopes=SCOPES) Build an HTTP client which can make authorized OAuth requests. http client = auth.authorized http(credentials) Construct the URL BACKSTORY API V1 URL = 'https://backstory.googleapis.com/v1' LIST IOC DETAILS URL = '{}/artifact/listiocdetails?artifact.domain name=www.altostrat.com' .format(BACKSTORY API V1 URL) Make a request response = http client.request(LIST IOC DETAILS URL, 'GET') Parse the response if response[0].status == 200: iocs = response[1] List of sources returned for further processing print(iocs) else: An error occurred.
- Specify one of the following user indicators: email username Windows SID employee ID product object ID user.username string entity.user.userid user.windows sid string entity.user.windows sid user.employee id string entity.user.employee id user.product object id string entity.user.product object id start time time NA Start time for your request. end time time NA End time for your request. page size integer NA Specify the maximum number of assets to return.
- Request GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time range.start time=<start time>&time range.end time=<end time>&limit=<limit> Parameters Parameter Name Type Description query string UDM search query. time range.start time ISO 8601 format Inclusive start time. time range.end time ISO 8601 format Exclusive end time. limit integer (Optional) The maximum number of matched events to return.
- Specify one of the following asset indicators: hostname IP address MAC address product ID asset.asset ip address Asset IP address entity.asset.ip asset.mac Asset MAC address entity.asset.mac asset.product id integer entity.asset.asset id start time time NA Start time of your request. end time time NA End time for your request. page size integer NA Specify the maximum number of aliases to return.

