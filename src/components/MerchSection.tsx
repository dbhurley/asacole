import { merchItems, MERCH_ARTIST, MERCH_HEADING, MERCH_SHOP_URL } from "@/content/merch";

export function MerchSection() {
  return (
    <section id="merch" className="questions churches-section merch-section" aria-labelledby="merch-heading">
      <div>
        <p className="churches-kicker">Merch</p>
        <h2 id="merch-heading" className="section-title">{MERCH_HEADING}</h2>
        <p className="churches-intro">
          Official {MERCH_ARTIST} merch, printed to order and shipped through the Vox Petra shop.
        </p>
      </div>
      <div className="churches-list merch-list">
        {merchItems.map((item) => (
          <article key={item.slug}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="merch-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={`${MERCH_ARTIST} ${item.title}`} width={item.width} height={item.height} loading="lazy" />
            </a>
            <h3>{item.title}</h3>
            <p>{item.kind}</p>
            <div className="churches-links">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                Buy on Fourthwall
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="churches-more">
        <a href={MERCH_SHOP_URL} target="_blank" rel="noopener noreferrer">
          All Vox Petra merch
        </a>
      </p>
    </section>
  );
}
