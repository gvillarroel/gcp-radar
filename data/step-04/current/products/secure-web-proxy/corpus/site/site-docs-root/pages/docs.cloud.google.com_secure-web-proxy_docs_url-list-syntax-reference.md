---
title: "UrlList syntax reference \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/url-list-syntax-reference
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/url-list-syntax-reference
  title: "UrlList syntax reference \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Reference
Send feedback
UrlList syntax reference
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains UrlList syntax for Secure Web Proxy.
UrlList lets you create many match entries that you can reuse across multiple
rules.
UrlList syntax supports matching domains in full or by suffix, and URLs with
full path with no parameters or a prefix path.
Supported wildcards
UrlList supports the * asterisk wildcard character, which you can use as a
prefix to match partial subdomains or partial paths.
When you provide partial domains, UrlList matches only complete subdomain
tokens. If a path separator isn't provided, then UrlList matches any path. For
example, if you provide example.com , then UrlList matches example.com/* ,
including all paths in the domain.
How UrlList interprets entries
Secure Web Proxy uses the UrlList patterns that you provide to match against
URLs and then determine whether the URL is allowed or disallowed.
UrlList interprets entries according to the following:
Entries that contain a period ( . ) and a forward-slash ( / ) must be
well-formed URLs. You can include subdomain and path wildcards. The token to
the left of the first / character is interpreted as the top-level domain,
such as .com in google.com/news .
Entries that contain a period ( . ) and that don't contain a forward-slash ( / ) are
interpreted as domains. You can include the subdomain wildcard. The
rightmost token in this case is interpreted as the top-level domain, such as
.xyz in abc.xyz .
All other entries are invalid.
When a UrlList pattern is matched against values that contain a
forward-slash ( / ), such as in request.url() , patterns are interpreted as explained
previously. However, when a UrlList pattern is matched against values without a
/ , such as in host() , only the domain portion of the pattern is matched.
Pattern matching examples
The following table shows example patterns, example URLs that each pattern
matches, and example URLs that each pattern does not match.
Pattern
Matches
Does not match
*example.com
example.com/
server.example.com/
sample.server.example.com/
example.com/path
example.com/path?q=query
example.com/path/subpath
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
*.example.com
server.example.com/
sample.server.example.com/
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/
example.com/path
example.com/path/subpath
example.com
example.com/
example.com/path
example.com/path/subpath
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
server.example.com/
sample.server.example.com/
sample.server.example.com/path/
*server.example.com
server.example.com/
sample.server.example.com/path
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/
example.com/path
example.com/path/subpath
*example.com/
example.com/
server.example.com/
sample.server.example.com/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/path/
example.com/path/subpath
sample.server.example.com/path/
*example.com/path*
example.com/path
example.com/path/subpath
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/
server.example.com/
sample.server.com/
*example.com/path/*
example.com/path/subpath
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/
server.example.com/
sample.server.example.com/
example.com/path
*example.com/path/
sample.server.example.com/path/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
example.com/
sample.example.com/
sample.server.example.com/
example.com/path
example.com/path/subpath
example.com/
example.com/
myexample.com/
example.com.bad.com/
us13.altostrat.com/go/example.com/path
www.google.com/search?q=example.com
server.example.com/
sample.server.example.com/
example.com/path
example.com/path/subpath
sample.server.example.com/path/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
