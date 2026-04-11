---
title: "Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil
  title: "Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation"
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
Admin settings – Gemini in Looker
Stay organized with collections
Save and categorize content based on your preferences.
Note: This documentation page is for Looker (original) instances. For information about enabling Gemini in Looker for Looker (Google Cloud core) instances, see the Administer Gemini on your Looker (Google Cloud core) instance documentation page.
This documentation page describes how to administer Gemini in Looker for a Looker (original) instance. It covers the following topics:
How to enable and disable Gemini in Looker features for a Looker (original) instance
The permissions that are required to use Gemini in Looker features
This page is intended for users who are assigned the Looker Admin role for the Looker (original) instance.
What is Gemini in Looker?
Gemini in Looker represents a series of features in the Gemini for Google Cloud portfolio that provides generative AI-powered assistance to help you analyze and gain valuable insights from your data.
Learn how and when Gemini
for Google Cloud uses your data .
For more information about the types of tasks that Gemini in Looker can assist with, see the Gemini in Looker overview documentation page.
Before you begin
To enable or disable Gemini in Looker and to grant users permissions to use the features that use Gemini assistance, you must be assigned the Looker Admin role for the Looker (original) instance.
Gemini in Looker features are available for Looker-hosted instances only.
Conversational Analytics has more stringent instance requirements. See the Set up Conversational Analytics documentation page for more information.
Selectively enable and disable Gemini in Looker features
Important: Gemini in Looker is enabled automatically for Looker (original) instances that meet at least one of the following criteria:
The Automated Gemini in Looker enablement and user management setting on the Settings page in the Admin panel was enabled prior to June 9, 2025.
The instance is updated to Looker 25.6 after June 9, 2025.
Instances that are hosted in the EMEA region and those that are enrolled in Looker's Extended Support Release (ESR) program are exempt from automatic enablement.
Looker admins can still manage Gemini in Looker enablement at any time by using the following instructions.
To enable Gemini in Looker, follow these steps:
In the Admin panel, navigate to the Platform section and select the Gemini in Looker page.
Under Gemini in Looker enablement , turn on the Enable Gemini in Looker setting. When this setting is enabled, you can selectively enable the features on the Looker instance that use Gemini and that are generally available. Turn on the following toggles to enable each of their corresponding features:
Conversational Analytics — enables Conversational Analytics
Looker Assistants — enables the Visualization Assistant
Optionally, select Enable Trusted Tester Features to grant users access to the Trusted Tester capabilities of Gemini in Looker features. When this setting is enabled, you can selectively enable the features on the Looker instance that use Gemini and that are in Preview . Turn on the following toggles to enable each of their corresponding features:
Code Interpreter — enables the Code Interpreter for Conversational Analytics. The Conversational Analytics setting must also be enabled to use the Code Interpreter.
Semantic Search — enables Gemini-powered enhanced search capabilities . This setting requires the Enhanced Search Preview feature to be enabled for your instance.
LookML Assistant — allows users to write natural language prompts that produce Gemini-generated suggestions for LookML parameters, which they can add to their project files.
Expression Assistant — enables the Expression Assistant , which allows users to use natural language to write Looker expressions for table calculations and custom fields .
Explore NL Summary — allows users to view a Gemini-generated summary of a Looker Explore .
Explore Insight Assistant — enables the Insight Assistant , which allows users to ask natural language questions about an Explore, and create and modify queries based on the Explore.
AI-Assisted Quick Starts — enables the Gemini-generated Quick Start analyses for a Looker Explore.
Publish to Gemini Enterprise — allows owners of Conversational Analytics data agents to publish the agents in Gemini Enterprise when they also have a role that contains the publish_agent_externally permission.
When you enable this setting, you must provide the following information about the target Gemini Enterprise instance:
In the GCP Project Number field, enter the project number for the Google Cloud project that hosts the target Gemini Enterprise instance.
In the Region field, enter the region for the Gemini Enterprise instance. The region is listed under Location on the Gemini Enterprise Apps page.
In the Instance ID field, enter the specific ID of the Gemini Enterprise instance. This ID is located on the Gemini Enterprise Apps page.
In the Google Cloud console, grant the Looker-generated service account the Discovery Engine Admin IAM role in the Google Cloud project that hosts the Gemini Enterprise instance.
Optionally, turn on the Enable Trusted Tester Data Use setting. When this setting is enabled, you consent to your data being used by Google as described in the Gemini for Google Cloud Trusted Tester Program terms . This setting can be enabled only when the Enable Trusted Tester Features setting is enabled. Enabling Enable Trusted Tester Features automatically enables this setting.
To disable Gemini for a Looker (original) instance, clear the Enable Gemini in Looker setting.
Important: If you want to remove the option to enable Gemini in Gemini for a Looker (original) instance, contact Support.
You must grant the appropriate permissions to users before they can use Gemini in Looker features, including the Code Interpreter.
Grant the Gemini in Looker permission to users
Gemini assistance is available whilst performing various tasks in the Looker instance. To use any of these Gemini-assisted features, users must be granted a Looker role that applies the gemini_in_looker permission to the appropriate models as well as a role that contains permissions to perform the Gemini-assisted task . You can assign the gemini_in_looker permission in any of the following ways:
Grant users the Gemini default role
Grant users a custom role that contains the gemini_in_looker permission
Grant users Conversational Analytics permissions, permission sets, or roles
Add them to the Gemini Default Users group
Granting the Gemini default role
The gemini_in_looker permission is the only permission that is included in the Gemini default role , which by default applies to all models on the instance. You must also assign the access_data permission and any other permissions that may be necessary to use the specific Gemini in Looker feature.
You can assign this role to the appropriate users or groups .
Granting a custom role
To restrict users from accessing Gemini in Looker features for all models on the Looker instance, you can create a custom Looker role that applies the gemini_in_looker permission for specific models only, and assign it to the appropriate users or groups . You may need to remove those users from the Gemini Default Users group, which is assigned the Gemini default role by default. You must also assign the access_data permission and any other permissions that may be necessary to use the specific Gemini in Looker feature.
Granting Conversational Analytics roles or permissions
The Conversational Analytics Agent Manager role consists of the Conversational Analytics Agent Manager permission set for all models on the Looker instance. Users with this role can create, edit, share, and delete Conversational Analytics data agents that use Looker Explores.
The Conversational Analytics User role consists of the Conversational Analytics User permission set for all models on the Looker instance. Users with this role can chat with any Conversational Analytics data agent in Looker.
You can assign either of these roles to the appropriate users or groups . You can also create a custom Looker role that applies any of the Conversational Analytics permissions to specific models.
Adding users to the Gemini Default Users group
The Gemini Default Users group has been created automatically for all Looker (original) instances that use an open system configuration . Users in this group are assigned the Gemini role , which grants them the ability to use Gemini in Looker features when they also have a role that includes the other required permissions to use Gemini in Looker features .
You can edit the Gemini Default Users group to add or remove users, or to delete the group entirely. You can also add additional roles to the group.
For more information about how users are added to this group, see the Groups documentation page.
Additional permissions
To use any Gemini in Looker features, users must be granted a Looker role that contains permissions to perform the Gemini-assisted task. These permissions are summarized in the following list:
To query Looker data, or to create a data agent with Conversational Analytics or with the Conversational Analytics API , you must be assigned a Looker role that contains the access_data permission for the model that you're querying. Additional permissions are required to manage and use data agents with Conversational Analytics in Looker. Conversational Analytics is available when the Conversational Analytics setting is enabled.
To use the Visualization Assistant to create custom visualizations with Gemini assistance, you must be assigned a Looker role that contains the can_override_vis_config permission. The Visualization Assistant is available when the Looker Assistants setting is enabled.
To use the Code Interpreter in Conversational Analytics to translate your natural language questions into Python code and execute that code to provide advanced analysis and visualizations, you must be a assigned a role that has the same permissions that are required to use Conversational Analytics. The Code Interpreter is available when the Code Interpreter setting is enabled.
To write LookML with Gemini assistance, you must be assigned a Looker role that contains the develop permission for at least one model in a LookML project. This feature is available when the LookML Assistant setting is enabled.
To generate Explore summaries, including the suggested purpose of the Explore and the types of data that are used in the query, you must have a role that contains the develop permission for at least one model in the LookML project and the explore permission to view and interact with Explores. This feature is available when the Explore NL Summary setting is enabled.
To generate Quick Start analyses, you must be assigned a Looker role that contains the develop permission for at least one model in a LookML project. This feature is available with the AI-assisted Quick Starts setting is enabled.
To write Looker expressions with Gemini assistance, you must be assigned a Looker role that contains the create_table_calculations permission to use Gemini to write a table calculation expression, or a role that contains the create_custom_fields permission to write a custom field expression. This feature is available when the Expression Assistant setting is enabled.
To use the Insight Assistant to ask questions about an Explore and then use Gemini assistance to create or modify an Explore, you must be assigned a Looker role that contains the explore permission. This feature is available with the Insight Assistant setting is enabled.
Provide feedback
You can provide feedback about each Gemini in Looker feature. Instructions for how to submit feedback are included in the documentation for each feature.
Related resources
Gemini in Looker feature pricing .
Learn more about Gemini for Google Cloud
Learn more about Gemini in Looker
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
