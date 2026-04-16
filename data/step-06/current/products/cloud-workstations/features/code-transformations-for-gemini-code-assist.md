---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.973Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Code Transformations for Gemini Code Assist"
feature_slug: "code-transformations-for-gemini-code-assist"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/write-code-gemini"
  - "https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli"
  - "https://docs.cloud.google.com/workstations/docs/overview"
  - "https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor"
keywords:
  - "code"
  - "transformations"
  - "for"
  - "gemini"
  - "assist"
  - "provides"
  - "inline"
  - "generation"
---

# Code Transformations for Gemini Code Assist

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Code Transformations for Gemini Code Assist provides inline code generation, troubleshooting, readability improvements, efficiency improvements, and response source context.

## Extended Definition

Code Transformations for Gemini Code Assist provides inline code generation, troubleshooting, readability improvements, efficiency improvements, and response source context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
- [https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli](https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli)
- [https://docs.cloud.google.com/workstations/docs/overview](https://docs.cloud.google.com/workstations/docs/overview)
- [https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor](https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor)

## Supporting Pages

### "Code with Gemini Code Assist \_|\_ Cloud Workstations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use code transformation Gemini Code Assist provides code Transformation , which allows you to select a portion of code in a file and request modifications to your existing code through prompts in natural language, using an inline text box.
- To help you comply with any license requirements for your code, Gemini Code Assist provides source citations when its suggestions directly quote at length from a specific source.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info Gemini Code Assist and JetBrains Gateway Gemini Code Assist does not run through JetBrains Gateway.
- To prevent code that matches cited sources from being suggested, you can modify the geminicodeassist.recitation.maxCitedLength setting to 0 in a settings.json file: "geminicodeassist.recitation.maxCitedLength" : 0 Use smart actions To help you be more productive while minimizing context switching, Gemini Code Assist provides AI-powered smart actions directly in your source code editor.

### "AI agent-assisted coding with Gemini CLI \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli](https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- With access to your workspace, Gemini CLI provides features like in-editor diffs for code suggestions.
- For instructions, see Create and launch your workstation Start AI agent-assisted coding To begin using Gemini CLI for AI agent-assisted coding, follow these steps: In your workstation's base editor, open a folder or workspace using one of the following methods: Click Open Folder from the explorer view.
- For example: Explain the architecture of this codebase Write a unit test for the function in main.py Refactor the current file to use async/await Work with diffs When Gemini CLI suggests code modifications, it can open a diff view directly within your editor.
- Connect Gemini CLI Companion to Code OSS for Cloud Workstations.

### Cloud Workstations overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/overview](https://docs.cloud.google.com/workstations/docs/overview)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about using Gemini with Cloud Workstations, see Code with Gemini Code Assist assistance .
- If you select the Cloud Workstations Base Editor (Code OSS for Cloud Workstations) when you create your workstation configuration , Gemini can help you with the following in the base editor: Provide guidance to help you solve problems with your code.
- Gemini Code Assist Gemini Code Assist is an AI-powered collaborator in Google Cloud.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Develop code using a local VS Code editor \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor](https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- When using ssh for the first time, install a remote SSH extension so you can connect to a workstation from the VS Code editor through the Extension Marketplace or through the command palette.
- Tip: For an in-browser experience, you can use the Cloud Workstations IDE Code OSS for Cloud Workstations , which is based on the Code-OSS open source project.
- Copy the values from the Workstation details panel into the placeholders marked with an edit Edit icon. gcloud workstations start-tcp-tunnel \ --project= PROJECT ID \ --region= REGION \ --cluster= CLUSTER NAME \ --config= CONFIG NAME \ --local-host-port=: LOCAL PORT \ WORKSTATION NAME 22 See the Before you begin section to find the project ID.

