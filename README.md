# SportsGuy Landing Page

A simple landing page for the SportsGuy app, built with Next.js and Tailwind CSS.

## Features

- Responsive design for mobile and desktop
- App description and key features
- Privacy policy page
- Modern UI with gradient accents

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/SportsGuyLanding.git
cd SportsGuyLanding
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add the following scripts to your package.json:

```json
"scripts": {
  "build": "next build",
  "export": "next export",
  "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
}
```

3. Create a `.github/workflows/deploy.yml` file for GitHub Actions to automate deployment.

4. Push to GitHub and GitHub Actions will deploy your site.

## Project Structure

- `src/app/page.tsx` - The main landing page
- `src/app/privacy/page.tsx` - Privacy policy page
- `public/3DCoach.png` - App icon image
- `src/app/globals.css` - Global styles and theme colors

## License

This project is licensed under the MIT License - see the LICENSE file for details.
