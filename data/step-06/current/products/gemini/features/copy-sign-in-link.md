---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.632Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Copy sign-in link"
feature_slug: "copy-sign-in-link"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "copy"
  - "sign"
  - "in"
  - "link"
  - "intellij"
  - "gemini"
  - "code"
  - "assist"
---

# Copy sign-in link

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

IntelliJ Gemini Code Assist lets users copy a Google Account sign-in link and paste it into a browser; IntelliJ Gemini Code Assist lets users copy a Google Account sign-in link and paste it into a browser.

## Extended Definition

IntelliJ Gemini Code Assist lets users copy a Google Account sign-in link and paste it into a browser; IntelliJ Gemini Code Assist lets users copy a Google Account sign-in link and paste it into a browser.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 346
- Re-rank relevance: N/A

Evidence snippets:
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- Get links' resource names, pick branch pattern to index for each link, and put it to one or multiple repository groups. resource "google gemini repository group" "example" { location = " REGION " code repository index = " INDEX NAME " repository group id = " REPOSITORY GROUP " repositories { resource = " REPOSITORY RESOURCE NAME " branch pattern = " BRANCH NAMES " } } Note: You can use regular expression in RE2 syntax to specify branch names.
- This document describes how to set up Gemini Code Assist code customization in the Google Cloud console, with the Google Cloud CLI, or with Terraform by connecting Gemini Code Assist to your private code repositories.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 322
- Re-rank relevance: N/A

Evidence snippets:
- IntelliJ To sign in to your Google Account, follow these steps: In the activity bar, click spark Gemini Code Assist .
- Learn more about the supported features: Code features overview Chat features overview Get started with the following guides: Code with Gemini Code Assist Chat with Gemini Code Assist List of directories where Gemini Code Assist caches information The following table provides a list of directories where Gemini Code Assist stores extension information such as auth tokens: Windows %LOCALAPPDATA%/cloud-code %LOCALAPPDATA%/google-vscode-extension macOS /Library/Application Support/cloud-code /Library/Application Support/google-vscode-extension Linux /.cache/cloud-code /.cache/google-vscode-extension Sign into Google and select a Google Cloud project Once users have installed Gemini Code Assist in their IDEs, they need to sign in to their Google Accounts, and if it's their first time using Gemini Code Assist Standard or Enterprise in their IDE, they select a Google Cloud project.
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- Configure the firewall for API traffic between your IDE and Google In addition to enabling the Gemini for Google Cloud API, users behind firewalls also need to allow traffic to pass through for the following APIs: oauth2.googleapis.com : used to sign in to Google Cloud. serviceusage.googleapis.com : used for checking that the user's Gemini Code Assist project is properly configured. cloudaicompanion.googleapis.com : the primary Gemini for Google Cloud API endpoint. cloudcode-pa.googleapis.com : an internal API that provides IDE-related features. cloudresourcemanager.googleapis.com : used in the IDEs for project pickers.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 314
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- IntelliJ In your code file, on a new line, press Alt+\ (for Windows and Linux) or Cmd+\ (for macOS) to open the Gemini Code Assist Quick Pick menu.
- IntelliJ In the status bar of your IDE, click spark Gemini Code Assist: Active and select then select Configure Gemini .

