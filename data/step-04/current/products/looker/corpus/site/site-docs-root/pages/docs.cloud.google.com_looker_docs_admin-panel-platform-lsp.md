---
title: "Admin settings - Looker Studio Pro \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp
  title: "Admin settings - Looker Studio Pro \_|\_ Google Cloud Documentation"
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
Admin settings - Looker Studio Pro
Stay organized with collections
Save and categorize content based on your preferences.
Note: Complimentary Looker Studio Pro licenses are also available for Looker (Google Cloud core) instances. See the Accept complimentary Looker Studio Pro licenses for a Looker (Google Cloud core) instance documentation page.
Looker Studio Pro licenses are available at no cost to Looker users as part of a Looker Studio Pro subscription. To get started using Looker Studio Pro, you need to set up a Looker Studio Pro subscription, accept your Looker account's complimentary licenses, and assign the licenses to Looker users.
The number of complimentary Looker Studio Pro licenses that are allocated to your Looker account is determined by the number of Looker licenses that are included in your Looker agreement. For more information about the terms of this offer, see the Complimentary Looker Studio Pro licenses offer details documentation page.
This page describes how to perform the following tasks for a Looker instance:
Accept the complimentary Looker Studio Pro licenses that have been allocated to your Looker instance
Specify the Google Cloud project that hosts your Looker Studio Pro content
Add Looker users to your Looker Studio Pro subscription
Before you begin
Important: A Looker account is associated with a Looker Studio Pro subscription through the Google Cloud project that hosts Looker Studio Pro content. We recommend that you devote a specific Google Cloud project to hosting just Looker Studio Pro content and that you indicate this project when you are accepting your complimentary licenses.
If you don't already have a Looker Studio Pro subscription, we recommend that you set up the Google Cloud project for your Looker Studio content before you accept your account's allotted complimentary licenses. For more information about Google Cloud project requirements and setting a new Looker Studio Pro subscription, see the Start a new Pro subscription documentation page.
Complimentary Looker Studio Pro licenses are available for Looker instances that fulfill the following requirements:
The instance is hosted by Looker.
If hosted in the Google Cloud, the instance must be running Looker 22.16 or later.
If hosted by a cloud provider other than Google Cloud, the instance must be running Looker 23.4 or later.
Each Looker user who will use Looker Studio must also be a Google Workspace or Cloud Identity user with a Managed Google account .
A Looker account, as defined in your Looker agreement, can be associated with only one Looker Studio Pro subscription.
Required roles
To get the permission that you need to accept complimentary Looker Studio Pro licenses , ask your Looker admin to grant you the Admin Looker role.
To get the permission that you need to set up a self-service subscription to Looker Studio Pro , ask your IAM administrator to grant you a role containing the lookerstudio.pro.manage permission for the Google Cloud project that hosts your Looker Studio Pro content. The Owner ( roles/owner ) Identity and Access Management role and the Looker Studio Pro Manager ( roles/lookerstudio.proManager ) contain this permission by default, but you may be able to get this permission with custom roles or other predefined roles .
For more information about granting Identity and Access Management roles, see Manage access .
Accept Looker Studio Pro licenses
To accept your complimentary Looker Studio Pro licenses, follow these steps:
In the Admin panel of your Looker instance, navigate to the Platform section and select the Looker Studio Pro page. If your Looker account uses multiple instances, you can accept your complimentary licenses in any instance.
Enable the Accept Looker Studio Pro licenses setting.
Select a Google Cloud project
After you have accepted the complimentary Looker Studio Pro licenses, you must associate your Looker instance with the Google Cloud project that your Looker Studio Pro subscription uses. To specify your Looker Studio Pro Google Cloud project, follow these steps:
In the Admin panel of your Looker instance, navigate to the Platform section and select the Looker Studio Pro page.
In the Google Cloud Project Number field, enter the project number for the Google Cloud project that hosts your Looker Studio Pro content. Note that the project number is distinct from the project ID.
Click Save .
Warning: Once you have saved your project, note the following effects:
If you disable the Accept Looker Studio Pro licenses setting, your complimentary Looker Studio Pro licenses become paid licenses, subject to Looker Studio Pro pricing . This conversion typically happens within 24 hours. If you no longer want to use your complimentary licenses, we recommend that you cancel the associated Looker Studio Pro subscription. To learn more about what happens when you cancel a Looker Studio subscription, see Effects of canceling a Looker Studio subscription .
Just changing the project number won't transfer your complimentary licenses to another project. Instead, you must transfer your licenses in your Looker Studio Pro subscription settings .
Add users to your Looker Studio Pro subscription
To finish setting up your new Looker Studio Pro subscription, add users to your subscription and assign their licenses. You can complete these steps in either the Google Cloud console or Looker Studio, per your preference. If you had already completed the setup for your Looker Studio Pro subscription before you accepted your complimentary licenses, your licenses have been applied automatically to your existing Looker Studio Pro users.
Console
To finish setting up your new Looker Studio Pro subscription in the Google Cloud console, follow these steps starting on the Looker Studio Pro page or tab for your Looker instance:
Click Add users , which opens the Looker Studio Pro homepage within the Google Cloud console.
Click Subscribe to open the Buy Looker Studio Pro licenses panel:
The Current no-cost Pro licenses line item displays the number of complimentary Looker Studio Pro licenses that have been allocated to your Looker (Google Cloud core) instance.
In the Add users / groups field, add the email addresses of users or groups to your subscription.
The Total licenses field displays the total number of licenses that are required to support the number of users that you have added.
Select Auto-assign licenses to new users added to a group to assign available licenses to users who are added to Google Groups under the Looker Studio subscription.
Click Buy .
Note: If the number of users that you have added exceeds the number of complimentary Looker Studio Pro licenses that are allocated to your Looker instance, the Total monthly cost line item displays the cost of the additional licenses that you are purchasing.
Looker Studio
To finish setting up your new Looker Studio Pro subscription in Looker Studio, follow these steps from the Looker Studio Pro page or tab for your Looker instance:
Click add users in Looker Studio Pro .
Add users to your subscription by following the steps described on the Add people to the subscription documentation page.
Remove licenses or users
Each Looker Studio Pro user requires a Looker Studio Pro license. If you need to decrease the number of licenses that are used with your Looker Studio Pro subscription, you will also need to remove the corresponding number of users.
To remove licenses and users from your Looker Studio Pro subscription in the Google Cloud console, follow these steps:
In the Google Cloud project that hosts your Looker Studio Pro subscription content, navigate to the Looker Studio page.
Select Manage access .
Select the user or group that you want to remove from the subscription.
Select delete Delete . In the resulting dialog, select Delete again.
Close the Manage access window.
Select Add / remove licenses .
Next to the Total licenses field, select remove Decrement license count to decrease the number of licenses under the Looker Studio Pro subscription.
Select Confirm .
For more information, see Remove users from a Pro subscription .
Transfer complimentary Looker Studio Pro licenses to a different subscription
After you have saved the project that you selected for your Looker Studio Pro licenses in your Looker instance, we strongly recommend that you don't modify the project selection. Your complimentary licenses must be associated with the same Google Cloud project as your Looker Studio Pro subscription. If you need to transfer your licenses from one Looker Studio Pro subscription to another, follow these steps:
Set up a new Looker Studio Pro subscription based on a different project.
Add users to your new subscription .
Transfer ownership for any "ownerless" content that resides in team workspaces that are associated with the old subscription.
Cancel the old subscription .
Next, to associate your complimentary Looker Studio Pro licenses with the new Looker Studio Pro subscription, follow these steps:
In the Admin panel of your Looker instance, navigate to the Platform section and select the Looker Studio Pro page.
In the Google Cloud Project Number field, enter the project number for the new Google Cloud project. Note that the project number is distinct from the project ID.
Click Save .
Important: The complimentary licenses will be applied automatically to the users in the new Looker Studio Pro subscription. If there are fewer users in the new subscription than in the old subscription, there will be some unused complimentary licenses still attached to the old Looker Studio Pro subscription. These unused licenses will be converted to paid licenses, subject to Looker Studio Pro pricing . To avoid being charged for these licenses, you must cancel the old subscription.
Effects of canceling a Looker Studio Pro subscription
If the Looker Studio Pro subscription is canceled, Looker will no longer recognize the subscription. Although the Google Cloud console will continue to reflect that the Looker instance and the Looker Studio Pro subscription are linked, you will no longer be billed for Looker Studio Pro usage on the Google Cloud project. Your Looker instance's Looker Studio Pro licenses are still available if you reinstate your subscription (within the 30-day grace period ) or if you initiate a new subscription. The no-cost version of Looker Studio is also available for use.
For more information about the effects of canceling a Looker Studio Pro subscription or deleting a Google Cloud project that is associated with a canceled subscription, see Cancel a Looker Studio Pro subscription .
Troubleshooting complimentary licenses
Errors may occur when you accept complimentary Looker Studio Pro licenses or add users to a Looker Studio Pro subscription. See the following table for steps on how to troubleshoot errors that are related to accepting licenses.
Error message
Steps to resolve
Example
You have reached your license limit. To add more users, either delete some existing users/groups or purchase additional licenses.
In Looker Studio, select Pro subscriptions from the left navigation to open the list of Looker Studio Pro subscriptions.
Looker Studio displays the number of complimentary licenses that are available for the Google Cloud project that hosts your Looker (Google Cloud core) instance. For that project, under Actions , select Manage subscription .
Navigate to the Review and confirm Looker Studio Pro licenses step, and review the number of licenses in the Number of licenses to buy field.
Enter the total number of licenses that you want to use, including the number of complimentary licenses that are available for the subscription.
If there are 10 complimentary licenses available, add 10 users to your subscription to use all licenses. If you add 11 users, you will be charged for 1 additional license. If you increase the Number of licenses to buy field to 11, you will be charged for 1 additional license, which you can assign at a later date.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
