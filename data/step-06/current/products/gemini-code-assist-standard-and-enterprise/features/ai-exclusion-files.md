---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.691Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "AI exclusion files"
feature_slug: "ai-exclusion-files"
latest_feature_date: "2025-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "ai"
  - "exclusion"
  - "files"
  - "lets"
  - "you"
  - "configure"
  - "aiexclude"
  - "and"
---

# AI exclusion files

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets you configure .aiexclude and .gitignore files to exclude files from local context in VS Code Gemini Code Assist.

## Extended Definition

Lets you configure .aiexclude and .gitignore files to exclude files from local context in VS Code Gemini Code Assist.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file](https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Exclude files from Gemini Code Assist use \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file](https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure context exclusion settings This section shows you how to configure settings for .aiexclude and .gitignore files.
- Examples The following examples demonstrate how you can configure an .aiexclude file: Block all files named apikeys.txt at or below the directory that contains the .aiexclude file: apikeys.txt Block all files with the .key file extension at or below the directory that contains the .aiexclude file: .key Block only the apikeys.txt file at the same directory as the .aiexclude file, but not any subdirectories: /apikeys.txt Block all files in the directory my/sensitive/dir and all subdirectories.
- The path should be relative to the directory that contains the .aiexclude file. my/sensitive/dir/ Blocks all the files in directory foo and its subdirectories except file named bar.txt in the foo directory. foo/ !foo/bar.txt Control access to index for code customization By default, code customization indexes all the supported code files in your specified repositories.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Exclude files from Gemini Code Assist use Stay organized with collections Save and categorize content based on your preferences.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Code with Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Code with Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.

