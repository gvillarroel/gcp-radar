---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.050Z"
product_name: "Cloud Shell"
product_slug: "cloud-shell"
feature_name: "Cloud Shell in Google Cloud documentation"
feature_slug: "cloud-shell-in-google-cloud-documentation"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/shell/docs/how-cloud-shell-works"
  - "https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-cloud-shell-editor"
  - "https://docs.cloud.google.com/shell/docs/editor-overview"
  - "https://docs.cloud.google.com/shell/docs/launching-cloud-shell-editor"
keywords:
  - "shell"
  - "in"
  - "documentation"
  - "can"
  - "be"
  - "launched"
  - "directly"
  - "within"
---

# Cloud Shell in Google Cloud documentation

Product: Cloud Shell
Coverage: MEDIUM

## Step 02 Summary

Cloud Shell can be launched directly within Google Cloud documentation pages to run sample code in an embedded terminal.

## Extended Definition

Cloud Shell can be launched directly within Google Cloud documentation pages to run sample code in an embedded terminal.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/shell/docs/how-cloud-shell-works](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works)
- [https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-cloud-shell-editor](https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-cloud-shell-editor)
- [https://docs.cloud.google.com/shell/docs/editor-overview](https://docs.cloud.google.com/shell/docs/editor-overview)
- [https://docs.cloud.google.com/shell/docs/launching-cloud-shell-editor](https://docs.cloud.google.com/shell/docs/launching-cloud-shell-editor)

## Supporting Pages

### How Cloud Shell works \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/shell/docs/how-cloud-shell-works](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available tools The Cloud Shell virtual machine instance has the following pre-installed tools: Type Tool Linux shell interpreters bash sh Linux utilities Standard Debian system utilities gcloud CLI and tools App Engine SDK Google Cloud CLI including the gcloud CLI gsutil for Cloud Storage Text editors Emacs Vim Nano Build and package tools Gradle Helm Make Maven Bazel npm nvm pip uv Composer Source control tools Git Mercurial Additional tools Docker iPython MySQL client gRPC compiler TensorFlow Terraform You can install additional software packages on the virtual machine instance but the installation will not persist after the instance terminates unless you install the software in your $HOME directory or create a custom environment .
- You can't pick your own region and if Cloud Shell doesn't pick the closest region, Cloud Shell tries to migrate your Cloud Shell VM to a closer region when your Cloud Shell VM isn't in use.
- Warning: If you delete your $HOME directory, or if you don't access Cloud Shell for 120 days, Cloud Shell automatically deletes your $HOME directory and can't recover your files.
- Note: While GOOGLE CLOUD PROJECT inherits the active project from the Google Cloud console, your Cloud Shell instance is not directly associated with or managed by this project.

### Cloud Shell Editor directives \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-cloud-shell-editor](https://docs.cloud.google.com/shell/docs/cloud-shell-tutorials/directives-cloud-shell-editor)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open file with text selected < walkthrough - editor - select - line filePath = " FILE PATH " startLine = " START LINE " endLine = " END LINE " > LINK TEXT < / walkthrough - editor - select - line > Creates a link that opens a file on the Cloud Shell disk in the editor, and selects lines of text within it.
- Cloud Code cloud-code-gke-explorer Cloud Code Kubernetes Explorer > Google Kubernetes Engine section. cloud-code-k8s-explorer Cloud Code Kubernetes Explorer > Kubernetes section. cloud-code-k8s-explorer-minikube Cloud Code Kubernetes Explorer > minikube cluster (if it exists). cloud-code-logs-viewer-cluster Logs viewer > Cluster filter. cloud-code-logs-viewer-container Logs viewer > Container filter. cloud-code-logs-viewer-deployment Logs viewer > Deployment filter. cloud-code-logs-viewer-namespace Logs viewer > Namespace filter. cloud-code-logs-viewer-pod Logs viewer > Pod filter. cloud-code-logs-viewer-refresh Logs viewer > Refresh button. cloud-code-logs-viewer-stream-toggle Logs viewer > Streaming toggle. cloud-code-new-app Cloud Code quick access > New Application . cloud-code-debug-on-k8s Cloud Code quick access > Debug on Kubernetes . cloud-code-run-on-k8s Cloud Code quick access > Run on Kubernetes . cloud-code-open-welcome-page Cloud Code quick access > Open Welcome Page . cloud-code-cloud-run-deploy Cloud Code quick access > Deploy to Cloud Run . cloud-code-run-on-cloud-run-emulator Cloud Code quick access > Run on Cloud Run Emulator .
- The spotlightId parameter only accepts the following values: Spotlight ID Highlighted element Activity bar activity-bar-cloud-apis The Cloud API activity bar icon. activity-bar-cloud-k8s The Cloud Kubernetes activity bar icon. activity-bar-cloud-run The Cloud Run activity bar icon. activity-bar-debug The Debug activity bar icon. activity-bar-scm The Source Control activity bar icon. activity-bar-search The Search activity bar icon.
- Open file with text selected by regular expression < walkthrough - editor - select - regex filePath = " FILE PATH " regex = " REGEX " > LINK TEXT < / walkthrough - editor - select - regex > Creates a link that opens a file on the Cloud Shell disk in the Cloud Shell Editor and selects text in the file based on a regular expression.

### Cloud Shell Editor interface overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/shell/docs/editor-overview](https://docs.cloud.google.com/shell/docs/editor-overview)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- With Cloud Shell, you can initialize repositories, diff between file states, stage, unstage, and commit changes.
- Open a file in Cloud Shell Editor To open an existing file in Cloud Shell Editor from Cloud Shell, run the cloudshell command: cloudshell edit README-cloudshell.txt Upload and download files You can manage your files with the Cloud Shell Editor Explorer.
- In addition to the Cloud Code menu available in the status bar of Cloud Shell, you can also access Cloud Code commands using the command palette; press Cmd / Ctrl + Shift + P or click View > Command Palette to display available commands.
- Home Documentation Application development Cloud Shell Guides Send feedback Cloud Shell Editor interface overview Stay organized with collections Save and categorize content based on your preferences.

### Launch the Cloud Shell Editor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/shell/docs/launching-cloud-shell-editor](https://docs.cloud.google.com/shell/docs/launching-cloud-shell-editor)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Shell Editor can be launched in different ways to best fit your use case.
- Launch a standalone Cloud Shell Editor session The easiest way to start a Cloud Shell session and begin using Cloud Shell Editor is to directly launch a Cloud Shell Editor session with ide.cloud.google.com .
- Launch from the Cloud Shell terminal From the Cloud Shell terminal (accessible by clicking Activate Cloud Shell in your Google Cloud console ), you can run the following command: cloudshell edit .
- You can still access the Cloud Shell terminal at any time by clicking Open terminal in the Cloud Shell menu bar.

