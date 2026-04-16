---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.655Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Hide Hosts"
feature_slug: "hide-hosts"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer"
keywords:
  - "hide"
  - "hosts"
  - "adds"
  - "an"
  - "action"
  - "for"
  - "hiding"
---

# Hide Hosts

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action for hiding hosts.

## Extended Definition

Adds an action for hiding hosts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)

## Supporting Pages

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Actions For more information about actions, see Respond to pending actions from Your Workdesk and Perform a manual action .
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Entity Any/Run Report Entity identifier for which insight is created Value from api response Value from api response Value from api response Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "analysis" :{ "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" :{ "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" :{ "name" : "ANY.RUN - Interactive Sandbox" , "plan" :{ "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" :[ ], "options" :{ "timeout" : 60 , "additionalTime" : 0 , "fakeNet" : false , "heavyEvasion" : false , "mitm" : false , "tor" :{ "used" : false , "geo" : "fastest" }, "presentation" : false , "video" : true , "hideSource" : false , "network" : true , "privacy" : "bylink" , "privateSample" : false , "automatization" :{ "uac" : false } }, "scores" :{ "verdict" :{ "score" : 100 , "threatLevel" : 2 , "threatLevelText" : "Malicious activity" }, "specs" :{ "injects" : false , "autostart" : false , "cpuOverrun" : false , "crashedApps" : false , "crashedTask" : false , "debugOutput" : false , "executableDropped" : false , "exploitable" : false , "lowAccess" : false , "memOverrun" : false , "multiprocessing" : true , } } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successful and got a report for at least one of the provided entities: "Found ANY.RUN reports for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for at least one of the provided entities: "Created analysis tasks for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment Field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Request example This is an example of an Update Forwarder request where the request specifies new values for displayName and adds a Metadata label.
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56?updateMask=displayName,config.logType,config.metadata.assetNamespace,config.syslogSettings.protocol { "display name": "UpdatedCollector" "config": { "metadata": { "asset namespace": "COLLECTOR", }, "log type": "CISCO ASA FIREWALL", "syslog settings": { "protocol": "TCP", } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56", "displayName": "UpdatedCollector", "config": { "logType": "CISCO ASA FIREWALL", "metadata": { "assetNamespace": "COLLECTOR" }, "maxSecondsPerBatch": 10, "maxBytesPerBatch": "1048576", "syslogSettings": { "protocol": "TCP", "address": "0.0.0.0", "port": 10514, } }, "state": "ACTIVE" } Delete Collector Deletes a collector.
- The default is false . pcap settings.network interface string Optional The interface to listen to for PCAP data. pcap settings.bpf string Optional The Berkeley Packet Filter (BPF) for pcap. splunk settings.authentication.username string Optional The username of an identity used for authentication. splunk settings.authentication.password string Optional The password of the account identified by the username. splunk settings.host string Optional The host or IP address for the Splunk REST API. splunk settings.port integer Optional The port for the Splunk REST API. splunk settings.minimum window size integer Optional The minimum time range in seconds for a given Splunk search.

### "AWS IAM Access Analyzer \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam-access-analyzer)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "178" , "content-type" : "application/json" , "date" : "Sun, 22 Nov 2020 09:22:03 GMT" , "x-amz-apigw-id" : "WZwVQFICIAMFjnQ=" , "x-amzn-requestid" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "x-amzn-trace-id" : "Root=1-5fba2dbb-042d89bb2964e4f635bd7843" }, "HTTPStatusCode" : 200 , "RequestId" : "c15d8ab2-afc7-4cb0-bea2-a47ebc649cb8" , "RetryAttempts" : 0 }, "resource" : { "analyzedAt" : da tet ime.da tet ime( 2020 , 11 , 22 , 9 , 21 , 50 , 919000 , t zi nf o= t zu t c()) , "isPublic" : False , "resourceArn" : "arn:aws:s3:::asddsa" , "resourceOwnerAccount" : "582302349248" , "resourceType" : "AWS::S3::Bucket" }} Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned scans for at least one (is success = true) : print"Successfully scanned the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for at least one (is success = true): print"Action wasn't able to scan the following resources using AWS IAM Access Analyzer: \n".format(Resource IDs) If fail for all (is success = false): print"No resources were scanned." Async Message: "Waiting for the following resources to be scanned using AWS IAM Access Analyzer: {0}".format(unprocessed resources) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Scan Resources".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If no raised errors from SDK (is success = true) : print"Successfully archived finding with ID '{0}' in AWS IAM Access Analyzer".format(Finding ID) The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Archive Finding".
- Use Cases Ingest findings into Google Security Operations for investigation Active actions - update insights, scan resources Configure AWS IAM Access Analyzer integration in Google SecOps For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .
- Reason: {0}''.format(error.Stacktrace) If Analyzer is not found: print "Error executing action "Archive Finding".

