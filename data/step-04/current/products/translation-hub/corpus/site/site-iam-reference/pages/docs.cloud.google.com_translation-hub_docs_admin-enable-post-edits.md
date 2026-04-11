---
title: "Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-enable-post-edits
  title: "Enable post-editing requests \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
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
Enable post-editing requests
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
Translation Hub post-editing lets you bring in your own translators to
review machine translated content. You use the Google Cloud console to invite
translators and add them to post-editing groups. You can add translators to one
or more projects.
When you create a post-editing group, you assign it to one or more portals
(advanced-tier portals only), and then portal users can submit post-editing
requests against that group.
Invite translators
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
Click Invite user .
Select Translator and then click Continue .
Select Add manually to invite one translator or Bulk import via a CSV
file to invite multiple translators in a single request, and then click
Continue .
Specify user details:
To manually add one translator, specify the translator's email address,
sign-in method, post-editing groups, and fluent language pairs. The
sign-in method specifies whether translators sign in with an email and
password or with their Google Account (such as a Google Workspace
account).
To invite translators in bulk, provide a CSV file where each line
specifies a translator's email address, sign-in method, associated
post-editing groups (optional), and fluent language pairs. You can specify
an existing file in Cloud Storage or upload a local file to
Cloud Storage. In either case, Translation Hub requires
Cloud Storage permissions. For more information, see CSV file
for inviting users in bulk .
Click Done .
On the Users page, you can the view status of each translator:
Registered or Invited . Registered translators have signed in at least
once.
CSV file for inviting translators in bulk
To add multiple translators in a single request, specify their information in a
CSV file. Each line of the CSV file uses the following format that contains the
translator's email address, sign-in method, post-editing group names, and
fluent language pairs:
EMAIL_ADDRESS , SIGN_IN_METHOD , GROUP_NAME_1 ; GROUP_NAME_2 , LANGUAGE_CODE:LANGUAGE_CODE ; LANGUAGE_CODE:LANGUAGE_CODE
The sign-in method can be google for Google Accounts or email/password for
all other email addresses. The post-editing group names are listed on the
Post-editing page in the Google Cloud console. Use a semicolon to
associate multiple groups or language pairs to a single translator.
The following example shows a sample CSV. Don't include a header row for column
names.
amal@altostrat.com,google,groupname1;groupname2,en:es;zh:de
charlie@altostrat.com,email/password,,zh:es
hao@myownpersonaldomain.com,email/password,
Translation Hub has a limit on the number of rows and CSV file size. For
more information, see usage limits in Quotas and limits .
Add Cloud Storage permission to Translation Hub
Translation Hub reads your bulk-import CSV file from a
Cloud Storage bucket. Translation Hub doesn't inherently have
permissions to access Cloud Storage. To allow access, grant the
Translation Hub service account the Storage Admin role, which allows
Translation Hub to upload and read CSV files from your
Cloud Storage buckets.
Go to the IAM page.
Go to the IAM page
From the list of principals, check to see if the
cloud-translation-hub@system.gserviceaccount.com service account already
exists with the Storage Admin role. If not, proceed to the next step. If
the service account already exist, skip these steps.
Click Grant access .
For the New principals field, add
cloud-translation-hub@system.gserviceaccount.com as a principal.
Click Select a role and then select the Storage Admin role.
The role grants permissions for Translation Hub to add and read
files in Cloud Storage buckets. To see the exact set of
permissions, see the assigned permissions in the
Google Cloud console.
Click Save .
Create post-editing groups
A post-editing group contains one or more translators. You assign post-editing
groups to portals rather than assigning individual translators to portals.
When portal users request a post-edit, they can select any post-editing group
that's assigned to their portal. Translation Hub shows relevant
post-editing groups that contain translators who have fluency with the source
and target language of their translated documents.
To create a post-editing group, you must have at least one translator invited to
your Google Cloud project.
In the Translation Hub section of the Google Cloud console, go to the
Post-editing page.
Go to the Post-editing page
Click the Create post-editing group .
Specify a name for the group.
These names are visible to portal users when they request post-edits.
Select translators to add to the group and then click OK .
Click Continue .
Select the advanced-tier portals to assign this post-editing group to and
then click OK .
Click Done .
Creating the translator group might take a few minutes. After the group is
created, it's listed on the Post-editing page. Portal users can now
send post-editing requests to the post-editing group.
Capture post-edited translations
To capture edits during post-editing, portal users must specify a read-write
translation memory when submitting a translation request. If portal users don't
select a translation memory, they cannot select one later and no post-edits can
be saved. If a portal user selects a read-only translation memory, no post edits
can be saved; the translation memory is used only for matching translations.
You can set a default translation memory so that Translation Hub
automatically sets a translation memory when a portal user requests a
translation. That way, the default translation memory is always associated with
a translation job unless a portal user explicitly removes it or chooses a
different one.
For more information, see Save and reuse human-reviewed translations .
What's next
Learn how portal users can request post-edits .
Learn how translators edit documents .
Learn how to set a translation memory to read only .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
