---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.919Z"
product_name: "Gemini Code Assist"
product_slug: "gemini-code-assist"
feature_name: "Multi-file editing"
feature_slug: "multi-file-editing"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview"
keywords:
  - "multi"
  - "file"
  - "editing"
  - "allows"
  - "gemini"
  - "code"
  - "assist"
  - "agent"
---

# Multi-file editing

Product: Gemini Code Assist
Coverage: MEDIUM

## Step 02 Summary

Allows Gemini Code Assist agent mode to make concurrent changes across multiple files in a codebase from a single prompt.

## Extended Definition

Allows Gemini Code Assist agent mode to make concurrent changes across multiple files in a codebase from a single prompt.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If Gemini Code Assist suggests multiple changes throughout your code file(s), click View above the suggestion and then click Next or Previous , to cycles through the other suggestions.
- If Gemini Code Assist suggests multiple changes throughout your code file(s), click arrow upward or arrow downward to cycle through the other suggestions.
- If you want to optimize multiple files and folders, prompt Gemini Code Assist to optimize @FILE1 and @FILE2 .
- If you want to optimize multiple files and folders prompt Gemini Code Assist to optimize @FILE1 and @FILE2 .

### Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IntelliJ The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE project including your files, indexed symbols and usage of symbols in your project.
- Limitations Some features of standard Gemini Code Assist chat might not be available in agent mode or might work differently than they do in standard chat.
- VS Code The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE workspace.
- VS Code All of the Gemini CLI built-in tools are available to agent mode in Gemini Code Assist.

### "Gemini Code Assist chat features overview \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can perform the following chat actions with Gemini Code Assist in any of the supported IDEs : Use Gemini Code Assist to explain your code Create multiple chats Select a Gemini model Edit a prior prompt Regenerate a prompt response Delete prompt and response pairs Configure code preview pane Prompt Gemini Code Assist with selected code using chat Add selected code snippets to context Add terminal output to the chat context Specify files and folders in your workspace context Revert to a checkpoint in chat View code diffs Generate a file outline Create custom commands Create rules Exclude files from your context with an .aiexclude or .gitignore file Use the Gemini Code Assist agent mode Configure local codebase awareness What's next Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini Code Assist chat features overview Stay organized with collections Save and categorize content based on your preferences.
- To help you comply with any license requirements for your code, Gemini Code Assist provides source citations when its suggestions directly quote at length from a specific source.
- To begin using Gemini Code Assist chat features in your IDE, see Chat with Gemini Code Assist .

