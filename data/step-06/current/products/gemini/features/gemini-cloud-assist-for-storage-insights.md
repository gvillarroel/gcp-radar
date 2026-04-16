---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.648Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Cloud Assist for Storage Insights"
feature_slug: "gemini-cloud-assist-for-storage-insights"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts"
keywords:
  - "gemini"
  - "assist"
  - "for"
  - "storage"
  - "insights"
  - "provides"
  - "assistance"
  - "understanding"
---

# Gemini Cloud Assist for Storage Insights

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Provides Gemini assistance for understanding and managing the Cloud Storage data landscape.

## Extended Definition

Provides Gemini assistance for understanding and managing the Cloud Storage data landscape.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts](https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts)

## Supporting Pages

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Extended integrations: Gemini Code Assist Standard provides AI assistance in Firebase, Colab Enterprise, BigQuery data insights, Cloud Run, and Database Studio.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- Disable code suggestions that match cited sources Gemini Code Assist provides citation information when it directly quotes at length from another source, such as existing open source code.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.
- What's next Learn more about the types of generative AI assistance available in Gemini for Google Cloud .
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.

### "Keyboard shortcuts for Gemini Code Assist features \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts](https://docs.cloud.google.com/gemini/docs/codeassist/keyboard-shortcuts)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist provides AI-powered assistance to help your development team build, deploy, and operate applications throughout the software development lifecycle.
- Code generation shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Navigate to chat interface Alt+G Option+G Add selected code snippet to Gemini Chat context Control+Alt+X Command+Alt+X Finish code changes in a file Alt+F Option+F IntelliJ Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Generate code inline of a code file Control+G Option+G Open In-Editor prompt Control+\ Command+\ Add selected code snippet to Gemini Chat context Control+Alt+X Command+Alt+X Finish code changes in a file Alt+F Option+F Terminal shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Add the current highlighted terminal content to the Gemini Chat context Control+Alt+X Command+Alt+X IntelliJ There aren't any default terminal shortcuts for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs at this time.
- Chat shortcuts VS Code Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Cycle through prior chat prompts Up/down arrows Up/down arrows Generate an outline Alt+O Option+O IntelliJ Action Keyboard shortcut (Windows/Linux) Keyboard shortcut (macOS) Cycle through prior chat prompts Up/down arrows Up/down arrows New chat Control+Alt+Windows+Up Control+Alt+Command+Up Generate an outline Alt+O Option+O Edit keyboard shortcuts If you prefer to change any of the default Gemini Code Assist shortcuts, you can do so by following these steps: VS Code In your IDE, click File (for Windows and Linux) or Code (for macOS), and then navigate to Settings > Keyboard Shortcuts .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Keyboard shortcuts for Gemini Code Assist features Stay organized with collections Save and categorize content based on your preferences.

