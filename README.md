User Login
Email: user@gmail.com
Password: 123456
Key Features
UI/UX Enhancements
Responsive Design: Tailored to electronic gadgets enthusiasts with a focus on intuitive navigation and visually appealing components.
Improved User Interface: Updated from previous versions to ensure a more engaging and user-friendly experience.
Error Handling
Implemented Next.js error handling features to provide informative error messages and graceful fallbacks, ensuring a robust user experience even in the event of unexpected errors.
SEO Optimization
Integrated static and dynamic meta tags for enhanced search engine visibility.
Dynamic route names and product details displayed in browser tabs for improved discoverability.
Redux Persist
Utilized Redux Persist to maintain user cart data across sessions, ensuring a seamless shopping experience even after reloading or revisiting the platform.
Navbar Enhancements
Added key elements to the navigation bar including:
Login/Register Button
Logout Button
Cart Icon with a badge showing the number of unique products added.
Pages
Login / Register Page
Register Page (/register): Allows users to create an account with essential details such as User Name, Email, and Password.
Login Page (/login): Enables secure user login with email and password credentials.
Dashboard Page
Admin Dashboard:
Products Table (/dashboard/admin/products): Table view of all electronic gadgets with action buttons for product management.
Add Product (/dashboard/admin/products/add-product): Route for administrators to add new products.
Orders Management (/dashboard/admin/orders): Manage order status transitions from Pending to Delivered.
User Dashboard:
My Orders (/dashboard/my-orders): View personal order history and provide ratings for delivered products.
Product Pages
Product Listing Pages (/mobile, /fridge, /tv, etc.):
Add products to cart with an "Add To Cart" button.
Cart icon in the navbar displays a badge for unique products added.
Product Detail Pages (/mobile/123, /fridge/456, /tv/789, etc.):
Add products to cart from the detail page.
Authorized users can provide reviews without the need to purchase or receive the product.
Reviews displayed below product details.
Checkout Page (/checkout)
Displays added products with quantity and calculates total price including a delivery charge of 15 Taka.
Provides "Cash On Delivery" as the payment option.
"Proceed Checkout" button creates an order with a pending status, clears the cart, and displays a toast notification upon completion.
Optional Tasks
Dark & Light Mode: Implemented using the Next Themes package.
Server Actions: Utilized to POST reviews for products on the Product Detail Page.
Technologies Used
Next.js: For server-side rendering and static site generation.
Redux: State management for user and cart data.
Redux Persist: To persist cart data across sessions.
NextUI: For UI components.
Sonner: For toast notifications.
Next Themes (Optional): For implementing dark and light modes.
