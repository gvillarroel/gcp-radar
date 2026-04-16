---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.633Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Code customization status"
feature_slug: "code-customization-status"
latest_feature_date: "2025-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
keywords:
  - "code"
  - "customization"
  - "status"
  - "gemini"
  - "ide"
  - "users"
  - "can"
  - "view"
---

# Code customization status

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini IDE users can view code customization status from the Gemini icon and get a one-time enablement notification; Gemini IDE users can view code customization status from the Gemini icon and get a one-time enablement notification.

## Extended Definition

Gemini IDE users can view code customization status from the Gemini icon and get a one-time enablement notification; Gemini IDE users can view code customization status from the Gemini icon and get a one-time enablement notification.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 335
- Re-rank relevance: N/A

Evidence snippets:
- To see the code customization status, developers can click the spark Gemini symbol in the bottom right corner and look for one of the following code customization statuses in the search bar: All set .
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.

### "Code customization overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With code customization, developers can use remote context from your organization directly in the IDE, as the following diagram shows: As you code, Gemini Code Assist searches your private index for code that is similar to what you're trying to write.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Code customization overview Stay organized with collections Save and categorize content based on your preferences.
- To configure code customization in your IDE, see Configure Gemini Code Assist code customization .
- Code customization, a feature in Gemini Code Assist Enterprise, lets you get code suggestions from Gemini Code Assist Enterprise that are based on your organization's private repositories, and thus aligned to your organization's coding style.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.
- Before you can use services available to users with Gemini Code Assist Standard or Enterprise licenses, your team needs to perform the setup steps that are described in this document: Note: An administrator typically performs steps 1-4.

