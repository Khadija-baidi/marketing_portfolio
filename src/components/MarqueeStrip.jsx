import MarqueeText from './ui/MarqueeText';

export default function MarqueeStrip() {
  return (
    <section aria-hidden className="relative bg-ink py-12 md:py-20 overflow-hidden border-y border-sand/10">
      <MarqueeText
        items={['STRATEGY', 'BRAND', 'PERFORMANCE', 'CREATIVE', 'GROWTH', 'STORY']}
      />
      <div className="mt-4 opacity-60">
        <MarqueeText
          items={['SEO', 'META ADS', 'GOOGLE ADS', 'CRM', 'CONTENT', 'AI OPS']}
          outline
          reverse
        />
      </div>
    </section>
  );
}
