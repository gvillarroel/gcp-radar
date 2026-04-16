---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.660Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "License deactivation grace period"
feature_slug: "license-deactivation-grace-period"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cmek"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config"
keywords:
  - "license"
  - "deactivation"
  - "grace"
  - "period"
  - "one"
  - "week"
  - "lets"
  - "users"
---

# License deactivation grace period

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

A one-week grace period lets users continue using Gemini Enterprise briefly after early subscription termination while transitioning to a new subscription.

## Extended Definition

A one-week grace period lets users continue using Gemini Enterprise briefly after early subscription termination while transitioning to a new subscription.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- View Cloud KMS keys To view a registered key for Gemini Enterprise, do one of the following: If you have the CmekConfig resource name, call the GetCmekConfig method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .
- If you need to register more than one key for a project, contact your Google account team to request a quota increase for CMEK configurations, providing a justification for why you need more than one key.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For apps with multiple data stores, if one data store uses a CMEK configuration, all other data stores must also use the same CMEK configuration.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- End users have all kinds of PII information, such as driver licenses and telephone numbers, which they are supposed to keep private.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:purge" { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/purge-customer-imported suggestions-3197526711414652502", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsMetadata", "createTime": "2024-06-27T17:07:09.551726728Z", "updateTime": "2024-06-27T17:07:09.551726728Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsResponse", "purgeSucceeded": true } } Advanced document data model Experimental This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Third-party connector Entities supported Box File Confluence Cloud Page Space Dropbox File Jira Cloud Issue Space OneDrive File Salesforce Account Lead Opportunity ServiceNow Incident Knowledge Sharepoint Online Attachment Event File Page Slack Message Procedure To send an autocomplete request that returns a rich suggestion, follow these steps: REST Find your app ID.
- Different types of suggestions: With advanced autocomplete, instead of regular autocomplete query suggestions, you can specify that you want different types of suggestions: Rich suggestions: As autocomplete suggestions, users get information about documents where the titles prefix-match the letters that they type.
- The employee has performed the following queries, listed from most recent to oldest: PTO , Vacation blackout periods , How much vacation time do I have? , Time off , Vacation policy , covering a vacant position during absences , and Can I take unpaid time off? .
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with apps that are connected to more than one data store.

### "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Actions write:page:confluence Allows the data store to create pages in Confluence. write:attachment:confluence Allows the data store to upload attachments to Confluence pages. write:confluence-content Allows the data store to write content in Confluence. write:confluence-file Allows the data store to upload attachments to Confluence. read:attachment:confluence Allows the data store to download and read attachments. read:comment:confluence Allows the data store to read comments. read:configuration:confluence Allows the data store to read configurations. read:confluence-content.all Allows the data store to read all Confluence content. read:confluence-space.summary Allows the data store to read space summaries. read:content-details:confluence Allows the data store to read content details in Confluence. read:content.metadata:confluence Allows the data store to read content metadata. read:group:confluence Allows the data store to read groups. read:page:confluence Allows the data store to read pages. read:space:confluence Allows the data store to read spaces. read:space-details:confluence Allows the data store to read space details. read:task:confluence Allows the data store to read tasks. read:user:confluence Allows the data store to read users. search:confluence Allows the data store to perform search queries in Confluence.
- Usage reason Permission Description Data ingestion read:content-details:confluence Allows the data store to read content details in Confluence. read:attachment:confluence Allows the data store to download and read attachments. read:comment:confluence Allows the data store to read comments. read:page:confluence Allows the data store to read pages. read:whiteboard:confluence Allows the data store to read whiteboards. read:space:confluence Allows the data store to read spaces. read:group:confluence Allows the data store to read groups. read:user:confluence Allows the data store to read users. read:content.metadata:confluence Allows the data store to read content metadata. read:configuration:confluence Allows the data store to read configurations.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Manage user visibility To make the user's email visible to anyone in the Atlassian account, follow these steps: Sign in to the Atlassian Developer Console .

