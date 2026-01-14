import styles from "./page.module.css";

export const metadata = {
  title: "Do Not Sell My Information",
  description: "Learn about your privacy rights and how to opt out of the sale of your personal information on The Weeknd official website.",
  keywords: ["The Weeknd", "privacy rights", "do not sell", "personal information", "data protection"],
};

// * Function to get current date
function getEffectiveDate() {
  const now = new Date();
  // Months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Get current month, day, and year
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  // Return formatted date
  return `Effective Date: ${month} ${day}, ${year}`;
}

export default function Legal() {
  return (
    <>
      <main>
        <div className={styles.legalNoticeContainer}>
          {/* Title */}
          <h1 className={styles.title}>Do not sell my information</h1>

          {/* Effective date */}
          <p className={styles.paragraph}>{getEffectiveDate()}</p>

          {/* Legal notice */}
          <p className={styles.paragraph}>
            Here at Universal Music Group, we take your privacy seriously and we&apos;re dedicated to providing you with the
            best possible music experience. To do that, we collect and use information about you to personalize our
            sites, stores, and marketing communications. However, only you know what your best experience is, so we
            provide fans with choices about how we collect, use and share your data.
          </p>

          <p className={styles.paragraph}>
            This page describes specific rights you may have based on where you live, but if you live somewhere else you
            can still contact us and we will try to address any questions or concerns.
          </p>

          <p className={styles.paragraph}>
            To exercise any of the rights described on this page, or to ask us a question about our data collection
            practices, please contact us:
          </p>

          <p className={styles.paragraph}>Online using our Privacy Request Form or</p>

          <p className={styles.paragraph}>
            By emailing us at{" "}
            <a href="mailto:gilmer2002@outlook.com" className={styles.underline}>
              privacy@universalmusic.com
            </a>
            .
          </p>

          <p className={styles.paragraph}>US state rights</p>

          <p className={styles.paragraph}>
            Residents of Colorado, Connecticut, Utah, or Virginia have certain rights with respect to their personal
            information, including the right to:
          </p>

          <p className={styles.paragraph}>
            Confirm whether we process the consumer&apos;s personal information and to access such information
          </p>

          <p className={styles.paragraph}>Correct inaccuracies in personal information</p>

          <p className={styles.paragraph}>Delete personal information</p>

          <p className={styles.paragraph}>Data portability</p>

          <p className={styles.paragraph}>Opt out from targeted advertising and/or</p>

          <p className={styles.paragraph}>Opt out from the sale of personal information</p>

          <p className={styles.paragraph}>
            Residents of Virginia, Colorado, and Connecticut have the right to opt out from profiling in furtherance of
            decisions that produce legal or similarly significant effects and to appeal decisions regarding a request to
            exercise their rights.
          </p>

          <p className={styles.paragraph}>
            California residents may opt out of having their personally identifiable information shared with third
            parties for those third parties&apos; direct marketing purposes by contacting us as described above.
          </p>

          <p className={styles.paragraph}>
            Do-Not-Track Signals and Similar Mechanisms. Some web browsers may transmit &quot;do-not-track&quot; signals to the
            websites and other online services with which a user communicates. While there is no comprehensive industry
            standard for such signals, certain websites UMG operates attempt to recognize this signal and, if detected,
            limit our use of cookies and similar tracking technologies. Unfortunately, due to the variation in browsers
            and detection capabilities and the lack of accepted standards we cannot guarantee that transmitting a
            &quot;do-not-track&quot; signal will result in our disabling cookies and tracking technologies. We recommend using the
            cookie choices tools on our sites to control UMG&apos;s use of cookies and tracking technologies.
          </p>

          <p className={styles.paragraph}>Personal Data We Collect and Disclose</p>

          <p className={styles.paragraph}>
            In the preceding 12 months, UMG collected and disclosed the following categories of personal data. UMG
            shares personal data for targeted advertising but does not otherwise engage in &quot;sales&quot; of personal data as
            defined by state laws.
          </p>

          {/* Personal data disclosure table */}
          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Categories of personal data</th>
                  <th className={styles.tableHeader}>
                    Disclosed to the following categories of third parties for business purposes
                  </th>
                  <th className={styles.tableHeader}>
                    Shared for targeted advertising purposes with the following categories of third parties
                  </th>
                  <th className={styles.tableHeader}>Sold to the following categories of third parties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                    Identifiers such as real name, alias, postal address, unique personal identifier, online identifier,
                    IP address, email address, account name, social security number, driver&apos;s license number, passport
                    number, or other similar identifiers
                  </td>
                  <td className={styles.tableCell}>
                    UMG affiliates, business partners, our service providers, and advertising companies
                  </td>
                  <td className={styles.tableCell}>
                    Our business partners, our service providers, and advertising companies
                  </td>
                  <td className={styles.tableCell}>Data enrichment providers</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Commercial information, including products or services purchased, obtained, or considered, or other
                    purchasing or consuming histories or tendencies
                  </td>
                  <td className={styles.tableCell}>
                    UMG affiliates, business partners, service providers, and advertising companies
                  </td>
                  <td className={styles.tableCell}>N/A</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Gender, a protected classification under California and federal law
                  </td>
                  <td className={styles.tableCell}>UMG affiliates, business partners, and service providers</td>
                  <td className={styles.tableCell}>Advertising companies</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Internet or other electronic network activity information, including browsing history, search
                    history, and information regarding a consumer&apos;s interaction with an internet website, application,
                    or advertisement
                  </td>
                  <td className={styles.tableCell}>UMG affiliates, business partners, and service providers</td>
                  <td className={styles.tableCell}>Advertising companies</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Geolocation data, generally derived from IP address location services, but could also include
                    Presence in a geo-fenced area
                  </td>
                  <td className={styles.tableCell}>UMG affiliates, business partners, and service providers</td>
                  <td className={styles.tableCell}>Advertising companies</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Audio, electronic, visual, or similar information</td>
                  <td className={styles.tableCell}>Service providers</td>
                  <td className={styles.tableCell}>N/A</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Inferences drawn from any of the information identified in this subdivision to create a profile
                    about a consumer reflecting the consumer&apos;s preferences, characteristics, psychological trends,
                    predispositions, behavior, attitudes, intelligence, abilities, and aptitudes
                  </td>
                  <td className={styles.tableCell}>
                    UMG affiliates; business partners, service providers, and advertising companies
                  </td>
                  <td className={styles.tableCell}>Advertising companies</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                    Other information about you that is linked to the personal information above
                  </td>
                  <td className={styles.tableCell}>
                    UMG affiliates, business partners, service providers, and advertising companies
                  </td>
                  <td className={styles.tableCell}>Advertising companies</td>
                  <td className={styles.tableCell}>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>Categories of Sources:</p>

          <p className={styles.paragraph}>We collect personal data from:</p>

          <p className={styles.paragraph}>Individuals who provide information directly</p>

          <p className={styles.paragraph}>Affiliates and business partners, which may include third parties</p>

          <p className={styles.paragraph}>Third-party data providers and data brokers</p>

          <p className={styles.paragraph}>Service providers and</p>

          <p className={styles.paragraph}>Advertising companies</p>

          <p className={styles.paragraph}>Business or Commercial Purposes for Processing Personal Data:</p>

          <p className={styles.paragraph}>
            We use and disclose the personal data as described above in the &quot;How Your Information May Be Used&quot; section
            of our privacy policy.
          </p>

          <p className={styles.paragraph}>Your Rights:</p>

          <p className={styles.paragraph}>
            Residents of certain states have rights with respect to the personal data collected by UMG. You may be able
            exercise the following rights regarding your personal data:
          </p>

          <p className={styles.paragraph}>The right to confirm whether we process personal data about you</p>

          <p className={styles.paragraph}>The right to correct inaccurate personal data</p>

          <p className={styles.paragraph}>
            The right to know the categories and specific pieces of personal data we collect, use, disclose, and sell
            about you; the categories of sources from which we collected personal data about you; our purposes for
            collecting or selling personal data about you; the categories of personal data about you that we have sold
            or disclosed for a business purpose; and the categories of third parties with which we have shared personal
            data
          </p>

          <p className={styles.paragraph}>
            The right to request the deletion of personal data we have collected about you
          </p>

          <p className={styles.paragraph}>
            The right to opt out of processing and sharing of personal data for targeted advertising
          </p>

          <p className={styles.paragraph}>
            Depending on your state, the right to limit our processing of certain &quot;sensitive&quot; personal data, including
            the withdrawal of prior consent and/or
          </p>

          <p className={styles.paragraph}>
            The right to be free of discriminatory treatment for the exercise of the above privacy rights
          </p>

          <p className={styles.paragraph}>
            UMG does not knowingly sell or share personal data of individuals younger than 16.
          </p>

          <p className={styles.paragraph}>
            Depending on your state, if you have submitted a request that we have not reasonably fulfilled, you may
            contact us to appeal our decision by sending an email with the subject line &quot;Appeal&quot; to at{" "}
            <a href="mailto:gilmer2002@outlook.com" className={styles.underline}>
              privacy@universalmusic.com
            </a>
            .
          </p>

          <p className={styles.paragraph}>Verification</p>

          <p className={styles.paragraph}>
            We may take steps to verify your identity before completing your request. Our verification measures vary
            based on the risk to the individual and may involve confirming access to the relevant email account,
            providing a government-issued ID or other identification documents, or providing other account details or
            information that indicates a valid request.
          </p>

          <p className={styles.paragraph}>Authorized Agent:</p>

          <p className={styles.paragraph}>
            You may also designate an authorized agent to requests on your behalf by designating such an agent in
            writing or through a power of attorney. We will require the agent to provide us with proof that you have
            authorized the agent to make requests on your behalf prior to accepting requests from the agent.
          </p>

          <p className={styles.paragraph}>European rights</p>

          <p className={styles.paragraph}>
            This section of this Privacy Policy applies only if you use the App from a country that is a Member State of
            the European Economic Area and supplements the information in this Privacy Policy.
          </p>

          <p className={styles.paragraph}>
            You may be entitled, subject to validation of your identity and in accordance with applicable law, to:
          </p>

          <p className={styles.paragraph}>
            · Confirm whether we process the consumer&apos;s personal information and to access such information
          </p>

          <p className={styles.paragraph}>Correct inaccuracies in personal information</p>

          <p className={styles.paragraph}>Delete personal information</p>

          <p className={styles.paragraph}>Data portability and/or</p>

          <p className={styles.paragraph}>Object to or request the restriction of processing of your personal data</p>

          <p className={styles.paragraph}>
            You may also be entitled, in accordance with applicable law, to lodge a complaint with a supervisory
            authority if you consider that our processing of your personal data infringes applicable law.
          </p>

          <p className={styles.paragraph}>
            Legal Basis for Data Processing: We process personal data for the purposes set out in the relevant privacy
            policy. Our legal bases to process personal data includes processing that is: necessary for the performance
            of the contract between you and us (for example, to provide you with the services you request and to
            identify and authenticate you so you may use the App); necessary to comply with legal requirements (for
            example, to comply with applicable accounting rules and to make mandatory disclosures to law enforcement);
            necessary for our legitimate interests (for example, to manage our relationship with you and to improve the
            App); and based on the consent of our customers (for example, to communicate with you about our products and
            services and provide you with marketing information), which may subsequently be withdrawn at any time (by
            using preference settings found in our emails/Apps or by contacting UMG as described above) without
            affecting the lawfulness of processing based on consent before its withdrawal.
          </p>

          <p className={styles.paragraph}>
            We may use automated decision-making technologies, including profiling, to support our data processing
            activities. Our automated decision-making capabilities include logic that attempts to identify artists,
            music, communications, products, or offers that we believe may interest you. By using this logic, it helps
            us personalize your interactions with UMG and UMG artists. For you, this means that you may see online
            advertisements, direct marketing communications (if you have subscribed), or other advertising or marketing
            messages or special offers based on your activity on our Apps or interactions with UMG Companies or our
            third-party partners.
          </p>

          <p className={styles.paragraph}>
            In some instances, you may be required to provide us with personal data for processing as described above,
            for us to be able to provide you to use all the features of the App.
          </p>

          <p className={styles.paragraph}>International transfers</p>

          <p className={styles.paragraph}>
            Our sharing your personal data in accordance with this Privacy Policy, may involve transferring your data
            outside the European Economic Area (EEA). Whenever we transfer your personal data out of the EEA, we ensure
            a similar degree of protection is afforded to it by certifying, where required by law, at least one of the
            following safeguards is implemented:
          </p>

          <p className={styles.paragraph}>
            · transferring personal data to countries that have been deemed to provide an adequate level of protection
            for personal data by the European Commission or
          </p>

          <p className={styles.paragraph}>
            · using specific contracts approved by the European Commission which give personal data the same protection
            it has in Europe.
          </p>

          <p className={styles.paragraph}>
            You may be entitled, in accordance with applicable law, to request a copy of relevant safeguards by
            contacting UMG as described above.
          </p>
        </div>
      </main>
    </>
  );
}
