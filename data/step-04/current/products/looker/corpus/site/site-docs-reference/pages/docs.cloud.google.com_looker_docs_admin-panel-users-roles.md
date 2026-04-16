---
title: "Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-users-roles
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-users-roles
  title: "Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - Roles
Stay organized with collections
Save and categorize content based on your preferences.
Roles , permission sets , and model sets are used together to manage what users can do and what they can see . The Roles page in the Users section of the Admin panel lets you view, configure, and assign roles, permission sets, and model sets.
You can search for specific roles, permission sets, and model sets by entering a search term into the search box in the upper right and pressing Enter .
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
Definitions
A role defines the privileges that a user or group will have for a specific set of models in Looker. You create a role by combining one permission set with one model set.
A permission set defines what a user or group can do. You select a combination of permissions that you want to assign to a user or group. It must be used as part of a role to have any effect.
A model set defines what data and LookML fields a user or group can see. You select a combination of LookML models to which a user or group should have access. It must be used as part of a role to have any effect.
Managing roles
A role is a combination of one permission set and one model set. It's a common convention to name roles after types of people or groups of people in your organization — administrator, Looker developer, Finance team — although you can certainly follow your own naming conventions.
A user can have more than one role in Looker. This can be useful when you have users who play multiple roles in your company or when you want to create complex systems of access to your models.
Note: Adding users to multiple roles can have important implications for how the users' permissions are applied. For example, if a user has the manage_models permission (an instance-wide permission) in only one of their roles, they will be able to manage any model. In contrast, if a user has the access_data permission (a model-specific permission) in only one of their roles, that user can access only the models that are specified in that role.
Multiple roles can also cause unexpected effects on dashboards. See Managing business user features for information about dashboards and multiple roles.
Creating, editing, and deleting roles
To create a role, follow these steps:
Click the New Role button at the top of the Roles page.
Looker displays the New Role page, where you can configure the following settings:
Name : Enter a name for the role.
Permission Set : Choose a permission set to associate with the role.
Model Set : Choose a model set to associate with the role.
Groups : Optionally, choose one or more groups to assign the role to.
Users : Optionally, choose one or more users to assign the role to.
Once you've configured the role as intended, click the New Role button at the bottom of the page.
After a role has been created, you can edit it by clicking the Edit button to the right of the role on the Roles page. Clicking Edit takes you to the Edit Role page for that role, where you can edit the name, the permission set, the model set, and the groups or users who are assigned to the role.
To delete a role, click the Delete button to the right of the role on the Roles page.
Default roles
For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name:
Admin
Admin via IAM
Developer
Gemini
Looker CI Users
Conversational Analytics Agent Manager
Conversational Analytics User
Support Advanced Editor
Support Basic Editor
Customer Engineer Advanced Editor
User
Viewer
The default roles in the following sections have conditions for use.
Admin via IAM
The Admin via IAM role is available only in Looker (Google Cloud core) , and it can be managed only through the Google Cloud console. For more information, see the Authentication and authorization with OAuth and IAM and Admin Looker role versus the Admin via IAM Looker role documentation.
The Admin via IAM role uses the Admin permission set.
Tip: If a user's OAuth refresh token is expired, that user will no longer have the Admin via IAM role within the Looker (Google Cloud core) instance. To refresh the token, ask the user to sign in again with OAuth.
Looker CI Users
The Looker CI Users role is created automatically for Looker instances that have been enabled for Continuous Integration . The Looker CI Users role is applied to the Looker CI service accounts that can be viewed in the Service Accounts tab of the Users Admin page. Looker uses these CI service accounts to perform CI runs on the instance.
The Looker CI Users role has the following permissions that are required to perform CI runs:
deploy : required for setting up the GitHub webhooks that are required for CI runs
see_ci : required to view the results of CI runs, view the CI Suites page, and run CI suites
manage_ci : required to create CI suites, manage CI users, and configure the Git connection with Continuous Integration
Gemini
The Gemini role cannot be renamed or deleted and contains only the gemini_in_looker permission in its permission set. By default, this role's permission set applies to all models on the Looker instance. To restrict users to accessing Gemini in Looker features with specific models, remove those user accounts from the Gemini role and create a new role that applies the gemini_in_looker permission on selected models. Make sure to remove those users from the Gemini Default Users group.
The gemini_in_looker permission that is included in this role enables users to perform the following tasks in the Looker instance with Gemini assistance:
Write LookML — when they also have a Looker role that contains the develop permission for at least one model in a LookML project.
Create custom Looker visualizations — when they also have a Looker role that contains the can_override_vis_config permission.
Query Looker Explore data in Looker Studio with Conversational Analytics , even if the user hasn't been assigned explore permissions in Looker, when they also have a Looker role that contains the access_data permission.
Additional permissions are required to use Conversational Analytics in Looker, which can be granted with either the Conversational Analytics Agent Manager or Conversational Analytics User role.
For more information about Gemini in Looker features, see the Gemini in Looker overview .
Conversational Analytics Agent Manager
The Conversational Analytics Agent Manager role consists of the Conversational Analytics Agent Manager permission set for all models that are on the Looker instance. Users with this role can create, edit, share, and delete Conversational Analytics data agents that use Looker Explores.
Note: When a user creates a data agent, they're granted Manage Access, Edit content access automatically; however, they must be granted this access for the data agent if they want to edit, share, or delete a data agent that was created by another user.
Conversational Analytics User
The Conversational Analytics User role consists of the Conversational Analytics User permission set for all models on the Looker instance. Users with this role can chat with any Conversational Analytics data agent in Looker, as long as they have been granted View access to the data agent.
Support Advanced Editor and Support Basic Editor
These roles won't appear on a Looker (original) instance if a Looker admin has disabled the Tiered Support Access Labs feature. These roles won't appear on a Looker (Google Cloud core) instance if the instance uses private connections (private services access or Private Service Connect) networking or hybrid connections networking .
The Support Advanced Editor and Support Basic Editor roles cannot be edited, deleted, or assigned to users other than support access users .
Assigning default roles to a user
To update an individual user's settings to assign a default role, follow these steps:
Navigate to the Users page in the Users section of the Admin panel.
Select the user or group whose permissions you want to change.
From the Roles drop-down menu, select the role name.
Select Save to retain these settings.
Permission sets
A permission set defines what a user or group can do. Admins can use Looker's default permission sets or create original permission sets , keeping in mind permission dependencies .
All the available permissions, and their types, are discussed in more detail in the permissions list .
Default permission sets
For new installations, Looker includes several default permission sets that you can start with:
Permission Set
Included Permissions
Admin
All permissions
Developer
access_data , can_create_forecast , clear_cache_refresh , create_custom_fields , create_table_calculations , deploy , develop , download_without_limit , explore , manage_spaces , mobile_app_access , save_content , save_dashboards , save_looks , schedule_look_emails , see_drill_overlay , see_lookml , see_lookml_dashboards , see_looks , see_pdts , see_sql , see_user_dashboards , send_to_integration , schedule_without_limit , use_sql_runner
NOTE : The see_pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later. To verify whether the see_pdts permission is included in the Developer permission set on your instance, go to the Roles page in the Admin panel in the Looker UI.
Gemini
gemini_in_looker
Conversational Analytics Agent Manager
access_data , gemini_in_looker , chat_with_agent , chat_with_explore , save_agents
Conversational Analytics User
access_data , gemini_in_looker , chat_with_agent
Customer Engineer Advanced Editor
access_data , can_create_forecast , can_override_vis_config , chat_with_agent , chat_with_explore , clear_cache_refresh , create_custom_fields , create_table_calculations , deploy , develop , explore , follow_alerts , gemini_in_looker , manage_embed_settings , manage_models , manage_privatelabel , manage_project_connections , manage_project_connections_restricted , manage_project_models , manage_themes , save_agents , save_content , save_dashboards , save_looks , see_admin , see_alerts , see_datagroups , see_drill_overlay , see_logs , see_lookml , see_lookml_dashboards , see_looks , see_pdts , see_queries , see_schedules , see_sql , see_system_activity , see_user_dashboards , see_users , update_datagroups , use_global_connections
NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled. The Customer Engineer Advanced Editor permission set can't be edited or deleted.
Support Advanced Editor
access_data , clear_cache_refresh , create_custom_fields , create_table_calculations , develop , explore , follow_alerts , manage_embed_settings , manage_models , manage_privatelabel , manage_project_connections , manage_project_connections_restricted , manage_project_models , manage_themes , see_admin , see_alerts , see_datagroups , see_drill_overlay , see_logs , see_lookml , see_lookml_dashboards , see_looks , see_pdts , see_queries , see_schedules , see_sql , see_system_activity , see_user_dashboards , see_users , update_datagroups , use_global_connections
NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled. The Support Advanced Editor permission set can't be edited or deleted.
Support Basic Editor
access_data , clear_cache_refresh , create_custom_fields , create_table_calculations , explore , follow_alerts , manage_privatelabel , manage_themes , see_admin , see_alerts , see_drill_overlay , see_logs , see_lookml , see_lookml_dashboards , see_looks , see_pdts , see_schedules , see_sql , see_datagroups , see_system_activity , see_user_dashboards , see_users
NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled. The Support Basic Editor permission set can't be edited or deleted.
LookML dashboard user
access_data , clear_cache_refresh , mobile_app_access , see_lookml_dashboards
User
access_data , can_create_forecast , clear_cache_refresh , create_custom_fields , create_table_calculations , download_without_limit , explore , manage_spaces , mobile_app_access , save_content , save_dashboards , save_looks , schedule_look_emails , see_drill_overlay , see_lookml , see_lookml_dashboards , see_looks , see_sql , see_user_dashboards , send_to_integration , schedule_without_limit
User who can't view LookML
access_data , can_create_forecast , clear_cache_refresh , create_custom_fields , create_table_calculations , download_without_limit , explore , manage_spaces , mobile_app_access , save_content , save_dashboards , save_looks , schedule_look_emails , see_lookml_dashboards , see_looks , see_user_dashboards , send_to_integration , schedule_without_limit
Viewer
access_data , clear_cache_refresh , download_without_limit , mobile_app_access , schedule_look_emails , see_drill_overlay , see_lookml_dashboards , see_looks , see_user_dashboards , schedule_without_limit
You'll see these permission sets appear as options when you create a new role. If you select one of these permission sets, Looker will display the list of permissions that it includes.
Note: The Admin permission set cannot be edited or deleted, and it cannot be assigned to a role. It is assigned only to the Admin role, which also cannot be edited or deleted. The only way to grant the Admin permission set to a user or group is to add the Admin role to that user or group.
Creating permission sets
To create a permission set, click the New Permission Set button at the top of the Roles page. Looker will display a page where you can enter a name for the permission set and select the permissions that it should include. Once you've configured the set as needed, click the New Permission Set button at the bottom of the page.
After a permission set has been created, you can edit or delete it by clicking the Edit or Delete buttons to the right of the permission set on the Roles page.
Permissions and dependencies
Some permissions depend on others to work properly. For example, it makes sense that someone who wants to develop in LookML must first be able to see LookML.
When you create a permission set, you'll see the available permissions in an indented list. If a privilege is indented under another (parent) privilege, you must select the parent privilege first. The permission list may look like this:
☑️ access_data
☑️ see_lookml_dashboards
☑️ see_looks
☑️ see_user_dashboards
In this example, Looker uses indentation to indicate the following:
The access_data privilege can be selected at any time.
The see_lookml_dashboards and see_looks privileges require the access_data privilege to be selected first.
The see_user_dashboards privilege depends on the see_looks privilege, which in turn depends on access_data privilege.
You cannot select a child privilege without first selecting its parent.
Permissions and Looker licenses
Looker licenses classify users into three types:
Developer (Admin)
Standard (Creator)
Viewer
The permissions granted to a user determine how that user is classified under the Looker license:
A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions:
develop
manage_models
see_datagroups
see_logs
see_pdts
sudo
A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions:
create_prefetches
explore
manage_homepage
manage_spaces
save_content
see_queries
see_schedules
see_system_activity
see_users
use_sql_runner
save_agents
admin_agents
A user is classified as a Viewer if they have the access_data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
Permissions list
Permissions can be classified as one of three types:
Model Specific: This type of permission is applied only to the model sets that are part of the same role. This permission is applied to individual models or model sets, rather than across the entire Looker instance.
Connection Specific: This type of permission is applied at the connection level. A user with this type of permission will see content on pages in the Admin panel that uses a connection associated with a model to which they have data access, even if that connection is used with another model to which they do not have data access.
Instance Wide: This type of permission applies to the Looker instance as a whole and has three types:
NN = No content access, No menu access : These permissions allow users to perform certain functions across the entire Looker instance, but do not allow users to access content based on models not included in their role's model set.
CN = Content access, No menu access : These permissions allow users to access content and query information across the entire Looker instance — even for content and queries based on models not included in their role's model set.
CM = Content access, Menu access : These permissions may expose parts of the Admin menu to non-admin users and allow users to see information about content and queries based on models not included in their role's model set.
The following list describes all the permissions that are available in Looker, in the order in which they appear on the New Permission Set page in the Admin section:
Permission
Depends On
Type
Definition
access_data
None
Model Specific
Users can access data from Looker, but only the data that admins specify. This permission is necessary for almost all Looker functions.
A user with this permission, if given access to any model in a given project, can access any file in the Data section of that project (such as a JSON custom map file).
Looker Studio users with this permission can view Looker data on Looker Studio reports that use the Looker connector.
see_lookml_dashboards
access_data
Model Specific
Users can see the LookML Dashboards folder, which includes all LookML dashboards. Users must have explore permission for any relevant models to explore those dashboards. Users who also have the develop permission can create LookML dashboards .
see_looks
access_data
Model Specific
Users can see saved Looks (but not dashboards) within folders. Users must have explore permission for any relevant models to explore those Looks. Users will also need the View content access level to see Looks in folders.
see_user_dashboards
see_looks
Model Specific
Users can view user-defined dashboards in folders but must have explore permission for any relevant models to explore those dashboards. Users also need View content access to see dashboards in folders. Users who also have both the save_dashboards permission and the Manage Access, Edit content access to a folder can create user-defined dashboards in that folder.
explore
see_looks
Model Specific
Users can access and use the Explore page to generate Looks and dashboards. Without this permission, users can view saved dashboards only (if see_lookml_dashboards or see_user_dashboards has been granted).
Looker Studio users with this permission can create a data source in Looker Studio based on a Looker Explore. They can also view and edit that data source's configuration in Looker Studio.
create_table_calculations
explore
Instance Wide NN
Users can view, edit, or add table calculations
create_custom_fields
explore
Instance Wide NN
Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields.
can_create_forecast
explore
Instance Wide NN
Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access.
can_override_vis_config
explore
Instance Wide NN
Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format.
save_content
see_looks
Instance Wide NN
This permission is a parent permission of save_dashboards , save_looks , and create_public_looks . This permission must be granted with either save_dashboards or save_looks .
save_dashboards
save_content
Instance Wide NN
Users can save and edit dashboards. Users must have explore permission for any relevant models to explore from those dashboards. Users must have download_with_limit and/or download_without_limit permissions to download the content.
save_looks
save_content
Instance Wide NN
Users can save and edit Looks. Users must have explore permission for any relevant models to explore from those Looks. Users must have download_with_limit and/or download_without_limit permissions to download the content.
create_public_looks
save_looks
Model Specific
Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication.
download_with_limit
see_looks
Model Specific
This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
Users can download data but must specify a row limit of 5,000 or fewer to avoid memory problems from large downloads.
Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector.
download_without_limit
see_looks
Model Specific
This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
The same as download_with_limit , but does not require the user to specify a row limit. Downloading all results for some types of queries may require substantial memory, potentially causing performance issues or even crashing the Looker instance.
Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector.
schedule_look_emails
see_looks
Model Specific
This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
Users can schedule for delivery any Looks, dashboards, and queries with visualizations to which they have data access to email. Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
To send or schedule System Activity dashboards, users must have access to all models.
Users who are also assigned the create_alerts permission can send email alert notifications.
Looker admins can control the email domains that Looker users and embed users can send email deliveries to with the Email domain allowlist on the Settings page of the Admin panel.
Users who are also assigned the schedule_without_limit permission can select All Results when delivering Looks or Explores, which delivers all rows of data from the query results. Without the schedule_without_limit permission, user's deliveries of Look or Explore data are subject to the row limits of 5,000 rows.
Looker Studio Pro users with this permission can schedule deliveries of Looker Studio reports that use the Looker connector.
schedule_external_look_emails
schedule_look_emails
Model Specific
Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to email. Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
To send or schedule System Activity dashboards, users must have access to all models.
Users who also have create_alerts permissions can send email alert notifications.
Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains.
create_alerts
see_looks
Instance Wide NN
This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.
From the dashboard tile, users can create , duplicate, and delete their own alerts; and can see and duplicate alerts that are marked Public by other users. The user must be signed in to Slack to see dashboard tile alerts that send Slack notifications. Users can view, edit, disable, and enable alerts that they own on the Manage Alerts user page . Users must have the schedule_look_emails or the schedule_external_look_emails permission to send email alert notifications.
Looker Studio Pro users with this permission can create, duplicate, and delete alerts on Looker Studio reports that use the Looker connector.
follow_alerts
see_looks
Instance Wide NN
Users can view and follow alerts. View the alerts that they have followed or for which they are listed as a recipient from the Manage Alerts user page .
send_to_s3
see_looks
Model Specific
Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to an Amazon S3 bucket. Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
This permission is applied to individual models or model sets, rather than across the entire Looker instance.
send_to_sftp
see_looks
Model Specific
Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to an SFTP server. Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
This permission is applied to individual models or model sets, rather than across the entire Looker instance.
send_outgoing_webhook
see_looks
Model Specific
Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to a webhook. Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
This permission is applied to individual models or model sets, rather than across the entire Looker instance.
send_to_integration
see_looks
Model Specific
Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to the third-party services integrated with Looker using the Looker Action Hub. If using custom actions with user attributes , users must have this permission and have a non-null and valid user attribute value for the specified user attribute to deliver Looker content to that action destination. This permission is not related to data actions . Users can schedule delivery to occur after a datagroup has been triggered, has managed the cache, and has rebuilt relevant PDTs .
This permission is applied to individual models or model sets, rather than across the entire Looker instance.
schedule_without_limit
see_looks
Model Specific
Added 26.4
When combined with at least one other permission that allows a user to deliver Looker content, this permission allows users to deliver Looks or Explores that send all data rows. This permission makes visible the All Results option in the Looker Scheduler for Looks and Explores.
see_sql
see_looks
Model Specific
Users can access the SQL tab while exploring and on any SQL errors that are caused by their queries.
see_lookml
see_looks
Model Specific
Users have read-only access to LookML. Users must have this permission to see the Go to LookML link in the Admin panel.
If you want a user to be able to edit LookML, you must also grant them the develop permission.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the see_lookml permission to a user, and you've allowed that user to see any model that is a part of a project, they will be able to see the LookML for all models in that project. However, they will still not be able to query models that you have not allowed.
develop
see_looks
Model Specific
Users can make local changes to LookML but won't let them make those changes available to everyone unless they also have the deploy permission.
This permission is required to see the Get support option in the Help menu, and to see metadata in the Looker IDE . Users also need this permission to access the Rebuild Derived Tables & Run option in the Explore gear menu. This is not model-specific, so if a user has this permission in one model, they will have access to Rebuild Derived Tables & Run in all models.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the develop permission to a user, and you've allowed that user to see any model that is a part of a project, they will be able to develop the LookML for all models in that project. However, they will still not be able to query models that you have not allowed.
deploy
develop
Instance Wide NN
Users can push their local LookML changes to production so that those changes become available to everyone.
support_access_toggle
develop
Instance Wide NN
Users can enable or disable access by Looker analysts to your Looker instance.
manage_project_models
develop
Model Specific
Users can add, edit, or delete model configurations for allowed models on the Edit Model Configuration page. When configuring a model, users can use only project-scoped connections.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you create a role with the manage_project_models permission, the role will grant access to all models that share a project with any of the models in the role's model sets.
use_global_connections
manage_project_models
Model Specific
Users can configure allowed models with any project-scoped connection or any instance-wide connection.
manage_project_connections_restricted
develop
Model Specific CM
Users can see the Connections page in the Admin menu. They can see, edit, and create project-scoped connections for any projects in the model set. However, they can edit only the following connection settings:
All settings in the General settings section
All settings in the SSH Server section
All settings in the Time Zone section
The Additional JDBC Parameters , SSL , Verify SSL , and Use TNS settings in the Additional Settings section
Users cannot edit any other settings in the Additional Settings section. They also cannot edit any settings in the Persistent Derived Tables (PDTs) section.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the manage_project_connections_restricted permission to a user, the user will be able to see, edit, and create project-scoped connections for any projects included in the model set.
manage_project_connections
manage_project_connections_restricted
Model Specific CM
Users can see the Connections page in the Admin menu. They can see, edit, and create project-scoped connections for any projects included in the model set.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the manage_project_connections_restricted permission to a user, the user will be able to see, edit, and create project-scoped connections for any projects included in the model set.
see_ci
develop
Instance Wide NN
Added 25.6
Users can view the results of Continuous Integration runs, view the Continuous Integration Suites page, and run test suites.
manage_ci
see_ci
Instance Wide NN
Added 25.6
Users can create Continuous Integration suites, manage Continuous Integration users, and configure the git connection with Continuous Integration.
Only an admin can enable the Continuous Integration feature for a Looker instance.
use_sql_runner
see_lookml
Model Specific
Users can use SQL Runner to run raw SQL against their allowed connections. Users will also be able to download results using the Download option in the SQL Runner gear menu, regardless of whether the user has the download_with_limit or download_without_limit permissions.
certify_content
access_data
Model Specific
Added 25.20
Users can certify dashboards, Looks, and self-service Explores.
This permission is available only if the Access Content Certification preview feature has been enabled for your instance.
clear_cache_refresh
access_data
Model Specific
Users can clear cache and refresh internal and embedded dashboards, dashboard tiles, Looks, and Explores.
The clear_cache_refresh permission is automatically added to any pre-existing permission sets that contain any of the following permissions: see_user_dashboards , see_lookml_dashboards , or explore . The clear_cache_refresh permission is not automatically applied to any embedded roles .
Looker Studio users with this permission can refresh Looker data on Looker Studio reports that use the Looker connector.
see_drill_overlay
access_data
Model Specific
Users can see the results of drilling into a dashboard tile but cannot explore those results. If explore is granted, this permission is also automatically granted (even if it isn't checked). Users must also have explore permissions to download drill results in PNG format.
manage_schedules
None
Model Specific CM
Added 25.2
Users can reassign and delete schedules on the Schedules page for the specified models. This permission does not grant users the ability to see the Schedule History page.
manage_spaces
None
Instance Wide CN
Users can create, edit, move, and delete folders. Users will also need the Manage Access, Edit content access permission.
manage_homepage
None
Instance Wide NN
Users can edit and add content to the sidebar that all Looker users see on the prebuilt Looker homepage .
manage_models
None
Instance Wide CN
Each LookML model is mapped to a specific set of database connections on the Manage LookML Projects page. With this permission, users can configure these mappings, create new projects, and delete projects. Non-admin users who are granted this permission will have access to all connections that are allowed by the models to which they have access.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the manage_models permission to a user, the user will be able to access all models in all projects in the instance.
create_prefetches
None
Instance Wide
Prefetching is strongly discouraged. We recommend using datagroups instead.
login_special_email
None
Instance Wide
Users can log in with email/password credentials, even if other login mechanisms (such as Google, LDAP, or SAML) have been enabled on your instance. This can be useful for consultants or others who may not be a part of your normal authentication system.
embed_browse_spaces
None
Instance Wide NN
Enables the content browser for signed embeds . If you're using signed embeds, you should grant this permission to users who have the save_content permission.
On non-embedded instances, this permission removes the favorite icon for internal users.
embed_save_shared_space
None
Instance Wide
Allows user with the save_content permission to save content to the organization's Shared folder, if there is one. Users who have the save_content permission but not the embed_save_shared_space permission will only have the option to save content to their personal embed folder .
manage_embed_settings
None
Instance Wide CM
Users can edit embed settings on the Embed page in the Platform section of the Admin menu.
manage_themes
None
Instance Wide CM
Users can configure theme settings for embedded dashboards, Looks, and Explores on the Themes page in the Platform section of the Admin menu.
This permission is available only if themes have been enabled for your instance.
manage_internal_themes
None
Instance Wide CM
Users can configure theme settings for dashboards that are internal to Looker (non-embedded) on the Themes page in the Platform section of the Admin menu.
This permission is available only if the Internal Dashboard Theming preview feature has been enabled for your instance.
manage_privatelabel
None
Instance Wide CM
Users can configure private label settings on the Private Label page in the Platform section of the Admin menu.
This permission is available only if private label has been enabled for your instance.
see_alerts
None
Instance Wide CM
Users can access the Alerts and Alert History pages in the Admin section, allowing users to see all alerts on a Looker instance. Users can view, follow, edit, self-assign, and disable alerts that are owned by other users from the Alerts Admin page.
Users must have permissions to access the alert's underlying content to view or explore from the alert's visualization (in the Alert Details page) or to navigate to its dashboard. This permission does not grant users the ability to view, create, follow, or delete alerts from the dashboard tile.
see_queries
None
Instance Wide CM
Users can see the Queries page in the Admin section of Looker. This privilege does not give a user the ability to terminate a query on the Queries page.
see_logs
None
Instance Wide CM
Users can see the Log page in the Admin section of Looker.
see_users
None
Instance Wide CM
Users can see the Users page (but not the Groups page) in the Admin section of Looker. This privilege does not give a user the ability to create new users, see or create API credentials, reset passwords, or otherwise modify users or privileges. A user granted this permission can see all users in all groups on an instance, even on a closed system . A user can see all group names and all role names, which some companies may consider sensitive information.
sudo
see_users
Instance Wide CM
Users can sudo (in other words, act as and temporarily inherit the permissions of) another user by clicking the Sudo button on the Users page.
The sudo permission does not allow a non-admin to sudo as an admin, but a non-admin could potentially escalate their privileges by using sudo , so exercise caution.
Note: Looker (Google Cloud core) instances don't contain the sudo permission.
manage_groups
see_users
Instance Wide CM
Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role.
manage_roles
manage_groups
Instance Wide CM
Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu. Users still cannot create, edit, or delete permission sets or model sets.
manage_user_attributes
see_users
Instance Wide CM
Users can create, edit, and delete user attributes on the User Attributes page in the Users section of the Admin menu.
see_schedules
None
Instance Wide CM
Users can see the Schedules and Schedule History pages from the Admin panel in Looker. This privilege does not give a user the ability to reassign, edit, or delete other users' schedules on the Schedules and Schedule History pages.
see_pdts
None
Connection Specific
Users can see the Persistent Derived Tables page in the Admin section of Looker and view information about PDTs from projects that use any connection associated with models for which they have data access .
This permission is included in the Developer default permission set for new Looker installations.
This permission is applied to connections to which users have data access, rather than across the entire Looker instance or to individual models or model sets.
see_datagroups
None
Model Specific
Users can see the Datagroups page in the Admin section of Looker. Users can see connection names, model names, and other information about datagroups defined in a model for which they have data access .
This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections.
update_datagroups
see_datagroups
Model Specific
Users can trigger a datagroup, or reset its cache, through the Datagroups page in the Admin section of Looker. Like users who have the see_datagroups permission, users who have the update_datagroups permission can see datagroups that are defined in projects that use a model for which they have data access .
This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections.
see_system_activity
None
Instance Wide CM
Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance.
see_admin
None
Instance Wide CM
Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages:
Support Access
Preview Features
Legacy Features
Export
Content Access
Actions (if the page displays only the enabled or disabled states of actions)
This permission doesn't provide access to System Activity pages.
mobile_app_access
None
Instance Wide NN
Users can sign in to your instance on a mobile device using the Looker mobile app . For users to be able to sign in to the Looker mobile app, the Mobile Application Access option in the General Settings page in the Admin section of Looker first must be enabled.
The mobile_app_access permission can be added to a new or existing permission set, and it is part of all of Looker's default permission sets .
manage_modelsets_restricted
None
Model Specific CM
Added 25.2
Users can modify model sets for which they have the manage_modelsets_restricted permission. A user can only add models contained in model sets for which the user also has the manage_modelsets_restricted permission.
NOTE : This permission interacts with model sets in a potentially unexpected way. If you assign the manage_modelsets_restricted permission to a user, and you've allowed that user to access any model that is a part of a project, they will be able to assign all models in that project to model sets that they have access to.
upload_data
None
Instance Wide NN
Added 25.20
Users can upload files to your instance to create self-service Explores .
gemini_in_looker
None
Model Specific
This permission is the only permission that is included in the Gemini default role .
This permission grants users the ability to perform the following tasks:
Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project
Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can_override_vis_config permission
Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access_data permission on the model that they are querying
chat_with_agent
gemini_in_looker
Model Specific
Added 25.18
Conversational Analytics users can chat with data agents that use one or more Looker Explores. The user must also have a role that contains this permission and the access_data permission on each model that underlies the Explores that are used by the data agent.
See Create and manage data agents for more information about data agent permissions.
chat_with_explore
chat_with_agent
Model Specific
Added 25.18
Conversational Analytics users can chat with a Looker Explore when they have the access_data permission on the model that underlies the Explore.
save_agents
chat_with_explore
Model Specific
Added 25.18
Conversational Analytics users can create, edit, delete, and share data agents . To edit, delete, or share a data agent that was created by another user, users must be granted a role that contains this permission on every model that is used by the agent.
See Create and manage data agents for more information about data agent permissions.
publish_agent_externally
save_agents
Model Specific
Added 26.6
Available in Preview , Conversational Analytics users can publish data agents to Gemini Enterprise.
See Create and manage data agents for more information about data agent permissions.
admin_agents
gemini_in_looker
Model Specific
Added 25.18
Conversational Analytics users can create, edit, share, and delete data agents . With this permission, a user doesn't need to be granted content access to the data agent to be able to edit, delete, or share a data agent that was created by another user.
Things to know about permission sets
The following permissions interact with model sets in a potentially unexpected way:
develop ; see_lookml — In Looker's IDE, a single project can contain multiple model files. If you assign the develop or see_lookml permissions to a user, and you've allowed that user to see any model that is a part of a project, they will be able to develop or see the LookML for all models in that project. However, they will still not be able to query models that you have not allowed.
manage_models — If you assign the manage_models permission to a user, the user will be able to access all models in all projects in the instance.
manage_modelsets_restricted — If you assign the manage_modelsets_restricted permission to a user, they can assign any model in a project to which they have access.
manage_project_connections — If you assign the manage_project_connections_restricted or manage_project_connections permissions to a user, the user will be able to see, edit, and create project-scoped connections for any projects that are included in the model set.
Model sets
A model set defines what data and LookML fields a user or group can see. Each set is a list of LookML models to which a user or group should have access. You can think of a model set as performing two functions:
A model set controls which models in your LookML the permissions apply to (if those permissions are model specific).
A model set limits what data and LookML fields a user can see, because each model is connected to a specific database connection and contains certain LookML fields.
Creating a model set
To create a model set:
Click the New Model Set button at the top of the Roles page.
Looker displays the New Model Set page. Enter a name for the new model set.
Select the model or models that should be included in the new model set.
Click the New Model Set button at the bottom of the page. The new model set will appear in the Model Sets section of the Roles page.
Models that are included in pending projects appear in the Models list on the New Model Set and Edit Model Set pages.
Deleting or renaming a model will not change any model sets that include that model. When a model is removed or renamed , we recommend that Looker admins also remove that model's name from any associated model sets, using the Edit Model Set page. Removing a deleted model's name from a model set prevents a new model with the same name from unintentionally being included in that model set.
To learn more about models, see the Model parameters documentation page.
Creating multiple models and model sets
The following example illustrates how you can use multiple model sets to limit access to data. Consider a scenario where you have two teams, Marketing and Support. In this example, these two teams should not have access to the entire model, so you would create a separate model for each team. To separate their data access, you would perform the following steps:
Copy the model into two new models.
In the first of the new models, include only the views, fields, and Explores that the Marketing team should have access to.
Create a model set for the Marketing team that includes only this new model.
Create a new role for the Marketing team that includes this new model set and the appropriate permissions for the Marketing team.
Assign this new role to the Marketing team group.
Repeat steps 2 through 5 to configure the second model for the Support team.
Editing a model set
After a model set has been created, perform the following steps to edit it:
On the Roles page, click the Edit button to the right of the model set you want to edit.
Looker displays the Edit Model Set page. Optionally, enter a new name for the model set in the Name field.
Add or remove any models from the model set in the Models section.
Click the Update Model Set button at the bottom of the page.
Models that are included in pending projects appear in the Models list on the New Model Set and Edit Model Set pages.
Deleting or renaming a model will not change any model sets that include that model. When a model is removed or renamed , we recommend that Looker admins also remove that model's name from any associated model sets, using the Edit Model Set page. Removing a deleted model's name from a model set prevents a new model with the same name from unintentionally being included in that model set.
Deleting a model set
To delete a model set, on the Roles page, click Delete to the right of the model set that you want to delete.
Creating and assigning custom roles
A custom role combines a default or custom permission set and a default or custom model set . Roles can only be created based on permission and model sets that already exist. If a permission set doesn't exist that represents everything that you want the user to be able to do or if a model set doesn't exist that contains all the models that you want the user to be able to do those actions on, you must create the permission set or model set, respectively.
Create a custom role that uses existing permission and model sets
To assign a custom role with an existing permission set and an existing model set, follow these steps:
Navigate to the Roles page in the Users section of the Admin panel.
Select New Role .
Enter a name for your new role. Often role names indicate something about what tasks the role allows the user to do.
Next to Permission Set , select the permission set that you want to use for this role. The set of permissions appears beside the selected permission set.
Next to Model Set , select the model set that you want to use for this role. The set of models appears beside the selected permission set. To apply the selected permission set to all models on the Looker instance, select All .
Optionally, under Groups or Users , select the groups or users that you want to assign the custom role to. You can also add users and groups to the role later by updating the role settings or you can assign the role later from the Users or Groups page in the Admin panel.
Click New Role to save this custom role.
Create a custom role that uses new permission and model sets
To create a custom role using new permission and model sets, first navigate to the Roles page in the Users section of the Admin panel.
To create a new permission set, follow these steps:
Select New Permission Set .
Provide a label for your new permission set in the Name field.
Select the permissions that you want and click New Permission Set .
To create a new model set, follow these steps:
From the Roles page, select New Model Set .
Enter a label for your new model set in the Name field.
Select the models that you want to apply your role to.
Select New Model Set .
To create the custom role using the new permission and model sets, follow these steps:
On the Roles page, select New Role .
Enter a name for your new role. Often role names indicate something about what tasks the role allows the user to do.
Provide a label for your new role in the Name field.
For Permission Set , select the permission set that you just created.
For Model Set , select the specific models that you would like to apply the gemini_in_looker permission to. You may need to create a model set that contains the appropriate models before you can assign a model set to your new custom role.
Optionally, under Groups or Users , select the groups or users that you want to assign the custom role to. You can also add users and groups to the role later by updating the role settings or you can assign the role later from the Users or Groups page in the Admin panel.
Click New Role to save this custom role.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
