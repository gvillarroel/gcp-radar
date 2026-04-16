---
title: "Admin settings - Homepage \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/chart-config-editor
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage
  title: "Admin settings - Homepage \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - Homepage
Stay organized with collections
Save and categorize content based on your preferences.
The Homepage page in the General section of Looker's Admin menu lets admins configure a default homepage for their Looker instance. Looker admins can also set a homepage for a specific user or group with the landing_page user attribute .
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
Setting a default homepage for your instance
The Looker homepage appears when users log in to Looker or navigate to the homepage by clicking Home in the left navigation panel or by clicking the Looker logo. By default, the homepage for your instance is the pre-built Looker homepage , which displays a user's favorite content, that user's recently viewed content, and the recently viewed content at the organization. However, you can change this default to a URL within Looker.
The homepage options for your instance are available on the Homepage page under Set a default homepage for your organization :
Looker's pre-built homepage : The pre-built Looker homepage displays tabs for recently viewed content and favorited content. This setting is the default.
Note: If you are using Looker (Google Cloud core), the pre-built homepage also displays the following sections in addition to the Recently Viewed and Favorites tabs: A Sample Dashboards section, which displays the sample dashboards from the sample LookML project, unless the sample LookML project has been removed .
A BigQuery Connection section, which is visible to users with the manage_project_connections Looker permission . This section won't appear if the default BigQuery connection for the instance has been set up already.
A URL within Looker : You can set the default homepage to a specific page within Looker (such as the Favorites page), a board , a folder , or a Markdown file (such as a README or document file in a project) by specifying a relative URL such as /browse/boards/2 . If you set the homepage in your instance to a specific page within Looker or to a board, the Home button in the left navigation panel updates to the name of the page or the board.
If you have configured group or user homepage settings with the landing_page user attribute, those settings will override the default homepage that you have chosen for your instance. Users with group or user homepages will still be able to access a link to the instance-wide default homepage from the left navigation.
Setting a homepage for a specific user or group
In addition to setting a homepage for your entire instance, you can configure homepage settings for specific users or groups with the landing_page user attribute .
You can assign a specific homepage to a user or to a group by setting the value of the landing_page user attribute to a relative URL within Looker. If you want to assign a specific homepage to multiple users, we recommend that you create a new group specifically for that homepage option.
Setting a homepage for a specific group overrides the default homepage for your instance for members of the group. Setting a user-specific homepage also overrides any group homepage settings as well as the default homepage.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
