---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.641Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "AI exclusion file support"
feature_slug: "ai-exclusion-file-support"
latest_feature_date: "2025-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "ai"
  - "exclusion"
  - "file"
  - "you"
  - "can"
  - "use"
  - "aiexclude"
  - "and"
---

# AI exclusion file support

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

You can use .aiexclude and .gitignore files to exclude files from local context.

## Extended Definition

You can use .aiexclude and .gitignore files to exclude files from local context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file](https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Exclude files from Gemini Code Assist use \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file](https://docs.cloud.google.com/gemini/docs/codeassist/create-aiexclude-file)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples The following examples demonstrate how you can configure an .aiexclude file: Block all files named apikeys.txt at or below the directory that contains the .aiexclude file: apikeys.txt Block all files with the .key file extension at or below the directory that contains the .aiexclude file: .key Block only the apikeys.txt file at the same directory as the .aiexclude file, but not any subdirectories: /apikeys.txt Block all files in the directory my/sensitive/dir and all subdirectories.
- Configure context exclusion settings This section shows you how to configure settings for .aiexclude and .gitignore files.
- Change .aiexclude file to your preferred file By default, context exclusion is set to use .aiexclude .
- You can exclude these files through the use of an .aiexclude or .gitignore file.

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root-2`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, if your organization uses Cloud Workstations , developers can interact with Gemini Code Assist Standard and Enterprise in their workstations.
- Access controls You can use Identity and Access Management (IAM) to control application developer access to Gemini Code Assist Standard or Enterprise.
- If required, you can set up Gemini Code Assist Standard and Enterprise to store user input and responses in a Cloud Logging bucket.
- For example, Gemini Code Assist Standard and Enterprise handle the following data as Customer Data: Prompt data, which includes developer queries Response data from Gemini Code Assist Standard and Enterprise Additional context, such as the current conversation history, snippets of files that are open in the IDE, snippets of files that are stored adjacent to the open file, and cursor location in the current file Because Gemini Code Assist Standard and Enterprise are stateless Google Cloud services, they don't store prompts and responses in Google Cloud.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Receive guidance to help you solve problems with your code.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- By using remote repositories as a focused source of context, you can get more accurate and relevant suggestions from Gemini Code Assist, which can help you code faster and more efficiently.

