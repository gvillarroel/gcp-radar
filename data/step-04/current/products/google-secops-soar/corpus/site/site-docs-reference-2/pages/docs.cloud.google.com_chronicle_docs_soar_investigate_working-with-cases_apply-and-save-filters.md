---
title: "Apply and save filters \_|\_ Google Security Operations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/apply-and-save-filters
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/apply-and-save-filters
  title: "Apply and save filters \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Apply and save filters
Supported in:
Google secops
SOAR
This document explains how filters can help narrow your search in the case
queue to target only the cases you want to review. Case queue filters help
streamline your workflow by surfacing only the cases you need to act on.
Whether you're triaging high-priority alerts, reviewing cases in a specific
environment, or collaborating with a SOC team, filters offer flexible control
using `AND`, `OR`, `IS`, and `IS_NOT` conditions.
The following filters are available: Timeframe, Alert names, Analysts,
Environments, Priorities, Products, Stages, Tags, and Playbook Status.
Note: When filtering cases by SOC roles (such as Tier2 ),
select Include users associated with selected roles to include both
direct role assignments and individual users assigned to that role. To
do this, select the Include users associated with selected roles
checkbox. When this option is selected, the system displays all cases
assigned directly to the role or to any user within that role. For example, if "Alex Smith" is a member
of Tier2 , any case assigned to them will appear when you filter
by Tier2 .
Add a filter
Define custom filters to customize your case queue view.
To add a new filter, follow these steps:
Click Cases Filter .
In the Case Queue Filter dialog, fill in the required filter conditions. For
example, to display high-priority cases that are not in the
investigation stage in the past 24 hours:
Set the Time Frame to Last 24 hours .
Set the first condition to
Priorities IS High .
Set the second condition
Stages IS_NOT Investigation .
Optional: To save the filter for future use, click Save Filter
and enter a name. The filter is saved under
keyboard_arrow_down
Saved Filters in the case queue header for future use.
Click Apply .
Share case queue filters
You can share your case queue filters with other individual users,
specific SOC roles (like Tier 1 analysts), or all users.
Filters shared with you or by you display a Shared icon next
to their name.
To share a filter, your permission group must have the Allow sharing case queue filters permission enabled. This permission is enabled by default for the Admin group. For more information about enabling permissions, see
Edit a permission group .
To share your case queue filters, follow these steps:
Add a new filter by following the steps in
Add a filter .
Click Save Filter .
In the Save filter dialog, enter a name for the filter and then
choose one of the three sharing options:
Private (only me): This is the default setting. The
filter remains private and visible only to you.
Public (all users): The filter is visible to all
users who have access to cases.
Specify users & roles: Select this option to search for
and add specific users or predefined SOC roles.
Click Save .
Manage your saved filters
You can edit, rename, change sharing settings, or delete filters you've created. Changes to shared filters apply to everyone they're shared with.
Note: You can only manage filters you create. You can't edit or
delete filters shared with you. Any changes to shared filters are temporary.
Edit a filter
To edit a filter you created, follow these steps:
In the case queue header, click
keyboard_arrow_down
Saved Filters .
Hold your pointer over the filter you want to manage and click
edit
Edit .
If the filter is shared, a confirmation dialog appears. Click Yes
to continue to the Edit filter dialog.
Modify the filter criteria or change its sharing configuration.
Click Save .
Temporarily modify a shared filter
To temporarily modify a shared filter, follow these steps:
In the case queue header, click
keyboard_arrow_down
Saved Filters .
Click the shared filter you want to modify.
In the case queue header, click
filter_alt
Cases Filter to modify the filter, and apply changes.
Note: These changes are temporary and won't be saved.
Delete a filter
You can delete any filter you created. If the filter is shared,
it will also be removed from other users' filter lists.
To delete a filter, follow these steps:
Hold your pointer over the filter you want to delete and click
delete
Delete .
In the confirmation dialog, click Yes to delete the filter.
Note: You can also delete the filter from the Edit filter
dialog.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
