---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.834Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Entity search Equals condition"
feature_slug: "entity-search-equals-condition"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "entity"
  - "search"
  - "equals"
  - "condition"
  - "soar"
  - "page"
  - "now"
  - "supports"
---

# Entity search Equals condition

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The SOAR search page now supports an Equals condition for more precise entity searches.

## Extended Definition

The SOAR search page now supports an Equals condition for more precise entity searches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example: principal.ip = /10. / Search for the execution of psexec.exe (Window): target.process.command line = /\bpsexec(\.exe)?\b/ nocase For details about regular expressions, see the regular expressions page .
- Save a search To save a search, do the following: From the Search page, click more horiz More next to Run search and click Save search to use this search later.

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Search Active Directory action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example shows the JSON result output received when using the Search Active Directory action: [ { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] } ] Output messages The Search Active Directory action can return the following output messages: Output message Message description Successfully performed the query " QUERY STRING " in Active Directory.
- JSON result The following example shows the JSON result output received when using the Enrich Entities action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example user" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ]}, "Entity" : "user@example.com" } ] Script result The following table lists the value for the script result output when using the Enrich Entities action: Script result name Value is success True or False Force Password Update Use the Force Password Update action to require a user to change their password upon the following sign-in.
- JSON result The following example shows the JSON result output received when using the Get Manager Contact Details action: [ { "EntityResult" : { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ "{id}" ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN= u05e7 u05d1 u05d5 u05e6 u05d4 u05d1 u05e2 u05d1 u05e8 u05d9 u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] }, "Entity" : "user@example.com" } ] Output messages The Ping action can return the following output messages: Output message Message description All entities were processed successfully.
- Action outputs The Get Manager Contact Details action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Entity enrichment table Available JSON result Available Output messages Available Script result Available Entity enrichment The Get Manager Contact Details action supports the following entity enrichment: Enrichment field name Logic AD Manager Name The action returns the value if it exists in the JSON result.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- In the New principals field, do the following: If you're using Workforce Identity Federation or any other third party authentication, add your principal identifier as follows: principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ USER EMAIL ADDRESS Replace the following: POOL ID : the identifier for the pool created for your identity provider.
- To add scopes to the role, we recommend the following: Select Name in Condition type , the operator in Operator , and enter the scope name in Value . /<scopename> To assign multiple scopes, add more conditions using the OR operator.
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

