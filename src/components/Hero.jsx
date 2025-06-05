export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-espresso text-cream">
      <h1 className="text-4xl font-serif mb-4">Small-batch brews, big-town heart.</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-cardinal text-cream rounded">Order Ahead</button>
        <button className="px-4 py-2 bg-sage text-espresso rounded">See Menu</button>
      </div>
    </section>
  )
}
