# Leaf & Loft — Houseplant Shop (React + Redux Toolkit + Vite)

This project satisfies the assignment requirements: Redux store, landing page with background + company name + paragraph + "Get Started" linking to product listing, product listing with 6 plants grouped into 3+ categories, add-to-cart button behavior, shared header with cart badge, and a full-featured cart page (increase, decrease, delete, totals, checkout placeholder, and continue shopping).

## 1) Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open the printed local URL in your browser.

---

## 2) Project structure & file names

```
plant-shop-redux/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ components/
│  │  ├─ Header.jsx
│  │  └─ PlantCard.jsx
│  ├─ pages/
│  │  ├─ ProductList.jsx
│  │  └─ Cart.jsx
│  ├─ data/
│  │  └─ plants.js
│  └─ store/
│     ├─ store.js
│     └─ cartSlice.js
└─ README.md
```

**GitHub repo name suggestion:** `plant-shop-redux` (matches the folder).

---

## 3) What maps to the grading rubric

- **GitHub (6 points)**
  - Public repo URL: create a public repo named `plant-shop-redux`.
  - Redux-related files and code: `src/store/store.js` and `src/store/cartSlice.js`.

- **Landing page (5 points)**
  - Background image: hero image on `ProductList.jsx`.
  - Paragraph about the company: hero overlay text.
  - Company name: "Leaf & Loft" in hero and header.
  - "Get Started" button linking to product listing: `Link` to `#shop`.

- **Product listing page (9 points)**
  - 6 unique plants showing thumbnail, name, price: `src/data/plants.js` + `PlantCard.jsx`.
  - Grouped into 3+ categories: computed in `ProductList.jsx` from `plants` data.
  - Add to Cart button behavior:
    - Increments cart badge: header badge reads from Redux total.
    - Button becomes disabled after selecting: `PlantCard.jsx` disables if in cart.
    - Plant added to cart: handled by `addToCart` reducer.

- **Header (7 points)**
  - Displays on both pages: `Header` is outside `Routes` in `App.jsx`.
  - Shopping cart icon with total count: `selectTotalCount` selector.
  - Navigation to other page: NavLinks to `/` and `/cart`.

- **Shopping cart page (23 points)**
  - Total number of plants: `selectTotalCount`.
  - Total cost: `selectTotalCost`.
  - Each plant type shows thumbnail, name, unit price: table in `Cart.jsx`.
  - Increase button: `increment(id)`.
  - Decrease button: `decrement(id)` (removes when qty hits 0).
  - Delete button: `remove(id)`.
  - Checkout button: alerts "Coming Soon".
  - Continue shopping button: Link to `/`.

---

## 4) Step-by-step: push to GitHub

> Do this **inside the `plant-shop-redux` folder**.

```bash
# 1) Initialize git and make the first commit
git init
git add .
git commit -m "Initial commit: Houseplant shop with React + Redux Toolkit"

# 2) Create a new PUBLIC repo on GitHub named: plant-shop-redux
#    Then connect your local repo to GitHub (replace USERNAME with your GitHub username)
git branch -M main
git remote add origin https://github.com/USERNAME/plant-shop-redux.git
git push -u origin main
```

Copy the **public repo URL** and submit it.

---

## 5) Step-by-step: deploy your website

### Option A) **Vercel** (recommended for Vite apps)

1. Go to Vercel and log in.
2. Click **New Project** → **Import Git Repository** → choose your `plant-shop-redux` repo.
3. Framework preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**. When it finishes, copy your public URL (e.g., `https://plant-shop-redux.vercel.app`).

### Option B) **Netlify**

1. Log in to Netlify.
2. **Add new site** → **Import from Git** → pick your GitHub repo.
3. Build Command: `npm run build`
4. Publish directory: `dist`
5. Deploy and copy the site URL.

### Option C) **GitHub Pages** (works too, a few extra steps for Vite)

1. Open `vite.config.js` and **uncomment** the `base` line. Set it to `'/plant-shop-redux/'` (note leading/trailing slashes).
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add two scripts to `package.json`:
   ```json
   "predeploy": "vite build",
   "deploy": "gh-pages -d dist"
   ```
4. Commit the changes and push.
5. Deploy:
   ```bash
   npm run deploy
   ```
6. In your GitHub repo → **Settings** → **Pages** → ensure branch is `gh-pages` (selected automatically by the script). Your site will be at `https://USERNAME.github.io/plant-shop-redux/`.

---

## 6) How to verify rubric behaviors quickly

- From the **Products** page, click **Add to Cart** on a plant:
  - 🛒 badge increases by 1.
  - The clicked button changes to **"Added"** and becomes disabled.
  - Item appears on the **Cart** page.
- On the **Cart** page:
  - Use **+** / **-** to adjust quantities; totals update immediately.
  - **Delete** removes that plant type.
  - **Checkout** shows "Coming Soon".
  - **Continue Shopping** takes you back to products.

Good luck with your submission! ✅
