---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.931Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "IP list: Crypto miners"
feature_slug: "ip-list-crypto-miners"
latest_feature_date: "2024-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
keywords:
  - "ip"
  - "list"
  - "crypto"
  - "miners"
  - "network"
  - "threat"
  - "intelligence"
  - "feed"
---

# IP list: Crypto miners

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

A Network Threat Intelligence feed for crypto miners is now available.

## Extended Definition

A Network Threat Intelligence feed for crypto miners is now available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)

## Supporting Pages

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run On This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully added tags to the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If not found specific entities (is success=true): "The following entities were not found in Anomali ThreatStream\n: {0}".format([entity.identifier]) If not found all entities (is success=false): "None of the provided entities were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Add Tags To Entities".

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Possible values: Plaintext Structured Threat Information Expression (STIX) Open Threat Exchange (OTX) CSV FireEye iSIGHT Threat Intelligence CSV Proofpoint ET Intelligence Feed CSV AlienVault Reputation Feed File Location String https://s3.amazonaws.com/{bucket-name}/file.txt Yes Specify the URI location, where the file is located Activate Checkbox Checked Yes If enabled, the newly created Trusted IP List is activated.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully deleted the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If unsuccessful for some of the IDs (is success=true): "Action wasn't able to delete the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used: "No Threat Intelligence Sets were deleted.".format(list of ids) The action should fail and stop a playbook execution: Invalid detector ID should raise an exception as well, stop the playbook and set is success to false.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ThreatIntelSetIds" : [ "14ba8b942b76c1be6d985715eb7443eb" , "32ba8b92e553fe04d06dab543ed57a70" , "8aba8b93ba6e08e8fd5349b2c2b57709" ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed available sets (is success=true): "Successfully listed available Threat Intelligence Sets." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The first argument is the Google Threat Intelligence feed name, such as iplist-known-malicious-ips .
- Preconfigured WAF rule examples The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following expression uses all the expressions from the xss-v422-stable preconfigured WAF rule except for member IDs 941100 and 941110 : evaluatePreconfiguredWaf('xss-v422-stable', {'opt out rule ids': ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941110-xss']}) The following expression uses a preconfigured WAF rule to mitigate SQLi attacks from the 198.51.100.0/24 IP address range: inIpRange(origin.ip, '198.51.100.0/24') && evaluatePreconfiguredWaf('sqli-v422-stable') The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks for requests to example.com , excluding paths that start with /login/api/ : request.headers['host'].lower() == 'example.com' && !request.path.startswith('/login/api/') && evaluatePreconfiguredWaf('xss-v422-stable') Other operators Expressions Description evaluateThreatIntelligence(string) evaluateThreatIntelligence(string, LIST) evaluateThreatIntelligence(string, string, LIST) Returns true if the client IP address matches any of the IP ranges in the given IP list, unless explicitly excluded with the exclusion list.
- The exclusion list is useful when a feed contains some IP address that triggers a false positive.

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entity Any/Run Report Entity identifier for which insight is created Value from api response Value from api response Value from api response Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "analysis" :{ "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" :{ "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" :{ "name" : "ANY.RUN - Interactive Sandbox" , "plan" :{ "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" :[ ], "options" :{ "timeout" : 60 , "additionalTime" : 0 , "fakeNet" : false , "heavyEvasion" : false , "mitm" : false , "tor" :{ "used" : false , "geo" : "fastest" }, "presentation" : false , "video" : true , "hideSource" : false , "network" : true , "privacy" : "bylink" , "privateSample" : false , "automatization" :{ "uac" : false } }, "scores" :{ "verdict" :{ "score" : 100 , "threatLevel" : 2 , "threatLevelText" : "Malicious activity" }, "specs" :{ "injects" : false , "autostart" : false , "cpuOverrun" : false , "crashedApps" : false , "crashedTask" : false , "debugOutput" : false , "executableDropped" : false , "exploitable" : false , "lowAccess" : false , "memOverrun" : false , "multiprocessing" : true , } } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successful and got a report for at least one of the provided entities: "Found ANY.RUN reports for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment Field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "tasks" :[ { "verdict" : "No threats detected" , "name" : "http://users.tpg.com.au/locthuy/employment/qs/unix/Hardening%20your%20AIX%20Security.pdf" , "related" : "https://app.any.run/tasks/ ID " , "pcap" : "https://content.any.run/tasks/ ID /download/pcap" , "file" : "https://content.any.run/tasks/ ID /download/files/ FILE NAME " , "json" : "https://api.any.run/report/ ID /summary/json" , "misp" : "https://api.any.run/report/ ID /summary/misp" , "tags" :[ ], "date" : "2020-10-12T08:05:57.587Z" , "hashes" :{ "ssdeep" : "768:iSDksqjqvXbB/6rtilCec397sUiZc9Yky:TDegY539gUiCXy" , "head hash" : "3c90557306fa01f30693541b28db5785" , "sha256" : "8ebc1257f9155134bb00315bdd2380990cdc413ba298d0cf473579ccfe03d6e5" , "sha1" : "c125ba414416668b84ac737ec6db1b7f94bf32af" , "md5" : "5e19377a19ef7657707872377bea14b7" } } ] } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successful and found reports: "Found ANY.RUN reports for the provided search parameters".
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters Parameter name Type Default value Is mandatory Description Threshold Integer 0 Yes Mark entity as suspicious if the score value for the entity is above the specified threshold.

