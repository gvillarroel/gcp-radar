---
title: "Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Documentation
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Documentation
  title: "Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Documentation
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Page
JSON representation
DocumentationRule
JSON representation
Documentation provides the information for describing a service.
Example:
documentation:
summary: >
The Google Calendar API gives access
to most calendar features.
pages:
- name: Overview
content: (== include google/foo/overview.md ==)
- name: Tutorial
content: (== include google/foo/tutorial.md ==)
subpages:
- name: Java
content: (== include google/foo/tutorial_java.md ==)
rules:
- selector: google.calendar.Calendar.Get
description: >
...
- selector: google.calendar.Calendar.Put
description: >
...
Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded.
Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided.
A number of constructs specific to the API platform are supported in documentation text.
In order to reference a proto element, the following notation can be used:
[fully.qualified.proto.name][]
To override the display text used for the link, this can be used:
[display text][fully.qualified.proto.name]
Text can be excluded from doc using the following notation:
(-- internal comment --)
A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The include directive includes a markdown file from an external source:
(== include path/to/file ==)
The resource_for directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection:
(== resource_for v1.shelves.books ==)
The directive suppress_warning does not directly affect documentation and is documented together with service config validation.
JSON representation
{
"summary" : string ,
"pages" : [
{
object ( Page )
}
] ,
"rules" : [
{
object ( DocumentationRule )
}
] ,
"documentationRootUrl" : string ,
"serviceRootUrl" : string ,
"overview" : string ,
"additionalIamInfo" : string ,
"sectionOverrides" : [
{
object ( Page )
}
]
}
Fields
summary
string
A short description of what the service does. The summary must be plain text. It becomes the overview of the service displayed in Google Cloud Console. NOTE: This field is equivalent to the standard field description .
pages[]
object ( Page )
The top level pages for the documentation set.
rules[]
object ( DocumentationRule )
A list of documentation rules that apply to individual API elements.
NOTE: All service configuration rules follow "last one wins" order.
documentationRootUrl
string
The URL to the root of documentation.
serviceRootUrl
string
Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to.
overview
string
Declares a single overview page. For example:
documentation:
summary: ...
overview: (== include overview.md ==)
This is a shortcut for the following declaration (using pages style):
documentation:
summary: ...
pages:
- name: Overview
content: (== include overview.md ==)
Note: you cannot specify both overview field and pages field.
additionalIamInfo
string
Optional information about the IAM configuration. This is typically used to link to documentation about a product's IAM roles and permissions.
sectionOverrides[]
object ( Page )
Specifies section and content to override the boilerplate content. Currently overrides following sections: 1. rest.service.client_libraries
Page
Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
JSON representation
{
"name" : string ,
"content" : string ,
"subpages" : [
{
object ( Page )
}
]
}
Fields
name
string
The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with . ) can be used as reference to the page in your documentation. For example:
pages:
- name: Tutorial
content: (== include tutorial.md ==)
subpages:
- name: Java
content: (== include tutorial_java.md ==)
You can reference Java page using Markdown reference link syntax: [Java][Tutorial.Java] .
content
string
The Markdown content of the page. You can use
(== include {path}
==)
to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page.
subpages[]
object ( Page )
Subpages of this page. The order of subpages specified here will be honored in the generated docset.
DocumentationRule
A documentation rule provides information about individual API elements.
JSON representation
{
"selector" : string ,
"description" : string ,
"deprecationDescription" : string ,
"disableReplacementWords" : string
}
Fields
selector
string
The selector is a comma-separated list of patterns for any element such as a method, a field, an enum value. Each pattern is a qualified name of the element which may end in "*", indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern "*" is used.
description
string
Description of the selected proto element (e.g. a message, a method, a 'service' definition, or a field). Defaults to leading & trailing comments taken from the proto source definition of the proto element.
deprecationDescription
string
Deprecation description of the selected element(s). It can be provided if an element is marked as deprecated .
disableReplacementWords
string
String of comma or space separated case-sensitive words for which method/field name replacement will be disabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
