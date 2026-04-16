---
title: "Password policy flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags
  title: "Password policy flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
Password policy flags
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the database flags that AlloyDB for PostgreSQL uses to enforce a set of restrictions specific to their password policy . For a list of all database flags that AlloyDB supports, see Supported database flags .
password.enforce_password_does_not_contain_username
Type Boolean
Default OFF
Instance restarts No
If on , prohibits using a username as part of a password. This password policy
is case sensitive, so if a username is Alex , then a password that contains
alex is allowed.
password.enforce_expiration
Type Boolean
Default OFF
Instance restarts No
Manages a lifetime of a password.
password.enforce_complexity
Type Boolean
Default OFF
Instance restarts No
Enforces the password complexity policy when new passwords must meet the guidelines specified by other password flags.
password.expiration_in_days
Type Integer
Default 90
Valid values 0 ... 10000
Instance restarts No
Requires passwords to be changed within the specified number of days.
password.min_uppercase_letters
Type Integer
Default 0
Valid values 0 ... 10000
Instance restarts No
Sets the minimum number of uppercase letters for a password.
password.max_uppercase_letters
Type Integer
Default 10000
Valid values 0 ... 10000
Instance restarts No
Sets the maximum number of uppercase letters for a password.
password.min_lowercase_letters
Type Integer
Default 0
Valid values 0 ... 10000
Instance restarts No
Sets the minimum number of lowercase letters for a password.
password.max_lowercase_letters
Type Integer
Default 10000
Valid values 0 ... 10000
Instance restarts No
Sets the maximum number of lowercase letters for a password.
password.min_numerical_chars
Type Integer
Default 0
Valid values 0 ... 10000
Instance restarts No
Sets the minimum number of numerical characters for a password.
password.max_numerical_chars
Type Integer
Default 10000
Valid values 0 ... 10000
Instance restarts No
Sets the maximum number of numerical characters for a password.
password.min_special_chars
Type Integer
Default 0
Valid values 0 ... 10000
Instance restarts No
Sets the minimum number of special characters for a password.
password.max_special_chars
Type Integer
Default 10000
Valid values 0 ... 10000
Instance restarts No
Sets the maximum number of special characters for a password.
password.min_pass_length
Type Integer
Default 0
Valid values 0 ... 10000
Instance restarts No
Specifies the minimum number of characters allowed in a password.
password.max_pass_length
Type Integer
Default 10000
Valid values 0 ... 10000
Instance restarts No
Sets the maximum number of characters allowed in a password.
password.notify_expiration_in_days
Type Integer
Default 30
Valid values 0 ... 10000
Instance restarts No
Sets the number of days when a user starts receiving notifications that their password is about to expire.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
