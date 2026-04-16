---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.729Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Search editor auto-collapse"
feature_slug: "search-editor-auto-collapse"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
keywords:
  - "search"
  - "editor"
  - "auto"
  - "collapse"
  - "automatically"
  - "collapses"
  - "after"
  - "query"
---

# Search editor auto-collapse

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Search editor automatically collapses after a query runs to give results more space.

## Extended Definition

The Search editor automatically collapses after a query runs to give results more space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you run a query, the search editor panel automatically collapses to provide more space for the results.
- To control the auto-suggestions shown in the query editor, adjust the following settings: Enable suggestions while typing : Enables auto-suggestion.
- Use auto-suggestions to build queries When you write a query, the editor provides auto-suggestions to help you build queries efficiently.
- If your simple query concurrency limit is exhausted, they automatically consume available complex query quota.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Data Flow between Google SecOps and ArcSight ESM Google SecOps automatically indexes and contextualizes correlations that were forwarded to Google SecOps and were triggered in ArcSight ESM through ArcSight Forwarding Connector module and API access.
- Security Events Connector prerequisites This connector works with the reports that are being automatically generated in ArcSight.
- Parameters Parameter name Type Default value Is mandatory Description Search Query String N/A Yes The search query.
- If you are using the old path and are applying the upgrade, then you need to change the permission back to the scripting user with the following steps: Before starting the upgrade, stop the NFS server service: systemctl stop nfs-server After the upgrade is complete, change the folder permissions: chmod -R 755 /opt/siemplify/Correlations/ chown -R scripting:scripting/opt/siemplify/Correlations/ systemctl start nfs-server exportfs -a To confirm that the NFS server is working correctly after the changes, check its status: systemctl status nfs-server Create and configure a user for API access Sign in to the ArcSight console.

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Search Active Directory action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Output messages Available Script result Available JSON result The following example shows the JSON result output received when using the Search Active Directory action: [ { "primaryGroupID" : [ 513 ], "logonCount" : [ 6505 ], "cn" : [ "user name" ], "countryCode" : [ 0 ], "objectClass" : [ "top" , "person" , "organizationalPerson" ], "userPrincipalName" : [ "user@example.com" ], "adminCount" : [ 1 ], "lastLogonTimestamp" : [ "2019-01-09 08:42:03.540783+00:00" ], "manager" : [ "CN=user name,OU=R&D,OU=TLV,OU=host name,DC=domain,DC=LOCAL" ], "instanceType" : [ 4 ], "distinguishedName" : [ "CN=user name,OU=R&D,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "dSCorePropagationData" : [ "2019-01-14 14:39:16+00:00" ], "msDS-SupportedEncryptionTypes" : [ 0 ], "objectSid" : [ " ID " ], "whenCreated" : [ "2011-11-07 08:00:44+00:00" ], "uSNCreated" : [ 7288202 ], "lockoutTime" : [ "1601-01-01 00:00:00+00:00" ], "badPasswordTime" : [ "date" ], "pwdLastSet" : [ "date" ], "sAMAccountName" : [ "example" ], "objectCategory" : [ "CN=Person,CN=Schema,CN=Configuration,DC=host,DC=LOCAL" ], "lastLogon" : [ "2019-01-14 17:13:54.463070+00:00" ], "objectGUID" : [ " GUID " ], "whenChanged" : [ "2019-01-14 16:49:01+00:00" ], "badPwdCount" : [ 1 ], "accountExpires" : [ "9999-12-31 23:59:59.999999" ], "displayName" : [ "example" ], "name" : [ "user" ], "memberOf" : [ "CN=\\\\u05e7\\\\u05d1\\\\u05d5\\\\u05e6\\\\u05d4 \\\\u05d1\\\\u05e2\\\\u05d1\\\\u05e8\\\\u05d9\\\\u05ea,OU=TEST,OU=QA,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" , "CN=Organization Management,OU=Microsoft Exchange Security Groups,DC=domain,DC=LOCAL" , "CN=Local Admin,OU=Groups,OU=IT,OU=TLV,OU=host,DC=domain,DC=LOCAL" ], "codePage" : [ 0 ], "userAccountControl" : [ 111 ], "sAMAccountType" : [ 805306368 ], "uSNChanged" : [ 15301168 ], "sn" : [ "example" ], "givenName" : [ "user" ], "lastLogoff" : [ "1601-01-01 00:00:00+00:00" ] } ] Output messages The Search Active Directory action can return the following output messages: Output message Message description Successfully performed the query " QUERY STRING " in Active Directory.
- Script result The following table lists the value for the script result output when using the Remove User From Group action: Script result name Value is success True or False Search Active Directory Use the Search Active Directory action to search Active Directory using a specified query.
- Reset passwords: use Google SecOps capabilities to automatically reset the user password in Active Directory and notify the user of the change.
- Action inputs The Search Active Directory action requires the following parameters: Parameter Description Query String Required.

