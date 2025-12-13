import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Privacy.module.css";

function Privacy() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Privacy Policy";
  }, []);

  // * Function to get current date
  const effectiveDate = () => {
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
  };

  return (
    <>
      <main>
        <div className={styles.privacyContainer}>
          {/* Title */}
          <h1 className={styles.title}>Privacy policy</h1>

          {/* Last updated */}
          <p className={styles.paragraph}>{effectiveDate()}</p>

          {/* Privacy policy */}
          <p className={styles.paragraph}>
            Universal Music Group is the world leader in music-based entertainment. We are the home for music's greatest
            artists, innovators, and entrepreneurs. As digital technology refashions the world, our unmatched commitment
            to lead by developing new services, platforms, and business models for the delivery of music and related
            content empowers innovators and allows new commercial and artistic opportunities to flourish.
          </p>

          <p className={styles.paragraph}>
            As part of this mission, Universal Music Group operates websites, applications, stores, and other services
            (which we refer to in this privacy policy as "Apps") to help our artists stay connected with fans in new and
            exciting ways.
          </p>

          <p className={styles.paragraph}>
            This privacy policy describes Universal Music Group's data practices, including the collection, use, and
            sharing of data through Apps that link to this privacy policy, along with the choices and rights you have to
            control those data practices.
          </p>

          <p className={styles.paragraph}>WHO WE ARE</p>

          <p className={styles.paragraph}>
            Apps that link to this privacy policy are operated by Universal Music Investments, Inc., located at 2220
            Colorado Ave, Santa Monica, CA 90404. As used in this policy, "UMG," "we," and "our" refers to this entity,
            who acts as a data controller and is responsible for the processing of personal data by the Apps under
            applicable privacy and data protection laws.
          </p>

          <p className={styles.paragraph}>
            Other entities in the Universal Music Group family of companies may receive or process data in connection
            with the operation of the Apps, including UMG Commercial Services, Inc., UMG Recordings, Inc., and UMG
            Recordings Services, Inc., each of which is also located at 2220 Colorado Ave, Santa Monica, CA 90404. Where
            applicable, each of these entities separately makes the disclosures in this privacy policy.
          </p>

          <p className={styles.paragraph}>
            Apps may be operated on behalf of artists and/or partners who may process personal data in connection with
            the Apps. In such cases we will disclose the relevant third parties on the Apps and/or at the point of data
            collection.
          </p>

          <p className={styles.paragraph}>CONTACT US</p>

          <p className={styles.paragraph}>
            Questions or comments about this privacy policy, our data practices, or requests regarding your privacy
            rights may be submitted through our Privacy Request Form by clicking here. We are only able to respond to
            requests related to our data practices through this form.
          </p>

          <p className={styles.paragraph}>
            ALL NON-PRIVACY QUESTIONS: Please see this FAQ regarding how to contact UMG with questions or requests not
            related to our privacy practices or your privacy rights.
          </p>

          <p className={styles.paragraph}>
            You may also contact UMG's Data Protection Officer, by writing to Universal Music Group (ATTN: "Data
            Protection Officer"), 2220 Colorado Ave, Santa Monica, CA 90404 USA.
          </p>

          <p className={styles.paragraph}>INFORMATION WE COLLECT</p>

          <p className={styles.paragraph}>In our operation of the Apps, we collect the following categories of data:</p>

          {/* * TABLE GOES HERE * */}

          <p className={styles.paragraph}>HOW YOUR INFORMATION MAY BE USED</p>

          <p className={styles.paragraph}>We may use information we collect to:</p>

          <p className={styles.paragraph}>· Respond requests and/or queries, including customer support queries,</p>

          <p className={styles.paragraph}>· Fulfil orders, process payments, and provide order-related updates,</p>

          <p className={styles.paragraph}>
            · Send requested marketing communications via email, SMS, or direct messages,
          </p>

          <p className={styles.paragraph}>
            · Advertise our products or the products of third parties that we believe may be of interest,
          </p>

          <p className={styles.paragraph}>
            · Create segments of users with similar features for ad targeting or seeding lookalike audiences,
          </p>

          <p className={styles.paragraph}>· Operate, measure, and audit online advertisements,</p>

          <p className={styles.paragraph}>
            · Build user profiles to assist us in understanding your interests, create marketing or advertising
            segments, and predict likely sales, marketing, or advertising outcomes,
          </p>

          <p className={styles.paragraph}>
            · Train AI or machine learning models that analyze or predict sales, marketing, or advertising outcomes,
          </p>

          <p className={styles.paragraph}>· Personalize and improve our Apps, products, and services,</p>

          <p className={styles.paragraph}>· Administer promotions, contests, or sweepstakes,</p>

          <p className={styles.paragraph}>
            · Operate and administer our Apps, including troubleshooting, data analysis, testing, research, statistics,
            and other internal operations,
          </p>

          <p className={styles.paragraph}>
            · Manage your access to our Apps, including notifying you of changes to the Apps,
          </p>

          <p className={styles.paragraph}>· Analyze usage of our Apps,</p>

          <p className={styles.paragraph}>· Secure our Apps and prevent fraud or other illegal activities,</p>

          <p className={styles.paragraph}>· Resolve disputes and/or enforce our agreements,</p>

          <p className={styles.paragraph}>· Comply with legal and regulatory obligations.</p>

          <p className={styles.paragraph}>HOW YOUR INFORMATION MAY BE SHARED</p>

          <p className={styles.paragraph}>
            In compliance with applicable laws, we may share information about you with third parties to facilitate the
            uses described above, including:
          </p>

          <p className={styles.paragraph}>
            · Our affiliates and joint venture partners that we have now or may have in the future,
          </p>

          <p className={styles.paragraph}>
            · Our business partners, suppliers, agents, and sub-contractors who provide services on our behalf;
          </p>

          <p className={styles.paragraph}>· Relevant UMG artists and/or their representatives,</p>

          <p className={styles.paragraph}>
            · With other users where you leave comments or otherwise contribute content to an App,
          </p>

          <p className={styles.paragraph}>· Advertisers, advertising networks and social networks,</p>

          <p className={styles.paragraph}>
            · As part of an actual or potential corporate sale, merger, or acquisition, or other transfer of all or part
            of UMG,
          </p>

          <p className={styles.paragraph}>
            · Pursuant to a subpoena, court order, governmental inquiry, or other legal process or as otherwise required
            by law, to protect our rights or the rights of third parties, or to protect the safety or security of any
            person or entity, or
          </p>

          <p className={styles.paragraph}>
            · With your consent or as otherwise disclosed at the time of data collection or sharing.
          </p>

          <p className={styles.paragraph}>STORAGE AND RETENTION OF INFORMATION</p>

          <p className={styles.paragraph}>
            We will retain the information we collect in accordance with applicable laws and as reasonably necessary for
            our processing purposes set out under this privacy policy, including resolution of disputes, enforcement of
            agreements, securing the Apps, and to comply with our legal obligations. When personal data is no longer
            necessary for our purposes we will delete or deidentify the data.
          </p>

          <p className={styles.paragraph}>
            We will also take steps to ensure that the information we collect is treated securely and in accordance with
            this Privacy Policy. We have put in place technical and organisational procedures designed to safeguard the
            information we collect.
          </p>

          <p className={styles.paragraph}>
            Unfortunately, the transmission of information via the Internet is not completely secure. Although we will
            do our best to protect the information we collect, we cannot guarantee its security.
          </p>

          <p className={styles.paragraph}>CHILDREN</p>

          <p className={styles.paragraph}>
            Our apps are not directed toward children (as defined by local law) nor does UMG knowingly collect
            information from children (as defined by local law) without parental consent except where in compliance with
            applicable laws.
          </p>

          <p className={styles.paragraph}>YOUR RIGHTS</p>

          <p className={styles.paragraph}>
            You may have certain rights regarding our processing of personal data about you. These rights may include
            access to, rectification, erasure, and/or portability of your personal data. You can exercise these rights
            by contacting us as described in the "Contact" section. We may take steps to verify your identity before
            completing your request. Our verification measures vary based on the risk to the individual and may involve
            confirming access to the relevant email account, providing a government-issued ID or other identification
            documents, or providing other account details or information that indicates a valid request.
          </p>

          <p className={styles.paragraph}>
            You may also be entitled, in accordance with applicable law, to lodge a complaint with a supervisory
            authority if you consider that our processing of your personal data infringes applicable law.
          </p>

          <p className={styles.paragraph}>
            Specific information regarding rights related to data processing of European data and personal data about
            residents of California, Colorado, Virginia, Connecticut, and Utah can be found on our "Your Privacy Rights"
            page.
          </p>

          <p className={styles.paragraph}>INTERNATIONAL DATA TRANSFERS FROM THE EU, UK, OR SWITZERLAND</p>

          <p className={styles.paragraph}>
            UMG’s US-based group companies UMG Recordings Services, Inc., UMG Recordings, Inc., Universal Music
            Investments, Inc., Universal Music Group Holdings, Inc., Universal Music Group, Inc., UMG Commercial
            Services, Inc., and Universal Music Publishing, Inc. participate in the EU-US Data Privacy Framework, the
            Swiss-US Data Privacy Framework, and the UK Extension to the EU-US Data Privacy Framework (collectively the
            "DPF") regarding the collection, use, and retention of personal information transferred to the United States
            from member countries of the European Economic Area, Switzerland, and the United Kingdom. UMG has certified
            to the United Stated Department of Commerce that we adhere to the Data Privacy Framework Principles. More
            information about the Data Privacy Framework, including UMG's certification, is available on the Data
            Privacy Framework (DPF) Program website.
          </p>

          <p className={styles.paragraph}>
            Our group companies are subject to the investigatory and enforcement powers of the United States Federal
            Trade Commission (FTC).
          </p>

          <p className={styles.paragraph}>
            UMG collects and uses personal information as described in the "Information we collect" and "How your
            information may be used" sections above. We may disclose personal information about you as described in the
            "How your information may be shared" section above. UMG may be required to disclose personal information in
            response to lawful requests by public authorities, including to meet national security or law enforcement
            requirements.
          </p>

          <p className={styles.paragraph}>
            Where we transfer personal information subject to the DPF to a third party, we require that third party to
            access, use, and disclose the personal information in compliance with the DPF. UMG is responsible for the
            processing of personal information we receive under the DPF and subsequently transfer to third parties
            acting as an agent on our behalf. We remain liable if such third parties process personal information
            inconsistent with the DPF Principles unless we prove that UMG is not responsible for the event giving rise
            to the damage.
          </p>

          <p className={styles.paragraph}>
            Individuals whose data is subject to the DPF have the right to access personal information about them. You
            may also have choices to limit the use, and disclosure of personal information about you. Please see our
            "Your Privacy Rights" page for additional information regarding your rights and how to make privacy
            requests.
          </p>

          <p className={styles.paragraph}>Dispute Resolution</p>

          <p className={styles.paragraph}>
            If you have any questions or complaints regarding UMG's handling of your personal information, please
            contact us using our Privacy Request Form or email us at privacy.officer@umusic.com. We will respond
            promptly. If you are not satisfied with our resolution of your privacy or data use complaint you may contact
            our US-based independent dispute resolution body, JAMS by clicking here. It may be possible, under certain
            conditions, for individuals to invoke binding arbitration.
          </p>

          <p className={styles.paragraph}>CHANGES TO OUR PRIVACY POLICY</p>

          <p className={styles.paragraph}>
            Any material changes we may make to our privacy policy in the future will be posted here. Please check back
            frequently to see any updates or changes to our privacy policy.
          </p>

          <p className={styles.paragraph}>DIGITAL ADVERTISING</p>

          <p className={styles.paragraph}>
            We use third party partners to enable targeted advertising on third-party social media platforms, websites,
            and mobile apps. These companies collect information through our Apps to target users and serve ads. Some of
            these ads may be personalized, meaning that these ads are intended to be relevant to you based on
            information the companies collect or receive about your use of our App and third-party sites and apps over
            time, including through the use of cookies and other tracking technologies.
          </p>

          <p className={styles.paragraph}>
            Visit the DAA Webchoices tool at www.aboutads.info to learn more about targeted advertising and how to opt
            out of targeted advertising by companies participating in the DAA self-regulatory program. If you delete
            your cookies or use a different browser or mobile device, you may need to renew your opt-out choices
            exercised through the DAA Webchoices tool.
          </p>

          <p className={styles.paragraph}>
            To opt-out of targeted advertising in mobile apps by companies participating in the DAA's AppChoices
            program, you can download that app onto your device from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
              href="https://youradchoices.com/appchoices"
            >
              https://youradchoices.com/appchoices
            </a>
            . You can also limit data collection and use by third parties for targeted advertising in your mobile device
            settings, where available.
          </p>

          <p className={styles.paragraph}>
            Note that electing to opt out will not stop advertising from appearing in your browser or applications. It
            may make the ads you see less relevant to your interests.
          </p>

          <p className={styles.paragraph}>COOKIES</p>

          <p className={styles.paragraph}>
            Our Apps use cookies and other similar technologies to improve your experience and support targeted
            advertising. For the purpose of this Cookies Policy, cookies, and other similar technologies (like scripts,
            plug-ins, tags, device fingerprints, Local Stored Objects, beacons, and pixels) are all referred to as
            "cookies."
          </p>

          <p className={styles.paragraph}>
            You can find more information about the cookies and other tracking technologies we use, the purposes for
            which we use them, and make certain choices about cookies through the cookie choices tools available on our
            Apps.
          </p>

          <p className={styles.paragraph}>
            Most internet browsers are automatically set up to accept cookies. However, if you want to refuse or delete
            any cookies (or similar technologies), please refer to the help and support area on your internet browser
            for instructions on how to block or delete cookies. Please note you may not be able to take advantage of all
            the features of our App, including certain personalised features, if you delete or disable cookies.
          </p>

          <p className={styles.paragraph}>
            For more information on managing cookies, please go to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
              href="https://www.allaboutcookies.org"
            >
              www.allaboutcookies.org
            </a>
            , or visit www.youronlinechoices.eu which has further information about behavioural advertising and online
            privacy.
          </p>
        </div>
      </main>
    </>
  );
}

export default Privacy;
