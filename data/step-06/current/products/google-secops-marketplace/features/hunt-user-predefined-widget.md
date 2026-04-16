---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.659Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Hunt User predefined widget"
feature_slug: "hunt-user-predefined-widget"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "hunt"
  - "user"
  - "predefined"
  - "widget"
  - "adds"
  - "for"
  - "the"
  - "action"
---

# Hunt User predefined widget

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a predefined widget for the Hunt User action.

## Extended Definition

Adds a predefined widget for the Hunt User action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- Add a second condition to provide additional qualification, such as "alert only if this detection happens 5 times for the same user in one hour" or if it's combined with a detection from a different rule.
- It does not automatically execute the underlying rules to generate new inputs for the test, which means you cannot validate an entire rule chain in a single action.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- The description for the parameter should explain to the user what impact that parameter has on the action execution.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .

### "SOAR table of contents \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps SOAR Product overview Getting started Release Plan for Google SecOps Onboard Google SecOps SOAR Manage user preferences Your Workdesk Workdesk overview Fill out a request from the workdesk Respond to pending actions from the workdesk View cases from the workdesk Investigating cases and alerts Working with cases Cases overview Explore the cases page layout and options Explore the case queue header Review case-level data in the Overview tab Create custom fields (Admin) Case Wall tab Instant messaging on a case Track tasks in cases Manage tags in cases and alerts Perform a manual action Take actions on a case Create a test case Resolve and close cases Use custom fields in the Close Case dialog Define a default view for cases (Admin) Gemini Summary Add or delete case stages (Admin) Alert Options menu in the Cases screen View the original SIEM data in a case Explore entities and alerts (Investigation) Supported entity types Navigate the Entity Explorer screen Perform a batch action on several cases at once Measure how long security analysts take to close or raise a Case Customize the Close Case dialog (Admin) Name a case (Admin) Create a manual case Move a case to a new environment Add or edit entity properties Apply and save filters Entity selection Working with alerts Alert Overview tab Alert Playbooks tab Change alert priority instead of case priority Alert events tab Alert grouping mechanism overview (Admin) Rerun playbooks How to configure the alert overflow mechanism (Admin) Define the default Alert view (Admin) Handle large alerts Search Use SOAR Search Ingest data Connectors Ingest your data using connectors View connector logs ElasticSearch connector: Map a custom date and time Define environments in connectors Webhooks Set up a Webhook Respond to alerts Work with Playbooks Explore the Playbooks page Use triggers in playbooks Manage actions in playbooks Use flows in playbooks Use the Expression Builder Work with the Playbook Simulator Use the Playbook Navigator Work with playbook blocks Automate tasks with Playbook Loops Increase Playbook resilience with automatic retries Specify an instance in dynamic mode Overview of playbook monitoring Define custom alert views using Playbook Designer Use alert type triggers in a playbook Bulk actions and filters in playbooks Use the HTML widget Expression Builder use cases Assign actions and playbook blocks Configure timeouts for playbook async actions Manage playbook permissions Assign approval links in actions Use parallel actions Use predefined widgets in playbook view Prevent users from changing playbooks Explore playbook use cases Create a fallback playbook Create an enrichment playbook block Create playbooks with Gemini Integrated development environment (IDE) Use the IDE Custom transformation functions and logical operators Create a custom action Develop a new integration (Video) Build a custom integration Write jobs Test integrations in staging mode Integrations Setup Configure integrations Roll back response integration version Upgrade the Python version to 3.11 Support multiple instances Work with an external vault system Create your first custom integration Requirements for publishing integrations Create your first action My first automation (Playbook) Develop your first email connector Develop the connector Configure the connector Test a connector Map and model alerts Create your first use case Google SecOps Marketplace Use the Google SecOps Marketplace Run use cases Power Ups Connectors Email utilities Enrichment File utilities Functions GitSync TemplateEngine Insights Lists Tools Monitor and report Dashboards SOAR Dashboards overview Add SOAR dashboard widgets Explore the SOAR Dashboards page Reports Explore SOAR reports Use Looker Explores in SOAR reports SOAR APIs Google SecOps SOAR APIs Settings Environments Work with environments Create environment groups (SOAR only) Use dynamic parameters in environments Use dynamic parameters (Video) Permissions Manage permission groups Locate your customer ID Manage roles and workloads Manage API keys Let Google Support access your instance Define a landing page Work with users (SOAR only) Manage users and roles Work with a Collaborator user Create a user with view-only permission Disable or delete a user account in SOAR Types of users Create a managed user Work with Collaborator user groups Work with Managed and Managed Plus user groups Email invitation prerequisites Manage password settings Case management federation (SOAR only) SAML overview (SOAR only) Authenticate users using SSO Configure SAML for Google Workspace Configure SAML for Microsoft Azure Configure Okta in Google SecOps SOAR Configure just-in-time provisioning Map IdP groups to SOAR roles Configure multiple SAML providers Troubleshoot SAML issues in Google SecOps SOAR Ontology Ontology overview Visual families Configure mapping and assign visual families Work with entity delimiters Create entities (Mapping & Modeling) Configuration tasks Create a blocklist to exclude entities from alerts Create custom lists Create email HTML templates Create email templates Define domains for MSSPs Manage environment load balancing Create user requests Manage networks Set the service-level agreement (SLA) Use dynamic variables in email HTML templates Advanced tasks Migrate to Google Cloud Open a ticket for Google Support Collect SOAR logs Control access to Google SecOps platform Define system data retention Monitor user activities Rebranding Set the time zone for all users (Admin) Set up your email View and change service limits Manage property metadata Retrieve raw Python logs Clean up after removing SOAR Remote Agents Overview of remote agents Requirements and prerequisites Remote agents architecture Remote agents scaling strategy Manage remote agents Create an agent with Docker Create an agent with the installer for Debian Create an agent with the installer on RHEL Create an agent with the installer on CentOS Upgrade agent Docker image Upgrade agent with installer for RHEL Upgrade agent with installer for CentOS Edit remote agent Redeploy remote agent Installer and Docker agent configuration Data flows and protocols Set up integrations and connectors Test agents Upgrade remote agents Deploy high availability for remote agents Troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For details, see the Google Developers Site Policies .
- SOAR table of contents Click at the top of each SOAR document to return to this table of contents.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the New principals field, do the following: If you're using Workforce Identity Federation or any other third party authentication, add your principal identifier as follows: principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ USER EMAIL ADDRESS Replace the following: POOL ID : the identifier for the pool created for your identity provider.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- ENDS WITH scopename matches any name that ends with "scopename" and is evaluated as true for the example scope and also for projects/1234/locations/us/instances/2342-434-44-3434-343434/dataAccessScopes/testscopename .

