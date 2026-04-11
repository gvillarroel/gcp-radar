---
title: "Quickstart: View service health events in the Google Cloud console \_|\_ Personalized\
  \ Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/view-events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/view-events
  title: "Quickstart: View service health events in the Google Cloud console \_|\_\
    \ Personalized Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Guides
Send feedback
Quickstart: View service health events in the Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
This document discusses how to use the Service Health dashboard to view
active and past service health events.
You can access your Google Cloud project's service health events by opening the
Service Health dashboard in the Google Cloud console. Only events within the
selected project scope will appear.
Before you begin
Enable the Service Health API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Verify that billing is enabled for your Google Cloud project .
If you're using an existing project for this guide, verify that you have the
permissions required to complete this guide . If you created
a new project, then you already have the required permissions.
Required roles
To get the permissions that
you need to access the Service Health dashboard,
ask your administrator to grant you the
Personalized Service Health Viewer ( roles/servicehealth.viewer )
IAM role on the project that you want to view events for.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Find the Service Health dashboard in the Google Cloud console
To access the
Service Health dashboard:
Go to the Google Cloud console .
Select a Google Cloud project.
Select the navigation menu at the top left corner of the page.
Go to Tools , and select Service Health .
If you see an error message that says "You do not have sufficient
permissions to view this page", set permissions to access the
Service Health dashboard .
Find the Service Health dashboard on a mobile device
To view Google Cloud incidents on your mobile device:
Install the Google Cloud mobile application from
https://cloud.google.com/app .
Open the Google Cloud mobile application. The Dashboard tab
appears.
Select the Operations tab.
Select Personalized Service Health .
View Google Cloud incidents
Note: If Personalized Service Health itself is experiencing an issue, navigate
to Google Cloud Service Health for status
and updates.
The Service Health dashboard lets you view active and closed
Google Cloud incidents relevant to the selected Google Cloud
project. A list of Google Cloud incidents related to your project appears.
The incident list fields are:
Event State : Indicates the overall state of the event. It can be one of
the following:
Active : Event is actively affecting Google Cloud and will
continue to receive updates.
Closed : Event is no longer affecting any Google Cloud product,
or has been merged with another event.
The event also has a detailed state enclosed in parentheses. It can
be one of the following:
Emerging : Google engineers are actively investigating the event to
determine the impact.
Confirmed : The incident is confirmed as affecting at least one
Google Cloud product. Ongoing status updates will be provided
until it is resolved.
Merged : The incident was merged into a parent incident. All further
updates will be published to the parent only.
Resolved : The incident is no longer affecting any Google Cloud
product after action was taken. There will be no further updates.
False positive : Upon investigation, Google engineers concluded that
the incident is not affecting a Google Cloud product. This state can
change if the incident is reviewed again.
Auto-closed : The incident was automatically closed because of
the following reasons:
The impact of the incident could not be confirmed.
The incident was intermittent or resolved itself.
The incident does not have a resolution because no action or
investigation happened. If it is intermittent, the incident may reopen.
Title : Brief description of the incident.
Relevance : Describes how an incident impacts your project. The relevance
may change as the incident progresses.
Impacted : The incident is verified to be impacting your project.
Available for some Google Cloud products only, including
Compute Engine and Persistent Disk.
Related : The incident has a direct connection with your project and
impacts a Google Cloud product in a location your project uses.
Partially Related : The incident is associated with a
Google Cloud product your project uses, but the incident may not
be impacting your project. For example, the incident may be impacting a
Google Cloud product that your project uses, but in a location
that your project does not use.
Not Impacted : The incident is not impacting your project.
Unknown : The impact to your project is not known at this point.
Note: Google may determine that an earlier reported incident did not
impact your project, or did not have customer impact to any projects.
Personalized Service Health will inform you by setting the relevance of
the incident as Not Impacted . You may also see an update published
from Google Cloud Support.
Impacted products : The Google Cloud products known to be affected
by the incident. If the incident is impacting multiple Google Cloud
products, you can see the list of products by doing one of the following:
Expand the Impacted products entry in the list.
Navigate to the incident.
Impacted locations : The locations known to be affected by the incident.
If the incident is impacting multiple Google Cloud locations, you can
see the list of locations by doing one of the following:
Expand the Impacted locations entry in the list.
Navigate to the incident.
Incident start time : The time Personalized Service Health detected the
incident.
Last update : The latest update from Google Cloud Support.
You can filter the information shown in the Service Health dashboard by
doing any of the following:
Enter a query in the filter bar. You can filter by fields such as title,
impacted products, and date ranges. Personalized Service Health lets you query for
information within the past year. If you delete a
project, information about it will no longer be available in
Personalized Service Health.
Select a button for the date range above the list.
To view the details of a single Google Cloud incident, select the title
of an incident from the incident list. In the incident details page, you can
navigate between tabs showing a overview of the incident and full history.
The fields in the Overview tab are:
Event State : The overall state of the event.
Title : A brief description of the incident.
Event timeline : A detailed timeline of the incident so far. The timeline
is not specific to your project.
Impacted products and locations : A list of all Google Cloud
products and locations known to be affected by the incident, including
products and locations you may not be using.
Relevance : Describes how an incident impacts your project.
Most recent update : The latest update from Google Cloud Support.
Diagnosis : The cause of the incident.
Workaround : Steps to mitigate the impact of the incident to your
project.
The Full Incident History tab contains a complete list of updates from
Google Cloud Support for the history of the incident.
The Incident Report tab, if available, shows a summary that includes the
factors that contributed to the incident, and the steps Google Cloud plans to
take to prevent similar incidents from reoccurring.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
