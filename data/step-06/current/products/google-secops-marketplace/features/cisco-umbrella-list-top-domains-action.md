---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.662Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Cisco Umbrella List Top Domains action"
feature_slug: "cisco-umbrella-list-top-domains-action"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
keywords:
  - "cisco"
  - "umbrella"
  - "list"
  - "top"
  - "domains"
  - "action"
  - "adds"
  - "an"
---

# Cisco Umbrella List Top Domains action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that lists top domains in Cisco Umbrella.

## Extended Definition

Adds an action that lists top domains in Cisco Umbrella.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)

## Supporting Pages

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run On This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully added tags to the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If not found specific entities (is success=true): "The following entities were not found in Anomali ThreatStream\n: {0}".format([entity.identifier]) If not found all entities (is success=false): "None of the provided entities were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Add Tags To Entities".

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ 'PolicyName' : 's tr i n g' , 'PolicyId' : 's tr i n g' , 'Ar n ' : 's tr i n g' , 'Pa t h' : 's tr i n g' , 'De fault Versio n Id' : 's tr i n g' , 'A tta chme nt Cou nt ' : 123 , 'Permissio ns Bou n daryUsageCou nt ' : 123 , 'IsA tta chable' : True False , 'Descrip t io n ' : 's tr i n g' , 'Crea te Da te ' : "2020-12-6T17:16:45" , 'Upda te Da te ' : "2020-12-6T17:16:45" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available policies in AWS IAM" If 'Max Policies' value < matched policies based on the filter: Print "Successfully listed available policies in AWS IAM.

### "AWS IAM Access Analyzer \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "178" , "content-type" : "application/json" , "date" : "Sun, 22 Nov 2020 09:22:03 GMT" , "x-amz-apigw-id" : "WZwVQFICIAMFjnQ=" , "x-amzn-requestid" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "x-amzn-trace-id" : "Root=1-5fba2dbb-042d89bb2964e4f635bd7843" }, "HTTPStatusCode" : 200 , "RequestId" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "RetryAttempts" : 0 }, "resource" : { "analyzedAt" : da tet ime.da tet ime( 2020 , 11 , 22 , 9 , 21 , 50 , 919000 , t zi nf o= t zu t c()) , "isPublic" : False , "resourceArn" : "arn:aws:s3:::asddsa" , "resourceOwnerAccount" : "582302349248" , "resourceType" : "AWS::S3::Bucket" }} Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned scans for at least one (is success = true) : print"Successfully scanned the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for at least one (is success = true): print"Action wasn't able to scan the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for all (is success = false): print"No resources were scanned." Async Message: "Waiting for the following resources to be scanned using AWS IAM Access Analyzer: {0}".format(unprocessed resources) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Scan Resources".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If no raised errors from SDK (is success = true) : print"Successfully archived finding with ID '{0}' in AWS IAM Access Analyzer".format(Finding ID) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Archive Finding".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully connected to the AWS IAM Access Analyzer server with the provided connection parameters!" The action should fail and stop a playbook execution: if not successful: print "Failed to connect to the AWS IAM Access Analyzer server!
- Use Cases Ingest findings into Google Security Operations for investigation Active actions - update insights, scan resources Configure AWS IAM Access Analyzer integration in Google SecOps For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can install a forwarder with two syslog collectors listening for PAN FIREWALL and CISCO ASA FIREWALL data on separate ports, respectively.
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56?updateMask=displayName,config.logType,config.metadata.assetNamespace,config.syslogSettings.protocol { "display name": "UpdatedCollector" "config": { "metadata": { "asset namespace": "COLLECTOR", }, "log type": "CISCO ASA FIREWALL", "syslog settings": { "protocol": "TCP", } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56", "displayName": "UpdatedCollector", "config": { "logType": "CISCO ASA FIREWALL", "metadata": { "assetNamespace": "COLLECTOR" }, "maxSecondsPerBatch": 10, "maxBytesPerBatch": "1048576", "syslogSettings": { "protocol": "TCP", "address": "0.0.0.0", "port": 10514, } }, "state": "ACTIVE" } Delete Collector Deletes a collector.
- The default is false . pcap settings.network interface string Optional The interface to listen to for PCAP data. pcap settings.bpf string Optional The Berkeley Packet Filter (BPF) for pcap. splunk settings.authentication.username string Optional The username of an identity used for authentication. splunk settings.authentication.password string Optional The password of the account identified by the username. splunk settings.host string Optional The host or IP address for the Splunk REST API. splunk settings.port integer Optional The port for the Splunk REST API. splunk settings.minimum window size integer Optional The minimum time range in seconds for a given Splunk search.

