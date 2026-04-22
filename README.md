# HFFG Website Clone – Blue Theme

## Files
- **index.html**   – Home page
- **about.html**   – About Us page (history, mission/vision tabs, objectives, leadership)
- **contact.html** – Contact Us page (contact details, contact form, map)
- **style.css**    – All colours, fonts, spacing and layout (blue theme)
- **main.js**      – Mobile hamburger menu only (10 lines)

## Changing the colours (style.css → :root)
  --blue:       #1a5cb4   ← main brand blue
  --blue-dark:  #0f3d7a   ← hover / darker shade
  --blue-deep:  #0a2550   ← footer background
  --accent:     #f4a622   ← orange accent (dates, icons)

## Changing text / images
Open any .html file in a text editor and edit directly.
Replace src="https://..." image links with your own URLs or local files.

## Making the contact form send real emails
The form currently shows a success popup but does NOT send emails.
To enable real sending, use Formspree (free at formspree.io):
  1. Create a free account at formspree.io
  2. Add action="https://formspree.io/f/YOUR_ID" method="POST" to the <form> tag
  3. Remove the JavaScript submit handler at the bottom of contact.html

## Open in browser
Double-click index.html, about.html, or contact.html — no server needed!
# hffg-website-side-project-
