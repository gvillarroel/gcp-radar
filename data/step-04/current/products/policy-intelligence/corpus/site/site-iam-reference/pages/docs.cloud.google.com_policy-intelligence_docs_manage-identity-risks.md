---
title: "Review and manage identity risks \_|\_ Policy Intelligence \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/manage-identity-risks
  title: "Review and manage identity risks \_|\_ Policy Intelligence \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Review and manage identity risks
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Securing the Policy Troubleshooter API with VPC Service Controls
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
As an IAM administrator, you can review and manage
identity risks across your organization, folder, or project from the
Google Cloud console by using the Security Insights dashboard.
The Security Insights dashboard lets you do the following:
Review vulnerable human, non-human, and group identities.
View the type and severity of identity risks associated with an organization,
folder, or project.
Prioritize and remediate issues with actionable insights for both Google Cloud
and other third-party identity providers.
Important: To review insights and recommendations for all roles on your resource,
you must activate Security Command Center Enterprise or Premium tier
on your resource.
Otherwise, you can only review insights and recommendations for Owner , Editor ,
and Viewer roles. For more information, see Billing questions .
Before you begin
To get the permissions that
you need to review and manage identity risks,
ask your administrator to grant you the
following IAM roles on the organization, folder, or project that you want to review
and manage identity risks for:
Review identity risks:
IAM Recommender Viewer ( roles/recommender.iamViewer )
Apply or dismiss recommendations:
IAM Recommender Admin ( roles/recommender.iamAdmin )
Note: IAM basic
roles might also contain permissions to review and manage identity risks. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Review identity risks
In the Google Cloud console, go to the IAM & Admin > Security Insights
page.
Go to Security Insights
Select the organization, folder, or project that you want to review the
identity risks for.
The Security Insights dashboard displays the following widgets for the
selected resource:
Identity risk overview : Shows the total number of identities with one or more
role bindings; the total number of risky identities across human, non-human,
and group identities; and their respective severity levels.
The total number of identities is the sum of unique identities in the
allow policies that are attached to the selected resource. This number doesn't
include the identities from the allow policies that are attached to the child
resources of the selected resource. For example, if your selected resource
is an organization, then the identities from the allow policies that are
attached to its individual folders or projects are not included.
Note: If an identity has both a high-risk and low-risk recommendation,
it's classified as a high-risk identity.
Risks by finding category : Shows risky identities that are listed based on
category such as Unused IAM role or IAM role has excessive permissions .
The total number of findings in the Risks by finding category widget might
differ from the number of insights in other widgets. This difference occurs
because multiple insights of the same severity for the same resource are
grouped into a single finding in other widgets.
Note: The details of findings are shown on the Findings page
in Security Command Center. To review findings for a category, click the number of
findings in the same row. To review all identity and access findings,
click View all findings .
Top risky groups : Shows groups with the highest excessive permissions.
Top risky human identities : Shows human identities with the highest excessive
permissions.
Top risky non-human identities : Shows non-human identities with the highest
excessive permissions.
Active IAM recommendations trend : Shows active role
recommendations for a specified time period.
Manage identity risks
You can view insights and recommendations to manage the risks that are associated with
an identity.
To manage identity risks, do the following from any widget on the dashboard:
For a risky identity, click the number of insights in the Insights column.
In the Insights pane, to filter insights by type, select the required type
from the list.
Depending on whether a recommendation is available for an insight, you
can either view its details or view its recommendation.
For an insight without a recommendation, click View details .
The Permissions pane provides details on the insight.
For an insight with a recommendation, click View recommendation .
The Recommendation pane provides details about the
suggested role removal or replacement.
To apply or dismiss the recommendation, click Apply or Dismiss .
It takes time for access changes to propagate through
the system. To learn how long it takes, on average,
for access changes to propagate, see
Access change propagation .
Note: It might take up to 24 hours for the changes to appear on the
Findings page in Security Command Center.
What's next
Learn about how to investigate identity and access findings .
Learn about role recommendations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
