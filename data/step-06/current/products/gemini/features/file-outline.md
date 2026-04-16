---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.629Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "File outline"
feature_slug: "file-outline"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts"
keywords:
  - "file"
  - "outline"
  - "an"
  - "ai"
  - "assisted"
  - "generates"
  - "short"
  - "english"
---

# File outline

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

An AI-assisted file outline feature generates short English summaries of code blocks in the Outline tab; An AI-assisted file outline feature generates short English summaries of code blocks in the Outline tab.

## Extended Definition

An AI-assisted file outline feature generates short English summaries of code blocks in the Outline tab; An AI-assisted file outline feature generates short English summaries of code blocks in the Outline tab.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts](https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- Generate and view a file outline By default, Gemini Code Assist generates an outline for the file in focus in your IDE.
- By default, the outline pane automatically generates an outline for the current file in focus.
- If you previously disabled automatic outline generation , click the Generate outline button to generate an outline for the current file in focus. (Optional): Click on a node in the outline to automatically scroll to that portion of the code file. (Optional): Click the Eye icon in the outline pane to display the outline in-line in the code file itself.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Optional: Change keyboard shortcut for generating code If the default keyboard shortcut for generating code isn't working as outlined in the previous section, you can change the keyboard shortcut .
- To generate suggested code, press the keyboard shortcut provided by the hint, or right-click in the file and select Gemini Code Assist > Finish changes .

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For example, Gemini Code Assist Standard and Enterprise handle the following data as Customer Data: Prompt data, which includes developer queries Response data from Gemini Code Assist Standard and Enterprise Additional context, such as the current conversation history, snippets of files that are open in the IDE, snippets of files that are stored adjacent to the open file, and cursor location in the current file Because Gemini Code Assist Standard and Enterprise are stateless Google Cloud services, they don't store prompts and responses in Google Cloud.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise Stay organized with collections Save and categorize content based on your preferences.
- Using Gemini Code Assist Standard and Enterprise securely In general, Google recommends using a secure software development lifecycle (SDLC) for developing applications, regardless of whether you're using AI coding assistance.
- Gemini Code Assist Standard and Enterprise act as data processors for all Customer Data—for example when personalizing experiences and recommendations—troubleshooting issues, and maintaining the service.

### "Keyboard shortcuts for Gemini Code Assist features \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts](https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Code generation shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Navigate to chat interface Alt+G Option+G Add selected code snippet to Gemini Chat context Control+Alt+X Command+Alt+X Finish code changes in a file Alt+F Option+F IntelliJ Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Generate code inline of a code file Control+G Option+G Open In-Editor prompt Control+\ Command+\ Add selected code snippet to Gemini Chat context Control+Alt+X Command+Alt+X Finish code changes in a file Alt+F Option+F Terminal shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Add the current highlighted terminal content to the Gemini Chat context Control+Alt+X Command+Alt+X IntelliJ There aren't any default terminal shortcuts for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs at this time.
- Chat shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Cycle through prior chat prompts Up/down arrows Up/down arrows Generate an outline Alt+O Option+O IntelliJ Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Cycle through prior chat prompts Up/down arrows Up/down arrows New chat Control+Alt+Windows+Up Control+Alt+Command+Up Generate an outline Alt+O Option+O Edit keyboard shortcuts If you prefer to change any of the default Gemini Code Assist shortcuts, you can do so by following these steps: VS Code In your IDE, click File (for Windows and Linux) or Code (for macOS), and then navigate to Settings > Keyboard Shortcuts .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Keyboard shortcuts for Gemini Code Assist features Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the keyboard shortcuts you can use in VS Code, IntelliJ, and other supported JetBrains IDEs , for Windows, Linux, and macOS users.

