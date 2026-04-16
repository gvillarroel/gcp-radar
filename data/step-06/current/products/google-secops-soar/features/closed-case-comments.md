---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.835Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Closed case comments"
feature_slug: "closed-case-comments"
latest_feature_date: "2023-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
keywords:
  - "closed"
  - "case"
  - "comments"
  - "users"
  - "can"
  - "add"
  - "to"
  - "cases"
---

# Closed case comments

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Users can add comments to cases even after the cases have been closed.

## Extended Definition

Users can add comments to cases even after the cases have been closed.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)

## Supporting Pages

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.
- When you open this tab, you can view case-related information such as tasks, user comments, pinned chat messages, manual and system actions, and file attachments (up to 50 MB per file).
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- They collect enrichment data, analyst comments, and historical context, letting analysts track entity behavior over time and across cases.

### Case manipulation \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Name Siemplify SiemplifyAction Description add tag N/A add tag Adds a new tag to the current case change case stage N/A change case stage Sets the current case's stage to a specific stage change case priority change case priority change case priority Sets the current case's priority to a specific value mark case as important mark case as important mark case as important Marks the current case with the 'importance triangle' sign Data retrieval Name Siemplify SiemplifyAction Description get case comments get case comments get case comments Retrieve comments on the case get alerts ticket ids from cases closed since timestamp N/A get alerts ticket ids from cases closed since timestamp get similar cases N/A get similar cases Retrieve similar cases in the system Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Name Siemplify SiemplifyAction Description close case N/A close case Closes the current case with the selected close reason and given comment add comment add comment add comment Adds a comment to the current case's case wall close alert N/A close alert Closes the current alert with the selected close reason and given comment raise incident raise incident raise incident Changes the current case into an incident assign case assign case assign case Assigns the current case to the selected analyst or group add entity to case add entity to case add entity to case Creates a new entity in the case add attachment add attachment add attachment Adds attachment to the case.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Case metadata This section focuses on SDK functions that manipulate case index and help maintain the system.

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Add User to Group action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Add User to Group action can return the following output messages: Output message Message description Successfully added the following users to the group " GROUP NAME " in Active Directory: ENTITY ID The following users were already a part of the group " GROUP NAME " in Active Directory: ENTITY ID Action wasn't able to add the following users to the group " GROUP NAME " in Active Directory: ENTITY ID No users were added to the group " GROUP NAME " in Active Directory.
- Use cases The Active Directory integration can help you solve the following use cases: Activate and deactivate users: use Google SecOps capabilities to deactivate a potentially compromised user account and prevent further unauthorized access.
- Action outputs The Remove User From Group action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Remove User From Group action can return the following output messages: Output message Message description Successfully removed the following users from the group " GROUP NAME " in Active Directory: ENTITY ID The following users were not a part of the group " GROUP NAME " in Active Directory: ENTITY ID Action wasn't able to remove the following users from the group " GROUP NAME " in Active Directory: ENTITY ID No users were removed from the group " GROUP NAME " in Active Directory.
- Action outputs The Search Active Directory action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example shows the JSON result output received when using the Search Active Directory action: [ { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] } ] Output messages The Search Active Directory action can return the following output messages: Output message Message description Successfully performed the query " QUERY STRING " in Active Directory.

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Users can see cases assigned to them, their role, or additional roles.
- While mapping groups to parameters may require you to create more groups initially, once the mapping is set, new users can join Google SecOps without the need to create additional groups.
- Instead of assigning cases, actions, or playbooks to individuals, they can be assigned to a SOC role.
- Use Case: Assign unique permission fields to each IdP group The following example illustrates how to use this feature to help onboard and provision users according to your company's needs.

