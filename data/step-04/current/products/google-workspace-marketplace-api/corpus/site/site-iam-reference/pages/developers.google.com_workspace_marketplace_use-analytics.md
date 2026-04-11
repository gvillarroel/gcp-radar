---
title: "Get analytics about app usage \_|\_ Google Workspace Marketplace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/marketplace/use-analytics
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/use-analytics
  title: "Get analytics about app usage \_|\_ Google Workspace Marketplace \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Guides
Send feedback
Get analytics about app usage
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Gain insights into app listing performance, user engagement, and installation metrics through Google Analytics and the Google Workspace Marketplace SDK.
Opt-in to Google Analytics 4 to access detailed app listing analytics, including visitor demographics, traffic sources, and install event tracking.
The Google Workspace Marketplace SDK provides data on domain and seat installs, offering a view of your app's reach and user base.
Connect your app with a licensing or billing server to manage monetization and track app installations and removals using the Google Workspace Marketplace API.
You can get app listing, user, and installation metrics from
Google Analytics and the Google Workspace Marketplace SDK.
Get app listing analytics from Google Analytics
To monitor how users interact with your app listing with
Google Analytics, you must opt-in to Google Analytics 4. Then
you can give other users access and review app listing analytics.
Opt in to Google Analytics 4
In the Google Cloud console, go to Menu
menu > APIs & Services >
Google Workspace Marketplace SDK .
Go to the Google Workspace Marketplace SDK page
Click the Analytics tab.
To view additional metrics, click Opt in to Google Analytics .
After you opt in, the opt-in button is replaced with Google Analytics
tools.
Give users access to Google Analytics data
In your app's Google Cloud project, opt in to get marketer access to the
Google-owned Analytics 4 property. For instructions, see Access and
data-restriction
management .
Requires editor access to your app's Google Cloud project.
In the Google Cloud console, go to Menu
menu > APIs & Services >
Google Workspace Marketplace SDK .
Go to the Google Workspace Marketplace SDK page
Click the Analytics tab.
In the Google Analytics section, enter the users you want to have
marketer access to your app listing data.
Find app metrics in Google Analytics
Google Analytics includes the following information:
How many visitors have viewed your app listing for a specific time period. A
visit is only counted if the visitor clicks on your app listing to view the
details.
The geographic distribution of visitors.
How visitors reach your app listing, for example, from a Google Search.
The average time spent viewing your app listing.
Install events that are created when users start and finish installing your
app. These events let you determine how often an install process was aborted
and how many installs were completed over time.
To find install information in Google Analytics, search using the
following event information:
Install events
When an install of the application is started.
category=workspace_MARKETPLACE
action=START_INSTALL
When an install of the application is completed.
category=workspace_MARKETPLACE
action=FINISH_INSTALL
Get app listing analytics in the Google Workspace Marketplace SDK
To get app listing analytics directly from the Google Cloud console:
In the Google Cloud console, go to Menu
menu > APIs & Services >
Google Workspace Marketplace SDK .
Go to the Google Workspace Marketplace SDK page
Click the Analytics tab.
The following information is available:
Data type
Description
Domain installs
The number of domains that have installed your app. For example, if the
administrator of altostrat.com installs your app for 500 users and the
administrator of examplepetstore.com installs your app for 30 users, the
domain installs count is two domains.
Seat installs
The number of users that have your app installed and enabled. For
example, if the administrator for altostrat.com installs your app for 500
users and the administrator for examplepetstore.com installs your app for
30 users, the seat installs count is 530 seats.
Individual end user installs
The number of users that have directly installed your app. The
individual end user install count doesn't include installs made by domain
administrators. For example, if the administrator for altostrat.com
installs your app for 500 users and 25 individual users from
examplepetstore.com install your app, the individual end user install
count is 25.
Daily app impressions
The number of visits per day to your app listing in
Google Workspace Marketplace. The count resets at midnight GMT-7
(America/Los Angeles).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["App metrics, including listing views and installs, are available via Google Analytics and the Google Workspace Marketplace SDK. To access listing analytics in Google Analytics, opt-in to Google Analytics 4 and grant `marketer` access to other users. Google Analytics provides data on visitor counts, geography, traffic sources, and install events. The Marketplace SDK provides data such as domain installs, seat installs, and individual user installs directly. The API `LicenseNotification` collection tracks app installations and removals from domains, which can be integrated with your billing server.\n"]]
