---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.693Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Clickable filenames in chat"
feature_slug: "clickable-filenames-in-chat"
latest_feature_date: "2025-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
keywords:
  - "clickable"
  - "filenames"
  - "in"
  - "chat"
  - "lets"
  - "you"
  - "click"
  - "referenced"
---

# Clickable filenames in chat

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets you click filenames referenced in a chat response to open the file in the IDE.

## Extended Definition

Lets you click filenames referenced in a chat response to open the file in the IDE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .
- IntelliJ If you've already clicked check Accept changes for a chat generated code suggestion, then you have the option to rollback the changes using the undo Rollback changes button: In the Gemini Code Assist chat pane, click undo Rollback Changes .
- To revert your code file to a checkpoint, follow these steps: VS Code In the Gemini Code Assist chat pane, click undo Revert to checkpoint .
- IntelliJ In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .

### "Use the Gemini Code Assist chat \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist chat lets you write natural language statements or questions (called prompts ) to get in-depth explanations of your code, suggested actions, or guided workflows that help you complete tasks quickly and efficiently without leaving the IDE.
- If your chat history is no longer relevant to what you're trying to achieve, you can clear the chat history: VS Code In the Gemini Code Assist pane, click history Resume Previous Chat .
- Open Gemini Code Assist chat To open Gemini Code Assist chat in the IDE: VS Code In the activity bar of your IDE, click spark Gemini Code Assist .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use the Gemini Code Assist chat Stay organized with collections Save and categorize content based on your preferences.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- To switch to agent mode: VS Code To open the Gemini Code Assist chat, in the activity bar of your IDE, click spark Gemini Code Assist .
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.
- For example—adding the following to your Gemini settings JSON will only allow the shell ls -l command to be executed: "coreTools": ["ShellTool(ls -l)"] . excludeTools Lets you specify a list of tools that you don't want to be available to the model.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Sign-in attempts keep timing out If your sign-in attempts keep timing out, try adding the cloudcode.beta.forceOobLogin setting to your settings.json file: "cloudcode.beta.forceOobLogin" : true License recitation warnings don't persist across sessions If license recitation warnings don't persist across sessions, refer to the persistent logs: Click View > Output .
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- Once Gemini Code Assist finishes generating suggested code, you can click Accept , which applies the suggested code to your file, or you can click Decline , which leaves your original code unchanged.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.

