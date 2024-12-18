import styles from "./styles/home.module.css";
import home_block from "./data/home_block.json";
import footer from "./data/footer.json";
import Navbar from "./components/navbar";
import StartBlock from "./components/blocks/startBlock";
import LabBlock from "./components/blocks/labBlock";
import ImpactBlock from "./components/blocks/impactBlock";
import QuotesBlock from "./components/blocks/quotesBlock";
import ContactFooter from "./components/blocks/contactFooter";
import FooterFooter from "./components/blocks/footerFooter";

export default function Home() {
  var blocks = home_block;
  blocks = blocks.concat(footer);

  const groupMapping = {
    "home_start": <StartBlock />,
    "home_lab": <LabBlock />,
    "home_impact": <ImpactBlock />,
    "home_quotes": <QuotesBlock />,
    "footer_contact": <ContactFooter />,
    "footer_footer": <FooterFooter />
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`${styles.block}`}
            style={{
              height: `calc(100vw * ${block.height / 1280})`,
              width: "100%",
              background: block.background,
            }}
          >
            {block.hasVideo ? (
                <div className={styles.mediaContainer}>
                  <video autoPlay loop muted className={styles.media}>
                    <source src={block.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className={styles.mediaContainer}>
                  {block.imageUrl ? (<img src={block.imageUrl} alt={block.title} className={styles.media} />) : (<></>)}
                </div>
              )}
              {groupMapping[block.group]}
          </div>
        ))}
      </div>
    </div>
  );
}
