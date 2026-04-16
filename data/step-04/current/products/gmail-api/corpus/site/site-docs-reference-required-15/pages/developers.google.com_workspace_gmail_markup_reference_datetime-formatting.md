---
title: "DateTime Formatting \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/datetime-formatting
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/go-to-action
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/datetime-formatting
  title: "DateTime Formatting \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
DateTime Formatting
Stay organized with collections
Save and categorize content based on your preferences.
DateTime values are expected to be in the ISO 8601 format, for example '2013-02-14T13:15:03-08:00' (YYYY-MM-DDTHH:mm:ssZ).
Below are examples for generating ISO 8601 datetime strings in a few popular programing languages.
Java
Date date = new Date ();
DateFormat df = new SimpleDateFormat ( "yyyy-MM-dd'T'HH:mm:ssZ" );
String dateAsISOString = df . format ( date );
JavaScript
var d = new Date ();
var date = d . toISOString ();
PHP
$objDateTime = new DateTime('NOW');
$isoDate = $objDateTime->format(DateTime::ISO8601);
Python
from datetime import date
d = date . now ()
date = d . isoformat ()
Ruby
require 'time'
d = Time . now
date = d . utc . iso8601
Perl
my $now = time ();
$date = time2isoz ( $now );
C++
time_t now ;
time ( & now );
char buf [ sizeof "2011-10-08T07:07:09Z" ];
strftime ( buf , sizeof buf , "%FT%TZ" , gmtime ( & now ));
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
