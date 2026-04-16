---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.667Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Scan Endpoint"
feature_slug: "scan-endpoint"
latest_feature_date: "2025-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
keywords:
  - "scan"
  - "endpoint"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "scans"
  - "in"
---

# Scan Endpoint

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that scans an endpoint in Palo Alto XDR.

## Extended Definition

Adds an action that scans an endpoint in Palo Alto XDR.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)

## Supporting Pages

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters N/A Run on The action doesn't run on entities.
- Search in last x scans Integer 25 Yes Search for report for provide filehash in the last x analysis executed in ANY.RUN.
- Search in last x scans Integer 100 Yes Search for report in the last x analysis executed in ANY.RUN.
- Report also can be obtained later with Get report action once scan is completed.

### "Integrate LevelBlue USM Appliance with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply AlientVault Severity Returns if it exists in JSON result AlientVault Service Returns if it exists in JSON result AlientVault Vulnerability Returns if it exists in JSON result AlientVault Scan Time Returns if it exists in JSON result AlientVault Asset Returns if it exists in JSON result AlientVault Id Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : [{ "Severity" : "High" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP Sequence Number Approximation Reset Denial of Service Vulnerability" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123456" }, { "Severity" : "High" , "Service" : "https (443/tcp)" , "Vulnerability" : "robot(s).txt exists on the Web Server" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123457" }, { "Severity" : "Medium" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP timestamps" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123458" }], "Entity" : "test" } ] Fetch Last PCAP Files Fetch last PCAP files from AlienVault.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "scan name" : "pcap file 1545041396 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041397 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041398 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" } ] Get PCAP Files for Events Get PCAP files for events in an alert.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C22835597DE0AF71A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" }, { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C228351E697DE071A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" }, { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C22835597DE0AF71A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" } ] Ping Test the connectivity.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.

### "AWS IAM Access Analyzer \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "178" , "content-type" : "application/json" , "date" : "Sun, 22 Nov 2020 09:22:03 GMT" , "x-amz-apigw-id" : "WZwVQFICIAMFjnQ=" , "x-amzn-requestid" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "x-amzn-trace-id" : "Root=1-5fba2dbb-042d89bb2964e4f635bd7843" }, "HTTPStatusCode" : 200 , "RequestId" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "RetryAttempts" : 0 }, "resource" : { "analyzedAt" : da tet ime.da tet ime( 2020 , 11 , 22 , 9 , 21 , 50 , 919000 , t zi nf o= t zu t c()) , "isPublic" : False , "resourceArn" : "arn:aws:s3:::asddsa" , "resourceOwnerAccount" : "582302349248" , "resourceType" : "AWS::S3::Bucket" }} Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned scans for at least one (is success = true) : print"Successfully scanned the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for at least one (is success = true): print"Action wasn't able to scan the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for all (is success = false): print"No resources were scanned." Async Message: "Waiting for the following resources to be scanned using AWS IAM Access Analyzer: {0}".format(unprocessed resources) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Scan Resources".
- Use Cases Ingest findings into Google Security Operations for investigation Active actions - update insights, scan resources Configure AWS IAM Access Analyzer integration in Google SecOps For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .
- Reason: {0}''.format(error.Stacktrace) If Analyzer is not found: print "Error executing action "Scan Resources".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If no raised errors from SDK (is success = true) : print"Successfully archived finding with ID '{0}' in AWS IAM Access Analyzer".format(Finding ID) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Archive Finding".

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Possible values: adware , anomalous , anonymization , apt , bot , brute , c2 , compromised , crypto , data leakage , ddos , dyn dns , exfil , exploit , fraud , hack tool , i2p , informational , malware , p2p , parked , phish , scan , sinkhole , spam , suppress , suspicious , tor , vps Trusted Circle Filter CSV N/A No Comma-separated list of trusted circle ids that should be used to ingest observables, such as 146,147 .
- Example: apt Only Suspicious Entity Insight Checkbox Unchecked Yes If enabled, action will create insight only for entities that exceeded the Severity Threshold and Confidence Threshold.

