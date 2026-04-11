---
title: "Offer AI agents through Google Cloud Marketplace \_|\_ Google Cloud Marketplace\
  \ Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/ai-agents
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/ai-agents
  title: "Offer AI agents through Google Cloud Marketplace \_|\_ Google Cloud Marketplace\
    \ Partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
Develop
Send feedback
Offer AI agents through Google Cloud Marketplace
Stay organized with collections
Save and categorize content based on your preferences.
AI agents are software systems that use AI to pursue goals and complete tasks on
behalf of users. You can use Google Cloud Marketplace to offer AI agents to your
customers that run on Google Cloud, integrated with Gemini Enterprise and
billed by Google.
AI agents from Cloud Marketplace use the Agent2Agent
(A2A) protocol to communicate and collaborate with other AI agents. For more
information, see the
A2A protocol's documentation . For each AI
agent that you offer through Cloud Marketplace, you must create an
Agent Card aligned to the
A2A Agent Card specification .
Your AI agent's Agent Card defines its presence on Cloud Marketplace,
detailing its capabilities and facilitating its coordination with other AI
agents. Agent Cards exist as JSON files stored in Cloud Storage.
After you've created your AI agent's Agent Card, use Producer Portal to
create your AI agent's Cloud Marketplace listing and submit it for review.
After you've published your AI agent, customers can get it from
Cloud Marketplace and run a command to add it to Gemini Enterprise.
Before you begin
If you're new to offering software on Cloud Marketplace,
sign up to become a vendor .
To get access to Producer Portal, complete the
Cloud Marketplace Project Info Form , provided by the Cloud Marketplace team.
Requirements for AI agents
All products that you offer through Cloud Marketplace must comply with the
Cloud Marketplace listing requirements. If you offer AI agents, they must
meet the following additional requirement:
Your AI agents must not include professional services, hardware, or other
non-software components that are billed through Cloud Marketplace.
Pricing models for AI agents
You can choose one of the following pricing models for your AI agent:
Free : Customers only pay for the Google Cloud resources that they
use.
Subscription-based pricing : Customers pay a flat monthly fee for using
your AI agent. For partial months, the cost is prorated.
Usage-based pricing : Customers pay for your AI agent based on measurements
that you choose, called metrics . If you choose a usage-based pricing model,
then your app must measure and report usage information to Google.
Combined pricing : Customers pay a base subscription fee for using your AI
agent, and additional charges based on their usage.
For more information about these pricing models, see
Pricing models for AI agents .
Overview of onboarding an AI agent
Offering an AI agent through Cloud Marketplace involves the following
steps:
Create your AI agent and its Agent Card. For more information about Agent
Cards, see
Agent Cards
in the A2A documentation.
Add your AI agent in Producer Portal .
You use Producer Portal to complete the process of onboarding
your AI agent to Cloud Marketplace.
Add product details
for your AI agent's listing in Producer Portal.
Add pricing information
for your AI agent in Producer Portal. It might take up to four
business days for Google to review your AI agent's pricing model. You can
continue integrating your AI agent while Google reviews the pricing model.
Add your AI agent's Agent Card
in Producer Portal.
Integrate your AI agent with Cloud Marketplace .
The integration includes modifying the frontend and backend of your software
to do the following:
Create accounts for users.
Link the accounts to their Google accounts.
Provide a way for users to sign in using their Google credentials.
Publish your AI agent to Cloud Marketplace .
To publish your AI agent, you submit various parts of your AI agent's listing
for review. The Cloud Marketplace team reviews each submission and works
with you to resolve any issues before approving it. When all of your
submissions are approved, you can publish and launch the product within a few
minutes.
What's next
Review the
A2A Agent Card specification
as you create your AI agent's Agent Card.
Review the available
pricing models for AI agents .
Add your AI agent to
Cloud Marketplace by using Producer Portal.
Next
Pricing models for AI agents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
