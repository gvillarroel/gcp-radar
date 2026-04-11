---
title: "Android game development \_|\_ Android Developers"
url: https://developers.google.com/games/services/reference
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/games/services/reference
source_metadata:
  url: https://developers.google.com/games/services/reference
  title: "Android game development \_|\_ Android Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Android Developers
Google Play
Games dev center
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Google Play Games Services overview
The Google Play Games platform is a unified gaming ecosystem
encompassing Android, ChromeOS, and Windows
PC . Developers use the Google Play Games platform to integrate
Play Games Services social features into their gaming applications.
Play Games Services is the primary interface between the game
application and the Play Games platform. Play Games Services also
provides a centralized Gamer Profile
account that provides consistent player identification across different devices
and form factors.
Get Started
Key capabilities of the Play Games platform
Integrating Play Games Services unlocks platform capabilities that improve user
retention and cross-platform continuity.
Cross-device continuity: Consistent Gamer Profiles across
phones, tablets, and PCs, which lets players resume gameplay seamlessly.
Social and Engagement Features:
Achievements and leaderboards: Recognize accomplishments and
foster competition outside the game.
Play Points: Drives monetization by allowing players to earn and
redeem points for in-game purchases.
Social Graph: Allows players to follow their friends, their
activities and build a social gaming community of their own.
Play Games Sidekick (Beta): Provides an overlay with utilities,
real-time Gemini tips, and engagement tools.
Game benefits and program advantages
The Google Play Games platform provides an extensive array of compelling and
rewarding and engaging mechanics, including leagues, quests, achievements, and
streaks. These features are restricted to titles enrolled in the Level Up
program, a cornerstone of the Google Play Games ecosystem.
Integrate your games with Play Games Services to get instant access to these
features. As the primary method for platform authentication,
Play Games Services links to the full range of features if you follow program
guidelines.
These mechanics are proven to drive significant improvements in acquisition,
retention, engagement, and monetization.
By using the vast Android player
base and participating in the LevelUp program, titles gain increased
discoverability and visibility across multiple Play Games surfaces through these
diverse engagement systems.
What is the difference between platform identity and game identity?
Because Play Games Services has implemented version 2, you must distinguish
between the platform identity and the proprietary in-game Account (IGA)
architecture.
Play Games Platform Identity (Managed by Play Games Services):
This is the player's universal gaming persona on Android. It tracks Play
Social Progress, such as Player XP, Levels, Streaks, and
Achievements. Because it is built into the device, it automatically
recognizes the player when the game starts.
In-game account identity (Managed by the Developer): It is important to
note that Play Games Services does not serve as a primary system for
inventory management or game-state preservation. Developers are expected to
utilize independent "In-Game Identity" solutions—such as Sign in with Google,
Facebook, or custom backend—to manage game progress data.
Importance of Play Games Services to the Platform: Play Games Services v2
operates as a platform connector. It maintains persistent authentication with
the Play Games platform regardless of the specific login method used by the
player. Consequently, this architecture enables the platform to aggregate
gameplay statistics and distribute achievements without disrupting the
developer's internal logic for saving and restoring game progress.
Impact on Games: Play Games Services v2 SDK is a high-level integration
layer for games. Developers don't need to modify existing login flows or systems
to implement it.
Send feedback
Content and code samples on this page are subject to the licenses described in the Content License . Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.
Last updated 2026-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-17 UTC."],[],[]]
