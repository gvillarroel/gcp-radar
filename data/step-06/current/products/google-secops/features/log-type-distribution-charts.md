---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.785Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Log Type Distribution Charts"
feature_slug: "log-type-distribution-charts"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/apivoid"
keywords:
  - "log"
  - "type"
  - "distribution"
  - "charts"
  - "have"
  - "improved"
  - "readability"
  - "usability"
---

# Log Type Distribution Charts

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Log type distribution charts have improved readability and usability.

## Extended Definition

Log type distribution charts have improved readability and usability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/apivoid](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/apivoid)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- Charts show a limited number of values to maintain readability.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Distribution by Events Count : displays the log types distribution based on the number of events for each log type.
- Log Type Distribution by Throughput : displays the log types distribution based on the throughput.
- For example, you might find that a particular user has attempted to access your enterprise from a country where you don't have an office or that an specific user appears to repeatedly access an accounting application.
- Ingestion - Events by Log Type : displays events based on log type—sortable by column: Log Type , Ingested Throughput , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .

### "Integrate APIVoid with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/apivoid](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/apivoid)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True/False is success:False JSON result [ { "EntityResult" : { "domain" : "example.com" , "valid tld" : true , "email" : "user@example.co" , "role address" : false , "should block" : false , "risky tld" : false , "dirty words username" : false , "suspicious domain" : false , "score" : 100 , "educational domain" : false , "dirty words domain" : false , "did you mean" : " " , "username" : "user" , "valid format" : true , "is spoofable " : false , "disposable" : false , "government domain" : false , "has spf records" : true , "domain popular" : false , "has mx records" : true , "china free email" : false , "free email" : false , "russian free email" : false , "police domain" : false , "dmarc enforced" : false , "suspicious username" : false }, "Entity" : "USER@EXAMPLE.COM" } ] Case wall Result type Description Type Output message Successful entities: "APIVoid: Added screenshots for the following entities: <entities identifier list>" Failed entities: "An error occurred on the following entities: <entities identifier list>" Missing entities (no data): 'No screenshots found for the following entities: <entities identifier list>" Alert without URL entities: "APIVoid: No URL entities found for capturing screenshots." To big entities (attachment file size > 3MB): "Failed to add screenshots as attachments on the following entities: <<entities identifier list>>" General Attachments If data is available, create a new file object: attachment title: 'Screenshot - {0}'.format(entity.identifier) filename should be the URL without the suffix (https/http) + ' capture.<file format>' screenshot is returned in base64 encoded string --> file content should be b64decode(data.get('base64 file')) Don't forget to add try, except - we have 3MB limitation from the platform.
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True/False is success:False JSON result [ { "EntityResult" : { "domain blacklist" : { "detections" : 0 , "engines" : [{ "detected" : false , "name" : "SpamhausDBL" , "reference" : "https://www.spamhaus.org/lookup/" }, { "detected" : false , "name" : "ThreatLog" , "reference" : "http://www.threatlog.com/" }, { "detected" : false , "name" : "OpenPhish" , "reference" : "http://www.openphish.com/" }, { "detected" : false , "name" : "PhishTank" , "reference" : "http://www.phishtank.com/" }, { "detected" : false , "name" : "Phishing.Database" , "reference" : "https://github.com/mitchellkrogza/Phishing.Database" }, { "detected" : false , "name" : "PhishStats" , "reference" : "https://phishstats.info/" }, { "detected" : false , "name" : "URLVir" , "reference" : "http://www.urlvir.com/" }, { "detected" : false , "name" : "URLhaus" , "reference" : "https://urlhaus.abuse.ch/" }, { "detected" : false , "name" : "RPiList Not Serious" , "reference" : "https://github.com/RPiList/specials" }, { "detected" : false , "name" : "precisionsec" , "reference" : "https://precisionsec.com/" }, { "detected" : false , "name" : "AntiSocial Blacklist" , "reference" : "https://theantisocialengineer.com/" }, { "detected" : false , "name" : "PhishFeed" , "reference" : "https://phishfeed.com/" }, { "detected" : false , "name" : "Spam404" , "reference" : "https://www.spam404.com/" }]}, "html forms" : { "number of total input fields" : 0 , "email field present" : false , "number of total forms" : 0 , "password field present" : false , "two text inputs in a form" : false , "credit card field present" : false }, "server details" : { "continent name" : "Asia" , "hostname" : "example.com" , "region name" : "Seoul-teukbyeolsi" , "ip" : "192.0.2.141" , "isp" : "Example Corporation" , "continent code" : "AS" , "country name" : "Korea (Republic of)" , "city name" : "Seoul" , "longitude" : 126.97782897949219 , "country code" : "KR" , "latitude" : 37.568260192871094 }, "response headers" : { "status" : "HTTP/1.1 404 Not Found" , "content-length" : "177" , "code" : 404 , "server" : "nginx/1.4.6 (Ubuntu)" , "connection" : "keep-alive" , "date" : "Wed, 15 Jul 2020 08:21:54 GMT" , "content-type" : "text/html" }, "redirection" : { "url" : null , "found" : false , "external" : false }, "file type" : { "headers" : "HTML" , "extension" : "HTML" , "signature" : " " }, "risk score" : { "result" : 10 }, "security checks" : { "is suspended page" : false , "is defaced heuristic" : false , "is windows exe file" : false , "is credit card field" : false , "is windows exe file on free hosting" : false , "is masked linux elf file" : false , "is exe on directory listing" : false , "is php on directory listing" : false , "is masked windows exe file" : false , "is sinkholed domain" : false , "is robots noindex" : false , "is windows exe file on free dynamic dns" : false , "is doc on directory listing" : false , "is non standard port" : false , "is linux elf file on free dynamic dns" : false , "is suspicious domain" : false , "is suspicious url pattern" : false , "is china country" : false , "is risky geo location" : false , "is pdf on directory listing" : false , "is valid https" : false , "is external redirect" : false , "is windows exe file on ipv4" : false , "is phishing heuristic" : false , "is linux elf file on ipv4" : false , "is email address on url query" : false , "is uncommon clickable url" : false , "is most abused tld" : false , "is domain blacklisted" : false , "is host an ipv4" : false , "is linux elf file on free hosting" : false , "is zip on directory listing" : false , "is password field" : false , "is linux elf file" : false , "is empty page title" : false , "is directory listing" : false , "is masked file" : false , "is suspicious file extension" : false , "is suspicious content" : false }, "geo location" : { "countries" : [ "KR" ] }, "url parts" : { "host nowww" : "example.com" , "host" : "www.example.com" , "path" : "/dynamic/example.html" , "query" : null , "scheme" : "http" , "port" : 80 }, "site category" : { "is vpn provider" : false , "is url shortener" : false , "is anonymizer" : false , "is torrent" : false , "is free dynamic dns" : false , "is free hosting" : false }, "web page" : { "keywords" : "" , "description" : "" , "title" : "404 Not Found" }, "dns records" : { "ns" : { "records" : [{ "country name" : "Korea (Republic of)" , "ip" : "192.0.2.95" , "isp" : "Example Corporation" , "target" : "example.com" , "country code" : "KR" }, { "country name" : "Korea (Republic of)" , "ip" : "192.0.2.26" , "isp" : "LX" , "target" : "example.com" , "country code" : "KR" }]}, "mx" : { "records" : [] }}}, "Entity" : "www.example.com:80/dynamic/example.html" } ] Case wall Result type Description Type Output message Successful entities: "APIVoid: Fetched reputation for the following entities: <entities identifer list> Failed entities: "An error occurred on the following entities: <entities identifer list>" Missing entities (no data): 'Can not found reputation for the following entities: <entities identifer list>" Alert without URL entities: "APIVoid: No URLs found." General CSV Case wall If data available create new entity csv table: domain blocklist report: data.get("report",{}).get("domain blacklist",{}).get("engines", []) General Enrichment If data available add the following as entity enrichment: (don't forget to add prefix "APIVoid") geo location: data.get("report",{}).get("geo location",{}).get("countries", []) is suspicious domain: data.get("report",{}).get("security checks",{}).get("is suspicious domain") is domain blacklisted: data.get("report",{}).get("security checks",{}).get("is domain blacklisted") is risky geo location: data.get("report",{}).get("security checks",{}).get("is risky geo location") risk score: data.get("report", {}).get("risk score", {}).get("result") is external redirect: data.get("report",{}).get("security checks",{}).get("is external redirect") Entity Get Screenshot Capture a high-quality screenshot of any website or URL.
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True/False is success:False JSON result [ { "EntityResult" : { "domain" : "example.com" , "valid tld" : true , "email" : "user@example.com" , "role address" : false , "should block" : false , "risky tld" : false , "dirty words username" : false , "suspicious domain" : false , "score" : 100 , "educational domain" : false , "dirty words domain" : false , "did you mean" : " " , "username" : "user" , "valid format" : true , "is spoofable " : false , "disposable" : false , "government domain" : false , "has spf records" : true , "domain popular" : false , "has mx records" : true , "china free email" : false , "free email" : false , "russian free email" : false , "police domain" : false , "dmarc enforced" : false , "suspicious username" : false }, "Entity" : "USER@EXAMPLE.COm" } ] Case wall Result type Description Type Output message successful entities: "APIVoid: Fetched information for the following entities: <entities identifer list> Failed entities: "An error occurred on the following entities: <entities identifer list>" Missing entities (no data): 'Can not found information for the following entities: <entities identifer list>" Alert without URL entities: "APIVoid: No emails found." General CSV Case wall CSV content: entity data(example below) General Enrichment If data available add the following as entity enrichment: (don't forget to add prefix "APIVoid") suspicious domain: data.get("suspicious domain") should block: data.get("should block") score: data.get("score") disposable: data.get("disposable") has mx records: data.get("has mx records") has spf records: data.get("has spf records") Entity Need more help?
- Network Function Default port Direction Protocol API Multivalues Outbound apikey Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Instance Name String N/A No Name of the Instance you intend to configure integration for.

