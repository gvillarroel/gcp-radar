---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.677Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Remove Rows from Data Table"
feature_slug: "remove-rows-from-data-table"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables"
keywords:
  - "remove"
  - "rows"
  - "from"
  - "table"
  - "adds"
  - "an"
  - "action"
  - "that"
---

# Remove Rows from Data Table

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that removes rows from a data table.

## Extended Definition

Adds an action that removes rows from a data table.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)

## Supporting Pages

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<User name> has been removed from group: <Group name>" If error - Group not exist or/and User not exist: group not exist: Print "Could not remove <UserName> from <Group name>.
- If error User limitation - IAM user can be a member of 10 groups Group limitation - 5000 users can be in a group Print "Could not remove <UserName> from <Group name> because it attempted to create resources beyond the current AWS account limits." The action should fail and stop a playbook execution: If not successful (wrong creds, no connection, other sdk error): print "Error executing action 'Remove a User from a Group.
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one tag is removed from one entity (is success=true): "Successfully removed the following tags from the "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If one tag is not found for one entity (is success=true): "The following tags were already not a part of "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If all tags are not found for one entity (is success=true): "None of the provided tags were part of "{entity.identifier}" entity in Anomali ThreatStream." If one entity is not found (is success=true): "The following entities were not found in Anomali ThreatStream\n: {0}".format([entity.identifier]) If all entities are not found (is success=false): "None of the provided entities were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Remove Tags From Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Parameters Parameter name Type Default value Is mandatory Description Tags CSV N/A Yes Specify a comma-separated list of tags that need to be removed from entities in Anomali ThreatStream.
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Security Groups" : [ { "Description" : "launch-wizard-2 created 2021-01-30T19:37:11.523+02:00" , "GroupName" : "launch-wizard-2" , "IpPermissions" :[ { "FromPort" : 22 , "IpProtocol" : "tcp" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "ToPort" : 22 , "UserIdGroupPairs" :[ ] } ], "OwnerId" : "582302349248" , "GroupId" : "sg-001700ccddac4189a" , "IpPermissionsEgress" :[ { "IpProtocol" : "-1" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "UserIdGroupPairs" :[ ] } ], "Tags" :[ { "Key" : "Team" , "Value" : "A-Team" }, { "Key" : "Owner" , "Value" : "Example" } ], "VpcId" : "vpc- ID " } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed groups(is success = true): "Successfully described Amazon EC2 security groups." If no available values(is success = false): "No security groups were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid group ID/Name, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Security Groups".
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "StoppingInstances" : [ { "CurrentState" : "shutting-down" , "InstanceId" : "string" , "PreviousState" : "running" } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If current state of all/few instances is different from: shutting-down, terminated: ( Is success = false): Cannot terminate the following instances from their current state: <failed instance ids> If current state is shutting-down: (is success=true) → action still in progress: Continuing….the requested instances are still shutting-down If current state is terminated:(is success=true): The following instances were terminated successfully : <stopped instance ids> If one of the instances is not valid (is success =false): The following instances are not valid: <not valid ids>.
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result [ { "CurrentState" : "pending" , "InstanceId" : "string" , "PreviousState" : "stopped" } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If current state of all/few instances is different from: pending, running: ( Is success = false): Can not start the following instances from their current state: <failed instance ids> If current state is pending → action still in progress: Continuing….the requested instances are still pending If current state is running:(is success=true: Print: The following instances were started successfully : <running instance ids> If one of the instances is not valid (is success =false): The following instances are not valid: <not valid ids>.
- Actions For more information about actions, see Respond to pending actions from Your Workdesk and Perform a manual action .

### "Configure data RBAC for data tables \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following considerations apply when updating a data table: Removing scopes from a data table is only allowed if all existing rules that use the data table remain functional after the change.
- Another way of looking at this is from the perspective of a data table: Scoped data tables with selected can be accessed by specific users or rules that have matching scopes.
- A scoped user can remove a scope from a data table, which can cause other scoped users to lose access.
- For example, a user with scopes A and B can remove scope B from a data table with scopes A and B.

