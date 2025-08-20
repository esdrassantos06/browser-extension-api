import { Prisma, PrismaClient } from '../generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const extensionsList: Prisma.ExtensionCreateInput[] = [
  {
    name: 'AdBlock Plus',
    description:
      'Blocks unwanted advertisements and pop-ups to provide a cleaner browsing experience',
  },
  {
    name: 'Dark Reader',
    description:
      'Automatically applies dark themes to websites to reduce eye strain and save battery',
  },
  {
    name: 'Grammarly',
    description:
      'Checks spelling, grammar, and writing style to improve your text across the web',
  },
  {
    name: 'LastPass',
    description:
      'Secure password manager that stores and autofills your passwords across websites',
  },
  {
    name: 'uBlock Origin',
    description:
      'Advanced ad blocker and privacy protection tool with extensive filtering capabilities',
  },
  {
    name: 'Honey',
    description:
      'Automatically finds and applies coupon codes and discounts when shopping online',
  },
  {
    name: 'React Developer Tools',
    description:
      'Browser extension for debugging React applications and inspecting component hierarchy',
  },
  {
    name: 'Momentum',
    description:
      'Beautiful new tab page with to-do lists, weather, and productivity features',
  },
  {
    name: 'Pocket',
    description:
      'Save articles, videos, and web pages to read later across all your devices',
  },
  {
    name: 'Evernote Web Clipper',
    description:
      'Save web content directly to Evernote for organization and note-taking',
  },
  {
    name: 'Bitwarden',
    description:
      'Open-source password manager with secure vault and cross-platform synchronization',
  },
  {
    name: 'Stylus',
    description:
      'Customize website appearance with user-created themes and CSS modifications',
  },
  {
    name: 'Tampermonkey',
    description:
      'User script manager that allows you to run custom JavaScript on websites',
  },
  {
    name: 'Ghostery',
    description:
      'Privacy protection tool that blocks trackers and provides detailed privacy insights',
  },
  {
    name: 'NoScript',
    description:
      'Security-focused extension that blocks JavaScript, Java, and other executable content',
  },
  {
    name: 'Tree Style Tab',
    description:
      'Organizes browser tabs in a hierarchical tree structure for better tab management',
  },
  {
    name: 'Video DownloadHelper',
    description:
      'Downloads videos from various websites and streaming platforms',
  },
  {
    name: 'HTTPS Everywhere',
    description:
      'Forces websites to use secure HTTPS connections when available for enhanced security',
  },
  {
    name: '1Password',
    description:
      'Password manager with secure sharing, breach monitoring, and digital wallet features',
  },
  {
    name: 'Notion Web Clipper',
    description:
      'Save web content directly to Notion for organization and knowledge management',
  },
  {
    name: 'Loom',
    description:
      'Record and share video messages, screen recordings, and presentations instantly',
  },
  {
    name: 'Miro',
    description:
      'Collaborative whiteboard platform for visual thinking and team collaboration',
  },
  {
    name: 'Figma',
    description:
      'Design and prototyping tool for creating user interfaces and interactive designs',
  },
  {
    name: 'Canva',
    description:
      'Graphic design platform for creating social media posts, presentations, and more',
  },
  {
    name: 'Trello',
    description:
      'Project management tool for organizing tasks and collaborating with teams',
  },
  {
    name: 'Slack',
    description:
      'Team communication platform for messaging, file sharing, and collaboration',
  },
  {
    name: 'Discord',
    description:
      'Voice, video, and text communication platform for communities and gaming',
  },
  {
    name: 'Zoom',
    description:
      'Video conferencing platform for meetings, webinars, and virtual events',
  },
  {
    name: 'Google Meet',
    description:
      'Video calling and meeting platform integrated with Google Workspace',
  },
  {
    name: 'Microsoft Teams',
    description:
      'Collaboration platform for chat, meetings, calls, and file sharing',
  },
  {
    name: 'Spotify',
    description:
      'Music streaming service with personalized playlists and podcast content',
  },
  {
    name: 'Netflix',
    description:
      'Streaming service for movies, TV shows, documentaries, and original content',
  },
  {
    name: 'YouTube',
    description:
      'Video sharing platform for watching, uploading, and discovering content',
  },
  {
    name: 'Twitch',
    description:
      'Live streaming platform for gaming, creative content, and entertainment',
  },
  {
    name: 'Reddit Enhancement Suite',
    description:
      'Enhances Reddit browsing experience with additional features and customization',
  },
  {
    name: 'Imagus',
    description:
      'Shows full-size images and videos on hover for faster browsing experience',
  },
  {
    name: 'OneTab',
    description:
      'Saves memory by reducing tab clutter and organizing your browsing sessions',
  },
  {
    name: 'Session Buddy',
    description:
      'Tab manager that helps you save, organize, and restore your browsing sessions',
  },
  {
    name: 'Tab Wrangler',
    description:
      'Automatically closes inactive tabs to keep your browser organized and fast',
  },
  {
    name: 'The Great Suspender',
    description:
      'Suspends inactive tabs to free up memory and improve browser performance',
  },
  {
    name: 'Tab Groups',
    description:
      'Organize tabs into groups for better productivity and tab management',
  },
  {
    name: 'Workona',
    description:
      'Workspace manager that organizes tabs and apps for different projects and tasks',
  },
  {
    name: 'Toby',
    description:
      'Tab manager that organizes your browser tabs into collections for easy access',
  },
  {
    name: 'Raindrop.io',
    description:
      'Bookmark manager with advanced organization, search, and sharing features',
  },
  {
    name: 'Diigo',
    description:
      'Social bookmarking and annotation tool for research and knowledge sharing',
  },
  {
    name: 'Instapaper',
    description:
      'Save and read articles offline with clean formatting and reading features',
  },
  {
    name: 'Feedly',
    description:
      'RSS reader that aggregates news and content from your favorite sources',
  },
  {
    name: 'Inoreader',
    description:
      'RSS reader with advanced features for content curation and organization',
  },
  {
    name: 'Pocket Casts',
    description:
      'Podcast player with advanced features for discovering and managing podcasts',
  },
  {
    name: 'Overcast',
    description:
      'Podcast player with smart speed, voice boost, and playlist management',
  },
  {
    name: 'Castro',
    description:
      'Podcast player with queue management and advanced audio features',
  },
  {
    name: 'Anchor',
    description:
      'Podcast creation and hosting platform for recording and publishing content',
  },
  {
    name: 'Audacity',
    description:
      'Free audio editor for recording, editing, and producing audio content',
  },
  {
    name: 'GarageBand',
    description:
      'Music creation studio for recording, editing, and producing music',
  },
  {
    name: 'Logic Pro',
    description:
      'Professional music production software for recording, editing, and mixing',
  },
  {
    name: 'Pro Tools',
    description:
      'Industry-standard digital audio workstation for professional music production',
  },
  {
    name: 'Ableton Live',
    description:
      'Music production software for live performance and studio recording',
  },
  {
    name: 'FL Studio',
    description:
      'Digital audio workstation for music production and beat making',
  },
  {
    name: 'Reaper',
    description:
      'Affordable digital audio workstation with professional features',
  },
  {
    name: 'Cubase',
    description:
      'Professional music production software with advanced MIDI and audio features',
  },
  {
    name: 'Studio One',
    description:
      'Music production software with intuitive workflow and professional features',
  },
  {
    name: 'Bitwig Studio',
    description:
      'Digital audio workstation with modular sound design and performance features',
  },
  {
    name: 'Reason',
    description:
      'Virtual studio rack with instruments, effects, and mixing capabilities',
  },
  {
    name: 'Maschine',
    description: 'Hardware and software for beat production and music creation',
  },
  {
    name: 'Push',
    description:
      'Hardware controller for Ableton Live with pads, knobs, and display',
  },
  {
    name: 'MPC',
    description:
      'Classic drum machine and sampler for beat production and music creation',
  },
  {
    name: 'SP-404',
    description:
      'Portable sampler and effects processor for live performance and production',
  },
  {
    name: 'OP-1',
    description:
      'Portable synthesizer and sampler with unique workflow and sound design',
  },
  {
    name: 'Volca',
    description:
      'Compact analog synthesizers and drum machines for electronic music',
  },
  {
    name: 'Minilogue',
    description:
      'Analog polyphonic synthesizer with versatile sound design capabilities',
  },
  {
    name: 'MicroKorg',
    description:
      'Compact analog modeling synthesizer with vocoder and performance features',
  },
  {
    name: 'Moog',
    description:
      'Classic analog synthesizers known for warm, rich sound and build quality',
  },
  {
    name: 'Roland',
    description:
      'Professional musical instruments including synthesizers, drum machines, and more',
  },
  {
    name: 'Korg',
    description:
      'Musical instrument manufacturer known for synthesizers and electronic instruments',
  },
  {
    name: 'Yamaha',
    description:
      'Musical instrument manufacturer with wide range of instruments and equipment',
  },
  {
    name: 'Fender',
    description:
      'Iconic guitar and amplifier manufacturer with legendary instruments',
  },
  {
    name: 'Gibson',
    description:
      'Premium guitar manufacturer known for Les Paul and other classic models',
  },
  {
    name: 'Ibanez',
    description:
      'Guitar manufacturer known for electric guitars, basses, and amplifiers',
  },
  {
    name: 'PRS',
    description:
      'Premium guitar manufacturer known for quality craftsmanship and tone',
  },
  {
    name: 'ESP',
    description:
      'Guitar manufacturer specializing in electric guitars and basses',
  },
  {
    name: 'Schecter',
    description:
      'Guitar manufacturer known for metal and rock-oriented instruments',
  },
  {
    name: 'Jackson',
    description:
      'Guitar manufacturer specializing in high-performance electric guitars',
  },
  {
    name: 'Charvel',
    description:
      'Guitar manufacturer known for high-performance electric guitars',
  },
  {
    name: 'Kramer',
    description: 'Guitar manufacturer known for electric guitars and basses',
  },
  {
    name: 'Washburn',
    description:
      'Guitar manufacturer with wide range of acoustic and electric instruments',
  },
  {
    name: 'Gretsch',
    description:
      'Guitar manufacturer known for hollow body guitars and country music',
  },
  {
    name: 'Rickenbacker',
    description:
      'Guitar manufacturer known for unique designs and distinctive tone',
  },
  {
    name: 'Hagstrom',
    description: 'Guitar manufacturer known for electric guitars and basses',
  },
  {
    name: 'Godin',
    description:
      'Guitar manufacturer known for innovative designs and quality craftsmanship',
  },
  {
    name: 'Seagull',
    description:
      'Acoustic guitar manufacturer known for quality and affordability',
  },
  {
    name: 'Taylor',
    description:
      'Premium acoustic guitar manufacturer known for quality and innovation',
  },
  {
    name: 'Martin',
    description:
      'Iconic acoustic guitar manufacturer with legendary instruments',
  },
  {
    name: 'Collings',
    description:
      'Premium acoustic guitar manufacturer known for exceptional craftsmanship',
  },
  {
    name: 'Santa Cruz',
    description:
      'Boutique acoustic guitar manufacturer known for quality and tone',
  },
  {
    name: 'Bourgeois',
    description:
      'Boutique acoustic guitar manufacturer known for traditional designs',
  },
  {
    name: 'Goodall',
    description:
      'Boutique acoustic guitar manufacturer known for quality and innovation',
  },
  {
    name: 'Lowden',
    description:
      'Irish acoustic guitar manufacturer known for unique designs and tone',
  },
  {
    name: 'McPherson',
    description:
      'Acoustic guitar manufacturer known for innovative designs and quality',
  },
  {
    name: 'Olson',
    description:
      'Boutique acoustic guitar manufacturer known for exceptional craftsmanship',
  },
  {
    name: 'Ryan',
    description:
      'Boutique acoustic guitar manufacturer known for quality and innovation',
  },
  {
    name: 'Somogyi',
    description:
      'Boutique acoustic guitar manufacturer known for exceptional craftsmanship',
  },
  {
    name: 'Traugott',
    description:
      'Boutique acoustic guitar manufacturer known for quality and innovation',
  },
  {
    name: 'Vigier',
    description:
      'French guitar manufacturer known for innovative designs and quality',
  },
  {
    name: 'Strandberg',
    description:
      'Guitar manufacturer known for headless designs and ergonomic features',
  },
  {
    name: 'Kiesel',
    description:
      'Custom guitar manufacturer known for quality and customization options',
  },
  {
    name: 'Suhr',
    description: 'Premium guitar manufacturer known for quality and tone',
  },
  {
    name: 'Tom Anderson',
    description:
      'Boutique guitar manufacturer known for quality and customization',
  },
  {
    name: 'Nash',
    description:
      'Guitar manufacturer known for vintage-style instruments and quality',
  },
  {
    name: 'Fano',
    description:
      'Guitar manufacturer known for unique designs and quality craftsmanship',
  },
  {
    name: 'G&L',
    description:
      'Guitar manufacturer founded by Leo Fender known for quality instruments',
  },
  {
    name: 'Music Man',
    description:
      'Guitar manufacturer known for quality instruments and innovative designs',
  },
  {
    name: 'Peavey',
    description:
      'Musical instrument manufacturer known for guitars, basses, and amplifiers',
  },
  {
    name: 'Dean',
    description: 'Guitar manufacturer known for electric guitars and basses',
  },
  {
    name: 'BC Rich',
    description:
      'Guitar manufacturer known for unique designs and metal-oriented instruments',
  },
  {
    name: 'LTD',
    description:
      "ESP's affordable guitar line known for quality and performance",
  },
  {
    name: 'Epiphone',
    description:
      "Gibson's affordable guitar line known for quality and classic designs",
  },
  {
    name: 'Squier',
    description:
      "Fender's affordable guitar line known for quality and classic designs",
  },
  {
    name: 'Cort',
    description: 'Guitar manufacturer known for affordable quality instruments',
  },
  {
    name: 'Takamine',
    description:
      'Acoustic guitar manufacturer known for quality and innovation',
  },
  {
    name: 'Alvarez',
    description:
      'Acoustic guitar manufacturer known for quality and affordability',
  },
  {
    name: 'Ovation',
    description:
      'Guitar manufacturer known for unique round-back acoustic guitars',
  },
  {
    name: 'Guild',
    description:
      'Guitar manufacturer known for quality acoustic and electric instruments',
  },
  {
    name: "D'Angelico",
    description:
      'Guitar manufacturer known for archtop guitars and quality craftsmanship',
  },
  {
    name: 'Eastman',
    description:
      'Guitar manufacturer known for quality acoustic and electric instruments',
  },
  {
    name: 'Recording King',
    description:
      'Guitar manufacturer known for vintage-style instruments and quality',
  },
  {
    name: 'Blueridge',
    description:
      'Acoustic guitar manufacturer known for quality and affordability',
  },
  {
    name: 'Simon & Patrick',
    description:
      'Acoustic guitar manufacturer known for quality and craftsmanship',
  },
  {
    name: 'Norman',
    description:
      'Acoustic guitar manufacturer known for quality and affordability',
  },
  {
    name: 'La Patrie',
    description:
      'Classical guitar manufacturer known for quality and craftsmanship',
  },
  {
    name: 'Art & Lutherie',
    description:
      'Acoustic guitar manufacturer known for quality and affordability',
  },
  {
    name: 'MetaMask',
    description:
      'Ethereum wallet and gateway to blockchain applications for Web3 interactions',
  },
  {
    name: 'ClearURLs',
    description:
      'Removes tracking parameters from URLs to protect privacy and clean links',
  },
  {
    name: 'DuckDuckGo Privacy Essentials',
    description:
      'Blocks trackers and forces encrypted connections for enhanced privacy',
  },
  {
    name: 'Privacy Badger',
    description: 'Automatically blocks invisible trackers and spying ads',
  },
  {
    name: 'Decentraleyes',
    description:
      'Protects against tracking by serving local resources instead of CDNs',
  },
  {
    name: 'WhatFont',
    description:
      'Identifies fonts on web pages with a simple click for designers',
  },
  {
    name: 'ColorZilla',
    description:
      'Advanced eyedropper, color picker, and gradient generator for web developers',
  },
  {
    name: 'Wappalyzer',
    description:
      'Identifies technologies used on websites including frameworks and analytics',
  },
  {
    name: 'JSON Viewer',
    description:
      'Formats and prettifies JSON data for better readability and debugging',
  },
  {
    name: 'User-Agent Switcher',
    description:
      'Changes browser user agent for testing and accessing region-locked content',
  },
  {
    name: 'Page Ruler Redux',
    description:
      'Measures elements on web pages with pixel-perfect precision for designers',
  },
  {
    name: 'Web Developer',
    description:
      'Comprehensive web development toolkit with various debugging tools',
  },
  {
    name: 'Window Resizer',
    description:
      'Resizes browser window to predefined dimensions for responsive design testing',
  },
  {
    name: 'Lighthouse',
    description:
      'Automated tool for improving web page quality, performance, and accessibility',
  },
  {
    name: 'WAVE Web Accessibility Evaluator',
    description:
      'Evaluates web page accessibility and identifies potential barriers',
  },
  {
    name: 'axe DevTools',
    description:
      'Accessibility testing toolkit integrated into developer tools',
  },
  {
    name: 'Vue.js devtools',
    description: 'Browser extension for debugging Vue.js applications',
  },
  {
    name: 'Angular DevTools',
    description: 'Debugging and profiling extension for Angular applications',
  },
  {
    name: 'Redux DevTools',
    description: 'Time-travel debugging for Redux state management',
  },
  {
    name: 'Apollo Client Devtools',
    description: 'GraphQL debugging tools for Apollo Client applications',
  },
  {
    name: 'Postman Interceptor',
    description: 'Captures network requests for API testing with Postman',
  },
  {
    name: 'Requestly',
    description:
      'Modifies HTTP requests and responses for testing and development',
  },
  {
    name: 'Charles Proxy',
    description:
      'Web debugging proxy for monitoring and analyzing network traffic',
  },
  {
    name: 'Fiddler Everywhere',
    description: 'Web debugging proxy for API testing and network analysis',
  },
  {
    name: 'ModHeader',
    description: 'Modifies HTTP request and response headers for testing',
  },
  {
    name: 'EditThisCookie',
    description:
      'Cookie manager for editing, deleting, and creating HTTP cookies',
  },
  {
    name: 'Cookie Editor',
    description:
      'Simple tool for managing browser cookies with intuitive interface',
  },
  {
    name: 'Session Manager',
    description: 'Saves and restores complete browser sessions with all tabs',
  },
  {
    name: 'Tab Session Manager',
    description:
      'Advanced session management with automatic saving and restoration',
  },
  {
    name: 'Simple Tab Groups',
    description:
      'Organizes tabs into color-coded groups for better productivity',
  },
  {
    name: 'Tab Resize',
    description:
      'Splits browser tabs into multiple layouts for better multitasking',
  },
  {
    name: 'Tile Tabs WE',
    description:
      'Displays multiple tabs simultaneously in split-screen layouts',
  },
  {
    name: 'Multi-Account Containers',
    description:
      'Separates online identities by isolating tabs in different containers',
  },
  {
    name: 'Temporary Containers',
    description:
      'Creates disposable containers for enhanced privacy and isolation',
  },
  {
    name: 'Facebook Container',
    description: 'Isolates Facebook activity to prevent cross-site tracking',
  },
  {
    name: 'Google Container',
    description:
      'Contains Google services to limit tracking across other websites',
  },
  {
    name: 'Amazon Container',
    description: 'Isolates Amazon shopping activity from other web browsing',
  },
  {
    name: 'Twitter Container',
    description: 'Separates Twitter activity to enhance privacy protection',
  },
  {
    name: 'LinkedIn Helper',
    description: 'Automates LinkedIn tasks and improves networking efficiency',
  },
  {
    name: 'GitHub Refined',
    description:
      'Enhances GitHub interface with additional features and improvements',
  },
  {
    name: 'Octotree',
    description:
      'Displays GitHub repository files in a tree format for easier navigation',
  },
  {
    name: 'GitLens',
    description:
      'Git integration that shows code authorship and history inline',
  },
  {
    name: 'SourceGraph',
    description:
      'Code intelligence platform for browsing and searching code repositories',
  },
  {
    name: 'CodeStream',
    description:
      'Code collaboration platform for discussing code and reviewing changes',
  },
  {
    name: 'Awesome Screenshot',
    description:
      'Captures, annotates, and shares screenshots with editing tools',
  },
  {
    name: 'FireShot',
    description:
      'Full-page screenshot tool with editing and sharing capabilities',
  },
  {
    name: 'Nimbus Screenshot',
    description:
      'Screen capture tool with video recording and annotation features',
  },
  {
    name: 'Lightshot',
    description: 'Fast screenshot tool with instant sharing and cloud storage',
  },
  {
    name: 'Gyazo',
    description: 'Instant screenshot sharing with automatic cloud upload',
  },
  {
    name: 'CloudApp',
    description: 'Screen capture and file sharing with automatic cloud sync',
  },
  {
    name: 'Droplr',
    description: 'Screen capture and file sharing with link shortening',
  },
  {
    name: 'Snagit',
    description: 'Professional screen capture with advanced editing tools',
  },
  {
    name: 'Screencastify',
    description:
      'Screen recording tool for creating video tutorials and presentations',
  },
  {
    name: 'Loom Screen Recorder',
    description:
      'Quick screen recording with instant sharing and collaboration',
  },
  {
    name: 'Scribe',
    description: 'Automatically creates step-by-step guides from your actions',
  },
  {
    name: 'StepShot Guides',
    description: 'Creates visual step-by-step guides and documentation',
  },
  {
    name: 'Tango',
    description: 'Automatically generates how-to guides from your workflow',
  },
  {
    name: 'iorad',
    description: 'Creates interactive tutorials and step-by-step guides',
  },
  {
    name: 'WalkMe',
    description: 'Digital adoption platform for creating interactive guides',
  },
  {
    name: 'Pendo',
    description: 'Product analytics and user guidance platform',
  },
  {
    name: 'Hotjar',
    description:
      'Heatmaps, recordings, and feedback tools for user behavior analysis',
  },
  {
    name: 'FullStory',
    description:
      'Digital experience analytics with session replay capabilities',
  },
  {
    name: 'LogRocket',
    description: 'Frontend monitoring with session replay and error tracking',
  },
  {
    name: 'Sentry',
    description:
      'Error tracking and performance monitoring for web applications',
  },
  {
    name: 'Bugsnag',
    description: 'Error monitoring and crash reporting for web and mobile apps',
  },
  {
    name: 'Google Analytics Debugger',
    description:
      'Debugs Google Analytics tracking and identifies implementation issues',
  },
  {
    name: 'Tag Assistant',
    description: 'Validates Google Tag Manager and Analytics implementations',
  },
  {
    name: 'Facebook Pixel Helper',
    description: 'Troubleshoots Facebook Pixel implementation and tracking',
  },
  {
    name: 'Pinterest Tag Helper',
    description: 'Validates Pinterest conversion tracking implementation',
  },
  {
    name: 'Twitter Pixel Helper',
    description: 'Debugs Twitter advertising pixel implementation',
  },
  {
    name: 'LinkedIn Insight Tag Helper',
    description: 'Validates LinkedIn conversion tracking setup',
  },
  {
    name: 'Redirect Path',
    description: 'Traces HTTP redirects and identifies redirect chains',
  },
  {
    name: 'Link Redirect Trace',
    description: 'Shows the complete path of URL redirects and status codes',
  },
  {
    name: 'HTTP Status',
    description: 'Displays HTTP status codes and response headers in toolbar',
  },
  {
    name: 'Live HTTP Headers',
    description: 'Monitors HTTP headers in real-time for debugging',
  },
  {
    name: 'HackerNews Enhancement Suite',
    description: 'Improves Hacker News browsing with additional features',
  },
  {
    name: 'Netflix Party',
    description: 'Synchronizes Netflix playback for group watching sessions',
  },
  {
    name: 'Teleparty',
    description:
      'Group watching for Netflix, Disney+, Hulu, and other streaming services',
  },
  {
    name: 'Watch Party',
    description:
      'Synchronized video watching with chat for multiple streaming platforms',
  },
  {
    name: 'Prime Video Party',
    description: 'Group watching extension specifically for Amazon Prime Video',
  },
  {
    name: 'YouTube Party',
    description: 'Synchronizes YouTube videos for group viewing with chat',
  },
  {
    name: 'Twitch Now',
    description: 'Notifies when followed Twitch streamers go live',
  },
  {
    name: 'BetterTTV',
    description: 'Enhances Twitch chat with additional emotes and features',
  },
  {
    name: 'FrankerFaceZ',
    description:
      'Twitch enhancement with emotes, chat moderation, and customization',
  },
  {
    name: 'StreamLabs',
    description: 'Live streaming tools for content creators and broadcasters',
  },
  {
    name: 'OBS Studio',
    description: 'Professional broadcasting and recording software integration',
  },
  {
    name: 'Streamdeck',
    description: 'Hardware integration for streaming controls and automation',
  },
  {
    name: 'VoiceMeeter',
    description: 'Virtual audio mixer for streaming and recording',
  },
  {
    name: 'Audio Hijack',
    description: 'Records audio from any application with flexible routing',
  },
  {
    name: 'SpeechTexter',
    description: 'Voice-to-text transcription for web forms and text fields',
  },
  {
    name: 'Voice In',
    description: 'Speech recognition for dictating text in any web input',
  },
  {
    name: 'Read Aloud',
    description: 'Text-to-speech extension that reads web pages aloud',
  },
  {
    name: 'Natural Reader',
    description:
      'Text-to-speech with natural-sounding voices and speed control',
  },
  {
    name: 'Mercury Reader',
    description: 'Cleans up articles for distraction-free reading experience',
  },
  {
    name: 'Just Read',
    description: 'Customizable reading mode with typography and layout options',
  },
  {
    name: 'Reader View',
    description: 'Strips away clutter to focus on article content',
  },
  {
    name: 'BeeLine Reader',
    description:
      'Uses color gradients to guide eyes through text for faster reading',
  },
  {
    name: 'Speed Reading Extension',
    description: 'Rapid serial visual presentation for faster text consumption',
  },
  {
    name: 'Readwise Highlighter',
    description: 'Highlights and saves text from web pages for later review',
  },
  {
    name: 'Liner',
    description:
      'Web and PDF highlighter with search and organization features',
  },
  {
    name: 'Weava Highlighter',
    description: 'Research tool for highlighting and organizing web content',
  },
  {
    name: 'Hypothesis',
    description: 'Collaborative annotation platform for web pages and PDFs',
  },
  {
    name: 'Annotate',
    description: 'Web page annotation with sharing and collaboration features',
  },
  {
    name: 'Kami',
    description: 'PDF and document annotation with collaboration tools',
  },
  {
    name: 'DocHub',
    description: 'PDF editor and electronic signature platform',
  },
  {
    name: 'HelloSign',
    description: 'Electronic signature solution for documents and contracts',
  },
  {
    name: 'DocuSign',
    description:
      'Digital transaction management and electronic signature platform',
  },
  {
    name: 'Adobe Sign',
    description: 'Electronic signature and digital document solutions',
  },
  {
    name: 'SignNow',
    description: 'Electronic signature and document management platform',
  },
  {
    name: 'PandaDoc',
    description: 'Document automation and electronic signature platform',
  },
  {
    name: 'SignRequest',
    description: 'Simple electronic signature solution for documents',
  },
  {
    name: 'RightSignature',
    description: 'Electronic signature platform with document management',
  },
  {
    name: 'eSignature',
    description: 'Digital signing solution for contracts and agreements',
  },
];

async function main() {
  const start = new Date();
  for (const extension of extensionsList) {
    await prisma.extension.create({
      data: extension,
    });
    console.log(`Created extension: ${extension.name}`);
  }
  console.log(
    `All extensions created in ${new Date().getTime() - start.getTime()}ms`,
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
