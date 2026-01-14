import Link from "next/link";
import styles from "./page.module.css";
import Back from "../../../components/Back/Back";

export const metadata = {
  title: "Help and Support - Shipping",
  description: "Get help with shipping and delivery of orders on The Weeknd official website.",
  keywords: ["The Weeknd", "help", "shipping", "delivery", "customer service", "support"],
};

export default function Shipping() {
  return (
    <>
      <main>
        <div className={styles.shippingContainer}>
          {/* Back button */}
          <Back to="/help" text="Back to help and support" />

          {/* Title */}
          <h1 className={styles.title}>Shipping</h1>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              My tracking says my order was delivered, but I haven&apos;t gotten it yet. Where is it?
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              Some carriers will mark a package as delivered before they actually deliver it. Though unusual, this can
              happen up to 5 days before an item is actually delivered. You can try contacting the carrier to get better
              insight into the delay. If you still haven&apos;t received your package after 5 days, and you&apos;ve checked with
              your neighbors and still don&apos;t have it, please reach out to us here and we&apos;ll do our best to help!
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              I received notification my order was shipped but I still have not received it and my tracking info does
              not indicate the package was delivered.
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              If your shipment tracking link for your order has not been updated beyond the &quot;pre-shipment&quot; or &quot;label
              created&quot; stage in 2 weeks, please contact us so we can look into it for you.
            </p>
            <p className={styles.answer}>
              You have up to 30 days from the date of shipment to claim your package as lost in order to receive a
              reshipment if stock permits or refund for your missing item(s).
            </p>
            <p className={styles.answer}>
              Please note that we are not responsible for packages lost due to an incorrect shipping address being
              provided with your order. Shipping delays will occur if you provide an incorrect address at checkout.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>What do I need to know about customs fees?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Depending on your country, you may be charged customs/import fees. Customs charges and fees are the sole
              responsibility of the purchaser; we are not responsible for any additional customs charges or fees once
              your package has left our facility.
            </p>
            <p className={styles.answer}>
              If customs fees and charges are refused at the time of delivery, your order will be returned to us. Once
              we receive your package, we can refund you for your purchase. If you are unfamiliar with customs fees and
              charges, please contact your local postal or customs office for more information.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>My tracking link says &quot;Label Created&quot; but hasn&apos;t updated. What do I do?</p>
            {/* Answer */}
            <p className={styles.answer}>
              We typically refer to this stage as &quot;pre-shipment&quot;. This could mean a couple of things:
            </p>
            <p className={styles.answer}>
              Your order has been packed and is ready for shipment but the carrier has not yet picked it up from the
              fulfillment center
            </p>
            <p className={styles.answer}>
              The carrier has picked up your package but has not scanned it into their system yet
            </p>
            <p className={styles.answer}>
              If the status does not update within 7 days, please reach out directly to the carrier. If the carrier is
              unable to provide an update, please contact us so that we may help
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>When will I get tracking information?</p>
            {/* Answer */}
            <p className={styles.answer}>
              Tracking information will be sent via e-mail once your package is processed for shipment. Make sure to
              check all inboxes, including your spam folder, if you can&apos;t find your shipping confirmation.
            </p>
            <p className={styles.answer}>
              Please note it can take up to 3 days for your initial tracking information status to update.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>How long will it take for my order to arrive once it ships?</p>
            {/* Answer */}
            <p className={styles.answer}>
              The time it takes for your order to be delivered depends on the shipping method chosen at checkout. Please
              note that the shipping times are in addition to pre-order and processing timelines.
            </p>
            <p className={styles.answer}>Shipping options include:</p>
            <p className={styles.answer}>For deliveries within the US:</p>
            <p className={styles.answer}>UPS Mail Innovations (5-7 days transit)</p>
            <p className={styles.answer}>USPS Media Mail (2-10 days transit)</p>
            <p className={styles.answer}>FedEx Smartpost (2-7 days transit)</p>
            <p className={styles.answer}>
              For deliveries outside of the US: Please note that these orders need to pass through the customs office in
              your country before it will be released for final delivery, which can occasionally cause additional
              delays.
            </p>
            <p className={styles.answer}>APC ParcelConnect Priority DDU (Economy) (11-15 days transit)</p>
            <p className={styles.answer}>
              APC ParcelConnect Priority DDU (Delivery Confirmation Included) (11-15 days transit)
            </p>
            <p className={styles.answer}>
              Once an order leaves our warehouse, carrier shipping delays may occur due to factors outside our control.
              We, unfortunately, can&apos;t control how quickly an order arrives once it has left our warehouse. Contacting
              the carrier is the best way to get more insight into your package&apos;s location and estimated delivery date.
            </p>
            <p className={styles.answer}>
              Please note that shipping delays will occur if you provide an incorrect address at checkout.
            </p>
            <p className={styles.answer}>
              If your package is returned to our facility due to a shipping or delivery issue, we&apos;ll reach out to you
              via the email address provided with your shipping information.
            </p>
            <p className={styles.answer}>
              If we don&apos;t receive a response within 5 business days, we reserve the right to cancel and refund your
              order.
            </p>
            <p className={styles.answer}>
              This applies to all merchandise orders, including limited edition and pre-order sales.
            </p>
            <p className={styles.answer}>
              Please note that in the event of an order shipping in multiple packages, we can only refund you for what
              has been returned to us.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>When will my order ship?</p>
            {/* Answer */}
            <p className={styles.answer}>
              In most cases, excluding pre-orders, orders ship within 2-3 business days. Shipping and delivery dates
              aren&apos;t guaranteed unless otherwise noted.
            </p>
            <p className={styles.answer}>
              Pre-ordered items are not available to ship at the time of purchase. Shipping timelines on pre-orders are
              detailed in the product description, as well as in your confirmation email.
            </p>
            <p className={styles.answer}>
              Note that unless otherwise noted, or the option to ship items separately as they become available is
              selected at checkout, any order that includes a pre-order item will not ship until all items are
              available.
            </p>
            <p className={styles.answer}>
              Please check your confirmation email for details on when pre-order items will ship. Shipping and delivery
              dates on these items are not guaranteed unless otherwise noted.
            </p>
            <p className={styles.answer}>
              While we make every effort to communicate accurate delivery estimates around your orders, unanticipated
              production delays for pre-order and limited edition items do happen. If an item in your order has been
              affected by a production delay, we will notify you via email as soon as possible.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              My order is shipping to a country outside of the United States. Will I have to pay customs/import fees to
              receive my order?
            </p>
            {/* Answer */}
            <p className={styles.answer}>Depending on your country, you may be charged customs/import fees.</p>
            <p className={styles.answer}>
              Customs charges and fees are the sole responsibility of the purchaser; we are not responsible for any
              additional customs charges or fees once your package has left our facility.
            </p>
            <p className={styles.answer}>
              If customs fees and charges are refused at the time of delivery, your order will be returned to us.
            </p>
            <p className={styles.answer}>Once we receive your package, we can refund you for your purchase.</p>
            <p className={styles.answer}>
              If you are unfamiliar with customs fees and charges, please contact your local postal or customs office
              for more information.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>My item was shipped, but still hasn&apos;t shown up. Is it lost in the mail?</p>
            {/* Answer */}
            <p className={styles.answer}>
              You have up to 30 days from the date of shipment to claim your package as lost in order to receive a
              reshipment if stock permits or a refund for your missing item(s).
            </p>
            <p className={styles.answer}>
              If you receive tracking on an order but it has not been updated beyond the &quot;pre-shipment&quot; or &quot;label
              created&quot; stage within 2 weeks, please reach out to us here to look into it for you.
            </p>
            <p className={styles.answer}>
              Please note that we are not responsible for packages lost due to an incorrect shipping address being
              provided with your order.
            </p>
            <p className={styles.answer}>Shipping delays will occur if you provide an incorrect address at checkout.</p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>When will I get tracking information?</p>
            {/* Answer */}
            <p className={styles.answer}>
              You&apos;ll receive tracking info as soon as your package is processed for shipment, via the email you placed
              your order with. Make sure to check all inboxes, including your spam folder, if you can&apos;t find your
              shipping confirmation.
            </p>
            <p className={styles.answer}>
              Please note it can sometimes take up to 3 days for your tracking link to update.
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>My tracking link says &quot;Label Created&quot; but hasn&apos;t updated. What do I do?</p>
            {/* Answer */}
            <p className={styles.answer}>
              We typically refer to this stage as &quot;pre-shipment&quot;. This could mean a couple of things:
            </p>
            <p className={styles.answer}>
              Your order has been packed and is ready for shipment but the carrier has not yet picked it up from the
              fulfillment center
            </p>
            <p className={styles.answer}>
              The carrier has picked up your package but has not scanned it into their system yet
            </p>
            <p className={styles.answer}>
              This could potentially mean it&apos;s been lost between the fulfillment center and the carrier center
            </p>
            <p className={styles.answer}>
              The carrier may need updated information in order to get your package to you and will be in touch with you
            </p>
            <p className={styles.answer}>
              If tracking has not been updated beyond this stage within 2 weeks, please reach out to us for further
              assistance
            </p>
          </div>

          <div className={styles.questionsContainer}>
            {/* Question */}
            <p className={styles.question}>
              My tracking says my order was delivered, but I haven&apos;t gotten it yet. Where is it?
            </p>
            {/* Answer */}
            <p className={styles.answer}>
              Some carriers will mark a package as delivered before they actually deliver it. Though unusual, this can
              happen up to 5 days before an item is actually delivered. You can try contacting the carrier to get better
              insight into the delay.
            </p>
            <p className={styles.answer}>
              If you still haven&apos;t received your package after 5 days and you&apos;ve checked with your neighbors in an
              attempt to locate it, please reach out to us and we&apos;ll do our best to help!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
