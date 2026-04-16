---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.672Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Extension Details"
feature_slug: "get-extension-details"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
keywords:
  - "get"
  - "extension"
  - "details"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "retrieves"
---

# Get Extension Details

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that retrieves browser extension details.

## Extended Definition

Adds an action that retrieves browser extension details.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)

## Supporting Pages

### "Integrate Atlassian Confluence Server with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/atlassian-confluence-server)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON result { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "title" , "body" : { "storage" : { "value" : "<p>test page</p><p>11</p><p>aa</p><p>aa</p><p>aa</p><p><br /></p><p><br /></p>" , "representation" : "storage" , " expandable" : { "content" : "/rest/api/content/ PAGE ID " } }, " expandable" : { "editor" : "" , "view" : "" , "export view" : "" , "styled view" : "" , "anonymous export view" : "" } }, "extensions" : { "position" : "none" }, " links" : { "webui" : "/display/SIEM/111" , "edit" : "/pages/resumedraft.action?draftId= PAGE ID &draftShareId=cf8b3a21-8e36-4a83-a696-51fcb4428d1c" , "tinyui" : "/x/TIAB" , "collection" : "/rest/api/content" , "base" : "http://192.0.2.45:8090" , "context" : "" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/SIEM" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" , "space" : "/rest/api/space/SIEM" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If page is found (is success = true): print "Successfully fetched page information with id: <id>" If data is not available (is success=false): print "The following page id was not found in the Atlassian Confluence Server: <page id>" The action should fail and stop a playbook execution: If fatal error, like wrong credentials, no connection to server, other: "Error executing action "<Action name>".
- JSON result { "results" : [ { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "Tell people what you think in a comment (step 8 of 9)" , "space" : { "id" : 131073 , "key" : "ds" , "name" : "Demonstration Space" , "type" : "global" , " links" : { "webui" : "/display/ds" , "self" : "http://192.0.2.45:8090/rest/api/space/ds" }, " expandable" : { "metadata" : "" , "icon" : "" , "description" : "" , "retentionPolicy" : "" , "homepage" : "/rest/api/content/ PAGE ID " } }, "extensions" : { "position" : 7 }, " links" : { "webui" : "/pages/viewpage.action?pageId= PAGE ID " , "edit" : "/pages/resumedraft.action?draftId= DRAFT ID " , "tinyui" : "/x/AYAB" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/ds" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "body" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" } }, ... ], "start" : 0 , "limit" : 5 , "size" : 5 , " links" : { "self" : "http://192.0.2.45:8090/rest/api/content?expand=space" , "next" : "/rest/api/content?expand=space&limit=5&start=5" , "base" : "http://192.0.2.45:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If data is available(is success = true): print "Successfully found pages for the provided criteria in Atlassian Confluence Server".
- JSON result { "results" : [ { "id" : " ID " , "type" : "comment" , "status" : "current" , "title" : "Re: 111" , "body" : { "storage" : { "value" : "<p>comment1</p>" , "representation" : "storage" , " expandable" : { "content" : "/rest/api/content/ ID " } }, " expandable" : { "editor" : "" , "view" : "" , "export view" : "" , "styled view" : "" , "anonymous export view" : "" } }, "extensions" : { "location" : "footer" , " expandable" : { "resolution" : "" } }, " links" : { "webui" : "/display/SIEM/111?focusedCommentId=98387#comment- ID " , "self" : "http://203.0.113.1:8090/rest/api/content/ ID " }, " expandable" : { "container" : "/rest/api/content/ ID " , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ ID /child" , "restrictions" : "/rest/api/content/ ID /restriction/byOperation" , "history" : "/rest/api/content/ ID /history" , "ancestors" : "" , "version" : "" , "descendants" : "/rest/api/content/ ID /descendant" , "space" : "/rest/api/space/SIEM" } }, ... ], "start" : 0 , "limit" : 10 , "size" : 2 , " links" : { "self" : "http://203.0.113.1:8090/rest/api/content/ ID /child/comment?expand=body.storage" , "base" : "http://203.0.113.1:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: If data is available(is success = true): print "Successfully fetched page comments for the provided Atlassian Confluence Server page id: <page id>".
- JSON result { "results" : [ { "id" : " PAGE ID " , "type" : "page" , "status" : "current" , "title" : "test child page!" , "extensions" : { "position" : "none" }, " links" : { "webui" : "/pages/viewpage.action?pageId= PAGE ID " , "edit" : "/pages/resumedraft.action?draftId= PAGE ID &draftShareId=799fd068-5053-4889-9120-c1a3c970fdbd" , "tinyui" : "/x/T4AB" , "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID " }, " expandable" : { "container" : "/rest/api/space/SIEM" , "metadata" : "" , "operations" : "" , "children" : "/rest/api/content/ PAGE ID /child" , "restrictions" : "/rest/api/content/ PAGE ID /restriction/byOperation" , "history" : "/rest/api/content/ PAGE ID /history" , "ancestors" : "" , "body" : "" , "version" : "" , "descendants" : "/rest/api/content/ PAGE ID /descendant" , "space" : "/rest/api/space/SIEM" } } ], "start" : 0 , "limit" : 1 , "size" : 1 , " links" : { "self" : "http://192.0.2.45:8090/rest/api/content/ PAGE ID /child/page" , "base" : "http://192.0.2.45:8090" , "context" : "" } } Case wall Result type Value/Description Type (Entity/General) Output message The action should not fail nor stop a playbook execution: if data is available (is success = true): print "Successfully found child pages for the provided Atlassian Confluence Server page id: <page id>".

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message In case of error: "Failed to get details about AlienVault Anywhere alarm!
- Get Alarm Details Retrieves details for an alarm by ID.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Example: apt Only Suspicious Entity Insight Checkbox Unchecked Yes If enabled, action will create insight only for entities that exceeded the Severity Threshold and Confidence Threshold.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.

