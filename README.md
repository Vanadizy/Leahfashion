# Leah Fashion

Leah Fashion is a bridal fashion website with:

- a polished public-facing website
- a simple admin customization page
- an Express API
- MySQL-backed content storage
- English and Kiswahili language switching on the public pages

The site is designed for a fashion studio in Busweru, Mwanza, with a strong bridal presentation, gallery, catalog, awards section, inquiry form, and contact actions.

## Features

- Full-screen landing page with image-based hero
- Responsive public pages:
  - Home
  - Catalog
  - Gallery
- Shared header and footer across pages
- English / Kiswahili language dropdown in the menu
- Link preview metadata with Leah Fashion branding
- Inquiry form prepared for email integration
- WhatsApp, phone, directions, and social links
- Admin page for content customization
- MySQL storage for production content

## Pages

- `/` - home page
- `/catalog.html` - catalog detail page
- `/gallery.html` - gallery detail page
- `/admin` - admin customization page
- `/api/public/site` - public content endpoint
- `/api/admin/*` - admin API endpoints

## Tech Stack

- HTML, CSS, vanilla JavaScript
- Node.js + Express
- MySQL

## Project Structure

```text
LEAH FASHION/
  admin/
    assets/
    index.html
  assets/
    css/
    images/
    js/
  db/
    schema.sql
    seed.sql
  server/
    src/
      config/
      middleware/
      repository/
      routes/
      app.js
  catalog.html
  gallery.html
  index.html
  package.json
  README.md
```

## Local Development

1. Install dependencies:

```powershell
npm install
```

2. Copy the environment file:

```powershell
Copy-Item .env.example .env
```

3. Create your MySQL database and run:

```sql
SOURCE db/schema.sql;
SOURCE db/seed.sql;
```

4. Start the server:

```powershell
npm start
```

5. Open:

- `http://localhost:4000/`
- `http://localhost:4000/admin`

## Environment Variables

Use `.env` based on `.env.example`.

Typical values include:

- `PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `ADMIN_JWT_SECRET`
- `SITE_URL`

`SITE_URL` should point to the final public domain in production so metadata and shared-link previews resolve correctly.

## Demo Admin Login

Current demo credentials:

- Username: `admin`
- Password: `123456`

These are for demo use only and should be changed before any real deployment.

## Language Support

The public website includes a language switcher inside the menu:

- `🇬🇧 English`
- `🇹🇿 Kiswahili`

The selected language is stored in the browser and reused across the public pages.

## Content Model

The site currently stores content as one structured JSON document in MySQL. This keeps the first CMS version simple and flexible while still supporting:

- theme values
- brand information
- hero content
- awards and trust reasons
- catalog items
- gallery items
- about section
- contact data
- footer links

## Production Notes

- Replace demo admin credentials before production use.
- Use a real SMTP or transactional email service if you want inquiry forms to submit directly without opening the client email app.
- Use a public HTTPS domain for reliable link previews.
- Use proper media optimization for production images.
- Add role-based admin users and audit logs if the admin area will be used by multiple people.

## Current Limitation

The public language switcher translates the current built-in website copy and page content. If the owner later stores fully custom text in the CMS and wants full bilingual editing, the next step is adding dedicated English and Kiswahili fields in the admin/backend content model.
