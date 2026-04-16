---
title: "Use Gemini Code Assist on GitHub \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/use-code-assist-github
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/use-code-assist-github
  title: "Use Gemini Code Assist on GitHub \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Use Gemini Code Assist on GitHub
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use
Gemini Code Assist on GitHub . This page applies to
both consumer and enterprise versions of Gemini Code Assist
on GitHub.
Before you begin
To complete the tasks in this page, make sure you have
set up Gemini Code Assist on GitHub .
Get pull request summary and feedback
To get an initial review for a pull request from
Gemini Code Assist, create a new pull request.
When you open the new pull request, Gemini Code Assist provides
an initial review. After the review is ready,
gemini-code-assist[bot] is automatically added as a reviewer to the pull
request. Gemini Code Assist adds an issue comment in the
Conversation tab of the pull request with its feedback and proceeds to add
comments about modified portions of the code.
Review comments contain the following information:
Severity of the issue, given as Critical, High, Medium, and Low
Feedback on the issue
Code suggestion that can be committed directly from GitHub
References to a user-provided style guide
Gemini Code Assist does not add comments that have a severity
less than the minimum severity threshold that is
set for the repository .
Manually invoke Gemini Code Assist
Gemini Code Assist listens to comments from any pull request
contributor, and decides whether it should respond.
To manually invoke Gemini Code Assist, you can use the
following commands in the main comments page on the pull request as an issue
comment.
Command
Description
/gemini summary
Posts a summary of the changes in the pull request
/gemini review
Posts a code review of the changes in the pull request
/gemini
Manually invokes Gemini Code Assist in comments
/gemini help
Overview of the available commands
Manage the Gemini Code Assist settings
Anyone with permissions to modify GitHub App settings for the
organization can manage the Gemini Code Assist app settings. You can
review the permissions provided to the Gemini Code Assist app, manage
repository access, and uninstall the Gemini Code Assist app.
To modify the settings, follow these steps:
On GitHub, click your profile photo and then click Settings .
In the Integrations section, click Applications .
A list of GitHub Apps is displayed.
Beside Gemini Code Assist, click Configure .
Troubleshooting
If you're using the enterprise version of
Gemini Code Assist on GitHub and you're not receiving
responses from Gemini Code Assist, it might be because the
Google Cloud project that you used during setup isn't connected to a
valid billing account. You should
verify the billing status of your project
and, if necessary, connect your project to a valid billing account.
Note that Developer Connect has a large
free tier , and there are
no charges for using the enterprise version of Gemini Code Assist
on GitHub during Preview. While a valid billing account is
required, it only accrues charges when usage goes over the free tier limits.
What's next
Learn more about Gemini Code Assist on GitHub .
Set up Gemini Code Assist on GitHub .
Learn how to
customize Gemini Code Assist on GitHub behavior .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
