---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.816Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "IdP group mapping"
feature_slug: "idp-group-mapping"
latest_feature_date: "2025-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc"
keywords:
  - "idp"
  - "group"
  - "mapping"
  - "administrators"
  - "can"
  - "map"
  - "saml"
  - "provider"
---

# IdP group mapping

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Administrators can map SAML provider user groups to IdP groups instead of manually adding individual users.

## Extended Definition

Administrators can map SAML provider user groups to IdP groups instead of manually adding individual users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc)

## Supporting Pages

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example is the workforce pool creation command for the app configuration described in Configure Workforce Identity Federation : gcloud iam workforce-pools providers create-saml WORKFORCE PROVIDER ID \ --workforce-pool = WORKFORCE POOL ID \ --location = "global" \ --display-name = WORKFORCE PROVIDER DISPLAY NAME \ --description = WORKFORCE PROVIDER DESCRIPTION \ --idp-metadata-path = PATH TO METADATA XML \ --attribute-mapping = "google.subject=assertion.subject,attribute.first name=assertion.attributes.first name[0],attribute.last name=assertion.attributes.last name[0],attribute.user email=assertion.attributes.user email[0],google.groups=assertion.attributes.groups" Control user access There are multiple ways to manage user access to different aspects of the platform: Permissions groups : Set user access levels by assigning them to specific permission groups.
- Here is how you would set up the IdP groups in the SAML provider and in the Google SecOps platform: In your SAML provider, create the following user groups: Security analysts (containing Sasha and Tal) SOC engineers (containing Quinn and Noam) NOC engineers (containing Kim and Kai) London (containing Sasha, Tal, Kim and Kai) Manchester (containing Quinn and Noam) Go to Settings > SOAR Settings > Advanced > IdP Group Mapping .
- For customers who use a third-party provider, map each IdP group defined in the SAML settings on the IdP Group Mapping page.
- Set up SAML attributes for provisioning To set up SAML attributes and groups in the external IdP, do the following: In the Google Workspace, go to the SAML Attributes mapping section.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- If you have any existing IdP group mappings in the External Authentication page, you should leave it as is in order not to override your existing SOAR authentication.
- For the new Google Cloud authentication to access SOAR, you must still set up IdP Group Mapping in Settings > SOAR Settings > Advanced > Group Mapping page.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin RBAC reads the group information from the SAML response from the following case-insensitive default attribute names: group idpgroup group memberof If you use a custom attribute name, it must be provided to your Google Security Operations first to enable you to modify your RBAC settings.
- If you delete users and groups that are administrators, and the only remaining administrators are not in your IDP, you will lose administrator access.
- As you assign roles, be aware of the following: When adding users or groups, make sure they exist in your identity provider (IdP).
- Google Security Operations manages the mapping between users and groups and roles.

