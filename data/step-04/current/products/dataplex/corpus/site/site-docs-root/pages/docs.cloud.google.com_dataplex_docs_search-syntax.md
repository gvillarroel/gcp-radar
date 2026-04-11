---
title: "Search syntax for Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/search-syntax
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/search-syntax
  title: "Search syntax for Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Search syntax for Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the syntax for both Knowledge Catalog (formerly Dataplex Universal Catalog)
keyword search as well as natural language AI searches.
Knowledge Catalog lets you discover, centrally catalog, manage, and understand
your organization's data. To efficiently find specific data assets within your
data catalog, you can use powerful search queries. The syntax for search queries
includes:
Simple search: How to find data assets using a single search term.
Qualified predicates: How to refine your search using specific metadata fields
like name, location, or description.
Aspect search: How to search for entries based on their attached business and
technical metadata.
Logical operators: How to combine multiple search criteria using AND and OR to
create complex queries. By understanding this syntax, you can quickly locate the
data you need.
Before you begin
Understand Knowledge Catalog entry groups, entries, entry links, aspects,
entry types, entry link types, and aspect types. See
About metadata management in Knowledge Catalog .
Knowledge Catalog offers two search modes: keyword search and natural
language search.
Keyword search lets you find resources using specific keywords, filters, and a
defined syntax.
Natural language search leverages AI to understand semantic search queries. It
lets you find resources using everyday language, eliminating the need for
complex syntax.
This document covers syntax for both keyword and natural language search.
To launch a Knowledge Catalog search query in the
Google Cloud console, go to the Knowledge Catalog Search page and
select Knowledge Catalog as the search platform.
Go to Search
For more information, see
Search for resources in Knowledge Catalog .
Free-text search
You can find assets by entering a term or phrase without any specific syntax.
Knowledge Catalog performs a broad search by matching your query
against several metadata fields, including the following:
Name, display name, or description of a resource
Type of a resource
Project ID
Overview description
Column name (or nested column name) in the
schema of a resource
Column description
Fully qualified name
Contacts
Aspects
Search with query syntax
For more precise searches, you can construct a query using specific syntax,
including qualifiers, logical operators, and aspect searches.
Qualified predicates
You can qualify a predicate by prefixing it with a key that restricts the
matching to a specific piece of metadata:
An equal sign ( = ) restricts the search to an exact match.
A colon ( : ) after the key matches the predicate to either a substring or a
token within the value in the search results.
Tokenization splits the stream of text into a series of tokens, with each
token usually corresponding to a single word.
For example:
name:foo selects resources with names that contain the foo substring, such as
foo1 and barfoo .
description:foo selects resources with the foo token in the description,
such as bar and foo .
location=foo matches resources in a specified location with foo as
the location name.
The behavior of these qualifiers can vary slightly between search modes,
as detailed in the following sections.
Keyword search
The predicate keys type , system , location , and orgid support only the
exact match ( = ) qualifier, not the substring qualifier ( : ). For example,
type=foo or orgid=number .
Knowledge Catalog supports the following qualifiers for keyword search:
Qualifier
Description
name:x
Matches x as a substring of the resource ID.
displayname:x
Match x as a substring of the resource display name.
column:x
Matches x as a substring of the column name (or nested
column name) in the schema of the resource.
description:x
Matches x as a token in the resource description.
label:bar
Matches BigQuery resources that have a label (with some
value) and the label key has bar as a substring.
label=bar
Matches BigQuery resources that have a label (with
some value) and the label key equals bar as a string.
label:bar:x
Matches x as a substring in the value of a label with
key bar attached to a BigQuery resource.
label=foo:bar
Matches BigQuery resources where the key equals
foo and the key value equals bar .
label.foo=bar
Matches BigQuery resources where the key equals
foo and the key value equals bar .
label.foo
Matches BigQuery resources that have a label whose
key equals foo as a string.
type= TYPE
Matches resources of a specific entry type or its type alias.
projectid:bar
Matches resources within Google Cloud projects that match
bar as a substring in the ID.
parent:x
Matches x as a substring of the hierarchical path of a
resource. The parent path is a fully_qualified_name of
the parent resource.
orgid=number
Matches resources within a Google Cloud organization with
the exact ID value of number .
system= SYSTEM
Matches resources from a specified system.
location= LOCATION
Matches resources in a specified location with an exact name.
For example, location=us-central1 matches assets hosted
in Iowa.
BigQuery Omni assets support this qualifier by using the
BigQuery Omni location name .
For example,
location=aws-us-east-1 matches BigQuery Omni
assets in Northern Virginia.
createtime
Finds resources that were created within, before, or after a given
date or time.
For example:
createtime:2019-01-01 matches resources created on
2019-01-01.
createtime<2019-02 matches resources created
before 2019-02-01T00:00:00.
createtime>2019-02 matches resources created
after 2019-02-01T00:00:00.
Timestamp format: YYYY-MM-DDThh:mm:ss
All timestamps must be in GMT; time zones are not supported. Partial
timestamps, hyphen ( - ) date separators, and slash
( / ) date separators are supported.
For example:
2010-10-22T05:36:24
2010-10-22T05:36
2010-10-22T05
2010-10-22
2010-10
2010
2010/10/22
updatetime
Finds resources that were updated within, before, or after a given
date or time.
For example:
updatetime:2019-01-01 matches resources updated on
2019-01-01.
updatetime<2019-02 matches resources updated
before 2019-02-01T00:00:00.
updatetime>2019-02 matches resources updated
after 2019-02-01T00:00:00.
Timestamp format: YYYY-MM-DDThh:mm:ss
All timestamps must be in GMT; time zones are not supported. Partial
timestamps, hyphen ( - ) date separators, and slash
( / ) date separators are supported.
For example:
2010-10-22T05:36:24
2010-10-22T05:36
2010-10-22T05
2010-10-22
2010-10
2010
2010/10/22
fully_qualified_name:x
Matches x as a substring of fully_qualified_name .
fully_qualified_name=x
Matches x as fully_qualified_name .
Natural language search
The predicate keys type , system , location , and description , and aspect
search (excluding has ) support only the exact match ( = ) qualifier, not the
substring qualifier ( : ). For example, type=foo .
Knowledge Catalog supports the following qualifiers for natural
language search:
Qualifier
Description
name:x
Matches x as a substring of the resource ID or resource
display name.
displayname:x
Match x as a substring of the resource display name.
column:x
Matches x as a substring of the column name (or nested
column name) in the schema of the resource.
description:x
Matches x as a token in the resource description.
labels:bar
Matches BigQuery resources that have a label (with some
value) and the label key has bar as a substring.
labels=bar
Matches BigQuery resources that have a label (with
some value) and the label key equals bar as a string.
labels.bar:x
Matches x as a substring in the value of a label with
key bar attached to a BigQuery resource.
labels.foo=bar
Matches BigQuery resources where the key equals
foo and the key value equals bar .
type= TYPE
Matches resources of a specific entry type or its type alias.
projectid:bar
Matches resources within Google Cloud projects that match
bar as a substring in the ID.
parent:x
Matches x as a substring of the hierarchical path of a
resource.
system= SYSTEM
Matches resources from a specified system.
location= LOCATION
Matches resources in a specified location with an exact name.
For example, location=us-central1 matches assets hosted
in Iowa.
BigQuery Omni assets support this qualifier by using the
BigQuery Omni location name .
For example,
location=aws-us-east-1 matches BigQuery Omni
assets in Northern Virginia.
createtime
Finds resources that were created within, before, or after a given
date or time.
For example:
createtime:2019-01-01 matches all resources created on
2019-01-01.
createtime<2019-02 matches all resources created
before 2019-02-01T00:00:00.
createtime>2019-02 matches all resources created
after 2019-02-01T00:00:00.
createtime>-30d matches all resources created in
the last 30 days.
createtime<=-30d matches all resources created
30 days ago or earlier.
createtime<=-1d matches all resources created
on the previous day.
Timestamp format: YYYY-MM-DDThh:mm:ss
All timestamps must be in GMT; time zones are not supported. Partial
timestamps, hyphen ( - ) date separators, and slash
( / ) date separators are supported.
For example:
2010-10-22T05:36:24
2010-10-22T05:36
2010-10-22T05
2010-10-22
2010-10
2010
2010/10/22
updatetime
Finds resources that were updated within, before, or after a given
date or time.
For example:
updatetime:2019-01-01 matches all resources updated on
2019-01-01.
updatetime<2019-02 matches all resources updated
before 2019-02-01T00:00:00.
updatetime>2019-02 matches all resources updated
after 2019-02-01T00:00:00.
updatetime>-30d matches all resources updated in the
last 30 days.
updatetime<-30d matches all resources updated 30
days ago or earlier.
updatetime=-1d matches all resources updated on the
previous day.
updatetime>=-30d matches all resources updated in
the last 30 days.
updatetime<=-30d matches all resources updated 30
days ago or earlier.
Timestamp format: YYYY-MM-DDThh:mm:ss
All timestamps must be in GMT; time zones are not supported. Partial
timestamps, hyphen ( - ) date separators, and slash
( / ) date separators are supported.
For example:
2010-10-22T05:36:24
2010-10-22T05:36
2010-10-22T05
2010-10-22
2010-10
2010
2010/10/22
Aspect search
To search for entries based on their attached aspects, use the following query
syntax.
Note: Aspect search queries don't return results for aspects on entry links. Note: The substring match tries to match against a limited number of aspects. If
you can't find the entry by using a fragment of the path, then use the full path
to narrow the search and increase recall.
Keyword search
Qualifier
Description
aspect:x
Matches x as a substring of the full path to the aspect
type of an aspect that is attached to the entry, in the format
projectid.location. ASPECT_TYPE_ID
aspect=x
Matches x as the full path to the aspect
type of an aspect that is attached to the entry, in the format
projectid.location. ASPECT_TYPE_ID
aspect:x OPERATOR value
Searches for aspect field values. Matches x as a substring
of the full path to the aspect type and field name of an aspect that is
attached to the entry, in the format
projectid.location. ASPECT_TYPE_ID . FIELD_NAME
The list of supported operators depends on the type of field in the
aspect, as follows:
String : = (exact match) and : (substring)
All number types : = , : ,
< , > , <= ,
>= , => , =<
Enum : =
Datetime : same as for numbers, but the values to compare
are treated as datetimes instead of numbers
Boolean : =
Only top-level fields of the aspect are searchable.
For example, all of the following queries match entries where the value
of the is-enrolled field in the employee-info
aspect is true . Other entries that match on the substring
are also returned.
aspect:example-project.us-central1.employee-info.is-enrolled=true
aspect:example-project.us-central1.employee=true
aspect:employee=true
Natural language search
Qualifier
Description
has:x
Matches x as a substring of the full path to the aspect
type of an aspect that is attached to the entry, in the format
projectid.location. ASPECT_TYPE_ID
has=x
Matches x as the full path to the aspect
type of an aspect that is attached to the entry, in the format
projectid.location. ASPECT_TYPE_ID
x OPERATOR value
Searches for aspect field values. Matches x as a substring
of the full path to the aspect type and field name of an aspect that is
attached to the entry, in the following formats:
Syntax for system aspect types:
ASPECT_TYPE_ID . FIELD_NAME
dataplex-types. ASPECT_TYPE_ID . FIELD_NAME
dataplex-types.LOCATION. ASPECT_TYPE_ID . FIELD_NAME
For example, the following queries match entries where the value of
the type field in the bigquery-dataset aspect
is default :
bigquery-dataset.type=default
dataplex-types.bigquery-dataset.type=default
dataplex-types.global.bigquery-dataset.type=default
Syntax for custom aspect types:
If the aspect is created in the global region:
PROJECT_ID . ASPECT_TYPE_ID . FIELD_NAME
If the aspect is created in a specific region:
PROJECT_ID . REGION . ASPECT_TYPE_ID . FIELD_NAME
For example, the following queries match entries where the value of
the is-enrolled field in the employee-info
aspect is true .
example-project.us-central1.employee-info.is-enrolled=true
example-project.employee-info.is-enrolled=true
The list of supported operators depends on the type of field in the
aspect, as follows:
String : = (exact match)
All number types : = , : ,
< , > , <= ,
>= , => , =<
Enum : =
Datetime : same as for numbers, but the values to compare
are treated as datetimes instead of numbers
Boolean : =
Only top-level fields of the aspect are searchable.
Logical operators
A query can consist of several predicates with logical operators. If you don't
specify an operator, logical AND is implied. For example, foo bar returns
resources that match both predicate foo and predicate bar .
Logical AND and logical OR are supported. For example, foo OR bar .
You can negate a predicate with a - (hyphen) or NOT prefix. For example,
-name:foo returns resources with names that don't match the predicate foo .
Note: In keyword search, logical operators aren't case-sensitive. In natural
language search, logical operators are case-sensitive and must be in uppercase
letters.
Abbreviated syntax
An abbreviated search syntax is also available, using | (vertical bar) for
OR operators and , (comma) for AND operators.
For example, to search for entries inside one of many projects using the OR
operator, you can use the following abbreviated syntax:
projectid:(id1|id2|id3|id4)
The same search without using abbreviated syntax looks like the following:
projectid:id1 OR projectid:id2 OR projectid:id3 OR projectid:id4
To search for entries with matching column names, use the following:
AND : column:(name1,name2,name3)
OR : column:(name1|name2|name3)
This abbreviated syntax works for the
qualified predicates except for label in keyword
search.
What's next
Learn how to search for resources
in Knowledge Catalog
Learn more about metadata management in Knowledge Catalog .
Learn how to enrich entries and entry links with metadata by using aspects .
Learn how to manage entries and ingest custom sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
