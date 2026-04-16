---
title: "Customize Gemini Code Assist behavior in GitHub \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/customize-repo-review
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/customize-repo-review
  title: "Customize Gemini Code Assist behavior in GitHub \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Customize Gemini Code Assist behavior in GitHub
Stay organized with collections
Save and categorize content based on your preferences.
You can modify
Gemini Code Assist on GitHub
behavior for individual repositories by adding a config.yaml file to a
.gemini/ folder located in the root of the repository. The config.yaml file
contains various configurable features that you can enable or disable. You can
perform group configurations across multiple repositories
for a subset of Gemini Code Assist on GitHub behaviors.
Gemini Code Assist also supports adding a styleguide.md file
to the .gemini/ folder, which instructs Gemini Code Assist with
some specific rules that you want it to follow when performing a code review.
For more information about style guides for Gemini Code Assist,
see Code review style guide .
Configuration fields
This section describes considerations for specific customizable fields in
Gemini Code Assist on GitHub. For a complete listing of
fields, see the config.yaml schema .
code_review: comment_severity_threshold : This field sets the minimum
severity for which Gemini Code Assist posts comments. For
example, if you have set code_review: comment_severity_threshold: HIGH ,
Gemini Code Assist won't provide pull request comments for
issues it considers to be of LOW or MEDIUM severity, such as minor
refactorings. Gemini Code Assist determines the severity of a
comment based on the type and significance of the issue under consideration,
with violations of your
custom style guide
typically meeting or exceeding the severity threshold.
ignore_patterns : This field uses
glob patterns .
When interacting with the repository, Gemini Code Assist
ignores files that match any pattern in this list.
memory_config : This field is applicable if you have previously
enabled improved response quality for multiple
repositories. When you enable improved response quality for multiple
repositories, you can set memory_config: disabled: true for a specific
repository within the grouping, which disables the feature for that
repository.
config.yaml schema
The following code snippet is the schema for the config.yaml file. It
defines all of the possible configuration options and their accepted values:
$ schema : "http://json-schema.org/draft-07/schema#"
title : RepoConfig
description : Configuration for Gemini Code Assist on a repository . All fields are optional and have default values .
type : object
properties :
have_fun :
type : boolean
description : Enables fun features such as a poem in the initial pull request summary . Default : false .
ignore_patterns :
type : array
items :
type : string
description : A list of glob patterns for files and directories that Gemini Code Assist should ignore . Default : [] .
memory_config :
type : object
description : Configuration for persistent memory , which is used to improve responses .
properties :
disabled :
type : boolean
description : Whether to disable persistent memory for this specific repository . Default : false .
code_review :
type : object
description : Configuration for code reviews . All fields are optional and have default values .
properties :
disable :
type : boolean
description : Disables Gemini from acting on pull requests . Default : false .
comment_severity_threshold :
type : string
enum :
- LOW
- MEDIUM
- HIGH
- CRITICAL
description : The minimum severity of review comments to consider . Default : MEDIUM .
max_review_comments :
type : integer
format : int64
description : The maximum number of review comments to consider . Use - 1 for unlimited . Default : - 1.
pull_request_opened :
type : object
description : Configuration for pull request opened events . All fields are optional and have default values .
properties :
help :
type : boolean
description : Posts a help message on pull request open . Default : false .
summary :
type : boolean
description : Posts a pull request summary on the pull request open . Default : false .
code_review :
type : boolean
description : Posts a code review on pull request open . Default : true .
include_drafts :
type : boolean
description : Enables agent functionality on draft pull requests . Default : true .
config.yaml example
The following code snippet is an example of a config.yaml file. In this
example, each property is set to the default value used by
Gemini Code Assist. You can use this snippet as a template to
create your own config.yaml file:
have_fun : false
memory_config :
disabled : false
code_review :
disable : false
comment_severity_threshold : MEDIUM
max_review_comments : -1
pull_request_opened :
help : false
summary : false
code_review : true
include_drafts : true
ignore_patterns : []
Manage configurations across multiple repositories
Some aspects of Gemini Code Assist on GitHub can be
managed across multiple repositories:
If you have the consumer version, you can toggle certain settings for all
repositories that are associated with an account.
If you have the enterprise version, you can toggle certain settings for
multiple repositories grouped by a Developer Connect
connection. When you do, you manage their collective settings through the
Google Cloud console.
If a repository is managed as part of a group but also has its own
config.yaml , the repository's config.yaml settings override the group
settings.
For specific setting behavior and exceptions,
review the config.yaml schema .
The following steps show how to control one set of configurations across
multiple repositories. These steps assume you have previously
set up Gemini Code Assist on GitHub .
Consumer
In Gemini Code Assist, go to the settings page.
Go to settings
If prompted, click Log in with GitHub and follow the prompts to sign
in to GitHub from within Gemini Code Assist.
In the Gemini page, select the account you want to work with, review
the terms of service, and click Continue .
In the Free agent page, update the settings as needed.
Click Save .
Enterprise
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the General
Service Terms section of the
Service Specific Terms for Google Cloud .
Pre-GA features are available "as is" and might have limited support. For
more information, see the
Google Cloud launch stage descriptions .
In the Google Cloud console, go to the Gemini Code Assist
Agents & Tools page.
Go to Agents & Tools
In the Agents section, locate the
Code Assist Source Code Management card, and click Advanced .
The Edit Code Assist Source Code Management pane opens.
In the Connections table, click the name of the connection that you
want to apply a configuration to.
The details page for the connection opens.
In the Settings tab, update the settings that you want to change.
Note: If you want to enable Improve response quality , you shouldn't
place your Google Cloud project within a
VPC Service Controls service perimeter .
Click Save .
What's next
Add a style guide
for Gemini Code Assist in GitHub.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
