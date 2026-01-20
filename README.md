# CFIRM - Certified Flight Instructor Resource ManagementThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A Next.js website for flight instructor resources, built with shadcn/ui and Tailwind CSS.## Getting Started



## FeaturesFirst, run the development server:



- **Landing Page** - Hero section with lead capture form```bash

- **Lead Capture System** - Firebase Firestore for data storage, Resend for email notificationsnpm run dev

- **Articles Section** - SEO-optimized flight training articles# or

- **JSON-LD Schema** - Structured data for search engines and AIyarn dev

- **Responsive Design** - Mobile-first approach with Tailwind CSS# or

- **Modern UI** - Built with shadcn/ui componentspnpm dev

# or

## Getting Startedbun dev

```

### Prerequisites

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Node.js 18+ 

- npm or yarnYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- Firebase project (for lead capture)

- Resend account (for email notifications)This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



### Installation## Learn More



1. Install dependencies:To learn more about Next.js, take a look at the following resources:

```bash

npm install- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

```- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



2. Copy the environment template:You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

```bash

cp .env.example .env.local## Deploy on Vercel

```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

3. Configure your environment variables in `.env.local`:

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Resend Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev

# Site Configuration (for JSON-LD schema)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=CFIRM
NEXT_PUBLIC_SITE_REGION=United States
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── leads/          # Lead capture API endpoint
│   ├── articles/
│   │   ├── [slug]/         # Dynamic article pages
│   │   └── page.tsx        # Articles listing page
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Landing page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── article-card.tsx    # Article preview card
│   ├── footer.tsx          # Site footer
│   ├── header.tsx          # Site header/navigation
│   └── lead-capture-form.tsx # Lead capture form
└── lib/
    ├── articles.ts         # Article data and helpers
    ├── firebase.ts         # Firebase configuration
    ├── schema.ts           # JSON-LD schema generators
    └── utils.ts            # Utility functions
```

## Duplicating for Different Regions

This website is designed to be easily duplicated for different regions:

1. Clone the repository
2. Update `.env.local` with:
   - `NEXT_PUBLIC_SITE_URL` - Your domain
   - `NEXT_PUBLIC_SITE_NAME` - Your site name
   - `NEXT_PUBLIC_SITE_REGION` - Your target region
3. Update article content as needed
4. Deploy

The JSON-LD schema will automatically update based on your environment variables.

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Add a web app and copy the configuration
4. Set up Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## Resend Setup

1. Create an account at [Resend](https://resend.com)
2. Generate an API key
3. Verify your domain for production use
4. Add the API key to your environment variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## License

MIT
