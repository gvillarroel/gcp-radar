---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.715Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "VPC Service Controls for Duet AI"
feature_slug: "vpc-service-controls-for-duet-ai"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/admin"
keywords:
  - "vpc"
  - "controls"
  - "for"
  - "duet"
  - "ai"
  - "provides"
---

# VPC Service Controls for Duet AI

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Provides VPC Service Controls support for Duet AI.

## Extended Definition

Provides VPC Service Controls support for Duet AI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/admin](https://docs.cloud.google.com/gemini/docs/admin)

## Supporting Pages

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For example, Google secures the infrastructure that Google Cloud services run on, and provides you with tools such as access controls to let you manage who has access to your services and resources.
- Shared VPC provides centralized network configuration management while maintaining separation of environments.
- For more information on setting up VPC Service Controls, see Configure VPC Service Controls for Gemini .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.
- The Resource Manager API may not be necessary if the projects are explicitly configured in your settings.json file. people.googleapis.com : provides access to information about profiles and contacts. firebaselogging-pa.googleapis.com : an internal API used for sending product telemetry including events as to whether suggestions were accepted. feedback-pa.googleapis.com : an internal API used for in-IDE feedback submission. apihub.googleapis.com : used by the Cloud Code API Browser feature. lh3.googleusercontent.com and lh5.googleusercontent.com : used to obtain user photos.
- Optional: Configure VPC Service Controls If your organization has a service perimeter, then you must add the following resources to your perimeter: Gemini for Google Cloud API Gemini Code Assist API If you are using Gemini Code Assist Standard or Enterprise from outside of your service perimeter, then you also need to modify the ingress policy to allow access to those services.
- Configure VPC Service Controls for Gemini Code Assist Standard and Enterprise .

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.
- Intellectual property and compliance Source citations in your IDE and the Google Cloud console IP indemnification VPC-SC and Private Google Access Enterprise knowledge Customized code suggestions from your code bases in GitHub, GitLab, and Bitbucket in your IDE Additional features outside the IDE The following sections detail additional features available with the Gemini Code Assist Standard and Enterprise editions that go beyond assistance in your IDE.

### "Add or change Gemini Code Assist subscriptions \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/admin](https://docs.cloud.google.com/gemini/docs/admin)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions consumerprocurement.orders.place billing.billingAccountPrices.list Access Gemini for Google Cloud admin controls in the Google Cloud console To access Gemini for Google Cloud admin controls in the Google Cloud console, select Admin for Gemini in the navigation menu.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Add or change Gemini Code Assist subscriptions Stay organized with collections Save and categorize content based on your preferences.
- For details, see the Google Developers Site Policies .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

