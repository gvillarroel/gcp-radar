---
title: "Expr \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Expr
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/Expr
  title: "Expr \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Reference
Send feedback
Expr
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec .
Example (Comparison):
title: "Summary size limit"
description: "Determines if a summary is less than 100 chars"
expression: "document.summary.size() < 100"
Example (Equality):
title: "Requestor is owner"
description: "Determines if requestor is the document owner"
expression: "document.owner == request.auth.claims.email"
Example (Logic):
title: "Public documents"
description: "Determine whether the document should be publicly visible"
expression: "document.type != 'private' && document.type != 'internal'"
Example (Data Manipulation):
title: "Notification string"
description: "Create a notification string with a timestamp."
expression: "'New message received at ' + string(document.create_time)"
The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
JSON representation
{
"expression" : string ,
"title" : string ,
"description" : string ,
"location" : string
}
Fields
expression
string
Textual representation of an expression in Common Expression Language syntax.
title
string
Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
description
string
Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
location
string
Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-16 UTC."],[],[]]
