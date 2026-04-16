---
title: "Date shifting \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-date-shifting
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-date-shifting
  title: "Date shifting \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Date shifting
Stay organized with collections
Save and categorize content based on your preferences.
Dates are a very common type of data. In cases where dates can be considered
sensitive data or personally identifiable information (PII), you may need to
generalize, obfuscate, or redact them.
One method for doing this is generalization, or bucketing .
Depending on the use case and configuration, though, bucketing can remove the
utility in the dates. For example, if you generalize all dates to just a year,
then you could lose the order in which events happen within that year. An
alternate method for obfuscating dates that addresses this problem is
date shifting .
Date shifting techniques randomly shift a set of dates but preserve the sequence
and duration of a period of time. Shifting dates is usually done in context to
an individual or an entity. That is, each individual's dates are shifted by
an amount of time that is unique to that individual.
Date shifting example
Consider the following data:
user_id
date
action
1
2009-06-09
run
1
2009-06-03
walk
1
2009-05-23
crawl
2
2010-11-03
crawl
2
2010-11-22
walk
...
...
...
If you generalize these dates to year, then you get:
user_id
date_year
action
1
2009
run
1
2009
walk
1
2009
crawl
2
2010
crawl
2
2010
walk
...
...
...
But now you've lost any sense of the sequence per user.
Instead try date shifting:
user_id
date
action
1
2009-07-17
run
1
2009-07-11
walk
1
2009-06-30
crawl
2
2011-01-26
crawl
2
2011-02-14
walk
...
...
...
Note how the dates are different but the sequence and duration are preserved.
The magnitude that the dates were shifted was different between user_id s 1 and
2.
Date shifting in Sensitive Data Protection
A JSON object to configure this for Sensitive Data Protection's
content.deidentify
method follows:
deidentify_config {
record_transformations {
field_transformations {
fields {
name: "date"
}
primitive_transformation {
date_shift_config {
upper_bound_days: 100
lower_bound_days: -100
entity_field_id {
name: "user_id"
}
crypto_key {
unwrapped {
key: "123456789012345678901234567890ab"
}
}
}
}
}
}
}
The upper and lower bounds of the shift are specified by the upper_bound_days
and lower_bound_days values, respectively. The context or scope that that
shift will apply to is based on the entity_id_field value, which in this case
is "user_id" .
Note the use of a crypto_key as well. This is similar to how it's
used in pseudonymization . The key will allow you
to keep integrity of these date shifts across multiple requests or data runs.
Warning: For better security in production environments, use a
KmsWrappedCryptoKey
instead of an unwrapped key as illustrated in this example.
Resources
For more information about how to de-identify data using date shifting and
other methods in Sensitive Data Protection, see:
De-identifying sensitive data in text content
For API reference information about primitive transformations in
Sensitive Data Protection, see:
DeidentifyConfig
object: The object in which you configure de-identification options.
PrimitiveTransformations
object: Date shifting is a "primitive transformation" in
Sensitive Data Protection.
DateShiftConfig
object: Object with which to configure the
PrimitiveTransformations
object. By specifying the DateShiftConfig object, you can shift dates
by a random number of days.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
