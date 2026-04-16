---
title: "Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-users-users
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-users-users
  title: "Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Admin settings - Users
Stay organized with collections
Save and categorize content based on your preferences.
Note: The Users page functions slightly differently in Looker (Google Cloud core) . See the Looker (Google Cloud core) documentation for details on using the Users page with Looker (Google Cloud core).
The Users page in the Users section of the Admin panel lists all user accounts on your Looker instance.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
Viewing and searching users
The Users page shows the following information:
Tabs group your users by type:
The Standard Users tab shows users who sign in to Looker directly, through either the regular authentication process or through the Looker API.
The Embed Users tab shows signed embed users who are authenticated through a third-party application.
The Service Accounts tab shows API-only service accounts that are authenticated through the Looker API using API keys.
The Looker Support tab shows Looker Support analysts who were granted access to your Looker instance.
The Filter List field limits which users are shown. You can filter on user ID, name, or email address. To filter on user ID, enter a user ID to display that user. For name and email address, when you enter any string, the list of users displayed shows all users whose name or email address contains the string entered in the filter field. The Filter List replaces the search function on the previous version of the Users page.
Clicking the User column heading sorts the table by username in ascending or descending order.
Each row lists the user's name, ID, and email address, and it includes an icon that indicates the type of access the user has. Hold your cursor over the icon to see what the icon represents.
Click the row to edit the user. Users who cannot be edited are indicated by a lock on the user icon. These users are either system created (such as members of the All Users group) or externally managed by the LDAP , SAML , or OpenID Connect protocol.
The Active Credential column lists the types of access that the user has to your Looker instance. This column appears only on the Standard Users tab.
The Groups column lists all groups to which the user belongs.
The Roles column lists all roles that are assigned to the user.
You click the Add button to create new users and service accounts .
You click the three-dot Options menu to disable the user , sudo as the user , delete the user , or migrate a user account to a service account .
Adding standard users
To add a standard user, complete the following steps:
Click the Add button to reveal a drop-down menu.
Click the Users menu item to open the Add new users page.
In the Add a new user page, type or paste a comma-separated list of email addresses in the Email Addresses field.
In the Groups field, select the groups that will be assigned to the users. To view the list of groups, start typing into the Groups field; all group names that include that text appear.
In the Roles field, select the roles that will be assigned to the users.
Click the Save button to create the users and, if you've selected the Send setup emails checkbox, to send sign-up emails.
Note: When an administrator creates an account to use the Platform on a user's behalf, additional information about the user's use is created, which may collect and use the following information:
License credentials to ensure that usage is in compliance with the customer's licensing terms. This information includes metadata about users, roles, database connections, server settings, features used, API usage, and Platform version. Information contained in your organization's Looker database used with the Platform, to which Looker have access when we automatically back it up and encrypt it for you.
Device information, which may include the hardware model, operating system and version, unique device identifiers, network information, IP address, and/or Platform version.
Logins that use external directory or single sign-on services share with us certain information to authenticate your identity and pre-populate certain forms (e.g. user registration) on the Platform. Note that even if a user subsequently stops using the services, we will retain the information they have shared with us.
Creating an API-only service account
You can create API-only accounts (often called service accounts ) from the Users page within a Looker instance. These accounts can be granted the Admin Looker role and Looker API credentials. However, these accounts can't log in to Looker through the UI.
Service accounts use licenses according to the roles that they have. If a service account is granted multiple roles, it consumes one license from the highest tier available among those roles. For example, if a service account has both Viewer and Developer permissions, it uses a Developer license.
To add a service account, follow these steps:
Click the Add button to reveal a drop-down menu.
Click the Service Account menu item to open the Add a new Service Account page.
In the Service Account Name field, enter a name for the service account.
The Create default set of API credentials switch is enabled by default. If you don't want API credentials created for the account, click the switch to disable this option.
Select the Groups and Roles to assign to the service account.
Click the Save button.
You can view and edit existing service accounts in the Service Accounts tab on the Users page. To edit a service account, click the service account row to display the Edit User page. From the Edit User page you can do the following:
Enable or disable the service account
Edit the service account name
Manage the service account API keys
Assign different groups and Roles
Edit the user attributes that are associated with the service account
Migrating user accounts to service accounts
Important: Starting with the Looker 26.8 release, the following changes will occur:
Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
Looker (original) admins will be able to manage which users have access to individually owned API credentials.
Looker (original) users with access to API credentials will be able to access and manage their own API credentials.
Before your Looker instance is upgraded to the Looker 26.8 release, your admin must follow the steps in this section. This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
For more information, see the Discontinuing the admin capability to create, view, and manage API credentials for a standard user deprecation notice.
In Looker (original) instances, certain standard user accounts can be migrated to API-only service accounts . To be eligible to migrate, the standard user account must meet all of the following criteria:
The account isn't using an identity provider, such as Google, SAML, or OpenID Connect, as their method of authentication into Looker.
The account doesn't have a password set up for their email credentials.
The user hasn't logged in to the Looker instance in the last seven days, or, if the account was created fewer than seven days ago, the user hasn't logged in since the account was created.
Looker flags standard users that meet these criteria in the User column of the Standard Users tab on the Users page. Additionally, a banner appears at the top of the Users page to indicate that some standard users are potential service accounts.
If a standard user account meets the criteria for migration, the following two options are available to migrate a standard account to a service account:
A Migrate option appears in the three-dot Options menu within the eligible user account's row. Select that menu item and a Migrate user dialog opens. Click Migrate to migrate the user. Click Cancel to exit the dialog without migrating.
Click the eligible user account's row to reach the Edit User page . At the bottom of the Edit User page, click the Migrate button. In the dialog that appears, click OK to confirm the migration or click Cancel to exit the dialog without migrating.
If a user account doesn't meet the criteria for migration, the migration options don't show for that user.
Migrating a user account to a service account doesn't create API credentials, but API credentials that are associated with the user account will be migrated to the service account.
Caution: Migrating a user cannot be undone. If you want to undo a migration, you must delete the service account and add the user again as a standard user to the Looker instance.
Editing users
To edit a user, click the user's row. On the Edit User page, adjust the following settings as needed.
Account
Enable or disable a user's account. Consider disabling the user account instead of deleting it. This field appears only for standard users and service accounts.
First Name
Add or edit the user's first name, if applicable. This field doesn't require a value, but it can be useful for organizational purposes. This field appears only for standard users and embed users.
Last Name
Add or edit the user's last name, if applicable. This field doesn't require a value, but it can be useful for organizational purposes. This field appears only for standard users and embed users.
Service Account Name
Edit the service account name. This field appears only for service accounts.
Email
Add or edit the user's email address. When the user logs in to Looker, the email address serves as their username. This field appears only for standard users.
Warning: Editing a user's email address logs out that user and sends an email verification link to the user's new email address. Looker prevents the user from logging in again until they click the email verification link.
Locale
The Locale field sets the user-interface language and model locale for a user. This field appears only for standard users.
If you want the user to view certain user interface (UI) text in a specific language, Looker supports the UI translations that are shown in the following table. Enter the code in the Locale field.
If you want the user to view a localized version of one or more data models, enter the title of the model's strings file for that locale in the Locale field.
If you want the user to view both model localization and Looker's built-in UI translations, the model's strings file should have the same name as the appropriate locale code in the following table; and that code should be entered in the Locale field.
To confirm the Locale setting, click Save at the bottom of the page.
Language
Locale Code and Strings Filename
English
en
Czech
cs_CZ
German
de_DE
Spanish (Spain)
es_ES
Finnish
fi_FI
French (Canada)
fr_CA
French (France)
fr_FR
Hindi
hi_IN
Italian
it_IT
Japanese
ja_JP
Korean
ko_KR
Lithuanian
lt_LT
Norwegian (Bokmål)
nb_NO
Dutch
nl_NL
Polish
pl_PL
Brazilian Portuguese
pt_BR
Portuguese
pt_PT
Russian
ru_RU
Swedish
sv_SE
Thai
th_TH
Turkish
tr_TR
Ukrainian
uk_UA
Simplified Chinese
zh_CN
Traditional Chinese
zh_TW
For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
Setting a custom locale
Looker developers can create custom locales to use for model localization only. Custom locale codes are designated by the titles of the string files that are created in the model localization process. To apply that custom locale to users, perform these steps:
Enter the custom locale code in the Locale field. As you begin typing in the field, any pre-existing text disappears.
Click Create "your_custom_locale_code" .
Click Save at the bottom of the page. The code will be added to the user's locale drop-down menu.
The Looker UI doesn't support custom locales. If you use a custom locale in a user's Locale field, that user's UI defaults to the language that is set in the instance locale .
Number format
Looker's default number format setting for numbers that appear in data tables and visualizations is 1,234.56 . However, the number format can be set to any of the following:
1,234.56 : Thousands separated with commas; decimals separated with a period
1.234,56 : Thousands separated with periods; decimals separated with a comma
1 234,56 : Thousands separated with spaces; decimals separated with a comma
For more information and examples of using the Number format setting, see the Localizing number formatting documentation page.
This field appears only for standard users.
Timezone
If you've enabled User Specific Time Zones on your Looker instance, you can select the time zone that will be used when this user runs a query in Looker.
Send setup link / Send reset link
If the user has never logged in, this button is labeled Send setup link . If the user has logged in previously, this button is labeled Send reset link . If you need to set or reset a password, you can click this button to send a link to the user's email address that you previously specified. See the Password requirements documentation page to learn about specifying password complexity requirements in Looker. If the user doesn't reset their password within one hour, the password's reset link will expire.
This field appears only for standard users.
Two-Factor Secret
This option appears if you have enabled two-factor authentication (2FA) on your instance. Click the Reset button to reset 2FA for the user. This causes Looker to prompt the user to rescan a QR code with the Google Authenticator app the next time they attempt to sign in to the Looker instance.
This field appears only for standard users.
API Keys
Important: Starting with the Looker 26.8 release, the following changes will occur:
Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
Looker (original) admins will be able to manage which users have access to individually owned API credentials.
Looker (original) users with access to API credentials will be able to access and manage their own API credentials.
Before your Looker instance is upgraded to the Looker 26.8 release, your admin must follow the steps in the Migrating users to service accounts section. This is to ensure admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
For more information, see the Discontinuing the admin capability to create, view, and manage API credentials for a standard user deprecation notice.
An API key is used to access the Looker API . API keys are created in Looker and consist of a client ID and a client secret. Looker requires an API key to execute commands with the Looker API.
This field appears only for standard users and service accounts.
On a Looker (original) instance, Looker admins manage users' API keys.
To generate API keys, in the API Keys section of the Admin > Users > Edit User page, click the Edit Keys button. The Edit User API keys page opens and shows the existing API keys. Click the New API key button to generate a new key.
On a Looker (Google Cloud core) instance, Looker admins enable individual users to manage their own API keys.
To enable a user to manage their API keys, in the API Keys section of the Admin > Users > Edit User page, use the API Keys field to enable or disable the ability for the user to create, view, and delete API keys for their user account.
Once you have enabled a user to manage their API keys, they can do that from their Account page . You can also click the View API Keys button to open the user's API Keys page, where you can view their API keys.
Note: Starting in Looker 25.18, Looker admins can no longer manage users' API keys on a Looker (Google Cloud core) instance. Therefore, we recommend any Looker (Google Cloud core) users who have API keys that were created prior to Looker 25.18 delete those existing API keys and create new API keys. New API keys add extra security since they are available only to the assigned user account.
Looker admins manage the API keys for API-only service accounts .
To generate API keys for an API-only service account, in the API Keys section of the Admin > Users > Edit User page, click the Manage button. The API Keys page opens and shows any existing API keys. Click the Create New API Key button to generate a new key.
The API keys have the same permissions as the user account or service account from which they were created.
It is best practice to create dedicated service accounts for API scripts — one service account for each script. That way, you can configure a service account with the specific set of permissions that allows the script to perform its function and only its function. For example, for an API script that runs queries, you can create a service account with the access_data permission, but no other permissions.
Dedicated service accounts for API scripts let you increase security by compartmentalizing a script's access. Also, if you ever need to stop a script, you can disable (or delete ) that script's service account. Be sure to read the Removing user access section on this page before you delete any user account.
Groups
Lists the groups the user is a member of. You can add the user to a new group by selecting the group from the drop-down, or remove the user from a group by clicking the X next to the group name in the list.
Users can also be added to groups on the Groups page in the Admin panel.
Roles
Lists the roles assigned to the user. You can add a new role to the user by selecting the role from the drop-down, or remove a role from the user by clicking the X next to the role name in the list.
Roles can also be added on the Roles admin page .
User attributes
Sets and unsets the values of a user's user attributes . Values that are assigned to an individual user always override any values that are assigned as a result of membership in a group. System settings aren't editable.
Removing user access
To remove a user account's or service account's access to Looker, you can either disable or delete the account. For most situations, the best practice is to disable the account.
Differences between disabling and deleting an account are described in the following table:
Description
Disabled
Deleted
The user can sign in to the Looker instance
No
No
The user's personal folder
Still exists
Deleted
Looks and dashboards in the user's personal folder
Still exist
Moved to the Trash folder
Looks and dashboards the user saved to a Shared folder
Still exist in the Shared folder
Still exist in the Shared folder
Schedules created by the user
Schedules are disabled
Schedules are deleted
Schedules based on the user's content, but created by another user
Schedules continue to run
User's content is deleted; schedules based on that content are deleted
Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts
Schedules will continue to run and deliver normally (user will be treated as an external user)
Schedules continue to run and deliver normally (user will be treated as an external user)
Schedules that have Run schedule as recipient enabled and list the user as a recipient
Schedules will continue to run but will fail to deliver to the disabled user upon next run
Schedules continue to run but will fail to deliver to all users with error run_as_recipient was specified on ScheduledPlan but recipient is not a Looker user
Boards created by the user
Still exist
Still exist
Alerts created by the user
Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin. Admins can edit or self-assign the alert from the Alerts management admin page in the Admin panel.
Alerts are deleted immediately from dashboards and from the Alerts management admin page in the Admin panel.
Historical usage information for the user
Kept
Most are deleted
Disabling users
To prevent a user account's or a service account's access to Looker, it is typically best practice to disable the account. When you disable an account, the account's usage history and personal content is retained. For details about the differences between disabling and deleting accounts, see the table in the Removing user access section on this page.
If you are using a Looker (Google Cloud core) instance , disabling a user won't affect that user's IAM permissions . Remove Looker IAM permissions to ensure a user can't access the instance.
To disable an account, you can select Disable from the three-dot Options menu to the right of the user's row.
Deleting users
Caution: Deleting a user is irreversible. Consider your organization's compliance and security needs before doing so.
Instead of deleting a user, consider disabling the user account instead. This prevents a user from being able to sign in, but their information, content, and history remain intact. For details about the differences between disabling and deleting users, see the table in the Removing user access section on this page.
If you are using a Looker (Google Cloud core) instance , deleting a user won't affect that user's IAM permissions . Remove Looker IAM permissions to ensure a user can't access the instance.
To delete an account, you can perform either of the following actions:
From the three-dot Options menu to the right of the account's row, select Delete .
On the account's Edit User page, click the Delete button.
Deleting users from a Looker account that is associated with a Looker Studio Pro subscription reduces the number of complimentary Looker Studio Pro licenses that are allocated to the account. If the number of complimentary Pro licenses that are allocated to your account becomes less than the number of licenses that are in use, the difference will be converted within 24 hours to paid licenses, subject to Looker Studio Pro pricing .
Impersonating (sudoing) users
Sudoing lets you navigate Looker as if you were a different user, with all of their privileges and abilities.
Sudoing is also a useful way to validate that you've properly configured permissions and other features or to view a user's LookML development before they've committed and pushed changes.
The see_users and sudo permissions are both required to sudo as another user. Admins can sudo as any other user, including other admins. Non-admin users can only sudo as other non-admin users.
To sudo as a user, select Sudo as this user from the three-dot Options menu to the right of the user's row:
A bar at the top of the screen warns you that you're in a sudoed state. That lets you exit the sudoed state. Any changes made in this state will impact the user that you're emulating.
If you are in Development Mode , your changes are not visible to other users until you deploy your changes to production . If you haven't deployed your changes for other users to see, you won't see your changes when you sudo as a different user.
Sudoing as a signed embed user and interacting with a Looker instance directly and not through an embedded iframe can cause unexpected results. In addition to any restrictions from their regular permissions, signed embed users are restricted by the embedded iframe. However, those restrictions may not be present when someone is sudoing as a signed embed user and interacts outside of an iframe.
For database connections that use OAuth, such as Snowflake and Google BigQuery , an admin who is sudoing as another user will use the sudoed user's OAuth access token when they run queries. For Snowflake connections, if the user's access token is expired, the admin cannot create a new token on behalf of the sudoed user; the user must sign in to Snowflake and reauthorize Looker.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
