---
title: "Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
  title: "Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Resources
Send feedback
Google Security Operations SOAR release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Google Security Operations SOAR. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 12, 2026
Announcement
Release 6.3.83 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
April 11, 2026
Announcement
Release 6.3.82 is now available for all regions.
April 05, 2026
Announcement
Release 6.3.82 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
Feature
Playbook Condition and Multi-Choice Question Flows
The maximum number of branches supported in Playbook Conditions and Multiple Choice Questions has been increased from 6 to 20. This allows for more complex branching logic within a single step.
For more information, see Use flows in playbooks .
April 04, 2026
Announcement
Release 6.3.81 is now available for all regions.
March 29, 2026
Announcement
Release 6.3.81 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 28, 2026
Announcement
Release 6.3.80 is now available for all regions.
March 17, 2026
Announcement
SOAR Permission Groups migration to Google Cloud IAM is now in General Availability (GA).
You can now leverage Google Cloud IAM for precise, granular feature access, moving away from legacy permission groups.
You can enable it by migrating the legacy SOAR permission groups and permissions to Google Cloud IAM through a self-service migration available from January 26, 2026. Please check the documentation and video for full instructions.
This update is available to all customers who have completed Stage 1 of the SOAR migration to Google Cloud.
March 16, 2026
Announcement
Stage 2 of the SOAR migration to Google Cloud deadline has been extended from June 30th to September 30th, 2026.
March 15, 2026
Announcement
Release 6.3.80 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 14, 2026
Announcement
Release 6.3.79 is now available for all regions.
March 08, 2026
Announcement
Release 6.3.79 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
March 07, 2026
Announcement
Release 6.3.78 is now available for all regions.
March 01, 2026
Announcement
Release 6.3.78 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
February 28, 2026
Announcement
Release 6.3.77 is now available for all regions.
February 22, 2026
Announcement
Release 6.3.77 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Change
Publisher Agent Version 2.6.4 removes support for Python 3.7 from the remote agent.
February 21, 2026
Announcement
Release 6.3.76 is now available for all regions.
February 15, 2026
Announcement
Release 6.3.76 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
February 14, 2026
Announcement
Release 6.3.75 is now available for all regions.
February 08, 2026
Announcement
Release 6.3.75 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
February 07, 2026
Announcement
Release 6.3.74 is now available for all regions.
February 01, 2026
Announcement
Release 6.3.74 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Change
The Case Federation feature is no longer dependent on the Case Federation integration in the primary platform.
The primary platform sync job is now disabled. Do not attempt to re-enable it.
For more information, see Set up case federation access for SOAR .
January 31, 2026
Announcement
Release 6.3.73 is now available for all regions.
January 26, 2026
Feature
Timeline View for Alerts
Visualize alert patterns over time using the new timeline view in the Alerts section of the Cases Overview tab.
January 25, 2026
Announcement
Release 6.3.73 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Feature
Structured SOAR Python integration logs
Python integration logging has been upgraded to a structured format to eliminate visibility gaps and ensure comprehensive diagnostic coverage in Google Cloud.
This upgrade changes how Python logs are interpreted in the GCP Cloud Logging Explorer. Previously, logs were bundled into a single block per execution. Now, every log line is interpreted as a separate entry, allowing for granular filtering, better searchability, and easier debugging of specific events.
Recommended Actions:
Update Log-Based Alerts: Ensure alerts triggered by string matches are compatible with individual log entries rather than bundled blocks.
Review Automation Scripts: Test any external scripts or BigQuery exports that parse textPayload against the new granular format.
Verify Dashboards: Custom monitoring dashboards may show an increase in event counts as executions are no longer bundled.
For more information, see Collect SOAR logs .
Announcement
Integration Rollback
This Integration Rollback feature is now in General Availability (GA).
Rollback is not supported for integrations built for Python 2.7 or 3.7. To perform a rollback, a snapshot must have been created during the previous upgrade process.
For more information, see Roll back response integration version .
January 24, 2026
Announcement
Release 6.3.72 is now available for all regions.
January 18, 2026
Announcement
Release 6.3.72 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Feature
Integration Rollback
This feature is currently in Preview.
You can now roll back commercial response integrations to their previously installed version. This action reverts all integration content, including standard code and any custom modifications, to the state of the last installed version. For more information, see Roll back response integration version .
January 17, 2026
Announcement
Release 6.3.71 is now available for all regions.
January 11, 2026
Announcement
Release 6.3.71 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
Feature
Custom Transformers and Logical Operators
This feature is currently in Preview.
Playbook engineers can now extend platform capabilities by creating custom Python-based transformation functions and logical operators as part of Extension Packs directly within the IDE. For more information, see Custom transformation functions and logical operators .
Change
Increased iteration and step limits for Playbook Loops
To support larger automation requirements, the maximum number of iterations for a single loop has been increased to 1,000, and the number of supported steps within a loop has been increased to 100.
Change
Terminate Playbook capability
You can now manually terminate a running playbook directly from the Playbook Viewer in the Case Overview. This provides a mechanism to immediately end execution if a loop encounters unwanted or excessive iterations.
Announcement
Playbook Loops
This feature is now in General Availability (GA).
For more information, see Automate tasks with Playbook Loops .
January 10, 2026
Announcement
Release 6.3.70 is now available for all regions.
December 14, 2025
Announcement
Release 6.3.70 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
December 13, 2025
Announcement
Release 6.3.69 is now available for all regions.
December 07, 2025
Announcement
Release 6.3.69 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
December 06, 2025
Announcement
Release 6.3.68 is now available for all regions.
November 16, 2025
Feature
Change views per alert
The Alert Overview page now includes a new option to select a specific view for each alert. If several playbooks have run on an alert, and those playbooks have customized views, you can now select and display any of those customized views for that alert.
Announcement
Release 6.3.68 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
November 15, 2025
Announcement
Release 6.3.67 is now available for all regions.
November 09, 2025
Announcement
Release 6.3.67 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
November 08, 2025
Announcement
Release 6.3.66 is now available for all regions.
November 02, 2025
Announcement
Release 6.3.66 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
November 01, 2025
Announcement
Release 6.3.65 is now available for all regions.
October 26, 2025
Feature
Delete high-load environments
You can now easily delete environments with heavy loads directly from the platform.
Announcement
Release 6.3.65 is being rolled out to the first phase of regions as listed here .
This release contains the following changes:
October 25, 2025
Announcement
Release 6.3.64 is now available for all regions.
October 19, 2025
Announcement
Release 6.3.64 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
October 18, 2025
Announcement
Release 6.3.63 is now available for all regions.
October 05, 2025
Announcement
Release 6.3.63 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
October 04, 2025
Announcement
Release 6.3.62 is now available for all regions.
September 28, 2025
Change
Publisher Connector package size limit enforced
The maximum allowed size for a Publisher's Connector Package is now limited to 25 MB.
Feature
Podman support for Remote Agents
You can now install a Remote Agent using Podman. This new functionality provides a streamlined deployment workflow—a lightweight alternative to existing installation methods.
For more information, see Deploy an agent with Podman .
Announcement
Remote Agent, Release 2.5.0 contains the following changes:
Announcement
Release 6.3.62 is being rolled out to the first phase of regions, as outlined in our Google SecOps release plan .
This release contains the following changes:
Feature
Deploy an agent with Debian
You can now install a Remote Agent using Debian. This new functionality provides a streamlined deployment workflow—an alternative to existing installation methods.
For more information, see Deploy an agent with Debian .
Change
Increased Alert Trimming limit for Remote Agent
The default setting for Alert Trimming has been increased to 25 MB.
September 27, 2025
Announcement
Release 6.3.61 is now available for all regions.
September 16, 2025
Announcement
Release 6.3.61 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
Announcement
Migrate SOAR to Google Cloud
All customers and partners are being migrated from SOAR to Google Cloud. For more information, see SOAR migration overview and FAQ .
September 15, 2025
Announcement
Release 6.3.60 is now available for all regions.
September 07, 2025
Feature
Use custom fields in the Close Case dialog
Administrators can now add custom fields to the Close Case dialog. This new functionality provides a more streamlined workflow and replaces the Dynamic Fields feature.
For more information, see Use custom fields in the Close Case dialog .
Feature
Advanced job scheduling
The job scheduling functionality has been enhanced with advanced options. This functionality provides more precise control and flexible, calendar-like scheduling for your scripts.
For more information, see Configure a new job with advanced scheduling .
Announcement
Release 6.3.60 is being rolled out to the first phase of regions, as outlined in our Google SecOps release plan .
This release contains the following features:
September 06, 2025
Announcement
Release 6.3.59 is now available for all regions.
August 31, 2025
Announcement
Release 6.3.59 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
August 30, 2025
Announcement
Release 6.3.58 is now available for all regions.
August 17, 2025
Announcement
Release 6.3.58 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
August 16, 2025
Announcement
Release 6.3.57 is now available for all regions.
August 10, 2025
Feature
Expression Builder enhancements
The Expression Builder has been enhanced with a new set of pre-built filters to help streamline query creation.
We've improved the information within the platform for all filters, both new and existing. The supporting documentation provides clearer descriptions and practical examples for each transformer, making it easier to understand their purpose and syntax.
For details, see Use the Expression Builder .
Feature
Remote agent notifications
Agent notifications will alert you to new remote agent version releases and agent downtime based on your permissions and associated environments. Agent notifications are now enabled by default. You can opt out of these notifications at any time from your user preferences.
For details, see Agent notifications .
Announcement
Release 6.3.57 is being rolled out to the first phase of regions, as outlined in our Google SecOps release plan .
This release contains the following features:
August 09, 2025
Announcement
Release 6.3.56 is now available for all regions.
August 03, 2025
Announcement
Release 6.3.56 is rolling out to the first phase of regions, as outlined in our Google SecOps release plan .
This release includes the following features:
Feature
Custom Fields Form widget is now supported in Playbook View
The Custom Fields Form widget is now supported in Playbook View.
Feature
Automated retries for failed playbook actions
This feature is in Preview.
Playbook functionality now supports automatic retries for individual actions that encounter temporary issues, such as network outages, API rate limits, or service unavailability. You can define the number of retry attempts and the intervals between retries directly at the step level within playbooks.
For more information on configuring and using action retries, see Configure action retries in playbooks .
August 02, 2025
Announcement
Release 6.3.55 is now available for all regions.
July 27, 2025
Feature
Playbook Simulator enhancements for loops
The Playbook Simulator now supports visualization and debugging of playbooks that contain loops. This lets you clearly see and navigate through each loop iteration within the simulator viewer.
Additionally, the step display order has been updated to show actions from top to bottom (oldest at the top, newest at the bottom), with automatic scrolling to the most recent activity.
For more details, see Loops in the Playbook Simulator .
Announcement
Release 6.3.55 is being rolled out to the first phase of regions, as outlined in our Google SecOps release plan .
This release contains the following features:
Feature
Automate tasks with Playbook Loops
This feature is in Preview.
Playbook functionality has been enhanced to include Playbook Loops . This feature update lets playbooks iterate over lists or entities, performing one or more actions for each item. It streamlines automation by eliminating the need for duplicated steps or custom actions when processing multiple items. You can configure Playbook Loops directly within a playbook or inside a playbook block.
For setup instructions and use case examples , see Automate tasks with Playbook Loops .
July 26, 2025
Announcement
Release 6.3.54 is now available for all regions.
July 20, 2025
Announcement
Release 6.3.54 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
July 19, 2025
Announcement
Release 6.3.53 is now available for all regions.
July 13, 2025
Announcement
Release 6.3.53 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
July 12, 2025
Announcement
Release 6.3.52 is now available for all regions.
July 06, 2025
Announcement
Release 6.3.52 is being rolled out to the first phase of regions as listed here .
This release contains the following feature:
Feature
Share Case Queue Filters
You can now share case queue filters with other users. These filters can be saved with specific criteria, such as assignee roles, and shared with individual users, SOC roles, or all users in your organization for quick access.
For more information, see Apply and save filters .
July 05, 2025
Announcement
Release 6.3.51 is now available for all regions.
June 29, 2025
Change
Bulk Playbook Duplication Behavior Updated
When duplicating playbooks in bulk, the original selection is now preserved. Newly created copies are no longer automatically selected in the platform.
Announcement
Release 6.3.51 is being rolled out to the first phase of regions as listed here .
This release contains the following change.
June 28, 2025
Announcement
Release 6.3.50 is now available for all regions.
June 22, 2025
Announcement
Release 6.3.50 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
June 21, 2025
Announcement
Release 6.3.49 is now available for all regions.
June 14, 2025
Announcement
Release 6.3.49 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
June 13, 2025
Announcement
Release 6.3.48 is now available for all regions.
June 08, 2025
Announcement
Release 6.3.47 is now available for all regions.
June 07, 2025
Announcement
Release 6.3.48 is being rolled out to the first phase of regions.
Feature
Advanced Reports: Case Custom Fields
Advanced Reports (Looker) has been enhanced to include support for custom fields created for Cases.
This enhancement allows users to leverage organization-specific data captured in custom fields to gain deeper insights and create tailored visualizations within Looker reports. Specific LookML formulas and filtering guidance are now available.
For more information on how to use custom fields in Advanced Reports, see Use Custom Fields in Advanced Reports .
Feature
Playbook Permissions: Support for API Key Roles
The platform has been updated to extend playbook permissions to also support the SOC Roles associated with API keys, in addition to the user SOC Roles.
This enhancement affects how integrations using API keys interact with playbooks that have specific permission configurations. For example, GitSync now uses this capability to synchronize playbooks with restricted permissions.
For more information on how playbook permissions work with users and API keys, see Playbook permissions .
For specific instructions on configuring GitSync with restricted playbooks, see GitSync - Work with playbook permissions .
May 25, 2025
Announcement
Release 6.3.46 is now available for all regions.
May 24, 2025
Announcement
Release 6.3.47 is being rolled out to the first phase of regions as listed here .
Feature
Environment load balancing
The environment load balancing feature offers improved stability and fair resource sharing in multi-tenant environments. It uses a lottery algorithm for resource allocation and lets administrators prioritize environments via API-based weighting.
For more information, see Manage environment load balancing .
May 18, 2025
Announcement
Release 6.3.45 is now available for all regions.
May 17, 2025
Announcement
Release 6.3.46 is is being rolled out to the first phase of regions.
Announcement
Create playbooks with Gemini
This feature is now in General Availability. For more information, see Create playbooks with Gemini .
May 14, 2025
Announcement
A new status dashboard provides status tracking for Google SecOps SOAR.
May 11, 2025
Announcement
Release 6.3.45 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
May 10, 2025
Announcement
Release 6.3.44 is now available for all regions.
May 03, 2025
Announcement
Release 6.3.44 is being rolled out to the first phase of regions as listed here .
Change
Light Theme Enhancements
We've improved the color palette for the light theme to enhance visual clarity.
April 27, 2025
Change
Release 6.3.43 is now available for all regions.
April 20, 2025
Announcement
Release 6.3.43 is being rolled out to the first phase of regions as listed here .
This release contains internal and customer bug fixes.
April 19, 2025
Announcement
Release 6.3.42 is now available for all regions.
April 06, 2025
Announcement
Release 6.3.41 is now available for all regions.
April 05, 2025
Feature
Create a quick action (Preview)
Administrators can now predefine quick actions for analysts to execute directly within cases and alerts.
The Quick Actions widget can be added to default case and alert views, and customized alert views within playbooks.
For more information, see Create a quick action .
Announcement
Release 6.3.42 is being rolled out to the first phase of regions as listed here .
March 30, 2025
Announcement
Remote Agent Release 2.4.0
Feature
Remote agent high availability
Remote agents can now leverage high availability deployment, ensuring increased reliability for remote connectors, actions, and jobs.
This feature also introduces a new cloud-based remote connector scheduler for improved performance and scalability.
For more information, see Deploy high availability in remote agents .
Announcement
Release 6.3.40 is now available for all regions.
March 29, 2025
Announcement
Release 6.3.41 is being rolled out to the first phase of regions as listed here .
Feature
Configure user preferences
The ability to manage platform time zones, date/time settings, and notifications have moved to the new User Preferences dialog, accessible from your avatar.
In addition, a new accessibility option in the User Preferences dialog lets you customize how long feedback messages remain on the screen.
For more information, see Configure user preferences .
March 23, 2025
Announcement
Release 6.3.40 is being rolled out to the first wave of regions as listed here .
Feature
Theme enhancement for SOAR platform
The header and left hand navigation menu now fully reflect the selected theme. If you select the light theme, both the header and side menu will also appear in light mode. This might impact customers who are using the rebranding feature.
March 22, 2025
Announcement
Release 6.3.39 is now available for all regions.
March 16, 2025
Announcement
Theme enhancement for SOAR platform
The header and left hand navigation menu now fully reflect the selected theme. If you select the light theme, both the header and side menu will also appear in light mode. This might impact customers who are using the rebranding feature. We recommend taking a look at your logo in the light mode before we roll out and making any necessary changes.
This change will be rolled out to the first regional wave on March 23, 2025.
Announcement
Release 6.3.38 is now in General Availability.
March 15, 2025
Announcement
Release 6.3.39 is being rolled out to the first wave of regions as listed here .
This release includes the following features.
Feature
Remote agent high availability
This feature is currently in preview.
Remote agents can now leverage high availability deployment, ensuring increased reliability for remote connectors, actions, and jobs.
This feature also introduces a new cloud-based remote connector scheduler for improved performance and scalability.
For more information, see Deploy high availability in remote agents .
Feature
Remote agent downtime notifications
Customers using remote agents can now opt in to receive in-app or email notifications when the agent is down.
Feature
Pause or resume Case SLA
Users can now pause and resume service level agreement (SLA) timers on cases.
For more information, see Pause and resume a case SLA .
March 09, 2025
Announcement
Release 6.3.37 is now in General Availability.
March 08, 2025
Announcement
Release 6.3.38 is currently in Preview. This release contains internal and customer bug fixes.
March 05, 2025
Announcement
The phased rollout to regions as described here is postponed to Sunday, March 16th, 2025.
March 03, 2025
Announcement
Beginning on Sunday, March 9, 2025, we will initiate a phased rollout of releases.
The first stage will be rolled out in the following regions on Sunday, March 9, 2025:
Japan
India
Australia
Canada
Germany
Switzerland
The second stage will be rolled out in the remaining regions on Sunday, March 16, 2025:
Singapore
Qatar
Saudi Arabia
Israel
UK (London)
Italy
EU (multi-region)
US (multi-region)
If you're unsure of your assigned region, contact your Google SecOps representative.
March 02, 2025
Announcement
Release 6.3.37 is currently in Preview. This release contains internal and customer bug fixes.
March 01, 2025
Announcement
Release 6.3.36 is now in General Availability.
February 22, 2025
Announcement
Release 6.3.36 is currently in Preview. This release contains the following feature.
Feature
New Custom fields for case management
Added support for custom fields that analysts can fill out when working with cases or alerts, such as report time or false positives . These fields appear as a widget in the Case or Alert overview tab.
Custom fields can now be added to playbooks as actions or placeholders.
Requires downloading the latest Siemplify integration.
For more information about this new feature, see Create Custom Fields .
Announcement
Release 6.3.35 is now in General Availability.
February 15, 2025
Announcement
Release 6.3.35 is currently in Preview. This release contains the following feature.
Feature
New options for closing a case
This feature is currently in Preview .
New custom field options have been added to the Settings > Case Data > Close Case page. Once you define these fields, analysts must enter specific types of information when closing a case.
For more information, refer to Customize the Close Case dialog .
Announcement
Release 6.3.34 is now in General Availability.
February 09, 2025
Announcement
Release 6.3.33 is now in General Availability.
February 08, 2025
Announcement
Release 6.3.34 is currently in Preview.
February 02, 2025
Feature
Environment groups
This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
You can use environment groups when adding users, mapping IdP user groups, creating new playbooks, and applying case filters on the platform.
For more information about how to create groups of environments, see Create environment groups .
Feature
Map IdP Groups to control access parameters
You can now create user groups in your SAML provider and map them to IdP groups, removing the need to manually add individual users to the platform. For more information, see IdP Group Mapping in the SOAR platform .
Announcement
Release 6.3.33 is currently in Preview. This release contains the following features.
February 01, 2025
Announcement
Release 6.3.32 is now in General Availability.
January 26, 2025
Announcement
Release 6.3.31 is now in General Availability.
January 25, 2025
Announcement
Release 6.3.32 is currently in Preview. This release contains internal and customer bug fixes.
January 20, 2025
Deprecated
Python 3.7 is being deprecated and will be fully removed on June 1, 2025.
For information on how to update Marketplace integrations to Python 3.11, refer to Upgrade the Python versions .
January 19, 2025
Announcement
Release 6.3.31 is currently in Preview.
This release contains internal and customer bug fixes.
January 18, 2025
Announcement
Release 6.3.30 is still in Preview.
January 12, 2025
Announcement
Release 6.3.29 is now in General Availability.
January 11, 2025
Announcement
Release 6.3.30 is currently in Preview.
Change
Playbook names must now be unique across all SOAR environments, as part of updates to support future features.
For customers with existing playbooks in different environments that have the same name, there is no need to manually change names. However, the next time you edit one of these playbooks, you will be asked to change the name before you save.
January 04, 2025
Announcement
A partial update was released this week.
The following Releases are in General Availability depending on your platform version as shown in the Settings > License page:
6.3.26
6.3.28
December 15, 2024
Announcement
Release 6.3.28 is currently in Preview.
December 14, 2024
Announcement
Release 6.3.27 is still in Preview.
December 08, 2024
Announcement
Release Notes 6.3.27 is in Preview.
Announcement
In order to align with our flagship Google SecOps platform, we are unifying our themes.
The SOAR platform will now offer two themes: gray (default) and light.
Announcement
Release 6.3.26 is now in General Availability.
December 01, 2024
Announcement
The official maintenance window is on Sundays between 11:00 to 15:00 UTC. Note that maintenance does not always necessitate a service outage.
November 24, 2024
Announcement
Release 6.3.26 is currently in Preview.
Feature
New options for closing a case
New custom field options have been added to the admin settings close case page.
Using these fields, you can ask the analyst to enter different types of information when closing a case.
For more information, refer to Customize the Close Case dialog
November 17, 2024
Announcement
Release 6.3.25 is now in General Availability.
From now on, only new features and changes will be written up for the Release Notes. Please use the customer portal to track progress of your support tickets or reach out to Customer Support for more information.
November 10, 2024
Announcement
Release 6.3.25 is in Preview.
November 09, 2024
Announcement
Release 6.3.24 is now in General Availability.
November 02, 2024
Announcement
Release 6.3.24 is currently in Preview.
Announcement
From now on, only new features and changes will be written up for the Release Notes. Please use the customer portal to track progress of your support tickets or reach out to Customer Support for more information.
Announcement
Release 6.3.23 is now in General Availability.
Feature
You can now use custom integrations in prompts when creating a playbook with Gemini.
October 26, 2024
Announcement
Release 6.3.23 is currently in Preview.
Fixed
Unexpected behavior between system wide and user preference localization time zone settings. Following this bug fix, the default time zone is now set to UTC + 1. This does not override the user local settings. The admin needs to change the default timezone to the required timezone if needed. (ID #51914939, #52558921)
Fixed
Custom SMTP Configuration does not send emails with send_mail function in monitoring jobs (ID #52614371)
October 20, 2024
Announcement
Release 6.3.22 is now in General Availability.
October 13, 2024
Announcement
Release 6.3.22 is currently in Preview.
Fixed
NOTE : This bug fix did not get fixed in 6.3.22 but was moved to 6.3.23.
Unexpected behavior between system-wide and user preference localization time zone settings. Following this bug fix, the default time zone is now set to UTC + 1. This does not override the user local settings. The admin needs to change the default time zone to the required time zone if needed. (ID #51914939, #52558921)
Feature
Gemini Case Summary has been added as a placeholder to playbook actions. You can now use this to show the AI-generated case summary in a playbook action. Note that the playbook will only include this summary if it is available.
Fixed
The Remote Agent page doesn't display all the integrations and connectors. (ID #53428660)
Fixed
Advanced Reports not displaying all the information. (ID #52923225, #00298032, #52553071)
Fixed
Parallel action name changes are not reflecting the subsequent actions in a playbook. (ID #352725736)
Fixed
Case Close Root Causes may cause errors when removed from playbook. (ID #50942408)
Fixed
Playbook errors remain in the Pending Actions widget even after re-running their playbook. (ID #00274123)
Fixed
Vw Dashboard Alerts HasPlaybook column shows incorrect information. (ID #53304589)
Fixed
SDK _get_case_by_id function does not return case tags, even though the case has tags.
Fixed
Issue with Siemplify Create or Update Entity action. (ID #53053446)
Fixed
The search_everything database is displaying incorrect entity values. (ID #52746256)
Fixed
CaseSearchEverything API time zone discrepancies. (ID #52558921)
October 06, 2024
Announcement
Release 6.3.20 is now in General Availability.
Announcement
Remote Agents 2.2.0 is now in General Availability.
October 05, 2024
Announcement
Release 6.3.21 is currently in Preview.
Feature
When performing a search on entities in the SOAR search page, you can now focus on more precise results by using the new condition Equals , in addition to the default condition Contains .
September 30, 2024
Announcement
Remote Agents 2.2.0 Release is currently in Preview.
Feature
Logs quality and coverage enhancements.
September 29, 2024
Announcement
Release 6.3.19 is now in General Availability.
September 28, 2024
Announcement
Release 6.3.20 is currently in Preview.
Feature
The case report now includes all information written to the Case wall.
Feature
It is now possible to merge cases where the requester is not the assignee both in the platform and through the API endpoint: api/external/v1/cases-queue/bulk-operations/MergeCases
Fixed
Timeout error for playbook action (ID #52418008)
Fixed
Time Zone sync issue (ID #52421707)
Fixed
Remote agents not visible in the drop-down field. (ID #53299495)
Fixed
Inaccurate case tag data in Advanced Reports (ID #00308538)
Fixed
Tags are displayed in the database after being deleted from the platform (ID #53263012)
Fixed
Custom integration is reverted to the latest imported code after saving custom integration settings. (ID #53578268)
Fixed
Timeout error when trying to add an alert grouping rule. (ID #00298026)
September 23, 2024
Announcement
Release 6.3.18 is now in General Availability.
September 22, 2024
Announcement
Release 6.3.19 is currently in Preview.
Fixed
The comment count on the case wall is not updating correctly. (ID #53266243)
Fixed
The HTML widget refresh is not affecting the JS code. (ID #00266956)
Feature
Case Report can now be exported in PDF format.
September 15, 2024
Announcement
Release 6.3.17 is now in General Availability.
Announcement
Release 6.3.18 is currently in Preview.
September 09, 2024
Announcement
Due to technical issues, the SOAR version has been rolled back to Release 6.3.16 .
September 08, 2024
Announcement
Release 6.3.17 is now in General Availability.
September 07, 2024
Announcement
Release 6.3.18 is currently in Preview.
Fixed
Playbooks are getting stuck in the queue. (ID #53247410)
September 02, 2024
Announcement
Release Notes 6.3.16 is now in General Availability.
Announcement
Remote Agents 2.1.0 is now in General Availability.
September 01, 2024
Announcement
Release Notes 6.3.17 is currently in Preview.
Fixed
Playbook shows failed step even though it's not being used by the playbook. (ID #00282731)
Fixed
Unable to edit, delete or export custom integration (ID #52403533)
Fixed
Alert names that are too long cover the time remaining on the alert SLA. (ID #52831259)
Fixed
Last Close comment and Last Close Root Cause not showing up in BigQuery . (ID #00298031)
Fixed
Playbook export contains archived blocks. (ID #00251935)
Fixed
Multi Select option not working in Custom Actions . (ID #52874346)
August 18, 2024
Announcement
Release Notes 6.3.16 is currently in Preview.
Fixed
Unable to edit, delete or export custom integration (ID #52403533)
Announcement
Remote Agents 2.1.0 is currently in Preview
Feature
Agent logs are now consolidated in one location: /opt/SiemplifyAgent/Logs .
Agent source code logs are located in agent.log
python scripts logs are located in python.log
Change
Release 6.3.15 is now in General Availability.
August 17, 2024
Announcement
The documentation for the SOAR product is currently undergoing a makeover.
The upper tabs for the table of contents have been removed and the table of contents for SOAR now appears at the bottom of the left hand navigation bar.
In addition, labels have been added to the top of each page that let you know if the specific page is relevant for SOAR. You can click on the label to reach the SOAR table of contents.
August 11, 2024
Announcement
Release 6.3.14 is now in General Availability.
August 10, 2024
Announcement
Release 6.3.15 is currently in Preview.
Fixed
Unable to upload ZIP files to the Case wall. (ID #52659859)
August 03, 2024
Announcement
Release 6.3.13 is now in General Availability.
August 02, 2024
Announcement
Release 6.3.14 is currently in Preview.
Fixed
Unable to rerun a failed playbook step when the parameter is very large. As part of the fix, large parameter values will show as truncated on the platform but will not change the actual value sent to the playbook. (ID #49774296)
Fixed
Missing audit log entries when deleting permission groups (ID #51496411)
Fixed
Playbook simulator sometimes not executing actions in the correct order (ID #48264534)
Fixed
The platform does not show the correct error when trying to save a playbook which is open in another tab. (ID #00269661)
Fixed
Can't remove the remote agent after host/container has stopped (ID #49024310)
Fixed
List and multi-select parameters not appearing correctly in the IDE (ID # 51995565)
July 29, 2024
Announcement
Release 6.3.12 is now in General Availability.
July 27, 2024
Announcement
Release 6.3.13 is currently in Preview.
Feature
Create a Playbook with Gemini
You can now use Gemini to create Playbooks. Gemini can create a functional playbook based on your prompts. This feature is in public preview. For more information, refer to Create playbooks with Gemini .
Fixed
Scheduled reports failing due to Microsoft email server authentication token request throttling (ID #00277914)
July 24, 2024
Announcement
The Incident Manager in Google Security Operations will be fully decommissioned on July 22, 2025.
Google Cloud will provide full support and maintenance until July 22, 2025 but no new features will be released.
July 23, 2024
Announcement
Release 6.3.11 is now in General Availability.
Announcement
Release 6.3.12 is currently in Preview.
Fixed
Trying to export case reports results in an error (ID #52316269)
Fixed
Integration update might fail in an environment with an extremely high number of playbooks (ID #51785856)
Fixed
Logs of newly created jobs are not accessible (ID #51865082)
Fixed
Saved filters in Cases screen disappear (ID #50834432)
July 14, 2024
Announcement
Remote Agents Release 2.0.2 is now in General Availability.
July 13, 2024
Deprecated
Python 2.7 is being deprecated and will be fully removed on October 13, 2024.
For information on how to update Marketplace integrations to Python 3.11, refer to Upgrade the Python versions .
Announcement
Support for Python 3.11 : Google SecOps now supports Python 3.11 in all the certified integrations. This feature is in General Availability.
Feature
IDE Staging mode : A staging mode has been added to the IDE where you can test certified and custom integrations as well as custom items. The staging mode acts as a sandbox where you can test the new Python 3.11 code or any upgraded integration before pushing to production. For more information, refer to Test integrations in staging mode . This feature is in General Availability.
July 12, 2024
Announcement
Release 6.3.10 is now in General Availability.
July 10, 2024
Announcement
Release 6.3.11 is currently in Preview.
Fixed
Case tag filter pagination is not working in cases page (ID #339581969)
Fixed
Issues when testing SOAR Webhooks for ingestion. (ID #51862016)
July 09, 2024
Announcement
Release 6.3.9 is now in General Availability.
July 05, 2024
Announcement
Remote Agents Release 2.0.2 is currently in Preview. Note the version number has been changed from 2.0.0 to 2.0.2.
July 04, 2024
Announcement
Release 6.3.10 is now in Preview.
Feature
The limit for action result attachments has now been raised to 50 MB. (ID #00294694)
Fixed
Playbook is stuck in the queue. (ID #51894700)
Fixed
Issues when importing a custom list which contains duplicated records.
July 02, 2024
Announcement
Remote Agents Release 2.0.1 is currently in Preview. Note that the version number has changed from 2.0.0 to 2.0.1.
June 28, 2024
Announcement
Release 6.3.8 is now in General Availability.
Announcement
Remote Agents Release 2.0.1 is now in General Availability. Note that the version number has changed from 2.0.0 to 2.0.1.
This Release Note is incorrect; see entry for
July 2, 2024 .
June 27, 2024
Announcement
Release 6.3.9 is currently in Preview.
Feature
Case List preferences are now saved permanently per user. This includes column selection, order of columns, and sorting within columns.
Fixed
Environment table column width display issue when using dynamic parameters with many characters (ID #51611835)
Fixed
Editing or saving any step in the playbook resets the view to zoom out (ID #00162859, #48257046)
June 21, 2024
Announcement
Release 6.3.7 is now in General Availability.
June 20, 2024
Announcement
Release 6.3.8 is currently in Preview.
Fixed
When running an imported playbook with an assigned user that doesn't exist, the playbook stops working when it gets to manual actions. (ID #00290960)
Fixed
Entity properties not showing in the platform if the key name contains the time string
(ID #51599403)
June 14, 2024
Announcement
Release 6.3.6 is now in General Availability.
Announcement
Remote Agents Release 2.0.0 is currently in Preview.
Support added for Python 3.11
The following articles have been updated as a result:
Create Agent with Installer for RHEL
Create Agent with Installer for CentOS
Perform a major upgrade using installer for CentOS
Perform a major upgrade using installer for RHEL
June 13, 2024
Announcement
Release Notes 6.3.7 is currently in Preview.
Fixed
Case filters are removed when refreshing the browser (ID #50834432)
Fixed
Custom Actions, and the parameter types multi-select and password cause errors when trying to save a playbook (ID #51582854)
June 06, 2024
Announcement
Release 6.3.5 is now in General Availability.
June 05, 2024
Announcement
Release 6.3.6 is currently in Preview.
Fixed
Change Alert Priority action does not update the case priority (ID #00277602)
May 30, 2024
Announcement
Release 6.3.4 is now in General Availability.
May 29, 2024
Announcement
Release 6.3.5 is currently in Preview.
Fixed
Subject Entity Search Filters are not working properly (ID #50841312)
Fixed
Tags not showing as expected in the Search page (ID #50691614)
Fixed
All Environments is not supported when importing networks from CSV (ID #00276371)
Fixed
Action All CVE Entity filter is not working (ID #51310124)
Fixed
Trying to set an SLA definition that is too similar to an existing one results in an incorrect error message (ID #00289305)
Fixed
Case actions - generate report has missing content (ID #50620576)
May 24, 2024
Announcement
Release 6.3.3 is now in General Availability.
May 23, 2024
Announcement
Release 6.3.4 is currently in Preview.
Fixed
Unable to edit case comments via API (ID #49966652)
Fixed
Google SecOps SOAR fails to return API keys (ID #50630848)
Fixed
Event details search option in alert tab stops working (ID #00287518)
Fixed
Error when trying to add a user to Google SecOps SOAR
Fixed
Unable to re-run the playbooks (ID #00282282)
Fixed
SOAR filtering not working due to unsupported commas in names
Fixed
Unable to create or import advanced reports for certain Looker users (ID #00265303)
May 17, 2024
Announcement
Release 6.3.2 is now in General Availability.
May 16, 2024
Announcement
Release 6.3.3 is currently in Preview.
Fixed
Inline CSS removed in Insights (ID #00273271)
Fixed
SAML login page showing blank (ID #00279230)
Fixed
Alert Type is empty when trying to add alert grouping rules (ID # 00275434)
Fixed
Search results distorting the screen (ID #00273643)
Fixed
Job page loading slowly and needs to be refreshed many times (ID #50253417)
Fixed
Gitsync power up push content not triggering automatically (ID #00283331)
May 09, 2024
Announcement
Release 6.3.1 is now in General Availability.
Announcement
Remote Agents Release 1.6.0 is now in General Availability.
May 08, 2024
Announcement
Release 6.3.2 is currently in Preview.
Fixed
User mentioned in case not receiving an email notification (ID #00274991)
Fixed
Widgets not fully aligned on Case view page (ID #49711925)
Fixed
Number increased for integer type integration parameters (ID #00287205)
Fixed
Wrong error message displays when you to try add a custom list with a name that already exists (ID #50610331)
Fixed
Issues when Siemplify > Set Case SLA actions run at the exact same time (ID #49397338)
May 02, 2024
Feature
Jobs can now be run remotely over remote agents.
Announcement
Remote Agents Release 1.6.0 is currently in Preview.
May 01, 2024
Announcement
Release 6.3.1 is currently in Preview.
Feature
Create a new playbook using Gemini (Preview)
You can now use Gemini to create a fully structured playbook. All you need to do is write a well structured prompt and click Create .
For more information, see Create playbooks with Gemini .
Change
Two changes have been made to the sort within cases ability:
Option to sort cases by name has been removed.
Added ability to sort through all existing cases and not only across a single page.
Feature
Change entities to be marked as non suspicious
When an entity is marked as IsSuspicious , you can now change the value from True to False.
Fixed
Clicking on events configuration takes you to the wrong mapping & modeling rules
Fixed
Alert Grouping settings not displaying correctly.
Fixed
Change Alert Priority action not working as expected (ID #00277602)
Fixed
Cannot insert images in reports (ID #00244001)
Fixed
HTML templates, case sensitivity issue and generic error (ID #44058663)
April 19, 2024
Announcement
Release 6.2.54 is now in General Availability.
April 18, 2024
Announcement
Release 6.3.0 is currently in Preview.
Announcement
Chronicle SOAR is being rebranded to Google Security Operations (Google SecOps).
Both the logo and the platform name have been rebranded as part of this change. This rebranding reflects our commitment to bringing you the best of Google security operations features.
There is no change to functionality in the platform.
Feature
Context-sensitive help added to the platform
When you click the documentation link at the top of the platform, you will now be directed to the exact documentation page that relates to the screen you are on.
Fixed
Parse case wall email doesn't work in playbook simulator (ID #00260679)
Fixed
Tagged user is not highlighted or hyperlinked on the Case Wall page & Notification popup
Fixed
Custom List import error not propagated to the user (ID #1032784)
Fixed
Events tab lists all artifacts even though they are part of different events (ID #49103838)
Fixed
Issues with Login (ID #00283928)
Fixed
Advanced Text Editor text formatting not working (ID #00274952)
Fixed
Playbooks not visible due to missing categoryId and categoryName values (ID #00274872)
Fixed
Unable to create advanced reports when a specific environment is selected (ID #49898167)
April 12, 2024
Announcement
Release 6.2.53 is now in General Availability.
Announcement
Remote Agent Release 1.5.0 is now in General Availability.
April 11, 2024
Announcement
Release 6.2.54 is currently in Preview.
Feature
In Release 6.2.45 the option to manually enter General placeholders was added. The General Placeholders section has now been added to the platform.
Fixed
Playbooks re-running during platform update (ID 00282275)
Fixed
Unable to import dynamic parameters (ID #00262571)
Fixed
Error when adding or removing a tag on a closed case (ID #50195120)
Fixed
When logging in via SAML it doesn't show up in the SOAR Audit logs.
Fixed
Playbook block input can't be used to select dynamic instance (ID #00276416)
Fixed
Playbooks not saving correctly (ID #49142793)
Fixed
Refreshing dashboard changes displayed data (ID #49716319)
March 29, 2024
Announcement
Release 6.2.52 is now in General Availability.
March 28, 2024
Announcement
Release 6.2.53 is currently in Preview.
Fixed
Case filter is_not not working as expected (ID #00279039)
Fixed
Issue when filtering Cases in Cases Page (ID #49689809)
Fixed
Unsupported providers causing playbooks not to run (ID #00262970)
Fixed
Playbook block missing when trying to add it to a case (ID #00273133)
Fixed
Report Scheduler not sending out reports as planned (ID #00277914)
March 27, 2024
Announcement
Remote Agent Release 1.5.0 is currently in Preview.
Feature
Support for future major upgrades
Currently, Google supports minor upgrades which make changes to the remote agent code only.
We have now added support for the customer to carry out a major upgrade which requires changes to the entire OS or libraries in the machine.
You will receive clear instructions before a major upgrade. These must be followed very carefully in order to ensure the Remote Agent can continue to work with your machine.
Feature
Support for updating custom environment variables (ID #47675122)
You can now configure environment variables on the agent.
Change
Remote connector logs are now written to the following path:
/opt/SiemplifyAgent/Integrations/<integration name>/Connectors/<connector instance>/remote_script.log
March 20, 2024
Announcement
Release 6.2.52 is currently in Preview.
Feature
Case filter and URL now in a reciprocal relationship
In the Cases page, the filter and the URL now directly affect each other. Changing the filter changes the URL, and conversely, changing the URL changes the filter.
You can take advantage of this feature by setting a filter for cases and putting the newly created URL in an external dashboard. Clicking on this link would then take you directly to the filtered case queue.
Fixed
lastLoginTime returns wrong date for SAML users (ID #00278010)
Fixed
Playbooks with async actions longer than 7 days can't be saved even though time set to 14 days in IDE (ID #00269032)
Fixed
Wrong error message returned for environment alias duplicates (ID #00271405)
Fixed
Clicking on events configuration opens the wrong mapping & modeling rules
Fixed
Incident Manager appearing in navigation even though user doesn"t have license (ID #49062139)
March 15, 2024
Announcement
Release 6.2.5.0 is now in General Availability.
March 13, 2024
Announcement
Release 6.2.51 is currently in Preview.
Feature
Jobs Enhancement
When updating an integration, the jobs will now be updated automatically.
This does not apply to any legacy jobs that were created before October 2023.
The Marketplace integration will clearly identify the legacy jobs that are affected and provide instructions on how to proceed.
In addition, legacy jobs are now marked as such in the Jobs Scheduler page so that you can take action and resolve issues beforehand.
Change
APIs now documented
The following APIs are not new, but with this Release are now formally documented in Swagger:
AddOrUpdateEnvironmentRecords
RemoveEnvironmentRecords
Fixed
SDK call for create entity failure displays the wrong error message (ID #48950075)
Fixed
Searching for cases from the last week doesn't produce results (ID #00269819)
Fixed
Email HTML Templates > Show Email Template not rendering styles (ID #00249556)
March 08, 2024
Announcement
Release 6.2.49 is now in General Availability.
March 07, 2024
Announcement
Release 6.2.50 is currently in Preview.
Feature
In the Entity Explorer page, Case Distribution has been renamed to Alert Distribution .
This change makes the information easier to understand. (ID #48941723)
Fixed
Docker hub login is not needed and as such this instruction has been removed from the platform. (ID #49611790)
Fixed
Users with a single character in their last name are unable to login (ID #49008785)
Fixed
Alerts are being grouped into cases after the time specified in the platform.
Fixed
Inline CSS with styles and classes are not supported in Insights. Note that Scripts are not supported for security reasons. (ID #00273271)
Fixed
Unable to create new playbook blocks (ID #00275270)
Fixed
Custom integration settings: existing script dependencies don't show up (ID #49703871)
February 22, 2024
Deprecated
The following APIs have been deprecated and will be deleted in 6 months.
GET /api/external/v1/connectors/GetConnectorsData
POST /api/external/v1/connectors/DeleteConnector
POST /api/external/v1/connectors/AddOrUpdateConnector
POST /api/external/v1/connectors/UpdateConnectorFromIde
POST /api/external/v1/connectors/GetConnectorStatus
For each API above, there are one or more alternative endpoints that you can use as shown below:
Instead of
GET /api/external/v1/connectors/GetConnectorsData
Use one of the following:
GET /api/external/v1/connectors/template-cards
Provides basic information per each accessible connector definition.
POST /api/external/v1/connectors/template
Retrieves detailed information regarding a specific connector definition.
GET /api/external/v1/connectors/cards
Provides basic information per each accessible connector.
GET /api/external/v1/connectors/{identifier}
Retrieves detailed information regarding a specific connector instance.
Instead of
POST /api/external/v1/connectors/DeleteConnector
Use
DELETE /api/external/v1/connectors/{identifier}
Instead of
POST /api/external/v1/connectors/AddOrUpdateConnector
Use
POST /api/external/v1/connectors
Instead of
POST /api/external/v1/connectors/UpdateConnectorFromIde
Use
POST /api/external/v1/connectors/update-from-ide
Instead of
POST /api/external/v1/connectors/GetConnectorStatus
Use
GET /api/external/v1/connectors/{identifier}/statistics
Announcement
Release 6.2.49 is currently in Preview.
Fixed
In the IDE, using CrowdStrikeFalcon - Execute command and selecting scope as internal hosts and external hosts does not work (ID #00250316)
February 21, 2024
Announcement
Remote Agents Release 1.4.9 is currently in Preview.
Change
The Docker image to pull for this release is 1.4.9.2
Fixed
Upgrade agents from 1.3.8 on RHEL not working as expected (ID #00243884)
Fixed
Publisher memory usage issue (ID #00273756)
February 19, 2024
Announcement
The following items have been added to Release Notes 6.2.48.
Announcement
The AI Investigation widget is now available in Europe. For more information, refer to AI Investigation widget .
Fixed
Timeout for automatic and manual python-run operations failing after 5 minutes even though it's defined for a longer time in the platform (ID #00243596, #00213817, #45379045, #48348087, #00245583. #00227758, #00250153)
Automatic actions/operations now run for up to the time defined in the platform (maximum of 20 minutes).
The 5 minute timeout still applies for the following manual operations:
Run manual action
Run connector once
IDE - Play Item
February 16, 2024
Announcement
Release 6.2.47 is now in General Availability.
February 15, 2024
Announcement
Release 6.2.48 is currently in Preview.
Feature
Playbook condition branch name field can now hold up to 150 characters (ID #48159735)
Fixed
Save button not showing when adding lots of list items to the List type action parameter (ID #00266458)
Fixed
Just-in-Time User Provisioning configuration not available in Okta configuration. (ID #49263630)
Fixed
IDE - creating an integration or manager with the same name as an existing one results in the wrong error message (ID #47233004)
February 09, 2024
Announcement
Release 6.2.46 is now in General Availability.
February 08, 2024
Announcement
Release 6.2.47 is currently in Preview.
Announcement
Email settings: customer configuration change
In order to help with safe and secure communication, the Trust Certificate checkbox is scheduled to be deleted in April 2024 as it will be enabled automatically by default.
Customers who currently do not have this checkbox enabled are advised to carry out the following procedure.
In the Email Settings > Customer Configuration tab, enable the Trust Certificate checkbox.
Save the settings.
Click Test to ensure the configuration works.
Perform an action which will trigger a test email notification.
If errors are shown, follow the instructions in the error message.
Fixed
Custom SAML provider configuration error (ID #49125693)
Change
The placeholder CurrentUserRole that was removed from Release 6.2.45 is now supported.
Fixed
Manual Action Menu - Group and Specific filters when chosen together lead to errors (ID #49013713)
February 04, 2024
Announcement
In Release 6.2.45 we announced new placeholders. The placeholder CurrentUserRole has been removed and is not supported.
February 01, 2024
Announcement
Release 6.2.46 is now in Preview.
Feature
New audit logs
The platform now captures audit logs when a playbook folder is deleted. (ID 48557086)
Fixed
Mentioning users in a case is not working as expected. (ID #00180795)
January 31, 2024
Announcement
Release 6.2.45 is scheduled to be in General Availability as of February 4th, 2024.
January 19, 2024
Announcement
Release 6.2.45 is now in General Availability.
Announcement
Remote Agents 1.4.8
Enhancement for Docker image upgrade.
January 18, 2024
Announcement
Remote Agents 1.4.7
Bug Fix: Open SSL version on the remote agent is outdated. (ID #00250583)
January 17, 2024
Announcement
Remote Agents 1.4.5
Bug Fix: Removed forced upgrade when enabling an agent. (ID #46257228)
Announcement
Remote Agents 1.4.6
Bug Fix: Remote actions that use the API endpoint /api/external/v1/sdk/UpdateEntities fail with timeout. (ID #00265852)
January 11, 2024
Announcement
Release 6.2.44 is now in General Availability.
January 10, 2024
Announcement
Release 6.2.45 is currently in Preview.
Fixed
Case Queue not refreshing automatically (ID #00267303)
Feature
New placeholders added
A new category of placeholders have been added which focus on the current state of the session, such as logged-in user and the platform. These can be used in a variety of scenarios. For example, you can use them in an HTML widget to create customized information specifically for logged-in users as opposed to the users assigned to the case.
A new section called General has been added to the placeholders. It contains the following placeholders
HostUrl
CurrentUserEmail
CurrentUserID
CurrentUserFullName
CurrentUserRole
Note that the Current User placeholders cannot be used in playbooks or jobs.
January 05, 2024
Announcement
Release 6.2.43 is now in General Availability.
January 04, 2024
Announcement
Release 6.2.44 is currently in Preview.
Feature
Delete SAML provider
You can now delete existing SAML providers in the External Authentication page.
Fixed
Issues when trying to update a specific playbook block (ID #00267635)
Feature
New platform navigation
An entirely new way of navigating the platform is now available. For more information, refer to Navigate the SOAR platform .
Feature
Additional support for trimming large alerts
In order to prevent performance issues, when an alert contains over 500 entities, the alert is ingested with the key entities retained and the additional entities are removed.
This trimming support works in parallel with the current trimming mechanism as defined in Handle large alerts .
Fixed
Playbooks and their folders within a specific environment are deleted without a corresponding entry in the audit logs. (ID #48557086)
Announcement
The following API endpoints will be deprecated in July 2024.
api/external/v1/settings/AddOrUpdateSamlSettings
api/external/v1/accounts/DisableJitAndAutoRedirect
api/external/v1/settings/GetSamlSettingsTemplate
December 08, 2023
Announcement
Release 6.2.42 is now in General Availability.
December 07, 2023
Announcement
Release 6.2.43 is currently in Preview.
Fixed
Searching by entities does not return the full results (ID #47644037)
Fixed
Cases are loading too slowly (ID #00246621)
Fixed
API endpoint /api/external/v1/logging/python not returning logs (ID #00258483)
Fixed
Predefined widgets not available after updating playbook block (ID #47667046)
November 30, 2023
Announcement
Release 6.2.41 is now in General Availability.
November 29, 2023
Announcement
Release 6.2.42 is currently in Preview.
Fixed
Hash values are displayed instead of analyst names when generating a report (ID #47508033)
Fixed
Changing remote agents on an integration instance doesn't work
Fixed
Environments missing after toggling on All Environments in the Permission Group page (ID #00248779)
Fixed
The audit log shows the internal IPs instead of the external ones (ID #00170308, #00245571, #00262470)
November 23, 2023
Announcement
Release 6.2.40 is now in General Availability.
November 22, 2023
Announcement
Release 6.2.41 is currently in Preview.
Feature
Jobs enhancement
The following features have been added:
Ability to sort the job execution table by time or status
Indication in the jobs queue for each failed job iteration
Fixed
IDE's Live Autocomplete feature not working properly (ID #00250083)
November 16, 2023
Announcement
Release 6.2.40 is currently in Preview.
Fixed
Playbook actions carried out by automation are not labeled as such on the case wall (ID #47525692).
This bug fix is in Preview.
Fixed
Case title is not picking up information if it's in square brackets (ID #00262914).
This bug fix is in Preview.
November 15, 2023
Announcement
Release 6.2.39 is now in General Availability.
November 09, 2023
Feature
Update SiemplifyUtils to support Python 3 (ID #45825896).
This feature is in Preview
Feature
Jobs enhancement
The Jobs page in the platform has been enhanced to provide more information at a glance for the security analyst. The following is a list of the added features:
Filter jobs according to success or failure.
Click View Details to open a side bar with full details.
Export the log details in raw text format.
View all job iterations with extra pagination support.
This feature is in Preview.
Feature
Release 6.2.39 - Preview
Dynamic mode instance support
When a playbook is built for more than one environment, you need to use dynamic mode which picks the relevant instance configuration from the target environment. When using dynamic mode within environments that contain multiple instances, the playbook needs to stop and wait for the analyst to pick the right instance by the context of the alert.
In this release, we have added a new option to the playbook designer, such that the analyst can specify an instance for the dynamic mode to use within the target environment by entering a name or a pattern in a new Specify Instance Name field.
For more information, see Specify instance in dynamic mode .
This feature is in Preview.
Fixed
Issues with remote agent connected to remote connector in a shared instance configuration.
This bug fix is in Preview.
Fixed
SDK function result.add_html which generates HTML reports within a case ends up generating blank text (ID #47721779).
This bug fix is in Preview
Fixed
Incorrect playbook is attached to alert when using trigger Product Name when alerts are grouped (ID #47362407).
This bug fix is in Preview.
November 01, 2023
Fixed
Release Notes 6.2.38
Beta - 5th November, 2023
GA - 12th November, 2023
Custom roles denied access to Advanced Reports (ID #47668375)
In certain cases, significantly large entity graphs failed to load (ID #00250400)
October 25, 2023
Feature
Release Notes 6.2.37
Beta - 29th October, 2023
GA - 5th November, 2023
A new Explore containing case-related fields has been added to the Advanced Reports module in the platform. This Explore allows you to find fields and build visualizations for your report. We recommend using this new Explore in new widgets.
Fixed
Error when trying to log in again to Chronicle SOAR (ID #46831483)
Email HTML template shows blank page in Settings (ID #46912863)
Users filter in the Search page not displaying all the users (ID #00249930)
Active Directory Groups field removed from Settings Permission groups as it is not supported
October 24, 2023
Feature
Remote Agents 1.4.4
Added support for all SDK calls over remote agents
Improved managing integrations over the remote agent leading to a more overall stable product experience
Publisher Python version upgraded to Python 3.11
Fixed
Remote Agents 1.4.4
Remote agent actions do not return script results in the same way local actions return them (ID #45682680)
Users unable to change the remote agent environment via agent CLI
October 03, 2023
Fixed
Release 6.2.36
GA - 14th October, 2023
Internal security fixes
September 27, 2023
Feature
Release Notes 6.2.35
GA - 8th October
Risk Score and Severity added
Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab. These are Risk score and Severity. These values will only be populated when using the Google Chronicle SIEM connector.
Export/Import for Advanced Reports (using Looker) now supported both in the platform and using new APIs.
This enables customers to create reports on their staging environment and then import the template without the data into their production environment.
In the platform, the import is at the top of the Reports queue while the export icon is inside the actual report itself. The report file is in yaml format.
New APIs are as follows:
/api/external/v1/looker/report/import
/api/external/v1/looker/export/{report_id}
Fixed
Playbook name drop-down not showing any playbook names in various Playbook actions (ID #00248732)
Placeholders located inside other placeholders not always picked up correctly (ID #00244133)
Case title says unknown (ID #00249611)
GetCaseFullDetails and GetWallActivitiesV2 API endpoints failing to return results (ID # 00243878)
September 12, 2023
Change
Remote Agents 1.4.3.6
Remote agent now supports the same alert and event trimming logic as implemented in the server. New parameters in the database control the size of the alert as well as the size of the fields and events within them. Alerts that are bigger than this size will be automatically trimmed. If the alert is still too big, then the size of the fields and events will be trimmed. The resulting alert ingested into the case might therefore not contain all the original information.
Remote connector logs now display as required in the platform.
Remote agent no longer takes ownership of the entire /var/log directory when using the installer.
August 30, 2023
Fixed
Release Notes 6.2.34
Alerts ingested using webhooks are missing details (ID #00249611)
Entity Graph widget either not appearing or appearing without information (ID #00246250, #46124390)
Entity Graph API call not working
August 16, 2023
Feature
Release Notes 6.2.33
New Case Mentions in Playbook Actions
You can now mention the case assignee directly from a Playbook action
To mention the case assignee:
Drag the Siemplify Case Comment action into a Playbook step.
In the Comment field, write a message that you want the case assignee to see.
Click on the placeholder, drill down to Case > case.mentioncaseassignee and double click it in order for it to appear in the Comment field with the message. Alternatively, write [case.mentioncaseassignee] in the Comment field.
After the Playbook runs, the notification is written to the case wall and depending on your notification settings, sent to the user.
July 26, 2023
Fixed
Release Notes 6.2.32
Playbook not running with Playbook Simulator turned on in rare cases (ID #45093920)
Playbooks do not appear on the platform for some customers due to null category creation (ID #45985799, #00244424)
The timestamp displayed on the Cases>Alert>Playbooks tab drawer menu corresponds to the most recent modification time of the playbooks/blocks, rather than the actual execution time of the actions. Timestamp now displays actual execution time. (ID #00245107)
July 19, 2023
Feature
Release Notes 6.2.31
Added the ability to write comments on cases that have already been closed.
New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python
Fixed
Release Notes 6.2.31
Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798)
Specific Integration showing incorrect update available (ID #00181718)
SDK call siemplify.current_alert.creation_time returns 0 (ID #00226591)
In rare situations, unable to access several cases via the Platform or via API (ID #00243878)
When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181)
Entities that should be internal are created as external if ingested using the environment alias (ID #00225318)
In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run. It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834)
July 12, 2023
Fixed
Release Notes 6.2.30:
Playbooks not always saved correctly within Platform (ID #00243484)
amic include /release-notes/___chronicle-soar %}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
