# Makers Engineering - Static Website

This is the static website for Makers Engineering, converted from a React application to pure HTML, CSS, and JavaScript.

## Features

- **Pure Static Files:** Built entirely with HTML, CSS, and JavaScript. No build step or server-side code required.
- **Tailwind CSS:** Styled using Tailwind CSS via CDN for rapid and responsive design.
- **Responsive Design:** Fully responsive layout that adapts to mobile, tablet, and desktop screens.
- **Dark Mode Support:** Includes styles for both light and dark themes (currently defaults to system preference or can be toggled via class).
- **GitHub Pages Ready:** All asset paths are relative, making it perfectly suited for deployment on GitHub Pages without any configuration.

## Project Structure

```text
/
├── index.html       # Home page
├── about.html       # About Us page
├── services.html    # Services page
├── projects.html    # Projects page
├── contact.html     # Contact page
├── css/
│   └── styles.css   # Custom CSS and font imports
├── js/
│   └── main.js      # Interactive logic (mobile menu, active links)
└── README.md        # Project documentation
```

## Development

To view the site locally, simply open `index.html` in your preferred web browser. No local server is strictly necessary, although using a simple HTTP server (like `python -m http.server` or the VS Code Live Server extension) is recommended to avoid any potential CORS issues with local file loading, though none are expected with this setup.

## Deployment to GitHub Pages

This project is designed to be deployed directly to GitHub Pages with zero configuration.

1.  Push the code to a GitHub repository.
2.  Go to the repository's **Settings**.
3.  Navigate to the **Pages** section in the left sidebar.
4.  Under **Build and deployment**, select **Deploy from a branch** as the Source.
5.  Under **Branch**, select `main` (or your default branch) and the `/ (root)` folder.
6.  Click **Save**.

GitHub will automatically build and deploy your site. It will be available at `https://<your-username>.github.io/<repository-name>/`.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Google Fonts](https://fonts.google.com/) (Inter & Material Symbols Outlined)
