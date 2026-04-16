---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.414Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "SFTP content delivery algorithms"
feature_slug: "sftp-content-delivery-algorithms"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails"
keywords:
  - "sftp"
  - "content"
  - "delivery"
  - "algorithms"
  - "now"
  - "supports"
  - "additional"
  - "key"
---

# SFTP content delivery algorithms

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

SFTP content delivery now supports additional key exchange and host key algorithms.

## Extended Definition

SFTP content delivery now supports additional key exchange and host key algorithms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Looker recommends that you also add the following: A README to explain the purpose and means of authentication for your action A PNG icon to display in the Looker Action Hub (or private action hub on your Looker instance) and in the Looker data delivery windows Any files for tests you want to run on your action code — this is different from testing your action Writing an action A design requirement for the Looker Action Hub server is that it remain completely stateless, so storing any information in the action application or service is not allowed.
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- Parameter Required Description Data Type tag No If present, matches a field that has this tag. string any tag No If present, supersedes tag and matches a field that has any of the provided tags. string all tags No If present, supersedes tag and matches a field that has all the provided tags. string Supported data formats The DataActionRequest class defines what data delivery format is available for the action to work with.
- Define a valid value for the user attribute for the users or user groups that need to deliver content to your action destination. (These users must also have send to integration permissions.) The params parameter represents the form fields that a Looker admin must configure on the action's enablement page from the Actions list in the Admin panel.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- LookML dashboard user access data , clear cache refresh , mobile app access , see lookml dashboards User access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see sql , see user dashboards , send to integration , schedule without limit User who can't view LookML access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see lookml dashboards , see looks , see user dashboards , send to integration , schedule without limit Viewer access data , clear cache refresh , download without limit , mobile app access , schedule look emails , see drill overlay , see lookml dashboards , see looks , see user dashboards , schedule without limit You'll see these permission sets appear as options when you create a new role.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.

### Admin settings - Scheduled Emails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-scheduled-emails)
- Source ID: `site-docs-reference-required-4`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Send Links and Data With the Send Links and Data option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, elect a format for the data, define the delivery's trigger or frequency, and specify additional advanced scheduling options, including selecting whether to include links back to Looker content in the body of the email.
- Send Data Only With the Send Data Only option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, elect a format for the data, define the delivery's trigger or frequency, and specify additional advanced scheduling options.
- Send Link Only With the Send Link Only option selected, when you are setting up deliveries of Looks and dashboards to email, the Scheduler will contain fields to name your delivery, list email recipients, define the delivery's trigger or frequency, and specify additional advanced scheduling options.
- Old Emailed Data Policy What Gets Delivered New Emailed Data Policy What Gets Delivered Send Link Only Link back to Looker content Send Data Only Existing Schedules : An embedded data visualization or file attachment replaces the link New Deliveries : Embedded data or a file attachment Send Link Only Link back to Looker content Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Data Only Embedded data or a file attachment Send Link Only Existing Schedules : Link back to Looker content replaces embedded; no file is attached New Deliveries : Link back to Looker content Send Data Only Embedded data or a file attachment Send Links and Data Existing Schedules : Embedded data or a file attachment and option to include links automatically selected New Deliveries : Embedded data or a file attachment and option to include links automatically selected Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Link Only Existing Schedules : Link back to Looker content New Deliveries : Link back to Looker content Send Links and Data Embedded data or a file attachment and option to include links back to Looker content Send Data Only Existing Schedules : Embedded data or a file attachment New Deliveries : Embedded data or a file attachment Switching deliveries to Send Link Only If you are switching to the Send Link Only option, all new one-time and scheduled email deliveries will be sent containing only links back to Looker and the title of the Looker content, rather than embedded or attached Looker content.

