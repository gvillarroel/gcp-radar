---
title: "Emerging Threats Center \_|\_ Google Security Operations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/secops/secops-overview
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats
  title: "Emerging Threats Center \_|\_ Google Security Operations \_|\_ Google Cloud\
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
Emerging Threats Center
Supported in:
Google secops
SIEM
The Emerging Threats Center in Google Security Operations provides
AI-powered threat intelligence that helps you understand how current and emerging
threat campaigns might affect your organization. It builds on Applied Threat
Intelligence (ATI) and is powered by Google Threat Intelligence (GTI) and
Gemini models.
The Emerging Threats Center provides a curated view of the most critical global
threats from GTI that pose risks to your environment, including IoCs, detection
matches, and affected entities. It uses Gemini to transform large volumes
of raw intelligence feeds into actionable insights, letting you operationalize
threat data directly in your investigation workflows.
Important: The Emerging Threats Center is available only with a Google SecOps
Enterprise Plus license.
For more details about the IAM permissions required to access the
Emerging Threats page, see Emerging Threats: threatCollections and iocAssociations .
Key benefits
Emerging Threats Center strengthens your organization's visibility into active and
developing threat campaigns.
It provides the following benefits:
Continuous threat visibility : GTI campaign data is continuously
reflected in your workspace, so you are always aware of relevant threat
campaigns as they develop.
Actionable insights : You receive enriched, contextual results rather than
manually browsing threat reports.
Faster detection validation : Automated processes help you validate
detection coverage and review campaign data with less manual effort.
Reduced operational overhead : Out-of-the-box detection generation
reduces manual effort in parsing threat reports for detection opportunities.
Emerging Threats Center feed
The Emerging Threats Center feed in Google SecOps displays real-time
AI-informed threat intelligence from Google Threat Intelligence (GTI). It
helps you identify potential compromises in your environment by exposing active
and emerging threat campaigns most relevant to your organization.
This feed provides a curated view of campaigns and reports and their associated
threat actors and malware families. It lets you explore threat relationships and
investigate threat campaign details.
Note: The Emerging Threats Center feed displays only threat collections that have
been updated within the past year, ensuring that you always work with up-to-date
intelligence.
The reports displayed in the feed are restricted to those produced by GTI and
don't include crowdsourced reports visible in GTI itself.
Apply filters and view campaigns
You can filter the Emerging Threats Center feed to view the list of campaigns and
reports based on specific criteria.
To apply filters:
Click filter_alt Filter
in the Emerging Threats Center feed.
In the Filters dialog, select the logical operator:
OR : Matches any of the selected filters.
AND : Matches all the selected filters.
Select a filter category:
Associated malware : Filter by specific malware families linked to the
threat.
Associated tools : Filter by specific tools utilized in the campaign.
Source regions : Filter by the geographical region where the threat
originated from.
Targeted industries : Filter by industries targeted by the campaign.
Targeted regions : Filter by the targeted geographical region.
Associated threat actors : Filter by specific threat actors connected to
the campaign.
Has IoC matches : View campaigns that contain IoCs matching your
environment.
Object types : View either campaigns or reports depending on your
investigation focus.
The selected filters appear as chips above the table.
Understand threat cards
Each threat in the feed appears as a card that contains the following:
Threat title and summary : A brief description of the threat activity.
Associated metadata : An overview of the targeted industries, targeted
regions, related malware, and threat actors.
Badges : Quick indicators that display IoC matches and associated rules.
For campaigns and reports, the IOCs badge shows whether any IoCs in
the report or campaign match data from your environment.
For campaigns, the Rules badge shows the number of associated
detection rules that are enabled in your environment. For example, a
badge labeled 1/2 rules indicates that only one out of the two
available rules for that campaign are enabled in your environment.
Hold the pointer over the badge to display the breakdown of the number of broad and
precise rules and whether they're enabled or disabled.
View associated actors and malware
To view associated actors and malware, click a threat card to reveal detailed
context about the threat, including:
Associated Actors : Displays the Actor Details panel that includes sections for
actor name, summary, known source country, first and last seen dates, and
any related campaigns, malware, and indicators.
Associated Malware : Displays the Malware Details panel that includes sections for
malware family, summary, operating system, reported aliases, and any related
campaigns, actors, or indicators.
In each panel, click keyboard_arrow_down
next to a section name to expand it and view more details. Alternatively, you can
open these details directly in GTI to get more information.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
