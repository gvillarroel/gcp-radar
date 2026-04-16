---
title: "Admin settings - Marketplace \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-marketplace
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-marketplace
  title: "Admin settings - Marketplace \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Marketplace
Stay organized with collections
Save and categorize content based on your preferences.
The Looker Marketplace is a central location for finding, deploying, and managing any type of Looker content, such as Looker Blocks, applications, visualizations, and plug-ins.
The Marketplace page in the Platform section of the Admin menu lets you configure settings for the Looker Marketplace.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
Marketplace
The Marketplace option enables the Looker Marketplace . This option is enabled by default. When this option is disabled, the Marketplace icon is hidden, and users won't be able to access the Marketplace to install or manage applications.
Auto Install
The Auto Install option, when enabled, causes some Looker-built applications to automatically install and update on your Looker instance. The API Explorer is the only extension that will automatically install, but more Looker-built applications may be added in the future.
When you enable Auto Install , Looker displays the Enabling Marketplace Auto Install dialog. The dialog contains license information and a list of necessary entitlements and permissions that are required to install and run Looker-built extensions.
Click Accept . Looker will install any Looker-built extensions that are not yet installed. Then, every eight hours, Looker checks to see if there are any Looker-built extensions that need to be installed or updated. If there are, Looker will install the new extension or extensions and make any available updates to existing extensions at that time.
After you accept the license and entitlements, Looker returns you to the Marketplace page with Auto Install enabled.
If you enable Auto Install but do not enable the Marketplace option, Looker displays an error and won't run auto install until the Marketplace option is enabled.
If the Extension Framework option is not enabled, auto install will still occur but any extensions installed will not be available to users until the Extension Framework option is enabled.
Any installed Marketplace content, such as the API Explorer , can be accessed only by users who have the proper permissions and access to the associated models. For more information, see the Setting permissions for Looker extensions documentation page.
If you uninstall an auto installable application when Auto Install is enabled, the application will no longer be automatically installed and updated. To reverse this, either manually install the application again while Auto Install is enabled, or turn Auto Install off and back on again.
Auto Update Looker applications
The Auto Update Looker applications option, when enabled, causes some Looker-built applications to automatically update on your Looker instance.
Every eight hours, Looker checks for available updates for the Looker-built applications on your instance. If Looker finds updates, Looker then updates the existing applications.
The Auto Update Looker applications option doesn't check any applications for updates.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
