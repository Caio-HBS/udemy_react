import React from "react";

import PageContent from "../components/PageContent.jsx";
import NewsletterSignup from "../components/NewsletterSignup.jsx";

export default function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Signup successful!" };
}
