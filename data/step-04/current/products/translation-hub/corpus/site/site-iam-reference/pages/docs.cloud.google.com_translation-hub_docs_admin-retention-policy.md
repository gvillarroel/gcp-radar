---
title: "Configure data retention policy \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-retention-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-retention-policy
  title: "Configure data retention policy \_|\_ Translation Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Guides
Send feedback
Configure data retention policy
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
A data retention policy lets you customize how long (in days)
Translation Hub retains completed translation jobs. For
example, if you work with sensitive content, you can set the retention policy to
one day so that Translation Hub deletes a translation job a day after
it completes.
The data retention policy applies to the source document and the resulting
translations. If you don't specify a policy, Translation Hub deletes jobs
after 90 days by default.
Important considerations
Retention policies apply to source and translated documents only
Retention policies don't apply to downloaded translations or other
resources that are used for a translation job, such as glossaries and
translation memories. Those resources are managed by you, so they remain until
you delete them.
The retention period starts when a translation job is complete
After you complete a machine translation, the job is considered
complete and Translation Hub starts the retention period. If you send the
translation to post editing, the job is then considered in progress and the
retention policy no longer applies. After the post edit is completed,
Translation Hub then restarts the retention period from when the
post edit was completed.
Changes to retention policies apply to newly completed jobs only
Any changes to a retention policy aren't retroactively applied to translation
jobs that were completed before the change. Those jobs follow the retention
policy that was in place when the job was completed.
Portal policies override a project policy
You can set a retention policy on your project or on a portal. A project
policy applies to all new and existing portals in your project, unless a portal
has its own policy. In that case, Translation Hub uses the portal policy
instead of the project policy.
Set a project policy
In the Translation Hub section of the Google Cloud console, go to the
Settings page.
Go to the
Settings page
In the Retention policy section, specify the number of days to retain
data from translation jobs.
Click Save .
View retention policy
View how many days Translation Hub retains translation data.
View project retention policy
In the Translation Hub section of the Google Cloud console, go to the
Settings page.
Go to the Settings page
In the Retention policy section, view the retention policy value.
View portal retention policy
In the Translation Hub section of the Google Cloud console, go to the
Portals page.
Go to the Portals page
Click a portal to view its details page.
In the Portal detail section, view the Retention policy field to see
how long the portal retains translations.
Remove project policy
You can remove a project policy so that all portals without a portal policy use
the default value of 90 days. This default doesn't apply to portals with their
own retention policy.
In the Translation Hub section of the Google Cloud console, go to the
Settings page.
Go to the
Settings page
Click Reset .
Click Reset to confirm this change.
Portal policy
You can set a portal-specific data retention policy only when you create a
portal. You can't add, modify, or remove portal policies. If you must change a
portal policy, recreate the portal with the new policy.
For more information about creating a portal and setting a retention policy, see
Create a portal .
What's next
To view how long a particular job will be retained, see View
retention period for portal users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
