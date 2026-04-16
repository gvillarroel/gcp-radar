---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.654Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "NotebookLM Enterprise sharing autocomplete"
feature_slug: "notebooklm-enterprise-sharing-autocomplete"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome"
keywords:
  - "notebooklm"
  - "enterprise"
  - "sharing"
  - "autocomplete"
  - "helps"
  - "users"
  - "select"
  - "email"
---

# NotebookLM Enterprise sharing autocomplete

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Autocomplete helps users select email addresses and group names when sharing notebooks in NotebookLM Enterprise.

## Extended Definition

Autocomplete helps users select email addresses and group names when sharing notebooks in NotebookLM Enterprise.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome](https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome)

## Supporting Pages

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Gemini Enterprise won't return the email address as an autocomplete suggestion if the user types jef in the search bar.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- If you use the search history or user events model and there is a likelihood of your users typing PII into the search bar, then you can reduce PII leaks by adjusting the following parameters: queryFrequencyThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered this many times. numUniqueUsersThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered by this many unique users.

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Key features of NotebookLM Enterprise NotebookLM Enterprise includes the following key features: Centralized knowledge : Notebooks serve as a single, trusted reference for specific topics, projects, or departments, built from your intentionally selected sources.
- Users can then add these newly-discovered sources directly into a NotebookLM Enterprise notebook, further enriching their curated knowledge bases.
- NotebookLM Enterprise Gemini Enterprise Primary Goal Centralized knowledge, content generation from your own documents Enterprise-wide data search, multi-modal content generation, and agent orchestration Input Your uploaded documents, websites, and specific sources Broad queries and data from across enterprise systems (Google and third-party SaaS) Output Synthesized insights, generated content (FAQs, timelines), interactive audio podcasts, and chat-based questions and answers confined to sources Answers from diverse data, text and multi-modal content from across your enterprise, and automated actions by agents User Individual knowledge workers, small teams, content creators Process owners, developers, IT, operations, business analysts, general knowledge seekers, and content creators Complexity Focused knowledge management and document-specific chat experiences Orchestrating multi-agent systems for business processes and general AI assistance Core Function Understanding and extracting from unstructured text, generating content based on your sources Comprehensive information retrieval, multi-modal content creation, and autonomous agent execution How NotebookLM Enterprise and Gemini Enterprise work together NotebookLM Enterprise and Gemini Enterprise are complementary products , enhancing each other's value.
- When to use NotebookLM Enterprise Choose NotebookLM Enterprise when you want to do the following: Establish a single, AI-powered reference point for a topic or project using known, authoritative sources.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Entra ID with OIDC protocol This example uses the email to uniquely identify users. google.subject=assertion.email.lowerAscii() google.groups=assertion.groups google.display name=assertion.given name Entra ID with SAML protocol This example uses the email to uniquely identify users. google . subject = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'][0].lowerAscii() google . groups = assertion . attributes [ ' http : //schemas.microsoft.com/ws/2008/06/identity/claims/groups'] google . display name = assertion . attributes [ ' http : //schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'][0] Okta with OIDC protocol This example uses the email to uniquely identify users. google.subject=assertion.email.lowerAscii() google.groups=assertion.groups Okta with SAML protocol This example uses the subject assertion of the JWT to uniquely identify users. google.subject=assertion.subject.lowerAscii() google.groups=assertion.attributes['groups'] Optional: Verify Workforce Identity Federation setup To verify successful sign-ins and correct attribute mapping using the Workforce Identity Federation audit logging feature, do the following: Enable audit logs for the Data Access activity's Security Token Service API.
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Okta Configure Workforce Identity Federation with Okta and sign in users OIDC or SAML 2.0 Configure Workforce Identity Federation with an identity provider (IdP) that supports OIDC or SAML 2.0 Configure attribute mapping Attribute mapping helps you connect your third-party identity information with Google using Workforce Identity Federation.
- Configure Workforce Identity Federation with Microsoft Entra ID and sign in users Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups Note: To fetch a large number of groups from Entra ID for Gemini Enterprise, you must configure SCIM.

### "Configure Chrome Enterprise cloud-managed browsers \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome](https://docs.cloud.google.com/gemini/enterprise/docs/configure-chrome)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable autocomplete in your Gemini Enterprise project To enable Autocomplete in your Gemini Enterprise project, go to your Google Cloud Console Gemini Enterprise page , select your app, then select Configurations > Autocomplete .
- Example copied value: https://discoveryengine.googleapis.com/v1alpha/projects/1234/locations/global/collections/default collection/engines/enterprisesearch/ servingConfigs/default search:search Formatted value: https://discoveryengine.googleapis.com/v1alpha/projects/1234/locations/global/collections/default collection/engines/enterprisesearch/ completionConfig:completeQuery Note: To find the ID for your Gemini Enterprise agent, navigate to your Google Cloud Console's AI Applications page, select the appropriate Gemini Enterprise application, then select Integration > Web App.
- Example copied value: https://vertexaisearch.cloud.google.com/home/cid/ 1234 Formatted value: https://vertexaisearch.cloud.google.com/home/cid/ 1234?q={searchTerms} Note: To find the ID for your Gemini Enterprise agent, navigate to your Google Cloud Console's AI Applications page, select the appropriate Gemini Enterprise application, then select Integration > Web App.
- Enroll users and browsers There are two options to manage Chrome browsers from the Google Admin console using Chrome Enterprise Core: Device-level browser enrollment and User profile-level browser enrollment.

