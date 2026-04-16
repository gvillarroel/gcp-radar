---
title: "View and understand Firewall Insights \_|\_ Network Intelligence Center -\
  \ Firewall Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/how-to/using-firewall-insights
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/firewall-insights/how-to/using-firewall-insights
  title: "View and understand Firewall Insights \_|\_ Network Intelligence Center\
    \ - Firewall Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Firewall Insights
Guides
Send feedback
View and understand Firewall Insights
Stay organized with collections
Save and categorize content based on your preferences.
Firewall Insights helps you understand the usage patterns of your
firewall rules. You can use these insights to support decisions about removing
or modifying firewall rules to simplify and secure your firewall configuration.
You can view the following insights on the Google Cloud console
Firewall Insights
page and in several other places in the Google Cloud console:
Shadowed firewall rules: help you identify firewall rules that overlap with
existing rules.
Overly permissive rules: help you identify allow rules with no hits,
unused attributes, or overly permissive IP address or port ranges.
Deny rules: give you details about deny rules that had hits during the
configured observation period .
Insights for overly permissive rules and deny rules are generated based on data
collected for the duration when
Firewall Rules Logging is enabled.
On the Firewall Insights
page in the Google Cloud console, each card that displays the insights includes
a list of all the rules in your project that meet the insight criteria.
If you want to limit the results to one VPC network, use the
filter bar at the top of the page to select a network.
For more information, see
Where you can view metrics and insights .
The following sections describe how to view each insight.
Required roles and permissions
To get the permission that
you need to view insights,
ask your administrator to grant you the
following IAM roles on your project:
Firewall Recommender Admin ( roles/recommender.firewallAdmin )
Firewall Recommender Viewer ( roles/recommender.firewallViewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
recommender.computeFirewallInsights.list
permission,
which is required to
view insights.
You might also be able to get
this permission
with custom roles or
other predefined roles .
View shadowed firewall rules
To learn about this insight, see Shadowed
rules .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Shadowed rules , click View full list . The
Google Cloud console displays the Shadowed rules
page, which lists all the VPC networks.
For each VPC network in your project, you can see the
insights for hierarchical firewall policies, global network firewall
policies, and VPC firewall rules, along with the
priority of the rule. The Insight column for each
rule provides a summary of why the rule was identified as a shadowed rule.
Optional: Use filtering to narrow the
results in the list based on rule name, priority, and policy name.
To view more details about the shadowed rule and the rules that shadow
it, click the insight.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that
provides usage recommendations for Google Cloud products and services.
View allow rules with no hits
To learn about this insight, see
Allow rules with no hits .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Allow rules with no hit , click View full list .
The Google Cloud console displays the Allow rules with
no hits page. This page lists all the VPC networks that
had rules with no hits during the observation period.
The Insight column for each rule shows whether the
firewall rule had no hits during the observation period. The
Future hit prediction column shows a prediction of future usage based
on firewall rules in the same organization.
Optional: Use filtering to narrow the results in the list based on rule
name, priority, and policy name.
For any rule in the list, do any of the following as appropriate:
To view the Firewall rule details page for the rule, click the
name of the rule.
To view logging for the rule, click View audit log .
To see details about the prediction, click the link in
the Insight column. The Insight details pane is displayed.
The pane describes the main attributes of the rule. It also
describes other rules in the project that have similar attributes.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View allow rules that are obsolete based on adaptive analysis
You can view allow rules that are less likely to be active based on usage
patterns and adaptive analysis.
To learn about this insight, see
Allow rules that are obsolete based on adaptive analysis .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Allow rules with no hits (adaptive analysis) ,
click View full list .
The Allow rules with no hits (adaptive analysis) page opens. The page
lists all the VPC networks that had rules that are likely
no longer used.
The Insight column for each rule shows whether the firewall rule is
no longer active based on adaptive analysis of rule hit count history.
Optional: Use filtering to narrow the results in the list based on rule
name, priority, and policy name.
For any rule in the list, do any of the following as appropriate:
To view the Firewall rule details page for the rule, click the
name of the rule.
To view logging for the rule, click View audit log .
To see details about the prediction, click the link in
the Insight column.
The Insight details page describes the main attributes of the rule.
In the Adaptive analysis section, you can see the date of the rule's
last hit, and the average daily hit counts before the rule became no longer
active.
To close the Insight details page, click Cancel .
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View allow rules with unused attributes
To learn about this insight, see
Allow rules with unused attributes .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Allow rules with unused attributes , click
View full list . In response, the Google Cloud console displays the
Allow rules with unused attributes page. This page lists all the
VPC networks that have rules that had unused
attributes during the observation period.
The Insight column for each rule shows the number
of unused attributes during the observation period.
Optional: Use filtering to narrow the results in the list based on rule
name, priority, and policy name.
For any VPC network in the list, do any of the following
as appropriate:
To view the Firewall rule details page for the rule, click the
name of the rule.
To view logging for the rule, click View audit log .
To see details about the prediction, click the prediction link.
The Insight details pane is displayed. The pane
describes the main attributes of the rule. It also describes other rules
in the project that have similar attributes.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View allow rules with overly permissive IP address or port ranges
To learn about this insight, see Allow rules with overly permissive IP address
or port ranges .
Be aware that your project might have firewall rules that allow access from
certain IP address blocks for load balancer health checks or for other
Google Cloud functionality. These IP addresses might not be hit, but they should
not be removed from your firewall rules. For more information about these
ranges, see the
Compute Engine documentation .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Allow rules with overly permissive IP address or
port ranges , click View full list . The
Google Cloud console displays a list of all the rules that had overly
permissive ranges during the observation period.
For any rule in the list, do any of the following as appropriate:
To view the Firewall rule details page for any rule, click the
name of the rule.
To view logging for the rule, click View audit log .
To see suggestions about how to narrow the range, click the link in
the Insight column. The Insight details pane is
displayed. The pane describes the main attributes of the rule. It
suggests more narrowly defined IP address or port ranges that you
could use.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View deny rules with hits
To learn about this insight, see
Deny rules with hits .
Console
In the Google Cloud console, go to the Firewall Insights page.
Go to Firewall Insights
On the card named Deny rules with hits , click View full list . In
response, the Google Cloud console displays the Deny rules with hits
page. This page lists all the VPC networks that have deny
rules that had hits during the observation period.
To review the packets dropped by a firewall, click Hit count .
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View insights on the VM network interface details page
View firewall usage on the Network interface details page for a VM.
For more information, see
List firewall rules for a network interface of a VM instance .
View rules with hits in the last 24 months
Console
In the Google Cloud console, go to the Compute Engine VM
instances page.
Go to Compute Engine VM instances
In the search results for a VM interface, select a VM and click the
more_vert more actions menu.
On the menu, select View network details .
On the Firewall and routes details page, click the
Firewall Rules tab.
In the Hit count column, view the hit counts for allow and deny
traffic in the last 24 months for all firewall rules associated with a
specific network interface.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View insights on the Firewall page
For more information about the Firewall page, see
List VPC firewall rules for a VPC network .
List insights for a project
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
For each firewall rule, view the name of available insights in the
Insights column.
You can click the name of an insight to view its details.
The following sections describe how to view and interpret the details for each
type of insight.
View allow rules with no hits in the last 24 months
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Last hit column, review the last time that a given firewall
rule was used in the last 24 months.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View the usage history chart for a rule
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click a firewall rule name.
In the Hit count monitoring section of the page, view the resulting
chart that shows the firewall hit count for a given time period. You can
select a time interval for the hit count monitoring chart.
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
View deny rules with hits for an observation period
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Hit count column, view the number of unique connections used
for a given firewall rule in the last 24 months (default).
gcloud and API
Firewall Insights uses
Recommender commands.
Recommender is a Google Cloud service that provides
usage recommendations for Google Cloud products and services.
What's next
Manage and export insights
Review and optimize firewall rules
View insights in Recommendation Hub dashboard
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
