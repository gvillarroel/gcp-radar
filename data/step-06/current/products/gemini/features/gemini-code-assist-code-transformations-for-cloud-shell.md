---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.670Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist code transformations for Cloud Shell"
feature_slug: "gemini-code-assist-code-transformations-for-cloud-shell"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "transformations"
  - "for"
  - "shell"
  - "transformation"
  - "features"
---

# Gemini Code Assist code transformations for Cloud Shell

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist code transformation features are available in Cloud Shell preview.

## Extended Definition

Gemini Code Assist code transformation features are available in Cloud Shell preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)

## Supporting Pages

### "Use pre-release features in Gemini Code Assist for VS Code \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/use-pre-release-features-gemini-code-assist)
- Source ID: `site-docs-root-2`
- Final score: 310
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use pre-release features in Gemini Code Assist for VS Code Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to use pre-release features of Gemini Code Assist for VS Code on the insiders release channel.
- Before you begin Set up Gemini Code Assist .
- Comment out or remove the following line of your user settings JSON: "geminicodeassist.updateChannel": "Insiders", Save your user settings.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 305
- Re-rank relevance: N/A

Evidence snippets:
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- To prompt Gemini Code Assist with code transformation, follow these steps: VS Code In your code file, on a new line, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.

### "Gemini Code Assist code features overview \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-overview)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can perform the following coding actions with Gemini Code Assist in any of the supported IDEs : Generate code with prompts : Prompt Gemini Code Assist with code transformation Prompt Gemini Code Assist in a code file with a comment Get code completions Finish changes Use smart actions Use code transformation quick fix Exclude files from your context with an .aiexclude or .gitignore file What's next Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini Code Assist code features overview Stay organized with collections Save and categorize content based on your preferences.
- To help you comply with any license requirements for your code, Gemini Code Assist provides source citations when its suggestions directly quote at length from a specific source.
- To begin using Gemini Code Assist chat features in your IDE, see Chat with Gemini Code Assist .

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Gemini Code Assist supported features .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.

