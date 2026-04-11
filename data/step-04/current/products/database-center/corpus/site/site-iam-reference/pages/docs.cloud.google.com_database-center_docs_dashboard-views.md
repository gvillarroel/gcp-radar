---
title: "Create customized dashboard views \_|\_ Database Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/database-center/docs/dashboard-views
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/set-up-database-center
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/dashboard-views
  title: "Create customized dashboard views \_|\_ Database Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Create customized dashboard views
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Create customized dashboard view
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Database Center lets you create a customized dashboard view that shows
only the health issues in your database fleet that you want to see. A dashboard
view can be for only you, or it can be shared with colleagues who have access to
your Google Cloud project. If you don't want to create a permanent customized
dashboard view, you can create a temporary custom URL to share with anyone in
your organization.
Before you begin
Ensure that Database Center is set up for your organization .
Grant the IAM role that's required to create, update, or
delete a saved dashboard.
Go to the IAM & Admin page.
Go to IAM & Admin
In the Principal column, find a
principal for which you
want to give access to Gemini Cloud Assist, and then click
edit Edit principal in that row.
In the Edit access pane, click
add Add another role .
In Select a role , select Database center admin .
Click Save
Create a dashboard view
You can create a customized dashboard view for yourself or for your
Google Cloud project. A dashboard view created for only yourself can't be viewed by
anyone else. A dashboard view created for a Google Cloud project can be viewed by
anyone with permission to view the Google Cloud project. To create a dashboard view,
do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Customize your filtering and health issue settings. For more
information, see
Customize your database fleet view
and
Filter your database resource view .
Click Save changes near the top of the Google Cloud console.
Click Create new view .
Type a name for your dashboard in Dashboard view name . You can change
the dashboard name.
(Optional) Type an ID. The default ID is the name you typed in for your
dashboard. The ID can't be changed.
Choose whether you want the dashboard to be available to only you or if you
want it shared with anyone who can access your Google Cloud project.
Click Save .
Update a dashboard view
To update an existing dashboard view, do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Do one of the following to choose the dashboard view you want to
update:
Choose a dashboard view from the View drop-down menu.
Click Dashboard views , then click a dashboard view. The selected
dashboard view grays out.
Update your dashboard view by changing its filtering and health issue
settings. For more information, see
Customize your database fleet view
and
Filter your database resource view .
Click Save changes .
Click Save changes to current view .
Optional: To change the name of the view, type a new name in
Dashboard view name .
Optional: Update the visibility of the view.
Click Save .
Choose a dashboard view
To choose a dashboard view, do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Do one of the following:
Click View drop-down menu to see the customized dashboards.
Click Dashboard views to see the customized dashboards.
Click a dashboard view to choose it. The dashboard view appears when you
click the Overview tab. The ID of the dashboard view appears next to
View near the top of the Google Cloud console.
Favorite a dashboard view
Dashboard views that you favorite appear at the top of the list of
dashboard views when you click the View drop-down. To favorite a
dashboard view, do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Click Dashboard views .
Locate the dashboard view you want to favorite, then click the
star_outline Favorite in its row.
Delete a dashboard view
To delete a dashboard view, do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Click Dashboard views .
Locate the dashboard view you want to delete.
Click more_vert Actions in its
row.
Click Delete , type the name of the dashboard view, then click
Confirm .
Share a temporary dashboard view
You can share a temporary dashboard view using a URL. Dashboard views shared
using a URL are not saved for future use. If you want a permanent dashboard view
that can be updated and that anyone in your Google Cloud project can see, then
create a dashboard view . To share a
temporary dashboard view, do the following:
In the Google Cloud console, go to the Database Center page.
Database Center
Customize your filtering and health issue settings. For more
information, see
Customize your database fleet view
and
Filter your database resource view .
Click Copy link . Your filtering and health customization settings
are saved to the copied link.
Share the link with colleagues in your organization.
What's next
Learn how to analyze your database inventory .
Learn about best practices for managing database fleet health .
Learn how to filter resources and export fleet inventory information .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
