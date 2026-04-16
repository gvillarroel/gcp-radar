---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.689Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Microsoft OneDrive @mentions"
feature_slug: "microsoft-onedrive-mentions"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source"
keywords:
  - "microsoft"
  - "onedrive"
  - "mentions"
  - "users"
  - "can"
  - "mention"
  - "and"
  - "reference"
---

# Microsoft OneDrive @mentions

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Users can mention and reference files in connected Microsoft OneDrive data sources using the @ symbol in chats.

## Extended Definition

Users can mention and reference files in connected Microsoft OneDrive data sources using the @ symbol in chats.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)

## Supporting Pages

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- If you try to upload a file without this consent, you may encounter an error when signing in to Microsoft Entra ID: "Please ask an admin to grant permission to this app before you can use it." If you encounter this error, copy the URL from your browser's address bar and share it with your administrator, so that they can provide consent on behalf of your organization.
- You can also provide your own context by uploading files for the assistant to analyze, or by mentioning specific people and documents in your prompt.
- You can also add files from your connected Google Drive or Microsoft OneDrive Business accounts.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Entra ID with OIDC protocol This example uses the email to uniquely identify users. google.subject=assertion.email.lowerAscii() google.groups=assertion.groups google.display name=assertion.given name Entra ID with SAML protocol This example uses the email to uniquely identify users. google . subject = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii() google . groups = assertion . attributes [ ' http : //schemas.microsoft.com/ws/2008/06/identity/claims/groups'] google . display name = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'][0] Okta with OIDC protocol This example uses the email to uniquely identify users. google.subject=assertion.email.lowerAscii() google.groups=assertion.groups Okta with SAML protocol This example uses the subject assertion of the JWT to uniquely identify users. google.subject=assertion.subject.lowerAscii() google.groups=assertion.attributes['groups'] Optional: Verify Workforce Identity Federation setup To verify successful sign-ins and correct attribute mapping using the Workforce Identity Federation audit logging feature, do the following: Enable audit logs for the Data Access activity's Security Token Service API.
- Configure Workforce Identity Federation with Microsoft Entra ID and sign in users Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups Note: To fetch a large number of groups from Entra ID for Gemini Enterprise, you must configure SCIM.
- When you are ready to share the app with your users, you can turn on the app and share the URL with your user.
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- If you use the search history or user events model and there is a likelihood of your users typing PII into the search bar, then you can reduce PII leaks by adjusting the following parameters: queryFrequencyThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered this many times. numUniqueUsersThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered by this many unique users.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- For more information, see Set up authentication for a local development environment . using Google.Cloud.DiscoveryEngine.V1 ; public sealed partial class GeneratedCompletionServiceClientSnippets { /// <summary>Snippet for CompleteQuery</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CompleteQueryRequestObject () { // Create client CompletionServiceClient completionServiceClient = CompletionServiceClient .

### "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Generally Available Connect Confluence Cloud with data ingestion and federation Connect Dropbox with data federation Connect Jira Cloud with data ingestion and federation Connect Microsoft Entra ID Connect Microsoft Outlook with data ingestion and federation Connect Microsoft OneDrive with data ingestion and federation Connect Microsoft SharePoint Online with data ingestion and federation Connect ServiceNow with data ingestion Public preview Connect Box with data federation Connect Confluence Data Center with data federation Connect Docusign with data federation Connect GitHub with data federation Connect Hubspot with data federation Connect Jira Data Center with data federation Connect Linear with data federation Connect Microsoft Teams with data federation Connect Monday with data federation Connect Notion with data federation Connect ServiceNow with data federation Connect Shopify with data federation Connect Zendesk with data federation Private preview To connect data sources that are in private preview, contact your Google account team and request to be added to the allowlist.
- Home Documentation AI and ML Gemini Enterprise Send feedback Connect a third-party data source Stay organized with collections Save and categorize content based on your preferences.
- You need to provide the issue ID to identify it, and you can modify various fields such as the summary, description, and assignee.
- Microsoft OneDrive Launch date Action Description 1/23/26 Upload file Uploads a file to OneDrive.

