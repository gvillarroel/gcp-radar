---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.688Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Remove IP From Firewall Rule action"
feature_slug: "remove-ip-from-firewall-rule-action"
latest_feature_date: "2024-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
keywords:
  - "remove"
  - "ip"
  - "from"
  - "firewall"
  - "rule"
  - "action"
  - "adds"
  - "an"
---

# Remove IP From Firewall Rule action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that removes an IP address from a firewall rule.

## Extended Definition

Adds an action that removes an IP address from a firewall rule.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)

## Supporting Pages

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Security Groups" : [ { "Description" : "launch-wizard-2 created 2021-01-30T19:37:11.523+02:00" , "GroupName" : "launch-wizard-2" , "IpPermissions" :[ { "FromPort" : 22 , "IpProtocol" : "tcp" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "ToPort" : 22 , "UserIdGroupPairs" :[ ] } ], "OwnerId" : "582302349248" , "GroupId" : "sg-001700ccddac4189a" , "IpPermissionsEgress" :[ { "IpProtocol" : "-1" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "UserIdGroupPairs" :[ ] } ], "Tags" :[ { "Key" : "Team" , "Value" : "A-Team" }, { "Key" : "Owner" , "Value" : "Example" } ], "VpcId" : "vpc- ID " } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed groups(is success = true): "Successfully described Amazon EC2 security groups." If no available values(is success = false): "No security groups were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid group ID/Name, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Security Groups".
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "StoppingInstances" : [ { "CurrentState" : "shutting-down" , "InstanceId" : "string" , "PreviousState" : "running" } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If current state of all/few instances is different from: shutting-down, terminated: ( Is success = false): Cannot terminate the following instances from their current state: <failed instance ids> If current state is shutting-down: (is success=true) → action still in progress: Continuing….the requested instances are still shutting-down If current state is terminated:(is success=true): The following instances were terminated successfully : <stopped instance ids> If one of the instances is not valid (is success =false): The following instances are not valid: <not valid ids>.
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result [ { "CurrentState" : "pending" , "InstanceId" : "string" , "PreviousState" : "stopped" } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If current state of all/few instances is different from: pending, running: ( Is success = false): Can not start the following instances from their current state: <failed instance ids> If current state is pending → action still in progress: Continuing….the requested instances are still pending If current state is running:(is success=true: Print: The following instances were started successfully : <running instance ids> If one of the instances is not valid (is success =false): The following instances are not valid: <not valid ids>.
- Action Results Script Result Script result name Value options Example is success True/False is success:False Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successfully revoked the specified ingress rules to at least one (or all) security groups: (is success = true): "Successfully revoked the specified ingress rule from the following security groups: {group ids}" if failed to revoke the specified ingress rules because of permissions rule error (invalid port as 205,etc): (is success =false): "Failed to revoke the specified ingress rule from the following security groups: {group ids}.

### "Integrate AWS WAF with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one rule was removed from one Rule Group: "Successfully removed a rule from the following {0} Rule Groups '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of names) If unsuccessful for one Rule Group: "Action wasn't able to remove a rule from the following {0} Rule Groups '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of names) If unsuccessful for one Rule Group, because rule wasn't found in one Rule Group: "Action wasn't able to find the specified rule in the following {0} Rule Groups '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of rule group names) If fail to find one of the Rule Group: "Action wasn't able to find the following '{0}' Rule Groups in the AWS WAF:\n {1}".format("Regional"/Cloudfront", list of Rule Group that were not found in that scope) If fail to find all of the provided sets in the desired scope or scopes: "Action didn't find the provided Rule Groups." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Remove Rule From Rule Group".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful and at least one rule was removed from one Rule Group: print "Successfully removed a rule from the following {0} Web ACLs '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of names) if unsuccessful for one Rule Group: print "Action wasn't able to remove a rule from the following {0} Web ACLs '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of names) if unsuccessful for one Web ACL, because rule wasn't found in one ACL: print "Action wasn't able to find the specified rule in the following {0} Web ACLs '{1}' in AWS WAF.".format("Regional"/"Cloudfront", list of names Web ACL) If fail to find one of the Rule Group: Print "Action wasn't able to find the following '{0}' Web ACLs in the AWS WAF:\n {1}".format("Regional"/Cloudfront", list of Rule Group that were not found in that scope) If fail to find all of the provided sets in the desired scope or scopes: Print "Action didn't find the provided Web ACLs." The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: print "Error executing action "Remove Rule From Web ACL".
- Run On This action runs on the following entities: IP Address URL Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If successful and at least one entity was removed from one IP set: "Successfully removed the following entity patterns from the {0} Regex Pattern Set '{1}' in AWS WAF: \n {2}".format("Regional"/"Cloudfront", full name, list of entity patterns) If entity never existed in that Regex Pattern Set: "The following patterns were not found in the {0} Regex Pattern Set '{1}' in AWS WAF: \n {2}".format("Regional"/"Cloudfront", full name, list of entity patterns) If fail to remove all entities on all IP sets: "No patterns were removed from the provided Regex Pattern Sets." If fail to find one of the IP sets: "Action wasn't able to find the following '{0}' Regex Pattern Sets in the AWS WAF:\n {1}".format("Regional"/Cloudfront",list of IP sets that were not found in that scope) If fail to find all of the provided Regex Pattern sets in the desired scope or scopes: "Action didn't find the provided Regex Pattern sets." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Remove Entity From Regex Pattern Set".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one pattern set was removed from one regex set: "Successfully removed the following patterns from the {0} Regex Pattern Set '{1}' in AWS WAF: \n {2}".format("Regional"/"Cloudfront", full name, list of entity patterns) If pattern never existed in that Pattern Set: "The following patterns were not found in the {0} Regex Pattern Set '{1}' in AWS WAF: \n {2}".format("Regional"/"Cloudfront", full name, list of patterns) If fail to remove all patterns on all Regex Pattern Sets: "No patterns were removed from the provided Regex Pattern Sets." If fail to find one of the Pattern sets: "Action wasn't able to find the following '{0}' Regex Pattern Sets in the AWS WAF:\n {1}".format("Regional"/Cloudfront",list of sets that were not found in that scope) If fail to find all of the provided Regex Pattern sets in the desired scope or scopes: "Action didn't find the provided Regex Pattern sets." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to server, other is reported: "Error executing action "Remove Pattern From Regex Pattern Set".

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- Sample ingress rule - ingressFrom: identities: - serviceAccount:8911409095528497-0-account@partnercontent.gserviceaccount.com sources: - accessLevel: " " ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.list - method: google.storage.objects.get - method: google.storage.objects.delete resources: - projects/PROJECT ID Egress rules The following egress rules must be allowed for feeds using GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 to operate when VPCSC is enabled.
- These STS IP address ranges are published in the following JSON file: IP ranges To use these STS feed source types, you may need to adjust IP access restrictions to enable STS to access your Amazon S3 and Azure storage services: Pull the latest IP ranges from the JSON file.
- For Azure Storage To update the IP access restrictions in your Azure Storage blobstore: If you restrict access to your Azure resources using an Azure Storage firewall, you must add the IP ranges used by STS workers to your list of allowed IPs.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<User name> has been removed from group: <Group name>" If error - Group not exist or/and User not exist: group not exist: Print "Could not remove <UserName> from <Group name>.
- If error User limitation - IAM user can be a member of 10 groups Group limitation - 5000 users can be in a group Print "Could not remove <UserName> from <Group name> because it attempted to create resources beyond the current AWS account limits." The action should fail and stop a playbook execution: If not successful (wrong creds, no connection, other sdk error): print "Error executing action 'Remove a User from a Group.
- Reason: {exception.stacktrace} General Remove a User from a Group Description Adds the specified user to the specified IAM group.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.

