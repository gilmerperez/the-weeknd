import Link from "next/link";
import styles from "./page.module.css";
import Back from "../../../components/Back/Back";

export const metadata = {
  title: "Help and Support - Returns",
  description: "Get help with returning and refunding orders on The Weeknd official website.",
  keywords: ["The Weeknd", "help", "returns", "refunds", "customer service", "support"],
};

export default function Returns() {
  return (
    <>
      <main>
        <div className={styles.returnsContainer}>
          {/* Back button */}
          <Back to="/help" text="Back to help and support" />

          {/* Title */}
          <h1 className={styles.title}>Returns</h1>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How long will it take for me to get a refund on my returned item?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Please allow 3-5 business days for your item to be processed. Refunds typically take 2-3 business days to
              appear in your account once they&apos;ve been processed, but can occasionally take up to 10 business days.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Will you accept returns of product in any condition?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Items must be returned in their original condition and packaging, with tags attached. Returned items
              cannot be washed, worn, used, or altered in any way. Any items deemed used or altered in any way will not
              be eligible for a refund.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Who pays for my return?</p>
            {/* Answer */}
            <p className={styles.answer}>
              For customers with shipping addresses within the US, free return labels will be provided. International
              customers are responsible for covering any costs associated with returns.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How long after my order can I submit a return request?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Return requests must be made within 30 days of the date your order is delivered.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How do I return my order for a refund?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Please contact us to submit a return request and a member of our customer care team will reach back to
              validate and initiate your return.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
