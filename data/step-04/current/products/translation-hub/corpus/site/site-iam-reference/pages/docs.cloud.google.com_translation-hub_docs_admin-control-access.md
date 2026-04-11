---
title: "Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/admin-control-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/admin-control-access
  title: "Control access \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
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
Control access
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
Control who has access to particular portals and post-editing requests. Direct
access to Google Cloud projects and Translation Hub resources is
available only to administrators .
Portal users and translators have access only to Translation Hub
resources that are assigned to their portals, such as glossaries or translation
memories. This access is granted through a portal's service
account .
Portal user permissions
When you add users to a portal, you grant them the following permissions:
Request translations; there's no limit to the number of translations that a
portal user can do.
For translation requests, users can use only the resources that are assigned
to the portal:
Glossaries
Translation memories (advanced tier only)
Custom models (advanced tier only)
Translation templates that were created by an administrator
Post-edit machine translations (advanced tier only)
Submit post-editing requests (advanced tier only) to groups that are assigned
to the portal.
For more information about adding portal users, see Enable users to request
translations .
Translator permissions
When you add translators to a post-editing group, you grant them the following
permissions:
Access to machine translations that were sent to their post-editing group.
If a translation memory was used with a machine translation, all of the
translator's edits are saved to that translation memory (for read-write
translation memories).
For more information about adding translators, see Enable post-editing
requests .
Manage user roles
User roles in Translation Hub indicate if a user is a portal user,
translator, or both. If an existing user's responsibilities change, you can
modify their role. For example, you can make an existing portal user a
translator too.
Add or remove roles for existing users on the Translation Hub
Users page:
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
All portal users and translators are listed.
To filter users by name or role, click Filter > User Name or Filter >
Roles .
The roles for each user are listed in the Roles column.
To change a user's role, find the user and then select more_vert More > Edit roles .
In the Edit user roles panel, clear or select the roles to remove or add.
If you're adding the translator role, you must specify the user's language
pairs.
Click Save .
Revoke user access to portals
To revoke access to portals, you can remove users from the portals or from
your project. For example, you might remove a user from a portal to temporarily
prevent them from making translation requests. You might remove a user from your
project if the user has left your organization.
Remove a user from portals
When you remove a user from a portal, translations for that portal aren't
retrievable until you add the user back.
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
All portal users and translators are listed.
To filter users by name or role, click Filter > User Name or Filter >
Roles .
Find the portal user to remove and then select more_vert More > Remove from portal .
In the Portals field, select one or more portals to remove the user
from.
Click Remove .
To confirm, click Remove .
Remove a user from a project
When you remove users from a project, all translations that are associated with
that user are disassociated and cannot be downloaded or exported.
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
All portal users and translators are listed.
To filter users by name or role, click Filter > User Name or Filter >
Roles .
Find the portal user to remove and then select more_vert More > Remove from project .
Click Remove .
To confirm, click Remove .
Revoke access to a translation resource
To prevent portal users from using a particular translation resource, you can
remove it from assigned portals. The resource remains in your project but
portal users cannot use it unless you assign the resource back to a portal.
For example, you might remove an older glossary from portals to prevent its use
and, instead, have users use a newer glossary. After the newer glossary has been
thoroughly tested, you can then delete the older glossary.
In the Translation Hub section of the Google Cloud console, go to the
Resources page.
Go to the Resources page
Find the resource to update and then select more_vert More > Remove from portal .
In the Portals field, select one or more portals to remove the resource
from.
Revoke translator access
To revoke access for translators, you can remove them from a post-editing group
or from your project. You might remove translators from a post-editing group to
temporarily prevent them from receiving edit requests. You might remove
translators from your project if they have left your organization.
If a translator has any in-progress edits, the translator won't be able to
submit them.
Remove a translator from a post-editing group
In the Translation Hub section of the Google Cloud console, go to the
Post-editing page.
Go to the Post-editing page
For each group that contains the translator to remove, select more_vert More > Edit group .
In the Translators field, clear the checkbox next to the translator to
remove.
Click Save .
Remove a translator from a project
In the Translation Hub section of the Google Cloud console, go to the
Users page.
Go to the
Users page
All portal users and translators are listed.
To filter users by name or role, click Filter > User Name or Filter >
Roles .
Find the translator to remove and then select more_vert More > Remove from project .
Click Remove .
To confirm, click Remove .
What's next
Learn how to delete unused translation resources or portals .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
