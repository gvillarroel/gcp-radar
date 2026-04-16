---
title: "Apps Script Sunset Schedule \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/tables
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/tables
  title: "Apps Script Sunset Schedule \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Support
Send feedback
Apps Script Sunset Schedule
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
Deprecated features remain available until their sunset date, after which they cease to function or become unavailable.
Developers should upgrade existing scripts to use supported features during the deprecation period to avoid disruptions.
Google provides migration guides and resources to help developers transition away from deprecated features.
The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.
Once a sunset date for an Apps Script feature is announced, the
feature is considered deprecated, but is available for use until the sunset
date. During the deprecation period, upgrade existing scripts to use supported
features.
Feature
Deprecated
Sunset
Behavior after sunset date
setAuthentication(clientId, signingKey)
March 03, 2026
June 01, 2026
This method is unavailable and existing scripts fail when using this method.
Area120Tables
July 16, 2024
Jan 14, 2026
Service no longer functions.
Analytics Reporting API
July 1, 2024
June 3, 2025
Service no longer functions.
Rhino Runtime
February 20, 2025
January 31, 2026
As of February 20, 2025, the Rhino runtime is deprecated. Scripts running on Rhino will continue to function until January 31, 2026, after which they will no longer execute. Please migrate your scripts to the V8 runtime before this date. Refer to Migrate scripts to the V8 runtime .
Contacts service
December 16, 2022
January 31, 2025
Service no longer functions.
Sites service
September 19, 2023
September 24, 2024
Service no longer functions.
getChatThreads() , getChatThreads(start, max)
July 8, 2022
November 1, 2022
These methods are unavailable and existing scripts fail when using
these methods.
Publish Editor add-ons to the Chrome Web Store
October 29, 2018
December 16, 2019
You can no longer publish
Editor add-ons
to the Chrome Web Store. Now Editor add-ons are published solely to
the
Google Workspace Marketplace . Add-on developers have been notified to
migrate their add-ons
to the Google Workspace Marketplace; most add-ons should now be available there.
For new add-ons, see
Publishing an Editor add-on for the new publication flow.
Publish web apps to Chrome Web Store
August 19, 2016
October 28, 2019
You can no longer publish web apps to the Chrome Web Store. The Chrome
Web Store
deprecated Chrome apps in 2016 and they are now only available for
ChromeOS devices. This change includes published Apps Script web apps.
Previously published web apps are no longer discoverable in the
Chrome Web Store.
Android Add-ons
January 30, 2019
New Android add-ons can't be reviewed or published.
Existing Android add-ons continue to function.
Fusion Tables advanced service
December 11, 2018
December 3, 2019
Service no longer functions.
JDBC connections to Google Cloud SQL databases using
jdbc:google:rdbms
April 3, 2018
April 2019
JDBC connections that use a jdbc:google:rdbms:subname URL
connectivity path to a Google Cloud SQL database no longer function.
jdbc:google:mysql:subname URL connectivity paths and
connections made using the generic IP method are unaffected. See
Creating Google Cloud SQL connections
for migration instructions.
SandboxMode.NATIVE
SandboxMode.EMULATED
Oct 13, 2015
Nov 12, 2015
All new scripts now default to IFRAME
sandbox mode unless NATIVE mode is explicitly specified.
Dec 10, 2015
EMULATED mode was shut down. Any scripts that
explicitly request EMULATED mode now default to
IFRAME mode.
Apr 28, 2016
All scripts, including existing ones, now default to
IFRAME sandbox mode unless NATIVE mode is
explicitly specified.
Jul 6, 2016
NATIVE mode was shut down. All HTML served from the HTML
Service now uses IFRAME mode, no matter what mode is
specified.
OAuthConfig
March 4, 2015
July 6, 2015
Class is longer available and existing scripts do not function.
DocsList service
Dec 11, 2014
April 20, 2015
Service no longer functions.
UI service
June 30, 2015
Service will no longer appear in autocomplete, although existing
scripts should still function.
July 15, 2019
Service no longer functions.
Domain service
May 15, 2014
Dec 11, 2014
Service no longer functions.
ScriptDB service
Dec 18, 2014
Service no longer functions.
Finance service
Feb 25, 2014
Oct 21, 2014
Service no longer functions.
DeckPanel
Apr 15, 2013
Apr 10, 2014
Widget no longer functions.
DecoratedPopupPanel
DockLayoutPanel
DockPanel
StackLayoutPanel
TabLayoutPanel
Old XML service
Jul 9, 2013
Service no longer appears in autocomplete, although existing
scripts should still function.
SOAP service
E4X support
Feature is no longer supported, although existing scripts should still
function.
Hyperlink
Mar 13, 2013
Sep 16, 2013
Widget no longer functions.
Inline Hyperlink
LayoutPanel
RichTextArea
GUI Builder
Oct 2, 2013
No access to GUI Builder, though existing components should function.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