### "SOAR table of contents \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps SOAR Product overview Getting started Release Plan for Google SecOps Onboard Google SecOps SOAR Manage user preferences Your Workdesk Workdesk overview Fill out a request from the workdesk Respond to pending actions from the workdesk View cases from the workdesk Investigating cases and alerts Working with cases Cases overview Explore the cases page layout and options Explore the case queue header Review case-level data in the Overview tab Create custom fields (Admin) Case Wall tab Instant messaging on a case Track tasks in cases Manage tags in cases and alerts Perform a manual action Take actions on a case Create a test case Resolve and close cases Use custom fields in the Close Case dialog Define a default view for cases (Admin) Gemini Summary Add or delete case stages (Admin) Alert Options menu in the Cases screen View the original SIEM data in a case Explore entities and alerts (Investigation) Supported entity types Navigate the Entity Explorer screen Perform a batch action on several cases at once Measure how long security analysts take to close or raise a Case Customize the Close Case dialog (Admin) Name a case (Admin) Create a manual case Move a case to a new environment Add or edit entity properties Apply and save filters Entity selection Working with alerts Alert Overview tab Alert Playbooks tab Change alert priority instead of case priority Alert events tab Alert grouping mechanism overview (Admin) Rerun playbooks How to configure the alert overflow mechanism (Admin) Define the default Alert view (Admin) Handle large alerts Search Use SOAR Search Ingest data Connectors Ingest your data using connectors View connector logs ElasticSearch connector: Map a custom date and time Define environments in connectors Webhooks Set up a Webhook Respond to alerts Work with Playbooks Explore the Playbooks page Use triggers in playbooks Manage actions in playbooks Use flows in playbooks Use the Expression Builder Work with the Playbook Simulator Use the Playbook Navigator Work with playbook blocks Automate tasks with Playbook Loops Increase Playbook resilience with automatic retries Specify an instance in dynamic mode Overview of playbook monitoring Define custom alert views using Playbook Designer Use alert type triggers in a playbook Bulk actions and filters in playbooks Use the HTML widget Expression Builder use cases Assign actions and playbook blocks Configure timeouts for playbook async actions Manage playbook permissions Assign approval links in actions Use parallel actions Use predefined widgets in playbook view Prevent users from changing playbooks Explore playbook use cases Create a fallback playbook Create an enrichment playbook block Create playbooks with Gemini Integrated development environment (IDE) Use the IDE Custom transformation functions and logical operators Create a custom action Develop a new integration (Video) Build a custom integration Write jobs Test integrations in staging mode Integrations Setup Configure integrations Roll back response integration version Upgrade the Python version to 3.11 Support multiple instances Work with an external vault system Create your first custom integration Requirements for publishing integrations Create your first action My first automation (Playbook) Develop your first email connector Develop the connector Configure the connector Test a connector Map and model alerts Create your first use case Google SecOps Marketplace Use the Google SecOps Marketplace Run use cases Power Ups Connectors Email utilities Enrichment File utilities Functions GitSync TemplateEngine Insights Lists Tools Monitor and report Dashboards SOAR Dashboards overview Add SOAR dashboard widgets Explore the SOAR Dashboards page Reports Explore SOAR reports Use Looker Explores in SOAR reports SOAR APIs Google SecOps SOAR APIs Settings Environments Work with environments Create environment groups (SOAR only) Use dynamic parameters in environments Use dynamic parameters (Video) Permissions Manage permission groups Locate your customer ID Manage roles and workloads Manage API keys Let Google Support access your instance Define a landing page Work with users (SOAR only) Manage users and roles Work with a Collaborator user Create a user with view-only permission Disable or delete a user account in SOAR Types of users Create a managed user Work with Collaborator user groups Work with Managed and Managed Plus user groups Email invitation prerequisites Manage password settings Case management federation (SOAR only) SAML overview (SOAR only) Authenticate users using SSO Configure SAML for Google Workspace Configure SAML for Microsoft Azure Configure Okta in Google SecOps SOAR Configure just-in-time provisioning Map IdP groups to SOAR roles Configure multiple SAML providers Troubleshoot SAML issues in Google SecOps SOAR Ontology Ontology overview Visual families Configure mapping and assign visual families Work with entity delimiters Create entities (Mapping & Modeling) Configuration tasks Create a blocklist to exclude entities from alerts Create custom lists Create email HTML templates Create email templates Define domains for MSSPs Manage environment load balancing Create user requests Manage networks Set the service-level agreement (SLA) Use dynamic variables in email HTML templates Advanced tasks Migrate to Google Cloud Open a ticket for Google Support Collect SOAR logs Control access to Google SecOps platform Define system data retention Monitor user activities Rebranding Set the time zone for all users (Admin) Set up your email View and change service limits Manage property metadata Retrieve raw Python logs Clean up after removing SOAR Remote Agents Overview of remote agents Requirements and prerequisites Remote agents architecture Remote agents scaling strategy Manage remote agents Create an agent with Docker Create an agent with the installer for Debian Create an agent with the installer on RHEL Create an agent with the installer on CentOS Upgrade agent Docker image Upgrade agent with installer for RHEL Upgrade agent with installer for CentOS Edit remote agent Redeploy remote agent Installer and Docker agent configuration Data flows and protocols Set up integrations and connectors Test agents Upgrade remote agents Deploy high availability for remote agents Troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

