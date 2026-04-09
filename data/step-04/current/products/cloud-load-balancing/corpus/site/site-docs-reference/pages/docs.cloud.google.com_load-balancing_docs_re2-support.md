---
title: "RE2 specifications for URL maps \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/re2-support
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/re2-support
  title: "RE2 specifications for URL maps \_|\_ Cloud Load Balancing \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_cdp_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Reference
Send feedback
RE2 specifications for URL maps
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the requirements and limitations associated with using RE2
syntax for regular expressions in
your URL maps .
RE2 has the following built-in limitations:
RE2 doesn't support arbitrary lookahead or lookbehind assertions, nor does it
support backreferences. Specifically, the following backreference operators
aren't supported:
(?=) - positive lookahead
(?!) - negative lookahead
(?&lt;=) - positive lookbehind
(?&lt;!) - negative lookbehind
\N - backreference where N is an integer
RE2 doesn't recognize \cx as the Control-X character.
RE2 doesn't recognize atomic grouping operators (?>...) and ++
RE2 doesn't recognize \C , \G or \X .
RE2 doesn't recognize conditional subpatterns (?(...)...) , comments
(?#...) , pattern references (?R) (?1) (?P>foo) , or C callouts (?C...) .
In addition to the RE2 limitations described previously, we apply further
restrictions on regular expression syntax by using the following allowlist:
Single character operators are allowed
Groups are allowed to have only submatch operators
Groups are only allowed without repetitions
Character repetition is only allowed in a single regular expression together
with the following:
Empty string operators
Other repetitions
Ranges
Repetitions of ranges
Ranges are only allowed to have the following:
Character range
Digits range
Symbols listed in characters allowed for ranges
Empty string and analogs of empty strings
Operator
Description
^
At beginning of text or line (m=true)
$
At end of text (like \z not \Z) or line (m=true)
\A
At beginning of text
\b
At ASCII word boundary (\w on one side and \W, \A, or \z on the other)
\B
Not at ASCII word boundary
\g
At beginning of subtext being searched
\G
At end of last match
\z
At end of text
Repetitions
Operator
Description
x*
Zero or more x, prefer more
x+
One or more x, prefer more
x?
Zero or one x, prefer one
x{n,m}
N or n+1 or ... or m x, prefer more
x{n,}
N or more x, prefer more
x{n}
Exactly n x
x*?
Zero or more x, prefer fewer
x+?
One or more x, prefer fewer
x??
Zero or one x, prefer zero
x{n,m}?
N or n+1 or ... or m x, prefer fewer
x{n,}?
N or more x, prefer fewer
x{n}?
Exactly n x
Submatch
Operator
Description
(re)
Numbered capturing group (submatch)
(?P<name>re)
Named & numbered capturing group (submatch)
(?<name>re)
Named & numbered capturing group (submatch)
(?:re)
Non-capturing group
(?flags)
Set flags within current group; non-capturing
(?flags:re)
Set flags during re; non-capturing
Ranges
Operator
Description
[]
Ranges
\d
Digits (≡ [0-9])
\D
Not digits (≡ [^0-9])
\s
Whitespace (≡ [\t\n\f\r ])
\S
Not whitespace (≡ [^\t\n\f\r ])
\w
Word characters (≡ [0-9A-Za-z_])
\W
Not word characters (≡ [^0-9A-Za-z_])
[[:alnum:]]
Alphanumeric (≡ [0-9A-Za-z])
[[:alpha:]]
Alphabetic (≡ [A-Za-z])
[[:ascii:]]
ASCII (≡ [\x00-\x7F])
[[:blank:]]
Blank (≡ [\t ])
[[:cntrl:]]
Control (≡ [\x00-\x1F\x7F])
[[:digit:]]
Digits (≡ [0-9])
[[:lower:]]
Lower case (≡ [a-z])
[[:space:]]
Whitespace (≡ [\t\n\v\f\r ])
[[:upper:]]
Upper case (≡ [A-Z])
[[:word:]]
Word characters (≡ [0-9A-Za-z_])
[[:xdigit:]]
Hex digit (≡ [0-9A-Fa-f])
Characters allowed in ranges
Char range
Description
0-9, A-Z, a-z
Alphanumeric
\x00-\x7F
ASCII
0-9A-Fa-f
Hex digits
\t\n\v\f\r
Whitespace
^
Range negation
!"#$%&'()*+,\-.:; ?@[\\\]^_`{|}~
Other characters
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
