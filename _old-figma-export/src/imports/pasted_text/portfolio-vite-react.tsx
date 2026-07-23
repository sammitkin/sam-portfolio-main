Convert the attached portfolio design into a production-ready Vite + React + TypeScript project using Tailwind CSS.



The final project must be ready to upload to GitHub and deploy directly to Vercel without additional configuration.



TECH STACK



- Vite

- React

- TypeScript

- Tailwind CSS

- Standard npm package management

- No Next.js

- No backend

- No database

- No environment variables



DESIGN FIDELITY



Recreate the attached design as closely as possible.



Preserve:



- All typography

- Font sizes and weights

- Colors

- Background colors

- Spacing

- Section heights

- Grid structure

- Image proportions

- Button sizes

- Borders

- Border radiuses

- Icon placement

- Alignment

- Visual hierarchy



Do not redesign anything.

Do not add new visual elements.

Do not remove any existing visual elements.

Do not change the written content.

Do not replace the supplied images.

Do not invent additional portfolio projects.



SECTIONS



Keep all current sections in the same order:



1. Header and navigation

2. Hero

3. Selected Work

4. About

5. Design Principles

6. Contact

7. Footer



RESPONSIVE DESIGN



Make the entire website fully responsive across:



- Desktop

- Laptop

- Tablet

- Mobile



Desktop should closely match the attached design.



For mobile:



- Prevent horizontal scrolling

- Keep readable spacing and typography

- Stack the Hero content and portrait appropriately

- Stack project cards into one column

- Stack the About section appropriately

- Stack the Design Principles into one column

- Make buttons easy to tap

- Use a working mobile navigation menu

- Preserve the same visual style and content

- Make images responsive without distortion



NAVIGATION AND INTERACTIONS



Create smooth scrolling navigation.



Navigation behavior:



- “Work” scrolls to the Selected Work section

- “About” scrolls to the About section

- “Contact” scrolls to the Contact section

- “View Work” scrolls to the Selected Work section

- “View Projects” scrolls to the Selected Work section

- “About Me” scrolls to the About section

- “Read More” scrolls to the About section



The navigation should work on desktop, tablet, and mobile.



Make the header responsive.



On mobile, create a functional hamburger menu with accessible open and close controls.



EXTERNAL LINKS



Set every LinkedIn button, icon, and footer LinkedIn link to:



https://www.linkedin.com/in/sammitkin/



LinkedIn links must:



- Open in a new browser tab

- Use target="_blank"

- Use rel="noopener noreferrer"



Set every Email button, icon, and footer email link to:



mailto:hello@sammitkin.com



Email links must open the visitor’s default email application.



Make sure all LinkedIn and email links work correctly on desktop, tablet, and mobile.



PROJECT STRUCTURE



Use a clean, maintainable component structure.



Suggested components:



- Header

- Hero

- SelectedWork

- ProjectCard

- About

- DesignPrinciples

- Contact

- Footer



Use semantic HTML elements such as:



- header

- nav

- main

- section

- article

- footer



Add meaningful IDs to sections:



- work

- about

- contact



ACCESSIBILITY



- Add descriptive alt text to all meaningful images

- Use proper button and link elements

- Preserve visible keyboard focus states

- Make the mobile menu keyboard-accessible

- Use sufficient color contrast

- Add aria-labels where necessary

- Do not use clickable div elements



IMAGES AND PERFORMANCE



- Use all provided images

- Optimize image rendering

- Preserve image aspect ratios

- Prevent layout shifts

- Add lazy loading to images below the fold

- Do not use remote placeholder images

- Do not generate or replace images

- Keep image imports working after deployment



VERCEL COMPATIBILITY



The exported project must work immediately on Vercel.



Required configuration:



- package.json must include all required dependencies

- Vite must be included as a dependency or devDependency

- package.json must include:



  "scripts": {

    "dev": "vite",

    "build": "vite build",

    "preview": "vite preview"

  }



- The production build must output to the standard Vite directory:



  dist



- Do not configure the output directory as “build”

- Do not require a manually installed global Vite package

- The project must build successfully using:



  npm install

  npm run build



- Do not use absolute local file paths

- Do not reference temporary Figma-only asset locations

- Make sure all assets are included in the exported project

- Make sure all import paths use the correct capitalization

- Make sure the project works on a case-sensitive Linux environment

- Do not include broken imports or missing files



Before completing the project, verify that:



1. npm install completes successfully

2. npm run build completes successfully

3. The generated output is located in dist

4. All images display correctly

5. All navigation links work

6. LinkedIn links open the correct profile

7. Email links use mailto:hello@sammitkin.com

8. The website works on mobile, tablet, and desktop

9. The project is ready for GitHub and Vercel deployment



OUTPUT



Provide a complete downloadable project containing:



- package.json

- index.html

- vite.config.ts

- tsconfig files if required

- src directory

- all React components

- all Tailwind and CSS files

- all local image and SVG assets

- README with simple installation and deployment instructions



Do not only show code snippets.

Generate the complete working project.



Final instruction:



Do not redesign the portfolio.

Do not change the content.

Recreate the attached design exactly and generate a complete, buildable Vite project that can be deployed to Vercel without manual code fixes.