---
title: "Review GitHub code using Gemini Code Assist \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/review-repo-code
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/review-repo-code
  title: "Review GitHub code using Gemini Code Assist \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Review GitHub code using Gemini Code Assist
Stay organized with collections
Save and categorize content based on your preferences.
Gemini Code Assist on GitHub brings the power of
Gemini to the pull request process by acting as a code reviewer.
Gemini Code Assist on GitHub uses a
Gemini-powered agent that automatically summarizes pull
requests and provides in-depth code reviews, speeding up reviews and
increasing the quality of code.
Once you've set up Gemini Code Assist on GitHub ,
you can invoke Gemini Code Assist at any stage of the pull
request to review the code. You can interact with
Gemini Code Assist in the pull request comments directly by:
Asking clarifying questions on the review that
Gemini Code Assist creates.
Prompting Gemini Code Assist by adding the /gemini tag to
your comments to ask questions in the context of the pull request.
Gemini Code Assist will automatically retrieve helpful
information from the repository and pull request to perform its tasks.
This document is intended for developers of all skill levels. It assumes that
you have a working knowledge of GitHub.
Consumer version and enterprise version
Important: The enterprise version of Gemini Code Assist on
GitHub is a separate and distinct product from
Gemini Code Assist Enterprise .
Gemini Code Assist on GitHub is available in a consumer
version, which you install directly in GitHub, and an enterprise
version, which you install through Google Cloud.
The following table summarizes the differences between the consumer version and
enterprise version:
Consumer version
Enterprise version (Preview)
Setup
Directly in GitHub
Managed through Google Cloud
Terms of service
Google terms of service
Google Cloud terms of service
Quotas
33 pull requests per day
100+ pull requests per day
Managing configurations
Per-repository within GitHub
All repositories associated with an account using the settings page
Per-repository within GitHub
Across multiple repositories using Google Cloud
Adding a style guide
Per-repository within GitHub
Per-repository within GitHub
Across multiple repositories using Google Cloud
GitHub support
GitHub
GitHub
GitHub Enterprise Server
GitHub Enterprise Cloud
Considerations
Gemini Code Assist on GitHub does not generate
summaries or code suggestions for any files located within the
.github/workflows directory. This exclusion helps prevent the introduction
of potentially insecure configurations to the repository.
The enterprise version uses a
Developer Connect connection
to connect your GitHub repositories to Google Cloud.
This Developer Connect connection is always created in the region
us-east1 .
This Developer Connect connection must be created using the
Code Assist Source Code Management section found in
Gemini Code Assist Agents & Tools . For instructions,
see Set up Gemini Code Assist on GitHub .
What's next
Set up Gemini Code Assist on GitHub .
Use Gemini Code Assist on GitHub .
Learn how to
customize Gemini Code Assist on GitHub behavior .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-23 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-23 UTC."],[],[]]
