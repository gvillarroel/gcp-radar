---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.634Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Edit prior prompt"
feature_slug: "edit-prior-prompt"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
keywords:
  - "edit"
  - "prior"
  - "prompt"
  - "gemini"
  - "code"
  - "assist"
  - "users"
  - "in"
---

# Edit prior prompt

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist users in VS Code can edit an earlier prompt and receive a regenerated response; Gemini Code Assist users in VS Code can edit an earlier prompt and receive a regenerated response.

## Extended Definition

Gemini Code Assist users in VS Code can edit an earlier prompt and receive a regenerated response; Gemini Code Assist users in VS Code can edit an earlier prompt and receive a regenerated response.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 343
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- To prompt Gemini Code Assist with code transformation, follow these steps: VS Code In your code file, on a new line, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 331
- Re-rank relevance: N/A

Evidence snippets:
- Edit a prior prompt When you edit a prior prompt, Gemini Code Assist regenerates the response to the edited prompt.
- You can also invoke the custom command with the in-editor prompt by performing the following tasks: In your code file, highlight the code that you want to modify, and press Alt+\ (for Windows and Linux) or Cmd+\ (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Gemini Code Assist generates a new response to your edited prompt.
- Gemini Code Assist generates a new response to your edited prompt.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.
- For new Gemini Code Assist customers with billing accounts that never had a Gemini Code Assist subscription, we automatically apply credits equivalent to up to 50 free licenses for the first month, regardless of Gemini Code Assist edition .

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 316
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.

