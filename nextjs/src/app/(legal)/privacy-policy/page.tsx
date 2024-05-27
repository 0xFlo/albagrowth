import React from "react";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Alba Growth</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Alba Growth, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          and contact details when you sign up for our services, participate in
          our events, or otherwise interact with us.
        </p>

        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide and improve our services,
          communicate with you about our products and services, and ensure
          compliance with our policies and legal obligations.
        </p>

        <h2 className="text-2xl font-bold mb-2">Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We
          may share your information with service providers who perform services
          on our behalf, such as hosting, data analysis, payment processing, and
          customer service.
        </p>

        <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information. You can also object to or restrict the processing of your
          personal information.
        </p>

        <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the "Last Updated" date.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at privacy@albagrowth.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
