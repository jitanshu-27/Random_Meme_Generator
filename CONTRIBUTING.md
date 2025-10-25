# 🤝 Contributing to Random Meme Generator

Thanks for your interest in contributing! This document provides step-by-step setup instructions and guidelines to make contributing easy and consistent.

---

## 🚀 Quick Overview
1. Fork the repository
2. Clone your fork locally
3. Create a feature branch
4. Install dependencies and run the app/tests locally
5. Make your changes and test
6. Commit, push, and open a Pull Request (PR)

---

## 🧭 Step-by-step Setup (Local Development)

Follow these steps to set up the project on your machine and prepare a contribution.

### 1. Fork the repository
- Go to the project repo on GitHub and click **Fork** (top-right). This creates a copy under your account.

### 2. Clone your fork
Open a terminal and run:
```bash
git clone https://github.com/jitanshu-27/random-meme-generator.git
cd random-meme-generator
```

### 3. Create a new branch for your work
Always use a descriptive branch name:
```bash
git checkout -b feature/short-description
```

### 4. Install dependencies
Make sure you have Node.js and npm installed (Node 16+ recommended). Then:
```bash
npm install
```

### 5. Environment variables (if any)
If the project requires API keys or environment variables, create a `.env` file by copying `.env.example` (if present):
```bash
cp .env.example .env
# then update .env with your keys
```
If there is no `.env.example`, check the project README for required variables.

### 7. Run the development server
Start the app locally to see your changes live:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser (Vite's default port).

### 8. Lint your code (optional but recommended)
Run ESLint to check for code style issues:
```bash
npm run lint
```


## ✅ Making Changes
- Keep changes small and focused — one feature or fix per branch/PR.
- Follow existing code style and file organization. Use functional components and hooks for React code.
- Add comments for non-obvious logic.
- Update or add unit tests for any new functionality where applicable.
- Update README or docs if you change behavior or add new public features.
- Run `npm run lint` to check for style issues before committing.
- Test your changes by running `npm run build` to ensure the production build works.

---

## 🧾 Commit Message Guidelines
Use clear, concise commit messages. Example format:
```
<type>: short description

Longer description (optional)
```
Common types: `Add`, `Fix`, `Update`, `Refactor`, `Docs`, `Test`.

Example:
```
Add: category filter for meme API
```

---

## 🔁 Pushing & Creating a Pull Request
1. Push your branch to your fork:
```bash
git push origin feature/short-description
```
2. Open your fork on GitHub and click **Compare & pull request**.
3. In the PR description, include:
   - What you changed and why
   - Screenshots or GIFs (if UI changes)
   - Any steps to test the change locally
4. Link any related issue (if applicable) using `#issue-number`.

---

## 🧪 Review & Feedback
- Maintainers will review your PR and may request changes — please respond to feedback promptly.
- Keep your branch updated with the repository main branch if requested (see upstream instructions above).

---

## 🧹 Merging
After approval, a maintainer will merge your PR. Squash merging may be used to keep history clean.

---

## 👩‍💻 Code Style & Best Practices
- Use React functional components and hooks.
- Prefer small reusable components.
- Keep CSS modular (component-level styles or CSS modules / Tailwind if used).
- Avoid hard-coded values; prefer props or configuration.
- Remove console logs and commented-out code before committing.

---

## 💡 Ideas for Contributors
If you want a place to start, consider the following:
- Add dark/light theme toggle
- Implement "like/save favorite" (localStorage)
- Add meme categories or search
- Improve responsiveness and accessibility
- Add unit tests for core components

---

## 📬 Contact
If you have questions, open an issue describing your idea or ask for help in the PR comments.

---


