---
title: "Enable users to request translations \_|\_ Translation Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-enable-translations
  title: "Enable users to request translations \_|\_ Translation Hub \_|\_ Google\
    \ Cloud Documentation"
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
Enable users to request translations
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
To enable translations, use the Google Cloud console to create a portal and add
users. After you assign users to a portal, they can sign in to the portal and
start translating documents.
Before you begin
Set up a project with billing and the Cloud Translation API enabled. Use
that project for the following tasks.
Also, decide on which portal tier your users require: basic or
advanced . Advanced-tier portals offer additional features at a different
translation cost per page. When you create a portal, you select its tier, which
cannot be changed later. You can create a portal in each tier if your users
require both tiers.
Create a portal
Use the Google Cloud console to create translation portals for your users. A
portal is the user interface where authorized users sign in and request
translations.
In the Translation Hub section of the Google Cloud console, go to the
Portals page.
Go to the
Portals page
Click Create portal , which opens the Create new portal pane.
Specify a portal display name that describes the purpose of this portal.
Select the portal tier and then click Continue .
On the Configuration step, specify settings for your portal and then
click Continue :
Select Auto assign required role to portal service account .
Translation Hub automatically assigns the Translation Hub Portal User
IAM role to the portal service account. If you prefer to
manually set IAM permissions, clear the auto assign role
field. For more information, see Portal service
account .
To set a portal-specific retention policy ( Preview ), specify
the number of days that Translation Hub retains your data. This
value can't be changed or removed after you create the portal. To use the
project policy or the default of 90 days (if no project
policy is set), leave the retention policy field blank.
For advanced-tier portals, you must associate a translation memory with
the portal. You can create a new one or select an existing one.
On the Assign users to portal step, you can add invited users to the
portal, or you can add users to portals later when you invite them.
Click Done to create the portal.
After Translation Hub creates your portal, you can go to the
Portals page to find and view details about your portal, such as its URL
and its service account name.
You can choose to create additional portals. Multiple portals can be useful to
manage different sets of users.
For example, imagine that you have one department that translates technical
publications and another that translates legal documents. Because each
department has different translation requirements and translation resources,
each department could have their own portal. Each set of users would only have
access to resources that are relevant to their area.
Portal service account
Translation Hub assigns each portal a unique service account and, by
default, automatically assigns the Translation Hub Portal User role to the
service account. Translation Hub uses the service account to authorize
API calls to your project on behalf of portal users and translators. That
way they can access translation resources in your Google Cloud project
without possessing Google Cloud credentials.
The Translation Hub Portal User role grants translation-specific permissions.
To see the exact set of permissions, see the role's assigned
permissions in the Google Cloud console.
Invite users and add them to portals
Invite users to your Google Cloud project and then add them to portals.
When you invite users, you set their sign-in method and select which portals
they can access.
If you have a multi-project setup, you can invite users to multiple projects.
Users choose which project to use after signing in.
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
Click Invite user .
Select Portal user and then click Continue .
Users can be added as portal users, translators, or both. For example, some
users might initiate translations and also review other users'
machine-translated content.
Select Add manually to invite one user or Bulk import via a CSV file
to invite multiple users in a single request, and then click Continue .
Specify user details:
To manually add one user, specify the user's email address, sign-in
method, and the portals they can access. The sign-in method specifies
whether users sign in with an email and password or with their Google
Account (such as a Google Workspace account).
To invite users in bulk, provide a CSV file where each line specifies a
user's email address, sign-in method, and associated portals. You
can specify an existing file in Cloud Storage or upload a local file to
Cloud Storage. In either case, Translation Hub requires
Cloud Storage permissions. For more information, see CSV file
for inviting users in bulk .
If you have existing portals, you can assign users to portals when you
invite them. If not, you can assign users to portal when you create the
portal. You can also assign users to one or more portals. If users are
added to multiple portals, they choose which one to use after signing in.
Click Done .
Users with the GOOGLE sign-in method can access portals by going to
https://translationhub.cloud.google.com/ . Users with the EMAIL_PASSWORD
sign-in method receive an email notification with a portal URL; they can
also sign in by going to https://translationhub.cloud.google.com/ .
On the Users page, you can the view status of each user: Registered or
Invited . Registered users have signed in at least once.
CSV file for inviting users in bulk
To add multiple users in a single request, specify user information in a CSV
file. Each line of the CSV file uses the following format that contains the
user's email address, sign-in method, and portal IDs:
EMAIL_ADDRESS , SIGN_IN_METHOD , PORTAL_ID_1 ; PORTAL_ID_2
The sign-in method can be google for Google Accounts or email/password for
all other email addresses. The portal IDs are listed on the Portals page
in the Google Cloud console. Use a semicolon to associate multiple portals to
a single user.
The following example shows a sample CSV. Don't include a header row for column
names.
amal@altostrat.com,email/password,123abc45def678f;234abc45def678g
charlie@altostrat.com,email/password,
hao@myownpersonaldomain.com,email/password,123abc45def678f
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
Translation resources
Translation resources let portal users modify the machine translations so that
the results are tailored for a specific domain. You manage these resources and
assign them to portals. After you assign resources to a portal, any portal user
can use those resources.
The following list introduces the translation resources that you can manage and
how they might help:
Glossary : A glossary is a custom dictionary to control how specific terms
are translated. Due to glossary size limits, the glossary is meant to
translate small segments like domain-specific terms or entities (such as names
of people or organizations).
Learn about glossaries .
Translation memory (advanced tier only): A translation memory controls how
matching segments are translated at the sentence level.
During the post-editing process, by default, a translation memory captures
changes made by an editor as source and target language segment pairs. When
you apply the same translation memory on future translations,
Translation Hub applies the human-reviewed translations on exact
matches. You can also set translation memories to read only.
Learn about translation memories or read-only translation
memories.
Custom model (advanced tier only): A custom model is a translation model
that is tuned with your sentence pairs. Compared to the general Google NMT
model, a custom model helps improve machine translations for a specific domain
and writing style.
Learn about custom models .
What's next
Learn how to add translators for post-editing requests .
Learn how portal users request translations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
