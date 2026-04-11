---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.924Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "strings.ends_with"
feature_slug: "strings-ends-with"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "strings"
  - "ends"
  - "with"
  - "yara"
  - "function"
  - "that"
  - "returns"
  - "true"
---

# strings.ends_with

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

A YARA-L function that returns true when a string ends with a non-empty suffix.

## Extended Definition

A YARA-L function that returns true when a string ends with a non-empty suffix.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- Aruba Switch ( ARUBA SWITCH ) Azure AD Password Protection ( AZURE AD PASSWORD PROTECTION ) Azure Front Door ( AZURE FRONT DOOR ) Babelforce ( BABELFORCE ) Cloudaware ( CLOUDAWARE ) Coalition Control API ( COALITION ) Crowdstrike Identity Protection Services ( CS IDP ) Cymulate ( CYMULATE ) Dell ECS Enterprise Object Storage ( DELL ECS ) Google Cloud NGFW Enterprise ( GCP NGFW ENTERPRISE ) Google Cloud Secure Web Proxy ( GCP SWP ) HaveIBeenPwned ( HIBP ) HPE BladeSystem C7000 ( HPE BLADESYSTEM C7000 ) HP OpenView ( HP OPENVIEW ) IBM DS8000 Storage ( IBM DS8000 ) IBM-i Operating System ( IBM I ) Multicom Switch ( MULTICOM SWITCH ) Nextthink Finder ( NEXTTHINK FINDER ) Palo Alto Cortex XDR Management Audit ( PAN XDR MGMT AUDIT ) PingIdentity Directory Server Logs ( PING DIRECTORY ) Prisma SD-WAN ( PRISMA SD WAN ) Redhat Jboss ( REDHAT JBOSS ) SafeBreach ( SAFEBREACH ) Scality Ring Audit ( SCALITY RING AUDIT ) Sendsafely ( SENDSAFELY ) Solace Pub Sub Cloud ( SOLACE AUDIT ) Sonicwall Secure Mobile Access ( SONICWALL SMA ) Sonrai Enterprise Cloud Security Solution ( SONRAI ) Tenemos Journey Manager System Event Publisher ( TENEMOS MANAGER SYSTEMEVENT ) TrueFort Platform ( TRUEFORT ) Ubiquiti Accesspoint ( UBIQUITI ACCESSPOINT ) WithSecure Cloud Protection ( WITHSECURE CLOUD ) WithSecure Elements Connector ( WITHSECURE ELEMENTS ) YAMAHA ROUTER RTX1200 ( YAMAHA ROUTER ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following custom log types already reflect the new naming convention: HUAWEI SECMASTER CUSTOM GTI THREAT FEED CUSTOM GTI IOC STREAM CUSTOM ABSOLUTE SECURE ENDPOINT CUSTOM GTI IOC CUSTOM IBM ILO CUSTOM GCP THREATINTEL CUSTOM SAP ETD CUSTOM October 30, 2025 Feature YARA-L functions The following new YARA-L functions are now generally available: strings.ends with : Takes two strings (value, suffix) and returns true if the suffix is non-empty and at end-of-value. strings.split : Splits string value using a delimiter argument (by default, a comma). window.range : Returns the range of the values input values found.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- Aruba Switch ( ARUBA SWITCH ) Azure AD Password Protection ( AZURE AD PASSWORD PROTECTION ) Azure Front Door ( AZURE FRONT DOOR ) Babelforce ( BABELFORCE ) Cloudaware ( CLOUDAWARE ) Coalition Control API ( COALITION ) Crowdstrike Identity Protection Services ( CS IDP ) Cymulate ( CYMULATE ) Dell ECS Enterprise Object Storage ( DELL ECS ) Google Cloud NGFW Enterprise ( GCP NGFW ENTERPRISE ) Google Cloud Secure Web Proxy ( GCP SWP ) HaveIBeenPwned ( HIBP ) HPE BladeSystem C7000 ( HPE BLADESYSTEM C7000 ) HP OpenView ( HP OPENVIEW ) IBM DS8000 Storage ( IBM DS8000 ) IBM-i Operating System ( IBM I ) Multicom Switch ( MULTICOM SWITCH ) Nextthink Finder ( NEXTTHINK FINDER ) Palo Alto Cortex XDR Management Audit ( PAN XDR MGMT AUDIT ) PingIdentity Directory Server Logs ( PING DIRECTORY ) Prisma SD-WAN ( PRISMA SD WAN ) Redhat Jboss ( REDHAT JBOSS ) SafeBreach ( SAFEBREACH ) Scality Ring Audit ( SCALITY RING AUDIT ) Sendsafely ( SENDSAFELY ) Solace Pub Sub Cloud ( SOLACE AUDIT ) Sonicwall Secure Mobile Access ( SONICWALL SMA ) Sonrai Enterprise Cloud Security Solution ( SONRAI ) Tenemos Journey Manager System Event Publisher ( TENEMOS MANAGER SYSTEMEVENT ) TrueFort Platform ( TRUEFORT ) Ubiquiti Accesspoint ( UBIQUITI ACCESSPOINT ) WithSecure Cloud Protection ( WITHSECURE CLOUD ) WithSecure Elements Connector ( WITHSECURE ELEMENTS ) YAMAHA ROUTER RTX1200 ( YAMAHA ROUTER ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

