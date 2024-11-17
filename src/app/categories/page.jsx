import EachCategory from "@/Components/Categories";
import "./Categories.scss";

export default function CategoriesPage() {
  return (
    <>
      <main className="categories-page">
        <section className="categories">
          <h2>Categories</h2>
          <div className="categories">
            <EachCategory
              title="Occasion-Based Gifts"
              desc="Birthdays, Anniversaries, Weddings"
            />
            <EachCategory
              title="Personalized Gifts"
              desc="Custom Name Items, Photo Gifts"
            />
            <EachCategory
              title="Handcrafted Items"
              desc="Artisan Decor, Handwoven Textiles"
            />
            <EachCategory
              title="Home & Decor"
              desc="Wall Art, Cushions, Tableware"
            />
            <EachCategory
              title="Eco-Friendly Gifts"
              desc="Reusable Products, Organic Items"
            />
            <EachCategory
              title="Gifts by Price Range"
              desc="Under $20, $20 - $50, Luxury Gifts"
            />
            <EachCategory
              title="Popular Gift Types"
              desc="DIY Kits, Gift Hampers"
            />
          </div>
        </section>
      </main>
    </>
  );
}
