---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.710Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "API enablement onboarding"
feature_slug: "api-enablement-onboarding"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
keywords:
  - "api"
  - "enablement"
  - "onboarding"
  - "adds"
  - "an"
  - "flow"
  - "in"
  - "the"
---

# API enablement onboarding

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Adds an onboarding flow in the VS Code Duet AI plug-in with an API enable button.

## Extended Definition

Adds an onboarding flow in the VS Code Duet AI plug-in with an API enable button.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- Note: The behaviour of code generation, completion, and transformation are non-deterministic when used simultaneously with other plugins that either implement the same shortcuts and/or use the same platform API to process these actions.
- In this section, you create a custom command called add-comments that adds comments to the code in your code file.

### "Manage Gemini Code Assist Standard and Enterprise licenses \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify the following header key-value pairs are present on all API calls: Authorization : your Google Cloud access token from the Google Cloud CLI x-goog-user-project : the project ID of your quota project Change the number of Gemini Code Assist Standard and Enterprise licenses in a subscription You can add or remove the number of Gemini for Google Cloud licenses directly through the Google Cloud console, or through your Google account representative or an authorized reseller.
- To further prevent cross-organization usage of Gemini Code Assist Standard and Enterprise in a project, you can do one of the following: Disable the Gemini for Google Cloud API in the project.
- If you want to manage licenses using an API rather than the Google Cloud console, then verify the following: Set up a quota project for your billing account.
- API To view Gemini Code Assist Standard or Enterprise license assignments, use the billingAccounts.orders.licensePool.enumerateLicensedUsers method .

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These LLM instances are shared by all Google customers who enable the Gemini for Google Cloud API Standard and Enterprise.
- This API enables these clients to access the stateless LLMs that power Gemini Code Assist Standard and Enterprise.
- The Gemini for Google Cloud API doesn't have access to any of the other APIs or resources in your project.
- Gemini Code Assist Standard and Enterprise use the Gemini for Google Cloud API to process conversations.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.
- Extended integrations: Gemini Code Assist Enterprise provides AI assistance across Google Cloud like Apigee, Application Integration, and Gemini Cloud Assist, empowering cloud teams to build, design and operate, and optimize their applications and infrastructure more effectively on Google Cloud.
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.

