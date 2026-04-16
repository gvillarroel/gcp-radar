---
title: "Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview
  title: "Standard library overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Standard library overview
Stay organized with collections
Save and categorize content based on your preferences.
The Workflows standard library modules allow you to easily
construct arguments for services and process responses. There is no need to
import or load libraries in a workflow—library functions work out of the box.
All functions can be called using call steps, but only non-blocking functions
can be used inside an expression. For example, HTTP calls, sys.sleep , and
sys.log cannot be used inside an expression. For more information, see
Blocking calls .
To optimize usage, you should understand which functions are considered a step
and count towards the maximum steps limit. For more information, see
Optimize usage .
Workflows also includes frequently used functions, such as for
data type and format conversions. See
Expression helpers .
Generate random identifiers or numbers
You can use uuid.generate
to return a random 128‑bit universally unique identifier (UUID) in string
form.
You can use
sys.now
to generate multiple random numbers. (The function returns a floating point
number with nanosecond precision.)
If you need only one number, use
sys.get_env
to retrieve the workflow's execution identifier.
If a unique ID is needed, you can use string() to convert the number
returned from sys.now to a string and combine it with the execution ID; for
example, some_execution_id1635892223.4459958 .
Optionally, you can
use a Cloud Run function to generate a number
and call the Cloud Run function from your workflow.
Expression helpers
Built-in expression helper functions.
Conversion functions
Convert values from one data type to another.
Functions
double()
Accepts an attribute of type string or integer and returns a double.
int()
Accepts an attribute of type string or double and returns an integer.
string()
Accepts an attribute of type integer, double, or boolean and returns a string.
Data type functions
Operate on lists, maps, and strings.
Functions
in()
Checks whether a given key is present in a list or map.
keys()
Accepts an attribute of type map and returns a list of key elements in the map.
len()
Computes the length of value according to its type.
Conditional functions
Support conditions within expressions.
Functions
default(val, defaultVal)
Returns a value if it is not null; otherwise returns a default value.
if(condition, ifTrue, ifFalse)
Evaluates a condition and returns one of two arguments depending
on what the condition evaluates to.
Type functions
Return data type.
Functions
get_type(arg)
Returns a string indicating the data type of the argument.
Module: base64
Base64 encoding/decoding.
Functions
decode
Decodes given Base64-encoded string to bytes.
encode
Encodes given bytes to Base64 text.
Module: events
Events support.
Functions
await_callback
Waits for a callback to be received at the given endpoint.
create_callback_endpoint
Creates a callback endpoint expecting the specified HTTP method.
Module: experimental.executions
Execution management.
Caution: The behavior of routines in this module might change, and they might
not be supported in the future.
Instead of using experimental.executions.map to support parallel work, we
recommend you
execute workflow steps in parallel .
If you are already using experimental.executions.map , you can
migrate your workflow to use parallel steps .
Functions
execution_error
Raised when a workflow execution finishes with an error or is cancelled.
map
Starts workflow executions and waits for all of them to finish.
run
Starts a workflow execution and waits for it to finish.
Module: hash
Common hashing algorithms.
Functions
compute_checksum
Computes checksum using a given hashing algorithm.
compute_hmac
Computes the hash-based message authentication code (HMAC) for data given a secret key and hashing algorithm.
Module: http
HTTP/S request support.
Functions
default_retry_predicate
Simple default retry predicate for idempotent targets.
default_retry_predicate_non_idempotent
Simple default retry predicate for non-idempotent targets.
delete
Sends an HTTP DELETE request to the specified URL.
get
Sends an HTTP GET request to the specified URL.
patch
Sends an HTTP PATCH request to the specified URL.
post
Sends an HTTP POST request to the specified URL.
put
Sends an HTTP PUT request to the specified URL.
request
Sends an HTTP request.
Objects
default_retry
Simple default retry policy for idempotent targets.
default_retry_non_idempotent
Simple default retry policy for non-idempotent targets.
Module: json
JSON encoding/decoding.
Functions
decode
Decodes given JSON bytes (assuming UTF-8), or a string, into an object.
encode
Encodes given input object to JSON bytes, using UTF-8 charset.
encode_to_string
Encodes given object to a JSON string.
Module: list
List utility.
Functions
concat
Creates a copy of a list with a new element concatenated at the end.
prepend
Creates a copy of a list with a new element added to the beginning.
Module: map
Map utility.
Functions
delete
Takes a map, creates a copy of the map, and removes the item with the specified key.
get
Performs a safe lookup on a map, returning null if the key is not found.
merge
Takes two maps, creates a copy of the first map, and adds the items from the second map to the copy.
merge_nested
Takes two maps, creates a copy of the first map, and recursively adds items from the second map to the copy.
Module: math
Math utility.
Functions
abs
Returns the absolute value of a number.
floor
Returns the floor of a number.
max
Returns the maximum of two numbers.
min
Returns the minimum of two numbers.
Module: retry
Support for retries.
Functions
always
Convenience retry condition that retries on any error.
never
Convenience retry condition that retries on no error at all.
Objects
default_backoff
Simple default truncated exponential backoff policy.
Module: sys
Common system interface, with platform-dependent implementation.
Functions
get_env
Retrieves the value of the specified environment variable.
log
Writes one of data , text , or json to the log at specified severity.
now
Returns Unix time, as a floating-point number.
sleep
Suspends execution for the given number of seconds.
sleep_until
Suspends execution until the given time.
Module: text
Text processing.
To concatenate a string, see
Strings .
Functions
decode
Decodes given data to string, assuming the specified character set.
encode
Encodes given text to bytes, using the specified character set.
find_all
Finds the index of all instances of a substring in a string.
find_all_regex
Finds all matches of a regular expression in a string.
match_regex
Reports whether a string contains a match of a regular expression.
replace_all
Replaces all instances of a substring with a new string.
replace_all_regex
Replaces all matches of a regular expression with a new string.
split
Splits the source string into a list of all substrings between each instance of the separator.
substring
Extracts the substring between two zero-based indexes of a source string.
to_lower
Returns a string with all Unicode letters mapped to their lowercase.
to_upper
Returns a string with all Unicode letters mapped to their uppercase.
url_decode
Returns a string with pluses and percent-escaped characters converted to UTF-8.
url_encode
Returns a string with percent-encoded reserved characters, including spaces.
url_encode_plus
Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
Module: time
Time-related utility functions.
Functions
format
Formats the given timestamp as a human-readable string.
parse
Parses the given RFC 3339-compatible string into a timestamp.
Module: uuid
UUID utility.
Functions
generate
Returns a random universally unique identifier (UUID).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
