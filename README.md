## Getting Started

1. Install dependencies `npm install` or `yarn install`

2. secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Design Ideas

1. State Management Handled by Controllers
   Our application leverages controllers for efficient state management. This approach allows for a more structured and maintainable codebase. Controllers act as intermediaries between the UI and the business logic, ensuring that state changes are predictable and easily traceable. This design choice not only simplifies debugging but also enhances the scalability of the application. By encapsulating state logic within controllers, we can easily modify or replace them without impacting other parts of the system.

2. API Activities Handled by useGameData Despite No Real Database
   In the absence of a real database, our application uses the useGameData custom hook to simulate API interactions. This innovative approach mimics the behavior of actual API calls, preparing the application for easy integration with a real backend in the future. It also helps in maintaining the separation of concerns, as all data-fetching logic is centralized within this hook. This design decision aids in keeping the UI components clean and focused solely on rendering.

3. Highly Modular and Reusable Components with Tailwind and Material UI
   Our components are designed with modularity and reusability in mind, utilizing the flexibility of Tailwind CSS and Material UI. This combination allows us to create a unique and responsive design while maintaining a consistent look and feel throughout the application. The use of Tailwind CSS enhances the customization and scalability of our components, enabling rapid development and easy maintenance. Material UI components wrapped in Tailwind CSS offer a robust and flexible solution for building a dynamic and visually appealing user interface.

4. Scalable App Features for Adjusting Card Sizes and Numbers
   The application is engineered to dynamically scale the size and number of card choices, offering a versatile user experience. This feature allows users to customize their gameplay, catering to different preferences and screen sizes. The scalability of card sizes and quantities is a testament to the flexible and adaptive nature of our app design. This adaptability not only enhances user engagement but also demonstrates the application's capability to evolve with user needs and technological advancements.

![Alt text for the image](/public/normal_view.png)
![Alt text for the image](/public/more_than_three_cards.png)
![Alt text for the image](/public/mobile.png)
