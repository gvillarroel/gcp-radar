---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.677Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Data Tables"
feature_slug: "get-data-tables"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables"
keywords:
  - "get"
  - "tables"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "retrieves"
---

# Get Data Tables

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that retrieves data tables.

## Extended Definition

Adds an action that retrieves data tables.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)

## Supporting Pages

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped list Yes Yes (with scopes that match their assigned scopes or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a reference list with scope A or with scopes A and B, but not with scopes A, B, and C.
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped data table Yes Yes (only with scopes that match or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a data table with scope A or with scopes A and B, but not with scopes A, B, and C.
- The actions that a user can take on a detection (for example, marking a detection as resolved) are also limited to the scope in which the detection occurred.
- Access permissions for users in data tables The scopes that are associated with a data table determine how global and scoped users can interact with it.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message In case of error: "Failed to get details about AlienVault Anywhere alarm!
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.

### "Configure data RBAC for data tables \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Another way of looking at this is from the perspective of a data table: Scoped data tables with selected can be accessed by specific users or rules that have matching scopes.
- In the Data tables window, select the data table that you want to add scopes to.
- In the Data tables window, select the data table that you want to update.
- Configure data RBAC for data tables Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators and users can assign scopes to data tables.

