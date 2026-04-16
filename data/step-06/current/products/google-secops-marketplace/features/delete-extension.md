---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.672Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Delete Extension"
feature_slug: "delete-extension"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
keywords:
  - "delete"
  - "extension"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "deletes"
  - "browser"
---

# Delete Extension

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that deletes a browser extension.

## Extended Definition

Adds an action that deletes a browser extension.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For the following feed sources ( "feedSourceType" ): GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 , the SOURCE DELETION OPTION field offers two options: NEVER : Never deletes any files after transfers.
- Record and delete existing feeds (before migration) : Before you begin the BYOP migration, record the configuration settings for all existing feeds that use the impacted connectors (for example, Amazon S3 V2), and then delete the feeds.
- Note: When you configure the SOURCE DELETION OPTION field, if you select an option to delete source objects, you must enable the required deletion permissions for that feed type.
- ON SUCCESS : Deletes all files and empty directories after transfer.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56?updateMask=displayName,config.logType,config.metadata.assetNamespace,config.syslogSettings.protocol { "display name": "UpdatedCollector" "config": { "metadata": { "asset namespace": "COLLECTOR", }, "log type": "CISCO ASA FIREWALL", "syslog settings": { "protocol": "TCP", } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56", "displayName": "UpdatedCollector", "config": { "logType": "CISCO ASA FIREWALL", "metadata": { "assetNamespace": "COLLECTOR" }, "maxSecondsPerBatch": 10, "maxBytesPerBatch": "1048576", "syslogSettings": { "protocol": "TCP", "address": "0.0.0.0", "port": 10514, } }, "state": "ACTIVE" } Delete Collector Deletes a collector.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56?updateMask=displayName,config.metadata.labels { "display name": "UpdatedForwarder", "config": { "metadata": { "labels": [ { "key": "office", "value": "corporate", } ] } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/{forwarderUUID}", "displayName": "UpdatedForwarder", "config": { "uploadCompression": "false", "metadata": { "labels": [ { "key": "office", "value": "corporate" } ] } }, "state": "ACTIVE" } Delete Forwarder Deletes a forwarder.
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.

### "Integrate Atlassian Confluence Server with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- JSON result { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "title" , "body" : { "storage" : { "value" : "<p>test page</p><p>11</p><p>aa</p><p>aa</p><p>aa</p><p><br /></p><p><br /></p>" , "representation" : "storage" , " expandable" : { "content" : "/rest/api/content/ PAGE ID " } }, " expandable" : { "editor" : "" , "view" : "" , "export view" : "" , "styled view" : "" , "anonymous export view" : "" } }, "extensions" : { "position" : "none" }, " links" : { "webui" : "/display/SIEM/111" , "edit" : "/pages/resumedraft.action?draftId= PAGE ID &draftShareId=cf8b3a21-8e36-4a83-a696-51fcb4428d1c" , "tinyui" : "/x/TIAB" , "collection" : "/rest/api/content" , "base" : "http://192.0.2.45:8090" , "context" : "" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/SIEM" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" , "space" : "/rest/api/space/SIEM" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If page is found (is success = true): print "Successfully fetched page information with id: <id>" If data is not available (is success=false): print "The following page id was not found in the Atlassian Confluence Server: <page id>" The action should fail and stop a playbook execution: If fatal error, like wrong credentials, no connection to server, other: "Error executing action "<Action name>".
- JSON result { "results" : [ { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "Tell people what you think in a comment (step 8 of 9)" , "space" : { "id" : 131073 , "key" : "ds" , "name" : "Demonstration Space" , "type" : "global" , " links" : { "webui" : "/display/ds" , "self" : "http://192.0.2.45:8090/rest/api/space/ds" }, " expandable" : { "metadata" : "" , "icon" : "" , "description" : "" , "retentionPolicy" : "" , "homepage" : "/rest/api/content/ PAGE ID " } }, "extensions" : { "position" : 7 }, " links" : { "webui" : "/pages/viewpage.action?pageId= PAGE ID " , "edit" : "/pages/resumedraft.action?draftId= DRAFT ID " , "tinyui" : "/x/AYAB" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/ds" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "body" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" } }, ... ], "start" : 0 , "limit" : 5 , "size" : 5 , " links" : { "self" : "http://192.0.2.45:8090/rest/api/content?expand=space" , "next" : "/rest/api/content?expand=space&limit=5&start=5" , "base" : "http://192.0.2.45:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If data is available(is success = true): print "Successfully found pages for the provided criteria in Atlassian Confluence Server".
- JSON result { "results" : [ { "id" : " ID " , "type" : "comment" , "status" : "current" , "title" : "Re: 111" , "body" : { "storage" : { "value" : "<p>comment1</p>" , "representation" : "storage" , " expandable" : { "content" : "/rest/api/content/ ID " } }, " expandable" : { "editor" : "" , "view" : "" , "export view" : "" , "styled view" : "" , "anonymous export view" : "" } }, "extensions" : { "location" : "footer" , " expandable" : { "resolution" : "" } }, " links" : { "webui" : "/display/SIEM/111?focusedCommentId=98387#comment- ID " , "self" : "http://203.0.113.1:8090/rest/api/content/ ID " }, " expandable" : { "container" : "/rest/api/content/ ID " , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ ID /child" , "restrictions" : "/rest/api/content/ ID /restriction/byOperation" , "history" : "/rest/api/content/ ID /history" , "ancestors" : "" , "version" : "" , "descendants" : "/rest/api/content/ ID /descendant" , "space" : "/rest/api/space/SIEM" } }, ... ], "start" : 0 , "limit" : 10 , "size" : 2 , " links" : { "self" : "http://203.0.113.1:8090/rest/api/content/ ID /child/comment?expand=body.storage" , "base" : "http://203.0.113.1:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If data is available(is success = true): print "Successfully fetched page comments for the provided Atlassian Confluence Server page id: <page id>".
- JSON result { "results" : [ { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "test child page!" , "extensions" : { "position" : "none" }, " links" : { "webui" : "/pages/viewpage.action?pageId= PAGE ID " , "edit" : "/pages/resumedraft.action?draftId= PAGE ID &draftShareId=799fd068-5053-4889-9120-c1a3c970fdbd" , "tinyui" : "/x/T4AB" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/SIEM" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "body" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" , "space" : "/rest/api/space/SIEM" } } ], "start" : 0 , "limit" : 1 , "size" : 1 , " links" : { "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID /child/page" , "base" : "http://192.0.2.45:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: if data is available (is success = true): print "Successfully found child pages for the provided Atlassian Confluence Server page id: <page id>".

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.

