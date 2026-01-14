import Link from "next/link";
import styles from "./page.module.css";
import Back from "../../../components/Back/Back";

export const metadata = {
  title: "Help and Support - Orders",
  description: "Get help with placing and managing orders on The Weeknd official website.",
  keywords: ["The Weeknd", "help", "orders", "customer service", "support"],
};

export default function Orders() {
  return (
    <>
      <main>
        <div className={styles.ordersContainer}>
          {/* Back button */}
          <Back to="/help" text="Back to help and support" />

          {/* Title */}
          <h1 className={styles.title}>Orders</h1>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Once I place an order, when will my account be charged?</p>
            {/* Answer */}
            <p className={styles.answer}>
              All orders placed on our store are immediately charged for the full cost of your order. Pending
              authorization holds may appear on your account up to seven business days depending on your card&apos;s issuing
              bank until the transaction has completed processing. If the pending hold does not drop after this time or
              you believe there to be a billing error, please contact us.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>When will I be charged for a pre-order item?</p>
            {/* Answer */}
            <p className={styles.answer}>
              You will be charged for your entire order, inclusive of any pre-order items, immediately at checkout. This
              ensures that your pre-order is reserved for you.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Can I cancel or make changes to my order?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Depending on where your order is within the shipping process, we may be able to update your order with a
              shipping address change, quantity change or cancellation. To request one of these changes, please contact
              us and we&apos;ll make every effort to accommodate your request! Unfortunately, we are unable to make any
              changes to sizes in your order or swap items.
            </p>
            <p className={styles.answer}>
              Once your request is received, one of our team members will notify you via email to confirm whether or not
              your request was able to be processed.
            </p>
            <p className={styles.answer}>
              Please remember that all orders are subject to our return policies, unless otherwise stated in the
              product&apos;s description or order confirmation email.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Can I place an order over the phone?</p>
            {/* Answer */}
            <p className={styles.answer}>
              At this time we only accept orders placed through the website and are not able to take your credit card
              information over the phone. If you&apos;re having trouble placing your order, please reach out to us and we&apos;ll
              do our best to help troubleshoot and guide you through the ordering process.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              Can I get a different size or color than what is offered through the store?
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              If a size, color or other variant doesn&apos;t appear online, it is not currently available for purchase.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>What is the sales tax on my order?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Sales tax is applied to all domestic orders. The tax is calculated based on applicable sales tax and use
              tax laws within each state.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>What do I do if my order arrived damaged, incorrect or incomplete?</p>
            {/* Answer */}
            <p className={styles.answer}>If your item arrived damaged, or you received an incorrect item:</p>
            <p className={styles.answer}>
              Please contact us as soon as possible so we can investigate and resolve your issue. Please attach photos
              with your submission. Photos are required to verify the damage and/or to confirm which incorrect item was
              shipped. This helps us investigate what went wrong and prevent similar issues for you and other customers
              in the future.
            </p>
            <p className={styles.answer}>
              Upon review of the photos, we&apos;ll issue a return label to you via email. Once the affected item is received
              by our warehouse, we&apos;ll ship you a replacement or refund you if the item is no longer in stock.
            </p>
            <p className={styles.answer}>
              Please be advised we are not responsible for any damages to any merchandise once the item has been worn,
              used or washed.
            </p>
            <p className={styles.answer}>
              Please also be advised we are only able to process a refund or replacement for damaged and/or incorrect
              items returned within 30 days from the date you received the order.
            </p>
            <p className={styles.answer}>If your order arrived incomplete:</p>
            <p className={styles.answer}>
              Please contact us as soon as possible letting us know what is missing from your order so we can
              investigate and resolve your issue.
            </p>
            <p className={styles.answer}>
              Please be advised we are only able to process a refund or a reshipment for the missing item(s) within 30
              days from the date you received the order.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              What if the item I ordered arrives and it doesn&apos;t look like the photo on the store?
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              We make every effort to fully and accurately represent the product design, color, and other product
              description details. However, as pre-orders are in advance of production, the design team reserves the
              right to make certain changes if necessary to ensure the quality of the item prior to shipment.
            </p>
            <p className={styles.answer}>
              If you believe the item you received differs greatly from the description, or you believe the wrong item
              was received, please contact us. Be sure to include a photo or two so our team can see the difference in
              order to better help you.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How do I access my digital files?</p>
            {/* Answer */}
            <p className={styles.answer}>
              To access your files on an iOS device, you&apos;ll need to first download to a desktop computer and then
              transfer the files to your device. Unfortunately, iOS devices don&apos;t allow you to download music files
              directly to your phone. We apologize for the inconvenience!
            </p>
            <p className={styles.answer}>How to access your files on your Android Phone:</p>
            <p className={styles.answer}>
              To access the album on your phone, follow the link provided and click &quot;Download&quot;
            </p>
            <p className={styles.answer}>
              You will then be taken to the downloaded folder and you will then need to click &quot;extract all&quot;
            </p>
            <p className={styles.answer}>
              Once the album is finished downloading, a new folder will pop up to confirm that the files are in MP3
              format
            </p>
            <p className={styles.answer}>You can then listen to the album on your phone&apos;s music app.</p>
            <p className={styles.answer}>How to access your files on your desktop computer:</p>
            <p className={styles.answer}>
              Open the downloaded folder (in most cases, the folder name will end with .zip)
            </p>
            <p className={styles.answer}>Click &quot;extract all&quot;</p>
            <p className={styles.answer}>
              Once the album is finished downloading, a new folder will pop up with the files in MP3 format
            </p>
            <p className={styles.answer}>You can then copy and paste the album to your desktop or mobile device.</p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>Can I get a refund on my digital music purchase?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Digital music purchases are non-refundable. All downloadable or streamable music sales are final,
              complete, and non-refundable. Under no circumstances are we able to refund the portion of your order that
              contains digital music.
            </p>
            <p className={styles.answer}>
              If you have trouble accessing the music, please reach out to us and we&apos;ll make sure you can access your
              music ASAP.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>I live outside the US. Why can&apos;t I buy or access digital downloads?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Unfortunately, due to copyright restrictions, digital downloads are not available outside of the US unless
              otherwise specified on the store.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              My limited edition order shipped but didn&apos;t arrive due to a shipping error. How can I get my item?
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              If your package is returned to our warehouse due to a shipping error, we&apos;ll contact you for an updated
              address via the email provided with your shipping information. If we don&apos;t get a response within 5
              business days, we reserve the right to refund your order.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How do discounts and special offers work?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Unless otherwise specified, product prices already reflect discounts. All offers are limited to stock on
              hand; no rain checks or vouchers are available unless otherwise noted. Not valid after purchase, on prior
              purchases, gift cards, gift certificates, taxes, shipping, or handling and processing charges. Purchaser
              must pay applicable sales tax. Offer may not be combined with any other sale, promotion, discount, code,
              promo, coupon and/or offer. Promotions have no cash value. Offer cannot be sold, transferred, or otherwise
              bartered. Void where prohibited, taxed or otherwise restricted. Returns or cancellations of any portion of
              a purchase requires equal forfeiture of offer or amount equal to offer. Universal Music Group has the
              right to end or modify any promotion at any time at its sole discretion. other restrictions may apply.
              Offers only apply to the United States unless otherwise noted.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
